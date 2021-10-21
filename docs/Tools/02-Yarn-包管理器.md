---
title: Yarn包管理器
date: '2021-10-12 15:54:59'
sidebar: 'auto'
categories:
 - 命令行
tags:
 - Cli
 - Tool
---

# Yarn的介绍

## Yarn 是什么?

Yarn是由Facebook、Google、Exponent 和 Tilde 联合推出了一个新的 JS 包管理工具，Yarn 是为了弥补 npm 的一些缺陷而出现的。在npm 6以上的版本中，npm的缺陷已不明显，可依然使用npm

## Yarn的特点

### 1.速度快

Yarn 缓存了每个下载过的包，所以再次使用时无需重复下载。 同时利用并行下载以最大化资源利用率，因此安装速度更快。

>## 离线模式
>
>如果你以前安装过某个包，再次安装时可以在没有任何互联网连接的情况下进行。

>## 网络弹性
>
>重试机制确保单个请求失败并不会导致整个安装失败

> ## 网络性能
>
> Yarn 有效地对请求进行排队处理，避免发起的请求如瀑布般倾泻，以便最大限度地利用网络资源

### 2.安全可靠

在执行代码之前，Yarn 会通过算法校验每个安装包的完整性。使用详细、简洁的锁文件格式和明确的安装算法，Yarn 能够保证在不同系统上无差异的工作。

> ## 确定性
>
> 不管安装顺序如何，相同的依赖关系将在每台机器上以相同的方式安装

>## 扁平模式
>
>将依赖包的不同版本归结为单个版本，以避免创建多个副本

> ## 相同的软件包
>
> 从 npm 安装软件包并保持相同的包管理流程。

## 安装Yarn

> 如果你有npm推荐使用npm安装

运行yarn需要nodejs，请确定有安装nodejs

### 1.npm全局安装

```bash
$ npm i yarn -g
```

### 2.Chocolatey 安装

```bash
$ choco install yarn
```

### 3.Scoop 安装

```bash
$ scoop install yarn
# 如果你没有nodejs
$ scoop install nodejs
```

### 验证安装完成

```bash
# 输出yarn版本
$ yarn -v 
```

### 注意

请将您的项目目录和 Yarn 的缓存目录 (%LocalAppData%\Yarn) 列入杀毒软件的白名单中，否则会因为每次向磁盘写入文件时而被扫描，导致安装软件包变得很慢。

# Yarn的基本使用

## 初始化一个项目

会在当前目录下初始化一个包配置

```bash
$yarn init
```

```bash
name (your-project):#项目名称
version (1.0.0):#项目版本
description:#项目描述
entry point (index.js):#项目入口
git repository:#仓库地址
author:#作者
license (MIT):#证书
```



## 添加依赖包

添加一个依赖到配置中

```bash
$ yarn add [package]
# 指定版本
$ yarn add [package]@[version]
# 指定Tag
$ yarn add [package]@[tag]
# 全局添加
$ yarn global add [package]
# 指定类型
# 添加到依赖>dependencies中
$ yarn add [package]
# 添加到开发依赖>devDependencies中
$ yarn add [package] --dev
# 添加到peerDependencies中
$ yarn add [package] --peer
# 添加到optionalDependencies中
$ yarn add [package] --optional
```

