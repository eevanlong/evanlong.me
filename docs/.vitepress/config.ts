import { defineConfig } from 'vitepress';
import { head } from './config/head';
import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';
import { writeFileSync, readdirSync, statSync } from 'fs';

export default defineConfig({
  lang: 'zh-CN',
  title: 'Evan Long',
  description: '花花视界',
  head,
  themeConfig: {
    logo: '/logo.jpg',
    siteTitle: 'Evan Long',
    nav: [
      {
        text: '前端',
        items: [
          { text: 'HTML', link: '/frontend/html/万维网' },
          { text: 'CSS', link: '/frontend/css/发展史' },
          { text: 'JavaScript', link: '/frontend/javascript/初识' },
          { text: 'TypeScript', link: '/frontend/typescript/初识' },
          { text: 'Node', link: '/frontend/node/初识' },
          { text: '测试', link: '/frontend/test/puppeteer' },
          { text: '微信', link: '/frontend/weixin/h5' },
          { text: '浏览器', link: '/frontend/browser/时序故障排查' },
        ],
      },
      {
        text: '后端',
        items: [
          { text: 'MongoDB', link: '/backend/mongodb/初识' },
          { text: 'MySQL', link: '/backend/mysql/初识' },
        ],
      },
      {
        text: 'Linux',
        items: [{ text: 'CentOS', link: '/system/centos' }],
      },
      {
        text: 'VSCode',
        link: '/vscode/笔录',
      },
      { text: 'common', link: '/common/git' },
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/eevanlong' }],
    sidebar: {
      '/frontend/html/': [
        {
          text: '笔记目录',
          items: [
            { text: '万维网', link: '/frontend/html/万维网' },
            { text: 'XHTML', link: '/frontend/html/xhtml' },
            { text: 'HTML4', link: '/frontend/html/html4' },
            { text: 'HTML5', link: '/frontend/html/html5' },
            { text: 'HTML5Plus', link: '/frontend/html/html5plus' },
          ],
        },
      ],
      '/frontend/css/': [
        {
          text: '笔记目录',
          items: [
            { text: 'CSS发展史', link: '/frontend/css/发展史' },
            { text: 'CSS3使用', link: '/frontend/css/使用' },
            { text: 'CSS3弹性盒子布局', link: '/frontend/css/弹性盒子布局' },
            { text: 'CSS3网格布局', link: '/frontend/css/网格布局' },
            { text: 'CSS3效果实现', link: '/frontend/css/效果实现' },
          ],
        },
      ],
      '/frontend/javascript/': [
        {
          text: '笔记目录',
          items: [
            { text: 'JavaScript初识', link: '/frontend/javascript/初识' },
            {
              text: 'JavaScript内置对象',
              link: '/frontend/javascript/内置对象',
            },
            { text: 'ajax', link: '/frontend/javascript/ajax' },
          ],
        },
      ],
      '/frontend/typescript/': [
        {
          text: '笔记目录',
          items: [
            { text: 'TypeScript初识', link: '/frontend/typescript/初识' },
            {
              text: 'TypeScript高阶用法',
              link: '/frontend/typescript/高阶用法',
            },
          ],
        },
      ],
      '/frontend/node/': [
        {
          text: '笔记目录',
          items: [
            { text: 'Node初识', link: '/frontend/node/初识' },
            { text: 'Node模块', link: '/frontend/node/node模块' },
            { text: 'Node流', link: '/frontend/node/node流' },
          ],
        },
      ],
      '/frontend/weixin/': [
        {
          text: '笔记目录',
          items: [{ text: '微信公众号', link: '/frontend/weixin/h5' }],
        },
      ],
      '/frontend/test/': [
        {
          text: '笔记目录',
          items: [{ text: 'Puppeteer', link: '/frontend/test/puppeteer' }],
        },
      ],
      '/backend/mongodb': [
        {
          text: '笔记目录',
          items: [{ text: 'MongoDB初识', link: '/backend/mongodb/初识' }],
        },
      ],
      '/backend/mysql/': [
        {
          text: '笔记目录',
          items: [
            { text: 'MySQL初识', link: '/backend/mysql/初识' },
            { text: 'MySQL基本操作', link: '/backend/mysql/基本操作' },
            { text: 'MySQL表库管理', link: '/backend/mysql/表库管理' },
            { text: 'SQL查询', link: '/backend/mysql/查询' },
            { text: 'SQL更新', link: '/backend/mysql/更新' },
            { text: 'SQL插入', link: '/backend/mysql/插入' },
            { text: 'SQL删除', link: '/backend/mysql/删除' },
          ],
        },
      ],
      '/vscode/': [
        {
          text: '笔记目录',
          items: [{ text: 'VSCode笔录', link: '/vscode/笔录' }],
        },
      ],
      '/common/': [
        {
          text: '笔记目录',
          items: [
            { text: 'Git', link: '/common/git' },
            { text: 'Node工具', link: '/common/node工具' },
            { text: 'NPM收藏夹', link: '/common/npm收藏夹' },
            { text: '接口规范', link: '/common/接口规范' },
          ],
        },
      ],
    },
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

// 递归查找文件
function findFiles(dir: string, list?: string[]) {
  const files = list || [];
  const dirList = readdirSync(dir).filter(
    (name) =>
      name !== '.vitepress' &&
      name !== 'dist' &&
      name !== 'public' &&
      name !== 'index.md' &&
      name !== 'images'
  );
  dirList.forEach(function (file) {
    const path = dir + '/' + file;
    const stat = statSync(path);
    // 如果是目录，继续递归查找
    if (stat.isDirectory()) {
      return findFiles(path, files);
    }
    files.push(path);
  });
  return files;
}

// 生成网站地图 - 在编译和打包时会触发
async function generateSitemap() {
  const links = findFiles('docs')
    .map((file) => ({
      url: file
        .replace('docs/', 'https://evanlong.me/')
        .replace('.md', '.html'),
      changefreq: 'daily',
      priority: 0.9,
    }))
    .filter((item) => item.url.includes('https'));

  links.unshift({
    url: 'https://evanlong.me',
    changefreq: 'daily',
    priority: 1,
  });

  const stream = new SitemapStream({
    hostname: 'https://evanlong.me',
  });

  const data = await streamToPromise(Readable.from(links).pipe(stream));

  // 写入文件
  writeFileSync('docs/public/sitemap.xml', data.toString());
}
generateSitemap();
