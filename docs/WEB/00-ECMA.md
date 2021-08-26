---
title: ECMAScript6~11 
date: '2021-8-14 10:37:21'
sidebar: 'auto'
categories:
 - 前端
tags:
 - 标准
 - ECMA

---

## 初步认识ECMA

### 1. 什么是ECMA

​		ECMA全称是European Computer Manufacturers Association(欧洲计算机制造商协会)

​		ECMAScript是由网景开发的一种脚本语言的标准化规范；最初命名为Mocha，后来改名为LiveScript，最后重命名为JavaScript

​		ECMAScript 是由 ECMA-262标准化的程序设计语言

> ECMA-262是 ECMA制定的许多标准之一

### 2. 为什么与ES6为主

​		ES6是 ECMAScript 2015的标准，在ES6版本中**变更内容最多**，**具有里程碑的意义**。ES6中加入了许多新的语法特性，编程实现更简单高效。ES6是前端发展的趋势，就业必备的技能。

### 3.ES6~ES11的兼容问题

​		在这里可能会有一个疑问，新出的标准在旧的浏览器上面可能会出现兼容问题。例如说现在使用最新的ES11(ECMAScript2020)标准，可能会在2020年以前的浏览器无法使用，这时就要使用Babel了。

​		Babel是一个 JavaScript 编译器，能讲ES6以上的代码编译成ES5的代码后，在浏览器中运行。这样即使你使用的是ES11的代码，最终经过编译后也会变成ES5的代码在旧的浏览器中执行。

> 并且不会报错

## ES6~11

### 1. 声明变量

​		新语法中使用let和const声明变量,let&const变量不会造成全局污染，也不会有变量提升。

```js
// es5
var A = 5;
// es6
let B = 5;
// const和let的区别在于const是常量，无法修改const声明的常量
// 如果const中声明的是一个高级数据，它的值是一个地址。这时可以修改高级数据的内的值
const C = 5;
```

### 2.  解构赋值

```js
// 定义ABC三个常量ABC 得到1 2 3
const [A, B, C] = [1, 2, 3]
// 定义DE和Name三个常量 得到1 2 3
const { D, E, F:Name } = { D:1,E:2,F:3 }
```

### 3. 模板字符串

```js
const str1 = "我是字符串变量"
const str2 = `我是模板字符串:${str1}`
console.log(str2) // 我是模板字符串:我是字符串变量
// 可以在字符串中直接使用换行符
const str3 = `
	<div>
		这里不会报错哦
	</div>
`
```

### 4. 对象简化

```js
const num = 1;
// 这里要实现得到一个对象 含有num和num的值 以及一个getName方法
// es5
var obj1 = {
    num:num,
    getName:function(){
        return 'obj1'
    }
}
// es6
const obj2 = {
    num,
    getName(){
    	return 'obj2'   
    },
    getAge:()=> 'obj2'
}
```

### 5. 箭头函数

​		箭头函数不只是一个简化function的语法，箭头函数还是一个没有this的函数，在箭头函数中使用this实际上使用的是外部的this，它也有函数作用域

​		箭头函数没有this，所以使用call或是apply修改this是无效的。

```js
const fun1 = (a) => { return a}
const fun2 = (a) => a
const fun3 = a => a
const fun4 = a => ({a}) //返回了一个对象 {a:传入的值}
```

​		箭头函数不能作为构造函数使用

```js
// 普通函数
function fun5(name) {
    this.name = name
}
const obj5 = new fun5('fun5') // 得到一个实例化对象

// 箭头函数
let fun6 = (name) => {
    this.name = name
}
const obj6 = new fun6('fun6') // TypeError 报错 fun6 is not a constructor
```

​		箭头函数没有arguments变量

```js
(() => {
  console.log(arguments)
})(1,2,3)  // TypeError arguments is not defined
```

### 6. 函数默认值

​		基础函数默认值 

```js
const defaultFun = (a = 5,b = 10) => {
    return a + b
}
// 因为a传了1所以没有使用默认值 b没有传是undefined所以得到默认值10
defaultFun(1) // 11  a:1  b:10  
// 如果穿的值是一个undefined 那么也会视为值未定义 而使用默认值
defaultFun(1,undefined) // 11  a:1  b:10  
```

​		解构时默认值

```js
const defaultFun1 = ({ a=5, b=10 }) =>{
    return a + b
}
// 和上面相同
defaultFun1({a:1}) // 11  a:1  b:10 
```

​		解构别名 + 默认值

```js
const defaultFun2 = ({ a:after = 5 }) =>{
    console.log(a) // a is not defined
    console.log(after) // 5
}
defaultFun2()
```

### 7. 扩展运算符

​		能将数组或是对象进行拆包扩展

#### 1.数据合并

```js
const arr1 = [1,2,3]
const arr2 = [4,5,6]
const arr3 = [...arr1,...arr2] // [1,2,3,4,5,6]

const obj1 = { a:1 }
const obj2 = { b:2 }
const obj3 = { ...obj1, ...obj2 } // { a:1, b:2 }
```

