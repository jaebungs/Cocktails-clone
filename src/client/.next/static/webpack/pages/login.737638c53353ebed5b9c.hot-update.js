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
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
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
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _SignInForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.buttonsContainer,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: _SignInForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.formButton,
          children: "Sign in"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
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
      lineNumber: 36,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: handleSignUpOnClick,
      children: "Click here to Sign Up"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _SignInForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.buttonsContainer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Sign in with:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: _SignInForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.formButton,
        children: "Google"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: _SignInForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.formButton,
        children: "Github"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: _SignInForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.formButton,
        children: "Facebook"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbkNvbXBvbmVudHMvU2lnbkluRm9ybS5qcyJdLCJuYW1lcyI6WyJTaWduSW5Gb3JtIiwiaW5wdXQiLCJoYW5kbGVTaWduVXBPbkNsaWNrIiwiaGFuZGxlU2lnblN1Ym1pdCIsImhhbmRsZUlucHV0T25DaGFuZ2UiLCJzdHlsZWQiLCJmb3JtQ29udGFpbmVyIiwiZm9ybUlucHV0IiwiZW1haWwiLCJwYXNzd29yZCIsImJ1dHRvbnNDb250YWluZXIiLCJmb3JtQnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUEyRTtBQUFBLE1BQXhFQyxLQUF3RSxRQUF4RUEsS0FBd0U7QUFBQSxNQUFqRUMsbUJBQWlFLFFBQWpFQSxtQkFBaUU7QUFBQSxNQUE1Q0MsZ0JBQTRDLFFBQTVDQSxnQkFBNEM7QUFBQSxNQUExQkMsbUJBQTBCLFFBQTFCQSxtQkFBMEI7QUFDNUYsc0JBQ0U7QUFBQSw0QkFDRTtBQUFNLGVBQVMsRUFBRUMsOERBQU0sQ0FBQ0MsYUFBeEI7QUFBdUMsY0FBUSxFQUFFSCxnQkFBakQ7QUFBQSw4QkFDRTtBQUFBLDBDQUVFO0FBQ0UsY0FBSSxFQUFDLE9BRFA7QUFFRSxtQkFBUyxFQUFFRSw4REFBTSxDQUFDRSxTQUZwQjtBQUdFLGVBQUssRUFBRU4sS0FBSyxDQUFDTyxLQUhmO0FBSUUsa0JBQVEsRUFBRUosbUJBSlo7QUFLRSxjQUFJLEVBQUMsT0FMUDtBQU1FLHFCQUFXLEVBQUMsY0FOZDtBQU9FLGtCQUFRO0FBUFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQWFFO0FBQUEsNkNBRUU7QUFDRSxjQUFJLEVBQUMsVUFEUDtBQUVFLG1CQUFTLEVBQUVDLDhEQUFNLENBQUNFLFNBRnBCO0FBR0UsZUFBSyxFQUFFTixLQUFLLENBQUNRLFFBSGY7QUFJRSxrQkFBUSxFQUFFTCxtQkFKWjtBQUtFLGNBQUksRUFBQyxVQUxQO0FBTUUscUJBQVcsRUFBQyxpQkFOZDtBQU9FLGtCQUFRO0FBUFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFiRixlQXlCRTtBQUFLLGlCQUFTLEVBQUVDLDhEQUFNLENBQUNLLGdCQUF2QjtBQUFBLCtCQUNFO0FBQVEsbUJBQVMsRUFBRUwsOERBQU0sQ0FBQ00sVUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBekJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBOEJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBOUJGLGVBK0JFO0FBQVEsYUFBTyxFQUFFVCxtQkFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUEvQkYsZUFnQ0U7QUFBSyxlQUFTLEVBQUVHLDhEQUFNLENBQUNLLGdCQUF2QjtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFRLGlCQUFTLEVBQUVMLDhEQUFNLENBQUNNLFVBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFHRTtBQUFRLGlCQUFTLEVBQUVOLDhEQUFNLENBQUNNLFVBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEYsZUFJRTtBQUFRLGlCQUFTLEVBQUVOLDhEQUFNLENBQUNNLFVBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBaENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBeUNELENBMUNEOztLQUFNWCxVO0FBNENTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sb2dpbi43Mzc2MzhjNTMzNTNlYmVkNWI5Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnLi9TaWduSW5Gb3JtLm1vZHVsZS5zY3NzJztcblxuY29uc3QgU2lnbkluRm9ybSA9ICh7IGlucHV0LCBoYW5kbGVTaWduVXBPbkNsaWNrLCBoYW5kbGVTaWduU3VibWl0LCBoYW5kbGVJbnB1dE9uQ2hhbmdlIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGZvcm0gY2xhc3NOYW1lPXtzdHlsZWQuZm9ybUNvbnRhaW5lcn0gb25TdWJtaXQ9e2hhbmRsZVNpZ25TdWJtaXR9PlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgRW1haWw6XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZWQuZm9ybUlucHV0fVxuICAgICAgICAgICAgdmFsdWU9e2lucHV0LmVtYWlsfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0T25DaGFuZ2V9XG4gICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBFbWFpbC5cIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgUGFzc3dvcmQ6XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZWQuZm9ybUlucHV0fVxuICAgICAgICAgICAgdmFsdWU9e2lucHV0LnBhc3N3b3JkfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0T25DaGFuZ2V9XG4gICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBQYXNzd29yZC5cIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVkLmJ1dHRvbnNDb250YWluZXJ9PlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZWQuZm9ybUJ1dHRvbn0+U2lnbiBpbjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDxwPkRvbiZhcG9zO3QgaGF2ZSBhbiBhY2NvdW50IHlldD88L3A+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVNpZ25VcE9uQ2xpY2t9PkNsaWNrIGhlcmUgdG8gU2lnbiBVcDwvYnV0dG9uPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlZC5idXR0b25zQ29udGFpbmVyfT5cbiAgICAgICAgPHA+U2lnbiBpbiB3aXRoOjwvcD5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlZC5mb3JtQnV0dG9ufT5Hb29nbGU8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlZC5mb3JtQnV0dG9ufT5HaXRodWI8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlZC5mb3JtQnV0dG9ufT5GYWNlYm9vazwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaWduSW5Gb3JtO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==