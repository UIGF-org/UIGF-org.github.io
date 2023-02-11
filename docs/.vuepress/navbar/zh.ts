import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  { text: "合作项目", icon: "discover", link: "/partnership.md" },
  {
    text: "规范标准",
    icon: "proposal",
    prefix: "standards/",
    children: ["UIGF.md", "UIAF.md"]
  },
]);
