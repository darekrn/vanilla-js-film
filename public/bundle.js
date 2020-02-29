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

/***/ "./src/js/PublisherSubscriber.js":
/*!***************************************!*\
  !*** ./src/js/PublisherSubscriber.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar PublisherSubscriber =\n/*#__PURE__*/\nfunction () {\n  function PublisherSubscriber() {\n    _classCallCheck(this, PublisherSubscriber);\n\n    if (!PublisherSubscriber.instance) {\n      this.events = {};\n      PublisherSubscriber.instance = this;\n    }\n\n    return PublisherSubscriber.instance;\n  }\n\n  _createClass(PublisherSubscriber, [{\n    key: \"subscribe\",\n    value: function subscribe(eventName, callback) {\n      //If it is a new subscription create an empty array for the given event's type\n      if (!this.events.hasOwnProperty(eventName)) {\n        this.events[eventName] = [];\n      }\n\n      this.events[eventName].push(callback);\n    }\n  }, {\n    key: \"unsubscribe\",\n    value: function unsubscribe(eventName, callback) {\n      var index = 0,\n          length = 0;\n\n      if (this.events.hasOwnProperty(eventName)) {\n        for (var i = 0; i < this.events[eventName].length; i++) {\n          if (this.events[eventName][i] === callback) {\n            this.events[eventName].splice(i, 1);\n            break;\n          }\n        }\n      }\n    }\n  }, {\n    key: \"publish\",\n    value: function publish(eventName) {\n      var data = Array.from(arguments).splice.call(arguments, 1);\n\n      if (this.events.hasOwnProperty(eventName)) {\n        for (var i = 0; i < this.events[eventName].length; i++) {\n          this.events[eventName][i].apply(this, data);\n        }\n      }\n    }\n  }]);\n\n  return PublisherSubscriber;\n}();\n\nvar PublisherSubscriberInstance = new PublisherSubscriber();\nObject.freeze(PublisherSubscriberInstance);\n/* harmony default export */ __webpack_exports__[\"default\"] = (PublisherSubscriberInstance);\n\n//# sourceURL=webpack:///./src/js/PublisherSubscriber.js?");

/***/ }),

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HeaderView; });\n/* harmony import */ var _PublisherSubscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../PublisherSubscriber */ \"./src/js/PublisherSubscriber.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar HeaderView =\n/*#__PURE__*/\nfunction () {\n  function HeaderView(divToAttachTo, pubsub) {\n    _classCallCheck(this, HeaderView);\n\n    this.divToAttachTo2 = divToAttachTo;\n    this.pubsub2 = pubsub;\n  }\n\n  _createClass(HeaderView, [{\n    key: \"Render\",\n    value: function Render(data) {\n      var headerContainer = document.getElementById(this.divToAttachTo2);\n      headerContainer.className = 'headerContainer';\n      var inputSearchFilms = document.createElement('input');\n      inputSearchFilms.className = 'searchfilmsinput';\n      inputSearchFilms.type = 'text';\n      var btn = document.createElement(\"BUTTON\");\n      btn.className = 'button';\n      btn.innerText = 'Search films';\n      btn.addEventListener(\"click\", function () {\n        _PublisherSubscriber__WEBPACK_IMPORTED_MODULE_0__[\"default\"].publish('search-films-button-clicked', 'Terminator');\n      });\n      headerContainer.appendChild(inputSearchFilms);\n      headerContainer.appendChild(btn);\n    }\n  }]);\n\n  return HeaderView;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/components/HeaderView.js?");

/***/ }),

