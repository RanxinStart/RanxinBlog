---
title: vite工程化
date: '2021-7-5 23:15:37'
categories:
 - 前端
 - 服务端
tags:
 - Server
---

# Build And Config

> 如何搭建安装以及全部配置项

---

## 初始化安装

### 1.先安装``yarn``

```bash
$ npm i yarn -g
```

### 2.使用`yarn`初始化一个`vite + vue`项目

```bash
$ yarn create @vitejs/app  #初始化vite项目

# 初始化 Start #
√ Project name: ... RanxinForVue
√ Package name: ... ranxinforvue
√ Select a framework: » vue
√ Select a variant: » vue-ts
# 初始化 End #

$ yarn #安装依赖
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