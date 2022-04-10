/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/elements.scss":
/*!*******************************!*\
  !*** ./src/css/elements.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://shelter/./src/css/elements.scss?");

/***/ }),

/***/ "./src/css/main.scss":
/*!***************************!*\
  !*** ./src/css/main.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://shelter/./src/css/main.scss?");

/***/ }),

/***/ "./src/css/normalize.css":
/*!*******************************!*\
  !*** ./src/css/normalize.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://shelter/./src/css/normalize.css?");

/***/ }),

/***/ "./src/css/variables.scss":
/*!********************************!*\
  !*** ./src/css/variables.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://shelter/./src/css/variables.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/normalize.css */ \"./src/css/normalize.css\");\n/* harmony import */ var _css_variables_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/variables.scss */ \"./src/css/variables.scss\");\n/* harmony import */ var _css_elements_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/elements.scss */ \"./src/css/elements.scss\");\n/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/main.scss */ \"./src/css/main.scss\");\n/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/main.js */ \"./src/js/main.js\");\n/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_main_js__WEBPACK_IMPORTED_MODULE_4__);\n\r\n//import \"./css/fonts.css\";\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://shelter/./src/index.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (() => {

eval("/* navigation */\r\n\r\nconst navlinks = document.querySelectorAll(\".navlink\");\r\nconst navlinkAbout = document.querySelector(\".first\");\r\n\r\n//first.style.borderBottom = `3px solid #f1cdb3`;\r\n\r\nfor (let navlink of navlinks) {\r\n  navlink.addEventListener(\"click\", () => setActive(navlink));\r\n  navlink.addEventListener(\"mouseover\", () => setHover(navlink));\r\n  navlink.addEventListener(\"mouseleave\", () => removeHover(navlink));\r\n}\r\n\r\nfunction setActive(element) {\r\n  for (let navlink1 of navlinks) {\r\n    navlink1.style.borderBottom = `3px solid transparent`;\r\n    navlink1.style.color = `#cdcdcd`;\r\n  }\r\n  element.style.borderBottom = `3px solid #f1cdb3`;\r\n  element.style.color = `white`;\r\n}\r\n\r\nfunction setHover(element) {\r\n  for (let navlink1 of navlinks) {\r\n    navlink1.style.borderBottom = `3px solid transparent`;\r\n    navlink1.style.color = `#cdcdcd`;\r\n  }\r\n  //element.style.borderBottom = `3px solid #f1cdb3`;\r\n  element.style.color = `white`;\r\n}\r\n\r\nfunction removeHover(element) {\r\n  element.style.borderBottom = `3px solid transparent`;\r\n  element.style.color = `#cdcdcd`;\r\n}\r\n\r\n/* slider */\r\n\r\nconst RightBtn = document.querySelector(\".right-button\");\r\nconst LeftBtn = document.querySelector(\".left-button\");\r\nconst sidebar = document.querySelector(\".cards\");\r\nconst cardsCount = document.querySelectorAll(\".cards > div\").length;\r\nconst pets = document.querySelectorAll(\".pet\");\r\nconst container = document.querySelector(\".slider\");\r\n\r\nlet result = [];\r\nlet arr = [];\r\nlet flag = 0;\r\n\r\ndisplaySlides();\r\n\r\nLeftBtn.addEventListener(\"click\", () => displaySlides());\r\nRightBtn.addEventListener(\"click\", () => displaySlides());\r\n\r\nfunction displaySlides() {\r\n  arr = [];\r\n  for (let i = 0; i < cardsCount; i++) {\r\n    if (!result.includes(i)) arr.push(i);\r\n  }\r\n\r\n  getRandomNumber(arr);\r\n  pets.forEach((element) => {\r\n    element.style.display = `none`;\r\n    // element.style.transition = `left 2s`;\r\n    // element.style.left = `-2500px`;\r\n  });\r\n\r\n  pets.forEach((element) => {\r\n    element.style.display = `none`;\r\n  });\r\n\r\n  for (let i = 0; i < 3; i++) {\r\n    pets[result[i]].style.display = `block`;\r\n  }\r\n}\r\n\r\nfunction getRandomNumber(arr) {\r\n  for (let i = 0; i < 3; i++) {\r\n    let index = Math.floor(Math.random() * arr.length);\r\n    result[i] = arr.splice(index, 1)[0];\r\n  }\r\n  return result;\r\n}\r\n\n\n//# sourceURL=webpack://shelter/./src/js/main.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;