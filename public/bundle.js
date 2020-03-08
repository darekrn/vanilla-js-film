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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return FilmsGrid; });\n/* harmony import */ var _PublisherSubscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../PublisherSubscriber */ \"./src/js/PublisherSubscriber.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar FilmsGrid =\n/*#__PURE__*/\nfunction () {\n  function FilmsGrid(divToAttachTo, pubsub) {\n    var _this = this;\n\n    _classCallCheck(this, FilmsGrid);\n\n    _defineProperty(this, \"Render\", function (data) {\n      if (data !== undefined && data.Type === 'List') {\n        //ToDo: data !== undefined -> strategy pattern\n        var filmsGrid = document.getElementById(_this.divToAttachTo2);\n        var cards = document.createElement('ul');\n        cards.className = 'cards';\n        filmsGrid.appendChild(cards); //filmsGrid.className = 'filmsGrid'\n\n        data.Films.forEach(function (film) {\n          cards.appendChild(_this.CreateCard(film.Poster, film.Title));\n        });\n      }\n    });\n\n    this.divToAttachTo2 = divToAttachTo;\n    this.pubsub2 = pubsub;\n    _PublisherSubscriber__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subscribe('films-list-updated', this.Render);\n  } // old\n  // Render = (data) => {\n  //     if(data !== undefined && data.Type === 'List') { //ToDo: data !== undefined -> strategy pattern\n  //     const filmsGrid = document.getElementById(this.divToAttachTo2);\n  //     filmsGrid.className = 'filmsGrid'\n  //     data.Films.forEach(film => {\n  //         let child = document.createElement('div')\n  //         child.className = \"filmsGridItem\"\n  //         child.textContent = 'one'\n  //         const poster = document.createElement(\"img\")\n  //         poster.setAttribute(\"src\", film.Poster)\n  //         poster.setAttribute(\"height\", \"80%\")\n  //         poster.setAttribute(\"width\", \"80%\")\n  //         child.appendChild(poster)\n  //         filmsGrid.appendChild(child)\n  //     });\n  //     }\n  // }\n\n\n  _createClass(FilmsGrid, [{\n    key: \"CreateCard\",\n    value: function CreateCard(image, description) {\n      var cardsItem = document.createElement('li');\n      cardsItem.className = 'cards__item';\n      var card = document.createElement('div');\n      card.className = 'card';\n      var cardImage = document.createElement('div');\n      cardImage.className = 'card__image';\n      cardImage.style.backgroundImage = \"url('\".concat(image, \"')\"); //cardImage.style.height = '80%'\n      //cardImage.style.width = '80%'\n\n      var cardContent = document.createElement('div');\n      cardContent.className = 'card__content';\n      var cardTitle = document.createElement('div');\n      cardTitle.className = 'card__title';\n      var cardText = document.createElement('p');\n      cardText.className = 'card__text';\n      cardText.innerText = description;\n      var cardBtn = document.createElement('BUTTON');\n      cardBtn.className = 'btn btn--block card__btn';\n      cardBtn.textContent = \"Details\";\n      cardContent.appendChild(cardTitle);\n      cardContent.appendChild(cardText);\n      cardContent.appendChild(cardBtn);\n      card.appendChild(cardImage);\n      card.appendChild(cardContent);\n      cardsItem.appendChild(card);\n      return cardsItem;\n    }\n  }]);\n\n  return FilmsGrid;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/components/FilmsGrid.js?");

/***/ }),

/***/ "./src/js/components/HeaderView.js":
/*!*****************************************!*\
  !*** ./src/js/components/HeaderView.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HeaderView; });\n/* harmony import */ var _PublisherSubscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../PublisherSubscriber */ \"./src/js/PublisherSubscriber.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar HeaderView =\n/*#__PURE__*/\nfunction () {\n  function HeaderView(divToAttachTo, pubsub) {\n    _classCallCheck(this, HeaderView);\n\n    this.divToAttachTo2 = divToAttachTo;\n    this.pubsub2 = pubsub;\n  }\n\n  _createClass(HeaderView, [{\n    key: \"Render\",\n    value: function Render(data) {\n      var headerContainer = document.getElementById(this.divToAttachTo2);\n      headerContainer.className = 'headerContainer';\n      var inputSearchFilms = document.createElement('input');\n      inputSearchFilms.className = 'searchfilmsinput';\n      inputSearchFilms.type = 'text';\n      var btn = document.createElement(\"BUTTON\");\n      btn.className = 'button';\n      btn.innerText = 'Search films';\n      btn.addEventListener(\"click\", function () {\n        _PublisherSubscriber__WEBPACK_IMPORTED_MODULE_0__[\"default\"].publish('search-films-button-clicked', inputSearchFilms.value);\n      });\n      headerContainer.appendChild(inputSearchFilms);\n      headerContainer.appendChild(btn);\n    }\n  }]);\n\n  return HeaderView;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/components/HeaderView.js?");

