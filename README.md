# Home-Assistant-Mail-And-Packages-Custom-Card
A Custom Lovelace card to pull together the mail and packages sensors.

![Card screenshot](/card-image.png "Card screenshot")

## Lovelace GUI Setup

Bothh JS files need to be stored inside the path/to/config/www/ folder. In the Lovelace reource URL path, local is the same as the www folder. Construct your path to the JS inside the www folder for the resurce URL. For the example below:

path/to/config/www/Home-Assistant-Mail-And-Packages-Custom-Card/mail-and-packages-card.js

path/to/config/www/Home-Assistant-Mail-And-Packages-Custom-Card/Home-Assistant-Mail-And-Packages-Custom-Card-editor.js

Configuration > Lovelace Dashboards > Resources

```
url: /local/Home-Assistant-Mail-And-Packages-Custom-Card/mail-and-packages-card.js
type: Javascript Module
```
Add the card configuration to the cards: section of the view you want the card to be in.

Minimal Setup:
The remaining sensors can be added in the card configurator.
```
- type: 'custom:mail-and-packages-card'
  name: Mail Summary
  updated: sensor.mail_updated
  details: true
  image: false
```
