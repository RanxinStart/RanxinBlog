/*
 * @Author: Zhilong
 * @Date: 2021-06-29 01:21:19
 * @LastEditTime: 2021-06-29 02:00:41
 * @Description: 
 * @LastEditors: Zhilong
 * @autograph: ⚠ warning!  ⚠ warning!  ⚠ warning!   ⚠野生的页面出现了!!
 */
import Typed from 'typed.js'
import Config from '../config'

// 使用typed进行处理
const typedHandle = (config) => {
    const id = 'typed-' + Math.random().toString(36).replace(/0./,'')
    const tag = document.querySelector(config.cssSelect)
    if (!tag) return console.error('指定的CssSelect错误', 'tag=>:' + tag)
    const tagValue = tag.innerText || tag.innerHTML
    // 子标签span化
    tag.innerHTML = `<span class='${id}'>${tagValue}</span>`
    new Typed('.' + id, {
        strings: [''].concat(config.strings), //输入内容, 支持html标签
        typeSpeed: config.typeSpeed || 100, //打字速度
        backSpeed: config.backSpeed || 50 //回退速度
    });
}


// 按需引入
export const typedStart = () => {
    const { typed } = Config.ranxinConfig
    if (Array.isArray(typed)) {
        typed.forEach((item) => typedHandle(item))
    } else {
        typedHandle(typed)
    }
}

// 默认暴露
export default typedStart