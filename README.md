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
   <RelativeProject
    name=""
    desc=""
    logo=""
    url=""
    :thirdparty="[
      {type: 'github', url: ''},
      {type: 'gitlab', url: ''},
      {type: 'gitee', url: ''},
      {type: 'other', url: '', title: ''},
    ]"
    version=""
    preview=""
   />
   ```

   - 字段解释
     - **`name`**: 你的项目名称
     - **`desc`**: 你的项目介绍
     - **`logo`**: 项目图标的 URL
     - **`url`**: 项目主页的 URL
     - **`thirdparty`**: 项目代码库的 URL，支持 GitHub、GitLab、Gitee 和其它
     - **`version`**：项目所支持的标准及其版本，例如“UIGF v2.3”
     - **`preview`**: 项目截图或宣传图的 URL
   - 我们建议在本项目的 `docs/.vuepress/public/partnerships` 目录下以你的项目名称创建一个文件夹，并上传相关图片资源。 如果你创建的资源路径为 `docs/.vuepress/public/partnerships/sample-project/logo.png`，则其 URL 路径可以写为`https://uigf.org/partnerships/sample-project/logo.png` 或 `/partnerships/sample-project/logo.png`

4. 保存你的更改；开启一个 Pull Request 将更改提交到本库的主分支中

   - 请在 PR 评论区中上传一份你项目导出的 Json 数据文件作为参考
