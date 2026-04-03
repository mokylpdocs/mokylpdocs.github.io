import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  author: {
    name: "边界测试官",
    url: "https://github.com/mokylpdocs",
  },
  themeColor: {
    pink: "#ff69b4",      // 温馨粉色
    purple: "#9370db",    // 优雅紫色
    lavender: "#e6b3ff",  // 薰衣草色
    mint: "#98d8c8",      // 薄荷绿
    peach: "#ffb6c1",     // 桃粉色
    blue: "#87ceeb",      // 天蓝色
  },

  logo: "/logo.svg",

  repo: "mokylpdocs/mokylpdocs.github.io",

  docsDir: "src",

  navbar,
  sidebar,

  footer: "用心测试，让世界更美好 💝",
  displayFooter: true,

  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  markdown: {
    align: true,
    attrs: true,
    codeTabs: true,
    component: true,
    demo: true,
    figure: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    mark: true,
    plantuml: true,
    spoiler: true,
    sub: true,
    sup: true,
    tabs: true,
    tasklist: true,
    vPre: true,
    highlighter: {
      type: "shiki",
      theme: "one-dark-pro", // 苹果浅色
    },
  },

  encrypt: {
    config: {
      "/Linux/配置云服务器.html": ["967552"],
    },
  },

  plugins: {
    slimsearch: {
      locales: {
        "/": {
          placeholder: "搜索...",
        },
      },
    },
    components: {
      components: ["Badge", "VPCard"],
    },
    icon: {
      prefix: "fa6-solid:",
    },
    comment: {
      provider: "Giscus",
      repo: "mokylpdocs/mokylpdocs.github.io", // data-repo
      repoId: "R_kgDOR4pZDg", // data-repo-id
      category: "General", // data-category
      categoryId: "DIC_kwDOOgzE7M4C57ms", // data-category-id
    },
  },
});
