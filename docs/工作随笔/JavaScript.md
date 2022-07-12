# JavaScript 随笔

## window 对象方法

### window.location 对象

> `window.location` 对象用于获得当前页面的地址 (URL)，并把浏览器重定向到新的页面。window.location 对象在编写时可不使用 window 这个前缀。

```js
location.hostname; // 返回 web 主机的域名
location.pathname; // 返回当前页面的路径和文件名
location.origin; // 返回https://www.xxxxxxxx.com
location.port; // 返回 web 主机的端口 （80 或 443）
location.protocol; // 返回所使用的 web 协议（http:// 或 https://）
window.location.href = 'http://www.xxxxxxxx.com'; // 跳转后有后退功能
window.location.replace('http://www.xxxxxxxx.net'); // 跳转后没有后退功能
window.open('http://www.xxxxxxxx.net'); // 在新的窗口打开链接，一般用于简单的弹出页面
window.location.reload(); // 刷新当前页面
parent.location.reload(); // 刷新父亲对象（用于框架）
opener.location.reload(); // 刷新父窗口对象（用于单开窗口）
top.location.reload(); // 刷新最顶端对象（用于多开窗口）
```

### window.history 对象

> `window.history` 对象包含浏览器的历史。window.history 对象在编写时可不使用 window 这个前缀。

```js
window.history.back(); // 加载历史列表中的前一个URL，与在浏览器点击后退按钮相同，
window.history.forward(); // 加载历史列表中的下一个URL。 与在浏览器中点击按钮向前相同
```

### window.navigator 对象

> `window.navigator` 对象包含有关访问者浏览器的信息，对象在编写时可不使用 window 这个前缀
>
> 来自 `navigator` 对象的信息具有误导性，不应该被用于检测浏览器版本，这是因为:
>
> navigator 数据可被浏览器使用者更改
> 一些浏览器对测试站点会识别错误
> 浏览器无法报告晚于浏览器发布的新操作系统

```js
window.navigator.appCodeName // 返回浏览器的代码名。
window.navigator.appName // 返回代表浏览器名的字符串。
window.navigator.appMinorVersion // 返回浏览器的次版本号。该属性是一个只读的字符串。仅IE有效。
window.navigator.userAgent // 返回代表浏览器名和版本号的字符串。
window.navigator.platform // 返回浏览器平台的字符串（"Win32", "Win16", "WinCE", "Mac68k", "MacPPC", "HP-UX", "SunOS" 等）。
window.navigator.cpuClass // 返回CPU的信息（"x86", "68K", "Alpha", "PPC" 等）。仅IE有效。
window.navigator.browserLanguage // 返回浏览器的语言种类。仅IE有效。
window.navigator.systemLanguage // 返回系统的语言种类。仅IE有效。
window.navigator.userLanguage userLanguage // 返回用户环境的语言种类。仅IE有效。
window.navigator.cookieEnabled // 返回 cookie 是否可用的真伪值。
window.navigator.onLine // 返回是否能连上网络的真伪值。
window.navigator.javaEnabled() // 返回 Java 是否可用的真伪值。
window.navigator.userProfile // 保存着用户信息的对象。拥有 addReadRequest() doReadRequest() getAttribute() clearRequest() 等方法。
window.navigator.taintEnabled() // 是否可以加密数据的真伪值。仅IE有效。
```

### window 其它方法

```js
// setInterval() 和 setTimeout() 是 HTML DOM Window对象的两个方法。
window.setInterval(); // 间隔指定的毫秒数不停地执行指定的代码。
window.setTimeout(); // 暂停指定的毫秒数后执行指定的代码
window.clearInterval(); // 方法用于停止 setInterval() 方法执行的函数代码。
window.clearTimeout(); // 方法用于停止执行setTimeout()方法的函数代码。
window.alert(); // 警告框
window.prompt(); // 确认框
window.confirm(); // 输入框
window.open(); // 打开新窗口
window.open(URL, '_self'); // 当前窗口跳转
window.close(); // 关闭当前窗口
window.moveTo(); // 移动当前窗口
window.resizeTo(); // 调整当前窗口的尺寸
window.frameElement; // 获取当前文档的宿主节点iframe元素
window.execScript(); // execScript函数与eval的功能相同，不同的是eval函数执行后的脚本的作用域是当前执行上下文，而execScript则总是针对全局作用域。
```

## JS 禁止 DOM 方法

使用`return false`可以实现禁用原生的方法

### 禁止右键

```html
<div oncontextmenu="return false"></div>
```

### 禁止复制和剪切元素

```html
<div oncopy="return false"></div>
<div oncut="return false"></div>
```

### 禁止选中元素

```html
<div onselectstart="return false"></div>
```

### 禁止拖动元素

```html
<div ondragstart="return false"></div>
```

### 小常识

- Vue 的`axios`中只有`get`和`delete`传递参数时需要使用 params 对象，其他直接传对象即可，或者直接传递 reast 参数
- 使用`async`和`await`的时候`async`必须要在当前作用域的函数前面进行修饰
- `axios`的拦截器 axios.interceptors.request.use，必须要传一个 config 参数并返回，否则报错，request 是请求
- CORS 策略已经阻止了从起源'http://localhost:8080'访问 XMLHttpRequest at 'xxxxxxx'。请求的资源上没有'Access-Control-Allow-Origin'头？，这个问题时而有时而没有，与后端也不存在跨域的问题
  - 原因：被防火墙识别为恶意访问，拦截掉了
- 当清除计时器时传递某个计时器的变量会较为准确，如果不传递某个计时器的变量，默认会清除所有计时器
- `null`取反为`true`
- 当一个元素`blur`的时候一定会优先触发`mousedown`事件，原因：Mousedown 事件是当鼠标按下时触发

## 鼠标移出移入元素事件

- mouseover和mouseout在父元素和其子元素都可以触发，当鼠标穿过一个元素时，触发次数得依子元素数量而言。
- mouseenter和mouseleave只在父元素触发，当鼠标穿过一个元素时，只会触发一次。
- mouseover和mouseout比mouseenter和mouseleave先触发
