import { LitElement, html, css, TemplateResult, CSSResultGroup, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { HomeAssistant, LovelaceCardEditor } from 'custom-card-helpers';

import './tracker-editor';

import type { MailAndPackagesTrackerConfig, RegistryPackage } from './types';
import { CARD_VERSION, IMG_BASE } from './const';
import { findCarrierByRegistryName, CARRIERS } from './carriers';
import { localize } from './localize/localize';
import {
  groupPackagesByStatus,
  formatTimeAgo,
  formatDate,
  truncateTracking,
  STATUS_ORDER,
  STATUS_ICONS,
  STATUS_COLORS,
  StatusGroup,
} from './registry-helpers';

(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: 'mailandpackages-tracker',
  name: 'Mail and Packages Tracker',
  preview: true,
  description: 'Full-page package tracking dashboard with registry management',
});

@customElement('mailandpackages-tracker')
export class MailandpackagesTracker extends LitElement {
  public static async getConfigElement(): Promise<LovelaceCardEditor> {
    return document.createElement('mailandpackages-tracker-editor') as any;
  }

  public static getStubConfig(): object {
    return { name: 'Package Tracker', registry_entity: 'sensor.mail_packages_tracked' };
  }

  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private config!: MailAndPackagesTrackerConfig;
  @state() private expandedPackages: Set<string> = new Set();
  @state() private collapsedSections: Set<string> = new Set();
  @state() private showAddForm = false;
  @state() private newTrackingNumber = '';
  @state() private newCarrier = 'unknown';

  public setConfig(config: MailAndPackagesTrackerConfig): void {
    if (!config) throw new Error(localize('common.invalid_configuration'));
    this.config = {
      name: localize('tracker.title'),
      registry_entity: 'sensor.mail_packages_tracked',
      show_add_package: true,
      show_clear_all: true,
      show_delivered: true,
      show_detected: true,
      collapsed_delivered: true,
      ...config,
    };
    // Reset collapsed state based on config
    const collapsed = new Set<string>();
    if (this.config.collapsed_delivered) {
      collapsed.add('delivered');
    }
    this.collapsedSections = collapsed;
  }

  protected render(): TemplateResult | void {
    const registryEntity = this.config.registry_entity || 'sensor.mail_packages_tracked';
    const stateObj = this.hass.states[registryEntity];

    if (!stateObj) {
      return html`
        <ha-card>
          <div class="tracker-card">
            <div class="empty-state">
              <ha-icon icon="mdi:package-variant-closed-remove"></ha-icon>
              <p>${localize('tracker.registry_not_found')}</p>
              <p class="hint">${localize('tracker.registry_hint')}</p>
            </div>
          </div>
        </ha-card>
      `;
    }

    const packages: RegistryPackage[] = stateObj.attributes.packages || [];
    const activePackages = packages.filter(p => p.status !== 'cleared');
    const grouped = groupPackagesByStatus(activePackages);

    const totalActive = activePackages.filter(p => p.status !== 'delivered').length;
    const totalDelivered = (grouped.get('delivered') || []).length;

    return html`
      <ha-card>
        <div class="tracker-card">
          ${this._renderHeader(totalActive, totalDelivered)}
          ${STATUS_ORDER.map(status => {
            if (status === 'delivered' && !this.config.show_delivered) return nothing;
            if (status === 'detected' && !this.config.show_detected) return nothing;
            const pkgs = grouped.get(status) || [];
            return this._renderStatusSection(status, pkgs);
          })}
          ${activePackages.length === 0 ? html`
            <div class="empty-state">
              <ha-icon icon="mdi:package-variant-closed"></ha-icon>
              <p>${localize('tracker.no_packages')}</p>
            </div>
          ` : nothing}
          ${this.showAddForm ? this._renderAddForm() : nothing}
        </div>
      </ha-card>
    `;
  }

