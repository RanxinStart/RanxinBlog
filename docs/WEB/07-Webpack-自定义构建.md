---
title: Webpack自动化构建 
date: '2021-8-14 10:37:21'
sidebar: 'auto'
categories:
 - 前端
 - 服务端
tags:
 - ENV
---

## 一、Webpack是什么

### 1. 介绍

​		webpack 是一种**前端资源构建工具**，一个静态模块打包器(module bundler)。 在 webpack 看来, 前端的**所有资源文件(js/json/css/img/less/...)都会作为模块处理**。 它将根据模块的依赖关系进行静态分析，**打包生成对应的静态资源**(bundle)。

### 2. 五个核心概念

####  Ⅰ. Entry 

​		入口(Entry)指示 webpack 以哪个文件为入口起点开始打包，分析构建内部依赖图。

#### Ⅱ. Outpu

​		输出(Output)指示 webpack 打包后的资源 bundles 输出到哪里去，以及如何命名。

#### Ⅲ. Loader

​		 Loader 让 webpack 能 够 去 处 理 那 些 非 JavaScript 文 件 (webpack 自 身 只 理 解 JavaScript)

#### Ⅳ.  Plugins

​		插件(Plugins)可以用于执行范围更广的任务。插件的范围包括，从打包优化和压缩， 一直到重新定义环境中的变量等。

#### Ⅵ. Mode

​		模式(Mode)指示 webpack 使用相应模式的配置

- development 开发环境
- production 生成环境

## 二、使用Webpack打包

### 1.no-config模式

#### Ⅰ . 打包的文件

​		分别为`js模块`、`json`、`css`进行编译打包

```bash
# 目录结构
├── index.html
├── index.js  # js入口 
├── package.json # 包信息
└── src 
   ├── css
   |  └── css1.css # 需要打包的的css
   ├── json
   |  └── json1.json # 需要打包的json
   └── module
      └── module1.js # 需要打包的js模块
```

​		分别为需要打包的文件添加内容

```css
/* css1.css */
body,html {
    background: "#6cf"
}
```

```json
// json1.json
{
    "name": "json1",
    "time": "2021-8-29 02:08:58"
}
```

```js
// module1.js
export const module1 = () => "module1"
```

​		在入口js中使用，这时候先将css注释掉

> 如果不注释掉css的引入将会报错,因为Loader之支持 json和js的编译打包

```js
// 引入css样式
// import "./src/css/css1.css"

// 引入json
import json1 from "./src/json/json1"

// 引入module
import { module1 } from "./src/module/module1"

// 打印json和module
console.log(json1,module1())
```

#### Ⅱ. 进行打包

##### 		安装打包依赖

```bash
$yarn add webpack --dev
$yarn add webpack-cli --dev
```

##### 		添加打包命令

```json
"scripts": {
    "dev": "webpack ./index.js -o ./dist --mode=development",
    "dev1": "webpack --entry ./index.js --output-path ./dist --mode=development",
},
```

##### 		进行打包

```bash
$yarn dev
```

#### Ⅲ. 使用打包后代码

```html
<!-- index.html -->
<script src="./dist/mian.js"></script>
```

​		使用后控制台将会输出 {name: "json1", time: "2021-8-29 02:08:58"}      "module1"

#### Ⅳ. 打包为生产环境

​		使用production模式进行打包，此项只需要修改mode后面的参数，不同的是在使用production参数进行打包得到的代码是经过压缩的

​		新增一条 build打包命令 打包production模式

```js
"scripts": {
   "dev": "webpack ./index.js -o ./dist --mode=development",
   "dev1": "webpack --entry ./index.js --output-path ./dist --mode=development",
   "build": "webpack ./index.js -o ./dist --mode=production"
},
```

### 2.config模式

​		