/***/ "./src/js/controllers/MainController.js":
/*!**********************************************!*\
  !*** ./src/js/controllers/MainController.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: C:\\\\github\\\\vanilla-js-film\\\\src\\\\js\\\\controllers\\\\MainController.js: Support for the experimental syntax 'classProperties' isn't currently enabled (18:30):\\n\\n\\u001b[0m \\u001b[90m 16 | \\u001b[39m        \\u001b[36mthis\\u001b[39m\\u001b[33m.\\u001b[39m\\u001b[33mFilmsGrid\\u001b[39m\\u001b[33m.\\u001b[39m\\u001b[33mRender\\u001b[39m()\\u001b[0m\\n\\u001b[0m \\u001b[90m 17 | \\u001b[39m    }\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 18 | \\u001b[39m    \\u001b[33mSearchFilmsButtonClicked\\u001b[39m \\u001b[33m=\\u001b[39m (filmTitle) \\u001b[33m=>\\u001b[39m {\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m                             \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 19 | \\u001b[39m        \\u001b[90m//console.log('search-films-button-clicked clicked: ' + filmTitle)\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 20 | \\u001b[39m        console\\u001b[33m.\\u001b[39mlog(\\u001b[36mthis\\u001b[39m)\\u001b[0m\\n\\u001b[0m \\u001b[90m 21 | \\u001b[39m        \\u001b[90m//this.FilmsGrid.Render()\\u001b[39m\\u001b[0m\\n\\nAdd @babel/plugin-proposal-class-properties (https://git.io/vb4SL) to the 'plugins' section of your Babel config to enable transformation.\\n    at Parser.raise (C:\\\\github\\\\vanilla-js-film\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7013:17)\\n    at Parser.expectPlugin (C:\\\\github\\\\vanilla-js-film\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8389:18)\\n    at Parser.parseClassProperty (C:\\\\github\\\\vanilla-js-film\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11665:12)\\n    at Parser.pushClassProperty (C:\\\\github\\\\vanilla-js-film\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11627:30)\\n    at Parser.parseClassMemberWithIsStatic (C:\\\\github\\\\vanilla-js-film\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11560:14)\\n    at Parser.parseClassMember (C:\\\\github\\\\vanilla-js-film\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11497:10)\\n    at C:\\\\github\\\\vanilla-js-film\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11452:14\\n    at Parser.withTopicForbiddingContext (C:\\\\github\\\\vanilla-js-film\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10533:14)\\n    at Parser.parseClassBody (C:\\\\github\\\\vanilla-js-film\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11429:10)\\n    at Parser.parseClass (C:\\\\github\\\\vanilla-js-film\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11403:22)\\n    at Parser.parseExportDefaultExpression (C:\\\\github\\\\vanilla-js-film\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11825:19)\\n    at Parser.parseExport (C:\\\\github\\\\vanilla-js-film\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11738:31)\\n    at Parser.parseStatementContent (C:\\\\github\\\\vanilla-js-film\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10762:27)\\n    at Parser.parseStatement (C:\\\\github\\\\vanilla-js-film\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10658:17)\\n    at Parser.parseBlockOrModuleBlockBody (C:\\\\github\\\\vanilla-js-film\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11234:25)\\n    at Parser.parseBlockBody (C:\\\\github\\\\vanilla-js-film\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11221:10)\\n    at Parser.parseTopLevel (C:\\\\github\\\\vanilla-js-film\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10589:10)\\n    at Parser.parse (C:\\\\github\\\\vanilla-js-film\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12192:10)\\n    at parse (C:\\\\github\\\\vanilla-js-film\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12243:38)\\n    at parser (C:\\\\github\\\\vanilla-js-film\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\parser\\\\index.js:54:34)\\n    at parser.next (<anonymous>)\\n    at normalizeFile (C:\\\\github\\\\vanilla-js-film\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\normalize-file.js:93:38)\\n    at normalizeFile.next (<anonymous>)\\n    at run (C:\\\\github\\\\vanilla-js-film\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\index.js:31:50)\\n    at run.next (<anonymous>)\\n    at Function.transform (C:\\\\github\\\\vanilla-js-film\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transform.js:27:41)\\n    at transform.next (<anonymous>)\\n    at step (C:\\\\github\\\\vanilla-js-film\\\\node_modules\\\\gensync\\\\index.js:254:32)\\n    at C:\\\\github\\\\vanilla-js-film\\\\node_modules\\\\gensync\\\\index.js:266:13\\n    at async.call.result.err.err (C:\\\\github\\\\vanilla-js-film\\\\node_modules\\\\gensync\\\\index.js:216:11)\");\n\n//# sourceURL=webpack:///./src/js/controllers/MainController.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_HeaderView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/HeaderView */ \"./src/js/components/HeaderView.js\");\n/* harmony import */ var _PublisherSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PublisherSubscriber */ \"./src/js/PublisherSubscriber.js\");\n/* harmony import */ var _components_FilmsGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/FilmsGrid */ \"./src/js/components/FilmsGrid.js\");\n/* harmony import */ var _controllers_MainController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controllers/MainController */ \"./src/js/controllers/MainController.js\");\n/* harmony import */ var _controllers_MainController__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_controllers_MainController__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n // const headerView = new HeaderView('header', PublisherSubscriber)\n// headerView.Render()\n// const filmsgrid = new FilmsGrid('filmsGrid',PublisherSubscriber)\n// filmsgrid.Render()\n\nvar mainController = new _controllers_MainController__WEBPACK_IMPORTED_MODULE_3___default.a('header', 'filmsGrid');\nmainController.Render(); // class Store {\n//   constructor() {\n//     this.state = {}\n//     this.actions = {}\n//     this.mutations = {}\n//   }\n// }\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ })

/******/ });