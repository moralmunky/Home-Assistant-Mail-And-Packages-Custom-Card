import { LitElement, html, css, TemplateResult, CSSResultGroup } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { HomeAssistant, fireEvent, LovelaceCardEditor } from 'custom-card-helpers';

import type { MailAndPackagesTrackerConfig } from './types';

@customElement('mailandpackages-tracker-editor')
export class MailandpackagesTrackerEditor extends LitElement implements LovelaceCardEditor {
  @property({ attribute: false }) public hass?: HomeAssistant;
  @state() private _config?: MailAndPackagesTrackerConfig;
  @state() private _helpers?: any;
  private _initialized = false;

  public setConfig(config: MailAndPackagesTrackerConfig): void {
    this._config = config;
    this._loadHelpers();
  }

  protected shouldUpdate(): boolean {
    if (!this._initialized && this.hass && this._config && this._helpers) {
      this._initialized = true;
    }
    return true;
  }

  protected render(): TemplateResult | void {
    if (!this.hass || !this._config) return html``;

    const registryEntities = Object.keys(this.hass.states).filter(
      eid => eid.startsWith('sensor.mail_packages_') || eid.includes('registry'),
    );

    return html`
      <div class="card-config">
        <h2>Package Tracker</h2>
        <p>Full-page package tracking dashboard.</p>

        <div class="section">
          <paper-input
            label="Card Name"
            .value=${this._config.name || ''}
            .configValue=${'name'}
            @value-changed=${this._valueChanged}
          ></paper-input>

          <paper-dropdown-menu
            label="Registry Entity"
            @value-changed=${this._valueChanged}
            .configValue=${'registry_entity'}
          >
            <paper-listbox
              slot="dropdown-content"
              .selected=${registryEntities.indexOf(this._config.registry_entity || 'sensor.mail_packages_tracked')}
            >
              ${registryEntities.map(e => html`<paper-item>${e}</paper-item>`)}
            </paper-listbox>
          </paper-dropdown-menu>
        </div>

        <div class="section">
          <h3>Display Options</h3>

          <ha-formfield .label=${'Show delivered packages section'}>
            <ha-switch
              .checked=${this._config.show_delivered !== false}
              .configValue=${'show_delivered'}
              @change=${this._valueChanged}
            ></ha-switch>
          </ha-formfield>

          <ha-formfield .label=${'Show detected packages section'}>
            <ha-switch
              .checked=${this._config.show_detected !== false}
              .configValue=${'show_detected'}
              @change=${this._valueChanged}
            ></ha-switch>
          </ha-formfield>

          <ha-formfield .label=${'Collapse delivered section by default'}>
            <ha-switch
              .checked=${this._config.collapsed_delivered !== false}
              .configValue=${'collapsed_delivered'}
              @change=${this._valueChanged}
            ></ha-switch>
          </ha-formfield>
        </div>

        <div class="section">
          <h3>Actions</h3>

          <ha-formfield .label=${'Show Add Package button'}>
            <ha-switch
              .checked=${this._config.show_add_package !== false}
              .configValue=${'show_add_package'}
              @change=${this._valueChanged}
            ></ha-switch>
          </ha-formfield>

          <ha-formfield .label=${'Show Clear All Delivered button'}>
            <ha-switch
              .checked=${this._config.show_clear_all !== false}
              .configValue=${'show_clear_all'}
              @change=${this._valueChanged}
            ></ha-switch>
          </ha-formfield>
        </div>
      </div>
    `;
  }

  private async _loadHelpers(): Promise<void> {
    this._helpers = await (window as any).loadCardHelpers();
    if (this._helpers) {
      this._helpers.importMoreInfoControl('climate');
    }
  }

  private _valueChanged(ev: any): void {
    if (!this._config || !this.hass) return;
    const target = ev.target;
    if (target.configValue) {
      const value = target.checked !== undefined ? target.checked : target.value;
      if (value === '' || value === undefined) {
        const updated = { ...this._config };
        delete updated[target.configValue];
        this._config = updated;
      } else {
        this._config = { ...this._config, [target.configValue]: value };
      }
    }
    fireEvent(this, 'config-changed', { config: this._config });
  }

  static get styles(): CSSResultGroup {
    return css`
      .card-config {
        padding: 8px;
      }
      .section {
        margin-bottom: 16px;
      }
      h2 {
        margin: 0 0 4px 0;
        font-size: 1.1rem;
      }
      h3 {
        margin: 12px 0 8px 0;
        font-size: 0.95rem;
        color: var(--secondary-text-color);
      }
      p {
        margin: 0 0 12px 0;
        color: var(--secondary-text-color);
        font-size: 0.85rem;
      }
      ha-formfield {
        display: block;
        padding-bottom: 8px;
      }
    `;
  }
}
