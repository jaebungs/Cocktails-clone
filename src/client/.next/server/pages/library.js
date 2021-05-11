module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/library.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/RecipeItem.js":
/*!**********************************!*\
  !*** ./components/RecipeItem.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_recipeCard_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/recipeCard.module.scss */ "./styles/recipeCard.module.scss");
/* harmony import */ var _styles_recipeCard_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_recipeCard_module_scss__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\jaebu\\Desktop\\cocktail-v2\\src\\client\\components\\RecipeItem.js";



const RecipeItem = ({
  recipe
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_recipeCard_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.recipeCard,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: recipe.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["Ingredients: ", recipe.ingredients]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["Instruction: ", recipe.instruction]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (RecipeItem);

/***/ }),

/***/ "./components/RecipeLists.js":
/*!***********************************!*\
  !*** ./components/RecipeLists.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _RecipeItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RecipeItem */ "./components/RecipeItem.js");

var _jsxFileName = "C:\\Users\\jaebu\\Desktop\\cocktail-v2\\src\\client\\components\\RecipeLists.js";



const RecipeLists = ({
  recipes
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: recipes.map(recipe => {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_RecipeItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
        recipe: recipe
      }, recipe._id, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 16
      }, undefined);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (RecipeLists);

/***/ }),

/***/ "./configs/index.js":
/*!**************************!*\
  !*** ./configs/index.js ***!
  \**************************/
/*! exports provided: configs, alcoholTypes, server */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configs", function() { return configs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alcoholTypes", function() { return alcoholTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "server", function() { return server; });
const configs = {
  navs: [{
    name: 'Library',
    href: '/library'
  }, {
    name: 'My Bar',
    href: '/mybar'
  }]
};
const alcoholTypes = ['Gin', 'Whiskey', 'Rum', 'Brandy', 'Cognac', 'Vodka', 'Tequila', 'Mezcal', 'Campari', 'Maraschino', 'Triple Sec', 'Sweet Vermouth', 'Dry Vermouth', 'Red Wine', 'White Wine', 'Beer', 'Coffee Liqueur', 'Chocolate Liqueur', 'Herbal Liqueur', 'Absinthe', 'Champagne', 'Sake', 'Soju', 'Sambuca'];
const dev = true;
const server = dev ? 'http://localhost:4000' : 'deployed back-end site';

/***/ }),

/***/ "./pages/library.js":
/*!**************************!*\
  !*** ./pages/library.js ***!
  \**************************/
/*! exports provided: default, getStaticProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _configs_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../configs/index */ "./configs/index.js");
/* harmony import */ var _redux_actions_cocktailAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/actions/cocktailAction */ "./redux/actions/cocktailAction.js");
/* harmony import */ var _components_RecipeLists__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/RecipeLists */ "./components/RecipeLists.js");

var _jsxFileName = "C:\\Users\\jaebu\\Desktop\\cocktail-v2\\src\\client\\pages\\library.js";






const library = ({
  recipes
}) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    dispatch(Object(_redux_actions_cocktailAction__WEBPACK_IMPORTED_MODULE_4__["getCocktails"])());
  }, []);
  console.log(recipes);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: "Library Page"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_RecipeLists__WEBPACK_IMPORTED_MODULE_5__["default"], {
      recipes: recipes
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (library);
const getStaticProps = async () => {
  const res = await fetch(`${_configs_index__WEBPACK_IMPORTED_MODULE_3__["server"]}/cocktails`);
  const recipes = await res.json();
  return {
    props: {
      recipes
    }
  };
};

/***/ }),

/***/ "./redux/actions/cocktailAction.js":
/*!*****************************************!*\
  !*** ./redux/actions/cocktailAction.js ***!
  \*****************************************/
/*! exports provided: getCocktails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCocktails", function() { return getCocktails; });
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constant */ "./redux/constant.js");
/* harmony import */ var _configs_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../configs/index */ "./configs/index.js");


