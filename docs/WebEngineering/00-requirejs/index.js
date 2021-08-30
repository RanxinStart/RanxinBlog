/*
 * @Author: Zhilong
 * @Date: 2021-08-25 09:31:36
 * @LastEditTime: 2021-08-27 10:59:54
 * @Description: 入口
 * @LastEditors: Zhilong
 * @autograph: ⚠ warning!  ⚠ warning!  ⚠ warning!   ⚠野生的页面出现了!!
 */
requirejs.config({
    baseUrl: './',
    paths: {
        module1: './useRequire/module1',
        module2: './useRequire/module2',
        jquery: './node_modules/jquery/dist/jquery',
        uniq: './node_modules/uniq/uniq'
    },
    shim: {
        uniq: {
            exports: 'unique'
        }
    }
})

requirejs(['module2'], (module2) => {
    module2.output()
})
