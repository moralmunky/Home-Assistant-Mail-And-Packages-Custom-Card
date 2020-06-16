# Home-Assistant-Mail-And-Packages-Custom-Card
A Custom Lovelace card to pull together the mail and packages sensors.

![Card screenshot](/card-image.png "Card screenshot")

## Lovelace GUI Setup

Add the js path relative to the /local/ folder in your home assistant enviroment to the resources section of the lovelace yaml or at the top of the GUI lovelace RAW configuration editor.
```
resources:
  - type: module
    url: /local/Home-Assistant-Mail-And-Packages-Custom-Card/mail-and-packages-card.js
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
