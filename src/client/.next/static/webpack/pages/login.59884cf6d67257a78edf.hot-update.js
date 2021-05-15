webpackHotUpdate_N_E("pages/login",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_LoginComponents_SignInForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/LoginComponents/SignInForm */ "./components/LoginComponents/SignInForm.js");
/* harmony import */ var _components_LoginComponents_SignUpForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/LoginComponents/SignUpForm */ "./components/LoginComponents/SignUpForm.js");


var _jsxFileName = "C:\\Users\\jaebu\\Desktop\\cocktail-v2\\src\\client\\pages\\login.js",
    _this = undefined,
    _s = $RefreshSig$();




var defaultInput = {
  email: '',
  password: '',
  confirmPassword: '',
  firstName: '',
  lastName: ''
};

var login = function login() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isSignUp = _useState[0],
      setIsSignUp = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(defaultInput),
      input = _useState2[0],
      setInput = _useState2[1]; //Toggle isSignUp state, so does components


  var handleSignUpOnClick = function handleSignUpOnClick() {
    setIsSignUp(!isSignUp);
  };

  var handleSignSubmit = function handleSignSubmit(e) {
    e.preventDefault();
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: isSignUp ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LoginComponents_SignUpForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
      handleSignUpOnClick: handleSignUpOnClick,
      setInput: setInput
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LoginComponents_SignInForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
      handleSignUpOnClick: handleSignUpOnClick,
      setInput: setInput
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, _this);
};

_s(login, "0MCYAx9GhZVvU9egyfu5DBe6GEQ=");

/* harmony default export */ __webpack_exports__["default"] = (login);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanMiXSwibmFtZXMiOlsiZGVmYXVsdElucHV0IiwiZW1haWwiLCJwYXNzd29yZCIsImNvbmZpcm1QYXNzd29yZCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwibG9naW4iLCJ1c2VTdGF0ZSIsImlzU2lnblVwIiwic2V0SXNTaWduVXAiLCJpbnB1dCIsInNldElucHV0IiwiaGFuZGxlU2lnblVwT25DbGljayIsImhhbmRsZVNpZ25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsWUFBWSxHQUFHO0FBQ25CQyxPQUFLLEVBQUUsRUFEWTtBQUVuQkMsVUFBUSxFQUFFLEVBRlM7QUFHbkJDLGlCQUFlLEVBQUUsRUFIRTtBQUluQkMsV0FBUyxFQUFFLEVBSlE7QUFLbkJDLFVBQVEsRUFBRTtBQUxTLENBQXJCOztBQVFBLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFBQSxrQkFDY0Msc0RBQVEsQ0FBQyxLQUFELENBRHRCO0FBQUEsTUFDWEMsUUFEVztBQUFBLE1BQ0RDLFdBREM7O0FBQUEsbUJBRVFGLHNEQUFRLENBQUNQLFlBQUQsQ0FGaEI7QUFBQSxNQUVYVSxLQUZXO0FBQUEsTUFFSkMsUUFGSSxrQkFJbEI7OztBQUNBLE1BQU1DLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsR0FBTTtBQUNoQ0gsZUFBVyxDQUFDLENBQUNELFFBQUYsQ0FBWDtBQUNELEdBRkQ7O0FBSUEsTUFBTUssZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxDQUFELEVBQU87QUFDOUJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNELEdBRkQ7O0FBSUEsc0JBQ0U7QUFBQSxjQUNHUCxRQUFRLGdCQUNQLHFFQUFDLDhFQUFEO0FBQVkseUJBQW1CLEVBQUVJLG1CQUFqQztBQUFzRCxjQUFRLEVBQUVEO0FBQWhFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFETyxnQkFHUCxxRUFBQyw4RUFBRDtBQUFZLHlCQUFtQixFQUFFQyxtQkFBakM7QUFBc0QsY0FBUSxFQUFFRDtBQUFoRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBU0QsQ0F0QkQ7O0dBQU1MLEs7O0FBd0JTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sb2dpbi41OTg4NGNmNmQ2NzI1N2E3OGVkZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNpZ25JbkZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Mb2dpbkNvbXBvbmVudHMvU2lnbkluRm9ybSc7XG5pbXBvcnQgU2lnblVwRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL0xvZ2luQ29tcG9uZW50cy9TaWduVXBGb3JtJztcblxuY29uc3QgZGVmYXVsdElucHV0ID0ge1xuICBlbWFpbDogJycsXG4gIHBhc3N3b3JkOiAnJyxcbiAgY29uZmlybVBhc3N3b3JkOiAnJyxcbiAgZmlyc3ROYW1lOiAnJyxcbiAgbGFzdE5hbWU6ICcnXG59XG5cbmNvbnN0IGxvZ2luID0gKCkgPT4ge1xuICBjb25zdCBbaXNTaWduVXAsIHNldElzU2lnblVwXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZShkZWZhdWx0SW5wdXQpO1xuXG4gIC8vVG9nZ2xlIGlzU2lnblVwIHN0YXRlLCBzbyBkb2VzIGNvbXBvbmVudHNcbiAgY29uc3QgaGFuZGxlU2lnblVwT25DbGljayA9ICgpID0+IHtcbiAgICBzZXRJc1NpZ25VcCghaXNTaWduVXApO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVNpZ25TdWJtaXQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtpc1NpZ25VcCA/IChcbiAgICAgICAgPFNpZ25VcEZvcm0gaGFuZGxlU2lnblVwT25DbGljaz17aGFuZGxlU2lnblVwT25DbGlja30gc2V0SW5wdXQ9e3NldElucHV0fS8+XG4gICAgICApIDogKFxuICAgICAgICA8U2lnbkluRm9ybSBoYW5kbGVTaWduVXBPbkNsaWNrPXtoYW5kbGVTaWduVXBPbkNsaWNrfSBzZXRJbnB1dD17c2V0SW5wdXR9Lz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2dpbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=