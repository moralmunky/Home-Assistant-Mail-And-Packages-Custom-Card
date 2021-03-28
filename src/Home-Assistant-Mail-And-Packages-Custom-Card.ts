/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  LitElement,
  html,
  customElement,
  property,
  CSSResult,
  TemplateResult,
  css,
  PropertyValues,
  internalProperty,
} from 'lit-element';
import {
  HomeAssistant,
  hasConfigOrEntityChanged,
  hasAction,
  ActionHandlerEvent,
  handleAction,
  LovelaceCardEditor,
  getLovelace,
} from 'custom-card-helpers'; // This is a community maintained npm module with common helper functions/types

import './editor';

import type { MailAndPackagesCardConfig } from './types';
import { actionHandler } from './action-handler-directive';
import { CARD_VERSION } from './const';
import { localize } from './localize/localize';

/* eslint no-console: 0 */
console.info(
  `%c  MAILANDPACKAGES-CARD \n%c  ${localize('common.version')} ${CARD_VERSION}    `,
  'color: orange; font-weight: bold; background: black',
  'color: white; font-weight: bold; background: dimgray',
);

// This puts your card into the UI card picker dialog
(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: 'mailandpackages-card',
  name: 'mailandpackages Card',
  preview: true,
  description: 'A template custom card for you to create something awesome',
});

// TODO Name your custom element
@customElement('mailandpackages-card')
export class MailandpackagesCard extends LitElement {
  public static async getConfigElement(): Promise<LovelaceCardEditor> {
    return document.createElement('mailandpackages-card-editor');
  }

  public static getStubConfig(): object {
    return {
      name: 'Mail and Packages'
    };
  }

  // TODO Add any properities that should cause your element to re-render here
  // https://lit-element.polymer-project.org/guide/properties
  @property({ attribute: false }) public hass!: HomeAssistant;
  @internalProperty() private config!: MailAndPackagesCardConfig;

  // https://lit-element.polymer-project.org/guide/properties#accessors-custom
  public setConfig(config: MailAndPackagesCardConfig): void {
    // TODO Check for required fields and that they are of the proper format
    // const entityMailUpdate = this.config.entity_mail_update ? this.hass.states['sensor.mail_updated'].state : false;
    if (!config) {
      throw new Error(localize('common.invalid_configuration'));
    }

    if (config.test_gui) {
      getLovelace().setEditMode(true);
    }

    this.config = {
      title: 'Mail and Packages',
      ...config,
    };
  }

  // https://lit-element.polymer-project.org/guide/lifecycle#shouldupdate
  protected shouldUpdate(changedProps: PropertyValues): boolean {
    if (!this.config) {
      return false;
    }

    return hasConfigOrEntityChanged(this, changedProps, false);
  }

