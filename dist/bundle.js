/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n // !Menu\n\nvar menu = document.querySelector(\".menu\");\nvar menuBtn = document.querySelector(\".menu-btn\");\nvar menuNav = document.querySelector(\".menu-nav\");\nvar menuPortrait = document.querySelector(\".menu-portrait\");\nvar navItems = document.querySelectorAll(\".nav-item\");\nvar showMenu = false; // *Hide Menu on start\n\nmenuBtn.addEventListener(\"click\", toggleMenu); // *Activate hamb menu\n// *Hide/Show Menu Function\n\nfunction toggleMenu() {\n  if (!showMenu) {\n    menuBtn.classList.add(\"close\");\n    menu.classList.add(\"show\");\n    menuNav.classList.add(\"show\");\n    menuPortrait.classList.add(\"show\");\n    navItems.forEach(function (item) {\n      return item.classList.add(\"show\");\n    });\n    showMenu = true; // !Show Menu\n  } else {\n    menuBtn.classList.remove(\"close\");\n    menu.classList.remove(\"show\");\n    menuNav.classList.remove(\"show\");\n    menuPortrait.classList.remove(\"show\");\n    navItems.forEach(function (item) {\n      return item.classList.remove(\"show\");\n    });\n    showMenu = false; // !Hide Menu\n  }\n} // !Text Rotation\n\n\nvar TxtRotate = function TxtRotate(el, toRotate, period) {\n  this.toRotate = toRotate;\n  this.el = el;\n  this.loopNum = 0;\n  this.period = parseInt(period, 10) || 2000;\n  this.txt = \"\";\n  this.tick();\n  this.isDeleting = false;\n};\n\nTxtRotate.prototype.tick = function () {\n  var i = this.loopNum % this.toRotate.length;\n  var fullTxt = this.toRotate[i];\n\n  if (this.isDeleting) {\n    this.txt = fullTxt.substring(0, this.txt.length - 1);\n  } else {\n    this.txt = fullTxt.substring(0, this.txt.length + 1);\n  }\n\n  this.el.innerHTML = '<span class=\"wrap\">' + this.txt + \"</span>\";\n  var that = this;\n  var delta = 300 - Math.random() * 100;\n\n  if (this.isDeleting) {\n    delta /= 2;\n  }\n\n  if (!this.isDeleting && this.txt === fullTxt) {\n    delta = this.period;\n    this.isDeleting = true;\n  } else if (this.isDeleting && this.txt === \"\") {\n    this.isDeleting = false;\n    this.loopNum++;\n    delta = 500;\n  }\n\n  setTimeout(function () {\n    that.tick();\n  }, delta);\n};\n\nwindow.onload = function () {\n  var elements = document.getElementsByClassName(\"txt-rotate\");\n\n  for (var i = 0; i < elements.length; i++) {\n    var toRotate = elements[i].getAttribute(\"data-rotate\");\n    var period = elements[i].getAttribute(\"data-period\");\n\n    if (toRotate) {\n      new TxtRotate(elements[i], JSON.parse(toRotate), period);\n    }\n  } // *INJECT CSS\n\n\n  var css = document.createElement(\"style\");\n  css.type = \"text/css\";\n  css.innerHTML = \".txt-rotate > .wrap { border-right: 0.08em solid #666 }\";\n  document.body.appendChild(css);\n}; // ! Portfolio Gallery\n\n//# sourceURL=webpack://reverbod.dev/./src/js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/js/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;