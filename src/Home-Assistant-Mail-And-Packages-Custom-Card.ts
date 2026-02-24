import { LitElement, html, css, TemplateResult, CSSResultGroup, PropertyValues, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import {
  HomeAssistant,
  hasConfigOrEntityChanged,
  hasAction,
  ActionHandlerEvent,
  handleAction,
  LovelaceCardEditor,
  getLovelace,
} from 'custom-card-helpers';

import './editor';
import './tracker-card';

import type { MailAndPackagesCardConfig } from './types';
import { actionHandler } from './action-handler-directive';
import { CARD_VERSION, IMG_BASE } from './const';
import { CARRIERS } from './carriers';
import { localize } from './localize/localize';

console.info(
  `%c  MAILANDPACKAGES-CARD \n%c  ${localize('common.version')} ${CARD_VERSION}    `,
  'color: orange; font-weight: bold; background: black',
  'color: white; font-weight: bold; background: dimgray',
);

(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: 'mailandpackages-card',
  name: 'Mail and Packages',
  preview: true,
  description: 'Summary card showing mail and package counts by carrier',
});

/** Resolve a config key, falling back to legacy uppercase keys for backward compat. */
function cfgFlag(config: MailAndPackagesCardConfig, key: string): boolean {
  if (config[key] !== undefined) return !!config[key];
  const legacyMap: Record<string, string> = {
    entity_usps_packages: 'entity_USPS_packages',
    entity_usps_exception: 'entity_USPS_exception',
    entity_ups_packages: 'entity_UPS_packages',
    entity_ups_exception: 'entity_UPS_exception',
    entity_dhl_packages: 'entity_DHL_packages',
  };
  const legacy = legacyMap[key];
  if (legacy && config[legacy] !== undefined) return !!config[legacy];
  return false;
}

function entityState(hass: HomeAssistant, entityId: string): string | undefined {
  const s = hass.states[entityId];
  return s ? s.state : undefined;
}

function entityAttr(hass: HomeAssistant, entityId: string, attr: string): any {
  const s = hass.states[entityId];
  return s?.attributes?.[attr];
}

@customElement('mailandpackages-card')
export class MailandpackagesCard extends LitElement {
  public static async getConfigElement(): Promise<LovelaceCardEditor> {
    return document.createElement('mailandpackages-card-editor') as any;
  }

  public static getStubConfig(): object {
    return { name: 'Mail and Packages' };
  }

  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private config!: MailAndPackagesCardConfig;

  public setConfig(config: MailAndPackagesCardConfig): void {
    if (!config) {
      throw new Error(localize('common.invalid_configuration'));
    }
    if (config.test_gui) {
      getLovelace().setEditMode(true);
    }
    this.config = { title: 'Mail and Packages', ...config };
  }

  protected shouldUpdate(changedProps: PropertyValues): boolean {
    if (!this.config) return false;
    return hasConfigOrEntityChanged(this, changedProps, false);
  }

  protected render(): TemplateResult | void {
    if (this.config.show_warning) {
      return this._showWarning(localize('common.show_warning'));
    }

    const mailUpdated = entityState(this.hass, 'sensor.mail_updated');
    if (!mailUpdated) {
      return this._showError(localize('common.show_error'));
    }

    const deliveryMessage = this.config.entity_delivery_message
      ? entityState(this.hass, this.config.entity_delivery_message) || ''
      : '';

    return html`
      <ha-card
        tabindex="0"
        .label=${'Mail and Packages'}
        class="mail-and-packages"
      >
        <div class="header">
          <h1 class="card-header">${this.config.name}</h1>
        </div>

        <div class="deliveryDetails">
          ${this.config.show_usps_camera ? this._renderCamera('camera.mail_usps_camera') : nothing}
          <div class="deliveryTotals">
            ${this.config.entity_usps_mail
              ? this._renderBadge('square_mail.png', 'sensor.mail_usps_mail', 'https://informeddelivery.usps.com/')
              : nothing}
            ${this.config.entity_packages_in_transit
              ? this._renderBadge('square_in-transit.png', 'sensor.mail_packages_in_transit')
              : nothing}
            ${this.config.entity_packages_delivered
              ? this._renderBadge('square_delivery.png', 'sensor.mail_packages_delivered')
              : nothing}
          </div>
        </div>

        ${deliveryMessage ? html`<p class="summary">${deliveryMessage}</p>` : nothing}

        <div class="packagesTotals">
          ${CARRIERS.map(c => {
            if (!cfgFlag(this.config, c.configKey)) return nothing;
            return this._renderBadge(c.icon, `sensor.mail_${c.sensorSuffix}`, c.url, c.name);
          })}
          ${this._renderExceptions()}
        </div>

        ${this.config.show_registry_totals ? this._renderRegistryTotals() : nothing}

        ${this.config.show_amazon_camera ? this._renderCamera('camera.mail_amazon_delivery_camera') : nothing}

        <div class="amazon">
          ${this._renderAmazon()}
        </div>

        <div class="footer">
          <span class="usps_update">Last Check: ${mailUpdated}</span>
          <span class="version">v${CARD_VERSION}</span>
        </div>
      </ha-card>
    `;
  }

