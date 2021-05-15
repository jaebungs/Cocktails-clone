webpackHotUpdate_N_E("pages/login",{

/***/ "./components/LoginComponents/SignUpForm.js":
/*!**************************************************!*\
  !*** ./components/LoginComponents/SignUpForm.js ***!
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


var _jsxFileName = "C:\\Users\\jaebu\\Desktop\\cocktail-v2\\src\\client\\components\\LoginComponents\\SignUpForm.js",
    _this = undefined;




var SignUpForm = function SignUpForm(_ref) {
  var input = _ref.input,
      handleSignUpOnClick = _ref.handleSignUpOnClick,
      handleSignSubmit = _ref.handleSignSubmit,
      handleInputOnChange = _ref.handleInputOnChange;
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
          lineNumber: 14,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        children: ["Last Name:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          name: "lastName",
          value: input.lastName,
          placeholder: "Enter last name.",
          onChange: handleInputOnChange,
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
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
          lineNumber: 22,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
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
          lineNumber: 34,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
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
          lineNumber: 46,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _SignInForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.buttonsContainer,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: _SignInForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.formButton,
          onClick: handleSignUpOnClick,
          children: "Sign Up"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "Already have an account?"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: handleSignUpOnClick,
      children: "Click here to Sign in"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _SignInForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.buttonsContainer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Sign Up with:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: _SignInForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.formButton,
        children: "Google"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: _SignInForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.formButton,
        children: "Github"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: _SignInForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.formButton,
        children: "Facebook"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, _this);
};

_c = SignUpForm;
/* harmony default export */ __webpack_exports__["default"] = (SignUpForm);

var _c;

$RefreshReg$(_c, "SignUpForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbkNvbXBvbmVudHMvU2lnblVwRm9ybS5qcyJdLCJuYW1lcyI6WyJTaWduVXBGb3JtIiwiaW5wdXQiLCJoYW5kbGVTaWduVXBPbkNsaWNrIiwiaGFuZGxlU2lnblN1Ym1pdCIsImhhbmRsZUlucHV0T25DaGFuZ2UiLCJzdHlsZWQiLCJmb3JtQ29udGFpbmVyIiwiZmlyc05hbWUiLCJsYXN0TmFtZSIsImZvcm1JbnB1dCIsImVtYWlsIiwicGFzc3dvcmQiLCJjb25maXJtUGFzc3dvcmQiLCJidXR0b25zQ29udGFpbmVyIiwiZm9ybUJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBMkU7QUFBQSxNQUF4RUMsS0FBd0UsUUFBeEVBLEtBQXdFO0FBQUEsTUFBakVDLG1CQUFpRSxRQUFqRUEsbUJBQWlFO0FBQUEsTUFBNUNDLGdCQUE0QyxRQUE1Q0EsZ0JBQTRDO0FBQUEsTUFBMUJDLG1CQUEwQixRQUExQkEsbUJBQTBCO0FBQzVGLHNCQUNFO0FBQUEsNEJBQ0U7QUFDRSxlQUFTLEVBQUVDLDhEQUFNLENBQUNDLGFBRHBCO0FBRUUsY0FBUSxFQUFFSCxnQkFGWjtBQUFBLDhCQUtFO0FBQUEsK0NBRUU7QUFBTyxjQUFJLEVBQUMsV0FBWjtBQUF3QixlQUFLLEVBQUVGLEtBQUssQ0FBQ00sUUFBckM7QUFBK0MscUJBQVcsRUFBQyxtQkFBM0Q7QUFBK0Usa0JBQVEsRUFBRUgsbUJBQXpGO0FBQThHLGtCQUFRO0FBQXRIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEYsZUFTRTtBQUFBLDhDQUVFO0FBQU8sY0FBSSxFQUFDLFVBQVo7QUFBdUIsZUFBSyxFQUFFSCxLQUFLLENBQUNPLFFBQXBDO0FBQThDLHFCQUFXLEVBQUMsa0JBQTFEO0FBQTZFLGtCQUFRLEVBQUVKLG1CQUF2RjtBQUE0RyxrQkFBUTtBQUFwSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVRGLGVBYUU7QUFBQSwwQ0FFRTtBQUNFLGNBQUksRUFBQyxPQURQO0FBRUUsbUJBQVMsRUFBRUMsOERBQU0sQ0FBQ0ksU0FGcEI7QUFHRSxlQUFLLEVBQUVSLEtBQUssQ0FBQ1MsS0FIZjtBQUlFLGNBQUksRUFBQyxPQUpQO0FBS0Usa0JBQVEsRUFBRU4sbUJBTFo7QUFNRSxxQkFBVyxFQUFDLGNBTmQ7QUFPRSxrQkFBUTtBQVBWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBYkYsZUF5QkU7QUFBQSw2Q0FFRTtBQUNFLGNBQUksRUFBQyxVQURQO0FBRUUsbUJBQVMsRUFBRUMsOERBQU0sQ0FBQ0ksU0FGcEI7QUFHRSxlQUFLLEVBQUVSLEtBQUssQ0FBQ1UsUUFIZjtBQUlFLGNBQUksRUFBQyxVQUpQO0FBS0Usa0JBQVEsRUFBRVAsbUJBTFo7QUFNRSxxQkFBVyxFQUFDLGlCQU5kO0FBT0Usa0JBQVE7QUFQVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXpCRixlQXFDRTtBQUFBLHFEQUVFO0FBQ0UsY0FBSSxFQUFDLFVBRFA7QUFFRSxtQkFBUyxFQUFFQyw4REFBTSxDQUFDSSxTQUZwQjtBQUdFLGVBQUssRUFBRVIsS0FBSyxDQUFDVyxlQUhmO0FBSUUsY0FBSSxFQUFDLGlCQUpQO0FBS0Usa0JBQVEsRUFBRVIsbUJBTFo7QUFNRSxxQkFBVyxFQUFDLG1CQU5kO0FBT0Usa0JBQVE7QUFQVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXJDRixlQWlERTtBQUFLLGlCQUFTLEVBQUVDLDhEQUFNLENBQUNRLGdCQUF2QjtBQUFBLCtCQUNFO0FBQVEsbUJBQVMsRUFBRVIsOERBQU0sQ0FBQ1MsVUFBMUI7QUFBc0MsaUJBQU8sRUFBRVosbUJBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWpERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQXdERTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXhERixlQXlERTtBQUFRLGFBQU8sRUFBRUEsbUJBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBekRGLGVBMERFO0FBQUssZUFBUyxFQUFFRyw4REFBTSxDQUFDUSxnQkFBdkI7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBUSxpQkFBUyxFQUFFUiw4REFBTSxDQUFDUyxVQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBR0U7QUFBUSxpQkFBUyxFQUFFVCw4REFBTSxDQUFDUyxVQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGLGVBSUU7QUFBUSxpQkFBUyxFQUFFVCw4REFBTSxDQUFDUyxVQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW1FRCxDQXBFRDs7S0FBTWQsVTtBQXNFU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uZDkwY2YxODdlMzgxYjVlYjIwOWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJy4vU2lnbkluRm9ybS5tb2R1bGUuc2Nzcyc7XG5cbmNvbnN0IFNpZ25VcEZvcm0gPSAoeyBpbnB1dCwgaGFuZGxlU2lnblVwT25DbGljaywgaGFuZGxlU2lnblN1Ym1pdCwgaGFuZGxlSW5wdXRPbkNoYW5nZSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxmb3JtXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVkLmZvcm1Db250YWluZXJ9XG4gICAgICAgIG9uU3VibWl0PXtoYW5kbGVTaWduU3VibWl0fVxuICAgICAgICBcbiAgICAgID5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIEZpcnN0IE5hbWU6XG4gICAgICAgICAgPGlucHV0IG5hbWU9XCJmaXJzdE5hbWVcIiB2YWx1ZT17aW5wdXQuZmlyc05hbWV9IHBsYWNlaG9sZGVyPVwiRW50ZXIgZmlyc3QgbmFtZS5cIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRPbkNoYW5nZX0gcmVxdWlyZWQgLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIExhc3QgTmFtZTpcbiAgICAgICAgICA8aW5wdXQgbmFtZT1cImxhc3ROYW1lXCIgdmFsdWU9e2lucHV0Lmxhc3ROYW1lfSBwbGFjZWhvbGRlcj1cIkVudGVyIGxhc3QgbmFtZS5cIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRPbkNoYW5nZX0gcmVxdWlyZWQgLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIEVtYWlsOlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVkLmZvcm1JbnB1dH1cbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dC5lbWFpbH1cbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRPbkNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgRW1haWwuXCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIFBhc3N3b3JkOlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVkLmZvcm1JbnB1dH1cbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dC5wYXNzd29yZH1cbiAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRPbkNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUGFzc3dvcmQuXCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIENvbmZpcm0gUGFzc3dvcmQ6XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZWQuZm9ybUlucHV0fVxuICAgICAgICAgICAgdmFsdWU9e2lucHV0LmNvbmZpcm1QYXNzd29yZH1cbiAgICAgICAgICAgIG5hbWU9XCJjb25maXJtUGFzc3dvcmRcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0T25DaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbmZpcm0gUGFzc3dvcmQuXCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlZC5idXR0b25zQ29udGFpbmVyfT5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVkLmZvcm1CdXR0b259IG9uQ2xpY2s9e2hhbmRsZVNpZ25VcE9uQ2xpY2t9PlxuICAgICAgICAgICAgU2lnbiBVcFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDxwPkFscmVhZHkgaGF2ZSBhbiBhY2NvdW50PzwvcD5cbiAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlU2lnblVwT25DbGlja30+Q2xpY2sgaGVyZSB0byBTaWduIGluPC9idXR0b24+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVkLmJ1dHRvbnNDb250YWluZXJ9PlxuICAgICAgICA8cD5TaWduIFVwIHdpdGg6PC9wPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVkLmZvcm1CdXR0b259Pkdvb2dsZTwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVkLmZvcm1CdXR0b259PkdpdGh1YjwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVkLmZvcm1CdXR0b259PkZhY2Vib29rPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpZ25VcEZvcm07XG4iXSwic291cmNlUm9vdCI6IiJ9