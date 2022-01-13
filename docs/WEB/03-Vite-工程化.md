---
title: Vite工程化
date: '2021-7-5 23:15:37'
sidebar: 'auto'
categories:
 - 前端
 - 服务端
tags:
 - ENV
---

# Build And Config

> 如何搭建安装以及全部配置项

---

## 初始化安装

### 1.快速初始化一个`vite`项目

> yarn 

```bash
$ yarn create @vitejs/app  #初始化vite项目
$ yarn create vite #同上 二选一

# 初始化 Start #
√ Project name: ... RanxinForVue
√ Package name: ... ranxinforvue
√ Select a framework: » vue
√ Select a variant: » vue-ts
# 初始化 End #

$ yarn #安装依赖
```

> npm

```bash
$ npx init vite #初始化vite项目

# 初始化 Start #
√ Project name: ... RanxinForVue
√ Package name: ... ranxinforvue
√ Select a framework: » vue
√ Select a variant: » vue-ts
# 初始化 End #

$ npm i #安装依赖
```

### 2.手动初始化一个`vite`项目

#### 1.初始化一个NPM或Yarn

> 先创建一个目录... 我这就略过了

```bash
$ npm init #npm 初始化
$ yarn init #yarn 初始化
```

#### 2.为项目安装vite

```bash
$ npm add vite -D
$ yarn add vite --dev
```

#### 3.创建vite的入口文件

你可能已经注意到，在一个 Vite 项目中，`index.html` 在项目最外层而不是在 `public` 文件夹内。这是有意而为之的：在开发期间 Vite 是一个服务器，而 `index.html` 是该 Vite 项目的入口文件

```
root
├── index.html
├── node_modules
└── package.json
```

> index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <div id="app">我已经被Vite监听了！</div>
</body>
</html>
```

> 启动vite

```bash
$ npx vite
```

Vite 将 `index.html` 视为源码和模块图的一部分。Vite 解析 `<script type="module" src="...">` ，这个标签指向你的 JavaScript 源码。甚至内联引入 JavaScript 的 `<script type="module">` 和引用 CSS 的 `<link href>` 也能利用 Vite 特有的功能被解析。另外，`index.html` 中的 URL 将被自动转换，因此不再需要 `%PUBLIC_URL%` 占位符了。

与静态 HTTP 服务器类似，Vite 也有 “根目录” 的概念，即服务文件的位置，在接下来的文档中你将看到它会以 `<root>` 代称。源码中的绝对 URL 路径将以项目的 “根” 作为基础来解析，因此你可以像在普通的静态文件服务器上一样编写代码（并且功能更强大！）。Vite 还能够处理依赖关系，解析处于根目录外的文件位置，这使得它即使在基于 monorepo 的方案中也十分有用。

#### 3-1.修改vite的入口目录

> 请跳过这一步操作

> !! 注意 这会导致根目录完全变化...

首先我们将index.html放入public文件夹中

```
root
├── package.json
└── public
   └── index.html
```

> 通过启动参数修改入口目录

```bash
$ npx vite ./public
```

> 通过vite配置文件修改入口目录

在根目录创建vite配置文件

```
root
├── package.json
├── public
|  └── index.html
└── vite.config.ts
```

配置vite的root入口目录

```ts
// vite.config.ts
import { defineConfig } from 'vite'
export default defineConfig({
    root:'./public'
})
```

再次调用启动

```bash
$ npx vite
```

#### 4.安装相应的语言和插件

##### 1).Vue2

安装vite-plugin-vue2插件和 vue2

```bash
$ npm add vue
$ npm add vite-plugin-vue2 -D
```

为vite配置 vue2插件

> 在根目录创建vite配置文件

```
root
├── package.json
├── index.html
└── vite.config.ts
```

```js
// vite.config.ts
import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
export default defineConfig({
    plugins: [createVuePlugin()]
})

