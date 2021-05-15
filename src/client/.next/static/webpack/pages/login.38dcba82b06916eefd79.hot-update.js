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
      setInput = _useState2[1]; // Validate Sign Up passwords.


  var passwordValidation = function passwordValidation() {
    if (isSignUp) {
      if (input.password === input.confirmPassword) {
        return true;
      } else {
        alert("Passwords don't match");
        return false;
      }
    }
  }; //Toggle isSignUp state, so does components


  var handleSignUpOnClick = function handleSignUpOnClick() {
    setIsSignUp(!isSignUp);
    setInput(defaultInput);
  }; // Handle form input change event.


  var handleInputOnChange = function handleInputOnChange(e) {
    setInput(_objectSpread(_objectSpread({}, input), {}, Object(C_Users_jaebu_Desktop_cocktail_v2_src_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, e.target.name, e.target.value)));
  }; // Handle Sign In / Sign Up submit event.


  var handleSignSubmit = function handleSignSubmit(e) {
    e.preventDefault();

    if (passwordValidation()) {
      console.log('sign up success');
    }

    setInput(defaultInput);
    console.log(input);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: isSignUp ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LoginComponents_SignUpForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
      handleSignUpOnClick: handleSignUpOnClick,
      handleInputOnChange: handleInputOnChange,
      handleSignSubmit: handleSignSubmit,
      input: input
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LoginComponents_SignInForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
      handleSignUpOnClick: handleSignUpOnClick,
      handleInputOnChange: handleInputOnChange,
      handleSignSubmit: handleSignSubmit,
      input: input
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 50,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanMiXSwibmFtZXMiOlsiZGVmYXVsdElucHV0IiwiZW1haWwiLCJwYXNzd29yZCIsImNvbmZpcm1QYXNzd29yZCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwibG9naW4iLCJ1c2VTdGF0ZSIsImlzU2lnblVwIiwic2V0SXNTaWduVXAiLCJpbnB1dCIsInNldElucHV0IiwicGFzc3dvcmRWYWxpZGF0aW9uIiwiYWxlcnQiLCJoYW5kbGVTaWduVXBPbkNsaWNrIiwiaGFuZGxlSW5wdXRPbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJoYW5kbGVTaWduU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFlBQVksR0FBRztBQUNuQkMsT0FBSyxFQUFFLEVBRFk7QUFFbkJDLFVBQVEsRUFBRSxFQUZTO0FBR25CQyxpQkFBZSxFQUFFLEVBSEU7QUFJbkJDLFdBQVMsRUFBRSxFQUpRO0FBS25CQyxVQUFRLEVBQUU7QUFMUyxDQUFyQjs7QUFRQSxJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQUEsa0JBQ2NDLHNEQUFRLENBQUMsS0FBRCxDQUR0QjtBQUFBLE1BQ1hDLFFBRFc7QUFBQSxNQUNEQyxXQURDOztBQUFBLG1CQUVRRixzREFBUSxDQUFDUCxZQUFELENBRmhCO0FBQUEsTUFFWFUsS0FGVztBQUFBLE1BRUpDLFFBRkksa0JBSWxCOzs7QUFDQSxNQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLEdBQU07QUFDL0IsUUFBSUosUUFBSixFQUFjO0FBQ1osVUFBSUUsS0FBSyxDQUFDUixRQUFOLEtBQW1CUSxLQUFLLENBQUNQLGVBQTdCLEVBQThDO0FBQzVDLGVBQU8sSUFBUDtBQUNELE9BRkQsTUFFTztBQUNMVSxhQUFLLENBQUMsdUJBQUQsQ0FBTDtBQUNBLGVBQU8sS0FBUDtBQUNEO0FBQ0Y7QUFDRixHQVRELENBTGtCLENBZWxCOzs7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLEdBQU07QUFDaENMLGVBQVcsQ0FBQyxDQUFDRCxRQUFGLENBQVg7QUFDQUcsWUFBUSxDQUFDWCxZQUFELENBQVI7QUFDRCxHQUhELENBaEJrQixDQXFCbEI7OztBQUNBLE1BQU1lLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQUMsQ0FBQyxFQUFJO0FBQy9CTCxZQUFRLGlDQUFNRCxLQUFOLDhKQUFjTSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsSUFBdkIsRUFBOEJGLENBQUMsQ0FBQ0MsTUFBRixDQUFTRSxLQUF2QyxHQUFSO0FBQ0QsR0FGRCxDQXRCa0IsQ0EwQmxCOzs7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUFKLENBQUMsRUFBSTtBQUM1QkEsS0FBQyxDQUFDSyxjQUFGOztBQUNBLFFBQUlULGtCQUFrQixFQUF0QixFQUEwQjtBQUN4QlUsYUFBTyxDQUFDQyxHQUFSLENBQVksaUJBQVo7QUFDRDs7QUFDRFosWUFBUSxDQUFDWCxZQUFELENBQVI7QUFDQXNCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZYixLQUFaO0FBQ0QsR0FQRDs7QUFTQSxzQkFDRTtBQUFBLGNBQ0dGLFFBQVEsZ0JBQ1AscUVBQUMsOEVBQUQ7QUFDRSx5QkFBbUIsRUFBRU0sbUJBRHZCO0FBRUUseUJBQW1CLEVBQUVDLG1CQUZ2QjtBQUdFLHNCQUFnQixFQUFFSyxnQkFIcEI7QUFJRSxXQUFLLEVBQUVWO0FBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURPLGdCQVFQLHFFQUFDLDhFQUFEO0FBQ0UseUJBQW1CLEVBQUVJLG1CQUR2QjtBQUVFLHlCQUFtQixFQUFFQyxtQkFGdkI7QUFHRSxzQkFBZ0IsRUFBRUssZ0JBSHBCO0FBSUUsV0FBSyxFQUFFVjtBQUpUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFtQkQsQ0F2REQ7O0dBQU1KLEs7O0FBeURTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sb2dpbi4zOGRjYmE4MmIwNjkxNmVlZmQ3OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNpZ25JbkZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Mb2dpbkNvbXBvbmVudHMvU2lnbkluRm9ybSc7XG5pbXBvcnQgU2lnblVwRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL0xvZ2luQ29tcG9uZW50cy9TaWduVXBGb3JtJztcblxuY29uc3QgZGVmYXVsdElucHV0ID0ge1xuICBlbWFpbDogJycsXG4gIHBhc3N3b3JkOiAnJyxcbiAgY29uZmlybVBhc3N3b3JkOiAnJyxcbiAgZmlyc3ROYW1lOiAnJyxcbiAgbGFzdE5hbWU6ICcnLFxufTtcblxuY29uc3QgbG9naW4gPSAoKSA9PiB7XG4gIGNvbnN0IFtpc1NpZ25VcCwgc2V0SXNTaWduVXBdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKGRlZmF1bHRJbnB1dCk7XG5cbiAgLy8gVmFsaWRhdGUgU2lnbiBVcCBwYXNzd29yZHMuXG4gIGNvbnN0IHBhc3N3b3JkVmFsaWRhdGlvbiA9ICgpID0+IHtcbiAgICBpZiAoaXNTaWduVXApIHtcbiAgICAgIGlmIChpbnB1dC5wYXNzd29yZCA9PT0gaW5wdXQuY29uZmlybVBhc3N3b3JkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQoXCJQYXNzd29yZHMgZG9uJ3QgbWF0Y2hcIik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy9Ub2dnbGUgaXNTaWduVXAgc3RhdGUsIHNvIGRvZXMgY29tcG9uZW50c1xuICBjb25zdCBoYW5kbGVTaWduVXBPbkNsaWNrID0gKCkgPT4ge1xuICAgIHNldElzU2lnblVwKCFpc1NpZ25VcCk7XG4gICAgc2V0SW5wdXQoZGVmYXVsdElucHV0KTtcbiAgfTtcblxuICAvLyBIYW5kbGUgZm9ybSBpbnB1dCBjaGFuZ2UgZXZlbnQuXG4gIGNvbnN0IGhhbmRsZUlucHV0T25DaGFuZ2UgPSBlID0+IHtcbiAgICBzZXRJbnB1dCh7IC4uLmlucHV0LCBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pO1xuICB9O1xuXG4gIC8vIEhhbmRsZSBTaWduIEluIC8gU2lnbiBVcCBzdWJtaXQgZXZlbnQuXG4gIGNvbnN0IGhhbmRsZVNpZ25TdWJtaXQgPSBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKHBhc3N3b3JkVmFsaWRhdGlvbigpKSB7XG4gICAgICBjb25zb2xlLmxvZygnc2lnbiB1cCBzdWNjZXNzJylcbiAgICB9XG4gICAgc2V0SW5wdXQoZGVmYXVsdElucHV0KTtcbiAgICBjb25zb2xlLmxvZyhpbnB1dCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAge2lzU2lnblVwID8gKFxuICAgICAgICA8U2lnblVwRm9ybVxuICAgICAgICAgIGhhbmRsZVNpZ25VcE9uQ2xpY2s9e2hhbmRsZVNpZ25VcE9uQ2xpY2t9XG4gICAgICAgICAgaGFuZGxlSW5wdXRPbkNoYW5nZT17aGFuZGxlSW5wdXRPbkNoYW5nZX1cbiAgICAgICAgICBoYW5kbGVTaWduU3VibWl0PXtoYW5kbGVTaWduU3VibWl0fVxuICAgICAgICAgIGlucHV0PXtpbnB1dH1cbiAgICAgICAgLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxTaWduSW5Gb3JtXG4gICAgICAgICAgaGFuZGxlU2lnblVwT25DbGljaz17aGFuZGxlU2lnblVwT25DbGlja31cbiAgICAgICAgICBoYW5kbGVJbnB1dE9uQ2hhbmdlPXtoYW5kbGVJbnB1dE9uQ2hhbmdlfVxuICAgICAgICAgIGhhbmRsZVNpZ25TdWJtaXQ9e2hhbmRsZVNpZ25TdWJtaXR9XG4gICAgICAgICAgaW5wdXQ9e2lucHV0fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvZ2luO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==