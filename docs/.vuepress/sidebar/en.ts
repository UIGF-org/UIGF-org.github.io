import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/en/": [
    "",
    {
      icon: "discover",
      text: "Our Partnerships",
      link: "partnership.md",
    },
    {
      icon: "note",
      text: "Standards Document",
      prefix: "/en/standards/",
      children: ["UIGF.md", "UIAF.md"]
    }
  ],
});
