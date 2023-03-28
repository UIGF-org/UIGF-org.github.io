import { defineUserConfig } from "vuepress";
import { viteBundler } from '@vuepress/bundler-vite'
import theme from "./theme.js";
import { redirectPlugin } from "vuepress-plugin-redirect";

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
    redirectPlugin({
      defaultLocale: "/en/",
      defaultBehavior: "defaultLocale",
      autoLocale: true,
      localeConfig: {
        "/en/": ["en-US", "en-UK", "en"],
        "/zh/": ["zh-CN", "zh-TW", "zh"],
      }
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
