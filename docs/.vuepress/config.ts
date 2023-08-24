import { defineUserConfig } from "vuepress";
import { viteBundler } from '@vuepress/bundler-vite'
import theme from "./theme.js";
import { redirectPlugin } from "vuepress-plugin-redirect";
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'

export default defineUserConfig({
  base: "/",

  dest: "./dist",

  head: [
      ['script', {'type': 'text/javascript', 'src': '/blacklist.html'}]
  ],

  locales: {
    "/en/": {
      lang: "en-US",
      title: "UIGF-org",
      description: "Uniformed Interchangeable GenshinData Format",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "UIGF-org",
      description: "统一可交换原神数据标准",
    },
  },

  plugins: [
    googleAnalyticsPlugin({
      id: 'G-H6BK8H0332',
    }),
    docsearchPlugin({
      appId: "8RHTTFZDBN",
      apiKey: "3ff93fd55e3600cff166ca199d6e05cd",
      indexName: "uigf",
      locales: {
        "/zh/": {
          placeholder: "搜索文档",
          translations:{
            button:{
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
          }
        },
        "/en/": {
          placeholder: "Search documents",
          translations:{
            button:{
              buttonText: "Search documents"
            }
          }
        }
      }
    }),
    redirectPlugin({
      defaultLocale: "/en/",
      defaultBehavior: "defaultLocale",
      autoLocale: true,
      localeConfig: {
        "/en/": ["en-US", "en-UK", "en"],
        "/zh/": ["zh-CN", "zh-TW", "zh"],
      },
      switchLocale: "modal"
    }),
  ],

  theme,

  shouldPrefetch: false,

  bundler: viteBundler({
    viteOptions: {
      build:{
        chunkSizeWarningLimit: 1500
      }
    },
    vuePluginOptions: {},
  }),
});
