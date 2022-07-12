### umi-request

基本写法

```js
// get请求
export async function xxx(params) {
	const { xxx } = params;
	return request('/mvInterpretationTaskData/selectDataByTaskInputDataId', {
		method: 'GET',
		params: { xxx },
	});
}

// post请求
export async function xxx(params) {
	const { xxx } = params;
	return request('/mvInterpretationTaskData/selectDataByTaskInputDataId', {
		method: 'GET',
		data: { xxx },
	});
}
```