  private _renderHeader(active: number, delivered: number): TemplateResult {
    return html`
      <div class="tracker-header">
        <div class="tracker-title">
          <h2>${this.config.name}</h2>
          <div class="header-badges">
            <span class="badge active">${active} ${localize('tracker.status.active')}</span>
            ${delivered > 0 ? html`<span class="badge delivered">${delivered} ${localize('tracker.status.delivered_count')}</span>` : nothing}
          </div>
        </div>
        <div class="header-actions">
          ${this.config.show_add_package ? html`
            <button class="action-btn primary" @click=${() => { this.showAddForm = !this.showAddForm; }}>
              <ha-icon icon="mdi:plus"></ha-icon> ${localize('tracker.add')}
            </button>
          ` : nothing}
          ${this.config.show_clear_all ? html`
            <button class="action-btn" @click=${this._clearAllDelivered}>
              <ha-icon icon="mdi:broom"></ha-icon> ${localize('tracker.clear_delivered')}
            </button>
          ` : nothing}
        </div>
      </div>
    `;
  }

  private _renderStatusSection(status: StatusGroup, packages: RegistryPackage[]): TemplateResult | typeof nothing {
    if (packages.length === 0) return nothing;
    const collapsed = this.collapsedSections.has(status);

    return html`
      <div class="status-section">
        <div class="status-header" @click=${() => this._toggleSection(status)}>
          <ha-icon icon="${STATUS_ICONS[status]}" style="color: ${STATUS_COLORS[status]}"></ha-icon>
          <span class="status-label">${localize(`tracker.status.${status}`)}</span>
          <span class="status-count" style="background: ${STATUS_COLORS[status]}">${packages.length}</span>
          <ha-icon class="chevron ${collapsed ? '' : 'open'}" icon="mdi:chevron-down"></ha-icon>
        </div>
        ${!collapsed ? html`
          <div class="status-packages">
            ${packages.map(pkg => this._renderPackageRow(pkg))}
          </div>
        ` : nothing}
      </div>
    `;
  }

  private _renderPackageRow(pkg: RegistryPackage): TemplateResult {
    const expanded = this.expandedPackages.has(pkg.tracking_number);
    const carrier = findCarrierByRegistryName(pkg.carrier);
    const carrierIcon = carrier ? `${IMG_BASE}${carrier.icon}` : '';

    return html`
      <div class="package-row ${expanded ? 'expanded' : ''}" @click=${() => this._toggleExpanded(pkg.tracking_number)}>
        <div class="package-summary">
          <div class="package-carrier">
            ${carrierIcon
              ? html`<img class="carrier-icon" src="${carrierIcon}" alt="${pkg.carrier}" />`
              : html`<ha-icon icon="mdi:package-variant" class="carrier-icon-fallback"></ha-icon>`}
          </div>
          <div class="package-info">
            <span class="tracking-number">${expanded ? pkg.tracking_number : truncateTracking(pkg.tracking_number)}</span>
            ${pkg.description ? html`<span class="package-desc">${pkg.description}</span>` : nothing}
          </div>
          <div class="package-meta">
            ${pkg.exception ? html`<ha-icon icon="mdi:alert" class="exception-icon"></ha-icon>` : nothing}
            <span class="package-time">${formatTimeAgo(pkg.last_updated)}</span>
            <ha-icon class="expand-icon ${expanded ? 'open' : ''}" icon="mdi:chevron-down"></ha-icon>
          </div>
        </div>

        ${expanded ? html`
          <div class="package-details" @click=${(e: Event) => e.stopPropagation()}>
            <div class="detail-grid">
              <div class="detail-item">
                <span class="detail-label">${localize('tracker.carrier')}</span>
                <span class="detail-value">
                  ${carrier?.name || pkg.carrier}
                  ${pkg.carrier_confirmed ? html`<span class="confirmed-badge">${localize('tracker.confirmed')}</span>` : nothing}
                </span>
              </div>
              <div class="detail-item">
                <span class="detail-label">${localize('tracker.source.label')}</span>
                <span class="detail-value">${pkg.source}${pkg.source_from ? html` &mdash; ${pkg.source_from}` : nothing}</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">${localize('tracker.first_seen')}</span>
                <span class="detail-value">${formatDate(pkg.first_seen)}</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">${localize('tracker.last_updated')}</span>
                <span class="detail-value">${formatDate(pkg.last_updated)}</span>
              </div>
              ${pkg.exception ? html`
                <div class="detail-item">
                  <span class="detail-label">${localize('tracker.exception')}</span>
                  <span class="detail-value exception-text">${localize('tracker.exception_text')}</span>
                </div>
              ` : nothing}
            </div>
            <div class="package-actions">
              ${carrier?.url ? html`
                <a class="action-btn link" href="${carrier.url}" target="_blank">
                  <ha-icon icon="mdi:open-in-new"></ha-icon> ${localize('tracker.track_on')} ${carrier.name}
                </a>
              ` : nothing}
              ${pkg.status !== 'delivered' ? html`
                <button class="action-btn success" @click=${() => this._markDelivered(pkg.tracking_number)}>
                  <ha-icon icon="mdi:check"></ha-icon> ${localize('tracker.mark_delivered')}
                </button>
              ` : nothing}
              <button class="action-btn danger" @click=${() => this._clearPackage(pkg.tracking_number)}>
                <ha-icon icon="mdi:close"></ha-icon> ${localize('tracker.clear')}
              </button>
            </div>
          </div>
        ` : nothing}
      </div>
    `;
  }

