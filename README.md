# UIGF-Org Website

[简体中文] [[English]](./README-EN.md)

这是 UIGF-Org 网站的代码储存库。你可以访问 [https://uigf.org](https://uigf.org) 以查看实时版本

## 本地测试

### 第一次安装

- 安装 [NodeJS 18](https://nodejs.org/en/download/)
- 使用 [GitHub Desktop](https://desktop.github.com/) 或者 Git 命令行来克隆本库 (`git clone`)
- 在**项目根目录**运行 `npm install` 命令

### 本地测试

- 在**项目根目录**运行 `npm run docs:dev` 命令
  - 站点会默认运行在 `http://localhost:8080` 

## 如何在主页中添加你的项目

1. 克隆这个库

2. 在 `docs/en/` 和 `docs/zh/` 目录下，找到 `partnership-list.md`

3. 在正确的标准区域中，复制以下代码并填入你项目的信息

   ```html
    <Pcd
      bg=""
      icon=""
      repo=""
      site=""
      title=""
      desc="">
      <Pcb label="UIGF vx.x" :games="['ys', 'sr', 'zzz_']" bg=""></Pcb>
      <Pcb bg="">Text</Pcb>
    </Pcd>
   ```

   - 字段解释
     - **`bg`**: 项目截图或宣传图的 URL
     - **`icon`**: 项目图标的 URL
     - **`repo`**: 项目代码库的 URL
     - **`site`**: 项目主页的 URL
     - **`title`**: 你的项目名称
     - **`desc`**: 你的项目介绍
     - **`games`**: 你的项目支持的游戏列表，可选值为 `ys`,`ys_`,`sr`,`sr_`,`zzz`,`zzz_`，后面的 `_` 表示不支持，按照原神、星铁、绝区零的顺序填写
       - 项目支持 UIGF v4.0且支持原神、星铁、绝区零，应填写 `label="UIGF v4.0" :games="['ys', 'sr', 'zzz']"`
       - 项目支持 UIGF v2.2，应填写 `label="UIGF v2.2" :games="['ys']"`
       - 若有追加说明，可使用 `<Pcb>Text</Pcb>` 标签，其中 `Text` 为你的说明文字
     - **`bg`**: 可选字段，你的说明文字的背景颜色，可选值为 `red`, `blue`, `green`, `yellow`, `purple`,`white`
     
   - 我们建议在本项目的 `docs/.vuepress/public/partnerships` 目录下以你的项目名称创建一个文件夹，并上传相关图片资源。 如果你创建的资源路径为 `docs/.vuepress/public/partnerships/sample-project/logo.png`，则其 URL 路径可以写为`https://uigf.org/partnerships/sample-project/logo.png` 或 `/partnerships/sample-project/logo.png`

4. 保存你的更改；开启一个 Pull Request 将更改提交到本库的主分支中

   - 请在 PR 评论区中上传一份你项目导出的 Json 数据文件作为参考
