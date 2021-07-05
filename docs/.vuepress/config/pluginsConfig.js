/*
 * @Author: Zhilong
 * @Date: 2021-07-04 18:16:09
 * @LastEditTime: 2021-07-05 23:58:11
 * @Description: 
 * @LastEditors: Zhilong
 * @autograph: ⚠ warning!  ⚠ warning!  ⚠ warning!   ⚠野生的页面出现了!!
 */
module.exports = [
    [require('../plugin/vuepress-plugin-typing'),
    [
        {
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
        }
    ]
    ],
    'vuepress-plugin-nprogress',
    ['dynamic-title',
        {
            showIcon: 'https://img.ffis.me/images/2021/06/28/RanxinInAvatar.th.png',
            showText: '(/≧▽≦/)咦！又好了！',
            hideIcon: 'https://img.ffis.me/images/2021/06/28/RanxinInAvatar.th.png',
            hideText: '(●—●)喔哟，崩溃啦！',
            recoverTime: 2000,
        }
    ],
    [
        'permalink-pinyin',
        {
            lowercase: true, // Converted into lowercase, default: true
            separator: '\t' // Separator of the slug, default: '-'
        }
    ],
]