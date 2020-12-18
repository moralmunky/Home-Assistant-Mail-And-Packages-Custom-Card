# Home-Assistant-Mail-And-Packages-Custom-Card
A Custom Lovelace card to pull together the mail and packages sensors.

<img src="https://github.com/moralmunky/Home-Assistant-Mail-And-Packages-Custom-Card/blob/master/img/card-image.png?raw=true" alt="Preview of card" />

## Lovelace GUI Setup

## Manual Install
Both JS files need to be stored inside the path/to/config/www/ folder. In the Lovelace reource URL path, local is the same as the www folder. Construct your path to the JS inside the www folder for the resurce URL. For the example below:
```
path/to/config/www/Home-Assistant-Mail-And-Packages-Custom-Card/Home-Assistant-Mail-And-Packages-Custom-Card.js

path/to/config/www/Home-Assistant-Mail-And-Packages-Custom-Card/Home-Assistant-Mail-And-Packages-Custom-Card-editor.js
```
Configuration > Lovelace Dashboards > Resources

```
url: /local/Home-Assistant-Mail-And-Packages-Custom-Card/Home-Assistant-Mail-And-Packages-Custom-Card.js
type: Javascript Module
```

## HACS Install

[HACS](https://hacs.xyz) will install the files and add an entry in the Lovelace resource
* Have [HACS](https://hacs.xyz) installed in your instance of HASS
* Add URL: **https://github.com/moralmunky/Home-Assistant-Mail-And-Packages-Custom-Card** as a custom repository with Type: **LOVELACE**
* Navigate to the Frontend directory
* Search for Mail and Packages, then choose install
* You may need to empty your browser cache for the frontend to recognize the new files.

HACS install path
```
/path/to/config/www/community/Home-Assistant-Mail-And-Packages-Custom-Card/
```
Path HACS adds to Lovelace resources
```
/hacsfiles/Home-Assistant-Mail-And-Packages-Custom-Card/Home-Assistant-Mail-And-Packages-Custom-Card.js
```

## Card Configuration
Add the card configuration to the cards: section of the view you want the card to be in.

Visual Editor Minimal Setup:
Add a manual card then input the yaml below. The remaining sensors can be added in the visual editor.
```
type: 'custom:mail-and-packages-card'
name: Mail Summary
updated: sensor.mail_updated
details: true
image: false
```
Switch to the visual editor and complete the setup by assigning the sensors you have enabled in the [Mail and Packages integration](https://github.com/moralmunky/Home-Assistant-Mail-And-Packages).

The mail_today.gif file must be saved in the www folder for the front end to load it. If the image is saved directly in the `www` folder you will use the path `/local/mail_today.gif`. 

The [Mail and Packages Integration](https://github.com/moralmunky/Home-Assistant-Mail-And-Packages/wiki/Configuration-and-Email-Settings#configuration) image path should be set to the `www` folder or subfolder of `www`. Random image file name setting should be turned off. Please see the [Mail and Packages Integration](https://github.com/moralmunky/Home-Assistant-Mail-And-Packages/wiki/Configuration-and-Email-Settings#configuration) configuration section for the path the integariton should be set to based on the type of HASS instalattion you are using.

<img src="https://github.com/moralmunky/Home-Assistant-Mail-And-Packages-Custom-Card/blob/master/img/visual-editor.png?raw=true" alt="Preview of visual-editor" />
