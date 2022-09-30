import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  { text: "案例", icon: "discover", link: "/partnership.md" },
  {
    text: "规范标准",
    icon: "note",
    prefix: "/standards/",
    children: ["UIGF.md", "UIAF.md"]
  },
]);
