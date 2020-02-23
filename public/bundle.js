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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/components/FilmsGrid.js":
/*!****************************************!*\
  !*** ./src/js/components/FilmsGrid.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return FilmsGrid; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar FilmsGrid =\n/*#__PURE__*/\nfunction () {\n  function FilmsGrid(divToAttachTo, pubsub) {\n    _classCallCheck(this, FilmsGrid);\n\n    this.divToAttachTo2 = divToAttachTo;\n    this.pubsub2 = pubsub;\n  }\n\n  _createClass(FilmsGrid, [{\n    key: \"Render\",\n    value: function Render() {\n      var filmsGrid = document.getElementById(this.divToAttachTo2);\n      filmsGrid.className = 'filmsGrid'; //const childBox = document.createElement('div')\n      //childBox.className = 'filmsGridItem'\n      //filmsGrid.appendChild(childBox)\n\n      var child1 = document.createElement('div');\n      child1.className = \"filmsGridItem\";\n      child1.textContent = 'one';\n      var child2 = document.createElement('div');\n      child2.className = \"filmsGridItem\";\n      child2.textContent = 'two';\n      var child3 = document.createElement('div');\n      child3.className = \"filmsGridItem\";\n      child3.textContent = 'three';\n      var child4 = document.createElement('div');\n      child4.className = \"filmsGridItem\";\n      child4.textContent = 'four';\n      var child5 = document.createElement('div');\n      child5.className = \"filmsGridItem\";\n      child5.textContent = 'five';\n      var child6 = document.createElement('div');\n      child6.className = \"filmsGridItem\";\n      child6.textContent = 'six';\n      var child7 = document.createElement('div');\n      child7.className = \"filmsGridItem\";\n      child7.textContent = 'seven';\n      var child8 = document.createElement('div');\n      child8.className = \"filmsGridItem\";\n      child8.textContent = 'eight';\n      var child9 = document.createElement('div');\n      child9.className = \"filmsGridItem\";\n      child9.textContent = 'nine';\n      filmsGrid.appendChild(child1);\n      filmsGrid.appendChild(child2);\n      filmsGrid.appendChild(child3);\n      filmsGrid.appendChild(child4);\n      filmsGrid.appendChild(child5);\n      filmsGrid.appendChild(child6);\n      filmsGrid.appendChild(child7);\n      filmsGrid.appendChild(child8); //filmsGrid.appendChild(child9)\n      // inputSearchFilms.className = 'searchfilmsinput'\n      // inputSearchFilms.type = 'text'\n      // const btn = document.createElement(\"BUTTON\")\n      // btn.className = 'button'\n      // btn.innerText = 'Search films'\n      // btn.addEventListener(\"click\", function(){\n      //     //this.pubsub2.publish('search_films_button',btn,null)\n      //     alert('button pressed')\n      //   }); \n      // headerContainer.appendChild(inputSearchFilms)\n      // headerContainer.appendChild(btn)\n    }\n  }]);\n\n  return FilmsGrid;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/components/FilmsGrid.js?");

/***/ }),

/***/ "./src/js/components/HeaderView.js":
/*!*****************************************!*\
  !*** ./src/js/components/HeaderView.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HeaderView; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar HeaderView =\n/*#__PURE__*/\nfunction () {\n  function HeaderView(divToAttachTo, pubsub) {\n    _classCallCheck(this, HeaderView);\n\n    this.divToAttachTo2 = divToAttachTo;\n    this.pubsub2 = pubsub;\n  }\n\n  _createClass(HeaderView, [{\n    key: \"Render\",\n    value: function Render() {\n      var headerContainer = document.getElementById(this.divToAttachTo2);\n      headerContainer.className = 'headerContainer';\n      var inputSearchFilms = document.createElement('input');\n      inputSearchFilms.className = 'searchfilmsinput';\n      inputSearchFilms.type = 'text';\n      var btn = document.createElement(\"BUTTON\");\n      btn.className = 'button';\n      btn.innerText = 'Search films';\n      btn.addEventListener(\"click\", function () {\n        //this.pubsub2.publish('search_films_button',btn,null)\n        alert('button pressed');\n      });\n      headerContainer.appendChild(inputSearchFilms);\n      headerContainer.appendChild(btn);\n    }\n  }]);\n\n  return HeaderView;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/components/HeaderView.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_HeaderView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/HeaderView */ \"./src/js/components/HeaderView.js\");\n/* harmony import */ var _pubsub_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pubsub.js */ \"./src/js/pubsub.js\");\n/* harmony import */ var _components_FilmsGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/FilmsGrid */ \"./src/js/components/FilmsGrid.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n// import leftPad from './leftpad';\n// const serNos = [6934, 23111, 23114, 1001, 211161];\n// const partEl = document.getElementById('part-list');\n// const strList = serNos.reduce(\n//   (acc, element) => acc += `<li>${leftPad(element, 8, '0')}</li>`, ''\n// );\n// console.log(strList)\n// partEl.innerHTML = strList;\n\n\n // class Header {\n//   constructor(element) {\n//     this.element = element\n//   }\n//   render() {\n//     var para = document.createElement(\"P\");                       // Create a <p> node\n//     var t = document.createTextNode(\"This is a paragraph.\");      // Create a text node\n//     para.appendChild(t);                                          // Append the text to <p>\n//     document.getElementById(this.element).appendChild(para);\n//   }\n// }\n//const dupa = new Header(\"middle\")\n//dupa.render()\n\nvar ps = new _pubsub_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nvar headerView = new _components_HeaderView__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('header', ps);\nheaderView.Render();\nvar filmsgrid = new _components_FilmsGrid__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('filmsGrid', ps);\nfilmsgrid.Render();\n\nvar Store = function Store() {\n  _classCallCheck(this, Store);\n\n  this.state = {};\n  this.actions = {};\n  this.mutations = {};\n};\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/pubsub.js":
/*!**************************!*\
  !*** ./src/js/pubsub.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PublisherSubscriber; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar PublisherSubscriber =\n/*#__PURE__*/\nfunction () {\n  function PublisherSubscriber() {\n    _classCallCheck(this, PublisherSubscriber);\n\n    this.events = {};\n  }\n\n  _createClass(PublisherSubscriber, [{\n    key: \"subscribe\",\n    value: function subscribe(eventName, callback) {\n      //If it is a new subscription create an empty array for the given event's type\n      if (this.events.hasOwnProperty(eventName)) {\n        this.events[eventName] = [];\n      }\n\n      this.events[eventName].push(callback);\n    }\n  }, {\n    key: \"unsubscribe\",\n    value: function unsubscribe(eventName, callback) {\n      var index = 0,\n          length = 0;\n\n      if (this.events.hasOwnProperty(eventName)) {\n        for (var i = 0; i < this.events[eventName].length; i++) {\n          if (this.events[eventName][i] === callback) {\n            this.events[eventName].splice(i, 1);\n            break;\n          }\n        }\n      }\n    }\n  }, {\n    key: \"publish\",\n    value: function publish(eventName) {\n      var data = Array.slice.call(arguments, 1);\n\n      if (this.events.hasOwnProperty(eventName)) {\n        for (var i = 0; i < this.events[eventName].length; i++) {\n          this.events[eventName][i].apply(this, data);\n        }\n      }\n    }\n  }]);\n\n  return PublisherSubscriber;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/pubsub.js?");

/***/ })

/******/ });