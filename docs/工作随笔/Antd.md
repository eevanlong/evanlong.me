# Antd 随笔

## 表单

### 将数据塞入表单对象中

```jsx
<Form.Item name={'frontMenu'} label='***' key='frontMenu'>
	<FrontMenu />
</Form.Item>;

// 为表单设置其中frontMenu字段组数据
form.setFieldsValue({ frontMenu: checkedValues });
```

## 表格

### 基础参数配置

```jsx
<Table columns={columns} dataSource={userList} rowKey={record => record.id} />
```
