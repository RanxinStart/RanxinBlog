/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_json_json1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/json/json1 */ \"./src/json/json1.json\");\n/* harmony import */ var _src_module_module1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/module/module1 */ \"./src/module/module1.js\");\n/*\r\n * @Author: Zhilong\r\n * @Date: 2021-08-29 02:07:15\r\n * @LastEditTime: 2021-08-29 02:35:59\r\n * @Description: \r\n * @LastEditors: Zhilong\r\n * @autograph: ⚠ warning!  ⚠ warning!  ⚠ warning!   ⚠野生的页面出现了!!\r\n */\r\n\r\n// 引入css样式\r\n// import \"./src/css/css1.css\"\r\n\r\n// 引入json\r\n\r\n\r\n// 引入module\r\n\r\n\r\n// 打印json和module\r\nconsole.log(_src_json_json1__WEBPACK_IMPORTED_MODULE_0__,(0,_src_module_module1__WEBPACK_IMPORTED_MODULE_1__.module1)())\n\n//# sourceURL=webpack://WebPack/./index.js?");

/***/ }),

/***/ "./src/module/module1.js":
/*!*******************************!*\
  !*** ./src/module/module1.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"module1\": () => (/* binding */ module1)\n/* harmony export */ });\nconst module1 = () => \"module1\"\n\n//# sourceURL=webpack://WebPack/./src/module/module1.js?");

/***/ }),

/***/ "./src/json/json1.json":
/*!*****************************!*\
  !*** ./src/json/json1.json ***!
  \*****************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"name\":\"json1\",\"time\":\"2021-8-29 02:08:58\"}');\n\n//# sourceURL=webpack://WebPack/./src/json/json1.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;