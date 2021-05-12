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

/***/ "./components/Recipes/RecipeItem.js":
/*!******************************************!*\
  !*** ./components/Recipes/RecipeItem.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-modal */ "react-modal");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _recipeCard_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recipeCard.module.scss */ "./components/Recipes/recipeCard.module.scss");
/* harmony import */ var _recipeCard_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_recipeCard_module_scss__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\jaebu\\Desktop\\cocktail-v2\\src\\client\\components\\Recipes\\RecipeItem.js";




const RecipeItem = ({
  recipe
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _recipeCard_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.recipeCard,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: recipe.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["Ingredients: ", recipe.ingredients]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["Instruction: ", recipe.instruction]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (RecipeItem);

/***/ }),

/***/ "./components/Recipes/RecipeLists.js":
/*!*******************************************!*\
  !*** ./components/Recipes/RecipeLists.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _RecipeItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RecipeItem */ "./components/Recipes/RecipeItem.js");
/* harmony import */ var _recipeLayout_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recipeLayout.module.scss */ "./components/Recipes/recipeLayout.module.scss");
/* harmony import */ var _recipeLayout_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_recipeLayout_module_scss__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\jaebu\\Desktop\\cocktail-v2\\src\\client\\components\\Recipes\\RecipeLists.js";




const RecipeLists = ({
  recipes
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _recipeLayout_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.recipeContainer,
    children: recipes.map(recipe => {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_RecipeItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
        recipe: recipe
      }, recipe._id, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 16
      }, undefined);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (RecipeLists);

/***/ }),

/***/ "./components/Recipes/recipeCard.module.scss":
/*!***************************************************!*\
  !*** ./components/Recipes/recipeCard.module.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"recipeCard": "recipeCard_recipeCard__1Gavz"
};


/***/ }),