//  or  推荐使用上面的语法，defineConfig方法提供ts代码提示
import { createVuePlugin } from 'vite-plugin-vue2'
export default {
    plugins: [createVuePlugin()]
}
```

创建main.js入口 和 App.vue入口（js入口和vue入口）

```
root
├── index.html
├── package.json
├── src
|  ├── App.vue
|  └── main.js
└── vite.config.ts
```

```js
// main.js
import Vue from 'Vue'
import App from './App.vue'
new Vue({ render: (h) => h(App) }).$mount('#app')
```

```vue
<template>
  <div>我正在使用{{ version }}!</div>
</template>
<script>
export default {
  name: 'App',
  data: () => ({ version: 'Vue2' })
}
</script>
```

index.html入口中 引入 js的使用

> html中的链接、引用将会被vite解析

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <div id="app">我已经被Vite监听了！~~</div>
    <script type="module" src="/src/main.js"></script>
</body>
</html>
```

配置完毕运行

```bash
$ npx vite
```

##### 2).Vue3

安装@vitejs/plugin-vue插件和 vue3

```bash
$ npm add vue@next
$ npm add @vitejs/plugin-vue -D
```

为vite配置 vue2插件

> 在根目录创建vite配置文件

```
root
├── package.json
├── index.html
└── vite.config.ts
```

```js
// vite.config.ts
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
export default defineConfig({
    plugins: [Vue()]
})
```

创建main.js入口 和 App.vue入口（js入口和vue入口）

```
root
├── index.html
├── package.json
├── src
|  ├── App.vue
|  └── main.js
└── vite.config.ts
```

```js
// main.js
import { createApp } from 'Vue'
import App from './App.vue'
createApp(App).mount('#app')
```

```vue
<template>
  <div>我正在使用{{ version }}!</div>
</template>
<script setup>
import { ref } from 'vue'
const version = ref('Vue3')
</script>
```

index.html入口中 引入 js的使用

> html中的链接、引用将会被vite解析

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <div id="app">我已经被Vite监听了！~~</div>
    <script type="module" src="/src/main.js"></script>
</body>
</html>
```

配置完毕运行

```bash
$ npx vite
```

---

## 通常配置(resolve)

> 目标 > vite.config.js > resolve

---

### 公共基础路径(base)

> base
>
> **类型：** `string`
>
> **默认：** `/`

开发或生产环境服务的公共基础路径。合法的值包括以下几种：

- 绝对 URL 路径名，例如 `/foo/`
- 完整的 URL，例如 `https://foo.com/`
- 空字符串或 `./`（用于开发环境）

```js
base: '/addons/weitshop_shop/weshop/public/home/backend/'
```



---

### 别名配置

> resolve.alias
>
> **类型:**	``string``

配置路径别名 @ 和 ~ 两个路径

此处用了**node**的`resolve`方法 自动拼接路径

```js
resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '~': resolve(__dirname, 'src/components')
    }
  },
```

---

### 导入省略扩展名配置

>  resolve.extensions
>
> **类型：** `string[]`
>
> **默认：** `['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']`

导入时想要省略的扩展名列表。注意，**不** 建议忽略自定义导入类型的扩展名（例如：`.vue`），因为它会干扰 IDE 和类型支持。

```js
resolve: {
  extensions:['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
},
```

---

---

## 服务器配置

> 目标 > vite.config.js > server

---

### 指定服务器端口

> server.port
>
> **类型：** `number`
>
> **默认：** `3000`

指定服务器端口。注意：如果端口已经被使用，Vite 会自动尝试下一个可用的端口，所以这可能不是服务器最终监听的实际端口。

```js
export default {
  server: {
    port: 3333
  }
}
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

## 部署 html 到非根目录

经常有同学问这个问题：

> 为什么我本地开发是好的，部署后就没反应了，而且没有报错？

**没有报错！** 这是应用部署在非根路径的典型现象。为啥会有这个问题？因为路由没有匹配上，比如你把应用部署在 `/xxx/` 下，然后访问 `/xxx/hello`，而代码里匹配的是 `/hello`，那就匹配不上了，而又没有定义 fallback 的路由，比如 404，那就会显示空白页。

### 怎么解决？

>  可通过配置 [base](https://v2.umijs.org/zh/config/#base) 解决。

```bash
export default {
  base: '/path/to/your/app/root',
};
```