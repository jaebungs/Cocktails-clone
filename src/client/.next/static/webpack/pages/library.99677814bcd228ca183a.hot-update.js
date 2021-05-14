webpackHotUpdate_N_E("pages/library",{

/***/ "./components/Recipes/RecipeItem.js":
/*!******************************************!*\
  !*** ./components/Recipes/RecipeItem.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _RecipesModal_RecipesModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RecipesModal/RecipesModal */ "./components/Recipes/RecipesModal/RecipesModal.js");
/* harmony import */ var _recipeCard_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./recipeCard.module.scss */ "./components/Recipes/recipeCard.module.scss");
/* harmony import */ var _recipeCard_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_recipeCard_module_scss__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\Users\\jaebu\\Desktop\\cocktail-v2\\src\\client\\components\\Recipes\\RecipeItem.js",
    _this = undefined,
    _s = $RefreshSig$();





var customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};
react_modal__WEBPACK_IMPORTED_MODULE_2___default.a.setAppElement('#__next');

var RecipeItem = function RecipeItem(_ref) {
  _s();

  var recipe = _ref.recipe;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isModalOpen = _useState[0],
      setIsModalOpen = _useState[1];

  var toggleModal = function toggleModal() {
    setIsModalOpen(!isModalOpen);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _recipeCard_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.recipeCard,
    onClick: toggleModal,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: recipe.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["Ingredients: ", recipe.ingredients]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["Instruction: ", recipe.instruction]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_modal__WEBPACK_IMPORTED_MODULE_2___default.a, {
      isOpen: isModalOpen,
      onRequestClose: toggleModal,
      style: customStyles,
      contentLabel: recipe.name + ' recipe modal',
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_RecipesModal_RecipesModal__WEBPACK_IMPORTED_MODULE_3__["default"], {
        recipe: recipe
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, _this);
};

_s(RecipeItem, "mLsII5HRP5G63IA/8vjZ5YHXWr8=");

_c = RecipeItem;
/* harmony default export */ __webpack_exports__["default"] = (RecipeItem);

var _c;

$RefreshReg$(_c, "RecipeItem");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZWNpcGVzL1JlY2lwZUl0ZW0uanMiXSwibmFtZXMiOlsiY3VzdG9tU3R5bGVzIiwiY29udGVudCIsInRvcCIsImxlZnQiLCJyaWdodCIsImJvdHRvbSIsIm1hcmdpblJpZ2h0IiwidHJhbnNmb3JtIiwiTW9kYWwiLCJzZXRBcHBFbGVtZW50IiwiUmVjaXBlSXRlbSIsInJlY2lwZSIsInVzZVN0YXRlIiwiaXNNb2RhbE9wZW4iLCJzZXRJc01vZGFsT3BlbiIsInRvZ2dsZU1vZGFsIiwic3R5bGVkIiwicmVjaXBlQ2FyZCIsIm5hbWUiLCJpbmdyZWRpZW50cyIsImluc3RydWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsWUFBWSxHQUFHO0FBQ25CQyxTQUFPLEVBQUU7QUFDUEMsT0FBRyxFQUFFLEtBREU7QUFFUEMsUUFBSSxFQUFFLEtBRkM7QUFHUEMsU0FBSyxFQUFFLE1BSEE7QUFJUEMsVUFBTSxFQUFFLE1BSkQ7QUFLUEMsZUFBVyxFQUFFLE1BTE47QUFNUEMsYUFBUyxFQUFFO0FBTko7QUFEVSxDQUFyQjtBQVdBQyxrREFBSyxDQUFDQyxhQUFOLENBQW9CLFNBQXBCOztBQUVBLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQWdCO0FBQUE7O0FBQUEsTUFBYkMsTUFBYSxRQUFiQSxNQUFhOztBQUFBLGtCQUNLQyxzREFBUSxDQUFDLEtBQUQsQ0FEYjtBQUFBLE1BQzFCQyxXQUQwQjtBQUFBLE1BQ2JDLGNBRGE7O0FBR2pDLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEJELGtCQUFjLENBQUMsQ0FBQ0QsV0FBRixDQUFkO0FBQ0QsR0FGRDs7QUFJQSxzQkFDRTtBQUFLLGFBQVMsRUFBRUcsOERBQU0sQ0FBQ0MsVUFBdkI7QUFBbUMsV0FBTyxFQUFFRixXQUE1QztBQUFBLDRCQUNFO0FBQUEsZ0JBQUtKLE1BQU0sQ0FBQ087QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFBLGtDQUFpQlAsTUFBTSxDQUFDUSxXQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQUdFO0FBQUEsa0NBQWlCUixNQUFNLENBQUNTLFdBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGLGVBSUUscUVBQUMsa0RBQUQ7QUFBTyxZQUFNLEVBQUVQLFdBQWY7QUFDRSxvQkFBYyxFQUFFRSxXQURsQjtBQUVBLFdBQUssRUFBRWYsWUFGUDtBQUVxQixrQkFBWSxFQUFFVyxNQUFNLENBQUNPLElBQVAsR0FBYyxlQUZqRDtBQUFBLDZCQUdFLHFFQUFDLGtFQUFEO0FBQWMsY0FBTSxFQUFFUDtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBWUQsQ0FuQkQ7O0dBQU1ELFU7O0tBQUFBLFU7QUFxQlNBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xpYnJhcnkuOTk2Nzc4MTRiY2QyMjhjYTE4M2EuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1tb2RhbCc7XG5pbXBvcnQgUmVjaXBlc01vZGFsIGZyb20gJy4vUmVjaXBlc01vZGFsL1JlY2lwZXNNb2RhbCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJy4vcmVjaXBlQ2FyZC5tb2R1bGUuc2Nzcyc7XG5cbmNvbnN0IGN1c3RvbVN0eWxlcyA9IHtcbiAgY29udGVudDoge1xuICAgIHRvcDogJzUwJScsXG4gICAgbGVmdDogJzUwJScsXG4gICAgcmlnaHQ6ICdhdXRvJyxcbiAgICBib3R0b206ICdhdXRvJyxcbiAgICBtYXJnaW5SaWdodDogJy01MCUnLFxuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXG4gIH0sXG59O1xuXG5Nb2RhbC5zZXRBcHBFbGVtZW50KCcjX19uZXh0Jyk7XG5cbmNvbnN0IFJlY2lwZUl0ZW0gPSAoeyByZWNpcGUgfSkgPT4ge1xuICBjb25zdCBbaXNNb2RhbE9wZW4sIHNldElzTW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCB0b2dnbGVNb2RhbCA9ICgpID0+IHtcbiAgICBzZXRJc01vZGFsT3BlbighaXNNb2RhbE9wZW4pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlZC5yZWNpcGVDYXJkfSBvbkNsaWNrPXt0b2dnbGVNb2RhbH0+XG4gICAgICA8aDM+e3JlY2lwZS5uYW1lfTwvaDM+XG4gICAgICA8cD5JbmdyZWRpZW50czoge3JlY2lwZS5pbmdyZWRpZW50c308L3A+XG4gICAgICA8cD5JbnN0cnVjdGlvbjoge3JlY2lwZS5pbnN0cnVjdGlvbn08L3A+XG4gICAgICA8TW9kYWwgaXNPcGVuPXtpc01vZGFsT3Blbn0gXG4gICAgICAgIG9uUmVxdWVzdENsb3NlPXt0b2dnbGVNb2RhbH1cbiAgICAgIHN0eWxlPXtjdXN0b21TdHlsZXN9IGNvbnRlbnRMYWJlbD17cmVjaXBlLm5hbWUgKyAnIHJlY2lwZSBtb2RhbCd9PlxuICAgICAgICA8UmVjaXBlc01vZGFsIHJlY2lwZT17cmVjaXBlfSAvPlxuICAgICAgPC9Nb2RhbD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlY2lwZUl0ZW07XG4iXSwic291cmNlUm9vdCI6IiJ9