import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/en/": [
    "",
    {
      icon: "repo",
      text: "Our Goal",
      link: "goal.md",
    },
    {
      icon: "discover",
      text: "Our Partnerships",
      link: "partnership.md",
    },
    "api.md",
    {
      icon: "proposal",
      text: "Standards Document",
      prefix: "standards/",
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
  ],
});
