import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/en/",
  { text: "Partnerships", icon: "discover", link: "/en/partnership.md" },
  "/en/api.md",
  {
    text: "Standards",
    icon: "proposal",
    prefix: "/en/standards/",
    children: [
      {
        text: "Generic Standards",
        children: ["uigf.md"]
      },
      {
        text: "Genshin Impact",
        children: ["uiaf.md", "uigf-legacy-v3.0.md"],
      },
      {
        text: "Honkai: Star Rail",
        children: ["srgf.md"],
      },
    ],
  },
  {
    text: "Useful Tools",
    icon: "config",
    children: [
      {
        text: "MiHoYo API",
        link: "https://github.com/Kamisato-Ayaka-233/mihoyo-api-collect",
        icon: "repo",
      },
      {
        text: "UIGF Schema Verify Tool",
        link: "https://schema.uigf.org/",
        icon: "tool"
      }
    ],
  },
]);
