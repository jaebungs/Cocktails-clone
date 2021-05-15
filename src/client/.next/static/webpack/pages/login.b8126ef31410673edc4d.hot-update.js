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
/* harmony import */ var C_Users_jaebu_Desktop_cocktail_v2_src_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_LoginComponents_SignInForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/LoginComponents/SignInForm */ "./components/LoginComponents/SignInForm.js");
/* harmony import */ var _components_LoginComponents_SignUpForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/LoginComponents/SignUpForm */ "./components/LoginComponents/SignUpForm.js");



var _jsxFileName = "C:\\Users\\jaebu\\Desktop\\cocktail-v2\\src\\client\\pages\\login.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_jaebu_Desktop_cocktail_v2_src_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var defaultInput = {
  email: '',
  password: '',
  confirmPassword: '',
  firstName: '',
  lastName: ''
};

var login = function login() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isSignUp = _useState[0],
      setIsSignUp = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(defaultInput),
      input = _useState2[0],
      setInput = _useState2[1]; //Toggle isSignUp state, so does components


  var handleSignUpOnClick = function handleSignUpOnClick() {
    setIsSignUp(!isSignUp);
    setInput(defaultInput);
  }; // Handle form input change event.


  var handleInputOnChange = function handleInputOnChange(e) {
    setInput(_objectSpread(_objectSpread({}, input), {}, Object(C_Users_jaebu_Desktop_cocktail_v2_src_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, e.target.name, e.target.value)));
  }; // Handle Sign In / Sign Up submit event.


  var handleSignSubmit = function handleSignSubmit(e) {
    e.preventDefault();
    console.log(input);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: isSignUp ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LoginComponents_SignUpForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
      handleSignUpOnClick: handleSignUpOnClick,
      handleInputOnChange: handleInputOnChange,
      handleSignSubmit: handleSignSubmit
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LoginComponents_SignInForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
      handleSignUpOnClick: handleSignUpOnClick,
      handleInputOnChange: handleInputOnChange,
      handleSignSubmit: handleSignSubmit
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanMiXSwibmFtZXMiOlsiZGVmYXVsdElucHV0IiwiZW1haWwiLCJwYXNzd29yZCIsImNvbmZpcm1QYXNzd29yZCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwibG9naW4iLCJ1c2VTdGF0ZSIsImlzU2lnblVwIiwic2V0SXNTaWduVXAiLCJpbnB1dCIsInNldElucHV0IiwiaGFuZGxlU2lnblVwT25DbGljayIsImhhbmRsZUlucHV0T25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiaGFuZGxlU2lnblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxZQUFZLEdBQUc7QUFDbkJDLE9BQUssRUFBRSxFQURZO0FBRW5CQyxVQUFRLEVBQUUsRUFGUztBQUduQkMsaUJBQWUsRUFBRSxFQUhFO0FBSW5CQyxXQUFTLEVBQUUsRUFKUTtBQUtuQkMsVUFBUSxFQUFFO0FBTFMsQ0FBckI7O0FBUUEsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUFBLGtCQUNjQyxzREFBUSxDQUFDLEtBQUQsQ0FEdEI7QUFBQSxNQUNYQyxRQURXO0FBQUEsTUFDREMsV0FEQzs7QUFBQSxtQkFFUUYsc0RBQVEsQ0FBQ1AsWUFBRCxDQUZoQjtBQUFBLE1BRVhVLEtBRlc7QUFBQSxNQUVKQyxRQUZJLGtCQUlsQjs7O0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixHQUFNO0FBQ2hDSCxlQUFXLENBQUMsQ0FBQ0QsUUFBRixDQUFYO0FBQ0FHLFlBQVEsQ0FBQ1gsWUFBRCxDQUFSO0FBQ0QsR0FIRCxDQUxrQixDQVVsQjs7O0FBQ0EsTUFBTWEsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFBQyxDQUFDLEVBQUk7QUFDL0JILFlBQVEsaUNBQU1ELEtBQU4sOEpBQWNJLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxJQUF2QixFQUE4QkYsQ0FBQyxDQUFDQyxNQUFGLENBQVNFLEtBQXZDLEdBQVI7QUFDRCxHQUZELENBWGtCLENBZWxCOzs7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUFKLENBQUMsRUFBSTtBQUM1QkEsS0FBQyxDQUFDSyxjQUFGO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZWCxLQUFaO0FBQ0QsR0FIRDs7QUFLQSxzQkFDRTtBQUFBLGNBQ0dGLFFBQVEsZ0JBQ1AscUVBQUMsOEVBQUQ7QUFDRSx5QkFBbUIsRUFBRUksbUJBRHZCO0FBRUUseUJBQW1CLEVBQUVDLG1CQUZ2QjtBQUdFLHNCQUFnQixFQUFFSztBQUhwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRE8sZ0JBT1AscUVBQUMsOEVBQUQ7QUFDRSx5QkFBbUIsRUFBRU4sbUJBRHZCO0FBRUUseUJBQW1CLEVBQUVDLG1CQUZ2QjtBQUdFLHNCQUFnQixFQUFFSztBQUhwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUko7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBaUJELENBdENEOztHQUFNWixLOztBQXdDU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uYjgxMjZlZjMxNDEwNjczZWRjNGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTaWduSW5Gb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvTG9naW5Db21wb25lbnRzL1NpZ25JbkZvcm0nO1xuaW1wb3J0IFNpZ25VcEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Mb2dpbkNvbXBvbmVudHMvU2lnblVwRm9ybSc7XG5cbmNvbnN0IGRlZmF1bHRJbnB1dCA9IHtcbiAgZW1haWw6ICcnLFxuICBwYXNzd29yZDogJycsXG4gIGNvbmZpcm1QYXNzd29yZDogJycsXG4gIGZpcnN0TmFtZTogJycsXG4gIGxhc3ROYW1lOiAnJyxcbn07XG5cbmNvbnN0IGxvZ2luID0gKCkgPT4ge1xuICBjb25zdCBbaXNTaWduVXAsIHNldElzU2lnblVwXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZShkZWZhdWx0SW5wdXQpO1xuXG4gIC8vVG9nZ2xlIGlzU2lnblVwIHN0YXRlLCBzbyBkb2VzIGNvbXBvbmVudHNcbiAgY29uc3QgaGFuZGxlU2lnblVwT25DbGljayA9ICgpID0+IHtcbiAgICBzZXRJc1NpZ25VcCghaXNTaWduVXApO1xuICAgIHNldElucHV0KGRlZmF1bHRJbnB1dCk7XG4gIH07XG5cbiAgLy8gSGFuZGxlIGZvcm0gaW5wdXQgY2hhbmdlIGV2ZW50LlxuICBjb25zdCBoYW5kbGVJbnB1dE9uQ2hhbmdlID0gZSA9PiB7XG4gICAgc2V0SW5wdXQoeyAuLi5pbnB1dCwgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgfTtcblxuICAvLyBIYW5kbGUgU2lnbiBJbiAvIFNpZ24gVXAgc3VibWl0IGV2ZW50LlxuICBjb25zdCBoYW5kbGVTaWduU3VibWl0ID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKGlucHV0KVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtpc1NpZ25VcCA/IChcbiAgICAgICAgPFNpZ25VcEZvcm1cbiAgICAgICAgICBoYW5kbGVTaWduVXBPbkNsaWNrPXtoYW5kbGVTaWduVXBPbkNsaWNrfVxuICAgICAgICAgIGhhbmRsZUlucHV0T25DaGFuZ2U9e2hhbmRsZUlucHV0T25DaGFuZ2V9XG4gICAgICAgICAgaGFuZGxlU2lnblN1Ym1pdD17aGFuZGxlU2lnblN1Ym1pdH1cbiAgICAgICAgLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxTaWduSW5Gb3JtXG4gICAgICAgICAgaGFuZGxlU2lnblVwT25DbGljaz17aGFuZGxlU2lnblVwT25DbGlja31cbiAgICAgICAgICBoYW5kbGVJbnB1dE9uQ2hhbmdlPXtoYW5kbGVJbnB1dE9uQ2hhbmdlfVxuICAgICAgICAgIGhhbmRsZVNpZ25TdWJtaXQ9e2hhbmRsZVNpZ25TdWJtaXR9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9naW47XG4iXSwic291cmNlUm9vdCI6IiJ9