/***/ "./components/Recipes/recipeLayout.module.scss":
/*!*****************************************************!*\
  !*** ./components/Recipes/recipeLayout.module.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"recipeContainer": "recipeLayout_recipeContainer__1CODA"
};


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
  }, {
    name: 'API',
    href: '/apiPage'
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
/* harmony import */ var _components_Recipes_RecipeLists__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Recipes/RecipeLists */ "./components/Recipes/RecipeLists.js");

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
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Recipes_RecipeLists__WEBPACK_IMPORTED_MODULE_5__["default"], {
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

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-modal":
/*!******************************!*\
  !*** external "react-modal" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-modal");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SZWNpcGVzL1JlY2lwZUl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SZWNpcGVzL1JlY2lwZUxpc3RzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUmVjaXBlcy9yZWNpcGVDYXJkLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUmVjaXBlcy9yZWNpcGVMYXlvdXQubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29uZmlncy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9saWJyYXJ5LmpzIiwid2VicGFjazovLy8uL3JlZHV4L2FjdGlvbnMvY29ja3RhaWxBY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvY29uc3RhbnQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1tb2RhbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiUmVjaXBlSXRlbSIsInJlY2lwZSIsIm1vZGFsSXNPcGVuIiwic2V0TW9kYWxJc09wZW4iLCJ1c2VTdGF0ZSIsIm9wZW5Nb2RhbCIsImNsb3NlTW9kYWwiLCJzdHlsZWQiLCJyZWNpcGVDYXJkIiwibmFtZSIsImluZ3JlZGllbnRzIiwiaW5zdHJ1Y3Rpb24iLCJSZWNpcGVMaXN0cyIsInJlY2lwZXMiLCJzdHllbGQiLCJyZWNpcGVDb250YWluZXIiLCJtYXAiLCJfaWQiLCJjb25maWdzIiwibmF2cyIsImhyZWYiLCJhbGNvaG9sVHlwZXMiLCJkZXYiLCJzZXJ2ZXIiLCJsaWJyYXJ5IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZUVmZmVjdCIsImdldENvY2t0YWlscyIsImNvbnNvbGUiLCJsb2ciLCJnZXRTdGF0aWNQcm9wcyIsInJlcyIsImZldGNoIiwianNvbiIsInByb3BzIiwiZGF0YSIsInR5cGUiLCJHRVRfQUxMX0NPQ0tUQUlMUyIsInBheWxvYWQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsVUFBVSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWdCO0FBQ2pDLFFBQU0sQ0FBQ0MsV0FBRCxFQUFjQyxjQUFkLElBQWlDQyxRQUFRLENBQUMsS0FBRCxDQUEvQzs7QUFFQSxRQUFNQyxTQUFTLEdBQUcsTUFBTTtBQUN0QkYsa0JBQWMsQ0FBQyxJQUFELENBQWQ7QUFDRCxHQUZEOztBQUlBLFFBQU1HLFVBQVUsR0FBRyxNQUFNO0FBQ3ZCSCxrQkFBYyxDQUFDLEtBQUQs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QUFjLEdBQUcsWUFBWTtBQUN4QyxRQUFNQyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFFLEdBQUVWLHFEQUFPLFlBQVgsQ0FBdkI7QUFDQSxRQUFNVixPQUFPLEdBQUcsTUFBTW1CLEdBQUcsQ0FBQ0UsSUFBSixFQUF0QjtBQUVBLFNBQU87QUFDTEMsU0FBSyxFQUFFO0FBQUV0QjtBQUFGO0FBREYsR0FBUDtBQUdELENBUE0sQzs7Ozs7Ozs7Ozs7O0FDdkJQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVPLE1BQU1lLFlBQVksR0FBRyxNQUFNLE1BQU1ILFFBQU4sSUFBa0I7QUFDbEQsUUFBTU8sR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBRSxHQUFFVixxREFBTyxZQUFYLENBQXZCO0FBQ0EsUUFBTWEsSUFBSSxHQUFHLE1BQU1KLEdBQUcsQ0FBQ0UsSUFBSixFQUFuQjtBQUVBVCxVQUFRLENBQUM7QUFDUFksUUFBSSxFQUFFQywyREFEQztBQUVQQyxXQUFPLEVBQUVIO0FBRkYsR0FBRCxDQUFSO0FBSUQsQ0FSTSxDOzs7Ozs7Ozs7Ozs7QUNIUDtBQUFBO0FBQU8sTUFBTUUsaUJBQWlCLEdBQUcsbUJBQTFCLEM7Ozs7Ozs7Ozs7O0FDQVAsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvbGlicmFyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvbGlicmFyeS5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtbW9kYWwnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICcuL3JlY2lwZUNhcmQubW9kdWxlLnNjc3MnO1xuXG5jb25zdCBSZWNpcGVJdGVtID0gKHsgcmVjaXBlIH0pID0+IHtcbiAgY29uc3QgW21vZGFsSXNPcGVuLCBzZXRNb2RhbElzT3BlbiBdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IG9wZW5Nb2RhbCA9ICgpID0+IHtcbiAgICBzZXRNb2RhbElzT3Blbih0cnVlKTtcbiAgfVxuXG4gIGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XG4gICAgc2V0TW9kYWxJc09wZW4oZmFsc2UpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVkLnJlY2lwZUNhcmR9PlxuICAgICAgPGgzPntyZWNpcGUubmFtZX08L2gzPlxuICAgICAgPHA+SW5ncmVkaWVudHM6IHtyZWNpcGUuaW5ncmVkaWVudHN9PC9wPlxuICAgICAgPHA+SW5zdHJ1Y3Rpb246IHtyZWNpcGUuaW5zdHJ1Y3Rpb259PC9wPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVjaXBlSXRlbTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWNpcGVJdGVtIGZyb20gJy4vUmVjaXBlSXRlbSc7XG5pbXBvcnQgc3R5ZWxkIGZyb20gJy4vcmVjaXBlTGF5b3V0Lm1vZHVsZS5zY3NzJztcblxuY29uc3QgUmVjaXBlTGlzdHMgPSAoeyByZWNpcGVzIH0pID0+IHtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHllbGQucmVjaXBlQ29udGFpbmVyfT5cbiAgICAgIHtyZWNpcGVzLm1hcChyZWNpcGUgPT4ge1xuICAgICAgICByZXR1cm4gPFJlY2lwZUl0ZW0ga2V5PXtyZWNpcGUuX2lkfSByZWNpcGU9e3JlY2lwZX0gLz47XG4gICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlY2lwZUxpc3RzO1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwicmVjaXBlQ2FyZFwiOiBcInJlY2lwZUNhcmRfcmVjaXBlQ2FyZF9fMUdhdnpcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInJlY2lwZUNvbnRhaW5lclwiOiBcInJlY2lwZUxheW91dF9yZWNpcGVDb250YWluZXJfXzFDT0RBXCJcbn07XG4iLCJleHBvcnQgY29uc3QgY29uZmlncyA9IHtcbiAgbmF2czogW1xuICAgIHtcbiAgICAgIG5hbWU6ICdMaWJyYXJ5JyxcbiAgICAgIGhyZWY6ICcvbGlicmFyeScsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnTXkgQmFyJyxcbiAgICAgIGhyZWY6ICcvbXliYXInLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0FQSScsXG4gICAgICBocmVmOiAnL2FwaVBhZ2UnLFxuICAgIH0sXG4gIF0sXG59O1xuXG5leHBvcnQgY29uc3QgYWxjb2hvbFR5cGVzID0gW1xuICAnR2luJyxcbiAgJ1doaXNrZXknLFxuICAnUnVtJyxcbiAgJ0JyYW5keScsXG4gICdDb2duYWMnLFxuICAnVm9ka2EnLFxuICAnVGVxdWlsYScsXG4gICdNZXpjYWwnLFxuICAnQ2FtcGFyaScsXG4gICdNYXJhc2NoaW5vJyxcbiAgJ1RyaXBsZSBTZWMnLFxuICAnU3dlZXQgVmVybW91dGgnLFxuICAnRHJ5IFZlcm1vdXRoJyxcbiAgJ1JlZCBXaW5lJyxcbiAgJ1doaXRlIFdpbmUnLFxuICAnQmVlcicsXG4gICdDb2ZmZWUgTGlxdWV1cicsXG4gICdDaG9jb2xhdGUgTGlxdWV1cicsXG4gICdIZXJiYWwgTGlxdWV1cicsXG4gICdBYnNpbnRoZScsXG4gICdDaGFtcGFnbmUnLFxuICAnU2FrZScsXG4gICdTb2p1JyxcbiAgJ1NhbWJ1Y2EnLFxuXTtcblxuY29uc3QgZGV2ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJztcblxuZXhwb3J0IGNvbnN0IHNlcnZlciA9IGRldiA/ICdodHRwOi8vbG9jYWxob3N0OjQwMDAnIDogJ2RlcGxveWVkIGJhY2stZW5kIHNpdGUnO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgc2VydmVyIH0gZnJvbSAnLi4vY29uZmlncy9pbmRleCc7XG5pbXBvcnQgeyBnZXRDb2NrdGFpbHMgfSBmcm9tICcuLi9yZWR1eC9hY3Rpb25zL2NvY2t0YWlsQWN0aW9uJztcbmltcG9ydCBSZWNpcGVMaXN0cyBmcm9tICcuLi9jb21wb25lbnRzL1JlY2lwZXMvUmVjaXBlTGlzdHMnO1xuXG5jb25zdCBsaWJyYXJ5ID0gKHsgcmVjaXBlcyB9KSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoKGdldENvY2t0YWlscygpKTtcbiAgfSwgW10pO1xuICBjb25zb2xlLmxvZyhyZWNpcGVzKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgyPkxpYnJhcnkgUGFnZTwvaDI+XG4gICAgICA8UmVjaXBlTGlzdHMgcmVjaXBlcz17cmVjaXBlc30gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxpYnJhcnk7XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7c2VydmVyfS9jb2NrdGFpbHNgKTtcbiAgY29uc3QgcmVjaXBlcyA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyByZWNpcGVzIH0sXG4gIH07XG59O1xuIiwiaW1wb3J0IHsgR0VUX0FMTF9DT0NLVEFJTFMgfSBmcm9tICcuLi9jb25zdGFudCc7XG5pbXBvcnQgeyBzZXJ2ZXIgfSBmcm9tICcuLi8uLi9jb25maWdzL2luZGV4JztcblxuZXhwb3J0IGNvbnN0IGdldENvY2t0YWlscyA9ICgpID0+IGFzeW5jIGRpc3BhdGNoID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7c2VydmVyfS9jb2NrdGFpbHNgKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgZGlzcGF0Y2goe1xuICAgIHR5cGU6IEdFVF9BTExfQ09DS1RBSUxTLFxuICAgIHBheWxvYWQ6IGRhdGEsXG4gIH0pO1xufTtcbiIsImV4cG9ydCBjb25zdCBHRVRfQUxMX0NPQ0tUQUlMUyA9ICdHRVRfQUxMX0NPQ0tUQUlMUyc7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1tb2RhbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==