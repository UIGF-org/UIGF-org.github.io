---
category: [Standardization Documents]
order: 7
head:
  - - meta
    - name: keywords
      content: Genshin, Genshin Impact, Gacha, Gacha log, UIGF
---
# Uniformed Interchangeable GachaLog Format Standard v3.0
> Uniformed Interchangeable GachaLog Format standard (UIGF) v3.0 <Badge text="Legacy" type="message" />

::: warning Usage of UIGF Statement Requirement

Application must declare support of UIGF data format only after supporting of both **import** and **export** features, and provide link to [UIGF-Org](https://uigf.org) in the associated page.

Including only importing feature reduces the interchangeability of user data, and puts the data in a risk that user can not control, which is not in line with intention of UIGF-Org.
:::

::: warning Deprecating Version
This standard is outdated, [UIGF v4.0](uigf-legacy-v3.0) is the successor.

The latest UIGF 4.0 version inherits and merges the standards of UIGF 3.0 and [SRGF](./srgf.md), and adds support for Zenless Zone Zero gacha record data. If you are an application developer, you can implement compatibility with the old format according to the format defined in the document.
:::

## Versions Features
| Version                       | Note                                                                              | Compatibility  |
|-------------------------------|-----------------------------------------------------------------------------------|----------------|
| `v2.0`                        | First public version                                                              | v2.0           |
| `v2.1`                        | Simplified in language expression, data format is completely consistent with v2.0 | v2.1 and lower |
| [`v2.2`](uigf-legacy-v2.2.md) | Add `info.export_timestamp` to fill UNIX timestamp                                | v2.2 and lower |
| [`v2.3`](uigf-legacy-v2.3.md) | Add support for non-Chinese environment, express in Json Schema                   | v2.3 and lower |
| `v2.4`                        | Add `info.region_time_zone` to support time zone processing                       | v2.4 and lower |
| `v3.0`                        | Add support for Chronicled Wish                                                   | v3.0 and lower |

### What's Changed in v3.0
* Added new enumeration items in `gacha_type`
  * In the `gacha_type` enumeration, a new item with a value of `500` is used to represent the Chronicled Wish type.


## `info` Data Field Explanations
### `region_time_zone`

Since `time` received from wish records are server local time, this field is introduced in order to accurately 
determine the time zone offset of the wish record time.

Unlike SRGF, since `region_time_zone` cannot be obtained directly from the game server, when this field is not 
provided by the exporter, it needs to be inferred based on the uid.

#### Mapping

| First Character of `uid` | `region_time_zone` | Game Server                       |
|--------------------------|--------------------|-----------------------------------|
| `'6'`                    | `-5`               | os_usa                            |
| `'7'`                    | `1`                | os_euro                           |
| Any other                | `8`                | os_cht, os_asia, cn_gf01, cn_qd01 |

Application should not presume value in `region_time_zone` match the value in the form above, and should be able to handle
non-standardized `region_time_zone` values. If `region_time_zone` value is different from value inferred based on `uid`, 
then value provided by `region_time_zone` should be preferred.

## `list` Data Field Explanations
### id

There is a special field `id` in the item, which is included in Genshin Impact official API wish history API and represents
unique ID of each wish record. When exporting data in UIGF format, app should:
- Make sure each item has a unique and valid `id`
- If there is not `id` included in the record, then the missing `id` field should be filled starting form the next item 
with a valid `id`. The assigned data should be sequentially decreased (time-ordered), with each decrease being a value 
of `1`.

### gacha_type

The probabilistic wish system has a shared pity rule, so we need extra field to identify the pool. 
In UIGF format, we added a uigf_gacha_type field addition to the original wish record data.

Please remember to add corresponding uigf_gacha_type field when applying UIGF format

#### Mapping

| `uigf_gacha_type` | `gacha_type`   |
|-------------------|----------------|
| `100`             | `100`          |
| `200`             | `200`          |
| `301`             | `301` or `400` |
| `302`             | `302`          |
| `500`             | `500`          |

### `item_id`

Item's in-game ID, refer to [UIGF API](../API.md) to get this data.

## Json Schema

> UIGF-Org provides the following JSON Schema for the validation of the data structure.

::: warning Mind the Field Types
Devs are strongly urged to respect the data types of each property in the schema. Using incorrect types could result in errors when parsing JSON files by other tools developed in strong typing programming languages, leading to data transfer failures.

To avoid such issues, we recommend designing dedicated structs for the UIGF format or utilizing methods like `JsonNumberHandling.WriteAsString`. Additionally, it is advisable to design relevant unit tests to ensure consistency between imports and exports.

We also provide the [UIGF Json Schema Verify Tool](https://schema.uigf.org/?schema=uigf) to help you to verify validation of Json files.
:::

```json
{
  "type": "object",
  "properties": {
    "info": {
      "type": "object",
      "properties": {
        "uid": {
          "type": "string",
          "title": "UID of the export record"
        },
        "lang": {
          "type": "string",
          "title": "language in the format of languagecode2-country/regioncode2"
        },
        "export_timestamp": {
          "type": "number",
          "title": "Export UNIX timestamp (accurate to the second)"
        },
        "export_time": {
          "type": "string",
          "title": "Export time",
          "description": "yyyy-MM-dd HH:mm:ss"
        },
        "export_app": {
          "type": "string",
          "title": "Name of the export application"
        },
        "export_app_version": {
          "type": "string",
          "title": "Version of the export application"
        },
        "uigf_version": {
          "type": "string",
          "title": "UIGF version; follow the regular expression pattern",
          "pattern": "v\\d+\\.\\d+"
        },
        "region_time_zone": {
          "type": "number",
          "title": "Region timezone offset"
        }
      },
      "required": ["uid", "uigf_version"],
      "title": "UIGF Export Information"
    },
    "list": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "uigf_gacha_type": {
            "type": "string",
            "title": "UIGF gacha type",
            "description": "Used to differentiate different gacha types with the same pity calculation for items"
          },
          "gacha_type": {
            "type": "string",
            "title": "Gacha type"
          },
          "item_id": {
            "type": "string",
            "title": "Internal ID of the item"
          },
          "count": {
            "type": "string",
            "title": "Count, usually 1"
          },
          "time": {
            "type": "string",
            "title": "Time when the item was obtained. This MUST BE THE String typed value captured intact from the gacha record webpage WITHOUT ANY CONVERTION TO ANY DATE TYPES. Any conversion of such can cause potential timezone mistakes if the device time zone differs from the server time zone, unless special treatments are applied by individual app devs."
          },
          "name": {
            "type": "string",
            "title": "Item name"
          },
          "item_type": {
            "type": "string",
            "title": "Item type"
          },
          "rank_type": {
            "type": "string",
            "title": "Item rank"
          },
          "id": {
            "type": "string",
            "title": "Internal ID of the record"
          }
        },
        "required": ["uigf_gacha_type", "gacha_type", "id", "item_id", "time"],
        "title": "UIGF Item"
      },
      "title": "Item List"
    }
  },
  "required": ["info", "list"],
  "title": "UIGF Root Object"
}
```