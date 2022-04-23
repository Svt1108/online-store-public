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

/***/ "./src/css/fonts.css":
/*!***************************!*\
  !*** ./src/css/fonts.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://shelter/./src/css/fonts.css?");

/***/ }),

/***/ "./src/css/normalize.css":
/*!*******************************!*\
  !*** ./src/css/normalize.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://shelter/./src/css/normalize.css?");

/***/ }),

/***/ "./src/css/pets.scss":
/*!***************************!*\
  !*** ./src/css/pets.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://shelter/./src/css/pets.scss?");

/***/ }),

/***/ "./src/css/variables.scss":
/*!********************************!*\
  !*** ./src/css/variables.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://shelter/./src/css/variables.scss?");

/***/ }),

/***/ "./src/index_pet.js":
/*!**************************!*\
  !*** ./src/index_pet.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/normalize.css */ \"./src/css/normalize.css\");\n/* harmony import */ var _css_fonts_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/fonts.css */ \"./src/css/fonts.css\");\n/* harmony import */ var _css_variables_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/variables.scss */ \"./src/css/variables.scss\");\n/* harmony import */ var _css_elements_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/elements.scss */ \"./src/css/elements.scss\");\n/* harmony import */ var _css_pets_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/pets.scss */ \"./src/css/pets.scss\");\n/* harmony import */ var _js_pet_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/pet.js */ \"./src/js/pet.js\");\n/* harmony import */ var _js_pet_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_js_pet_js__WEBPACK_IMPORTED_MODULE_5__);\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://shelter/./src/index_pet.js?");

/***/ }),

/***/ "./src/js/pet.js":
/*!***********************!*\
  !*** ./src/js/pet.js ***!
  \***********************/
