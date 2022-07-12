# React随笔

拦截器用法 文件路径 `src/utils/request.js`

```js
// request拦截器, 改变url 或 options.
request.interceptors.request.use(async (url, options) => {
	let c_token = localStorage.getItem('token');
	if (c_token) {
		const headers = { token: c_token };
		return {
			url: url,
			options: { ...options, headers },
		};
	} else {
		return {
			url: url,
			options: { ...options },
		};
	}
});

// response拦截器, 处理response
request.interceptors.response.use(response => {
	let token = response.headers.get('token');
	if (token) {
		localStorage.setItem('token', token);
	}
	return response;
});
```
