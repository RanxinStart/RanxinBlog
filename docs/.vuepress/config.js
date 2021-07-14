/*
 * @Author: Zhilong
 * @Date: 2021-06-22 00:47:30
 * @LastEditTime: 2021-07-08 15:57:58
 * @Description: 
 * @LastEditors: Zhilong
 * @autograph: ⚠ warning!  ⚠ warning!  ⚠ warning!   ⚠野生的页面出现了!!
 */

const baseConfig = require('./config/baseConfig')
const pluginsConfig = require('./config/pluginsConfig')
const themeConfig = require('./config/themeConfig')

module.exports = {
  // 使用主题
  theme: 'reco',
  ...baseConfig,
  plugins:pluginsConfig,
  themeConfig:themeConfig
}