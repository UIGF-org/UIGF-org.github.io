import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  { text: "合作项目", icon: "discover", link: "/zh/partnership.md" },
  "API.md",
  {
    text: "规范标准",
    icon: "proposal",
    prefix: "/zh/standards/",
    children: ["UIGF.md", "UIAF.md"]
  },
]);
