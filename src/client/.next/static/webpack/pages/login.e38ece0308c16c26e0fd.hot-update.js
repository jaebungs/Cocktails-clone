webpackHotUpdate_N_E("pages/login",{

/***/ "./components/LoginComponents/SignInForm.js":
/*!**************************************************!*\
  !*** ./components/LoginComponents/SignInForm.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SignInForm_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SignInForm.module.scss */ "./components/LoginComponents/SignInForm.module.scss");
/* harmony import */ var _SignInForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_SignInForm_module_scss__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\jaebu\\Desktop\\cocktail-v2\\src\\client\\components\\LoginComponents\\SignInForm.js",
    _this = undefined;




var SignInForm = function SignInForm(_ref) {
  var input = _ref.input,
      handleSignUpOnClick = _ref.handleSignUpOnClick,
      handleSignSubmit = _ref.handleSignSubmit,
      handleInputOnChange = _ref.handleInputOnChange;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      className: _SignInForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.formContainer,
      onSubmit: handleSignSubmit,
      onChange: handleInputOnChange,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        children: ["Email:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "email",
          className: _SignInForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.formInput,
          value: input.email,
          name: "email",
          placeholder: "Enter Email.",
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        children: ["Password:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "password",
          className: _SignInForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.formInput,
          value: input.password,
          name: "password",
          placeholder: "Enter Password.",
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _SignInForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.buttonsContainer,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: _SignInForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.formButton,
          children: "Sign in"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "Don't have an account yet?"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: handleSignUpOnClick,
      children: "Click here to Sign Up"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _SignInForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.buttonsContainer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Sign in with:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: _SignInForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.formButton,
        children: "Google"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: _SignInForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.formButton,
        children: "Github"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: _SignInForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.formButton,
        children: "Facebook"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, _this);
};

_c = SignInForm;
/* harmony default export */ __webpack_exports__["default"] = (SignInForm);

var _c;

$RefreshReg$(_c, "SignInForm");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbkNvbXBvbmVudHMvU2lnbkluRm9ybS5qcyJdLCJuYW1lcyI6WyJTaWduSW5Gb3JtIiwiaW5wdXQiLCJoYW5kbGVTaWduVXBPbkNsaWNrIiwiaGFuZGxlU2lnblN1Ym1pdCIsImhhbmRsZUlucHV0T25DaGFuZ2UiLCJzdHlsZWQiLCJmb3JtQ29udGFpbmVyIiwiZm9ybUlucHV0IiwiZW1haWwiLCJwYXNzd29yZCIsImJ1dHRvbnNDb250YWluZXIiLCJmb3JtQnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUEyRTtBQUFBLE1BQXhFQyxLQUF3RSxRQUF4RUEsS0FBd0U7QUFBQSxNQUFqRUMsbUJBQWlFLFFBQWpFQSxtQkFBaUU7QUFBQSxNQUE1Q0MsZ0JBQTRDLFFBQTVDQSxnQkFBNEM7QUFBQSxNQUExQkMsbUJBQTBCLFFBQTFCQSxtQkFBMEI7QUFDNUYsc0JBQ0U7QUFBQSw0QkFDRTtBQUNFLGVBQVMsRUFBRUMsOERBQU0sQ0FBQ0MsYUFEcEI7QUFFRSxjQUFRLEVBQUVILGdCQUZaO0FBR0UsY0FBUSxFQUFFQyxtQkFIWjtBQUFBLDhCQUtFO0FBQUEsMENBRUU7QUFDRSxjQUFJLEVBQUMsT0FEUDtBQUVFLG1CQUFTLEVBQUVDLDhEQUFNLENBQUNFLFNBRnBCO0FBR0UsZUFBSyxFQUFFTixLQUFLLENBQUNPLEtBSGY7QUFJRSxjQUFJLEVBQUMsT0FKUDtBQUtFLHFCQUFXLEVBQUMsY0FMZDtBQU1FLGtCQUFRO0FBTlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMRixlQWdCRTtBQUFBLDZDQUVFO0FBQ0UsY0FBSSxFQUFDLFVBRFA7QUFFRSxtQkFBUyxFQUFFSCw4REFBTSxDQUFDRSxTQUZwQjtBQUdFLGVBQUssRUFBRU4sS0FBSyxDQUFDUSxRQUhmO0FBSUUsY0FBSSxFQUFDLFVBSlA7QUFLRSxxQkFBVyxFQUFDLGlCQUxkO0FBTUUsa0JBQVE7QUFOVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWhCRixlQTJCRTtBQUFLLGlCQUFTLEVBQUVKLDhEQUFNLENBQUNLLGdCQUF2QjtBQUFBLCtCQUNFO0FBQVEsbUJBQVMsRUFBRUwsOERBQU0sQ0FBQ00sVUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBM0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBZ0NFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBaENGLGVBaUNFO0FBQVEsYUFBTyxFQUFFVCxtQkFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFqQ0YsZUFrQ0U7QUFBSyxlQUFTLEVBQUVHLDhEQUFNLENBQUNLLGdCQUF2QjtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFRLGlCQUFTLEVBQUVMLDhEQUFNLENBQUNNLFVBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFHRTtBQUFRLGlCQUFTLEVBQUVOLDhEQUFNLENBQUNNLFVBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEYsZUFJRTtBQUFRLGlCQUFTLEVBQUVOLDhEQUFNLENBQUNNLFVBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMkNELENBNUNEOztLQUFNWCxVO0FBOENTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sb2dpbi5lMzhlY2UwMzA4YzE2YzI2ZTBmZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnLi9TaWduSW5Gb3JtLm1vZHVsZS5zY3NzJztcblxuY29uc3QgU2lnbkluRm9ybSA9ICh7IGlucHV0LCBoYW5kbGVTaWduVXBPbkNsaWNrLCBoYW5kbGVTaWduU3VibWl0LCBoYW5kbGVJbnB1dE9uQ2hhbmdlIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGZvcm1cbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZWQuZm9ybUNvbnRhaW5lcn1cbiAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVNpZ25TdWJtaXR9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dE9uQ2hhbmdlfVxuICAgICAgPlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgRW1haWw6XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZWQuZm9ybUlucHV0fVxuICAgICAgICAgICAgdmFsdWU9e2lucHV0LmVtYWlsfVxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgRW1haWwuXCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIFBhc3N3b3JkOlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVkLmZvcm1JbnB1dH1cbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dC5wYXNzd29yZH1cbiAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFBhc3N3b3JkLlwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZWQuYnV0dG9uc0NvbnRhaW5lcn0+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlZC5mb3JtQnV0dG9ufT5TaWduIGluPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgICAgPHA+RG9uJmFwb3M7dCBoYXZlIGFuIGFjY291bnQgeWV0PzwvcD5cbiAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlU2lnblVwT25DbGlja30+Q2xpY2sgaGVyZSB0byBTaWduIFVwPC9idXR0b24+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVkLmJ1dHRvbnNDb250YWluZXJ9PlxuICAgICAgICA8cD5TaWduIGluIHdpdGg6PC9wPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVkLmZvcm1CdXR0b259Pkdvb2dsZTwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVkLmZvcm1CdXR0b259PkdpdGh1YjwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVkLmZvcm1CdXR0b259PkZhY2Vib29rPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpZ25JbkZvcm07XG4iXSwic291cmNlUm9vdCI6IiJ9