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
      prefix: "mihoyo-api-collection/",
      children: [
          {
              text: "米游社",
              icon: "stack",
              prefix: "hoyolab",
              children: "structure"
          },
          {
              text: "其它",
              icon: "stack",
              prefix: "other",
              children: "structure"
          },
          "CONTRIBUTING.md"
        ]
    },

  ],
});
