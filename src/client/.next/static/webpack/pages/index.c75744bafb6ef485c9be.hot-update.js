webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Shaker.js":
/*!******************************!*\
  !*** ./components/Shaker.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _svg_cocktailsvg_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../svg/cocktailsvg.js */ "./svg/cocktailsvg.js");
/* harmony import */ var _svg_cocktailnotfoundsvg_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../svg/cocktailnotfoundsvg.js */ "./svg/cocktailnotfoundsvg.js");
/* harmony import */ var _styles_shaker_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/shaker.module.scss */ "./styles/shaker.module.scss");
/* harmony import */ var _styles_shaker_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_shaker_module_scss__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\Users\\jaebu\\Desktop\\cocktail-clone\\src\\client\\components\\Shaker.js",
    _this = undefined,
    _s = $RefreshSig$();






var Shaker = function Shaker() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isNotfound = _useState[0],
      setIsNotFound = _useState[1];

  var handleClickSearch = function handleClickSearch() {
    setIsNotFound(true);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_shaker_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.cockailSVGContainer,
    children: [!isNotfound ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_svg_cocktailsvg_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: _styles_shaker_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.cocktailSVG
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_svg_cocktailnotfoundsvg_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: _styles_shaker_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.cocktailSVG
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      className: _styles_shaker_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.h2,
      children: "The Cocktail Shaker"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      className: _styles_shaker_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.h3,
      children: "You give us an ingredient, we give you a recipe for cocktail"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        placeholder: "Put one liquor type here."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: handleClickSearch,
        children: "Search"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, _this);
};

_s(Shaker, "cNTuCJqOrHj4a81c/a5OhphVHCk=");

_c = Shaker;
/* harmony default export */ __webpack_exports__["default"] = (Shaker);

var _c;

