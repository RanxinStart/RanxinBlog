---
title: ECMAScript高级API
date: '2022-1-5 14:43:09'
sidebar: 'auto'
categories:
 - 前端
tags:
 - JavaScript

---

## 数据类API

### Form数据流

**`FormData`** 接口提供了一种表示表单数据的键值对 `key/value` 的构造方式，并且可以轻松的将数据通过axios发送出去。如果送出时的**Content-Type**编码类型被设为 `"multipart/form-data"`，它会使用和表单一样的格式。

#### 创建FormData

```js
/* 指定页面中的表单元素创建 */
const formDataFromElement = new FormData(HTMLFormElement)
/* 直接创建 */
const formData = new FormData()
```

#### 为FormData添加数据

```js
const formData = new FormData()
/* 覆盖式添加 */
formData.set('Key:A', 'Value:A')
formData.set('Key:A', 'Value:A')
/* 添加到集合 */
formData.append('Key:B', 'Value:B')
formData.append('Key:B', 'Value:B')
/* 遍历fromData */
formData.forEach((...args)=>{
    console.log(args)
    /** 最终fromData结果
 	 * ['Value:A', 'Key:A', FormData]
 	 * ['Value:B', 'Key:B', FormData]
 	 * ['Value:B', 'Key:B', FormData]
 	 */
})
```

#### 删除一条FormData数据

```js
const formData = new FormData()
formData.set('Key:A', 'Value:A')
formData.delete('Key:A')
```

#### 获取一条FormData的数据

```js
const formData = new FormData()
formData.append("Key:B", "Value:1")
formData.append("Key:B", "Value:2")

/* 获取一条中的第一项  "Value:1" */
formData.get('Key:B')

/* 获取一条中的一组  ["Value:1","Value:2"] */
formData.getAll('Key:B')
```

#### 检查一条数据是否存在

返回一个布尔值表明 `FormData`对象是否包含某些键

```js
const formData = new FormData()
formData.append("Key:B", "Value:1")

formData.has("Key:B") // true
```

#### 遍历和转换为迭代器

```js
const formData = new FormData();
formData.set("Key:A", "Value:A")
formData.set("Key:B", "Value:B")

// 返回一个迭代器 可以of 输出所有的 key
for (let key of formData.keys()) {
   console.log(key);
}

// 返回一个迭代器 可以of 输出所有的 value
for (let value of formData.values()) {
   console.log(value);
}

// 返回一个迭代器 可以of 输出所有的 [key,value]
for (let [key,value] of formData.entries()) {
   console.log(key,value);
}

/* 遍历formData */
formData.forEach((...args)=>{
    console.log(args)
})
```

