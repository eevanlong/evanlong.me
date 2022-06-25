---
title: Ajax
---

# Ajax

## 一、Ajax 简介

### 1. 什么是 Ajax

Asynchronous JavaScript And Xml（异步 JavaScript 和 XML）

Ajax 是一种局部刷新页面的技术，在无需重新加载整个网页的情况下，能够更新网页的部分内容。

### 2. 传统 Web 与 Ajax 的差异

|                | 传统 Web                                             | AJAX                                         |
| -------------- | ---------------------------------------------------- | -------------------------------------------- |
| 发送请求方式   | 使用表单或超链接，发送同步请求                       | 使用 XMLHttpRequest 对象，发送异步请求       |
| 服务器响应内容 | 完整的页面                                           | 只响应需要的数据                             |
| 客户端处理方式 | 需等待服务器响应完成并重新加载页面后用户才能进行操作 | 可以动态更新页面内容，用户无需等待请求的响应 |

同步请求和异步请求：

- 同步请求：在服务端响应之前浏览器处于阻塞状态，等待服务端响应，此时不能进行交互操作
- 异步请求：在服务端响应之前浏览器可以执行其他操作，无需等待服务器响应

### 3. Ajax 执行流程

流程：

1. 客户端使用 JavaScript 提供的 XMLHttpRequest 对象，异步的向服务器发送请求
2. 服务器处理请求后，以字符串、JSON 等形式只返回数据，而非返回整个页面
3. 客户端接收服务器返回的数据，并使用 DOM 动态更新页面，实现局部刷新

## 二、XMLHttpRequest 对象

### 1. 常用属性

readyState：

- 表示 XMLHttpRequest 对象的状态，取值：

| 状态码 | 含义                                             |
| ------ | ------------------------------------------------ |
| 0      | 请求未初始化                                     |
| 1      | 服务器连接已建立                                 |
| 2      | 请求已接收                                       |
| 3      | 请求处理中                                       |
| 4      | 请求已完成，且响应已就绪，可以对响应结果进行处理 |

status：

- 表示 Http 请求响应的状态，取值：

| 状态码 | 含义                                 |
| ------ | ------------------------------------ |
| 200    | 请求成功，服务器响应正常             |
| 400    | 客户端请求的语法错误，服务器无法理解 |
| 403    | 服务器拒绝执行此请求，如权限不足     |
| 404    | 请求的资源不存在                     |
| 500    | 服务器内部错误                       |

responseText：

- 获取响应的文本内容

### 2. 常用方法

open(method,url,async)：

- 用来建立与服务器的连接，参数：

| 参数   | 含义                                |
| ------ | ----------------------------------- |
| method | 请求方式，取值：get（默认）、post   |
| url    | 请求地址                            |
| async  | 是否异步，取值：true（默认）、false |

send()：

- 用来发送请求

### 3. 常用事件

onreadystatechange：

- 指定回调函数，当 readyState 状态改变时触发
- 只有当 readyState 是 4，并且 status 是 200 的时候，才能处理服务器响应的数据

## 三、响应 Ajax 请求

### 1. 返回普通字符串

```php
echo 字符串;
```

### 2. 返回 JSON

```php
// 指定响应类型为json
header('Content-Type:application/json');
// 使用json_encode()函数，将数组或对象转换为json字符串
echo json_encode(数组或对象);
```

### 3. 自定义响应结果

```java
$result = [
  "status" => 响应状态码,
  "message" => 响应消息,
  "data" => 返回数据
];
```

## 四、jQuery 实现 Ajax

### 1. $.ajax()

语法：`$.ajax(settings)`

- settings 是一个以{key:value}组成的 Ajax 请求设置，常用选项：

| 选项     | 含义                                               |
| -------- | -------------------------------------------------- |
| type     | 请求方式，取值：get（默认）、post                  |
| url      | 请求地址                                           |
| data     | 请求参数，即发送给服务器的数据                     |
| dataType | 响应的数据类型，取值：text（默认）、json、jsonp 等 |
| success  | 请求成功后执行的回调函数                           |
| error    | 请求失败时执行的回调函数                           |

### 2. $.get()

以 get 方式发送 Ajax 请求

语法：`$.get(url[,data][,success][,dataType])`

### 3. $.post()

以 post 方式发送 Ajax 请求

语法：`$.post(url[,data][,success][,dataType])`

### 4. $.getJSON()

以 get 方式发送 Ajax 请求，响应 JSON 数据
语法：`$.getJSON(url[,data][,success])`

## 五、Ajax 跨域

### 1. 简介

当访问的资源 URL 与当前 URL 的`协议、域名、端口`三者有任何一个不一样时，称为跨域

浏览器的**同源策略**：要求所访问资源的协议名、域名、端口必须完全相同，不允许 XMLHttpRequest 发送跨域请求

解决跨越的两种方式：

- CORS
- JSONP

### 2. CORS

CORS 是一个 W3C 标准，全称是 Cross-Origin Resource Sharing 跨域资源共享

它允许浏览器向跨源服务器发出 XMLHttpRequest 请求，需要设置服务器端允许跨域请求

```java
// 允许任何域的跨域请求
header("Access-Control-Allow-Origin:*");
```

优点：CORS 方式实现简单，但存在安全问题

### 3. JSONP

全称是 JSON With Padding

原理：

- 虽然 XMLHttpRequest 无法跨越，但 HTML 的标签是支持跨域的，如`<script src="">、<iframe src="">`、`<img src="">`等
- 通过 HTML 标签向服务器发送一个包含 callback 参数的跨域请求，服务端返回数据时将这个 callback 参数作为函数名来包裹住 JSON 数据
- 客户端提供一个对应的 callback 回调函数，处理服务器返回的数据

jQuery 实现 JSONP，语法：

- 使用$.ajax()，只需要指定 dataType 为 jsonp 即可

```js
$.ajax({
  type: 'get', // JSONP只支持get方式发送请求
  url: 'http://127.0.0.1:80/ajax/server.php', // 访问另一个域的资源
  dataType: 'jsonp',
  success: function (result) {
    console.log(result);
  },
});
```

### 4. API 数据接口

提供数据返回服务的 API 接口。可以让开发者在无需理解内部细节的情况下，调用他人提供的资源，简单、高效的获取数据。

常用 API 数据平台：

- 聚合数据 [https://www.juhe.cn](https://www.juhe.cn)
- 阿里云数据 [https://market.aliyun.com/data](https://market.aliyun.com/data)
- 极速数据 [http://www.jisuapi.com](http://www.jisuapi.com)
- HaoService [http://www.haoservice.com](http://www.haoservice.com)
- 网易云信 [https://dev.yunxin.163.com/](https://dev.yunxin.163.com/)

## 六、文件上传

Ajax 实现文件上传

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>AJAX实现文件上传</title>
  <script src="js/jquery-3.5.1.min.js"></script>
  <script>
    function upload() {
      var formData = new FormData(); // FormData是一个表示表单数据的对象
      formData.append('head', $('#head')[0].files[0]);

      $.ajax({
        type: 'post', // 请求文件必须为post
        url: 'server/test07.php',
        data: formData, // 一定要使用FormData
        contentType: false, // 发送到服务器的内容类型，默认为application/x-www-form-urlencoded，文件上传时必须改为false
        processData: false, // 是否将传输的数据转化为查询字符串，默认为true，文件上传时必须改为false
        success: function (result) {
          console.log(result);
        },
      });
    }
  </script>
</head>
<body>
  姓名：<input type="text" id="name" /> <br />
  头像：<input type="file" id="head" /> <br />
  <button onclick="upload()">提交</button>
</body>
```
