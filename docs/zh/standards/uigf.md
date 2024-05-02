---
category: [标准化文档]
order: 1
head:
  - - meta
    - name: keywords
      content: 原神, 抽卡, 抽卡记录, UIGF
---

# 统一可交换抽卡记录标准 v3.0
> Uniformed Interchangeable GachaLog Format standard (UIGF) v3.0 <Badge text="Current" type="message" />
> 
::: warning UIGF 标准使用声明
应用必须在同时支持 UIGF 数据格式**导入**和**导出**功能并在相关功能区域或文档中提供跳转至 [UIGF-Org](https://uigf.org) 的超链接后声明支持 UIGF 格式

仅包含导入或导出功能降低了用户数据可流通性，且将数据置于用户不可控的风险中，不符合 UIGF-Org 设计的初衷。
:::

## 更新记录
| 版本                            | 说明                                      | 兼容             |
|-------------------------------|-----------------------------------------|----------------|
| `v2.0`                        | 首个正式版本                                  | v2.0           |
| `v2.1`                        | 简化了部分语言表述，与 v2.0在数据格式上完全一致              | v2.1 and lower |
| [`v2.2`](uigf-legacy-v2.2.md) | 新增 `info.export_timestamp` 填充 UNIX 时间戳  | v2.2 and lower |
| [`v2.3`](uigf-legacy-v2.3.md) | 扩充至非中文语境，使用 Json Schema 表述。移除了 Excel 格式 | v2.3 and lower |
| [`v2.4`](uigf-legacy-v2.4.md) | 新增 `info.region_time_zone` 支持时区处理       | v2.4 and lower |
| `v3.0`                        | 新增 集录祈愿类型支持       | v3.0 and lower |

### v3.0 更新内容

* `gacha_type` 增加新枚举项
  * 在 `gacha_type` 枚举新增值为 `500` 的项，用于表示集录祈愿类型

## `info` 字段说明

### `region_time_zone`

由于在获取祈愿记录时得到的`time`为服务器时间，为了准确判断时间的时区偏移，引入此字段。

与 SRGF 不同，由于无法直接从服务器获取`region_time_zone`，在导出方未提供此字段时，需要根据 `uid` 进行推断。

#### 映射关系

| `uid`首个字符 | `region_time_zone` | 游戏服务器                             |
|-----------|--------------------|-----------------------------------|
| `'6'`     | `-5`               | os_usa                            |
| `'7'`     | `1`                | os_euro                           |
| 剩余情况      | `8`                | os_cht, os_asia, cn_gf01, cn_qd01 |

App 不应假定 `region_time_zone` 的值为上表中给出的值，应具有处理非标准 `region_time_zone` 值的能力。
若 `region_time_zone` 的值与 `uid` 推断结果不一致，则优先选择 `region_time_zone` 给出的值。

## `list` 字段说明

### `id`

物品内包含了一项较为特殊的字段: `id`，为原神官方 API 中包含的，代表每条抽卡记录唯一性的 `id`。App 导出 UIGF 时
* 需要确保每个物品都有一个有效的唯一 `id` 
* 若有记录中不包含`id`，则应从下一个自带有效 `id` 的物品开始，为每条缺失`id`字段的数据补全`id`。
赋值数据向前（时间排序）依次递减，每次递减的值应保持为 `1`

### `gacha_type`

由于存在会共享保底与概率的卡池，所以需要一个额外的字段来界定  
我们在 `UIGF` 的所有格式中注入了 `uigf_gacha_type` 字段  
在导出到 `UIGF` 格式时需要注意添加对应的 `uigf_gacha_type` 字段。

#### 映射关系

| `uigf_gacha_type` | `gacha_type`   |
|-------------------|----------------|
| `100`             | `100`          |
| `200`             | `200`          |
| `301`             | `301` or `400` |
| `302`             | `302`          |
| `500`             | `500`          |

### `item_id`

物品游戏内ID，你可以通过 [UIGF API](../api.md) 获取这一数据。

## Json Schema

> UIGF-Org 提供下述 Json Schema 以用于验证资料结构的正确性。

::: warning 注意字段类型
请各位开发者务必尊重 Schema 内定义的字段类型。使用错误的类型可能会导致其它由强类型编程语言制成的工具在解析 Json 文件时产生错误，进而导致数据转移失败。

为了避免这类问题，我们建议您针对 UIGF 格式设计专用的 struct，或善用 `JsonNumberHandling.WriteAsString` 等方法。同时，设计相关的单元测试以确保导入导出的一致性。

我们也提供 [UIGF 格式校验工具](https://schema.uigf.org/?schema=uigf)来帮助你校验 Json 文件。
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
            "description": "获取物品的时间，应为「抽卡记录网页上显示的原始时间字符串」而非任何转换过的值。如果设备时区与服务器时区不一致，任意类型转换将会导致时区转换出现误差（除非应用进行了特殊处理）。"
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
