/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/camelcase */
import {
  LitElement,
  html,
  customElement,
  property,
  TemplateResult,
  CSSResult,
  css,
  internalProperty,
} from 'lit-element';
import { HomeAssistant, fireEvent, LovelaceCardEditor, ActionConfig } from 'custom-card-helpers';

import { MailAndPackagesCardConfig } from './types';
import { CARD_VERSION } from './const';
import { localize } from './localize/localize';

const options = {
  required: {
    icon: 'tune',
    name: 'Required',
    secondary: 'Required options for this card to function',
    show: true,
  },
  builtin_sensors: {
    icon: 'palette',
    name: 'Built-in Entities',
    secondary: 'Configure the built-in entities',
    show: false,
  },
  optional_sensors: {
    icon: 'palette',
    name: 'Optional Entities',
    secondary: 'Configure the optional entities',
    show: false,
  }
};

@customElement('mailandpackages-card-editor')
export class MailandpackagesCardEditor extends LitElement implements LovelaceCardEditor {
  @property({ attribute: false }) public hass?: HomeAssistant;
  @internalProperty() private _config?: MailAndPackagesCardConfig;
  @internalProperty() private _toggle?: boolean;
  @internalProperty() private _helpers?: any;
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

  get _name(): string {
    return this._config?.name || '';
  }

  get _entity_usps_mail(): boolean {
    return this._config?.entity_usps_mail || false;
  }

  get _entity_packages_delivered(): boolean {
    return this._config?.entity_packages_delivered || false;
  }

  get _entity_packages_in_transit(): boolean {
    return this._config?.entity_packages_in_transit || false;
  }

  get _show_amazon_camera(): boolean {
    return this._config?.show_amazon_camera || false;
  }

  get _entity_fedex_packages(): boolean {
    return this._config?.entity_fedex_packages || false;
  }

  get _entity_UPS_packages(): boolean {
    return this._config?.entity_UPS_packages || false;
  }

  get _entity_USPS_packages(): boolean {
    return this._config?.entity_USPS_packages || false;
  }

  get _entity_USPS_exceptions(): boolean {
    return this._config?.entity_USPS_exceptions || false;
  }

  get _entity_canada_post_packages(): boolean {
    return this._config?.entity_canada_post_packages || false;
  }

  get _entity_DHL_packages(): boolean {
    return this._config?.entity_DHL_packages || false;
  }

  get _entity_hermes_packages(): boolean {
    return this._config?.entity_hermes_packages || false;
  }

  get _entity_royal_mail_packages(): boolean {
    return this._config?.entity_royal_mail_packages || false;
  }

  get _entity_delivery_message(): string {
    return this._config?.entity_delivery_message || '';
  }

  get _show_usps_camera(): boolean {
    return this._config?.show_usps_camera || false;
  }

  get _entity_amazon_packages(): boolean {
    return this._config?.entity_amazon_packages || false;
  }

  get _entity_amazon_packages_delivered(): boolean {
    return this._config?.entity_amazon_packages_delivered || false;
  }

  get _entity_amazon_hub_packages(): boolean {
    return this._config?.entity_amazon_hub_packages || false;
  }

  get _amazon_url(): string {
    return this._config?.amazon_url || '';
  }

  get _show_warning(): boolean {
    return this._config?.show_warning || false;
  }

  get _show_error(): boolean {
    return this._config?.show_error || false;
  }

  get _tap_action(): ActionConfig {
    return this._config?.tap_action || { action: 'more-info' };
  }

  get _hold_action(): ActionConfig {
    return this._config?.hold_action || { action: 'none' };
  }

  get _double_tap_action(): ActionConfig {
    return this._config?.double_tap_action || { action: 'none' };
  }

