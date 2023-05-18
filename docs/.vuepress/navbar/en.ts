import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/en/",
  { text: "Partnerships", icon: "discover", link: "/en/partnership.md" },
  "/en/API.md",
  {
    text: "Standards",
    icon: "proposal",
    prefix: "/en/standards/",
    children: ["UIGF.md", "UIAF.md"]
  },
  {
    text: "Useful Tools",
    icon: "config",
    children: [
      {
        text: "MiHoYo API",
        link: "https://github.com/Kamisato-Ayaka-233/mihoyo-api-collect",
        icon: "repo"
      },
    ]
  },
]);
