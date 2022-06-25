---
title: node流
---

# Node 流

## 读取流

```js
const { createWriteStream, createReadStream } = require('fs');

let rs = createReadStream('./upload/index.txt');

rs.on('open', () => {
  console.log('正在打开');
});

rs.on('ready', () => {
  console.log('正在读取');
});

// 数据内容
rs.on('data', (res) => {
  console.log(res);
});

rs.on('close', () => {
  console.log('读取完成');
});
```

## 写入流

```js
const { createWriteStream, createReadStream } = require('fs');

let ws = createWriteStream('./upload/aaaa.txt');

// 写入流会覆盖之前写入的内容
ws.write('你好哇\n', (err) => {
  if (err) return console.log(err);
  // 使用end方法之后才能监听到finish事件
  ws.end();
});

ws.on('finish', () => {
  console.log('写入完成');
});

rs.pipe(ws);
console.log('复制成功');
```

## 管道流

主要用于复制文件

```js
const { createWriteStream, createReadStream } = require('fs');

let rs = createReadStream('./upload/index2.txt');

let ws = createWriteStream('./upload/aaaa.txt');

// 写入流会覆盖之前写入的内容
rs.pipe(ws);

console.log('复制成功');
```
