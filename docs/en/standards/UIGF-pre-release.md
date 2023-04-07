---
category: [Standard Document]
---
# Uniformed Interchangeable GachaLog Format standard v2.3
> Uniformed Interchangeable GachaLog Format standard (UIGF) v2.3 <Badge text="Pre-release" type="message" />

## Update Log
| Version | Note                                                                              | Compatibility  |
|---------|-----------------------------------------------------------------------------------|----------------|
| `v2.0`  | First public version                                                              | v2.0           |
| `v2.1`  | Simplified in language expression, data format is completely consistent with v2.0 | v2.1 and lower |
| `v2.2`  | Add `info.export_timestamp` to fill UNIX timestamp                                | v2.2 and lower |
| `v2.3`  | Add support for non-Chinese environment, express in Json Schema                   | v2.3 and lower |

## ID

Genshin's wish record contains a special field id which is introduced in patch 1.3, 
all records exported before that will not have associated id without compatibility modification.

When exporting to UIAF-formatted data:
* Make sure every item have valid id
* Starting from the last item with a valid id, the value of id is decremented forward (relative to time), 
and the value of each decrement should be kept as 1

When importing UIAF-formatted data:
* Application should not assume every `gacha_time` have a valid `id`
  * So the application should have ability to handle record with `null` or empty value in the `id` field

## GachaType

The probabilistic wish system has a shared pity rule, so we need extra field to identify the pool.
In `UIGF` format, we added a `uigf_gacha_type` field addition to the original wish record data.

Please remember to add corresponding `uigf_gacha_type` field when applying `UIGF` format

### Mapping

| `uigf_gacha_type` | `gacha_type`   |
|-------------------|----------------|
| `100`             | `100`          |
| `200`             | `200`          |
| `301`             | `301` or `400` |
| `302`             | `302`          |

## Json Format

> Uniformed Interchangeable GachaLog Format standard of Json (UIGF.J)

We also made this standard because Json format is used by Genshin Impact's official API, and it's easier for
applications to import and export.

This format should only be used for data transmission between applications.

### Exported Structure

```json
{
  "type": "object",
  "title": "UIGF object",
  "properties": {
    "info": {
      "type": "object",
      "properties": {
        "uid": {
          "type": "string",
          "title": "Uid",
          "description": "Uid"
        },
        "lang": {
          "type": "string",
          "title": "Language",
          "description": "Language in ISO 3166"
        },
        "uigf_version": {
          "type": "string",
          "title": "UIGF Version",
          "description": "UIGF Version"
        },
        "export_timestamp": {
          "type": "number",
          "title": "Export Timestamp",
          "description": "Export Timestamp (in seconds precision)"
        },
        "export_time": {
          "type": "string",
          "description": "Export time",
          "format": "date-time",
          "pattern": "yyyy-MM-dd HH:mm:ss",
          "title": "Export Time"
        },
        "export_app": {
          "type": "string",
          "title": "Export App",
          "description": "Export application name"
        },
        "export_app_version": {
          "type": "string",
          "title": "Export App Version",
          "description": "Export application version"
        }
      },
      "title": "Infomation",
      "required": [
        "uid",
        "lang",
        "uigf_version"
      ],
      "description": "Include basic information defined by export application"
    },
    "list": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "gacha_type": {
            "type": "string",
            "description": "Wish type"
          },
          "item_id": {
            "type": "string",
            "title": "Item Id",
            "description": "Empty string"
          },
          "count": {
            "type": "string",
            "title": "Count",
            "description": "Item count"
          },
          "time": {
            "type": "string",
            "title": "Time",
            "description": "Item achieved time",
            "pattern": "yyyy-MM-dd HH:mm:ss",
            "format": "date-time"
          },
          "name": {
            "type": "string",
            "title": "Name",
            "description": "Name of item"
          },
          "item_type": {
            "type": "string",
            "title": "Item Type",
            "description": "Type of item"
          },
          "rank_type": {
            "type": "string",
            "title": "Item Quality",
            "description": "Quality of item"
          },
          "id": {
            "type": "string",
            "title": "Id",
            "description": "Internal item ID"
          },
          "uigf_gacha_type": {
            "type": "string",
            "title": "Query Type",
            "description": "gacha_type that required when querying the API"
          }
        },
        "required": [
          "gacha_type",
          "name",
          "id",
          "uigf_gacha_type",
          "time"
        ],
        "title": "Gacha Item",
        "description": "Gacha (wish) item"
      },
      "title": "List",
      "description": "Item list"
    }
  },
  "required": [
    "info",
    "list"
  ],
  "description": "UIGF root object"
}
```

## Excel (Workbook) Format
> Uniformed Interchangeable GachaLog Format standard of Workbook (UIGF.W)

### Format of Shell

