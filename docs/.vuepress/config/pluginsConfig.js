/*
 * @Author: Zhilong
 * @Date: 2021-07-04 18:16:09
 * @LastEditTime: 2021-08-06 20:44:07
 * @Description: 
 * @LastEditors: Zhilong
 * @autograph: ⚠ warning!  ⚠ warning!  ⚠ warning!   ⚠野生的页面出现了!!
 */
module.exports = [
    'dehydrate',
    ['typing',
        [
            {
                // 对应的标签
                selector: '.home-blog .hero h1',
                // 打字内容
                strings: ["燃芯的^1000剥壳", "燃芯的博客", "Ranxin^1000Blog", "Ranxin's blog"],
                typeSpeed: 80, // 打字速度
                backSpeed: 50, // 回退速度
                showCursor: false,
            }
        ]
    ],
    ['nprogress', {}],
    // ['dynamic-title',
    //     {
    //         showIcon: 'https://img.ffis.me/images/2021/06/28/RanxinInAvatar.th.png',
    //         showText: '(/≧▽≦/)咦！又好了！',
    //         hideIcon: 'https://img.ffis.me/images/2021/06/28/RanxinInAvatar.th.png',
    //         hideText: '(●—●)喔哟，崩溃啦！',
    //         recoverTime: 2000,
    //     }
    // ],
    [
        'permalink-pinyin',
        {
            lowercase: true, // Converted into lowercase, default: true
            separator: '-' // Separator of the slug, default: '-'
        }
    ],
    [
        'helper-live2d', {
            // 是否开启控制台日志打印(default: false)
            log: false,
            live2d: {
                // 是否启用(关闭请设置为false)(default: true)
                enable: false,
                // 模型名称(default: hibiki)>>>取值请参考：
                // https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki/live2d%E6%A8%A1%E5%9E%8B%E5%8C%85%E5%B1%95%E7%A4%BA
                model: 'haru/01',
                display: {
                    position: "right", // 显示位置：left/right(default: 'right')
                    width: 270, // 模型的长度(default: 135)
                    height: 600, // 模型的高度(default: 300)
                    hOffset: 65, //  水平偏移(default: 65)
                    vOffset: 0, //  垂直偏移(default: 0)
                },
                mobile: {
                    show: false // 是否在移动设备上显示(default: false)
                },
                react: {
                    opacity: 0.5 // 模型透明度(default: 0.8)
                }
            }
        }
    ]
]