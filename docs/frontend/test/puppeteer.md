---
title: Puppeteer初识
---

# Puppeteer 初识

Puppeteer 是一个 Node 库，它提供了一个高级 API 来通过 [DevTools](<https://zhaoqize.github.io/puppeteer-api-zh_CN/(https://chromedevtools.github.io/devtools-protocol/)>) 协议控制 Chromium 或 Chrome。Puppeteer 默认以 [headless](https://developers.google.com/web/updates/2017/04/headless-chrome) 模式运行，但是可以通过修改配置文件运行“有头”模式，很多人称它为无头浏览器

## 一些简单的示例

:::tip
等待元素加载使用：`page.waitForSelector`
:::

常用的`launch`配置

```js
const config = {
  // 关闭无头
  headless: false,
  // 默认显示大小
  defaultViewport: {
    width: 1600,
    height: 900,
  },
  slowMo: 300, // 操作减少指定的毫秒数
};
```

### 获取元素内容

```js
puppeteer.launch(config).then(async (browser) => {
  const page = await browser.newPage();
  await page.goto('https://www.dytt8.net/index.htm');
  // 获取元素内容
  page.$$eval('#menu a', (res) => {
    res.forEach((item) => {
      console.log(item.innerText);
    });
  });
});
```

### 点击获取元素然后进入页面

```js
puppeteer.launch({ headless: false }).then(async (browser) => {
  const page = await browser.newPage();
  await page.goto('https://www.dytt8.net/index.htm');
  // 点击获取元素然后进入页面
  const inputElement = await page.$$('#menu a');
  await inputElement[2].click();
});
```

### 获取焦点并延时输入内容

```js
puppeteer.launch({ headless: false }).then(async (browser) => {
  const page = await browser.newPage();
  await page.goto('https://www.dytt8.net/index.htm');
  // 获取焦点并延时输入内容
  await page.type('.searchl .formhue', '我是一个小丑', { delay: 1000 });
  await page.keyboard.down('Enter');
});
```
