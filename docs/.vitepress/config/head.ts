import { HeadConfig } from 'vitepress';

export const head: HeadConfig[] = [
  ['link', { rel: 'icon', href: '/favicon.ico' }],
  ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
  ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ['meta', { name: 'apple-mobile-web-app-title', content: 'Evan Long' }],
  ['meta', { name: 'application-name', content: 'Evan Long' }],
  ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
  ['meta', { name: 'msapplication-TileImage', content: '/mstile-144x144.png' }],
  ['meta', { name: 'msapplication-config', content: '/sitemap.xml' }],
  [
    'meta',
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1,user‐scalable=no',
    },
  ],
  ['meta', { property: 'og:title', content: 'Evan Long' }],
  ['meta', { property: 'og:description', content: '花花视界' }],
  ['meta', { property: 'og:type', content: 'website' }],
  ['meta', { property: 'og:url', content: 'https://evanlong.com' }],
];
