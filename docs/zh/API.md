---
redirectFrom: /API.html
headerDepth: 1
category: [API]
icon: api
---

# UIGF API 

## 介绍
在统一可交换祈愿记录标准2.3版本中，我们将`item_id`的优先度提高，成为必填的字段。
这将允许 UIGF 数据集支持国际服的多语言环境，进而将更多的原神工具连接在一起。

但是，一些程序运行于受限的环境中，在将祈愿获取物品名称转化为物品 ID 的过程中有困难。所以 UIGF-Org 提供了一个用于翻译物品文本的 API，
供需要该资源的任何开源程序使用。

本 API 已开源于 [UIGF-org/UIGF-API](https://github.com/UIGF-org/UIGF-API)

## 使用
UIGF API 有三个常用接口，示例如下
### 翻译接口 <Badge text="POST" type="tip" vertical="top" />
翻译接口会将指定语言的文本文字转义为原神内置的物品 ID 或通过反向翻译将指定的物品 ID 翻译成指定语言
- 接口地址：`https://api.uigf.org/translate/`
- Body Json
  ```Json
  {
    "lang": "language",
    "type": "normal|reverse",
    "item_name": "str | str[]",
    "item_id": "int | int[]"
    
  }
  ```
#### 请求参数
- `lang` **必填**
  - 需要翻译的文本的原始语言
  - 可接受的语言参数包括 `chs`, `cht`, `de`, `en`, `es`, `fr`, `id`, `jp`, `kr`,
  `pt`, `ru`, `th`, `vi`
- `type` **必填**
  - 翻译接口的方法
    - 当 `type` 值为 `normal` 时，接口将文本翻译成物品 ID
    - 当 `type` 值为 `reverse` 时，接口将物品 ID 翻译成文本
- `item_name` **当 `type: normal` 时必填**
  - 需要翻译的文本或文本列表
    - 需要翻译的文本（单条数据查询时）
      - 比如：`神里绫华`
    - 或者一个包含翻译文本的列表（多条数据查询时）
      - 由方括号包裹字串符，以英文半角逗号间隔，不需要包含空格和引号
        - 比如：`[神里绫华,神里绫人]`
- `item_id` **当 `type: reverse` 时必填**
  - 需要翻译的物品 ID
  - 数据规则和`item_name`一致，支持单个整数或一个整数列表
#### 返回格式
  - 当请求单个文本翻译
    - 成功时，将返回一个`Json`
      - `item_id`键的值为对应物品 ID
      - `item_name`键的值为对应物品名称
    - 失败时，将返回 `HTTP 404 NOT FOUND` 错误
  - 当请求多个文本翻译
    - 成功时，将返回一个`Json`
      - `item_id`或`item_name`的值为一个列表
      - 当列表中有文本不存在于数据库中，则会为该记录返回值为`0`的 ID
      - 当列表中有 ID 不存在于数据库中，则会为该记录返回值为`""`的名称
      - 使用该方法请求 API 时需要检验请求的列表长度是否等于返回的列表的长度
    - 失败时，将返回 `HTTP 404 NOT FOUND` 错误

::: tabs
@tab 单条翻译查询

**Request Body**
```json
{
  "lang": "chs",
  "item_name": "珊瑚宫心海",
  "type": "normal"
}
```
**Response**
```json
{
"item_id": 10000054
}
```



@tab 多条翻译查询
**Request Body**
```json
{
  "lang": "chs",
  "item_name": "[神里绫华,神里绫人,不存在的角色,纳西妲,妮露,甘雨,珊瑚宫心海]",
  "type": "normal"
}
```
**Response**
```json
{
  "item_id": [
    10000002,
    10000066,
    0,
    10000073,
    10000070,
    10000037,
    10000054
  ]
}
```

@tab 单条反向翻译查询

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
  "item_name": "神里绫华"
}
```

@tab 多条反向翻译查询

**Request Body**
```json
{
  "lang": "chs",
  "item_id": "[10000000, 10000003, 10000002]",
  "type": "reverse"
}
```
**Response**
```json
{
  "item_name": [
    "",
    "琴",
    "神里绫华"
  ]
}
```

:::

### 语言判断接口 <Badge text="GET" type="info" vertical="top" />
该接口用于当无法判断原始文本语言时使用，不应该依赖其作为物品文本和物品 ID 之间的批量转换
- 接口 URL 
  - `https://api.uigf.org/generic-translate/{text}`
#### 请求参数
- `text`
  - 单个需要翻译的文本
    - 比如：`神里绫华`
#### 返回格式
  - 成功时，将返回一个`Json`
    - `item_id`键的值即为对应物品 ID
    - `lang`键的值为一个列表，其包含找到的对应语言。通常情况，该列表仅会有一个语言代码。但在少数情况下，一个文本可能在多个语言下代表同一个物品。
    这种情况下，列表中会有多个语言代码。
  - 失败时，将返回 `HTTP 404 NOT FOUND` 错误

::: tabs
@tab 样例

https://api.uigf.org/generic-translate/神里绫华

@tab 返回值
```json
{
  "item_id": 10000002,
  "lang": [
    "chs"
  ]
}
```
:::

### 字典下载接口 <Badge text="GET" type="info" vertical="top" />
对于有能力在服务端或用户端进行物品文本和物品 ID 转换的工具，我们推荐减少对 UIGF 在线翻译 API 的依赖。

你可以通过字典下载接口获取到各个语言的物品文本和物品 ID 转换关系的 Json 文件

- 接口 URL 
  - `https://api.uigf.org/dict/{lang}.json`
#### 请求参数
- `lang`
  - 语言代码，目前可接受的语言包含 `chs`, `cht`, `de`, `en`, `es`, `fr`, `id`, `jp`, `kr`,
    `pt`, `ru`, `th`, `vi`
#### 返回格式
- Json 文件的下载

::: tabs
@tab 样例

https://api.uigf.org/dict/jp.json

@tab 返回值
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

