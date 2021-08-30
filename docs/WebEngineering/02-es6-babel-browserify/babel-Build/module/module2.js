"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.output = void 0;

var _module = require("./module1");

/*
 * @Author: Zhilong
 * @Date: 2021-08-28 15:10:31
 * @LastEditTime: 2021-08-28 15:12:00
 * @Description: 
 * @LastEditors: Zhilong
 * @autograph: ⚠ warning!  ⚠ warning!  ⚠ warning!   ⚠野生的页面出现了!!
 */
var output = function output() {
  console.log("module2调用了：" + (0, _module.getName)());
};

exports.output = output;