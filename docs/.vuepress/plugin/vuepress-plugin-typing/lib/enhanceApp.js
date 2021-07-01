/*
 * @Author: Zhilong
 * @Date: 2021-06-30 00:06:23
 * @LastEditTime: 2021-07-01 18:43:00
 * @Description: 
 * @LastEditors: Zhilong
 * @autograph: ⚠ warning!  ⚠ warning!  ⚠ warning!   ⚠野生的页面出现了!!
 */

import typedStart from './typed'
export default ({Vue, options, router, siteData, isServer}) => {
    // console.log({Vue, options, router, siteData, isServer})
    console.log('eapp')
    window.addEventListener('load',typedStart(siteData))
}