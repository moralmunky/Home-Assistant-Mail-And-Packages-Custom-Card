const LitElement = Object.getPrototypeOf(customElements.get("hui-view"));
const html = LitElement.prototype.html;

const curDatetime = new Date();

const datetime = curDatetime.getMonth().toString() + curDatetime.getDate().toString() + curDatetime.getFullYear().toString() + curDatetime.getHours().toString() + curDatetime.getMinutes().toString();

const fireEvent = (node, type, detail, options) => {
    options = options || {};
    detail = detail === null || detail === undefined ? {} : detail;
    const event = new Event(type, {
        bubbles: options.bubbles === undefined ? true : options.bubbles,
        cancelable: Boolean(options.cancelable),
        composed: options.composed === undefined ? true : options.composed
    });
    event.detail = detail;
    node.dispatchEvent(event);
    return event;
};

function hasConfigOrEntityChanged(element, changedProps) {
    if (changedProps.has("_config")) {
        return true;
    }

    return true;
}

class MailAndPackagesCard extends LitElement {
    static get properties() {
        return {
            _config: {},
            hass: {}
        };
    }

    static async getConfigElement() {
        await import("./Home-Assistant-Mail-And-Packages-Custom-Card-editor.js");
        return document.createElement("mail-and-packages-card-editor");
    }

    static getStubConfig() {
        return {};
    }

    setConfig(config) {
        if (!config.updated) {
            throw new Error("The sensor sensor.mail_updated is not found or not defined in lovelace.");
        }
        this._config = config;
    }

    shouldUpdate(changedProps) {
        return hasConfigOrEntityChanged(this, changedProps);
    }

    render() {
        if (!this._config || !this.hass) {
            return html ``;
        }

        this.numberElements = 0;

        const stateObj = this.hass.states[this._config.updated];

        if (!stateObj) {
            return html `
        <style>
          .not-found {
            flex: 1;
            background-color: yellow;
            padding: 8px;
          }
        </style>
        <ha-card>
          <div class="not-found">
            Entity not available: ${this._config.updated}
          </div>
        </ha-card>
      `;
        }

        return html `
      ${this.renderStyle()}
      <ha-card @click="${this._handleClick}">
        ${this._config.details !== false ? this.renderDetails(stateObj) : ""}
        ${this._config.image !== false ? this.renderImage(stateObj) : ""}
        ${this._config.camera !== false ? this.renderCamera(stateObj) : ""}
        <span class="usps_update">Checked: ${stateObj.state}</span>
      </ha-card>
    `;
    }

