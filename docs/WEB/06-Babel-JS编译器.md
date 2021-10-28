---
title: Babel-JS编译器
date: '2021-8-27 16:25:30'
sidebar: 'auto'
categories:
 - 前端
 - 服务端
tags:
 - ENV
---

## 前言

​		Babel 是一个工具链，主要用于在旧的浏览器或环境中**将 ES6+ 代码转换**为向后兼容版本的 JavaScript 代码。

​		严格来说，Babel 也可以转化为更低的规范。但以目前情况来说，**ES5 规范已经足以覆盖绝大部分浏览器**，因此常规来说转到ES5是一个安全且流行的做法。

​		**Babel 本身不具有任何转化功能**，它把转化的功能都分解到一个个 plugin(插件) 里面。因此当我们不配置任何插件时，经过 babel 的代码和输入是相同的。

![img](http://img.mp.itc.cn/upload/20170413/c2d29e8c0d764724801e7f52993905d4_th.png)

> **babel 7 的一个重大变化，把所有 `babel-*` 重命名为 `@babel/*`**

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
$ yarn add babel-plugin-xxx
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

​		.babelrc的没有有些许不同

```js
// .babelrc
{
	"presets":[],
	"plugins":[]
}
```



## 预设 Preset

​		比如 es2015 是一套规范，包含大概十几二十个转译插件。如果每次要开发者一个个添加并安装，配置文件很长不说，`npm install` 的时间也会很长，更不谈我们可能还要同时使用其他规范呢。

​		preset是babel插件的集合,甚至可以作为可以共享的 [`options`](https://www.babeljs.cn/docs/options) 配置。

### 一、官方的Preset

​		为了解决这个问题，babel 还提供了一组插件的集合。因为常用，所以不必重复定义 & 安装。(单点和套餐的差别，套餐省下了巨多的时间和配置的精力)

- [@babel/preset-env](https://www.babeljs.cn/docs/@babel/preset-env)
- [@babel/preset-flow](https://www.babeljs.cn/docs/babel-preset-flow)
- [@babel/preset-react](https://www.babeljs.cn/docs/babel-preset-react)
- [@babel/preset-typescript](https://www.babeljs.cn/docs/babel-preset-typescript)

### 二、官方Preset流程

> 此项在Babel 7.x中已经移除！

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
        // 完整名称也可以
        "babel-preset-xxx",
        // 带配置项需要配置的 指定路径的配置
        [require("@babel/preset-env"),{ config: true }],
        // 不带配置项，直接列出名字
        "stage-2"
    ]
}
```

### 四、*预设Env的配置

​		首先，介绍下历史背景，对了解和学习 @babel/preset-env 有帮助。

​		最初，为了让开发者能够尽早用上新的JS特性，babel团队开发了**babel-preset-latest**。这个preset比较特殊，它是多个preset的集合(es2015+)，并且随着ECMA规范的更新更增加它的内容。随着时间的推移，babel-preset-latest 包含的插件越来越多，这带来了如下问题：

1. 加载的插件越来越多，编译速度会越来越慢；
2. 随着用户浏览器的升级，ECMA规范的支持逐步完善，编译至低版本规范的必要性在减少（比如ES6 -> ES5），多余的转换不单降低执行效率，还浪费带宽。

> 在Babel 7.x中已经移除了babel-preset-lates，请强推 @babel/preset-env！

因为上述问题的存在，babel官方推出了@babel/preset-env插件。它可以**根据开发者的配置，按需加载插件**。配置项大致包括：

1. 需要支持的平台：比如node、浏览器等。
2. 需要支持的平台的版本：比如支持node@6.1等。

默认配置的情况下，它**跟 babel-preset-latest 是等同**的，会加载从es2015+所有preset。

​		env 的核心目的是**得知目标环境**的后只做必要的转换**。例如在开发时，开发用的浏览器支持 es6+，那么 es6 这个 preset 其实是不需要的，于是代码就可以小一点(一般转化后的代码总是更长)，**构建时间也可以缩短一些**。又例如在打包时需要兼容es5的浏览器，也根据env为生产环境加入es6这个preset。

```js
// babel.config.js
module.exports = {
    presets: [
        [
            "env",
            {
                // 浏览器市场份额大于 0.25%
                targets: "> 0.25%, not dead",
                targets:{
                    // 浏览器
                    browsers: [ "ie >= 8", "chrome >= 62" ]
                    // 其他内核
                    chrome:"8.0",
                    opera:"",
                    edge:"",
                    firefox:"",
                    safari:"",
                    ie:"",
                    ios:"",
                    android:"",
                    node:"6.10",  // 配置node支持 6.10 及以上的版本
                    electron:""
                }
                // 各种流行的模块化规范："amd"、 "commonjs"、 "systemjs"、 "umd"
                modules: "commonjs" // 默认值
            }
        ]
    ]
}
```



## 执行顺序

- Plugin 会运行在 Preset 之前。
- Plugin 会从前到后顺序执行。
- Preset 的顺序则 **刚好相反**(从后向前)。

​		preset 的逆向顺序主要是为了保证向后兼容，因为大多数用户的编写顺序是 `['es2015', 'stage-0']`。这样必须先执行 `stage-0` 才能确保 babel 不报错。因此我们编排 preset 的时候，也要注意顺序，**其实只要按照规范的时间顺序列出即可。**

## @babel/cli

​		顾名思义，cli 就是命令行工具。安装了 `babel-cli` 就能够在命令行中使用 `babel` 命令来编译文件。

## @babel/node

​		babel-node 是一个 CLI，其工作方式与 Node.js CLI 完全相同，它的额外好处是在运行之前使用 Babel 预设和插件进行编译

## @babel/register

​		@babel/register 模块改写 `require` 命令，为它加上一个钩子。此后，每当使用 `require` 加载 `.js`、`.jsx`、`.ts`、`.tsx`、`.es` 和 `.es6` 后缀名的文件，就会先用 babel 进行转码。

### 一、安装

```bash
yarn add @babel/register --dev
```

### 二、使用

​		使用时，必须首先加载 `require('@babel/register')`,由于它是实时转码，所以 **只适合在开发环境使用**。

​		需要注意的是，@babel/register 只会对 `require` 命令加载的文件转码，而 **不会对当前文件转码**。

```js
require("@babel/register");
// 引入了@babel/register改写了require然后将index.ts进行实时转码
require("./index.ts"); 
```

​		然后，就不需要手动对`index.ts`转码了。

## @babel/polyfill

### 一、详细说明

​		Babel默认只转换新的JavaScript句法（syntax），而不转换新的API，比如Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise等全局对象，以及一些定义在全局对象上的方法（比如`Object.assign`）都不会转码。

​		举例来说，ES6在`Array`对象上新增了`Array.from`方法。Babel就不会转码这个方法。如果想让这个方法运行，必须使用`@babel/polyfill`，为当前环境提供一个垫片。

​		使用时，在所有代码运行之前增加 `require('@babel/polyfill')`。或者更常规的操作是在 `webpack.config.js` 中将 `@babel/polyfill` 作为第一个 entry。因此必须把 `@babel/polyfill` 作为 `dependencies` 而不是 `devDependencies`

`@babel/polyfill` 主要有两个缺点：

1. 使用 `@babel/polyfill` 会导致打出来的包非常大，因为 `@babel/polyfill` 是一个整体，把所有方法都加到原型链上。比如我们只使用了 `Array.from`，但它把 `Object.defineProperty` 也给加上了，这就是一种浪费了。这个问题可以通过单独使用 `core-js` 的某个类库来解决，`core-js` 都是分开的。
2. `@babel/polyfill` 会污染全局变量，给很多类的原型链上都作了修改，如果我们开发的也是一个类库供其他开发者使用，这种情况就会变得非常不可控。

​		因此在实际使用中，如果我们无法忍受这两个缺点(尤其是第二个)，通常我们会倾向于使用 `@babel/plugin-transform-runtime`。

​		但如果代码中包含高版本 js 中类型的实例方法 (例如 `[1,2,3].includes(1)`)，这还是要使用 polyfill

### 二、安装

```bash
$ yarn add @babel/polyfill --dev
```

### 三、使用

​		在脚本头部，加入如下一行代码

```js
import '@babel/polyfill';
// 或者
require('@babel/polyfill');
```

## @babel/runtime

​		我们时常在项目中看到 .babelrc 中使用 `@babel/plugin-transform-runtime`，而 `package.json` 中的 `dependencies` (注意不是 `devDependencies`) 又包含了 `babel-runtime`，那这两个是不是成套使用的呢？他们又起什么作用呢？

​		先说 `@babel/plugin-transform-runtime`。

​		babel 会转换 js 语法，之前已经提过了。以 `async/await` 举例，如果不使用这个 plugin (即默认情况)，转换后的代码大概是：

```js
// babel 添加一个方法，把 async 转化为 generator
function _asyncToGenerator(fn) { return function () {....}} // 很长很长一段

// 具体使用处
var _ref = _asyncToGenerator(function* (arg1, arg2) {
  yield (0, something)(arg1, arg2);
});
```

​		在使用了 `@babel/plugin-transform-runtime` 了之后，转化后的代码会变成

```js
// 从直接定义改为引用，这样就不会重复定义了。
var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');
var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

// 具体使用处是一样的
var _ref = _asyncToGenerator3(function* (arg1, arg2) {
  yield (0, something)(arg1, arg2);
});
```

​		从定义方法改成引用，那重复定义就变成了重复引用，就不存在代码重复的问题了。

​		但在这里，我们也发现 `babel-runtime` 出场了，它就是这些方法的集合处，也因此，**在使用 `@babel/plugin-transform-runtime` 的时候必须把 `babel-runtime` 当做依赖。**

​		再说 `babel-runtime`，它内部集成了

1. `core-js`: 转换一些内置类 (`Promise`, `Symbols`等等) 和静态方法 (`Array.from` 等)。绝大部分转换是这里做的。自动引入。
2. `regenerator`: 作为 `core-js` 的拾遗补漏，主要是 `generator/yield` 和 `async/await` 两组的支持。当代码中有使用 `generators/async` 时自动引入。
3. helpers, 如上面的 `asyncToGenerator` 就是其中之一，其他还有如 `jsx`, `classCallCheck` 等等，可以查看 [babel-helpers](https://link.zhihu.com/?target=https%3A//github.com/babel/babel/blob/6.x/packages/babel-helpers/src/helpers.js)。在代码中有内置的 helpers 使用时(如上面的第一段代码)移除定义，并插入引用(于是就变成了第二段代码)。

​		`@babel/plugin-transform-runtime` **不支持** 实例方法 (例如 `[1,2,3].includes(1)`)

​		此外补充一点，把 helpers 抽离并统一起来，避免重复代码的工作还有一个 plugin 也能做，叫做 `babel-plugin-external-helpers`。但因为我们使用的 `transform-runtime` 已经包含了这个功能，因此不必重复使用。而且 babel 的作者们也已经开始讨论这两个插件过于类似，正在讨论在 babel 7 中把 `external-helpers` 删除，讨论在 [issue#5699](https://link.zhihu.com/?target=https%3A//github.com/babel/babel/issues/5699) 中。

## @babel/loader

​		前面提过 babel 的三种使用方法，并且已经介绍过了 `babel-cli`。但一些大型的项目都会有构建工具 (如 webpack 或 rollup) 来进行代码构建和压缩 (uglify)。理论上来说，我们也可以对压缩后的代码进行 babel 处理，但那会非常慢。因此如果在 uglify 之前就加入 babel 处理，岂不完美？

​		所以就有了 babel 插入到构建工具内部这样的需求。以(我还算熟悉的) webpack 为例，webpack 有 loader 的概念，因此就出现了 `@babel/loader`。

​		和 `babel-cli` 一样，`@babel/loader` 也会读取 .babelrc 或者 package.json 中的 `babel` 段作为自己的配置，之后的内核处理也是相同。唯一比 `babel-cli` 复杂的是，它需要和 webpack 交互，因此需要在 webpack 这边进行配置。比较常见的如下：

```js
module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: '@babel/loader'
    }
  ]
}
```

​		如果想在这里传入 babel 的配置项，也可以把改成：

```js
// loader: '@babel/loader' 改成如下：
use: {
  loader: '@babel/loader',
  options: {
    // 配置项在这里
  }
}
```

​		这里的配置项优先级是最高的。但我认为放到单独的配置文件中更加清晰合理，可读性强一些。

## @babel/* 总结

![img](https://pic3.zhimg.com/80/v2-7b71cd51932cf5d5f5a2491412c1191e_720w.jpg)

---

## 参考链接

- [腾讯云Babel 教程](https://cloud.tencent.com/developer/doc/1260)
- [一口（很长的）气了解 babel](https://zhuanlan.zhihu.com/p/43249121)
- [Babel--Preset(预设)](https://www.jianshu.com/p/1d6848183a7d)
- [Babel 入门教程](https://www.kancloud.cn/digest/babel/217105)

