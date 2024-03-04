import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import theme from "./theme.js";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";

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

  plugins: [googleAnalyticsPlugin({ id: "G-H6BK8H0332" })],

  theme,

  shouldPrefetch: false,

  bundler: viteBundler({
    viteOptions: {
      build: {
        chunkSizeWarningLimit: 1500,
      },
    },
    vuePluginOptions: {},
  }),
});
