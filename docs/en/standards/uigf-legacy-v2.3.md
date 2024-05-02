---
category: [Standard Document]
order: 1
head:
  - - meta
    - name: keywords
      content: Genshin, Genshin Impact, Gacha, Gacha log, UIGF
---
# Uniformed Interchangeable GachaLog Format Standard v2.3
> Uniformed Interchangeable GachaLog Format standard (UIGF) v2.3 <Badge text="Legacy" type="message" />

::: warning Usage of UIGF Statement Requirement

Application must declare support of UIGF data format only after supporting of both **import** and **export** features, and provide link to [UIGF-Org](https://uigf.org) in the associated page.

Including only importing feature reduces the interchangeability of user data, and puts the data in a risk that user can not control, which is not in line with intention of UIGF-Org.
:::

::: warning Warning
This standard is outdated, [UIGF v2.4](uigf.md) is the successor.
:::

## Versions Features
| Version                       | Note                                                                              | Compatibility  |
|-------------------------------|-----------------------------------------------------------------------------------|----------------|
| `v2.0`                        | First public version                                                              | v2.0           |
| `v2.1`                        | Simplified in language expression, data format is completely consistent with v2.0 | v2.1 and lower |
| [`v2.2`](UIGF-legacy-v2.2.md) | Add `info.export_timestamp` to fill UNIX timestamp                                | v2.2 and lower |
| `v2.3`                        | Add support for non-Chinese environment, express in Json Schema                   | v2.3 and lower |

### What's Changed in v2.3
* UIGF.W standard is deprecated
* Localization compatibility enhancements
    * `name` is not required any more
    * `item_name` is not required any more
    * **`item_id` is now a required field**


## Data Field Explanations
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

### item_id

Item's in-game ID, refer to [UIGF API](../API.md) to get this data

## Json Schema

> UIGF-Org provides [Json Schema](/schema/uigf.json) for validation

```json
{
  "root": {
    "type": "object",
    "properties": {
      "info": {
        "type": "object",
        "properties": {
          "uid": {
            "type": "string",
            "title": "UID for exported data"
          },
          "lang": {
            "type": "string",
            "title": "language formatted in languagecode2-country/regioncode2"
          },
          "export_timestamp": {
            "type": "number",
            "title": "Export Timestamp (in seconds precision)"
          },
          "export_time": {
            "type": "string",
            "title": "Export Time",
            "description": "yyyy-MM-dd HH:mm:ss"
          },
          "export_app": {
            "type": "string",
            "title": "Export application name"
          },
          "export_app_version": {
            "type": "string",
            "title": "Export application version"
          },
          "uigf_version": {
            "type": "string",
            "title": "UIGF Version",
            "pattern": "v\\d+\\.\\d+"
          }
        },
        "required": [
          "uid",
          "uigf_version"
        ],
        "title": "UIGF Export Infomation"
      },
      "list": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "uigf_gacha_type": {
              "type": "string",
              "title": "UIGF Wish Pool Type",
              "description": "Used to identify pools that has different type but shared the pity count"
            },
            "gacha_type": {
              "type": "string",
              "title": "Wish type"
            },
            "item_id": {
              "type": "string",
              "title": "Item internal ID"
            },
            "count": {
              "type": "string",
              "title": "count of item",
              "description": "Usually count is 1"
            },
            "time": {
              "type": "string",
              "title": "Time when the item was obtained. "
            },
            "name": {
              "type": "string",
              "title": "Item name"
            },
            "item_type": {
              "type": "string",
              "title": "Type of item"
            },
            "rank_type": {
              "type": "string",
              "title": "Item Quality"
            },
            "id": {
              "type": "string",
              "title": "Internal record ID"
            }
          },
          "required": [
            "uigf_gacha_type",
            "gacha_type",
            "id",
            "item_id",
            "time"
          ],
          "title": "UIGF Item"
        },
        "title": "Items list"
      }
    },
    "required": [
      "info",
      "list"
    ],
    "title": "UIGF root object"
  }
}
```