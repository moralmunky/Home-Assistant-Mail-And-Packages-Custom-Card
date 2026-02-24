import { LitElement, html, css, TemplateResult, CSSResultGroup } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { HomeAssistant, fireEvent, LovelaceCardEditor } from 'custom-card-helpers';

import { MailAndPackagesCardConfig } from './types';
import { CARD_VERSION } from './const';
import { CARRIERS } from './carriers';
import { localize } from './localize/localize';

const options: Record<string, any> = {
  required: {
    icon: 'tune',
    name: 'Required',
    secondary: 'Required options for this card to function',
    show: true,
  },
  builtin_sensors: {
    icon: 'package-variant',
    name: 'Carrier Sensors',
    secondary: 'Toggle carrier package count sensors',
    show: false,
  },
  optional_sensors: {
    icon: 'message-text',
    name: 'Optional Entities',
    secondary: 'Configure optional entities',
    show: false,
  },
  actions: {
    icon: 'gesture-tap-hold',
    name: 'Actions',
    secondary: 'Perform actions based on tapping/clicking',
    show: false,
    options: {
      tap: { icon: 'gesture-tap', name: 'Tap', secondary: 'Set the action to perform on tap', show: false },
      hold: { icon: 'gesture-tap-hold', name: 'Hold', secondary: 'Set the action to perform on hold', show: false },
      double_tap: { icon: 'gesture-double-tap', name: 'Double Tap', secondary: 'Set the action to perform on double tap', show: false },
    },
  },
};

