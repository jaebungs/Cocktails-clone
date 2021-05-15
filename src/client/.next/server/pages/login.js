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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/login.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/LoginComponents/SignInForm.js":
/*!**************************************************!*\
  !*** ./components/LoginComponents/SignInForm.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SignInForm_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SignInForm.module.scss */ "./components/LoginComponents/SignInForm.module.scss");
/* harmony import */ var _SignInForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_SignInForm_module_scss__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\jaebu\\Desktop\\cocktail-v2\\src\\client\\components\\LoginComponents\\SignInForm.js";



const SignInForm = ({
  input,
  handleSignUpOnClick,
  handleSignSubmit,
  handleInputOnChange
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      className: _SignInForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.formContainer,
      onSubmit: handleSignSubmit,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        children: ["Email:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "email",
          className: _SignInForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.formInput,
          value: input.email,
          onChange: handleInputOnChange,
          name: "email",
          placeholder: "Enter Email.",
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        children: ["Password:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "password",
          className: _SignInForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.formInput,
          value: input.password,
          onChange: handleInputOnChange,
          name: "password",
          placeholder: "Enter Password.",
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _SignInForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.buttonsContainer,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: _SignInForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.formButton,
          children: "Sign in"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "Don't have an account yet?"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: handleSignUpOnClick,
      children: "Click here to Sign Up"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _SignInForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.buttonsContainer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Sign in with:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: _SignInForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.formButton,
        children: "Google"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: _SignInForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.formButton,
        children: "Github"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: _SignInForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.formButton,
        children: "Facebook"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (SignInForm);

/***/ }),

/***/ "./components/LoginComponents/SignInForm.module.scss":
/*!***********************************************************!*\
  !*** ./components/LoginComponents/SignInForm.module.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"formContainer": "SignInForm_formContainer__2l1k8",
	"formInput": "SignInForm_formInput__2VfG0",
	"formButton": "SignInForm_formButton__C1SyN",
	"buttonsContainer": "SignInForm_buttonsContainer__3ILgW"
};


/***/ }),

/***/ "./components/LoginComponents/SignUpForm.js":
/*!**************************************************!*\
  !*** ./components/LoginComponents/SignUpForm.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SignInForm_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SignInForm.module.scss */ "./components/LoginComponents/SignInForm.module.scss");
/* harmony import */ var _SignInForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_SignInForm_module_scss__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\jaebu\\Desktop\\cocktail-v2\\src\\client\\components\\LoginComponents\\SignUpForm.js";



const SignUpForm = ({
  input,
  handleSignUpOnClick,
  handleSignSubmit,
  handleInputOnChange
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      className: _SignInForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.formContainer,
      onSubmit: handleSignSubmit,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        children: ["First Name:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          name: "firstName",
          value: input.firsName,
          placeholder: "Enter first name.",
          onChange: handleInputOnChange,
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        children: ["Last Name:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          name: "lastName",
          value: input.lastName,
          placeholder: "Enter last name.",
          onChange: handleInputOnChange,
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        children: ["Email:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "email",
          className: _SignInForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.formInput,
          value: input.email,
          name: "email",
          onChange: handleInputOnChange,
          placeholder: "Enter Email.",
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        children: ["Password:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "password",
          className: _SignInForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.formInput,
          value: input.password,
          name: "password",
          onChange: handleInputOnChange,
          placeholder: "Enter Password.",
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        children: ["Confirm Password:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "password",
          className: _SignInForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.formInput,
          value: input.confirmPassword,
          name: "confirmPassword",
          onChange: handleInputOnChange,
          placeholder: "Confirm Password.",
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: _SignInForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.formButton,
        children: "Sign Up"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "Already have an account?"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: handleSignUpOnClick,
      children: "Click here to Sign in"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _SignInForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.buttonsContainer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Sign Up with:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: _SignInForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.formButton,
        children: "Google"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: _SignInForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.formButton,
        children: "Github"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: _SignInForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.formButton,
        children: "Facebook"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (SignUpForm);

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

/***/ "./helpers/loginHelpers.js":
/*!*********************************!*\
  !*** ./helpers/loginHelpers.js ***!
  \*********************************/
/*! exports provided: signIn, createAccount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signIn", function() { return signIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAccount", function() { return createAccount; });
/* harmony import */ var _configs_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../configs/index */ "./configs/index.js");

const signIn = async formData => {
  await fetch(`${_configs_index__WEBPACK_IMPORTED_MODULE_0__["server"]}/account`, {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  }).then(res => res.json()).then(data => {
    console.log(data);
  }).catch(err => {
    console.log(err);
  });
};
const createAccount = async formData => {
  await fetch(`${_configs_index__WEBPACK_IMPORTED_MODULE_0__["server"]}/account/createAccount`, {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  }).then(res => res.json()).then(data => {
    console.log('creat account success', data);
  }).catch(err => console.log(err));
};

/***/ }),

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_LoginComponents_SignInForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/LoginComponents/SignInForm */ "./components/LoginComponents/SignInForm.js");
/* harmony import */ var _components_LoginComponents_SignUpForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/LoginComponents/SignUpForm */ "./components/LoginComponents/SignUpForm.js");
/* harmony import */ var _helpers_loginHelpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/loginHelpers */ "./helpers/loginHelpers.js");

var _jsxFileName = "C:\\Users\\jaebu\\Desktop\\cocktail-v2\\src\\client\\pages\\login.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const defaultInput = {
  email: '',
  password: '',
  confirmPassword: '',
  firstName: '',
  lastName: ''
};

