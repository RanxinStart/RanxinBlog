---
title: Rust-基础
date: '2021-12-8 13:16'
sidebar: 'auto'
categories:
 - 语言
tags:
 - language
---

# Rust

## 一、简单介绍Rust

Rust是静态强类型语言。

## 二、安装Rust

### window安装

安装运行环境>>>[下载地址](https://www.rust-lang.org/learn/get-started)

### liunx安装

```bash
$ curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

### 验证安装

打印输出Rust版本号即为成功

```bash
$ rustc --version
# rustc 1.57.0 (f1edd0429 2021-11-29)
```

## 三、开发环境

### Vscode

安装插件rust-analyzer即可有代码提示

## 四、初始化一个项目

```bash
# 模板
$ cargo new <project-name>
# 示例
$ cargo new rust-project
```

### 初始化结构

```bash
# 项目文件
├── Cargo.toml # 项目描述文件，名称版本依赖...
└── src
   └── main.rs # 入口文件
```

## 五、Rust语法

> 调试运行 cargo run

### 0.数据类型



### 1.定义方法

```rust
fn fnName() {
    // 执行内容
}
```

### 2.变量和不可变变量

> 变量不可定义在全局，仅可在局部中定义

> 变量可以声明类型，也可以不声明，不声明会自动变为值的类型；

```rust
// 默认变量是不可变的
let a = 1;
a = 2; // 报错 a是不可变变量

// 可变变量
let mut b = 1;
b = 2;

// 以下两种都是正确的
let c = 1;
let d:i32 = 1;
```

### 3.常量

> 可以定义全局，始终不可变。只能设置为常量表达式

```rust
// 必须声明类型，且规范化大写
const A:i32 = 1;
```

## 六、构建和运行

构建为可执行文件

```bash
# 调试运行
$ cargo run
# 开发编译
$ cargo build
# 生产编译
$ cargo build --release
```

执行执行构建好的文件

```bash
#执行开发编译后的文件
$ .\target\debug\hello
#执行生成编译后的文件
$ .\target\release\hello #没有 debug信息，性能会更好
```

