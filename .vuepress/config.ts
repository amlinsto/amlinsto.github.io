import { defineConfig } from 'vuepress/config'
import { Sidebar, NavItems } from './config/index'

export = defineConfig(ctx => ({
    theme: '@vuepress/vue',
    dest: '../dist',
    head: [
        ['link', { rel: 'icon', href: `/favicon.ico` }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['meta', { name: 'msapplication-TileColor', content: '#587771' }]
    ],
    locales: {
        '/': {
            lang: 'zh-CN',
            title: '林斯托',
            description: 'linsto\'s works'
        },
    },

    displayFooter: true,
    copyright: "Copyright © 2021-present Linsto",

    themeConfig: {
        repo: 'vuejs/vuepress',
        editLinks: false,
        docsDir: '.',
        // #697 Provided by the official algolia team.
        algolia: ctx.isProd && false
            ? {
                apiKey: '3a539aab83105f01761a137c61004d85',
                indexName: 'vuepress',
                algoliaOptions: {
                    facetFilters: ['tags:v1']
                }
            }
            : null,
        smoothScroll: true,
        locales: {
            '/': {
                label: 'English',
                selectText: 'Languages',
                ariaLabel: 'Select language',
                editLinkText: 'Edit this page on GitHub',
                lastUpdated: 'Last Updated',
                nav: NavItems,
                sidebar: Sidebar
            },
        }
    },
    plugins: [
        ['@vuepress/back-to-top', true],
        [
            '@vuepress/pwa',
            {
                serviceWorker: true,
                updatePopup: true
            }
        ],
        ['@vuepress/medium-zoom', true],
        [
            '@vuepress/google-analytics',
            {
                ga: 'G-VW6J1NY73F'
            }
        ],
        [
            'vuepress-plugin-container',
            {
                type: 'vue',
                before: '<pre class="vue-container"><code>',
                after: '</code></pre>'
            }
        ],
        [
            'vuepress-plugin-container',
            {
                type: 'upgrade',
                before: info => `<UpgradePath title="${info}">`,
                after: '</UpgradePath>'
            }
        ],
        ['vuepress-plugin-flowchart']
    ],
    extraWatchFiles: ['.vuepress/config/**'],
    evergreen: !ctx.isProd
}));
