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

1. 请确保您的项目对于对应标准具有完整的导入与导出支持，能够正确导出可通过验证的该标准格式文件，能够正确导入可通过验证的、仅具有必要字段的该标准格式文件。

2. 克隆这个库

3. 在 `docs/en/` 和 `docs/zh/` 目录下，找到 `partnership-list.md`

4. 在正确的标准区域中，复制以下代码并填入你项目的信息

   ```html
    <Pcd
      bg=""
      icon=""
      repo=""
      site=""
      title=""
      desc=""
      import
      export>
      <template #import>
        <Pcb label="UIGF vx.x" :games="['ys', 'sr', 'zzz_']" bg=""></Pcb>
        <Pcb bg="">Text</Pcb>
      </template>
      <template #export>
        <Pcb label="UIGF vx.x" :games="['ys', 'sr', 'zzz_']" bg=""></Pcb>
        <Pcb bg="">Text</Pcb>
      </template>
    </Pcd>
   ```

   - 字段解释
     - **`bg`**: 项目截图或宣传图的 URL
     - **`icon`**: 项目图标的 URL
     - **`repo`**: 项目代码库的 URL
     - **`site`**: 项目主页的 URL
     - **`title`**: 你的项目名称
     - **`desc`**: 你的项目介绍
     - **`games`**: 你的项目支持的游戏列表，可选值为 `ys`,`ys_`,`sr`,`sr_`,`zzz`,`zzz_`，后面的 `_` 表示不支持，按照原神、星铁、绝区零的顺序填写。列表中应含有对于该标准所涵盖的**所有游戏**的支持情况。
       - 项目支持 UIGF v4.0且支持原神、绝区零，不支持星铁，应填写 `label="UIGF v4.0" :games="['ys', 'sr_', 'zzz']"`
       - 项目支持 UIGF v2.2，应填写 `label="UIGF v2.2" :games="['ys']"`
       - 若有追加说明，可使用 `<Pcb>Text</Pcb>` 标签，其中 `Text` 为你的说明文字
     - **`bg`**: 可选字段，你的说明文字的背景颜色，可选值为 `red`, `blue`, `green`, `yellow`, `purple`,`white`
     - **`import`**、**`export`**：**建议填写字段**，对项目导入和导出的支持情况进行说明

   - 示例代码：

     ```html
     <!-- 项目支持UIGFv2.4~4.0的导入，但仅支持UIGF3.0 4.0的导出 -->
     <Pcd
       bg="/partnerships/TeyvatGuide/AppPreview.png"
       icon="/partnerships/TeyvatGuide/logo.png"
       repo="https://github.com/BTMuli/TeyvatGuide"
       site="https://apps.microsoft.com/detail/9NLBNNNBNSJN"
       title="提瓦特指南"
       desc="Game Tool for Genshin Impact Player"
       import export>
       <template #import>
         <Pcb label="UIGF v4.0" :games="['ys', 'sr_', 'zzz_']" bg="orange"></Pcb>
         <Pcb label="UIGF v3.0" :games="['ys']" bg="white"></Pcb>
         <Pcb label="UIGF v2.4" :games="['ys']" bg="white"></Pcb>
         <Pcb label="UIGF v2.3" :games="['ys']" bg="white"></Pcb>
       </template>
       <template #export>
         <Pcb label="UIGF v4.0" :games="['ys', 'sr_', 'zzz_']" bg="orange"></Pcb>
         <Pcb label="UIGF v3.0" :games="['ys']" bg="white"></Pcb>
       </template>
     </Pcd>
     <!-- 项目支持UIAFv1.1的导入导出 -->
     <Pcd 
       bg="https://img.alicdn.com/imgextra/i4/1797064093/O1CN01F0AGTl1g6dvW6j28q_!!1797064093.png"
       icon="https://img.alicdn.com/imgextra/i4/1797064093/O1CN01oaGvKE1g6dut0pICS_!!1797064093.png"
       repo="https://github.com/DGP-Studio/Snap.Hutao"
       site="https://hut.ao/"
       title="胡桃工具箱"
       desc="实用的开源多功能原神工具箱">
       <Pcb label="UIAF v1.1" :games="['ys']" bg="red"></Pcb>
     </Pcd>
     ```
     
   - 若您的项目
      - 支持 UIGF v4.0或以上版本
      - 已经是UIGF v3.0或以下版本 或 SRGF的认证合作项目
      - 仍然保留对UIGF v3.0或以下版本 或 SRGF的完整支持

      请仅将您的项目置于“使用 UIGF (v4.0 或以上) 标准的项目”区域中，并添加对应旧有认证版本的<Pcb>标签。该标签的背景颜色建议选择`white`。
   - 我们建议在本项目的 `docs/.vuepress/public/partnerships` 目录下以你的项目名称创建一个文件夹，并上传相关图片资源。 如果你创建的资源路径为 `docs/.vuepress/public/partnerships/sample-project/logo.png`，则其 URL 路径可以写为`https://uigf.org/partnerships/sample-project/logo.png` 或 `/partnerships/sample-project/logo.png`

5. 保存你的更改；开启一个 Pull Request 将更改提交到本库的主分支中

   - 请在 PR 评论区中上传一份你项目导出的 Json 数据文件作为参考
   - 你也可以将导出的 Json 通过 [UIGF-SchemaVerify](https://schema.uigf.org) 进行验证
