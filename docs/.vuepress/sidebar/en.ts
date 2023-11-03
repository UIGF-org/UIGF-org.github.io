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
    "API.md",
    {
      icon: "proposal",
      text: "Standards Document",
      prefix: "standards/",
      children: [
        {
          text: "Genshin Impact",
          children: ["UIGF.md", "UIAF.md"],
        },
        {
          text: "Honkai: Star Rail",
          children: ["SRGF.md"],
        },
      ],
    },
  ],
});