#### 2.数据克隆(浅拷贝)

```js
const arr1 = [1,2,3]
const arr2 = [...arr1]
// 对象也一样 看数据合并就知道怎么操作了...
```

#### 3.伪数组转真数组

​		将有迭代器的数组对象转为数组

```js
function fun1(){
    const argArr = [...arguments]
    // 得到一个真数组
}
```



### 8.  Rest参数(剩余参数)

​	 	rest参数只能在最后使用

```js
((a,...args) = >{
    console.log(a) // 输出第一个值 1
    console.log(args) // 输出剩余值 [2,3,4] 数组
})(1,2,3,4)
```

### 9. Symbol

- ES6新的数据类型,表示一个独一无二的值
- Symbol的值是唯一的,可以用来解决命名冲突问题
- Symbol的值不能进行数据运算
- Symbol定义的对象属性不能使用for...in遍历，但可以使用Reflect.ownKeys来获取对象所有键值

#### 1.创建一个Symbol值

```js
// 创建一个Symbol 可传入一个描述字符串
let s = Symbol()
let s1 = Symbol("s1")

// 唯一性
let s2 = Symbol("s1")
console.log(s1 === s2) // false

// 创建相同的全局共享Symbol
let s3 = Symbol.for("s3")
let s4 = Symbol.for("s3")
console.log(s3 === s4) // true
```

#### 2.Symbol在对象中的应用

​		唯一调用，只能用原来的Symbol调用

```js
const key = Symbol('这是一把钥匙')
const obj1 = {
    [key]:'宝箱'
}
console.log(obj1) // { Symbol('这是一把钥匙'):'宝箱' } 但无法调用

console.log(obj1['Symbol(这是一把钥匙)']) // undefined 与对象内属性相同名字但无法调用
console.log(obj1[Symbol('这是一把钥匙')]) // undefined 重新传入一个新的Symbol无法调用
console.log(obj1[key]) // 用原来定义的key才可以调用
```

#### 3.Symbol修改原型行为

​		除了自己创建的symbol，JavaScript还内建了一些在ECMAScript 5 之前没有暴露给开发者的symbol，它们代表了内部语言行为。它们现在可以使用Symbol来访问并进行修改。

##### 		1.Symbol.iterator

​		一些内置类型拥有默认的迭代器行为，其他类型（如 [`Object`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object)）则没有。

> 下表中的内置类型拥有默认的`@@iterator`方法：

- [`Array.prototype[@@iterator]()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator)
- [`TypedArray.prototype[@@iterator]()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/@@iterator)
- [`String.prototype[@@iterator]()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/@@iterator)
- [`Map.prototype[@@iterator]()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map/@@iterator)
- [`Set.prototype[@@iterator]()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/@@iterator)



[内部`@@iterator`迭代器说明]:当数据被for...of时会循环执行得到所有的yield后的值

###### 修改原迭代器

​		修改数组中的迭代器

```js
const arr1 = [1,2,3]
arr1[Symbol.iterator] = function* (){
    yield 5
    yield 6
    yield 7
    yield 8
}
for(const it of arr1){
    console.log(it) // 依次打印 5 6 7 8
}
// 数组内的值不会改变
console.log(arr1) // [1,2,3]
```

​		将arr1数组for...of得到的值翻倍

```js
const arr1 = [1,2,3]
arr1[Symbol.iterator] = function* (){
    //  这里的this指向arr1自己
    for(let i = 0;i < this.length;i++){
        yield this[i] * 2
    }
}
for(const it of arr1){
    console.log(it) // 依次打印 2 4 6
}
console.log(arr1) // [1,2,3]
```

​		将所有数组for...of得到的值都翻倍

```js
Array.prototype[Symbol.iterator] = function* () {
    for (let i = 0; i < this.length; i++) {
        yield this[i] * 2
    }
}
const arr1 = [1, 2, 3]
const arr2 = [2, 3, 4]
for (const it of arr1) {
    console.log(it) // 依次打印 2 4 6
}
for (const it of arr2) {
    console.log(it) // 依次打印 4 6 8
}
```

###### 对象添加迭代器

​		原本在对象中使用for...of是会报错的

```js
const obj = { a:1 }
for(const it of obj){}  // obj is not iterable
```

​		为对象添加迭代器后 即可for...of对象

```js
const obj = {
    *[Symbol.iterator](){
        yield 0
        yield 1
    },
}
for (const iterator of obj) {
    console.log(iterator) // 依次打印 0 1
}
```

​		为对象原型添加Symbol.iterator迭代器实现key,value的for...of

```js
Object.prototype[Symbol.iterator] = function* () {
    for (const key in this) {
        yield [key, this[key]]
    }
}
const obj = { a: 0, b: 1 }
for (const [key, value] of obj) {
    console.log(key, value) //依次输出 a0 b1
}
```

