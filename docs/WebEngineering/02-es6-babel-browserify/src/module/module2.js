/*
 * @Author: Zhilong
 * @Date: 2021-08-28 15:10:31
 * @LastEditTime: 2021-08-28 15:12:00
 * @Description: 
 * @LastEditors: Zhilong
 * @autograph: ⚠ warning!  ⚠ warning!  ⚠ warning!   ⚠野生的页面出现了!!
 */
import { getName } from './module1'
export const output = () =>{
    console.log("module2调用了：" + getName())
}