function cfgBool(config: MailAndPackagesCardConfig | undefined, key: string): boolean {
  if (!config) return false;
  if (config[key] !== undefined) return !!config[key];
  // Legacy uppercase compat
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

@customElement('mailandpackages-card-editor')
export class MailandpackagesCardEditor extends LitElement implements LovelaceCardEditor {
  @property({ attribute: false }) public hass?: HomeAssistant;
  @state() private _config?: MailAndPackagesCardConfig;
  @state() private _toggle?: boolean;
  @state() private _helpers?: any;
  private _initialized = false;

  public setConfig(config: MailAndPackagesCardConfig): void {
    this._config = config;
    this.loadCardHelpers();
  }

  protected shouldUpdate(): boolean {
    if (!this._initialized) {
      this._initialize();
    }
    return true;
  }

  get _name(): string { return this._config?.name || ''; }
  get _entity_usps_mail(): boolean { return this._config?.entity_usps_mail || false; }
  get _entity_packages_delivered(): boolean { return this._config?.entity_packages_delivered || false; }
  get _entity_packages_in_transit(): boolean { return this._config?.entity_packages_in_transit || false; }
  get _show_usps_camera(): boolean { return this._config?.show_usps_camera || false; }
  get _show_amazon_camera(): boolean { return this._config?.show_amazon_camera || false; }
  get _entity_delivery_message(): string { return this._config?.entity_delivery_message || ''; }
  get _amazon_url(): string { return this._config?.amazon_url || ''; }
  get _entity_amazon_packages(): boolean { return this._config?.entity_amazon_packages || false; }
  get _entity_amazon_packages_delivered(): boolean { return this._config?.entity_amazon_packages_delivered || false; }
  get _entity_amazon_exception(): boolean { return this._config?.entity_amazon_exception || false; }
  get _entity_amazon_hub_packages(): boolean { return this._config?.entity_amazon_hub_packages || false; }
  get _show_warning(): boolean { return this._config?.show_warning || false; }
  get _show_error(): boolean { return this._config?.show_error || false; }
  get _show_registry_totals(): boolean { return this._config?.show_registry_totals || false; }

  private _carrierToggle(configKey: string, label: string): TemplateResult {
    const checked = cfgBool(this._config, configKey);
    return html`
      <ha-formfield .label=${`Toggle ${label} ${checked ? 'off' : 'on'}`}>
        <ha-switch
          .checked=${checked}
          .configValue=${configKey}
          @change=${this._valueChanged}
        ></ha-switch>
      </ha-formfield>
    `;
  }

  protected render(): TemplateResult | void {
    if (!this.hass || !this._helpers) return html``;

    this._helpers.importMoreInfoControl('climate');

    const entities = Object.keys(this.hass.states).filter(eid => eid.startsWith('sensor.mail_'));

    return html`
      <div class="card-config">
        <h2>${localize('common.name')} (v${CARD_VERSION})</h2>
        <p>Companion card for the Mail and Packages integration.</p>

        <!-- Required -->
        <div class="option" @click=${this._toggleOption} .option=${'required'}>
          <div class="row">
            <ha-icon .icon=${`mdi:${options.required.icon}`}></ha-icon>
            <div class="title">${options.required.name}</div>
          </div>
          <div class="secondary">${options.required.secondary}</div>
        </div>
        ${options.required.show ? html`
          <div class="values">
            <paper-input label="Name (Required)" .value=${this._name} .configValue=${'name'} @value-changed=${this._valueChanged}></paper-input>
          </div>
        ` : ''}

        <!-- Carrier Sensors -->
        <div class="option" @click=${this._toggleOption} .option=${'builtin_sensors'}>
          <div class="row">
            <ha-icon .icon=${`mdi:${options.builtin_sensors.icon}`}></ha-icon>
            <div class="title">${options.builtin_sensors.name}</div>
          </div>
          <div class="secondary">${options.builtin_sensors.secondary}</div>
        </div>
        ${options.builtin_sensors.show ? html`
          <div class="values">
            <!-- Totals -->
            ${this._carrierToggle('entity_packages_delivered', 'Total Packages Delivered')}
            ${this._carrierToggle('entity_packages_in_transit', 'Total Packages In-Transit')}

            <!-- USPS special -->
            <h3>USPS</h3>
            ${this._carrierToggle('entity_usps_mail', 'USPS Mail')}
            ${this._carrierToggle('show_usps_camera', 'USPS Camera')}
            ${this._carrierToggle('entity_usps_packages', 'USPS Packages')}
            ${this._carrierToggle('entity_usps_exception', 'USPS Exception')}

            <!-- Standard carriers from registry -->
            ${CARRIERS.filter(c => c.id !== 'usps').map(c => html`
              <h3>${c.name}</h3>
              ${this._carrierToggle(c.configKey, `${c.name} Packages`)}
              ${c.exceptionConfigKey ? this._carrierToggle(c.exceptionConfigKey, `${c.name} Exception`) : ''}
            `)}

            <!-- Amazon -->
            <h3>Amazon</h3>
            <paper-input label="Amazon Link URL" .value=${this._amazon_url} .configValue=${'amazon_url'} @value-changed=${this._valueChanged}></paper-input>
            ${this._carrierToggle('entity_amazon_packages', 'Amazon Packages')}
            ${this._carrierToggle('entity_amazon_packages_delivered', 'Amazon Packages Delivered')}
            ${this._carrierToggle('entity_amazon_exception', 'Amazon Exception')}
            ${this._carrierToggle('entity_amazon_hub_packages', 'Amazon Hub Packages')}
            ${this._carrierToggle('show_amazon_camera', 'Amazon Camera')}

            <!-- Registry -->
            <h3>Package Registry</h3>
            ${this._carrierToggle('show_registry_totals', 'Registry Totals Overlay')}

            <br />
            ${this._carrierToggle('show_warning', 'Warning')}
            ${this._carrierToggle('show_error', 'Error')}
          </div>
        ` : ''}

        <!-- Optional Entities -->
        <div class="option" @click=${this._toggleOption} .option=${'optional_sensors'}>
          <div class="row">
            <ha-icon .icon=${`mdi:${options.optional_sensors.icon}`}></ha-icon>
            <div class="title">${options.optional_sensors.name}</div>
          </div>
          <div class="secondary">${options.optional_sensors.secondary}</div>
        </div>
        ${options.optional_sensors.show ? html`
          <div class="values">
            <paper-dropdown-menu label="Delivery Summary" @value-changed=${this._valueChanged} .configValue=${'entity_delivery_message'}>
              <paper-listbox slot="dropdown-content" .selected=${entities.indexOf(this._entity_delivery_message)}>
                ${entities.map(e => html`<paper-item>${e}</paper-item>`)}
              </paper-listbox>
            </paper-dropdown-menu>
          </div>
        ` : ''}

        <!-- Actions -->
        <div class="option" @click=${this._toggleOption} .option=${'actions'}>
          <div class="row">
            <ha-icon .icon=${`mdi:${options.actions.icon}`}></ha-icon>
            <div class="title">${options.actions.name}</div>
          </div>
          <div class="secondary">${options.actions.secondary}</div>
        </div>
        ${options.actions.show ? html`
          <div class="values">
            ${['tap', 'hold', 'double_tap'].map(action => html`
              <div class="option" @click=${this._toggleAction} .option=${action}>
                <div class="row">
                  <ha-icon .icon=${`mdi:${options.actions.options[action].icon}`}></ha-icon>
                  <div class="title">${options.actions.options[action].name}</div>
                </div>
                <div class="secondary">${options.actions.options[action].secondary}</div>
              </div>
              ${options.actions.options[action].show ? html`<div class="values"><paper-item>Action Editors Coming Soon</paper-item></div>` : ''}
            `)}
          </div>
        ` : ''}
      </div>
    `;
  }

  private _initialize(): void {
    if (this.hass === undefined) return;
    if (this._config === undefined) return;
    if (this._helpers === undefined) return;
    this._initialized = true;
  }

  private async loadCardHelpers(): Promise<void> {
    this._helpers = await (window as any).loadCardHelpers();
  }

  private _toggleAction(ev: any): void { this._toggleThing(ev, options.actions.options); }
  private _toggleOption(ev: any): void { this._toggleThing(ev, options); }

  private _toggleThing(ev: any, optionList: any): void {
    const show = !optionList[ev.target.option].show;
    for (const [key] of Object.entries(optionList)) {
      optionList[key].show = false;
    }
    optionList[ev.target.option].show = show;
    this._toggle = !this._toggle;
  }

  private _valueChanged(ev: any): void {
    if (!this._config || !this.hass) return;
    const target = ev.target;
    if (this[`_${target.configValue}`] === target.value) return;
    if (target.configValue) {
      if (target.value === '') {
        const updated = { ...this._config };
        delete updated[target.configValue];
        this._config = updated;
      } else {
        this._config = {
          ...this._config,
          [target.configValue]: target.checked !== undefined ? target.checked : target.value,
        };
      }
    }
    fireEvent(this, 'config-changed', { config: this._config });
  }

  static get styles(): CSSResultGroup {
    return css`
      .option { padding: 4px 0; cursor: pointer; }
      .row { display: flex; margin-bottom: -14px; pointer-events: none; }
      .title { padding-left: 16px; margin-top: -6px; pointer-events: none; }
      .secondary { padding-left: 40px; color: var(--secondary-text-color); pointer-events: none; }
      .values { padding-left: 16px; background: var(--secondary-background-color); display: grid; }
      ha-formfield { padding-bottom: 8px; margin-bottom: 10px; }
    `;
  }
}
