import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  { text: "合作项目", icon: "discover", link: "/zh/partnership.md" },
  "/zh/api.md",
  {
    text: "规范标准",
    icon: "proposal",
    prefix: "/zh/standards/",
    children: [
      {
        text: "原神",
        children: ["uigf.md", "uiaf.md"],
      },
      {
        text: "崩坏：星穹铁道",
        children: ["srgf.md"],
      },
    ],
  },
  {
    text: "实用工具",
    icon: "config",
    children: [
      {
        text: "米哈游 API 合集",
        link: "/zh/mihoyo-api-collection-project.html",
        icon: "api",
      },
    ],
  },
]);
