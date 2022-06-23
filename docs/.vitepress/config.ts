import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Evan Long',
  description: '花花视界',
  outDir: 'dist',
  themeConfig: {
    logo: '/logo.jpg',
    siteTitle: 'Evan Long',
    nav: [
      {
        text: '前端',
        items: [
          { text: 'React', link: '/frontend/react/react初识' },
          { text: 'Item B', link: '/item-2' },
          { text: 'Item C', link: '/item-3' },
          { text: 'Item C', link: '/item-3' },
          { text: 'Item C', link: '/item-3' },
          { text: 'Item C', link: '/item-3' },
          { text: 'Item C', link: '/item-3' },
        ],
      },
      {
        text: '后端',
        items: [
          { text: 'Item A', link: '/backEnd/index.md' },
          { text: 'Item B', link: '/backEnd/index.md' },
          { text: 'Item C', link: '/backEnd/index.md' },
        ],
      },
      {
        text: '系统',
        items: [
          { text: 'Linux', link: '/item-1' },
          { text: 'Item B', link: '/item-2' },
          { text: 'Item C', link: '/item-3' },
        ],
      },
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/eevanlong' }],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Getting Started', link: '/getting-started' },
        ],
      },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Evan Long',
    },
  },

  markdown: {
    theme: 'material-palenight',
    lineNumbers: false,
  },
  lastUpdated: true,
});