/***/ }),

/***/ "./src/js/controllers/MainController.js":
/*!**********************************************!*\
  !*** ./src/js/controllers/MainController.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MainController; });\n/* harmony import */ var _PublisherSubscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../PublisherSubscriber */ \"./src/js/PublisherSubscriber.js\");\n/* harmony import */ var _components_HeaderView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/HeaderView */ \"./src/js/components/HeaderView.js\");\n/* harmony import */ var _components_FilmsGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/FilmsGrid */ \"./src/js/components/FilmsGrid.js\");\n/* harmony import */ var _store_Store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../store/Store */ \"./src/js/store/Store.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nvar MainController =\n/*#__PURE__*/\nfunction () {\n  function MainController(headerViewId, filmsGridId) {\n    var _this = this;\n\n    _classCallCheck(this, MainController);\n\n    _defineProperty(this, \"SearchFilmsButtonClicked\", function (filmTitle) {\n      console.log('search-films-button-clicked clicked: ' + filmTitle);\n\n      _this.Store.fetchFilmsAsync(filmTitle);\n    });\n\n    this.HeaderView = new _components_HeaderView__WEBPACK_IMPORTED_MODULE_1__[\"default\"](headerViewId, _PublisherSubscriber__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n    this.FilmsGrid = new _components_FilmsGrid__WEBPACK_IMPORTED_MODULE_2__[\"default\"](filmsGridId, _PublisherSubscriber__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n    this.Store = new _store_Store__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n    _PublisherSubscriber__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subscribe('search-films-button-clicked', this.SearchFilmsButtonClicked);\n  }\n\n  _createClass(MainController, [{\n    key: \"Render\",\n    value: function Render() {\n      this.HeaderView.Render();\n      this.FilmsGrid.Render();\n    }\n  }]);\n\n  return MainController;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/controllers/MainController.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_HeaderView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/HeaderView */ \"./src/js/components/HeaderView.js\");\n/* harmony import */ var _PublisherSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PublisherSubscriber */ \"./src/js/PublisherSubscriber.js\");\n/* harmony import */ var _components_FilmsGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/FilmsGrid */ \"./src/js/components/FilmsGrid.js\");\n/* harmony import */ var _controllers_MainController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controllers/MainController */ \"./src/js/controllers/MainController.js\");\n\n\n\n // const headerView = new HeaderView('header', PublisherSubscriber)\n// headerView.Render()\n// const filmsgrid = new FilmsGrid('filmsGrid',PublisherSubscriber)\n// filmsgrid.Render()\n\nvar mainController = new _controllers_MainController__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('header', 'filmsGrid');\nmainController.Render(); // class Store {\n//   constructor() {\n//     this.state = {}\n//     this.actions = {}\n//     this.mutations = {}\n//   }\n// }\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/store/Store.js":
/*!*******************************!*\
  !*** ./src/js/store/Store.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Store123; });\n/* harmony import */ var _PublisherSubscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../PublisherSubscriber */ \"./src/js/PublisherSubscriber.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Store123 =\n/*#__PURE__*/\nfunction () {\n  function Store123() {\n    _classCallCheck(this, Store123);\n\n    this.state = {\n      films: []\n    }, this.api = '9b94c21c';\n  } //ToDo: Make it async\n\n\n  _createClass(Store123, [{\n    key: \"fetchFilmsAsync\",\n    value: function fetchFilmsAsync(filmTitle) {\n      var _this = this;\n\n      var respone = fetch(\"http://www.omdbapi.com/?s=\".concat(filmTitle, \"&apikey=\").concat(this.api)).then(function (response) {\n        return response.json();\n      }).then(function (data) {\n        return data;\n      }).then(function (data) {\n        return _this.processFilmsResponse(data);\n      }).then(function (data) {\n        return _this.changeFilmsList(data);\n      });\n    }\n  }, {\n    key: \"processFilmsResponse\",\n    value: function processFilmsResponse(data) {\n      var result = [];\n      data.Search.map(function (film) {\n        return result.push({\n          Poster: film.Poster,\n          Title: film.Title,\n          Type: film.Type,\n          Year: film.Year,\n          imdbID: film.imdbID\n        });\n      });\n      return result;\n    }\n  }, {\n    key: \"changeFilmsList\",\n    value: function changeFilmsList(newFilmsList) {\n      console.log('chained');\n      this.films = newFilmsList;\n      var dataToBeSent = {\n        Type: 'List',\n        Films: this.films\n      };\n      console.log(dataToBeSent);\n      _PublisherSubscriber__WEBPACK_IMPORTED_MODULE_0__[\"default\"].publish('films-list-updated', dataToBeSent);\n    }\n  }]);\n\n  return Store123;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/store/Store.js?");

/***/ })

/******/ });