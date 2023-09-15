---
redirectFrom: /standards/SRGF.html
category: [标准化文档]
order: 2
head:
  - - meta
    - name: keywords
      content: 崩坏, 星穹铁道, 抽卡, 抽卡记录, SRGF
---

# 星穹铁道抽卡记录标准 v1.0

> Star Rail GachaLog Format standard (SRGF) v1.0 <Badge text="Current" type="message" />

::: warning SRGF 标准使用声明
应用必须在同时支持 SRGF 数据格式**导入**和**导出**功能并在相关功能区域或文档中提供跳转至 [UIGF-Org](https://uigf.org) 的超链接后声明支持 SRGF 格式

仅包含导入功能降低了用户数据可流通性，且将数据至于用户不可控的风险中，不符合 UIGF-Org 设计的初衷。
:::

## Json 示例

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
          "description": "语言 languagecode2-country/regioncode2"
        },
        "region_time_zone": {
          "type": "number",
          "description": "时区"
        },
        "export_timestamp": {
          "type": "number",
          "description": "导出 UNIX 时间戳"
        },
        "export_app": {
          "type": "string",
          "description": "导出的 App 名称"
        },
        "export_app_version": {
          "type": "string",
          "description": "导出此份记录的 App 版本号"
        },
        "srgf_version": {
          "type": "string",
          "description": "所应用的 SRGF 的版本,包含此字段以防 SRGF 出现中断性变更时，App 无法处理"
        }
      },
      "description": "包含导出方定义的基本信息",
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
            "description": "卡池 Id"
          },
          "gacha_type": {
            "type": "string",
            "description": "卡池类型",
            "enum": [
              "1",
              "2",
              "11",
              "12"
            ]
          },
          "item_id": {
            "type": "string",
            "description": "物品 Id"
          },
          "count": {
            "type": "string",
            "description": "数量，通常为1"
          },
          "time": {
            "type": "string",
            "description": "获取物品的时间"
          },
          "name": {
            "type": "string",
            "description": "物品名称"
          },
          "item_type": {
            "type": "string",
            "description": "物品类型"
          },
          "rank_type": {
            "type": "string",
            "description": "物品星级"
          },
          "id": {
            "type": "string",
            "description": "内部 Id"
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
      "description": "包含卡池记录"
    }
  },
  "required": [
    "info",
    "list"
  ]
}
```
