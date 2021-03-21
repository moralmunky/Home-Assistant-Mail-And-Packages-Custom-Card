import { ActionConfig, LovelaceCard, LovelaceCardConfig, LovelaceCardEditor } from 'custom-card-helpers';

declare global {
  interface HTMLElementTagNameMap {
    'mailandpackages-card-editor': LovelaceCardEditor;
    'hui-error-card': LovelaceCard;
  }
}

// TODO Add your configuration elements here for type-checking
export interface MailAndPackagesCardConfig extends LovelaceCardConfig {
  type: string;
  name?: string;

  entity_usps_mail?: boolean;
  entity_packages_delivered?: boolean;
  entity_packages_in_transit?: boolean;

  entity_fedex_packages?: boolean;
  entity_UPS_packages?: boolean;
  entity_USPS_packages?: boolean;
  entity_USPS_exceptions?: boolean;


  entity_canada_post_packages?: boolean;
  entity_DHL_packages?: boolean;
  entity_hermes_packages?: boolean;
  entity_royal_mail_packages?: boolean;

  entity_delivery_message?: string;
  show_usps_camera?: boolean;

  entity_amazon_packages?: boolean;
  entity_amazon_packages_delivered?: boolean;
  entity_amazon_hub_packages?: boolean;
  amazon_url?: string;
  show_amazon_camera?: boolean;

  show_warning?: boolean;
  show_error?: boolean;
  test_gui?: boolean;
  tap_action?: ActionConfig;
  hold_action?: ActionConfig;
  double_tap_action?: ActionConfig;
}
