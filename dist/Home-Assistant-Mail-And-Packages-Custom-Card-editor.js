const fireEvent = (node, type, detail, options) => {
    options = options || {};
    detail = detail === null || detail === undefined ? {} : detail;
    const event = new Event(type, {
        bubbles: options.bubbles === undefined ? true : options.bubbles,
        cancelable: Boolean(options.cancelable),
        composed: options.composed === undefined ? true : options.composed,
    });
    event.detail = detail;
    node.dispatchEvent(event);
    return event;
};

if (
    !customElements.get("ha-switch") &&
    customElements.get("paper-toggle-button")
) {
    customElements.define("ha-switch", customElements.get("paper-toggle-button"));
}

const LitElement = customElements.get("hui-masonry-view")
  ? Object.getPrototypeOf(customElements.get("hui-masonry-view"))
  : Object.getPrototypeOf(customElements.get("hui-view"));
const html = LitElement.prototype.html;
const css = LitElement.prototype.css;

export class MailAndPackagesCardEditor extends LitElement {
    setConfig(config) {
        this._config = config;
    }

    static get properties() {
        return {
            hass: {},
            _config: {}
        };
    }

    get _name() {
        return this._config.name || "";
    }

    get _updated() {
        return this._config.updated || "";
    }

    get _deliveries_message() {
        return this._config.deliveries_message || "";
    }

    get _packages_delivered() {
        return this._config.packages_delivered || "";
    }

    get _packages_in_transit() {
        return this._config.packages_in_transit || "";
    }

    get _fedex_packages() {
        return this._config.fedex_packages || "";
    }

    get _ups_packages() {
        return this._config.ups_packages || "";
    }

    get _usps_packages() {
        return this._config.usps_packages || "";
    }

  get _amazon_packages() {
    return this._config.amazon_packages || "";
  }

    get _usps_mail() {
        return this._config.usps_mail || "";
    }

    get _gif() {
        return this._config.gif || "";
    }
    
    get _gif_sensor() {
        return this._config.gif_sensor || "";
    }

    get _camera_entity() {
        return this._config.camera_entity || "";
    }

    get _image() {
        return this._config.image !== false;
    }

    get _camera() {
        return this._config.camera !== false;
    }

    get _details() {
        return this._config.details !== false;
    }

