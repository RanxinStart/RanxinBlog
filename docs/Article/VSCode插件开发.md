# 前言

介绍并记录一下`vscode`插件如何开发,从**创建**到**调试**再到**打包发布**的一个流程。

## 插件在 VSCode 中能做什么

- 主题

- - 界面和文本(TextMate 语法)主题色
  - 图标样式

- 通用功能

- - 添加命令
  - 添加配置项
  - 添加快捷键
  - 添加菜单项
  - 添加右键菜单
  - 从文本输入框获取输入(QuickPick)
  - 存储数据(localStorage)

- 工作区扩展

- - 活动栏项目
  - 显示提示框
  - 状态栏信息
  - 显示进度条
  - 打开文件
  - 显示网页(web view)

- 程序语言

- - 实现新语言的高亮
  - 实现新语言的调试器
  - 代码库管理
  - 定义和执行 Task
  - 定义 snippet

# 初次开发体验

## 1.创建你的第一个插件

> yo 是一个扩展生成器

使用`yo`创建你的第一个`vscode`创建进行调试开发!

### 安装环境

需要`yo`创建插件项目,`generator-code`进行开发调试

```bash
$ npm install -g yo generator-code
```

### 创建插件项目

输入后进行选项选择自动创建示例项目

```bash
$ yo code
```

