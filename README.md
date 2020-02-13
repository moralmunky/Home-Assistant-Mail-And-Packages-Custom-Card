# Home-Assistant-Mail-And-Packages-Custom-Card
A Custom Lovelace card to pull together the mail and packages sensors.

## Lovelace GUI Setup

Add the js path relative to the /local/ path to the resources section of the lovelace yaml or at the top of the GUI lovelace RAW configuration editor.
```
resources:
  - type: js
    url: /local/mail_and_packages/mail_and_packages.js?v=.01
```
Add the card configuration to the cards: section of the view you want to display the card in.
```
  - type: 'custom:mail-and-packages'
    deliver_today: sensor.mail_deliveries_today
    fedex: sensor.mail_fedex_packages
    in_transit: sensor.mail_packages_in_transit
    last_update: sensor.mail_updated
    mail: sensor.mail_usps_mail
    summary: sensor.mail_deliveries_message
    ups: sensor.mail_ups_packages
    usps: sensor.mail_usps_packages
```

## Template
Use the following to create a deliveries summary sensor:
```
- platform: template
  sensors:
    mail_deliveries_message:
      friendly_name: "Deliveries Summary"
      entity_id: 
        - sensor.mail_usps_mail
        - sensor.packages_in_transit
      value_template: > 
        {# Deliveries Sentence #}
          {% macro deliveries_sentence() -%}
                {%- if states("sensor.mail_usps_mail")|int == 0 -%}
                  No
                {%- else -%}
                  {{states("sensor.mail_usps_mail")|int}}
                {%- endif -%}
              {{' '}} 
                {%- if states("sensor.mail_usps_mail")|int <= 1 -%}
                  mail
                {%- else -%}
                  pieces of mail
                {%- endif -%}
              {{' '}}will be delivered.{{' '}} 
                {%- if states("sensor.packages_in_transit")|int == 0 -%}
                  No
                {%- else -%}
                  {{states("sensor.packages_in_transit")|int}}
                {%- endif -%}
              {{' '}} 
                {%- if states("sensor.packages_in_transit")|int == 1 -%}
                  package is
                {%- else -%}
                  packages are
                {%- endif -%}
              {{' '}}in transit.{{' '}}
          {%- endmacro %}
        {{deliveries_sentence()}}
```      