const login = () => {
  const {
    0: isSignUp,
    1: setIsSignUp
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: input,
    1: setInput
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(defaultInput); // Validate Sign Up passwords.

  const passwordValidation = () => {
    if (input.password === input.confirmPassword) {
      return true;
    } else {
      alert("Passwords don't match");
      return false;
    }
  }; //Toggle isSignUp state, so does components


  const handleSignUpOnClick = () => {
    setIsSignUp(!isSignUp);
    setInput(defaultInput);
  }; // Handle form input change event.


  const handleInputOnChange = e => {
    setInput(_objectSpread(_objectSpread({}, input), {}, {
      [e.target.name]: e.target.value
    }));
  }; // Handle Sign In / Sign Up submit event.


  const handleSignSubmit = e => {
    e.preventDefault(); // sign up or sign in api call.

    if (isSignUp && passwordValidation()) {
      Object(_helpers_loginHelpers__WEBPACK_IMPORTED_MODULE_4__["createAccount"])(input);
    }

    if (!isSignUp) {
      Object(_helpers_loginHelpers__WEBPACK_IMPORTED_MODULE_4__["signIn"])({
        email: input.email,
        password: input.password
      });
    }

    setInput(defaultInput);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: isSignUp ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LoginComponents_SignUpForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
      handleSignUpOnClick: handleSignUpOnClick,
      handleInputOnChange: handleInputOnChange,
      handleSignSubmit: handleSignSubmit,
      input: input
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LoginComponents_SignInForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
      handleSignUpOnClick: handleSignUpOnClick,
      handleInputOnChange: handleInputOnChange,
      handleSignSubmit: handleSignSubmit,
      input: input
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (login);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2dpbkNvbXBvbmVudHMvU2lnbkluRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvZ2luQ29tcG9uZW50cy9TaWduSW5Gb3JtLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTG9naW5Db21wb25lbnRzL1NpZ25VcEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vY29uZmlncy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9oZWxwZXJzL2xvZ2luSGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9sb2dpbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIlNpZ25JbkZvcm0iLCJpbnB1dCIsImhhbmRsZVNpZ25VcE9uQ2xpY2siLCJoYW5kbGVTaWduU3VibWl0IiwiaGFuZGxlSW5wdXRPbkNoYW5nZSIsInN0eWxlZCIsImZvcm1Db250YWluZXIiLCJmb3JtSW5wdXQiLCJlbWFpbCIsInBhc3N3b3JkIiwiYnV0dG9uc0NvbnRhaW5lciIsImZvcm1CdXR0b24iLCJTaWduVXBGb3JtIiwiZmlyc05hbWUiLCJsYXN0TmFtZSIsImNvbmZpcm1QYXNzd29yZCIsImNvbmZpZ3MiLCJuYXZzIiwibmFtZSIsImhyZWYiLCJhbGNvaG9sVHlwZXMiLCJkZXYiLCJzZXJ2ZXIiLCJzaWduSW4iLCJmb3JtRGF0YSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIkFjY2VwdCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZXJyIiwiY3JlYXRlQWNjb3VudCIsImRlZmF1bHRJbnB1dCIsImZpcnN0TmFtZSIsImxvZ2luIiwiaXNTaWduVXAiLCJzZXRJc1NpZ25VcCIsInVzZVN0YXRlIiwic2V0SW5wdXQiLCJwYXNzd29yZFZhbGlkYXRpb24iLCJhbGVydCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7O0FBRUEsTUFBTUEsVUFBVSxHQUFHLENBQUM7QUFBRUMsT0FBRjtBQUFTQyxxQkFBVDtBQUE4QkMsa0JBQTlCO0FBQWdEQztBQUFoRCxDQUFELEtBQTJFO0FBQzVGLHNCQUNFO0FBQUEsNEJBQ0U7QUFBTSxlQUFTLEVBQUVDLDhEQUFNLENBQUNDLGFBQXhCO0FBQXVDLGNBQVEsRUFBRUgsZ0JBQWpEO0FBQUEsOEJBQ0U7QUFBQSwwQ0FFRTtBQUNFLGNBQUksRUFBQyxPQURQO0FBRUUsbUJBQVMsRUFBRUUs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XHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2xvZ2luLmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnLi9TaWduSW5Gb3JtLm1vZHVsZS5zY3NzJztcblxuY29uc3QgU2lnbkluRm9ybSA9ICh7IGlucHV0LCBoYW5kbGVTaWduVXBPbkNsaWNrLCBoYW5kbGVTaWduU3VibWl0LCBoYW5kbGVJbnB1dE9uQ2hhbmdlIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGZvcm0gY2xhc3NOYW1lPXtzdHlsZWQuZm9ybUNvbnRhaW5lcn0gb25TdWJtaXQ9e2hhbmRsZVNpZ25TdWJtaXR9PlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgRW1haWw6XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZWQuZm9ybUlucHV0fVxuICAgICAgICAgICAgdmFsdWU9e2lucHV0LmVtYWlsfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0T25DaGFuZ2V9XG4gICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBFbWFpbC5cIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgUGFzc3dvcmQ6XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZWQuZm9ybUlucHV0fVxuICAgICAgICAgICAgdmFsdWU9e2lucHV0LnBhc3N3b3JkfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0T25DaGFuZ2V9XG4gICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBQYXNzd29yZC5cIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVkLmJ1dHRvbnNDb250YWluZXJ9PlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZWQuZm9ybUJ1dHRvbn0+U2lnbiBpbjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDxwPkRvbiZhcG9zO3QgaGF2ZSBhbiBhY2NvdW50IHlldD88L3A+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVNpZ25VcE9uQ2xpY2t9PkNsaWNrIGhlcmUgdG8gU2lnbiBVcDwvYnV0dG9uPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlZC5idXR0b25zQ29udGFpbmVyfT5cbiAgICAgICAgPHA+U2lnbiBpbiB3aXRoOjwvcD5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlZC5mb3JtQnV0dG9ufT5Hb29nbGU8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlZC5mb3JtQnV0dG9ufT5HaXRodWI8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlZC5mb3JtQnV0dG9ufT5GYWNlYm9vazwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaWduSW5Gb3JtO1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZm9ybUNvbnRhaW5lclwiOiBcIlNpZ25JbkZvcm1fZm9ybUNvbnRhaW5lcl9fMmwxazhcIixcblx0XCJmb3JtSW5wdXRcIjogXCJTaWduSW5Gb3JtX2Zvcm1JbnB1dF9fMlZmRzBcIixcblx0XCJmb3JtQnV0dG9uXCI6IFwiU2lnbkluRm9ybV9mb3JtQnV0dG9uX19DMVN5TlwiLFxuXHRcImJ1dHRvbnNDb250YWluZXJcIjogXCJTaWduSW5Gb3JtX2J1dHRvbnNDb250YWluZXJfXzNJTGdXXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICcuL1NpZ25JbkZvcm0ubW9kdWxlLnNjc3MnO1xuXG5jb25zdCBTaWduVXBGb3JtID0gKHsgaW5wdXQsIGhhbmRsZVNpZ25VcE9uQ2xpY2ssIGhhbmRsZVNpZ25TdWJtaXQsIGhhbmRsZUlucHV0T25DaGFuZ2UgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8Zm9ybSBjbGFzc05hbWU9e3N0eWxlZC5mb3JtQ29udGFpbmVyfSBvblN1Ym1pdD17aGFuZGxlU2lnblN1Ym1pdH0+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICBGaXJzdCBOYW1lOlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgbmFtZT1cImZpcnN0TmFtZVwiXG4gICAgICAgICAgICB2YWx1ZT17aW5wdXQuZmlyc05hbWV9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGZpcnN0IG5hbWUuXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dE9uQ2hhbmdlfVxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgTGFzdCBOYW1lOlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgbmFtZT1cImxhc3ROYW1lXCJcbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dC5sYXN0TmFtZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgbGFzdCBuYW1lLlwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRPbkNoYW5nZX1cbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIEVtYWlsOlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVkLmZvcm1JbnB1dH1cbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dC5lbWFpbH1cbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRPbkNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgRW1haWwuXCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIFBhc3N3b3JkOlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVkLmZvcm1JbnB1dH1cbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dC5wYXNzd29yZH1cbiAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRPbkNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUGFzc3dvcmQuXCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIENvbmZpcm0gUGFzc3dvcmQ6XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZWQuZm9ybUlucHV0fVxuICAgICAgICAgICAgdmFsdWU9e2lucHV0LmNvbmZpcm1QYXNzd29yZH1cbiAgICAgICAgICAgIG5hbWU9XCJjb25maXJtUGFzc3dvcmRcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0T25DaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbmZpcm0gUGFzc3dvcmQuXCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVkLmZvcm1CdXR0b259PlNpZ24gVXA8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDxwPkFscmVhZHkgaGF2ZSBhbiBhY2NvdW50PzwvcD5cbiAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlU2lnblVwT25DbGlja30+Q2xpY2sgaGVyZSB0byBTaWduIGluPC9idXR0b24+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVkLmJ1dHRvbnNDb250YWluZXJ9PlxuICAgICAgICA8cD5TaWduIFVwIHdpdGg6PC9wPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVkLmZvcm1CdXR0b259Pkdvb2dsZTwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVkLmZvcm1CdXR0b259PkdpdGh1YjwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVkLmZvcm1CdXR0b259PkZhY2Vib29rPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpZ25VcEZvcm07XG4iLCJleHBvcnQgY29uc3QgY29uZmlncyA9IHtcbiAgbmF2czogW1xuICAgIHtcbiAgICAgIG5hbWU6ICdMaWJyYXJ5JyxcbiAgICAgIGhyZWY6ICcvbGlicmFyeScsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnTXkgQmFyJyxcbiAgICAgIGhyZWY6ICcvbXliYXInLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0FQSScsXG4gICAgICBocmVmOiAnL2FwaVBhZ2UnLFxuICAgIH0sXG4gIF0sXG59O1xuXG5leHBvcnQgY29uc3QgYWxjb2hvbFR5cGVzID0gW1xuICAnR2luJyxcbiAgJ1doaXNrZXknLFxuICAnUnVtJyxcbiAgJ0JyYW5keScsXG4gICdDb2duYWMnLFxuICAnVm9ka2EnLFxuICAnVGVxdWlsYScsXG4gICdNZXpjYWwnLFxuICAnQ2FtcGFyaScsXG4gICdNYXJhc2NoaW5vJyxcbiAgJ1RyaXBsZSBTZWMnLFxuICAnU3dlZXQgVmVybW91dGgnLFxuICAnRHJ5IFZlcm1vdXRoJyxcbiAgJ1JlZCBXaW5lJyxcbiAgJ1doaXRlIFdpbmUnLFxuICAnQmVlcicsXG4gICdDb2ZmZWUgTGlxdWV1cicsXG4gICdDaG9jb2xhdGUgTGlxdWV1cicsXG4gICdIZXJiYWwgTGlxdWV1cicsXG4gICdBYnNpbnRoZScsXG4gICdDaGFtcGFnbmUnLFxuICAnU2FrZScsXG4gICdTb2p1JyxcbiAgJ1NhbWJ1Y2EnLFxuXTtcblxuY29uc3QgZGV2ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJztcblxuZXhwb3J0IGNvbnN0IHNlcnZlciA9IGRldiA/ICdodHRwOi8vbG9jYWxob3N0OjQwMDAnIDogJ2RlcGxveWVkIGJhY2stZW5kIHNpdGUnO1xuIiwiaW1wb3J0IHsgc2VydmVyIH0gZnJvbSAnLi4vY29uZmlncy9pbmRleCc7XG5cbmV4cG9ydCBjb25zdCBzaWduSW4gPSBhc3luYyBmb3JtRGF0YSA9PiB7XG4gIGF3YWl0IGZldGNoKGAke3NlcnZlcn0vYWNjb3VudGAsIHtcbiAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmb3JtRGF0YSksXG4gIH0pXG4gICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICB9KVxuICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVBY2NvdW50ID0gYXN5bmMgZm9ybURhdGEgPT4ge1xuICBhd2FpdCBmZXRjaChgJHtzZXJ2ZXJ9L2FjY291bnQvY3JlYXRlQWNjb3VudGAsIHtcbiAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmb3JtRGF0YSksXG4gIH0pXG4gICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnY3JlYXQgYWNjb3VudCBzdWNjZXNzJywgZGF0YSk7XG4gICAgfSlcbiAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTaWduSW5Gb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvTG9naW5Db21wb25lbnRzL1NpZ25JbkZvcm0nO1xuaW1wb3J0IFNpZ25VcEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Mb2dpbkNvbXBvbmVudHMvU2lnblVwRm9ybSc7XG5pbXBvcnQgeyBzaWduSW4sIGNyZWF0ZUFjY291bnQgfSBmcm9tICcuLi9oZWxwZXJzL2xvZ2luSGVscGVycyc7XG5cbmNvbnN0IGRlZmF1bHRJbnB1dCA9IHtcbiAgZW1haWw6ICcnLFxuICBwYXNzd29yZDogJycsXG4gIGNvbmZpcm1QYXNzd29yZDogJycsXG4gIGZpcnN0TmFtZTogJycsXG4gIGxhc3ROYW1lOiAnJyxcbn07XG5cbmNvbnN0IGxvZ2luID0gKCkgPT4ge1xuICBjb25zdCBbaXNTaWduVXAsIHNldElzU2lnblVwXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZShkZWZhdWx0SW5wdXQpO1xuXG4gIC8vIFZhbGlkYXRlIFNpZ24gVXAgcGFzc3dvcmRzLlxuICBjb25zdCBwYXNzd29yZFZhbGlkYXRpb24gPSAoKSA9PiB7XG4gICAgaWYgKGlucHV0LnBhc3N3b3JkID09PSBpbnB1dC5jb25maXJtUGFzc3dvcmQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBhbGVydChcIlBhc3N3b3JkcyBkb24ndCBtYXRjaFwiKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgLy9Ub2dnbGUgaXNTaWduVXAgc3RhdGUsIHNvIGRvZXMgY29tcG9uZW50c1xuICBjb25zdCBoYW5kbGVTaWduVXBPbkNsaWNrID0gKCkgPT4ge1xuICAgIHNldElzU2lnblVwKCFpc1NpZ25VcCk7XG4gICAgc2V0SW5wdXQoZGVmYXVsdElucHV0KTtcbiAgfTtcblxuICAvLyBIYW5kbGUgZm9ybSBpbnB1dCBjaGFuZ2UgZXZlbnQuXG4gIGNvbnN0IGhhbmRsZUlucHV0T25DaGFuZ2UgPSBlID0+IHtcbiAgICBzZXRJbnB1dCh7IC4uLmlucHV0LCBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pO1xuICB9O1xuXG4gIC8vIEhhbmRsZSBTaWduIEluIC8gU2lnbiBVcCBzdWJtaXQgZXZlbnQuXG4gIGNvbnN0IGhhbmRsZVNpZ25TdWJtaXQgPSBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gc2lnbiB1cCBvciBzaWduIGluIGFwaSBjYWxsLlxuICAgIGlmIChpc1NpZ25VcCAmJiBwYXNzd29yZFZhbGlkYXRpb24oKSkge1xuICAgICAgY3JlYXRlQWNjb3VudChpbnB1dCk7XG4gICAgfVxuICAgIGlmICghaXNTaWduVXApIHtcbiAgICAgIHNpZ25Jbih7ZW1haWw6IGlucHV0LmVtYWlsLCBwYXNzd29yZDogaW5wdXQucGFzc3dvcmR9KTtcbiAgICB9XG4gICAgc2V0SW5wdXQoZGVmYXVsdElucHV0KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7aXNTaWduVXAgPyAoXG4gICAgICAgIDxTaWduVXBGb3JtXG4gICAgICAgICAgaGFuZGxlU2lnblVwT25DbGljaz17aGFuZGxlU2lnblVwT25DbGlja31cbiAgICAgICAgICBoYW5kbGVJbnB1dE9uQ2hhbmdlPXtoYW5kbGVJbnB1dE9uQ2hhbmdlfVxuICAgICAgICAgIGhhbmRsZVNpZ25TdWJtaXQ9e2hhbmRsZVNpZ25TdWJtaXR9XG4gICAgICAgICAgaW5wdXQ9e2lucHV0fVxuICAgICAgICAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPFNpZ25JbkZvcm1cbiAgICAgICAgICBoYW5kbGVTaWduVXBPbkNsaWNrPXtoYW5kbGVTaWduVXBPbkNsaWNrfVxuICAgICAgICAgIGhhbmRsZUlucHV0T25DaGFuZ2U9e2hhbmRsZUlucHV0T25DaGFuZ2V9XG4gICAgICAgICAgaGFuZGxlU2lnblN1Ym1pdD17aGFuZGxlU2lnblN1Ym1pdH1cbiAgICAgICAgICBpbnB1dD17aW5wdXR9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9naW47XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==