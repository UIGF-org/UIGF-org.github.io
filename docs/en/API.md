---
headerDepth: 2
category: [API]
icon: api
---

# UIGF API 

## Introduction
In UIGF standard v2.3, we prioritize `item_id` and make it as a required field.
This allows UIGF data set to support multi-language environment that common seen in international server,
and allows worldwide Genshin-related software been connected together.

However, some software are running at a limited server environment, so it is hard to them to convert 
item name to item ID. As a result, UIGF-Org is now supporting the open-source community with an API for translation.

The API is open-sourced at [UIGF-org/UIGF-API](https://github.com/UIGF-org/UIGF-API)

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
  "type": "normal"
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
  "type": "normal"
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
  "type": "reverse"
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
  "type": "reverse"
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
- URL: `https://api.uigf.org/identify/{text}`
#### Request Parameters
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

https://api.uigf.org/generic-translate/神里绫华

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

- URL: `https://api.uigf.org/dict/{lang}.json`

#### Request Parameters
- `lang`
  - language code, supporting languages includes `chs`, `cht`, `de`, `en`, `es`, `fr`, `id`, `jp`, `kr`,
    `pt`, `ru`, `th`, `vi`
#### Return Schema
- Download of Json file

::: tabs
@tab Example

https://api.uigf.org/dict/jp.json

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

