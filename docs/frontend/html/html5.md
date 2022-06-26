---
title: HTML5
---

# HTML5.0

## 1. 结构相关标签

用来进行页面结构布局，本身无任何特殊样式，需要使用 CSS 进行样式设置

- article 定义一个独立的内容，完整的文章
- section 定义文档的章节、段落
- header 文章的头部、页眉或标题
- footer 文章的底部、页脚或脚注
- aside 定义侧边栏
- nav 定义导航菜单

注：结构标签只是表明各部分的角色，并无任何外观样式，与普通的 div 类似

## 2. 表单相关

### 2.1 新增表单元素

新增以下 type 类型：

- email 接收 email
- url 接收 URL
- tel 接收电话号码，目前仅在移动设备有效
- search 搜索文本框
- number/range 接收数字/数字滑块，包含 min、max、step 属性
- date/month/week/time/datetime-local 日期时间选择器
- color 颜色拾取

作用：

- 具有格式校验的功能
- 可以和移动设备的虚拟键盘类型相关联

### 2.2 新增表单属性

新增以下表单属性，form 标签的属性：

- autocomplete 是否启用表单的自动完成功能，取值：on（默认值）、off
- novalidate 提交表单时不进行验证，默认会进行表单验证

### 2.3 新增表单元素属性

新增以下表单元素属性，input/select/textarea 等标签的属性：

- placeholder 提示文字
- required 是否必填
- autocomplete 是否启用该表单元素的自动完成功能
- autofocus 设置初始焦点元素

## 3. 多媒体相关

### 3.1 audio 标签

```js
controlsList = 'nodownload'; // 禁止下载
controls; // 显示控件
```

在页面中插入音频，不同浏览器对音频格式的支持不一样

audio 标签常用属性：

- src 音频文件的来源
- controls 是否显示控制面板，默认不显示
- autoplay 是否自动播放，默认会忽略该属性
- loop 是否循环播放
- muted 是否静音

### 3.2 video 标签

```js
controlsList = 'nodownload'; // 禁止下载
controls; // 显示控件
```

在页面中插入视频，不同浏览器对视频格式的支持不一样

用法与 audio 标签基本相同，增加属性：

- width/height 视频播放器的尺寸
- poster 在视频加载前显示的图片

# HTML 随笔

## 输入框正则限制

```html
1.文本框只能输入数字代码(小数点也不能输入)
<input
  onkeyup="this.value=this.value.replace(/\D/g,'')"
  onafterpaste="this.value=this.value.replace(/\D/g,'')"
/>

2.只能输入数字,能输小数点.
<input
  onkeyup="if(isNaN(value))execCommand('undo')"
  onafterpaste="if(isNaN(value))execCommand('undo')"
/>
<input
  name="txt1"
  onchange="if(/\D/.test(this.value)){alert('只能输入数字');this.value='';}"
/>

3.数字和小数点方法二
<input
  type="text"
  t_value=""
  o_value=""
  onkeypress="if(!this.value.match(/^[\+\-]?\d*?\.?\d*?$/))this.value=this.t_value;else this.t_value=this.value;if(this.value.match(/^(?:[\+\-]?\d+(?:\.\d+)?)?$/))this.o_value=this.value"
  onkeyup="if(!this.value.match(/^[\+\-]?\d*?\.?\d*?$/))this.value=this.t_value;else this.t_value=this.value;if(this.value.match(/^(?:[\+\-]?\d+(?:\.\d+)?)?$/))this.o_value=this.value"
  onblur="if(!this.value.match(/^(?:[\+\-]?\d+(?:\.\d+)?|\.\d*?)?$/))this.value=this.o_value;else{if(this.value.match(/^\.\d+$/))this.value=0+this.value;if(this.value.match(/^\.$/))this.value=0;this.o_value=this.value}"
/>

4.只能输入字母和汉字
<input
  onkeyup="value=value.replace(/[\d]/g,'') "
  onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[\d]/g,''))"
  maxlength="10"
  name="Numbers"
/>

5.只能输入英文字母和数字,不能输入中文
<input onkeyup="value=value.replace(/[^\w\.\/]/ig,'')" />

6.只能输入数字和英文<font color="Red">chun</font>
<input onKeyUp="value=value.replace(/[^\d|chun]/g,'')" />

7.小数点后只能有最多两位(数字,中文都可输入),不能输入字母和运算符号:
<input
  onKeyPress="if((event.keyCode<48 || event.keyCode>57) && event.keyCode!=46 || /\.\d\d$/.test(value))event.returnValue=false"
/>

8.小数点后只能有最多两位(数字,字母,中文都可输入),可以输入运算符号:
<input
  onkeyup="this.value=this.value.replace(/^(\-)*(\d+)\.(\d\d).*$/,'$1$2.$3')"
/>

输入中文:
<input
  type="text"
  onkeyup="this.value=this.value.replace(/[^\u4e00-\u9fa5]/g,'')"
/>

输入数字:
<input type="text" onkeyup="this.value=this.value.replace(/\D/g,'')" />

输入英文:
<input type="text" onkeyup="this.value=this.value.replace(/[^a-zA-Z]/g,'')" />

三个合在一起
<input onkeyup="value=value.replace(/[^\w\u4E00-\u9FA5]/g, '')" />

只输入数字和字母 ：<input
  class="input"
  maxlength="12"
  size="15"
  name="username"
  id="username"
  onKeyUp="value=value.replace(/[\W]/g,'')"
/>

除了英文的标点符号以为 其他的人都可以中文，英文字母，数字，中文标点
<input
  type="text"
  onkeyup="this.value=this.value.replace(/^[^!@#$%^&*()-=+]/g,'')"
/>
```

`img`标签可以直接调用 SVG 图标，用法：

```html
<img :src="require('@/icons/***/***.svg')" />
```

## 解决防盗链问题

```html
<!-- 发送请求时不携带referrer -->
<meta name="referrer" content="never" />
```

## 通过 HTML5 打开直播作为相机

### 定义摄像头

```js
<button id="btn">打开摄像头</button>
<video id="video" muted autoplay loop webkit-playsinline playsinline x5-video-player-type="h5" class="hide"></video>
```

### 脚本

```js
const btn = document.querySelector('#btn');
const video = document.querySelector('#video');
// 点击按钮时隐藏按钮显示video，并执行播放
btn.addEventListener('click', function () {
  btn.classList.add('hide');
  video.classList.remove('hide');
  openVideo();
});
// 执行播放
async function openVideo() {
  try {
    var constraints = {
      video: { width: 1280, height: 720, facingMode: 'environment' },
    };
    const mediaStream = await navigator.mediaDevices.getUserMedia(constraints);
    video.srcObject = mediaStream;
    // 在视频的元数据加载后
    video.play();
  } catch (error) {
    alert(error);
  }
}
```

### 样式

```css
body {
  margin: 0;
  padding: 0;
}

#video {
  width: 100%;
  height: 100%;
}

#btn {
  padding: 20px;
  border: 1px solid #8888;
}

.hide {
  display: none !important;
}
```
