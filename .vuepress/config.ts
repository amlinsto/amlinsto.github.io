import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";

export default defineUserConfig<DefaultThemeOptions>({
  // 站点配置
  lang: "cn-ZH",
  title: "林斯托",
  description: "Linsto's works",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],

  // 主题和它的配置
  theme: "@vuepress/theme-default",
  themeConfig: {
    logo: "/favicon.ico",
    darkMode: false,
    navbar: [
      {
        text: "Blog",
        link: "/",
      },
      {
        text: "More and More",
        children: [
          {
            text: "WIP",
            children: [
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
                text: "友链",
                link: "/links",
              },
            ],
          },
        ],
      },
    ],
    sidebar: "auto",
    sidebarDepth: 1,
    lastUpdated: true,
    lastUpdatedText: "上次更新",
    contributors: true,
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
