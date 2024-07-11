---
category: [标准化文档]
order: 1
head:
  - - meta
    - name: keywords
      content: 原神, 崩坏：星穹铁道, 绝区零, 抽卡, 抽卡记录, UIGF
---

# 统一可交换抽卡记录标准 v4.0
> Uniformed Interchangeable GachaLog Format standard (UIGF) v4.0 <Badge text="Current" type="message" />

::: warning 中断性更新警告
UIGF v4.0 and higher 对于 UIGF v3.0 and lower | SRGF v1.0 间**不具备向下兼容性**，UIGF/SRGF 合作项目如果进行适配需进行重新认证。
:::

::: warning UIGF 标准使用声明
请在 App 内提供跳转至 [UIGF-Org](https://uigf.org) 的超链接，声明支持 UIGF 格式
:::

## 更新记录
| 版本   | 说明                            | 兼容             |
|--------|--------------------------------|----------------|
| Lower  | 低版本的更新日志请查看历史版本    | v3.0 and lower |
| `v4.0` | 合并 SRGF，新增绝区零抽卡格式支持 | v4.0           |

## 前言

为了统一不同 App, 不同游戏，不同账号间的抽卡记录导入导出行为，我们决定将所有支持的游戏抽卡格式合入 UIGF 中。
不同的游戏，不同的账号将能够以单个文件或字符串的形式进行表示，导入与导出操作对用户而言将变的史无前例的简单。

## 实现与认证

实现 UIGF v4.0 and higher 导入导出并不意味着需要移除对 UIGF v3.0 and lower | SRGF v1.0 的导入导出支持
但是，不建议对 UIGF v4.0 and higher 与 UIGF v3.0 and lower | SRGF v1.0 使用同一套导入导出逻辑。

导出方可以选择性的填充的填充针对每个游戏的字段或直接忽略
导入方可以选择性的读取针对每个游戏的字段或直接忽略

一旦实现了针对某个游戏的导入/导出，必须同时实现导出/导入功能，否则将无法通过认证

## Json Schema

> UIGF-Org 提供下述 Json Schema 以用于验证资料结构的正确性。

::: warning 注意字段类型
开发者务必尊重 Schema 内定义的字段类型。使用错误的类型可能会导致其它由强类型编程语言制成的工具在解析 Json 文件时产生错误，进而导致数据转移失败。

为了避免这类问题，我们建议您针对 UIGF 格式设计专用的数据结构。同时，设计相关的单元测试以确保导入导出的一致性。

我们也提供 [UIGF 格式校验工具](https://schema.uigf.org/?schema=uigf)来帮助你校验 Json 文件。
:::

```json
{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "type": "object",
    "properties": {
        "info": {
            "type": "object",
            "properties": {
                "export_timestamp": {
                    "oneof": [
                        {
                            "type": "string"
                        },
                        {
                            "type": "integer"
                        }
                    ],
                    "description": "导出档案的时间戳，秒级"
                },
                "export_app": {
                    "type": "string",
                    "description": "导出档案的 App 名称"
                },
                "export_app_version": {
                    "type": "string",
                    "description": "导出档案的 App 版本"
                },
                "version": {
                    "type": "string",
                    "pattern": "^v\\d+\\.\\d+$",
                    "description": "导出档案的 UIGF 版本号，格式为 'v{major}.{minor}'，如 v4.0"
                }
            },
            "required": [
                "export_timestamp",
                "export_app",
                "export_app_version",
                "version"
            ]
        },
        "hk4e": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "uid": {
                        "oneof": [
                            {
                                "type": "string"
                            },
                            {
                                "type": "integer"
                            }
                        ],
                        "description": "UID"
                    },
                    "timezone": {
                        "type": "integer",
                        "description": "时区偏移"
                    },
                    "lang": {
                        "type": "string",
                        "description": "语言代码"
                    },
                    "list": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "uigf_gacha_type": {
                                    "type": "string",
                                    "description": "UIGF 卡池类型，用于区分卡池类型不同，但卡池保底计算相同的物品",
                                    "enum": [
                                        "100",
                                        "200",
                                        "301",
                                        "302",
                                        "500"
                                    ]
                                },
                                "gacha_type": {
                                    "type": "string",
                                    "description": "卡池类型，API返回",
                                    "enum": [
                                        "100",
                                        "200",
                                        "301",
                                        "302",
                                        "400",
                                        "500"
                                    ]
                                },
                                "item_id": {
                                    "type": "string",
                                    "description": "物品的内部 ID"
                                },
                                "count": {
                                    "type": "string",
                                    "description": "物品个数，一般为1，API返回"
                                },
                                "time": {
                                    "type": "string",
                                    "description": "获取物品的本地时间，与 timezone 一起计算出物品的准确获取时间，API返回"
                                },
                                "name": {
                                    "type": "string",
                                    "description": "物品名称, API返回"
                                },
                                "item_type": {
                                    "type": "string",
                                    "description": "物品类型, API返回"
                                },
                                "rank_type": {
                                    "type": "string",
                                    "description": "物品等级, API返回"
                                },
                                "id": {
                                    "type": "string",
                                    "description": "记录内部 ID, API返回"
                                }
                            },
                            "required": [
                                "uigf_gacha_type",
                                "gacha_type",
                                "item_id",
                                "time",
                                "id"
                            ]
                        }
                    }
                },
                "required": [
                    "uid",
                    "timezone",
                    "lang",
                    "list"
                ]
            }
        },
        "hkrpg": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "uid": {
                        "oneof": [
                            {
                                "type": "string"
                            },
                            {
                                "type": "integer"
                            }
                        ],
                        "description": "UID"
                    },
                    "timezone": {
                        "type": "integer",
                        "description": "时区偏移"
                    },
                    "lang": {
                        "type": "string",
                        "description": "语言代码"
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
                                    "description": "物品的内部 ID"
                                },
                                "count": {
                                    "type": "string",
                                    "description": "物品个数，一般为1，API返回"
                                },
                                "time": {
                                    "type": "string",
                                    "description": "获取物品的本地时间，与 timezone 一起计算出物品的准确获取时间，API返回"
                                },
                                "name": {
                                    "type": "string",
                                    "description": "物品名称, API返回"
                                },
                                "item_type": {
                                    "type": "string",
                                    "description": "物品类型, API返回"
                                },
                                "rank_type": {
                                    "type": "string",
                                    "description": "物品等级, API返回"
                                },
                                "id": {
                                    "type": "string",
                                    "description": "内部 Id"
                                }
                            },
                            "required": [
                                "gacha_type",
                                "time",
                                "item_id",
                                "id"
                            ]
                        }
                    }
                },
                "required": [
                    "uid",
                    "timezone",
                    "lang",
                    "list"
                ]
            }
        },
        "nap": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "uid": {
                        "oneof": [
                            {
                                "type": "string"
                            },
                            {
                                "type": "integer"
                            }
                        ],
                        "description": "UID"
                    },
                    "timezone": {
                        "type": "integer",
                        "description": "时区偏移"
                    },
                    "lang": {
                        "type": "string",
                        "description": "语言代码"
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
                                        "3",
                                        "5"
                                    ]
                                },
                                "item_id": {
                                    "type": "string",
                                    "description": "物品的内部 ID"
                                },
                                "count": {
                                    "type": "string",
                                    "description": "物品个数，一般为1，API返回"
                                },
                                "time": {
                                    "type": "string",
                                    "description": "获取物品的本地时间，与 timezone 一起计算出物品的准确获取时间，API返回"
                                },
                                "name": {
                                    "type": "string",
                                    "description": "物品名称, API返回"
                                },
                                "item_type": {
                                    "type": "string",
                                    "description": "物品类型, API返回"
                                },
                                "rank_type": {
                                    "type": "string",
                                    "description": "物品等级, API返回"
                                },
                                "id": {
                                    "type": "string",
                                    "description": "记录内部 ID, API返回"
                                }
                            },
                            "required": [
                                "gacha_type",
                                "item_id",
                                "time",
                                "id"
                            ]
                        }
                    }
                },
                "required": [
                    "uid",
                    "timezone",
                    "lang",
                    "list"
                ]
            }
        }
    },
    "required": [
        "info"
    ]
}
```
