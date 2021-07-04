/*
 * @Author: Zhilong
 * @Date: 2021-07-04 18:16:09
 * @LastEditTime: 2021-07-04 18:19:19
 * @Description: 
 * @LastEditors: Zhilong
 * @autograph: ⚠ warning!  ⚠ warning!  ⚠ warning!   ⚠野生的页面出现了!!
 */
module.exports = [
    [require('../plugin/vuepress-plugin-typing'), [{
        // 对应的标签
        selector: '.home-blog .hero h1',
        // 打字内容
        strings: ["燃芯的^1000剥壳", "燃芯的博客", "Ranxin^1000Blog", "Ranxin's blog"],
        typeSpeed: 80, // 打字速度
        backSpeed: 50, // 回退速度
        showCursor: false,
    }, {
        // 对应的标签
        selector: '.home-blog .hero .description',
        // 打字内容
        strings: ["blogforvue", "输入一些消息吧", "就离谱", "博客说明"],
        typeSpeed: 80, // 打字速度
        backSpeed: 50 // 回退速度
    }]],
]