# Vue 随笔

## Vuex 4.0

```js
// getters 获取方式
const currentUser = computed(() => store.getters['user/currentUser']);
// mutations 提交方式
store.commit(`app/${XXX_XXX_XXX}`, values);
// actions 提交方式
store.dispatch(`user/${XXX_XXX_XXX}`, values);
```

::: tip
在脚手架中，图片如果不是网络地址，路径要使用`require()`，该地址会在打包之后编译为`Base64`地址
:::

- 动态绑定 style 样式写法

  ```html
  <div :style="{ overflow: openLogin ? 'hidden' : '' }"><div></div></div>
  ```

- `white-space: pre-wrap`是针对`pre`标签进行保留空白符序列，可以正常地进行换行

- #### Vue 的`axios`中只有`get`和`delete`传递参数时需要使用 params 对象，其他直接传对象即可，或者直接传递 reast 参数

- #### 使用`async`和`await`的时候`async`必须要在当前作用域的函数前面进行修饰

- #### 使用`NProgress`直接调用即可，不需要执行 Vue.use

- #### `axios`的拦截器 axios.interceptors.request.use，必须要传一个 config 参数并返回，否则报错，request 是请求

- #### CORS 策略已经阻止了从起源'http://localhost:8080'访问 XMLHttpRequest at 'xxxxxxx'。请求的资源上没有'Access-Control-Allow-Origin'头？，这个问题时而有时而没有，与后端也不存在跨域的问题

  - ##### 原因：被防火墙识别为恶意访问，拦截掉了

- #### 使用`async`和`await`的时候没加`await`，导致获取的数据是一个 Promise 对象，其中包含了[[PromiseState]]、[[PromiseResult]]

- #### 当清除计时器时传递某个计时器的变量会较为准确，如果不传递某个计时器的变量，默认会清除所有计时器
