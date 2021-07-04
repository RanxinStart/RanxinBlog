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

## 安装

### 使用`yarn`安装

```bash
$ yarn add @koa/multer multer
```

### 使用`npm`安装

```bash
$ npm install --save @koa/multer multer
```



---

## 约定式路由

### 基础路由

假设 `pages` 目录结构如下：

```text
+ pages/
  + users/
    - index.js
    - list.js
  - index.js
```

那么，umi 会自动生成路由配置如下：

```js
[
  { path: '/', component: './pages/index.js' },
  { path: '/users/', component: './pages/users/index.js' },
  { path: '/users/list', component: './pages/users/list.js' },
]
```

# Code And Application

> 代码 和 应用场景

---

## 面包屑

>  面包屑也是有多种实现方式，这里举 [react-router-breadcrumbs-hoc](https://github.com/icd2k3/react-router-breadcrumbs-hoc) 的例子。

### 1.安装依赖

```bash
$ yarn add react-router-breadcrumbs-hoc
```

### 2.配置实现

然后实现一个 `Breadcrumbs.js`，比如：

```js
import NavLink from 'umi/navlink';
const routes = [
  { path: '/', breadcrumb: '首页' },
  { path: '/list', breadcrumb: 'List Page' },
];
...
```

然后在需要的地方引入此 React 组件即可。

---

# Important And Extend

> 扩展内容 以及重点

```js
const express = require('express')
const multer = require('@koa/multer')
const fs = require("fs");
const path = require('path')

// 文件过滤器(可选)
function fileFilter (req, file, cb) { 
  // 这个函数应该调用 `cb` 用boolean值来指示是否应接受该文件
  // file有该文件的后缀名 或者其他信息
  // 获取文件后缀名 originalname 属性是名称
  const ext = path.extname(file.originalname)
  // 拒绝这个文件，使用`false`，像这样:
  cb(null, false)
  // 接受这个文件，使用`true`，像这样:
  cb(null, true)
  // 如果有问题，你可以总是这样发送一个错误:
  cb(new Error('I don\'t have a clue!'))
}

// 路径, 名称修改器, 默认随机名称且无后缀 (可选)
const storage = multer.diskStorage({
  // destination 是确定文件的具体路径 (可通过该参数自定义目录)
  destination (req, file, cb) { cb(null, '/tmp/my-uploads') }
  filename (req, file, cb) {
  	// 获取后缀名
  	const ext = path.extname(file.originalname)
    // 设置默认名 
    cb(null, `${Date.now()}${ext}`)
	}
})

// 文件大小相关设置 (可选)
const limits = { 
  fileSize: 5 * 1024, // 文件最大长度, 默认无限	
  files: 5, // 文件最大数量
  headerPairs: 2000 // 键值对最大组数, 默认2000
}

// 初始化上传对象
const upload = multer({
  dest: '/upload', // 储存路径
  fileFilter, storage, limits
})

// 上传单个文件, 调用upload.single方法, 并将表单标签的name值传入
app.post('/upload', upload.single('avatar'), (req, res)=>{
  // 会自动添加req.file, 是 `avatar` 文件的信息
})

// 上传多个文件, 调用upload.array方法, 传入标签name值, 文件数量
app.post('/upload', upload.array('files', 6), (req, res)=>{
  // 会自动添加req.files , 是 `files` 文件数组的信息
})
```





