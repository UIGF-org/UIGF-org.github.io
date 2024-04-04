import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    "",
    {
      icon: "repo",
      text: "设计初衷",
      link: "goal.md",
    },
    {
      icon: "discover",
      text: "合作项目",
      link: "partnership.md",
    },
    "api.md",
    {
      icon: "proposal",
      text: "标准化文档",
      prefix: "standards/",
      children: [
        {
          text: "原神",
          children: ["uigf.md", "uiaf.md"],
        },
        {
          text: "崩坏：星穹铁道",
          children: ["srgf.md"],
        },
      ],
    },
    {
      icon: "api",
      text: "米哈游 API 合集",
      children: [
        "mihoyo-api-collection-project.md",
        {
          text: "米游社",
          icon: "community",
          prefix: "mihoyo-api-collection/hoyolab",
          children: "structure",
        },
        {
          text: "其它",
          icon: "stack",
          prefix: "mihoyo-api-collection/other",
          children: "structure",
        },
        {
          icon: "proposal",
          text: "向 API 合集贡献",
          link: "mihoyo-api-collection/CONTRIBUTING.md",
        },
      ],
    },
  ],
});
