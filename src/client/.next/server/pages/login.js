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
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _SignInForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.buttonsContainer,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: _SignInForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.formButton,
          onClick: handleSignUpOnClick,
          children: "Sign Up"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
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
      lineNumber: 70,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: handleSignUpOnClick,
      children: "Click here to Sign in"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _SignInForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.buttonsContainer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Sign Up with:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: _SignInForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.formButton,
        children: "Google"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: _SignInForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.formButton,
        children: "Github"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: _SignInForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.formButton,
        children: "Facebook"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 72,
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
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(defaultInput); //Toggle isSignUp state, so does components

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
    e.preventDefault();
    setInput(defaultInput);
    console.log(input);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: isSignUp ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LoginComponents_SignUpForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
      handleSignUpOnClick: handleSignUpOnClick,
      handleInputOnChange: handleInputOnChange,
      handleSignSubmit: handleSignSubmit,
      input: input
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LoginComponents_SignInForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
      handleSignUpOnClick: handleSignUpOnClick,
      handleInputOnChange: handleInputOnChange,
      handleSignSubmit: handleSignSubmit,
      input: input
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 37,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2dpbkNvbXBvbmVudHMvU2lnbkluRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvZ2luQ29tcG9uZW50cy9TaWduSW5Gb3JtLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTG9naW5Db21wb25lbnRzL1NpZ25VcEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvbG9naW4uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJTaWduSW5Gb3JtIiwiaW5wdXQiLCJoYW5kbGVTaWduVXBPbkNsaWNrIiwiaGFuZGxlU2lnblN1Ym1pdCIsImhhbmRsZUlucHV0T25DaGFuZ2UiLCJzdHlsZWQiLCJmb3JtQ29udGFpbmVyIiwiZm9ybUlucHV0IiwiZW1haWwiLCJwYXNzd29yZCIsImJ1dHRvbnNDb250YWluZXIiLCJmb3JtQnV0dG9uIiwiU2lnblVwRm9ybSIsImZpcnNOYW1lIiwibGFzdE5hbWUiLCJjb25maXJtUGFzc3dvcmQiLCJkZWZhdWx0SW5wdXQiLCJmaXJzdE5hbWUiLCJsb2dpbiIsImlzU2lnblVwIiwic2V0SXNTaWduVXAiLCJ1c2VTdGF0ZSIsInNldElucHV0IiwiZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FB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SSxjQUFGO0FBRUFMLFlBQVEsQ0FBQ04sWUFBRCxDQUFSO0FBQ0FZLFdBQU8sQ0FBQ0MsR0FBUixDQUFZNUIsS0FBWjtBQUNELEdBTEQ7O0FBT0Esc0JBQ0U7QUFBQSxjQUNHa0IsUUFBUSxnQkFDUCxxRUFBQyw4RUFBRDtBQUNFLHlCQUFtQixFQUFFakIsbUJBRHZCO0FBRUUseUJBQW1CLEVBQUVFLG1CQUZ2QjtBQUdFLHNCQUFnQixFQUFFRCxnQkFIcEI7QUFJRSxXQUFLLEVBQUVGO0FBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFETyxnQkFRUCxxRUFBQyw4RUFBRDtBQUNFLHlCQUFtQixFQUFFQyxtQkFEdkI7QUFFRSx5QkFBbUIsRUFBRUUsbUJBRnZCO0FBR0Usc0JBQWdCLEVBQUVELGdCQUhwQjtBQUlFLFdBQUssRUFBRUY7QUFKVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBbUJELENBMUNEOztBQTRDZWlCLG9FQUFmLEU7Ozs7Ozs7Ozs7O0FDeERBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2xvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9sb2dpbi5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJy4vU2lnbkluRm9ybS5tb2R1bGUuc2Nzcyc7XG5cbmNvbnN0IFNpZ25JbkZvcm0gPSAoeyBpbnB1dCwgaGFuZGxlU2lnblVwT25DbGljaywgaGFuZGxlU2lnblN1Ym1pdCwgaGFuZGxlSW5wdXRPbkNoYW5nZSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxmb3JtIGNsYXNzTmFtZT17c3R5bGVkLmZvcm1Db250YWluZXJ9IG9uU3VibWl0PXtoYW5kbGVTaWduU3VibWl0fT5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIEVtYWlsOlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVkLmZvcm1JbnB1dH1cbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dC5lbWFpbH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dE9uQ2hhbmdlfVxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgRW1haWwuXCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIFBhc3N3b3JkOlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVkLmZvcm1JbnB1dH1cbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dC5wYXNzd29yZH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dE9uQ2hhbmdlfVxuICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUGFzc3dvcmQuXCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlZC5idXR0b25zQ29udGFpbmVyfT5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVkLmZvcm1CdXR0b259PlNpZ24gaW48L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgICA8cD5Eb24mYXBvczt0IGhhdmUgYW4gYWNjb3VudCB5ZXQ/PC9wPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTaWduVXBPbkNsaWNrfT5DbGljayBoZXJlIHRvIFNpZ24gVXA8L2J1dHRvbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZWQuYnV0dG9uc0NvbnRhaW5lcn0+XG4gICAgICAgIDxwPlNpZ24gaW4gd2l0aDo8L3A+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZWQuZm9ybUJ1dHRvbn0+R29vZ2xlPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZWQuZm9ybUJ1dHRvbn0+R2l0aHViPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZWQuZm9ybUJ1dHRvbn0+RmFjZWJvb2s8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2lnbkluRm9ybTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImZvcm1Db250YWluZXJcIjogXCJTaWduSW5Gb3JtX2Zvcm1Db250YWluZXJfXzJsMWs4XCIsXG5cdFwiZm9ybUlucHV0XCI6IFwiU2lnbkluRm9ybV9mb3JtSW5wdXRfXzJWZkcwXCIsXG5cdFwiZm9ybUJ1dHRvblwiOiBcIlNpZ25JbkZvcm1fZm9ybUJ1dHRvbl9fQzFTeU5cIixcblx0XCJidXR0b25zQ29udGFpbmVyXCI6IFwiU2lnbkluRm9ybV9idXR0b25zQ29udGFpbmVyX18zSUxnV1wiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnLi9TaWduSW5Gb3JtLm1vZHVsZS5zY3NzJztcblxuY29uc3QgU2lnblVwRm9ybSA9ICh7IGlucHV0LCBoYW5kbGVTaWduVXBPbkNsaWNrLCBoYW5kbGVTaWduU3VibWl0LCBoYW5kbGVJbnB1dE9uQ2hhbmdlIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGZvcm0gY2xhc3NOYW1lPXtzdHlsZWQuZm9ybUNvbnRhaW5lcn0gb25TdWJtaXQ9e2hhbmRsZVNpZ25TdWJtaXR9PlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgRmlyc3QgTmFtZTpcbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIG5hbWU9XCJmaXJzdE5hbWVcIlxuICAgICAgICAgICAgdmFsdWU9e2lucHV0LmZpcnNOYW1lfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBmaXJzdCBuYW1lLlwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRPbkNoYW5nZX1cbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIExhc3QgTmFtZTpcbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIG5hbWU9XCJsYXN0TmFtZVwiXG4gICAgICAgICAgICB2YWx1ZT17aW5wdXQubGFzdE5hbWV9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGxhc3QgbmFtZS5cIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0T25DaGFuZ2V9XG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICBFbWFpbDpcbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlZC5mb3JtSW5wdXR9XG4gICAgICAgICAgICB2YWx1ZT17aW5wdXQuZW1haWx9XG4gICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0T25DaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIEVtYWlsLlwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICBQYXNzd29yZDpcbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlZC5mb3JtSW5wdXR9XG4gICAgICAgICAgICB2YWx1ZT17aW5wdXQucGFzc3dvcmR9XG4gICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0T25DaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFBhc3N3b3JkLlwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICBDb25maXJtIFBhc3N3b3JkOlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVkLmZvcm1JbnB1dH1cbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dC5jb25maXJtUGFzc3dvcmR9XG4gICAgICAgICAgICBuYW1lPVwiY29uZmlybVBhc3N3b3JkXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dE9uQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb25maXJtIFBhc3N3b3JkLlwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZWQuYnV0dG9uc0NvbnRhaW5lcn0+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlZC5mb3JtQnV0dG9ufSBvbkNsaWNrPXtoYW5kbGVTaWduVXBPbkNsaWNrfT5cbiAgICAgICAgICAgIFNpZ24gVXBcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgICA8cD5BbHJlYWR5IGhhdmUgYW4gYWNjb3VudD88L3A+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVNpZ25VcE9uQ2xpY2t9PkNsaWNrIGhlcmUgdG8gU2lnbiBpbjwvYnV0dG9uPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlZC5idXR0b25zQ29udGFpbmVyfT5cbiAgICAgICAgPHA+U2lnbiBVcCB3aXRoOjwvcD5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlZC5mb3JtQnV0dG9ufT5Hb29nbGU8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlZC5mb3JtQnV0dG9ufT5HaXRodWI8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlZC5mb3JtQnV0dG9ufT5GYWNlYm9vazwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaWduVXBGb3JtO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNpZ25JbkZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Mb2dpbkNvbXBvbmVudHMvU2lnbkluRm9ybSc7XG5pbXBvcnQgU2lnblVwRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL0xvZ2luQ29tcG9uZW50cy9TaWduVXBGb3JtJztcblxuY29uc3QgZGVmYXVsdElucHV0ID0ge1xuICBlbWFpbDogJycsXG4gIHBhc3N3b3JkOiAnJyxcbiAgY29uZmlybVBhc3N3b3JkOiAnJyxcbiAgZmlyc3ROYW1lOiAnJyxcbiAgbGFzdE5hbWU6ICcnLFxufTtcblxuY29uc3QgbG9naW4gPSAoKSA9PiB7XG4gIGNvbnN0IFtpc1NpZ25VcCwgc2V0SXNTaWduVXBdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKGRlZmF1bHRJbnB1dCk7XG5cbiAgLy9Ub2dnbGUgaXNTaWduVXAgc3RhdGUsIHNvIGRvZXMgY29tcG9uZW50c1xuICBjb25zdCBoYW5kbGVTaWduVXBPbkNsaWNrID0gKCkgPT4ge1xuICAgIHNldElzU2lnblVwKCFpc1NpZ25VcCk7XG4gICAgc2V0SW5wdXQoZGVmYXVsdElucHV0KTtcbiAgfTtcblxuICAvLyBIYW5kbGUgZm9ybSBpbnB1dCBjaGFuZ2UgZXZlbnQuXG4gIGNvbnN0IGhhbmRsZUlucHV0T25DaGFuZ2UgPSBlID0+IHtcbiAgICBzZXRJbnB1dCh7IC4uLmlucHV0LCBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pO1xuICB9O1xuXG4gIC8vIEhhbmRsZSBTaWduIEluIC8gU2lnbiBVcCBzdWJtaXQgZXZlbnQuXG4gIGNvbnN0IGhhbmRsZVNpZ25TdWJtaXQgPSBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBzZXRJbnB1dChkZWZhdWx0SW5wdXQpO1xuICAgIGNvbnNvbGUubG9nKGlucHV0KVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtpc1NpZ25VcCA/IChcbiAgICAgICAgPFNpZ25VcEZvcm1cbiAgICAgICAgICBoYW5kbGVTaWduVXBPbkNsaWNrPXtoYW5kbGVTaWduVXBPbkNsaWNrfVxuICAgICAgICAgIGhhbmRsZUlucHV0T25DaGFuZ2U9e2hhbmRsZUlucHV0T25DaGFuZ2V9XG4gICAgICAgICAgaGFuZGxlU2lnblN1Ym1pdD17aGFuZGxlU2lnblN1Ym1pdH1cbiAgICAgICAgICBpbnB1dD17aW5wdXR9XG4gICAgICAgIC8+XG4gICAgICApIDogKFxuICAgICAgICA8U2lnbkluRm9ybVxuICAgICAgICAgIGhhbmRsZVNpZ25VcE9uQ2xpY2s9e2hhbmRsZVNpZ25VcE9uQ2xpY2t9XG4gICAgICAgICAgaGFuZGxlSW5wdXRPbkNoYW5nZT17aGFuZGxlSW5wdXRPbkNoYW5nZX1cbiAgICAgICAgICBoYW5kbGVTaWduU3VibWl0PXtoYW5kbGVTaWduU3VibWl0fVxuICAgICAgICAgIGlucHV0PXtpbnB1dH1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2dpbjtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9