> [了解peerDependencies和optionalDependencies](https://blog.csdn.net/hujinyuan357/article/details/99621542)

## 依赖包升级

```bash
$ yarn upgrade [package]
$ yarn upgrade [package]@[version]
$ yarn upgrade [package]@[tag]
```

## 查看依赖包列表

```bash
$ yarn list
# 查看全局依赖包列表
$ yarn global list
```

## 移除依赖包

```bash
$yarn remove [package]
```

## 安装项目全部依赖

```bash
$ yarn 
# 或者
$ yarn install
```

> 不使用缓存安装

```bash
$ yarn install --flat
```

还有很多的其他选项，请看[相关文档](https://yarn.bootcss.com/docs/cli/install/)

## 用户自定义脚本

与npm run <script>一致，实际上是使用yarn run <script>运行的，不过填写运行命令时，yarn的run是可以省略的

```bash
$ yarn <script> [<args>]
```

# Yarn的深度使用

查看帮助列表

```bash
$ yarn help
```

## Yarn配置

### 1.查看全部配置

```bash
$ yarn config list
```

### 2.修改指定配置

```bash
$ yarn config set <key> <value>
```

### 3.删除指定配置

```bash
$ yarn config delete <key>
```

## Yarn创建项目

create是一个速记命令，能一次性帮您完成两件事情

```bash
# 仅举例，无法使用
$ yarn create pkg [<args>]
# 与下方命令一致
$ yarn global add create-pkg && create-pkg [<args>]
```

可用例子

```bash
$ yarn create vite vite-app
```

## ~~Yarn生成锁定依赖文件~~

> ##### `yarn generate-lock-entry`

## 生成Yarn的Lock缓存

将npm生成的`package-lock.js`或现有的`node_modules`生成一份`yarn.lock`

```bash
$ yarn import
```

## Yarn工作区

> 内容较多... 下次一定

运作指定工作区的脚本

```bash
$ yarn workspace <workspace_name> <command>
```

## 查看指定包信息

同npm中的 npm view xxx,显示依赖中的信息

```bash
$ yarn info yarn
$ yarn info yarn@berry
# 指定的字段信息
$ yarn info yarn versions
# json输出
$ yarn info yarn --json
```

## 查看所有包许可证

```bash
# 查看所有包许可证列表
$ yarn licenses
# 查看每个许可证的详细信息
$ yarn licenses generate-disclaimer
```

## Yarn登录登出

与npm一致，登录后可使用yarn publish发布包

```bash
# 登录
$ yarn login
# 发布内容到Npm
$ yarn publish
# 登出
$ yarn logout
```

## Yarn上传依赖(发布)

与npm发布依赖一致，yarn也是发布到npm上。

### 1.发布与指定发布

```bash
# 发布当前目录下 package.json配置的包
$ yarn publish 
# 发布指定目录下 package.json配置的包
$ yarn publish <dir>/package.json
# 发布`.tgz`压缩的包
$ yarn publish <dir>/filename.tgz
```

### 2.设置发布Tag

发布设置有指定的tag时，只有在指定的tag下当前的发布的包为最新版本，如果不指定有个默认的tag是latest，无论是发布还是添加依赖，不指定tag都使用默认值

```bash
# 指定tag
# yarn publish --tag <tag>
$ yarn publish --tag bate
# 添加指定tag的依赖包
$ yarn add pkgname@bate
```

### 3.设置公开还是私有

npm是可以发布私有包的，但发布私有包是需要收费的，如果以个人ID或团队ID发布新的包是默认以私有发布，这时需要设置发布公开包，个人ID和团队ID(例如:@ranxin/xxxx)才可以正常发布

```bash
$ yarn publish --access <public|restricted>
```

### 4.设置新版本提示

使用`version`代替的值跳过新版本的提示。

```bash
$ yarn publish --new-version <version>
```

## Yarn查看本地包大小

```bash
# 以下相同效果
$ yarn why vue
$ yarn why node_modules/vue
$ yarn why node_modules/vue/index.js
```

## Yarn依赖存档

创建包依赖项的压缩 gzip 存档。

```bash
$ yarn pack
# 指定创建的存档名称
$ yarn pack --filename <filename>
```



## pkg包缓存

Yarn 将每个包存储在文件系统上用户目录的全局缓存中。`yarn cache list`将打印出每个缓存的包

### 1.查看缓存目录

```bash
# 打印yarn缓存的dir
$ yarn cache dir
```

### 2.清除缓存

```bash
#清除全部缓存
$ yarn cache clean
#清除指定缓存
$ yarn cache clean [<module_name...>]
```

### 3.修改缓存的目录

设置`cache-folder`配置值以配置缓存目录。

```bash
$ yarn config set cache-folder <path>
```

## pkg包完整性检查

验证当前项目中的包依赖项的版本是否`package.json`与 yarn 的锁定文件中的版本匹配。

```bash
$ yarn check
```

**注意**：该命令`yarn check`在历史上一直存在错误和维护不足，因此[已被弃用并将在 Yarn 2.0 中删除](https://github.com/yarnpkg/rfcs/pull/106)。你应该`yarn install --check-files`改用。

# Yarn 2X(Berry)

