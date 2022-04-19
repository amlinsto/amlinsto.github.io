import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";

export default defineUserConfig<DefaultThemeOptions>({
  // 站点配置
  lang: "cn-ZH",
  title: "林斯托",
  description: "linsto is here",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],

  // 主题和它的配置
  theme: "@vuepress/theme-default",
  themeConfig: {
    logo: "/favicon.ico",
    darkMode: false,
    navbar: [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "Tweets",
        link: "/tweets",
      }, 
      {
        text: "More and More",
        children: [
          {
            text: "WIP",
            children: [
              {
                text: "短篇小论",
                link: "/blog",
              }, 
              {
                text: "做饭配方手册",
                link: "/cookbook",
              },
            ],
          },
          {
            text: "Resources",
            children: [
              {
                text: "我的书签",
                link: "/bookmarks",
              },
            ],
          },
        ],
      },
    ],
    sidebar: "auto",
    sidebarDepth: 1,
    lastUpdated: true,
    lastUpdatedText: "发布于",
    contributors: false,
    contributorsText: "贡献者",
  },

  plugins: [
    [
      "@vuepress/plugin-search",
      {
        locales: {
          "/": {
            placeholder: "",
          },
        },
      },
    ],
    [
      '@vuepress/plugin-google-analytics',
      {
        id: 'G-VW6J1NY73F',
      },
    ],
  ],
});