  private _renderBadge(icon: string, sensorId: string, url?: string, name?: string): TemplateResult | typeof nothing {
    const val = entityState(this.hass, sensorId);
    if (val === undefined) return nothing;
    const img = html`<img src="${IMG_BASE}${icon}" />`;
    return html`
      <div class="status">
        <div class="statusDetails">
          ${url ? html`<a href="${url}" title="Open ${name || ''} website" target="_blank">${img}</a>` : img}
          <div class="statusCount">${val}</div>
        </div>
      </div>
    `;
  }

  private _renderExceptions(): TemplateResult {
    const parts: TemplateResult[] = [];
    const pairs: [string, string, string][] = [
      ['entity_usps_exception', 'sensor.mail_usps_exception', 'square_usps_exception.png'],
      ['entity_ups_exception', 'sensor.mail_ups_exception', 'square_ups_exception.png'],
    ];
    for (const [key, sensor, icon] of pairs) {
      if (cfgFlag(this.config, key)) {
        const val = entityState(this.hass, sensor);
        if (val !== undefined) {
          parts.push(html`
            <div class="status"><div class="statusDetails">
              <img src="${IMG_BASE}${icon}" />
              <div class="statusCount">${val}</div>
            </div></div>
          `);
        }
      }
    }
    return html`${parts}`;
  }

  private _renderAmazon(): TemplateResult | typeof nothing {
    const parts: TemplateResult[] = [];
    const url = this.config.amazon_url || '';
    const items: [boolean | undefined, string, string, string | undefined][] = [
      [this.config.entity_amazon_packages, 'sensor.mail_amazon_packages', 'square_amazon.png', url],
      [this.config.entity_amazon_packages_delivered, 'sensor.mail_amazon_packages_delivered', 'square_delivery.png', undefined],
      [this.config.entity_amazon_exception, 'sensor.mail_amazon_exception', 'square_amazon_exception.png', url],
      [this.config.entity_amazon_hub_packages, 'sensor.mail_amazon_hub_packages', 'square_amazon-hub.png', undefined],
    ];
    for (const [enabled, sensor, icon, link] of items) {
      if (!enabled) continue;
      const val = entityState(this.hass, sensor);
      if (val === undefined) continue;
      const img = html`<img src="${IMG_BASE}${icon}" />`;
      parts.push(html`
        <div class="status"><div class="statusDetails">
          ${link ? html`<a href="${link}" title="Open Amazon" target="_blank">${img}</a>` : img}
          <div class="statusCount">${val}</div>
        </div></div>
      `);
    }
    return parts.length ? html`${parts}` : nothing;
  }

  private _renderRegistryTotals(): TemplateResult | typeof nothing {
    const tracked = entityState(this.hass, 'sensor.mail_packages_tracked');
    const inTransit = entityState(this.hass, 'sensor.mail_packages_in_transit_registry');
    const delivered = entityState(this.hass, 'sensor.mail_packages_delivered_registry');
    if (tracked === undefined) return nothing;
    return html`
      <div class="registryTotals">
        <div class="registryBadge">
          <ha-icon icon="mdi:package-variant"></ha-icon>
          <span class="registryCount">${tracked}</span>
          <span class="registryLabel">Tracked</span>
        </div>
        ${inTransit !== undefined ? html`
          <div class="registryBadge">
            <ha-icon icon="mdi:truck-fast" style="color: #ff9800"></ha-icon>
            <span class="registryCount">${inTransit}</span>
            <span class="registryLabel">In Transit</span>
          </div>
        ` : nothing}
        ${delivered !== undefined ? html`
          <div class="registryBadge">
            <ha-icon icon="mdi:package-variant-closed-check" style="color: #4caf50"></ha-icon>
            <span class="registryCount">${delivered}</span>
            <span class="registryLabel">Delivered</span>
          </div>
        ` : nothing}
      </div>
    `;
  }

