/*
 * @Author: Zhilong
 * @Date: 2021-08-25 09:36:57
 * @LastEditTime: 2021-08-25 09:44:37
 * @Description: 
 * @LastEditors: Zhilong
 * @autograph: ⚠ warning!  ⚠ warning!  ⚠ warning!   ⚠野生的页面出现了!!
 */
/*  依赖模块module1 的模块2 */
((module1)=>{
    const output = () =>{
        console.log('我调用了模块1的方法:' + module1.getName())
    }
    return window.module2 = { output }
})(module1)