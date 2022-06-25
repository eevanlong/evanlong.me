---
title: Node模块
---

# Node 模块

## HTTP 模块

> 1.使用`require`加载模块

```js
let http = require('http');
```

> 2.使用`createServer`来创建一个 http 服务

```js
http.createServer(options（https使用）,function (请求对象(必填), 响应对象(必填)) {});
```

```js
//加载http模块
let http = require('http');
http
  .createServer(function (request, response) {
    //响应头类型为文本/超文本标签
    response.writeHead(200, { 'Content-Type': 'text/html' });
    //编写utf-8编码格式
    response.write('<meta charset="UTF-8" />');
    //禁止浏览器默认ico图标请求
    response.write('<link rel="icon" href="data:;base64,=">');
    response.write('你好世界');
    //调用end代表加载结束，如若没有调用end浏览器将一直加载，每次刷新页面都会加载
    response.end(console.log('加载了一次..........'));
    //启动服务器，监听8081端口，回调函数只执行一次
  })
  .listen(8888, function () {
    console.log('连接成功，http://127.0.0.1:8888/');
  });
```

> `response.end`也可以对文本或标签语言进行返回，但是不能全部使用`end`进行调用

## url 模块处理 get 请求

```js
const http = require('http');
const url = require('url');

http
  .createServer((req, res) => {
    const querystring = url.parse(req.url, true).query;
    res.end(JSON.stringify(querystring));
  })
  .listen(3000, () => {
    console.log('http://localhost:3000');
  });
```

### url 模块合并路径

```js
// 合并路径
const { resolve } = require('url');
let URL = 'https://123mtr.top';
let path = './about/dynamic.html';
console.log(resolve(URL, path)); // https://123mtr.top/about/dynamic.html
```

## fs 模块

```js
const fs = require('fs');
// 判断文件或者目录
fs.stat('./package.json', (err, res) => {
  if (err) {
    return console.log(err);
  }
  console.log(`文件类型：${res.isFile()}`);
  console.log(`目录类型：${res.isDirectory()}`);
});

// 创建目录
fs.mkdir('./css', (err) => {
  if (err) {
    return console.log(err);
  }
  console.log('创建成功');
});

// 创建并写入文件内容（会重写）
fs.writeFile('./html/index.html', '你好NodeJS 哈哈', (err) => {
  if (err) {
    return console.log(err);
  }
  console.log('写入成功');
});

// 追加文件内容（不会重写）
fs.appendFile('./html/index.html', '6666666', (err) => {
  if (err) {
    return console.log(err);
  }
  console.log('写入成功');
});

// 读取文件内容
fs.readFile('./html/index.html', 'utf-8', (err, res) => {
  if (err) {
    return console.log(err);
  }
  console.log(res);
});

// 读取路径文件以及目录
fs.readdir('./html', (err, res) => {
  if (err) {
    return console.log(err);
  }
  console.log(res);
});

// 重命名、移动文件
fs.rename('./html/index.html', './src/one.html', (err) => {
  if (err) {
    return console.log(err);
  }
  console.log('移动文件并重命名成功');
});

// 删除目录
fs.rmdir('./css', (err) => {
  if (err) {
    return console.log(err);
  }
  console.log('删除目录成功');
});

// 删除文件
fs.unlink('./src/one.html', (err) => {
  if (err) {
    return console.log(err);
  }
  console.log('删除文件成功');
});
```

## 事件触发器

```js
const { readFile } = require('fs');
const { EventEmitter } = require('events');
const ee = new EventEmitter();

function Start(path) {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf-8', (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
}

async function one() {
  let st = await Start('./upload/aaaa.txt');
  ee.emit('one', st);
}
one();

ee.on('one', (eventInfo) => {
  console.log(eventInfo);
});
```

## Path 模块

```js
const { extname, resolve, join, parse } = require('path');
const { readFile } = require('fs');
/**
 * 读取路径中的文件后缀
 */
let pt = extname('1.txt');
console.log(pt);

/**
 * 自动生成路径
 * 第一个字符串如果加上斜杠会默认代表根路径
 * 没加则代表文件所在的路径目录
 */
let pt2 = resolve('/456456', '7899', '4897987');
console.log(pt2); // C:\456456\7899\4897987

/**
 * 自动生成路径，使用较多
 * __dirname获取当前执行文件的目录
 * __filename获取当前执行文件的路径
 * parse解析出路径详细信息
 */
console.log(join(__dirname, 'src', 'qwe', 'das')); // C:\Users\123木头人\Desktop\my-node\src\qwe\das
console.log(extname(__filename)); // .js
console.log(parse(__filename));

/**
 * 解析请求目录
 */
let url = 'https://www.lookroot.cn/about/dynamic.html';
let arr = url.split('/').slice(3, 5);
let pt2 = join(__dirname, ...arr);
console.log(pt2);

readFile(pt2, 'utf-8', (err, res) => {
  if (err) return console.log(err);
  console.log(res);
});
```

## os 模块

```js
const { cpus, totalmem, arch, freemem, platform } = require('os');

// 查看CPU信息
console.log(cpus());

// 查看内存大小，以字节为单位
console.log(totalmem());

// 查看CPU系统架构
console.log(arch());

// 查看闲置内存容量，以字节为单位
console.log(freemem());

// 查看系统平台
console.log(platform());
```
