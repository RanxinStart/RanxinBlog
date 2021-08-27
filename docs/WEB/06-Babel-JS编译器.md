---
title: Babel-JS编译器
date: '2021-8-27 16:25:30'
sidebar: 'auto'
categories:
 - 编译
tags:
 - Babel
---

## 前言

​		Babel 是一个工具链，主要用于在旧的浏览器或环境中**将 ES6+ 代码转换**为向后兼容版本的 JavaScript 代码。

​		严格来说，Babel 也可以转化为更低的规范。但以目前情况来说，**ES5 规范已经足以覆盖绝大部分浏览器**，因此常规来说转到ES5是一个安全且流行的做法。

​		**Babel 本身不具有任何转化功能**，它把转化的功能都分解到一个个 plugin(插件) 里面。因此当我们不配置任何插件时，经过 babel 的代码和输入是相同的。

![img](http://img.mp.itc.cn/upload/20170413/c2d29e8c0d764724801e7f52993905d4_th.png)

## 插件

### 一、 插件类型

​		同一类语法可能同时存在语法插件版本和转译插件版本。**如果我们使用了转译插件，就不用再使用语法插件了。**

#### 1. 语法插件

​		当我们添加 **语法插件** 之后，在解析这一步就使得 babel 能够解析更多的语法。(顺带一提，babel 内部使用的解析类库叫做 babylon，并非 babel 自行开发)

​		举个简单的例子，当我们定义或者调用方法时，最后一个参数之后是不允许增加逗号的，如 `callFoo(param1, param2,)` 就是非法的。如果源码是这种写法，经过 babel 之后就会提示语法错误。

但最近的 JS 提案中已经允许了这种新的写法(让代码 diff 更加清晰)。为了避免 babel 报错，就需要增加语法插件 `babel-plugin-syntax-trailing-function-commas`

#### 2. **转译插件**

​		当我们添加 **转译插件** 之后，在转换这一步把源码转换并输出。这也是我们使用 babel 最本质的需求

​		比起语法插件，转译插件其实更好理解，比如箭头函数 `(a) => a` 就会转化为 `function (a) {return a}`。完成这个工作的插件叫做 `babel-plugin-transform-es2015-arrow-functions`

### 二、 常用插件

> ....

## 配置文件

​		插件是 babel 的根本，需要在配置文件中配置使用的插件

```bash
# 安装babel插件
$yarn add babel-plugin-xxx
```

​		将插件的名字增加到配置文件中 (根目录下创建 .babelrc 或者 package.json 的 `babel` 里面，格式相同)

```js
// babel.config.js
module.exports = {
    plugins:[
        babel-plugin-xxx,
        babel-plugin-xxx
    ]
}
```



## 预设 Preset

​		比如 es2015 是一套规范，包含大概十几二十个转译插件。如果每次要开发者一个个添加并安装，配置文件很长不说，`npm install` 的时间也会很长，更不谈我们可能还要同时使用其他规范呢。

​		preset是babel插件的集合,甚至可以作为可以共享的 [`options`](https://www.babeljs.cn/docs/options) 配置。

### 一、官方的Preset

​		为了解决这个问题，babel 还提供了一组插件的集合。因为常用，所以不必重复定义 & 安装。(单点和套餐的差别，套餐省下了巨多的时间和配置的精力)

- [@babel/preset-env](https://www.babeljs.cn/docs/babel-preset-env)
- [@babel/preset-flow](https://www.babeljs.cn/docs/babel-preset-flow)
- [@babel/preset-react](https://www.babeljs.cn/docs/babel-preset-react)
- [@babel/preset-typescript](https://www.babeljs.cn/docs/babel-preset-typescript)

### 二、官方Preset流程

> Stage-X （实验性质的 Presets）

- [Stage 0](https://www.babeljs.cn/docs/babel-preset-stage-0) - 设想（Strawman）：只是一个想法，可能有 Babel插件。
- [Stage 1](https://www.babeljs.cn/docs/babel-preset-stage-1) - 建议（Proposal）：这是值得跟进的。
- [Stage 2](https://www.babeljs.cn/docs/babel-preset-stage-2) - 草案（Draft）：初始规范。
- [Stage 3](https://www.babeljs.cn/docs/babel-preset-stage-3) - 候选（Candidate）：完成规范并在浏览器上初步实现。
- Stage 4 - 完成（Finished）：将添加到下一个年度版本发布中。

### 三、自定义Preset

> 插件配置同理

```js
// babel.config.js
module.exports = {
    presets: [
        // babel-plugin-xxx
        // 带配置项需要配置的 第一个是名字(xxx自动读取)  第二个是插件配置项
        ["xxx", { config: true }], 
        // 带配置项需要配置的 指定路径的配置
        [require("@babel/preset-env"),{ config: true }],
        // 不带配置项，直接列出名字
        "stage-2"
    ]
}
```

### 四、*预设Env的配置

​		首先，介绍下历史背景，对了解和学习 babel-preset-env 有帮助。

​		最初，为了让开发者能够尽早用上新的JS特性，babel团队开发了**babel-preset-latest**。这个preset比较特殊，它是多个preset的集合(es2015+)，并且随着ECMA规范的更新更增加它的内容。随着时间的推移，babel-preset-latest 包含的插件越来越多，这带来了如下问题：

1. 加载的插件越来越多，编译速度会越来越慢；
2. 随着用户浏览器的升级，ECMA规范的支持逐步完善，编译至低版本规范的必要性在减少（比如ES6 -> ES5），多余的转换不单降低执行效率，还浪费带宽。

因为上述问题的存在，babel官方推出了babel-preset-env插件。它可以根据开发者的配置，按需加载插件。配置项大致包括：

1. 需要支持的平台：比如node、浏览器等。
2. 需要支持的平台的版本：比如支持node@6.1等。

默认配置的情况下，它**跟 babel-preset-latest 是等同**的，会加载从es2015+所有preset。

​		env 的核心目的是**通过配置得知目标环境**的特点，然后**只做必要的转换**。例如在开发时，开发用的浏览器支持 es6+，那么 es6 这个 preset 其实是不需要的，于是代码就可以小一点(一般转化后的代码总是更长)，**构建时间也可以缩短一些**。又例如在打包时需要兼容es5的浏览器，也根据env为生产环境加入es6这个preset。

## 执行顺序

- Plugin 会运行在 Preset 之前。
- Plugin 会从前到后顺序执行。
- Preset 的顺序则 **刚好相反**(从后向前)。

​		preset 的逆向顺序主要是为了保证向后兼容，因为大多数用户的编写顺序是 `['es2015', 'stage-0']`。这样必须先执行 `stage-0` 才能确保 babel 不报错。因此我们编排 preset 的时候，也要注意顺序，**其实只要按照规范的时间顺序列出即可。**

## 参考链接

- [腾讯云Babel 教程](https://cloud.tencent.com/developer/doc/1260)
- [一口（很长的）气了解 babel](https://zhuanlan.zhihu.com/p/43249121)
- [Babel--Preset(预设)](https://www.jianshu.com/p/1d6848183a7d)