  // https://lit-element.polymer-project.org/guide/templates
  protected render(): TemplateResult | void {
    // TODO Check for stateObj or other necessary things and render a warning if missing
    const entityMailUpdate = this.hass.states['sensor.mail_updated'].state ?
      html `Last Check: ${this.hass.states['sensor.mail_updated'].state}` : '';

    const entityUspsMail = this.config.entity_usps_mail ?
      html `<div><a href="https://informeddelivery.usps.com/" title="Open the USPS Informed Delivery website." target="_blank"><img src="/hacsfiles/Home-Assistant-Mail-And-Packages-Custom-Card/img/square_mail.png" /></a> ${this.hass.states['sensor.mail_usps_mail'].state}</div>` : '';
    const uspsCameraUrl = this.hass.states['camera.mail_usps_camera'].attributes.entity_picture;

    const entityPackagesInTransit = this.config.entity_packages_in_transit ?
      html `<div><img src="/hacsfiles/Home-Assistant-Mail-And-Packages-Custom-Card/img/square_in-transit.png" /> ${this.hass.states['sensor.mail_packages_in_transit'].state} </div>` : '';
    const entityPackagesDelivered = this.config.entity_packages_delivered ?
      html `<div><img src="/hacsfiles/Home-Assistant-Mail-And-Packages-Custom-Card/img/square_delivery.png" /> ${this.hass.states['sensor.mail_packages_delivered'].state} </div>` : '';

    const amazonUrl = this.config.amazon_url ? this.config.amazon_url : '';
    const entityAmazonPackages = this.config.entity_amazon_packages ?
    html `<div><a href="${amazonUrl}" title="Open the amazon website." target="_blank"><img src="/hacsfiles/Home-Assistant-Mail-And-Packages-Custom-Card/img/square_amazon.png" /></a> ${this.hass.states['sensor.mail_amazon_packages'].state}</div>` : '';
    const entityAmazonPackagesDelivered = this.config.entity_amazon_packages_delivered ?
    html `<div><img src="/hacsfiles/Home-Assistant-Mail-And-Packages-Custom-Card/img/square_delivery.png" /> ${this.hass.states['sensor.mail_amazon_packages_delivered'].state}</div>` : '';
    const entityAmazonHubPackages = this.config.entity_amazon_hub_packages ?
    html `<div><img src="/hacsfiles/Home-Assistant-Mail-And-Packages-Custom-Card/img/square_amazon-hub.png" /> ${this.hass.states['sensor.mail_amazon_hub_packages'].state}</div>` : '';
    const amazonCameraUrl = this.hass.states['camera.mail_amazon_delivery_camera'].attributes.entity_picture;

    const entityFedexPackages = this.config.entity_fedex_packages ?
      html `<div><a href="$https://www.fedex.com/apps/fedextracking" title="Open the FedEx website." target="_blank"><img src="/hacsfiles/Home-Assistant-Mail-And-Packages-Custom-Card/img/square_fedex.png" /></a> ${this.hass.states['sensor.mail_fedex_packages'].state}</div>` : '';
    const entityUpsPackages = this.config.entity_UPS_packages ?
      html `<div><a href="$https://wwwapps.ups.com/mcdp" title="Open the UPS website." target="_blank"><img src="/hacsfiles/Home-Assistant-Mail-And-Packages-Custom-Card/img/square_ups.png" /></a> ${this.hass.states['sensor.mail_ups_packages'].state}</div>` : '';
    const entityUspsPackages = this.config.entity_USPS_packages ?
      html `<div><a href="https://informeddelivery.usps.com/" title="Open the USPS Informed Delivery website." target="_blank"><img src="/hacsfiles/Home-Assistant-Mail-And-Packages-Custom-Card/img/square_usps.png" /></a> ${this.hass.states['sensor.mail_usps_packages'].state}</div>` : '';
    const entityUspsException = this.config.entity_USPS_exceptions ?
      html `<div><img src="/hacsfiles/Home-Assistant-Mail-And-Packages-Custom-Card/img/square_usps.png" /> ${this.hass.states['sensor.mail_usps_exception'].state}</div>` : '';
    const entityCanadaPostPackages = this.config.entity_canada_post_packages ?
      html `<div><a href="https://www.canadapost-postescanada.ca" title="Open the Canada Post website." target="_blank"><img src="/hacsfiles/Home-Assistant-Mail-And-Packages-Custom-Card/img/square_canada-post.png" /></a> ${this.hass.states['sensor.mail_canada_post_packages'].state}</div>` : '';
    const entityDhlPackages = this.config.entity_DHL_packages ?
      html `<div><a href="https://www.dhl.com" title="Open the DHL website." target="_blank"><img src="/hacsfiles/Home-Assistant-Mail-And-Packages-Custom-Card/img/square_dhl.png" /></a> ${this.hass.states['sensor.mail_dhl_packages'].state}</div>` : '';
    const entityHermesPckages = this.config.entity_hermes_packages ?
      html `<div><a href="https://www.myhermes.co.uk" title="Open the Hermes  website." target="_blank"><img src="/hacsfiles/img/square_hermes-packages.png" /></a> ${this.hass.states['sensor.mail_hermes_packages'].state}</div>` : '';
    const entityRoyalMailPackages = this.config.entity_royal_mail_packages ?
      html `<div><a href="https://www.royalmail.com" title="Open the Royal Mail website." target="_blank"><img src="/hacsfiles/Home-Assistant-Mail-And-Packages-Custom-Card/img/square_royal-mail.png" /></a> ${this.hass.states['sensor.mail_royal_mail_packages'].state}</div>` : '';

    const entityDeliveryMessage = this.config.entity_delivery_message ? this.hass.states[this.config.entity_delivery_message].state : '';

    // const mailIcon = parseInt(entityUspsMail) > 0 ? 'mailbox-open-up' : 'mailbox-outline';
    // const uspsIcon = entityUspsPackages > 0 ? 'package-variant' : 'package-variant-closed';
    // const upsIcon = entityUpsPackages > 0 ? 'package-variant' : 'package-variant-closed';
    // const fedexIcon = entityFedexPackages > 0 ? 'package-variant' : 'package-variant-closed';
    // const amazonIcon = entityAmazonPackages > 0 ? 'package-variant' : 'package-variant-closed';

    if (this.config.show_warning) {
      return this._showWarning(localize('common.show_warning'));
    }
    const entityMailUpdateCheck = this.hass.states['sensor.mail_updated'].state ? false : true;
    if (entityMailUpdateCheck) {
      return this._showError(localize('common.show_error'));
    }
// removed .header=${this.config.name} rfom ha-card
    return html`
      <ha-card
        tabindex="0"
        .label=${`Mail and Packages: ${this.config.entity || 'No Entity Defined'}`}
        class="mail-and-packages"
      >
      <div class="header">
      <h1 class="card-header">${this.config.name}</h1>
      </div>
      ${this.config.show_usps_camera
      ? html`
      <img @action=${this._handleAction}
        .actionHandler=${actionHandler({
          hasHold: hasAction(this.config.hold_action),
          hasDoubleClick: hasAction(this.config.double_tap_action),
        })} class="MailImg clear" src="${uspsCameraUrl}&interval=30" />
      `
      : ""}
      <div class="deliveryTotals">
      ${entityUspsMail}
      ${entityPackagesInTransit}
      ${entityPackagesDelivered}
      </div>
      <p class="summary">${entityDeliveryMessage}</p>
      <div class="packagesTotals">
      ${entityUspsPackages}
      ${entityFedexPackages}
      ${entityUpsPackages}
      ${entityUspsException}
      ${entityCanadaPostPackages}
      ${entityDhlPackages}
      ${entityHermesPckages}
      ${entityRoyalMailPackages}
      </div>
      <!-- ${entityAmazonPackages || entityAmazonPackagesDelivered || entityAmazonHubPackages || this.config.show_amazon_camera
      ? html`<h1>Amazon</h1>` : ''} -->
      <div class="amazon">
      ${entityAmazonPackages}
      ${entityAmazonPackagesDelivered}
      ${entityAmazonHubPackages}
      </div>
      ${this.config.show_amazon_camera
      ? html`
      <img class="MailImg clear" src="${amazonCameraUrl}&interval=30" />
      `
      : ""}
      <div class="footer">
      <span class="usps_update">${entityMailUpdate}</span> <span class="version">v${CARD_VERSION}</span></div>

      </ha-card>
    `;
  }

