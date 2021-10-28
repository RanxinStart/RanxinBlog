---
title: 微信小程序
date: '2021-7-5 23:15:37'
sidebar: 'auto'
categories:
 - 前端
tags:
---

# Build And Config

> 如何搭建安装以及全部配置项

---

## 使用yarn安装

### 先安装``yarn``

```bash
$ npm i yarn -g
```

### 然后全局安装`umi`

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

### 安装依赖

```bash
$ yarn add react-router-breadcrumbs-hoc
```

### 配置实现

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

> 扩展内容 以及 重点

## 配置公众号关注组件

### 1.配置

需要先到[公众号开发平台](https://mp.weixin.qq.com/)配置相关信息

> 公众号开发平台 > 设置 > 关注公众号 > 打开公众号关注组件 > 选择公众号

### 2.代码

代码加入公众号标签会自动显示

```html
<official-account></official-account>
```

### 3.调试中显示

**注意！**目前只支持在指定的一些场景值才可以显示

> 开发者工具中选择编译模式 > ＋添加编译模式 > 选择场景1011进行编译

- **开发版小程序从扫二维码（场景值 1011）打开 — 体验版小程序打开**
- 当小程序从扫小程序码场景（场景值1047，场景值1124）打开时
- 当小程序从聊天顶部场景（场景值1089）中的「最近使用」内打开时，若小程序之前未被销毁，则该组件保持上一次打开小程序时的状态
- 当从其他小程序返回小程序（场景值1038）时，若小程序之前未被销毁，则该组件保持上一次打开小程序时的状态

