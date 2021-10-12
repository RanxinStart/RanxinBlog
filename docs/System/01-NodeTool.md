---
title: NodeJs-Plugin
date: '2021-7-5 23:20:34'
categories:
  - 服务端
tags: 
  - NodeJs
  - Plugin
---

# Node实用依赖

## fs(文件系统)

### 1.fs-extra

  	优化原node的fs文件系统，添加了一些实用的方法

#### 安装

```bash
$ npm i fs-extra
$ yarn add fs-extra
```

#### 读取JSON

​		读取指定路径中的JSON文件，得到Object对象数据

```js
readJson('./路径')
// 等待同步执行
readJsonSync('./路径')
```

#### 确定文件夹存在

​		确定指定路径中的文件夹是否存在，不存在则创建相应的文件夹

```js
ensureDir('./路径')
// 等待同步执行
ensureDirSync('./路径')
```

## console(控制台)

### 1.single-line-log

​		在同一区域重复打印log，可以用于制作进度条，进度信息输出

#### 		安装

```bash
$ npm i single-line-log
$ yarn add single-line-log
```

#### 		使用

```js
// modules
const lineLog = require('single-line-log')
// es
import lineLog form 'single-line-log'
// 无限单行输出...
setInterval(() => lineLog.stdout(Math.random()), 100)
```