* When filling the shell with data, the format should be set to string (`Text`)

### Sheet Name and Content

| Sheet Name | Content                            | Category          | Required                   |
|------------|------------------------------------|-------------------|----------------------------|
| 统计分析       | Statistical analysis content, etc. | Any               | No                         |
| 角色活动祈愿     | Data of `gacha_type` : `301\|400`  | Wish record table | No, but should have        |
| 武器活动祈愿     | Data of `gacha_type` : `302`       | Wish record table | No, but should have        |
| 常驻祈愿       | Data of `gacha_type` : `200`       | Wish record table | No, but should have        |
| 新手祈愿       | Data of `gacha_type` : `100`       | Wish record table | No, but should have        |
| 原始数据       | All raw data of wish history       | Raw wish data     | **Yes, see details below** |

* The order of the tables can be arbitrary
* The application can hide some table to prevent user to modify the data
* Sheet name should be kept same as described in the game

> Application should transmit data through **raw wish history data** (Sheet `原始数据`)

### Wish Record Sheet Structure

This section is to normalize analysis-related applications

* The content filling order corresponding to the table header needs to be arranged in strict accordance
  with the instructions below
* **Shared pity pool** is differentiated with `gacha_type`
* This category of sheet allows user to view data intuitively and wish analysis can work easier

| Column Header | Content                                   | Required |
|---------------|-------------------------------------------|----------|
| 时间            | `time` formatted in `yyyy-MM-dd HH:mm:ss` | Yes      |
| 名称            | `name` Item Name                          | Yes      |
| 物品类型          | `item_type`                               | Yes      |
| 星级            | `rank_type`                               | Yes      |
| 祈愿类型          | `gacha_type` escaped name                 | Yes      |
| ...           | ...                                       | No       |

> You can add other column headers if you think it's necessary, but please make sure that the first few columns
of the header are the contents of the above table specification

> The data in the table is usually arranged in ascending or descending order by wish ID,
and the analysis app should not assume that the order in the table is a specific ascending or descending order 

#### `gacha_type` Escaped Name
| gacha_type | Escaped Name |
|------------|--------------|
| 100        | 新手祈愿         |
| 200        | 常驻祈愿         |
| 301        | 角色活动祈愿       |
| 400        | 角色活动祈愿-2     |
| 302        | 武器活动祈愿       |

#### Example

| 时间                  | 名称   | 类别  | 星级  | 祈愿类型     | ... |
|---------------------|------|-----|-----|----------|-----|
| 2021-02-17 18:45:09 | 以理服人 | 武器  | 3   | 角色活动祈愿-2 | ... |
| ...                 | ...  | ... | ... | ...      | ... |

### Raw Wish Data Sheet

When exporting

* Applications should ask user if they should include the raw data when exporting
* Once the workbook contains `原始数据` (raw data) worksheet, it indicates that the exported data supporting this format
* The raw data sheet should be filled strictly follow the instruction in this page
* **The order of column should be set strictly follow the requirement below**
* Existing fields are sorted in ascending **dictionary order**,
  and subsequent new fields are sorted in the order of addition
* If there is no special requirement, we recommend exporting all the fields contained in the JSON data

When importing

* We strongly recommended you to write programs that do import independently of the ordinal position of the columns,
  for maximum compatibility
* If the values of some of the non-essential fields are omitted,
  please keep the column header and the corresponding columns will be empty

| Column Header     | Required                                                                                 |
|-------------------|------------------------------------------------------------------------------------------|
| `count`           | No, but suggest to keep, may to have situation that `count` not equal to 1 in the future |
| `gacha_type`      | Yes                                                                                      |
| `id`              | Yes, but suggest to keep, most applications use it to sort record                        |
| `item_id`         | No, it is deprecated field from official data set                                        |
| `item_type`       | Yes                                                                                      |
| `lang`            | No, but suggest to keep, for internationalization usage                                  |
| `name`            | Yes                                                                                      |
| `rank_type`       | No, but suggest to keep, for analysis-related app use purpose                            |
| `time`            | No, but suggest to keep, for analysis-related app use purpose                            |
| `uid`             | No, but suggest ask user if keep or not, for analysis-related app use purpose            |
| `uigf_gacha_type` | Yes                                                                                      |

#### Example

| count | gacha_type | id                  | item_id | item_type | lang  | name | rank_type | time                | uid       | uigf_gacha_type |
|-------|------------|---------------------|---------|-----------|-------|------|-----------|---------------------|-----------|-----------------|
| 1     | 301        | 1613556360008291100 |         | 武器        | zh-cn | 以理服人 | 3         | 2021-02-17 18:45:09 | 123456789 | 301             |
| ...   | ...        | ...                 | ...     | ...       | ...   | ...  | ...       | ...                 | ...       | ...             |