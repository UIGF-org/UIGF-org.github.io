import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/en/",
  { text: "Demo", icon: "discover", link: "/partnership.md" },
  {
    text: "Standards",
    icon: "note",
    prefix: "/standards/",
    children: ["UIGF.md", "UIAF.md"]
  },
]);
