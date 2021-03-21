# Home-Assistant-Mail-And-Packages-Custom-Card

A Custom Lovelace card to display the [Mail and Packages integration](https://github.com/moralmunky/Home-Assistant-Mail-And-Packages) sensors.

<img src="https://github.com/moralmunky/Home-Assistant-Mail-And-Packages-Custom-Card/blob/master/img/card-image.png?raw=true" alt="Preview of card" />

## Credits:

- Huge contributions from [@firstof9](https://github.com/firstof9) moving the project forward and keeping it active!
  <br/>
  <a href="https://www.buymeacoffee.com/Moralmunky" target="_blank"><img src="/docs/coffee.png" alt="Buy Us A Coffee" height="51px" width="217px" /></a>

## Lovelace GUI Setup

[Mail and Packages integration](https://github.com/moralmunky/Home-Assistant-Mail-And-Packages) version 3.2 or higher is required.

## HACS Install

[HACS](https://hacs.xyz) will install the files and add an entry in the Lovelace resource

- Have [HACS](https://hacs.xyz) installed in your instance of HASS
- Add URL: **https://github.com/moralmunky/Home-Assistant-Mail-And-Packages-Custom-Card** as a custom repository with Type: **LOVELACE**
- Navigate to the Frontend directory
- Search for Mail and Packages, then choose install
- You may need to empty your browser cache for the frontend to recognize the new files.

## Manual Install

Both JS files need to be stored inside the path/to/config/www/ folder. In the Lovelace reource URL path, local is the same as the www folder. Construct your path to the JS inside the www folder for the resurce URL. For the example below:

```
path/to/config/www/Home-Assistant-Mail-And-Packages-Custom-Card/mailandpackages-card.js

path/to/config/www/Home-Assistant-Mail-And-Packages-Custom-Card/editor.js
```

Configuration > Lovelace Dashboards > Resources

```
url: /local/Home-Assistant-Mail-And-Packages-Custom-Card/mailandpackages-card.js
type: Javascript Module
```

## Card Configuration

Enter the edit mode for the Dashaboard then click Add card button. Locate the Custom: Mail and Packages Card from the list and click on it to use the visual card editor to set your preferences. Turn on the service that you have enabled in the [Mail and Packages integration](https://github.com/moralmunky/Home-Assistant-Mail-And-Packages).

## Delivery Message Sensor

The delivery message sensor, `sensor.mail_deliveries_message`, is not created by the [Mail and Packages Integration](https://github.com/moralmunky/Home-Assistant-Mail-And-Packages/wiki/Mail-Summary-Message). This is left out of the integration on purpose so it can customized by creating a [template sensor](https://www.home-assistant.io/integrations/template/). See the [Mail summary message](https://github.com/moralmunky/Home-Assistant-Mail-And-Packages/wiki/Mail-Summary-Message) page of the [Mail and Packages Integration](https://github.com/moralmunky/Home-Assistant-Mail-And-Packages/wiki/Mail-Summary-Message) WIKI for examples.

<img src="https://github.com/moralmunky/Home-Assistant-Mail-And-Packages-Custom-Card/blob/master/img/visual-editor.png?raw=true" alt="Preview of visual-editor" />
