webpackHotUpdate_N_E("pages/login",{

/***/ "./helpers/loginHelpers.js":
/*!*********************************!*\
  !*** ./helpers/loginHelpers.js ***!
  \*********************************/
/*! exports provided: signIn, createAccount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signIn", function() { return signIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAccount", function() { return createAccount; });
/* harmony import */ var _configs_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../configs/index */ "./configs/index.js");

var signIn = function signIn(formData) {
  fetch("".concat(_configs_index__WEBPACK_IMPORTED_MODULE_0__["server"], "/account")).then(function (res) {
    return res.json();
  }).then(function (data) {
    console.log(data);
  })["catch"](function (err) {
    console.log(err);
  });
};
var createAccount = function createAccount(formData) {
  fetch("".concat(_configs_index__WEBPACK_IMPORTED_MODULE_0__["server"], "/account"), {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  }).then(function (res) {
    return res.json();
  }).then(function (data) {
    console.log('creat account success', data);
  })["catch"](function (err) {
    return console.log(err);
  });
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaGVscGVycy9sb2dpbkhlbHBlcnMuanMiXSwibmFtZXMiOlsic2lnbkluIiwiZm9ybURhdGEiLCJmZXRjaCIsInNlcnZlciIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJjcmVhdGVBY2NvdW50IiwibWV0aG9kIiwiaGVhZGVycyIsIkFjY2VwdCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUFDLFFBQVEsRUFBSTtBQUM5QkMsT0FBSyxXQUFJQyxxREFBSixjQUFMLENBQ0NDLElBREQsQ0FDTSxVQUFBQyxHQUFHO0FBQUEsV0FBRUEsR0FBRyxDQUFDQyxJQUFKLEVBQUY7QUFBQSxHQURULEVBRUNGLElBRkQsQ0FFTSxVQUFDRyxJQUFELEVBQVE7QUFDVkMsV0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7QUFDSCxHQUpELFdBS08sVUFBQ0csR0FBRCxFQUFPO0FBQ1ZGLFdBQU8sQ0FBQ0MsR0FBUixDQUFZQyxHQUFaO0FBQ0gsR0FQRDtBQVFILENBVE07QUFXQSxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUFWLFFBQVEsRUFBSTtBQUN2Q0MsT0FBSyxXQUFJQyxxREFBSixlQUFzQjtBQUN6QlMsVUFBTSxFQUFFLE1BRGlCO0FBRXpCQyxXQUFPLEVBQUU7QUFDUEMsWUFBTSxFQUFFLGtCQUREO0FBRVAsc0JBQWdCO0FBRlQsS0FGZ0I7QUFNekJDLFFBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVoQixRQUFmO0FBTm1CLEdBQXRCLENBQUwsQ0FRR0csSUFSSCxDQVFRLFVBQUFDLEdBQUc7QUFBQSxXQUFJQSxHQUFHLENBQUNDLElBQUosRUFBSjtBQUFBLEdBUlgsRUFTR0YsSUFUSCxDQVNRLFVBQUFHLElBQUksRUFBSTtBQUNaQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSx1QkFBWixFQUFxQ0YsSUFBckM7QUFDRCxHQVhILFdBWVMsVUFBQUcsR0FBRztBQUFBLFdBQUlGLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxHQUFaLENBQUo7QUFBQSxHQVpaO0FBYUQsQ0FkTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sb2dpbi40YzhkYjhjMjg2NmY1MTY4OWMzMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2VydmVyIH0gZnJvbSAnLi4vY29uZmlncy9pbmRleCc7XG5cbmV4cG9ydCBjb25zdCBzaWduSW4gPSBmb3JtRGF0YSA9PiB7XG4gICAgZmV0Y2goYCR7c2VydmVyfS9hY2NvdW50YClcbiAgICAudGhlbihyZXM9PnJlcy5qc29uKCkpXG4gICAgLnRoZW4oKGRhdGEpPT57XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgfSlcbiAgICAuY2F0Y2goKGVycik9PntcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgIH0pXG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVBY2NvdW50ID0gZm9ybURhdGEgPT4ge1xuICBmZXRjaChgJHtzZXJ2ZXJ9L2FjY291bnRgLCB7XG4gICAgbWV0aG9kOiAncG9zdCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZm9ybURhdGEpLFxuICB9KVxuICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2NyZWF0IGFjY291bnQgc3VjY2VzcycsIGRhdGEpO1xuICAgIH0pXG4gICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9