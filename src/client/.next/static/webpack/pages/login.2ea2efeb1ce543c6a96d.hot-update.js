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
  }; // Handle form input change event.


  var handleInputOnChange = function handleInputOnChange(e) {
    setInput(_objectSpread(_objectSpread({}, input), {}, Object(C_Users_jaebu_Desktop_cocktail_v2_src_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, e.target.name, e.target.value)));
  }; // Handle Sign In / Sign Up submit event.


  var handleSignSubmit = function handleSignSubmit(e) {
    e.preventDefault();
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: isSignUp ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LoginComponents_SignUpForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
      handleSignUpOnClick: handleSignUpOnClick,
      handleInputOnChange: handleInputOnChange,
      handleSignSubmit: handleSignSubmit
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LoginComponents_SignInForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
      handleSignUpOnClick: handleSignUpOnClick,
      handleInputOnChange: handleInputOnChange,
      handleSignSubmit: handleSignSubmit
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanMiXSwibmFtZXMiOlsiZGVmYXVsdElucHV0IiwiZW1haWwiLCJwYXNzd29yZCIsImNvbmZpcm1QYXNzd29yZCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwibG9naW4iLCJ1c2VTdGF0ZSIsImlzU2lnblVwIiwic2V0SXNTaWduVXAiLCJpbnB1dCIsInNldElucHV0IiwiaGFuZGxlU2lnblVwT25DbGljayIsImhhbmRsZUlucHV0T25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiaGFuZGxlU2lnblN1Ym1pdCIsInByZXZlbnREZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFlBQVksR0FBRztBQUNuQkMsT0FBSyxFQUFFLEVBRFk7QUFFbkJDLFVBQVEsRUFBRSxFQUZTO0FBR25CQyxpQkFBZSxFQUFFLEVBSEU7QUFJbkJDLFdBQVMsRUFBRSxFQUpRO0FBS25CQyxVQUFRLEVBQUU7QUFMUyxDQUFyQjs7QUFRQSxJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQUEsa0JBQ2NDLHNEQUFRLENBQUMsS0FBRCxDQUR0QjtBQUFBLE1BQ1hDLFFBRFc7QUFBQSxNQUNEQyxXQURDOztBQUFBLG1CQUVRRixzREFBUSxDQUFDUCxZQUFELENBRmhCO0FBQUEsTUFFWFUsS0FGVztBQUFBLE1BRUpDLFFBRkksa0JBSWxCOzs7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLEdBQU07QUFDaENILGVBQVcsQ0FBQyxDQUFDRCxRQUFGLENBQVg7QUFDRCxHQUZELENBTGtCLENBU2xCOzs7QUFDQSxNQUFNSyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUNDLENBQUQsRUFBTztBQUNqQ0gsWUFBUSxpQ0FBS0QsS0FBTCw4SkFBYUksQ0FBQyxDQUFDQyxNQUFGLENBQVNDLElBQXRCLEVBQTZCRixDQUFDLENBQUNDLE1BQUYsQ0FBU0UsS0FBdEMsR0FBUjtBQUNELEdBRkQsQ0FWa0IsQ0FjbEI7OztBQUNBLE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0osQ0FBRCxFQUFPO0FBQzlCQSxLQUFDLENBQUNLLGNBQUY7QUFDRCxHQUZEOztBQUlBLHNCQUNFO0FBQUEsY0FDR1gsUUFBUSxnQkFDUCxxRUFBQyw4RUFBRDtBQUFZLHlCQUFtQixFQUFFSSxtQkFBakM7QUFBc0QseUJBQW1CLEVBQUVDLG1CQUEzRTtBQUFnRyxzQkFBZ0IsRUFBRUs7QUFBbEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURPLGdCQUdQLHFFQUFDLDhFQUFEO0FBQVkseUJBQW1CLEVBQUVOLG1CQUFqQztBQUFzRCx5QkFBbUIsRUFBRUMsbUJBQTNFO0FBQWdHLHNCQUFnQixFQUFFSztBQUFsSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBU0QsQ0E1QkQ7O0dBQU1aLEs7O0FBOEJTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sb2dpbi4yZWEyZWZlYjFjZTU0M2M2YTk2ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNpZ25JbkZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Mb2dpbkNvbXBvbmVudHMvU2lnbkluRm9ybSc7XG5pbXBvcnQgU2lnblVwRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL0xvZ2luQ29tcG9uZW50cy9TaWduVXBGb3JtJztcblxuY29uc3QgZGVmYXVsdElucHV0ID0ge1xuICBlbWFpbDogJycsXG4gIHBhc3N3b3JkOiAnJyxcbiAgY29uZmlybVBhc3N3b3JkOiAnJyxcbiAgZmlyc3ROYW1lOiAnJyxcbiAgbGFzdE5hbWU6ICcnXG59XG5cbmNvbnN0IGxvZ2luID0gKCkgPT4ge1xuICBjb25zdCBbaXNTaWduVXAsIHNldElzU2lnblVwXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZShkZWZhdWx0SW5wdXQpO1xuXG4gIC8vVG9nZ2xlIGlzU2lnblVwIHN0YXRlLCBzbyBkb2VzIGNvbXBvbmVudHNcbiAgY29uc3QgaGFuZGxlU2lnblVwT25DbGljayA9ICgpID0+IHtcbiAgICBzZXRJc1NpZ25VcCghaXNTaWduVXApO1xuICB9O1xuXG4gIC8vIEhhbmRsZSBmb3JtIGlucHV0IGNoYW5nZSBldmVudC5cbiAgY29uc3QgaGFuZGxlSW5wdXRPbkNoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0SW5wdXQoey4uLmlucHV0LCBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlfSlcbiAgfVxuXG4gIC8vIEhhbmRsZSBTaWduIEluIC8gU2lnbiBVcCBzdWJtaXQgZXZlbnQuXG4gIGNvbnN0IGhhbmRsZVNpZ25TdWJtaXQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtpc1NpZ25VcCA/IChcbiAgICAgICAgPFNpZ25VcEZvcm0gaGFuZGxlU2lnblVwT25DbGljaz17aGFuZGxlU2lnblVwT25DbGlja30gaGFuZGxlSW5wdXRPbkNoYW5nZT17aGFuZGxlSW5wdXRPbkNoYW5nZX0gaGFuZGxlU2lnblN1Ym1pdD17aGFuZGxlU2lnblN1Ym1pdH0vPlxuICAgICAgKSA6IChcbiAgICAgICAgPFNpZ25JbkZvcm0gaGFuZGxlU2lnblVwT25DbGljaz17aGFuZGxlU2lnblVwT25DbGlja30gaGFuZGxlSW5wdXRPbkNoYW5nZT17aGFuZGxlSW5wdXRPbkNoYW5nZX0gaGFuZGxlU2lnblN1Ym1pdD17aGFuZGxlU2lnblN1Ym1pdH0vPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvZ2luO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==