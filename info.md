# Home-Assistant-Mail-And-Packages-Custom-Card

{% if prerelease %}

### This is a pre-release version

It may contain bugs or break functionality in addition to adding new features and fixes. Please review open issues and submit new issues to the [GitHub issue tracker](https://github.com/moralmunky/Home-Assistant-Mail-And-Packages-Custom-Card/issues).

{% endif %}

{% if installed %}

## Changes as compared to the installed version:

### Breaking Changes

{% if version_installed.replace("v", "").replace(".","") | int < 08  %}
This is a complete rewrite. Remove the current card from your dashabord and add a new card from the card picker.
{% endif %}

### Changes

{% if version_installed.replace("v", "").replace(".","") | int < 08  %}

- [Mail and Packages integration](https://github.com/moralmunky/Home-Assistant-Mail-And-Packages) provided sensors are not toggle switches intead of entity pickers
- Ability to add a custom Amazon URL
- Toggle supported [Mail and Packages integration](https://github.com/moralmunky/Home-Assistant-Mail-And-Packages) sensors on and off
- Amazaon sensors and camera added

{% endif %}

---

{% endif %}

![GitHub release (latest by date)](https://img.shields.io/github/v/release/moralmunky/Home-Assistant-Mail-And-Packages-Custom-Card)
[![hacs_badge](https://img.shields.io/badge/HACS-Custom-orange.svg)](https://github.com/custom-components/hacs)
![GitHub contributors](https://img.shields.io/github/contributors/moralmunky/Home-Assistant-Mail-And-Packages-Custom-Card)
![Maintenance](https://img.shields.io/maintenance/yes/2020)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/moralmunky/Home-Assistant-Mail-And-Packages-Custom-Card)
![GitHub last commit](https://img.shields.io/github/last-commit/moralmunky/Home-Assistant-Mail-And-Packages-Custom-Card)

A Custom Lovelace card to display the [Mail and Packages integration](https://github.com/moralmunky/Home-Assistant-Mail-And-Packages) sensors.

## Credits:

- Huge contributions from [@firstof9](https://github.com/firstof9) moving the project forward and keeping it active!
  <br/>
  <a href="https://www.buymeacoffee.com/Moralmunky" target="_blank"><img src="/docs/coffee.png" alt="Buy Us A Coffee" height="51px" width="217px" /></a>

## Lovelace GUI Setup

[Mail and Packages integration](https://github.com/moralmunky/Home-Assistant-Mail-And-Packages) version 3.3 or higher is required.

Edit you dashbaord and choose 'Add card' find the Mail and Packages card from the list of avaialable cards to add it to your current Dashboard.

Use the visual card editor to turn on the entities that you have chosen to use in the mail and packages integration.

<img src="https://github.com/moralmunky/Home-Assistant-Mail-And-Packages-Custom-Card/blob/master/img/card-image.png?raw=true" alt="Preview of card" />
