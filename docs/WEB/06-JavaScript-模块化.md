---
title: JavaScript模块化 
date: '2021-9-13 11:10:33'
sidebar: 'auto'
categories:
 - 文章
tags:
 - 前端
 - 尘埃
---

## [前言](https://www.ruanyifeng.com/blog/2012/10/javascript_module.html)

### 模块化需求

​		随着网站逐渐变成"[互联网应用程序](https://en.wikipedia.org/wiki/Web_application)"，嵌入网页的`Javascript`代码越来越庞大，越来越复杂。网页越来越像桌面程序，需要一个团队分工协作、进度管理、单元测试等等......开发者不得不使用软件工程的方法，管理网页的业务逻辑。**`Javascript`模块化编程，已经成为一个迫切的需求。**

> 理想情况下，开发者只需要实现核心的业务逻辑，其他都可以加载别人已经写好的模块。

### `JavaScript`模块化

但是，`Javascript`在`es5`之前不是一种模块化编程语言，它不支持"[类](https://www.ruanyifeng.com/blog/2012/07/three_ways_to_define_a_javascript_class.html)"（class），更遑论"模块"（module）了。[`ECMAScript`标准](https://en.wikipedia.org/wiki/ECMAScript)第六版，支持"类"和"模块"。

`Javascript`社区做了很多努力，在现有的运行环境中，实现"模块"的效果。本文总结了当前＂`Javascript`模块化编程＂的最佳实践，说明如何投入实用。虽然这不是初级教程，但是只要稍稍了解`Javascript`的基本语法，就能看懂

## 代码实现模块化

### **一、原始写法**

​		模块就是实现特定功能的一组方法。

​		只要把不同的函数（以及记录状态的变量）简单地放在一起，就算是一个模块

```js
function m1(){
　　//...
}
function m2(){
　　//...
}
```

​		上面的函数`m1()`和`m2()`，组成一个模块。使用的时候，直接调用就行了。

​		**缺点很明显："污染"了全局变量，无法保证不与其他模块发生变量名冲突，而且模块成员之间看不出直接关系。**

### **二、对象写法**

​		为了解决上面的缺点，可以把模块写成一个对象，所有的模块成员都放到这个对象里面。

```js
var module1 = {
    _count : 0,
　　m1 (){
　　　　//...
　　},
　　m2 (){
　　　　//...
　　}
}
```

​		上面的函数`m1()`和`m2()`，都封装在`module1`对象里。使用的时候，就是调用这个对象的属性。

```js
　module1.m1();
```

​		但是，这样的写法**会暴露所有模块成员，内部状态可以被外部改写**。比如，外部代码可以直接改变内_count值。

```js
module1._count = 5;
```

### **三、立即执行函数写法**

​		使用"[立即执行函数](http://benalman.com/news/2010/11/immediately-invoked-function-expression/)"（Immediately-Invoked Function Expression，`IIFE`），可以达到不暴露私有成员的目的。

```js
var module1 = (function(){
　　const _count = 0
　　const m1 = function(){
　　　　//...
　　}
　　const m2 = function(){
　　　　//...
　　}
　　return { m1 , m2 }
})();
```

​		使用上面的写法，外部代码无法读取内部的_count变量。

```js
console.info(module1._count); //undefined
```

​		`module1`就是`Javascript`模块的基本写法。下面，再**对这种写法进行加工**。

### **四、放大模式**

​		如果一个模块很大，必须分成几个部分，或者一个模块需要继承另一个模块，这时就有必要采用"放大模式"（augmentation）。

```js
var module1 = (function (mod){
　　mod.m3 = function () {
　　　　//...
　　};
　　return mod;
})(module1);
```

​		上面的代码为`module1`模块**添加了一个新方法`m3()`**，然后返回新的`module1`模块。

### **五、宽放大模式**

​		在浏览器环境中，模块的各个部分通常都是从网上获取的，有时无法知道哪个部分会先加载。**如果采用上一节的写法，第一个执行的部分有可能加载一个不存在空对象**，这时就要采用"宽放大模式"（Loose augmentation）。

```js
var module1 = (function (mod){
　　//...
　　return mod;
})(window.module1 || {});
```

​		与"放大模式"相比，＂宽放大模式＂就是"立即执行函数"的参数**可以是空对象**

### **六、输入全局变量**

​		独立性是模块的重要特点，模块内部最好不与程序的其他部分直接交互。为了在模块内部调用全局变量，必须显式地将其他变量输入模块。

```js
var module1 = (function ($, YAHOO) {
　　//...
})(jQuery, YAHOO);
```

​		上面的`module1`模块需要使用`jQuery`库和`YUI`库，就把这两个库（其实是两个模块）当作参数输入`module1`。这样做除了保证模块的独立性，还使得模块之间的依赖关系变得明显。

## 模块化规范

​		先想一想，为什么模块很重要？

​		因为有了模块，我们就可以更方便地使用别人的代码，想要什么功能，就加载什么模块。但是，这样做有一个前提，那就是**大家必须以同样的方式编写模块**，否则你有你的写法，我有我的写法，岂不是乱了套！考虑到`Javascript`模块现在还没有官方规范，这一点就更重要了。

> 目前，通行的`Javascript`模块规范共有两种：[`CommonJS`](http://wiki.commonjs.org/wiki/Modules/1.1)和[`AMD`](https://github.com/amdjs/amdjs-api/wiki/AMD)。

### 一、`CommonJs`

#### `node.js`

2009年，美国程序员Ryan Dahl创造了[`node.js`](https://nodejs.org/)项目，将`javascript`语言用于服务器端编程。

![img](http://www.ruanyifeng.com/blogimg/asset/201210/bg2012103002.jpg)

这标志"`Javascript`模块化编程"正式诞生。因为老实说，在**浏览器环境**下，**没有模块也不是特别大的问题**，毕竟网页程序的复杂性有限；但是在**服务器端**，**一定要有模块**，与操作系统和其他应用程序互动，否则根本没法编程。

#### 模块系统require

`node.js`的[模块系统](https://nodejs.org/docs/latest/api/modules.html)，就是**参照[`CommonJS`](http://wiki.commonjs.org/wiki/Modules/1.1)规范实现**的。在`CommonJS`中，有一个全局性方法`require()`，用于加载模块。假定有一个数学模块`math.js`，就可以像下面这样加载。

```js
var math = require('math');
```

然后，就可以调用模块提供的方法：

```js
var math = require('math');
math.add(2,3); // 5
```

> require()用于加载模块。

### 二、浏览器局限性

#### 为什么不能和服务端模块相同

​		有了服务器端模块以后，很自然地，大家就**想要客户端模块**。而且最好两者能够兼容，一个模块不用修改，**在服务器和浏览器都可以运行**。

​		但是，由于一个重大的局限，使得**`CommonJS`规范不适用于浏览器环境**。还是上一节的代码，如果在浏览器中运行，会有一个很大的问题，你能看出来吗？

```js
var math = require('math');
math.add(2,3);
```

​		第二行`math.add(2, 3)`，在第一行require('math')之后运行，因此**必须等`math.js`加载完成**。也就是说，**如果加载时间很长，整个应用就会停在那里等**。

#### 如何解决

​		这**对服务器端不是一个问题**，因为所有的模块都存放在本地硬盘，可以同步加载完成，等待时间就是硬盘的读取时间。但是，**对于浏览器，这却是一个大问题**，因为模块都放在服务器端，**等待时间取决于网速的快慢**，可能要等很长时间，浏览器处于"假死"状态。

​		因此，浏览器端的模块，**不能采用"同步加载"**（synchronous），**只能采用"异步加载"**（asynchronous）。这就是**`AMD`规范诞生**的背景。

### 三、`AMD`

#### `AMD`的定义

​		[`AMD`](https://github.com/amdjs/amdjs-api/wiki/AMD)是"Asynchronous Module Definition(异步模块定义)"的缩写。它**采用异步方式加载模块，模块的加载不影响它后面语句的运行。所有依赖这个模块的语句，都定义在一个回调函数中，等到加载完成之后，这个回调函数才会运行**。

#### `AMD`加载方式

​		**`AMD`也采用require()语句加载模块，但是不同于`CommonJS`**，它要求两个参数：

```js
require([module], callback);
// 第一个参数[module]，是一个数组，里面的成员就是要加载的模块；
// 第二个参数callback，则是加载成功之后的回调函数。如果将前面的代码改写成AMD形式，就是下面这样：
require(['math'], function (math) {
	math.add(2, 3);
});
// math.add()与math模块加载不是同步的，浏览器不会发生假死。
```

> 加载完成后,在回调函数内执行

​		所以很显然，`AMD`比较适合浏览器环境

#### `AMD`规范的库

​		目前，主要有两个`Javascript`库实现了`AMD`规范：[`require.js`](http://requirejs.org/)和[`curl.js`](https://github.com/cujojs/curl)。

###  四、`RequireJS`

​		`RequireJS`是一个基于`AMD`规范的库

#### 一、如果不使用`requireJs`和`AMD`规范

```bash
# 目录结构
├── index.html
├── index.js
└── noRequireJs
   ├── module1.js
   └── module2.js
```

​		假如有个基础的模块`module1`  还有个依赖于`module1 `的模块`modele2`

```js
// module1.js
(()=>{
    const getName = () => "module1"
    return window.module1 = { getName }
})()

// module2.js
((module1)=>{
    const output = () =>{
        console.log('我调用了模块1的方法:' + module1.getName())
    }
    return window.module2 = { output }
})(module1)
```

​		在主要的JS文件中使用`modele2`的输出功能

```js
// index.js
module2.output() // 调用输出方法
```

​		最后在页面中使用

```html
<!-- index.html -->
<!-- 这时 必须要先执行module1 才能在module2内拿到module1的实例 -->
<!-- 最后再用index调用 否则会报错 -->
<script src="./noRequireJs/module1.js"></script>
<script src="./noRequireJs/module2.js"></script>
<script src="./index.js"></script>
```

#### 二、使用`requireJs`和`AMD`规范

```bash
#目录结构
├── index.html
├── index.js
├── node_modules
|  └── requirejs
|     └── require.js
└── useRequire
   ├── module1.js
   └── module2.js
```

​		添加requirejs

```bash
$yarn add requirejs
```

​		假如有个基础的模块`module1`  还有个依赖于`module1 `的模块`modele2`

```js
// module1.js
define(()=>{
    const getName = () => 'module1'
    return { getName }
})

// module2.js
define(['module1'],(module1)=>{
    const output = () => console.log('module2调用' + module1.getName)
    return { output }
})
```

​		将所有模块配置到`requirejs`	

```js
// index.js
requirejs.config({
    baseUrl: './',  // 基础Url
    paths: {  // 模块路径列表
        module1: './useRequire/module1',  // 模块名和对应的路径
        module2: './useRequire/module2'   // 注意！模块路径不需要加 .js 
    }
})
```

​		在主要的JS文件中使用`modele2`的输出功能

```js
// index.js
requirejs(['module2'], (module2) => {
    module2.output()
})
```

​		最后在页面中使用

```html
<!-- data-main是JS主文件路径  src使用包里的require.js  -->
<script data-main="./index" src="./node_modules/requirejs/require.js"></script>
```

#### 三、使用外部的模块

​		假如要使用外部的jquery模块，先安装或下载文件，然后配置到requirejs，即可任意使用。

> 需要支持AMD规范的库，才可以**直接**使用

```js
// jquery 支持amd, 在define是一个函数且是amd  会定义 jquery模块并返回
if ( typeof define === "function" && define.amd ) {
    // 这里的第一个参数为String，所以在引用时必须命名为jquery才能使用
	define( "jquery", [], function() {
		return jQuery;
	} );
}
```

​		添加jquery模块

```bash
$yarn add jquery
```

​		配置到requirejs

```js
// index.js
requirejs.config({
    baseUrl: './',  // 基础Url
    paths: {  // 模块路径列表
        module1: './useRequire/module1',  // 模块名和对应的路径
        module2: './useRequire/module2'   // 注意！模块路径不需要加 .js 
        jquery:'./node_modules/jquery/dist/jquery'
    }
})
```

​		在任意模块中使用 

```js
// module2.js
define(['module1', 'jquery'], (module1, $) => {
    const output = () => {
        console.log('module2调用' + module1.getName)
        // 调用output时 将背景修改为#6cf
        $(document.body).css('background','#6cf')
    }
    return { output }
})
```

#### 四、使用非AMD模块

​		假如要使用非AMD模块，需要额外配置`shim`。这里拿uniq举例

```bash
$yarn add uniq
```

​		配置requirejs

```js
// index.js
requirejs.config({
    baseUrl: './',
    paths: {
        module1: './useRequire/module1',
        module2: './useRequire/module2',
        jquery: './node_modules/jquery/dist/jquery',
        uniq: './node_modules/uniq/uniq'
    },
    shim: {
        uniq: {
            exports: 'unique'  // uniq中方法的unique 所以是 unique
        }
    }
})
```

​		在任意模块使用

```js
// module2.js
define(['module1', 'jquery', 'uniq'], (module1, $, uniq) => {
    const output = () => {
        // 使用module1
        console.log('module2调用' + module1.getName)
        // 使用jquery
        $(document.body).css('background', '#6cf')
        // uniq
        console.log(uniq([1, 3, 6, 3, 5, 6, 4, 3]))
    }
    return { output }
})
```

## ES6模块化

### 一、使用browserify

#### 1.工具and流程

- es6+
- @babel/preset-env
- @babel/cli
- @babel/core
- browserify

> es6 => babel => browserify => browser

#### 2. 为什么要使用babel

​		browserify是将CommonJS编译成单文件供web使用，但**CommonJS并不支持es6的export和import**的语法。所以要使用@babel/preset-env将**es6+语法编译转换为CommonJS**后使用browserify打包

#### 3.  安装依赖

```bash
# 安装@babel/preset-env     es6+转es5的预设
$yarn add @babel/preset-env --dev
# 安装browserify
$yarn add browserify --dev
```

#### 4. 配置babel转换

​		根目录下创建.babelrc或babel.config.js文件

```js
// .babelrc
{
    "presets": [
        [
            "@babel/preset-env",
            {
                "targets": {
                    "ie": "9"
                }
            }
        ]
    ]
}
```

#### 5.创建相应文件夹和文件

```bash
├── index.html # html文件
├── package.json # 包文件
└── src 
   ├── index.js # 主要js目录
   └── module # 存放模块的位置
      └── module1.js
```

#### 6. 使用es6的import和export语法模块化

```js
// module1.js
export const output = () =>{
    console.log('我是module1')
}
```

```js
// index.js
import { output } from "./module/module1"
output() // 使用module1的方法
```

#### 7. 使用babel编译为es5语法

​		在package内 加入编译命令  babel 目标路径 -d 输出路径

```js
// package.json
"scripts": {
    "babel": "babel ./src -d ./babel-build"
}
```

​		运行babel编译

```bash
$yarn babel
```

#### 8. 使用browserify打包

​		这时使用babel打包后，es6的import会变为CommonJs的模块化语法

```js
// babel编译后的 index.js
"use strict";
var _module = require("./module/module1");
(0, _module.output)(); // 使用module1的方法
```

​		使用browserify将CommonJS编译为单文件

​		添加browserify打包命令

```js
// package.json
"scripts": {
    "babel": "babel ./src -d ./babel-build",
    "browserify": "browserify ./babel-build -o ./dist/index.js"
},
```

​		运行browserify打包命令

```bash
$yarn browserify
```

#### 9. 在html中引入即可使用

```html
<!-- index.html -->
<script src="dist/index.js"></script>
```

​		运行index.html打开控制台里面会有 “我是module1” 

#### 10. 组合打包命令

```js
// package.json
"scripts": {
    "babel": "babel ./src -d ./babel-build",
    "browserify": "browserify ./babel-build -o ./dist/index.js",
    "build": "yarn babel && yarn browserify"
},
```

​		使用一键将babel和browserify打包编译 刷新浏览器即可查看最新输出

```bash
$yarn build
```

## 二、使用RequireJs