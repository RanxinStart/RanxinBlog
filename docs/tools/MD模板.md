---
title: 标题
date: '2019-08-08 08:00:00'
sidebar: 'auto'
categories:
 - 烹饪
 - 爱好
tags:
 - 烤
 - 鸭子
keys: #文章加密密码
 - '123456'
publish: false #文章是否发布
---

# Build And Config

> 如何搭建安装以及全部配置项

---

## 使用yarn安装 

### 1.先安装``yarn``

```bash
$ npm i yarn -g
```

### 2.然后全局安装`umi`

```bash
$ yarn global add umi # 或者 npm install -g umi
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

## 部署 html 到非根目录

经常有同学问这个问题：

> 为什么我本地开发是好的，部署后就没反应了，而且没有报错？

**没有报错！** 这是应用部署在非根路径的典型现象。为啥会有这个问题？因为路由没有匹配上，比如你把应用部署在 `/xxx/` 下，然后访问 `/xxx/hello`，而代码里匹配的是 `/hello`，那就匹配不上了，而又没有定义 fallback 的路由，比如 404，那就会显示空白页。

::: theorem 牛顿第一定律
假若施加于某物体的外力为零，则该物体的运动速度不变。

::: right
来自 [维基百科](https://zh.wikipedia.org/wiki/%E7%89%9B%E9%A1%BF%E8%BF%90%E5%8A%A8%E5%AE%9A%E5%BE%8B)
:::