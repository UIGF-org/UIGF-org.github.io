---
category: [Standardization Documents]
order: 4
head:
  - - meta
    - name: keywords
      content: Genshin, Genshin Impact, Gacha, Gacha log, UIGF
---
# Uniformed Interchangeable GachaLog Format Standard v2.2

> Uniformed Interchangeable GachaLog Format standard (UIGF) v2.2 <Badge text="Archived" type="message" />

::: warning Archived Version
This standard is deprecated and archived, please check our latest [UIGF standard](./uigf.md) document.

The latest UIGF 4.0 **is not backward compatible with previous UIGF versions**. The last compatible version is [UIGF v3.0](uigf-legacy-v3.0.md).
:::

## Manifesto

With the conflict between Genshin Impact's popularity and its lack of software supporting, there has been variety of 
third-party Genshin Impact wish history export software. As they are getting more versatile and complex, the cost of 
switch between those software are getting much higher.

As a result, we (list in alphabetical order):
* [biuuu/genshin wish export](https://github.com/biuuu/genshin-wish-export)
* [DGP Studio/Snap.Genshin](https://github.com/DGP-Studio/Snap.Genshin)
* [Scighost/KeqingNiuza](https://github.com/Scighost/KeqingNiuza)
* [sunfkny/genshin gacha export](https://github.com/sunfkny/genshin-gacha-export)
* [TremblingMoeNew/DodocoTales](https://github.com/TremblingMoeNew/DodocoTales)
* [voderl/genshin gacha analyzer](https://github.com/voderl/genshin-gacha-analyzer)

Make standard here together to strengthen the data exchange-ability between each Genshin-related App.

We will also make new standards if there's more data can be transferred in the further.

## Precautions

> When adapting this format, please note that some name field may contain underline `_` or space
> This format only adapting **Simplified Chinese** 

### Id

Genshin's wish record contains a special field `id` which is introduced in patch 1.3,
all records exported before that will not have associated `id` without compatibility modification.

When exporting
* Make sure every item have valid `id`
* It is recommended that starting from the last item with a valid `id`, the value of `id` is decremented
forward (relative to time), and the value of each decrement should be kept as `1`
* Generated `id` value should not larger than `1612303200000000000`
* Application should not assume every `gacha_time` have a valid `id`
  * So the application should have ability to handle record with `null` or empty value in the `id` field

### GachaType

The probabilistic wish system has a shared pity rule, so we need extra field to identify the pool.
In `UIGF` format, we added a `uigf_gacha_type` field addition to the original wish record data.

Please remember to add corresponding `uigf_gacha_type` field when applying `UIGF` format

#### `uigf_gacha_type` Mapping

|`uigf_gacha_type`|`gacha_type`|
|-|-|
|100|100|
|200|200|
|301|301\|400|
|302|302|

## Excel Workbook (Workbook Format)
> Uniformed Interchangeable GachaLog Format standard of Workbook (UIGF.W)

### File Name

We suggest:

* Contain user's `uid` in the file name
* Users have choice to confirm file name before the export

### Format of Shell

* When filling the shell with data, the format should be set to string (`Text`)

### Sheet  Name and Content

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

> Application should transmit data through **raw wish history data**

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
|gacha_type|Escaped Name|
|-|-|
|100|新手祈愿|
|200|常驻祈愿|
|301|角色活动祈愿|
|400|角色活动祈愿-2|
|302|武器活动祈愿|

#### Example

|时间|名称|类别|星级|祈愿类型|...|
|-|-|-|-|-|-|
|2021-02-17 18:45:09|以理服人|武器|3|角色活动祈愿-2|...|
|...|...|...|...|...|...|

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

|count|gacha_type|id|item_id|item_type|lang|name|rank_type|time|uid|uigf_gacha_type|
|-|-|-|-|-|-|-|-|-|-|-|
|1|301|1613556360008291100||武器|zh-cn|以理服人|3|2021-02-17 18:45:09|123456789|301|
|...|...|...|...|...|...|...|...|...|...|...|

## Json Format

> Uniformed Interchangeable GachaLog Format standard of Json (UIGF.J)

We also made this standard because Json format is used by Genshin Impact's official API, and it's easier for 
applications to import and export. 

This format should only be used for data transmission between applications.

### Exported Stucture

With the idea of extracting to the UIGF.W section with the same value field,
we have drawn up the following json format

```json
{
    "info" : {
        "uid" : "000000000",
        "lang" : "zh-cn",
        ...
    },
    "list" : [
        {
            "gacha_type": "000",
            "item_id": "",
            "count": "1",
            "time": "yyyy-MM-dd HH:mm:ss",
            "name": "以理服人",
            "item_type": "武器",
            "rank_type": "3",
            "id": "1600099200004770203",
            "uigf_gacha_type": "000",
        },
        ...
    ]
}
```

### `info`

Addition to `uid` and `lang` fields extracted from `{gacha_item}`, we also recognize the following field

| Field Name           | Value                                                                                               | Note  |
|----------------------|-----------------------------------------------------------------------------------------------------|-------|
| `export_time`        | Exported time in format of `yyyy-MM-dd HH:mm:ss`                                                    |       |
| `export_timestamp`   | Exported time in UNIX timestamp                                                                     | v2.2+ |
| `export_app`         | Name of export application, see details in table below                                              |       |
| `export_app_version` | Version of export application                                                                       |       |
| `uigf_version`       | `UIGF` version applied, keep this to prevent application not working when UIGF have breaking update |       |

#### `uigf_version`

Valid values:

| Value  | Note                                                                              | Compatibility  |
|--------|-----------------------------------------------------------------------------------|----------------|
| `v2.0` | First public official version                                                     | v2.0           |
| `v2.1` | Simplified in language expression, data format is completely consistent with v2.0 | v2.1 and lower |
| `v2.2` | Add `info.export_timestamp` to fill UNIX timestamp                                | v2.2 and lower |

#### `export_app`

Application haven't made export feature are filled with `-`

| Export Applicaiton                                                                | `export_app` Value     |
|-----------------------------------------------------------------------------------|------------------------|
| [biuuu/genshin wish export](https://github.com/biuuu/genshin-wish-export)         | `genshin-wish-export`  |
| [DGP Studio/Snap.Genshin](https://github.com/DGP-Studio/Snap.Genshin)             | `Snap Genshin`         |
| [MUK/应急食品](https://gtool.mukapp.top/)                                             | `MUKGenshinTool`       |
| [Scighost/KeqingNiuza](https://github.com/Scighost/KeqingNiuza)                   | -                      |
| [Scighost/Xunkong](https://github.com/Scighost/Xunkong)                           | `Xunkong.Desktop`      |
| [sunfkny/genshin gacha export](https://github.com/sunfkny/genshin-gacha-export)   | `genshin-gacha-export` |
| [TremblingMoeNew/DodocoTales](https://github.com/TremblingMoeNew/DodocoTales)     | -                      |
| [voderl/genshin gacha analyzer](https://github.com/voderl/genshin-gacha-analyzer) | -                      |