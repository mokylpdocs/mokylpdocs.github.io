import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "测试基础",
    icon: "book",
    prefix: "/测试基础/",
    children: [
      {
        text: "软件测试理论",
        icon: "graduation-cap",
        link: "软件测试理论/"
      },
      {
        text: "测试方法与技术",
        icon: "lightbulb",
        link: "测试方法与技术/"
      },
      {
        text: "测试流程与规范",
        icon: "list-check",
        link: "测试流程与规范/"
      }
    ]
  },
  {
    text: "自动化测试",
    icon: "robot",
    prefix: "/自动化测试/",
    children: [
      {
        text: "Selenium WebDriver",
        icon: "globe",
        link: "Selenium/"
      },
      {
        text: "Appium 移动端测试",
        icon: "mobile-screen",
        link: "Appium/",
      },
      {
        text: "Playwright 测试框架",
        icon: "wand-magic-sparkles",
        link: "Playwright/",
      },
      {
        text: "Cypress E2E 测试",
        icon: "circle-check",
        link: "Cypress/",
      }
    ],
  },
  {
    text: "接口测试",
    icon: "plug",
    prefix: "/接口测试/",
    children: [
      {
         text: "Postman 实战",
         icon: "paper-plane",
         link: "Postman/"
      },
      {
         text: "JMeter 性能测试",
         icon: "gauge-high",
         link: "JMeter/"
      },
      {
         text: "接口自动化框架",
         icon: "gears",
         link: "接口自动化/"
      }
    ]
  },
  {
     text: "性能测试",
     icon: "chart-line",
     prefix: "/性能测试/",
     children: [
       {
         text: "性能测试基础",
         icon: "clock",
         link: "性能测试基础/"
       },
       {
         text: "LoadRunner 使用",
         icon: "bolt",
         link: "LoadRunner/"
       },
       {
         text: "性能调优实践",
         icon: "screwdriver-wrench",
         link: "性能调优/"
       }
     ]
  },
  {
     text: "测试工具",
     icon: "toolbox",
     prefix: "/测试工具/",
     children: [
       {
         text: "测试管理工具",
         icon: "folder-tree",
         link: "测试管理工具/"
       },
       {
         text: "Bug 管理系统",
         icon: "bug",
         link: "Bug管理/"
       },
       {
         text: "抓包与调试工具",
         icon: "network-wired",
         link: "抓包工具/"
       }
     ]
  },
  {
     text: "编程语言",
     icon: "code",
     prefix: "/编程语言/",
     children: [
       {
         text: "Python 测试开发",
         icon: "fa6-brands:python",
         link: "Python/"
       },
       {
         text: "Java 测试基础",
         icon: "fa6-brands:java",
         link: "Java/"
       },
       {
         text: "JavaScript/TypeScript",
         icon: "fa6-brands:js",
         link: "JavaScript/"
       }
     ]
  },
  {
     text: "数据库测试",
     icon: "database",
     link: "/数据库测试/"
  },
  {
     text: "测试面试",
     icon: "user-tie",
     prefix: "/测试面试/",
     children: [
       {
         text: "测试基础面试题",
         icon: "circle-question",
         link: "基础面试题/"
       },
       {
         text: "自动化测试面试",
         icon: "robot",
         link: "自动化面试题/"
       },
       {
         text: "面试经验分享",
         icon: "heart",
         link: "面试经验/"
       }
     ]
  },
  {
     text: "职场成长",
     icon: "seedling",
     prefix: "/职场成长/",
     children: [
       {
         text: "测试职业规划",
         icon: "road",
         link: "职业规划/"
       },
       {
         text: "工作心得分享",
         icon: "comment-dots",
         link: "工作心得/"
       },
       {
         text: "测试工程师",
         icon: "venus",
         link: "测试/"
       }
     ]
  },
  {
     text: "关于我",
     icon: "user",
     link: "/portfolio"
  }
]);
