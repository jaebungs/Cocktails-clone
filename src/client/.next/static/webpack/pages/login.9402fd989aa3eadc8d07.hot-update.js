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
/* harmony import */ var _helpers_loginHelpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/loginHelpers */ "./helpers/loginHelpers.js");



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
    if (input.password === input.confirmPassword) {
      return true;
    } else {
      alert("Passwords don't match");
      return false;
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
    e.preventDefault(); // validate form then call api.

    if (isSignUp && passwordValidation()) {
      Object(_helpers_loginHelpers__WEBPACK_IMPORTED_MODULE_5__["createAccount"])(input);
    }

    setInput(defaultInput);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanMiXSwibmFtZXMiOlsiZGVmYXVsdElucHV0IiwiZW1haWwiLCJwYXNzd29yZCIsImNvbmZpcm1QYXNzd29yZCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwibG9naW4iLCJ1c2VTdGF0ZSIsImlzU2lnblVwIiwic2V0SXNTaWduVXAiLCJpbnB1dCIsInNldElucHV0IiwicGFzc3dvcmRWYWxpZGF0aW9uIiwiYWxlcnQiLCJoYW5kbGVTaWduVXBPbkNsaWNrIiwiaGFuZGxlSW5wdXRPbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJoYW5kbGVTaWduU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJjcmVhdGVBY2NvdW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFlBQVksR0FBRztBQUNuQkMsT0FBSyxFQUFFLEVBRFk7QUFFbkJDLFVBQVEsRUFBRSxFQUZTO0FBR25CQyxpQkFBZSxFQUFFLEVBSEU7QUFJbkJDLFdBQVMsRUFBRSxFQUpRO0FBS25CQyxVQUFRLEVBQUU7QUFMUyxDQUFyQjs7QUFRQSxJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQUEsa0JBQ2NDLHNEQUFRLENBQUMsS0FBRCxDQUR0QjtBQUFBLE1BQ1hDLFFBRFc7QUFBQSxNQUNEQyxXQURDOztBQUFBLG1CQUVRRixzREFBUSxDQUFDUCxZQUFELENBRmhCO0FBQUEsTUFFWFUsS0FGVztBQUFBLE1BRUpDLFFBRkksa0JBSWxCOzs7QUFDQSxNQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLEdBQU07QUFDL0IsUUFBSUYsS0FBSyxDQUFDUixRQUFOLEtBQW1CUSxLQUFLLENBQUNQLGVBQTdCLEVBQThDO0FBQzVDLGFBQU8sSUFBUDtBQUNELEtBRkQsTUFFTztBQUNMVSxXQUFLLENBQUMsdUJBQUQsQ0FBTDtBQUNBLGFBQU8sS0FBUDtBQUNEO0FBQ0YsR0FQRCxDQUxrQixDQWNsQjs7O0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixHQUFNO0FBQ2hDTCxlQUFXLENBQUMsQ0FBQ0QsUUFBRixDQUFYO0FBQ0FHLFlBQVEsQ0FBQ1gsWUFBRCxDQUFSO0FBQ0QsR0FIRCxDQWZrQixDQW9CbEI7OztBQUNBLE1BQU1lLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQUMsQ0FBQyxFQUFJO0FBQy9CTCxZQUFRLGlDQUFNRCxLQUFOLDhKQUFjTSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsSUFBdkIsRUFBOEJGLENBQUMsQ0FBQ0MsTUFBRixDQUFTRSxLQUF2QyxHQUFSO0FBQ0QsR0FGRCxDQXJCa0IsQ0F5QmxCOzs7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUFKLENBQUMsRUFBSTtBQUM1QkEsS0FBQyxDQUFDSyxjQUFGLEdBRDRCLENBRTVCOztBQUNBLFFBQUliLFFBQVEsSUFBSUksa0JBQWtCLEVBQWxDLEVBQXNDO0FBQ3BDVSxpRkFBYSxDQUFDWixLQUFELENBQWI7QUFDRDs7QUFDREMsWUFBUSxDQUFDWCxZQUFELENBQVI7QUFDRCxHQVBEOztBQVNBLHNCQUNFO0FBQUEsY0FDR1EsUUFBUSxnQkFDUCxxRUFBQyw4RUFBRDtBQUNFLHlCQUFtQixFQUFFTSxtQkFEdkI7QUFFRSx5QkFBbUIsRUFBRUMsbUJBRnZCO0FBR0Usc0JBQWdCLEVBQUVLLGdCQUhwQjtBQUlFLFdBQUssRUFBRVY7QUFKVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRE8sZ0JBUVAscUVBQUMsOEVBQUQ7QUFDRSx5QkFBbUIsRUFBRUksbUJBRHZCO0FBRUUseUJBQW1CLEVBQUVDLG1CQUZ2QjtBQUdFLHNCQUFnQixFQUFFSyxnQkFIcEI7QUFJRSxXQUFLLEVBQUVWO0FBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW1CRCxDQXRERDs7R0FBTUosSzs7QUF3RFNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xvZ2luLjk0MDJmZDk4OWFhM2VhZGM4ZDA3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2lnbkluRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL0xvZ2luQ29tcG9uZW50cy9TaWduSW5Gb3JtJztcbmltcG9ydCBTaWduVXBGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvTG9naW5Db21wb25lbnRzL1NpZ25VcEZvcm0nO1xuaW1wb3J0IHsgY3JlYXRlQWNjb3VudCB9IGZyb20gJy4uL2hlbHBlcnMvbG9naW5IZWxwZXJzJztcblxuY29uc3QgZGVmYXVsdElucHV0ID0ge1xuICBlbWFpbDogJycsXG4gIHBhc3N3b3JkOiAnJyxcbiAgY29uZmlybVBhc3N3b3JkOiAnJyxcbiAgZmlyc3ROYW1lOiAnJyxcbiAgbGFzdE5hbWU6ICcnLFxufTtcblxuY29uc3QgbG9naW4gPSAoKSA9PiB7XG4gIGNvbnN0IFtpc1NpZ25VcCwgc2V0SXNTaWduVXBdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKGRlZmF1bHRJbnB1dCk7XG5cbiAgLy8gVmFsaWRhdGUgU2lnbiBVcCBwYXNzd29yZHMuXG4gIGNvbnN0IHBhc3N3b3JkVmFsaWRhdGlvbiA9ICgpID0+IHtcbiAgICBpZiAoaW5wdXQucGFzc3dvcmQgPT09IGlucHV0LmNvbmZpcm1QYXNzd29yZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFsZXJ0KFwiUGFzc3dvcmRzIGRvbid0IG1hdGNoXCIpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICAvL1RvZ2dsZSBpc1NpZ25VcCBzdGF0ZSwgc28gZG9lcyBjb21wb25lbnRzXG4gIGNvbnN0IGhhbmRsZVNpZ25VcE9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgc2V0SXNTaWduVXAoIWlzU2lnblVwKTtcbiAgICBzZXRJbnB1dChkZWZhdWx0SW5wdXQpO1xuICB9O1xuXG4gIC8vIEhhbmRsZSBmb3JtIGlucHV0IGNoYW5nZSBldmVudC5cbiAgY29uc3QgaGFuZGxlSW5wdXRPbkNoYW5nZSA9IGUgPT4ge1xuICAgIHNldElucHV0KHsgLi4uaW5wdXQsIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSk7XG4gIH07XG5cbiAgLy8gSGFuZGxlIFNpZ24gSW4gLyBTaWduIFVwIHN1Ym1pdCBldmVudC5cbiAgY29uc3QgaGFuZGxlU2lnblN1Ym1pdCA9IGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyB2YWxpZGF0ZSBmb3JtIHRoZW4gY2FsbCBhcGkuXG4gICAgaWYgKGlzU2lnblVwICYmIHBhc3N3b3JkVmFsaWRhdGlvbigpKSB7XG4gICAgICBjcmVhdGVBY2NvdW50KGlucHV0KTtcbiAgICB9XG4gICAgc2V0SW5wdXQoZGVmYXVsdElucHV0KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7aXNTaWduVXAgPyAoXG4gICAgICAgIDxTaWduVXBGb3JtXG4gICAgICAgICAgaGFuZGxlU2lnblVwT25DbGljaz17aGFuZGxlU2lnblVwT25DbGlja31cbiAgICAgICAgICBoYW5kbGVJbnB1dE9uQ2hhbmdlPXtoYW5kbGVJbnB1dE9uQ2hhbmdlfVxuICAgICAgICAgIGhhbmRsZVNpZ25TdWJtaXQ9e2hhbmRsZVNpZ25TdWJtaXR9XG4gICAgICAgICAgaW5wdXQ9e2lucHV0fVxuICAgICAgICAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPFNpZ25JbkZvcm1cbiAgICAgICAgICBoYW5kbGVTaWduVXBPbkNsaWNrPXtoYW5kbGVTaWduVXBPbkNsaWNrfVxuICAgICAgICAgIGhhbmRsZUlucHV0T25DaGFuZ2U9e2hhbmRsZUlucHV0T25DaGFuZ2V9XG4gICAgICAgICAgaGFuZGxlU2lnblN1Ym1pdD17aGFuZGxlU2lnblN1Ym1pdH1cbiAgICAgICAgICBpbnB1dD17aW5wdXR9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9naW47XG4iXSwic291cmNlUm9vdCI6IiJ9