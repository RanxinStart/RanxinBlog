---
title: 这里是标题
date: 现在的时间
categories:
  - 划分的文件夹
tags: 
  - 标签

---

# Build And Config

> 如何搭建安装以及全部配置项

---

## Http配置

### 1.取出http进行配置

```js
import { default as http } from 'axios'

// 暴露请求方法
export default http
// 暴露请求配置
export const httpConfig = http.defaults
```

### 2.配置请求头

> headers.common中的内容 都是请求头的内容

```js
/** 定义默认请求头 */
http.defaults.headers.common = {
  from: 'shop-h5',
}
```

### 3.配置基础请求地址

> 共同的ip地址 请求链接的前部分

```js
http.defaults.baseURL = 'https://baidu.com/'
```






# Code And Application

> 代码 和 应用场景

---

## 拦截器

### 1.请求拦截器

> 对请求时做一层处理

```js
http.interceptors.request.use((config) => {
    
  return config
})
```

### 2.响应拦截器

> 对得到响应时 做一层处理

```js
http.interceptors.response.use(
    /** 成功响应的请求处理 */
    (response) => {
        return response
    },
    /** 失败响应的请求处理 */
    (error) => {
        return Promise.reject(error)
    }
)
    
```

## 上传文件

> 手动实现文件上传

### 0.file文件选择

> 非`axios`内容 原生通过`input`进行选择 使用`promise`拿到结果

```js
export const selectImages = (multiple = true) => {
  return new Promise<File[]>((resolve, reject) => {
    // 创建一个input
    const inputEl = document.createElement('input')
    // 类型是文件选择器
    inputEl.type = 'file'
    // 是否开启多选
    inputEl.multiple = multiple
    // 可选择的文件格式
    inputEl.accept = 'image/jpeg,image/x-png,image/gif'
    // 模拟点击 进行选择文件
    inputEl.click()
    const timer = setTimeout(reject, 20 * 1000)
    inputEl.addEventListener('change', function () {
      if (this.files) {
        resolve(Object.values(this.files))
        clearTimeout(timer)
      }
    })
  })
}

const getFile = async() => {
    // 这里取到选择文件的files
    const files = await selectImages()
}
```

### 1.form表单的形式请求

```js
const formData = new FormData()
formData.append('dataNmae', 'dataContent')
formData.append('file', '(binary)')
```

### 2.修改发送的headers

```js
const config = {
    headers: { 'Content-Type': 'multipart/form-data' }
}

// 单实例
http.post('/api', formData, config)

// axios
axios.post('/api', formData, config)
```

### `*`完整示例

```js
// 创建FormData
const formData = new FormData()
// 添加FormData数据
formData.append('dataNmae', 'dataContent')
formData.append('file', '(binary)')
// 发送请求示例
http.post('/api', formData, {
  headers: { 'Content-Type': 'multipart/form-data' }
})
```

# Important And Extend

> 扩展内容 以及重点

---

## 常用的系统变量

### 1.环境变量

> 区分生产环境 和   开发环境 

```js
// 使用vite时
import.meta.env.MODE === 'development' //开发环境 

import.meta.env.PROD: {boolean} 应用是否运行在生产环境。
import.meta.env.DEV: {boolean} 应用是否运行在开发环境 (永远与 import.meta.env.PROD相反)。
```

