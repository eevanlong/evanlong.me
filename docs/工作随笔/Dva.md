## dva随笔

基本使用步骤

```jsx
const { loading, historyRowInfo, taskLogData } = props;

dispatch({
    type: 'taskData/getTaskLog',
    payload: historyRowInfo.uid,
});

export default connect(({ one, two }) => ({
  111: one.111,
  taskLogData: two.taskLogData,
  loading: loading.models.taskLog,
}))(TaskLog);
```

### dva-loading

监听`effects`一个或多个命名空间的方法，被监听的方法在执行时 loading 为 true

```jsx
export default connect(({ loading }) => ({
	loading: loading.effects[('命名空间/命名方法', '命名空间/命名方法')],
}))(xxx);
```

监听`effects`所有方法，被监听的方法在执行时 loading 为 true

```jsx
export default connect(({ loading }) => ({
	loading: loading.models.xxx,
}))(xxx);
```