  private _renderAddForm(): TemplateResult {
    const carrierOptions = [{ id: 'unknown', name: localize('tracker.source.unknown') }, ...CARRIERS];
    return html`
      <div class="add-package-form">
        <h3>${localize('tracker.add_package')}</h3>
        <div class="form-row">
          <input
            type="text"
            class="form-input"
            placeholder="${localize('tracker.tracking_placeholder')}"
            .value=${this.newTrackingNumber}
            @input=${(e: InputEvent) => { this.newTrackingNumber = (e.target as HTMLInputElement).value; }}
          />
          <select class="form-select" .value=${this.newCarrier} @change=${(e: Event) => { this.newCarrier = (e.target as HTMLSelectElement).value; }}>
            ${carrierOptions.map(c => html`<option value="${c.id}">${c.name}</option>`)}
          </select>
        </div>
        <div class="form-actions">
          <button class="action-btn primary" @click=${this._addPackage} ?disabled=${!this.newTrackingNumber.trim()}>
            <ha-icon icon="mdi:plus"></ha-icon> ${localize('tracker.add')}
          </button>
          <button class="action-btn" @click=${() => { this.showAddForm = false; this.newTrackingNumber = ''; }}>
            ${localize('tracker.cancel')}
          </button>
        </div>
      </div>
    `;
  }

  private _toggleExpanded(trackingNumber: string): void {
    const expanded = new Set(this.expandedPackages);
    if (expanded.has(trackingNumber)) expanded.delete(trackingNumber);
    else expanded.add(trackingNumber);
    this.expandedPackages = expanded;
  }

  private _toggleSection(status: string): void {
    const collapsed = new Set(this.collapsedSections);
    if (collapsed.has(status)) collapsed.delete(status);
    else collapsed.add(status);
    this.collapsedSections = collapsed;
  }

  private async _markDelivered(trackingNumber: string): Promise<void> {
    await this.hass.callService('mail_and_packages', 'mark_delivered', { tracking_number: trackingNumber });
  }

  private async _clearPackage(trackingNumber: string): Promise<void> {
    await this.hass.callService('mail_and_packages', 'clear_package', { tracking_number: trackingNumber });
    const expanded = new Set(this.expandedPackages);
    expanded.delete(trackingNumber);
    this.expandedPackages = expanded;
  }

