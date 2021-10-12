---
title: 目录结构生成工具
date: '2021-7-5 23:15:37'
categories:
 - 命令行
tags:
 - Cli
 - Tool
---

# Build And Config

> 如何搭建安装以及全部配置项

---

## 使用npm安装

> 建议使用npm安装  使用yarn可能会导致无法全局使用

### 1.npm安装``tree-cli``

```bash
$ npm i -g tree-cli
```

### 2.注意事项

```bash
# -l(L) 5 为文件层级
# -d 为仅导出文件目录
# -o 为输出到文件
# !注意 win用户使用treee代替tree 因为tree已经被win占用了
$ tree -l 2 -o out.text -d
```

### 3.过滤指定文件夹

```bash
# 非win用户    指定了多个文件夹↓↓↓↓
$ tree --ignore "node_modules,docs"
# win用户	     指定了多个文件夹↓↓↓↓
$ treee --ignore "node_modules,docs"
```

