# 微信随笔

## H5 微信授权（原生）

### 1.前端向微信服务端发送请求

```js
// 提取本地缓存中的openId
let openId = localStorage.getItem('openId');
// 如果有openId，则不再往下执行
if (openId) return;
// 微信公众号appid
let appid = '***************';
// 重定向地址
let redirect_uri = encodeURIComponent(window.location.href);
window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${redirect_uri}&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect`;
```

> **用户同意授权后（静默授权除外）**
>
> 如果用户同意授权，页面将跳转至 `redirect_uri`/?code=`CODE`&state=STATE

### 2.前端通过重定向后的 URL 地址获取 Code

```js
// 定义获取参数的方法
function getQueryVariable {
    let query = window.location.search.substring(1)
    let vars = query.split('&')
    for (let i = 0; i < vars.length; i++) {
        let pair = vars[i].split('=')
        if (pair[0] == variable) {
            return pair[1]
        }
    }
    return false
}
let code = getQueryVariable('code') // URL中的code属性值（code值）
```

### 3.调用后端接口获取用户信息

```js
// 如果有code
if (code) {
	// 获取用户信息
	let wx = await this.$axios.getUserInfo({ params: { code } });
	if (wx.status !== 200) {
		return this.$toast('授权失败');
	}
	// 用户信息
	this.userInfo = wx.data;
	// 存储openId
	localStorage.setItem('openId', wx.data.openId);
}
```

## H5 微信授权（使用 NodeJS 工具）

[wechat-oauth](https://github.com/node-webot/wechat-oauth) 微信公共平台 OAuth 接口消息接口服务中间件与 API SDK

安装：

```bash
npm install wechat-oauth
```

使用：

```js
// 初始化及配置
let OAuth = require('wechat-oauth');
let client = new OAuth('your appid', 'your secret');
// 获取授权页面的URL地址
let url = client.getAuthorizeURL(window.location.href, 'STATE', 'snsapi_userinfo');
window.location.href = url;
// 获取Openid和AccessToken
client.getAccessToken('code', (err, result) => {
	let accessToken = result.data.access_token;
	let openid = result.data.openid;
	console.log(accessToken, openid);
});
// 获取用户信息
client.getUser('openid', (err, result) => {
	console.log(result);
});
```
