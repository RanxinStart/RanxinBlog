/*
 * @Author: Zhilong
 * @Date: 2021-08-18 09:15:23
 * @LastEditTime: 2021-08-24 14:38:16
 * @Description: 
 * @LastEditors: Zhilong
 * @autograph: ⚠ warning!  ⚠ warning!  ⚠ warning!   ⚠野生的页面出现了!!
 */

const module1 = require('./src/module1')  // 使用其他模块
const module2 = require('./src/module2')  // 使用其他模块
const uniq = require('uniq')  // 使用外部模块

module1.foo()  // 调用其他模块的方法
module2.bar()  // exports的方法
console.log('uniq',uniq([1,1,2,2,3,4,1]))  //使用外部模块的方法