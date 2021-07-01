/*
 * @Author: Zhilong
 * @Date: 2021-06-30 00:03:28
 * @LastEditTime: 2021-07-01 15:35:53
 * @Description: 
 * @LastEditors: Zhilong
 * @autograph: ⚠ warning!  ⚠ warning!  ⚠ warning!   ⚠野生的页面出现了!!
 */

const path = require('path');
module.exports = (pluginOptions, context) => ({
    async ready() {
        console.log('ready')
        // 钩子在应用初始化之后，并在某些特定的函数式 API 执行之前执行。这些函数式 API 包括
        // clientDynamicModules
        // enhanceAppFiles
    },
    updated() {
        console.log('updated')
        // 更新前？
    },
    async generated(pagePaths) {
        console.log('generated')
        // 在生产环境的构建结束后被调用，生成的页面的路径数组将作为该函数的第一个参数。
    },
    name: 'vuepress-plugin-typing',
    // enhanceAppFiles: path.resolve(__dirname, 'lib/enhanceApp.js'),
    enhanceAppFiles(){
        return {
            name: 'dynamic-code',
            content: `
            import typedStart from './typed'
            window.addEventListener('load',typedStart(${pluginOptions}))
            `
          }
    }
})