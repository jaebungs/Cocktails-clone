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

  var toggleModal = function toggleModal(e) {
    e.stopPropagation();
    setIsModalOpen(!isModalOpen);
  };

  var closeModal = function closeModal() {
    setIsModalOpen(false);
    console.log(isModalOpen);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _recipeCard_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.recipeCard,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      onClick: toggleModal,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        children: recipe.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: ["Ingredients: ", recipe.ingredients]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: ["Instruction: ", recipe.instruction]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_modal__WEBPACK_IMPORTED_MODULE_2___default.a, {
      isOpen: isModalOpen,
      onRequestClose: closeModal,
      style: customStyles,
      contentLabel: recipe.name + ' recipe modal',
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_RecipesModal_RecipesModal__WEBPACK_IMPORTED_MODULE_3__["default"], {
        recipe: recipe
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZWNpcGVzL1JlY2lwZUl0ZW0uanMiXSwibmFtZXMiOlsiY3VzdG9tU3R5bGVzIiwiY29udGVudCIsInRvcCIsImxlZnQiLCJyaWdodCIsImJvdHRvbSIsIm1hcmdpblJpZ2h0IiwidHJhbnNmb3JtIiwiTW9kYWwiLCJzZXRBcHBFbGVtZW50IiwiUmVjaXBlSXRlbSIsInJlY2lwZSIsInVzZVN0YXRlIiwiaXNNb2RhbE9wZW4iLCJzZXRJc01vZGFsT3BlbiIsInRvZ2dsZU1vZGFsIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsImNsb3NlTW9kYWwiLCJjb25zb2xlIiwibG9nIiwic3R5bGVkIiwicmVjaXBlQ2FyZCIsIm5hbWUiLCJpbmdyZWRpZW50cyIsImluc3RydWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsWUFBWSxHQUFHO0FBQ25CQyxTQUFPLEVBQUU7QUFDUEMsT0FBRyxFQUFFLEtBREU7QUFFUEMsUUFBSSxFQUFFLEtBRkM7QUFHUEMsU0FBSyxFQUFFLE1BSEE7QUFJUEMsVUFBTSxFQUFFLE1BSkQ7QUFLUEMsZUFBVyxFQUFFLE1BTE47QUFNUEMsYUFBUyxFQUFFO0FBTko7QUFEVSxDQUFyQjtBQVdBQyxrREFBSyxDQUFDQyxhQUFOLENBQW9CLFNBQXBCOztBQUVBLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQWdCO0FBQUE7O0FBQUEsTUFBYkMsTUFBYSxRQUFiQSxNQUFhOztBQUFBLGtCQUNLQyxzREFBUSxDQUFDLEtBQUQsQ0FEYjtBQUFBLE1BQzFCQyxXQUQwQjtBQUFBLE1BQ2JDLGNBRGE7O0FBR2pDLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLENBQUQsRUFBTztBQUN6QkEsS0FBQyxDQUFDQyxlQUFGO0FBQ0FILGtCQUFjLENBQUMsQ0FBQ0QsV0FBRixDQUFkO0FBQ0QsR0FIRDs7QUFLQSxNQUFNSyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3ZCSixrQkFBYyxDQUFDLEtBQUQsQ0FBZDtBQUNBSyxXQUFPLENBQUNDLEdBQVIsQ0FBWVAsV0FBWjtBQUNELEdBSEQ7O0FBS0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUVRLDhEQUFNLENBQUNDLFVBQXZCO0FBQUEsNEJBQ0U7QUFBTSxhQUFPLEVBQUVQLFdBQWY7QUFBQSw4QkFDRTtBQUFBLGtCQUFLSixNQUFNLENBQUNZO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBQSxvQ0FBaUJaLE1BQU0sQ0FBQ2EsV0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFHRTtBQUFBLG9DQUFpQmIsTUFBTSxDQUFDYyxXQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQU9FLHFFQUFDLGtEQUFEO0FBQ0UsWUFBTSxFQUFFWixXQURWO0FBRUUsb0JBQWMsRUFBRUssVUFGbEI7QUFHRSxXQUFLLEVBQUVsQixZQUhUO0FBSUUsa0JBQVksRUFBRVcsTUFBTSxDQUFDWSxJQUFQLEdBQWMsZUFKOUI7QUFBQSw2QkFNRSxxRUFBQyxrRUFBRDtBQUFjLGNBQU0sRUFBRVo7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWtCRCxDQS9CRDs7R0FBTUQsVTs7S0FBQUEsVTtBQWlDU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGlicmFyeS5mYzA1MjNiYzhmNDYyMThlYmIzMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LW1vZGFsJztcbmltcG9ydCBSZWNpcGVzTW9kYWwgZnJvbSAnLi9SZWNpcGVzTW9kYWwvUmVjaXBlc01vZGFsJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnLi9yZWNpcGVDYXJkLm1vZHVsZS5zY3NzJztcblxuY29uc3QgY3VzdG9tU3R5bGVzID0ge1xuICBjb250ZW50OiB7XG4gICAgdG9wOiAnNTAlJyxcbiAgICBsZWZ0OiAnNTAlJyxcbiAgICByaWdodDogJ2F1dG8nLFxuICAgIGJvdHRvbTogJ2F1dG8nLFxuICAgIG1hcmdpblJpZ2h0OiAnLTUwJScsXG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcbiAgfSxcbn07XG5cbk1vZGFsLnNldEFwcEVsZW1lbnQoJyNfX25leHQnKTtcblxuY29uc3QgUmVjaXBlSXRlbSA9ICh7IHJlY2lwZSB9KSA9PiB7XG4gIGNvbnN0IFtpc01vZGFsT3Blbiwgc2V0SXNNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHRvZ2dsZU1vZGFsID0gKGUpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHNldElzTW9kYWxPcGVuKCFpc01vZGFsT3Blbik7XG4gIH07XG5cbiAgY29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHtcbiAgICBzZXRJc01vZGFsT3BlbihmYWxzZSk7XG4gICAgY29uc29sZS5sb2coaXNNb2RhbE9wZW4pXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVkLnJlY2lwZUNhcmR9PlxuICAgICAgPGRpdiAgb25DbGljaz17dG9nZ2xlTW9kYWx9PlxuICAgICAgICA8aDM+e3JlY2lwZS5uYW1lfTwvaDM+XG4gICAgICAgIDxwPkluZ3JlZGllbnRzOiB7cmVjaXBlLmluZ3JlZGllbnRzfTwvcD5cbiAgICAgICAgPHA+SW5zdHJ1Y3Rpb246IHtyZWNpcGUuaW5zdHJ1Y3Rpb259PC9wPlxuICAgICAgPC9kaXY+XG4gICAgIFxuICAgICAgPE1vZGFsXG4gICAgICAgIGlzT3Blbj17aXNNb2RhbE9wZW59XG4gICAgICAgIG9uUmVxdWVzdENsb3NlPXtjbG9zZU1vZGFsfVxuICAgICAgICBzdHlsZT17Y3VzdG9tU3R5bGVzfVxuICAgICAgICBjb250ZW50TGFiZWw9e3JlY2lwZS5uYW1lICsgJyByZWNpcGUgbW9kYWwnfVxuICAgICAgPlxuICAgICAgICA8UmVjaXBlc01vZGFsIHJlY2lwZT17cmVjaXBlfSAvPlxuICAgICAgPC9Nb2RhbD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlY2lwZUl0ZW07XG4iXSwic291cmNlUm9vdCI6IiJ9