  private _handleAction(ev: ActionHandlerEvent): void {
    if (this.hass && this.config && ev.detail.action) {
      handleAction(this, this.hass, this.config, ev.detail.action);
    }
  }

  private _showWarning(warning: string): TemplateResult {
    return html`
      <hui-warning>${warning}</hui-warning>
    `;
  }

  private _showError(error: string): TemplateResult {
    const errorCard = document.createElement('hui-error-card');
    errorCard.setConfig({
      type: 'error',
      error,
      origConfig: this.config,
    });

    return html`
      ${errorCard}
    `;
  }

  // https://lit-element.polymer-project.org/guide/styles
  static get styles(): CSSResult {
    return css`
    .mail-and-packages {
        margin: auto;
        padding: 0;
        position: relative;
    }
    .mail-and-packages .clear {
        clear: both;
    }
    .mail-and-packages a {
        color: var(--secondary-text-color)
    }
    .mail-and-packages .summary {
      padding: 0 1rem;
    }
    .mail-and-packages .deliveryTotals {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-around;
    }
    .mail-and-packages .deliveryTotals div {
      flex: 0 0 33.3%;
    }
    .mail-and-packages .packagesTotals, .mail-and-packages .amazon, .mail-and-packages .deliveryTotals {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-around;
    }
    .mail-and-packages .packagesTotals div, .mail-and-packages .amazon div, .mail-and-packages .deliveryTotals div {
      box-sizing: border-box;
      flex: 0 0 50%;
      width: 50%;
      height: 45px;
      background-color: var(--secondary-background-color);
      margin-bottom: 2px;
      font-size: 2rem;
      line-height: 45px;
    }
    .mail-and-packages .amazon div, .mail-and-packages .deliveryTotals div {
      flex: 0 0 33.3%;
      font-size: 2rem;
    }
    .mail-and-packages .packagesTotals img, .mail-and-packages .amazon img, .mail-and-packages .deliveryTotals img {
      width: 45px;
      height: 45px;
      float: left;
      margin-right: 1rem;
    }
    .mail-and-packages .packagesTotals::after {
      content: "";
      flex: auto;
    }
    .mail-and-packages .MailImg {
        position: relative;
        width: 100%;
        height: auto;
        margin-top: 2px;
    }
    .mail-and-packages .header, .mail-and-packages .footer {
        background-color: #588EF7;
        padding: 1rem;
        margin-bottom: 2px;
    }
    .mail-and-packages .footer {
        padding: 0 1rem;
        margin-bottom: 0;
    }
    .mail-and-packages .usps_update, .mail-and-packages .version {
        font-size: .7rem;
    }
    .mail-and-packages .version {
        float: right;
    }
    `;
  }
}
