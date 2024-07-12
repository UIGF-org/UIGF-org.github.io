---
category: [Standardization Documents]
order: 6
head:
  - - meta
    - name: keywords
      content: Genshin, Genshin Impact, Gacha, Gacha log, UIGF
---
# Uniformed Interchangeable GachaLog Format Standard v2.4
> Uniformed Interchangeable GachaLog Format standard (UIGF) v2.4 <Badge text="Archived" type="message" />

::: warning Usage of UIGF Statement Requirement

Application must declare support of UIGF data format only after supporting of both **import** and **export** features, and provide link to [UIGF-Org](https://uigf.org) in the associated page.

Including only importing feature reduces the interchangeability of user data, and puts the data in a risk that user can not control, which is not in line with intention of UIGF-Org.
:::

::: warning Archived Version
This standard is deprecated and archived, please check our latest [UIGF standard](./uigf.md) document.

The latest UIGF 4.0 **is not backward compatible with previous UIGF versions**. The maximum compatible UIGF version is [UIGF v3.0](uigf-legacy-v3.0.md).
:::

## Versions Features
| Version                         | Note                                                                              | Compatibility  |
|---------------------------------|-----------------------------------------------------------------------------------|----------------|
| `v2.0`                          | First public version                                                              | v2.0           |
| `v2.1`                          | Simplified in language expression, data format is completely consistent with v2.0 | v2.1 and lower |
| [`v2.2`](./uigf-legacy-v2.2.md) | Add `info.export_timestamp` to fill UNIX timestamp                                | v2.2 and lower |
| [`v2.3`](./uigf-legacy-v2.3.md) | Add support for non-Chinese environment, express in Json Schema                   | v2.3 and lower |
| `v2.4`                          | Add `info.region_time_zone` to support time zone processing                       | v2.4 and lower |

### What's Changed in v2.4
* Localization compatibility enhancements
  * Added `region_time_zone` field in the `info` object


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

### `item_id`

Item's in-game ID, refer to [UIGF API](../api.md) to get this data

## Json Schema

> UIGF-Org provides [Json Schema](/schema/uigf.json) for validation

```json
{
  "type": "object",
  "properties": {
    "info": {
      "type": "object",
      "properties": {
        "uid": {
          "type": "string",
          "title": "导出记录的 UID"
        },
        "lang": {
          "type": "string",
          "title": "语言 languagecode2-country/regioncode2"
        },
        "export_timestamp": {
          "type": "number",
          "title": "导出 UNIX 时间戳（秒）"
        },
        "export_time": {
          "type": "string",
          "title": "导出时间",
          "description": "yyyy-MM-dd HH:mm:ss"
        },
        "export_app": {
          "type": "string",
          "title": "导出 App 名称"
        },
        "export_app_version": {
          "type": "string",
          "title": "导出 App 版本"
        },
        "uigf_version": {
          "type": "string",
          "title": "UIGF 版本号",
          "pattern": "v\\d+\\.\\d+"
        },
        "region_time_zone": {
          "type": "number",
          "title": "区域时区偏移"
        }
      },
      "required": ["uid", "uigf_version"],
      "title": "UIGF 导出信息"
    },
    "list": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "uigf_gacha_type": {
            "type": "string",
            "title": "UIGF 卡池类型",
            "description": "用于区分卡池类型不同，但卡池保底计算相同的物品"
          },
          "gacha_type": {
            "type": "string",
            "title": "卡池类型"
          },
          "item_id": {
            "type": "string",
            "title": "物品的内部 ID"
          },
          "count": {
            "type": "string",
            "title": "个数，一般为1"
          },
          "time": {
            "type": "string",
            "title": "获取物品的时间"
          },
          "name": {
            "type": "string",
            "title": "物品名称"
          },
          "item_type": {
            "type": "string",
            "title": "物品类型"
          },
          "rank_type": {
            "type": "string",
            "title": "物品等级"
          },
          "id": {
            "type": "string",
            "title": "记录内部 ID"
          }
        },
        "required": ["uigf_gacha_type", "gacha_type", "id", "item_id", "time"],
        "title": "UIGF 物品"
      },
      "title": "物品列表"
    }
  },
  "required": ["info", "list"],
  "title": "UIGF 根对象"
}
```