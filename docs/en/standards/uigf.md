---
category: [Standardization Documents]
order: 1
head:
  - - meta
    - name: keywords
      content: Genshin Impact, Honkai Star Rail, Zenless Zone Zero, gacha, gacha record, UIGF
tags:
    - UIGF
    - Gacha Record
    - Genshin Impact
    - "Honkai: Star Rail"
    - Zenless Zone Zero
---

# Uniformed Interchangeable GachaLog Format standard v4.0
> Uniformed Interchangeable GachaLog Format standard (UIGF) v4.0 <Badge text="Current" type="message" />

::: warning Breaking Changes
`UIGF v4.0 and higher versions` are **not backward compatible** with `UIGF v3.0 and lower versions` and `SRGF v1.0`. Projects collaborating with UIGF/SRGF need to be re-certified for compatibility.
:::

## Update Log
| Version | Description                                                                    | Compatibility           |
|---------|--------------------------------------------------------------------------------|-------------------------|
| `v3.0`  | For the update log of lower versions, please refer to the historical versions. | v3.0 and lower versions |
| `v4.0`  | Merged SRGF, added support for Zenless Zone Zero gacha format                  | v4.0                    |

## Preface

In order to unify the import and export behavior of gacha records across different applications, games, and accounts, we have decided to merge all supported game gacha formats into UIGF. Different games and accounts will be able to be represented as a single file or string, making the import and export operations unprecedentedly simple for users.

## Implementation and Certification

Implementing the import and export of the `UIGF v4.0 and higher versions` format does not mean that support for `UIGF v3.0 and lower versions` or `SRGF v1.0` should be removed. However, it is not recommended to use the same import and export logic for `UIGF v4.0 and higher versions` and `UIGF v3.0 and lower versions` or `SRGF v1.0`.

Exporters can selectively fill in fields for each game or ignore them; importers can selectively read fields for each game or ignore them.

To support a particular game, it is necessary to implement both data import and export functions, otherwise, certification cannot be passed.

