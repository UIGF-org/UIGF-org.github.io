---
redirectFrom: /en/API.html
headerDepth: 2
category: [API]
icon: api
head:
  - - meta
    - name: keywords
      content: Genshin, UIGF, Genshin Data, API, Genshin Impact
---

# UIGF API 

## Introduction
In UIGF standard v2.3, we prioritize `item_id` and make it as a required field.
This allows UIGF data set to support multi-language environment that common seen in international server,
and allows worldwide Genshin-related software been connected together.

However, some software are running at a limited server environment, so it is hard to them to convert 
item name to item ID. As a result, UIGF-Org is now supporting the open-source community with an API for translation.

The API is open-sourced at [UIGF-org/UIGF-API](https://github.com/UIGF-org/UIGF-API)

The API is available for Genshin Impact and Honkai: Star Rail

## Usage
UIGF API have 3 common interface, shown below
### Translation API <Badge text="POST" type="tip" vertical="top" />
The translation API to convert the text in specific language to Genshin Impact's internal item ID, or reverse convert 
the specific item ID to its name in specific language.
- URL: `https://api.uigf.org/translate/`
- Body Json
  ```Json
  {
    "lang": "language",
    "type": "normal|reverse",
    "game": "genshin|starrail",
    "item_name": "str | str[]",
    "item_id": "int | int[]"
  }
  ```
#### Request Parameters
- `lang` **Required**
  - Text's original language
  - Supported language includes `chs`, `cht`, `de`, `en`, `es`, `fr`, `id`, `jp`, `kr`,
  `pt`, `ru`, `th`, `vi`
- `type` **Required**
  - Translation type
    - When `type` value is `normal`, the API will translate item name to item ID
    - When `type` value is `reverse`, the API will translate item ID to item name
- `game` **Required**
  - Target game's name, supporting `genshin` for Genshin Impact and `starrail` for Honkai: Star Rail
- `item_name` **Required when `type: normal`**
  - Text or list of text that need to be translated
    - Text (Single query)
      - such as: `Kamisato Ayaka`
    - List of text (Multiple queries)
      - Strings wrapped in square brackets, separated by commas; do not contain spaces and quotation marks
        - such as: `[Kamisato Ayaka,Sangonomiya Kokomi]`
- `item_id` **Required when `type: reverse`**
  - Item ID that need to be translated to item name
  - Input rule is same to `item_name` field, supporting single integer or a list of integer
#### Return Schema
  - When requesting single translation
    - When success, will return a `Json`
      - `item_id` for corresponding item ID
      - `item_name` for corresponding item name
    - When failed, `HTTP 404 NOT FOUND` error will be returned
  - When requesting multiple translations
    - When success, will return a `Json`
      - `item_id` or `item_name` will be a list of return value
      - When the requested text is not in the database, `0` will be returned as the ID
      - When the requested ID is not in the database, `""` will be returned as the name
      - When using this method requesting the API, you need to valid the length of returned list
    - When failed, `HTTP 404 NOT FOUND` error will be returned

::: tabs
@tab Single Translation

**Request Body**
```json
{
  "lang": "en",
  "item_name": "Sangonomiya Kokomi",
  "type": "normal",
  "game": "genshin"
}
```
**Response**
```json
{
  "item_id": 10000054
}
```

@tab Multiple Translation
**Request Body**
```json
{
  "lang": "en",
  "item_name": "[Kamisato Ayaka,Sangonomiya Kokomi,a character not exist,Nahida]",
  "type": "normal",
  "game": "genshin"
}
```
**Response**
```json
{
  "item_id": [
    10000002,
    10000054,
    0,
    10000073
  ]
}
```

@tab Single Reverse-translation

**Request Body**
```json
{
  "lang": "chs",
  "item_id": "10000002",
  "type": "reverse",
  "game": "genshin"
}
```
**Response**
```json
{
  "item_name": "Kamisato Ayaka"
}
```

@tab Multiple Reverse-translation

**Request Body**
```json
{
  "lang": "en",
  "item_id": "[10000002,10000054]",
  "type": "reverse",
  "game": "genshin"
}
```
**Response**
```json
{
  "item_name": [
    "Kamisato Ayaka",
    "Sangonomiya Kokomi"
  ]
}
```

:::

### Language Identification API <Badge text="GET" type="info" vertical="top" />
This API is used to identify the language when the original text's language is not recognized.
It should not be relied on as the conversion tool between item name and item ID.
- URL: `https://api.uigf.org/identify/{game}/{text}`
#### Request Parameters
- `game`
  - Target game's name
- `text`
  - Single text that needs to be identified
    - such as: `神里绫华`
#### Return Schema
  - When success, a `Json` will be returned
    - value in the `item_id` field is the corresponding item ID
    - value in the `lang` field will be a list.
      - In most situation, there will be only 1 language in the list. However, in a few scenario, 
        the text may represent multiple language, and the list will contain multiple language code.
  - When failed, `HTTP 404 NOT FOUND` error will be returned

::: tabs
@tab Example

https://api.uigf.org/identify/genshin/神里绫华

@tab Returned Value
```json
{
  "item_id": 10000002,
  "lang": [
    "chs"
  ]
}
```
:::

### Dictionary Download API <Badge text="GET" type="info" vertical="top" />
For applications have ability converting item text and item IDs on the server or client side, 
we recommend reducing reliance on the UIGF Online Translation API.

You can obtain the Json file of the mapping between item text and item ID in each language through 
the dictionary download API.

- URL: `https://api.uigf.org/dict/{game}/{lang}.json`

#### Request Parameters
- `game`
  - Target game's name
- `lang`
  - language code, supporting languages includes `chs`, `cht`, `de`, `en`, `es`, `fr`, `id`, `jp`, `kr`,
    `pt`, `ru`, `th`, `vi`
  - If you need the full language package, you can use `all` as the value
  - If you need to download MD5 of language files, you can use `md5` as the value
#### Return Schema
- Download of Json file

::: tabs
@tab Example

https://api.uigf.org/dict/genshin/jp.json

@tab Return Value
```json
{
  "無鋒の剣": 11101,
  "銀の剣": 11201,
  "冷刃": 11301,
  "黎明の神剣": 11302,
  "旅道の剣": 11303,
  "...":"...",
  "重雲（テスト）": 11000042,
  "お試しキャラ": 11000043,
  "七七（テスト）": 11000044
}
```
:::

### MD5 Verification API <Badge text="GET" type="info" vertical="top" />

UIGF-API is providing MD5 checksum for all language Json files. Developers can use their local version's to compare with 
online version to check updates. 

Developers can use HTTP dynamic API or download MD5 Json file to check the latest MD5 checksum.

::: tabs
@tab HTTP Dynamic API

API: `https://api.uigf.org/md5/{game}`
#### Request Parameter
- `game`
  - Target game's name

#### Sample Return Value
https://api.uigf.org/md5/genshin
```json
{
  "chs": "51b02a0b306ec0a60b1756eb5ea8d96f",
  "cht": "53cd815f3129cdfc71c57d799675df8f",
  "de": "86c03e498df8da34c7028e4ee227e611",
  "en": "8b8e9c58145fd611d19e799a24e5846f",
  "es": "063b164b1bbeacdaa75e33915ccf7db9",
  "fr": "2de4e073f727b91d0b5ad8320c6476f9",
  "id": "bb22a8b0e53443b7f278c701664a3d9e",
  "jp": "06615f9a59d2119b6d4df4d07b744191",
  "kr": "f3f011bfa125e96823f7717d5def52a6",
  "pt": "7b14a8994fe93254fa8eef9eb19dbf8d",
  "ru": "c1e83580ef442a35d9d7bda7f066b083",
  "th": "5181ef5ef7f73306162dea66a54c7c0c",
  "vi": "40424f1785ea1cc2476756c80e17b069",
  "all": "722b2514d8409214282ee16de306a898"
}
```

@tab Json File Download

API: `https://api.uigf.org/dict/{game}/md5.json`

#### Request Parameter
- `game`
  - Target name's name

#### Sample Return Value
https://api.uigf.org/dict/starrail/md5.json
```json
{
  "chs": "ab765e3f23e87e48b91f576aee48a00a",
  "cht": "8e5a5bc23ca1f4deb3c3fa1e472ee1f9",
  "de": "e4c60b50dd75bb5f4dee8df0635c1712",
  "en": "a3abde3f0c0ed48415c301b5eaf04f2f",
  "es": "c2d08766bce94dc65ad92b78e30a4a9a",
  "fr": "3ab714a06945db49129c487bab73c85d",
  "id": "a3abde3f0c0ed48415c301b5eaf04f2f",
  "jp": "42b3185a9b503c54d5ee2ee4305d157d",
  "kr": "02465972fba7f211b513b6587ce74d92",
  "pt": "701d5414dc1add1e6be4b48179bd5932",
  "ru": "31107b0c2d6a1c0c8600003adf241558",
  "th": "a3abde3f0c0ed48415c301b5eaf04f2f",
  "vi": "e549c35c64edc8b26098f65ba313a428",
  "all": "e9e65534e0f64ab56c947df4dd5f353d"
}
```
:::