import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/en/",
  { text: "Partnerships", icon: "discover", link: "/en/partnership.md" },
  {
    text: "Standards",
    icon: "proposal",
    prefix: "/en/standards/",
    children: ["UIGF.md", "UIAF.md"]
  },
]);
