import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";

export default hopeTheme(
  {
    hostname: "https://uigf.org",

    author: {
      name: "UIGF-org",
      url: "https://github.com/UIGF-org",
    },

    iconAssets: [
      "https://at.alicdn.com/t/c/font_2410206_5vb9zlyghj.css",
    ],

    logo: "/uigf-logo128.png",

    repo: "UIGF-org",

    repoDisplay: true,

    docsDir: "docs",

    pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

    locales: {
      "/en/": {
        // navbar
        navbar: enNavbar,

        // sidebar
        sidebar: enSidebar,

        footer: "Uniformed Interchangeable GenshinData Format",

        displayFooter: true,

        metaLocales: {
          editLink: "Edit this page on GitHub",
        },
      },

      /**
       * Chinese locale config
       */
      "/zh/": {
        // navbar
        navbar: zhNavbar,

        // sidebar
        sidebar: zhSidebar,

        footer: "统一可交换原神数据标准",

        displayFooter: true,

        // page meta
        metaLocales: {
          editLink: "在 GitHub 上编辑此页",
        },
      },
    },

    plugins: {
      // Disable features you don't want here
      mdEnhance: {
        align: true,
        attrs: true,
        codetabs: true,
        hint: true,
        demo: true,
        gfm: false,
        imgSize: true,
        include: true,
        imgLazyload: true,
        mark: true,
        playground: {
          presets: ["ts", "vue"],
        },
        stylize: [
          {
            matcher: "Recommanded",
            replacer: ({ tag }) => {
              if (tag === "em")
                return {
                  tag: "Badge",
                  attrs: { type: "tip" },
                  content: "Recommanded",
                };
            },
          },
        ],
        sub: true,
        sup: true,
        tabs: true,
        vPre: true,
      },
      components: {
        components: ["SiteInfo", "Badge", "FontIcon"],
      },

      pwa: false,

      docsearch: {
        appId: "8RHTTFZDBN",
        apiKey: "3ff93fd55e3600cff166ca199d6e05cd",
        indexName: "uigf",
        locales: {
          "/zh/": {
            placeholder: "搜索文档",
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                searchBox: {
                  resetButtonTitle: "清除查询条件",
                  resetButtonAriaLabel: "清除查询条件",
                  cancelButtonText: "取消",
                  cancelButtonAriaLabel: "取消",
                },
                startScreen: {
                  recentSearchesTitle: "搜索历史",
                  noRecentSearchesText: "没有搜索历史",
                  saveRecentSearchButtonTitle: "保存至搜索历史",
                  removeRecentSearchButtonTitle: "从搜索历史中移除",
                  favoriteSearchesTitle: "收藏",
                  removeFavoriteSearchButtonTitle: "从收藏中移除",
                },
                errorScreen: {
                  titleText: "无法获取结果",
                  helpText: "你可能需要检查你的网络连接",
                },
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                  closeText: "关闭",
                  searchByText: "搜索提供者",
                },
                noResultsScreen: {
                  noResultsText: "无法找到相关结果",
                  suggestedQueryText: "你可以尝试查询",
                  reportMissingResultsText: "你认为该查询应该有结果？",
                  reportMissingResultsLinkText: "点击反馈",
                },
              },
            },
          },
          "/en/": {
            placeholder: "Search documents",
            translations: {
              button: {
                buttonText: "Search documents",
              },
            },
          },
        },
      },
      redirect: {
        defaultLocale: "/en/",
        defaultBehavior: "defaultLocale",
        autoLocale: true,
        localeConfig: {
          "/en/": ["en-US", "en-UK", "en"],
          "/zh/": ["zh-CN", "zh-TW", "zh"],
        },
        switchLocale: "modal",
      },
    },
  },
  {
    custom: true,
  },
);
