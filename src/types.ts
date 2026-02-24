import { ActionConfig, LovelaceCardConfig, LovelaceCardEditor } from 'custom-card-helpers';

declare global {
  interface HTMLElementTagNameMap {
    'mailandpackages-card-editor': LovelaceCardEditor;
    'mailandpackages-tracker-editor': LovelaceCardEditor;
    'hui-error-card': HTMLElement;
  }
}

export interface MailAndPackagesCardConfig extends LovelaceCardConfig {
  type: string;
  name?: string;

  // Summary totals
  entity_usps_mail?: boolean;
  entity_packages_delivered?: boolean;
  entity_packages_in_transit?: boolean;

  // Optional message sensor
  entity_delivery_message?: string;

  // Cameras
  show_usps_camera?: boolean;
  show_amazon_camera?: boolean;

  // Carrier toggles (normalized to lowercase)
  entity_usps_packages?: boolean;
  entity_usps_exception?: boolean;
  entity_ups_packages?: boolean;
  entity_ups_exception?: boolean;
  entity_fedex_packages?: boolean;
  entity_dhl_packages?: boolean;
  entity_canada_post_packages?: boolean;
  entity_hermes_packages?: boolean;
  entity_royal_mail_packages?: boolean;
  entity_auspost_packages?: boolean;
  entity_poczta_polska_packages?: boolean;
  entity_inpost_packages?: boolean;
  entity_dpd_packages?: boolean;
  entity_gls_packages?: boolean;

  // Amazon
  amazon_url?: string;
  entity_amazon_packages?: boolean;
  entity_amazon_packages_delivered?: boolean;
  entity_amazon_hub_packages?: boolean;
  entity_amazon_exception?: boolean;

  // Registry
  show_registry_totals?: boolean;

  // Debug
  show_warning?: boolean;
  show_error?: boolean;
  test_gui?: boolean;

  // Actions
  tap_action?: ActionConfig;
  hold_action?: ActionConfig;
  double_tap_action?: ActionConfig;

  // Legacy compat (old uppercase config keys)
  entity_USPS_packages?: boolean;
  entity_USPS_exception?: boolean;
  entity_UPS_packages?: boolean;
  entity_UPS_exception?: boolean;
  entity_DHL_packages?: boolean;
}

export interface MailAndPackagesTrackerConfig extends LovelaceCardConfig {
  type: string;
  name?: string;
  registry_entity?: string;
  show_add_package?: boolean;
  show_clear_all?: boolean;
  show_delivered?: boolean;
  show_detected?: boolean;
  collapsed_delivered?: boolean;
}

export interface RegistryPackage {
  tracking_number: string;
  carrier: string;
  status: 'detected' | 'in_transit' | 'out_for_delivery' | 'delivered' | 'cleared';
  exception: boolean;
  source: 'email' | 'manual' | 'carrier_email' | 'unknown';
  source_from: string;
  description: string;
  first_seen: string;
  last_updated: string;
  carrier_confirmed: boolean;
}
