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
/* harmony import */ var _RecipesModal_RecipesModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RecipesModal/RecipesModal */ "./components/Recipes/RecipesModal/RecipesModal.js");
/* harmony import */ var _recipeCard_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./recipeCard.module.scss */ "./components/Recipes/recipeCard.module.scss");
/* harmony import */ var _recipeCard_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_recipeCard_module_scss__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\jaebu\\Desktop\\cocktail-v2\\src\\client\\components\\Recipes\\RecipeItem.js";




const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};
react_modal__WEBPACK_IMPORTED_MODULE_2___default.a.setAppElement('#__next');

const RecipeItem = ({
  recipe
}) => {
  const {
    0: isModalOpen,
    1: setIsModalOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _recipeCard_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.recipeCard,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      onClick: toggleModal,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        children: recipe.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: ["Ingredients: ", recipe.ingredients]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: ["Instruction: ", recipe.instruction]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_modal__WEBPACK_IMPORTED_MODULE_2___default.a, {
      isOpen: isModalOpen,
      onRequestClose: closeModal,
      style: customStyles,
      contentLabel: recipe.name + ' recipe modal',
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_RecipesModal_RecipesModal__WEBPACK_IMPORTED_MODULE_3__["default"], {
        recipe: recipe,
        closeModal: closeModal
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
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
        lineNumber: 9,
        columnNumber: 16
      }, undefined);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (RecipeLists);

/***/ }),

/***/ "./components/Recipes/RecipesModal/RecipesModal.js":
/*!*********************************************************!*\
  !*** ./components/Recipes/RecipesModal/RecipesModal.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _recipeModal_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recipeModal.module.scss */ "./components/Recipes/RecipesModal/recipeModal.module.scss");
/* harmony import */ var _recipeModal_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_recipeModal_module_scss__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\jaebu\\Desktop\\cocktail-v2\\src\\client\\components\\Recipes\\RecipesModal\\RecipesModal.js";



const RecipesModal = ({
  recipe,
  closeModal
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _recipeModal_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.modalContainer,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: recipe.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: recipe.garnish
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "Modal testing"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: closeModal,
      children: "Close"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (RecipesModal);

/***/ }),

