## 大概介绍

1. **浏览器端**的前端**打包**工具
2. 主要用于在浏览器中使用` npm` 包，最终会转换为 `commonJS (require)` 类似方式，在浏览器使用
3. 方便模块细分，每个模块自成，通过 `require` 引用其他模块
4. 基于流 `Stream`
5. 旧时代产物，尽管也能勉强处理` css`（[`CSS bundlers`](https://github.com/browserify/awesome-browserify#css-bundlers)），`html`（[`brfs`](https://github.com/browserify/brfs)），但是不太友好，且年久失修

## **Build And Config**

> 安装

```bash
// 使用yarn全局安装
$yarn global add browserify
// 使用npm全局安装
$npm install -g browserify
```

## 模块化打包使用

### 	1.引入其他模块使用

​		其他模块文件 导出`foo`方法

```js
// module.js
module.exports = {
  foo() {
    console.log('moudle foo()')
  }
}
```

​		主文件入口

```js
// main.js
const module = require('./module') // 使用其他模块
module.foo() //使用其他模块的方法
```



## 
