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
    }
  ],
});
