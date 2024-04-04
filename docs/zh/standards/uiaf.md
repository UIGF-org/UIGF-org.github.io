---
redirectFrom: /zh/standards/UIAF.html
category: [标准化文档]
order: 2
head:
  - - meta
    - name: keywords
      content: 原神, 成就, 成就记录, UIAF
---

# 统一可交换成就标准 v1.1

> Uniformed Interchangeable Achievement Format standard (UIAF) v1.1 <Badge text="Current" type="message" />

::: warning UIAF 标准使用声明
应用必须在同时支持 UIAF 数据格式**导入**和**导出**功能并在相关功能区域或文档中提供跳转至 [UIGF-Org](https://uigf.org) 的超链接后声明支持 UIAF 格式

仅包含导入或导出功能降低了用户数据可流通性，且将数据至于用户不可控的风险中，不符合 UIGF-Org 设计的初衷。
:::

## 前言

由于原神的第三方成就识别、导出、记录软件越来越多，在有了 UIGF 的经验后，
我们

* [babalae/genshin achievement toy](https://github.com/babalae/genshin-achievement-toy)
* [DGP Studio/Snap.Genshin](https://github.com/DGP-Studio/Snap.Genshin)
* [HolographicHat/genshin achievement export](https://github.com/HolographicHat/genshin-achievement-export)
* [YuehaiTeam/cocogoat](https://github.com/YuehaiTeam/cocogoat)

（上述名称以字典顺序排序，不代表其他任何意义）  
在此一起，制定了此项标准，旨在加强各个原神相关的App间的成就数据可交换性。

## 注意事项

### 时间

本标准的所有时间格式均以 `UTC+8` 时区为基准

## Json Schema

```json
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "info": {
      "type": "object",
      "properties": {
        "export_app": {
          "type": "string",
          "description": "导出的app名称"
        },
        "export_app_version": {
          "type": "string",
          "description": "导出此份记录的App版本号"
        },
        "uiaf_version": {
          "type": "string",
          "description": "所应用的 UIAF 的版本,包含此字段以防 UIAF 出现中断性变更时，App无法处理",
          "pattern": "v\\d+.\\d+"
        },
        "export_timestamp": {
          "type": "number",
          "description": "导出UNIX时间戳"
        }
      },
      "required": [
        "export_app",
        "uiaf_version"
      ],
      "description": "包含导出方定义的基本信息"
    },
    "list": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "number",
            "description": "对应的成就id"
          },
          "current": {
            "type": "number",
            "description": "进度"
          },
          "status": {
            "type": "number",
            "description": "完成状态",
            "enum": [
              0,
              1,
              2,
              3
            ],
            "enumDesc": "ACHIEVEMENT_INVALID = 0; ACHIEVEMENT_UNFINISHED = 1; ACHIEVEMENT_FINISHED = 2;ACHIEVEMENT_POINT_TAKEN = 3;"
          },
          "timestamp": {
            "type": "number",
            "description": "完成的时间"
          }
        },
        "required": [
          "id",
          "current",
          "status",
          "timestamp"
        ],
        "description": "表示一个成就"
      },
      "description": "包含完成或未完成的成就"
    }
  },
  "required": [
    "info",
    "list"
  ]
}
```

### `info` 

可以包含我们认可的以下字段

|字段名|值|说明|
|-|-|-|
|`export_timestamp`|导出UNIX时间戳||
|`export_app_version`|导出此份记录的App版本号||
|`uiaf_version`|所应用的 `UIAF` 的版本,包含此字段以防 `UIAF` 出现中断性变更时，App无法处理||

#### `uiaf_version`

合法值

|值|说明|向下兼容的最低版本|
|-|-|-|
|`v1.0`|首个正式版本|v1.0|
|`v1.1`|在 `achievement` 中引入了 `status` 字段，指示成就的完成情况|v1.1|

#### `export_app`

未实现导出支持的以 `-` 代替

|导出 App|`export_app` 的值|
|-|-|
|Empty|Empty|

### `achievement`

#### `id`

原神的成就在游戏内部带有Id，对于扫描类导出软件，在取得成就的外在表现形式（如：呈现文本）后，便可对应到内部的Id

> 导入/导出软件应自行负责Id与呈现文本间的转换  
> 成就的信息可以从 [gitlab:Dimbreath/AnimeGameData](https://gitlab.com/Dimbreath/AnimeGameData) 库中获取

#### `timestamp`

* 对于识别成功的值，直接将时间转换为对应的UNIX 时间戳（秒）

* 对于识别失败的值，直接将时间设置为 `9999-12-31 23:59:59`（253402271999（秒））

#### `current`

* 对于识别成功的值，如 30/40 `current` 的值应设置为30

    > 因为始终可以从原神的数据中找到目标达成值

* 对于识别失败的值，请将该字段的值设为 `0`