$RefreshReg$(_c, "Shaker");

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

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/shaker.module.scss":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./styles/shaker.module.scss ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".shaker_cocktailSVG__3eEDi {\n  width: 40rem;\n  height: 30rem;\n}\n\n.shaker_cockailSVGContainer__4TRvT {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 700px;\n  height: 700px;\n  border-radius: 50%;\n  border: 2px solid #000;\n}\n\n.shaker_h2__7SF51 {\n  font-size: 3rem;\n}", "",{"version":3,"sources":["webpack://shaker.module.scss"],"names":[],"mappings":"AAAA;EACI,YAAA;EACA,aAAA;AACJ;;AAEA;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,sBAAA;AACJ;;AAEA;EACI,eAAA;AACJ","sourcesContent":[".cocktailSVG {\r\n    width: 40rem;\r\n    height: 30rem;\r\n}\r\n\r\n.cockailSVGContainer {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 700px;\r\n    height: 700px;\r\n    border-radius: 50%;\r\n    border: 2px solid #000;\r\n}\r\n\r\n.h2 {\r\n    font-size: 3rem;\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"cocktailSVG": "shaker_cocktailSVG__3eEDi",
	"cockailSVGContainer": "shaker_cockailSVGContainer__4TRvT",
	"h2": "shaker_h2__7SF51"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaGFrZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9zaGFrZXIubW9kdWxlLnNjc3MiXSwibmFtZXMiOlsiU2hha2VyIiwidXNlU3RhdGUiLCJpc05vdGZvdW5kIiwic2V0SXNOb3RGb3VuZCIsImhhbmRsZUNsaWNrU2VhcmNoIiwic3R5bGVkIiwiY29ja2FpbFNWR0NvbnRhaW5lciIsImNvY2t0YWlsU1ZHIiwiaDIiLCJoMyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFBQSxrQkFDaUJDLHNEQUFRLENBQUMsS0FBRCxDQUR6QjtBQUFBLE1BQ1pDLFVBRFk7QUFBQSxNQUNBQyxhQURBOztBQUduQixNQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQU07QUFDOUJELGlCQUFhLENBQUMsSUFBRCxDQUFiO0FBQ0QsR0FGRDs7QUFJQSxzQkFDRTtBQUFLLGFBQVMsRUFBRUUsaUVBQU0sQ0FBQ0MsbUJBQXZCO0FBQUEsZUFDRyxDQUFDSixVQUFELGdCQUNDLHFFQUFDLDJEQUFEO0FBQWEsZUFBUyxFQUFFRyxpRUFBTSxDQUFDRTtBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQsZ0JBR0MscUVBQUMsbUVBQUQ7QUFBa0IsZUFBUyxFQUFFRixpRUFBTSxDQUFDRTtBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkosZUFNRTtBQUFJLGVBQVMsRUFBRUYsaUVBQU0sQ0FBQ0csRUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFORixlQU9FO0FBQUksZUFBUyxFQUFFSCxpRUFBTSxDQUFDSSxFQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBGLGVBUUU7QUFBQSw4QkFDRTtBQUFPLG1CQUFXLEVBQUM7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBUSxlQUFPLEVBQUVMLGlCQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBZUQsQ0F0QkQ7O0dBQU1KLE07O0tBQUFBLE07QUF3QlNBLHFFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxpSEFBc0Q7QUFDaEc7QUFDQTtBQUNBLDhCQUE4QixRQUFTLCtCQUErQixpQkFBaUIsa0JBQWtCLEdBQUcsd0NBQXdDLGtCQUFrQiwyQkFBMkIsd0JBQXdCLGlCQUFpQixrQkFBa0IsdUJBQXVCLDJCQUEyQixHQUFHLHVCQUF1QixvQkFBb0IsR0FBRyxPQUFPLG1GQUFtRixVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsdUNBQXVDLHFCQUFxQixzQkFBc0IsS0FBSyw4QkFBOEIsc0JBQXNCLCtCQUErQiw0QkFBNEIscUJBQXFCLHNCQUFzQiwyQkFBMkIsK0JBQStCLEtBQUssYUFBYSx3QkFBd0IsS0FBSyxtQkFBbUI7QUFDcDZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmM3NTc0NGJhZmI2ZWY0ODVjOWJlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29ja3RhaWxTVkcgZnJvbSAnLi4vc3ZnL2NvY2t0YWlsc3ZnLmpzJztcbmltcG9ydCBDb3VsZE5vdEZvdW5kU1ZHIGZyb20gJy4uL3N2Zy9jb2NrdGFpbG5vdGZvdW5kc3ZnLmpzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnLi4vc3R5bGVzL3NoYWtlci5tb2R1bGUuc2Nzcyc7XG5cbmNvbnN0IFNoYWtlciA9ICgpID0+IHtcbiAgY29uc3QgW2lzTm90Zm91bmQsIHNldElzTm90Rm91bmRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrU2VhcmNoID0gKCkgPT4ge1xuICAgIHNldElzTm90Rm91bmQodHJ1ZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVkLmNvY2thaWxTVkdDb250YWluZXJ9PlxuICAgICAgeyFpc05vdGZvdW5kID8gKFxuICAgICAgICA8Q29ja3RhaWxTVkcgY2xhc3NOYW1lPXtzdHlsZWQuY29ja3RhaWxTVkd9IC8+XG4gICAgICApIDogKFxuICAgICAgICA8Q291bGROb3RGb3VuZFNWRyBjbGFzc05hbWU9e3N0eWxlZC5jb2NrdGFpbFNWR30gLz5cbiAgICAgICl9XG4gICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZWQuaDJ9PlRoZSBDb2NrdGFpbCBTaGFrZXI8L2gyPlxuICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVkLmgzfT5Zb3UgZ2l2ZSB1cyBhbiBpbmdyZWRpZW50LCB3ZSBnaXZlIHlvdSBhIHJlY2lwZSBmb3IgY29ja3RhaWw8L2gzPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiUHV0IG9uZSBsaXF1b3IgdHlwZSBoZXJlLlwiIC8+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2tTZWFyY2h9PlNlYXJjaDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaGFrZXI7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuc2hha2VyX2NvY2t0YWlsU1ZHX18zZUVEaSB7XFxuICB3aWR0aDogNDByZW07XFxuICBoZWlnaHQ6IDMwcmVtO1xcbn1cXG5cXG4uc2hha2VyX2NvY2thaWxTVkdDb250YWluZXJfXzRUUnZUIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA3MDBweDtcXG4gIGhlaWdodDogNzAwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xcbn1cXG5cXG4uc2hha2VyX2gyX183U0Y1MSB7XFxuICBmb250LXNpemU6IDNyZW07XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zaGFrZXIubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY29ja3RhaWxTVkcge1xcclxcbiAgICB3aWR0aDogNDByZW07XFxyXFxuICAgIGhlaWdodDogMzByZW07XFxyXFxufVxcclxcblxcclxcbi5jb2NrYWlsU1ZHQ29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDcwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDcwMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7XFxyXFxufVxcclxcblxcclxcbi5oMiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiY29ja3RhaWxTVkdcIjogXCJzaGFrZXJfY29ja3RhaWxTVkdfXzNlRURpXCIsXG5cdFwiY29ja2FpbFNWR0NvbnRhaW5lclwiOiBcInNoYWtlcl9jb2NrYWlsU1ZHQ29udGFpbmVyX180VFJ2VFwiLFxuXHRcImgyXCI6IFwic2hha2VyX2gyX183U0Y1MVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=