const getCocktails = () => async dispatch => {
  const res = await fetch(`${_configs_index__WEBPACK_IMPORTED_MODULE_1__["server"]}/cocktails`);
  const data = await res.json();
  dispatch({
    type: _constant__WEBPACK_IMPORTED_MODULE_0__["GET_ALL_COCKTAILS"],
    payload: data
  });
};

/***/ }),

/***/ "./redux/constant.js":
/*!***************************!*\
  !*** ./redux/constant.js ***!
  \***************************/
/*! exports provided: GET_ALL_COCKTAILS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ALL_COCKTAILS", function() { return GET_ALL_COCKTAILS; });
const GET_ALL_COCKTAILS = 'GET_ALL_COCKTAILS';

/***/ }),

/***/ "./styles/recipeCard.module.scss":
/*!***************************************!*\
  !*** ./styles/recipeCard.module.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"recipeCard": "recipeCard_recipeCard__9To-G"
};


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SZWNpcGVJdGVtLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUmVjaXBlTGlzdHMuanMiLCJ3ZWJwYWNrOi8vLy4vY29uZmlncy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9saWJyYXJ5LmpzIiwid2VicGFjazovLy8uL3JlZHV4L2FjdGlvbnMvY29ja3RhaWxBY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvY29uc3RhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL3JlY2lwZUNhcmQubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIlJlY2lwZUl0ZW0iLCJyZWNpcGUiLCJzdHlsZWQiLCJyZWNpcGVDYXJkIiwibmFtZSIsImluZ3JlZGllbnRzIiwiaW5zdHJ1Y3Rpb24iLCJSZWNpcGVMaXN0cyIsInJlY2lwZXMiLCJtYXAiLCJfaWQiLCJjb25maWdzIiwibmF2cyIsImhyZWYiLCJhbGNvaG9sVHlwZXMiLCJkZXYiLCJzZXJ2ZXIiLCJsaWJyYXJ5IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZUVmZmVjdCIsImdldENvY2t0YWlscyIsImNvbnNvbGUiLCJsb2ciLCJnZXRTdGF0aWNQcm9wcyIsInJlcyIsImZldGNoIiwianNvbiIsInByb3BzIiwiZGF0YSIsInR5cGUiLCJHRVRfQUxMX0NPQ0tUQUlMUyIsInBheWxvYWQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FB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QSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9saWJyYXJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9saWJyYXJ5LmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnLi4vc3R5bGVzL3JlY2lwZUNhcmQubW9kdWxlLnNjc3MnO1xuXG5jb25zdCBSZWNpcGVJdGVtID0gKHsgcmVjaXBlIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVkLnJlY2lwZUNhcmR9PlxuICAgICAgPGgzPntyZWNpcGUubmFtZX08L2gzPlxuICAgICAgPHA+SW5ncmVkaWVudHM6IHtyZWNpcGUuaW5ncmVkaWVudHN9PC9wPlxuICAgICAgPHA+SW5zdHJ1Y3Rpb246IHtyZWNpcGUuaW5zdHJ1Y3Rpb259PC9wPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVjaXBlSXRlbTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVjaXBlSXRlbSBmcm9tICcuL1JlY2lwZUl0ZW0nO1xuXG5jb25zdCBSZWNpcGVMaXN0cyA9ICh7IHJlY2lwZXMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7cmVjaXBlcy5tYXAocmVjaXBlID0+IHtcbiAgICAgICAgcmV0dXJuIDxSZWNpcGVJdGVtIGtleT17cmVjaXBlLl9pZH0gcmVjaXBlPXtyZWNpcGV9IC8+O1xuICAgICAgfSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWNpcGVMaXN0cztcbiIsImV4cG9ydCBjb25zdCBjb25maWdzID0ge1xuICBuYXZzOiBbXG4gICAge1xuICAgICAgbmFtZTogJ0xpYnJhcnknLFxuICAgICAgaHJlZjogJy9saWJyYXJ5JyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdNeSBCYXInLFxuICAgICAgaHJlZjogJy9teWJhcicsXG4gICAgfSxcbiAgXSxcbn07XG5cbmV4cG9ydCBjb25zdCBhbGNvaG9sVHlwZXMgPSBbXG4gICdHaW4nLFxuICAnV2hpc2tleScsXG4gICdSdW0nLFxuICAnQnJhbmR5JyxcbiAgJ0NvZ25hYycsXG4gICdWb2RrYScsXG4gICdUZXF1aWxhJyxcbiAgJ01lemNhbCcsXG4gICdDYW1wYXJpJyxcbiAgJ01hcmFzY2hpbm8nLFxuICAnVHJpcGxlIFNlYycsXG4gICdTd2VldCBWZXJtb3V0aCcsXG4gICdEcnkgVmVybW91dGgnLFxuICAnUmVkIFdpbmUnLFxuICAnV2hpdGUgV2luZScsXG4gICdCZWVyJyxcbiAgJ0NvZmZlZSBMaXF1ZXVyJyxcbiAgJ0Nob2NvbGF0ZSBMaXF1ZXVyJyxcbiAgJ0hlcmJhbCBMaXF1ZXVyJyxcbiAgJ0Fic2ludGhlJyxcbiAgJ0NoYW1wYWduZScsXG4gICdTYWtlJyxcbiAgJ1NvanUnLFxuICAnU2FtYnVjYScsXG5dO1xuXG5jb25zdCBkZXYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nO1xuXG5leHBvcnQgY29uc3Qgc2VydmVyID0gZGV2ID8gJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMCcgOiAnZGVwbG95ZWQgYmFjay1lbmQgc2l0ZSc7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBzZXJ2ZXIgfSBmcm9tICcuLi9jb25maWdzL2luZGV4JztcbmltcG9ydCB7IGdldENvY2t0YWlscyB9IGZyb20gJy4uL3JlZHV4L2FjdGlvbnMvY29ja3RhaWxBY3Rpb24nO1xuaW1wb3J0IFJlY2lwZUxpc3RzIGZyb20gJy4uL2NvbXBvbmVudHMvUmVjaXBlTGlzdHMnO1xuXG5jb25zdCBsaWJyYXJ5ID0gKHsgcmVjaXBlcyB9KSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoKGdldENvY2t0YWlscygpKTtcbiAgfSwgW10pO1xuICBjb25zb2xlLmxvZyhyZWNpcGVzKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgyPkxpYnJhcnkgUGFnZTwvaDI+XG4gICAgICA8UmVjaXBlTGlzdHMgcmVjaXBlcz17cmVjaXBlc30gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxpYnJhcnk7XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7c2VydmVyfS9jb2NrdGFpbHNgKTtcbiAgY29uc3QgcmVjaXBlcyA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyByZWNpcGVzIH0sXG4gIH07XG59O1xuIiwiaW1wb3J0IHsgR0VUX0FMTF9DT0NLVEFJTFMgfSBmcm9tICcuLi9jb25zdGFudCc7XG5pbXBvcnQgeyBzZXJ2ZXIgfSBmcm9tICcuLi8uLi9jb25maWdzL2luZGV4JztcblxuZXhwb3J0IGNvbnN0IGdldENvY2t0YWlscyA9ICgpID0+IGFzeW5jIGRpc3BhdGNoID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7c2VydmVyfS9jb2NrdGFpbHNgKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgZGlzcGF0Y2goe1xuICAgIHR5cGU6IEdFVF9BTExfQ09DS1RBSUxTLFxuICAgIHBheWxvYWQ6IGRhdGEsXG4gIH0pO1xufTtcbiIsImV4cG9ydCBjb25zdCBHRVRfQUxMX0NPQ0tUQUlMUyA9ICdHRVRfQUxMX0NPQ0tUQUlMUyc7XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJyZWNpcGVDYXJkXCI6IFwicmVjaXBlQ2FyZF9yZWNpcGVDYXJkX185VG8tR1wiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=