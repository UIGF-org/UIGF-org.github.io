import { defineUserConfig } from "vuepress";
import { viteBundler } from '@vuepress/bundler-vite'
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  dest: "./dist",

  locales: {
    "/en/": {
      lang: "en-US",
      title: "UIGF-org",
      description: "Uniformed Interchangeable GenshinData Format",
    },
    "/": {
      lang: "zh-CN",
      title: "UIGF-org",
      description: "统一可交换原神数据标准",
    },
  },

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
