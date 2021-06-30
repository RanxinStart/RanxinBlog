/*
 * @Author: Zhilong
 * @Date: 2021-06-30 00:06:23
 * @LastEditTime: 2021-06-30 22:53:35
 * @Description: 
 * @LastEditors: Zhilong
 * @autograph: ⚠ warning!  ⚠ warning!  ⚠ warning!   ⚠野生的页面出现了!!
 */

console.log('输出了???',`'输出了woc' => ${'输出了'}`)
import typedStart from './typed'
export default ({Vue, options, router, siteData, isServer}) => {
    window.addEventListener('load',typedStart(options))
}
