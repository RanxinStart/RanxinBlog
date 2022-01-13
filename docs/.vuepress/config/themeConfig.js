/*
 * @Author: Zhilong
 * @Date: 2021-07-04 18:08:11
 * @LastEditTime: 2021-07-04 18:11:39
 * @Description: 
 * @LastEditors: Zhilong
 * @autograph: ⚠ warning!  ⚠ warning!  ⚠ warning!   ⚠野生的页面出现了!!
 */
module.exports = {
    type: 'blog',
    subSidebar: 'auto',
    locales: {
        '/': {
            recoLocales: {
                homeBlog: {
                    article: '美文', // 默认 文章
                    tag: '标识', // 默认 标签
                    category: '类别', // 默认 分类
                    friendLink: '友链' // 默认 友情链接
                },
                pagation: {
                    prev: '上一页',
                    next: '下一页',
                    go: '前往',
                    jump: '跳转至'
                }
            }
        }
    },
    authorAvatar: 'https://img.ffis.me/images/2021/06/28/RanxinInAvatar.th.png', // 头像
    noFoundPageByTencent: false, // 404腾讯公益
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    // 博客配置
    blogConfig: {
        category: {
            location: 2,     // 在导航栏菜单中所占的位置，默认2
            text: 'Category' // 默认文案 “分类”
        },
        tag: {
            location: 3,     // 在导航栏菜单中所占的位置，默认3
            text: 'Tag'      // 默认文案 “标签”
        },
        socialLinks: [     // 信息栏展示社交信息
            { icon: 'reco-github', link: 'https://github.com/RanxinStart' },
            { icon: 'reco-npm', link: 'https://www.npmjs.com/~ranxin' }
        ],
        friendLink: [
            {
                title: 'Mr.Mao',
                desc: '',
                email: '',
                link: ''
            },
        ]
    },
    // author
    author: 'RanxinStart',
    // 备案
    record: '粤ICP备2021149156号-1',
    recordLink: 'https://beian.miit.gov.cn/',
    //  cyberSecurityRecord: '公安部备案文案',
    //  cyberSecurityLink: '公安部备案指向链接',
    // 项目开始时间，只填写年份
    startYear: '2020'
}