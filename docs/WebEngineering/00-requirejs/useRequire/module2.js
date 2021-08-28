/*
 * @Author: Zhilong
 * @Date: 2021-08-25 09:36:57
 * @LastEditTime: 2021-08-27 10:50:39
 * @Description: 
 * @LastEditors: Zhilong
 * @autograph: ⚠ warning!  ⚠ warning!  ⚠ warning!   ⚠野生的页面出现了!!
 */
/*  依赖模块module1 的模块2 */
define(['module1', 'jquery', 'uniq'], (module1, $, uniq) => {
    const output = () => {
        // 使用module1
        console.log('module2调用' + module1.getName)
        // 使用jquery
        $(document.body).css('background', '#6cf')
        // uniq
        console.log(uniq([1, 3, 6, 3, 5, 6, 4, 3]))
    }
    return { output }
})