::: info UIGF Standard Use Statement
Please provide a hyperlink to [UIGF-Org](https://uigf.org) within the application, declaring support for the UIGF data format. Including only import or export functionality reduces the liquidity of user data and places the data at risk beyond the control of the user, which does not align with the original intention of UIGF-Org.
:::

## Json Schema

> UIGF-Org provides the following Json Schema to verify the correctness of the data structure.

::: warning Note on Field Types
Developers must follow the field types defined in the Schema. Using incorrect types may cause errors when other tools written in strongly typed programming languages parse the Json file, leading to data transfer failures.

To avoid such problems, we recommend designing a dedicated data structure for the UIGF format. Also, design relevant unit tests to ensure consistency in import and export.

We also provide a [UIGF Format Validation Tool](https://schema.uigf.org/?schema=uigf) to help you verify the correctness of the data structure.

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
                    "description": "The timestamp of the export, in seconds"
                },
                "export_app": {
                    "type": "string",
                    "description": "The name of the application that exported the archive"
                },
                "export_app_version": {
                    "type": "string",
                    "description": "The version of the app that exported the archive"
                },
                "version": {
                    "type": "string",
                    "pattern": "^v\\d+\\.\\d+$",
                    "description": "The UIGF version of the exported archive, formatted as 'v{major}.{minor}', e.g., v4.0"
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
                        "description": "Time zone offset"
                    },
                    "lang": {
                        "type": "string",
                        "description": "Language code",
                        "enum": [
                            "de-de",
                            "en-us",
                            "es-es",
                            "fr-fr",
                            "id-id",
                            "it-it",
                            "ja-jp",
                            "ko-kr",
                            "pt-pt",
                            "ru-ru",
                            "th-th",
                            "tr-tr",
                            "vi-vn",
                            "zh-cn",
                            "zh-tw"
                        ]
                    },
                    "list": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "uigf_gacha_type": {
                                    "type": "string",
                                    "description": "UIGF gacha type, used to distinguish between different gacha types that have the same pity calculation",
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
                                    "description": "Gacha type, returned by MiHoYo API",
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
                                    "description": "The internal ID of the item"
                                },
                                "count": {
                                    "type": "string",
                                    "description": "The number of items, usually 1, returned by MiHoYo API"
                                },
                                "time": {
                                    "type": "string",
                                    "description": "The local time in the timezone of the item being drawn"
                                },
                                "name": {
                                    "type": "string",
                                    "description": "The name of the item, returned by MiHoYo API"
                                },
                                "item_type": {
                                    "type": "string",
                                    "description": "The type of the item, returned by MiHoYo API"
                                },
                                "rank_type": {
                                    "type": "string",
                                    "description": "The rank of the item, returned by MiHoYo API"
                                },
                                "id": {
                                    "type": "string",
                                    "description": "The internal ID of the record, returned by MiHoYo API"
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
                        "description": "Time zone offset"
                    },
                    "lang": {
                        "type": "string",
                        "description": "Language code",
                        "enum": [
                            "de-de",
                            "en-us",
                            "es-es",
                            "fr-fr",
                            "id-id",
                            "it-it",
                            "ja-jp",
                            "ko-kr",
                            "pt-pt",
                            "ru-ru",
                            "th-th",
                            "tr-tr",
                            "vi-vn",
                            "zh-cn",
                            "zh-tw"
                        ]
                    },
                    "list": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "gacha_id": {
                                    "type": "string",
                                    "description": "Gacha Pool ID"
                                },
                                "gacha_type": {
                                    "type": "string",
                                    "description": "Gacha type",
                                    "enum": [
                                        "1",
                                        "2",
                                        "11",
                                        "12"
                                    ]
                                },
                                "item_id": {
                                    "type": "string",
                                    "description": "The internal ID of the item"
                                },
                                "count": {
                                    "type": "string",
                                    "description": "The number of items, usually 1, returned by MiHoYo API"
                                },
                                "time": {
                                    "type": "string",
                                    "description": "The local time in the timezone of the item being drawn"
                                },
                                "name": {
                                    "type": "string",
                                    "description": "The name of the item, returned by MiHoYo API"
                                },
                                "item_type": {
                                    "type": "string",
                                    "description": "The type of the item, returned by MiHoYo API"
                                },
                                "rank_type": {
                                    "type": "string",
                                    "description": "The rank of the item, returned by MiHoYo API"
                                },
                                "id": {
                                    "type": "string",
                                    "description": "The internal ID of the record, returned by MiHoYo API"
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
                        "description": "Time zone offset"
                    },
                    "lang": {
                        "type": "string",
                        "description": "Language code",
                        "enum": [
                            "de-de",
                            "en-us",
                            "es-es",
                            "fr-fr",
                            "id-id",
                            "it-it",
                            "ja-jp",
                            "ko-kr",
                            "pt-pt",
                            "ru-ru",
                            "th-th",
                            "tr-tr",
                            "vi-vn",
                            "zh-cn",
                            "zh-tw"
                        ]
                    },
                    "list": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "gacha_id": {
                                    "type": "string",
                                    "description": "Gacha Pool ID"
                                },
                                "gacha_type": {
                                    "type": "string",
                                    "description": "Gacha type",
                                    "enum": [
                                        "1",
                                        "2",
                                        "3",
                                        "5"
                                    ]
                                },
                                "item_id": {
                                    "type": "string",
                                    "description": "The internal ID of the item"
                                },
                                "count": {
                                    "type": "string",
                                    "description": "The number of items, usually 1, returned by MiHoYo API"
                                },
                                "time": {
                                    "type": "string",
                                    "description": "The local time in the timezone of the item being drawn"
                                },
                                "name": {
                                    "type": "string",
                                    "description": "The name of the item, returned by MiHoYo API"
                                },
                                "item_type": {
                                    "type": "string",
                                    "description": "The type of the item, returned by MiHoYo API"
                                },
                                "rank_type": {
                                    "type": "string",
                                    "description": "The rank of the item, returned by MiHoYo API"
                                },
                                "id": {
                                    "type": "string",
                                    "description": "The internal ID of the record, returned by MiHoYo API"
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
