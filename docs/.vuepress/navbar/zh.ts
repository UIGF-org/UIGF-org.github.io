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
        "text": "通用型标准",
        children: ["uigf.md"]
      },
      {
        text: "原神",
        children: ["uiaf.md", "uigf-legacy-v3.0.md"],
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
      {
        text: "UIGF 格式校验工具",
        link: "https://schema.uigf.org/",
        icon: "tool"
      }
    ],
  },
]);