    render() {
        if (!this.hass) {
            return html ``;
        }

        const entities = Object.keys(this.hass.states).filter(
            (eid) => eid.substr(0, eid.indexOf(".")) === "sensor"
        );
        
        const camera_entities = Object.keys(this.hass.states).filter(
            (eid) => eid.substr(0, eid.indexOf(".")) === "camera"
        );

        return html `
      <div class="card-config">
        <div>
          <paper-input
            label="Name"
            .value="${this._name}"
            .configValue="${"name"}"
            @value-changed="${this._valueChanged}"
          ></paper-input>
            <ha-switch
            .checked=${this._details}
            .configValue="${"details"}"
            @change="${this._valueChanged}"
            >Show Details</ha-switch>
          ${customElements.get("ha-entity-picker")
            ? html`
                <ha-entity-picker
                label="Mail Updated Sensor"
                  .hass="${this.hass}"
                  .value="${this._updated}"
                  .configValue=${"updated"}
                  domain-filter="sensor"
                  @change="${this._valueChanged}"
                  allow-custom-entity
                ></ha-entity-picker>
              `
            : html`
                <paper-dropdown-menu
                  label="Mail Updated Sensor"
                  @value-changed="${this._valueChanged}"
                  .configValue="${"updated"}"
                >
                  <paper-listbox
                    slot="dropdown-content"
                    .selected="${entities.indexOf(this._updated)}"
                  >
                    ${entities.map((updated) => {
                      return html`
                        <paper-item>${updated}</paper-item>
                      `;
                    })}
                  </paper-listbox>
                </paper-dropdown-menu>
              `}
          ${customElements.get("ha-entity-picker")
            ? html`
                <ha-entity-picker
                label="Delivery Message Sensor"
                  .hass="${this.hass}"
                  .value="${this._deliveries_message}"
                  .configValue=${"deliveries_message"}
                  domain-filter="sensor"
                  @change="${this._valueChanged}"
                  allow-custom-entity
                ></ha-entity-picker>
              `
            : html`
                <paper-dropdown-menu
                  label="Delivery Message Sensor"
                  @value-changed="${this._valueChanged}"
                  .configValue="${"deliveries_message"}"
                >
                  <paper-listbox
                    slot="dropdown-content"
                    .selected="${entities.indexOf(this._deliveries_message)}"
                  >
                    ${entities.map((deliveries_message) => {
                      return html`
                        <paper-item>${deliveries_message}</paper-item>
                      `;
                    })}
                  </paper-listbox>
                </paper-dropdown-menu>
              `}
         ${customElements.get("ha-entity-picker")
            ? html`
                <ha-entity-picker
                label="Packages Delivered Sensor"
                  .hass="${this.hass}"
                  .value="${this._packages_delivered}"
                  .configValue=${"packages_delivered"}
                  domain-filter="sensor"
                  @change="${this._valueChanged}"
                  allow-custom-entity
                ></ha-entity-picker>
              `
            : html`
                <paper-dropdown-menu
                  label="Packages Delivered Sensor"
                  @value-changed="${this._valueChanged}"
                  .configValue="${"packages_delivered"}"
                >
                  <paper-listbox
                    slot="dropdown-content"
                    .selected="${entities.indexOf(this._packages_delivered)}"
                  >
                    ${entities.map((packages_delivered) => {
                      return html`
                        <paper-item>${packages_delivered}</paper-item>
                      `;
                    })}
                  </paper-listbox>
                </paper-dropdown-menu>
              `}
          ${customElements.get("ha-entity-picker")
            ? html`
                <ha-entity-picker
                label="Packages In Transit Sensor"
                  .hass="${this.hass}"
                  .value="${this._packages_in_transit}"
                  .configValue=${"packages_in_transit"}
                  domain-filter="sensor"
                  @change="${this._valueChanged}"
                  allow-custom-entity
                ></ha-entity-picker>
              `
            : html`
                <paper-dropdown-menu
                  label="Packages In Transit Sensor"
                  @value-changed="${this._valueChanged}"
                  .configValue="${"packages_in_transit"}"
                >
                  <paper-listbox
                    slot="dropdown-content"
                    .selected="${entities.indexOf(this._packages_in_transit)}"
                  >
                    ${entities.map((packages_in_transit) => {
                      return html`
                        <paper-item>${packages_in_transit}</paper-item>
                      `;
                    })}
                  </paper-listbox>
                </paper-dropdown-menu>
              `}
              ${customElements.get("ha-entity-picker")
            ? html`
                <ha-entity-picker
                label="FedEx Package Sensor"
                  .hass="${this.hass}"
                  .value="${this._fedex_packages}"
                  .configValue=${"fedex_packages"}
                  domain-filter="sensor"
                  @change="${this._valueChanged}"
                  allow-custom-entity
                ></ha-entity-picker>
              `
            : html`
                <paper-dropdown-menu
                  label="FedEx Package Sensor"
                  @value-changed="${this._valueChanged}"
                  .configValue="${"fedex_packages"}"
                >
                  <paper-listbox
                    slot="dropdown-content"
                    .selected="${entities.indexOf(this._fedex_packages)}"
                  >
                    ${entities.map((fedex_packages) => {
                      return html`
                        <paper-item>${fedex_packages}</paper-item>
                      `;
                    })}
                  </paper-listbox>
                </paper-dropdown-menu>
              `}
              ${customElements.get("ha-entity-picker")
            ? html`
                <ha-entity-picker
                label="UPS Package Sensor"
                  .hass="${this.hass}"
                  .value="${this._ups_packages}"
                  .configValue=${"ups_packages"}
                  domain-filter="sensor"
                  @change="${this._valueChanged}"
                  allow-custom-entity
                ></ha-entity-picker>
              `
            : html`
                <paper-dropdown-menu
                  label="UPS Package Sensor"
                  @value-changed="${this._valueChanged}"
                  .configValue="${"ups_packages"}"
                >
                  <paper-listbox
                    slot="dropdown-content"
                    .selected="${entities.indexOf(this._ups_packages)}"
                  >
                    ${entities.map((ups_packages) => {
                      return html`
                        <paper-item>${ups_packages}</paper-item>
                      `;
                    })}
                  </paper-listbox>
                </paper-dropdown-menu>
              `}
              ${customElements.get("ha-entity-picker")
            ? html`
                <ha-entity-picker
                label="USPS Package Sensor"
                  .hass="${this.hass}"
                  .value="${this._usps_packages}"
                  .configValue=${"usps_packages"}
                  domain-filter="sensor"
                  @change="${this._valueChanged}"
                  allow-custom-entity
                ></ha-entity-picker>
              `
            : html`
                <paper-dropdown-menu
                  label="USPS Package Sensor"
                  @value-changed="${this._valueChanged}"
                  .configValue="${"usps_packages"}"
                >
                  <paper-listbox
                    slot="dropdown-content"
                    .selected="${entities.indexOf(this._usps_packages)}"
                  >
                    ${entities.map((usps_packages) => {
                      return html`
                        <paper-item>${usps_packages}</paper-item>
                      `;
                    })}
                  </paper-listbox>
                </paper-dropdown-menu>
              `}
              ${customElements.get("ha-entity-picker")
            ? html`
                <ha-entity-picker
                label="Amazon Package Sensor"
                .hass="${this.hass}"
                .value="${this._amazon_packages}"
                .configValue=${"amazon_packages"}
                domain-filter="sensor"
                @change="${this._valueChanged}"
                allow-custom-entity
              ></ha-entity-picker>
            `
          : html`
              <paper-dropdown-menu
                label="Amazon Package Sensor"
                @value-changed="${this._valueChanged}"
                .configValue="${"amazon_packages"}"
              >
                <paper-listbox
                  slot="dropdown-content"
                  .selected="${entities.indexOf(this._amazon_packages)}"
                >
                  ${entities.map((amazon_packages) => {
                    return html`
                      <paper-item>${amazon_packages}</paper-item>
                    `;
                  })}
                </paper-listbox>
              </paper-dropdown-menu>
            `}
            ${customElements.get("ha-entity-picker")
          ? html`
              <ha-entity-picker
                label="USPS Mail Sensor"
                  .hass="${this.hass}"
                  .value="${this._usps_mail}"
                  .configValue=${"usps_mail"}
                  domain-filter="sensor"
                  @change="${this._valueChanged}"
                  allow-custom-entity
                ></ha-entity-picker>
              `
            : html`
                <paper-dropdown-menu
                  label="USPS Mail Sensor"
                  @value-changed="${this._valueChanged}"
                  .configValue="${"usps_mail"}"
                >
                  <paper-listbox
                    slot="dropdown-content"
                    .selected="${entities.indexOf(this._usps_mail)}"
                  >
                    ${entities.map((usps_mail) => {
                      return html`
                        <paper-item>${usps_mail}</paper-item>
                      `;
                    })}
                  </paper-listbox>
                </paper-dropdown-menu>
              `}
          <ha-switch
            .checked=${this._image}
            .configValue="${"image"}"
            @change="${this._valueChanged}"
            >Show Image</ha-switch
          ><paper-input
            label="Mail GIF location"
            .value="${this._gif}"
            .configValue="${"gif"}"
            @value-changed="${this._valueChanged}"
          ></paper-input>

            ${customElements.get("ha-entity-picker")
          ? html`
              <ha-entity-picker
                label="GIF Sensor"
                  .hass="${this.hass}"
                  .value="${this._gif_sensor}"
                  .configValue=${"gif_sensor"}
                  domain-filter="sensor"
                  @change="${this._valueChanged}"
                  allow-custom-entity
                ></ha-entity-picker>
              `
            : html`
                <paper-dropdown-menu
                  label="GIF Sensor"
                  @value-changed="${this._valueChanged}"
                  .configValue="${"gif_sensor"}"
                >
                  <paper-listbox
                    slot="dropdown-content"
                    .selected="${entities.indexOf(this._gif_sensor)}"
                  >
                    ${entities.map((gif_sensor) => {
                      return html`
                        <paper-item>${gif_sensor}</paper-item>
                      `;
                    })}
                  </paper-listbox>
                </paper-dropdown-menu>
              `}

        <ha-switch
            .checked=${this._camera}
            .configValue="${"camera"}"
            @change="${this._valueChanged}"
            >Show Camera</ha-switch
          >

        ${customElements.get("ha-entity-picker")
            ? html`
                <ha-entity-picker
                label="Camera Entity"
                  .hass="${this.hass}"
                  .value="${this._camera_entity}"
                  .configValue=${"camera_entity"}
                  domain-filter="camera"
                  @change="${this._valueChanged}"
                  allow-custom-entity
                ></ha-entity-picker>
              `
            : html`
                <paper-dropdown-menu
                  label="Camera Entity"
                  @value-changed="${this._valueChanged}"
                  .configValue="${"camera_entity"}"
                >
                  <paper-listbox
                    slot="dropdown-content"
                    .selected="${camera_entities.indexOf(this._camera_entity)}"
                  >
                    ${camera_entities.map((camera_entity) => {
                      return html`
                        <paper-item>${camera_entity}</paper-item>
                      `;
                    })}
                  </paper-listbox>
                </paper-dropdown-menu>
              `}
        </div>
      </div>
    `;
    }

    _valueChanged(ev) {
        if (!this._config || !this.hass) {
            return;
        }
        const target = ev.target;
        if (this[`_${target.configValue}`] === target.value) {
            return;
        }
        if (target.configValue) {
            if (target.value === "") {
                delete this._config[target.configValue];
            } else {
                this._config = {
                    ...this._config,
          [target.configValue]: target.checked !== undefined ? target.checked : target.value,
                };
            }
        }
        fireEvent(this, "config-changed", {
            config: this._config
        });
    }

    static get styles() {
        return css `
      ha-switch {
        padding-top: 16px;
      }
      .side-by-side {
        display: flex;
      }
      .side-by-side > * {
        flex: 1;
        padding-right: 4px;
      }
    `;
    }
}

customElements.define("mail-and-packages-card-editor", MailAndPackagesCardEditor);