  private async _clearAllDelivered(): Promise<void> {
    await this.hass.callService('mail_and_packages', 'clear_all_delivered', {});
  }

  private async _addPackage(): Promise<void> {
    const tn = this.newTrackingNumber.trim();
    if (!tn) return;
    await this.hass.callService('mail_and_packages', 'add_package', {
      tracking_number: tn,
      carrier: this.newCarrier,
    });
    this.newTrackingNumber = '';
    this.showAddForm = false;
  }

  static get styles(): CSSResultGroup {
    return css`
      :host {
        --tracker-radius: var(--ha-card-border-radius, 12px);
        --tracker-bg: var(--card-background-color, var(--ha-card-background, white));
        --tracker-border: var(--divider-color, rgba(0,0,0,.12));
        --tracker-text: var(--primary-text-color);
        --tracker-text-secondary: var(--secondary-text-color);
      }

      .tracker-card {
        padding: 16px;
      }

      /* Header */
      .tracker-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 16px;
        flex-wrap: wrap;
        gap: 12px;
      }
      .tracker-title h2 {
        margin: 0;
        font-size: 1.25rem;
        font-weight: 500;
        color: var(--tracker-text);
      }
      .header-badges {
        display: flex;
        gap: 8px;
        margin-top: 4px;
      }
      .badge {
        font-size: 0.75rem;
        padding: 2px 8px;
        border-radius: 12px;
        font-weight: 500;
      }
      .badge.active {
        background: #ff98001a;
        color: #ff9800;
      }
      .badge.delivered {
        background: #4caf501a;
        color: #4caf50;
      }
      .header-actions {
        display: flex;
        gap: 8px;
      }

      /* Action buttons */
      .action-btn {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        padding: 6px 12px;
        border: 1px solid var(--tracker-border);
        border-radius: 8px;
        background: transparent;
        color: var(--tracker-text-secondary);
        font-size: 0.8rem;
        cursor: pointer;
        text-decoration: none;
        font-family: inherit;
      }
      .action-btn:hover { background: var(--secondary-background-color); }
      .action-btn ha-icon { --mdc-icon-size: 16px; }
      .action-btn.primary {
        background: var(--primary-color);
        color: var(--text-primary-color, white);
        border-color: var(--primary-color);
      }
      .action-btn.primary:hover { opacity: 0.9; }
      .action-btn.success { color: #4caf50; border-color: #4caf50; }
      .action-btn.success:hover { background: #4caf501a; }
      .action-btn.danger { color: #f44336; border-color: #f44336; }
      .action-btn.danger:hover { background: #f443361a; }
      .action-btn.link { color: var(--primary-color); border-color: var(--primary-color); }
      .action-btn.link:hover { background: var(--primary-color); color: var(--text-primary-color, white); }
      .action-btn[disabled] { opacity: 0.5; cursor: not-allowed; }

      /* Status sections */
      .status-section {
        margin-bottom: 8px;
      }
      .status-header {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 12px;
        border-radius: 8px;
        cursor: pointer;
        user-select: none;
      }
      .status-header:hover { background: var(--secondary-background-color); }
      .status-header ha-icon { --mdc-icon-size: 20px; }
      .status-label {
        flex: 1;
        font-size: 0.9rem;
        font-weight: 500;
        color: var(--tracker-text);
      }
      .status-count {
        font-size: 0.75rem;
        padding: 1px 8px;
        border-radius: 10px;
        color: white;
        font-weight: 600;
        min-width: 20px;
        text-align: center;
      }
      .chevron {
        transition: transform 0.2s ease;
        --mdc-icon-size: 20px;
        color: var(--tracker-text-secondary);
      }
      .chevron.open { transform: rotate(180deg); }

      /* Package rows */
      .status-packages {
        padding: 0 4px;
      }
      .package-row {
        border: 1px solid var(--tracker-border);
        border-radius: 8px;
        margin-bottom: 6px;
        cursor: pointer;
        overflow: hidden;
        transition: box-shadow 0.15s ease;
      }
      .package-row:hover {
        box-shadow: 0 1px 4px rgba(0,0,0,.08);
      }
      .package-row.expanded {
        border-color: var(--primary-color);
      }
      .package-summary {
        display: flex;
        align-items: center;
        padding: 10px 12px;
        gap: 10px;
      }
      .package-carrier {
        flex: 0 0 32px;
      }
      .carrier-icon {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        object-fit: cover;
      }
      .carrier-icon-fallback {
        --mdc-icon-size: 28px;
        color: var(--tracker-text-secondary);
      }
      .package-info {
        flex: 1;
        min-width: 0;
        display: flex;
        flex-direction: column;
        gap: 2px;
      }
      .tracking-number {
        font-size: 0.85rem;
        font-weight: 500;
        font-family: 'Roboto Mono', monospace;
        color: var(--tracker-text);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .package-desc {
        font-size: 0.75rem;
        color: var(--tracker-text-secondary);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .package-meta {
        display: flex;
        align-items: center;
        gap: 6px;
        flex-shrink: 0;
      }
      .exception-icon {
        --mdc-icon-size: 18px;
        color: #f44336;
      }
      .package-time {
        font-size: 0.7rem;
        color: var(--tracker-text-secondary);
        white-space: nowrap;
      }
      .expand-icon {
        transition: transform 0.2s ease;
        --mdc-icon-size: 18px;
        color: var(--tracker-text-secondary);
      }
      .expand-icon.open { transform: rotate(180deg); }

      /* Expanded details */
      .package-details {
        padding: 0 12px 12px 54px;
        cursor: default;
      }
      .detail-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8px;
        margin-bottom: 12px;
      }
      @media (max-width: 500px) {
        .detail-grid { grid-template-columns: 1fr; }
      }
      .detail-item {
        display: flex;
        flex-direction: column;
        gap: 1px;
      }
      .detail-label {
        font-size: 0.7rem;
        color: var(--tracker-text-secondary);
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
      .detail-value {
        font-size: 0.8rem;
        color: var(--tracker-text);
      }
      .confirmed-badge {
        display: inline-block;
        font-size: 0.65rem;
        padding: 1px 6px;
        border-radius: 4px;
        background: #4caf501a;
        color: #4caf50;
        margin-left: 6px;
        font-weight: 500;
      }
      .exception-text { color: #f44336; }
      .package-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }

      /* Add package form */
      .add-package-form {
        border: 1px solid var(--tracker-border);
        border-radius: 8px;
        padding: 16px;
        margin-top: 12px;
      }
      .add-package-form h3 {
        margin: 0 0 12px 0;
        font-size: 0.95rem;
        font-weight: 500;
      }
      .form-row {
        display: flex;
        gap: 8px;
        margin-bottom: 12px;
      }
      .form-input, .form-select {
        padding: 8px 12px;
        border: 1px solid var(--tracker-border);
        border-radius: 8px;
        background: transparent;
        color: var(--tracker-text);
        font-size: 0.85rem;
        font-family: inherit;
      }
      .form-input {
        flex: 1;
        min-width: 0;
      }
      .form-select {
        flex: 0 0 auto;
        min-width: 120px;
      }
      .form-actions {
        display: flex;
        gap: 8px;
      }

      /* Empty state */
      .empty-state {
        text-align: center;
        padding: 32px 16px;
        color: var(--tracker-text-secondary);
      }
      .empty-state ha-icon {
        --mdc-icon-size: 48px;
        margin-bottom: 8px;
        opacity: 0.5;
      }
      .empty-state p { margin: 4px 0; }
      .empty-state .hint { font-size: 0.8rem; opacity: 0.7; }
    `;
  }
}
