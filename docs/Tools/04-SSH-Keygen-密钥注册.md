---
title: SSH-Keygen密钥
date: '2021-10-13 15:59:59'
sidebar: 'auto'
categories:
 - 命令行
tags:
 - Cli
 - Tool
---

# SSH是什么?

## 简述SSH

​		**Secure Shell**（安全外壳协议，简称**SSH**）是一种**加密**的[网络传输协议](https://zh.wikipedia.org/wiki/网络传输协议)，可在不安全的网络中为网络服务**提供安全的传输**环境[[1\]](https://zh.wikipedia.org/wiki/Secure_Shell#cite_note-rfc4251-1)。

## SSH的由来

​		芬兰[赫尔辛基理工大学](https://zh.wikipedia.org/wiki/赫尔辛基理工大学)的[塔图·于勒宁](https://zh.wikipedia.org/wiki/塔图·于勒宁)发现自己学校存在嗅探密码的网络攻击，便于1995年编写了一套保护信息传输的程序，并称其为“secure shell”，简称SSH[[13\]](https://zh.wikipedia.org/wiki/Secure_Shell#cite_note-13)，设计目标是取代先前的[rlogin](https://zh.wikipedia.org/w/index.php?title=Rlogin&action=edit&redlink=1)、[Telnet](https://zh.wikipedia.org/wiki/Telnet)、[FTP](https://zh.wikipedia.org/wiki/FTP)[[14\]](https://zh.wikipedia.org/wiki/Secure_Shell#cite_note-14)和[rsh](https://zh.wikipedia.org/wiki/远程外壳)等安全性不足的协议。1995年7月，于勒宁以[免费软件](https://zh.wikipedia.org/wiki/免費軟體)的形式将其发布。程序很快流行起来，截至1995年底，SSH的用户数已经达到两万，遍布五十个国家。

​		1995年12月，于勒宁创立了SSH通信安全公司来继续开发和销售SSH。SSH的早期版本用到了很多[自由软件](https://zh.wikipedia.org/wiki/自由软件)，例如[GNU libgmp](https://zh.wikipedia.org/wiki/GNU多重精度运算库)，但后来由SSH公司发布的版本逐渐变成了[专有软件](https://zh.wikipedia.org/wiki/专有软件)。

​		截至2000年，已经有两百万用户使用SSH。

## 为什么要使用SSH

​		在互联网中许多的场景需要**实现客户端与服务端的联系**，但在一个**没有加密的网络**下是极易被资料窃取亦或者是网络攻击的。为能实现通讯又要保证安全的情况下SSH以[**非对称加密**](https://zh.wikipedia.org/wiki/非对称加密)实现[**身份验证**](https://zh.wikipedia.org/wiki/身份验证)以**保证通讯安全**。

## SSH如何是实现的

​		-

## SSH的安全验证

> 在客户端来看，SSH提供两种级别的安全验证。

- 第一种级别（基于密码的安全验证），通过**帐号和密码登录**到远程主机，并且所有传输的数据都会被SSH传输层协议加密。但可能会有别的服务器在冒充真正的服务器，不过客户端校验主机公钥，在**服务器私钥不泄露**的前提下就**能避免被“中间人”攻击**。
- 第二种级别（基于[密钥](https://zh.wikipedia.org/wiki/公开密钥加密)的安全验证），需要依靠密钥，也就是你必须为**自己创建一对密钥**，并把**公钥放在需要访问的服务器**上。客户端SSH会向服务器发出请求，**请求用你的私钥进行安全验证**并发送使用私钥对会话ID等信息的签名。服务器收到请求后，先在服务器下寻找你的公钥，然后将公钥和私钥进行比较，并用公钥检验签名是否正确。如果两个密钥一致，且签名正确，服务器就认为用户登录成功。

> 在服务器端来看，SSH也提供安全验证。

- 服务器将自己的公钥分发给相关的客户端，并将密钥交换过程中的公开信息与协商密钥的哈希值的签名发送给客户端，客户端将获取的服务器公钥计算指纹并与其他安全信道获得的公钥指纹相比对并验证主机签名。
- 存在一个密钥认证中心，所有提供服务的主机都将自己的公钥提交给认证中心，公钥认证中心给服务端颁发证书，而任何作为客户端的主机则只要保存一份认证中心的公钥就可以了。在这种模式下，服务器会发送认证中心提供给主机的证书与主机对密钥交换过程中公开信息的签名。客户端只需要验证证书的有效性并验证签名。

## SSH协议的可扩展性

​		SSH协议框架中设计了大量**可扩展项**，比如用户自定义算法、客户自定义密钥规则、高层扩展功能性应用协议。**这些扩展大多遵循[IANA](https://zh.wikipedia.org/wiki/IANA)的有关规定**，特别是在重要的部分，像命名规则和消息编码方面。

# SSH-Keygen的使用

## 基础内容

### 选项说明

|  命令选项   | 全称 |                             描述                             |
| :--------: | :---: | :----------------------------------------------------------: |
|  -b   | bits | 指定要创建的密钥中的位数。 <br />最小位长度为768位，默认长度为2048位。 |
| -C | comment |                         注释,备注信息 。                         |
|     -p     |  |            请求更改私钥文件的密码而非创建新私钥。            |
|     -t     | type |                    指定要创建的密钥类型。常用RSA和DSA两种<br />默认是RSA，还有ecdsa和ed25519                    |
|     -o     | openSSH |                    使用新的OpenSSH格式。                     |
|     -q     |  |   静默的ssh-keygen。 <br />在创建新密钥时，/etc/rc文件会使用它。   |
|     -N     |  |                        提供新的密码。                        |
|     -B     |  | 对于ssh-keygen2，以Bubble Babble格式显示[密钥指纹](https://zh.wikipedia.org/wiki/密钥指纹)。 |
|     -l     |  |   查看[密钥指纹](https://zh.wikipedia.org/wiki/密钥指纹)。   |
| -f | file | 设置/选择SSH的位置 |

### SSH生成的内容

​		使用SSH_keygen生成后，会生成公钥和蜜月两个 文件，默认的文件名是**id_[type]**，例如我使用默认生成rsa类型的ssh那么

```bash
$ssh-keygen #什么都不填，默认rsa类型生成在用户.ssh文件夹中

#用户.ssh目录下
id_rsa # 密钥文件
id_rsa.pub  # 公钥文件
```

### 快速进入SSH目录

```bash
#  ~/  代表用户根目录
$cd ~/.ssh
```

## SSH存放目录

​		默认的存放目录会在用户文件夹中.ssh内，可以使用选项-f来指定文件夹和文件名

```bash
$ssh-keygen -f C:\Users\admin\.ssh\ssh_name
```

## SSH查看指定指纹

​		查看已有的SSH信息，如果没有使用-f指定某个指纹信息，将会询问是否打开在.ssh文件下面其中的一条SSH。

```bash
$ssh-keygen -l -f C:\Users\admin\.ssh\ssh_name
```

## SSH查看指定密文

​		生成SSH及是为了远程连接，所以要将自己SSH公钥中的密文复制出来交给需要通讯的SSH。

```bash
$cat C:\Users\admin\.ssh\ssh_name.pub # 通常来说，都是复制公钥
```

## SSH设定密码

```bash
$ssh-keygen -N root -C "Info"
```

## SSH修改密码

```bash
# -p表示重新生成 -f指定修改文件 -C 修改的描述信息 -N修改的密码
$ssh-keygen -p -f .\test_rsa  -C "Ranxin235" -N root
```