/***/ (() => {

eval("/* navigation */\r\n\r\nconst navlinks = document.querySelectorAll(\".button_circle_nav\");\r\nconst firstBtn = document.querySelector(\".first_btn\");\r\n\r\nfirstBtn.style.backgroundColor = `#f1cdb3`;\r\nfirstBtn.style.border = `2px solid #f1cdb3`;\r\nfirstBtn.style.cursor = `default`;\r\n\r\nfor (let navlink of navlinks) {\r\n  //   console.log(navlink.getAttribute(\"data-disabled\"));\r\n  if (navlink.getAttribute(\"data-disabled\") == \"false\") {\r\n    navlink.addEventListener(\"mouseover\", () => setHover(navlink));\r\n    navlink.addEventListener(\"mouseleave\", () => removeHover(navlink));\r\n  } else if (navlink.getAttribute(\"data-disabled\") == \"true\") {\r\n    navlink.style.border = `2px solid #cdcdcd`;\r\n    navlink.style.backgroundColor = `transparent`;\r\n    navlink.style.cursor = `default`;\r\n    navlink.style.color = `#cdcdcd`;\r\n  }\r\n}\r\n\r\nfunction setHover(element) {\r\n  for (let navlink1 of navlinks) {\r\n    if (navlink1.getAttribute(\"data-disabled\") == \"false\") {\r\n      navlink1.style.backgroundColor = `transparent`;\r\n      navlink1.style.border = `2px solid #f1cdb3`;\r\n    }\r\n  }\r\n\r\n  element.style.border = `2px solid #fddcc4`;\r\n  element.style.backgroundColor = `#fddcc4`;\r\n}\r\n\r\nfunction removeHover(element) {\r\n  element.style.backgroundColor = `transparent`;\r\n  element.style.border = `2px solid #f1cdb3`;\r\n}\r\n\r\n/* pagination */\r\n\r\nconst petsJS = [\r\n  \"Freddie\",\r\n  \"Jennifer\",\r\n  \"Katrine\",\r\n  \"Scarlet\",\r\n  \"Charly\",\r\n  \"Sophia\",\r\n  \"Timmy\",\r\n  \"Woody\",\r\n];\r\n\r\nconst sidebar = document.querySelector(\".cards\");\r\nconst cardsCount = petsJS.length; //общее количество питомцев\r\nconst quantity = 6; //сколько раз встречается питомец\r\n\r\nlet numero; //число карточек на странице\r\nlet pages; //количество страниц\r\n\r\nlet result = [];\r\nlet resultFin = [];\r\nlet arr = [];\r\nlet pageNumber = 1;\r\n\r\nconst mediaQueryLarge = window.matchMedia(\"screen and (min-width: 1280px)\");\r\n\r\nconst mediaQuery = window.matchMedia(\r\n  \"screen and (min-width: 768px) and (max-width: 1279px)\"\r\n);\r\n\r\nconst mediaQuerySmall = window.matchMedia(\"screen and (max-width: 767px)\");\r\n\r\nfunction handleTabletChange(e) {\r\n  if (e.matches) {\r\n    numero = 6;\r\n    pages = 8;\r\n    arr = [];\r\n    resultFin = [];\r\n    let pets = document.querySelectorAll(\".pet\");\r\n    pets.forEach((element) => {\r\n      element.remove();\r\n    });\r\n    pagination();\r\n    display();\r\n  } /* else slider(3); */\r\n}\r\n\r\nfunction handleTabletChangeSmall(e) {\r\n  if (e.matches) {\r\n    numero = 3;\r\n    pages = 16;\r\n    arr = [];\r\n    resultFin = [];\r\n    let pets = document.querySelectorAll(\".pet\");\r\n    pets.forEach((element) => {\r\n      element.remove();\r\n    });\r\n    pagination();\r\n    display();\r\n  }\r\n}\r\n\r\nfunction handleTabletChangeLarge(e) {\r\n  if (e.matches) {\r\n    numero = 8;\r\n    pages = 6;\r\n    arr = [];\r\n    resultFin = [];\r\n    let pets = document.querySelectorAll(\".pet\");\r\n    pets.forEach((element) => {\r\n      element.remove();\r\n    });\r\n    pagination();\r\n    display();\r\n  }\r\n}\r\nmediaQuery.addListener(handleTabletChange);\r\nmediaQuerySmall.addListener(handleTabletChangeSmall);\r\nmediaQueryLarge.addListener(handleTabletChangeLarge);\r\n\r\nhandleTabletChange(mediaQuery);\r\nhandleTabletChangeSmall(mediaQuerySmall);\r\nhandleTabletChangeLarge(mediaQueryLarge);\r\n\r\n//pagination();\r\n\r\nfunction display() {\r\n  for (let i = 0; i < numero; i++) {\r\n    sidebar.insertAdjacentHTML(\r\n      `beforeend`,\r\n      `<div class=\"pet\"><div class=\"img_pet\">\r\n    <img src=\"../../assets/images/pets-${\r\n      petsJS[resultFin[pageNumber - 1][i]]\r\n    }.png\" /></div>\r\n    <div class=\"name\">${petsJS[resultFin[pageNumber - 1][i]]}</div>\r\n    <div class=\"buttonw buttonw1\">Learn more</div></div>`\r\n    );\r\n  }\r\n}\r\n\r\nfunction pagination() {\r\n  for (let j = 0; j < quantity; j++) {\r\n    for (let i = 0; i < cardsCount; i++) {\r\n      arr.push(i);\r\n    }\r\n  }\r\n\r\n  console.log(\"arr = \" + arr);\r\n  getRandomNumber(arr);\r\n  console.log(resultFin);\r\n}\r\n\r\nfunction getRandomNumber(arr) {\r\n  let one = 7777;\r\n  check = [];\r\n  let indexOne = \"\";\r\n\r\n  for (let j = 0; j < pages - 1; j++) {\r\n    result = [];\r\n    for (let i = 0; i < numero; i++) {\r\n      if (numero > 3) {\r\n        while (result.includes(one) || one == 7777) {\r\n          indexOne = Math.floor(Math.random() * arr.length);\r\n          one = arr[indexOne];\r\n        }\r\n      } else {\r\n        while (result.includes(one) || check.includes(one) || one == 7777) {\r\n          indexOne = Math.floor(Math.random() * arr.length);\r\n          one = arr[indexOne];\r\n        }\r\n      }\r\n\r\n      // do {\r\n      //   indexOne = Math.floor(Math.random() * arr.length);\r\n      //   one = arr[indexOne];\r\n      // } while (result.includes(one) || check.includes(one));\r\n\r\n      result.push(one);\r\n      arr.splice(indexOne, 1)[0];\r\n    }\r\n    check = result;\r\n    resultFin.push(result);\r\n  }\r\n  resultFin.push(arr);\r\n  return resultFin;\r\n}\r\n\n\n//# sourceURL=webpack://shelter/./src/js/pet.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index_pet.js");
/******/ 	
/******/ })()
;