import { NavItem } from 'vuepress/config'

export const NavItems: NavItem[] = [
    {
        text: 'Blog',
        link: '/'
    },
    {
        text: 'More',
        ariaLabel: '了解更多',
        items: [
            {
                text: '炒菜配方手册',
                link: '/docs/cook'
            },
        ]
    },
]