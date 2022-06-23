# React 初识

## 一、简介

构建用户界面的 JavaScript 库

### React 特点

- 声明式设计、jsx、组件化开发、单向响应数据流

### 核心文件

- **react.js** - React 的核心库
- **react-dom.js** - 提供与 DOM 相关的功能
- **babel.js** - Babel 可以将 ES6 代码转为 ES5 代码

## 二、React 基本使用

### 虚拟 `DOM` 基本概念

1. 本质是 Object 类型的对象（普通对象）
2. 虚拟 DOM 比较`轻`，真实 DOM 比较`重`
3. 虚拟 DOM 是 React 内部使用，所以无需真实 DOM 上那么多的内置属性
4. 虚拟 DOM 最终会被 React 转化为真实 DOM，呈现在页面上

## 三、jsx

### 简介

jsx 全称叫 `JavaScript XML`

XML 早期用于存储和传输数据，例：

```xml
<student>
    <name>Tom</name>
</student>
```

### 语法规则

```jsx
const myId = 'ajiJDiji';
const myData = 'Hello,react';

const VDOM = (
  <h2 className='title' id={myID}>
    <span style={{ color: 'white', fontSize: '29px' }}>{myData}</span>
  </h2>
);
```

<!-- - 定义虚拟 `DOM` 时，不要写引号
- 标签中混入 JS 表达式时要用 `{}`
  - - JS 表达式：一个表达式会产生一个值，可以放在任何一个需要值的地方
- 样式的类名指定不要用 class，要用 `className`
- 内联样式，要用 `style={{key:value}}` 的形势写
- 只有一个根标签
- 标签必须闭合
- 标签首字母大写则为组件，标签首字母小写则为普通元素 -->

### 写法

```jsx
<body>
  <div id='container'></div>
  <script type='text/babel'>
    const element = <h1>Hello world</h1>
    ReactDOM.render(element, document.getElementById('container'))
  </script>
</body>
```

## React 组件

### 函数组件

```jsx
function Welcome(props) {
  console.log(this); // undefined，babel开启了严格模式
  return <h1>Hello, {props.name}</h1>;
}
```

### Class 类组件

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

#### Class 类

> 注意：

1. 两者接收 props 方式不同，Class 类需要加 `this` ，函数需要加 Props 的形参
2. 函数式组件没有生命周期

## 生命周期

componentDidMount 组件已经被渲染到 DOM 中后执行

componentWillUnmount 组件在 DOM 中卸载后执行

## 组件数据传递

### 父传子

1. 首先给组件添加自定义属性
2. 在 Class 类中通过 `this.props` 进行获取

### 子传父

1. 在父组件中新建一个回调函数，回调函数内接受一个参数
2. 为子组件绑定此函数
3. 在子组件中的 `this.props` 中调用此函数，并传递当前子组件的数据

## 三、快速构建 React 开发环境

### 安装

```bash
$ npm install create-react-app -g # 全局安装
```

### 创建项目

```bash
$ create-react-app my-app
```

### 启动项目

```bash
$ npm start
```