```bash
     _-----_     ╭──────────────────────────╮
    |       |    │   Welcome to the Visual  │
    |--(o)--|    │   Studio Code Extension  │
   `---------´   │        generator!        │
    ( _´U`_ )    ╰──────────────────────────╯
    /___A___\   /
     |  ~  |
   __'.___.'__
 ´   `  |° ´ Y `

? What type of extension do you want to create? New Extension (TypeScript)
? What's the name of your extension? test-create
? What's the identifier of your extension? test-create
? What's the description of your extension?
? Initialize a git repository? No
? Bundle the source code with webpack? Yes
? Which package manager to use? yarn
```

### 调试

在`vscode`打开此项目后，按`F5`进行开发调试。

这时可使用示例的命令`ctrl`+`shift`+`p`打开命令窗口运行命令。

![image-20220223214833301](image/VSCode插件开发/image-20220223214833301.png)

### 示例介绍

配置文件

```json
// package.json

// 创建事件(激活事件)
"activationEvents": [
    // 监听命令,test-create.helloWorld被触发时调用
	"onCommand:test-create.helloWorld"
],
// 创建调用位置
"contributes": {
    // 命令窗口展示的命令
	"commands": [
		{
            // 运行的命令
			"command": "test-create.helloWorld",
            // 显示的名称
			"title": "Hello World"
		}
	]
}
```

代码文件

```ts
/* extension.ts */

import * as vscode from 'vscode';
// 生命周期,当扩展被激活时调用(Activation Event 发生的时候就会执行)
export function activate(context: vscode.ExtensionContext) {
    // 先在package.json创建激活事件后 注册事件执行回调
    const command = vscode.commands.registerCommand(
        // 注册的事件(和package.json的activationEvents相同)
        'test-create.helloWorld',
        // 触发事件后的回调
        () => {
            // 让vscode显示消息
			vscode.window.showInformationMessage('Hello World from test-create!');
		}
    );
    // 将命令订阅到上下文
    context.subscriptions.push(command);
}
// 生命周期，当扩展被停用时调用
export function deactivate() {}
```

### 示例理解

创建test1和test2运行并输出消息

```json
// package.json

"activationEvents": [
    "onCommand:test-create.test1",
    "onCommand:test-create.test2"
],
"main": "./dist/extension.js",
"contributes": {
	"commands": [
		{
			"command": "test-create.test1",
			"title": "run test1"
		},
		{
			"command": "test-create.test2",
			"title": "run test2"
		}
	]
},
```

```ts
/* extension.ts */
import type { ExtensionContext } from 'vscode';
import { window, commands } from 'vscode';

export const activate = (context: ExtensionContext) => {
	context.subscriptions.concat([
		commands.registerCommand('test-create.test1', test1),
		commands.registerCommand('test-create.test2', test2)
	]);
};
// run test1
const test1 = () => {
	window.showInformationMessage('你运行了test1!');
};
// run test2
const test2 = () => {
	window.showInformationMessage('你运行了test2!');
};
```

# 生命周期

![img](https://pic3.zhimg.com/80/v2-2dffb529c2db3d6ae96e743eb91b4032_720w.jpg)

## 1.Contribution Points

开始调用插件的位置，可以设置命令菜单、键盘事件、打开某个语言的文件等..来触发事件

例如，我需要在命令添加 hello来调用某个 激活的事件

```json
"contributes": {
	"commands": [
		{
            // 调用的激活事件(activationEvents)
			"command": "test-create.test1",
            // 显示的标题
			"title": "run test1"
		},
	]
},
```

## 2.activationEvents

监听并发布相应内容

例如监听test-create.test1命令后 发布test-create.test1，这时订阅test-create.test1的方法就会触发。

```json
"activationEvents": [
	"onCommand:test-create.test1",
],
```

### [`onLanguage`](https://code.visualstudio.com/api/references/activation-events#onLanguage) 

每当打开解析为某种语言的文件时

```json
 "onLanguage:python"
```

### [`onCommand`](https://code.visualstudio.com/api/references/activation-events#onCommand) 

每当执行命令时

```json
"onCommand:extension.sayHello"
```

### `onDebug`

调试时

[`onDebugInitialConfigurations`](https://code.visualstudio.com/api/references/activation-events#onDebugInitialConfigurations)

[`onDebugResolve`](https://code.visualstudio.com/api/references/activation-events#onDebugResolve)

### [`workspaceContains`](https://code.visualstudio.com/api/references/activation-events#workspaceContains)

每当打开一个文件夹并且该文件夹包含至少一个匹配的文件时

```json
 "workspaceContains:**/.editorconfig"
```

### [`onFileSystem`](https://code.visualstudio.com/api/references/activation-events#onFileSystem)

每当读取来自特定*方案的文件或文件夹时*

```json
"onFileSystem:sftp"
```

### [`onView`](https://code.visualstudio.com/api/references/activation-events#onView)

只要在 VS Code 侧边栏中展开指定 id 的视图（扩展或源代码控制是内置视图的示例），就会发出此激活事件并且感兴趣的扩展将被激活。

只要具有`nodeDependencies`id 的视图可见

```json
"onView:nodeDependencies"
```

### [`onUri`](https://code.visualstudio.com/api/references/activation-events#onUri)

每当打开该扩展的系统范围 Uri 时，就会发出此激活事件，并且将激活感兴趣的扩展。Uri 方案固定为`vscode`或`vscode-insiders`。Uri 权限必须是扩展的标识符。Uri 的其余部分是任意的

```json
"onUri"
```

### [`onWebviewPanel`](https://code.visualstudio.com/api/references/activation-events#onWebviewPanel)

自己看...

### [`onCustomEditor`](https://code.visualstudio.com/api/references/activation-events#onCustomEditor)

每当 VS Code 需要创建具有匹配的[自定义编辑器](https://code.visualstudio.com/api/extension-guides/custom-editors)时，就会发出此激活事件并激活感兴趣的扩展`viewType`

```json
 "onCustomEditor:catCustoms.pawDraw"
```

### [`onAuthenticationRequest`](https://code.visualstudio.com/api/references/activation-events#onAuthenticationRequest)

自己看...

### [`onStartupFinished`](https://code.visualstudio.com/api/references/activation-events#onStartupFinished)

这个激活事件被触发，感兴趣的扩展将在VS Code 启动**后的一段时间内被激活。**这类似于`*`激活事件，但不会减慢 VS Code 的启动速度。`*`目前，在所有已激活的扩展程序都完成激活后会发出此事件

```json
"onStartupFinished"
```

### [`*`](https://code.visualstudio.com/api/references/activation-events#Start-up)

`*`每当 VS Code 启动时，就会发出激活事件，并激活感兴趣的扩展。

```json
"*"
```

## 3.activate



# 参考资料

- [VSCode插件开发入门](https://zhuanlan.zhihu.com/p/99198980)
- [Title](http://ranxin.cc)	author:[@XXX](http://ranxin.cc)