  protected render(): TemplateResult | void {
    if (!this.hass || !this._helpers) {
      return html``;
    }

    // The climate more-info has ha-switch and paper-dropdown-menu elements that are lazy loaded unless explicitly done here
    this._helpers.importMoreInfoControl('climate');

    // You can restrict on domain type
    const entities = Object.keys(this.hass.states).filter(eid => eid.startsWith('sensor.mail_'));
    //const entities_cameras = Object.keys(this.hass.states).filter(eid => eid.substr(0, eid.indexOf('.')) === 'camera');

    return html`
      <div class="card-config">
      <h2>${localize('common.name')} (v${CARD_VERSION})</h2>
      <p>A custom companion card for the ${localize('common.name')} custom integration.</p>
        <div class="option" @click=${this._toggleOption} .option=${'required'}>
          <div class="row">
            <ha-icon .icon=${`mdi:${options.required.icon}`}></ha-icon>
            <div class="title">${options.required.name}</div>
          </div>
          <div class="secondary">${options.required.secondary}</div>
        </div>
        ${options.required.show
          ? html`
              <div class="values">
              <paper-input
                  label="Name (Required)"
                  .value=${this._name}
                  .configValue=${'name'}
                  @value-changed=${this._valueChanged}
                ></paper-input>
              </div>
            `
      : ''}

        <div class="option" @click=${this._toggleOption} .option=${'builtin_sensors'}>
          <div class="row">
            <ha-icon .icon=${`mdi:${options.builtin_sensors.icon}`}></ha-icon>
            <div class="title">${options.builtin_sensors.name}</div>
          </div>
          <div class="secondary">${options.builtin_sensors.secondary}</div>
        </div>
        ${options.builtin_sensors.show
          ? html`
              <div class="values">

                <ha-formfield .label=${`Toggle Total Packages Delivered ${this._entity_packages_delivered ? 'off' : 'on'}`}>
                  <ha-switch
                    .checked=${this._entity_packages_delivered !== false}
                    .configValue=${'entity_packages_delivered'}
                    @change=${this._valueChanged}
                  ></ha-switch>
                </ha-formfield>

                <ha-formfield .label=${`Toggle Total Packages In-Transit ${this._entity_packages_in_transit ? 'off' : 'on'}`}>
                  <ha-switch
                    .checked=${this._entity_packages_in_transit !== false}
                    .configValue=${'entity_packages_in_transit'}
                    @change=${this._valueChanged}
                  ></ha-switch>
                </ha-formfield>

                <ha-formfield .label=${`Toggle FedEx Packages ${this._entity_fedex_packages ? 'off' : 'on'}`}>
                  <ha-switch
                    .checked=${this._entity_fedex_packages !== false}
                    .configValue=${'entity_fedex_packages'}
                    @change=${this._valueChanged}
                  ></ha-switch>
                </ha-formfield>

                <ha-formfield .label=${`Toggle UPS Packages ${this._entity_UPS_packages ? 'off' : 'on'}`}>
                  <ha-switch
                    .checked=${this._entity_UPS_packages !== false}
                    .configValue=${'entity_UPS_packages'}
                    @change=${this._valueChanged}
                  ></ha-switch>
                </ha-formfield>

                <ha-formfield .label=${`Toggle USPS Packages ${this._entity_USPS_packages ? 'off' : 'on'}`}>
                  <ha-switch
                    .checked=${this._entity_USPS_packages !== false}
                    .configValue=${'entity_USPS_packages'}
                    @change=${this._valueChanged}
                  ></ha-switch>
                </ha-formfield>

                <ha-formfield .label=${`Toggle USPS Exceptions ${this._entity_USPS_exceptions ? 'off' : 'on'}`}>
                  <ha-switch
                    .checked=${this._entity_USPS_exceptions !== false}
                    .configValue=${'entity_USPS_exceptions'}
                    @change=${this._valueChanged}
                  ></ha-switch>
                </ha-formfield>

                <ha-formfield .label=${`Toggle Canada Post Packates ${this._entity_canada_post_packages ? 'off' : 'on'}`}>
                  <ha-switch
                    .checked=${this._entity_canada_post_packages !== false}
                    .configValue=${'entity_canada_post_packages'}
                    @change=${this._valueChanged}
                  ></ha-switch>
                </ha-formfield>

                <ha-formfield .label=${`Toggle DHL Packages ${this._entity_DHL_packages ? 'off' : 'on'}`}>
                  <ha-switch
                    .checked=${this._entity_DHL_packages !== false}
                    .configValue=${'entity_DHL_packages'}
                    @change=${this._valueChanged}
                  ></ha-switch>
                </ha-formfield>

                <ha-formfield .label=${`Toggle Hermes Packages ${this._entity_hermes_packages ? 'off' : 'on'}`}>
                  <ha-switch
                    .checked=${this._entity_hermes_packages !== false}
                    .configValue=${'entity_hermes_packages'}
                    @change=${this._valueChanged}
                  ></ha-switch>
                </ha-formfield>

                <ha-formfield .label=${`Toggle Royal Mail ${this._entity_royal_mail_packages ? 'off' : 'on'}`}>
                  <ha-switch
                    .checked=${this._entity_royal_mail_packages !== false}
                    .configValue=${'entity_royal_mail_packages'}
                    @change=${this._valueChanged}
                  ></ha-switch>
                </ha-formfield>

                <ha-formfield .label=${`Toggle USPS Mail ${this._entity_usps_mail ? 'off' : 'on'}`}>
                  <ha-switch
                    .checked=${this._entity_usps_mail !== false}
                    .configValue=${'entity_usps_mail'}
                    @change=${this._valueChanged}
                  ></ha-switch>
                </ha-formfield>

                <ha-formfield .label=${`Toggle USPS camera ${this._show_usps_camera ? 'off' : 'on'}`}>
                  <ha-switch
                    .checked=${this._show_usps_camera !== false}
                    .configValue=${'show_usps_camera'}
                    @change=${this._valueChanged}
                  ></ha-switch>
                </ha-formfield>
                <br>
                <br>
                <ha-formfield .label=${`Toggle Amazon Packages ${this._entity_amazon_packages ? 'off' : 'on'}`}>
                  <ha-switch
                    .checked=${this._entity_amazon_packages !== false}
                    .configValue=${'entity_amazon_packages'}
                    @change=${this._valueChanged}
                  ></ha-switch>
                </ha-formfield>

                <ha-formfield .label=${`Toggle Amazon Packages Delivered ${this._entity_amazon_packages_delivered ? 'off' : 'on'}`}>
                  <ha-switch
                    .checked=${this._entity_amazon_packages_delivered !== false}
                    .configValue=${'entity_amazon_packages_delivered'}
                    @change=${this._valueChanged}
                  ></ha-switch>
                </ha-formfield>

                <ha-formfield .label=${`Toggle Amazon Hub Packages ${this._entity_amazon_hub_packages ? 'off' : 'on'}`}>
                  <ha-switch
                    .checked=${this._entity_amazon_hub_packages !== false}
                    .configValue=${'entity_amazon_hub_packages'}
                    @change=${this._valueChanged}
                  ></ha-switch>
                </ha-formfield>

                <ha-formfield .label=${`Toggle Amazon camera ${this._show_amazon_camera ? 'off' : 'on'}`}>
                  <ha-switch
                    .checked=${this._show_amazon_camera !== false}
                    .configValue=${'show_amazon_camera'}
                    @change=${this._valueChanged}
                  ></ha-switch>
                </ha-formfield>

                <br>
                <br>

                <ha-formfield .label=${`Toggle warning ${this._show_warning ? 'off' : 'on'}`}>
                  <ha-switch
                    .checked=${this._show_warning !== false}
                    .configValue=${'show_warning'}
                    @change=${this._valueChanged}
                  ></ha-switch>
                </ha-formfield>
                <ha-formfield .label=${`Toggle error ${this._show_error ? 'off' : 'on'}`}>
                  <ha-switch
                    .checked=${this._show_error !== false}
                    .configValue=${'show_error'}
                    @change=${this._valueChanged}
                  ></ha-switch>
                </ha-formfield>
              </div>
            `
      : ''}

          <div class="option" @click=${this._toggleOption} .option=${'optional_sensors'}>
          <div class="row">
            <ha-icon .icon=${`mdi:${options.optional_sensors.icon}`}></ha-icon>
            <div class="title">${options.optional_sensors.name}</div>
          </div>
          <div class="secondary">${options.optional_sensors.secondary}</div>
        </div>
        ${options.optional_sensors.show
          ? html`
              <div class="values">
              <paper-dropdown-menu
                  label="Delivery Summary"
                  @value-changed=${this._valueChanged}
                  .configValue=${'entity_delivery_message'}
                >
                  <paper-listbox slot="dropdown-content" .selected=${entities.indexOf(this._entity_delivery_message)}>
                    ${entities.map(entity_delivery_message => {
                      return html`
                        <paper-item>${entity_delivery_message}</paper-item>
                      `;
                    })}
                  </paper-listbox>
                </paper-dropdown-menu>
              </div>
            `
          : ''}
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

  private _toggleOption(ev): void {
    this._toggleThing(ev, options);
  }

  private _toggleThing(ev, optionList): void {
    const show = !optionList[ev.target.option].show;
    for (const [key] of Object.entries(optionList)) {
      optionList[key].show = false;
    }
    optionList[ev.target.option].show = show;
    this._toggle = !this._toggle;
  }

  private _valueChanged(ev): void {
    if (!this._config || !this.hass) {
      return;
    }
    const target = ev.target;
    if (this[`_${target.configValue}`] === target.value) {
      return;
    }
    if (target.configValue) {
      if (target.value === '') {
        delete this._config[target.configValue];
      } else {
        this._config = {
          ...this._config,
          [target.configValue]: target.checked !== undefined ? target.checked : target.value,
        };
      }
    }
    fireEvent(this, 'config-changed', { config: this._config });
  }

  static get styles(): CSSResult {
    return css`
      .option {
        padding: 4px 0px;
        cursor: pointer;
      }
      .row {
        display: flex;
        margin-bottom: -14px;
        pointer-events: none;
      }
      .title {
        padding-left: 16px;
        margin-top: -6px;
        pointer-events: none;
      }
      .secondary {
        padding-left: 40px;
        color: var(--secondary-text-color);
        pointer-events: none;
      }
      .values {
        padding-left: 16px;
        background: var(--secondary-background-color);
        display: grid;
      }
      ha-formfield {
        padding-bottom: 8px;
        margin-bottom: 10px;
      }
    `;
  }
}
