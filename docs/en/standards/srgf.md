---
category: [Standard Document]
order: 2
head:
  - - meta
    - name: keywords
      content: Honkai, Star Rail, Gacha, Gachalog, SRGF
---

# Star Rail GachaLog Format Standard v1.0

> Star Rail GachaLog Format standard (SRGF) v1.0 <Badge text="Current" type="message" />

::: warning Usage of SRGF Statement Requirement

Application must declare support of SRGF data format only after supporting of both **import** and **export** features, and provide link to [UIGF-Org](https://uigf.org) in the associated page.

Including only importing feature reduces the interchangeability of user data, and puts the data in a risk that user can not control, which is not in line with intention of UIGF-Org.
:::

## Json Example

```json
{
  "info": {
    "uid": "xxxxxxxxx",
    "lang": "zh-cn",
    "region_time_zone": 8,
    "export_timestamp": 1684124992,
    "export_app": "xxx",
    "export_app_version": "xxxxx",
    "srgf_version": "v1.0"
  },
  "list": [
    {
      "gacha_id": "2003",
      "gacha_type": "x",
      "item_id": "10000065",
      "count": "1",
      "time": "2023-05-07 10:47:00",
      "name": "xxx",
      "item_type": "xxxx",
      "rank_type": "4",
      "id": "1683425160001357994"
    }
  ]
}
```

## Json Schema

```json
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "info": {
      "type": "object",
      "properties": {
        "uid": {
          "type": "string"
        },
        "lang": {
          "type": "string",
          "description": "language formatted in languagecode2-country/regioncode2"
        },
        "region_time_zone": {
          "type": "number",
          "description": "Timezone"
        },
        "export_timestamp": {
          "type": "number",
          "description": "Export UNIX Timestamp (in seconds precision)"
        },
        "export_app": {
          "type": "string",
          "description": "Export application name"
        },
        "export_app_version": {
          "type": "string",
          "description": "Export application version"
        },
        "srgf_version": {
          "type": "string",
          "description": "SRGF standard version; keep this to prevent possible breaking changes"
        }
      },
      "description": "Exporter's information",
      "required": [
        "srgf_version",
        "uid",
        "lang",
        "region_time_zone"
      ]
    },
    "list": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "gacha_id": {
            "type": "string",
            "description": "Gacha pool ID"
          },
          "gacha_type": {
            "type": "string",
            "description": "Gacha pool type",
            "enum": [
              "1",
              "2",
              "11",
              "12"
            ]
          },
          "item_id": {
            "type": "string",
            "description": "Item ID"
          },
          "count": {
            "type": "string",
            "description": "count of item; usually 1"
          },
          "time": {
            "type": "string",
            "description": "Time of item achieved"
          },
          "name": {
            "type": "string",
            "description": "Item name"
          },
          "item_type": {
            "type": "string",
            "description": "Type of item"
          },
          "rank_type": {
            "type": "string",
            "description": "Item Quality"
          },
          "id": {
            "type": "string",
            "description": "Internal record ID"
          }
        },
        "required": [
          "gacha_id",
          "gacha_type",
          "item_id",
          "time",
          "id"
        ]
      },
      "description": "Gacha record data"
    }
  },
  "required": [
    "info",
    "list"
  ]
}
```
