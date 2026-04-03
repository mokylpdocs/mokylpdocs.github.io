import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  // 作者信息
  author: {
    name: "边界测试官",
    url: "https://github.com/mokylpdocs",
    email: "testgirl@example.com",
  },
  
  // 网站信息
  hostname: "https://mokylpdocs.github.io",
  
  // 主题颜色 - 启用主题颜色选择器
  themeColor: true,
  
  // 图标和Logo
  logo: "/logo.svg",
  logoDark: "/logo-dark.svg",
  
  // 仓库信息
  repo: "mokylpdocs/mokylpdocs.github.io",
  repoLabel: "GitHub",
  repoDisplay: true,
  
  // 文档目录
  docsDir: "src",
  docsBranch: "main",

  // 导航栏和侧边栏
  navbar,
  sidebar,
  
  // 页脚
  footer: "用心测试，让世界更美好 💝 | 测试工程师的成长笔记",
  displayFooter: true,
  copyright: "Copyright © 2024-2026 边界测试官 | 保留所有权利",
  
  // 页面元数据
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
    lastUpdated: "最后更新于",
    contributors: "贡献者",
    toc: "目录",
  },
  
  // 博客配置
  blog: {
    name: "边界测试官",
    avatar: "/me.png",
    description: "软件测试工程师 | 自动化测试爱好者 | 质量保障专家",
    intro: "/portfolio",
    roundAvatar: true,
    medias: {
      GitHub: "https://github.com/mokylpdocs",
      Email: "mailto:testgirl@example.com",
    },
    timeline: "时间轴",
    articlePerPage: 10,
    articleInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],
  },

  // Markdown 增强
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
      theme: "one-dark-pro",
    },
  },

  // 加密页面
  encrypt: {
    config: {
      "/Linux/配置云服务器.html": ["967552"],
    },
  },

  // 插件配置
  plugins: {
    // 搜索插件
    slimsearch: {
      locales: {
        "/": {
          placeholder: "搜索文档...",
        },
      },
    },
    
    // 组件插件
    components: {
      components: ["Badge", "VPCard"],
    },
    
    // 图标插件
    icon: {
      prefix: "fa6-solid:",
    },
    
    // 评论插件
    comment: {
      provider: "Giscus",
      repo: "mokylpdocs/mokylpdocs.github.io",
      repoId: "R_kgDOR4pZDg",
      category: "General",
      categoryId: "DIC_kwDOOgzE7M4C57ms",
    },
    
    // 版权信息
    copyright: {
      author: "边界测试官",
      license: "CC BY-NC-SA 4.0",
      global: true,
    },
    
    // 阅读时间
    readingTime: {
      wordPerMinute: 300,
    },
    
    // 代码复制
    copyCode: {
      showInMobile: true,
    },
  },
  
  // 功能开关
  fullscreen: true,
  backToTop: true,
  print: false,
  pure: false,
  hotReload: true,
  
  // 移动端适配
  mobileBreakPoint: 768,
  
  // 图标资源
  iconAssets: "fontawesome",
  
  // 暗黑模式
  darkmode: "switch",
  
  // 主题选择器
  themeColorPicker: true,
  
  // 导航栏和侧边栏图标
  navbarIcon: true,
  sidebarIcon: true,
  
  // 页面信息
  pageInfo: ["Author", "Date", "Category", "Tag", "ReadingTime"],
  
  // 头部注入
  head: [
    // 自定义字体
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    ["link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" }],
    ["link", { 
      href: "https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;600;700&family=Source+Code+Pro:wght@300;400;500;600&display=swap", 
      rel: "stylesheet" 
    }],
    // 自定义样式
    ["style", {}, `
      :root {
        --font-family: 'Noto Sans SC', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
        --font-family-code: 'Source Code Pro', 'SF Mono', Menlo, Monaco, 'PingFang SC', monospace;
      }
      body {
        font-family: var(--font-family);
      }
      code, pre {
        font-family: var(--font-family-code);
      }
    `],
    // 网站图标
    ["link", { rel: "icon", href: "/favicon.ico" }],
  ],
});