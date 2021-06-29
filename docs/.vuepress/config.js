/*
 * @Author: Zhilong
 * @Date: 2021-06-22 00:47:30
 * @LastEditTime: 2021-06-29 14:10:05
 * @Description: 
 * @LastEditors: Zhilong
 * @autograph: ⚠ warning!  ⚠ warning!  ⚠ warning!   ⚠野生的页面出现了!!
 */
module.exports = {
  plugins:{
    '@vuepress/last-updated': true
  },
  // 使用主题
  theme: 'reco',
  // 文档标题
  title: "Ranxin's blog",
  // 文档说明
  description: 'blog for vue',
  // 静态资源基本路径
  base: '/zh/',
  // 设置网站图标
  head: [
    ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `https://img.ffis.me/images/2021/06/28/RanxinInAvatar.th.png` }],
  ],
  ranxinConfig:{
    // 打字识别
    typed:
      {
        // 对应的标签
        selector:'.home-blog .hero h1',
        // 打字内容
        strings:["燃芯的剥壳","燃芯的博客","RanxinBlog","Ranxin's blog"],
        typeSpeed: 80, // 打字速度
        backSpeed: 50 // 回退速度
      },
  },
  themeConfig: {
    type: 'blog',
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
      ]
    },
    // 导航栏配置
    // nav: [
    //   { text: '首页', link: '/' },
    //   {
    //     text: '开发', icon: 'reco-document',
    //     items: [
    //       { text: '前端', link: '/web/01-vue3' },
    //       { text: '后端', link: 'url' },
    //       { text: '工具', link: 'path' }
    //     ]
    //   },
    // ],
  },
}