    renderDetails(stateObj) {
        const deliveries_message = this._config.deliveries_message ? this.hass.states[this._config.deliveries_message].state : false;
        const packages_delivered = this._config.packages_delivered ? this.hass.states[this._config.packages_delivered].state : false;
        const packages_in_transit = this._config.packages_in_transit ? this.hass.states[this._config.packages_in_transit].state : false;
        const fedex_packages = this._config.fedex_packages ? this.hass.states[this._config.fedex_packages].state : false;
        const ups_packages = this._config.ups_packages ? this.hass.states[this._config.ups_packages].state : false;
        const usps_packages = this._config.usps_packages ? this.hass.states[this._config.usps_packages].state : false;
        const usps_mail = this._config.usps_mail ? this.hass.states[this._config.usps_mail].state : false;
        
        const mail_icon = usps_mail > 0 ? 'mailbox-open-up' : 'mailbox-outline';
        const usps_icon = usps_packages > 0 ? 'package-variant' : 'package-variant-closed';
        const ups_icon = ups_packages > 0 ? 'package-variant' : 'package-variant-closed';
        const fedex_icon = fedex_packages > 0 ? 'package-variant' : 'package-variant-closed';
 
        this.numberElements++;

        return html `
      <div class="details">

    ${this._config.name
    ? html`
    <div class="title"> ${this._config.name} </div>
    `
    : ""}

    <br>
    <ul class="items space-evenly">
    ${packages_delivered
    ? html`
    <li><span class="mail-ha-icon"><ha-icon icon="mdi:package"></ha-icon>
        </span>Deliveries: ${packages_delivered}</li>
    `
    : ""}
    ${packages_in_transit
    ? html`
    <li><span class="mail-ha-icon"><ha-icon icon="mdi:truck-delivery"></ha-icon>
    </span>In Transit: ${packages_in_transit}<li>
    `
    : ""}
    </ul>
    ${deliveries_message
    ? html`
    <p>${deliveries_message}</p>
    `
    : ""}
    <ul class="items space-evenly">
    ${usps_mail
        ? html`
        <li><span class="mail-ha-icon">
        <ha-icon icon="mdi:${mail_icon}"></ha-icon>
        </span><a href="https://informeddelivery.usps.com/" title="Open the USPS Informed Delivery site" target="_blank"><span class="no-break">Mail: ${usps_mail}</span></a></li>
            `
            : ""}
    ${usps_packages
        ? html`
        <li><span class="mail-ha-icon">
                <ha-icon icon="mdi:${usps_icon}"></ha-icon>
            </span><a href="https://informeddelivery.usps.com/" title="Open the USPS Informed Delivery site" target="_blank"><span class="no-break">USPS: ${usps_packages}</span></a></li>
            `
            : ""}
    ${ups_packages
    ? html`
        <li><span class="mail-ha-icon">
                <ha-icon icon="mdi:${ups_icon}"></ha-icon>
            </span><a href="https://wwwapps.ups.com/mcdp" title="Open the UPS MyChoice site" target="_blank"><span class="no-break">UPS: ${ups_packages}</span></a></li>
        `
        : ""}
        ${fedex_packages
        ? html`
        <li><span class="mail-ha-icon">
                <ha-icon icon="mdi:${fedex_icon}"></ha-icon>
            </span><a href="https://www.fedex.com/apps/fedextracking" title="Open the Fedex site" target="_blank"><span class="no-break">Fedex: ${fedex_packages}</span></a></li>
            `
            : ""}
    </ul>
    </div>
    `;
    }

    renderImage(image) {
        const gif = this._config.gif;
        if (!image || image.length < 2 || !gif || gif.length < 2) {
            return html ``;
        }

        const lang = this.hass.selectedLanguage || this.hass.language;

        this.numberElements++;
        return html `
      <img class="MailImg clear" src="${this._config.gif + "?v=" + datetime}" />
    `;
    }

    renderCamera(camera) {
        const camera_entity = this._config.camera_entity;
        if (!camera || camera.length === 0 || !camera_entity || camera_entity.length === 0) {
            return html ``;
        }

        const cameraObjt = this._config.camera_entity in this.hass.states ? this.hass.states[this._config.camera_entity] : null;
        const camera_url = this.hass.states[this._config.camera_entity].attributes.entity_picture;

        const lang = this.hass.selectedLanguage || this.hass.language;

        this.numberElements++;
        return html `
        <img class="MailImg clear" src="${camera_url}&interval=30" />
    `;
    }

    _handleClick() {
        fireEvent(this, "hass-more-info", {
            entityId: this._config.updated
        });
    }

    getCardSize() {
        return 3;
    }

    renderStyle() {
        return html `
            <style>
                ha-card {
                    cursor: pointer;
                    margin: auto;
                    padding: 1em;
                    position: relative;
                }

                a {
                    color: var(--secondary-text-color)
                }

                .spacer {
                    padding-top: 1em;
                }

                .clear {
                    clear: both;
                }

                .title {
                    position: relative;
                    font-weight: 300;
                    font-size: 2em;
                    color: var(--primary-text-color);
                }

                .details {
                    margin-bottom: .5em;
                }

                .items {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                }

                .no-break {
                    white-space: nowrap;
                }

                .space-evenly {
                    justify-content: space-evenly;
                }

                .space-between {
                    justify-content: space-between;
                }

                .mail-clear {
                    clear: both;
                }

                .mail-and-packages {
                    margin: auto;
                    padding-top: 2em;
                    padding-bottom: 2em;
                    padding-left: 2em;
                    padding-right: 2em;
                    position: relative;
                }

                .mail-ha-icon {
                    height: 18px;
                    padding-right: 5px;
                    color: var(--paper-item-icon-color);
                }

                .MailImg {
                    position: relative;
                    width: 100%;
                    height: auto;
                    margin-top: 1em;
                }

                .usps_update {
                    font-size: .7em;
                }
        </style>
    `;
    }

}
customElements.define("mail-and-packages-card", MailAndPackagesCard);
