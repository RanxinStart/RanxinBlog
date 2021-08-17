## 大概介绍

1. **浏览器端**的前端**打包**工具
2. 主要用于在浏览器中使用` npm` 包，最终会转换为 `commonJS (require)` 类似方式，在浏览器使用
3. 方便模块细分，每个模块自成，通过 `require` 引用其他模块
4. 基于流 `Stream`
5. 旧时代产物，尽管也能勉强处理` css`（[`CSS bundlers`](https://github.com/browserify/awesome-browserify#css-bundlers)），`html`（[`brfs`](https://github.com/browserify/brfs)），但是不太友好，且年久失修

## **Build And Config**

> 安装

```bash
# 使用yarn安装
$yarn add browserify -D
# 使用npm安装
$ npm i browserify --save-dev
```

## 模块化打包使用

### 	1. 引入其他模块使用

​		其他模块文件 导出一个对象 含有`foo`方法

```js
// > src/module.js
module.exports = {
  foo() {
    console.log('moudle foo()')
  }
}
```

​		主文件入口

```js
// main.js
const srcModule = require('./src/module') // 使用其他模块
srcModule.foo() //使用其他模块的方法
```

### 2. 添加打包命令

```json
// package.json
{
  "scripts": {
    "build": "browserify . > build.js"
  }
    ...
}

// 需要打包到指定文件夹
// 1.先创建对应文件夹
// $md dist
// 然后
{
  "scripts": {
    "build": "browserify . > dist/build.js"
  }
    ...
}
```

> 执行命令进行打包 `yarn build` | `npm run build`

### 3. `html`使用打包后的文件

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>build file test</title>
</head>
<body>
    <script src="dist/build.js"></script>
</body>
</html>
```

