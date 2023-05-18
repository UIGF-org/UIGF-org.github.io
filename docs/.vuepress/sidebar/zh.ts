import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    "",
    {
      icon: "discover",
      text: "合作项目",
      link: "partnership.md",
    },
    "API.md",
    {
      icon: "proposal",
      text: "标准化文档",
      prefix: "standards/",
      children: "structure"
    },
    {
      icon: "api",
      text: "米哈游 API 合集",
      children: [
          "MiHoYo-API-Collection-project.md",
          {
              text: "米游社",
              icon: "community",
              prefix: "mihoyo-api-collection/hoyolab",
              children: "structure"
          },
          {
              text: "其它",
              icon: "stack",
              prefix: "mihoyo-api-collection/other",
              children: "structure",
          },
          {
              icon: "proposal",
              text: "向 API 合集贡献",
              link: "mihoyo-api-collection/CONTRIBUTING.md"
          }
      ]
    },

  ],
});
