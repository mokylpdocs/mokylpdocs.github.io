import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "边界测试官的技术花园 🌸",
  description: "女性软件测试工程师的成长笔记与技术分享",
  head: [
    ["link", { rel: "icon", href: "/logo.svg" }]
  ],

  theme, pagePatterns: ['**/*.md', '!_.md', '!.vuepress', '!node_modules'],

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});