/***/ "./components/Recipes/RecipesModal/recipeModal.module.scss":
/*!*****************************************************************!*\
  !*** ./components/Recipes/RecipesModal/recipeModal.module.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"modalContainer": "recipeModal_modalContainer__RjRN0"
};


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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: "Library Page"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Recipes_RecipeLists__WEBPACK_IMPORTED_MODULE_5__["default"], {
      recipes: recipes
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
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
/*! exports provided: GET_ALL_COCKTAILS, CREATE_NEW_ACCOUNT, REGULAR_SIGN_IN, OAUTH_SIGN_IN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ALL_COCKTAILS", function() { return GET_ALL_COCKTAILS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_NEW_ACCOUNT", function() { return CREATE_NEW_ACCOUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGULAR_SIGN_IN", function() { return REGULAR_SIGN_IN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OAUTH_SIGN_IN", function() { return OAUTH_SIGN_IN; });
const GET_ALL_COCKTAILS = 'GET_ALL_COCKTAILS';
const CREATE_NEW_ACCOUNT = 'CREATE_NEW_ACCOUT';
const REGULAR_SIGN_IN = 'REGULAR_SIGN_IN';
const OAUTH_SIGN_IN = 'OAUTH_SIGN_IN';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SZWNpcGVzL1JlY2lwZUl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SZWNpcGVzL1JlY2lwZUxpc3RzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUmVjaXBlcy9SZWNpcGVzTW9kYWwvUmVjaXBlc01vZGFsLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUmVjaXBlcy9SZWNpcGVzTW9kYWwvcmVjaXBlTW9kYWwubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SZWNpcGVzL3JlY2lwZUNhcmQubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SZWNpcGVzL3JlY2lwZUxheW91dC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb25maWdzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy9jb2NrdGFpbEFjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9jb25zdGFudC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LW1vZGFsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJjdXN0b21TdHlsZXMiLCJjb250ZW50IiwidG9wIiwibGVmdCIsInJpZ2h0IiwiYm90dG9tIiwibWFyZ2luUmlnaHQiLCJ0cmFuc2Zvcm0iLCJNb2RhbCIsInNldEFwcEVsZW1lbnQiLCJSZWNpcGVJdGVtIiwicmVjaXBlIiwiaXNNb2RhbE9wZW4iLCJzZXRJc01vZGFsT3BlbiIsInVzZVN0YXRlIiwidG9nZ2xlTW9kYWwiLCJjbG9zZU1vZGFsIiwic3R5bGVkIiwicmVjaXBlQ2FyZCIsIm5hbWUiLCJpbmdyZWRpZW50cyIsImluc3RydWN0aW9uIiwiUmVjaXBlTGlzdHMiLCJyZWNpcGVzIiwic3R5ZWxkIiwicmVjaXBlQ29udGFpbmVyIiwibWFwIiwiX2lkIiwiUmVjaXBlc01vZGFsIiwibW9kYWxDb250YWluZXIiLCJnYXJuaXNoIiwiY29uZmlncyIsIm5hdnMiLCJocmVmIiwiYWxjb2hvbFR5cGVzIiwiZGV2Iiwic2VydmVyIiwibGlicmFyeSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJnZXRDb2NrdGFpbHMiLCJnZXRTdGF0aWNQcm9wcyIsInJlcyIsImZldGNoIiwianNvbiIsInByb3BzIiwiZGF0YSIsInR5cGUiLCJHRVRfQUxMX0NPQ0tUQUlMUyIsInBheWxvYWQiLCJDUkVBVEVfTkVXX0FDQ09VTlQiLCJSRUdVTEFSX1NJR05fSU4iLCJPQVVUSF9TSUdOX0lOIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtR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QWlCLEdBQUcsbUJBQTFCO0FBRUEsTUFBTUUsa0JBQWtCLEdBQUcsbUJBQTNCO0FBQ0EsTUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUNBLE1BQU1DLGFBQWEsR0FBRyxlQUF0QixDOzs7Ozs7Ozs7OztBQ0pQLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2xpYnJhcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2xpYnJhcnkuanNcIik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtbW9kYWwnO1xuaW1wb3J0IFJlY2lwZXNNb2RhbCBmcm9tICcuL1JlY2lwZXNNb2RhbC9SZWNpcGVzTW9kYWwnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICcuL3JlY2lwZUNhcmQubW9kdWxlLnNjc3MnO1xuXG5jb25zdCBjdXN0b21TdHlsZXMgPSB7XG4gIGNvbnRlbnQ6IHtcbiAgICB0b3A6ICc1MCUnLFxuICAgIGxlZnQ6ICc1MCUnLFxuICAgIHJpZ2h0OiAnYXV0bycsXG4gICAgYm90dG9tOiAnYXV0bycsXG4gICAgbWFyZ2luUmlnaHQ6ICctNTAlJyxcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxuICB9LFxufTtcblxuTW9kYWwuc2V0QXBwRWxlbWVudCgnI19fbmV4dCcpO1xuXG5jb25zdCBSZWNpcGVJdGVtID0gKHsgcmVjaXBlIH0pID0+IHtcbiAgY29uc3QgW2lzTW9kYWxPcGVuLCBzZXRJc01vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgdG9nZ2xlTW9kYWwgPSAoKSA9PiB7XG4gICAgc2V0SXNNb2RhbE9wZW4oIWlzTW9kYWxPcGVuKTtcbiAgfTtcblxuICBjb25zdCBjbG9zZU1vZGFsID0gKCkgPT4ge1xuICAgIHNldElzTW9kYWxPcGVuKGZhbHNlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZWQucmVjaXBlQ2FyZH0+XG4gICAgICA8ZGl2IG9uQ2xpY2s9e3RvZ2dsZU1vZGFsfT5cbiAgICAgICAgPGgzPntyZWNpcGUubmFtZX08L2gzPlxuICAgICAgICA8cD5JbmdyZWRpZW50czoge3JlY2lwZS5pbmdyZWRpZW50c308L3A+XG4gICAgICAgIDxwPkluc3RydWN0aW9uOiB7cmVjaXBlLmluc3RydWN0aW9ufTwvcD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8TW9kYWxcbiAgICAgICAgaXNPcGVuPXtpc01vZGFsT3Blbn1cbiAgICAgICAgb25SZXF1ZXN0Q2xvc2U9e2Nsb3NlTW9kYWx9XG4gICAgICAgIHN0eWxlPXtjdXN0b21TdHlsZXN9XG4gICAgICAgIGNvbnRlbnRMYWJlbD17cmVjaXBlLm5hbWUgKyAnIHJlY2lwZSBtb2RhbCd9XG4gICAgICA+XG4gICAgICAgIDxSZWNpcGVzTW9kYWwgcmVjaXBlPXtyZWNpcGV9IGNsb3NlTW9kYWw9e2Nsb3NlTW9kYWx9IC8+XG4gICAgICA8L01vZGFsPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVjaXBlSXRlbTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVjaXBlSXRlbSBmcm9tICcuL1JlY2lwZUl0ZW0nO1xuaW1wb3J0IHN0eWVsZCBmcm9tICcuL3JlY2lwZUxheW91dC5tb2R1bGUuc2Nzcyc7XG5cbmNvbnN0IFJlY2lwZUxpc3RzID0gKHsgcmVjaXBlcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWVsZC5yZWNpcGVDb250YWluZXJ9PlxuICAgICAge3JlY2lwZXMubWFwKHJlY2lwZSA9PiB7XG4gICAgICAgIHJldHVybiA8UmVjaXBlSXRlbSBrZXk9e3JlY2lwZS5faWR9IHJlY2lwZT17cmVjaXBlfSAvPjtcbiAgICAgIH0pfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVjaXBlTGlzdHM7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICcuL3JlY2lwZU1vZGFsLm1vZHVsZS5zY3NzJztcblxuY29uc3QgUmVjaXBlc01vZGFsID0gKHsgcmVjaXBlLCBjbG9zZU1vZGFsIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVkLm1vZGFsQ29udGFpbmVyfT5cbiAgICAgIDxoMj57cmVjaXBlLm5hbWV9PC9oMj5cbiAgICAgIDxoMz57cmVjaXBlLmdhcm5pc2h9PC9oMz5cbiAgICAgIDxwPk1vZGFsIHRlc3Rpbmc8L3A+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2Nsb3NlTW9kYWx9PkNsb3NlPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWNpcGVzTW9kYWw7XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtb2RhbENvbnRhaW5lclwiOiBcInJlY2lwZU1vZGFsX21vZGFsQ29udGFpbmVyX19SalJOMFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwicmVjaXBlQ2FyZFwiOiBcInJlY2lwZUNhcmRfcmVjaXBlQ2FyZF9fMUdhdnpcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInJlY2lwZUNvbnRhaW5lclwiOiBcInJlY2lwZUxheW91dF9yZWNpcGVDb250YWluZXJfXzFDT0RBXCJcbn07XG4iLCJleHBvcnQgY29uc3QgY29uZmlncyA9IHtcbiAgbmF2czogW1xuICAgIHtcbiAgICAgIG5hbWU6ICdMaWJyYXJ5JyxcbiAgICAgIGhyZWY6ICcvbGlicmFyeScsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnTXkgQmFyJyxcbiAgICAgIGhyZWY6ICcvbXliYXInLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0FQSScsXG4gICAgICBocmVmOiAnL2FwaVBhZ2UnLFxuICAgIH0sXG4gIF0sXG59O1xuXG5leHBvcnQgY29uc3QgYWxjb2hvbFR5cGVzID0gW1xuICAnR2luJyxcbiAgJ1doaXNrZXknLFxuICAnUnVtJyxcbiAgJ0JyYW5keScsXG4gICdDb2duYWMnLFxuICAnVm9ka2EnLFxuICAnVGVxdWlsYScsXG4gICdNZXpjYWwnLFxuICAnQ2FtcGFyaScsXG4gICdNYXJhc2NoaW5vJyxcbiAgJ1RyaXBsZSBTZWMnLFxuICAnU3dlZXQgVmVybW91dGgnLFxuICAnRHJ5IFZlcm1vdXRoJyxcbiAgJ1JlZCBXaW5lJyxcbiAgJ1doaXRlIFdpbmUnLFxuICAnQmVlcicsXG4gICdDb2ZmZWUgTGlxdWV1cicsXG4gICdDaG9jb2xhdGUgTGlxdWV1cicsXG4gICdIZXJiYWwgTGlxdWV1cicsXG4gICdBYnNpbnRoZScsXG4gICdDaGFtcGFnbmUnLFxuICAnU2FrZScsXG4gICdTb2p1JyxcbiAgJ1NhbWJ1Y2EnLFxuXTtcblxuY29uc3QgZGV2ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJztcblxuZXhwb3J0IGNvbnN0IHNlcnZlciA9IGRldiA/ICdodHRwOi8vbG9jYWxob3N0OjQwMDAnIDogJ2RlcGxveWVkIGJhY2stZW5kIHNpdGUnO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgc2VydmVyIH0gZnJvbSAnLi4vY29uZmlncy9pbmRleCc7XG5pbXBvcnQgeyBnZXRDb2NrdGFpbHMgfSBmcm9tICcuLi9yZWR1eC9hY3Rpb25zL2NvY2t0YWlsQWN0aW9uJztcbmltcG9ydCBSZWNpcGVMaXN0cyBmcm9tICcuLi9jb21wb25lbnRzL1JlY2lwZXMvUmVjaXBlTGlzdHMnO1xuXG5jb25zdCBsaWJyYXJ5ID0gKHsgcmVjaXBlcyB9KSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoKGdldENvY2t0YWlscygpKTtcbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDI+TGlicmFyeSBQYWdlPC9oMj5cbiAgICAgIDxSZWNpcGVMaXN0cyByZWNpcGVzPXtyZWNpcGVzfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbGlicmFyeTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtzZXJ2ZXJ9L2NvY2t0YWlsc2ApO1xuICBjb25zdCByZWNpcGVzID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IHJlY2lwZXMgfSxcbiAgfTtcbn07XG4iLCJpbXBvcnQgeyBHRVRfQUxMX0NPQ0tUQUlMUyB9IGZyb20gJy4uL2NvbnN0YW50JztcbmltcG9ydCB7IHNlcnZlciB9IGZyb20gJy4uLy4uL2NvbmZpZ3MvaW5kZXgnO1xuXG5leHBvcnQgY29uc3QgZ2V0Q29ja3RhaWxzID0gKCkgPT4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtzZXJ2ZXJ9L2NvY2t0YWlsc2ApO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICBkaXNwYXRjaCh7XG4gICAgdHlwZTogR0VUX0FMTF9DT0NLVEFJTFMsXG4gICAgcGF5bG9hZDogZGF0YSxcbiAgfSk7XG59O1xuIiwiZXhwb3J0IGNvbnN0IEdFVF9BTExfQ09DS1RBSUxTID0gJ0dFVF9BTExfQ09DS1RBSUxTJztcblxuZXhwb3J0IGNvbnN0IENSRUFURV9ORVdfQUNDT1VOVCA9ICdDUkVBVEVfTkVXX0FDQ09VVCc7XG5leHBvcnQgY29uc3QgUkVHVUxBUl9TSUdOX0lOID0gJ1JFR1VMQVJfU0lHTl9JTic7XG5leHBvcnQgY29uc3QgT0FVVEhfU0lHTl9JTiA9ICdPQVVUSF9TSUdOX0lOJztcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW1vZGFsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9