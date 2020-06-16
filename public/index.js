/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: year, month, date, today, time, fullYear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"year\", function() { return year; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"month\", function() { return month; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"date\", function() { return date; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"today\", function() { return today; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"time\", function() { return time; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fullYear\", function() { return fullYear; });\nvar LOCATION = \"Asia/Tokyo\";\r\nvar DATE = new Date();\r\nvar year = function () {\r\n    return DATE.getFullYear();\r\n};\r\nvar month = function () {\r\n    return DATE.getMonth() + 1;\r\n};\r\nvar date = function () {\r\n    return DATE.getDate();\r\n};\r\nvar today = function (separator) {\r\n    if (separator === void 0) { separator = \"\"; }\r\n    if (separator) {\r\n        return year() + separator + month() + separator + date();\r\n    }\r\n    return year() + \"年\" + month() + \"月\" + date() + \"日\";\r\n};\r\nvar time = function (separator, flag) {\r\n    if (separator === void 0) { separator = \"\"; }\r\n    if (flag === void 0) { flag = false; }\r\n    var hh = DATE.getHours();\r\n    var mm = DATE.getMinutes();\r\n    var ss = DATE.getSeconds();\r\n    if (flag) {\r\n        if (hh < 10) {\r\n            hh = \"0\" + hh;\r\n        }\r\n        if (mm < 10) {\r\n            mm = \"0\" + mm;\r\n        }\r\n        if (ss < 10) {\r\n            ss = \"0\" + ss;\r\n        }\r\n    }\r\n    if (separator) {\r\n        return hh + separator + mm + separator + ss;\r\n    }\r\n    return hh + \"時\" + mm + \"分\" + ss + \"秒\";\r\n};\r\nvar fullYear = function () {\r\n    return DATE.toLocaleString();\r\n};\r\nconsole.log(today()); // YYYY年MM月DD日\r\nconsole.log(today(\"/\")); // YYYY/MM/DD\r\nconsole.log(time()); // H時M分S秒\r\nconsole.log(time(\":\")); // H:M:S\r\nconsole.log(time(\"\", true)); // HH時:MM分:SS秒\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ })

/******/ });