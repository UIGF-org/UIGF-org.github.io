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
          text: "Genshin Impact",
          children: ["uigf.md", "uiaf.md"],
        },
        {
          text: "Honkai: Star Rail",
          children: ["srgf.md"],
        },
      ],
    },
  ],
});
