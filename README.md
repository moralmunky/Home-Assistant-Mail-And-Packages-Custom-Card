# Home-Assistant-Mail-And-Packages-Custom-Card

Custom Lovelace cards for the [Mail and Packages integration](https://github.com/moralmunky/Home-Assistant-Mail-And-Packages).

This package includes **two cards** in a single JS bundle:

1. **Mail and Packages** (`custom:mailandpackages-card`) — Summary card showing mail counts, carrier package counts, camera feeds, and delivery totals at a glance.
2. **Package Tracker** (`custom:mailandpackages-tracker`) — Full-page tracking dashboard displaying individual packages from the Package Registry, grouped by delivery status, with interactive management.

## Credits

- [@moralmunky](https://github.com/moralmunky) — Original author
- [@firstof9](https://github.com/firstof9) — Major contributions
- [@brandon-claps](https://github.com/brandon-claps) — Package Tracker card, Lit 3.x migration, full carrier support
  <br/>
  <a href="https://www.buymeacoffee.com/Moralmunky" target="_blank"><img src="/docs/coffee.png" alt="Buy Us A Coffee" height="51px" width="217px" /></a>

## Requirements

- [Mail and Packages integration](https://github.com/moralmunky/Home-Assistant-Mail-And-Packages) v0.4.0 or higher
- For the Package Tracker card: **Package Registry** must be enabled in the integration settings

## Installation

### HACS (Recommended)

1. Have [HACS](https://hacs.xyz) installed
2. Add `https://github.com/moralmunky/Home-Assistant-Mail-And-Packages-Custom-Card` as a custom repository (Type: **Dashboard**)
3. Search for "Mail and Packages" in the Dashboard section and install
4. Clear browser cache if needed

### Manual

Copy `dist/Home-Assistant-Mail-And-Packages-Custom-Card.js` and the `dist/img/` folder to your `config/www/` directory, then add the resource:

```
Configuration > Dashboards > Resources
URL: /local/Home-Assistant-Mail-And-Packages-Custom-Card.js
Type: JavaScript Module
```

## Card 1: Mail and Packages (Summary)

The summary card displays carrier icons with package count badges, camera feeds, and delivery totals.

### Usage

Add the card via the UI card picker ("Mail and Packages") or in YAML:

```yaml
type: custom:mailandpackages-card
name: Mail Summary
entity_usps_mail: true
entity_packages_in_transit: true
entity_packages_delivered: true
entity_usps_packages: true
entity_ups_packages: true
entity_fedex_packages: true
show_usps_camera: true
```

### Supported Carriers

| Carrier | Config Key |
|---------|-----------|
| USPS | `entity_usps_packages`, `entity_usps_exception`, `entity_usps_mail` |
| UPS | `entity_ups_packages`, `entity_ups_exception` |
| FedEx | `entity_fedex_packages` |
| DHL | `entity_dhl_packages` |
| Canada Post | `entity_canada_post_packages` |
| Hermes | `entity_hermes_packages` |
| Royal Mail | `entity_royal_mail_packages` |
| Australia Post | `entity_auspost_packages` |
| Poczta Polska | `entity_poczta_polska_packages` |
| InPost | `entity_inpost_packages` |
| DPD | `entity_dpd_packages` |
| GLS | `entity_gls_packages` |
| Amazon | `entity_amazon_packages`, `entity_amazon_packages_delivered`, `entity_amazon_exception`, `entity_amazon_hub_packages` |

### Additional Options

| Option | Type | Description |
|--------|------|-------------|
| `name` | string | Card title |
| `show_usps_camera` | boolean | Show USPS Informed Delivery camera feed |
| `show_amazon_camera` | boolean | Show Amazon delivery camera feed |
| `amazon_url` | string | Custom Amazon tracking URL |
| `entity_delivery_message` | string | Entity ID of a template sensor for delivery summary text |
| `show_registry_totals` | boolean | Show Package Registry totals (tracked, in transit, delivered counts) below carrier badges |

## Card 2: Package Tracker (Full Page)

The tracker card displays every package from the Package Registry, grouped by status with expandable detail rows and action buttons.

### Usage

Best used as the sole card on a **Panel mode** view for a full-page experience:

```yaml
type: custom:mailandpackages-tracker
name: Package Tracker
```

Or with options:

```yaml
type: custom:mailandpackages-tracker
name: Package Tracker
registry_entity: sensor.mail_packages_tracked
show_add_package: true
show_clear_all: true
show_delivered: true
collapsed_delivered: true
```

### Features

- **Status-grouped display**: Packages organized into Out for Delivery, In Transit, Detected, and Delivered sections
- **Expandable rows**: Click any package to see full details (carrier, source, timestamps, confirmation status)
- **Service call actions**:
  - **Add Package**: Manually add a tracking number
  - **Mark Delivered**: Move a package to delivered status
  - **Clear**: Remove a package from the list
  - **Clear All Delivered**: Bulk clear all delivered packages
- **Carrier links**: "Track on [Carrier]" button opens the carrier's tracking website
- **Exception indicators**: Red warning icon on packages with delivery exceptions
- **Responsive**: Works on both desktop and mobile, in regular card or panel mode
- **Localized**: English and Norwegian (Bokm&aring;l) included; extensible via JSON language files

### Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `name` | string | "Package Tracker" | Card title |
| `registry_entity` | string | `sensor.mail_packages_tracked` | Registry sensor entity |
| `show_add_package` | boolean | `true` | Show Add Package button |
| `show_clear_all` | boolean | `true` | Show Clear All Delivered button |
| `show_delivered` | boolean | `true` | Show delivered packages section |
| `show_detected` | boolean | `true` | Show detected packages section |
| `collapsed_delivered` | boolean | `true` | Collapse delivered section by default |

## Localization

Both cards support localization. The active language is determined by the `selectedLanguage` key in your browser's `localStorage` (set automatically by Home Assistant based on your profile language).

**Included languages:** English (`en`), Norwegian Bokm&aring;l (`nb`)

To add a new language, create a JSON file in `src/localize/languages/` following the structure of `en.json`, then import it in `src/localize/localize.ts`.

## Delivery Message Sensor

The delivery message sensor is not created by the integration — create a [template sensor](https://www.home-assistant.io/integrations/template/). See the [Mail Summary Message wiki](https://github.com/moralmunky/Home-Assistant-Mail-And-Packages/wiki/Mail-Summary-Message) for examples.

## Development

```bash
npm install          # Install dependencies
npm run build        # Build for production
npm start            # Watch mode with dev server
```

Tech stack: Lit 3.x, TypeScript 5.x, Rollup 4.x.
