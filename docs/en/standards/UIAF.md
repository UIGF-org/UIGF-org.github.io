---
category: [Standard Document]
order: 2
head:
  - - meta
    - name: keywords
      content: Genshin, Genshin Impact, achievement, UIAF
---
# Uniformed Interchangeable Achievement Format Standard v1.1

> Uniformed Interchangeable Achievement Format standard (UIAF) v1.1 <Badge text="Current" type="message" />

::: warning Usage of UIAF Statement Requirement

Application must declare support of UIAF data format only after supporting of both **import** and **export** features, and provide link to [UIGF-Org](https://uigf.org) in the associated page.

Including only importing feature reduces the interchangeability of user data, and puts the data in a risk that user can not control, which is not in line with intention of UIGF-Org.
:::

## Manifesto

With more third-party working on Genshin Impact's achievement recognition, export and record.

Based on experience we had in UIGF, we (list in alphabetical order)

* [babalae/genshin achievement toy](https://github.com/babalae/genshin-achievement-toy)
* [DGP Studio/Snap.Genshin](https://github.com/DGP-Studio/Snap.Genshin)
* [HolographicHat/genshin achievement export](https://github.com/HolographicHat/genshin-achievement-export)
* [YuehaiTeam/cocogoat](https://github.com/YuehaiTeam/cocogoat)

Make standard here together to strengthen the achievement data exchange-ability between each Genshin-related App.

## Precautions

### Time

All time in this standard are based on `UTC+8` time zone

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
          "description": "Export application name"
        },
        "export_app_version": {
          "type": "string",
          "description": "Export application version"
        },
        "uiaf_version": {
          "type": "string",
          "description": "UIAF version applied; Used to prevent application not working when UIGF have breaking update",
          "pattern": "v\\d+.\\d+"
        },
        "export_timestamp": {
          "type": "number",
          "description": "Export time in UNIX timestamp"
        }
      },
      "required": [
        "export_app",
        "uiaf_version"
      ],
      "description": "Include basic information defined by export application"
    },
    "list": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "number",
            "description": "Achievement ID"
          },
          "current": {
            "type": "number",
            "description": "Process"
          },
          "status": {
            "type": "number",
            "description": "Finished status",
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
            "description": "Finished time"
          }
        },
        "required": [
          "id",
          "current",
          "status",
          "timestamp"
        ],
        "description": "To represent an achievement"
      },
      "description": "Include finished or unfinished achievements"
    }
  },
  "required": [
    "info",
    "list"
  ]
}
```

### `info` 

We recognize the following fields:

| Field                | Value                                                                                        | Notes |
|----------------------|----------------------------------------------------------------------------------------------|-------|
| `export_timestamp`   | Export time in UNIX timestamp                                                                |       |
| `export_app_version` | Export application version                                                                   |       |
| `uiaf_version`       | UIAF version applied; Used to prevent application not working when UIGF have breaking update |       |

#### `uiaf_version`

Valid value:

| Value  | Note                                                                             | Compatibility |
|--------|----------------------------------------------------------------------------------|---------------|
| `v1.0` | First public official version                                                    | v1.0          |
| `v1.1` | Introduced `status` field in `achievement` to indicate completion of achievement | v1.1          |

#### `export_app`

Application haven't made export feature is marked as `-`

| Export Application | `export_app` value |
|--------------------|--------------------|
| Empty              | Empty              |

### `achievement`

#### `id`

The achievements of the Genshin Impact have a built-in ID inside the game. 
For OCR scanning export software, after obtaining the external manifestation of the achievement (such as: displaying text),
correspond internal ID can also be achieved.

> Import/Export software should handle conversion between ID and text themselves

> Achievement metadata can be found in GenshinData

#### `timestamp`

* For successfully recognized value, set the time to UNIX timestamp (in seconds precision)

* For failed recognized value, set the time to `9999-12-31 23:59:59` (UNIX timestamp `253402271999` in seconds precision)

#### `current`

* For successfully recognized value, set it to current process value
  * For example if `30/40` is recongnized, set `current` to `30`
  * You can always get final finished value in Genshin's data

*For failed recognized value, set `current` to `0`