  private _renderCamera(entityId: string): TemplateResult | typeof nothing {
    const url = entityAttr(this.hass, entityId, 'entity_picture');
    if (!url) return nothing;
    return html`
      <img
        @action=${this._handleAction}
        .actionHandler=${actionHandler({
          hasHold: hasAction(this.config.hold_action),
          hasDoubleClick: hasAction(this.config.double_tap_action),
        })}
        class="MailImg clear"
        src="${url}&interval=30"
      />
    `;
  }

  private _handleAction(ev: ActionHandlerEvent): void {
    if (this.hass && this.config && ev.detail.action) {
      handleAction(this, this.hass, this.config, ev.detail.action);
    }
  }

  private _showWarning(warning: string): TemplateResult {
    return html`<hui-warning>${warning}</hui-warning>`;
  }

  private _showError(error: string): TemplateResult {
    const errorCard = document.createElement('hui-error-card') as any;
    errorCard.setConfig({ type: 'error', error, origConfig: this.config });
    return html`${errorCard}`;
  }

  static get styles(): CSSResultGroup {
    return css`
      .mail-and-packages {
        margin: auto;
        padding: 0;
        position: relative;
      }
      .mail-and-packages .clear { clear: both; }
      .mail-and-packages a { color: var(--secondary-text-color); }
      .mail-and-packages .summary { padding: 1rem 1rem 0 1rem; }
      .mail-and-packages .deliveryDetails {
        width: 100%;
        height: auto;
        position: relative;
      }
      .mail-and-packages .packagesTotals,
      .mail-and-packages .amazon,
      .mail-and-packages .deliveryTotals {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-evenly;
        align-items: flex-start;
      }
      .mail-and-packages .packagesTotals { margin-bottom: 1rem; }
      .mail-and-packages .deliveryTotals {
        padding: 0.75rem 0;
      }
      .mail-and-packages .status {
        box-sizing: border-box;
        flex: 0 0 auto;
        margin: 0.5rem;
        font-size: 1.5rem;
        text-align: center;
      }
      .mail-and-packages .status .statusDetails {
        position: relative;
        display: inline-block;
      }
      .mail-and-packages .packagesTotals .statusCount,
      .mail-and-packages .amazon .statusCount,
      .mail-and-packages .deliveryTotals .statusCount {
        background-color: var(--secondary-background-color);
        border-radius: 50%;
        font-size: 0.75rem;
        font-weight: 600;
        position: absolute;
        bottom: -0.25rem;
        right: -0.5rem;
        line-height: 1.25rem;
        width: 1.25rem;
        height: 1.25rem;
      }
      .mail-and-packages .packagesTotals img,
      .mail-and-packages .amazon img,
      .mail-and-packages .deliveryTotals img {
        height: 2.5rem;
        width: 2.5rem;
        object-fit: contain;
        border-radius: 50%;
        display: block;
      }
      .mail-and-packages .registryTotals {
        display: flex;
        justify-content: space-evenly;
        padding: 0.5rem 1rem;
        border-top: 1px solid var(--divider-color, rgba(0,0,0,.12));
        margin: 0 1rem;
      }
      .mail-and-packages .registryBadge {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2px;
      }
      .mail-and-packages .registryBadge ha-icon {
        --mdc-icon-size: 24px;
        color: var(--primary-text-color);
      }
      .mail-and-packages .registryCount {
        font-size: 1.1rem;
        font-weight: 600;
      }
      .mail-and-packages .registryLabel {
        font-size: 0.65rem;
        color: var(--secondary-text-color);
        text-transform: uppercase;
      }
      .mail-and-packages .MailImg {
        position: relative;
        width: 100%;
        height: auto;
        margin-top: 2px;
      }
      .mail-and-packages .header,
      .mail-and-packages .footer {
        padding: 1rem;
        margin-bottom: 2px;
      }
      .mail-and-packages .header { display: none; }
      .mail-and-packages .footer {
        padding: 1rem 1rem 0 1rem;
        margin-bottom: 0;
      }
      .mail-and-packages .usps_update,
      .mail-and-packages .version { font-size: 0.7rem; }
      .mail-and-packages .version { float: right; }
    `;
  }
}
