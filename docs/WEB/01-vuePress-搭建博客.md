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

## 初始化一个vuePress项目

> 本次使用yarn搭建 所以没有的话 先安装yarn 

### 1.先安装``yarn``

```bash
$ npm i yarn -g
```

### 2.初始化一个`yarn`项目

```bash
$ yarn init
# Strat 初始化yarn #
question name (ranxin-for-vue):
question version (1.0.0):
question description:
question entry point (index.js):
question repository url: https://github.com/RanxinStart
question author: Ranxin
question license (MIT):
question private:
# End 初始化yarn #
```

### 3.项目安装VuePress

> 到这里 基本的步骤已经完成了 创建文件即可运行

```bash
$ yarn add vuepress -d
$ yarn #安装依赖
```

### 5.添加启动VuePress命令

>  在`package.json`中的`scripts`添加命令

```js
{
  "scripts": {
    "start": "vuepress dev docs --temp .temp",
    "docs:dev": "vuepress dev docs --temp .temp",
    "docs:build": "vuepress build docs"
  }
}
```

### 6.创建相关文件以及项目结构

> 快捷创建 以及 目录结构

```bash
mkdir docs; echo '## Hello VuePress' > docs/README.md
mkdir .vuepress
# 结构目录
├── docs
|  └── README.md
├── package.json
└── yarn.lock
```

## 配置vuePress初始化结构

### 1.先看最终结构

> !!注意  `docs`文件内容为约定式路由 docs中的文件使用对应路由即可查看

```bash
# 最终文件结构
├─── docs
│   ├── README.md
│   └── .vuepress
│       ├── public
│       └── config.js
└── package.json
```

### 2.创建配置存放文件夹

> 在docs文件夹下创建`.vuepress`文件夹

```bash
# 进入docs文件夹
$ cd docs
# 创建存放基础配置文件夹 并进入
$ mkdir .vuepress; cd .vuepress
```

### 3.在`.vuepress`文件夹下面创建`config.js`

>  config.js是`VuePress`必要的配置文件，它导出一个javascript对象

```javascript
// 配置文件
module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around'
}
```

### 4.创建存放静态资源文件夹

> 这个文件夹用来放置静态资源的，打包出来之后会放在`.vuepress/dist/`的根目录。

```bash
# 存放静态资源文件夹
$ mkdir public
```

## 配置VuePress

### 1.首页 README.md

> 默认的主题提供了一个首页，像下面一样设置`home:true`即可，可以把下面的设置放入`README.md`中
>
> [跳转官方文档](https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E9%A6%96%E9%A1%B5)

```markdown
---
home: true
heroImage: https://s.gravatar.com/avatar/36b02a08d165fbf2c4d50b5f0b7add33?s=80
heroText: RanxinStart
tagline: Code For Vue
actionText: 快速上手 →
actionLink: /web/
header:  MIT Licensed | Copyright © 2018-present Evan You
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2018-present Evan You
---
```

### 2.docs约定式路由访问

> !!注意  `docs`文件内容为约定式路由 docs中的文件使用对应路由即可查看

```bash
docs
├── README.md #指定首页路由 或是 /访问
└── web # /web/
   ├── 01.md # /web/01 访问
   ├── 02.md # /web/02 访问
   └── README.md # /web/ 访问
```

### 3.config.js 基本配置项

> [官方文档](https://vuepress.vuejs.org/zh/config)：https://vuepress.vuejs.org/zh/config

```js
module.exports = {
  // 文档标题
  title: "Ranxin's blog",
  // 文档说明
  description: 'blog for vue',
  // 静态资源基本路径
  base: '/mao-blog/',
  // 设置网站图标
  head: [
    ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `/favicon.ico` }]
  ],
  themeConfig: {
    // 导航栏配置
    nav: [
      { text: '首页', link: '/' },
      {
        text: '开发', icon: 'reco-document',
          items: [
          	{ text: '前端', link: 'url' },
          	{ text: '后端', link: 'url' },
          	{ text: '工具', link: 'path' }
          ]
      },
    ],
  },
}
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

## 初始化出现乱码

> 仅是因为 echo '## Hello VuePress' > docs/README.md 创建的问题  > 非utf-8
>
> 替换 README.md为正常创建的md文件即可