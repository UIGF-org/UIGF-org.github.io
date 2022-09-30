import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      icon: "discover",
      text: "合作项目",
      link: "partnership.md",
    },
    {
      icon: "note",
      text: "标准化文档",
      prefix: "/standards/",
      children: ["UIGF.md", "UIAF.md"]
    }
  ],
});
