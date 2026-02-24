export interface CarrierDefinition {
  id: string;
  name: string;
  icon: string;
  exceptionIcon?: string;
  url: string;
  sensorSuffix: string;
  exceptionSensorSuffix?: string;
  configKey: string;
  exceptionConfigKey?: string;
  registryNames: string[];
}

export const CARRIERS: CarrierDefinition[] = [
  {
    id: 'usps',
    name: 'USPS',
    icon: 'square_usps.png',
    exceptionIcon: 'square_usps_exception.png',
    url: 'https://informeddelivery.usps.com/',
    sensorSuffix: 'usps_packages',
    exceptionSensorSuffix: 'usps_exception',
    configKey: 'entity_usps_packages',
    exceptionConfigKey: 'entity_usps_exception',
    registryNames: ['usps', 'USPS'],
  },
  {
    id: 'ups',
    name: 'UPS',
    icon: 'square_ups.png',
    exceptionIcon: 'square_ups_exception.png',
    url: 'https://wwwapps.ups.com/mcdp',
    sensorSuffix: 'ups_packages',
    exceptionSensorSuffix: 'ups_exception',
    configKey: 'entity_ups_packages',
    exceptionConfigKey: 'entity_ups_exception',
    registryNames: ['ups', 'UPS'],
  },
  {
    id: 'fedex',
    name: 'FedEx',
    icon: 'square_fedex.png',
    url: 'https://www.fedex.com/apps/fedextracking',
    sensorSuffix: 'fedex_packages',
    configKey: 'entity_fedex_packages',
    registryNames: ['fedex', 'FedEx'],
  },
  {
    id: 'dhl',
    name: 'DHL',
    icon: 'square_dhl.png',
    url: 'https://www.dhl.com',
    sensorSuffix: 'dhl_packages',
    configKey: 'entity_dhl_packages',
    registryNames: ['dhl', 'DHL'],
  },
  {
    id: 'canada_post',
    name: 'Canada Post',
    icon: 'square_canada-post.png',
    url: 'https://www.canadapost-postescanada.ca',
    sensorSuffix: 'canada_post_packages',
    configKey: 'entity_canada_post_packages',
    registryNames: ['canada_post', 'Canada Post'],
  },
  {
    id: 'hermes',
    name: 'Hermes',
    icon: 'square_hermes-packages.png',
    url: 'https://www.myhermes.co.uk',
    sensorSuffix: 'hermes_packages',
    configKey: 'entity_hermes_packages',
    registryNames: ['hermes', 'Hermes'],
  },
  {
    id: 'royal_mail',
    name: 'Royal Mail',
    icon: 'square_royal-mail.png',
    url: 'https://www.royalmail.com',
    sensorSuffix: 'royal_mail_packages',
    configKey: 'entity_royal_mail_packages',
    registryNames: ['royal_mail', 'Royal Mail'],
  },
  {
    id: 'auspost',
    name: 'Australia Post',
    icon: 'square_australia-post.png',
    url: 'https://auspost.com.au/mypost/track/',
    sensorSuffix: 'auspost_packages',
    configKey: 'entity_auspost_packages',
    registryNames: ['auspost', 'australia_post', 'Australia Post'],
  },
  {
    id: 'poczta_polska',
    name: 'Poczta Polska',
    icon: 'square_poczta-polska.png',
    url: 'https://emonitoring.poczta-polska.pl/',
    sensorSuffix: 'poczta_polska_packages',
    configKey: 'entity_poczta_polska_packages',
    registryNames: ['poczta_polska', 'Poczta Polska'],
  },
  {
    id: 'inpost',
    name: 'InPost',
    icon: 'square_inpost.png',
    url: 'https://inpost.pl/sledzenie-przesylek',
    sensorSuffix: 'inpost_pl_packages',
    configKey: 'entity_inpost_packages',
    registryNames: ['inpost', 'inpost_pl', 'InPost'],
  },
  {
    id: 'dpd',
    name: 'DPD',
    icon: 'square_dpd.png',
    url: 'https://tracktrace.dpd.com.pl/',
    sensorSuffix: 'dpd_com_pl_packages',
    configKey: 'entity_dpd_packages',
    registryNames: ['dpd', 'dpd_com_pl', 'DPD'],
  },
  {
    id: 'gls',
    name: 'GLS',
    icon: 'square_gls.png',
    url: 'https://gls-group.eu/GROUP/en/parcel-tracking',
    sensorSuffix: 'gls_packages',
    configKey: 'entity_gls_packages',
    registryNames: ['gls', 'GLS'],
  },
];

/** Amazon is handled separately due to its unique structure (sub-sensors, hub, etc.) */
export const AMAZON_CARRIER: CarrierDefinition = {
  id: 'amazon',
  name: 'Amazon',
  icon: 'square_amazon.png',
  exceptionIcon: 'square_amazon_exception.png',
  url: 'https://www.amazon.com/gp/your-account/order-history',
  sensorSuffix: 'amazon_packages',
  exceptionSensorSuffix: 'amazon_exception',
  configKey: 'entity_amazon_packages',
  exceptionConfigKey: 'entity_amazon_exception',
  registryNames: ['amazon', 'Amazon'],
};

export const CARRIER_BY_ID = new Map(CARRIERS.map(c => [c.id, c]));

export function findCarrierByRegistryName(registryCarrier: string): CarrierDefinition | undefined {
  const lower = registryCarrier.toLowerCase();
  return CARRIERS.find(c => c.registryNames.some(n => n.toLowerCase() === lower))
    || (AMAZON_CARRIER.registryNames.some(n => n.toLowerCase() === lower) ? AMAZON_CARRIER : undefined);
}
