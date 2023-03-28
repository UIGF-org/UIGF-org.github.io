import { defineUserConfig } from "vuepress";
import { viteBundler } from '@vuepress/bundler-vite'
import theme from "./theme.js";
import { redirectPlugin } from "vuepress-plugin-redirect";
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'

export default defineUserConfig({
  base: "/",

  dest: "./dist",

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
    redirectPlugin({
      defaultLocale: "/en/",
      defaultBehavior: "defaultLocale",
      autoLocale: true,
      localeConfig: {
        "/en/": ["en-US", "en-UK", "en"],
        "/zh/": ["zh-CN", "zh-TW", "zh"],
      }
    }),
    docsearchPlugin({
      apiKey: "599cec31baffa4868cae4e79f180729b",
      indexName: "docsearch",
      appId: "R2IYF7ETH7"
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
