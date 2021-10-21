---
title: Vue-Route页面路由
date: '2021-7-5 23:15:37'
sidebar: 'auto'
categories:
 - 前端
tags:
 - JavaScript
 - Vue
 - Route
---

# Build And Config

> 如何搭建安装以及全部配置项

---

## 安装

### 使用`yarn`安装

```bash
# vue2
$ yarn add vue-router
# vue3
$ yarn add vue-router@next
```

### 使用[`npm`](https://router.vuejs.org/zh/installation.html#npm)安装

```bash
# vue2
$ npm install vue-router
# vue3
$ npm install vue-router@next
```

### 配置到Vue使用

> 在main.js 入口文件创建vueApp的时候配置

```js
import { createApp } from 'vue'
import { createRouter } from 'vue-router'
/** Vue-Router 路由器 */
// 这里通常会分文件夹
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: allRoutes
})
// 使用后再挂载
const app = createApp(App).use(router).mount('#app')
```

### 在Vue中显示

> 这时只是配置完成 还需要route的视图组件才可以显示

```vue
<!-- app.vue -->
<template>
  <router-view />
</template>
```

---

## 文件夹推荐结构

### 1.文件目录

```js
src
├── main.ts  //入口文件
├── router	//路由存放点
|  ├── index.ts
|  └── modules
|     └── user.ts
└── view	//视图存放点
   └── user
      └── login.vue
```

### 2.各个文件配置

#### (1)view 文件夹

> 创建页面即可

#### (2)router 文件夹

> 配置基础页面,其他页面放modules内

```js
/* route > index.ts */
import { createRouter , RouteRecordRaw } from 'vue-router'
// 二级使用 user模块的内容
import user from './modules/user'
const routes: RouteRecordRaw[] = [
    {
        path:'/',
        component: import('../view/app.vue'),
        children: [user]
    }
]

/** Vue-Router 路由器 */
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})
```

#### (3)router/modules 文件夹

```js
/* route > modules > user.ts */
import { RouteRecordRaw } from 'vue-router'
// 二级路由内容
export const user:RouteRecordRaw = {
     path:'/user/login',
     component: import('../view/user/login.vue'),
}
```

# Code And Application

> 代码 和 应用场景

---



# Important And Extend

> 扩展内容 以及重点

---