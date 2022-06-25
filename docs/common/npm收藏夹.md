---
title: NPM收藏夹
---

# NPM 收藏夹

## 工具相关

[md5](https://www.npmjs.com/package/md5) 加密工具

[silly-datetime](https://www.npmjs.com/package/silly-datetime) 格式化日期

[mkdirp](https://www.npmjs.com/package/mkdirp) 生成目录，支持一次生成多级目录，已存在的目录默认不会创建

[cheerio](https://github.com/cheeriojs/cheerio/wiki/Chinese-README) 可以让你在 nodeJS 获取 DOM 元素，操作和 jQuery 一样

npm-check-updates 更新你当前项目的所有模块

```bash
npm install npm-check-updates -g # 全局安装
npm-check-updates # 使用
ncu # 简写
ncu -u # 更新全部模块
```

## 优化相关

[nprogress](https://github.com/rstacruz/nprogress) 进度条

## Vue 插件

[vue-table-with-tree-grid](https://github.com/MisterTaki/vue-table-with-tree-grid) 树形表格

[vue-aplayer](https://aplayer.netlify.app/docs/) 音乐播放器

[vue-slim-better-scroll](https://wannaxiao.github.io/vue-slim-better-scroll/docs/dist/) 移动端滚动组件

## DayJS

格式化时间
```js
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/zh-cn';

dayjs.extend(relativeTime).locale('zh-cn');
nowCreateTime = dayjs(item.updated_at).format('YYYY/MM/DD');
nowUpdateTime = dayjs(item.updated_at).fromNow();
```

## nodemon

nodemon 是一种可以自动检测到目录中的文件更改时通过重新启动应用程序来调试基于 node.js 的应用程序

### 安装

```bash
npm install nodemon -g / npm install nodemon -D
```

### 使用

```bash
nodemon -h // 查看帮助
nodemon main.js // 启动node服务
nodemon main.js localhost 6677 // 在本地6677端口启动node服务
```

### 延迟重启

```bash
nodemon --delay 10 server.js  # 延迟10秒启动
nodemon --delay 2.5 server.js # 延迟2.5秒启动
nodemon --delay 2500ms server.js # 延迟2500毫秒启动
```

### 配置文件

nodemon 支持本地和全局配置文件。这些通常是命名的 nodemon.json，可以位于当前工作目录或主目录中。可以使用该--config 选项指定备用本地配置文件。

```json
{
  "verbose": true,
  "ignore": ["*.test.js", "fixtures/*"], // 忽略的文件名后缀或文件夹
  /**
   * 当监控到变化时，自动执行的命令
   */
  "execMap": {
    "rb": "ruby",
    "pde": "processing --sketch={{pwd}} --run"
  }
}
```
