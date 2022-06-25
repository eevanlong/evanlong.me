---
title: node工具
---

# Node 工具

## 源管理器

::: tip

cgr 是一个 npm 和 Yarn 的综合源管理器，提供系统命令，用于实现快速源地址切换

​ 执行`npm install cgr -g` 进行全局安装

:::

```bash
cgr ls # 查看源
cgr use <registry> [type] # 使用源
cgr add <registry> <url> [home] # 添加源
cgr del <registry> # 删除源
cgr test [registry] # 测试源速度
cgr help # 查看帮助
```

## nvm 简介

nvm 是 NodeJS 的版本管理器

### nvm 与 n 的区别

node 版本管理工具还有一个是 TJ 大神的 [n](https://github.com/tj/n) 命令，n 命令是作为一个 node 的模块而存在，而 nvm 是一个独立于 node/npm 的外部 shell 脚本，因此 n 命令相比 nvm 更加局限。

由于 npm 安装的模块路径均为 `/usr/local/lib/node_modules`，当使用 n 切换不同的 node 版本时，实际上会共用全局的 node/npm 目录。 因此不能很好的满足『按不同 node 版本使用不同全局 node 模块』的需求。

### Windows 版安装

> 安装路径最好不要出现中文和空格

下载地址：[https://github.com/coreybutler/nvm-windows](https://github.com/coreybutler/nvm-windows)

### 使用

```bash
nvm install stable # 安装最新稳定版

nvm install unstable # 安装最新版

nvm install <version> # 安装指定版本

nvm uninstall <version> # 卸载指定版本

nvm use [version] [arch] # 切换版本号为64位，arch默认为64

nvm ls # 查看当前所在版本号

nvm ls available # 查看当前所有可用版本

nvm proxy [url] # 设置下载代理并显示当前代理，url不填则为移除代理。

nvm v # 查看当前nvm版本号
```

## pm2

使用 pm2 管理 Node 项目，pm2 是一个进程管理工具，可以用它来管理 node 进程

```bash
npm install pm2 -g # 安装pm2管理工具
pm2 start ./app.js --name xxx # 启动进程/应用（需要先切换到项目的根目录）
pm2 ls # 列出所有进程/应用
pm2 restart xxx # 重新启动进程/应用
pm2 stop xxx # 结束进程/应用
pm2 delete xxx # 删除进程/应用
```
