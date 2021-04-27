_N_E =
(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["pages/index"],{

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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      searchInput = _useState2[0],
      setSearchInput = _useState2[1];

  var handleClickSearch = function handleClickSearch() {
    setIsNotFound(true);
  };

  var handleChangeInput = function handleChangeInput(e) {
    setSearchInput(e.target.value);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_shaker_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.cockailSVGContainer,
    children: [!isNotfound ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_svg_cocktailsvg_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: _styles_shaker_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.cocktailSVG
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_svg_cocktailnotfoundsvg_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: _styles_shaker_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.cocktailSVG
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_shaker_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.searchContainer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        className: _styles_shaker_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.h2,
        children: "The Cocktail Shaker"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        className: _styles_shaker_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.h3,
        children: "You give us an ingredient, we give you a recipe for cocktail"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        className: _styles_shaker_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.searchInput,
        onChange: handleChangeInput,
        placeholder: "Put one liquor type here."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: _styles_shaker_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.searchBtn,
        onClick: handleClickSearch,
        children: "Search"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, _this);
};

_s(Shaker, "nuGc32q21H72Sm643nVXPTM05MY=");

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

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/object-assign.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var assign=Object.assign.bind(Object);module.exports=assign;module.exports.default=module.exports;
//# sourceMappingURL=object-assign.js.map

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5Cjaebu%5CDesktop%5Ccocktail-clone%5Csrc%5Cclient%5Cpages%5Cindex.js!./":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5Cjaebu%5CDesktop%5Ccocktail-clone%5Csrc%5Cclient%5Cpages%5Cindex.js ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/",
      function () {
        return __webpack_require__(/*! ./pages/index.js */ "./pages/index.js");
      }
    ]);
  

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
const isOldIE=function isOldIE(){let memo;return function memorize(){if(typeof memo==='undefined'){// Test for IE <= 9 as proposed by Browserhacks
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// Tests for existence of standard globals is to allow style-loader
// to operate correctly into non-standard environments
// @see https://github.com/webpack-contrib/style-loader/issues/177
memo=Boolean(window&&document&&document.all&&!window.atob);}return memo;};}();const getTarget=function getTarget(){const memo={};return function memorize(target){if(typeof memo[target]==='undefined'){let styleTarget=document.querySelector(target);// Special case to return head of iframe instead of iframe itself
if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement){try{// This will throw an exception if access to iframe is blocked
// due to cross-origin restrictions
styleTarget=styleTarget.contentDocument.head;}catch(e){// istanbul ignore next
styleTarget=null;}}memo[target]=styleTarget;}return memo[target];};}();const stylesInDom=[];function getIndexByIdentifier(identifier){let result=-1;for(let i=0;i<stylesInDom.length;i++){if(stylesInDom[i].identifier===identifier){result=i;break;}}return result;}function modulesToDom(list,options){const idCountMap={};const identifiers=[];for(let i=0;i<list.length;i++){const item=list[i];const id=options.base?item[0]+options.base:item[0];const count=idCountMap[id]||0;const identifier=`${id} ${count}`;idCountMap[id]=count+1;const index=getIndexByIdentifier(identifier);const obj={css:item[1],media:item[2],sourceMap:item[3]};if(index!==-1){stylesInDom[index].references++;stylesInDom[index].updater(obj);}else{stylesInDom.push({identifier,updater:addStyle(obj,options),references:1});}identifiers.push(identifier);}return identifiers;}function insertStyleElement(options){const style=document.createElement('style');const attributes=options.attributes||{};if(typeof attributes.nonce==='undefined'){const nonce=// eslint-disable-next-line no-undef
 true?__webpack_require__.nc:undefined;if(nonce){attributes.nonce=nonce;}}Object.keys(attributes).forEach(key=>{style.setAttribute(key,attributes[key]);});if(typeof options.insert==='function'){options.insert(style);}else{const target=getTarget(options.insert||'head');if(!target){throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");}target.appendChild(style);}return style;}function removeStyleElement(style){// istanbul ignore if
if(style.parentNode===null){return false;}style.parentNode.removeChild(style);}/* istanbul ignore next  */const replaceText=function replaceText(){const textStore=[];return function replace(index,replacement){textStore[index]=replacement;return textStore.filter(Boolean).join('\n');};}();function applyToSingletonTag(style,index,remove,obj){const css=remove?'':obj.media?`@media ${obj.media} {${obj.css}}`:obj.css;// For old IE
/* istanbul ignore if  */if(style.styleSheet){style.styleSheet.cssText=replaceText(index,css);}else{const cssNode=document.createTextNode(css);const childNodes=style.childNodes;if(childNodes[index]){style.removeChild(childNodes[index]);}if(childNodes.length){style.insertBefore(cssNode,childNodes[index]);}else{style.appendChild(cssNode);}}}function applyToTag(style,options,obj){let css=obj.css;const media=obj.media;const sourceMap=obj.sourceMap;if(media){style.setAttribute('media',media);}else{style.removeAttribute('media');}if(sourceMap&&typeof btoa!=='undefined'){css+=`\n/*# sourceMappingURL=data:application/json;base64,${btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))} */`;}// For old IE
/* istanbul ignore if  */if(style.styleSheet){style.styleSheet.cssText=css;}else{while(style.firstChild){style.removeChild(style.firstChild);}style.appendChild(document.createTextNode(css));}}let singleton=null;let singletonCounter=0;function addStyle(obj,options){let style;let update;let remove;if(options.singleton){const styleIndex=singletonCounter++;style=singleton||(singleton=insertStyleElement(options));update=applyToSingletonTag.bind(null,style,styleIndex,false);remove=applyToSingletonTag.bind(null,style,styleIndex,true);}else{style=insertStyleElement(options);update=applyToTag.bind(null,style,options);remove=()=>{removeStyleElement(style);};}update(obj);return function updateStyle(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap){return;}update(obj=newObj);}else{remove();}};}module.exports=(list,options)=>{options=options||{};// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
if(!options.singleton&&typeof options.singleton!=='boolean'){options.singleton=isOldIE();}list=list||[];let lastIdentifiers=modulesToDom(list,options);return function update(newList){newList=newList||[];if(Object.prototype.toString.call(newList)!=='[object Array]'){return;}for(let i=0;i<lastIdentifiers.length;i++){const identifier=lastIdentifiers[i];const index=getIndexByIdentifier(identifier);stylesInDom[index].references--;}const newLastIdentifiers=modulesToDom(newList,options);for(let i=0;i<lastIdentifiers.length;i++){const identifier=lastIdentifiers[i];const index=getIndexByIdentifier(identifier);if(stylesInDom[index].references===0){stylesInDom[index].updater();stylesInDom.splice(index,1);}}lastIdentifiers=newLastIdentifiers;};};
//# sourceMappingURL=injectStylesIntoStyleTag.js.map

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/api.js":
/*!***********************************!*\
  !*** (webpack)/css-loader/api.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__dirname) {module.exports=function(){"use strict";var n={762:function(n){n.exports=function(n){var t=[];t.toString=function toString(){return this.map(function(t){var r=cssWithMappingToString(t,n);if(t[2]){return"@media ".concat(t[2]," {").concat(r,"}")}return r}).join("")};t.i=function(n,r,o){if(typeof n==="string"){n=[[null,n,""]]}var e={};if(o){for(var a=0;a<this.length;a++){var c=this[a][0];if(c!=null){e[c]=true}}}for(var i=0;i<n.length;i++){var u=[].concat(n[i]);if(o&&e[u[0]]){continue}if(r){if(!u[2]){u[2]=r}else{u[2]="".concat(r," and ").concat(u[2])}}t.push(u)}};return t};function cssWithMappingToString(n,t){var r=n[1]||"";var o=n[3];if(!o){return r}if(t&&typeof btoa==="function"){var e=toComment(o);var a=o.sources.map(function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")});return[r].concat(a).concat([e]).join("\n")}return[r].join("\n")}function toComment(n){var t=btoa(unescape(encodeURIComponent(JSON.stringify(n))));var r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(r," */")}}};var t={};function __nccwpck_require__(r){if(t[r]){return t[r].exports}var o=t[r]={exports:{}};var e=true;try{n[r](o,o.exports,__nccwpck_require__);e=false}finally{if(e)delete t[r]}return o.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(762)}();
/* WEBPACK VAR INJECTION */}.call(this, "/"))

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
___CSS_LOADER_EXPORT___.push([module.i, ".shaker_cocktailSVG__3eEDi {\n  width: 40rem;\n  height: 30rem;\n}\n\n.shaker_cockailSVGContainer__4TRvT {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 700px;\n  height: 700px;\n  border-radius: 50%;\n  border: 2px solid #000;\n  margin: 40px auto 0 auto;\n}\n\n.shaker_searchContainer__1Q-xk {\n  text-align: center;\n  padding: 0 4.5rem;\n}\n.shaker_searchContainer__1Q-xk .shaker_h2__7SF51 {\n  font-size: 2.2rem;\n  margin: 5px 0;\n}\n.shaker_searchContainer__1Q-xk .shaker_h3__3GrDm {\n  font-size: 1.4rem;\n  font-weight: normal;\n  margin: 0 0 10px 0;\n}\n.shaker_searchContainer__1Q-xk .shaker_searchInput__2oqbE {\n  font-size: 1rem;\n  padding: 0.5rem;\n}\n.shaker_searchContainer__1Q-xk .shaker_searchBtn__2p0ay {\n  font-size: 1rem;\n  margin: 0.5rem;\n  padding: 0.5rem 0.8rem;\n}", "",{"version":3,"sources":["webpack://shaker.module.scss"],"names":[],"mappings":"AAAA;EACI,YAAA;EACA,aAAA;AACJ;;AAEA;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,sBAAA;EACA,wBAAA;AACJ;;AAEA;EACI,kBAAA;EACA,iBAAA;AACJ;AACI;EACI,iBAAA;EACA,aAAA;AACR;AAEI;EACI,iBAAA;EACA,mBAAA;EACA,kBAAA;AAAR;AAGI;EACI,eAAA;EACA,eAAA;AADR;AAII;EACI,eAAA;EACA,cAAA;EACA,sBAAA;AAFR","sourcesContent":[".cocktailSVG {\r\n    width: 40rem;\r\n    height: 30rem;\r\n}\r\n\r\n.cockailSVGContainer {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 700px;\r\n    height: 700px;\r\n    border-radius: 50%;\r\n    border: 2px solid #000;\r\n    margin: 40px auto 0 auto;\r\n}\r\n\r\n.searchContainer {\r\n    text-align: center;\r\n    padding: 0 4.5rem;\r\n\r\n    .h2 {\r\n        font-size: 2.2rem;\r\n        margin:  5px 0;\r\n    }\r\n    \r\n    .h3 {\r\n        font-size: 1.4rem;\r\n        font-weight: normal;\r\n        margin: 0 0 10px 0;\r\n    }\r\n\r\n    .searchInput {\r\n        font-size: 1rem;\r\n        padding: 0.5rem;\r\n    }\r\n\r\n    .searchBtn {\r\n        font-size: 1rem;\r\n        margin: 0.5rem;\r\n        padding: 0.5rem 0.8rem;\r\n    }\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"cocktailSVG": "shaker_cocktailSVG__3eEDi",
	"cockailSVGContainer": "shaker_cockailSVGContainer__4TRvT",
	"searchContainer": "shaker_searchContainer__1Q-xk",
	"h2": "shaker_h2__7SF51",
	"h3": "shaker_h3__3GrDm",
	"searchInput": "shaker_searchInput__2oqbE",
	"searchBtn": "shaker_searchBtn__2p0ay"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/webpack/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/webpack/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__dirname) {module.exports =
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 931:
/***/ (function(module) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	__nccwpck_require__.ab = __dirname + "/";/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __nccwpck_require__(931);
/******/ })()
;
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react/cjs/react-jsx-dev-runtime.development.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;
var didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function warnIfStringRefCannotBeAutoConverted(config, self) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}

function defineKeyPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingKey = function () {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }
}

function defineRefPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingRef = function () {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  {
    var propName; // Reserved names are extracted

    var props = {};
    var key = null;
    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
    // but as an intermediary step, we will use jsxDEV for everything except
    // <div {...props} key="Hi" />, because we aren't currently able to tell if
    // key is explicitly declared to be undefined or not.

    if (maybeKey !== undefined) {
      key = '' + maybeKey;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    if (hasValidRef(config)) {
      ref = config.ref;
      warnIfStringRefCannotBeAutoConverted(config, self);
    } // Remaining properties are added to a new props object


    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    } // Resolve default props


    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;

      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }

    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }

    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  }
}

var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
}

function getDeclarationErrorAddendum() {
  {
    if (ReactCurrentOwner$1.current) {
      var name = getComponentName(ReactCurrentOwner$1.current.type);

      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }

    return '';
  }
}

function getSourceInfoErrorAddendum(source) {
  {
    if (source !== undefined) {
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }

    return '';
  }
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

      if (parentName) {
        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
      }
    }

    return info;
  }
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }

    element._store.validated = true;
    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }

    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.

    var childOwner = '';

    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
      // Give the component that originally created this child.
      childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
    }

    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  {
    if (typeof node !== 'object') {
      return;
    }

    if (Array.isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];

        if (isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);

      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;

          while (!(step = iterator.next()).done) {
            if (isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}

function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  {
    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.

    if (!validType) {
      var info = '';

      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(source);

      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      var typeString;

      if (type === null) {
        typeString = 'null';
      } else if (Array.isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
        info = ' Did you accidentally export a JSX literal instead of a component?';
      } else {
        typeString = typeof type;
      }

      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }

    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.

    if (element == null) {
      return element;
    } // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)


    if (validType) {
      var children = props.children;

      if (children !== undefined) {
        if (isStaticChildren) {
          if (Array.isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              validateChildKeys(children[i], type);
            }

            if (Object.freeze) {
              Object.freeze(children);
            }
          } else {
            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
          }
        } else {
          validateChildKeys(children, type);
        }
      }
    }

    if (type === exports.Fragment) {
      validateFragmentProps(element);
    } else {
      validatePropTypes(element);
    }

    return element;
  }
} // These two functions exist to still get child warnings in dev

var jsxDEV$1 =  jsxWithValidation ;

exports.jsxDEV = jsxDEV$1;
  })();
}


/***/ }),

/***/ "./node_modules/react/cjs/react.development.js":
/*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

// TODO: this is special because it gets imported during build.
var ReactVersion = '17.0.2';

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
exports.StrictMode = 0xeacc;
exports.Profiler = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
exports.Suspense = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  exports.StrictMode = symbolFor('react.strict_mode');
  exports.Profiler = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  exports.Suspense = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
var ReactCurrentBatchConfig = {
  transition: 0
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var ReactDebugCurrentFrame = {};
var currentExtraStackFrame = null;
function setExtraStackFrame(stack) {
  {
    currentExtraStackFrame = stack;
  }
}

{
  ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
    {
      currentExtraStackFrame = stack;
    }
  }; // Stack implementation injected by the current renderer.


  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = ''; // Add an extra top frame while an element is being validated

    if (currentExtraStackFrame) {
      stack += currentExtraStackFrame;
    } // Delegate to the injected renderer-specific implementation


    var impl = ReactDebugCurrentFrame.getCurrentStack;

    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

/**
 * Used by act() to track whether you're inside an act() scope.
 */
var IsSomeRendererActing = {
  current: false
};

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner,
  IsSomeRendererActing: IsSomeRendererActing,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
}

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    printWarning('warn', format, args);
  }
}
function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + "." + callerName;

    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }

    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}
/**
 * This is the abstract API for an update queue.
 */


var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};

{
  Object.freeze(emptyObject);
}
/**
 * Base class helpers for the updating state of a component.
 */


function Component(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
  // renderer.

  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};
/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */

Component.prototype.setState = function (partialState, callback) {
  if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
    {
      throw Error( "setState(...): takes an object of state variables to update or a function which returns an object of state variables." );
    }
  }

  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */


Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};
/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */


{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };

  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

        return undefined;
      }
    });
  };

  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}

ComponentDummy.prototype = Component.prototype;
/**
 * Convenience component with default shallow equality check for sCU.
 */

function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

_assign(pureComponentPrototype, Component.prototype);

pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };

  {
    Object.seal(refObject);
  }

  return refObject;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case exports.Profiler:
      return 'Profiler';

    case exports.StrictMode:
      return 'StrictMode';

    case exports.Suspense:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

function warnIfStringRefCannotBeAutoConverted(config) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */

function createElement(type, config, children) {
  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;

      {
        warnIfStringRefCannotBeAutoConverted(config);
      }
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }

    props.children = childArray;
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
  return newElement;
}
/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */

function cloneElement(element, config, children) {
  if (!!(element === null || element === undefined)) {
    {
      throw Error( "React.cloneElement(...): The argument must be a React element, but you passed " + element + "." );
    }
  }

  var propName; // Original props are copied

  var props = _assign({}, element.props); // Reserved names are extracted


  var key = element.key;
  var ref = element.ref; // Self is preserved since the owner is preserved.

  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.

  var source = element._source; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    } // Remaining properties override existing props


    var defaultProps;

    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = key.replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */


var didWarnAboutMaps = false;
var userProvidedKeyEscapeRegex = /\/+/g;

function escapeUserProvidedKey(text) {
  return text.replace(userProvidedKeyEscapeRegex, '$&/');
}
/**
 * Generate a key string that identifies a element within a set.
 *
 * @param {*} element A element that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */


function getElementKey(element, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof element === 'object' && element !== null && element.key != null) {
    // Explicit key
    return escape('' + element.key);
  } // Implicit key determined by the index in the set


  return index.toString(36);
}

function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;

      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }

    }
  }

  if (invokeCallback) {
    var _child = children;
    var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows:

    var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;

    if (Array.isArray(mappedChild)) {
      var escapedChildKey = '';

      if (childKey != null) {
        escapedChildKey = escapeUserProvidedKey(childKey) + '/';
      }

      mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {
        return c;
      });
    } else if (mappedChild != null) {
      if (isValidElement(mappedChild)) {
        mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
        // traverseAllChildren used to do for objects as children
        escapedPrefix + ( // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
        mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
        escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
      }

      array.push(mappedChild);
    }

    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.

  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getElementKey(child, i);
      subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
    }
  } else {
    var iteratorFn = getIteratorFn(children);

    if (typeof iteratorFn === 'function') {
      var iterableChildren = children;

      {
        // Warn about using Maps as children
        if (iteratorFn === iterableChildren.entries) {
          if (!didWarnAboutMaps) {
            warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
          }

          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(iterableChildren);
      var step;
      var ii = 0;

      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getElementKey(child, ii++);
        subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
      }
    } else if (type === 'object') {
      var childrenString = '' + children;

      {
        {
          throw Error( "Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). If you meant to render a collection of children, use an array instead." );
        }
      }
    }
  }

  return subtreeCount;
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }

  var result = [];
  var count = 0;
  mapIntoArray(children, result, '', '', function (child) {
    return func.call(context, child, count++);
  });
  return result;
}
/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */


function countChildren(children) {
  var n = 0;
  mapChildren(children, function () {
    n++; // Don't return anything
  });
  return n;
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  mapChildren(children, function () {
    forEachFunc.apply(this, arguments); // Don't return anything.
  }, forEachContext);
}
/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */


function toArray(children) {
  return mapChildren(children, function (child) {
    return child;
  }) || [];
}
/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */


function onlyChild(children) {
  if (!isValidElement(children)) {
    {
      throw Error( "React.Children.only expected to receive a single React element child." );
    }
  }

  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {
        error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);
      }
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };
  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;
  var hasWarnedAboutDisplayNameOnConsumer = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;

            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }

          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;

            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }

          return context.Consumer;
        }
      },
      displayName: {
        get: function () {
          return context.displayName;
        },
        set: function (displayName) {
          if (!hasWarnedAboutDisplayNameOnConsumer) {
            warn('Setting `displayName` on Context.Consumer has no effect. ' + "You should set it directly on the context with Context.displayName = '%s'.", displayName);

            hasWarnedAboutDisplayNameOnConsumer = true;
          }
        }
      }
    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

var Uninitialized = -1;
var Pending = 0;
var Resolved = 1;
var Rejected = 2;

function lazyInitializer(payload) {
  if (payload._status === Uninitialized) {
    var ctor = payload._result;
    var thenable = ctor(); // Transition to the next state.

    var pending = payload;
    pending._status = Pending;
    pending._result = thenable;
    thenable.then(function (moduleObject) {
      if (payload._status === Pending) {
        var defaultExport = moduleObject.default;

        {
          if (defaultExport === undefined) {
            error('lazy: Expected the result of a dynamic import() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
            'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))", moduleObject);
          }
        } // Transition to the next state.


        var resolved = payload;
        resolved._status = Resolved;
        resolved._result = defaultExport;
      }
    }, function (error) {
      if (payload._status === Pending) {
        // Transition to the next state.
        var rejected = payload;
        rejected._status = Rejected;
        rejected._result = error;
      }
    });
  }

  if (payload._status === Resolved) {
    return payload._result;
  } else {
    throw payload._result;
  }
}

function lazy(ctor) {
  var payload = {
    // We use these fields to store the result.
    _status: -1,
    _result: ctor
  };
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _payload: payload,
    _init: lazyInitializer
  };

  {
    // In production, this would just set it on the object.
    var defaultProps;
    var propTypes; // $FlowFixMe

    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          defaultProps = newDefaultProps; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          propTypes = newPropTypes; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      if (render.length !== 0 && render.length !== 2) {
        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
      }
    }

    if (render != null) {
      if (render.defaultProps != null || render.propTypes != null) {
        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
      }
    }
  }

  var elementType = {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name;

        if (render.displayName == null) {
          render.displayName = name;
        }
      }
    });
  }

  return elementType;
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === exports.Profiler || type === REACT_DEBUG_TRACING_MODE_TYPE || type === exports.StrictMode || type === exports.Suspense || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }

  var elementType = {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name;

        if (type.displayName == null) {
          type.displayName = name;
        }
      }
    });
  }

  return elementType;
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;

  if (!(dispatcher !== null)) {
    {
      throw Error( "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem." );
    }
  }

  return dispatcher;
}

function useContext(Context, unstable_observedBits) {
  var dispatcher = resolveDispatcher();

  {
    if (unstable_observedBits !== undefined) {
      error('useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://reactjs.org/link/rules-of-hooks' : '');
    } // TODO: add a more generic warning for invalid values.


    if (Context._context !== undefined) {
      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.

      if (realContext.Consumer === Context) {
        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }

  return dispatcher.useContext(Context, unstable_observedBits);
}
function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}
function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}
function useEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, deps);
}
function useLayoutEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, deps);
}
function useCallback(callback, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, deps);
}
function useMemo(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, deps);
}
function useImperativeHandle(ref, create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, deps);
}
function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher$1.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher$1.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case exports.Suspense:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      setExtraStackFrame(stack);
    } else {
      setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);

    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }

  return '';
}

function getSourceInfoErrorAddendum(source) {
  if (source !== undefined) {
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }

  return '';
}

function getSourceInfoErrorAddendumForProps(elementProps) {
  if (elementProps !== null && elementProps !== undefined) {
    return getSourceInfoErrorAddendum(elementProps.__source);
  }

  return '';
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

    if (parentName) {
      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
    }
  }

  return info;
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }

  element._store.validated = true;
  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }

  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.

  var childOwner = '';

  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
  }

  {
    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }

  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];

      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);

    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;

        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}
function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.

  if (!validType) {
    var info = '';

    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString;

    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    {
      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }
  }

  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.

  if (element == null) {
    return element;
  } // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)


  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === exports.Fragment) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}
var didWarnAboutDeprecatedCreateFactory = false;
function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;

  {
    if (!didWarnAboutDeprecatedCreateFactory) {
      didWarnAboutDeprecatedCreateFactory = true;

      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
    } // Legacy hook: remove it


    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}
function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);

  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }

  validatePropTypes(newElement);
  return newElement;
}

{

  try {
    var frozenObject = Object.freeze({});
    /* eslint-disable no-new */

    new Map([[frozenObject, null]]);
    new Set([frozenObject]);
    /* eslint-enable no-new */
  } catch (e) {
  }
}

var createElement$1 =  createElementWithValidation ;
var cloneElement$1 =  cloneElementWithValidation ;
var createFactory =  createFactoryWithValidation ;
var Children = {
  map: mapChildren,
  forEach: forEachChildren,
  count: countChildren,
  toArray: toArray,
  only: onlyChild
};

exports.Children = Children;
exports.Component = Component;
exports.PureComponent = PureComponent;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
exports.cloneElement = cloneElement$1;
exports.createContext = createContext;
exports.createElement = createElement$1;
exports.createFactory = createFactory;
exports.createRef = createRef;
exports.forwardRef = forwardRef;
exports.isValidElement = isValidElement;
exports.lazy = lazy;
exports.memo = memo;
exports.useCallback = useCallback;
exports.useContext = useContext;
exports.useDebugValue = useDebugValue;
exports.useEffect = useEffect;
exports.useImperativeHandle = useImperativeHandle;
exports.useLayoutEffect = useLayoutEffect;
exports.useMemo = useMemo;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;
exports.version = ReactVersion;
  })();
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "./node_modules/react/cjs/react.development.js");
}


/***/ }),

/***/ "./node_modules/react/jsx-dev-runtime.js":
/*!***********************************************!*\
  !*** ./node_modules/react/jsx-dev-runtime.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-jsx-dev-runtime.development.js */ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js");
}


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Shaker_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Shaker.js */ "./components/Shaker.js");

var _jsxFileName = "C:\\Users\\jaebu\\Desktop\\cocktail-clone\\src\\client\\pages\\index.js";

 // import styled from 'styled-components';
// const HomeContainer = styled.div`
//   width: 100vw;
//   height: 100vh;
// `;
// const Title = styled.h1`
//   font-size: '3rem' : '1rem';
// `;
// const Navbar = styled.div`
//   display: 'flex';
//   aling-items: 'baseline';
//   width: 100%;
// `;
// const NavItem = styled.a`
//   font-size: '1.1rem';
// `;
// export default function Home() {
//   return (
//     <HomeContainer>
//       <Navbar>
//         <Title>Mymy Cocktails</Title>
//         {configs.navs.map((e, index) => (
//           <NavItem key={index} href={e.href}>
//             {e.name}
//           </NavItem>
//         ))}
//       </Navbar>
//     </HomeContainer>
//   );
// }

function Home() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Shaker_js__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 5
  }, this);
}
_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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

/***/ "./styles/shaker.module.scss":
/*!***********************************!*\
  !*** ./styles/shaker.module.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./shaker.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/shaker.module.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./shaker.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/shaker.module.scss",
      function () {
        content = __webpack_require__(/*! !../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./shaker.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/shaker.module.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./svg/cocktailnotfoundsvg.js":
/*!************************************!*\
  !*** ./svg/cocktailnotfoundsvg.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CocktailNotFound; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\jaebu\\Desktop\\cocktail-clone\\src\\client\\svg\\cocktailnotfoundsvg.js";

function CocktailNotFound(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    width: "100%",
    height: "100%",
    className: className,
    viewBox: "0 0 386 286",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M273.705 280.829C275.958 280.829 278.222 280.768 280.485 280.728C290.503 280.525 302.429 282.697 310.935 276.312C313.98 273.998 316.954 271.308 320.649 270.222C323.907 269.207 327.429 269.664 330.799 268.964C345.699 265.848 344.795 251.1 336.889 241.721C329.215 232.586 317.299 229.379 308.235 222.071C302.724 217.615 294.979 218.518 288.656 218.518C271.368 218.529 254.578 224.312 240.951 234.951C236.089 238.676 231.633 241.295 227.999 247.04C223.877 253.628 220.885 260.86 219.149 268.436C218.595 270.282 218.487 272.234 218.834 274.13C220.032 278.698 225.269 280.22 228.456 280.322C243.478 280.738 258.602 281.002 273.705 280.829Z",
      fill: "#C4FC68"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M292.696 281.438C290.848 281.438 288.991 281.377 287.143 281.326C284.819 281.255 282.627 281.195 280.495 281.235C278.364 281.276 275.968 281.316 273.705 281.337C260.571 281.479 246.168 281.337 228.365 280.819C225.239 280.728 219.575 279.246 218.276 274.252C217.901 272.277 218.006 270.241 218.58 268.314C220.343 260.686 223.354 253.402 227.492 246.756C230.537 241.944 234.191 239.255 238.058 236.413C238.88 235.814 239.723 235.195 240.575 234.535C254.877 223.603 271.472 217.869 288.595 218.001C289.478 218.001 290.391 218.001 291.325 218.001C297.08 217.889 303.607 217.767 308.489 221.705C312.249 224.552 316.246 227.072 320.436 229.237C326.414 232.546 332.616 235.966 337.213 241.417C342.217 247.344 344.176 254.865 342.207 260.58C341.101 263.787 338.228 267.939 330.849 269.481C329.332 269.765 327.795 269.935 326.251 269.989C324.391 270.026 322.542 270.278 320.74 270.74C317.817 271.613 315.3 273.572 312.874 275.46C312.305 275.896 311.757 276.333 311.189 276.759C305.901 280.717 299.364 281.438 292.696 281.438ZM281.937 280.21C283.632 280.21 285.357 280.261 287.164 280.311C295.487 280.555 304.094 280.809 310.62 275.906C311.179 275.49 311.727 275.054 312.285 274.627C314.792 272.668 317.36 270.649 320.486 269.725C322.352 269.25 324.266 268.988 326.191 268.943C327.682 268.889 329.168 268.726 330.636 268.456C336.117 267.319 339.771 264.467 341.243 260.214C343.1 254.835 341.243 247.7 336.432 242.036C331.905 236.727 325.815 233.347 319.948 230.14C315.702 227.951 311.654 225.397 307.849 222.507C303.252 218.792 296.918 218.914 291.346 219.026C290.229 219.026 289.143 219.026 288.077 219.026C271.37 219.026 255.171 224.659 241.184 235.357C240.332 236.017 239.489 236.636 238.657 237.245C234.871 240.026 231.298 242.655 228.355 247.314C224.273 253.857 221.306 261.033 219.575 268.548C219.042 270.317 218.93 272.188 219.25 274.008C220.407 278.424 225.543 279.733 228.385 279.814C246.178 280.322 260.571 280.484 273.685 280.332C275.948 280.332 278.201 280.271 280.465 280.23L281.937 280.21Z",
      fill: "#231F20"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M281.338 203.75C261.038 196.858 240.068 192.585 218.936 192.189C183.573 191.56 149.915 203.801 117.436 219.046C104.88 224.953 92.2737 231.439 81.4538 241.061C73.9123 247.771 63.1127 263.736 70.4004 275.439C71.9543 277.8 74.2029 279.619 76.8355 280.646C91.2181 286.675 107.671 282.372 122.267 280.19C164.775 273.836 208.704 289.974 250.512 275.389C253.77 274.252 257.719 271.542 256.907 267.705C256.257 264.589 252.674 263.188 252.106 260.042C251.446 256.388 255.151 253.871 258.196 252.795C278.8 245.588 302.013 246.4 319.948 232.617C321.511 231.606 322.702 230.113 323.338 228.364C324.536 224.111 320.486 220.487 316.944 218.721C305.426 212.935 293.53 207.934 281.338 203.75Z",
      fill: "white"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M93.7657 284.209C87.8954 284.324 82.0619 283.258 76.6122 281.073C73.8726 280.016 71.5357 278.123 69.9335 275.663C66.6449 270.375 66.6145 263.625 69.8625 256.134C72.5154 250.26 76.3347 244.987 81.0884 240.635C92.3549 230.617 105.631 223.979 117.192 218.549C146.322 204.866 181.198 190.961 218.946 191.641C238.901 191.996 259.941 195.894 281.5 203.232C293.713 207.422 305.629 212.431 317.167 218.224C321.034 220.152 325.094 223.989 323.826 228.465C323.164 230.323 321.908 231.91 320.253 232.982C308.56 241.965 294.421 244.837 280.749 247.618C273.309 249.131 265.605 250.663 258.368 253.231C255.323 254.297 251.994 256.682 252.573 259.91C252.966 261.317 253.76 262.579 254.856 263.544C256.062 264.632 256.934 266.04 257.374 267.604C258.236 271.664 254.329 274.597 250.654 275.866C226.416 284.321 201.102 282.473 176.61 280.677C158.726 279.367 140.232 278.018 122.318 280.677C120.085 281.002 117.811 281.387 115.507 281.773C108.301 282.971 100.962 284.209 93.7657 284.209ZM216.307 192.636C179.767 192.636 145.967 206.156 117.628 219.462C106.128 224.872 92.9334 231.459 81.7684 241.396C77.1202 245.643 73.3868 250.792 70.7963 256.53C68.6242 261.524 66.8682 268.811 70.7963 275.115C72.2852 277.394 74.4555 279.145 76.9979 280.119C89.046 285.194 102.373 282.92 115.334 280.748C117.649 280.362 119.922 279.976 122.165 279.642C140.192 276.942 158.705 278.302 176.681 279.642C201.041 281.428 226.284 283.275 250.319 274.891C253.567 273.755 257.099 271.217 256.409 267.786C255.992 266.419 255.205 265.193 254.136 264.244C252.907 263.144 252.028 261.708 251.608 260.113C250.908 256.256 254.653 253.485 258.064 252.297C265.372 249.74 273.106 248.166 280.576 246.644C294.137 243.893 308.164 241.041 319.674 232.2C321.145 231.251 322.27 229.852 322.882 228.211C323.978 224.324 320.263 220.903 316.741 219.148C305.244 213.385 293.376 208.393 281.216 204.207C259.759 196.909 238.809 193.042 218.966 192.676L216.307 192.636Z",
      fill: "#231F20"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M289.884 252.683C288.421 252.685 286.96 252.59 285.509 252.399C285.378 252.379 285.26 252.308 285.18 252.202C285.1 252.096 285.066 251.962 285.083 251.831C285.089 251.763 285.109 251.698 285.141 251.639C285.174 251.58 285.218 251.529 285.272 251.488C285.325 251.447 285.386 251.417 285.452 251.401C285.517 251.385 285.585 251.383 285.651 251.394C293.544 252.385 301.532 250.544 308.195 246.197C308.307 246.133 308.441 246.114 308.567 246.145C308.693 246.176 308.803 246.254 308.873 246.364C308.943 246.473 308.969 246.605 308.945 246.733C308.92 246.86 308.848 246.974 308.743 247.05C303.127 250.698 296.58 252.653 289.884 252.683Z",
      fill: "white"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M318.507 248.633C318.425 248.633 318.343 248.613 318.271 248.574C318.198 248.535 318.136 248.479 318.091 248.41C318.052 248.355 318.025 248.293 318.011 248.227C317.997 248.161 317.996 248.093 318.008 248.027C318.02 247.961 318.046 247.898 318.083 247.842C318.119 247.786 318.167 247.737 318.223 247.7L324.455 243.477C324.568 243.403 324.706 243.377 324.839 243.403C324.972 243.43 325.089 243.507 325.165 243.619C325.239 243.731 325.265 243.867 325.239 243.999C325.212 244.13 325.135 244.245 325.023 244.32L318.791 248.542C318.709 248.602 318.609 248.634 318.507 248.633Z",
      fill: "white"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M259.952 274.15C259.817 274.168 259.681 274.131 259.573 274.048C259.466 273.966 259.396 273.843 259.378 273.709C259.361 273.574 259.397 273.438 259.48 273.331C259.563 273.223 259.685 273.153 259.82 273.135C262.865 272.323 265.28 268.822 265.311 265.168C265.309 265.1 265.322 265.033 265.348 264.971C265.373 264.908 265.412 264.852 265.46 264.805C265.509 264.758 265.567 264.722 265.63 264.699C265.694 264.676 265.761 264.666 265.828 264.67C265.895 264.67 265.96 264.683 266.021 264.709C266.082 264.735 266.137 264.772 266.184 264.82C266.23 264.867 266.267 264.923 266.291 264.984C266.315 265.046 266.327 265.112 266.326 265.178C266.326 269.339 263.606 273.176 260.084 274.12L259.952 274.15Z",
      fill: "white"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M161.355 262.001C198.61 262.001 228.811 257.602 228.811 252.176C228.811 246.749 198.61 242.35 161.355 242.35C124.099 242.35 93.8977 246.749 93.8977 252.176C93.8977 257.602 124.099 262.001 161.355 262.001Z",
      fill: "#E6E7E8"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M185.664 24.0138C185.749 24.206 185.814 24.4068 185.857 24.6127L187.186 30.6418L185.735 30.9564C184.283 31.2812 182.852 31.6263 181.431 31.9714L180.132 25.8205C179.979 25.1141 180.092 24.376 180.449 23.7478C180.807 23.1196 181.384 22.6455 182.07 22.4165C182.755 22.1876 183.501 22.2198 184.165 22.5071C184.828 22.7944 185.362 23.3165 185.664 23.9732V24.0138Z",
      fill: "white"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M181.431 32.5195C181.338 32.5215 181.247 32.4968 181.167 32.4485C181.051 32.3735 180.968 32.2575 180.934 32.1237L179.655 25.9626C179.481 25.1362 179.617 24.2746 180.038 23.5421C180.458 22.8096 181.133 22.2572 181.934 21.9901C182.735 21.723 183.607 21.76 184.382 22.0938C185.158 22.4277 185.784 23.0352 186.141 23.8007C186.244 24.0248 186.323 24.2597 186.374 24.501L187.694 30.5301C187.71 30.5974 187.712 30.6674 187.7 30.7355C187.688 30.8037 187.662 30.8686 187.623 30.926C187.588 30.9832 187.54 31.032 187.484 31.0688C187.428 31.1056 187.364 31.1296 187.298 31.1391L185.968 31.4233H185.857C184.415 31.738 182.974 32.0932 181.583 32.4383L181.431 32.5195ZM183.005 22.8263C182.813 22.8265 182.623 22.8469 182.436 22.8872C181.832 23.048 181.312 23.4343 180.983 23.9666C180.655 24.499 180.543 25.137 180.67 25.7495L181.868 31.3827C183.116 31.0579 184.385 30.7433 185.674 30.4591H185.775L186.628 30.2662L185.41 24.7345C185.373 24.5669 185.318 24.4037 185.248 24.2473C185.054 23.8164 184.739 23.4519 184.34 23.1992C183.941 22.9465 183.477 22.8168 183.005 22.8263Z",
      fill: "#231F20"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M100.85 108.523C103.794 121.799 148.687 123.118 201.102 111.466C253.517 99.814 293.629 79.6053 290.676 66.3291C287.722 53.0529 238.149 19.3042 185.745 30.9564C133.341 42.6086 97.8967 95.2465 100.85 108.523Z",
      fill: "#C4FC68"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M137.279 119.921C135.614 119.921 133.99 119.921 132.407 119.85C113.223 119.292 101.835 115.303 100.353 108.685C97.369 95.2668 132.924 42.2229 185.613 30.5301C238.992 18.5937 288.26 53.0022 291.173 66.2175C294.218 79.9809 254.714 100.068 201.214 111.964C177.94 117.14 155.478 119.921 137.279 119.921ZM101.348 108.411C102.698 114.501 114.025 118.297 132.437 118.835C151.336 119.383 175.686 116.602 200.99 110.969C253.06 99.3979 293.061 79.4227 290.178 66.4408C288.768 60.0869 275.806 48.3738 256.541 39.7565C243.143 33.7578 216.144 24.7142 185.836 31.4436C133.675 43.0451 98.455 95.2364 101.348 108.411Z",
      fill: "#231F20"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M290.676 66.3292C293.558 79.2907 255.404 98.8599 204.807 110.624C203.589 110.918 202.35 111.192 201.112 111.476L198.483 112.045C147.195 123.068 103.743 121.576 100.84 108.523C97.9374 95.4698 136.893 75.5961 188.232 63.8627L190.414 63.3755L194.22 62.5432C245.001 51.8147 287.793 53.3778 290.676 66.3292Z",
      fill: "#231F20"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M137.319 119.931C116.126 119.931 102.008 116.095 100.353 108.634C97.3081 95.1755 135.878 75.3018 188.12 63.3958L190.302 62.8985L194.119 62.0763C245.6 51.1651 288.23 52.9413 291.163 66.2175C294.096 79.4937 256.227 99.1949 204.888 111.121C203.67 111.415 202.432 111.69 201.193 111.964C200.32 112.167 199.437 112.349 198.564 112.542C175.504 117.475 154.178 119.931 137.319 119.931ZM254.298 55.9863C237.693 55.9863 216.743 58.3005 194.332 63.0913L190.526 63.9236C189.785 64.0759 189.064 64.2484 188.354 64.4108C137.604 76.0021 98.526 95.754 101.338 108.442C104.149 121.129 147.682 122.479 198.382 111.578L201 111.009C202.239 110.732 203.467 110.448 204.685 110.157C254.603 98.5554 292.99 78.9558 290.178 66.5119C288.646 59.549 274.811 56.0066 254.298 56.0066V55.9863Z",
      fill: "#231F20"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M267.178 56.0066C256.308 54.9916 242.291 55.3773 226.477 57.2246C216.948 44.3617 203.452 34.9918 188.069 30.5606C226.426 24.095 256.288 46.3235 267.178 56.0066Z",
      fill: "white"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M226.477 57.7321C226.397 57.7329 226.317 57.715 226.245 57.6797C226.173 57.6445 226.11 57.5929 226.061 57.5291C216.615 44.7608 203.228 35.4581 187.968 31.0579C187.853 31.0321 187.751 30.9675 187.679 30.8749C187.607 30.7824 187.569 30.6677 187.572 30.5504C187.573 30.4332 187.615 30.32 187.691 30.2309C187.767 30.1417 187.872 30.0823 187.988 30.0632C226.487 23.5672 256.43 45.7754 267.513 55.6209C267.592 55.6922 267.647 55.7859 267.67 55.8894C267.694 55.9929 267.685 56.1011 267.645 56.1995C267.603 56.2987 267.529 56.3817 267.436 56.4365C267.343 56.4913 267.235 56.5149 267.128 56.504C256.196 55.489 242.159 55.895 226.528 57.7321H226.477ZM190.424 30.7128C204.906 35.4273 217.578 44.4984 226.71 56.6867C241.57 54.9612 254.978 54.545 265.676 55.357C254.115 45.41 226.142 25.6886 190.424 30.7128Z",
      fill: "#231F20"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M179.097 32.6718C179.097 32.6718 163.557 45.6231 157.67 72.2567C142.242 77.2505 129.027 82.8128 119.232 88.375C122.117 80.1761 126.223 72.4598 131.412 65.4867C141.674 51.8451 159.03 37.5844 179.097 32.6718Z",
      fill: "white"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M119.232 88.8621C119.114 88.8622 119 88.8229 118.907 88.7505C118.828 88.684 118.771 88.595 118.744 88.4952C118.717 88.3954 118.72 88.2897 118.755 88.1922C121.62 79.9405 125.727 72.1743 130.935 65.1619C143.267 48.8508 161.212 36.5186 178.955 32.1744C179.065 32.1502 179.181 32.1637 179.283 32.2128C179.385 32.2619 179.468 32.3437 179.518 32.4453C179.568 32.5469 179.583 32.6623 179.56 32.7732C179.537 32.8842 179.478 32.9842 179.391 33.0574C179.239 33.1894 163.912 46.2524 158.137 72.3481C158.116 72.4333 158.075 72.512 158.016 72.5774C157.958 72.6429 157.884 72.6931 157.802 72.7236C142.577 77.6464 129.311 83.2086 119.445 88.8012C119.38 88.837 119.307 88.8578 119.232 88.8621ZM177.28 33.6664C160.37 38.3557 143.521 50.2414 131.767 65.7709C126.888 72.3351 122.98 79.5686 120.166 87.2483C129.92 81.8891 142.668 76.5705 157.244 71.8C159.577 61.1646 163.97 51.0889 170.175 42.1417C172.291 39.1143 174.668 36.2784 177.28 33.6664Z",
      fill: "#231F20"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M223.036 226.801L224.812 226.324C226.461 225.851 228.173 225.632 229.887 225.674H230.212L204.837 110.593L194.22 62.5737C192.952 62.8274 191.693 63.1116 190.414 63.3857L188.232 63.8932L198.493 112.045L222.945 226.831L223.036 226.801Z",
      fill: "white"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M222.945 227.339C222.855 227.34 222.767 227.316 222.691 227.268C222.631 227.233 222.578 227.186 222.536 227.13C222.494 227.074 222.464 227.011 222.447 226.943L187.775 63.9947C187.76 63.9307 187.758 63.8643 187.769 63.7995C187.779 63.7347 187.803 63.6726 187.838 63.6169C187.873 63.5612 187.918 63.513 187.972 63.4751C188.026 63.4371 188.086 63.4102 188.151 63.3958L188.516 63.3146L190.353 62.8883L191.754 62.5838L194.159 62.0763C194.29 62.0491 194.426 62.0743 194.538 62.1465C194.65 62.2186 194.729 62.332 194.758 62.462L230.699 225.603C230.719 225.681 230.719 225.762 230.7 225.84C230.68 225.918 230.642 225.99 230.588 226.05C230.532 226.108 230.464 226.153 230.388 226.182C230.313 226.21 230.232 226.22 230.151 226.212H229.857C228.206 226.174 226.56 226.389 224.975 226.851L223.493 227.237L223.239 227.308H223.138L222.945 227.339ZM188.79 64.2687L223.3 226.192L224.66 225.836C226.234 225.398 227.858 225.166 229.492 225.146L193.865 63.1725L191.967 63.5785L190.556 63.883L188.79 64.2687Z",
      fill: "#231F20"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M223.909 252.775C223.61 252.774 223.315 252.707 223.045 252.579C222.774 252.451 222.536 252.265 222.346 252.034L140.791 153C140.452 152.584 140.291 152.05 140.344 151.516C140.398 150.982 140.661 150.49 141.075 150.15C141.49 149.809 142.023 149.646 142.557 149.697C143.092 149.748 143.584 150.009 143.927 150.422L225.482 249.425C225.727 249.723 225.882 250.083 225.929 250.466C225.976 250.848 225.913 251.236 225.748 251.584C225.583 251.932 225.323 252.225 224.997 252.431C224.672 252.636 224.294 252.745 223.909 252.744V252.775Z",
      fill: "#231F20"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M141.187 250.308C140.769 250.309 140.362 250.181 140.019 249.943C139.801 249.789 139.615 249.594 139.473 249.368C139.33 249.142 139.234 248.891 139.188 248.628C139.143 248.365 139.15 248.095 139.209 247.835C139.268 247.575 139.378 247.329 139.532 247.111L175.757 195.508C175.911 195.29 176.106 195.103 176.331 194.96C176.556 194.817 176.807 194.719 177.07 194.673C177.333 194.627 177.603 194.633 177.863 194.691C178.124 194.749 178.371 194.858 178.589 195.011C178.808 195.164 178.994 195.359 179.137 195.584C179.281 195.809 179.378 196.061 179.424 196.324C179.471 196.587 179.465 196.856 179.407 197.117C179.349 197.377 179.24 197.624 179.087 197.843L142.851 249.425C142.666 249.696 142.417 249.918 142.127 250.071C141.838 250.225 141.515 250.306 141.187 250.308Z",
      fill: "#231F20"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M145.571 143.611H94.3037C94.3037 143.611 94.0905 181.116 111.65 201.243C129.209 221.37 152.169 221.381 158.746 221.604C165.323 221.827 188.1 221.604 188.1 221.604C181.366 219.793 175.116 216.517 169.796 212.009C164.475 207.501 160.217 201.874 157.325 195.529C147.104 173.625 145.571 143.611 145.571 143.611Z",
      fill: "#C4FC68"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M169.231 222.203C164.877 222.203 160.878 222.203 158.695 222.111H157.985C150.646 221.898 128.316 221.239 111.234 201.608C93.786 181.562 93.7962 144.017 93.7962 143.642C93.7987 143.508 93.853 143.38 93.9477 143.286C94.0423 143.191 94.1699 143.137 94.3037 143.134H145.571C145.701 143.134 145.825 143.183 145.92 143.272C146.014 143.361 146.071 143.482 146.079 143.611C146.079 143.916 147.723 173.787 157.812 195.376C160.689 201.627 164.896 207.174 170.14 211.629C175.384 216.083 181.538 219.339 188.171 221.167C188.293 221.192 188.401 221.26 188.476 221.359C188.551 221.458 188.587 221.582 188.577 221.705C188.565 221.83 188.507 221.947 188.416 222.032C188.324 222.118 188.205 222.168 188.079 222.172C187.927 222.111 177.869 222.203 169.231 222.203ZM94.8213 144.119C94.8822 148.646 95.8972 182.415 111.995 200.959C128.783 220.244 150.788 220.893 158.015 221.107H158.736C163.689 221.269 178.102 221.178 184.7 221.107C178.614 218.932 173.023 215.569 168.25 211.212C163.477 206.856 159.618 201.594 156.899 195.732C147.429 175.503 145.348 148.027 145.094 144.109L94.8213 144.119Z",
      fill: "#231F20"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M148.302 220.822C148.302 220.822 164.633 218.082 170.327 205.821H221.879C221.879 205.821 213.12 217.361 208.735 219.848C204.35 222.335 188.069 221.604 188.069 221.604C188.069 221.604 154.493 220.822 148.302 220.822Z",
      fill: "#C4FC68"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M193.378 222.213C190.475 222.213 188.303 222.121 188.049 222.101C187.795 222.081 154.412 221.33 148.302 221.33C148.174 221.33 148.051 221.282 147.956 221.196C147.862 221.109 147.804 220.99 147.794 220.863C147.782 220.736 147.82 220.609 147.9 220.509C147.979 220.408 148.094 220.343 148.22 220.325C148.373 220.325 164.349 217.473 169.87 205.607C169.909 205.519 169.973 205.443 170.054 205.391C170.135 205.338 170.23 205.311 170.327 205.313H221.879C221.974 205.313 222.067 205.339 222.148 205.39C222.229 205.44 222.294 205.512 222.336 205.597C222.378 205.681 222.396 205.775 222.387 205.869C222.378 205.962 222.342 206.051 222.285 206.125C221.93 206.602 213.404 217.787 208.988 220.284C206.126 221.908 198.585 222.213 193.378 222.213ZM152.179 220.355C162.918 220.508 187.795 221.086 188.079 221.096C188.364 221.106 204.319 221.787 208.491 219.401C212.054 217.371 218.773 208.987 220.844 206.328H170.652C166.551 214.793 157.386 218.742 152.179 220.355Z",
      fill: "#231F20"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M175.443 257.342C175.145 257.342 174.85 257.277 174.58 257.151C174.31 257.025 174.071 256.84 173.88 256.611L92.365 157.618C92.0888 157.202 91.9759 156.698 92.0477 156.204C92.1196 155.71 92.3713 155.259 92.7545 154.939C93.1378 154.618 93.6258 154.45 94.1251 154.467C94.6244 154.484 95.1 154.684 95.4608 155.03L177.016 254.023C177.186 254.229 177.314 254.466 177.393 254.721C177.471 254.977 177.499 255.245 177.473 255.511C177.448 255.777 177.37 256.035 177.244 256.271C177.119 256.507 176.948 256.716 176.742 256.885C176.373 257.18 175.915 257.341 175.443 257.342Z",
      fill: "#231F20"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M92.7202 254.886C92.3007 254.881 91.8929 254.746 91.553 254.5C91.1154 254.19 90.8184 253.718 90.7271 253.19C90.6358 252.661 90.7576 252.118 91.0658 251.678L127.291 200.076C127.599 199.634 128.07 199.333 128.6 199.239C129.131 199.145 129.676 199.265 130.118 199.573C130.559 199.882 130.86 200.353 130.955 200.883C131.049 201.413 130.929 201.959 130.62 202.4L94.395 254.023C94.2063 254.291 93.9554 254.51 93.6638 254.66C93.3721 254.811 93.0483 254.888 92.7202 254.886Z",
      fill: "#231F20"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M293.051 204.856C293.043 210.757 290.693 216.414 286.518 220.583C282.342 224.753 276.683 227.095 270.782 227.095C269.219 227.093 267.662 226.93 266.133 226.608C265.595 226.486 265.067 226.354 264.539 226.202C261.31 225.256 258.337 223.592 255.841 221.335C253.345 219.079 251.392 216.287 250.126 213.169C249.637 211.964 249.256 210.717 248.99 209.444C248.267 206.062 248.344 202.558 249.212 199.21C250.081 195.863 251.718 192.764 253.994 190.159C254.237 189.875 254.491 189.601 254.745 189.347C258.146 185.8 262.631 183.486 267.493 182.77C268.293 182.644 269.1 182.569 269.909 182.547C270.203 182.547 270.487 182.547 270.782 182.547C274.514 182.546 278.188 183.483 281.463 185.273C284.739 187.062 287.513 189.647 289.529 192.788C289.833 193.275 290.128 193.803 290.402 194.28C292.155 197.529 293.066 201.165 293.051 204.856Z",
      fill: "white"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M270.782 227.643C269.185 227.642 267.594 227.475 266.031 227.146C265.473 227.024 264.935 226.892 264.397 226.73C261.105 225.75 258.075 224.044 255.529 221.737C252.984 219.431 250.988 216.583 249.69 213.403C249.185 212.169 248.795 210.891 248.523 209.586C248.195 208.031 248.029 206.446 248.025 204.856C248.029 199.352 250.023 194.035 253.638 189.885C253.892 189.591 254.146 189.317 254.41 189.053C257.899 185.437 262.483 183.072 267.452 182.323C268.273 182.202 269.1 182.127 269.929 182.1H270.812C274.626 182.101 278.379 183.062 281.725 184.894C285.07 186.726 287.901 189.371 289.955 192.585C290.27 193.082 290.574 193.6 290.848 194.108C293.274 198.626 294.104 203.832 293.203 208.881C292.302 213.93 289.724 218.527 285.885 221.929C284.959 222.767 283.96 223.521 282.901 224.182C279.268 226.455 275.067 227.655 270.782 227.643ZM270.782 183.095H269.929C269.141 183.119 268.354 183.19 267.574 183.308C262.827 184.024 258.447 186.281 255.11 189.733C254.86 189.997 254.616 190.261 254.379 190.525C251.974 193.278 250.301 196.593 249.515 200.163C248.729 203.733 248.855 207.444 249.882 210.953C250.909 214.462 252.803 217.655 255.389 220.239C257.976 222.822 261.172 224.712 264.682 225.735C265.199 225.887 265.697 226.019 266.234 226.131C267.729 226.448 269.253 226.608 270.782 226.608C274.535 226.599 278.222 225.621 281.485 223.767C284.749 221.913 287.477 219.247 289.407 216.028C291.336 212.809 292.4 209.146 292.496 205.394C292.592 201.642 291.717 197.929 289.955 194.615C289.691 194.108 289.397 193.6 289.102 193.143C287.14 190.063 284.433 187.526 281.23 185.77C278.028 184.014 274.434 183.093 270.782 183.095Z",
      fill: "#231F20"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M268.062 196.28C267.93 196.391 266.671 197.467 264.824 199.091C259.695 203.545 254.793 208.254 250.137 213.2C249.647 211.995 249.266 210.748 249 209.475C248.278 206.092 248.354 202.588 249.222 199.241C250.091 195.893 251.728 192.794 254.004 190.19C254.247 189.905 254.501 189.631 254.755 189.378C258.67 190.226 262.369 191.866 265.626 194.199C266.483 194.837 267.297 195.532 268.062 196.28Z",
      fill: "#C4FC68"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M250.126 213.717H250.045C249.96 213.704 249.88 213.669 249.812 213.616C249.745 213.563 249.692 213.493 249.66 213.413C249.155 212.179 248.764 210.901 248.492 209.596C248.165 208.041 247.998 206.456 247.995 204.867C247.999 199.362 249.992 194.045 253.608 189.895C253.862 189.611 254.115 189.327 254.379 189.063C254.439 188.999 254.515 188.953 254.599 188.928C254.683 188.903 254.771 188.901 254.856 188.921C258.839 189.791 262.603 191.463 265.92 193.833C266.794 194.475 267.628 195.17 268.417 195.914C268.504 195.999 268.559 196.112 268.57 196.233C268.581 196.354 268.548 196.475 268.478 196.574C268.445 196.63 268.4 196.679 268.346 196.716C268.102 196.919 266.894 197.954 265.148 199.497C260.032 203.937 255.144 208.632 250.502 213.565C250.453 213.614 250.394 213.653 250.33 213.679C250.265 213.706 250.196 213.718 250.126 213.717ZM254.907 189.966L254.379 190.545C252.157 193.089 250.558 196.116 249.709 199.386C248.859 202.656 248.783 206.079 249.487 209.383C249.687 210.36 249.962 211.321 250.309 212.256C254.582 207.597 260.967 201.832 264.519 198.726C265.808 197.589 266.803 196.696 267.341 196.259C266.694 195.685 266.017 195.146 265.311 194.645C262.19 192.408 258.652 190.817 254.907 189.966Z",
      fill: "#231F20"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M290.402 194.321C287.773 194.067 285.631 198.381 283.215 198.502C280.15 198.511 277.092 198.803 274.08 199.375C271.939 199.802 268.204 198.553 268.204 198.553L267.98 193.346L267.534 182.831C268.333 182.705 269.14 182.63 269.949 182.608C270.244 182.608 270.528 182.608 270.822 182.608C274.555 182.607 278.228 183.544 281.504 185.334C284.78 187.123 287.553 189.707 289.569 192.849C289.833 193.316 290.128 193.813 290.402 194.321Z",
      fill: "#C4FC68"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M273.035 199.974C271.331 199.892 269.647 199.575 268.031 199.03C267.934 198.998 267.85 198.937 267.788 198.855C267.726 198.774 267.691 198.676 267.686 198.574L266.945 182.851C266.941 182.727 266.981 182.605 267.06 182.508C267.138 182.411 267.249 182.345 267.371 182.323C268.195 182.202 269.026 182.128 269.858 182.1H270.741C274.567 182.089 278.335 183.044 281.694 184.877C285.052 186.71 287.894 189.361 289.955 192.585C290.27 193.082 290.574 193.6 290.848 194.108C290.896 194.187 290.921 194.279 290.921 194.371C290.921 194.464 290.896 194.555 290.848 194.635C290.793 194.708 290.72 194.767 290.637 194.806C290.554 194.844 290.463 194.863 290.371 194.859C289.224 194.737 288.037 195.823 286.89 196.889C285.743 197.954 284.576 199.01 283.256 199.061C280.191 199.067 277.133 199.356 274.121 199.923C273.761 199.975 273.398 199.992 273.035 199.974ZM268.691 198.168C269.625 198.462 272.335 199.183 273.969 198.878C277.024 198.301 280.126 198.005 283.236 197.995C284.18 197.995 285.174 197.051 286.22 196.087C287.141 195.073 288.304 194.308 289.6 193.864L289.133 193.093C287.083 189.903 284.236 187.305 280.872 185.555C277.509 183.805 273.748 182.964 269.96 183.115C269.32 183.115 268.681 183.186 268.051 183.267L268.691 198.168Z",
      fill: "#231F20"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M293.051 204.856C293.041 208.625 292.081 212.33 290.259 215.628C288.437 218.926 285.812 221.711 282.627 223.725L269.767 200.543L267.889 197.153L268.904 196.95C269.574 196.807 283.165 192.616 289.559 192.89C289.864 193.377 290.158 193.905 290.432 194.382C292.159 197.603 293.058 201.202 293.051 204.856Z",
      fill: "white"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M282.627 224.233H282.505C282.437 224.217 282.373 224.188 282.317 224.146C282.261 224.104 282.214 224.05 282.18 223.989L267.442 197.416C267.401 197.338 267.38 197.251 267.382 197.162C267.383 197.074 267.408 196.987 267.453 196.911C267.497 196.834 267.561 196.771 267.637 196.726C267.714 196.681 267.8 196.657 267.889 196.655H267.94L268.772 196.483C268.853 196.483 269.158 196.381 269.645 196.239C279.125 193.539 285.824 192.24 289.549 192.362C289.631 192.363 289.711 192.386 289.782 192.426C289.853 192.467 289.912 192.525 289.955 192.595C290.27 193.093 290.574 193.61 290.848 194.118C293.274 198.637 294.104 203.842 293.203 208.891C292.302 213.94 289.724 218.538 285.885 221.939C284.959 222.777 283.96 223.531 282.901 224.192C282.815 224.231 282.72 224.245 282.627 224.233ZM268.66 197.498L282.809 223.035C283.653 222.471 284.456 221.851 285.215 221.178C288.878 217.929 291.339 213.54 292.199 208.72C293.059 203.9 292.268 198.93 289.955 194.615C289.732 194.189 289.488 193.783 289.245 193.377C285.55 193.377 279.095 194.615 269.96 197.224L269.016 197.487L268.66 197.498Z",
      fill: "#231F20"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M268.061 196.28C268.061 196.351 267.99 196.645 267.889 197.132C267.737 197.914 267.493 199.162 267.219 200.837C266.204 207.15 264.682 218.65 266.133 226.628C265.595 226.506 265.067 226.374 264.539 226.222C261.31 225.276 258.337 223.613 255.841 221.356C253.345 219.099 251.392 216.307 250.126 213.19C249.637 211.984 249.256 210.738 248.99 209.465C250.637 206.69 252.932 204.357 255.678 202.664C258.449 200.84 261.335 199.196 264.316 197.741C265.513 197.132 266.768 196.642 268.061 196.28Z",
      fill: "white"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M266.133 227.156H266.021C265.473 227.034 264.935 226.902 264.397 226.74C261.104 225.759 258.073 224.051 255.527 221.743C252.982 219.435 250.987 216.585 249.69 213.403C249.185 212.169 248.795 210.891 248.523 209.586C248.494 209.466 248.512 209.339 248.573 209.231C250.273 206.394 252.626 204.003 255.435 202.258C258.22 200.42 261.123 198.765 264.123 197.305C265.364 196.674 266.662 196.164 268.001 195.782C268.074 195.767 268.15 195.769 268.222 195.788C268.294 195.808 268.361 195.844 268.417 195.894C268.474 195.941 268.52 195.999 268.552 196.066C268.583 196.133 268.6 196.206 268.599 196.28C268.599 196.432 268.518 196.736 268.417 197.234C268.417 197.234 268.417 197.234 268.417 197.295C268.265 198.086 268.021 199.325 267.757 200.928C266.742 207.099 265.24 218.63 266.671 226.547C266.686 226.629 266.681 226.713 266.656 226.793C266.631 226.872 266.588 226.945 266.529 227.004C266.477 227.055 266.415 227.095 266.347 227.121C266.279 227.147 266.206 227.159 266.133 227.156ZM249.528 209.566C249.769 210.742 250.109 211.897 250.543 213.017C251.785 216.061 253.696 218.787 256.135 220.992C258.574 223.197 261.477 224.825 264.631 225.755L265.453 225.978C264.215 217.96 265.666 206.815 266.671 200.766C266.945 199.132 267.189 197.843 267.341 197.051C266.366 197.398 265.41 197.798 264.479 198.249C261.519 199.697 258.655 201.331 255.902 203.141C253.311 204.764 251.13 206.963 249.528 209.566Z",
      fill: "#231F20"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M285.55 221.523C281.481 225.134 276.222 227.118 270.782 227.095C269.219 227.093 267.662 226.93 266.133 226.608C265.595 226.486 265.067 226.354 264.539 226.202C264.051 221.661 263.959 217.086 264.265 212.53C264.598 208.476 265.357 204.468 266.529 200.573C266.957 199.105 267.466 197.662 268.051 196.249C268.051 196.249 268.346 196.472 268.863 196.909C269.381 197.345 270.284 198.127 271.299 199.071C274.916 202.346 278.064 206.103 280.658 210.236C282.75 213.781 284.394 217.572 285.55 221.523Z",
      fill: "#C4FC68"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M270.782 227.643C269.185 227.642 267.594 227.475 266.031 227.146C265.473 227.024 264.935 226.892 264.397 226.73C264.299 226.703 264.211 226.647 264.146 226.569C264.081 226.491 264.041 226.395 264.032 226.293C263.548 221.722 263.456 217.117 263.758 212.53C264.094 208.441 264.86 204.4 266.042 200.472C266.691 198.31 267.28 196.828 267.564 196.127C267.598 196.054 267.643 195.986 267.696 195.924C267.791 195.844 267.912 195.8 268.036 195.8C268.161 195.8 268.281 195.844 268.376 195.924L269.198 196.604C269.594 196.939 270.457 197.67 271.655 198.787C275.327 202.077 278.525 205.862 281.155 210.033C283.261 213.597 284.918 217.409 286.088 221.381C286.114 221.472 286.114 221.568 286.089 221.659C286.064 221.751 286.015 221.833 285.946 221.898C285.014 222.734 284.012 223.488 282.952 224.152C279.308 226.445 275.087 227.656 270.782 227.643ZM265.016 225.847L266.234 226.151C267.729 226.468 269.253 226.628 270.782 226.628C274.88 226.63 278.895 225.472 282.363 223.289C283.28 222.714 284.153 222.069 284.971 221.36C283.828 217.578 282.236 213.946 280.231 210.54C277.663 206.446 274.545 202.723 270.964 199.477C269.787 198.381 268.934 197.66 268.549 197.335L268.275 197.102C267.95 197.914 267.503 199.132 267.016 200.766C265.851 204.624 265.099 208.594 264.773 212.611C264.48 217.022 264.561 221.45 265.016 225.847Z",
      fill: "#231F20"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M269.909 182.608C269.662 186.218 269.222 189.813 268.589 193.377C268.295 195.122 268.062 196.28 268.062 196.28C267.177 195.641 266.259 195.052 265.311 194.513C261.773 192.526 257.959 191.079 253.994 190.22C254.237 189.936 254.491 189.662 254.745 189.408C258.146 185.861 262.631 183.547 267.493 182.831C268.293 182.705 269.1 182.63 269.909 182.608Z",
      fill: "white"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M268.061 196.787C267.956 196.783 267.853 196.748 267.767 196.686C266.9 196.06 265.999 195.484 265.067 194.96C261.578 192.994 257.815 191.561 253.902 190.707C253.817 190.689 253.738 190.649 253.674 190.59C253.609 190.531 253.562 190.456 253.537 190.372C253.508 190.29 253.501 190.202 253.517 190.117C253.534 190.031 253.572 189.951 253.628 189.885C253.882 189.601 254.136 189.317 254.4 189.053C257.889 185.437 262.473 183.072 267.442 182.323C268.263 182.202 269.09 182.127 269.919 182.1C270.058 182.096 270.193 182.147 270.294 182.242C270.344 182.293 270.383 182.353 270.407 182.42C270.432 182.486 270.442 182.557 270.437 182.628C270.187 186.262 269.743 189.881 269.107 193.468C268.813 195.214 268.579 196.371 268.579 196.371C268.565 196.455 268.53 196.533 268.477 196.599C268.423 196.665 268.354 196.716 268.275 196.747C268.207 196.773 268.134 196.787 268.061 196.787ZM254.948 189.916C258.664 190.798 262.239 192.198 265.565 194.077C266.306 194.493 267.016 194.94 267.716 195.407C267.808 194.909 267.94 194.179 268.082 193.296C268.569 190.413 269.178 186.383 269.371 183.146C268.762 183.146 268.163 183.247 267.574 183.338C262.827 184.054 258.447 186.312 255.11 189.763L254.948 189.916Z",
      fill: "#231F20"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M268.061 200.949C270.164 200.949 271.868 199.245 271.868 197.142C271.868 195.04 270.164 193.336 268.061 193.336C265.959 193.336 264.255 195.04 264.255 197.142C264.255 199.245 265.959 200.949 268.061 200.949Z",
      fill: "white"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M268.061 201.456C267.208 201.456 266.374 201.203 265.665 200.729C264.956 200.255 264.403 199.581 264.076 198.793C263.75 198.005 263.664 197.138 263.831 196.301C263.997 195.464 264.408 194.695 265.011 194.092C265.614 193.489 266.383 193.078 267.22 192.912C268.057 192.745 268.924 192.83 269.712 193.157C270.501 193.483 271.174 194.036 271.648 194.746C272.122 195.455 272.375 196.289 272.375 197.142C272.373 198.286 271.917 199.381 271.109 200.19C270.3 200.998 269.205 201.453 268.061 201.456ZM268.061 193.854C267.409 193.854 266.77 194.048 266.228 194.41C265.685 194.773 265.262 195.289 265.013 195.893C264.763 196.496 264.699 197.16 264.827 197.8C264.955 198.44 265.27 199.028 265.733 199.489C266.195 199.95 266.784 200.263 267.424 200.389C268.065 200.515 268.728 200.448 269.331 200.197C269.934 199.946 270.448 199.522 270.809 198.978C271.17 198.434 271.362 197.795 271.36 197.142C271.358 196.269 271.009 195.433 270.39 194.816C269.772 194.2 268.935 193.854 268.061 193.854Z",
      fill: "#231F20"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M220.011 228.526C220.836 227.721 221.798 227.071 222.853 226.608C224.335 226.039 228.659 223.969 232.8 226.608",
      fill: "white"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M220.011 229.034C219.912 229.032 219.815 229.002 219.733 228.946C219.651 228.89 219.587 228.811 219.549 228.719C219.511 228.628 219.501 228.527 219.52 228.429C219.539 228.332 219.587 228.242 219.656 228.171C220.536 227.311 221.569 226.623 222.701 226.141L223.077 225.989C224.873 225.278 229.055 223.603 233.105 226.181C233.219 226.253 233.301 226.367 233.331 226.498C233.362 226.629 233.339 226.767 233.267 226.882C233.196 226.996 233.082 227.078 232.951 227.108C232.819 227.139 232.681 227.116 232.567 227.044C228.954 224.74 225.239 226.222 223.432 226.933L223.046 227.085C222.06 227.525 221.16 228.137 220.387 228.891C220.337 228.939 220.278 228.976 220.214 229C220.149 229.025 220.08 229.036 220.011 229.034Z",
      fill: "#231F20"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M226.852 271.258C226.193 271.258 225.533 271.258 224.873 271.207C224.739 271.207 224.61 271.154 224.514 271.058C224.419 270.963 224.366 270.834 224.366 270.699C224.366 270.565 224.419 270.436 224.514 270.341C224.61 270.245 224.739 270.192 224.873 270.192C231.076 270.501 237.262 269.313 242.91 266.731C243.032 266.676 243.172 266.672 243.297 266.719C243.423 266.767 243.524 266.862 243.58 266.985C243.609 267.044 243.625 267.109 243.629 267.176C243.632 267.242 243.622 267.308 243.599 267.371C243.577 267.433 243.542 267.491 243.496 267.539C243.451 267.588 243.397 267.627 243.336 267.654C238.161 270.016 232.541 271.245 226.852 271.258Z",
      fill: "#231F20"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M265.362 229.125C271.167 226.679 277.298 224.182 283.561 224.852C286.657 225.306 289.676 226.184 292.533 227.46",
      fill: "white"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M265.362 229.612C265.262 229.61 265.164 229.58 265.082 229.524C264.999 229.468 264.934 229.39 264.895 229.298C264.868 229.236 264.854 229.169 264.854 229.102C264.853 229.034 264.866 228.968 264.891 228.905C264.917 228.843 264.954 228.786 265.002 228.739C265.05 228.691 265.106 228.653 265.169 228.628C270.741 226.283 277.054 223.634 283.611 224.334C286.763 224.789 289.837 225.677 292.746 226.973C292.871 227.024 292.971 227.123 293.024 227.248C293.076 227.373 293.077 227.513 293.025 227.638C292.974 227.763 292.876 227.863 292.751 227.915C292.626 227.968 292.486 227.968 292.361 227.917C289.546 226.655 286.571 225.787 283.52 225.339C277.237 224.659 271.046 227.268 265.575 229.572C265.507 229.598 265.435 229.612 265.362 229.612Z",
      fill: "#231F20"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M297.578 273.531H296.898C296.831 273.529 296.765 273.513 296.705 273.485C296.644 273.457 296.59 273.417 296.545 273.368C296.499 273.319 296.464 273.262 296.441 273.199C296.418 273.137 296.408 273.07 296.41 273.003C296.421 272.871 296.481 272.747 296.579 272.656C296.677 272.566 296.805 272.516 296.938 272.516C300.929 272.648 304.852 271.464 308.103 269.146C309.118 268.446 310.011 267.634 310.915 266.842C312.701 265.077 314.814 263.677 317.137 262.721C318.567 262.303 320.043 262.058 321.532 261.991C322.628 261.932 323.72 261.803 324.8 261.605C326.91 261.101 328.844 260.038 330.4 258.526C331.956 257.015 333.076 255.112 333.641 253.018C333.657 252.951 333.687 252.889 333.728 252.834C333.769 252.778 333.82 252.732 333.879 252.696C333.938 252.661 334.003 252.638 334.071 252.628C334.139 252.617 334.208 252.621 334.275 252.637C334.342 252.654 334.404 252.684 334.46 252.725C334.515 252.766 334.561 252.817 334.597 252.876C334.632 252.935 334.655 253 334.666 253.068C334.676 253.136 334.672 253.205 334.656 253.272C334.039 255.545 332.823 257.611 331.133 259.252C329.444 260.893 327.344 262.05 325.054 262.6C323.955 262.82 322.843 262.966 321.725 263.036C320.319 263.107 318.926 263.338 317.573 263.726C315.345 264.602 313.315 265.917 311.605 267.593C310.682 268.431 309.717 269.22 308.712 269.958C305.46 272.273 301.57 273.521 297.578 273.531Z",
      fill: "white"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }, this);
}
_c = CocktailNotFound;

var _c;

$RefreshReg$(_c, "CocktailNotFound");

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

/***/ "./svg/cocktailsvg.js":
/*!****************************!*\
  !*** ./svg/cocktailsvg.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cocktail; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\jaebu\\Desktop\\cocktail-clone\\src\\client\\svg\\cocktailsvg.js";

function Cocktail(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    width: "100%",
    height: "100%",
    className: className,
    viewBox: "0 0 386 286",
    margin: "1rem",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M201.477 273.836C244.109 273.836 278.668 264.465 278.668 252.906C278.668 241.348 244.109 231.977 201.477 231.977C158.846 231.977 124.287 241.348 124.287 252.906C124.287 264.465 158.846 273.836 201.477 273.836Z",
      fill: "#E6E7E8"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M310.113 206.562C310.113 206.562 239.063 199.406 230.456 200.167C221.849 200.928 212.511 217.909 217.037 220.264C221.564 222.619 226.406 207.993 231.897 206.968C237.388 205.942 310.113 216.204 310.113 216.204V206.562Z",
      fill: "#231F20"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M218.073 221.005C217.63 221.002 217.194 220.891 216.804 220.68C215.901 220.203 214.936 219.016 215.525 216.042C216.733 209.952 223.645 200.218 230.415 199.629C238.972 198.888 307.261 205.719 310.164 206.034C310.288 206.044 310.405 206.101 310.489 206.193C310.574 206.285 310.621 206.406 310.62 206.531V216.174C310.621 216.247 310.606 216.319 310.576 216.385C310.546 216.452 310.503 216.511 310.448 216.559C310.392 216.607 310.328 216.642 310.258 216.663C310.188 216.684 310.114 216.69 310.042 216.681C309.321 216.569 237.327 206.44 231.988 207.434C229.623 207.871 227.279 211.22 225.005 214.458C222.732 217.696 220.407 221.005 218.073 221.005ZM232.212 200.583C231.501 200.583 230.923 200.583 230.507 200.634C224.417 201.172 217.667 210.459 216.52 216.235C216.307 217.31 216.124 219.188 217.271 219.787C219.301 220.802 221.666 217.452 224.173 213.88C226.568 210.479 229.035 206.957 231.806 206.44C237.114 205.425 302.267 214.56 309.616 215.575V206.968C303.83 206.45 245.224 200.614 232.212 200.614V200.583Z",
      fill: "#231F20"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M197.387 268.954C173.281 268.954 154.402 261.707 154.402 252.46L138.223 99.6009C138.208 99.4677 138.247 99.3343 138.331 99.2297C138.415 99.1252 138.536 99.0579 138.669 99.0426C138.802 99.0283 138.936 99.0673 139.04 99.1509C139.145 99.2346 139.212 99.3562 139.228 99.4892L155.468 252.409C155.468 260.996 174.296 267.939 197.438 267.939C220.58 267.939 239.408 260.996 239.408 252.46L255.648 99.4892C255.663 99.3546 255.731 99.2314 255.836 99.1467C255.942 99.062 256.077 99.0227 256.211 99.0375C256.346 99.0523 256.469 99.12 256.554 99.2257C256.639 99.3313 256.678 99.4663 256.663 99.6009L240.372 252.47C240.372 261.706 221.493 268.954 197.387 268.954Z",
      fill: "#231F20"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M197.387 119.789C164.765 119.789 138.213 110.654 138.213 99.4892C138.213 88.3242 164.765 79.1892 197.387 79.1892C230.009 79.1892 256.562 88.3242 256.562 99.4892C256.562 110.654 230.019 119.789 197.387 119.789ZM197.387 80.3057C165.323 80.3057 139.228 88.9332 139.228 99.5907C139.228 110.248 165.323 118.876 197.387 118.876C229.451 118.876 255.547 110.248 255.547 99.5907C255.547 88.9332 229.451 80.3057 197.387 80.3057Z",
      fill: "#231F20"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M248.025 152.32L235.48 254.084C235.48 254.084 222.691 265.756 194.504 264.549C166.318 263.341 158.827 253.109 158.827 253.109L146.739 152.32H248.025Z",
      fill: "#C4FC68"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M198.453 265.137C197.154 265.137 195.814 265.137 194.393 265.056C166.287 263.848 158.645 253.83 158.33 253.404C158.279 253.336 158.247 253.255 158.238 253.17L146.16 152.381C146.152 152.31 146.159 152.238 146.18 152.17C146.201 152.102 146.235 152.039 146.282 151.985C146.33 151.93 146.389 151.886 146.456 151.857C146.522 151.827 146.595 151.812 146.667 151.812H248.005C248.077 151.812 248.147 151.827 248.212 151.857C248.277 151.887 248.335 151.93 248.381 151.985C248.428 152.039 248.465 152.101 248.487 152.169C248.51 152.237 248.519 152.309 248.513 152.381L235.927 254.145C235.915 254.267 235.857 254.379 235.764 254.459C235.642 254.571 223.757 265.137 198.453 265.137ZM159.264 252.906C161.274 255.05 163.689 256.775 166.369 257.981C171.241 260.407 180.081 263.432 194.484 264.071C220.57 265.188 233.491 255.068 234.942 253.85L247.447 152.858H147.256L159.264 252.906Z",
      fill: "#231F20"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M197.357 166.185C225.34 166.185 248.025 159.4 248.025 151.031C248.025 142.662 225.34 135.877 197.357 135.877C169.373 135.877 146.688 142.662 146.688 151.031C146.688 159.4 169.373 166.185 197.357 166.185Z",
      fill: "#C4FC68"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M197.357 166.692C168.652 166.692 146.18 159.811 146.18 151.031C146.18 142.251 168.652 135.369 197.357 135.369C226.061 135.369 248.533 142.251 248.533 151.031C248.533 159.811 226.051 166.692 197.357 166.692ZM197.357 136.384C170.165 136.384 147.195 143.094 147.195 151.031C147.195 158.968 170.165 165.677 197.357 165.677C224.548 165.677 247.518 158.968 247.518 151.031C247.518 143.094 224.548 136.384 197.357 136.384Z",
      fill: "#231F20"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M175.595 148.564L155.772 75.5352L152.301 77.89L171.586 149.549C171.586 149.549 173.088 151.031 175.595 148.564Z",
      fill: "white"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M172.875 150.493C172.281 150.505 171.704 150.299 171.251 149.914C171.192 149.85 171.147 149.774 171.119 149.691L151.834 78.0321C151.804 77.9311 151.807 77.8231 151.844 77.7242C151.881 77.6254 151.948 77.5411 152.037 77.484L155.508 75.1191C155.573 75.072 155.649 75.0418 155.729 75.0312C155.809 75.0206 155.89 75.0298 155.965 75.0582C156.041 75.0863 156.11 75.1323 156.164 75.1924C156.219 75.2524 156.259 75.3247 156.28 75.4033L176.133 148.483C176.157 148.57 176.158 148.662 176.135 148.75C176.111 148.837 176.065 148.917 176.001 148.981C175.199 149.877 174.075 150.42 172.875 150.493ZM172.063 149.265C172.357 149.458 173.382 149.914 175.047 148.402L155.468 76.3371L152.889 78.1032L172.063 149.265Z",
      fill: "#231F20"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M207.263 78.3265C195.519 56.2502 170.967 44.395 147.743 51.1651C124.52 57.9351 110.239 81.2091 112.218 106.127L207.263 78.3265Z",
      fill: "white"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M112.249 106.635C112.147 106.634 112.048 106.602 111.965 106.543C111.904 106.5 111.854 106.444 111.817 106.379C111.78 106.314 111.758 106.242 111.751 106.168C109.721 80.6914 124.764 57.3566 147.601 50.6779C170.439 43.9992 195.712 55.5296 207.71 78.0829C207.742 78.1493 207.759 78.2221 207.759 78.296C207.759 78.3699 207.742 78.4427 207.71 78.5092C207.68 78.579 207.636 78.6415 207.58 78.6924C207.524 78.7433 207.457 78.7812 207.385 78.8035L112.381 106.604L112.249 106.635ZM160.817 49.7948C156.44 49.7913 152.086 50.4134 147.885 51.6421C125.698 58.1381 110.99 80.7015 112.716 105.437L206.512 78.0321C196.91 60.4218 179.026 49.805 160.817 49.805V49.7948Z",
      fill: "#231F20"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M192.85 82.5387C182.588 60.0362 163.922 46.425 147.743 51.1651C131.564 55.9051 123.17 77.4231 126.662 101.915L192.85 82.5387Z",
      fill: "#E6E7E8"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M126.662 102.423C126.565 102.422 126.469 102.394 126.388 102.341C126.326 102.302 126.274 102.249 126.234 102.188C126.194 102.127 126.167 102.058 126.154 101.986C122.531 76.5299 131.351 55.4382 147.601 50.6778C163.851 45.9175 182.649 58.9399 193.276 82.3357C193.306 82.4009 193.322 82.4719 193.322 82.5438C193.322 82.6156 193.306 82.6866 193.276 82.7519C193.245 82.8179 193.199 82.8765 193.143 82.9237C193.087 82.971 193.022 83.0058 192.952 83.0259L126.763 102.402L126.662 102.423ZM154.209 50.759C152.069 50.7553 149.94 51.0561 147.885 51.6522C132.508 56.1487 123.83 76.9663 127.078 101.235L192.15 82.1936C183.197 62.9695 168.084 50.759 154.209 50.759Z",
      fill: "#231F20"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M174.255 87.9791C165.892 64.9183 147.743 51.1651 147.743 51.1651C147.743 51.1651 139.867 72.541 145.257 96.4645L174.255 87.9791Z",
      fill: "white"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M145.257 96.972C145.167 96.9738 145.079 96.9491 145.003 96.901C144.943 96.8664 144.892 96.8196 144.851 96.7636C144.811 96.7076 144.783 96.6437 144.769 96.5762C139.4 72.815 147.175 51.2057 147.266 50.9925C147.294 50.9178 147.339 50.8506 147.397 50.796C147.455 50.7414 147.525 50.701 147.601 50.6779C147.677 50.658 147.756 50.655 147.834 50.669C147.911 50.6831 147.984 50.7138 148.048 50.7591C148.231 50.9012 166.419 64.8777 174.732 87.8066C174.754 87.8718 174.763 87.9409 174.758 88.0096C174.753 88.0784 174.735 88.1454 174.704 88.2069C174.672 88.2683 174.629 88.3229 174.577 88.3675C174.524 88.412 174.463 88.4456 174.397 88.4663L145.399 96.9517C145.353 96.969 145.305 96.9759 145.257 96.972ZM147.987 52.0075C146.749 55.7833 141.085 74.8755 145.642 95.8251L173.565 87.6442C166.135 67.5472 151.062 54.545 147.987 52.0075Z",
      fill: "#231F20"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M300.988 37.7468L287.793 40.3756L275.745 42.771L264.509 45.004L252.39 47.44L235.044 50.9012L234.759 52.6165L232.841 64.086L230.283 79.311L228.436 90.3948L226.477 102.067L224.63 113.09L222.6 125.128L220.752 136.212L218.55 149.407C218.55 149.407 219.565 152.015 224.64 152.31C229.715 152.604 230.029 149.407 230.029 149.407L231.115 142.85L233.034 131.502L235.064 119.475L236.972 108.157L238.819 97.1243L240.738 85.736L242.94 72.541L245.031 60.1478V59.955L259.972 57.0724L270.782 55.0424L283.449 52.6064L293.985 50.5764L302.734 48.8915C302.734 48.8915 306.581 41.1369 300.988 37.7468Z",
      fill: "white"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M225.33 152.848C225.117 152.848 224.883 152.848 224.65 152.848C219.372 152.533 218.184 149.742 218.134 149.63C218.114 149.54 218.114 149.446 218.134 149.356L234.546 50.7895C234.562 50.6883 234.609 50.5943 234.68 50.52C234.75 50.4458 234.842 50.3946 234.942 50.3734L300.917 37.2494C300.977 37.2337 301.04 37.231 301.101 37.2415C301.163 37.252 301.221 37.2754 301.272 37.3103C307.21 40.9034 303.302 49.0133 303.231 49.0945C303.198 49.1639 303.148 49.2241 303.086 49.2701C303.024 49.3161 302.952 49.3463 302.876 49.3584L245.488 60.4016L230.517 149.498C230.517 149.498 230.09 152.848 225.33 152.848ZM219.128 149.336C219.402 149.803 220.661 151.569 224.711 151.812C229.136 152.076 229.552 149.468 229.563 149.356L244.585 59.9042C244.6 59.7998 244.647 59.7026 244.719 59.6262C244.792 59.5498 244.887 59.4979 244.991 59.4779L302.399 48.455C302.957 47.1964 305.342 41.2079 300.887 38.305L235.48 51.3072L219.128 149.336Z",
      fill: "#231F20"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M275.745 42.771C278.611 45.7967 281.193 49.0787 283.459 52.5759L293.995 50.5459C292.224 46.9921 290.153 43.5964 287.803 40.3959L275.745 42.771Z",
      fill: "#D1D3D4"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M283.459 53.0834C283.374 53.0833 283.291 53.0618 283.216 53.021C283.142 52.9802 283.079 52.9214 283.033 52.85C280.788 49.376 278.226 46.1175 275.38 43.1161C275.316 43.052 275.271 42.9719 275.25 42.8843C275.228 42.7967 275.231 42.7049 275.258 42.6188C275.287 42.533 275.338 42.4561 275.405 42.3957C275.473 42.3352 275.555 42.2932 275.644 42.2737L287.702 39.8783C287.796 39.8603 287.893 39.8688 287.983 39.9028C288.072 39.9369 288.151 39.9951 288.209 40.0711C290.584 43.3005 292.672 46.7307 294.451 50.3226C294.485 50.393 294.503 50.4702 294.503 50.5484C294.503 50.6266 294.485 50.7038 294.451 50.7741C294.417 50.8444 294.367 50.9061 294.306 50.9544C294.244 51.0028 294.173 51.0367 294.096 51.0534L283.55 53.0834H283.459ZM276.74 43.0958C279.306 45.8661 281.635 48.8472 283.703 52.0075L293.244 50.1805C291.603 46.9537 289.709 43.8618 287.58 40.9339L276.74 43.0958Z",
      fill: "#231F20"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M232.841 64.0556C236.503 66.5122 239.883 69.3646 242.92 72.5613L245.011 60.1681C241.934 57.2103 238.488 54.6619 234.759 52.5861L232.841 64.0556Z",
      fill: "#D1D3D4"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M242.92 73.0688C242.782 73.0646 242.65 73.0063 242.555 72.9063C239.541 69.7369 236.188 66.9084 232.557 64.4717C232.476 64.4192 232.413 64.3439 232.375 64.2553C232.337 64.1668 232.326 64.069 232.344 63.9744L234.262 52.515C234.272 52.4342 234.302 52.3573 234.35 52.2916C234.398 52.2259 234.462 52.1735 234.536 52.1395C234.606 52.1021 234.685 52.0826 234.764 52.0826C234.844 52.0826 234.922 52.1021 234.993 52.1395C238.763 54.2319 242.247 56.8043 245.356 59.7926C245.416 59.8507 245.462 59.9226 245.488 60.0022C245.515 60.0817 245.522 60.1665 245.508 60.2493L243.478 72.6425C243.462 72.7362 243.42 72.8238 243.358 72.8954C243.295 72.967 243.214 73.02 243.123 73.0485L242.92 73.0688ZM233.389 63.8221C236.698 66.0657 239.778 68.629 242.585 71.4752L244.453 60.3102C241.63 57.6299 238.502 55.2896 235.135 53.3372L233.389 63.8221Z",
      fill: "#231F20"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M228.436 90.3948C232.121 92.2486 235.596 94.4946 238.799 97.0938L240.717 85.7055C237.462 83.2299 233.967 81.0877 230.283 79.311L228.436 90.3948Z",
      fill: "#D1D3D4"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M238.799 97.6013C238.684 97.6051 238.571 97.5652 238.484 97.4897C235.306 94.913 231.859 92.6873 228.202 90.8516C228.105 90.8031 228.026 90.7246 227.977 90.6278C227.927 90.5309 227.91 90.4208 227.928 90.3136L229.786 79.2298C229.799 79.1529 229.83 79.0802 229.876 79.0169C229.922 78.9536 229.981 78.9015 230.05 78.8644C230.119 78.8296 230.195 78.8115 230.273 78.8115C230.351 78.8115 230.427 78.8296 230.496 78.8644C234.216 80.6465 237.743 82.8062 241.022 85.3097C241.097 85.3644 241.156 85.4389 241.192 85.5248C241.228 85.6107 241.239 85.7048 241.225 85.7969L239.307 97.175C239.291 97.262 239.252 97.3434 239.195 97.411C239.138 97.4787 239.065 97.5303 238.982 97.5607C238.923 97.5841 238.862 97.5978 238.799 97.6013ZM228.994 90.07C232.335 91.7875 235.5 93.8272 238.444 96.16L240.169 85.9288C237.193 83.6861 234.016 81.7222 230.679 80.0621L228.994 90.07Z",
      fill: "#231F20"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M224.63 113.09C228.306 114.844 231.795 116.966 235.044 119.424L236.952 108.107C233.693 105.7 230.181 103.658 226.477 102.017L224.63 113.09Z",
      fill: "#D1D3D4"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M235.044 119.952C234.933 119.956 234.825 119.92 234.739 119.85C231.521 117.41 228.062 115.305 224.417 113.567C224.329 113.527 224.255 113.462 224.203 113.382C224.151 113.301 224.123 113.207 224.122 113.111C224.122 113.111 224.122 113.039 224.122 113.009L225.959 101.976C225.973 101.9 226.004 101.829 226.05 101.767C226.095 101.706 226.155 101.656 226.223 101.621C226.291 101.586 226.366 101.568 226.441 101.568C226.517 101.568 226.592 101.586 226.66 101.621C230.399 103.255 233.946 105.297 237.236 107.711C237.312 107.767 237.371 107.843 237.407 107.931C237.443 108.019 237.454 108.115 237.439 108.208L235.541 119.505C235.528 119.593 235.492 119.675 235.436 119.745C235.381 119.814 235.309 119.868 235.226 119.901C235.169 119.928 235.107 119.945 235.044 119.952ZM225.198 112.847C228.527 114.459 231.701 116.376 234.678 118.571L236.393 108.421C233.417 106.246 230.227 104.379 226.873 102.849L225.198 112.847Z",
      fill: "#231F20"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M220.762 136.232C224.436 138.069 227.906 140.287 231.115 142.85L233.034 131.502C229.789 129.037 226.296 126.917 222.61 125.179L220.762 136.232Z",
      fill: "#D1D3D4"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M231.115 143.347C230.998 143.349 230.883 143.31 230.791 143.236C227.615 140.691 224.175 138.496 220.529 136.689C220.435 136.637 220.358 136.558 220.309 136.462C220.261 136.366 220.242 136.258 220.255 136.151L222.112 125.067C222.123 124.989 222.152 124.915 222.199 124.851C222.245 124.788 222.306 124.736 222.376 124.702C222.445 124.664 222.522 124.645 222.6 124.645C222.678 124.645 222.754 124.664 222.823 124.702C226.543 126.45 230.068 128.586 233.338 131.076C233.402 131.123 233.454 131.184 233.489 131.254C233.524 131.325 233.542 131.403 233.541 131.482L231.613 142.941C231.598 143.027 231.561 143.108 231.506 143.175C231.451 143.243 231.379 143.295 231.298 143.327L231.115 143.347ZM221.321 135.948C224.647 137.634 227.807 139.629 230.76 141.906L232.486 131.695C229.513 129.469 226.339 127.525 223.006 125.889L221.321 135.948Z",
      fill: "#231F20"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M252.39 47.44C255.174 50.4607 257.713 53.6986 259.982 57.1231L270.792 55.0931C269.037 51.5559 266.932 48.2032 264.509 45.0852L252.39 47.44Z",
      fill: "#D1D3D4"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M259.982 57.59C259.898 57.5901 259.816 57.5698 259.741 57.5309C259.667 57.492 259.603 57.4357 259.556 57.3667C257.309 53.9589 254.787 50.7407 252.014 47.7445C251.954 47.6783 251.913 47.5977 251.893 47.5105C251.873 47.4234 251.877 47.3327 251.903 47.2472C251.932 47.1614 251.983 47.0845 252.05 47.0241C252.118 46.9637 252.2 46.9216 252.288 46.9021L264.407 44.4965C264.499 44.477 264.595 44.4838 264.683 44.5161C264.771 44.5485 264.848 44.605 264.905 44.6792C267.349 47.8231 269.474 51.2029 271.249 54.7683C271.283 54.8387 271.3 54.9159 271.3 54.9941C271.3 55.0723 271.282 55.1495 271.248 55.2198C271.214 55.2901 271.164 55.3518 271.103 55.4002C271.041 55.4485 270.97 55.4824 270.893 55.4991L260.084 57.5291L259.982 57.59ZM253.364 47.7242C255.864 50.5033 258.157 53.4615 260.226 56.575L269.99 54.6364C268.366 51.4413 266.45 48.4036 264.265 45.5623L253.364 47.7242Z",
      fill: "#231F20"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M197.387 119.789C164.755 119.789 138.213 110.654 138.213 99.5501C138.213 99.4155 138.266 99.2864 138.361 99.1913C138.456 99.0961 138.585 99.0426 138.72 99.0426C138.855 99.0426 138.984 99.0961 139.079 99.1913C139.174 99.2864 139.228 99.4155 139.228 99.5501C139.228 110.147 165.313 118.774 197.387 118.774C229.461 118.774 255.547 110.147 255.547 99.5501C255.547 99.4155 255.6 99.2864 255.695 99.1913C255.79 99.0961 255.919 99.0426 256.054 99.0426C256.189 99.0426 256.318 99.0961 256.413 99.1913C256.508 99.2864 256.562 99.4155 256.562 99.5501C256.562 110.898 230.567 119.789 197.387 119.789Z",
      fill: "#231F20"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M209.892 188.018C206.552 188.018 206.552 193.204 209.892 193.204C213.231 193.204 213.231 188.018 209.892 188.018Z",
      fill: "white"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M216.195 235.357L215.951 234.87C215.409 234.021 214.587 233.389 213.627 233.084C213.124 232.926 212.589 232.901 212.074 233.012C211.558 233.032 211.057 233.19 210.623 233.469L209.841 234.078C209.361 234.553 209.011 235.144 208.826 235.794C208.826 236.139 208.735 236.484 208.694 236.809C208.69 237.5 208.872 238.181 209.222 238.778L209.466 239.255C209.702 239.702 210.052 240.08 210.481 240.351C210.85 240.695 211.306 240.934 211.8 241.041C212.828 241.282 213.909 241.145 214.845 240.655L215.627 240.046C216.107 239.571 216.456 238.981 216.642 238.331C216.642 237.986 216.733 237.641 216.774 237.316C216.764 236.622 216.564 235.945 216.195 235.357Z",
      fill: "white"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M178.021 178.213C173.017 178.213 173.007 185.988 178.021 185.988C183.035 185.988 183.025 178.213 178.021 178.213Z",
      fill: "white"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M197.722 204.004C192.718 204.004 192.708 211.779 197.722 211.779C202.736 211.779 202.736 204.004 197.722 204.004Z",
      fill: "white"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M177.534 228.11C172.53 228.11 172.52 235.885 177.534 235.885C182.548 235.885 182.538 228.11 177.534 228.11Z",
      fill: "white"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M228.142 193.539C223.138 193.539 223.127 201.314 228.142 201.314C233.156 201.314 233.156 193.539 228.142 193.539Z",
      fill: "white"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M170.347 201.202C165.344 201.202 165.344 208.977 170.347 208.977C175.351 208.977 175.362 201.202 170.347 201.202Z",
      fill: "white"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M226.193 219.087C221.189 219.087 221.179 226.862 226.193 226.862C231.207 226.862 231.207 219.087 226.193 219.087Z",
      fill: "white"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M194.565 181.42C191.226 181.42 191.216 186.607 194.565 186.607C197.915 186.607 197.925 181.42 194.565 181.42Z",
      fill: "white"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M196.23 243.396C196.174 243.239 196.084 243.097 195.966 242.98C195.849 242.862 195.706 242.772 195.55 242.716C195.397 242.634 195.225 242.595 195.053 242.604H194.707C194.488 242.663 194.289 242.778 194.129 242.939C194.068 243.031 193.997 243.112 193.926 243.203C193.812 243.404 193.753 243.632 193.753 243.863V244.35C193.746 244.526 193.784 244.701 193.865 244.858C193.917 245.016 194.008 245.159 194.129 245.274C194.245 245.393 194.388 245.483 194.545 245.538C194.702 245.618 194.877 245.657 195.053 245.649H195.398C195.613 245.588 195.809 245.473 195.966 245.314L196.169 245.05C196.283 244.849 196.342 244.622 196.342 244.391V243.914C196.351 243.734 196.312 243.556 196.23 243.396Z",
      fill: "white"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M183.37 213.9C179.198 213.9 179.188 220.386 183.37 220.386C187.552 220.386 187.552 213.9 183.37 213.9Z",
      fill: "white"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M213.059 212.438C208.887 212.438 208.877 218.914 213.059 218.914C217.24 218.914 217.21 212.438 213.059 212.438Z",
      fill: "white"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M162.928 174.153C159.599 174.153 159.588 179.339 162.928 179.339C166.267 179.339 166.277 174.153 162.928 174.153Z",
      fill: "white"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M230.09 175.127C226.751 175.127 226.741 180.314 230.09 180.314C233.44 180.314 233.45 175.127 230.09 175.127Z",
      fill: "white"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M191.764 223.827C196.839 218.295 223.686 216.539 238.647 217.564C253.608 218.589 261.342 225.004 263.677 232.952C266.011 240.899 268.437 265.34 248.979 273.836C229.522 282.331 204.32 281.458 195.773 269.36C187.227 257.261 186.658 229.358 191.764 223.827Z",
      fill: "#231F20"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M222.041 279.946C210.694 279.946 200.412 276.789 195.357 269.644C186.476 257.088 186.171 229.155 191.399 223.482L191.764 223.827L191.399 223.482C196.91 217.513 225.107 216.133 238.677 217.057C252.41 218.011 261.464 223.603 264.154 232.809C266.509 240.848 268.813 265.726 249.182 274.303C240.603 277.976 231.374 279.895 222.041 279.946ZM229.664 217.787C214.703 217.787 196.169 219.817 192.109 224.172C187.186 229.501 187.684 257.088 196.169 269.065C203.274 279.124 226.112 283.275 248.756 273.369C267.727 265.097 265.453 240.889 263.169 233.094C260.601 224.324 251.872 218.985 238.586 218.072C235.906 217.879 232.871 217.787 229.664 217.787Z",
      fill: "#231F20"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M272.588 223.035C272.588 223.035 270.619 242.036 278.8 254.307C286.981 266.579 300.43 261.138 309.25 254.429C318.071 247.72 321.897 226.313 320.415 215.646C318.933 204.978 314.843 203.466 304.774 204.298C294.705 205.13 277.288 210.632 272.588 223.035Z",
      fill: "#231F20"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M291.64 262.113C290.739 262.114 289.839 262.039 288.95 261.889C284.697 261.179 281.145 258.712 278.384 254.571C270.193 242.3 272.071 223.157 272.091 222.964C272.086 222.924 272.086 222.883 272.091 222.842C276.831 210.368 294.188 204.572 304.693 203.78C314.843 202.989 319.289 204.44 320.872 215.565C322.455 226.689 318.416 248.116 309.555 254.825C305.799 257.687 298.806 262.113 291.64 262.113ZM273.086 223.137C272.974 224.355 271.472 242.422 279.227 254.013C281.825 257.91 285.154 260.235 289.113 260.895C296.786 262.194 304.845 257.139 308.966 254.023C312.853 251.069 316.142 244.817 318.233 236.392C320.04 229.105 320.679 221.167 319.898 215.707C318.436 205.465 314.823 203.994 304.794 204.785C294.563 205.597 277.684 211.149 273.086 223.137Z",
      fill: "#231F20"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M276.963 226.456C276.963 226.456 274.121 223.664 266.813 224.7C259.505 225.735 256.115 229.775 256.115 229.775L258.318 235.601C258.318 235.601 267.453 228.323 276.253 233.266L276.963 226.456Z",
      fill: "#231F20"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M258.328 236.057C258.281 236.067 258.232 236.067 258.186 236.057C258.11 236.037 258.04 235.998 257.981 235.946C257.923 235.893 257.878 235.827 257.851 235.753L255.658 229.917C255.623 229.833 255.612 229.741 255.626 229.651C255.641 229.562 255.68 229.478 255.739 229.409C255.882 229.247 259.353 225.268 266.752 224.223C274.151 223.177 277.196 225.989 277.318 226.11C277.372 226.165 277.413 226.23 277.439 226.302C277.466 226.374 277.476 226.45 277.471 226.527L276.76 233.287C276.753 233.369 276.725 233.449 276.679 233.518C276.632 233.587 276.57 233.644 276.496 233.682C276.421 233.722 276.338 233.743 276.253 233.743C276.168 233.743 276.084 233.722 276.009 233.682C267.645 228.973 258.754 235.905 258.642 235.976C258.549 236.036 258.439 236.065 258.328 236.057ZM256.714 229.836L258.561 234.758C260.652 233.317 268.325 228.668 275.816 232.414L276.415 226.669C275.704 226.141 272.822 224.355 266.874 225.197C263.081 225.626 259.523 227.251 256.714 229.836Z",
      fill: "#231F20"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M200.148 222.02C200.148 222.02 137.634 223.512 128.976 223.37C120.318 223.228 113.112 238.382 117.375 241.183C121.638 243.985 124.48 232.272 130.011 231.815C135.543 231.358 196.91 232.941 196.91 232.941L200.148 222.02Z",
      fill: "#231F20"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M118.694 242.147C118.123 242.14 117.567 241.96 117.101 241.63C115.507 240.615 115.172 238.108 116.177 234.839C117.72 229.846 122.653 222.883 128.854 222.883H128.986C137.543 223.045 199.508 221.543 200.138 221.533C200.217 221.532 200.295 221.549 200.367 221.583C200.439 221.616 200.503 221.665 200.554 221.726C200.599 221.792 200.63 221.866 200.644 221.945C200.658 222.024 200.655 222.105 200.635 222.182L197.417 233.084C197.381 233.187 197.314 233.278 197.225 233.343C197.136 233.408 197.03 233.445 196.92 233.449C196.301 233.449 135.523 231.896 130.052 232.343C127.626 232.535 125.637 235.266 123.881 237.671C122.277 239.884 120.612 242.147 118.694 242.147ZM128.844 223.877C123.769 223.877 118.806 229.693 117.131 235.134C116.278 237.895 116.471 240.006 117.649 240.777C119.384 241.924 120.836 240.107 123.059 237.062C124.946 234.484 127.119 231.551 129.961 231.317C135.31 230.881 190.861 232.272 196.545 232.414L199.458 222.548C192.586 222.71 137.045 224.02 128.956 223.888L128.844 223.877Z",
      fill: "#231F20"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }, this);
}
_c = Cocktail;

var _c;

$RefreshReg$(_c, "Cocktail");

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

},[["./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5Cjaebu%5CDesktop%5Ccocktail-clone%5Csrc%5Cclient%5Cpages%5Cindex.js!./","webpack"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaGFrZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvcG9seWZpbGxzL29iamVjdC1hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtY2xpZW50LXBhZ2VzLWxvYWRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vX05fRS8od2VicGFjaykvY3NzLWxvYWRlci9hcGkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9zaGFrZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vX05fRS8od2VicGFjaykvd2VicGFjay9oYXJtb255LW1vZHVsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2Nqcy9yZWFjdC1qc3gtZGV2LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9zaGFrZXIubW9kdWxlLnNjc3M/MjhlNCIsIndlYnBhY2s6Ly9fTl9FLy4vc3ZnL2NvY2t0YWlsbm90Zm91bmRzdmcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3N2Zy9jb2NrdGFpbHN2Zy5qcyJdLCJuYW1lcyI6WyJTaGFrZXIiLCJ1c2VTdGF0ZSIsImlzTm90Zm91bmQiLCJzZXRJc05vdEZvdW5kIiwic2VhcmNoSW5wdXQiLCJzZXRTZWFyY2hJbnB1dCIsImhhbmRsZUNsaWNrU2VhcmNoIiwiaGFuZGxlQ2hhbmdlSW5wdXQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzdHlsZWQiLCJjb2NrYWlsU1ZHQ29udGFpbmVyIiwiY29ja3RhaWxTVkciLCJzZWFyY2hDb250YWluZXIiLCJoMiIsImgzIiwic2VhcmNoQnRuIiwiSG9tZSIsIkNvY2t0YWlsTm90Rm91bmQiLCJjbGFzc05hbWUiLCJDb2NrdGFpbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQUEsa0JBQ2lCQyxzREFBUSxDQUFDLEtBQUQsQ0FEekI7QUFBQSxNQUNaQyxVQURZO0FBQUEsTUFDQUMsYUFEQTs7QUFBQSxtQkFFbUJGLHNEQUFRLENBQUMsRUFBRCxDQUYzQjtBQUFBLE1BRVpHLFdBRlk7QUFBQSxNQUVDQyxjQUZEOztBQUluQixNQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQU07QUFDOUJILGlCQUFhLENBQUMsSUFBRCxDQUFiO0FBQ0QsR0FGRDs7QUFJQSxNQUFNSSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUFDLENBQUMsRUFBSTtBQUM3Qkgsa0JBQWMsQ0FBQ0csQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBZDtBQUNELEdBRkQ7O0FBSUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUVDLGlFQUFNLENBQUNDLG1CQUF2QjtBQUFBLGVBQ0csQ0FBQ1YsVUFBRCxnQkFDQyxxRUFBQywyREFBRDtBQUFhLGVBQVMsRUFBRVMsaUVBQU0sQ0FBQ0U7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURELGdCQUdDLHFFQUFDLG1FQUFEO0FBQWtCLGVBQVMs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OztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEhBQTBIO0FBQzFIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbUVBQW1FOztBQUVuRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiLFdBQVcsY0FBYztBQUN6QixX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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUI7O0FBRXpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1EQUFtRDs7QUFFbkQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxH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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixZQUFZLGFBQWE7QUFDekI7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxFQUFFOztBQUVQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7O0FBR1Q7QUFDQTtBQUNBO0FBQ0E7QUFD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Q0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEhBQTBIO0FBQzFIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbUVBQW1FOztBQUVuRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLEVBQUU7QUFDYjs7O0FBR0E7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a3MvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29ja3RhaWxTVkcgZnJvbSAnLi4vc3ZnL2NvY2t0YWlsc3ZnLmpzJztcbmltcG9ydCBDb3VsZE5vdEZvdW5kU1ZHIGZyb20gJy4uL3N2Zy9jb2NrdGFpbG5vdGZvdW5kc3ZnLmpzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnLi4vc3R5bGVzL3NoYWtlci5tb2R1bGUuc2Nzcyc7XG5cbmNvbnN0IFNoYWtlciA9ICgpID0+IHtcbiAgY29uc3QgW2lzTm90Zm91bmQsIHNldElzTm90Rm91bmRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2VhcmNoSW5wdXQsIHNldFNlYXJjaElucHV0XSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zdCBoYW5kbGVDbGlja1NlYXJjaCA9ICgpID0+IHtcbiAgICBzZXRJc05vdEZvdW5kKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZUlucHV0ID0gZSA9PiB7XG4gICAgc2V0U2VhcmNoSW5wdXQoZS50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlZC5jb2NrYWlsU1ZHQ29udGFpbmVyfT5cbiAgICAgIHshaXNOb3Rmb3VuZCA/IChcbiAgICAgICAgPENvY2t0YWlsU1ZHIGNsYXNzTmFtZT17c3R5bGVkLmNvY2t0YWlsU1ZHfSAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPENvdWxkTm90Rm91bmRTVkcgY2xhc3NOYW1lPXtzdHlsZWQuY29ja3RhaWxTVkd9IC8+XG4gICAgICApfVxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlZC5zZWFyY2hDb250YWluZXJ9PlxuICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZWQuaDJ9PlRoZSBDb2NrdGFpbCBTaGFrZXI8L2gyPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZWQuaDN9PllvdSBnaXZlIHVzIGFuIGluZ3JlZGllbnQsIHdlIGdpdmUgeW91IGEgcmVjaXBlIGZvciBjb2NrdGFpbDwvaDM+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVkLnNlYXJjaElucHV0fVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VJbnB1dH1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlB1dCBvbmUgbGlxdW9yIHR5cGUgaGVyZS5cIlxuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVkLnNlYXJjaEJ0bn0gb25DbGljaz17aGFuZGxlQ2xpY2tTZWFyY2h9PlxuICAgICAgICAgIFNlYXJjaFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2hha2VyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIGFzc2lnbj1PYmplY3QuYXNzaWduLmJpbmQoT2JqZWN0KTttb2R1bGUuZXhwb3J0cz1hc3NpZ247bW9kdWxlLmV4cG9ydHMuZGVmYXVsdD1tb2R1bGUuZXhwb3J0cztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW9iamVjdC1hc3NpZ24uanMubWFwIiwiXG4gICAgKHdpbmRvdy5fX05FWFRfUCA9IHdpbmRvdy5fX05FWFRfUCB8fCBbXSkucHVzaChbXG4gICAgICBcIi9cIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxqYWVidVxcXFxEZXNrdG9wXFxcXGNvY2t0YWlsLWNsb25lXFxcXHNyY1xcXFxjbGllbnRcXFxccGFnZXNcXFxcaW5kZXguanNcIik7XG4gICAgICB9XG4gICAgXSk7XG4gICIsIlwidXNlIHN0cmljdFwiO2NvbnN0IGlzT2xkSUU9ZnVuY3Rpb24gaXNPbGRJRSgpe2xldCBtZW1vO3JldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpe2lmKHR5cGVvZiBtZW1vPT09J3VuZGVmaW5lZCcpey8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4vLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4vLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4vLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbi8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xubWVtbz1Cb29sZWFuKHdpbmRvdyYmZG9jdW1lbnQmJmRvY3VtZW50LmFsbCYmIXdpbmRvdy5hdG9iKTt9cmV0dXJuIG1lbW87fTt9KCk7Y29uc3QgZ2V0VGFyZ2V0PWZ1bmN0aW9uIGdldFRhcmdldCgpe2NvbnN0IG1lbW89e307cmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCl7aWYodHlwZW9mIG1lbW9bdGFyZ2V0XT09PSd1bmRlZmluZWQnKXtsZXQgc3R5bGVUYXJnZXQ9ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOy8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5pZih3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQmJnN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KXt0cnl7Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbi8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5zdHlsZVRhcmdldD1zdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDt9Y2F0Y2goZSl7Ly8gaXN0YW5idWwgaWdub3JlIG5leHRcbnN0eWxlVGFyZ2V0PW51bGw7fX1tZW1vW3RhcmdldF09c3R5bGVUYXJnZXQ7fXJldHVybiBtZW1vW3RhcmdldF07fTt9KCk7Y29uc3Qgc3R5bGVzSW5Eb209W107ZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcil7bGV0IHJlc3VsdD0tMTtmb3IobGV0IGk9MDtpPHN0eWxlc0luRG9tLmxlbmd0aDtpKyspe2lmKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXI9PT1pZGVudGlmaWVyKXtyZXN1bHQ9aTticmVhazt9fXJldHVybiByZXN1bHQ7fWZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LG9wdGlvbnMpe2NvbnN0IGlkQ291bnRNYXA9e307Y29uc3QgaWRlbnRpZmllcnM9W107Zm9yKGxldCBpPTA7aTxsaXN0Lmxlbmd0aDtpKyspe2NvbnN0IGl0ZW09bGlzdFtpXTtjb25zdCBpZD1vcHRpb25zLmJhc2U/aXRlbVswXStvcHRpb25zLmJhc2U6aXRlbVswXTtjb25zdCBjb3VudD1pZENvdW50TWFwW2lkXXx8MDtjb25zdCBpZGVudGlmaWVyPWAke2lkfSAke2NvdW50fWA7aWRDb3VudE1hcFtpZF09Y291bnQrMTtjb25zdCBpbmRleD1nZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtjb25zdCBvYmo9e2NzczppdGVtWzFdLG1lZGlhOml0ZW1bMl0sc291cmNlTWFwOml0ZW1bM119O2lmKGluZGV4IT09LTEpe3N0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7c3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTt9ZWxzZXtzdHlsZXNJbkRvbS5wdXNoKHtpZGVudGlmaWVyLHVwZGF0ZXI6YWRkU3R5bGUob2JqLG9wdGlvbnMpLHJlZmVyZW5jZXM6MX0pO31pZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO31yZXR1cm4gaWRlbnRpZmllcnM7fWZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKXtjb25zdCBzdHlsZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO2NvbnN0IGF0dHJpYnV0ZXM9b3B0aW9ucy5hdHRyaWJ1dGVzfHx7fTtpZih0eXBlb2YgYXR0cmlidXRlcy5ub25jZT09PSd1bmRlZmluZWQnKXtjb25zdCBub25jZT0vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbnR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyE9PSd1bmRlZmluZWQnP19fd2VicGFja19ub25jZV9fOm51bGw7aWYobm9uY2Upe2F0dHJpYnV0ZXMubm9uY2U9bm9uY2U7fX1PYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGtleT0+e3N0eWxlLnNldEF0dHJpYnV0ZShrZXksYXR0cmlidXRlc1trZXldKTt9KTtpZih0eXBlb2Ygb3B0aW9ucy5pbnNlcnQ9PT0nZnVuY3Rpb24nKXtvcHRpb25zLmluc2VydChzdHlsZSk7fWVsc2V7Y29uc3QgdGFyZ2V0PWdldFRhcmdldChvcHRpb25zLmluc2VydHx8J2hlYWQnKTtpZighdGFyZ2V0KXt0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO310YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO31yZXR1cm4gc3R5bGU7fWZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSl7Ly8gaXN0YW5idWwgaWdub3JlIGlmXG5pZihzdHlsZS5wYXJlbnROb2RlPT09bnVsbCl7cmV0dXJuIGZhbHNlO31zdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTt9LyogaXN0YW5idWwgaWdub3JlIG5leHQgICovY29uc3QgcmVwbGFjZVRleHQ9ZnVuY3Rpb24gcmVwbGFjZVRleHQoKXtjb25zdCB0ZXh0U3RvcmU9W107cmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgscmVwbGFjZW1lbnQpe3RleHRTdG9yZVtpbmRleF09cmVwbGFjZW1lbnQ7cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7fTt9KCk7ZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSxpbmRleCxyZW1vdmUsb2JqKXtjb25zdCBjc3M9cmVtb3ZlPycnOm9iai5tZWRpYT9gQG1lZGlhICR7b2JqLm1lZGlhfSB7JHtvYmouY3NzfX1gOm9iai5jc3M7Ly8gRm9yIG9sZCBJRVxuLyogaXN0YW5idWwgaWdub3JlIGlmICAqL2lmKHN0eWxlLnN0eWxlU2hlZXQpe3N0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dD1yZXBsYWNlVGV4dChpbmRleCxjc3MpO31lbHNle2NvbnN0IGNzc05vZGU9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtjb25zdCBjaGlsZE5vZGVzPXN0eWxlLmNoaWxkTm9kZXM7aWYoY2hpbGROb2Rlc1tpbmRleF0pe3N0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTt9aWYoY2hpbGROb2Rlcy5sZW5ndGgpe3N0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLGNoaWxkTm9kZXNbaW5kZXhdKTt9ZWxzZXtzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTt9fX1mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLG9wdGlvbnMsb2JqKXtsZXQgY3NzPW9iai5jc3M7Y29uc3QgbWVkaWE9b2JqLm1lZGlhO2NvbnN0IHNvdXJjZU1hcD1vYmouc291cmNlTWFwO2lmKG1lZGlhKXtzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJyxtZWRpYSk7fWVsc2V7c3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO31pZihzb3VyY2VNYXAmJnR5cGVvZiBidG9hIT09J3VuZGVmaW5lZCcpe2Nzcys9YFxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsJHtidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpfSAqL2A7fS8vIEZvciBvbGQgSUVcbi8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9pZihzdHlsZS5zdHlsZVNoZWV0KXtzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQ9Y3NzO31lbHNle3doaWxlKHN0eWxlLmZpcnN0Q2hpbGQpe3N0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO31zdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTt9fWxldCBzaW5nbGV0b249bnVsbDtsZXQgc2luZ2xldG9uQ291bnRlcj0wO2Z1bmN0aW9uIGFkZFN0eWxlKG9iaixvcHRpb25zKXtsZXQgc3R5bGU7bGV0IHVwZGF0ZTtsZXQgcmVtb3ZlO2lmKG9wdGlvbnMuc2luZ2xldG9uKXtjb25zdCBzdHlsZUluZGV4PXNpbmdsZXRvbkNvdW50ZXIrKztzdHlsZT1zaW5nbGV0b258fChzaW5nbGV0b249aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTt1cGRhdGU9YXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsc3R5bGUsc3R5bGVJbmRleCxmYWxzZSk7cmVtb3ZlPWFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLHN0eWxlLHN0eWxlSW5kZXgsdHJ1ZSk7fWVsc2V7c3R5bGU9aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO3VwZGF0ZT1hcHBseVRvVGFnLmJpbmQobnVsbCxzdHlsZSxvcHRpb25zKTtyZW1vdmU9KCk9PntyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO307fXVwZGF0ZShvYmopO3JldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmope2lmKG5ld09iail7aWYobmV3T2JqLmNzcz09PW9iai5jc3MmJm5ld09iai5tZWRpYT09PW9iai5tZWRpYSYmbmV3T2JqLnNvdXJjZU1hcD09PW9iai5zb3VyY2VNYXApe3JldHVybjt9dXBkYXRlKG9iaj1uZXdPYmopO31lbHNle3JlbW92ZSgpO319O31tb2R1bGUuZXhwb3J0cz0obGlzdCxvcHRpb25zKT0+e29wdGlvbnM9b3B0aW9uc3x8e307Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4vLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5pZighb3B0aW9ucy5zaW5nbGV0b24mJnR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiE9PSdib29sZWFuJyl7b3B0aW9ucy5zaW5nbGV0b249aXNPbGRJRSgpO31saXN0PWxpc3R8fFtdO2xldCBsYXN0SWRlbnRpZmllcnM9bW9kdWxlc1RvRG9tKGxpc3Qsb3B0aW9ucyk7cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KXtuZXdMaXN0PW5ld0xpc3R8fFtdO2lmKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSE9PSdbb2JqZWN0IEFycmF5XScpe3JldHVybjt9Zm9yKGxldCBpPTA7aTxsYXN0SWRlbnRpZmllcnMubGVuZ3RoO2krKyl7Y29uc3QgaWRlbnRpZmllcj1sYXN0SWRlbnRpZmllcnNbaV07Y29uc3QgaW5kZXg9Z2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7c3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTt9Y29uc3QgbmV3TGFzdElkZW50aWZpZXJzPW1vZHVsZXNUb0RvbShuZXdMaXN0LG9wdGlvbnMpO2ZvcihsZXQgaT0wO2k8bGFzdElkZW50aWZpZXJzLmxlbmd0aDtpKyspe2NvbnN0IGlkZW50aWZpZXI9bGFzdElkZW50aWZpZXJzW2ldO2NvbnN0IGluZGV4PWdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO2lmKHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzPT09MCl7c3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIoKTtzdHlsZXNJbkRvbS5zcGxpY2UoaW5kZXgsMSk7fX1sYXN0SWRlbnRpZmllcnM9bmV3TGFzdElkZW50aWZpZXJzO307fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cz1mdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBuPXs3NjI6ZnVuY3Rpb24obil7bi5leHBvcnRzPWZ1bmN0aW9uKG4pe3ZhciB0PVtdO3QudG9TdHJpbmc9ZnVuY3Rpb24gdG9TdHJpbmcoKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24odCl7dmFyIHI9Y3NzV2l0aE1hcHBpbmdUb1N0cmluZyh0LG4pO2lmKHRbMl0pe3JldHVyblwiQG1lZGlhIFwiLmNvbmNhdCh0WzJdLFwiIHtcIikuY29uY2F0KHIsXCJ9XCIpfXJldHVybiByfSkuam9pbihcIlwiKX07dC5pPWZ1bmN0aW9uKG4scixvKXtpZih0eXBlb2Ygbj09PVwic3RyaW5nXCIpe249W1tudWxsLG4sXCJcIl1dfXZhciBlPXt9O2lmKG8pe2Zvcih2YXIgYT0wO2E8dGhpcy5sZW5ndGg7YSsrKXt2YXIgYz10aGlzW2FdWzBdO2lmKGMhPW51bGwpe2VbY109dHJ1ZX19fWZvcih2YXIgaT0wO2k8bi5sZW5ndGg7aSsrKXt2YXIgdT1bXS5jb25jYXQobltpXSk7aWYobyYmZVt1WzBdXSl7Y29udGludWV9aWYocil7aWYoIXVbMl0pe3VbMl09cn1lbHNle3VbMl09XCJcIi5jb25jYXQocixcIiBhbmQgXCIpLmNvbmNhdCh1WzJdKX19dC5wdXNoKHUpfX07cmV0dXJuIHR9O2Z1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcobix0KXt2YXIgcj1uWzFdfHxcIlwiO3ZhciBvPW5bM107aWYoIW8pe3JldHVybiByfWlmKHQmJnR5cGVvZiBidG9hPT09XCJmdW5jdGlvblwiKXt2YXIgZT10b0NvbW1lbnQobyk7dmFyIGE9by5zb3VyY2VzLm1hcChmdW5jdGlvbihuKXtyZXR1cm5cIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KG8uc291cmNlUm9vdHx8XCJcIikuY29uY2F0KG4sXCIgKi9cIil9KTtyZXR1cm5bcl0uY29uY2F0KGEpLmNvbmNhdChbZV0pLmpvaW4oXCJcXG5cIil9cmV0dXJuW3JdLmpvaW4oXCJcXG5cIil9ZnVuY3Rpb24gdG9Db21tZW50KG4pe3ZhciB0PWJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KG4pKSkpO3ZhciByPVwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KHQpO3JldHVyblwiLyojIFwiLmNvbmNhdChyLFwiICovXCIpfX19O3ZhciB0PXt9O2Z1bmN0aW9uIF9fbmNjd3Bja19yZXF1aXJlX18ocil7aWYodFtyXSl7cmV0dXJuIHRbcl0uZXhwb3J0c312YXIgbz10W3JdPXtleHBvcnRzOnt9fTt2YXIgZT10cnVlO3RyeXtuW3JdKG8sby5leHBvcnRzLF9fbmNjd3Bja19yZXF1aXJlX18pO2U9ZmFsc2V9ZmluYWxseXtpZihlKWRlbGV0ZSB0W3JdfXJldHVybiBvLmV4cG9ydHN9X19uY2N3cGNrX3JlcXVpcmVfXy5hYj1fX2Rpcm5hbWUrXCIvXCI7cmV0dXJuIF9fbmNjd3Bja19yZXF1aXJlX18oNzYyKX0oKTsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuc2hha2VyX2NvY2t0YWlsU1ZHX18zZUVEaSB7XFxuICB3aWR0aDogNDByZW07XFxuICBoZWlnaHQ6IDMwcmVtO1xcbn1cXG5cXG4uc2hha2VyX2NvY2thaWxTVkdDb250YWluZXJfXzRUUnZUIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA3MDBweDtcXG4gIGhlaWdodDogNzAwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xcbiAgbWFyZ2luOiA0MHB4IGF1dG8gMCBhdXRvO1xcbn1cXG5cXG4uc2hha2VyX3NlYXJjaENvbnRhaW5lcl9fMVEteGsge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMCA0LjVyZW07XFxufVxcbi5zaGFrZXJfc2VhcmNoQ29udGFpbmVyX18xUS14ayAuc2hha2VyX2gyX183U0Y1MSB7XFxuICBmb250LXNpemU6IDIuMnJlbTtcXG4gIG1hcmdpbjogNXB4IDA7XFxufVxcbi5zaGFrZXJfc2VhcmNoQ29udGFpbmVyX18xUS14ayAuc2hha2VyX2gzX18zR3JEbSB7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBtYXJnaW46IDAgMCAxMHB4IDA7XFxufVxcbi5zaGFrZXJfc2VhcmNoQ29udGFpbmVyX18xUS14ayAuc2hha2VyX3NlYXJjaElucHV0X18yb3FiRSB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBwYWRkaW5nOiAwLjVyZW07XFxufVxcbi5zaGFrZXJfc2VhcmNoQ29udGFpbmVyX18xUS14ayAuc2hha2VyX3NlYXJjaEJ0bl9fMnAwYXkge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgbWFyZ2luOiAwLjVyZW07XFxuICBwYWRkaW5nOiAwLjVyZW0gMC44cmVtO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc2hha2VyLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUFDSjtBQUNJO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0FBQ1I7QUFFSTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUFSO0FBR0k7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQURSO0FBSUk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0FBRlJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNvY2t0YWlsU1ZHIHtcXHJcXG4gICAgd2lkdGg6IDQwcmVtO1xcclxcbiAgICBoZWlnaHQ6IDMwcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29ja2FpbFNWR0NvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiA3MDBweDtcXHJcXG4gICAgaGVpZ2h0OiA3MDBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xcclxcbiAgICBtYXJnaW46IDQwcHggYXV0byAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2hDb250YWluZXIge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDAgNC41cmVtO1xcclxcblxcclxcbiAgICAuaDIge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyLjJyZW07XFxyXFxuICAgICAgICBtYXJnaW46ICA1cHggMDtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLmgzIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gICAgICAgIG1hcmdpbjogMCAwIDEwcHggMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2VhcmNoSW5wdXQge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICAgICAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zZWFyY2hCdG4ge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICAgICAgbWFyZ2luOiAwLjVyZW07XFxyXFxuICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMC44cmVtO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImNvY2t0YWlsU1ZHXCI6IFwic2hha2VyX2NvY2t0YWlsU1ZHX18zZUVEaVwiLFxuXHRcImNvY2thaWxTVkdDb250YWluZXJcIjogXCJzaGFrZXJfY29ja2FpbFNWR0NvbnRhaW5lcl9fNFRSdlRcIixcblx0XCJzZWFyY2hDb250YWluZXJcIjogXCJzaGFrZXJfc2VhcmNoQ29udGFpbmVyX18xUS14a1wiLFxuXHRcImgyXCI6IFwic2hha2VyX2gyX183U0Y1MVwiLFxuXHRcImgzXCI6IFwic2hha2VyX2gzX18zR3JEbVwiLFxuXHRcInNlYXJjaElucHV0XCI6IFwic2hha2VyX3NlYXJjaElucHV0X18yb3FiRVwiLFxuXHRcInNlYXJjaEJ0blwiOiBcInNoYWtlcl9zZWFyY2hCdG5fXzJwMGF5XCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwibW9kdWxlLmV4cG9ydHMgPVxuLyoqKioqKi8gKGZ1bmN0aW9uKCkgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdHZhciBfX3dlYnBhY2tfbW9kdWxlc19fID0gKHtcblxuLyoqKi8gOTMxOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSkge1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9yaWdpbmFsTW9kdWxlKSB7XG5cdGlmICghb3JpZ2luYWxNb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0dmFyIG1vZHVsZSA9IE9iamVjdC5jcmVhdGUob3JpZ2luYWxNb2R1bGUpO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImV4cG9ydHNcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuXG5cbi8qKiovIH0pXG5cbi8qKioqKiovIFx0fSk7XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fbmNjd3Bja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuLyoqKioqKi8gXHRcdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbi8qKioqKiovIFx0XHR0cnkge1xuLyoqKioqKi8gXHRcdFx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX19uY2N3cGNrX3JlcXVpcmVfXyk7XG4vKioqKioqLyBcdFx0XHR0aHJldyA9IGZhbHNlO1xuLyoqKioqKi8gXHRcdH0gZmluYWxseSB7XG4vKioqKioqLyBcdFx0XHRpZih0aHJldykgZGVsZXRlIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi8gXHRcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyBcdC8qIHdlYnBhY2svcnVudGltZS9jb21wYXQgKi9cbi8qKioqKiovIFx0XG4vKioqKioqLyBcdF9fbmNjd3Bja19yZXF1aXJlX18uYWIgPSBfX2Rpcm5hbWUgKyBcIi9cIjsvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gXHQvLyBtb2R1bGUgZXhwb3J0cyBtdXN0IGJlIHJldHVybmVkIGZyb20gcnVudGltZSBzbyBlbnRyeSBpbmxpbmluZyBpcyBkaXNhYmxlZFxuLyoqKioqKi8gXHQvLyBzdGFydHVwXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX19uY2N3cGNrX3JlcXVpcmVfXyg5MzEpO1xuLyoqKioqKi8gfSkoKVxuOyIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTcuMC4yXG4gKiByZWFjdC1qc3gtZGV2LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIF9hc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbi8vIEFUVEVOVElPTlxuLy8gV2hlbiBhZGRpbmcgbmV3IHN5bWJvbHMgdG8gdGhpcyBmaWxlLFxuLy8gUGxlYXNlIGNvbnNpZGVyIGFsc28gYWRkaW5nIHRvICdyZWFjdC1kZXZ0b29scy1zaGFyZWQvc3JjL2JhY2tlbmQvUmVhY3RTeW1ib2xzJ1xuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSAweGVhY2E7XG5leHBvcnRzLkZyYWdtZW50ID0gMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IDB4ZWFjZTtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IDB4ZWFkOTtcbnZhciBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IDB4ZWFkYTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gMHhlYWQ1O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSAweGVhZDc7XG52YXIgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSAweGVhZTA7XG52YXIgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSAweGVhZTE7XG52YXIgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSAweGVhZTI7XG52YXIgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gMHhlYWUzO1xuXG5pZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yKSB7XG4gIHZhciBzeW1ib2xGb3IgPSBTeW1ib2wuZm9yO1xuICBSRUFDVF9FTEVNRU5UX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmVsZW1lbnQnKTtcbiAgUkVBQ1RfUE9SVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnBvcnRhbCcpO1xuICBleHBvcnRzLkZyYWdtZW50ID0gc3ltYm9sRm9yKCdyZWFjdC5mcmFnbWVudCcpO1xuICBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpO1xuICBSRUFDVF9QUk9GSUxFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm9maWxlcicpO1xuICBSRUFDVF9QUk9WSURFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm92aWRlcicpO1xuICBSRUFDVF9DT05URVhUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmNvbnRleHQnKTtcbiAgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZm9yd2FyZF9yZWYnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2UnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0Jyk7XG4gIFJFQUNUX01FTU9fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubWVtbycpO1xuICBSRUFDVF9MQVpZX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxhenknKTtcbiAgUkVBQ1RfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuYmxvY2snKTtcbiAgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNlcnZlci5ibG9jaycpO1xuICBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpO1xuICBSRUFDVF9TQ09QRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zY29wZScpO1xuICBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub3BhcXVlLmlkJyk7XG4gIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5kZWJ1Z190cmFjZV9tb2RlJyk7XG4gIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vZmZzY3JlZW4nKTtcbiAgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sZWdhY3lfaGlkZGVuJyk7XG59XG5cbnZhciBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcbnZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJztcbmZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICBpZiAobWF5YmVJdGVyYWJsZSA9PT0gbnVsbCB8fCB0eXBlb2YgbWF5YmVJdGVyYWJsZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBtYXliZUl0ZXJhdG9yID0gTUFZQkVfSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbTUFZQkVfSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXTtcblxuICBpZiAodHlwZW9mIG1heWJlSXRlcmF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gbWF5YmVJdGVyYXRvcjtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG52YXIgUmVhY3RTaGFyZWRJbnRlcm5hbHMgPSBSZWFjdC5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDtcblxuZnVuY3Rpb24gZXJyb3IoZm9ybWF0KSB7XG4gIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICBwcmludFdhcm5pbmcoJ2Vycm9yJywgZm9ybWF0LCBhcmdzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmludFdhcm5pbmcobGV2ZWwsIGZvcm1hdCwgYXJncykge1xuICAvLyBXaGVuIGNoYW5naW5nIHRoaXMgbG9naWMsIHlvdSBtaWdodCB3YW50IHRvIGFsc29cbiAgLy8gdXBkYXRlIGNvbnNvbGVXaXRoU3RhY2tEZXYud3d3LmpzIGFzIHdlbGwuXG4gIHtcbiAgICB2YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG4gICAgdmFyIHN0YWNrID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XG5cbiAgICBpZiAoc3RhY2sgIT09ICcnKSB7XG4gICAgICBmb3JtYXQgKz0gJyVzJztcbiAgICAgIGFyZ3MgPSBhcmdzLmNvbmNhdChbc3RhY2tdKTtcbiAgICB9XG5cbiAgICB2YXIgYXJnc1dpdGhGb3JtYXQgPSBhcmdzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuICcnICsgaXRlbTtcbiAgICB9KTsgLy8gQ2FyZWZ1bDogUk4gY3VycmVudGx5IGRlcGVuZHMgb24gdGhpcyBwcmVmaXhcblxuICAgIGFyZ3NXaXRoRm9ybWF0LnVuc2hpZnQoJ1dhcm5pbmc6ICcgKyBmb3JtYXQpOyAvLyBXZSBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBzcHJlYWQgKG9yIC5hcHBseSkgZGlyZWN0bHkgYmVjYXVzZSBpdFxuICAgIC8vIGJyZWFrcyBJRTk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTM2MTBcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nXG5cbiAgICBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlW2xldmVsXSwgY29uc29sZSwgYXJnc1dpdGhGb3JtYXQpO1xuICB9XG59XG5cbi8vIEZpbHRlciBjZXJ0YWluIERPTSBhdHRyaWJ1dGVzIChlLmcuIHNyYywgaHJlZikgaWYgdGhlaXIgdmFsdWVzIGFyZSBlbXB0eSBzdHJpbmdzLlxuXG52YXIgZW5hYmxlU2NvcGVBUEkgPSBmYWxzZTsgLy8gRXhwZXJpbWVudGFsIENyZWF0ZSBFdmVudCBIYW5kbGUgQVBJLlxuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gTm90ZTogdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgKGUuZy4gaWYgaXQncyBhIHBvbHlmaWxsKS5cblxuXG4gIGlmICh0eXBlID09PSBleHBvcnRzLkZyYWdtZW50IHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgfHwgZW5hYmxlU2NvcGVBUEkgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwpIHtcbiAgICBpZiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSB8fCB0eXBlWzBdID09PSBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBnZXRXcmFwcGVkTmFtZShvdXRlclR5cGUsIGlubmVyVHlwZSwgd3JhcHBlck5hbWUpIHtcbiAgdmFyIGZ1bmN0aW9uTmFtZSA9IGlubmVyVHlwZS5kaXNwbGF5TmFtZSB8fCBpbm5lclR5cGUubmFtZSB8fCAnJztcbiAgcmV0dXJuIG91dGVyVHlwZS5kaXNwbGF5TmFtZSB8fCAoZnVuY3Rpb25OYW1lICE9PSAnJyA/IHdyYXBwZXJOYW1lICsgXCIoXCIgKyBmdW5jdGlvbk5hbWUgKyBcIilcIiA6IHdyYXBwZXJOYW1lKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29udGV4dE5hbWUodHlwZSkge1xuICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCAnQ29udGV4dCc7XG59XG5cbmZ1bmN0aW9uIGdldENvbXBvbmVudE5hbWUodHlwZSkge1xuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgLy8gSG9zdCByb290LCB0ZXh0IG5vZGUgb3IganVzdCBpbnZhbGlkIHR5cGUuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB7XG4gICAgaWYgKHR5cGVvZiB0eXBlLnRhZyA9PT0gJ251bWJlcicpIHtcbiAgICAgIGVycm9yKCdSZWNlaXZlZCBhbiB1bmV4cGVjdGVkIG9iamVjdCBpbiBnZXRDb21wb25lbnROYW1lKCkuICcgKyAnVGhpcyBpcyBsaWtlbHkgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCBudWxsO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBleHBvcnRzLkZyYWdtZW50OlxuICAgICAgcmV0dXJuICdGcmFnbWVudCc7XG5cbiAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgcmV0dXJuICdQb3J0YWwnO1xuXG4gICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgcmV0dXJuICdQcm9maWxlcic7XG5cbiAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N0cmljdE1vZGUnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2VMaXN0JztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICB2YXIgY29udGV4dCA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShjb250ZXh0KSArICcuQ29uc3VtZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgIHZhciBwcm92aWRlciA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShwcm92aWRlci5fY29udGV4dCkgKyAnLlByb3ZpZGVyJztcblxuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0V3JhcHBlZE5hbWUodHlwZSwgdHlwZS5yZW5kZXIsICdGb3J3YXJkUmVmJyk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZSh0eXBlLnR5cGUpO1xuXG4gICAgICBjYXNlIFJFQUNUX0JMT0NLX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHR5cGUuX3JlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUoaW5pdChwYXlsb2FkKSk7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8vIEhlbHBlcnMgdG8gcGF0Y2ggY29uc29sZS5sb2dzIHRvIGF2b2lkIGxvZ2dpbmcgZHVyaW5nIHNpZGUtZWZmZWN0IGZyZWVcbi8vIHJlcGxheWluZyBvbiByZW5kZXIgZnVuY3Rpb24uIFRoaXMgY3VycmVudGx5IG9ubHkgcGF0Y2hlcyB0aGUgb2JqZWN0XG4vLyBsYXppbHkgd2hpY2ggd29uJ3QgY292ZXIgaWYgdGhlIGxvZyBmdW5jdGlvbiB3YXMgZXh0cmFjdGVkIGVhZ2VybHkuXG4vLyBXZSBjb3VsZCBhbHNvIGVhZ2VybHkgcGF0Y2ggdGhlIG1ldGhvZC5cbnZhciBkaXNhYmxlZERlcHRoID0gMDtcbnZhciBwcmV2TG9nO1xudmFyIHByZXZJbmZvO1xudmFyIHByZXZXYXJuO1xudmFyIHByZXZFcnJvcjtcbnZhciBwcmV2R3JvdXA7XG52YXIgcHJldkdyb3VwQ29sbGFwc2VkO1xudmFyIHByZXZHcm91cEVuZDtcblxuZnVuY3Rpb24gZGlzYWJsZWRMb2coKSB7fVxuXG5kaXNhYmxlZExvZy5fX3JlYWN0RGlzYWJsZWRMb2cgPSB0cnVlO1xuZnVuY3Rpb24gZGlzYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICBwcmV2TG9nID0gY29uc29sZS5sb2c7XG4gICAgICBwcmV2SW5mbyA9IGNvbnNvbGUuaW5mbztcbiAgICAgIHByZXZXYXJuID0gY29uc29sZS53YXJuO1xuICAgICAgcHJldkVycm9yID0gY29uc29sZS5lcnJvcjtcbiAgICAgIHByZXZHcm91cCA9IGNvbnNvbGUuZ3JvdXA7XG4gICAgICBwcmV2R3JvdXBDb2xsYXBzZWQgPSBjb25zb2xlLmdyb3VwQ29sbGFwc2VkO1xuICAgICAgcHJldkdyb3VwRW5kID0gY29uc29sZS5ncm91cEVuZDsgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xOTA5OVxuXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IGRpc2FibGVkTG9nLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBpbmZvOiBwcm9wcyxcbiAgICAgICAgbG9nOiBwcm9wcyxcbiAgICAgICAgd2FybjogcHJvcHMsXG4gICAgICAgIGVycm9yOiBwcm9wcyxcbiAgICAgICAgZ3JvdXA6IHByb3BzLFxuICAgICAgICBncm91cENvbGxhcHNlZDogcHJvcHMsXG4gICAgICAgIGdyb3VwRW5kOiBwcm9wc1xuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGRpc2FibGVkRGVwdGgrKztcbiAgfVxufVxuZnVuY3Rpb24gcmVlbmFibGVMb2dzKCkge1xuICB7XG4gICAgZGlzYWJsZWREZXB0aC0tO1xuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGxvZzogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkxvZ1xuICAgICAgICB9KSxcbiAgICAgICAgaW5mbzogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkluZm9cbiAgICAgICAgfSksXG4gICAgICAgIHdhcm46IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZXYXJuXG4gICAgICAgIH0pLFxuICAgICAgICBlcnJvcjogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkVycm9yXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cDogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cENvbGxhcHNlZDogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwQ29sbGFwc2VkXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cEVuZDogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwRW5kXG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPCAwKSB7XG4gICAgICBlcnJvcignZGlzYWJsZWREZXB0aCBmZWxsIGJlbG93IHplcm8uICcgKyAnVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnREaXNwYXRjaGVyID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcjtcbnZhciBwcmVmaXg7XG5mdW5jdGlvbiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIGlmIChwcmVmaXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gRXh0cmFjdCB0aGUgVk0gc3BlY2lmaWMgcHJlZml4IHVzZWQgYnkgZWFjaCBsaW5lLlxuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgdmFyIG1hdGNoID0geC5zdGFjay50cmltKCkubWF0Y2goL1xcbiggKihhdCApPykvKTtcbiAgICAgICAgcHJlZml4ID0gbWF0Y2ggJiYgbWF0Y2hbMV0gfHwgJyc7XG4gICAgICB9XG4gICAgfSAvLyBXZSB1c2UgdGhlIHByZWZpeCB0byBlbnN1cmUgb3VyIHN0YWNrcyBsaW5lIHVwIHdpdGggbmF0aXZlIHN0YWNrIGZyYW1lcy5cblxuXG4gICAgcmV0dXJuICdcXG4nICsgcHJlZml4ICsgbmFtZTtcbiAgfVxufVxudmFyIHJlZW50cnkgPSBmYWxzZTtcbnZhciBjb21wb25lbnRGcmFtZUNhY2hlO1xuXG57XG4gIHZhciBQb3NzaWJseVdlYWtNYXAgPSB0eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJyA/IFdlYWtNYXAgOiBNYXA7XG4gIGNvbXBvbmVudEZyYW1lQ2FjaGUgPSBuZXcgUG9zc2libHlXZWFrTWFwKCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGNvbnN0cnVjdCkge1xuICAvLyBJZiBzb21ldGhpbmcgYXNrZWQgZm9yIGEgc3RhY2sgaW5zaWRlIGEgZmFrZSByZW5kZXIsIGl0IHNob3VsZCBnZXQgaWdub3JlZC5cbiAgaWYgKCFmbiB8fCByZWVudHJ5KSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAge1xuICAgIHZhciBmcmFtZSA9IGNvbXBvbmVudEZyYW1lQ2FjaGUuZ2V0KGZuKTtcblxuICAgIGlmIChmcmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZnJhbWU7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbnRyb2w7XG4gIHJlZW50cnkgPSB0cnVlO1xuICB2YXIgcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZSA9IEVycm9yLnByZXBhcmVTdGFja1RyYWNlOyAvLyAkRmxvd0ZpeE1lIEl0IGRvZXMgYWNjZXB0IHVuZGVmaW5lZC5cblxuICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHVuZGVmaW5lZDtcbiAgdmFyIHByZXZpb3VzRGlzcGF0Y2hlcjtcblxuICB7XG4gICAgcHJldmlvdXNEaXNwYXRjaGVyID0gUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50OyAvLyBTZXQgdGhlIGRpc3BhdGNoZXIgaW4gREVWIGJlY2F1c2UgdGhpcyBtaWdodCBiZSBjYWxsIGluIHRoZSByZW5kZXIgZnVuY3Rpb25cbiAgICAvLyBmb3Igd2FybmluZ3MuXG5cbiAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQgPSBudWxsO1xuICAgIGRpc2FibGVMb2dzKCk7XG4gIH1cblxuICB0cnkge1xuICAgIC8vIFRoaXMgc2hvdWxkIHRocm93LlxuICAgIGlmIChjb25zdHJ1Y3QpIHtcbiAgICAgIC8vIFNvbWV0aGluZyBzaG91bGQgYmUgc2V0dGluZyB0aGUgcHJvcHMgaW4gdGhlIGNvbnN0cnVjdG9yLlxuICAgICAgdmFyIEZha2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lXG5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZha2UucHJvdG90eXBlLCAncHJvcHMnLCB7XG4gICAgICAgIHNldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIFdlIHVzZSBhIHRocm93aW5nIHNldHRlciBpbnN0ZWFkIG9mIGZyb3plbiBvciBub24td3JpdGFibGUgcHJvcHNcbiAgICAgICAgICAvLyBiZWNhdXNlIHRoYXQgd29uJ3QgdGhyb3cgaW4gYSBub24tc3RyaWN0IG1vZGUgZnVuY3Rpb24uXG4gICAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gJ29iamVjdCcgJiYgUmVmbGVjdC5jb25zdHJ1Y3QpIHtcbiAgICAgICAgLy8gV2UgY29uc3RydWN0IGEgZGlmZmVyZW50IGNvbnRyb2wgZm9yIHRoaXMgY2FzZSB0byBpbmNsdWRlIGFueSBleHRyYVxuICAgICAgICAvLyBmcmFtZXMgYWRkZWQgYnkgdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICB0cnkge1xuICAgICAgICAgIFJlZmxlY3QuY29uc3RydWN0KEZha2UsIFtdKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoZm4sIFtdLCBGYWtlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgRmFrZS5jYWxsKCk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZuLmNhbGwoRmFrZS5wcm90b3R5cGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICBjb250cm9sID0geDtcbiAgICAgIH1cblxuICAgICAgZm4oKTtcbiAgICB9XG4gIH0gY2F0Y2ggKHNhbXBsZSkge1xuICAgIC8vIFRoaXMgaXMgaW5saW5lZCBtYW51YWxseSBiZWNhdXNlIGNsb3N1cmUgZG9lc24ndCBkbyBpdCBmb3IgdXMuXG4gICAgaWYgKHNhbXBsZSAmJiBjb250cm9sICYmIHR5cGVvZiBzYW1wbGUuc3RhY2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBUaGlzIGV4dHJhY3RzIHRoZSBmaXJzdCBmcmFtZSBmcm9tIHRoZSBzYW1wbGUgdGhhdCBpc24ndCBhbHNvIGluIHRoZSBjb250cm9sLlxuICAgICAgLy8gU2tpcHBpbmcgb25lIGZyYW1lIHRoYXQgd2UgYXNzdW1lIGlzIHRoZSBmcmFtZSB0aGF0IGNhbGxzIHRoZSB0d28uXG4gICAgICB2YXIgc2FtcGxlTGluZXMgPSBzYW1wbGUuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIGNvbnRyb2xMaW5lcyA9IGNvbnRyb2wuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIHMgPSBzYW1wbGVMaW5lcy5sZW5ndGggLSAxO1xuICAgICAgdmFyIGMgPSBjb250cm9sTGluZXMubGVuZ3RoIC0gMTtcblxuICAgICAgd2hpbGUgKHMgPj0gMSAmJiBjID49IDAgJiYgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAvLyBXZSBleHBlY3QgYXQgbGVhc3Qgb25lIHN0YWNrIGZyYW1lIHRvIGJlIHNoYXJlZC5cbiAgICAgICAgLy8gVHlwaWNhbGx5IHRoaXMgd2lsbCBiZSB0aGUgcm9vdCBtb3N0IG9uZS4gSG93ZXZlciwgc3RhY2sgZnJhbWVzIG1heSBiZVxuICAgICAgICAvLyBjdXQgb2ZmIGR1ZSB0byBtYXhpbXVtIHN0YWNrIGxpbWl0cy4gSW4gdGhpcyBjYXNlLCBvbmUgbWF5YmUgY3V0IG9mZlxuICAgICAgICAvLyBlYXJsaWVyIHRoYW4gdGhlIG90aGVyLiBXZSBhc3N1bWUgdGhhdCB0aGUgc2FtcGxlIGlzIGxvbmdlciBvciB0aGUgc2FtZVxuICAgICAgICAvLyBhbmQgdGhlcmUgZm9yIGN1dCBvZmYgZWFybGllci4gU28gd2Ugc2hvdWxkIGZpbmQgdGhlIHJvb3QgbW9zdCBmcmFtZSBpblxuICAgICAgICAvLyB0aGUgc2FtcGxlIHNvbWV3aGVyZSBpbiB0aGUgY29udHJvbC5cbiAgICAgICAgYy0tO1xuICAgICAgfVxuXG4gICAgICBmb3IgKDsgcyA+PSAxICYmIGMgPj0gMDsgcy0tLCBjLS0pIHtcbiAgICAgICAgLy8gTmV4dCB3ZSBmaW5kIHRoZSBmaXJzdCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSB3aGljaCBzaG91bGQgYmUgdGhlXG4gICAgICAgIC8vIGZyYW1lIHRoYXQgY2FsbGVkIG91ciBzYW1wbGUgZnVuY3Rpb24gYW5kIHRoZSBjb250cm9sLlxuICAgICAgICBpZiAoc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgIC8vIEluIFY4LCB0aGUgZmlyc3QgbGluZSBpcyBkZXNjcmliaW5nIHRoZSBtZXNzYWdlIGJ1dCBvdGhlciBWTXMgZG9uJ3QuXG4gICAgICAgICAgLy8gSWYgd2UncmUgYWJvdXQgdG8gcmV0dXJuIHRoZSBmaXJzdCBsaW5lLCBhbmQgdGhlIGNvbnRyb2wgaXMgYWxzbyBvbiB0aGUgc2FtZVxuICAgICAgICAgIC8vIGxpbmUsIHRoYXQncyBhIHByZXR0eSBnb29kIGluZGljYXRvciB0aGF0IG91ciBzYW1wbGUgdGhyZXcgYXQgc2FtZSBsaW5lIGFzXG4gICAgICAgICAgLy8gdGhlIGNvbnRyb2wuIEkuZS4gYmVmb3JlIHdlIGVudGVyZWQgdGhlIHNhbXBsZSBmcmFtZS4gU28gd2UgaWdub3JlIHRoaXMgcmVzdWx0LlxuICAgICAgICAgIC8vIFRoaXMgY2FuIGhhcHBlbiBpZiB5b3UgcGFzc2VkIGEgY2xhc3MgdG8gZnVuY3Rpb24gY29tcG9uZW50LCBvciBub24tZnVuY3Rpb24uXG4gICAgICAgICAgaWYgKHMgIT09IDEgfHwgYyAhPT0gMSkge1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICBzLS07XG4gICAgICAgICAgICAgIGMtLTsgLy8gV2UgbWF5IHN0aWxsIGhhdmUgc2ltaWxhciBpbnRlcm1lZGlhdGUgZnJhbWVzIGZyb20gdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICAgICAgICAvLyBUaGUgbmV4dCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSBzaG91bGQgYmUgb3VyIG1hdGNoIHRob3VnaC5cblxuICAgICAgICAgICAgICBpZiAoYyA8IDAgfHwgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgICAgICAgIC8vIFY4IGFkZHMgYSBcIm5ld1wiIHByZWZpeCBmb3IgbmF0aXZlIGNsYXNzZXMuIExldCdzIHJlbW92ZSBpdCB0byBtYWtlIGl0IHByZXR0aWVyLlxuICAgICAgICAgICAgICAgIHZhciBfZnJhbWUgPSAnXFxuJyArIHNhbXBsZUxpbmVzW3NdLnJlcGxhY2UoJyBhdCBuZXcgJywgJyBhdCAnKTtcblxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIF9mcmFtZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSAvLyBSZXR1cm4gdGhlIGxpbmUgd2UgZm91bmQuXG5cblxuICAgICAgICAgICAgICAgIHJldHVybiBfZnJhbWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gd2hpbGUgKHMgPj0gMSAmJiBjID49IDApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGZpbmFsbHkge1xuICAgIHJlZW50cnkgPSBmYWxzZTtcblxuICAgIHtcbiAgICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudCA9IHByZXZpb3VzRGlzcGF0Y2hlcjtcbiAgICAgIHJlZW5hYmxlTG9ncygpO1xuICAgIH1cblxuICAgIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZTtcbiAgfSAvLyBGYWxsYmFjayB0byBqdXN0IHVzaW5nIHRoZSBuYW1lIGlmIHdlIGNvdWxkbid0IG1ha2UgaXQgdGhyb3cuXG5cblxuICB2YXIgbmFtZSA9IGZuID8gZm4uZGlzcGxheU5hbWUgfHwgZm4ubmFtZSA6ICcnO1xuICB2YXIgc3ludGhldGljRnJhbWUgPSBuYW1lID8gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSkgOiAnJztcblxuICB7XG4gICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIHN5bnRoZXRpY0ZyYW1lKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3ludGhldGljRnJhbWU7XG59XG5mdW5jdGlvbiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUoZm4sIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGZhbHNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG91bGRDb25zdHJ1Y3QoQ29tcG9uZW50KSB7XG4gIHZhciBwcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuICByZXR1cm4gISEocHJvdG90eXBlICYmIHByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUsIHNvdXJjZSwgb3duZXJGbikge1xuXG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICB7XG4gICAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZSh0eXBlLCBzaG91bGRDb25zdHJ1Y3QodHlwZSkpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUodHlwZSk7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlJyk7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2VMaXN0Jyk7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUodHlwZS5yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgLy8gTWVtbyBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLnR5cGUsIHNvdXJjZSwgb3duZXJGbik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfQkxPQ0tfVFlQRTpcbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZSh0eXBlLl9yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIExhenkgbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGluaXQocGF5bG9hZCksIHNvdXJjZSwgb3duZXJGbik7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge31cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxudmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5zZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBlbGVtZW50KSB7XG4gIHtcbiAgICAvLyAkRmxvd0ZpeE1lIFRoaXMgaXMgb2theSBidXQgRmxvdyBkb2Vzbid0IGtub3cgaXQuXG4gICAgdmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmIChoYXModHlwZVNwZWNzLCB0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvciQxID0gdm9pZCAwOyAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cblxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiAnICsgbG9jYXRpb24gKyAnIHR5cGUgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyAnICsgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAnICsgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICsgJ2AuJyArICdUaGlzIG9mdGVuIGhhcHBlbnMgYmVjYXVzZSBvZiB0eXBvcyBzdWNoIGFzIGBQcm9wVHlwZXMuZnVuY3Rpb25gIGluc3RlYWQgb2YgYFByb3BUeXBlcy5mdW5jYC4nKTtcbiAgICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGVycm9yJDEgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCcpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yJDEgPSBleDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxICYmICEoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJyVzOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJXMnICsgJyBgJXNgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAlcy4gJyArICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICsgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgZXJyb3IkMSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvciQxLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yJDEubWVzc2FnZV0gPSB0cnVlO1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJ0ZhaWxlZCAlcyB0eXBlOiAlcycsIGxvY2F0aW9uLCBlcnJvciQxLm1lc3NhZ2UpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudE93bmVyID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50T3duZXI7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIFJFU0VSVkVEX1BST1BTID0ge1xuICBrZXk6IHRydWUsXG4gIHJlZjogdHJ1ZSxcbiAgX19zZWxmOiB0cnVlLFxuICBfX3NvdXJjZTogdHJ1ZVxufTtcbnZhciBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bjtcbnZhciBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bjtcbnZhciBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzO1xuXG57XG4gIGRpZFdhcm5BYm91dFN0cmluZ1JlZnMgPSB7fTtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRSZWYoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdyZWYnKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAncmVmJykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5yZWYgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRLZXkoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdrZXknKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAna2V5JykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5rZXkgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZywgc2VsZikge1xuICB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcucmVmID09PSAnc3RyaW5nJyAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50ICYmIHNlbGYgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC5zdGF0ZU5vZGUgIT09IHNlbGYpIHtcbiAgICAgIHZhciBjb21wb25lbnROYW1lID0gZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpO1xuXG4gICAgICBpZiAoIWRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0pIHtcbiAgICAgICAgZXJyb3IoJ0NvbXBvbmVudCBcIiVzXCIgY29udGFpbnMgdGhlIHN0cmluZyByZWYgXCIlc1wiLiAnICsgJ1N1cHBvcnQgZm9yIHN0cmluZyByZWZzIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiAnICsgJ1RoaXMgY2FzZSBjYW5ub3QgYmUgYXV0b21hdGljYWxseSBjb252ZXJ0ZWQgdG8gYW4gYXJyb3cgZnVuY3Rpb24uICcgKyAnV2UgYXNrIHlvdSB0byBtYW51YWxseSBmaXggdGhpcyBjYXNlIGJ5IHVzaW5nIHVzZVJlZigpIG9yIGNyZWF0ZVJlZigpIGluc3RlYWQuICcgKyAnTGVhcm4gbW9yZSBhYm91dCB1c2luZyByZWZzIHNhZmVseSBoZXJlOiAnICsgJ2h0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zdHJpY3QtbW9kZS1zdHJpbmctcmVmJywgZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpLCBjb25maWcucmVmKTtcblxuICAgICAgICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHtcbiAgICB2YXIgd2FybkFib3V0QWNjZXNzaW5nS2V5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBga2V5YCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ2tleScsIHtcbiAgICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nS2V5LFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHtcbiAgICB2YXIgd2FybkFib3V0QWNjZXNzaW5nUmVmID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBgcmVmYCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ3JlZicsIHtcbiAgICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nUmVmLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH1cbn1cbi8qKlxuICogRmFjdG9yeSBtZXRob2QgdG8gY3JlYXRlIGEgbmV3IFJlYWN0IGVsZW1lbnQuIFRoaXMgbm8gbG9uZ2VyIGFkaGVyZXMgdG9cbiAqIHRoZSBjbGFzcyBwYXR0ZXJuLCBzbyBkbyBub3QgdXNlIG5ldyB0byBjYWxsIGl0LiBBbHNvLCBpbnN0YW5jZW9mIGNoZWNrXG4gKiB3aWxsIG5vdCB3b3JrLiBJbnN0ZWFkIHRlc3QgJCR0eXBlb2YgZmllbGQgYWdhaW5zdCBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgdG8gY2hlY2tcbiAqIGlmIHNvbWV0aGluZyBpcyBhIFJlYWN0IEVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0geyp9IHByb3BzXG4gKiBAcGFyYW0geyp9IGtleVxuICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSByZWZcbiAqIEBwYXJhbSB7Kn0gb3duZXJcbiAqIEBwYXJhbSB7Kn0gc2VsZiBBICp0ZW1wb3JhcnkqIGhlbHBlciB0byBkZXRlY3QgcGxhY2VzIHdoZXJlIGB0aGlzYCBpc1xuICogZGlmZmVyZW50IGZyb20gdGhlIGBvd25lcmAgd2hlbiBSZWFjdC5jcmVhdGVFbGVtZW50IGlzIGNhbGxlZCwgc28gdGhhdCB3ZVxuICogY2FuIHdhcm4uIFdlIHdhbnQgdG8gZ2V0IHJpZCBvZiBvd25lciBhbmQgcmVwbGFjZSBzdHJpbmcgYHJlZmBzIHdpdGggYXJyb3dcbiAqIGZ1bmN0aW9ucywgYW5kIGFzIGxvbmcgYXMgYHRoaXNgIGFuZCBvd25lciBhcmUgdGhlIHNhbWUsIHRoZXJlIHdpbGwgYmUgbm9cbiAqIGNoYW5nZSBpbiBiZWhhdmlvci5cbiAqIEBwYXJhbSB7Kn0gc291cmNlIEFuIGFubm90YXRpb24gb2JqZWN0IChhZGRlZCBieSBhIHRyYW5zcGlsZXIgb3Igb3RoZXJ3aXNlKVxuICogaW5kaWNhdGluZyBmaWxlbmFtZSwgbGluZSBudW1iZXIsIGFuZC9vciBvdGhlciBpbmZvcm1hdGlvbi5cbiAqIEBpbnRlcm5hbFxuICovXG5cblxudmFyIFJlYWN0RWxlbWVudCA9IGZ1bmN0aW9uICh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpIHtcbiAgdmFyIGVsZW1lbnQgPSB7XG4gICAgLy8gVGhpcyB0YWcgYWxsb3dzIHVzIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgYXMgYSBSZWFjdCBFbGVtZW50XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0VMRU1FTlRfVFlQRSxcbiAgICAvLyBCdWlsdC1pbiBwcm9wZXJ0aWVzIHRoYXQgYmVsb25nIG9uIHRoZSBlbGVtZW50XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXk6IGtleSxcbiAgICByZWY6IHJlZixcbiAgICBwcm9wczogcHJvcHMsXG4gICAgLy8gUmVjb3JkIHRoZSBjb21wb25lbnQgcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRoaXMgZWxlbWVudC5cbiAgICBfb3duZXI6IG93bmVyXG4gIH07XG5cbiAge1xuICAgIC8vIFRoZSB2YWxpZGF0aW9uIGZsYWcgaXMgY3VycmVudGx5IG11dGF0aXZlLiBXZSBwdXQgaXQgb25cbiAgICAvLyBhbiBleHRlcm5hbCBiYWNraW5nIHN0b3JlIHNvIHRoYXQgd2UgY2FuIGZyZWV6ZSB0aGUgd2hvbGUgb2JqZWN0LlxuICAgIC8vIFRoaXMgY2FuIGJlIHJlcGxhY2VkIHdpdGggYSBXZWFrTWFwIG9uY2UgdGhleSBhcmUgaW1wbGVtZW50ZWQgaW5cbiAgICAvLyBjb21tb25seSB1c2VkIGRldmVsb3BtZW50IGVudmlyb25tZW50cy5cbiAgICBlbGVtZW50Ll9zdG9yZSA9IHt9OyAvLyBUbyBtYWtlIGNvbXBhcmluZyBSZWFjdEVsZW1lbnRzIGVhc2llciBmb3IgdGVzdGluZyBwdXJwb3Nlcywgd2UgbWFrZVxuICAgIC8vIHRoZSB2YWxpZGF0aW9uIGZsYWcgbm9uLWVudW1lcmFibGUgKHdoZXJlIHBvc3NpYmxlLCB3aGljaCBzaG91bGRcbiAgICAvLyBpbmNsdWRlIGV2ZXJ5IGVudmlyb25tZW50IHdlIHJ1biB0ZXN0cyBpbiksIHNvIHRoZSB0ZXN0IGZyYW1ld29ya1xuICAgIC8vIGlnbm9yZXMgaXQuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudC5fc3RvcmUsICd2YWxpZGF0ZWQnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH0pOyAvLyBzZWxmIGFuZCBzb3VyY2UgYXJlIERFViBvbmx5IHByb3BlcnRpZXMuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zZWxmJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNlbGZcbiAgICB9KTsgLy8gVHdvIGVsZW1lbnRzIGNyZWF0ZWQgaW4gdHdvIGRpZmZlcmVudCBwbGFjZXMgc2hvdWxkIGJlIGNvbnNpZGVyZWRcbiAgICAvLyBlcXVhbCBmb3IgdGVzdGluZyBwdXJwb3NlcyBhbmQgdGhlcmVmb3JlIHdlIGhpZGUgaXQgZnJvbSBlbnVtZXJhdGlvbi5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NvdXJjZScsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzb3VyY2VcbiAgICB9KTtcblxuICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQucHJvcHMpO1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn07XG4vKipcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdGpzL3JmY3MvcHVsbC8xMDdcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gKi9cblxuZnVuY3Rpb24ganN4REVWKHR5cGUsIGNvbmZpZywgbWF5YmVLZXksIHNvdXJjZSwgc2VsZikge1xuICB7XG4gICAgdmFyIHByb3BOYW1lOyAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG5cbiAgICB2YXIgcHJvcHMgPSB7fTtcbiAgICB2YXIga2V5ID0gbnVsbDtcbiAgICB2YXIgcmVmID0gbnVsbDsgLy8gQ3VycmVudGx5LCBrZXkgY2FuIGJlIHNwcmVhZCBpbiBhcyBhIHByb3AuIFRoaXMgY2F1c2VzIGEgcG90ZW50aWFsXG4gICAgLy8gaXNzdWUgaWYga2V5IGlzIGFsc28gZXhwbGljaXRseSBkZWNsYXJlZCAoaWUuIDxkaXYgey4uLnByb3BzfSBrZXk9XCJIaVwiIC8+XG4gICAgLy8gb3IgPGRpdiBrZXk9XCJIaVwiIHsuLi5wcm9wc30gLz4gKS4gV2Ugd2FudCB0byBkZXByZWNhdGUga2V5IHNwcmVhZCxcbiAgICAvLyBidXQgYXMgYW4gaW50ZXJtZWRpYXJ5IHN0ZXAsIHdlIHdpbGwgdXNlIGpzeERFViBmb3IgZXZlcnl0aGluZyBleGNlcHRcbiAgICAvLyA8ZGl2IHsuLi5wcm9wc30ga2V5PVwiSGlcIiAvPiwgYmVjYXVzZSB3ZSBhcmVuJ3QgY3VycmVudGx5IGFibGUgdG8gdGVsbCBpZlxuICAgIC8vIGtleSBpcyBleHBsaWNpdGx5IGRlY2xhcmVkIHRvIGJlIHVuZGVmaW5lZCBvciBub3QuXG5cbiAgICBpZiAobWF5YmVLZXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAga2V5ID0gJycgKyBtYXliZUtleTtcbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICByZWYgPSBjb25maWcucmVmO1xuICAgICAgd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZywgc2VsZik7XG4gICAgfSAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBhcmUgYWRkZWQgdG8gYSBuZXcgcHJvcHMgb2JqZWN0XG5cblxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfSAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcblxuXG4gICAgaWYgKHR5cGUgJiYgdHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICAgIHZhciBkZWZhdWx0UHJvcHMgPSB0eXBlLmRlZmF1bHRQcm9wcztcblxuICAgICAgZm9yIChwcm9wTmFtZSBpbiBkZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChrZXkgfHwgcmVmKSB7XG4gICAgICB2YXIgZGlzcGxheU5hbWUgPSB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyA/IHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8ICdVbmtub3duJyA6IHR5cGU7XG5cbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlZikge1xuICAgICAgICBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBSZWFjdEVsZW1lbnQodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCwgcHJvcHMpO1xuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnRPd25lciQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50T3duZXI7XG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbnZhciBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bjtcblxue1xuICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IGZhbHNlO1xufVxuLyoqXG4gKiBWZXJpZmllcyB0aGUgb2JqZWN0IGlzIGEgUmVhY3RFbGVtZW50LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNpc3ZhbGlkZWxlbWVudFxuICogQHBhcmFtIHs/b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgYG9iamVjdGAgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBAZmluYWxcbiAqL1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudChvYmplY3QpIHtcbiAge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCkge1xuICB7XG4gICAgaWYgKFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudCkge1xuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudC50eXBlKTtcblxuICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB0aGUgcmVuZGVyIG1ldGhvZCBvZiBgJyArIG5hbWUgKyAnYC4nO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpIHtcbiAge1xuICAgIGlmIChzb3VyY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIGZpbGVOYW1lID0gc291cmNlLmZpbGVOYW1lLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKTtcbiAgICAgIHZhciBsaW5lTnVtYmVyID0gc291cmNlLmxpbmVOdW1iZXI7XG4gICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHlvdXIgY29kZSBhdCAnICsgZmlsZU5hbWUgKyAnOicgKyBsaW5lTnVtYmVyICsgJy4nO1xuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfVxufVxuLyoqXG4gKiBXYXJuIGlmIHRoZXJlJ3Mgbm8ga2V5IGV4cGxpY2l0bHkgc2V0IG9uIGR5bmFtaWMgYXJyYXlzIG9mIGNoaWxkcmVuIG9yXG4gKiBvYmplY3Qga2V5cyBhcmUgbm90IHZhbGlkLiBUaGlzIGFsbG93cyB1cyB0byBrZWVwIHRyYWNrIG9mIGNoaWxkcmVuIGJldHdlZW5cbiAqIHVwZGF0ZXMuXG4gKi9cblxuXG52YXIgb3duZXJIYXNLZXlVc2VXYXJuaW5nID0ge307XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSkge1xuICB7XG4gICAgdmFyIGluZm8gPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcblxuICAgIGlmICghaW5mbykge1xuICAgICAgdmFyIHBhcmVudE5hbWUgPSB0eXBlb2YgcGFyZW50VHlwZSA9PT0gJ3N0cmluZycgPyBwYXJlbnRUeXBlIDogcGFyZW50VHlwZS5kaXNwbGF5TmFtZSB8fCBwYXJlbnRUeXBlLm5hbWU7XG5cbiAgICAgIGlmIChwYXJlbnROYW1lKSB7XG4gICAgICAgIGluZm8gPSBcIlxcblxcbkNoZWNrIHRoZSB0b3AtbGV2ZWwgcmVuZGVyIGNhbGwgdXNpbmcgPFwiICsgcGFyZW50TmFtZSArIFwiPi5cIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaW5mbztcbiAgfVxufVxuLyoqXG4gKiBXYXJuIGlmIHRoZSBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBhbiBleHBsaWNpdCBrZXkgYXNzaWduZWQgdG8gaXQuXG4gKiBUaGlzIGVsZW1lbnQgaXMgaW4gYW4gYXJyYXkuIFRoZSBhcnJheSBjb3VsZCBncm93IGFuZCBzaHJpbmsgb3IgYmVcbiAqIHJlb3JkZXJlZC4gQWxsIGNoaWxkcmVuIHRoYXQgaGF2ZW4ndCBhbHJlYWR5IGJlZW4gdmFsaWRhdGVkIGFyZSByZXF1aXJlZCB0b1xuICogaGF2ZSBhIFwia2V5XCIgcHJvcGVydHkgYXNzaWduZWQgdG8gaXQuIEVycm9yIHN0YXR1c2VzIGFyZSBjYWNoZWQgc28gYSB3YXJuaW5nXG4gKiB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50IEVsZW1lbnQgdGhhdCByZXF1aXJlcyBhIGtleS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBlbGVtZW50J3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRXhwbGljaXRLZXkoZWxlbWVudCwgcGFyZW50VHlwZSkge1xuICB7XG4gICAgaWYgKCFlbGVtZW50Ll9zdG9yZSB8fCBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgfHwgZWxlbWVudC5rZXkgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgdmFyIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8gPSBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpO1xuXG4gICAgaWYgKG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSA9IHRydWU7IC8vIFVzdWFsbHkgdGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIG9mZmVuZGVyLCBidXQgaWYgaXQgYWNjZXB0cyBjaGlsZHJlbiBhcyBhXG4gICAgLy8gcHJvcGVydHksIGl0IG1heSBiZSB0aGUgY3JlYXRvciBvZiB0aGUgY2hpbGQgdGhhdCdzIHJlc3BvbnNpYmxlIGZvclxuICAgIC8vIGFzc2lnbmluZyBpdCBhIGtleS5cblxuICAgIHZhciBjaGlsZE93bmVyID0gJyc7XG5cbiAgICBpZiAoZWxlbWVudCAmJiBlbGVtZW50Ll9vd25lciAmJiBlbGVtZW50Ll9vd25lciAhPT0gUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50KSB7XG4gICAgICAvLyBHaXZlIHRoZSBjb21wb25lbnQgdGhhdCBvcmlnaW5hbGx5IGNyZWF0ZWQgdGhpcyBjaGlsZC5cbiAgICAgIGNoaWxkT3duZXIgPSBcIiBJdCB3YXMgcGFzc2VkIGEgY2hpbGQgZnJvbSBcIiArIGdldENvbXBvbmVudE5hbWUoZWxlbWVudC5fb3duZXIudHlwZSkgKyBcIi5cIjtcbiAgICB9XG5cbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpO1xuXG4gICAgZXJyb3IoJ0VhY2ggY2hpbGQgaW4gYSBsaXN0IHNob3VsZCBoYXZlIGEgdW5pcXVlIFwia2V5XCIgcHJvcC4nICsgJyVzJXMgU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay93YXJuaW5nLWtleXMgZm9yIG1vcmUgaW5mb3JtYXRpb24uJywgY3VycmVudENvbXBvbmVudEVycm9ySW5mbywgY2hpbGRPd25lcik7XG5cbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICB9XG59XG4vKipcbiAqIEVuc3VyZSB0aGF0IGV2ZXJ5IGVsZW1lbnQgZWl0aGVyIGlzIHBhc3NlZCBpbiBhIHN0YXRpYyBsb2NhdGlvbiwgaW4gYW5cbiAqIGFycmF5IHdpdGggYW4gZXhwbGljaXQga2V5cyBwcm9wZXJ0eSBkZWZpbmVkLCBvciBpbiBhbiBvYmplY3QgbGl0ZXJhbFxuICogd2l0aCB2YWxpZCBrZXkgcHJvcGVydHkuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0Tm9kZX0gbm9kZSBTdGF0aWNhbGx5IHBhc3NlZCBjaGlsZCBvZiBhbnkgdHlwZS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBub2RlJ3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ2hpbGRLZXlzKG5vZGUsIHBhcmVudFR5cGUpIHtcbiAge1xuICAgIGlmICh0eXBlb2Ygbm9kZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShub2RlKSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGlsZCA9IG5vZGVbaV07XG5cbiAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoY2hpbGQsIHBhcmVudFR5cGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpc1ZhbGlkRWxlbWVudChub2RlKSkge1xuICAgICAgLy8gVGhpcyBlbGVtZW50IHdhcyBwYXNzZWQgaW4gYSB2YWxpZCBsb2NhdGlvbi5cbiAgICAgIGlmIChub2RlLl9zdG9yZSkge1xuICAgICAgICBub2RlLl9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobm9kZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG5vZGUpO1xuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gRW50cnkgaXRlcmF0b3JzIHVzZWQgdG8gcHJvdmlkZSBpbXBsaWNpdCBrZXlzLFxuICAgICAgICAvLyBidXQgbm93IHdlIHByaW50IGEgc2VwYXJhdGUgd2FybmluZyBmb3IgdGhlbSBsYXRlci5cbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IG5vZGUuZW50cmllcykge1xuICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChub2RlKTtcbiAgICAgICAgICB2YXIgc3RlcDtcblxuICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KHN0ZXAudmFsdWUsIHBhcmVudFR5cGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhbiBlbGVtZW50LCB2YWxpZGF0ZSB0aGF0IGl0cyBwcm9wcyBmb2xsb3cgdGhlIHByb3BUeXBlcyBkZWZpbml0aW9uLFxuICogcHJvdmlkZWQgYnkgdGhlIHR5cGUuXG4gKlxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpIHtcbiAge1xuICAgIHZhciB0eXBlID0gZWxlbWVudC50eXBlO1xuXG4gICAgaWYgKHR5cGUgPT09IG51bGwgfHwgdHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwcm9wVHlwZXM7XG5cbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IC8vIE5vdGU6IE1lbW8gb25seSBjaGVja3Mgb3V0ZXIgcHJvcHMgaGVyZS5cbiAgICAvLyBJbm5lciBwcm9wcyBhcmUgY2hlY2tlZCBpbiB0aGUgcmVjb25jaWxlci5cbiAgICB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUpKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwcm9wVHlwZXMpIHtcbiAgICAgIC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUodHlwZSk7XG4gICAgICBjaGVja1Byb3BUeXBlcyhwcm9wVHlwZXMsIGVsZW1lbnQucHJvcHMsICdwcm9wJywgbmFtZSwgZWxlbWVudCk7XG4gICAgfSBlbHNlIGlmICh0eXBlLlByb3BUeXBlcyAhPT0gdW5kZWZpbmVkICYmICFwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bikge1xuICAgICAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSB0cnVlOyAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuXG4gICAgICB2YXIgX25hbWUgPSBnZXRDb21wb25lbnROYW1lKHR5cGUpO1xuXG4gICAgICBlcnJvcignQ29tcG9uZW50ICVzIGRlY2xhcmVkIGBQcm9wVHlwZXNgIGluc3RlYWQgb2YgYHByb3BUeXBlc2AuIERpZCB5b3UgbWlzc3BlbGwgdGhlIHByb3BlcnR5IGFzc2lnbm1lbnQ/JywgX25hbWUgfHwgJ1Vua25vd24nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHR5cGUuZ2V0RGVmYXVsdFByb3BzID09PSAnZnVuY3Rpb24nICYmICF0eXBlLmdldERlZmF1bHRQcm9wcy5pc1JlYWN0Q2xhc3NBcHByb3ZlZCkge1xuICAgICAgZXJyb3IoJ2dldERlZmF1bHRQcm9wcyBpcyBvbmx5IHVzZWQgb24gY2xhc3NpYyBSZWFjdC5jcmVhdGVDbGFzcyAnICsgJ2RlZmluaXRpb25zLiBVc2UgYSBzdGF0aWMgcHJvcGVydHkgbmFtZWQgYGRlZmF1bHRQcm9wc2AgaW5zdGVhZC4nKTtcbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYSBmcmFnbWVudCwgdmFsaWRhdGUgdGhhdCBpdCBjYW4gb25seSBiZSBwcm92aWRlZCB3aXRoIGZyYWdtZW50IHByb3BzXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZnJhZ21lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhmcmFnbWVudCkge1xuICB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhmcmFnbWVudC5wcm9wcyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoa2V5ICE9PSAnY2hpbGRyZW4nICYmIGtleSAhPT0gJ2tleScpIHtcbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgICAgZXJyb3IoJ0ludmFsaWQgcHJvcCBgJXNgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuICcgKyAnUmVhY3QuRnJhZ21lbnQgY2FuIG9ubHkgaGF2ZSBga2V5YCBhbmQgYGNoaWxkcmVuYCBwcm9wcy4nLCBrZXkpO1xuXG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmFnbWVudC5yZWYgIT09IG51bGwpIHtcbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICBlcnJvcignSW52YWxpZCBhdHRyaWJ1dGUgYHJlZmAgc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4nKTtcblxuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24ganN4V2l0aFZhbGlkYXRpb24odHlwZSwgcHJvcHMsIGtleSwgaXNTdGF0aWNDaGlsZHJlbiwgc291cmNlLCBzZWxmKSB7XG4gIHtcbiAgICB2YXIgdmFsaWRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpOyAvLyBXZSB3YXJuIGluIHRoaXMgY2FzZSBidXQgZG9uJ3QgdGhyb3cuIFdlIGV4cGVjdCB0aGUgZWxlbWVudCBjcmVhdGlvbiB0b1xuICAgIC8vIHN1Y2NlZWQgYW5kIHRoZXJlIHdpbGwgbGlrZWx5IGJlIGVycm9ycyBpbiByZW5kZXIuXG5cbiAgICBpZiAoIXZhbGlkVHlwZSkge1xuICAgICAgdmFyIGluZm8gPSAnJztcblxuICAgICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiBPYmplY3Qua2V5cyh0eXBlKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgaW5mbyArPSAnIFlvdSBsaWtlbHkgZm9yZ290IHRvIGV4cG9ydCB5b3VyIGNvbXBvbmVudCBmcm9tIHRoZSBmaWxlICcgKyBcIml0J3MgZGVmaW5lZCBpbiwgb3IgeW91IG1pZ2h0IGhhdmUgbWl4ZWQgdXAgZGVmYXVsdCBhbmQgbmFtZWQgaW1wb3J0cy5cIjtcbiAgICAgIH1cblxuICAgICAgdmFyIHNvdXJjZUluZm8gPSBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpO1xuXG4gICAgICBpZiAoc291cmNlSW5mbykge1xuICAgICAgICBpbmZvICs9IHNvdXJjZUluZm87XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmZvICs9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuICAgICAgfVxuXG4gICAgICB2YXIgdHlwZVN0cmluZztcblxuICAgICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9ICdudWxsJztcbiAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0eXBlKSkge1xuICAgICAgICB0eXBlU3RyaW5nID0gJ2FycmF5JztcbiAgICAgIH0gZWxzZSBpZiAodHlwZSAhPT0gdW5kZWZpbmVkICYmIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRSkge1xuICAgICAgICB0eXBlU3RyaW5nID0gXCI8XCIgKyAoZ2V0Q29tcG9uZW50TmFtZSh0eXBlLnR5cGUpIHx8ICdVbmtub3duJykgKyBcIiAvPlwiO1xuICAgICAgICBpbmZvID0gJyBEaWQgeW91IGFjY2lkZW50YWxseSBleHBvcnQgYSBKU1ggbGl0ZXJhbCBpbnN0ZWFkIG9mIGEgY29tcG9uZW50Pyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0eXBlU3RyaW5nID0gdHlwZW9mIHR5cGU7XG4gICAgICB9XG5cbiAgICAgIGVycm9yKCdSZWFjdC5qc3g6IHR5cGUgaXMgaW52YWxpZCAtLSBleHBlY3RlZCBhIHN0cmluZyAoZm9yICcgKyAnYnVpbHQtaW4gY29tcG9uZW50cykgb3IgYSBjbGFzcy9mdW5jdGlvbiAoZm9yIGNvbXBvc2l0ZSAnICsgJ2NvbXBvbmVudHMpIGJ1dCBnb3Q6ICVzLiVzJywgdHlwZVN0cmluZywgaW5mbyk7XG4gICAgfVxuXG4gICAgdmFyIGVsZW1lbnQgPSBqc3hERVYodHlwZSwgcHJvcHMsIGtleSwgc291cmNlLCBzZWxmKTsgLy8gVGhlIHJlc3VsdCBjYW4gYmUgbnVsbGlzaCBpZiBhIG1vY2sgb3IgYSBjdXN0b20gZnVuY3Rpb24gaXMgdXNlZC5cbiAgICAvLyBUT0RPOiBEcm9wIHRoaXMgd2hlbiB0aGVzZSBhcmUgbm8gbG9uZ2VyIGFsbG93ZWQgYXMgdGhlIHR5cGUgYXJndW1lbnQuXG5cbiAgICBpZiAoZWxlbWVudCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9IC8vIFNraXAga2V5IHdhcm5pbmcgaWYgdGhlIHR5cGUgaXNuJ3QgdmFsaWQgc2luY2Ugb3VyIGtleSB2YWxpZGF0aW9uIGxvZ2ljXG4gICAgLy8gZG9lc24ndCBleHBlY3QgYSBub24tc3RyaW5nL2Z1bmN0aW9uIHR5cGUgYW5kIGNhbiB0aHJvdyBjb25mdXNpbmcgZXJyb3JzLlxuICAgIC8vIFdlIGRvbid0IHdhbnQgZXhjZXB0aW9uIGJlaGF2aW9yIHRvIGRpZmZlciBiZXR3ZWVuIGRldiBhbmQgcHJvZC5cbiAgICAvLyAoUmVuZGVyaW5nIHdpbGwgdGhyb3cgd2l0aCBhIGhlbHBmdWwgbWVzc2FnZSBhbmQgYXMgc29vbiBhcyB0aGUgdHlwZSBpc1xuICAgIC8vIGZpeGVkLCB0aGUga2V5IHdhcm5pbmdzIHdpbGwgYXBwZWFyLilcblxuXG4gICAgaWYgKHZhbGlkVHlwZSkge1xuICAgICAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47XG5cbiAgICAgIGlmIChjaGlsZHJlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChpc1N0YXRpY0NoaWxkcmVuKSB7XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGNoaWxkcmVuW2ldLCB0eXBlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgICAgICAgICAgT2JqZWN0LmZyZWV6ZShjaGlsZHJlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVycm9yKCdSZWFjdC5qc3g6IFN0YXRpYyBjaGlsZHJlbiBzaG91bGQgYWx3YXlzIGJlIGFuIGFycmF5LiAnICsgJ1lvdSBhcmUgbGlrZWx5IGV4cGxpY2l0bHkgY2FsbGluZyBSZWFjdC5qc3hzIG9yIFJlYWN0LmpzeERFVi4gJyArICdVc2UgdGhlIEJhYmVsIHRyYW5zZm9ybSBpbnN0ZWFkLicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWxpZGF0ZUNoaWxkS2V5cyhjaGlsZHJlbiwgdHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PT0gZXhwb3J0cy5GcmFnbWVudCkge1xuICAgICAgdmFsaWRhdGVGcmFnbWVudFByb3BzKGVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufSAvLyBUaGVzZSB0d28gZnVuY3Rpb25zIGV4aXN0IHRvIHN0aWxsIGdldCBjaGlsZCB3YXJuaW5ncyBpbiBkZXZcblxudmFyIGpzeERFViQxID0gIGpzeFdpdGhWYWxpZGF0aW9uIDtcblxuZXhwb3J0cy5qc3hERVYgPSBqc3hERVYkMTtcbiAgfSkoKTtcbn1cbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTcuMC4yXG4gKiByZWFjdC5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBfYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG4vLyBUT0RPOiB0aGlzIGlzIHNwZWNpYWwgYmVjYXVzZSBpdCBnZXRzIGltcG9ydGVkIGR1cmluZyBidWlsZC5cbnZhciBSZWFjdFZlcnNpb24gPSAnMTcuMC4yJztcblxuLy8gQVRURU5USU9OXG4vLyBXaGVuIGFkZGluZyBuZXcgc3ltYm9scyB0byB0aGlzIGZpbGUsXG4vLyBQbGVhc2UgY29uc2lkZXIgYWxzbyBhZGRpbmcgdG8gJ3JlYWN0LWRldnRvb2xzLXNoYXJlZC9zcmMvYmFja2VuZC9SZWFjdFN5bWJvbHMnXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IDB4ZWFjYTtcbmV4cG9ydHMuRnJhZ21lbnQgPSAweGVhY2I7XG5leHBvcnRzLlN0cmljdE1vZGUgPSAweGVhY2M7XG5leHBvcnRzLlByb2ZpbGVyID0gMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gMHhlYWNlO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSAweGVhZDA7XG5leHBvcnRzLlN1c3BlbnNlID0gMHhlYWQxO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IDB4ZWFkODtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gMHhlYWQ0O1xudmFyIFJFQUNUX0JMT0NLX1RZUEUgPSAweGVhZDk7XG52YXIgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSAweGVhZGE7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IDB4ZWFkNTtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gMHhlYWQ3O1xudmFyIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gMHhlYWUwO1xudmFyIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gMHhlYWUxO1xudmFyIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gMHhlYWUyO1xudmFyIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IDB4ZWFlMztcblxuaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcikge1xuICB2YXIgc3ltYm9sRm9yID0gU3ltYm9sLmZvcjtcbiAgUkVBQ1RfRUxFTUVOVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5lbGVtZW50Jyk7XG4gIFJFQUNUX1BPUlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wb3J0YWwnKTtcbiAgZXhwb3J0cy5GcmFnbWVudCA9IHN5bWJvbEZvcigncmVhY3QuZnJhZ21lbnQnKTtcbiAgZXhwb3J0cy5TdHJpY3RNb2RlID0gc3ltYm9sRm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpO1xuICBleHBvcnRzLlByb2ZpbGVyID0gc3ltYm9sRm9yKCdyZWFjdC5wcm9maWxlcicpO1xuICBSRUFDVF9QUk9WSURFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm92aWRlcicpO1xuICBSRUFDVF9DT05URVhUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmNvbnRleHQnKTtcbiAgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZm9yd2FyZF9yZWYnKTtcbiAgZXhwb3J0cy5TdXNwZW5zZSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2UnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0Jyk7XG4gIFJFQUNUX01FTU9fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubWVtbycpO1xuICBSRUFDVF9MQVpZX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxhenknKTtcbiAgUkVBQ1RfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuYmxvY2snKTtcbiAgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNlcnZlci5ibG9jaycpO1xuICBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpO1xuICBSRUFDVF9TQ09QRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zY29wZScpO1xuICBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub3BhcXVlLmlkJyk7XG4gIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5kZWJ1Z190cmFjZV9tb2RlJyk7XG4gIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vZmZzY3JlZW4nKTtcbiAgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sZWdhY3lfaGlkZGVuJyk7XG59XG5cbnZhciBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcbnZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJztcbmZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICBpZiAobWF5YmVJdGVyYWJsZSA9PT0gbnVsbCB8fCB0eXBlb2YgbWF5YmVJdGVyYWJsZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBtYXliZUl0ZXJhdG9yID0gTUFZQkVfSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbTUFZQkVfSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXTtcblxuICBpZiAodHlwZW9mIG1heWJlSXRlcmF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gbWF5YmVJdGVyYXRvcjtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IGRpc3BhdGNoZXIuXG4gKi9cbnZhciBSZWFjdEN1cnJlbnREaXNwYXRjaGVyID0ge1xuICAvKipcbiAgICogQGludGVybmFsXG4gICAqIEB0eXBlIHtSZWFjdENvbXBvbmVudH1cbiAgICovXG4gIGN1cnJlbnQ6IG51bGxcbn07XG5cbi8qKlxuICogS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnQgYmF0Y2gncyBjb25maWd1cmF0aW9uIHN1Y2ggYXMgaG93IGxvbmcgYW4gdXBkYXRlXG4gKiBzaG91bGQgc3VzcGVuZCBmb3IgaWYgaXQgbmVlZHMgdG8uXG4gKi9cbnZhciBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZyA9IHtcbiAgdHJhbnNpdGlvbjogMFxufTtcblxuLyoqXG4gKiBLZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudCBvd25lci5cbiAqXG4gKiBUaGUgY3VycmVudCBvd25lciBpcyB0aGUgY29tcG9uZW50IHdobyBzaG91bGQgb3duIGFueSBjb21wb25lbnRzIHRoYXQgYXJlXG4gKiBjdXJyZW50bHkgYmVpbmcgY29uc3RydWN0ZWQuXG4gKi9cbnZhciBSZWFjdEN1cnJlbnRPd25lciA9IHtcbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKiBAdHlwZSB7UmVhY3RDb21wb25lbnR9XG4gICAqL1xuICBjdXJyZW50OiBudWxsXG59O1xuXG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IHt9O1xudmFyIGN1cnJlbnRFeHRyYVN0YWNrRnJhbWUgPSBudWxsO1xuZnVuY3Rpb24gc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKSB7XG4gIHtcbiAgICBjdXJyZW50RXh0cmFTdGFja0ZyYW1lID0gc3RhY2s7XG4gIH1cbn1cblxue1xuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLnNldEV4dHJhU3RhY2tGcmFtZSA9IGZ1bmN0aW9uIChzdGFjaykge1xuICAgIHtcbiAgICAgIGN1cnJlbnRFeHRyYVN0YWNrRnJhbWUgPSBzdGFjaztcbiAgICB9XG4gIH07IC8vIFN0YWNrIGltcGxlbWVudGF0aW9uIGluamVjdGVkIGJ5IHRoZSBjdXJyZW50IHJlbmRlcmVyLlxuXG5cbiAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRDdXJyZW50U3RhY2sgPSBudWxsO1xuXG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3RhY2sgPSAnJzsgLy8gQWRkIGFuIGV4dHJhIHRvcCBmcmFtZSB3aGlsZSBhbiBlbGVtZW50IGlzIGJlaW5nIHZhbGlkYXRlZFxuXG4gICAgaWYgKGN1cnJlbnRFeHRyYVN0YWNrRnJhbWUpIHtcbiAgICAgIHN0YWNrICs9IGN1cnJlbnRFeHRyYVN0YWNrRnJhbWU7XG4gICAgfSAvLyBEZWxlZ2F0ZSB0byB0aGUgaW5qZWN0ZWQgcmVuZGVyZXItc3BlY2lmaWMgaW1wbGVtZW50YXRpb25cblxuXG4gICAgdmFyIGltcGwgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldEN1cnJlbnRTdGFjaztcblxuICAgIGlmIChpbXBsKSB7XG4gICAgICBzdGFjayArPSBpbXBsKCkgfHwgJyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YWNrO1xuICB9O1xufVxuXG4vKipcbiAqIFVzZWQgYnkgYWN0KCkgdG8gdHJhY2sgd2hldGhlciB5b3UncmUgaW5zaWRlIGFuIGFjdCgpIHNjb3BlLlxuICovXG52YXIgSXNTb21lUmVuZGVyZXJBY3RpbmcgPSB7XG4gIGN1cnJlbnQ6IGZhbHNlXG59O1xuXG52YXIgUmVhY3RTaGFyZWRJbnRlcm5hbHMgPSB7XG4gIFJlYWN0Q3VycmVudERpc3BhdGNoZXI6IFJlYWN0Q3VycmVudERpc3BhdGNoZXIsXG4gIFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnOiBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZyxcbiAgUmVhY3RDdXJyZW50T3duZXI6IFJlYWN0Q3VycmVudE93bmVyLFxuICBJc1NvbWVSZW5kZXJlckFjdGluZzogSXNTb21lUmVuZGVyZXJBY3RpbmcsXG4gIC8vIFVzZWQgYnkgcmVuZGVyZXJzIHRvIGF2b2lkIGJ1bmRsaW5nIG9iamVjdC1hc3NpZ24gdHdpY2UgaW4gVU1EIGJ1bmRsZXM6XG4gIGFzc2lnbjogX2Fzc2lnblxufTtcblxue1xuICBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcbn1cblxuLy8gYnkgY2FsbHMgdG8gdGhlc2UgbWV0aG9kcyBieSBhIEJhYmVsIHBsdWdpbi5cbi8vXG4vLyBJbiBQUk9EIChvciBpbiBwYWNrYWdlcyB3aXRob3V0IGFjY2VzcyB0byBSZWFjdCBpbnRlcm5hbHMpLFxuLy8gdGhleSBhcmUgbGVmdCBhcyB0aGV5IGFyZSBpbnN0ZWFkLlxuXG5mdW5jdGlvbiB3YXJuKGZvcm1hdCkge1xuICB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcHJpbnRXYXJuaW5nKCd3YXJuJywgZm9ybWF0LCBhcmdzKTtcbiAgfVxufVxuZnVuY3Rpb24gZXJyb3IoZm9ybWF0KSB7XG4gIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICBwcmludFdhcm5pbmcoJ2Vycm9yJywgZm9ybWF0LCBhcmdzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmludFdhcm5pbmcobGV2ZWwsIGZvcm1hdCwgYXJncykge1xuICAvLyBXaGVuIGNoYW5naW5nIHRoaXMgbG9naWMsIHlvdSBtaWdodCB3YW50IHRvIGFsc29cbiAgLy8gdXBkYXRlIGNvbnNvbGVXaXRoU3RhY2tEZXYud3d3LmpzIGFzIHdlbGwuXG4gIHtcbiAgICB2YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG4gICAgdmFyIHN0YWNrID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XG5cbiAgICBpZiAoc3RhY2sgIT09ICcnKSB7XG4gICAgICBmb3JtYXQgKz0gJyVzJztcbiAgICAgIGFyZ3MgPSBhcmdzLmNvbmNhdChbc3RhY2tdKTtcbiAgICB9XG5cbiAgICB2YXIgYXJnc1dpdGhGb3JtYXQgPSBhcmdzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuICcnICsgaXRlbTtcbiAgICB9KTsgLy8gQ2FyZWZ1bDogUk4gY3VycmVudGx5IGRlcGVuZHMgb24gdGhpcyBwcmVmaXhcblxuICAgIGFyZ3NXaXRoRm9ybWF0LnVuc2hpZnQoJ1dhcm5pbmc6ICcgKyBmb3JtYXQpOyAvLyBXZSBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBzcHJlYWQgKG9yIC5hcHBseSkgZGlyZWN0bHkgYmVjYXVzZSBpdFxuICAgIC8vIGJyZWFrcyBJRTk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTM2MTBcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nXG5cbiAgICBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlW2xldmVsXSwgY29uc29sZSwgYXJnc1dpdGhGb3JtYXQpO1xuICB9XG59XG5cbnZhciBkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnQgPSB7fTtcblxuZnVuY3Rpb24gd2Fybk5vb3AocHVibGljSW5zdGFuY2UsIGNhbGxlck5hbWUpIHtcbiAge1xuICAgIHZhciBfY29uc3RydWN0b3IgPSBwdWJsaWNJbnN0YW5jZS5jb25zdHJ1Y3RvcjtcbiAgICB2YXIgY29tcG9uZW50TmFtZSA9IF9jb25zdHJ1Y3RvciAmJiAoX2NvbnN0cnVjdG9yLmRpc3BsYXlOYW1lIHx8IF9jb25zdHJ1Y3Rvci5uYW1lKSB8fCAnUmVhY3RDbGFzcyc7XG4gICAgdmFyIHdhcm5pbmdLZXkgPSBjb21wb25lbnROYW1lICsgXCIuXCIgKyBjYWxsZXJOYW1lO1xuXG4gICAgaWYgKGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudFt3YXJuaW5nS2V5XSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVycm9yKFwiQ2FuJ3QgY2FsbCAlcyBvbiBhIGNvbXBvbmVudCB0aGF0IGlzIG5vdCB5ZXQgbW91bnRlZC4gXCIgKyAnVGhpcyBpcyBhIG5vLW9wLCBidXQgaXQgbWlnaHQgaW5kaWNhdGUgYSBidWcgaW4geW91ciBhcHBsaWNhdGlvbi4gJyArICdJbnN0ZWFkLCBhc3NpZ24gdG8gYHRoaXMuc3RhdGVgIGRpcmVjdGx5IG9yIGRlZmluZSBhIGBzdGF0ZSA9IHt9O2AgJyArICdjbGFzcyBwcm9wZXJ0eSB3aXRoIHRoZSBkZXNpcmVkIHN0YXRlIGluIHRoZSAlcyBjb21wb25lbnQuJywgY2FsbGVyTmFtZSwgY29tcG9uZW50TmFtZSk7XG5cbiAgICBkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnRbd2FybmluZ0tleV0gPSB0cnVlO1xuICB9XG59XG4vKipcbiAqIFRoaXMgaXMgdGhlIGFic3RyYWN0IEFQSSBmb3IgYW4gdXBkYXRlIHF1ZXVlLlxuICovXG5cblxudmFyIFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlID0ge1xuICAvKipcbiAgICogQ2hlY2tzIHdoZXRoZXIgb3Igbm90IHRoaXMgY29tcG9zaXRlIGNvbXBvbmVudCBpcyBtb3VudGVkLlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB3ZSB3YW50IHRvIHRlc3QuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgbW91bnRlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEBmaW5hbFxuICAgKi9cbiAgaXNNb3VudGVkOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEZvcmNlcyBhbiB1cGRhdGUuIFRoaXMgc2hvdWxkIG9ubHkgYmUgaW52b2tlZCB3aGVuIGl0IGlzIGtub3duIHdpdGhcbiAgICogY2VydGFpbnR5IHRoYXQgd2UgYXJlICoqbm90KiogaW4gYSBET00gdHJhbnNhY3Rpb24uXG4gICAqXG4gICAqIFlvdSBtYXkgd2FudCB0byBjYWxsIHRoaXMgd2hlbiB5b3Uga25vdyB0aGF0IHNvbWUgZGVlcGVyIGFzcGVjdCBvZiB0aGVcbiAgICogY29tcG9uZW50J3Mgc3RhdGUgaGFzIGNoYW5nZWQgYnV0IGBzZXRTdGF0ZWAgd2FzIG5vdCBjYWxsZWQuXG4gICAqXG4gICAqIFRoaXMgd2lsbCBub3QgaW52b2tlIGBzaG91bGRDb21wb25lbnRVcGRhdGVgLCBidXQgaXQgd2lsbCBpbnZva2VcbiAgICogYGNvbXBvbmVudFdpbGxVcGRhdGVgIGFuZCBgY29tcG9uZW50RGlkVXBkYXRlYC5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdGhhdCBzaG91bGQgcmVyZW5kZXIuXG4gICAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gY2FsbGVyTmFtZSBuYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVGb3JjZVVwZGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAnZm9yY2VVcGRhdGUnKTtcbiAgfSxcblxuICAvKipcbiAgICogUmVwbGFjZXMgYWxsIG9mIHRoZSBzdGF0ZS4gQWx3YXlzIHVzZSB0aGlzIG9yIGBzZXRTdGF0ZWAgdG8gbXV0YXRlIHN0YXRlLlxuICAgKiBZb3Ugc2hvdWxkIHRyZWF0IGB0aGlzLnN0YXRlYCBhcyBpbW11dGFibGUuXG4gICAqXG4gICAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGB0aGlzLnN0YXRlYCB3aWxsIGJlIGltbWVkaWF0ZWx5IHVwZGF0ZWQsIHNvXG4gICAqIGFjY2Vzc2luZyBgdGhpcy5zdGF0ZWAgYWZ0ZXIgY2FsbGluZyB0aGlzIG1ldGhvZCBtYXkgcmV0dXJuIHRoZSBvbGQgdmFsdWUuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0ge29iamVjdH0gY29tcGxldGVTdGF0ZSBOZXh0IHN0YXRlLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IGNhbGxlck5hbWUgbmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlUmVwbGFjZVN0YXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIGNvbXBsZXRlU3RhdGUsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdyZXBsYWNlU3RhdGUnKTtcbiAgfSxcblxuICAvKipcbiAgICogU2V0cyBhIHN1YnNldCBvZiB0aGUgc3RhdGUuIFRoaXMgb25seSBleGlzdHMgYmVjYXVzZSBfcGVuZGluZ1N0YXRlIGlzXG4gICAqIGludGVybmFsLiBUaGlzIHByb3ZpZGVzIGEgbWVyZ2luZyBzdHJhdGVneSB0aGF0IGlzIG5vdCBhdmFpbGFibGUgdG8gZGVlcFxuICAgKiBwcm9wZXJ0aWVzIHdoaWNoIGlzIGNvbmZ1c2luZy4gVE9ETzogRXhwb3NlIHBlbmRpbmdTdGF0ZSBvciBkb24ndCB1c2UgaXRcbiAgICogZHVyaW5nIHRoZSBtZXJnZS5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdGhhdCBzaG91bGQgcmVyZW5kZXIuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBwYXJ0aWFsU3RhdGUgTmV4dCBwYXJ0aWFsIHN0YXRlIHRvIGJlIG1lcmdlZCB3aXRoIHN0YXRlLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IE5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZVNldFN0YXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ3NldFN0YXRlJyk7XG4gIH1cbn07XG5cbnZhciBlbXB0eU9iamVjdCA9IHt9O1xuXG57XG4gIE9iamVjdC5mcmVlemUoZW1wdHlPYmplY3QpO1xufVxuLyoqXG4gKiBCYXNlIGNsYXNzIGhlbHBlcnMgZm9yIHRoZSB1cGRhdGluZyBzdGF0ZSBvZiBhIGNvbXBvbmVudC5cbiAqL1xuXG5cbmZ1bmN0aW9uIENvbXBvbmVudChwcm9wcywgY29udGV4dCwgdXBkYXRlcikge1xuICB0aGlzLnByb3BzID0gcHJvcHM7XG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7IC8vIElmIGEgY29tcG9uZW50IGhhcyBzdHJpbmcgcmVmcywgd2Ugd2lsbCBhc3NpZ24gYSBkaWZmZXJlbnQgb2JqZWN0IGxhdGVyLlxuXG4gIHRoaXMucmVmcyA9IGVtcHR5T2JqZWN0OyAvLyBXZSBpbml0aWFsaXplIHRoZSBkZWZhdWx0IHVwZGF0ZXIgYnV0IHRoZSByZWFsIG9uZSBnZXRzIGluamVjdGVkIGJ5IHRoZVxuICAvLyByZW5kZXJlci5cblxuICB0aGlzLnVwZGF0ZXIgPSB1cGRhdGVyIHx8IFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlO1xufVxuXG5Db21wb25lbnQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQgPSB7fTtcbi8qKlxuICogU2V0cyBhIHN1YnNldCBvZiB0aGUgc3RhdGUuIEFsd2F5cyB1c2UgdGhpcyB0byBtdXRhdGVcbiAqIHN0YXRlLiBZb3Ugc2hvdWxkIHRyZWF0IGB0aGlzLnN0YXRlYCBhcyBpbW11dGFibGUuXG4gKlxuICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgYHRoaXMuc3RhdGVgIHdpbGwgYmUgaW1tZWRpYXRlbHkgdXBkYXRlZCwgc29cbiAqIGFjY2Vzc2luZyBgdGhpcy5zdGF0ZWAgYWZ0ZXIgY2FsbGluZyB0aGlzIG1ldGhvZCBtYXkgcmV0dXJuIHRoZSBvbGQgdmFsdWUuXG4gKlxuICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgY2FsbHMgdG8gYHNldFN0YXRlYCB3aWxsIHJ1biBzeW5jaHJvbm91c2x5LFxuICogYXMgdGhleSBtYXkgZXZlbnR1YWxseSBiZSBiYXRjaGVkIHRvZ2V0aGVyLiAgWW91IGNhbiBwcm92aWRlIGFuIG9wdGlvbmFsXG4gKiBjYWxsYmFjayB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgd2hlbiB0aGUgY2FsbCB0byBzZXRTdGF0ZSBpcyBhY3R1YWxseVxuICogY29tcGxldGVkLlxuICpcbiAqIFdoZW4gYSBmdW5jdGlvbiBpcyBwcm92aWRlZCB0byBzZXRTdGF0ZSwgaXQgd2lsbCBiZSBjYWxsZWQgYXQgc29tZSBwb2ludCBpblxuICogdGhlIGZ1dHVyZSAobm90IHN5bmNocm9ub3VzbHkpLiBJdCB3aWxsIGJlIGNhbGxlZCB3aXRoIHRoZSB1cCB0byBkYXRlXG4gKiBjb21wb25lbnQgYXJndW1lbnRzIChzdGF0ZSwgcHJvcHMsIGNvbnRleHQpLiBUaGVzZSB2YWx1ZXMgY2FuIGJlIGRpZmZlcmVudFxuICogZnJvbSB0aGlzLiogYmVjYXVzZSB5b3VyIGZ1bmN0aW9uIG1heSBiZSBjYWxsZWQgYWZ0ZXIgcmVjZWl2ZVByb3BzIGJ1dCBiZWZvcmVcbiAqIHNob3VsZENvbXBvbmVudFVwZGF0ZSwgYW5kIHRoaXMgbmV3IHN0YXRlLCBwcm9wcywgYW5kIGNvbnRleHQgd2lsbCBub3QgeWV0IGJlXG4gKiBhc3NpZ25lZCB0byB0aGlzLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fGZ1bmN0aW9ufSBwYXJ0aWFsU3RhdGUgTmV4dCBwYXJ0aWFsIHN0YXRlIG9yIGZ1bmN0aW9uIHRvXG4gKiAgICAgICAgcHJvZHVjZSBuZXh0IHBhcnRpYWwgc3RhdGUgdG8gYmUgbWVyZ2VkIHdpdGggY3VycmVudCBzdGF0ZS5cbiAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgc3RhdGUgaXMgdXBkYXRlZC5cbiAqIEBmaW5hbFxuICogQHByb3RlY3RlZFxuICovXG5cbkNvbXBvbmVudC5wcm90b3R5cGUuc2V0U3RhdGUgPSBmdW5jdGlvbiAocGFydGlhbFN0YXRlLCBjYWxsYmFjaykge1xuICBpZiAoISh0eXBlb2YgcGFydGlhbFN0YXRlID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgcGFydGlhbFN0YXRlID09PSAnZnVuY3Rpb24nIHx8IHBhcnRpYWxTdGF0ZSA9PSBudWxsKSkge1xuICAgIHtcbiAgICAgIHRocm93IEVycm9yKCBcInNldFN0YXRlKC4uLik6IHRha2VzIGFuIG9iamVjdCBvZiBzdGF0ZSB2YXJpYWJsZXMgdG8gdXBkYXRlIG9yIGEgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhbiBvYmplY3Qgb2Ygc3RhdGUgdmFyaWFibGVzLlwiICk7XG4gICAgfVxuICB9XG5cbiAgdGhpcy51cGRhdGVyLmVucXVldWVTZXRTdGF0ZSh0aGlzLCBwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrLCAnc2V0U3RhdGUnKTtcbn07XG4vKipcbiAqIEZvcmNlcyBhbiB1cGRhdGUuIFRoaXMgc2hvdWxkIG9ubHkgYmUgaW52b2tlZCB3aGVuIGl0IGlzIGtub3duIHdpdGhcbiAqIGNlcnRhaW50eSB0aGF0IHdlIGFyZSAqKm5vdCoqIGluIGEgRE9NIHRyYW5zYWN0aW9uLlxuICpcbiAqIFlvdSBtYXkgd2FudCB0byBjYWxsIHRoaXMgd2hlbiB5b3Uga25vdyB0aGF0IHNvbWUgZGVlcGVyIGFzcGVjdCBvZiB0aGVcbiAqIGNvbXBvbmVudCdzIHN0YXRlIGhhcyBjaGFuZ2VkIGJ1dCBgc2V0U3RhdGVgIHdhcyBub3QgY2FsbGVkLlxuICpcbiAqIFRoaXMgd2lsbCBub3QgaW52b2tlIGBzaG91bGRDb21wb25lbnRVcGRhdGVgLCBidXQgaXQgd2lsbCBpbnZva2VcbiAqIGBjb21wb25lbnRXaWxsVXBkYXRlYCBhbmQgYGNvbXBvbmVudERpZFVwZGF0ZWAuXG4gKlxuICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciB1cGRhdGUgaXMgY29tcGxldGUuXG4gKiBAZmluYWxcbiAqIEBwcm90ZWN0ZWRcbiAqL1xuXG5cbkNvbXBvbmVudC5wcm90b3R5cGUuZm9yY2VVcGRhdGUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgdGhpcy51cGRhdGVyLmVucXVldWVGb3JjZVVwZGF0ZSh0aGlzLCBjYWxsYmFjaywgJ2ZvcmNlVXBkYXRlJyk7XG59O1xuLyoqXG4gKiBEZXByZWNhdGVkIEFQSXMuIFRoZXNlIEFQSXMgdXNlZCB0byBleGlzdCBvbiBjbGFzc2ljIFJlYWN0IGNsYXNzZXMgYnV0IHNpbmNlXG4gKiB3ZSB3b3VsZCBsaWtlIHRvIGRlcHJlY2F0ZSB0aGVtLCB3ZSdyZSBub3QgZ29pbmcgdG8gbW92ZSB0aGVtIG92ZXIgdG8gdGhpc1xuICogbW9kZXJuIGJhc2UgY2xhc3MuIEluc3RlYWQsIHdlIGRlZmluZSBhIGdldHRlciB0aGF0IHdhcm5zIGlmIGl0J3MgYWNjZXNzZWQuXG4gKi9cblxuXG57XG4gIHZhciBkZXByZWNhdGVkQVBJcyA9IHtcbiAgICBpc01vdW50ZWQ6IFsnaXNNb3VudGVkJywgJ0luc3RlYWQsIG1ha2Ugc3VyZSB0byBjbGVhbiB1cCBzdWJzY3JpcHRpb25zIGFuZCBwZW5kaW5nIHJlcXVlc3RzIGluICcgKyAnY29tcG9uZW50V2lsbFVubW91bnQgdG8gcHJldmVudCBtZW1vcnkgbGVha3MuJ10sXG4gICAgcmVwbGFjZVN0YXRlOiBbJ3JlcGxhY2VTdGF0ZScsICdSZWZhY3RvciB5b3VyIGNvZGUgdG8gdXNlIHNldFN0YXRlIGluc3RlYWQgKHNlZSAnICsgJ2h0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMzIzNikuJ11cbiAgfTtcblxuICB2YXIgZGVmaW5lRGVwcmVjYXRpb25XYXJuaW5nID0gZnVuY3Rpb24gKG1ldGhvZE5hbWUsIGluZm8pIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29tcG9uZW50LnByb3RvdHlwZSwgbWV0aG9kTmFtZSwge1xuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdhcm4oJyVzKC4uLikgaXMgZGVwcmVjYXRlZCBpbiBwbGFpbiBKYXZhU2NyaXB0IFJlYWN0IGNsYXNzZXMuICVzJywgaW5mb1swXSwgaW5mb1sxXSk7XG5cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBmb3IgKHZhciBmbk5hbWUgaW4gZGVwcmVjYXRlZEFQSXMpIHtcbiAgICBpZiAoZGVwcmVjYXRlZEFQSXMuaGFzT3duUHJvcGVydHkoZm5OYW1lKSkge1xuICAgICAgZGVmaW5lRGVwcmVjYXRpb25XYXJuaW5nKGZuTmFtZSwgZGVwcmVjYXRlZEFQSXNbZm5OYW1lXSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIENvbXBvbmVudER1bW15KCkge31cblxuQ29tcG9uZW50RHVtbXkucHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcbi8qKlxuICogQ29udmVuaWVuY2UgY29tcG9uZW50IHdpdGggZGVmYXVsdCBzaGFsbG93IGVxdWFsaXR5IGNoZWNrIGZvciBzQ1UuXG4gKi9cblxuZnVuY3Rpb24gUHVyZUNvbXBvbmVudChwcm9wcywgY29udGV4dCwgdXBkYXRlcikge1xuICB0aGlzLnByb3BzID0gcHJvcHM7XG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7IC8vIElmIGEgY29tcG9uZW50IGhhcyBzdHJpbmcgcmVmcywgd2Ugd2lsbCBhc3NpZ24gYSBkaWZmZXJlbnQgb2JqZWN0IGxhdGVyLlxuXG4gIHRoaXMucmVmcyA9IGVtcHR5T2JqZWN0O1xuICB0aGlzLnVwZGF0ZXIgPSB1cGRhdGVyIHx8IFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlO1xufVxuXG52YXIgcHVyZUNvbXBvbmVudFByb3RvdHlwZSA9IFB1cmVDb21wb25lbnQucHJvdG90eXBlID0gbmV3IENvbXBvbmVudER1bW15KCk7XG5wdXJlQ29tcG9uZW50UHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUHVyZUNvbXBvbmVudDsgLy8gQXZvaWQgYW4gZXh0cmEgcHJvdG90eXBlIGp1bXAgZm9yIHRoZXNlIG1ldGhvZHMuXG5cbl9hc3NpZ24ocHVyZUNvbXBvbmVudFByb3RvdHlwZSwgQ29tcG9uZW50LnByb3RvdHlwZSk7XG5cbnB1cmVDb21wb25lbnRQcm90b3R5cGUuaXNQdXJlUmVhY3RDb21wb25lbnQgPSB0cnVlO1xuXG4vLyBhbiBpbW11dGFibGUgb2JqZWN0IHdpdGggYSBzaW5nbGUgbXV0YWJsZSB2YWx1ZVxuZnVuY3Rpb24gY3JlYXRlUmVmKCkge1xuICB2YXIgcmVmT2JqZWN0ID0ge1xuICAgIGN1cnJlbnQ6IG51bGxcbiAgfTtcblxuICB7XG4gICAgT2JqZWN0LnNlYWwocmVmT2JqZWN0KTtcbiAgfVxuXG4gIHJldHVybiByZWZPYmplY3Q7XG59XG5cbmZ1bmN0aW9uIGdldFdyYXBwZWROYW1lKG91dGVyVHlwZSwgaW5uZXJUeXBlLCB3cmFwcGVyTmFtZSkge1xuICB2YXIgZnVuY3Rpb25OYW1lID0gaW5uZXJUeXBlLmRpc3BsYXlOYW1lIHx8IGlubmVyVHlwZS5uYW1lIHx8ICcnO1xuICByZXR1cm4gb3V0ZXJUeXBlLmRpc3BsYXlOYW1lIHx8IChmdW5jdGlvbk5hbWUgIT09ICcnID8gd3JhcHBlck5hbWUgKyBcIihcIiArIGZ1bmN0aW9uTmFtZSArIFwiKVwiIDogd3JhcHBlck5hbWUpO1xufVxuXG5mdW5jdGlvbiBnZXRDb250ZXh0TmFtZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8ICdDb250ZXh0Jztcbn1cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKSB7XG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICAvLyBIb3N0IHJvb3QsIHRleHQgbm9kZSBvciBqdXN0IGludmFsaWQgdHlwZS5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHtcbiAgICBpZiAodHlwZW9mIHR5cGUudGFnID09PSAnbnVtYmVyJykge1xuICAgICAgZXJyb3IoJ1JlY2VpdmVkIGFuIHVuZXhwZWN0ZWQgb2JqZWN0IGluIGdldENvbXBvbmVudE5hbWUoKS4gJyArICdUaGlzIGlzIGxpa2VseSBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8IG51bGw7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIGV4cG9ydHMuRnJhZ21lbnQ6XG4gICAgICByZXR1cm4gJ0ZyYWdtZW50JztcblxuICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICByZXR1cm4gJ1BvcnRhbCc7XG5cbiAgICBjYXNlIGV4cG9ydHMuUHJvZmlsZXI6XG4gICAgICByZXR1cm4gJ1Byb2ZpbGVyJztcblxuICAgIGNhc2UgZXhwb3J0cy5TdHJpY3RNb2RlOlxuICAgICAgcmV0dXJuICdTdHJpY3RNb2RlJztcblxuICAgIGNhc2UgZXhwb3J0cy5TdXNwZW5zZTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2UnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlTGlzdCc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUoY29udGV4dCkgKyAnLkNvbnN1bWVyJztcblxuICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICB2YXIgcHJvdmlkZXIgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUocHJvdmlkZXIuX2NvbnRleHQpICsgJy5Qcm92aWRlcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldFdyYXBwZWROYW1lKHR5cGUsIHR5cGUucmVuZGVyLCAnRm9yd2FyZFJlZicpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKTtcblxuICAgICAgY2FzZSBSRUFDVF9CTE9DS19UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZSh0eXBlLl9yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKGluaXQocGF5bG9hZCkpO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIFJFU0VSVkVEX1BST1BTID0ge1xuICBrZXk6IHRydWUsXG4gIHJlZjogdHJ1ZSxcbiAgX19zZWxmOiB0cnVlLFxuICBfX3NvdXJjZTogdHJ1ZVxufTtcbnZhciBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biwgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24sIGRpZFdhcm5BYm91dFN0cmluZ1JlZnM7XG5cbntcbiAgZGlkV2FybkFib3V0U3RyaW5nUmVmcyA9IHt9O1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZFJlZihjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ3JlZicpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdyZWYnKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLnJlZiAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZEtleShjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ2tleScpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdrZXknKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLmtleSAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ0tleSA9IGZ1bmN0aW9uICgpIHtcbiAgICB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGBrZXlgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHdhcm5BYm91dEFjY2Vzc2luZ0tleS5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ2tleScsIHtcbiAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ0tleSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB2YXIgd2FybkFib3V0QWNjZXNzaW5nUmVmID0gZnVuY3Rpb24gKCkge1xuICAgIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYHJlZmAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgd2FybkFib3V0QWNjZXNzaW5nUmVmLmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAncmVmJywge1xuICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nUmVmLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbn1cblxuZnVuY3Rpb24gd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZykge1xuICB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcucmVmID09PSAnc3RyaW5nJyAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50ICYmIGNvbmZpZy5fX3NlbGYgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC5zdGF0ZU5vZGUgIT09IGNvbmZpZy5fX3NlbGYpIHtcbiAgICAgIHZhciBjb21wb25lbnROYW1lID0gZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpO1xuXG4gICAgICBpZiAoIWRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0pIHtcbiAgICAgICAgZXJyb3IoJ0NvbXBvbmVudCBcIiVzXCIgY29udGFpbnMgdGhlIHN0cmluZyByZWYgXCIlc1wiLiAnICsgJ1N1cHBvcnQgZm9yIHN0cmluZyByZWZzIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiAnICsgJ1RoaXMgY2FzZSBjYW5ub3QgYmUgYXV0b21hdGljYWxseSBjb252ZXJ0ZWQgdG8gYW4gYXJyb3cgZnVuY3Rpb24uICcgKyAnV2UgYXNrIHlvdSB0byBtYW51YWxseSBmaXggdGhpcyBjYXNlIGJ5IHVzaW5nIHVzZVJlZigpIG9yIGNyZWF0ZVJlZigpIGluc3RlYWQuICcgKyAnTGVhcm4gbW9yZSBhYm91dCB1c2luZyByZWZzIHNhZmVseSBoZXJlOiAnICsgJ2h0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zdHJpY3QtbW9kZS1zdHJpbmctcmVmJywgY29tcG9uZW50TmFtZSwgY29uZmlnLnJlZik7XG5cbiAgICAgICAgZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEZhY3RvcnkgbWV0aG9kIHRvIGNyZWF0ZSBhIG5ldyBSZWFjdCBlbGVtZW50LiBUaGlzIG5vIGxvbmdlciBhZGhlcmVzIHRvXG4gKiB0aGUgY2xhc3MgcGF0dGVybiwgc28gZG8gbm90IHVzZSBuZXcgdG8gY2FsbCBpdC4gQWxzbywgaW5zdGFuY2VvZiBjaGVja1xuICogd2lsbCBub3Qgd29yay4gSW5zdGVhZCB0ZXN0ICQkdHlwZW9mIGZpZWxkIGFnYWluc3QgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIHRvIGNoZWNrXG4gKiBpZiBzb21ldGhpbmcgaXMgYSBSZWFjdCBFbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHsqfSBwcm9wc1xuICogQHBhcmFtIHsqfSBrZXlcbiAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gcmVmXG4gKiBAcGFyYW0geyp9IG93bmVyXG4gKiBAcGFyYW0geyp9IHNlbGYgQSAqdGVtcG9yYXJ5KiBoZWxwZXIgdG8gZGV0ZWN0IHBsYWNlcyB3aGVyZSBgdGhpc2AgaXNcbiAqIGRpZmZlcmVudCBmcm9tIHRoZSBgb3duZXJgIHdoZW4gUmVhY3QuY3JlYXRlRWxlbWVudCBpcyBjYWxsZWQsIHNvIHRoYXQgd2VcbiAqIGNhbiB3YXJuLiBXZSB3YW50IHRvIGdldCByaWQgb2Ygb3duZXIgYW5kIHJlcGxhY2Ugc3RyaW5nIGByZWZgcyB3aXRoIGFycm93XG4gKiBmdW5jdGlvbnMsIGFuZCBhcyBsb25nIGFzIGB0aGlzYCBhbmQgb3duZXIgYXJlIHRoZSBzYW1lLCB0aGVyZSB3aWxsIGJlIG5vXG4gKiBjaGFuZ2UgaW4gYmVoYXZpb3IuXG4gKiBAcGFyYW0geyp9IHNvdXJjZSBBbiBhbm5vdGF0aW9uIG9iamVjdCAoYWRkZWQgYnkgYSB0cmFuc3BpbGVyIG9yIG90aGVyd2lzZSlcbiAqIGluZGljYXRpbmcgZmlsZW5hbWUsIGxpbmUgbnVtYmVyLCBhbmQvb3Igb3RoZXIgaW5mb3JtYXRpb24uXG4gKiBAaW50ZXJuYWxcbiAqL1xuXG5cbnZhciBSZWFjdEVsZW1lbnQgPSBmdW5jdGlvbiAodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKSB7XG4gIHZhciBlbGVtZW50ID0ge1xuICAgIC8vIFRoaXMgdGFnIGFsbG93cyB1cyB0byB1bmlxdWVseSBpZGVudGlmeSB0aGlzIGFzIGEgUmVhY3QgRWxlbWVudFxuICAgICQkdHlwZW9mOiBSRUFDVF9FTEVNRU5UX1RZUEUsXG4gICAgLy8gQnVpbHQtaW4gcHJvcGVydGllcyB0aGF0IGJlbG9uZyBvbiB0aGUgZWxlbWVudFxuICAgIHR5cGU6IHR5cGUsXG4gICAga2V5OiBrZXksXG4gICAgcmVmOiByZWYsXG4gICAgcHJvcHM6IHByb3BzLFxuICAgIC8vIFJlY29yZCB0aGUgY29tcG9uZW50IHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyB0aGlzIGVsZW1lbnQuXG4gICAgX293bmVyOiBvd25lclxuICB9O1xuXG4gIHtcbiAgICAvLyBUaGUgdmFsaWRhdGlvbiBmbGFnIGlzIGN1cnJlbnRseSBtdXRhdGl2ZS4gV2UgcHV0IGl0IG9uXG4gICAgLy8gYW4gZXh0ZXJuYWwgYmFja2luZyBzdG9yZSBzbyB0aGF0IHdlIGNhbiBmcmVlemUgdGhlIHdob2xlIG9iamVjdC5cbiAgICAvLyBUaGlzIGNhbiBiZSByZXBsYWNlZCB3aXRoIGEgV2Vha01hcCBvbmNlIHRoZXkgYXJlIGltcGxlbWVudGVkIGluXG4gICAgLy8gY29tbW9ubHkgdXNlZCBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMuXG4gICAgZWxlbWVudC5fc3RvcmUgPSB7fTsgLy8gVG8gbWFrZSBjb21wYXJpbmcgUmVhY3RFbGVtZW50cyBlYXNpZXIgZm9yIHRlc3RpbmcgcHVycG9zZXMsIHdlIG1ha2VcbiAgICAvLyB0aGUgdmFsaWRhdGlvbiBmbGFnIG5vbi1lbnVtZXJhYmxlICh3aGVyZSBwb3NzaWJsZSwgd2hpY2ggc2hvdWxkXG4gICAgLy8gaW5jbHVkZSBldmVyeSBlbnZpcm9ubWVudCB3ZSBydW4gdGVzdHMgaW4pLCBzbyB0aGUgdGVzdCBmcmFtZXdvcmtcbiAgICAvLyBpZ25vcmVzIGl0LlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQuX3N0b3JlLCAndmFsaWRhdGVkJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogZmFsc2VcbiAgICB9KTsgLy8gc2VsZiBhbmQgc291cmNlIGFyZSBERVYgb25seSBwcm9wZXJ0aWVzLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc2VsZicsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzZWxmXG4gICAgfSk7IC8vIFR3byBlbGVtZW50cyBjcmVhdGVkIGluIHR3byBkaWZmZXJlbnQgcGxhY2VzIHNob3VsZCBiZSBjb25zaWRlcmVkXG4gICAgLy8gZXF1YWwgZm9yIHRlc3RpbmcgcHVycG9zZXMgYW5kIHRoZXJlZm9yZSB3ZSBoaWRlIGl0IGZyb20gZW51bWVyYXRpb24uXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zb3VyY2UnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc291cmNlXG4gICAgfSk7XG5cbiAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50LnByb3BzKTtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuLyoqXG4gKiBDcmVhdGUgYW5kIHJldHVybiBhIG5ldyBSZWFjdEVsZW1lbnQgb2YgdGhlIGdpdmVuIHR5cGUuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2NyZWF0ZWVsZW1lbnRcbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KHR5cGUsIGNvbmZpZywgY2hpbGRyZW4pIHtcbiAgdmFyIHByb3BOYW1lOyAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG5cbiAgdmFyIHByb3BzID0ge307XG4gIHZhciBrZXkgPSBudWxsO1xuICB2YXIgcmVmID0gbnVsbDtcbiAgdmFyIHNlbGYgPSBudWxsO1xuICB2YXIgc291cmNlID0gbnVsbDtcblxuICBpZiAoY29uZmlnICE9IG51bGwpIHtcbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgcmVmID0gY29uZmlnLnJlZjtcblxuICAgICAge1xuICAgICAgICB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH1cblxuICAgIHNlbGYgPSBjb25maWcuX19zZWxmID09PSB1bmRlZmluZWQgPyBudWxsIDogY29uZmlnLl9fc2VsZjtcbiAgICBzb3VyY2UgPSBjb25maWcuX19zb3VyY2UgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb25maWcuX19zb3VyY2U7IC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIGFyZSBhZGRlZCB0byBhIG5ldyBwcm9wcyBvYmplY3RcblxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9IC8vIENoaWxkcmVuIGNhbiBiZSBtb3JlIHRoYW4gb25lIGFyZ3VtZW50LCBhbmQgdGhvc2UgYXJlIHRyYW5zZmVycmVkIG9udG9cbiAgLy8gdGhlIG5ld2x5IGFsbG9jYXRlZCBwcm9wcyBvYmplY3QuXG5cblxuICB2YXIgY2hpbGRyZW5MZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIC0gMjtcblxuICBpZiAoY2hpbGRyZW5MZW5ndGggPT09IDEpIHtcbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICB9IGVsc2UgaWYgKGNoaWxkcmVuTGVuZ3RoID4gMSkge1xuICAgIHZhciBjaGlsZEFycmF5ID0gQXJyYXkoY2hpbGRyZW5MZW5ndGgpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbkxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZEFycmF5W2ldID0gYXJndW1lbnRzW2kgKyAyXTtcbiAgICB9XG5cbiAgICB7XG4gICAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgICBPYmplY3QuZnJlZXplKGNoaWxkQXJyYXkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRBcnJheTtcbiAgfSAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcblxuXG4gIGlmICh0eXBlICYmIHR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgdmFyIGRlZmF1bHRQcm9wcyA9IHR5cGUuZGVmYXVsdFByb3BzO1xuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBkZWZhdWx0UHJvcHMpIHtcbiAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHtcbiAgICBpZiAoa2V5IHx8IHJlZikge1xuICAgICAgdmFyIGRpc3BsYXlOYW1lID0gdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgPyB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCAnVW5rbm93bicgOiB0eXBlO1xuXG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWYpIHtcbiAgICAgICAgZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gUmVhY3RFbGVtZW50KHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQsIHByb3BzKTtcbn1cbmZ1bmN0aW9uIGNsb25lQW5kUmVwbGFjZUtleShvbGRFbGVtZW50LCBuZXdLZXkpIHtcbiAgdmFyIG5ld0VsZW1lbnQgPSBSZWFjdEVsZW1lbnQob2xkRWxlbWVudC50eXBlLCBuZXdLZXksIG9sZEVsZW1lbnQucmVmLCBvbGRFbGVtZW50Ll9zZWxmLCBvbGRFbGVtZW50Ll9zb3VyY2UsIG9sZEVsZW1lbnQuX293bmVyLCBvbGRFbGVtZW50LnByb3BzKTtcbiAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG4vKipcbiAqIENsb25lIGFuZCByZXR1cm4gYSBuZXcgUmVhY3RFbGVtZW50IHVzaW5nIGVsZW1lbnQgYXMgdGhlIHN0YXJ0aW5nIHBvaW50LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNjbG9uZWVsZW1lbnRcbiAqL1xuXG5mdW5jdGlvbiBjbG9uZUVsZW1lbnQoZWxlbWVudCwgY29uZmlnLCBjaGlsZHJlbikge1xuICBpZiAoISEoZWxlbWVudCA9PT0gbnVsbCB8fCBlbGVtZW50ID09PSB1bmRlZmluZWQpKSB7XG4gICAge1xuICAgICAgdGhyb3cgRXJyb3IoIFwiUmVhY3QuY2xvbmVFbGVtZW50KC4uLik6IFRoZSBhcmd1bWVudCBtdXN0IGJlIGEgUmVhY3QgZWxlbWVudCwgYnV0IHlvdSBwYXNzZWQgXCIgKyBlbGVtZW50ICsgXCIuXCIgKTtcbiAgICB9XG4gIH1cblxuICB2YXIgcHJvcE5hbWU7IC8vIE9yaWdpbmFsIHByb3BzIGFyZSBjb3BpZWRcblxuICB2YXIgcHJvcHMgPSBfYXNzaWduKHt9LCBlbGVtZW50LnByb3BzKTsgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxuXG5cbiAgdmFyIGtleSA9IGVsZW1lbnQua2V5O1xuICB2YXIgcmVmID0gZWxlbWVudC5yZWY7IC8vIFNlbGYgaXMgcHJlc2VydmVkIHNpbmNlIHRoZSBvd25lciBpcyBwcmVzZXJ2ZWQuXG5cbiAgdmFyIHNlbGYgPSBlbGVtZW50Ll9zZWxmOyAvLyBTb3VyY2UgaXMgcHJlc2VydmVkIHNpbmNlIGNsb25lRWxlbWVudCBpcyB1bmxpa2VseSB0byBiZSB0YXJnZXRlZCBieSBhXG4gIC8vIHRyYW5zcGlsZXIsIGFuZCB0aGUgb3JpZ2luYWwgc291cmNlIGlzIHByb2JhYmx5IGEgYmV0dGVyIGluZGljYXRvciBvZiB0aGVcbiAgLy8gdHJ1ZSBvd25lci5cblxuICB2YXIgc291cmNlID0gZWxlbWVudC5fc291cmNlOyAvLyBPd25lciB3aWxsIGJlIHByZXNlcnZlZCwgdW5sZXNzIHJlZiBpcyBvdmVycmlkZGVuXG5cbiAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG5cbiAgaWYgKGNvbmZpZyAhPSBudWxsKSB7XG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIC8vIFNpbGVudGx5IHN0ZWFsIHRoZSByZWYgZnJvbSB0aGUgcGFyZW50LlxuICAgICAgcmVmID0gY29uZmlnLnJlZjtcbiAgICAgIG93bmVyID0gUmVhY3RDdXJyZW50T3duZXIuY3VycmVudDtcbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH0gLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgb3ZlcnJpZGUgZXhpc3RpbmcgcHJvcHNcblxuXG4gICAgdmFyIGRlZmF1bHRQcm9wcztcblxuICAgIGlmIChlbGVtZW50LnR5cGUgJiYgZWxlbWVudC50eXBlLmRlZmF1bHRQcm9wcykge1xuICAgICAgZGVmYXVsdFByb3BzID0gZWxlbWVudC50eXBlLmRlZmF1bHRQcm9wcztcbiAgICB9XG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBpZiAoY29uZmlnW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkICYmIGRlZmF1bHRQcm9wcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IC8vIENoaWxkcmVuIGNhbiBiZSBtb3JlIHRoYW4gb25lIGFyZ3VtZW50LCBhbmQgdGhvc2UgYXJlIHRyYW5zZmVycmVkIG9udG9cbiAgLy8gdGhlIG5ld2x5IGFsbG9jYXRlZCBwcm9wcyBvYmplY3QuXG5cblxuICB2YXIgY2hpbGRyZW5MZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIC0gMjtcblxuICBpZiAoY2hpbGRyZW5MZW5ndGggPT09IDEpIHtcbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICB9IGVsc2UgaWYgKGNoaWxkcmVuTGVuZ3RoID4gMSkge1xuICAgIHZhciBjaGlsZEFycmF5ID0gQXJyYXkoY2hpbGRyZW5MZW5ndGgpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbkxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZEFycmF5W2ldID0gYXJndW1lbnRzW2kgKyAyXTtcbiAgICB9XG5cbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkQXJyYXk7XG4gIH1cblxuICByZXR1cm4gUmVhY3RFbGVtZW50KGVsZW1lbnQudHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKTtcbn1cbi8qKlxuICogVmVyaWZpZXMgdGhlIG9iamVjdCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjaXN2YWxpZGVsZW1lbnRcbiAqIEBwYXJhbSB7P29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIGBvYmplY3RgIGlzIGEgUmVhY3RFbGVtZW50LlxuICogQGZpbmFsXG4gKi9cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5cbnZhciBTRVBBUkFUT1IgPSAnLic7XG52YXIgU1VCU0VQQVJBVE9SID0gJzonO1xuLyoqXG4gKiBFc2NhcGUgYW5kIHdyYXAga2V5IHNvIGl0IGlzIHNhZmUgdG8gdXNlIGFzIGEgcmVhY3RpZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgdG8gYmUgZXNjYXBlZC5cbiAqIEByZXR1cm4ge3N0cmluZ30gdGhlIGVzY2FwZWQga2V5LlxuICovXG5cbmZ1bmN0aW9uIGVzY2FwZShrZXkpIHtcbiAgdmFyIGVzY2FwZVJlZ2V4ID0gL1s9Ol0vZztcbiAgdmFyIGVzY2FwZXJMb29rdXAgPSB7XG4gICAgJz0nOiAnPTAnLFxuICAgICc6JzogJz0yJ1xuICB9O1xuICB2YXIgZXNjYXBlZFN0cmluZyA9IGtleS5yZXBsYWNlKGVzY2FwZVJlZ2V4LCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICByZXR1cm4gZXNjYXBlckxvb2t1cFttYXRjaF07XG4gIH0pO1xuICByZXR1cm4gJyQnICsgZXNjYXBlZFN0cmluZztcbn1cbi8qKlxuICogVE9ETzogVGVzdCB0aGF0IGEgc2luZ2xlIGNoaWxkIGFuZCBhbiBhcnJheSB3aXRoIG9uZSBpdGVtIGhhdmUgdGhlIHNhbWUga2V5XG4gKiBwYXR0ZXJuLlxuICovXG5cblxudmFyIGRpZFdhcm5BYm91dE1hcHMgPSBmYWxzZTtcbnZhciB1c2VyUHJvdmlkZWRLZXlFc2NhcGVSZWdleCA9IC9cXC8rL2c7XG5cbmZ1bmN0aW9uIGVzY2FwZVVzZXJQcm92aWRlZEtleSh0ZXh0KSB7XG4gIHJldHVybiB0ZXh0LnJlcGxhY2UodXNlclByb3ZpZGVkS2V5RXNjYXBlUmVnZXgsICckJi8nKTtcbn1cbi8qKlxuICogR2VuZXJhdGUgYSBrZXkgc3RyaW5nIHRoYXQgaWRlbnRpZmllcyBhIGVsZW1lbnQgd2l0aGluIGEgc2V0LlxuICpcbiAqIEBwYXJhbSB7Kn0gZWxlbWVudCBBIGVsZW1lbnQgdGhhdCBjb3VsZCBjb250YWluIGEgbWFudWFsIGtleS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBJbmRleCB0aGF0IGlzIHVzZWQgaWYgYSBtYW51YWwga2V5IGlzIG5vdCBwcm92aWRlZC5cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuXG5cbmZ1bmN0aW9uIGdldEVsZW1lbnRLZXkoZWxlbWVudCwgaW5kZXgpIHtcbiAgLy8gRG8gc29tZSB0eXBlY2hlY2tpbmcgaGVyZSBzaW5jZSB3ZSBjYWxsIHRoaXMgYmxpbmRseS4gV2Ugd2FudCB0byBlbnN1cmVcbiAgLy8gdGhhdCB3ZSBkb24ndCBibG9jayBwb3RlbnRpYWwgZnV0dXJlIEVTIEFQSXMuXG4gIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ29iamVjdCcgJiYgZWxlbWVudCAhPT0gbnVsbCAmJiBlbGVtZW50LmtleSAhPSBudWxsKSB7XG4gICAgLy8gRXhwbGljaXQga2V5XG4gICAgcmV0dXJuIGVzY2FwZSgnJyArIGVsZW1lbnQua2V5KTtcbiAgfSAvLyBJbXBsaWNpdCBrZXkgZGV0ZXJtaW5lZCBieSB0aGUgaW5kZXggaW4gdGhlIHNldFxuXG5cbiAgcmV0dXJuIGluZGV4LnRvU3RyaW5nKDM2KTtcbn1cblxuZnVuY3Rpb24gbWFwSW50b0FycmF5KGNoaWxkcmVuLCBhcnJheSwgZXNjYXBlZFByZWZpeCwgbmFtZVNvRmFyLCBjYWxsYmFjaykge1xuICB2YXIgdHlwZSA9IHR5cGVvZiBjaGlsZHJlbjtcblxuICBpZiAodHlwZSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgLy8gQWxsIG9mIHRoZSBhYm92ZSBhcmUgcGVyY2VpdmVkIGFzIG51bGwuXG4gICAgY2hpbGRyZW4gPSBudWxsO1xuICB9XG5cbiAgdmFyIGludm9rZUNhbGxiYWNrID0gZmFsc2U7XG5cbiAgaWYgKGNoaWxkcmVuID09PSBudWxsKSB7XG4gICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHN3aXRjaCAoY2hpbGRyZW4uJCR0eXBlb2YpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICAgICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICB9XG4gIH1cblxuICBpZiAoaW52b2tlQ2FsbGJhY2spIHtcbiAgICB2YXIgX2NoaWxkID0gY2hpbGRyZW47XG4gICAgdmFyIG1hcHBlZENoaWxkID0gY2FsbGJhY2soX2NoaWxkKTsgLy8gSWYgaXQncyB0aGUgb25seSBjaGlsZCwgdHJlYXQgdGhlIG5hbWUgYXMgaWYgaXQgd2FzIHdyYXBwZWQgaW4gYW4gYXJyYXlcbiAgICAvLyBzbyB0aGF0IGl0J3MgY29uc2lzdGVudCBpZiB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuIGdyb3dzOlxuXG4gICAgdmFyIGNoaWxkS2V5ID0gbmFtZVNvRmFyID09PSAnJyA/IFNFUEFSQVRPUiArIGdldEVsZW1lbnRLZXkoX2NoaWxkLCAwKSA6IG5hbWVTb0ZhcjtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KG1hcHBlZENoaWxkKSkge1xuICAgICAgdmFyIGVzY2FwZWRDaGlsZEtleSA9ICcnO1xuXG4gICAgICBpZiAoY2hpbGRLZXkgIT0gbnVsbCkge1xuICAgICAgICBlc2NhcGVkQ2hpbGRLZXkgPSBlc2NhcGVVc2VyUHJvdmlkZWRLZXkoY2hpbGRLZXkpICsgJy8nO1xuICAgICAgfVxuXG4gICAgICBtYXBJbnRvQXJyYXkobWFwcGVkQ2hpbGQsIGFycmF5LCBlc2NhcGVkQ2hpbGRLZXksICcnLCBmdW5jdGlvbiAoYykge1xuICAgICAgICByZXR1cm4gYztcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAobWFwcGVkQ2hpbGQgIT0gbnVsbCkge1xuICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KG1hcHBlZENoaWxkKSkge1xuICAgICAgICBtYXBwZWRDaGlsZCA9IGNsb25lQW5kUmVwbGFjZUtleShtYXBwZWRDaGlsZCwgLy8gS2VlcCBib3RoIHRoZSAobWFwcGVkKSBhbmQgb2xkIGtleXMgaWYgdGhleSBkaWZmZXIsIGp1c3QgYXNcbiAgICAgICAgLy8gdHJhdmVyc2VBbGxDaGlsZHJlbiB1c2VkIHRvIGRvIGZvciBvYmplY3RzIGFzIGNoaWxkcmVuXG4gICAgICAgIGVzY2FwZWRQcmVmaXggKyAoIC8vICRGbG93Rml4TWUgRmxvdyBpbmNvcnJlY3RseSB0aGlua3MgUmVhY3QuUG9ydGFsIGRvZXNuJ3QgaGF2ZSBhIGtleVxuICAgICAgICBtYXBwZWRDaGlsZC5rZXkgJiYgKCFfY2hpbGQgfHwgX2NoaWxkLmtleSAhPT0gbWFwcGVkQ2hpbGQua2V5KSA/IC8vICRGbG93Rml4TWUgRmxvdyBpbmNvcnJlY3RseSB0aGlua3MgZXhpc3RpbmcgZWxlbWVudCdzIGtleSBjYW4gYmUgYSBudW1iZXJcbiAgICAgICAgZXNjYXBlVXNlclByb3ZpZGVkS2V5KCcnICsgbWFwcGVkQ2hpbGQua2V5KSArICcvJyA6ICcnKSArIGNoaWxkS2V5KTtcbiAgICAgIH1cblxuICAgICAgYXJyYXkucHVzaChtYXBwZWRDaGlsZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICB2YXIgY2hpbGQ7XG4gIHZhciBuZXh0TmFtZTtcbiAgdmFyIHN1YnRyZWVDb3VudCA9IDA7IC8vIENvdW50IG9mIGNoaWxkcmVuIGZvdW5kIGluIHRoZSBjdXJyZW50IHN1YnRyZWUuXG5cbiAgdmFyIG5leHROYW1lUHJlZml4ID0gbmFtZVNvRmFyID09PSAnJyA/IFNFUEFSQVRPUiA6IG5hbWVTb0ZhciArIFNVQlNFUEFSQVRPUjtcblxuICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgbmV4dE5hbWUgPSBuZXh0TmFtZVByZWZpeCArIGdldEVsZW1lbnRLZXkoY2hpbGQsIGkpO1xuICAgICAgc3VidHJlZUNvdW50ICs9IG1hcEludG9BcnJheShjaGlsZCwgYXJyYXksIGVzY2FwZWRQcmVmaXgsIG5leHROYW1lLCBjYWxsYmFjayk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihjaGlsZHJlbik7XG5cbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHZhciBpdGVyYWJsZUNoaWxkcmVuID0gY2hpbGRyZW47XG5cbiAgICAgIHtcbiAgICAgICAgLy8gV2FybiBhYm91dCB1c2luZyBNYXBzIGFzIGNoaWxkcmVuXG4gICAgICAgIGlmIChpdGVyYXRvckZuID09PSBpdGVyYWJsZUNoaWxkcmVuLmVudHJpZXMpIHtcbiAgICAgICAgICBpZiAoIWRpZFdhcm5BYm91dE1hcHMpIHtcbiAgICAgICAgICAgIHdhcm4oJ1VzaW5nIE1hcHMgYXMgY2hpbGRyZW4gaXMgbm90IHN1cHBvcnRlZC4gJyArICdVc2UgYW4gYXJyYXkgb2Yga2V5ZWQgUmVhY3RFbGVtZW50cyBpbnN0ZWFkLicpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRpZFdhcm5BYm91dE1hcHMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChpdGVyYWJsZUNoaWxkcmVuKTtcbiAgICAgIHZhciBzdGVwO1xuICAgICAgdmFyIGlpID0gMDtcblxuICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICBjaGlsZCA9IHN0ZXAudmFsdWU7XG4gICAgICAgIG5leHROYW1lID0gbmV4dE5hbWVQcmVmaXggKyBnZXRFbGVtZW50S2V5KGNoaWxkLCBpaSsrKTtcbiAgICAgICAgc3VidHJlZUNvdW50ICs9IG1hcEludG9BcnJheShjaGlsZCwgYXJyYXksIGVzY2FwZWRQcmVmaXgsIG5leHROYW1lLCBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgdmFyIGNoaWxkcmVuU3RyaW5nID0gJycgKyBjaGlsZHJlbjtcblxuICAgICAge1xuICAgICAgICB7XG4gICAgICAgICAgdGhyb3cgRXJyb3IoIFwiT2JqZWN0cyBhcmUgbm90IHZhbGlkIGFzIGEgUmVhY3QgY2hpbGQgKGZvdW5kOiBcIiArIChjaGlsZHJlblN0cmluZyA9PT0gJ1tvYmplY3QgT2JqZWN0XScgPyAnb2JqZWN0IHdpdGgga2V5cyB7JyArIE9iamVjdC5rZXlzKGNoaWxkcmVuKS5qb2luKCcsICcpICsgJ30nIDogY2hpbGRyZW5TdHJpbmcpICsgXCIpLiBJZiB5b3UgbWVhbnQgdG8gcmVuZGVyIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiwgdXNlIGFuIGFycmF5IGluc3RlYWQuXCIgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdWJ0cmVlQ291bnQ7XG59XG5cbi8qKlxuICogTWFwcyBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVubWFwXG4gKlxuICogVGhlIHByb3ZpZGVkIG1hcEZ1bmN0aW9uKGNoaWxkLCBpbmRleCkgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2hcbiAqIGxlYWYgY2hpbGQuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCosIGludCl9IGZ1bmMgVGhlIG1hcCBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Kn0gY29udGV4dCBDb250ZXh0IGZvciBtYXBGdW5jdGlvbi5cbiAqIEByZXR1cm4ge29iamVjdH0gT2JqZWN0IGNvbnRhaW5pbmcgdGhlIG9yZGVyZWQgbWFwIG9mIHJlc3VsdHMuXG4gKi9cbmZ1bmN0aW9uIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jLCBjb250ZXh0KSB7XG4gIGlmIChjaGlsZHJlbiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9XG5cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgY291bnQgPSAwO1xuICBtYXBJbnRvQXJyYXkoY2hpbGRyZW4sIHJlc3VsdCwgJycsICcnLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICByZXR1cm4gZnVuYy5jYWxsKGNvbnRleHQsIGNoaWxkLCBjb3VudCsrKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG4vKipcbiAqIENvdW50IHRoZSBudW1iZXIgb2YgY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhc1xuICogYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5jb3VudFxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgbnVtYmVyIG9mIGNoaWxkcmVuLlxuICovXG5cblxuZnVuY3Rpb24gY291bnRDaGlsZHJlbihjaGlsZHJlbikge1xuICB2YXIgbiA9IDA7XG4gIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jdGlvbiAoKSB7XG4gICAgbisrOyAvLyBEb24ndCByZXR1cm4gYW55dGhpbmdcbiAgfSk7XG4gIHJldHVybiBuO1xufVxuXG4vKipcbiAqIEl0ZXJhdGVzIHRocm91Z2ggY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbmZvcmVhY2hcbiAqXG4gKiBUaGUgcHJvdmlkZWQgZm9yRWFjaEZ1bmMoY2hpbGQsIGluZGV4KSB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaFxuICogbGVhZiBjaGlsZC5cbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKiwgaW50KX0gZm9yRWFjaEZ1bmNcbiAqIEBwYXJhbSB7Kn0gZm9yRWFjaENvbnRleHQgQ29udGV4dCBmb3IgZm9yRWFjaENvbnRleHQuXG4gKi9cbmZ1bmN0aW9uIGZvckVhY2hDaGlsZHJlbihjaGlsZHJlbiwgZm9yRWFjaEZ1bmMsIGZvckVhY2hDb250ZXh0KSB7XG4gIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jdGlvbiAoKSB7XG4gICAgZm9yRWFjaEZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgLy8gRG9uJ3QgcmV0dXJuIGFueXRoaW5nLlxuICB9LCBmb3JFYWNoQ29udGV4dCk7XG59XG4vKipcbiAqIEZsYXR0ZW4gYSBjaGlsZHJlbiBvYmplY3QgKHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYCkgYW5kXG4gKiByZXR1cm4gYW4gYXJyYXkgd2l0aCBhcHByb3ByaWF0ZWx5IHJlLWtleWVkIGNoaWxkcmVuLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbnRvYXJyYXlcbiAqL1xuXG5cbmZ1bmN0aW9uIHRvQXJyYXkoY2hpbGRyZW4pIHtcbiAgcmV0dXJuIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICByZXR1cm4gY2hpbGQ7XG4gIH0pIHx8IFtdO1xufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSBmaXJzdCBjaGlsZCBpbiBhIGNvbGxlY3Rpb24gb2YgY2hpbGRyZW4gYW5kIHZlcmlmaWVzIHRoYXQgdGhlcmVcbiAqIGlzIG9ubHkgb25lIGNoaWxkIGluIHRoZSBjb2xsZWN0aW9uLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbm9ubHlcbiAqXG4gKiBUaGUgY3VycmVudCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIGZ1bmN0aW9uIGFzc3VtZXMgdGhhdCBhIHNpbmdsZSBjaGlsZCBnZXRzXG4gKiBwYXNzZWQgd2l0aG91dCBhIHdyYXBwZXIsIGJ1dCB0aGUgcHVycG9zZSBvZiB0aGlzIGhlbHBlciBmdW5jdGlvbiBpcyB0b1xuICogYWJzdHJhY3QgYXdheSB0aGUgcGFydGljdWxhciBzdHJ1Y3R1cmUgb2YgY2hpbGRyZW4uXG4gKlxuICogQHBhcmFtIHs/b2JqZWN0fSBjaGlsZHJlbiBDaGlsZCBjb2xsZWN0aW9uIHN0cnVjdHVyZS5cbiAqIEByZXR1cm4ge1JlYWN0RWxlbWVudH0gVGhlIGZpcnN0IGFuZCBvbmx5IGBSZWFjdEVsZW1lbnRgIGNvbnRhaW5lZCBpbiB0aGVcbiAqIHN0cnVjdHVyZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIG9ubHlDaGlsZChjaGlsZHJlbikge1xuICBpZiAoIWlzVmFsaWRFbGVtZW50KGNoaWxkcmVuKSkge1xuICAgIHtcbiAgICAgIHRocm93IEVycm9yKCBcIlJlYWN0LkNoaWxkcmVuLm9ubHkgZXhwZWN0ZWQgdG8gcmVjZWl2ZSBhIHNpbmdsZSBSZWFjdCBlbGVtZW50IGNoaWxkLlwiICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNoaWxkcmVuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb250ZXh0KGRlZmF1bHRWYWx1ZSwgY2FsY3VsYXRlQ2hhbmdlZEJpdHMpIHtcbiAgaWYgKGNhbGN1bGF0ZUNoYW5nZWRCaXRzID09PSB1bmRlZmluZWQpIHtcbiAgICBjYWxjdWxhdGVDaGFuZ2VkQml0cyA9IG51bGw7XG4gIH0gZWxzZSB7XG4gICAge1xuICAgICAgaWYgKGNhbGN1bGF0ZUNoYW5nZWRCaXRzICE9PSBudWxsICYmIHR5cGVvZiBjYWxjdWxhdGVDaGFuZ2VkQml0cyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBlcnJvcignY3JlYXRlQ29udGV4dDogRXhwZWN0ZWQgdGhlIG9wdGlvbmFsIHNlY29uZCBhcmd1bWVudCB0byBiZSBhICcgKyAnZnVuY3Rpb24uIEluc3RlYWQgcmVjZWl2ZWQ6ICVzJywgY2FsY3VsYXRlQ2hhbmdlZEJpdHMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhciBjb250ZXh0ID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9DT05URVhUX1RZUEUsXG4gICAgX2NhbGN1bGF0ZUNoYW5nZWRCaXRzOiBjYWxjdWxhdGVDaGFuZ2VkQml0cyxcbiAgICAvLyBBcyBhIHdvcmthcm91bmQgdG8gc3VwcG9ydCBtdWx0aXBsZSBjb25jdXJyZW50IHJlbmRlcmVycywgd2UgY2F0ZWdvcml6ZVxuICAgIC8vIHNvbWUgcmVuZGVyZXJzIGFzIHByaW1hcnkgYW5kIG90aGVycyBhcyBzZWNvbmRhcnkuIFdlIG9ubHkgZXhwZWN0XG4gICAgLy8gdGhlcmUgdG8gYmUgdHdvIGNvbmN1cnJlbnQgcmVuZGVyZXJzIGF0IG1vc3Q6IFJlYWN0IE5hdGl2ZSAocHJpbWFyeSkgYW5kXG4gICAgLy8gRmFicmljIChzZWNvbmRhcnkpOyBSZWFjdCBET00gKHByaW1hcnkpIGFuZCBSZWFjdCBBUlQgKHNlY29uZGFyeSkuXG4gICAgLy8gU2Vjb25kYXJ5IHJlbmRlcmVycyBzdG9yZSB0aGVpciBjb250ZXh0IHZhbHVlcyBvbiBzZXBhcmF0ZSBmaWVsZHMuXG4gICAgX2N1cnJlbnRWYWx1ZTogZGVmYXVsdFZhbHVlLFxuICAgIF9jdXJyZW50VmFsdWUyOiBkZWZhdWx0VmFsdWUsXG4gICAgLy8gVXNlZCB0byB0cmFjayBob3cgbWFueSBjb25jdXJyZW50IHJlbmRlcmVycyB0aGlzIGNvbnRleHQgY3VycmVudGx5XG4gICAgLy8gc3VwcG9ydHMgd2l0aGluIGluIGEgc2luZ2xlIHJlbmRlcmVyLiBTdWNoIGFzIHBhcmFsbGVsIHNlcnZlciByZW5kZXJpbmcuXG4gICAgX3RocmVhZENvdW50OiAwLFxuICAgIC8vIFRoZXNlIGFyZSBjaXJjdWxhclxuICAgIFByb3ZpZGVyOiBudWxsLFxuICAgIENvbnN1bWVyOiBudWxsXG4gIH07XG4gIGNvbnRleHQuUHJvdmlkZXIgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX1BST1ZJREVSX1RZUEUsXG4gICAgX2NvbnRleHQ6IGNvbnRleHRcbiAgfTtcbiAgdmFyIGhhc1dhcm5lZEFib3V0VXNpbmdOZXN0ZWRDb250ZXh0Q29uc3VtZXJzID0gZmFsc2U7XG4gIHZhciBoYXNXYXJuZWRBYm91dFVzaW5nQ29uc3VtZXJQcm92aWRlciA9IGZhbHNlO1xuICB2YXIgaGFzV2FybmVkQWJvdXREaXNwbGF5TmFtZU9uQ29uc3VtZXIgPSBmYWxzZTtcblxuICB7XG4gICAgLy8gQSBzZXBhcmF0ZSBvYmplY3QsIGJ1dCBwcm94aWVzIGJhY2sgdG8gdGhlIG9yaWdpbmFsIGNvbnRleHQgb2JqZWN0IGZvclxuICAgIC8vIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LiBJdCBoYXMgYSBkaWZmZXJlbnQgJCR0eXBlb2YsIHNvIHdlIGNhbiBwcm9wZXJseVxuICAgIC8vIHdhcm4gZm9yIHRoZSBpbmNvcnJlY3QgdXNhZ2Ugb2YgQ29udGV4dCBhcyBhIENvbnN1bWVyLlxuICAgIHZhciBDb25zdW1lciA9IHtcbiAgICAgICQkdHlwZW9mOiBSRUFDVF9DT05URVhUX1RZUEUsXG4gICAgICBfY29udGV4dDogY29udGV4dCxcbiAgICAgIF9jYWxjdWxhdGVDaGFuZ2VkQml0czogY29udGV4dC5fY2FsY3VsYXRlQ2hhbmdlZEJpdHNcbiAgICB9OyAvLyAkRmxvd0ZpeE1lOiBGbG93IGNvbXBsYWlucyBhYm91dCBub3Qgc2V0dGluZyBhIHZhbHVlLCB3aGljaCBpcyBpbnRlbnRpb25hbCBoZXJlXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhDb25zdW1lciwge1xuICAgICAgUHJvdmlkZXI6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCFoYXNXYXJuZWRBYm91dFVzaW5nQ29uc3VtZXJQcm92aWRlcikge1xuICAgICAgICAgICAgaGFzV2FybmVkQWJvdXRVc2luZ0NvbnN1bWVyUHJvdmlkZXIgPSB0cnVlO1xuXG4gICAgICAgICAgICBlcnJvcignUmVuZGVyaW5nIDxDb250ZXh0LkNvbnN1bWVyLlByb3ZpZGVyPiBpcyBub3Qgc3VwcG9ydGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gJyArICdhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gcmVuZGVyIDxDb250ZXh0LlByb3ZpZGVyPiBpbnN0ZWFkPycpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBjb250ZXh0LlByb3ZpZGVyO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfUHJvdmlkZXIpIHtcbiAgICAgICAgICBjb250ZXh0LlByb3ZpZGVyID0gX1Byb3ZpZGVyO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgX2N1cnJlbnRWYWx1ZToge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5fY3VycmVudFZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfY3VycmVudFZhbHVlKSB7XG4gICAgICAgICAgY29udGV4dC5fY3VycmVudFZhbHVlID0gX2N1cnJlbnRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF9jdXJyZW50VmFsdWUyOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0Ll9jdXJyZW50VmFsdWUyO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfY3VycmVudFZhbHVlMikge1xuICAgICAgICAgIGNvbnRleHQuX2N1cnJlbnRWYWx1ZTIgPSBfY3VycmVudFZhbHVlMjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF90aHJlYWRDb3VudDoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5fdGhyZWFkQ291bnQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF90aHJlYWRDb3VudCkge1xuICAgICAgICAgIGNvbnRleHQuX3RocmVhZENvdW50ID0gX3RocmVhZENvdW50O1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgQ29uc3VtZXI6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCFoYXNXYXJuZWRBYm91dFVzaW5nTmVzdGVkQ29udGV4dENvbnN1bWVycykge1xuICAgICAgICAgICAgaGFzV2FybmVkQWJvdXRVc2luZ05lc3RlZENvbnRleHRDb25zdW1lcnMgPSB0cnVlO1xuXG4gICAgICAgICAgICBlcnJvcignUmVuZGVyaW5nIDxDb250ZXh0LkNvbnN1bWVyLkNvbnN1bWVyPiBpcyBub3Qgc3VwcG9ydGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gJyArICdhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gcmVuZGVyIDxDb250ZXh0LkNvbnN1bWVyPiBpbnN0ZWFkPycpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBjb250ZXh0LkNvbnN1bWVyO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZGlzcGxheU5hbWU6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuZGlzcGxheU5hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKGRpc3BsYXlOYW1lKSB7XG4gICAgICAgICAgaWYgKCFoYXNXYXJuZWRBYm91dERpc3BsYXlOYW1lT25Db25zdW1lcikge1xuICAgICAgICAgICAgd2FybignU2V0dGluZyBgZGlzcGxheU5hbWVgIG9uIENvbnRleHQuQ29uc3VtZXIgaGFzIG5vIGVmZmVjdC4gJyArIFwiWW91IHNob3VsZCBzZXQgaXQgZGlyZWN0bHkgb24gdGhlIGNvbnRleHQgd2l0aCBDb250ZXh0LmRpc3BsYXlOYW1lID0gJyVzJy5cIiwgZGlzcGxheU5hbWUpO1xuXG4gICAgICAgICAgICBoYXNXYXJuZWRBYm91dERpc3BsYXlOYW1lT25Db25zdW1lciA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7IC8vICRGbG93Rml4TWU6IEZsb3cgY29tcGxhaW5zIGFib3V0IG1pc3NpbmcgcHJvcGVydGllcyBiZWNhdXNlIGl0IGRvZXNuJ3QgdW5kZXJzdGFuZCBkZWZpbmVQcm9wZXJ0eVxuXG4gICAgY29udGV4dC5Db25zdW1lciA9IENvbnN1bWVyO1xuICB9XG5cbiAge1xuICAgIGNvbnRleHQuX2N1cnJlbnRSZW5kZXJlciA9IG51bGw7XG4gICAgY29udGV4dC5fY3VycmVudFJlbmRlcmVyMiA9IG51bGw7XG4gIH1cblxuICByZXR1cm4gY29udGV4dDtcbn1cblxudmFyIFVuaW5pdGlhbGl6ZWQgPSAtMTtcbnZhciBQZW5kaW5nID0gMDtcbnZhciBSZXNvbHZlZCA9IDE7XG52YXIgUmVqZWN0ZWQgPSAyO1xuXG5mdW5jdGlvbiBsYXp5SW5pdGlhbGl6ZXIocGF5bG9hZCkge1xuICBpZiAocGF5bG9hZC5fc3RhdHVzID09PSBVbmluaXRpYWxpemVkKSB7XG4gICAgdmFyIGN0b3IgPSBwYXlsb2FkLl9yZXN1bHQ7XG4gICAgdmFyIHRoZW5hYmxlID0gY3RvcigpOyAvLyBUcmFuc2l0aW9uIHRvIHRoZSBuZXh0IHN0YXRlLlxuXG4gICAgdmFyIHBlbmRpbmcgPSBwYXlsb2FkO1xuICAgIHBlbmRpbmcuX3N0YXR1cyA9IFBlbmRpbmc7XG4gICAgcGVuZGluZy5fcmVzdWx0ID0gdGhlbmFibGU7XG4gICAgdGhlbmFibGUudGhlbihmdW5jdGlvbiAobW9kdWxlT2JqZWN0KSB7XG4gICAgICBpZiAocGF5bG9hZC5fc3RhdHVzID09PSBQZW5kaW5nKSB7XG4gICAgICAgIHZhciBkZWZhdWx0RXhwb3J0ID0gbW9kdWxlT2JqZWN0LmRlZmF1bHQ7XG5cbiAgICAgICAge1xuICAgICAgICAgIGlmIChkZWZhdWx0RXhwb3J0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGVycm9yKCdsYXp5OiBFeHBlY3RlZCB0aGUgcmVzdWx0IG9mIGEgZHluYW1pYyBpbXBvcnQoKSBjYWxsLiAnICsgJ0luc3RlYWQgcmVjZWl2ZWQ6ICVzXFxuXFxuWW91ciBjb2RlIHNob3VsZCBsb29rIGxpa2U6IFxcbiAgJyArIC8vIEJyZWFrIHVwIGltcG9ydHMgdG8gYXZvaWQgYWNjaWRlbnRhbGx5IHBhcnNpbmcgdGhlbSBhcyBkZXBlbmRlbmNpZXMuXG4gICAgICAgICAgICAnY29uc3QgTXlDb21wb25lbnQgPSBsYXp5KCgpID0+IGltcCcgKyBcIm9ydCgnLi9NeUNvbXBvbmVudCcpKVwiLCBtb2R1bGVPYmplY3QpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSAvLyBUcmFuc2l0aW9uIHRvIHRoZSBuZXh0IHN0YXRlLlxuXG5cbiAgICAgICAgdmFyIHJlc29sdmVkID0gcGF5bG9hZDtcbiAgICAgICAgcmVzb2x2ZWQuX3N0YXR1cyA9IFJlc29sdmVkO1xuICAgICAgICByZXNvbHZlZC5fcmVzdWx0ID0gZGVmYXVsdEV4cG9ydDtcbiAgICAgIH1cbiAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGlmIChwYXlsb2FkLl9zdGF0dXMgPT09IFBlbmRpbmcpIHtcbiAgICAgICAgLy8gVHJhbnNpdGlvbiB0byB0aGUgbmV4dCBzdGF0ZS5cbiAgICAgICAgdmFyIHJlamVjdGVkID0gcGF5bG9hZDtcbiAgICAgICAgcmVqZWN0ZWQuX3N0YXR1cyA9IFJlamVjdGVkO1xuICAgICAgICByZWplY3RlZC5fcmVzdWx0ID0gZXJyb3I7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpZiAocGF5bG9hZC5fc3RhdHVzID09PSBSZXNvbHZlZCkge1xuICAgIHJldHVybiBwYXlsb2FkLl9yZXN1bHQ7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgcGF5bG9hZC5fcmVzdWx0O1xuICB9XG59XG5cbmZ1bmN0aW9uIGxhenkoY3Rvcikge1xuICB2YXIgcGF5bG9hZCA9IHtcbiAgICAvLyBXZSB1c2UgdGhlc2UgZmllbGRzIHRvIHN0b3JlIHRoZSByZXN1bHQuXG4gICAgX3N0YXR1czogLTEsXG4gICAgX3Jlc3VsdDogY3RvclxuICB9O1xuICB2YXIgbGF6eVR5cGUgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0xBWllfVFlQRSxcbiAgICBfcGF5bG9hZDogcGF5bG9hZCxcbiAgICBfaW5pdDogbGF6eUluaXRpYWxpemVyXG4gIH07XG5cbiAge1xuICAgIC8vIEluIHByb2R1Y3Rpb24sIHRoaXMgd291bGQganVzdCBzZXQgaXQgb24gdGhlIG9iamVjdC5cbiAgICB2YXIgZGVmYXVsdFByb3BzO1xuICAgIHZhciBwcm9wVHlwZXM7IC8vICRGbG93Rml4TWVcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGxhenlUeXBlLCB7XG4gICAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gZGVmYXVsdFByb3BzO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChuZXdEZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgICBlcnJvcignUmVhY3QubGF6eSguLi4pOiBJdCBpcyBub3Qgc3VwcG9ydGVkIHRvIGFzc2lnbiBgZGVmYXVsdFByb3BzYCB0byAnICsgJ2EgbGF6eSBjb21wb25lbnQgaW1wb3J0LiBFaXRoZXIgc3BlY2lmeSB0aGVtIHdoZXJlIHRoZSBjb21wb25lbnQgJyArICdpcyBkZWZpbmVkLCBvciBjcmVhdGUgYSB3cmFwcGluZyBjb21wb25lbnQgYXJvdW5kIGl0LicpO1xuXG4gICAgICAgICAgZGVmYXVsdFByb3BzID0gbmV3RGVmYXVsdFByb3BzOyAvLyBNYXRjaCBwcm9kdWN0aW9uIGJlaGF2aW9yIG1vcmUgY2xvc2VseTpcbiAgICAgICAgICAvLyAkRmxvd0ZpeE1lXG5cbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobGF6eVR5cGUsICdkZWZhdWx0UHJvcHMnLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcFR5cGVzO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChuZXdQcm9wVHlwZXMpIHtcbiAgICAgICAgICBlcnJvcignUmVhY3QubGF6eSguLi4pOiBJdCBpcyBub3Qgc3VwcG9ydGVkIHRvIGFzc2lnbiBgcHJvcFR5cGVzYCB0byAnICsgJ2EgbGF6eSBjb21wb25lbnQgaW1wb3J0LiBFaXRoZXIgc3BlY2lmeSB0aGVtIHdoZXJlIHRoZSBjb21wb25lbnQgJyArICdpcyBkZWZpbmVkLCBvciBjcmVhdGUgYSB3cmFwcGluZyBjb21wb25lbnQgYXJvdW5kIGl0LicpO1xuXG4gICAgICAgICAgcHJvcFR5cGVzID0gbmV3UHJvcFR5cGVzOyAvLyBNYXRjaCBwcm9kdWN0aW9uIGJlaGF2aW9yIG1vcmUgY2xvc2VseTpcbiAgICAgICAgICAvLyAkRmxvd0ZpeE1lXG5cbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobGF6eVR5cGUsICdwcm9wVHlwZXMnLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBsYXp5VHlwZTtcbn1cblxuZnVuY3Rpb24gZm9yd2FyZFJlZihyZW5kZXIpIHtcbiAge1xuICAgIGlmIChyZW5kZXIgIT0gbnVsbCAmJiByZW5kZXIuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSkge1xuICAgICAgZXJyb3IoJ2ZvcndhcmRSZWYgcmVxdWlyZXMgYSByZW5kZXIgZnVuY3Rpb24gYnV0IHJlY2VpdmVkIGEgYG1lbW9gICcgKyAnY29tcG9uZW50LiBJbnN0ZWFkIG9mIGZvcndhcmRSZWYobWVtbyguLi4pKSwgdXNlICcgKyAnbWVtbyhmb3J3YXJkUmVmKC4uLikpLicpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHJlbmRlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZXJyb3IoJ2ZvcndhcmRSZWYgcmVxdWlyZXMgYSByZW5kZXIgZnVuY3Rpb24gYnV0IHdhcyBnaXZlbiAlcy4nLCByZW5kZXIgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcmVuZGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHJlbmRlci5sZW5ndGggIT09IDAgJiYgcmVuZGVyLmxlbmd0aCAhPT0gMikge1xuICAgICAgICBlcnJvcignZm9yd2FyZFJlZiByZW5kZXIgZnVuY3Rpb25zIGFjY2VwdCBleGFjdGx5IHR3byBwYXJhbWV0ZXJzOiBwcm9wcyBhbmQgcmVmLiAlcycsIHJlbmRlci5sZW5ndGggPT09IDEgPyAnRGlkIHlvdSBmb3JnZXQgdG8gdXNlIHRoZSByZWYgcGFyYW1ldGVyPycgOiAnQW55IGFkZGl0aW9uYWwgcGFyYW1ldGVyIHdpbGwgYmUgdW5kZWZpbmVkLicpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZW5kZXIgIT0gbnVsbCkge1xuICAgICAgaWYgKHJlbmRlci5kZWZhdWx0UHJvcHMgIT0gbnVsbCB8fCByZW5kZXIucHJvcFR5cGVzICE9IG51bGwpIHtcbiAgICAgICAgZXJyb3IoJ2ZvcndhcmRSZWYgcmVuZGVyIGZ1bmN0aW9ucyBkbyBub3Qgc3VwcG9ydCBwcm9wVHlwZXMgb3IgZGVmYXVsdFByb3BzLiAnICsgJ0RpZCB5b3UgYWNjaWRlbnRhbGx5IHBhc3MgYSBSZWFjdCBjb21wb25lbnQ/Jyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIGVsZW1lbnRUeXBlID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFLFxuICAgIHJlbmRlcjogcmVuZGVyXG4gIH07XG5cbiAge1xuICAgIHZhciBvd25OYW1lO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50VHlwZSwgJ2Rpc3BsYXlOYW1lJywge1xuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG93bk5hbWU7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICBvd25OYW1lID0gbmFtZTtcblxuICAgICAgICBpZiAocmVuZGVyLmRpc3BsYXlOYW1lID09IG51bGwpIHtcbiAgICAgICAgICByZW5kZXIuZGlzcGxheU5hbWUgPSBuYW1lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudFR5cGU7XG59XG5cbi8vIEZpbHRlciBjZXJ0YWluIERPTSBhdHRyaWJ1dGVzIChlLmcuIHNyYywgaHJlZikgaWYgdGhlaXIgdmFsdWVzIGFyZSBlbXB0eSBzdHJpbmdzLlxuXG52YXIgZW5hYmxlU2NvcGVBUEkgPSBmYWxzZTsgLy8gRXhwZXJpbWVudGFsIENyZWF0ZSBFdmVudCBIYW5kbGUgQVBJLlxuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gTm90ZTogdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgKGUuZy4gaWYgaXQncyBhIHBvbHlmaWxsKS5cblxuXG4gIGlmICh0eXBlID09PSBleHBvcnRzLkZyYWdtZW50IHx8IHR5cGUgPT09IGV4cG9ydHMuUHJvZmlsZXIgfHwgdHlwZSA9PT0gUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgfHwgdHlwZSA9PT0gZXhwb3J0cy5TdHJpY3RNb2RlIHx8IHR5cGUgPT09IGV4cG9ydHMuU3VzcGVuc2UgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSB8fCBlbmFibGVTY29wZUFQSSApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCkge1xuICAgIGlmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFIHx8IHR5cGVbMF0gPT09IFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIG1lbW8odHlwZSwgY29tcGFyZSkge1xuICB7XG4gICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkpIHtcbiAgICAgIGVycm9yKCdtZW1vOiBUaGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIGNvbXBvbmVudC4gSW5zdGVhZCAnICsgJ3JlY2VpdmVkOiAlcycsIHR5cGUgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgdHlwZSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGVsZW1lbnRUeXBlID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9NRU1PX1RZUEUsXG4gICAgdHlwZTogdHlwZSxcbiAgICBjb21wYXJlOiBjb21wYXJlID09PSB1bmRlZmluZWQgPyBudWxsIDogY29tcGFyZVxuICB9O1xuXG4gIHtcbiAgICB2YXIgb3duTmFtZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudFR5cGUsICdkaXNwbGF5TmFtZScsIHtcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBvd25OYW1lO1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgb3duTmFtZSA9IG5hbWU7XG5cbiAgICAgICAgaWYgKHR5cGUuZGlzcGxheU5hbWUgPT0gbnVsbCkge1xuICAgICAgICAgIHR5cGUuZGlzcGxheU5hbWUgPSBuYW1lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudFR5cGU7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVEaXNwYXRjaGVyKCkge1xuICB2YXIgZGlzcGF0Y2hlciA9IFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudDtcblxuICBpZiAoIShkaXNwYXRjaGVyICE9PSBudWxsKSkge1xuICAgIHtcbiAgICAgIHRocm93IEVycm9yKCBcIkludmFsaWQgaG9vayBjYWxsLiBIb29rcyBjYW4gb25seSBiZSBjYWxsZWQgaW5zaWRlIG9mIHRoZSBib2R5IG9mIGEgZnVuY3Rpb24gY29tcG9uZW50LiBUaGlzIGNvdWxkIGhhcHBlbiBmb3Igb25lIG9mIHRoZSBmb2xsb3dpbmcgcmVhc29uczpcXG4xLiBZb3UgbWlnaHQgaGF2ZSBtaXNtYXRjaGluZyB2ZXJzaW9ucyBvZiBSZWFjdCBhbmQgdGhlIHJlbmRlcmVyIChzdWNoIGFzIFJlYWN0IERPTSlcXG4yLiBZb3UgbWlnaHQgYmUgYnJlYWtpbmcgdGhlIFJ1bGVzIG9mIEhvb2tzXFxuMy4gWW91IG1pZ2h0IGhhdmUgbW9yZSB0aGFuIG9uZSBjb3B5IG9mIFJlYWN0IGluIHRoZSBzYW1lIGFwcFxcblNlZSBodHRwczovL3JlYWN0anMub3JnL2xpbmsvaW52YWxpZC1ob29rLWNhbGwgZm9yIHRpcHMgYWJvdXQgaG93IHRvIGRlYnVnIGFuZCBmaXggdGhpcyBwcm9ibGVtLlwiICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpc3BhdGNoZXI7XG59XG5cbmZ1bmN0aW9uIHVzZUNvbnRleHQoQ29udGV4dCwgdW5zdGFibGVfb2JzZXJ2ZWRCaXRzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcblxuICB7XG4gICAgaWYgKHVuc3RhYmxlX29ic2VydmVkQml0cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvcigndXNlQ29udGV4dCgpIHNlY29uZCBhcmd1bWVudCBpcyByZXNlcnZlZCBmb3IgZnV0dXJlICcgKyAndXNlIGluIFJlYWN0LiBQYXNzaW5nIGl0IGlzIG5vdCBzdXBwb3J0ZWQuICcgKyAnWW91IHBhc3NlZDogJXMuJXMnLCB1bnN0YWJsZV9vYnNlcnZlZEJpdHMsIHR5cGVvZiB1bnN0YWJsZV9vYnNlcnZlZEJpdHMgPT09ICdudW1iZXInICYmIEFycmF5LmlzQXJyYXkoYXJndW1lbnRzWzJdKSA/ICdcXG5cXG5EaWQgeW91IGNhbGwgYXJyYXkubWFwKHVzZUNvbnRleHQpPyAnICsgJ0NhbGxpbmcgSG9va3MgaW5zaWRlIGEgbG9vcCBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ0xlYXJuIG1vcmUgYXQgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3J1bGVzLW9mLWhvb2tzJyA6ICcnKTtcbiAgICB9IC8vIFRPRE86IGFkZCBhIG1vcmUgZ2VuZXJpYyB3YXJuaW5nIGZvciBpbnZhbGlkIHZhbHVlcy5cblxuXG4gICAgaWYgKENvbnRleHQuX2NvbnRleHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIHJlYWxDb250ZXh0ID0gQ29udGV4dC5fY29udGV4dDsgLy8gRG9uJ3QgZGVkdXBsaWNhdGUgYmVjYXVzZSB0aGlzIGxlZ2l0aW1hdGVseSBjYXVzZXMgYnVnc1xuICAgICAgLy8gYW5kIG5vYm9keSBzaG91bGQgYmUgdXNpbmcgdGhpcyBpbiBleGlzdGluZyBjb2RlLlxuXG4gICAgICBpZiAocmVhbENvbnRleHQuQ29uc3VtZXIgPT09IENvbnRleHQpIHtcbiAgICAgICAgZXJyb3IoJ0NhbGxpbmcgdXNlQ29udGV4dChDb250ZXh0LkNvbnN1bWVyKSBpcyBub3Qgc3VwcG9ydGVkLCBtYXkgY2F1c2UgYnVncywgYW5kIHdpbGwgYmUgJyArICdyZW1vdmVkIGluIGEgZnV0dXJlIG1ham9yIHJlbGVhc2UuIERpZCB5b3UgbWVhbiB0byBjYWxsIHVzZUNvbnRleHQoQ29udGV4dCkgaW5zdGVhZD8nKTtcbiAgICAgIH0gZWxzZSBpZiAocmVhbENvbnRleHQuUHJvdmlkZXIgPT09IENvbnRleHQpIHtcbiAgICAgICAgZXJyb3IoJ0NhbGxpbmcgdXNlQ29udGV4dChDb250ZXh0LlByb3ZpZGVyKSBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ0RpZCB5b3UgbWVhbiB0byBjYWxsIHVzZUNvbnRleHQoQ29udGV4dCkgaW5zdGVhZD8nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGlzcGF0Y2hlci51c2VDb250ZXh0KENvbnRleHQsIHVuc3RhYmxlX29ic2VydmVkQml0cyk7XG59XG5mdW5jdGlvbiB1c2VTdGF0ZShpbml0aWFsU3RhdGUpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VTdGF0ZShpbml0aWFsU3RhdGUpO1xufVxuZnVuY3Rpb24gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsQXJnLCBpbml0KSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsQXJnLCBpbml0KTtcbn1cbmZ1bmN0aW9uIHVzZVJlZihpbml0aWFsVmFsdWUpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VSZWYoaW5pdGlhbFZhbHVlKTtcbn1cbmZ1bmN0aW9uIHVzZUVmZmVjdChjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VFZmZlY3QoY3JlYXRlLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZUxheW91dEVmZmVjdChjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VMYXlvdXRFZmZlY3QoY3JlYXRlLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZUNhbGxiYWNrKGNhbGxiYWNrLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlQ2FsbGJhY2soY2FsbGJhY2ssIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlTWVtbyhjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VNZW1vKGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VEZWJ1Z1ZhbHVlKHZhbHVlLCBmb3JtYXR0ZXJGbikge1xuICB7XG4gICAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICAgIHJldHVybiBkaXNwYXRjaGVyLnVzZURlYnVnVmFsdWUodmFsdWUsIGZvcm1hdHRlckZuKTtcbiAgfVxufVxuXG4vLyBIZWxwZXJzIHRvIHBhdGNoIGNvbnNvbGUubG9ncyB0byBhdm9pZCBsb2dnaW5nIGR1cmluZyBzaWRlLWVmZmVjdCBmcmVlXG4vLyByZXBsYXlpbmcgb24gcmVuZGVyIGZ1bmN0aW9uLiBUaGlzIGN1cnJlbnRseSBvbmx5IHBhdGNoZXMgdGhlIG9iamVjdFxuLy8gbGF6aWx5IHdoaWNoIHdvbid0IGNvdmVyIGlmIHRoZSBsb2cgZnVuY3Rpb24gd2FzIGV4dHJhY3RlZCBlYWdlcmx5LlxuLy8gV2UgY291bGQgYWxzbyBlYWdlcmx5IHBhdGNoIHRoZSBtZXRob2QuXG52YXIgZGlzYWJsZWREZXB0aCA9IDA7XG52YXIgcHJldkxvZztcbnZhciBwcmV2SW5mbztcbnZhciBwcmV2V2FybjtcbnZhciBwcmV2RXJyb3I7XG52YXIgcHJldkdyb3VwO1xudmFyIHByZXZHcm91cENvbGxhcHNlZDtcbnZhciBwcmV2R3JvdXBFbmQ7XG5cbmZ1bmN0aW9uIGRpc2FibGVkTG9nKCkge31cblxuZGlzYWJsZWRMb2cuX19yZWFjdERpc2FibGVkTG9nID0gdHJ1ZTtcbmZ1bmN0aW9uIGRpc2FibGVMb2dzKCkge1xuICB7XG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgcHJldkxvZyA9IGNvbnNvbGUubG9nO1xuICAgICAgcHJldkluZm8gPSBjb25zb2xlLmluZm87XG4gICAgICBwcmV2V2FybiA9IGNvbnNvbGUud2FybjtcbiAgICAgIHByZXZFcnJvciA9IGNvbnNvbGUuZXJyb3I7XG4gICAgICBwcmV2R3JvdXAgPSBjb25zb2xlLmdyb3VwO1xuICAgICAgcHJldkdyb3VwQ29sbGFwc2VkID0gY29uc29sZS5ncm91cENvbGxhcHNlZDtcbiAgICAgIHByZXZHcm91cEVuZCA9IGNvbnNvbGUuZ3JvdXBFbmQ7IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTkwOTlcblxuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBkaXNhYmxlZExvZyxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgaW5mbzogcHJvcHMsXG4gICAgICAgIGxvZzogcHJvcHMsXG4gICAgICAgIHdhcm46IHByb3BzLFxuICAgICAgICBlcnJvcjogcHJvcHMsXG4gICAgICAgIGdyb3VwOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IHByb3BzLFxuICAgICAgICBncm91cEVuZDogcHJvcHNcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBkaXNhYmxlZERlcHRoKys7XG4gIH1cbn1cbmZ1bmN0aW9uIHJlZW5hYmxlTG9ncygpIHtcbiAge1xuICAgIGRpc2FibGVkRGVwdGgtLTtcblxuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBsb2c6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZMb2dcbiAgICAgICAgfSksXG4gICAgICAgIGluZm86IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZJbmZvXG4gICAgICAgIH0pLFxuICAgICAgICB3YXJuOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2V2FyblxuICAgICAgICB9KSxcbiAgICAgICAgZXJyb3I6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZFcnJvclxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXA6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cENvbGxhcHNlZFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBFbmQ6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cEVuZFxuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGlmIChkaXNhYmxlZERlcHRoIDwgMCkge1xuICAgICAgZXJyb3IoJ2Rpc2FibGVkRGVwdGggZmVsbCBiZWxvdyB6ZXJvLiAnICsgJ1RoaXMgaXMgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcjtcbnZhciBwcmVmaXg7XG5mdW5jdGlvbiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIGlmIChwcmVmaXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gRXh0cmFjdCB0aGUgVk0gc3BlY2lmaWMgcHJlZml4IHVzZWQgYnkgZWFjaCBsaW5lLlxuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgdmFyIG1hdGNoID0geC5zdGFjay50cmltKCkubWF0Y2goL1xcbiggKihhdCApPykvKTtcbiAgICAgICAgcHJlZml4ID0gbWF0Y2ggJiYgbWF0Y2hbMV0gfHwgJyc7XG4gICAgICB9XG4gICAgfSAvLyBXZSB1c2UgdGhlIHByZWZpeCB0byBlbnN1cmUgb3VyIHN0YWNrcyBsaW5lIHVwIHdpdGggbmF0aXZlIHN0YWNrIGZyYW1lcy5cblxuXG4gICAgcmV0dXJuICdcXG4nICsgcHJlZml4ICsgbmFtZTtcbiAgfVxufVxudmFyIHJlZW50cnkgPSBmYWxzZTtcbnZhciBjb21wb25lbnRGcmFtZUNhY2hlO1xuXG57XG4gIHZhciBQb3NzaWJseVdlYWtNYXAgPSB0eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJyA/IFdlYWtNYXAgOiBNYXA7XG4gIGNvbXBvbmVudEZyYW1lQ2FjaGUgPSBuZXcgUG9zc2libHlXZWFrTWFwKCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGNvbnN0cnVjdCkge1xuICAvLyBJZiBzb21ldGhpbmcgYXNrZWQgZm9yIGEgc3RhY2sgaW5zaWRlIGEgZmFrZSByZW5kZXIsIGl0IHNob3VsZCBnZXQgaWdub3JlZC5cbiAgaWYgKCFmbiB8fCByZWVudHJ5KSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAge1xuICAgIHZhciBmcmFtZSA9IGNvbXBvbmVudEZyYW1lQ2FjaGUuZ2V0KGZuKTtcblxuICAgIGlmIChmcmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZnJhbWU7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbnRyb2w7XG4gIHJlZW50cnkgPSB0cnVlO1xuICB2YXIgcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZSA9IEVycm9yLnByZXBhcmVTdGFja1RyYWNlOyAvLyAkRmxvd0ZpeE1lIEl0IGRvZXMgYWNjZXB0IHVuZGVmaW5lZC5cblxuICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHVuZGVmaW5lZDtcbiAgdmFyIHByZXZpb3VzRGlzcGF0Y2hlcjtcblxuICB7XG4gICAgcHJldmlvdXNEaXNwYXRjaGVyID0gUmVhY3RDdXJyZW50RGlzcGF0Y2hlciQxLmN1cnJlbnQ7IC8vIFNldCB0aGUgZGlzcGF0Y2hlciBpbiBERVYgYmVjYXVzZSB0aGlzIG1pZ2h0IGJlIGNhbGwgaW4gdGhlIHJlbmRlciBmdW5jdGlvblxuICAgIC8vIGZvciB3YXJuaW5ncy5cblxuICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIkMS5jdXJyZW50ID0gbnVsbDtcbiAgICBkaXNhYmxlTG9ncygpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBUaGlzIHNob3VsZCB0aHJvdy5cbiAgICBpZiAoY29uc3RydWN0KSB7XG4gICAgICAvLyBTb21ldGhpbmcgc2hvdWxkIGJlIHNldHRpbmcgdGhlIHByb3BzIGluIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICAgIHZhciBGYWtlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfTsgLy8gJEZsb3dGaXhNZVxuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGYWtlLnByb3RvdHlwZSwgJ3Byb3BzJywge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBXZSB1c2UgYSB0aHJvd2luZyBzZXR0ZXIgaW5zdGVhZCBvZiBmcm96ZW4gb3Igbm9uLXdyaXRhYmxlIHByb3BzXG4gICAgICAgICAgLy8gYmVjYXVzZSB0aGF0IHdvbid0IHRocm93IGluIGEgbm9uLXN0cmljdCBtb2RlIGZ1bmN0aW9uLlxuICAgICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09ICdvYmplY3QnICYmIFJlZmxlY3QuY29uc3RydWN0KSB7XG4gICAgICAgIC8vIFdlIGNvbnN0cnVjdCBhIGRpZmZlcmVudCBjb250cm9sIGZvciB0aGlzIGNhc2UgdG8gaW5jbHVkZSBhbnkgZXh0cmFcbiAgICAgICAgLy8gZnJhbWVzIGFkZGVkIGJ5IHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChGYWtlLCBbXSk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIFJlZmxlY3QuY29uc3RydWN0KGZuLCBbXSwgRmFrZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIEZha2UuY2FsbCgpO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBmbi5jYWxsKEZha2UucHJvdG90eXBlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICB9XG5cbiAgICAgIGZuKCk7XG4gICAgfVxuICB9IGNhdGNoIChzYW1wbGUpIHtcbiAgICAvLyBUaGlzIGlzIGlubGluZWQgbWFudWFsbHkgYmVjYXVzZSBjbG9zdXJlIGRvZXNuJ3QgZG8gaXQgZm9yIHVzLlxuICAgIGlmIChzYW1wbGUgJiYgY29udHJvbCAmJiB0eXBlb2Ygc2FtcGxlLnN0YWNrID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gVGhpcyBleHRyYWN0cyB0aGUgZmlyc3QgZnJhbWUgZnJvbSB0aGUgc2FtcGxlIHRoYXQgaXNuJ3QgYWxzbyBpbiB0aGUgY29udHJvbC5cbiAgICAgIC8vIFNraXBwaW5nIG9uZSBmcmFtZSB0aGF0IHdlIGFzc3VtZSBpcyB0aGUgZnJhbWUgdGhhdCBjYWxscyB0aGUgdHdvLlxuICAgICAgdmFyIHNhbXBsZUxpbmVzID0gc2FtcGxlLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBjb250cm9sTGluZXMgPSBjb250cm9sLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBzID0gc2FtcGxlTGluZXMubGVuZ3RoIC0gMTtcbiAgICAgIHZhciBjID0gY29udHJvbExpbmVzLmxlbmd0aCAtIDE7XG5cbiAgICAgIHdoaWxlIChzID49IDEgJiYgYyA+PSAwICYmIHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgLy8gV2UgZXhwZWN0IGF0IGxlYXN0IG9uZSBzdGFjayBmcmFtZSB0byBiZSBzaGFyZWQuXG4gICAgICAgIC8vIFR5cGljYWxseSB0aGlzIHdpbGwgYmUgdGhlIHJvb3QgbW9zdCBvbmUuIEhvd2V2ZXIsIHN0YWNrIGZyYW1lcyBtYXkgYmVcbiAgICAgICAgLy8gY3V0IG9mZiBkdWUgdG8gbWF4aW11bSBzdGFjayBsaW1pdHMuIEluIHRoaXMgY2FzZSwgb25lIG1heWJlIGN1dCBvZmZcbiAgICAgICAgLy8gZWFybGllciB0aGFuIHRoZSBvdGhlci4gV2UgYXNzdW1lIHRoYXQgdGhlIHNhbXBsZSBpcyBsb25nZXIgb3IgdGhlIHNhbWVcbiAgICAgICAgLy8gYW5kIHRoZXJlIGZvciBjdXQgb2ZmIGVhcmxpZXIuIFNvIHdlIHNob3VsZCBmaW5kIHRoZSByb290IG1vc3QgZnJhbWUgaW5cbiAgICAgICAgLy8gdGhlIHNhbXBsZSBzb21ld2hlcmUgaW4gdGhlIGNvbnRyb2wuXG4gICAgICAgIGMtLTtcbiAgICAgIH1cblxuICAgICAgZm9yICg7IHMgPj0gMSAmJiBjID49IDA7IHMtLSwgYy0tKSB7XG4gICAgICAgIC8vIE5leHQgd2UgZmluZCB0aGUgZmlyc3Qgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgd2hpY2ggc2hvdWxkIGJlIHRoZVxuICAgICAgICAvLyBmcmFtZSB0aGF0IGNhbGxlZCBvdXIgc2FtcGxlIGZ1bmN0aW9uIGFuZCB0aGUgY29udHJvbC5cbiAgICAgICAgaWYgKHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAvLyBJbiBWOCwgdGhlIGZpcnN0IGxpbmUgaXMgZGVzY3JpYmluZyB0aGUgbWVzc2FnZSBidXQgb3RoZXIgVk1zIGRvbid0LlxuICAgICAgICAgIC8vIElmIHdlJ3JlIGFib3V0IHRvIHJldHVybiB0aGUgZmlyc3QgbGluZSwgYW5kIHRoZSBjb250cm9sIGlzIGFsc28gb24gdGhlIHNhbWVcbiAgICAgICAgICAvLyBsaW5lLCB0aGF0J3MgYSBwcmV0dHkgZ29vZCBpbmRpY2F0b3IgdGhhdCBvdXIgc2FtcGxlIHRocmV3IGF0IHNhbWUgbGluZSBhc1xuICAgICAgICAgIC8vIHRoZSBjb250cm9sLiBJLmUuIGJlZm9yZSB3ZSBlbnRlcmVkIHRoZSBzYW1wbGUgZnJhbWUuIFNvIHdlIGlnbm9yZSB0aGlzIHJlc3VsdC5cbiAgICAgICAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaWYgeW91IHBhc3NlZCBhIGNsYXNzIHRvIGZ1bmN0aW9uIGNvbXBvbmVudCwgb3Igbm9uLWZ1bmN0aW9uLlxuICAgICAgICAgIGlmIChzICE9PSAxIHx8IGMgIT09IDEpIHtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgcy0tO1xuICAgICAgICAgICAgICBjLS07IC8vIFdlIG1heSBzdGlsbCBoYXZlIHNpbWlsYXIgaW50ZXJtZWRpYXRlIGZyYW1lcyBmcm9tIHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgICAgICAgLy8gVGhlIG5leHQgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgc2hvdWxkIGJlIG91ciBtYXRjaCB0aG91Z2guXG5cbiAgICAgICAgICAgICAgaWYgKGMgPCAwIHx8IHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAgICAgICAvLyBWOCBhZGRzIGEgXCJuZXdcIiBwcmVmaXggZm9yIG5hdGl2ZSBjbGFzc2VzLiBMZXQncyByZW1vdmUgaXQgdG8gbWFrZSBpdCBwcmV0dGllci5cbiAgICAgICAgICAgICAgICB2YXIgX2ZyYW1lID0gJ1xcbicgKyBzYW1wbGVMaW5lc1tzXS5yZXBsYWNlKCcgYXQgbmV3ICcsICcgYXQgJyk7XG5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBfZnJhbWUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gLy8gUmV0dXJuIHRoZSBsaW5lIHdlIGZvdW5kLlxuXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gX2ZyYW1lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IHdoaWxlIChzID49IDEgJiYgYyA+PSAwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICByZWVudHJ5ID0gZmFsc2U7XG5cbiAgICB7XG4gICAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyJDEuY3VycmVudCA9IHByZXZpb3VzRGlzcGF0Y2hlcjtcbiAgICAgIHJlZW5hYmxlTG9ncygpO1xuICAgIH1cblxuICAgIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZTtcbiAgfSAvLyBGYWxsYmFjayB0byBqdXN0IHVzaW5nIHRoZSBuYW1lIGlmIHdlIGNvdWxkbid0IG1ha2UgaXQgdGhyb3cuXG5cblxuICB2YXIgbmFtZSA9IGZuID8gZm4uZGlzcGxheU5hbWUgfHwgZm4ubmFtZSA6ICcnO1xuICB2YXIgc3ludGhldGljRnJhbWUgPSBuYW1lID8gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSkgOiAnJztcblxuICB7XG4gICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIHN5bnRoZXRpY0ZyYW1lKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3ludGhldGljRnJhbWU7XG59XG5mdW5jdGlvbiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUoZm4sIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGZhbHNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG91bGRDb25zdHJ1Y3QoQ29tcG9uZW50KSB7XG4gIHZhciBwcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuICByZXR1cm4gISEocHJvdG90eXBlICYmIHByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUsIHNvdXJjZSwgb3duZXJGbikge1xuXG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICB7XG4gICAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZSh0eXBlLCBzaG91bGRDb25zdHJ1Y3QodHlwZSkpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUodHlwZSk7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIGV4cG9ydHMuU3VzcGVuc2U6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlJyk7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2VMaXN0Jyk7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUodHlwZS5yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgLy8gTWVtbyBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLnR5cGUsIHNvdXJjZSwgb3duZXJGbik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfQkxPQ0tfVFlQRTpcbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZSh0eXBlLl9yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIExhenkgbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGluaXQocGF5bG9hZCksIHNvdXJjZSwgb3duZXJGbik7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge31cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxudmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBlbGVtZW50KSB7XG4gIHtcbiAgICAvLyAkRmxvd0ZpeE1lIFRoaXMgaXMgb2theSBidXQgRmxvdyBkb2Vzbid0IGtub3cgaXQuXG4gICAgdmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmIChoYXModHlwZVNwZWNzLCB0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvciQxID0gdm9pZCAwOyAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cblxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiAnICsgbG9jYXRpb24gKyAnIHR5cGUgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyAnICsgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAnICsgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICsgJ2AuJyArICdUaGlzIG9mdGVuIGhhcHBlbnMgYmVjYXVzZSBvZiB0eXBvcyBzdWNoIGFzIGBQcm9wVHlwZXMuZnVuY3Rpb25gIGluc3RlYWQgb2YgYFByb3BUeXBlcy5mdW5jYC4nKTtcbiAgICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGVycm9yJDEgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCcpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yJDEgPSBleDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxICYmICEoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJyVzOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJXMnICsgJyBgJXNgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAlcy4gJyArICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICsgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgZXJyb3IkMSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvciQxLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yJDEubWVzc2FnZV0gPSB0cnVlO1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJ0ZhaWxlZCAlcyB0eXBlOiAlcycsIGxvY2F0aW9uLCBlcnJvciQxLm1lc3NhZ2UpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd247XG5cbntcbiAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCkge1xuICBpZiAoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCkge1xuICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpO1xuXG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgdGhlIHJlbmRlciBtZXRob2Qgb2YgYCcgKyBuYW1lICsgJ2AuJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHNvdXJjZSkge1xuICBpZiAoc291cmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgZmlsZU5hbWUgPSBzb3VyY2UuZmlsZU5hbWUucmVwbGFjZSgvXi4qW1xcXFxcXC9dLywgJycpO1xuICAgIHZhciBsaW5lTnVtYmVyID0gc291cmNlLmxpbmVOdW1iZXI7XG4gICAgcmV0dXJuICdcXG5cXG5DaGVjayB5b3VyIGNvZGUgYXQgJyArIGZpbGVOYW1lICsgJzonICsgbGluZU51bWJlciArICcuJztcbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxuZnVuY3Rpb24gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW1Gb3JQcm9wcyhlbGVtZW50UHJvcHMpIHtcbiAgaWYgKGVsZW1lbnRQcm9wcyAhPT0gbnVsbCAmJiBlbGVtZW50UHJvcHMgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShlbGVtZW50UHJvcHMuX19zb3VyY2UpO1xuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuLyoqXG4gKiBXYXJuIGlmIHRoZXJlJ3Mgbm8ga2V5IGV4cGxpY2l0bHkgc2V0IG9uIGR5bmFtaWMgYXJyYXlzIG9mIGNoaWxkcmVuIG9yXG4gKiBvYmplY3Qga2V5cyBhcmUgbm90IHZhbGlkLiBUaGlzIGFsbG93cyB1cyB0byBrZWVwIHRyYWNrIG9mIGNoaWxkcmVuIGJldHdlZW5cbiAqIHVwZGF0ZXMuXG4gKi9cblxuXG52YXIgb3duZXJIYXNLZXlVc2VXYXJuaW5nID0ge307XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSkge1xuICB2YXIgaW5mbyA9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuXG4gIGlmICghaW5mbykge1xuICAgIHZhciBwYXJlbnROYW1lID0gdHlwZW9mIHBhcmVudFR5cGUgPT09ICdzdHJpbmcnID8gcGFyZW50VHlwZSA6IHBhcmVudFR5cGUuZGlzcGxheU5hbWUgfHwgcGFyZW50VHlwZS5uYW1lO1xuXG4gICAgaWYgKHBhcmVudE5hbWUpIHtcbiAgICAgIGluZm8gPSBcIlxcblxcbkNoZWNrIHRoZSB0b3AtbGV2ZWwgcmVuZGVyIGNhbGwgdXNpbmcgPFwiICsgcGFyZW50TmFtZSArIFwiPi5cIjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaW5mbztcbn1cbi8qKlxuICogV2FybiBpZiB0aGUgZWxlbWVudCBkb2Vzbid0IGhhdmUgYW4gZXhwbGljaXQga2V5IGFzc2lnbmVkIHRvIGl0LlxuICogVGhpcyBlbGVtZW50IGlzIGluIGFuIGFycmF5LiBUaGUgYXJyYXkgY291bGQgZ3JvdyBhbmQgc2hyaW5rIG9yIGJlXG4gKiByZW9yZGVyZWQuIEFsbCBjaGlsZHJlbiB0aGF0IGhhdmVuJ3QgYWxyZWFkeSBiZWVuIHZhbGlkYXRlZCBhcmUgcmVxdWlyZWQgdG9cbiAqIGhhdmUgYSBcImtleVwiIHByb3BlcnR5IGFzc2lnbmVkIHRvIGl0LiBFcnJvciBzdGF0dXNlcyBhcmUgY2FjaGVkIHNvIGEgd2FybmluZ1xuICogd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudCBFbGVtZW50IHRoYXQgcmVxdWlyZXMgYSBrZXkuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgZWxlbWVudCdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUV4cGxpY2l0S2V5KGVsZW1lbnQsIHBhcmVudFR5cGUpIHtcbiAgaWYgKCFlbGVtZW50Ll9zdG9yZSB8fCBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgfHwgZWxlbWVudC5rZXkgIT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gIHZhciBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvID0gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKTtcblxuICBpZiAob3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgb3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dID0gdHJ1ZTsgLy8gVXN1YWxseSB0aGUgY3VycmVudCBvd25lciBpcyB0aGUgb2ZmZW5kZXIsIGJ1dCBpZiBpdCBhY2NlcHRzIGNoaWxkcmVuIGFzIGFcbiAgLy8gcHJvcGVydHksIGl0IG1heSBiZSB0aGUgY3JlYXRvciBvZiB0aGUgY2hpbGQgdGhhdCdzIHJlc3BvbnNpYmxlIGZvclxuICAvLyBhc3NpZ25pbmcgaXQgYSBrZXkuXG5cbiAgdmFyIGNoaWxkT3duZXIgPSAnJztcblxuICBpZiAoZWxlbWVudCAmJiBlbGVtZW50Ll9vd25lciAmJiBlbGVtZW50Ll9vd25lciAhPT0gUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCkge1xuICAgIC8vIEdpdmUgdGhlIGNvbXBvbmVudCB0aGF0IG9yaWdpbmFsbHkgY3JlYXRlZCB0aGlzIGNoaWxkLlxuICAgIGNoaWxkT3duZXIgPSBcIiBJdCB3YXMgcGFzc2VkIGEgY2hpbGQgZnJvbSBcIiArIGdldENvbXBvbmVudE5hbWUoZWxlbWVudC5fb3duZXIudHlwZSkgKyBcIi5cIjtcbiAgfVxuXG4gIHtcbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpO1xuXG4gICAgZXJyb3IoJ0VhY2ggY2hpbGQgaW4gYSBsaXN0IHNob3VsZCBoYXZlIGEgdW5pcXVlIFwia2V5XCIgcHJvcC4nICsgJyVzJXMgU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay93YXJuaW5nLWtleXMgZm9yIG1vcmUgaW5mb3JtYXRpb24uJywgY3VycmVudENvbXBvbmVudEVycm9ySW5mbywgY2hpbGRPd25lcik7XG5cbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICB9XG59XG4vKipcbiAqIEVuc3VyZSB0aGF0IGV2ZXJ5IGVsZW1lbnQgZWl0aGVyIGlzIHBhc3NlZCBpbiBhIHN0YXRpYyBsb2NhdGlvbiwgaW4gYW5cbiAqIGFycmF5IHdpdGggYW4gZXhwbGljaXQga2V5cyBwcm9wZXJ0eSBkZWZpbmVkLCBvciBpbiBhbiBvYmplY3QgbGl0ZXJhbFxuICogd2l0aCB2YWxpZCBrZXkgcHJvcGVydHkuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0Tm9kZX0gbm9kZSBTdGF0aWNhbGx5IHBhc3NlZCBjaGlsZCBvZiBhbnkgdHlwZS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBub2RlJ3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ2hpbGRLZXlzKG5vZGUsIHBhcmVudFR5cGUpIHtcbiAgaWYgKHR5cGVvZiBub2RlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KG5vZGUpKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY2hpbGQgPSBub2RlW2ldO1xuXG4gICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoY2hpbGQsIHBhcmVudFR5cGUpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChpc1ZhbGlkRWxlbWVudChub2RlKSkge1xuICAgIC8vIFRoaXMgZWxlbWVudCB3YXMgcGFzc2VkIGluIGEgdmFsaWQgbG9jYXRpb24uXG4gICAgaWYgKG5vZGUuX3N0b3JlKSB7XG4gICAgICBub2RlLl9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgIH1cbiAgfSBlbHNlIGlmIChub2RlKSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG5vZGUpO1xuXG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBFbnRyeSBpdGVyYXRvcnMgdXNlZCB0byBwcm92aWRlIGltcGxpY2l0IGtleXMsXG4gICAgICAvLyBidXQgbm93IHdlIHByaW50IGEgc2VwYXJhdGUgd2FybmluZyBmb3IgdGhlbSBsYXRlci5cbiAgICAgIGlmIChpdGVyYXRvckZuICE9PSBub2RlLmVudHJpZXMpIHtcbiAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG5vZGUpO1xuICAgICAgICB2YXIgc3RlcDtcblxuICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KHN0ZXAudmFsdWUsIHBhcmVudFR5cGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhbiBlbGVtZW50LCB2YWxpZGF0ZSB0aGF0IGl0cyBwcm9wcyBmb2xsb3cgdGhlIHByb3BUeXBlcyBkZWZpbml0aW9uLFxuICogcHJvdmlkZWQgYnkgdGhlIHR5cGUuXG4gKlxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpIHtcbiAge1xuICAgIHZhciB0eXBlID0gZWxlbWVudC50eXBlO1xuXG4gICAgaWYgKHR5cGUgPT09IG51bGwgfHwgdHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwcm9wVHlwZXM7XG5cbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IC8vIE5vdGU6IE1lbW8gb25seSBjaGVja3Mgb3V0ZXIgcHJvcHMgaGVyZS5cbiAgICAvLyBJbm5lciBwcm9wcyBhcmUgY2hlY2tlZCBpbiB0aGUgcmVjb25jaWxlci5cbiAgICB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUpKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwcm9wVHlwZXMpIHtcbiAgICAgIC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUodHlwZSk7XG4gICAgICBjaGVja1Byb3BUeXBlcyhwcm9wVHlwZXMsIGVsZW1lbnQucHJvcHMsICdwcm9wJywgbmFtZSwgZWxlbWVudCk7XG4gICAgfSBlbHNlIGlmICh0eXBlLlByb3BUeXBlcyAhPT0gdW5kZWZpbmVkICYmICFwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bikge1xuICAgICAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSB0cnVlOyAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuXG4gICAgICB2YXIgX25hbWUgPSBnZXRDb21wb25lbnROYW1lKHR5cGUpO1xuXG4gICAgICBlcnJvcignQ29tcG9uZW50ICVzIGRlY2xhcmVkIGBQcm9wVHlwZXNgIGluc3RlYWQgb2YgYHByb3BUeXBlc2AuIERpZCB5b3UgbWlzc3BlbGwgdGhlIHByb3BlcnR5IGFzc2lnbm1lbnQ/JywgX25hbWUgfHwgJ1Vua25vd24nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHR5cGUuZ2V0RGVmYXVsdFByb3BzID09PSAnZnVuY3Rpb24nICYmICF0eXBlLmdldERlZmF1bHRQcm9wcy5pc1JlYWN0Q2xhc3NBcHByb3ZlZCkge1xuICAgICAgZXJyb3IoJ2dldERlZmF1bHRQcm9wcyBpcyBvbmx5IHVzZWQgb24gY2xhc3NpYyBSZWFjdC5jcmVhdGVDbGFzcyAnICsgJ2RlZmluaXRpb25zLiBVc2UgYSBzdGF0aWMgcHJvcGVydHkgbmFtZWQgYGRlZmF1bHRQcm9wc2AgaW5zdGVhZC4nKTtcbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYSBmcmFnbWVudCwgdmFsaWRhdGUgdGhhdCBpdCBjYW4gb25seSBiZSBwcm92aWRlZCB3aXRoIGZyYWdtZW50IHByb3BzXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZnJhZ21lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhmcmFnbWVudCkge1xuICB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhmcmFnbWVudC5wcm9wcyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoa2V5ICE9PSAnY2hpbGRyZW4nICYmIGtleSAhPT0gJ2tleScpIHtcbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgICAgZXJyb3IoJ0ludmFsaWQgcHJvcCBgJXNgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuICcgKyAnUmVhY3QuRnJhZ21lbnQgY2FuIG9ubHkgaGF2ZSBga2V5YCBhbmQgYGNoaWxkcmVuYCBwcm9wcy4nLCBrZXkpO1xuXG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmFnbWVudC5yZWYgIT09IG51bGwpIHtcbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICBlcnJvcignSW52YWxpZCBhdHRyaWJ1dGUgYHJlZmAgc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4nKTtcblxuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRXaXRoVmFsaWRhdGlvbih0eXBlLCBwcm9wcywgY2hpbGRyZW4pIHtcbiAgdmFyIHZhbGlkVHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKTsgLy8gV2Ugd2FybiBpbiB0aGlzIGNhc2UgYnV0IGRvbid0IHRocm93LiBXZSBleHBlY3QgdGhlIGVsZW1lbnQgY3JlYXRpb24gdG9cbiAgLy8gc3VjY2VlZCBhbmQgdGhlcmUgd2lsbCBsaWtlbHkgYmUgZXJyb3JzIGluIHJlbmRlci5cblxuICBpZiAoIXZhbGlkVHlwZSkge1xuICAgIHZhciBpbmZvID0gJyc7XG5cbiAgICBpZiAodHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmIE9iamVjdC5rZXlzKHR5cGUpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgaW5mbyArPSAnIFlvdSBsaWtlbHkgZm9yZ290IHRvIGV4cG9ydCB5b3VyIGNvbXBvbmVudCBmcm9tIHRoZSBmaWxlICcgKyBcIml0J3MgZGVmaW5lZCBpbiwgb3IgeW91IG1pZ2h0IGhhdmUgbWl4ZWQgdXAgZGVmYXVsdCBhbmQgbmFtZWQgaW1wb3J0cy5cIjtcbiAgICB9XG5cbiAgICB2YXIgc291cmNlSW5mbyA9IGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtRm9yUHJvcHMocHJvcHMpO1xuXG4gICAgaWYgKHNvdXJjZUluZm8pIHtcbiAgICAgIGluZm8gKz0gc291cmNlSW5mbztcbiAgICB9IGVsc2Uge1xuICAgICAgaW5mbyArPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcbiAgICB9XG5cbiAgICB2YXIgdHlwZVN0cmluZztcblxuICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICB0eXBlU3RyaW5nID0gJ251bGwnO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0eXBlKSkge1xuICAgICAgdHlwZVN0cmluZyA9ICdhcnJheSc7XG4gICAgfSBlbHNlIGlmICh0eXBlICE9PSB1bmRlZmluZWQgJiYgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFKSB7XG4gICAgICB0eXBlU3RyaW5nID0gXCI8XCIgKyAoZ2V0Q29tcG9uZW50TmFtZSh0eXBlLnR5cGUpIHx8ICdVbmtub3duJykgKyBcIiAvPlwiO1xuICAgICAgaW5mbyA9ICcgRGlkIHlvdSBhY2NpZGVudGFsbHkgZXhwb3J0IGEgSlNYIGxpdGVyYWwgaW5zdGVhZCBvZiBhIGNvbXBvbmVudD8nO1xuICAgIH0gZWxzZSB7XG4gICAgICB0eXBlU3RyaW5nID0gdHlwZW9mIHR5cGU7XG4gICAgfVxuXG4gICAge1xuICAgICAgZXJyb3IoJ1JlYWN0LmNyZWF0ZUVsZW1lbnQ6IHR5cGUgaXMgaW52YWxpZCAtLSBleHBlY3RlZCBhIHN0cmluZyAoZm9yICcgKyAnYnVpbHQtaW4gY29tcG9uZW50cykgb3IgYSBjbGFzcy9mdW5jdGlvbiAoZm9yIGNvbXBvc2l0ZSAnICsgJ2NvbXBvbmVudHMpIGJ1dCBnb3Q6ICVzLiVzJywgdHlwZVN0cmluZywgaW5mbyk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGVsZW1lbnQgPSBjcmVhdGVFbGVtZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IC8vIFRoZSByZXN1bHQgY2FuIGJlIG51bGxpc2ggaWYgYSBtb2NrIG9yIGEgY3VzdG9tIGZ1bmN0aW9uIGlzIHVzZWQuXG4gIC8vIFRPRE86IERyb3AgdGhpcyB3aGVuIHRoZXNlIGFyZSBubyBsb25nZXIgYWxsb3dlZCBhcyB0aGUgdHlwZSBhcmd1bWVudC5cblxuICBpZiAoZWxlbWVudCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH0gLy8gU2tpcCBrZXkgd2FybmluZyBpZiB0aGUgdHlwZSBpc24ndCB2YWxpZCBzaW5jZSBvdXIga2V5IHZhbGlkYXRpb24gbG9naWNcbiAgLy8gZG9lc24ndCBleHBlY3QgYSBub24tc3RyaW5nL2Z1bmN0aW9uIHR5cGUgYW5kIGNhbiB0aHJvdyBjb25mdXNpbmcgZXJyb3JzLlxuICAvLyBXZSBkb24ndCB3YW50IGV4Y2VwdGlvbiBiZWhhdmlvciB0byBkaWZmZXIgYmV0d2VlbiBkZXYgYW5kIHByb2QuXG4gIC8vIChSZW5kZXJpbmcgd2lsbCB0aHJvdyB3aXRoIGEgaGVscGZ1bCBtZXNzYWdlIGFuZCBhcyBzb29uIGFzIHRoZSB0eXBlIGlzXG4gIC8vIGZpeGVkLCB0aGUga2V5IHdhcm5pbmdzIHdpbGwgYXBwZWFyLilcblxuXG4gIGlmICh2YWxpZFR5cGUpIHtcbiAgICBmb3IgKHZhciBpID0gMjsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFsaWRhdGVDaGlsZEtleXMoYXJndW1lbnRzW2ldLCB0eXBlKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZSA9PT0gZXhwb3J0cy5GcmFnbWVudCkge1xuICAgIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhlbGVtZW50KTtcbiAgfSBlbHNlIHtcbiAgICB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxudmFyIGRpZFdhcm5BYm91dERlcHJlY2F0ZWRDcmVhdGVGYWN0b3J5ID0gZmFsc2U7XG5mdW5jdGlvbiBjcmVhdGVGYWN0b3J5V2l0aFZhbGlkYXRpb24odHlwZSkge1xuICB2YXIgdmFsaWRhdGVkRmFjdG9yeSA9IGNyZWF0ZUVsZW1lbnRXaXRoVmFsaWRhdGlvbi5iaW5kKG51bGwsIHR5cGUpO1xuICB2YWxpZGF0ZWRGYWN0b3J5LnR5cGUgPSB0eXBlO1xuXG4gIHtcbiAgICBpZiAoIWRpZFdhcm5BYm91dERlcHJlY2F0ZWRDcmVhdGVGYWN0b3J5KSB7XG4gICAgICBkaWRXYXJuQWJvdXREZXByZWNhdGVkQ3JlYXRlRmFjdG9yeSA9IHRydWU7XG5cbiAgICAgIHdhcm4oJ1JlYWN0LmNyZWF0ZUZhY3RvcnkoKSBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gJyArICdhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBDb25zaWRlciB1c2luZyBKU1ggJyArICdvciB1c2UgUmVhY3QuY3JlYXRlRWxlbWVudCgpIGRpcmVjdGx5IGluc3RlYWQuJyk7XG4gICAgfSAvLyBMZWdhY3kgaG9vazogcmVtb3ZlIGl0XG5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh2YWxpZGF0ZWRGYWN0b3J5LCAndHlwZScsIHtcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdhcm4oJ0ZhY3RvcnkudHlwZSBpcyBkZXByZWNhdGVkLiBBY2Nlc3MgdGhlIGNsYXNzIGRpcmVjdGx5ICcgKyAnYmVmb3JlIHBhc3NpbmcgaXQgdG8gY3JlYXRlRmFjdG9yeS4nKTtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3R5cGUnLCB7XG4gICAgICAgICAgdmFsdWU6IHR5cGVcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHZhbGlkYXRlZEZhY3Rvcnk7XG59XG5mdW5jdGlvbiBjbG9uZUVsZW1lbnRXaXRoVmFsaWRhdGlvbihlbGVtZW50LCBwcm9wcywgY2hpbGRyZW4pIHtcbiAgdmFyIG5ld0VsZW1lbnQgPSBjbG9uZUVsZW1lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICBmb3IgKHZhciBpID0gMjsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGFyZ3VtZW50c1tpXSwgbmV3RWxlbWVudC50eXBlKTtcbiAgfVxuXG4gIHZhbGlkYXRlUHJvcFR5cGVzKG5ld0VsZW1lbnQpO1xuICByZXR1cm4gbmV3RWxlbWVudDtcbn1cblxue1xuXG4gIHRyeSB7XG4gICAgdmFyIGZyb3plbk9iamVjdCA9IE9iamVjdC5mcmVlemUoe30pO1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLW5ldyAqL1xuXG4gICAgbmV3IE1hcChbW2Zyb3plbk9iamVjdCwgbnVsbF1dKTtcbiAgICBuZXcgU2V0KFtmcm96ZW5PYmplY3RdKTtcbiAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLW5ldyAqL1xuICB9IGNhdGNoIChlKSB7XG4gIH1cbn1cblxudmFyIGNyZWF0ZUVsZW1lbnQkMSA9ICBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24gO1xudmFyIGNsb25lRWxlbWVudCQxID0gIGNsb25lRWxlbWVudFdpdGhWYWxpZGF0aW9uIDtcbnZhciBjcmVhdGVGYWN0b3J5ID0gIGNyZWF0ZUZhY3RvcnlXaXRoVmFsaWRhdGlvbiA7XG52YXIgQ2hpbGRyZW4gPSB7XG4gIG1hcDogbWFwQ2hpbGRyZW4sXG4gIGZvckVhY2g6IGZvckVhY2hDaGlsZHJlbixcbiAgY291bnQ6IGNvdW50Q2hpbGRyZW4sXG4gIHRvQXJyYXk6IHRvQXJyYXksXG4gIG9ubHk6IG9ubHlDaGlsZFxufTtcblxuZXhwb3J0cy5DaGlsZHJlbiA9IENoaWxkcmVuO1xuZXhwb3J0cy5Db21wb25lbnQgPSBDb21wb25lbnQ7XG5leHBvcnRzLlB1cmVDb21wb25lbnQgPSBQdXJlQ29tcG9uZW50O1xuZXhwb3J0cy5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzO1xuZXhwb3J0cy5jbG9uZUVsZW1lbnQgPSBjbG9uZUVsZW1lbnQkMTtcbmV4cG9ydHMuY3JlYXRlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ7XG5leHBvcnRzLmNyZWF0ZUVsZW1lbnQgPSBjcmVhdGVFbGVtZW50JDE7XG5leHBvcnRzLmNyZWF0ZUZhY3RvcnkgPSBjcmVhdGVGYWN0b3J5O1xuZXhwb3J0cy5jcmVhdGVSZWYgPSBjcmVhdGVSZWY7XG5leHBvcnRzLmZvcndhcmRSZWYgPSBmb3J3YXJkUmVmO1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudCA9IGlzVmFsaWRFbGVtZW50O1xuZXhwb3J0cy5sYXp5ID0gbGF6eTtcbmV4cG9ydHMubWVtbyA9IG1lbW87XG5leHBvcnRzLnVzZUNhbGxiYWNrID0gdXNlQ2FsbGJhY2s7XG5leHBvcnRzLnVzZUNvbnRleHQgPSB1c2VDb250ZXh0O1xuZXhwb3J0cy51c2VEZWJ1Z1ZhbHVlID0gdXNlRGVidWdWYWx1ZTtcbmV4cG9ydHMudXNlRWZmZWN0ID0gdXNlRWZmZWN0O1xuZXhwb3J0cy51c2VJbXBlcmF0aXZlSGFuZGxlID0gdXNlSW1wZXJhdGl2ZUhhbmRsZTtcbmV4cG9ydHMudXNlTGF5b3V0RWZmZWN0ID0gdXNlTGF5b3V0RWZmZWN0O1xuZXhwb3J0cy51c2VNZW1vID0gdXNlTWVtbztcbmV4cG9ydHMudXNlUmVkdWNlciA9IHVzZVJlZHVjZXI7XG5leHBvcnRzLnVzZVJlZiA9IHVzZVJlZjtcbmV4cG9ydHMudXNlU3RhdGUgPSB1c2VTdGF0ZTtcbmV4cG9ydHMudmVyc2lvbiA9IFJlYWN0VmVyc2lvbjtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWpzeC1kZXYtcnVudGltZS5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1qc3gtZGV2LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2hha2VyIGZyb20gJy4uL2NvbXBvbmVudHMvU2hha2VyLmpzJztcbi8vIGltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG4vLyBjb25zdCBIb21lQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbi8vICAgd2lkdGg6IDEwMHZ3O1xuLy8gICBoZWlnaHQ6IDEwMHZoO1xuLy8gYDtcblxuLy8gY29uc3QgVGl0bGUgPSBzdHlsZWQuaDFgXG4vLyAgIGZvbnQtc2l6ZTogJzNyZW0nIDogJzFyZW0nO1xuXG4vLyBgO1xuXG4vLyBjb25zdCBOYXZiYXIgPSBzdHlsZWQuZGl2YFxuLy8gICBkaXNwbGF5OiAnZmxleCc7XG4vLyAgIGFsaW5nLWl0ZW1zOiAnYmFzZWxpbmUnO1xuLy8gICB3aWR0aDogMTAwJTtcbi8vIGA7XG5cbi8vIGNvbnN0IE5hdkl0ZW0gPSBzdHlsZWQuYWBcbi8vICAgZm9udC1zaXplOiAnMS4xcmVtJztcbi8vIGA7XG5cbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4vLyAgIHJldHVybiAoXG4vLyAgICAgPEhvbWVDb250YWluZXI+XG4vLyAgICAgICA8TmF2YmFyPlxuLy8gICAgICAgICA8VGl0bGU+TXlteSBDb2NrdGFpbHM8L1RpdGxlPlxuLy8gICAgICAgICB7Y29uZmlncy5uYXZzLm1hcCgoZSwgaW5kZXgpID0+IChcbi8vICAgICAgICAgICA8TmF2SXRlbSBrZXk9e2luZGV4fSBocmVmPXtlLmhyZWZ9PlxuLy8gICAgICAgICAgICAge2UubmFtZX1cbi8vICAgICAgICAgICA8L05hdkl0ZW0+XG4vLyAgICAgICAgICkpfVxuLy8gICAgICAgPC9OYXZiYXI+XG4vLyAgICAgPC9Ib21lQ29udGFpbmVyPlxuLy8gICApO1xuLy8gfVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8U2hha2VyIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL3NoYWtlci5tb2R1bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vc2hha2VyLm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vc2hha2VyLm1vZHVsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb2NrdGFpbE5vdEZvdW5kKHsgY2xhc3NOYW1lIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgaGVpZ2h0PVwiMTAwJVwiXG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgIHZpZXdCb3g9XCIwIDAgMzg2IDI4NlwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTI3My43MDUgMjgwLjgyOUMyNzUuOTU4IDI4MC44MjkgMjc4LjIyMiAyODAuNzY4IDI4MC40ODUgMjgwLjcyOEMyOTAuNTAzIDI4MC41MjUgMzAyLjQyOSAyODIuNjk3IDMxMC45MzUgMjc2LjMxMkMzMTMuOTggMjczLjk5OCAzMTYuOTU0IDI3MS4zMDggMzIwLjY0OSAyNzAuMjIyQzMyMy45MDcgMjY5LjIwNyAzMjcuNDI5IDI2OS42NjQgMzMwLjc5OSAyNjguOTY0QzM0NS42OTkgMjY1Ljg0OCAzNDQuNzk1IDI1MS4xIDMzNi44ODkgMjQxLjcyMUMzMjkuMjE1IDIzMi41ODYgMzE3LjI5OSAyMjkuMzc5IDMwOC4yMzUgMjIyLjA3MUMzMDIuNzI0IDIxNy42MTUgMjk0Ljk3OSAyMTguNTE4IDI4OC42NTYgMjE4LjUxOEMyNzEuMzY4IDIxOC41MjkgMjU0LjU3OCAyMjQuMzEyIDI0MC45NTEgMjM0Ljk1MUMyMzYuMDg5IDIzOC42NzYgMjMxLjYzMyAyNDEuMjk1IDIyNy45OTkgMjQ3LjA0QzIyMy44NzcgMjUzLjYyOCAyMjAuODg1IDI2MC44NiAyMTkuMTQ5IDI2OC40MzZDMjE4LjU5NSAyNzAuMjgyIDIxOC40ODcgMjcyLjIzNCAyMTguODM0IDI3NC4xM0MyMjAuMDMyIDI3OC42OTggMjI1LjI2OSAyODAuMjIgMjI4LjQ1NiAyODAuMzIyQzI0My40NzggMjgwLjczOCAyNTguNjAyIDI4MS4wMDIgMjczLjcwNSAyODAuODI5WlwiXG4gICAgICAgIGZpbGw9XCIjQzRGQzY4XCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTI5Mi42OTYgMjgxLjQzOEMyOTAuODQ4IDI4MS40MzggMjg4Ljk5MSAyODEuMzc3IDI4Ny4xNDMgMjgxLjMyNkMyODQuODE5IDI4MS4yNTUgMjgyLjYyNyAyODEuMTk1IDI4MC40OTUgMjgxLjIzNUMyNzguMzY0IDI4MS4yNzYgMjc1Ljk2OCAyODEuMzE2IDI3My43MDUgMjgxLjMzN0MyNjAuNTcxIDI4MS40NzkgMjQ2LjE2OCAyODEuMzM3IDIyOC4zNjUgMjgwLjgxOUMyMjUuMjM5IDI4MC43MjggMjE5LjU3NSAyNzkuMjQ2IDIxOC4yNzYgMjc0LjI1MkMyMTcuOTAxIDI3Mi4yNzcgMjE4LjAwNiAyNzAuMjQxIDIxOC41OCAyNjguMzE0QzIyMC4zNDMgMjYwLjY4NiAyMjMuMzU0IDI1My40MDIgMjI3LjQ5MiAyNDYuNzU2QzIzMC41MzcgMjQxLjk0NCAyMzQuMTkxIDIzOS4yNTUgMjM4LjA1OCAyMzYuNDEzQzIzOC44OCAyMzUuODE0IDIzOS43MjMgMjM1LjE5NSAyNDAuNTc1IDIzNC41MzVDMjU0Ljg3NyAyMjMuNjAzIDI3MS40NzIgMjE3Ljg2OSAyODguNTk1IDIxOC4wMDFDMjg5LjQ3OCAyMTguMDAxIDI5MC4zOTEgMjE4LjAwMSAyOTEuMzI1IDIxOC4wMDFDMjk3LjA4IDIxNy44ODkgMzAzLjYwNyAyMTcuNzY3IDMwOC40ODkgMjIxLjcwNUMzMTIuMjQ5IDIyNC41NTIgMzE2LjI0NiAyMjcuMDcyIDMyMC40MzYgMjI5LjIzN0MzMjYuNDE0IDIzMi41NDYgMzMyLjYxNiAyMzUuOTY2IDMzNy4yMTMgMjQxLjQxN0MzNDIuMjE3IDI0Ny4zNDQgMzQ0LjE3NiAyNTQuODY1IDM0Mi4yMDcgMjYwLjU4QzM0MS4xMDEgMjYzLjc4NyAzMzguMjI4IDI2Ny45MzkgMzMwLjg0OSAyNjkuNDgxQzMyOS4zMzIgMjY5Ljc2NSAzMjcuNzk1IDI2OS45MzUgMzI2LjI1MSAyNjkuOTg5QzMyNC4zOTEgMjcwLjAyNiAzMjIuNTQyIDI3MC4yNzggMzIwLjc0IDI3MC43NEMzMTcuODE3IDI3MS42MTMgMzE1LjMgMjczLjU3MiAzMTIuODc0IDI3NS40NkMzMTIuMzA1IDI3NS44OTYgMzExLjc1NyAyNzYuMzMzIDMxMS4xODkgMjc2Ljc1OUMzMDUuOTAxIDI4MC43MTcgMjk5LjM2NCAyODEuNDM4IDI5Mi42OTYgMjgxLjQzOFpNMjgxLjkzNyAyODAuMjFDMjgzLjYzMiAyODAuMjEgMjg1LjM1NyAyODAuMjYxIDI4Ny4xNjQgMjgwLjMxMUMyOTUuNDg3IDI4MC41NTUgMzA0LjA5NCAyODAuODA5IDMxMC42MiAyNzUuOTA2QzMxMS4xNzkgMjc1LjQ5IDMxMS43MjcgMjc1LjA1NCAzMTIuMjg1IDI3NC42MjdDMzE0Ljc5MiAyNzIuNjY4IDMxNy4zNiAyNzAuNjQ5IDMyMC40ODYgMjY5LjcyNUMzMjIuMzUyIDI2OS4yNSAzMjQuMjY2IDI2OC45ODggMzI2LjE5MSAyNjguOTQzQzMyNy42ODIgMjY4Ljg4OSAzMjkuMTY4IDI2OC43MjYgMzMwLjYzNiAyNjguNDU2QzMzNi4xMTcgMjY3LjMxOSAzMzkuNzcxIDI2NC40NjcgMzQxLjI0MyAyNjAuMjE0QzM0My4xIDI1NC44MzUgMzQxLjI0MyAyNDcuNyAzMzYuNDMyIDI0Mi4wMzZDMzMxLjkwNSAyMzYuNzI3IDMyNS44MTUgMjMzLjM0NyAzMTkuOTQ4IDIzMC4xNEMzMTUuNzAyIDIyNy45NTEgMzExLjY1NCAyMjUuMzk3IDMwNy44NDkgMjIyLjUwN0MzMDMuMjUyIDIxOC43OTIgMjk2LjkxOCAyMTguOTE0IDI5MS4zNDYgMjE5LjAyNkMyOTAuMjI5IDIxOS4wMjYgMjg5LjE0MyAyMTkuMDI2IDI4OC4wNzcgMjE5LjAyNkMyNzEuMzcgMjE5LjAyNiAyNTUuMTcxIDIyNC42NTkgMjQxLjE4NCAyMzUuMzU3QzI0MC4zMzIgMjM2LjAxNyAyMzkuNDg5IDIzNi42MzYgMjM4LjY1NyAyMzcuMjQ1QzIzNC44NzEgMjQwLjAyNiAyMzEuMjk4IDI0Mi42NTUgMjI4LjM1NSAyNDcuMzE0QzIyNC4yNzMgMjUzLjg1NyAyMjEuMzA2IDI2MS4wMzMgMjE5LjU3NSAyNjguNTQ4QzIxOS4wNDIgMjcwLjMxNyAyMTguOTMgMjcyLjE4OCAyMTkuMjUgMjc0LjAwOEMyMjAuNDA3IDI3OC40MjQgMjI1LjU0MyAyNzkuNzMzIDIyOC4zODUgMjc5LjgxNEMyNDYuMTc4IDI4MC4zMjIgMjYwLjU3MSAyODAuNDg0IDI3My42ODUgMjgwLjMzMkMyNzUuOTQ4IDI4MC4zMzIgMjc4LjIwMSAyODAuMjcxIDI4MC40NjUgMjgwLjIzTDI4MS45MzcgMjgwLjIxWlwiXG4gICAgICAgIGZpbGw9XCIjMjMxRjIwXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTI4MS4zMzggMjAzLjc1QzI2MS4wMzggMTk2Ljg1OCAyNDAuMDY4IDE5Mi41ODUgMjE4LjkzNiAxOTIuMTg5QzE4My41NzMgMTkxLjU2IDE0OS45MTUgMjAzLjgwMSAxMTcuNDM2IDIxOS4wNDZDMTA0Ljg4IDIyNC45NTMgOTIuMjczNyAyMzEuNDM5IDgxLjQ1MzggMjQxLjA2MUM3My45MTIzIDI0Ny43NzEgNjMuMTEyNyAyNjMuNzM2IDcwLjQwMDQgMjc1LjQzOUM3MS45NTQzIDI3Ny44IDc0LjIwMjkgMjc5LjYxOSA3Ni44MzU1IDI4MC42NDZDOTEuMjE4MSAyODYuNjc1IDEwNy42NzEgMjgyLjM3MiAxMjIuMjY3IDI4MC4xOUMxNjQuNzc1IDI3My44MzYgMjA4LjcwNCAyODkuOTc0IDI1MC41MTIgMjc1LjM4OUMyNTMuNzcgMjc0LjI1MiAyNTcuNzE5IDI3MS41NDIgMjU2LjkwNyAyNjcuNzA1QzI1Ni4yNTcgMjY0LjU4OSAyNTIuNjc0IDI2My4xODggMjUyLjEwNiAyNjAuMDQyQzI1MS40NDYgMjU2LjM4OCAyNTUuMTUxIDI1My44NzEgMjU4LjE5NiAyNTIuNzk1QzI3OC44IDI0NS41ODggMzAyLjAxMyAyNDYuNCAzMTkuOTQ4IDIzMi42MTdDMzIxLjUxMSAyMzEuNjA2IDMyMi43MDIgMjMwLjExMyAzMjMuMzM4IDIyOC4zNjRDMzI0LjUzNiAyMjQuMTExIDMyMC40ODYgMjIwLjQ4NyAzMTYuOTQ0IDIxOC43MjFDMzA1LjQyNiAyMTIuOTM1IDI5My41MyAyMDcuOTM0IDI4MS4zMzggMjAzLjc1WlwiXG4gICAgICAgIGZpbGw9XCJ3aGl0ZVwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk05My43NjU3IDI4NC4yMDlDODcuODk1NCAyODQuMzI0IDgyLjA2MTkgMjgzLjI1OCA3Ni42MTIyIDI4MS4wNzNDNzMuODcyNiAyODAuMDE2IDcxLjUzNTcgMjc4LjEyMyA2OS45MzM1IDI3NS42NjNDNjYuNjQ0OSAyNzAuMzc1IDY2LjYxNDUgMjYzLjYyNSA2OS44NjI1IDI1Ni4xMzRDNzIuNTE1NCAyNTAuMjYgNzYuMzM0NyAyNDQuOTg3IDgxLjA4ODQgMjQwLjYzNUM5Mi4zNTQ5IDIzMC42MTcgMTA1LjYzMSAyMjMuOTc5IDExNy4xOTIgMjE4LjU0OUMxNDYuMzIyIDIwNC44NjYgMTgxLjE5OCAxOTAuOTYxIDIxOC45NDYgMTkxLjY0MUMyMzguOTAxIDE5MS45OTYgMjU5Ljk0MSAxOTUuODk0IDI4MS41IDIwMy4yMzJDMjkzLjcxMyAyMDcuNDIyIDMwNS42MjkgMjEyLjQzMSAzMTcuMTY3IDIxOC4yMjRDMzIxLjAzNCAyMjAuMTUyIDMyNS4wOTQgMjIzLjk4OSAzMjMuODI2IDIyOC40NjVDMzIzLjE2NCAyMzAuMzIzIDMyMS45MDggMjMxLjkxIDMyMC4yNTMgMjMyLjk4MkMzMDguNTYgMjQxLjk2NSAyOTQuNDIxIDI0NC44MzcgMjgwLjc0OSAyNDcuNjE4QzI3My4zMDkgMjQ5LjEzMSAyNjUuNjA1IDI1MC42NjMgMjU4LjM2OCAyNTMuMjMxQzI1NS4zMjMgMjU0LjI5NyAyNTEuOTk0IDI1Ni42ODIgMjUyLjU3MyAyNTkuOTFDMjUyLjk2NiAyNjEuMzE3IDI1My43NiAyNjIuNTc5IDI1NC44NTYgMjYzLjU0NEMyNTYuMDYyIDI2NC42MzIgMjU2LjkzNCAyNjYuMDQgMjU3LjM3NCAyNjcuNjA0QzI1OC4yMzYgMjcxLjY2NCAyNTQuMzI5IDI3NC41OTcgMjUwLjY1NCAyNzUuODY2QzIyNi40MTYgMjg0LjMyMSAyMDEuMTAyIDI4Mi40NzMgMTc2LjYxIDI4MC42NzdDMTU4LjcyNiAyNzkuMzY3IDE0MC4yMzIgMjc4LjAxOCAxMjIuMzE4IDI4MC42NzdDMTIwLjA4NSAyODEuMDAyIDExNy44MTEgMjgxLjM4NyAxMTUuNTA3IDI4MS43NzNDMTA4LjMwMSAyODIuOTcxIDEwMC45NjIgMjg0LjIwOSA5My43NjU3IDI4NC4yMDlaTTIxNi4zMDcgMTkyLjYzNkMxNzkuNzY3IDE5Mi42MzYgMTQ1Ljk2NyAyMDYuMTU2IDExNy42MjggMjE5LjQ2MkMxMDYuMTI4IDIyNC44NzIgOTIuOTMzNCAyMzEuNDU5IDgxLjc2ODQgMjQxLjM5NkM3Ny4xMjAyIDI0NS42NDMgNzMuMzg2OCAyNTAuNzkyIDcwLjc5NjMgMjU2LjUzQzY4LjYyNDIgMjYxLjUyNCA2Ni44NjgyIDI2OC44MTEgNzAuNzk2MyAyNzUuMTE1QzcyLjI4NTIgMjc3LjM5NCA3NC40NTU1IDI3OS4xNDUgNzYuOTk3OSAyODAuMTE5Qzg5LjA0NiAyODUuMTk0IDEwMi4zNzMgMjgyLjkyIDExNS4zMzQgMjgwLjc0OEMxMTcuNjQ5IDI4MC4zNjIgMTE5LjkyMiAyNzkuOTc2IDEyMi4xNjUgMjc5LjY0MkMxNDAuMTkyIDI3Ni45NDIgMTU4LjcwNSAyNzguMzAyIDE3Ni42ODEgMjc5LjY0MkMyMDEuMDQxIDI4MS40MjggMjI2LjI4NCAyODMuMjc1IDI1MC4zMTkgMjc0Ljg5MUMyNTMuNTY3IDI3My43NTUgMjU3LjA5OSAyNzEuMjE3IDI1Ni40MDkgMjY3Ljc4NkMyNTUuOTkyIDI2Ni40MTkgMjU1LjIwNSAyNjUuMTkzIDI1NC4xMzYgMjY0LjI0NEMyNTIuOTA3IDI2My4xNDQgMjUyLjAyOCAyNjEuNzA4IDI1MS42MDggMjYwLjExM0MyNTAuOTA4IDI1Ni4yNTYgMjU0LjY1MyAyNTMuNDg1IDI1OC4wNjQgMjUyLjI5N0MyNjUuMzcyIDI0OS43NCAyNzMuMTA2IDI0OC4xNjYgMjgwLjU3NiAyNDYuNjQ0QzI5NC4xMzcgMjQzLjg5MyAzMDguMTY0IDI0MS4wNDEgMzE5LjY3NCAyMzIuMkMzMjEuMTQ1IDIzMS4yNTEgMzIyLjI3IDIyOS44NTIgMzIyLjg4MiAyMjguMjExQzMyMy45NzggMjI0LjMyNCAzMjAuMjYzIDIyMC45MDMgMzE2Ljc0MSAyMTkuMTQ4QzMwNS4yNDQgMjEzLjM4NSAyOTMuMzc2IDIwOC4zOTMgMjgxLjIxNiAyMDQuMjA3QzI1OS43NTkgMTk2LjkwOSAyMzguODA5IDE5My4wNDIgMjE4Ljk2NiAxOTIuNjc2TDIxNi4zMDcgMTkyLjYzNlpcIlxuICAgICAgICBmaWxsPVwiIzIzMUYyMFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yODkuODg0IDI1Mi42ODNDMjg4LjQyMSAyNTIuNjg1IDI4Ni45NiAyNTIuNTkgMjg1LjUwOSAyNTIuMzk5QzI4NS4zNzggMjUyLjM3OSAyODUuMjYgMjUyLjMwOCAyODUuMTggMjUyLjIwMkMyODUuMSAyNTIuMDk2IDI4NS4wNjYgMjUxLjk2MiAyODUuMDgzIDI1MS44MzFDMjg1LjA4OSAyNTEuNzYzIDI4NS4xMDkgMjUxLjY5OCAyODUuMTQxIDI1MS42MzlDMjg1LjE3NCAyNTEuNTggMjg1LjIxOCAyNTEuNTI5IDI4NS4yNzIgMjUxLjQ4OEMyODUuMzI1IDI1MS40NDcgMjg1LjM4NiAyNTEuNDE3IDI4NS40NTIgMjUxLjQwMUMyODUuNTE3IDI1MS4zODUgMjg1LjU4NSAyNTEuMzgzIDI4NS42NTEgMjUxLjM5NEMyOTMuNTQ0IDI1Mi4zODUgMzAxLjUzMiAyNTAuNTQ0IDMwOC4xOTUgMjQ2LjE5N0MzMDguMzA3IDI0Ni4xMzMgMzA4LjQ0MSAyNDYuMTE0IDMwOC41NjcgMjQ2LjE0NUMzMDguNjkzIDI0Ni4xNzYgMzA4LjgwMyAyNDYuMjU0IDMwOC44NzMgMjQ2LjM2NEMzMDguOTQzIDI0Ni40NzMgMzA4Ljk2OSAyNDYuNjA1IDMwOC45NDUgMjQ2LjczM0MzMDguOTIgMjQ2Ljg2IDMwOC44NDggMjQ2Ljk3NCAzMDguNzQzIDI0Ny4wNUMzMDMuMTI3IDI1MC42OTggMjk2LjU4IDI1Mi42NTMgMjg5Ljg4NCAyNTIuNjgzWlwiXG4gICAgICAgIGZpbGw9XCJ3aGl0ZVwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0zMTguNTA3IDI0OC42MzNDMzE4LjQyNSAyNDguNjMzIDMxOC4zNDMgMjQ4LjYxMyAzMTguMjcxIDI0OC41NzRDMzE4LjE5OCAyNDguNTM1IDMxOC4xMzYgMjQ4LjQ3OSAzMTguMDkxIDI0OC40MUMzMTguMDUyIDI0OC4zNTUgMzE4LjAyNSAyNDguMjkzIDMxOC4wMTEgMjQ4LjIyN0MzMTcuOTk3IDI0OC4xNjEgMzE3Ljk5NiAyNDguMDkzIDMxOC4wMDggMjQ4LjAyN0MzMTguMDIgMjQ3Ljk2MSAzMTguMDQ2IDI0Ny44OTggMzE4LjA4MyAyNDcuODQyQzMxOC4xMTkgMjQ3Ljc4NiAzMTguMTY3IDI0Ny43MzcgMzE4LjIyMyAyNDcuN0wzMjQuNDU1IDI0My40NzdDMzI0LjU2OCAyNDMuNDAzIDMyNC43MDYgMjQzLjM3NyAzMjQuODM5IDI0My40MDNDMzI0Ljk3MiAyNDMuNDMgMzI1LjA4OSAyNDMuNTA3IDMyNS4xNjUgMjQzLjYxOUMzMjUuMjM5IDI0My43MzEgMzI1LjI2NSAyNDMuODY3IDMyNS4yMzkgMjQzLjk5OUMzMjUuMjEyIDI0NC4xMyAzMjUuMTM1IDI0NC4yNDUgMzI1LjAyMyAyNDQuMzJMMzE4Ljc5MSAyNDguNTQyQzMxOC43MDkgMjQ4LjYwMiAzMTguNjA5IDI0OC42MzQgMzE4LjUwNyAyNDguNjMzWlwiXG4gICAgICAgIGZpbGw9XCJ3aGl0ZVwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yNTkuOTUyIDI3NC4xNUMyNTkuODE3IDI3NC4xNjggMjU5LjY4MSAyNzQuMTMxIDI1OS41NzMgMjc0LjA0OEMyNTkuNDY2IDI3My45NjYgMjU5LjM5NiAyNzMuODQzIDI1OS4zNzggMjczLjcwOUMyNTkuMzYxIDI3My41NzQgMjU5LjM5NyAyNzMuNDM4IDI1OS40OCAyNzMuMzMxQzI1OS41NjMgMjczLjIyMyAyNTkuNjg1IDI3My4xNTMgMjU5LjgyIDI3My4xMzVDMjYyLjg2NSAyNzIuMzIzIDI2NS4yOCAyNjguODIyIDI2NS4zMTEgMjY1LjE2OEMyNjUuMzA5IDI2NS4xIDI2NS4zMjIgMjY1LjAzMyAyNjUuMzQ4IDI2NC45NzFDMjY1LjM3MyAyNjQuOTA4IDI2NS40MTIgMjY0Ljg1MiAyNjUuNDYgMjY0LjgwNUMyNjUuNTA5IDI2NC43NTggMjY1LjU2NyAyNjQuNzIyIDI2NS42MyAyNjQuNjk5QzI2NS42OTQgMjY0LjY3NiAyNjUuNzYxIDI2NC42NjYgMjY1LjgyOCAyNjQuNjdDMjY1Ljg5NSAyNjQuNjcgMjY1Ljk2IDI2NC42ODMgMjY2LjAyMSAyNjQuNzA5QzI2Ni4wODIgMjY0LjczNSAyNjYuMTM3IDI2NC43NzIgMjY2LjE4NCAyNjQuODJDMjY2LjIzIDI2NC44NjcgMjY2LjI2NyAyNjQuOTIzIDI2Ni4yOTEgMjY0Ljk4NEMyNjYuMzE1IDI2NS4wNDYgMjY2LjMyNyAyNjUuMTEyIDI2Ni4zMjYgMjY1LjE3OEMyNjYuMzI2IDI2OS4zMzkgMjYzLjYwNiAyNzMuMTc2IDI2MC4wODQgMjc0LjEyTDI1OS45NTIgMjc0LjE1WlwiXG4gICAgICAgIGZpbGw9XCJ3aGl0ZVwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0xNjEuMzU1IDI2Mi4wMDFDMTk4LjYxIDI2Mi4wMDEgMjI4LjgxMSAyNTcuNjAyIDIyOC44MTEgMjUyLjE3NkMyMjguODExIDI0Ni43NDkgMTk4LjYxIDI0Mi4zNSAxNjEuMzU1IDI0Mi4zNUMxMjQuMDk5IDI0Mi4zNSA5My44OTc3IDI0Ni43NDkgOTMuODk3NyAyNTIuMTc2QzkzLjg5NzcgMjU3LjYwMiAxMjQuMDk5IDI2Mi4wMDEgMTYxLjM1NSAyNjIuMDAxWlwiXG4gICAgICAgIGZpbGw9XCIjRTZFN0U4XCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTE4NS42NjQgMjQuMDEzOEMxODUuNzQ5IDI0LjIwNiAxODUuODE0IDI0LjQwNjggMTg1Ljg1NyAyNC42MTI3TDE4Ny4xODYgMzAuNjQxOEwxODUuNzM1IDMwLjk1NjRDMTg0LjI4MyAzMS4yODEyIDE4Mi44NTIgMzEuNjI2MyAxODEuNDMxIDMxLjk3MTRMMTgwLjEzMiAyNS44MjA1QzE3OS45NzkgMjUuMTE0MSAxODAuMDkyIDI0LjM3NiAxODAuNDQ5IDIzLjc0NzhDMTgwLjgwNyAyMy4xMTk2IDE4MS4zODQgMjIuNjQ1NSAxODIuMDcgMjIuNDE2NUMxODIuNzU1IDIyLjE4NzYgMTgzLjUwMSAyMi4yMTk4IDE4NC4xNjUgMjIuNTA3MUMxODQuODI4IDIyLjc5NDQgMTg1LjM2MiAyMy4zMTY1IDE4NS42NjQgMjMuOTczMlYyNC4wMTM4WlwiXG4gICAgICAgIGZpbGw9XCJ3aGl0ZVwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0xODEuNDMxIDMyLjUxOTVDMTgxLjMzOCAzMi41MjE1IDE4MS4yNDcgMzIuNDk2OCAxODEuMTY3IDMyLjQ0ODVDMTgxLjA1MSAzMi4zNzM1IDE4MC45NjggMzIuMjU3NSAxODAuOTM0IDMyLjEyMzdMMTc5LjY1NSAyNS45NjI2QzE3OS40ODEgMjUuMTM2MiAxNzkuNjE3IDI0LjI3NDYgMTgwLjAzOCAyMy41NDIxQzE4MC40NTggMjIuODA5NiAxODEuMTMzIDIyLjI1NzIgMTgxLjkzNCAyMS45OTAxQzE4Mi43MzUgMjEuNzIzIDE4My42MDcgMjEuNzYgMTg0LjM4MiAyMi4wOTM4QzE4NS4xNTggMjIuNDI3NyAxODUuNzg0IDIzLjAzNTIgMTg2LjE0MSAyMy44MDA3QzE4Ni4yNDQgMjQuMDI0OCAxODYuMzIzIDI0LjI1OTcgMTg2LjM3NCAyNC41MDFMMTg3LjY5NCAzMC41MzAxQzE4Ny43MSAzMC41OTc0IDE4Ny43MTIgMzAuNjY3NCAxODcuNyAzMC43MzU1QzE4Ny42ODggMzAuODAzNyAxODcuNjYyIDMwLjg2ODYgMTg3LjYyMyAzMC45MjZDMTg3LjU4OCAzMC45ODMyIDE4Ny41NCAzMS4wMzIgMTg3LjQ4NCAzMS4wNjg4QzE4Ny40MjggMzEuMTA1NiAxODcuMzY0IDMxLjEyOTYgMTg3LjI5OCAzMS4xMzkxTDE4NS45NjggMzEuNDIzM0gxODUuODU3QzE4NC40MTUgMzEuNzM4IDE4Mi45NzQgMzIuMDkzMiAxODEuNTgzIDMyLjQzODNMMTgxLjQzMSAzMi41MTk1Wk0xODMuMDA1IDIyLjgyNjNDMTgyLjgxMyAyMi44MjY1IDE4Mi42MjMgMjIuODQ2OSAxODIuNDM2IDIyLjg4NzJDMTgxLjgzMiAyMy4wNDggMTgxLjMxMiAyMy40MzQzIDE4MC45ODMgMjMuOTY2NkMxODAuNjU1IDI0LjQ5OSAxODAuNTQzIDI1LjEzNyAxODAuNjcgMjUuNzQ5NUwxODEuODY4IDMxLjM4MjdDMTgzLjExNiAzMS4wNTc5IDE4NC4zODUgMzAuNzQzMyAxODUuNjc0IDMwLjQ1OTFIMTg1Ljc3NUwxODYuNjI4IDMwLjI2NjJMMTg1LjQxIDI0LjczNDVDMTg1LjM3MyAyNC41NjY5IDE4NS4zMTggMjQuNDAzNyAxODUuMjQ4IDI0LjI0NzNDMTg1LjA1NCAyMy44MTY0IDE4NC43MzkgMjMuNDUxOSAxODQuMzQgMjMuMTk5MkMxODMuOTQxIDIyLjk0NjUgMTgzLjQ3NyAyMi44MTY4IDE4My4wMDUgMjIuODI2M1pcIlxuICAgICAgICBmaWxsPVwiIzIzMUYyMFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0xMDAuODUgMTA4LjUyM0MxMDMuNzk0IDEyMS43OTkgMTQ4LjY4NyAxMjMuMTE4IDIwMS4xMDIgMTExLjQ2NkMyNTMuNTE3IDk5LjgxNCAyOTMuNjI5IDc5LjYwNTMgMjkwLjY3NiA2Ni4zMjkxQzI4Ny43MjIgNTMuMDUyOSAyMzguMTQ5IDE5LjMwNDIgMTg1Ljc0NSAzMC45NTY0QzEzMy4zNDEgNDIuNjA4NiA5Ny44OTY3IDk1LjI0NjUgMTAwLjg1IDEwOC41MjNaXCJcbiAgICAgICAgZmlsbD1cIiNDNEZDNjhcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMTM3LjI3OSAxMTkuOTIxQzEzNS42MTQgMTE5LjkyMSAxMzMuOTkgMTE5LjkyMSAxMzIuNDA3IDExOS44NUMxMTMuMjIzIDExOS4yOTIgMTAxLjgzNSAxMTUuMzAzIDEwMC4zNTMgMTA4LjY4NUM5Ny4zNjkgOTUuMjY2OCAxMzIuOTI0IDQyLjIyMjkgMTg1LjYxMyAzMC41MzAxQzIzOC45OTIgMTguNTkzNyAyODguMjYgNTMuMDAyMiAyOTEuMTczIDY2LjIxNzVDMjk0LjIxOCA3OS45ODA5IDI1NC43MTQgMTAwLjA2OCAyMDEuMjE0IDExMS45NjRDMTc3Ljk0IDExNy4xNCAxNTUuNDc4IDExOS45MjEgMTM3LjI3OSAxMTkuOTIxWk0xMDEuMzQ4IDEwOC40MTFDMTAyLjY5OCAxMTQuNTAxIDExNC4wMjUgMTE4LjI5NyAxMzIuNDM3IDExOC44MzVDMTUxLjMzNiAxMTkuMzgzIDE3NS42ODYgMTE2LjYwMiAyMDAuOTkgMTEwLjk2OUMyNTMuMDYgOTkuMzk3OSAyOTMuMDYxIDc5LjQyMjcgMjkwLjE3OCA2Ni40NDA4QzI4OC43NjggNjAuMDg2OSAyNzUuODA2IDQ4LjM3MzggMjU2LjU0MSAzOS43NTY1QzI0My4xNDMgMzMuNzU3OCAyMTYuMTQ0IDI0LjcxNDIgMTg1LjgzNiAzMS40NDM2QzEzMy42NzUgNDMuMDQ1MSA5OC40NTUgOTUuMjM2NCAxMDEuMzQ4IDEwOC40MTFaXCJcbiAgICAgICAgZmlsbD1cIiMyMzFGMjBcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMjkwLjY3NiA2Ni4zMjkyQzI5My41NTggNzkuMjkwNyAyNTUuNDA0IDk4Ljg1OTkgMjA0LjgwNyAxMTAuNjI0QzIwMy41ODkgMTEwLjkxOCAyMDIuMzUgMTExLjE5MiAyMDEuMTEyIDExMS40NzZMMTk4LjQ4MyAxMTIuMDQ1QzE0Ny4xOTUgMTIzLjA2OCAxMDMuNzQzIDEyMS41NzYgMTAwLjg0IDEwOC41MjNDOTcuOTM3NCA5NS40Njk4IDEzNi44OTMgNzUuNTk2MSAxODguMjMyIDYzLjg2MjdMMTkwLjQxNCA2My4zNzU1TDE5NC4yMiA2Mi41NDMyQzI0NS4wMDEgNTEuODE0NyAyODcuNzkzIDUzLjM3NzggMjkwLjY3NiA2Ni4zMjkyWlwiXG4gICAgICAgIGZpbGw9XCIjMjMxRjIwXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTEzNy4zMTkgMTE5LjkzMUMxMTYuMTI2IDExOS45MzEgMTAyLjAwOCAxMTYuMDk1IDEwMC4zNTMgMTA4LjYzNEM5Ny4zMDgxIDk1LjE3NTUgMTM1Ljg3OCA3NS4zMDE4IDE4OC4xMiA2My4zOTU4TDE5MC4zMDIgNjIuODk4NUwxOTQuMTE5IDYyLjA3NjNDMjQ1LjYgNTEuMTY1MSAyODguMjMgNTIuOTQxMyAyOTEuMTYzIDY2LjIxNzVDMjk0LjA5NiA3OS40OTM3IDI1Ni4yMjcgOTkuMTk0OSAyMDQuODg4IDExMS4xMjFDMjAzLjY3IDExMS40MTUgMjAyLjQzMiAxMTEuNjkgMjAxLjE5MyAxMTEuOTY0QzIwMC4zMiAxMTIuMTY3IDE5OS40MzcgMTEyLjM0OSAxOTguNTY0IDExMi41NDJDMTc1LjUwNCAxMTcuNDc1IDE1NC4xNzggMTE5LjkzMSAxMzcuMzE5IDExOS45MzFaTTI1NC4yOTggNTUuOTg2M0MyMzcuNjkzIDU1Ljk4NjMgMjE2Ljc0MyA1OC4zMDA1IDE5NC4zMzIgNjMuMDkxM0wxOTAuNTI2IDYzLjkyMzZDMTg5Ljc4NSA2NC4wNzU5IDE4OS4wNjQgNjQuMjQ4NCAxODguMzU0IDY0LjQxMDhDMTM3LjYwNCA3Ni4wMDIxIDk4LjUyNiA5NS43NTQgMTAxLjMzOCAxMDguNDQyQzEwNC4xNDkgMTIxLjEyOSAxNDcuNjgyIDEyMi40NzkgMTk4LjM4MiAxMTEuNTc4TDIwMSAxMTEuMDA5QzIwMi4yMzkgMTEwLjczMiAyMDMuNDY3IDExMC40NDggMjA0LjY4NSAxMTAuMTU3QzI1NC42MDMgOTguNTU1NCAyOTIuOTkgNzguOTU1OCAyOTAuMTc4IDY2LjUxMTlDMjg4LjY0NiA1OS41NDkgMjc0LjgxMSA1Ni4wMDY2IDI1NC4yOTggNTYuMDA2NlY1NS45ODYzWlwiXG4gICAgICAgIGZpbGw9XCIjMjMxRjIwXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTI2Ny4xNzggNTYuMDA2NkMyNTYuMzA4IDU0Ljk5MTYgMjQyLjI5MSA1NS4zNzczIDIyNi40NzcgNTcuMjI0NkMyMTYuOTQ4IDQ0LjM2MTcgMjAzLjQ1MiAzNC45OTE4IDE4OC4wNjkgMzAuNTYwNkMyMjYuNDI2IDI0LjA5NSAyNTYuMjg4IDQ2LjMyMzUgMjY3LjE3OCA1Ni4wMDY2WlwiXG4gICAgICAgIGZpbGw9XCJ3aGl0ZVwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yMjYuNDc3IDU3LjczMjFDMjI2LjM5NyA1Ny43MzI5IDIyNi4zMTcgNTcuNzE1IDIyNi4yNDUgNTcuNjc5N0MyMjYuMTczIDU3LjY0NDUgMjI2LjExIDU3LjU5MjkgMjI2LjA2MSA1Ny41MjkxQzIxNi42MTUgNDQuNzYwOCAyMDMuMjI4IDM1LjQ1ODEgMTg3Ljk2OCAzMS4wNTc5QzE4Ny44NTMgMzEuMDMyMSAxODcuNzUxIDMwLjk2NzUgMTg3LjY3OSAzMC44NzQ5QzE4Ny42MDcgMzAuNzgyNCAxODcuNTY5IDMwLjY2NzcgMTg3LjU3MiAzMC41NTA0QzE4Ny41NzMgMzAuNDMzMiAxODcuNjE1IDMwLjMyIDE4Ny42OTEgMzAuMjMwOUMxODcuNzY3IDMwLjE0MTcgMTg3Ljg3MiAzMC4wODIzIDE4Ny45ODggMzAuMDYzMkMyMjYuNDg3IDIzLjU2NzIgMjU2LjQzIDQ1Ljc3NTQgMjY3LjUxMyA1NS42MjA5QzI2Ny41OTIgNTUuNjkyMiAyNjcuNjQ3IDU1Ljc4NTkgMjY3LjY3IDU1Ljg4OTRDMjY3LjY5NCA1NS45OTI5IDI2Ny42ODUgNTYuMTAxMSAyNjcuNjQ1IDU2LjE5OTVDMjY3LjYwMyA1Ni4yOTg3IDI2Ny41MjkgNTYuMzgxNyAyNjcuNDM2IDU2LjQzNjVDMjY3LjM0MyA1Ni40OTEzIDI2Ny4yMzUgNTYuNTE0OSAyNjcuMTI4IDU2LjUwNEMyNTYuMTk2IDU1LjQ4OSAyNDIuMTU5IDU1Ljg5NSAyMjYuNTI4IDU3LjczMjFIMjI2LjQ3N1pNMTkwLjQyNCAzMC43MTI4QzIwNC45MDYgMzUuNDI3MyAyMTcuNTc4IDQ0LjQ5ODQgMjI2LjcxIDU2LjY4NjdDMjQxLjU3IDU0Ljk2MTIgMjU0Ljk3OCA1NC41NDUgMjY1LjY3NiA1NS4zNTdDMjU0LjExNSA0NS40MSAyMjYuMTQyIDI1LjY4ODYgMTkwLjQyNCAzMC43MTI4WlwiXG4gICAgICAgIGZpbGw9XCIjMjMxRjIwXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTE3OS4wOTcgMzIuNjcxOEMxNzkuMDk3IDMyLjY3MTggMTYzLjU1NyA0NS42MjMxIDE1Ny42NyA3Mi4yNTY3QzE0Mi4yNDIgNzcuMjUwNSAxMjkuMDI3IDgyLjgxMjggMTE5LjIzMiA4OC4zNzVDMTIyLjExNyA4MC4xNzYxIDEyNi4yMjMgNzIuNDU5OCAxMzEuNDEyIDY1LjQ4NjdDMTQxLjY3NCA1MS44NDUxIDE1OS4wMyAzNy41ODQ0IDE3OS4wOTcgMzIuNjcxOFpcIlxuICAgICAgICBmaWxsPVwid2hpdGVcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMTE5LjIzMiA4OC44NjIxQzExOS4xMTQgODguODYyMiAxMTkgODguODIyOSAxMTguOTA3IDg4Ljc1MDVDMTE4LjgyOCA4OC42ODQgMTE4Ljc3MSA4OC41OTUgMTE4Ljc0NCA4OC40OTUyQzExOC43MTcgODguMzk1NCAxMTguNzIgODguMjg5NyAxMTguNzU1IDg4LjE5MjJDMTIxLjYyIDc5Ljk0MDUgMTI1LjcyNyA3Mi4xNzQzIDEzMC45MzUgNjUuMTYxOUMxNDMuMjY3IDQ4Ljg1MDggMTYxLjIxMiAzNi41MTg2IDE3OC45NTUgMzIuMTc0NEMxNzkuMDY1IDMyLjE1MDIgMTc5LjE4MSAzMi4xNjM3IDE3OS4yODMgMzIuMjEyOEMxNzkuMzg1IDMyLjI2MTkgMTc5LjQ2OCAzMi4zNDM3IDE3OS41MTggMzIuNDQ1M0MxNzkuNTY4IDMyLjU0NjkgMTc5LjU4MyAzMi42NjIzIDE3OS41NiAzMi43NzMyQzE3OS41MzcgMzIuODg0MiAxNzkuNDc4IDMyLjk4NDIgMTc5LjM5MSAzMy4wNTc0QzE3OS4yMzkgMzMuMTg5NCAxNjMuOTEyIDQ2LjI1MjQgMTU4LjEzNyA3Mi4zNDgxQzE1OC4xMTYgNzIuNDMzMyAxNTguMDc1IDcyLjUxMiAxNTguMDE2IDcyLjU3NzRDMTU3Ljk1OCA3Mi42NDI5IDE1Ny44ODQgNzIuNjkzMSAxNTcuODAyIDcyLjcyMzZDMTQyLjU3NyA3Ny42NDY0IDEyOS4zMTEgODMuMjA4NiAxMTkuNDQ1IDg4LjgwMTJDMTE5LjM4IDg4LjgzNyAxMTkuMzA3IDg4Ljg1NzggMTE5LjIzMiA4OC44NjIxWk0xNzcuMjggMzMuNjY2NEMxNjAuMzcgMzguMzU1NyAxNDMuNTIxIDUwLjI0MTQgMTMxLjc2NyA2NS43NzA5QzEyNi44ODggNzIuMzM1MSAxMjIuOTggNzkuNTY4NiAxMjAuMTY2IDg3LjI0ODNDMTI5LjkyIDgxLjg4OTEgMTQyLjY2OCA3Ni41NzA1IDE1Ny4yNDQgNzEuOEMxNTkuNTc3IDYxLjE2NDYgMTYzLjk3IDUxLjA4ODkgMTcwLjE3NSA0Mi4xNDE3QzE3Mi4yOTEgMzkuMTE0MyAxNzQuNjY4IDM2LjI3ODQgMTc3LjI4IDMzLjY2NjRaXCJcbiAgICAgICAgZmlsbD1cIiMyMzFGMjBcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMjIzLjAzNiAyMjYuODAxTDIyNC44MTIgMjI2LjMyNEMyMjYuNDYxIDIyNS44NTEgMjI4LjE3MyAyMjUuNjMyIDIyOS44ODcgMjI1LjY3NEgyMzAuMjEyTDIwNC44MzcgMTEwLjU5M0wxOTQuMjIgNjIuNTczN0MxOTIuOTUyIDYyLjgyNzQgMTkxLjY5MyA2My4xMTE2IDE5MC40MTQgNjMuMzg1N0wxODguMjMyIDYzLjg5MzJMMTk4LjQ5MyAxMTIuMDQ1TDIyMi45NDUgMjI2LjgzMUwyMjMuMDM2IDIyNi44MDFaXCJcbiAgICAgICAgZmlsbD1cIndoaXRlXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTIyMi45NDUgMjI3LjMzOUMyMjIuODU1IDIyNy4zNCAyMjIuNzY3IDIyNy4zMTYgMjIyLjY5MSAyMjcuMjY4QzIyMi42MzEgMjI3LjIzMyAyMjIuNTc4IDIyNy4xODYgMjIyLjUzNiAyMjcuMTNDMjIyLjQ5NCAyMjcuMDc0IDIyMi40NjQgMjI3LjAxMSAyMjIuNDQ3IDIyNi45NDNMMTg3Ljc3NSA2My45OTQ3QzE4Ny43NiA2My45MzA3IDE4Ny43NTggNjMuODY0MyAxODcuNzY5IDYzLjc5OTVDMTg3Ljc3OSA2My43MzQ3IDE4Ny44MDMgNjMuNjcyNiAxODcuODM4IDYzLjYxNjlDMTg3Ljg3MyA2My41NjEyIDE4Ny45MTggNjMuNTEzIDE4Ny45NzIgNjMuNDc1MUMxODguMDI2IDYzLjQzNzEgMTg4LjA4NiA2My40MTAyIDE4OC4xNTEgNjMuMzk1OEwxODguNTE2IDYzLjMxNDZMMTkwLjM1MyA2Mi44ODgzTDE5MS43NTQgNjIuNTgzOEwxOTQuMTU5IDYyLjA3NjNDMTk0LjI5IDYyLjA0OTEgMTk0LjQyNiA2Mi4wNzQzIDE5NC41MzggNjIuMTQ2NUMxOTQuNjUgNjIuMjE4NiAxOTQuNzI5IDYyLjMzMiAxOTQuNzU4IDYyLjQ2MkwyMzAuNjk5IDIyNS42MDNDMjMwLjcxOSAyMjUuNjgxIDIzMC43MTkgMjI1Ljc2MiAyMzAuNyAyMjUuODRDMjMwLjY4IDIyNS45MTggMjMwLjY0MiAyMjUuOTkgMjMwLjU4OCAyMjYuMDVDMjMwLjUzMiAyMjYuMTA4IDIzMC40NjQgMjI2LjE1MyAyMzAuMzg4IDIyNi4xODJDMjMwLjMxMyAyMjYuMjEgMjMwLjIzMiAyMjYuMjIgMjMwLjE1MSAyMjYuMjEySDIyOS44NTdDMjI4LjIwNiAyMjYuMTc0IDIyNi41NiAyMjYuMzg5IDIyNC45NzUgMjI2Ljg1MUwyMjMuNDkzIDIyNy4yMzdMMjIzLjIzOSAyMjcuMzA4SDIyMy4xMzhMMjIyLjk0NSAyMjcuMzM5Wk0xODguNzkgNjQuMjY4N0wyMjMuMyAyMjYuMTkyTDIyNC42NiAyMjUuODM2QzIyNi4yMzQgMjI1LjM5OCAyMjcuODU4IDIyNS4xNjYgMjI5LjQ5MiAyMjUuMTQ2TDE5My44NjUgNjMuMTcyNUwxOTEuOTY3IDYzLjU3ODVMMTkwLjU1NiA2My44ODNMMTg4Ljc5IDY0LjI2ODdaXCJcbiAgICAgICAgZmlsbD1cIiMyMzFGMjBcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMjIzLjkwOSAyNTIuNzc1QzIyMy42MSAyNTIuNzc0IDIyMy4zMTUgMjUyLjcwNyAyMjMuMDQ1IDI1Mi41NzlDMjIyLjc3NCAyNTIuNDUxIDIyMi41MzYgMjUyLjI2NSAyMjIuMzQ2IDI1Mi4wMzRMMTQwLjc5MSAxNTNDMTQwLjQ1MiAxNTIuNTg0IDE0MC4yOTEgMTUyLjA1IDE0MC4zNDQgMTUxLjUxNkMxNDAuMzk4IDE1MC45ODIgMTQwLjY2MSAxNTAuNDkgMTQxLjA3NSAxNTAuMTVDMTQxLjQ5IDE0OS44MDkgMTQyLjAyMyAxNDkuNjQ2IDE0Mi41NTcgMTQ5LjY5N0MxNDMuMDkyIDE0OS43NDggMTQzLjU4NCAxNTAuMDA5IDE0My45MjcgMTUwLjQyMkwyMjUuNDgyIDI0OS40MjVDMjI1LjcyNyAyNDkuNzIzIDIyNS44ODIgMjUwLjA4MyAyMjUuOTI5IDI1MC40NjZDMjI1Ljk3NiAyNTAuODQ4IDIyNS45MTMgMjUxLjIzNiAyMjUuNzQ4IDI1MS41ODRDMjI1LjU4MyAyNTEuOTMyIDIyNS4zMjMgMjUyLjIyNSAyMjQuOTk3IDI1Mi40MzFDMjI0LjY3MiAyNTIuNjM2IDIyNC4yOTQgMjUyLjc0NSAyMjMuOTA5IDI1Mi43NDRWMjUyLjc3NVpcIlxuICAgICAgICBmaWxsPVwiIzIzMUYyMFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0xNDEuMTg3IDI1MC4zMDhDMTQwLjc2OSAyNTAuMzA5IDE0MC4zNjIgMjUwLjE4MSAxNDAuMDE5IDI0OS45NDNDMTM5LjgwMSAyNDkuNzg5IDEzOS42MTUgMjQ5LjU5NCAxMzkuNDczIDI0OS4zNjhDMTM5LjMzIDI0OS4xNDIgMTM5LjIzNCAyNDguODkxIDEzOS4xODggMjQ4LjYyOEMxMzkuMTQzIDI0OC4zNjUgMTM5LjE1IDI0OC4wOTUgMTM5LjIwOSAyNDcuODM1QzEzOS4yNjggMjQ3LjU3NSAxMzkuMzc4IDI0Ny4zMjkgMTM5LjUzMiAyNDcuMTExTDE3NS43NTcgMTk1LjUwOEMxNzUuOTExIDE5NS4yOSAxNzYuMTA2IDE5NS4xMDMgMTc2LjMzMSAxOTQuOTZDMTc2LjU1NiAxOTQuODE3IDE3Ni44MDcgMTk0LjcxOSAxNzcuMDcgMTk0LjY3M0MxNzcuMzMzIDE5NC42MjcgMTc3LjYwMyAxOTQuNjMzIDE3Ny44NjMgMTk0LjY5MUMxNzguMTI0IDE5NC43NDkgMTc4LjM3MSAxOTQuODU4IDE3OC41ODkgMTk1LjAxMUMxNzguODA4IDE5NS4xNjQgMTc4Ljk5NCAxOTUuMzU5IDE3OS4xMzcgMTk1LjU4NEMxNzkuMjgxIDE5NS44MDkgMTc5LjM3OCAxOTYuMDYxIDE3OS40MjQgMTk2LjMyNEMxNzkuNDcxIDE5Ni41ODcgMTc5LjQ2NSAxOTYuODU2IDE3OS40MDcgMTk3LjExN0MxNzkuMzQ5IDE5Ny4zNzcgMTc5LjI0IDE5Ny42MjQgMTc5LjA4NyAxOTcuODQzTDE0Mi44NTEgMjQ5LjQyNUMxNDIuNjY2IDI0OS42OTYgMTQyLjQxNyAyNDkuOTE4IDE0Mi4xMjcgMjUwLjA3MUMxNDEuODM4IDI1MC4yMjUgMTQxLjUxNSAyNTAuMzA2IDE0MS4xODcgMjUwLjMwOFpcIlxuICAgICAgICBmaWxsPVwiIzIzMUYyMFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0xNDUuNTcxIDE0My42MTFIOTQuMzAzN0M5NC4zMDM3IDE0My42MTEgOTQuMDkwNSAxODEuMTE2IDExMS42NSAyMDEuMjQzQzEyOS4yMDkgMjIxLjM3IDE1Mi4xNjkgMjIxLjM4MSAxNTguNzQ2IDIyMS42MDRDMTY1LjMyMyAyMjEuODI3IDE4OC4xIDIyMS42MDQgMTg4LjEgMjIxLjYwNEMxODEuMzY2IDIxOS43OTMgMTc1LjExNiAyMTYuNTE3IDE2OS43OTYgMjEyLjAwOUMxNjQuNDc1IDIwNy41MDEgMTYwLjIxNyAyMDEuODc0IDE1Ny4zMjUgMTk1LjUyOUMxNDcuMTA0IDE3My42MjUgMTQ1LjU3MSAxNDMuNjExIDE0NS41NzEgMTQzLjYxMVpcIlxuICAgICAgICBmaWxsPVwiI0M0RkM2OFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0xNjkuMjMxIDIyMi4yMDNDMTY0Ljg3NyAyMjIuMjAzIDE2MC44NzggMjIyLjIwMyAxNTguNjk1IDIyMi4xMTFIMTU3Ljk4NUMxNTAuNjQ2IDIyMS44OTggMTI4LjMxNiAyMjEuMjM5IDExMS4yMzQgMjAxLjYwOEM5My43ODYgMTgxLjU2MiA5My43OTYyIDE0NC4wMTcgOTMuNzk2MiAxNDMuNjQyQzkzLjc5ODcgMTQzLjUwOCA5My44NTMgMTQzLjM4IDkzLjk0NzcgMTQzLjI4NkM5NC4wNDIzIDE0My4xOTEgOTQuMTY5OSAxNDMuMTM3IDk0LjMwMzcgMTQzLjEzNEgxNDUuNTcxQzE0NS43MDEgMTQzLjEzNCAxNDUuODI1IDE0My4xODMgMTQ1LjkyIDE0My4yNzJDMTQ2LjAxNCAxNDMuMzYxIDE0Ni4wNzEgMTQzLjQ4MiAxNDYuMDc5IDE0My42MTFDMTQ2LjA3OSAxNDMuOTE2IDE0Ny43MjMgMTczLjc4NyAxNTcuODEyIDE5NS4zNzZDMTYwLjY4OSAyMDEuNjI3IDE2NC44OTYgMjA3LjE3NCAxNzAuMTQgMjExLjYyOUMxNzUuMzg0IDIxNi4wODMgMTgxLjUzOCAyMTkuMzM5IDE4OC4xNzEgMjIxLjE2N0MxODguMjkzIDIyMS4xOTIgMTg4LjQwMSAyMjEuMjYgMTg4LjQ3NiAyMjEuMzU5QzE4OC41NTEgMjIxLjQ1OCAxODguNTg3IDIyMS41ODIgMTg4LjU3NyAyMjEuNzA1QzE4OC41NjUgMjIxLjgzIDE4OC41MDcgMjIxLjk0NyAxODguNDE2IDIyMi4wMzJDMTg4LjMyNCAyMjIuMTE4IDE4OC4yMDUgMjIyLjE2OCAxODguMDc5IDIyMi4xNzJDMTg3LjkyNyAyMjIuMTExIDE3Ny44NjkgMjIyLjIwMyAxNjkuMjMxIDIyMi4yMDNaTTk0LjgyMTMgMTQ0LjExOUM5NC44ODIyIDE0OC42NDYgOTUuODk3MiAxODIuNDE1IDExMS45OTUgMjAwLjk1OUMxMjguNzgzIDIyMC4yNDQgMTUwLjc4OCAyMjAuODkzIDE1OC4wMTUgMjIxLjEwN0gxNTguNzM2QzE2My42ODkgMjIxLjI2OSAxNzguMTAyIDIyMS4xNzggMTg0LjcgMjIxLjEwN0MxNzguNjE0IDIxOC45MzIgMTczLjAyMyAyMTUuNTY5IDE2OC4yNSAyMTEuMjEyQzE2My40NzcgMjA2Ljg1NiAxNTkuNjE4IDIwMS41OTQgMTU2Ljg5OSAxOTUuNzMyQzE0Ny40MjkgMTc1LjUwMyAxNDUuMzQ4IDE0OC4wMjcgMTQ1LjA5NCAxNDQuMTA5TDk0LjgyMTMgMTQ0LjExOVpcIlxuICAgICAgICBmaWxsPVwiIzIzMUYyMFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0xNDguMzAyIDIyMC44MjJDMTQ4LjMwMiAyMjAuODIyIDE2NC42MzMgMjE4LjA4MiAxNzAuMzI3IDIwNS44MjFIMjIxLjg3OUMyMjEuODc5IDIwNS44MjEgMjEzLjEyIDIxNy4zNjEgMjA4LjczNSAyMTkuODQ4QzIwNC4zNSAyMjIuMzM1IDE4OC4wNjkgMjIxLjYwNCAxODguMDY5IDIyMS42MDRDMTg4LjA2OSAyMjEuNjA0IDE1NC40OTMgMjIwLjgyMiAxNDguMzAyIDIyMC44MjJaXCJcbiAgICAgICAgZmlsbD1cIiNDNEZDNjhcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMTkzLjM3OCAyMjIuMjEzQzE5MC40NzUgMjIyLjIxMyAxODguMzAzIDIyMi4xMjEgMTg4LjA0OSAyMjIuMTAxQzE4Ny43OTUgMjIyLjA4MSAxNTQuNDEyIDIyMS4zMyAxNDguMzAyIDIyMS4zM0MxNDguMTc0IDIyMS4zMyAxNDguMDUxIDIyMS4yODIgMTQ3Ljk1NiAyMjEuMTk2QzE0Ny44NjIgMjIxLjEwOSAxNDcuODA0IDIyMC45OSAxNDcuNzk0IDIyMC44NjNDMTQ3Ljc4MiAyMjAuNzM2IDE0Ny44MiAyMjAuNjA5IDE0Ny45IDIyMC41MDlDMTQ3Ljk3OSAyMjAuNDA4IDE0OC4wOTQgMjIwLjM0MyAxNDguMjIgMjIwLjMyNUMxNDguMzczIDIyMC4zMjUgMTY0LjM0OSAyMTcuNDczIDE2OS44NyAyMDUuNjA3QzE2OS45MDkgMjA1LjUxOSAxNjkuOTczIDIwNS40NDMgMTcwLjA1NCAyMDUuMzkxQzE3MC4xMzUgMjA1LjMzOCAxNzAuMjMgMjA1LjMxMSAxNzAuMzI3IDIwNS4zMTNIMjIxLjg3OUMyMjEuOTc0IDIwNS4zMTMgMjIyLjA2NyAyMDUuMzM5IDIyMi4xNDggMjA1LjM5QzIyMi4yMjkgMjA1LjQ0IDIyMi4yOTQgMjA1LjUxMiAyMjIuMzM2IDIwNS41OTdDMjIyLjM3OCAyMDUuNjgxIDIyMi4zOTYgMjA1Ljc3NSAyMjIuMzg3IDIwNS44NjlDMjIyLjM3OCAyMDUuOTYyIDIyMi4zNDIgMjA2LjA1MSAyMjIuMjg1IDIwNi4xMjVDMjIxLjkzIDIwNi42MDIgMjEzLjQwNCAyMTcuNzg3IDIwOC45ODggMjIwLjI4NEMyMDYuMTI2IDIyMS45MDggMTk4LjU4NSAyMjIuMjEzIDE5My4zNzggMjIyLjIxM1pNMTUyLjE3OSAyMjAuMzU1QzE2Mi45MTggMjIwLjUwOCAxODcuNzk1IDIyMS4wODYgMTg4LjA3OSAyMjEuMDk2QzE4OC4zNjQgMjIxLjEwNiAyMDQuMzE5IDIyMS43ODcgMjA4LjQ5MSAyMTkuNDAxQzIxMi4wNTQgMjE3LjM3MSAyMTguNzczIDIwOC45ODcgMjIwLjg0NCAyMDYuMzI4SDE3MC42NTJDMTY2LjU1MSAyMTQuNzkzIDE1Ny4zODYgMjE4Ljc0MiAxNTIuMTc5IDIyMC4zNTVaXCJcbiAgICAgICAgZmlsbD1cIiMyMzFGMjBcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMTc1LjQ0MyAyNTcuMzQyQzE3NS4xNDUgMjU3LjM0MiAxNzQuODUgMjU3LjI3NyAxNzQuNTggMjU3LjE1MUMxNzQuMzEgMjU3LjAyNSAxNzQuMDcxIDI1Ni44NCAxNzMuODggMjU2LjYxMUw5Mi4zNjUgMTU3LjYxOEM5Mi4wODg4IDE1Ny4yMDIgOTEuOTc1OSAxNTYuNjk4IDkyLjA0NzcgMTU2LjIwNEM5Mi4xMTk2IDE1NS43MSA5Mi4zNzEzIDE1NS4yNTkgOTIuNzU0NSAxNTQuOTM5QzkzLjEzNzggMTU0LjYxOCA5My42MjU4IDE1NC40NSA5NC4xMjUxIDE1NC40NjdDOTQuNjI0NCAxNTQuNDg0IDk1LjEgMTU0LjY4NCA5NS40NjA4IDE1NS4wM0wxNzcuMDE2IDI1NC4wMjNDMTc3LjE4NiAyNTQuMjI5IDE3Ny4zMTQgMjU0LjQ2NiAxNzcuMzkzIDI1NC43MjFDMTc3LjQ3MSAyNTQuOTc3IDE3Ny40OTkgMjU1LjI0NSAxNzcuNDczIDI1NS41MTFDMTc3LjQ0OCAyNTUuNzc3IDE3Ny4zNyAyNTYuMDM1IDE3Ny4yNDQgMjU2LjI3MUMxNzcuMTE5IDI1Ni41MDcgMTc2Ljk0OCAyNTYuNzE2IDE3Ni43NDIgMjU2Ljg4NUMxNzYuMzczIDI1Ny4xOCAxNzUuOTE1IDI1Ny4zNDEgMTc1LjQ0MyAyNTcuMzQyWlwiXG4gICAgICAgIGZpbGw9XCIjMjMxRjIwXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTkyLjcyMDIgMjU0Ljg4NkM5Mi4zMDA3IDI1NC44ODEgOTEuODkyOSAyNTQuNzQ2IDkxLjU1MyAyNTQuNUM5MS4xMTU0IDI1NC4xOSA5MC44MTg0IDI1My43MTggOTAuNzI3MSAyNTMuMTlDOTAuNjM1OCAyNTIuNjYxIDkwLjc1NzYgMjUyLjExOCA5MS4wNjU4IDI1MS42NzhMMTI3LjI5MSAyMDAuMDc2QzEyNy41OTkgMTk5LjYzNCAxMjguMDcgMTk5LjMzMyAxMjguNiAxOTkuMjM5QzEyOS4xMzEgMTk5LjE0NSAxMjkuNjc2IDE5OS4yNjUgMTMwLjExOCAxOTkuNTczQzEzMC41NTkgMTk5Ljg4MiAxMzAuODYgMjAwLjM1MyAxMzAuOTU1IDIwMC44ODNDMTMxLjA0OSAyMDEuNDEzIDEzMC45MjkgMjAxLjk1OSAxMzAuNjIgMjAyLjRMOTQuMzk1IDI1NC4wMjNDOTQuMjA2MyAyNTQuMjkxIDkzLjk1NTQgMjU0LjUxIDkzLjY2MzggMjU0LjY2QzkzLjM3MjEgMjU0LjgxMSA5My4wNDgzIDI1NC44ODggOTIuNzIwMiAyNTQuODg2WlwiXG4gICAgICAgIGZpbGw9XCIjMjMxRjIwXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTI5My4wNTEgMjA0Ljg1NkMyOTMuMDQzIDIxMC43NTcgMjkwLjY5MyAyMTYuNDE0IDI4Ni41MTggMjIwLjU4M0MyODIuMzQyIDIyNC43NTMgMjc2LjY4MyAyMjcuMDk1IDI3MC43ODIgMjI3LjA5NUMyNjkuMjE5IDIyNy4wOTMgMjY3LjY2MiAyMjYuOTMgMjY2LjEzMyAyMjYuNjA4QzI2NS41OTUgMjI2LjQ4NiAyNjUuMDY3IDIyNi4zNTQgMjY0LjUzOSAyMjYuMjAyQzI2MS4zMSAyMjUuMjU2IDI1OC4zMzcgMjIzLjU5MiAyNTUuODQxIDIyMS4zMzVDMjUzLjM0NSAyMTkuMDc5IDI1MS4zOTIgMjE2LjI4NyAyNTAuMTI2IDIxMy4xNjlDMjQ5LjYzNyAyMTEuOTY0IDI0OS4yNTYgMjEwLjcxNyAyNDguOTkgMjA5LjQ0NEMyNDguMjY3IDIwNi4wNjIgMjQ4LjM0NCAyMDIuNTU4IDI0OS4yMTIgMTk5LjIxQzI1MC4wODEgMTk1Ljg2MyAyNTEuNzE4IDE5Mi43NjQgMjUzLjk5NCAxOTAuMTU5QzI1NC4yMzcgMTg5Ljg3NSAyNTQuNDkxIDE4OS42MDEgMjU0Ljc0NSAxODkuMzQ3QzI1OC4xNDYgMTg1LjggMjYyLjYzMSAxODMuNDg2IDI2Ny40OTMgMTgyLjc3QzI2OC4yOTMgMTgyLjY0NCAyNjkuMSAxODIuNTY5IDI2OS45MDkgMTgyLjU0N0MyNzAuMjAzIDE4Mi41NDcgMjcwLjQ4NyAxODIuNTQ3IDI3MC43ODIgMTgyLjU0N0MyNzQuNTE0IDE4Mi41NDYgMjc4LjE4OCAxODMuNDgzIDI4MS40NjMgMTg1LjI3M0MyODQuNzM5IDE4Ny4wNjIgMjg3LjUxMyAxODkuNjQ3IDI4OS41MjkgMTkyLjc4OEMyODkuODMzIDE5My4yNzUgMjkwLjEyOCAxOTMuODAzIDI5MC40MDIgMTk0LjI4QzI5Mi4xNTUgMTk3LjUyOSAyOTMuMDY2IDIwMS4xNjUgMjkzLjA1MSAyMDQuODU2WlwiXG4gICAgICAgIGZpbGw9XCJ3aGl0ZVwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yNzAuNzgyIDIyNy42NDNDMjY5LjE4NSAyMjcuNjQyIDI2Ny41OTQgMjI3LjQ3NSAyNjYuMDMxIDIyNy4xNDZDMjY1LjQ3MyAyMjcuMDI0IDI2NC45MzUgMjI2Ljg5MiAyNjQuMzk3IDIyNi43M0MyNjEuMTA1IDIyNS43NSAyNTguMDc1IDIyNC4wNDQgMjU1LjUyOSAyMjEuNzM3QzI1Mi45ODQgMjE5LjQzMSAyNTAuOTg4IDIxNi41ODMgMjQ5LjY5IDIxMy40MDNDMjQ5LjE4NSAyMTIuMTY5IDI0OC43OTUgMjEwLjg5MSAyNDguNTIzIDIwOS41ODZDMjQ4LjE5NSAyMDguMDMxIDI0OC4wMjkgMjA2LjQ0NiAyNDguMDI1IDIwNC44NTZDMjQ4LjAyOSAxOTkuMzUyIDI1MC4wMjMgMTk0LjAzNSAyNTMuNjM4IDE4OS44ODVDMjUzLjg5MiAxODkuNTkxIDI1NC4xNDYgMTg5LjMxNyAyNTQuNDEgMTg5LjA1M0MyNTcuODk5IDE4NS40MzcgMjYyLjQ4MyAxODMuMDcyIDI2Ny40NTIgMTgyLjMyM0MyNjguMjczIDE4Mi4yMDIgMjY5LjEgMTgyLjEyNyAyNjkuOTI5IDE4Mi4xSDI3MC44MTJDMjc0LjYyNiAxODIuMTAxIDI3OC4zNzkgMTgzLjA2MiAyODEuNzI1IDE4NC44OTRDMjg1LjA3IDE4Ni43MjYgMjg3LjkwMSAxODkuMzcxIDI4OS45NTUgMTkyLjU4NUMyOTAuMjcgMTkzLjA4MiAyOTAuNTc0IDE5My42IDI5MC44NDggMTk0LjEwOEMyOTMuMjc0IDE5OC42MjYgMjk0LjEwNCAyMDMuODMyIDI5My4yMDMgMjA4Ljg4MUMyOTIuMzAyIDIxMy45MyAyODkuNzI0IDIxOC41MjcgMjg1Ljg4NSAyMjEuOTI5QzI4NC45NTkgMjIyLjc2NyAyODMuOTYgMjIzLjUyMSAyODIuOTAxIDIyNC4xODJDMjc5LjI2OCAyMjYuNDU1IDI3NS4wNjcgMjI3LjY1NSAyNzAuNzgyIDIyNy42NDNaTTI3MC43ODIgMTgzLjA5NUgyNjkuOTI5QzI2OS4xNDEgMTgzLjExOSAyNjguMzU0IDE4My4xOSAyNjcuNTc0IDE4My4zMDhDMjYyLjgyNyAxODQuMDI0IDI1OC40NDcgMTg2LjI4MSAyNTUuMTEgMTg5LjczM0MyNTQuODYgMTg5Ljk5NyAyNTQuNjE2IDE5MC4yNjEgMjU0LjM3OSAxOTAuNTI1QzI1MS45NzQgMTkzLjI3OCAyNTAuMzAxIDE5Ni41OTMgMjQ5LjUxNSAyMDAuMTYzQzI0OC43MjkgMjAzLjczMyAyNDguODU1IDIwNy40NDQgMjQ5Ljg4MiAyMTAuOTUzQzI1MC45MDkgMjE0LjQ2MiAyNTIuODAzIDIxNy42NTUgMjU1LjM4OSAyMjAuMjM5QzI1Ny45NzYgMjIyLjgyMiAyNjEuMTcyIDIyNC43MTIgMjY0LjY4MiAyMjUuNzM1QzI2NS4xOTkgMjI1Ljg4NyAyNjUuNjk3IDIyNi4wMTkgMjY2LjIzNCAyMjYuMTMxQzI2Ny43MjkgMjI2LjQ0OCAyNjkuMjUzIDIyNi42MDggMjcwLjc4MiAyMjYuNjA4QzI3NC41MzUgMjI2LjU5OSAyNzguMjIyIDIyNS42MjEgMjgxLjQ4NSAyMjMuNzY3QzI4NC43NDkgMjIxLjkxMyAyODcuNDc3IDIxOS4yNDcgMjg5LjQwNyAyMTYuMDI4QzI5MS4zMzYgMjEyLjgwOSAyOTIuNCAyMDkuMTQ2IDI5Mi40OTYgMjA1LjM5NEMyOTIuNTkyIDIwMS42NDIgMjkxLjcxNyAxOTcuOTI5IDI4OS45NTUgMTk0LjYxNUMyODkuNjkxIDE5NC4xMDggMjg5LjM5NyAxOTMuNiAyODkuMTAyIDE5My4xNDNDMjg3LjE0IDE5MC4wNjMgMjg0LjQzMyAxODcuNTI2IDI4MS4yMyAxODUuNzdDMjc4LjAyOCAxODQuMDE0IDI3NC40MzQgMTgzLjA5MyAyNzAuNzgyIDE4My4wOTVaXCJcbiAgICAgICAgZmlsbD1cIiMyMzFGMjBcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMjY4LjA2MiAxOTYuMjhDMjY3LjkzIDE5Ni4zOTEgMjY2LjY3MSAxOTcuNDY3IDI2NC44MjQgMTk5LjA5MUMyNTkuNjk1IDIwMy41NDUgMjU0Ljc5MyAyMDguMjU0IDI1MC4xMzcgMjEzLjJDMjQ5LjY0NyAyMTEuOTk1IDI0OS4yNjYgMjEwLjc0OCAyNDkgMjA5LjQ3NUMyNDguMjc4IDIwNi4wOTIgMjQ4LjM1NCAyMDIuNTg4IDI0OS4yMjIgMTk5LjI0MUMyNTAuMDkxIDE5NS44OTMgMjUxLjcyOCAxOTIuNzk0IDI1NC4wMDQgMTkwLjE5QzI1NC4yNDcgMTg5LjkwNSAyNTQuNTAxIDE4OS42MzEgMjU0Ljc1NSAxODkuMzc4QzI1OC42NyAxOTAuMjI2IDI2Mi4zNjkgMTkxLjg2NiAyNjUuNjI2IDE5NC4xOTlDMjY2LjQ4MyAxOTQuODM3IDI2Ny4yOTcgMTk1LjUzMiAyNjguMDYyIDE5Ni4yOFpcIlxuICAgICAgICBmaWxsPVwiI0M0RkM2OFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yNTAuMTI2IDIxMy43MTdIMjUwLjA0NUMyNDkuOTYgMjEzLjcwNCAyNDkuODggMjEzLjY2OSAyNDkuODEyIDIxMy42MTZDMjQ5Ljc0NSAyMTMuNTYzIDI0OS42OTIgMjEzLjQ5MyAyNDkuNjYgMjEzLjQxM0MyNDkuMTU1IDIxMi4xNzkgMjQ4Ljc2NCAyMTAuOTAxIDI0OC40OTIgMjA5LjU5NkMyNDguMTY1IDIwOC4wNDEgMjQ3Ljk5OCAyMDYuNDU2IDI0Ny45OTUgMjA0Ljg2N0MyNDcuOTk5IDE5OS4zNjIgMjQ5Ljk5MiAxOTQuMDQ1IDI1My42MDggMTg5Ljg5NUMyNTMuODYyIDE4OS42MTEgMjU0LjExNSAxODkuMzI3IDI1NC4zNzkgMTg5LjA2M0MyNTQuNDM5IDE4OC45OTkgMjU0LjUxNSAxODguOTUzIDI1NC41OTkgMTg4LjkyOEMyNTQuNjgzIDE4OC45MDMgMjU0Ljc3MSAxODguOTAxIDI1NC44NTYgMTg4LjkyMUMyNTguODM5IDE4OS43OTEgMjYyLjYwMyAxOTEuNDYzIDI2NS45MiAxOTMuODMzQzI2Ni43OTQgMTk0LjQ3NSAyNjcuNjI4IDE5NS4xNyAyNjguNDE3IDE5NS45MTRDMjY4LjUwNCAxOTUuOTk5IDI2OC41NTkgMTk2LjExMiAyNjguNTcgMTk2LjIzM0MyNjguNTgxIDE5Ni4zNTQgMjY4LjU0OCAxOTYuNDc1IDI2OC40NzggMTk2LjU3NEMyNjguNDQ1IDE5Ni42MyAyNjguNCAxOTYuNjc5IDI2OC4zNDYgMTk2LjcxNkMyNjguMTAyIDE5Ni45MTkgMjY2Ljg5NCAxOTcuOTU0IDI2NS4xNDggMTk5LjQ5N0MyNjAuMDMyIDIwMy45MzcgMjU1LjE0NCAyMDguNjMyIDI1MC41MDIgMjEzLjU2NUMyNTAuNDUzIDIxMy42MTQgMjUwLjM5NCAyMTMuNjUzIDI1MC4zMyAyMTMuNjc5QzI1MC4yNjUgMjEzLjcwNiAyNTAuMTk2IDIxMy43MTggMjUwLjEyNiAyMTMuNzE3Wk0yNTQuOTA3IDE4OS45NjZMMjU0LjM3OSAxOTAuNTQ1QzI1Mi4xNTcgMTkzLjA4OSAyNTAuNTU4IDE5Ni4xMTYgMjQ5LjcwOSAxOTkuMzg2QzI0OC44NTkgMjAyLjY1NiAyNDguNzgzIDIwNi4wNzkgMjQ5LjQ4NyAyMDkuMzgzQzI0OS42ODcgMjEwLjM2IDI0OS45NjIgMjExLjMyMSAyNTAuMzA5IDIxMi4yNTZDMjU0LjU4MiAyMDcuNTk3IDI2MC45NjcgMjAxLjgzMiAyNjQuNTE5IDE5OC43MjZDMjY1LjgwOCAxOTcuNTg5IDI2Ni44MDMgMTk2LjY5NiAyNjcuMzQxIDE5Ni4yNTlDMjY2LjY5NCAxOTUuNjg1IDI2Ni4wMTcgMTk1LjE0NiAyNjUuMzExIDE5NC42NDVDMjYyLjE5IDE5Mi40MDggMjU4LjY1MiAxOTAuODE3IDI1NC45MDcgMTg5Ljk2NlpcIlxuICAgICAgICBmaWxsPVwiIzIzMUYyMFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yOTAuNDAyIDE5NC4zMjFDMjg3Ljc3MyAxOTQuMDY3IDI4NS42MzEgMTk4LjM4MSAyODMuMjE1IDE5OC41MDJDMjgwLjE1IDE5OC41MTEgMjc3LjA5MiAxOTguODAzIDI3NC4wOCAxOTkuMzc1QzI3MS45MzkgMTk5LjgwMiAyNjguMjA0IDE5OC41NTMgMjY4LjIwNCAxOTguNTUzTDI2Ny45OCAxOTMuMzQ2TDI2Ny41MzQgMTgyLjgzMUMyNjguMzMzIDE4Mi43MDUgMjY5LjE0IDE4Mi42MyAyNjkuOTQ5IDE4Mi42MDhDMjcwLjI0NCAxODIuNjA4IDI3MC41MjggMTgyLjYwOCAyNzAuODIyIDE4Mi42MDhDMjc0LjU1NSAxODIuNjA3IDI3OC4yMjggMTgzLjU0NCAyODEuNTA0IDE4NS4zMzRDMjg0Ljc4IDE4Ny4xMjMgMjg3LjU1MyAxODkuNzA3IDI4OS41NjkgMTkyLjg0OUMyODkuODMzIDE5My4zMTYgMjkwLjEyOCAxOTMuODEzIDI5MC40MDIgMTk0LjMyMVpcIlxuICAgICAgICBmaWxsPVwiI0M0RkM2OFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yNzMuMDM1IDE5OS45NzRDMjcxLjMzMSAxOTkuODkyIDI2OS42NDcgMTk5LjU3NSAyNjguMDMxIDE5OS4wM0MyNjcuOTM0IDE5OC45OTggMjY3Ljg1IDE5OC45MzcgMjY3Ljc4OCAxOTguODU1QzI2Ny43MjYgMTk4Ljc3NCAyNjcuNjkxIDE5OC42NzYgMjY3LjY4NiAxOTguNTc0TDI2Ni45NDUgMTgyLjg1MUMyNjYuOTQxIDE4Mi43MjcgMjY2Ljk4MSAxODIuNjA1IDI2Ny4wNiAxODIuNTA4QzI2Ny4xMzggMTgyLjQxMSAyNjcuMjQ5IDE4Mi4zNDUgMjY3LjM3MSAxODIuMzIzQzI2OC4xOTUgMTgyLjIwMiAyNjkuMDI2IDE4Mi4xMjggMjY5Ljg1OCAxODIuMUgyNzAuNzQxQzI3NC41NjcgMTgyLjA4OSAyNzguMzM1IDE4My4wNDQgMjgxLjY5NCAxODQuODc3QzI4NS4wNTIgMTg2LjcxIDI4Ny44OTQgMTg5LjM2MSAyODkuOTU1IDE5Mi41ODVDMjkwLjI3IDE5My4wODIgMjkwLjU3NCAxOTMuNiAyOTAuODQ4IDE5NC4xMDhDMjkwLjg5NiAxOTQuMTg3IDI5MC45MjEgMTk0LjI3OSAyOTAuOTIxIDE5NC4zNzFDMjkwLjkyMSAxOTQuNDY0IDI5MC44OTYgMTk0LjU1NSAyOTAuODQ4IDE5NC42MzVDMjkwLjc5MyAxOTQuNzA4IDI5MC43MiAxOTQuNzY3IDI5MC42MzcgMTk0LjgwNkMyOTAuNTU0IDE5NC44NDQgMjkwLjQ2MyAxOTQuODYzIDI5MC4zNzEgMTk0Ljg1OUMyODkuMjI0IDE5NC43MzcgMjg4LjAzNyAxOTUuODIzIDI4Ni44OSAxOTYuODg5QzI4NS43NDMgMTk3Ljk1NCAyODQuNTc2IDE5OS4wMSAyODMuMjU2IDE5OS4wNjFDMjgwLjE5MSAxOTkuMDY3IDI3Ny4xMzMgMTk5LjM1NiAyNzQuMTIxIDE5OS45MjNDMjczLjc2MSAxOTkuOTc1IDI3My4zOTggMTk5Ljk5MiAyNzMuMDM1IDE5OS45NzRaTTI2OC42OTEgMTk4LjE2OEMyNjkuNjI1IDE5OC40NjIgMjcyLjMzNSAxOTkuMTgzIDI3My45NjkgMTk4Ljg3OEMyNzcuMDI0IDE5OC4zMDEgMjgwLjEyNiAxOTguMDA1IDI4My4yMzYgMTk3Ljk5NUMyODQuMTggMTk3Ljk5NSAyODUuMTc0IDE5Ny4wNTEgMjg2LjIyIDE5Ni4wODdDMjg3LjE0MSAxOTUuMDczIDI4OC4zMDQgMTk0LjMwOCAyODkuNiAxOTMuODY0TDI4OS4xMzMgMTkzLjA5M0MyODcuMDgzIDE4OS45MDMgMjg0LjIzNiAxODcuMzA1IDI4MC44NzIgMTg1LjU1NUMyNzcuNTA5IDE4My44MDUgMjczLjc0OCAxODIuOTY0IDI2OS45NiAxODMuMTE1QzI2OS4zMiAxODMuMTE1IDI2OC42ODEgMTgzLjE4NiAyNjguMDUxIDE4My4yNjdMMjY4LjY5MSAxOTguMTY4WlwiXG4gICAgICAgIGZpbGw9XCIjMjMxRjIwXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTI5My4wNTEgMjA0Ljg1NkMyOTMuMDQxIDIwOC42MjUgMjkyLjA4MSAyMTIuMzMgMjkwLjI1OSAyMTUuNjI4QzI4OC40MzcgMjE4LjkyNiAyODUuODEyIDIyMS43MTEgMjgyLjYyNyAyMjMuNzI1TDI2OS43NjcgMjAwLjU0M0wyNjcuODg5IDE5Ny4xNTNMMjY4LjkwNCAxOTYuOTVDMjY5LjU3NCAxOTYuODA3IDI4My4xNjUgMTkyLjYxNiAyODkuNTU5IDE5Mi44OUMyODkuODY0IDE5My4zNzcgMjkwLjE1OCAxOTMuOTA1IDI5MC40MzIgMTk0LjM4MkMyOTIuMTU5IDE5Ny42MDMgMjkzLjA1OCAyMDEuMjAyIDI5My4wNTEgMjA0Ljg1NlpcIlxuICAgICAgICBmaWxsPVwid2hpdGVcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMjgyLjYyNyAyMjQuMjMzSDI4Mi41MDVDMjgyLjQzNyAyMjQuMjE3IDI4Mi4zNzMgMjI0LjE4OCAyODIuMzE3IDIyNC4xNDZDMjgyLjI2MSAyMjQuMTA0IDI4Mi4yMTQgMjI0LjA1IDI4Mi4xOCAyMjMuOTg5TDI2Ny40NDIgMTk3LjQxNkMyNjcuNDAxIDE5Ny4zMzggMjY3LjM4IDE5Ny4yNTEgMjY3LjM4MiAxOTcuMTYyQzI2Ny4zODMgMTk3LjA3NCAyNjcuNDA4IDE5Ni45ODcgMjY3LjQ1MyAxOTYuOTExQzI2Ny40OTcgMTk2LjgzNCAyNjcuNTYxIDE5Ni43NzEgMjY3LjYzNyAxOTYuNzI2QzI2Ny43MTQgMTk2LjY4MSAyNjcuOCAxOTYuNjU3IDI2Ny44ODkgMTk2LjY1NUgyNjcuOTRMMjY4Ljc3MiAxOTYuNDgzQzI2OC44NTMgMTk2LjQ4MyAyNjkuMTU4IDE5Ni4zODEgMjY5LjY0NSAxOTYuMjM5QzI3OS4xMjUgMTkzLjUzOSAyODUuODI0IDE5Mi4yNCAyODkuNTQ5IDE5Mi4zNjJDMjg5LjYzMSAxOTIuMzYzIDI4OS43MTEgMTkyLjM4NiAyODkuNzgyIDE5Mi40MjZDMjg5Ljg1MyAxOTIuNDY3IDI4OS45MTIgMTkyLjUyNSAyODkuOTU1IDE5Mi41OTVDMjkwLjI3IDE5My4wOTMgMjkwLjU3NCAxOTMuNjEgMjkwLjg0OCAxOTQuMTE4QzI5My4yNzQgMTk4LjYzNyAyOTQuMTA0IDIwMy44NDIgMjkzLjIwMyAyMDguODkxQzI5Mi4zMDIgMjEzLjk0IDI4OS43MjQgMjE4LjUzOCAyODUuODg1IDIyMS45MzlDMjg0Ljk1OSAyMjIuNzc3IDI4My45NiAyMjMuNTMxIDI4Mi45MDEgMjI0LjE5MkMyODIuODE1IDIyNC4yMzEgMjgyLjcyIDIyNC4yNDUgMjgyLjYyNyAyMjQuMjMzWk0yNjguNjYgMTk3LjQ5OEwyODIuODA5IDIyMy4wMzVDMjgzLjY1MyAyMjIuNDcxIDI4NC40NTYgMjIxLjg1MSAyODUuMjE1IDIyMS4xNzhDMjg4Ljg3OCAyMTcuOTI5IDI5MS4zMzkgMjEzLjU0IDI5Mi4xOTkgMjA4LjcyQzI5My4wNTkgMjAzLjkgMjkyLjI2OCAxOTguOTMgMjg5Ljk1NSAxOTQuNjE1QzI4OS43MzIgMTk0LjE4OSAyODkuNDg4IDE5My43ODMgMjg5LjI0NSAxOTMuMzc3QzI4NS41NSAxOTMuMzc3IDI3OS4wOTUgMTk0LjYxNSAyNjkuOTYgMTk3LjIyNEwyNjkuMDE2IDE5Ny40ODdMMjY4LjY2IDE5Ny40OThaXCJcbiAgICAgICAgZmlsbD1cIiMyMzFGMjBcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMjY4LjA2MSAxOTYuMjhDMjY4LjA2MSAxOTYuMzUxIDI2Ny45OSAxOTYuNjQ1IDI2Ny44ODkgMTk3LjEzMkMyNjcuNzM3IDE5Ny45MTQgMjY3LjQ5MyAxOTkuMTYyIDI2Ny4yMTkgMjAwLjgzN0MyNjYuMjA0IDIwNy4xNSAyNjQuNjgyIDIxOC42NSAyNjYuMTMzIDIyNi42MjhDMjY1LjU5NSAyMjYuNTA2IDI2NS4wNjcgMjI2LjM3NCAyNjQuNTM5IDIyNi4yMjJDMjYxLjMxIDIyNS4yNzYgMjU4LjMzNyAyMjMuNjEzIDI1NS44NDEgMjIxLjM1NkMyNTMuMzQ1IDIxOS4wOTkgMjUxLjM5MiAyMTYuMzA3IDI1MC4xMjYgMjEzLjE5QzI0OS42MzcgMjExLjk4NCAyNDkuMjU2IDIxMC43MzggMjQ4Ljk5IDIwOS40NjVDMjUwLjYzNyAyMDYuNjkgMjUyLjkzMiAyMDQuMzU3IDI1NS42NzggMjAyLjY2NEMyNTguNDQ5IDIwMC44NCAyNjEuMzM1IDE5OS4xOTYgMjY0LjMxNiAxOTcuNzQxQzI2NS41MTMgMTk3LjEzMiAyNjYuNzY4IDE5Ni42NDIgMjY4LjA2MSAxOTYuMjhaXCJcbiAgICAgICAgZmlsbD1cIndoaXRlXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTI2Ni4xMzMgMjI3LjE1NkgyNjYuMDIxQzI2NS40NzMgMjI3LjAzNCAyNjQuOTM1IDIyNi45MDIgMjY0LjM5NyAyMjYuNzRDMjYxLjEwNCAyMjUuNzU5IDI1OC4wNzMgMjI0LjA1MSAyNTUuNTI3IDIyMS43NDNDMjUyLjk4MiAyMTkuNDM1IDI1MC45ODcgMjE2LjU4NSAyNDkuNjkgMjEzLjQwM0MyNDkuMTg1IDIxMi4xNjkgMjQ4Ljc5NSAyMTAuODkxIDI0OC41MjMgMjA5LjU4NkMyNDguNDk0IDIwOS40NjYgMjQ4LjUxMiAyMDkuMzM5IDI0OC41NzMgMjA5LjIzMUMyNTAuMjczIDIwNi4zOTQgMjUyLjYyNiAyMDQuMDAzIDI1NS40MzUgMjAyLjI1OEMyNTguMjIgMjAwLjQyIDI2MS4xMjMgMTk4Ljc2NSAyNjQuMTIzIDE5Ny4zMDVDMjY1LjM2NCAxOTYuNjc0IDI2Ni42NjIgMTk2LjE2NCAyNjguMDAxIDE5NS43ODJDMjY4LjA3NCAxOTUuNzY3IDI2OC4xNSAxOTUuNzY5IDI2OC4yMjIgMTk1Ljc4OEMyNjguMjk0IDE5NS44MDggMjY4LjM2MSAxOTUuODQ0IDI2OC40MTcgMTk1Ljg5NEMyNjguNDc0IDE5NS45NDEgMjY4LjUyIDE5NS45OTkgMjY4LjU1MiAxOTYuMDY2QzI2OC41ODMgMTk2LjEzMyAyNjguNiAxOTYuMjA2IDI2OC41OTkgMTk2LjI4QzI2OC41OTkgMTk2LjQzMiAyNjguNTE4IDE5Ni43MzYgMjY4LjQxNyAxOTcuMjM0QzI2OC40MTcgMTk3LjIzNCAyNjguNDE3IDE5Ny4yMzQgMjY4LjQxNyAxOTcuMjk1QzI2OC4yNjUgMTk4LjA4NiAyNjguMDIxIDE5OS4zMjUgMjY3Ljc1NyAyMDAuOTI4QzI2Ni43NDIgMjA3LjA5OSAyNjUuMjQgMjE4LjYzIDI2Ni42NzEgMjI2LjU0N0MyNjYuNjg2IDIyNi42MjkgMjY2LjY4MSAyMjYuNzEzIDI2Ni42NTYgMjI2Ljc5M0MyNjYuNjMxIDIyNi44NzIgMjY2LjU4OCAyMjYuOTQ1IDI2Ni41MjkgMjI3LjAwNEMyNjYuNDc3IDIyNy4wNTUgMjY2LjQxNSAyMjcuMDk1IDI2Ni4zNDcgMjI3LjEyMUMyNjYuMjc5IDIyNy4xNDcgMjY2LjIwNiAyMjcuMTU5IDI2Ni4xMzMgMjI3LjE1NlpNMjQ5LjUyOCAyMDkuNTY2QzI0OS43NjkgMjEwLjc0MiAyNTAuMTA5IDIxMS44OTcgMjUwLjU0MyAyMTMuMDE3QzI1MS43ODUgMjE2LjA2MSAyNTMuNjk2IDIxOC43ODcgMjU2LjEzNSAyMjAuOTkyQzI1OC41NzQgMjIzLjE5NyAyNjEuNDc3IDIyNC44MjUgMjY0LjYzMSAyMjUuNzU1TDI2NS40NTMgMjI1Ljk3OEMyNjQuMjE1IDIxNy45NiAyNjUuNjY2IDIwNi44MTUgMjY2LjY3MSAyMDAuNzY2QzI2Ni45NDUgMTk5LjEzMiAyNjcuMTg5IDE5Ny44NDMgMjY3LjM0MSAxOTcuMDUxQzI2Ni4zNjYgMTk3LjM5OCAyNjUuNDEgMTk3Ljc5OCAyNjQuNDc5IDE5OC4yNDlDMjYxLjUxOSAxOTkuNjk3IDI1OC42NTUgMjAxLjMzMSAyNTUuOTAyIDIwMy4xNDFDMjUzLjMxMSAyMDQuNzY0IDI1MS4xMyAyMDYuOTYzIDI0OS41MjggMjA5LjU2NlpcIlxuICAgICAgICBmaWxsPVwiIzIzMUYyMFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yODUuNTUgMjIxLjUyM0MyODEuNDgxIDIyNS4xMzQgMjc2LjIyMiAyMjcuMTE4IDI3MC43ODIgMjI3LjA5NUMyNjkuMjE5IDIyNy4wOTMgMjY3LjY2MiAyMjYuOTMgMjY2LjEzMyAyMjYuNjA4QzI2NS41OTUgMjI2LjQ4NiAyNjUuMDY3IDIyNi4zNTQgMjY0LjUzOSAyMjYuMjAyQzI2NC4wNTEgMjIxLjY2MSAyNjMuOTU5IDIxNy4wODYgMjY0LjI2NSAyMTIuNTNDMjY0LjU5OCAyMDguNDc2IDI2NS4zNTcgMjA0LjQ2OCAyNjYuNTI5IDIwMC41NzNDMjY2Ljk1NyAxOTkuMTA1IDI2Ny40NjYgMTk3LjY2MiAyNjguMDUxIDE5Ni4yNDlDMjY4LjA1MSAxOTYuMjQ5IDI2OC4zNDYgMTk2LjQ3MiAyNjguODYzIDE5Ni45MDlDMjY5LjM4MSAxOTcuMzQ1IDI3MC4yODQgMTk4LjEyNyAyNzEuMjk5IDE5OS4wNzFDMjc0LjkxNiAyMDIuMzQ2IDI3OC4wNjQgMjA2LjEwMyAyODAuNjU4IDIxMC4yMzZDMjgyLjc1IDIxMy43ODEgMjg0LjM5NCAyMTcuNTcyIDI4NS41NSAyMjEuNTIzWlwiXG4gICAgICAgIGZpbGw9XCIjQzRGQzY4XCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTI3MC43ODIgMjI3LjY0M0MyNjkuMTg1IDIyNy42NDIgMjY3LjU5NCAyMjcuNDc1IDI2Ni4wMzEgMjI3LjE0NkMyNjUuNDczIDIyNy4wMjQgMjY0LjkzNSAyMjYuODkyIDI2NC4zOTcgMjI2LjczQzI2NC4yOTkgMjI2LjcwMyAyNjQuMjExIDIyNi42NDcgMjY0LjE0NiAyMjYuNTY5QzI2NC4wODEgMjI2LjQ5MSAyNjQuMDQxIDIyNi4zOTUgMjY0LjAzMiAyMjYuMjkzQzI2My41NDggMjIxLjcyMiAyNjMuNDU2IDIxNy4xMTcgMjYzLjc1OCAyMTIuNTNDMjY0LjA5NCAyMDguNDQxIDI2NC44NiAyMDQuNCAyNjYuMDQyIDIwMC40NzJDMjY2LjY5MSAxOTguMzEgMjY3LjI4IDE5Ni44MjggMjY3LjU2NCAxOTYuMTI3QzI2Ny41OTggMTk2LjA1NCAyNjcuNjQzIDE5NS45ODYgMjY3LjY5NiAxOTUuOTI0QzI2Ny43OTEgMTk1Ljg0NCAyNjcuOTEyIDE5NS44IDI2OC4wMzYgMTk1LjhDMjY4LjE2MSAxOTUuOCAyNjguMjgxIDE5NS44NDQgMjY4LjM3NiAxOTUuOTI0TDI2OS4xOTggMTk2LjYwNEMyNjkuNTk0IDE5Ni45MzkgMjcwLjQ1NyAxOTcuNjcgMjcxLjY1NSAxOTguNzg3QzI3NS4zMjcgMjAyLjA3NyAyNzguNTI1IDIwNS44NjIgMjgxLjE1NSAyMTAuMDMzQzI4My4yNjEgMjEzLjU5NyAyODQuOTE4IDIxNy40MDkgMjg2LjA4OCAyMjEuMzgxQzI4Ni4xMTQgMjIxLjQ3MiAyODYuMTE0IDIyMS41NjggMjg2LjA4OSAyMjEuNjU5QzI4Ni4wNjQgMjIxLjc1MSAyODYuMDE1IDIyMS44MzMgMjg1Ljk0NiAyMjEuODk4QzI4NS4wMTQgMjIyLjczNCAyODQuMDEyIDIyMy40ODggMjgyLjk1MiAyMjQuMTUyQzI3OS4zMDggMjI2LjQ0NSAyNzUuMDg3IDIyNy42NTYgMjcwLjc4MiAyMjcuNjQzWk0yNjUuMDE2IDIyNS44NDdMMjY2LjIzNCAyMjYuMTUxQzI2Ny43MjkgMjI2LjQ2OCAyNjkuMjUzIDIyNi42MjggMjcwLjc4MiAyMjYuNjI4QzI3NC44OCAyMjYuNjMgMjc4Ljg5NSAyMjUuNDcyIDI4Mi4zNjMgMjIzLjI4OUMyODMuMjggMjIyLjcxNCAyODQuMTUzIDIyMi4wNjkgMjg0Ljk3MSAyMjEuMzZDMjgzLjgyOCAyMTcuNTc4IDI4Mi4yMzYgMjEzLjk0NiAyODAuMjMxIDIxMC41NEMyNzcuNjYzIDIwNi40NDYgMjc0LjU0NSAyMDIuNzIzIDI3MC45NjQgMTk5LjQ3N0MyNjkuNzg3IDE5OC4zODEgMjY4LjkzNCAxOTcuNjYgMjY4LjU0OSAxOTcuMzM1TDI2OC4yNzUgMTk3LjEwMkMyNjcuOTUgMTk3LjkxNCAyNjcuNTAzIDE5OS4xMzIgMjY3LjAxNiAyMDAuNzY2QzI2NS44NTEgMjA0LjYyNCAyNjUuMDk5IDIwOC41OTQgMjY0Ljc3MyAyMTIuNjExQzI2NC40OCAyMTcuMDIyIDI2NC41NjEgMjIxLjQ1IDI2NS4wMTYgMjI1Ljg0N1pcIlxuICAgICAgICBmaWxsPVwiIzIzMUYyMFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yNjkuOTA5IDE4Mi42MDhDMjY5LjY2MiAxODYuMjE4IDI2OS4yMjIgMTg5LjgxMyAyNjguNTg5IDE5My4zNzdDMjY4LjI5NSAxOTUuMTIyIDI2OC4wNjIgMTk2LjI4IDI2OC4wNjIgMTk2LjI4QzI2Ny4xNzcgMTk1LjY0MSAyNjYuMjU5IDE5NS4wNTIgMjY1LjMxMSAxOTQuNTEzQzI2MS43NzMgMTkyLjUyNiAyNTcuOTU5IDE5MS4wNzkgMjUzLjk5NCAxOTAuMjJDMjU0LjIzNyAxODkuOTM2IDI1NC40OTEgMTg5LjY2MiAyNTQuNzQ1IDE4OS40MDhDMjU4LjE0NiAxODUuODYxIDI2Mi42MzEgMTgzLjU0NyAyNjcuNDkzIDE4Mi44MzFDMjY4LjI5MyAxODIuNzA1IDI2OS4xIDE4Mi42MyAyNjkuOTA5IDE4Mi42MDhaXCJcbiAgICAgICAgZmlsbD1cIndoaXRlXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTI2OC4wNjEgMTk2Ljc4N0MyNjcuOTU2IDE5Ni43ODMgMjY3Ljg1MyAxOTYuNzQ4IDI2Ny43NjcgMTk2LjY4NkMyNjYuOSAxOTYuMDYgMjY1Ljk5OSAxOTUuNDg0IDI2NS4wNjcgMTk0Ljk2QzI2MS41NzggMTkyLjk5NCAyNTcuODE1IDE5MS41NjEgMjUzLjkwMiAxOTAuNzA3QzI1My44MTcgMTkwLjY4OSAyNTMuNzM4IDE5MC42NDkgMjUzLjY3NCAxOTAuNTlDMjUzLjYwOSAxOTAuNTMxIDI1My41NjIgMTkwLjQ1NiAyNTMuNTM3IDE5MC4zNzJDMjUzLjUwOCAxOTAuMjkgMjUzLjUwMSAxOTAuMjAyIDI1My41MTcgMTkwLjExN0MyNTMuNTM0IDE5MC4wMzEgMjUzLjU3MiAxODkuOTUxIDI1My42MjggMTg5Ljg4NUMyNTMuODgyIDE4OS42MDEgMjU0LjEzNiAxODkuMzE3IDI1NC40IDE4OS4wNTNDMjU3Ljg4OSAxODUuNDM3IDI2Mi40NzMgMTgzLjA3MiAyNjcuNDQyIDE4Mi4zMjNDMjY4LjI2MyAxODIuMjAyIDI2OS4wOSAxODIuMTI3IDI2OS45MTkgMTgyLjFDMjcwLjA1OCAxODIuMDk2IDI3MC4xOTMgMTgyLjE0NyAyNzAuMjk0IDE4Mi4yNDJDMjcwLjM0NCAxODIuMjkzIDI3MC4zODMgMTgyLjM1MyAyNzAuNDA3IDE4Mi40MkMyNzAuNDMyIDE4Mi40ODYgMjcwLjQ0MiAxODIuNTU3IDI3MC40MzcgMTgyLjYyOEMyNzAuMTg3IDE4Ni4yNjIgMjY5Ljc0MyAxODkuODgxIDI2OS4xMDcgMTkzLjQ2OEMyNjguODEzIDE5NS4yMTQgMjY4LjU3OSAxOTYuMzcxIDI2OC41NzkgMTk2LjM3MUMyNjguNTY1IDE5Ni40NTUgMjY4LjUzIDE5Ni41MzMgMjY4LjQ3NyAxOTYuNTk5QzI2OC40MjMgMTk2LjY2NSAyNjguMzU0IDE5Ni43MTYgMjY4LjI3NSAxOTYuNzQ3QzI2OC4yMDcgMTk2Ljc3MyAyNjguMTM0IDE5Ni43ODcgMjY4LjA2MSAxOTYuNzg3Wk0yNTQuOTQ4IDE4OS45MTZDMjU4LjY2NCAxOTAuNzk4IDI2Mi4yMzkgMTkyLjE5OCAyNjUuNTY1IDE5NC4wNzdDMjY2LjMwNiAxOTQuNDkzIDI2Ny4wMTYgMTk0Ljk0IDI2Ny43MTYgMTk1LjQwN0MyNjcuODA4IDE5NC45MDkgMjY3Ljk0IDE5NC4xNzkgMjY4LjA4MiAxOTMuMjk2QzI2OC41NjkgMTkwLjQxMyAyNjkuMTc4IDE4Ni4zODMgMjY5LjM3MSAxODMuMTQ2QzI2OC43NjIgMTgzLjE0NiAyNjguMTYzIDE4My4yNDcgMjY3LjU3NCAxODMuMzM4QzI2Mi44MjcgMTg0LjA1NCAyNTguNDQ3IDE4Ni4zMTIgMjU1LjExIDE4OS43NjNMMjU0Ljk0OCAxODkuOTE2WlwiXG4gICAgICAgIGZpbGw9XCIjMjMxRjIwXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTI2OC4wNjEgMjAwLjk0OUMyNzAuMTY0IDIwMC45NDkgMjcxLjg2OCAxOTkuMjQ1IDI3MS44NjggMTk3LjE0MkMyNzEuODY4IDE5NS4wNCAyNzAuMTY0IDE5My4zMzYgMjY4LjA2MSAxOTMuMzM2QzI2NS45NTkgMTkzLjMzNiAyNjQuMjU1IDE5NS4wNCAyNjQuMjU1IDE5Ny4xNDJDMjY0LjI1NSAxOTkuMjQ1IDI2NS45NTkgMjAwLjk0OSAyNjguMDYxIDIwMC45NDlaXCJcbiAgICAgICAgZmlsbD1cIndoaXRlXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTI2OC4wNjEgMjAxLjQ1NkMyNjcuMjA4IDIwMS40NTYgMjY2LjM3NCAyMDEuMjAzIDI2NS42NjUgMjAwLjcyOUMyNjQuOTU2IDIwMC4yNTUgMjY0LjQwMyAxOTkuNTgxIDI2NC4wNzYgMTk4Ljc5M0MyNjMuNzUgMTk4LjAwNSAyNjMuNjY0IDE5Ny4xMzggMjYzLjgzMSAxOTYuMzAxQzI2My45OTcgMTk1LjQ2NCAyNjQuNDA4IDE5NC42OTUgMjY1LjAxMSAxOTQuMDkyQzI2NS42MTQgMTkzLjQ4OSAyNjYuMzgzIDE5My4wNzggMjY3LjIyIDE5Mi45MTJDMjY4LjA1NyAxOTIuNzQ1IDI2OC45MjQgMTkyLjgzIDI2OS43MTIgMTkzLjE1N0MyNzAuNTAxIDE5My40ODMgMjcxLjE3NCAxOTQuMDM2IDI3MS42NDggMTk0Ljc0NkMyNzIuMTIyIDE5NS40NTUgMjcyLjM3NSAxOTYuMjg5IDI3Mi4zNzUgMTk3LjE0MkMyNzIuMzczIDE5OC4yODYgMjcxLjkxNyAxOTkuMzgxIDI3MS4xMDkgMjAwLjE5QzI3MC4zIDIwMC45OTggMjY5LjIwNSAyMDEuNDUzIDI2OC4wNjEgMjAxLjQ1NlpNMjY4LjA2MSAxOTMuODU0QzI2Ny40MDkgMTkzLjg1NCAyNjYuNzcgMTk0LjA0OCAyNjYuMjI4IDE5NC40MUMyNjUuNjg1IDE5NC43NzMgMjY1LjI2MiAxOTUuMjg5IDI2NS4wMTMgMTk1Ljg5M0MyNjQuNzYzIDE5Ni40OTYgMjY0LjY5OSAxOTcuMTYgMjY0LjgyNyAxOTcuOEMyNjQuOTU1IDE5OC40NCAyNjUuMjcgMTk5LjAyOCAyNjUuNzMzIDE5OS40ODlDMjY2LjE5NSAxOTkuOTUgMjY2Ljc4NCAyMDAuMjYzIDI2Ny40MjQgMjAwLjM4OUMyNjguMDY1IDIwMC41MTUgMjY4LjcyOCAyMDAuNDQ4IDI2OS4zMzEgMjAwLjE5N0MyNjkuOTM0IDE5OS45NDYgMjcwLjQ0OCAxOTkuNTIyIDI3MC44MDkgMTk4Ljk3OEMyNzEuMTcgMTk4LjQzNCAyNzEuMzYyIDE5Ny43OTUgMjcxLjM2IDE5Ny4xNDJDMjcxLjM1OCAxOTYuMjY5IDI3MS4wMDkgMTk1LjQzMyAyNzAuMzkgMTk0LjgxNkMyNjkuNzcyIDE5NC4yIDI2OC45MzUgMTkzLjg1NCAyNjguMDYxIDE5My44NTRaXCJcbiAgICAgICAgZmlsbD1cIiMyMzFGMjBcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMjIwLjAxMSAyMjguNTI2QzIyMC44MzYgMjI3LjcyMSAyMjEuNzk4IDIyNy4wNzEgMjIyLjg1MyAyMjYuNjA4QzIyNC4zMzUgMjI2LjAzOSAyMjguNjU5IDIyMy45NjkgMjMyLjggMjI2LjYwOFwiXG4gICAgICAgIGZpbGw9XCJ3aGl0ZVwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yMjAuMDExIDIyOS4wMzRDMjE5LjkxMiAyMjkuMDMyIDIxOS44MTUgMjI5LjAwMiAyMTkuNzMzIDIyOC45NDZDMjE5LjY1MSAyMjguODkgMjE5LjU4NyAyMjguODExIDIxOS41NDkgMjI4LjcxOUMyMTkuNTExIDIyOC42MjggMjE5LjUwMSAyMjguNTI3IDIxOS41MiAyMjguNDI5QzIxOS41MzkgMjI4LjMzMiAyMTkuNTg3IDIyOC4yNDIgMjE5LjY1NiAyMjguMTcxQzIyMC41MzYgMjI3LjMxMSAyMjEuNTY5IDIyNi42MjMgMjIyLjcwMSAyMjYuMTQxTDIyMy4wNzcgMjI1Ljk4OUMyMjQuODczIDIyNS4yNzggMjI5LjA1NSAyMjMuNjAzIDIzMy4xMDUgMjI2LjE4MUMyMzMuMjE5IDIyNi4yNTMgMjMzLjMwMSAyMjYuMzY3IDIzMy4zMzEgMjI2LjQ5OEMyMzMuMzYyIDIyNi42MjkgMjMzLjMzOSAyMjYuNzY3IDIzMy4yNjcgMjI2Ljg4MkMyMzMuMTk2IDIyNi45OTYgMjMzLjA4MiAyMjcuMDc4IDIzMi45NTEgMjI3LjEwOEMyMzIuODE5IDIyNy4xMzkgMjMyLjY4MSAyMjcuMTE2IDIzMi41NjcgMjI3LjA0NEMyMjguOTU0IDIyNC43NCAyMjUuMjM5IDIyNi4yMjIgMjIzLjQzMiAyMjYuOTMzTDIyMy4wNDYgMjI3LjA4NUMyMjIuMDYgMjI3LjUyNSAyMjEuMTYgMjI4LjEzNyAyMjAuMzg3IDIyOC44OTFDMjIwLjMzNyAyMjguOTM5IDIyMC4yNzggMjI4Ljk3NiAyMjAuMjE0IDIyOUMyMjAuMTQ5IDIyOS4wMjUgMjIwLjA4IDIyOS4wMzYgMjIwLjAxMSAyMjkuMDM0WlwiXG4gICAgICAgIGZpbGw9XCIjMjMxRjIwXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTIyNi44NTIgMjcxLjI1OEMyMjYuMTkzIDI3MS4yNTggMjI1LjUzMyAyNzEuMjU4IDIyNC44NzMgMjcxLjIwN0MyMjQuNzM5IDI3MS4yMDcgMjI0LjYxIDI3MS4xNTQgMjI0LjUxNCAyNzEuMDU4QzIyNC40MTkgMjcwLjk2MyAyMjQuMzY2IDI3MC44MzQgMjI0LjM2NiAyNzAuNjk5QzIyNC4zNjYgMjcwLjU2NSAyMjQuNDE5IDI3MC40MzYgMjI0LjUxNCAyNzAuMzQxQzIyNC42MSAyNzAuMjQ1IDIyNC43MzkgMjcwLjE5MiAyMjQuODczIDI3MC4xOTJDMjMxLjA3NiAyNzAuNTAxIDIzNy4yNjIgMjY5LjMxMyAyNDIuOTEgMjY2LjczMUMyNDMuMDMyIDI2Ni42NzYgMjQzLjE3MiAyNjYuNjcyIDI0My4yOTcgMjY2LjcxOUMyNDMuNDIzIDI2Ni43NjcgMjQzLjUyNCAyNjYuODYyIDI0My41OCAyNjYuOTg1QzI0My42MDkgMjY3LjA0NCAyNDMuNjI1IDI2Ny4xMDkgMjQzLjYyOSAyNjcuMTc2QzI0My42MzIgMjY3LjI0MiAyNDMuNjIyIDI2Ny4zMDggMjQzLjU5OSAyNjcuMzcxQzI0My41NzcgMjY3LjQzMyAyNDMuNTQyIDI2Ny40OTEgMjQzLjQ5NiAyNjcuNTM5QzI0My40NTEgMjY3LjU4OCAyNDMuMzk3IDI2Ny42MjcgMjQzLjMzNiAyNjcuNjU0QzIzOC4xNjEgMjcwLjAxNiAyMzIuNTQxIDI3MS4yNDUgMjI2Ljg1MiAyNzEuMjU4WlwiXG4gICAgICAgIGZpbGw9XCIjMjMxRjIwXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTI2NS4zNjIgMjI5LjEyNUMyNzEuMTY3IDIyNi42NzkgMjc3LjI5OCAyMjQuMTgyIDI4My41NjEgMjI0Ljg1MkMyODYuNjU3IDIyNS4zMDYgMjg5LjY3NiAyMjYuMTg0IDI5Mi41MzMgMjI3LjQ2XCJcbiAgICAgICAgZmlsbD1cIndoaXRlXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTI2NS4zNjIgMjI5LjYxMkMyNjUuMjYyIDIyOS42MSAyNjUuMTY0IDIyOS41OCAyNjUuMDgyIDIyOS41MjRDMjY0Ljk5OSAyMjkuNDY4IDI2NC45MzQgMjI5LjM5IDI2NC44OTUgMjI5LjI5OEMyNjQuODY4IDIyOS4yMzYgMjY0Ljg1NCAyMjkuMTY5IDI2NC44NTQgMjI5LjEwMkMyNjQuODUzIDIyOS4wMzQgMjY0Ljg2NiAyMjguOTY4IDI2NC44OTEgMjI4LjkwNUMyNjQuOTE3IDIyOC44NDMgMjY0Ljk1NCAyMjguNzg2IDI2NS4wMDIgMjI4LjczOUMyNjUuMDUgMjI4LjY5MSAyNjUuMTA2IDIyOC42NTMgMjY1LjE2OSAyMjguNjI4QzI3MC43NDEgMjI2LjI4MyAyNzcuMDU0IDIyMy42MzQgMjgzLjYxMSAyMjQuMzM0QzI4Ni43NjMgMjI0Ljc4OSAyODkuODM3IDIyNS42NzcgMjkyLjc0NiAyMjYuOTczQzI5Mi44NzEgMjI3LjAyNCAyOTIuOTcxIDIyNy4xMjMgMjkzLjAyNCAyMjcuMjQ4QzI5My4wNzYgMjI3LjM3MyAyOTMuMDc3IDIyNy41MTMgMjkzLjAyNSAyMjcuNjM4QzI5Mi45NzQgMjI3Ljc2MyAyOTIuODc2IDIyNy44NjMgMjkyLjc1MSAyMjcuOTE1QzI5Mi42MjYgMjI3Ljk2OCAyOTIuNDg2IDIyNy45NjggMjkyLjM2MSAyMjcuOTE3QzI4OS41NDYgMjI2LjY1NSAyODYuNTcxIDIyNS43ODcgMjgzLjUyIDIyNS4zMzlDMjc3LjIzNyAyMjQuNjU5IDI3MS4wNDYgMjI3LjI2OCAyNjUuNTc1IDIyOS41NzJDMjY1LjUwNyAyMjkuNTk4IDI2NS40MzUgMjI5LjYxMiAyNjUuMzYyIDIyOS42MTJaXCJcbiAgICAgICAgZmlsbD1cIiMyMzFGMjBcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMjk3LjU3OCAyNzMuNTMxSDI5Ni44OThDMjk2LjgzMSAyNzMuNTI5IDI5Ni43NjUgMjczLjUxMyAyOTYuNzA1IDI3My40ODVDMjk2LjY0NCAyNzMuNDU3IDI5Ni41OSAyNzMuNDE3IDI5Ni41NDUgMjczLjM2OEMyOTYuNDk5IDI3My4zMTkgMjk2LjQ2NCAyNzMuMjYyIDI5Ni40NDEgMjczLjE5OUMyOTYuNDE4IDI3My4xMzcgMjk2LjQwOCAyNzMuMDcgMjk2LjQxIDI3My4wMDNDMjk2LjQyMSAyNzIuODcxIDI5Ni40ODEgMjcyLjc0NyAyOTYuNTc5IDI3Mi42NTZDMjk2LjY3NyAyNzIuNTY2IDI5Ni44MDUgMjcyLjUxNiAyOTYuOTM4IDI3Mi41MTZDMzAwLjkyOSAyNzIuNjQ4IDMwNC44NTIgMjcxLjQ2NCAzMDguMTAzIDI2OS4xNDZDMzA5LjExOCAyNjguNDQ2IDMxMC4wMTEgMjY3LjYzNCAzMTAuOTE1IDI2Ni44NDJDMzEyLjcwMSAyNjUuMDc3IDMxNC44MTQgMjYzLjY3NyAzMTcuMTM3IDI2Mi43MjFDMzE4LjU2NyAyNjIuMzAzIDMyMC4wNDMgMjYyLjA1OCAzMjEuNTMyIDI2MS45OTFDMzIyLjYyOCAyNjEuOTMyIDMyMy43MiAyNjEuODAzIDMyNC44IDI2MS42MDVDMzI2LjkxIDI2MS4xMDEgMzI4Ljg0NCAyNjAuMDM4IDMzMC40IDI1OC41MjZDMzMxLjk1NiAyNTcuMDE1IDMzMy4wNzYgMjU1LjExMiAzMzMuNjQxIDI1My4wMThDMzMzLjY1NyAyNTIuOTUxIDMzMy42ODcgMjUyLjg4OSAzMzMuNzI4IDI1Mi44MzRDMzMzLjc2OSAyNTIuNzc4IDMzMy44MiAyNTIuNzMyIDMzMy44NzkgMjUyLjY5NkMzMzMuOTM4IDI1Mi42NjEgMzM0LjAwMyAyNTIuNjM4IDMzNC4wNzEgMjUyLjYyOEMzMzQuMTM5IDI1Mi42MTcgMzM0LjIwOCAyNTIuNjIxIDMzNC4yNzUgMjUyLjYzN0MzMzQuMzQyIDI1Mi42NTQgMzM0LjQwNCAyNTIuNjg0IDMzNC40NiAyNTIuNzI1QzMzNC41MTUgMjUyLjc2NiAzMzQuNTYxIDI1Mi44MTcgMzM0LjU5NyAyNTIuODc2QzMzNC42MzIgMjUyLjkzNSAzMzQuNjU1IDI1MyAzMzQuNjY2IDI1My4wNjhDMzM0LjY3NiAyNTMuMTM2IDMzNC42NzIgMjUzLjIwNSAzMzQuNjU2IDI1My4yNzJDMzM0LjAzOSAyNTUuNTQ1IDMzMi44MjMgMjU3LjYxMSAzMzEuMTMzIDI1OS4yNTJDMzI5LjQ0NCAyNjAuODkzIDMyNy4zNDQgMjYyLjA1IDMyNS4wNTQgMjYyLjZDMzIzLjk1NSAyNjIuODIgMzIyLjg0MyAyNjIuOTY2IDMyMS43MjUgMjYzLjAzNkMzMjAuMzE5IDI2My4xMDcgMzE4LjkyNiAyNjMuMzM4IDMxNy41NzMgMjYzLjcyNkMzMTUuMzQ1IDI2NC42MDIgMzEzLjMxNSAyNjUuOTE3IDMxMS42MDUgMjY3LjU5M0MzMTAuNjgyIDI2OC40MzEgMzA5LjcxNyAyNjkuMjIgMzA4LjcxMiAyNjkuOTU4QzMwNS40NiAyNzIuMjczIDMwMS41NyAyNzMuNTIxIDI5Ny41NzggMjczLjUzMVpcIlxuICAgICAgICBmaWxsPVwid2hpdGVcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb2NrdGFpbCh7IGNsYXNzTmFtZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgIGhlaWdodD1cIjEwMCVcIlxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICB2aWV3Qm94PVwiMCAwIDM4NiAyODZcIlxuICAgICAgbWFyZ2luPVwiMXJlbVwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTIwMS40NzcgMjczLjgzNkMyNDQuMTA5IDI3My44MzYgMjc4LjY2OCAyNjQuNDY1IDI3OC42NjggMjUyLjkwNkMyNzguNjY4IDI0MS4zNDggMjQ0LjEwOSAyMzEuOTc3IDIwMS40NzcgMjMxLjk3N0MxNTguODQ2IDIzMS45NzcgMTI0LjI4NyAyNDEuMzQ4IDEyNC4yODcgMjUyLjkwNkMxMjQuMjg3IDI2NC40NjUgMTU4Ljg0NiAyNzMuODM2IDIwMS40NzcgMjczLjgzNlpcIlxuICAgICAgICBmaWxsPVwiI0U2RTdFOFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0zMTAuMTEzIDIwNi41NjJDMzEwLjExMyAyMDYuNTYyIDIzOS4wNjMgMTk5LjQwNiAyMzAuNDU2IDIwMC4xNjdDMjIxLjg0OSAyMDAuOTI4IDIxMi41MTEgMjE3LjkwOSAyMTcuMDM3IDIyMC4yNjRDMjIxLjU2NCAyMjIuNjE5IDIyNi40MDYgMjA3Ljk5MyAyMzEuODk3IDIwNi45NjhDMjM3LjM4OCAyMDUuOTQyIDMxMC4xMTMgMjE2LjIwNCAzMTAuMTEzIDIxNi4yMDRWMjA2LjU2MlpcIlxuICAgICAgICBmaWxsPVwiIzIzMUYyMFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yMTguMDczIDIyMS4wMDVDMjE3LjYzIDIyMS4wMDIgMjE3LjE5NCAyMjAuODkxIDIxNi44MDQgMjIwLjY4QzIxNS45MDEgMjIwLjIwMyAyMTQuOTM2IDIxOS4wMTYgMjE1LjUyNSAyMTYuMDQyQzIxNi43MzMgMjA5Ljk1MiAyMjMuNjQ1IDIwMC4yMTggMjMwLjQxNSAxOTkuNjI5QzIzOC45NzIgMTk4Ljg4OCAzMDcuMjYxIDIwNS43MTkgMzEwLjE2NCAyMDYuMDM0QzMxMC4yODggMjA2LjA0NCAzMTAuNDA1IDIwNi4xMDEgMzEwLjQ4OSAyMDYuMTkzQzMxMC41NzQgMjA2LjI4NSAzMTAuNjIxIDIwNi40MDYgMzEwLjYyIDIwNi41MzFWMjE2LjE3NEMzMTAuNjIxIDIxNi4yNDcgMzEwLjYwNiAyMTYuMzE5IDMxMC41NzYgMjE2LjM4NUMzMTAuNTQ2IDIxNi40NTIgMzEwLjUwMyAyMTYuNTExIDMxMC40NDggMjE2LjU1OUMzMTAuMzkyIDIxNi42MDcgMzEwLjMyOCAyMTYuNjQyIDMxMC4yNTggMjE2LjY2M0MzMTAuMTg4IDIxNi42ODQgMzEwLjExNCAyMTYuNjkgMzEwLjA0MiAyMTYuNjgxQzMwOS4zMjEgMjE2LjU2OSAyMzcuMzI3IDIwNi40NCAyMzEuOTg4IDIwNy40MzRDMjI5LjYyMyAyMDcuODcxIDIyNy4yNzkgMjExLjIyIDIyNS4wMDUgMjE0LjQ1OEMyMjIuNzMyIDIxNy42OTYgMjIwLjQwNyAyMjEuMDA1IDIxOC4wNzMgMjIxLjAwNVpNMjMyLjIxMiAyMDAuNTgzQzIzMS41MDEgMjAwLjU4MyAyMzAuOTIzIDIwMC41ODMgMjMwLjUwNyAyMDAuNjM0QzIyNC40MTcgMjAxLjE3MiAyMTcuNjY3IDIxMC40NTkgMjE2LjUyIDIxNi4yMzVDMjE2LjMwNyAyMTcuMzEgMjE2LjEyNCAyMTkuMTg4IDIxNy4yNzEgMjE5Ljc4N0MyMTkuMzAxIDIyMC44MDIgMjIxLjY2NiAyMTcuNDUyIDIyNC4xNzMgMjEzLjg4QzIyNi41NjggMjEwLjQ3OSAyMjkuMDM1IDIwNi45NTcgMjMxLjgwNiAyMDYuNDRDMjM3LjExNCAyMDUuNDI1IDMwMi4yNjcgMjE0LjU2IDMwOS42MTYgMjE1LjU3NVYyMDYuOTY4QzMwMy44MyAyMDYuNDUgMjQ1LjIyNCAyMDAuNjE0IDIzMi4yMTIgMjAwLjYxNFYyMDAuNTgzWlwiXG4gICAgICAgIGZpbGw9XCIjMjMxRjIwXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTE5Ny4zODcgMjY4Ljk1NEMxNzMuMjgxIDI2OC45NTQgMTU0LjQwMiAyNjEuNzA3IDE1NC40MDIgMjUyLjQ2TDEzOC4yMjMgOTkuNjAwOUMxMzguMjA4IDk5LjQ2NzcgMTM4LjI0NyA5OS4zMzQzIDEzOC4zMzEgOTkuMjI5N0MxMzguNDE1IDk5LjEyNTIgMTM4LjUzNiA5OS4wNTc5IDEzOC42NjkgOTkuMDQyNkMxMzguODAyIDk5LjAyODMgMTM4LjkzNiA5OS4wNjczIDEzOS4wNCA5OS4xNTA5QzEzOS4xNDUgOTkuMjM0NiAxMzkuMjEyIDk5LjM1NjIgMTM5LjIyOCA5OS40ODkyTDE1NS40NjggMjUyLjQwOUMxNTUuNDY4IDI2MC45OTYgMTc0LjI5NiAyNjcuOTM5IDE5Ny40MzggMjY3LjkzOUMyMjAuNTggMjY3LjkzOSAyMzkuNDA4IDI2MC45OTYgMjM5LjQwOCAyNTIuNDZMMjU1LjY0OCA5OS40ODkyQzI1NS42NjMgOTkuMzU0NiAyNTUuNzMxIDk5LjIzMTQgMjU1LjgzNiA5OS4xNDY3QzI1NS45NDIgOTkuMDYyIDI1Ni4wNzcgOTkuMDIyNyAyNTYuMjExIDk5LjAzNzVDMjU2LjM0NiA5OS4wNTIzIDI1Ni40NjkgOTkuMTIgMjU2LjU1NCA5OS4yMjU3QzI1Ni42MzkgOTkuMzMxMyAyNTYuNjc4IDk5LjQ2NjMgMjU2LjY2MyA5OS42MDA5TDI0MC4zNzIgMjUyLjQ3QzI0MC4zNzIgMjYxLjcwNiAyMjEuNDkzIDI2OC45NTQgMTk3LjM4NyAyNjguOTU0WlwiXG4gICAgICAgIGZpbGw9XCIjMjMxRjIwXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTE5Ny4zODcgMTE5Ljc4OUMxNjQuNzY1IDExOS43ODkgMTM4LjIxMyAxMTAuNjU0IDEzOC4yMTMgOTkuNDg5MkMxMzguMjEzIDg4LjMyNDIgMTY0Ljc2NSA3OS4xODkyIDE5Ny4zODcgNzkuMTg5MkMyMzAuMDA5IDc5LjE4OTIgMjU2LjU2MiA4OC4zMjQyIDI1Ni41NjIgOTkuNDg5MkMyNTYuNTYyIDExMC42NTQgMjMwLjAxOSAxMTkuNzg5IDE5Ny4zODcgMTE5Ljc4OVpNMTk3LjM4NyA4MC4zMDU3QzE2NS4zMjMgODAuMzA1NyAxMzkuMjI4IDg4LjkzMzIgMTM5LjIyOCA5OS41OTA3QzEzOS4yMjggMTEwLjI0OCAxNjUuMzIzIDExOC44NzYgMTk3LjM4NyAxMTguODc2QzIyOS40NTEgMTE4Ljg3NiAyNTUuNTQ3IDExMC4yNDggMjU1LjU0NyA5OS41OTA3QzI1NS41NDcgODguOTMzMiAyMjkuNDUxIDgwLjMwNTcgMTk3LjM4NyA4MC4zMDU3WlwiXG4gICAgICAgIGZpbGw9XCIjMjMxRjIwXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTI0OC4wMjUgMTUyLjMyTDIzNS40OCAyNTQuMDg0QzIzNS40OCAyNTQuMDg0IDIyMi42OTEgMjY1Ljc1NiAxOTQuNTA0IDI2NC41NDlDMTY2LjMxOCAyNjMuMzQxIDE1OC44MjcgMjUzLjEwOSAxNTguODI3IDI1My4xMDlMMTQ2LjczOSAxNTIuMzJIMjQ4LjAyNVpcIlxuICAgICAgICBmaWxsPVwiI0M0RkM2OFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0xOTguNDUzIDI2NS4xMzdDMTk3LjE1NCAyNjUuMTM3IDE5NS44MTQgMjY1LjEzNyAxOTQuMzkzIDI2NS4wNTZDMTY2LjI4NyAyNjMuODQ4IDE1OC42NDUgMjUzLjgzIDE1OC4zMyAyNTMuNDA0QzE1OC4yNzkgMjUzLjMzNiAxNTguMjQ3IDI1My4yNTUgMTU4LjIzOCAyNTMuMTdMMTQ2LjE2IDE1Mi4zODFDMTQ2LjE1MiAxNTIuMzEgMTQ2LjE1OSAxNTIuMjM4IDE0Ni4xOCAxNTIuMTdDMTQ2LjIwMSAxNTIuMTAyIDE0Ni4yMzUgMTUyLjAzOSAxNDYuMjgyIDE1MS45ODVDMTQ2LjMzIDE1MS45MyAxNDYuMzg5IDE1MS44ODYgMTQ2LjQ1NiAxNTEuODU3QzE0Ni41MjIgMTUxLjgyNyAxNDYuNTk1IDE1MS44MTIgMTQ2LjY2NyAxNTEuODEySDI0OC4wMDVDMjQ4LjA3NyAxNTEuODEyIDI0OC4xNDcgMTUxLjgyNyAyNDguMjEyIDE1MS44NTdDMjQ4LjI3NyAxNTEuODg3IDI0OC4zMzUgMTUxLjkzIDI0OC4zODEgMTUxLjk4NUMyNDguNDI4IDE1Mi4wMzkgMjQ4LjQ2NSAxNTIuMTAxIDI0OC40ODcgMTUyLjE2OUMyNDguNTEgMTUyLjIzNyAyNDguNTE5IDE1Mi4zMDkgMjQ4LjUxMyAxNTIuMzgxTDIzNS45MjcgMjU0LjE0NUMyMzUuOTE1IDI1NC4yNjcgMjM1Ljg1NyAyNTQuMzc5IDIzNS43NjQgMjU0LjQ1OUMyMzUuNjQyIDI1NC41NzEgMjIzLjc1NyAyNjUuMTM3IDE5OC40NTMgMjY1LjEzN1pNMTU5LjI2NCAyNTIuOTA2QzE2MS4yNzQgMjU1LjA1IDE2My42ODkgMjU2Ljc3NSAxNjYuMzY5IDI1Ny45ODFDMTcxLjI0MSAyNjAuNDA3IDE4MC4wODEgMjYzLjQzMiAxOTQuNDg0IDI2NC4wNzFDMjIwLjU3IDI2NS4xODggMjMzLjQ5MSAyNTUuMDY4IDIzNC45NDIgMjUzLjg1TDI0Ny40NDcgMTUyLjg1OEgxNDcuMjU2TDE1OS4yNjQgMjUyLjkwNlpcIlxuICAgICAgICBmaWxsPVwiIzIzMUYyMFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0xOTcuMzU3IDE2Ni4xODVDMjI1LjM0IDE2Ni4xODUgMjQ4LjAyNSAxNTkuNCAyNDguMDI1IDE1MS4wMzFDMjQ4LjAyNSAxNDIuNjYyIDIyNS4zNCAxMzUuODc3IDE5Ny4zNTcgMTM1Ljg3N0MxNjkuMzczIDEzNS44NzcgMTQ2LjY4OCAxNDIuNjYyIDE0Ni42ODggMTUxLjAzMUMxNDYuNjg4IDE1OS40IDE2OS4zNzMgMTY2LjE4NSAxOTcuMzU3IDE2Ni4xODVaXCJcbiAgICAgICAgZmlsbD1cIiNDNEZDNjhcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMTk3LjM1NyAxNjYuNjkyQzE2OC42NTIgMTY2LjY5MiAxNDYuMTggMTU5LjgxMSAxNDYuMTggMTUxLjAzMUMxNDYuMTggMTQyLjI1MSAxNjguNjUyIDEzNS4zNjkgMTk3LjM1NyAxMzUuMzY5QzIyNi4wNjEgMTM1LjM2OSAyNDguNTMzIDE0Mi4yNTEgMjQ4LjUzMyAxNTEuMDMxQzI0OC41MzMgMTU5LjgxMSAyMjYuMDUxIDE2Ni42OTIgMTk3LjM1NyAxNjYuNjkyWk0xOTcuMzU3IDEzNi4zODRDMTcwLjE2NSAxMzYuMzg0IDE0Ny4xOTUgMTQzLjA5NCAxNDcuMTk1IDE1MS4wMzFDMTQ3LjE5NSAxNTguOTY4IDE3MC4xNjUgMTY1LjY3NyAxOTcuMzU3IDE2NS42NzdDMjI0LjU0OCAxNjUuNjc3IDI0Ny41MTggMTU4Ljk2OCAyNDcuNTE4IDE1MS4wMzFDMjQ3LjUxOCAxNDMuMDk0IDIyNC41NDggMTM2LjM4NCAxOTcuMzU3IDEzNi4zODRaXCJcbiAgICAgICAgZmlsbD1cIiMyMzFGMjBcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMTc1LjU5NSAxNDguNTY0TDE1NS43NzIgNzUuNTM1MkwxNTIuMzAxIDc3Ljg5TDE3MS41ODYgMTQ5LjU0OUMxNzEuNTg2IDE0OS41NDkgMTczLjA4OCAxNTEuMDMxIDE3NS41OTUgMTQ4LjU2NFpcIlxuICAgICAgICBmaWxsPVwid2hpdGVcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMTcyLjg3NSAxNTAuNDkzQzE3Mi4yODEgMTUwLjUwNSAxNzEuNzA0IDE1MC4yOTkgMTcxLjI1MSAxNDkuOTE0QzE3MS4xOTIgMTQ5Ljg1IDE3MS4xNDcgMTQ5Ljc3NCAxNzEuMTE5IDE0OS42OTFMMTUxLjgzNCA3OC4wMzIxQzE1MS44MDQgNzcuOTMxMSAxNTEuODA3IDc3LjgyMzEgMTUxLjg0NCA3Ny43MjQyQzE1MS44ODEgNzcuNjI1NCAxNTEuOTQ4IDc3LjU0MTEgMTUyLjAzNyA3Ny40ODRMMTU1LjUwOCA3NS4xMTkxQzE1NS41NzMgNzUuMDcyIDE1NS42NDkgNzUuMDQxOCAxNTUuNzI5IDc1LjAzMTJDMTU1LjgwOSA3NS4wMjA2IDE1NS44OSA3NS4wMjk4IDE1NS45NjUgNzUuMDU4MkMxNTYuMDQxIDc1LjA4NjMgMTU2LjExIDc1LjEzMjMgMTU2LjE2NCA3NS4xOTI0QzE1Ni4yMTkgNzUuMjUyNCAxNTYuMjU5IDc1LjMyNDcgMTU2LjI4IDc1LjQwMzNMMTc2LjEzMyAxNDguNDgzQzE3Ni4xNTcgMTQ4LjU3IDE3Ni4xNTggMTQ4LjY2MiAxNzYuMTM1IDE0OC43NUMxNzYuMTExIDE0OC44MzcgMTc2LjA2NSAxNDguOTE3IDE3Ni4wMDEgMTQ4Ljk4MUMxNzUuMTk5IDE0OS44NzcgMTc0LjA3NSAxNTAuNDIgMTcyLjg3NSAxNTAuNDkzWk0xNzIuMDYzIDE0OS4yNjVDMTcyLjM1NyAxNDkuNDU4IDE3My4zODIgMTQ5LjkxNCAxNzUuMDQ3IDE0OC40MDJMMTU1LjQ2OCA3Ni4zMzcxTDE1Mi44ODkgNzguMTAzMkwxNzIuMDYzIDE0OS4yNjVaXCJcbiAgICAgICAgZmlsbD1cIiMyMzFGMjBcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMjA3LjI2MyA3OC4zMjY1QzE5NS41MTkgNTYuMjUwMiAxNzAuOTY3IDQ0LjM5NSAxNDcuNzQzIDUxLjE2NTFDMTI0LjUyIDU3LjkzNTEgMTEwLjIzOSA4MS4yMDkxIDExMi4yMTggMTA2LjEyN0wyMDcuMjYzIDc4LjMyNjVaXCJcbiAgICAgICAgZmlsbD1cIndoaXRlXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTExMi4yNDkgMTA2LjYzNUMxMTIuMTQ3IDEwNi42MzQgMTEyLjA0OCAxMDYuNjAyIDExMS45NjUgMTA2LjU0M0MxMTEuOTA0IDEwNi41IDExMS44NTQgMTA2LjQ0NCAxMTEuODE3IDEwNi4zNzlDMTExLjc4IDEwNi4zMTQgMTExLjc1OCAxMDYuMjQyIDExMS43NTEgMTA2LjE2OEMxMDkuNzIxIDgwLjY5MTQgMTI0Ljc2NCA1Ny4zNTY2IDE0Ny42MDEgNTAuNjc3OUMxNzAuNDM5IDQzLjk5OTIgMTk1LjcxMiA1NS41Mjk2IDIwNy43MSA3OC4wODI5QzIwNy43NDIgNzguMTQ5MyAyMDcuNzU5IDc4LjIyMjEgMjA3Ljc1OSA3OC4yOTZDMjA3Ljc1OSA3OC4zNjk5IDIwNy43NDIgNzguNDQyNyAyMDcuNzEgNzguNTA5MkMyMDcuNjggNzguNTc5IDIwNy42MzYgNzguNjQxNSAyMDcuNTggNzguNjkyNEMyMDcuNTI0IDc4Ljc0MzMgMjA3LjQ1NyA3OC43ODEyIDIwNy4zODUgNzguODAzNUwxMTIuMzgxIDEwNi42MDRMMTEyLjI0OSAxMDYuNjM1Wk0xNjAuODE3IDQ5Ljc5NDhDMTU2LjQ0IDQ5Ljc5MTMgMTUyLjA4NiA1MC40MTM0IDE0Ny44ODUgNTEuNjQyMUMxMjUuNjk4IDU4LjEzODEgMTEwLjk5IDgwLjcwMTUgMTEyLjcxNiAxMDUuNDM3TDIwNi41MTIgNzguMDMyMUMxOTYuOTEgNjAuNDIxOCAxNzkuMDI2IDQ5LjgwNSAxNjAuODE3IDQ5LjgwNVY0OS43OTQ4WlwiXG4gICAgICAgIGZpbGw9XCIjMjMxRjIwXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTE5Mi44NSA4Mi41Mzg3QzE4Mi41ODggNjAuMDM2MiAxNjMuOTIyIDQ2LjQyNSAxNDcuNzQzIDUxLjE2NTFDMTMxLjU2NCA1NS45MDUxIDEyMy4xNyA3Ny40MjMxIDEyNi42NjIgMTAxLjkxNUwxOTIuODUgODIuNTM4N1pcIlxuICAgICAgICBmaWxsPVwiI0U2RTdFOFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0xMjYuNjYyIDEwMi40MjNDMTI2LjU2NSAxMDIuNDIyIDEyNi40NjkgMTAyLjM5NCAxMjYuMzg4IDEwMi4zNDFDMTI2LjMyNiAxMDIuMzAyIDEyNi4yNzQgMTAyLjI0OSAxMjYuMjM0IDEwMi4xODhDMTI2LjE5NCAxMDIuMTI3IDEyNi4xNjcgMTAyLjA1OCAxMjYuMTU0IDEwMS45ODZDMTIyLjUzMSA3Ni41Mjk5IDEzMS4zNTEgNTUuNDM4MiAxNDcuNjAxIDUwLjY3NzhDMTYzLjg1MSA0NS45MTc1IDE4Mi42NDkgNTguOTM5OSAxOTMuMjc2IDgyLjMzNTdDMTkzLjMwNiA4Mi40MDA5IDE5My4zMjIgODIuNDcxOSAxOTMuMzIyIDgyLjU0MzhDMTkzLjMyMiA4Mi42MTU2IDE5My4zMDYgODIuNjg2NiAxOTMuMjc2IDgyLjc1MTlDMTkzLjI0NSA4Mi44MTc5IDE5My4xOTkgODIuODc2NSAxOTMuMTQzIDgyLjkyMzdDMTkzLjA4NyA4Mi45NzEgMTkzLjAyMiA4My4wMDU4IDE5Mi45NTIgODMuMDI1OUwxMjYuNzYzIDEwMi40MDJMMTI2LjY2MiAxMDIuNDIzWk0xNTQuMjA5IDUwLjc1OUMxNTIuMDY5IDUwLjc1NTMgMTQ5Ljk0IDUxLjA1NjEgMTQ3Ljg4NSA1MS42NTIyQzEzMi41MDggNTYuMTQ4NyAxMjMuODMgNzYuOTY2MyAxMjcuMDc4IDEwMS4yMzVMMTkyLjE1IDgyLjE5MzZDMTgzLjE5NyA2Mi45Njk1IDE2OC4wODQgNTAuNzU5IDE1NC4yMDkgNTAuNzU5WlwiXG4gICAgICAgIGZpbGw9XCIjMjMxRjIwXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTE3NC4yNTUgODcuOTc5MUMxNjUuODkyIDY0LjkxODMgMTQ3Ljc0MyA1MS4xNjUxIDE0Ny43NDMgNTEuMTY1MUMxNDcuNzQzIDUxLjE2NTEgMTM5Ljg2NyA3Mi41NDEgMTQ1LjI1NyA5Ni40NjQ1TDE3NC4yNTUgODcuOTc5MVpcIlxuICAgICAgICBmaWxsPVwid2hpdGVcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMTQ1LjI1NyA5Ni45NzJDMTQ1LjE2NyA5Ni45NzM4IDE0NS4wNzkgOTYuOTQ5MSAxNDUuMDAzIDk2LjkwMUMxNDQuOTQzIDk2Ljg2NjQgMTQ0Ljg5MiA5Ni44MTk2IDE0NC44NTEgOTYuNzYzNkMxNDQuODExIDk2LjcwNzYgMTQ0Ljc4MyA5Ni42NDM3IDE0NC43NjkgOTYuNTc2MkMxMzkuNCA3Mi44MTUgMTQ3LjE3NSA1MS4yMDU3IDE0Ny4yNjYgNTAuOTkyNUMxNDcuMjk0IDUwLjkxNzggMTQ3LjMzOSA1MC44NTA2IDE0Ny4zOTcgNTAuNzk2QzE0Ny40NTUgNTAuNzQxNCAxNDcuNTI1IDUwLjcwMSAxNDcuNjAxIDUwLjY3NzlDMTQ3LjY3NyA1MC42NTggMTQ3Ljc1NiA1MC42NTUgMTQ3LjgzNCA1MC42NjlDMTQ3LjkxMSA1MC42ODMxIDE0Ny45ODQgNTAuNzEzOCAxNDguMDQ4IDUwLjc1OTFDMTQ4LjIzMSA1MC45MDEyIDE2Ni40MTkgNjQuODc3NyAxNzQuNzMyIDg3LjgwNjZDMTc0Ljc1NCA4Ny44NzE4IDE3NC43NjMgODcuOTQwOSAxNzQuNzU4IDg4LjAwOTZDMTc0Ljc1MyA4OC4wNzg0IDE3NC43MzUgODguMTQ1NCAxNzQuNzA0IDg4LjIwNjlDMTc0LjY3MiA4OC4yNjgzIDE3NC42MjkgODguMzIyOSAxNzQuNTc3IDg4LjM2NzVDMTc0LjUyNCA4OC40MTIgMTc0LjQ2MyA4OC40NDU2IDE3NC4zOTcgODguNDY2M0wxNDUuMzk5IDk2Ljk1MTdDMTQ1LjM1MyA5Ni45NjkgMTQ1LjMwNSA5Ni45NzU5IDE0NS4yNTcgOTYuOTcyWk0xNDcuOTg3IDUyLjAwNzVDMTQ2Ljc0OSA1NS43ODMzIDE0MS4wODUgNzQuODc1NSAxNDUuNjQyIDk1LjgyNTFMMTczLjU2NSA4Ny42NDQyQzE2Ni4xMzUgNjcuNTQ3MiAxNTEuMDYyIDU0LjU0NSAxNDcuOTg3IDUyLjAwNzVaXCJcbiAgICAgICAgZmlsbD1cIiMyMzFGMjBcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMzAwLjk4OCAzNy43NDY4TDI4Ny43OTMgNDAuMzc1NkwyNzUuNzQ1IDQyLjc3MUwyNjQuNTA5IDQ1LjAwNEwyNTIuMzkgNDcuNDRMMjM1LjA0NCA1MC45MDEyTDIzNC43NTkgNTIuNjE2NUwyMzIuODQxIDY0LjA4NkwyMzAuMjgzIDc5LjMxMUwyMjguNDM2IDkwLjM5NDhMMjI2LjQ3NyAxMDIuMDY3TDIyNC42MyAxMTMuMDlMMjIyLjYgMTI1LjEyOEwyMjAuNzUyIDEzNi4yMTJMMjE4LjU1IDE0OS40MDdDMjE4LjU1IDE0OS40MDcgMjE5LjU2NSAxNTIuMDE1IDIyNC42NCAxNTIuMzFDMjI5LjcxNSAxNTIuNjA0IDIzMC4wMjkgMTQ5LjQwNyAyMzAuMDI5IDE0OS40MDdMMjMxLjExNSAxNDIuODVMMjMzLjAzNCAxMzEuNTAyTDIzNS4wNjQgMTE5LjQ3NUwyMzYuOTcyIDEwOC4xNTdMMjM4LjgxOSA5Ny4xMjQzTDI0MC43MzggODUuNzM2TDI0Mi45NCA3Mi41NDFMMjQ1LjAzMSA2MC4xNDc4VjU5Ljk1NUwyNTkuOTcyIDU3LjA3MjRMMjcwLjc4MiA1NS4wNDI0TDI4My40NDkgNTIuNjA2NEwyOTMuOTg1IDUwLjU3NjRMMzAyLjczNCA0OC44OTE1QzMwMi43MzQgNDguODkxNSAzMDYuNTgxIDQxLjEzNjkgMzAwLjk4OCAzNy43NDY4WlwiXG4gICAgICAgIGZpbGw9XCJ3aGl0ZVwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yMjUuMzMgMTUyLjg0OEMyMjUuMTE3IDE1Mi44NDggMjI0Ljg4MyAxNTIuODQ4IDIyNC42NSAxNTIuODQ4QzIxOS4zNzIgMTUyLjUzMyAyMTguMTg0IDE0OS43NDIgMjE4LjEzNCAxNDkuNjNDMjE4LjExNCAxNDkuNTQgMjE4LjExNCAxNDkuNDQ2IDIxOC4xMzQgMTQ5LjM1NkwyMzQuNTQ2IDUwLjc4OTVDMjM0LjU2MiA1MC42ODgzIDIzNC42MDkgNTAuNTk0MyAyMzQuNjggNTAuNTJDMjM0Ljc1IDUwLjQ0NTggMjM0Ljg0MiA1MC4zOTQ2IDIzNC45NDIgNTAuMzczNEwzMDAuOTE3IDM3LjI0OTRDMzAwLjk3NyAzNy4yMzM3IDMwMS4wNCAzNy4yMzEgMzAxLjEwMSAzNy4yNDE1QzMwMS4xNjMgMzcuMjUyIDMwMS4yMjEgMzcuMjc1NCAzMDEuMjcyIDM3LjMxMDNDMzA3LjIxIDQwLjkwMzQgMzAzLjMwMiA0OS4wMTMzIDMwMy4yMzEgNDkuMDk0NUMzMDMuMTk4IDQ5LjE2MzkgMzAzLjE0OCA0OS4yMjQxIDMwMy4wODYgNDkuMjcwMUMzMDMuMDI0IDQ5LjMxNjEgMzAyLjk1MiA0OS4zNDYzIDMwMi44NzYgNDkuMzU4NEwyNDUuNDg4IDYwLjQwMTZMMjMwLjUxNyAxNDkuNDk4QzIzMC41MTcgMTQ5LjQ5OCAyMzAuMDkgMTUyLjg0OCAyMjUuMzMgMTUyLjg0OFpNMjE5LjEyOCAxNDkuMzM2QzIxOS40MDIgMTQ5LjgwMyAyMjAuNjYxIDE1MS41NjkgMjI0LjcxMSAxNTEuODEyQzIyOS4xMzYgMTUyLjA3NiAyMjkuNTUyIDE0OS40NjggMjI5LjU2MyAxNDkuMzU2TDI0NC41ODUgNTkuOTA0MkMyNDQuNiA1OS43OTk4IDI0NC42NDcgNTkuNzAyNiAyNDQuNzE5IDU5LjYyNjJDMjQ0Ljc5MiA1OS41NDk4IDI0NC44ODcgNTkuNDk3OSAyNDQuOTkxIDU5LjQ3NzlMMzAyLjM5OSA0OC40NTVDMzAyLjk1NyA0Ny4xOTY0IDMwNS4zNDIgNDEuMjA3OSAzMDAuODg3IDM4LjMwNUwyMzUuNDggNTEuMzA3MkwyMTkuMTI4IDE0OS4zMzZaXCJcbiAgICAgICAgZmlsbD1cIiMyMzFGMjBcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMjc1Ljc0NSA0Mi43NzFDMjc4LjYxMSA0NS43OTY3IDI4MS4xOTMgNDkuMDc4NyAyODMuNDU5IDUyLjU3NTlMMjkzLjk5NSA1MC41NDU5QzI5Mi4yMjQgNDYuOTkyMSAyOTAuMTUzIDQzLjU5NjQgMjg3LjgwMyA0MC4zOTU5TDI3NS43NDUgNDIuNzcxWlwiXG4gICAgICAgIGZpbGw9XCIjRDFEM0Q0XCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTI4My40NTkgNTMuMDgzNEMyODMuMzc0IDUzLjA4MzMgMjgzLjI5MSA1My4wNjE4IDI4My4yMTYgNTMuMDIxQzI4My4xNDIgNTIuOTgwMiAyODMuMDc5IDUyLjkyMTQgMjgzLjAzMyA1Mi44NUMyODAuNzg4IDQ5LjM3NiAyNzguMjI2IDQ2LjExNzUgMjc1LjM4IDQzLjExNjFDMjc1LjMxNiA0My4wNTIgMjc1LjI3MSA0Mi45NzE5IDI3NS4yNSA0Mi44ODQzQzI3NS4yMjggNDIuNzk2NyAyNzUuMjMxIDQyLjcwNDkgMjc1LjI1OCA0Mi42MTg4QzI3NS4yODcgNDIuNTMzIDI3NS4zMzggNDIuNDU2MSAyNzUuNDA1IDQyLjM5NTdDMjc1LjQ3MyA0Mi4zMzUyIDI3NS41NTUgNDIuMjkzMiAyNzUuNjQ0IDQyLjI3MzdMMjg3LjcwMiAzOS44NzgzQzI4Ny43OTYgMzkuODYwMyAyODcuODkzIDM5Ljg2ODggMjg3Ljk4MyAzOS45MDI4QzI4OC4wNzIgMzkuOTM2OSAyODguMTUxIDM5Ljk5NTEgMjg4LjIwOSA0MC4wNzExQzI5MC41ODQgNDMuMzAwNSAyOTIuNjcyIDQ2LjczMDcgMjk0LjQ1MSA1MC4zMjI2QzI5NC40ODUgNTAuMzkzIDI5NC41MDMgNTAuNDcwMiAyOTQuNTAzIDUwLjU0ODRDMjk0LjUwMyA1MC42MjY2IDI5NC40ODUgNTAuNzAzOCAyOTQuNDUxIDUwLjc3NDFDMjk0LjQxNyA1MC44NDQ0IDI5NC4zNjcgNTAuOTA2MSAyOTQuMzA2IDUwLjk1NDRDMjk0LjI0NCA1MS4wMDI4IDI5NC4xNzMgNTEuMDM2NyAyOTQuMDk2IDUxLjA1MzRMMjgzLjU1IDUzLjA4MzRIMjgzLjQ1OVpNMjc2Ljc0IDQzLjA5NThDMjc5LjMwNiA0NS44NjYxIDI4MS42MzUgNDguODQ3MiAyODMuNzAzIDUyLjAwNzVMMjkzLjI0NCA1MC4xODA1QzI5MS42MDMgNDYuOTUzNyAyODkuNzA5IDQzLjg2MTggMjg3LjU4IDQwLjkzMzlMMjc2Ljc0IDQzLjA5NThaXCJcbiAgICAgICAgZmlsbD1cIiMyMzFGMjBcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMjMyLjg0MSA2NC4wNTU2QzIzNi41MDMgNjYuNTEyMiAyMzkuODgzIDY5LjM2NDYgMjQyLjkyIDcyLjU2MTNMMjQ1LjAxMSA2MC4xNjgxQzI0MS45MzQgNTcuMjEwMyAyMzguNDg4IDU0LjY2MTkgMjM0Ljc1OSA1Mi41ODYxTDIzMi44NDEgNjQuMDU1NlpcIlxuICAgICAgICBmaWxsPVwiI0QxRDNENFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yNDIuOTIgNzMuMDY4OEMyNDIuNzgyIDczLjA2NDYgMjQyLjY1IDczLjAwNjMgMjQyLjU1NSA3Mi45MDYzQzIzOS41NDEgNjkuNzM2OSAyMzYuMTg4IDY2LjkwODQgMjMyLjU1NyA2NC40NzE3QzIzMi40NzYgNjQuNDE5MiAyMzIuNDEzIDY0LjM0MzkgMjMyLjM3NSA2NC4yNTUzQzIzMi4zMzcgNjQuMTY2OCAyMzIuMzI2IDY0LjA2OSAyMzIuMzQ0IDYzLjk3NDRMMjM0LjI2MiA1Mi41MTVDMjM0LjI3MiA1Mi40MzQyIDIzNC4zMDIgNTIuMzU3MyAyMzQuMzUgNTIuMjkxNkMyMzQuMzk4IDUyLjIyNTkgMjM0LjQ2MiA1Mi4xNzM1IDIzNC41MzYgNTIuMTM5NUMyMzQuNjA2IDUyLjEwMjEgMjM0LjY4NSA1Mi4wODI2IDIzNC43NjQgNTIuMDgyNkMyMzQuODQ0IDUyLjA4MjYgMjM0LjkyMiA1Mi4xMDIxIDIzNC45OTMgNTIuMTM5NUMyMzguNzYzIDU0LjIzMTkgMjQyLjI0NyA1Ni44MDQzIDI0NS4zNTYgNTkuNzkyNkMyNDUuNDE2IDU5Ljg1MDcgMjQ1LjQ2MiA1OS45MjI2IDI0NS40ODggNjAuMDAyMkMyNDUuNTE1IDYwLjA4MTcgMjQ1LjUyMiA2MC4xNjY1IDI0NS41MDggNjAuMjQ5M0wyNDMuNDc4IDcyLjY0MjVDMjQzLjQ2MiA3Mi43MzYyIDI0My40MiA3Mi44MjM4IDI0My4zNTggNzIuODk1NEMyNDMuMjk1IDcyLjk2NyAyNDMuMjE0IDczLjAyIDI0My4xMjMgNzMuMDQ4NUwyNDIuOTIgNzMuMDY4OFpNMjMzLjM4OSA2My44MjIxQzIzNi42OTggNjYuMDY1NyAyMzkuNzc4IDY4LjYyOSAyNDIuNTg1IDcxLjQ3NTJMMjQ0LjQ1MyA2MC4zMTAyQzI0MS42MyA1Ny42Mjk5IDIzOC41MDIgNTUuMjg5NiAyMzUuMTM1IDUzLjMzNzJMMjMzLjM4OSA2My44MjIxWlwiXG4gICAgICAgIGZpbGw9XCIjMjMxRjIwXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTIyOC40MzYgOTAuMzk0OEMyMzIuMTIxIDkyLjI0ODYgMjM1LjU5NiA5NC40OTQ2IDIzOC43OTkgOTcuMDkzOEwyNDAuNzE3IDg1LjcwNTVDMjM3LjQ2MiA4My4yMjk5IDIzMy45NjcgODEuMDg3NyAyMzAuMjgzIDc5LjMxMUwyMjguNDM2IDkwLjM5NDhaXCJcbiAgICAgICAgZmlsbD1cIiNEMUQzRDRcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMjM4Ljc5OSA5Ny42MDEzQzIzOC42ODQgOTcuNjA1MSAyMzguNTcxIDk3LjU2NTIgMjM4LjQ4NCA5Ny40ODk3QzIzNS4zMDYgOTQuOTEzIDIzMS44NTkgOTIuNjg3MyAyMjguMjAyIDkwLjg1MTZDMjI4LjEwNSA5MC44MDMxIDIyOC4wMjYgOTAuNzI0NiAyMjcuOTc3IDkwLjYyNzhDMjI3LjkyNyA5MC41MzA5IDIyNy45MSA5MC40MjA4IDIyNy45MjggOTAuMzEzNkwyMjkuNzg2IDc5LjIyOThDMjI5Ljc5OSA3OS4xNTI5IDIyOS44MyA3OS4wODAyIDIyOS44NzYgNzkuMDE2OUMyMjkuOTIyIDc4Ljk1MzYgMjI5Ljk4MSA3OC45MDE1IDIzMC4wNSA3OC44NjQ0QzIzMC4xMTkgNzguODI5NiAyMzAuMTk1IDc4LjgxMTUgMjMwLjI3MyA3OC44MTE1QzIzMC4zNTEgNzguODExNSAyMzAuNDI3IDc4LjgyOTYgMjMwLjQ5NiA3OC44NjQ0QzIzNC4yMTYgODAuNjQ2NSAyMzcuNzQzIDgyLjgwNjIgMjQxLjAyMiA4NS4zMDk3QzI0MS4wOTcgODUuMzY0NCAyNDEuMTU2IDg1LjQzODkgMjQxLjE5MiA4NS41MjQ4QzI0MS4yMjggODUuNjEwNyAyNDEuMjM5IDg1LjcwNDggMjQxLjIyNSA4NS43OTY5TDIzOS4zMDcgOTcuMTc1QzIzOS4yOTEgOTcuMjYyIDIzOS4yNTIgOTcuMzQzNCAyMzkuMTk1IDk3LjQxMUMyMzkuMTM4IDk3LjQ3ODcgMjM5LjA2NSA5Ny41MzAzIDIzOC45ODIgOTcuNTYwN0MyMzguOTIzIDk3LjU4NDEgMjM4Ljg2MiA5Ny41OTc4IDIzOC43OTkgOTcuNjAxM1pNMjI4Ljk5NCA5MC4wN0MyMzIuMzM1IDkxLjc4NzUgMjM1LjUgOTMuODI3MiAyMzguNDQ0IDk2LjE2TDI0MC4xNjkgODUuOTI4OEMyMzcuMTkzIDgzLjY4NjEgMjM0LjAxNiA4MS43MjIyIDIzMC42NzkgODAuMDYyMUwyMjguOTk0IDkwLjA3WlwiXG4gICAgICAgIGZpbGw9XCIjMjMxRjIwXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTIyNC42MyAxMTMuMDlDMjI4LjMwNiAxMTQuODQ0IDIzMS43OTUgMTE2Ljk2NiAyMzUuMDQ0IDExOS40MjRMMjM2Ljk1MiAxMDguMTA3QzIzMy42OTMgMTA1LjcgMjMwLjE4MSAxMDMuNjU4IDIyNi40NzcgMTAyLjAxN0wyMjQuNjMgMTEzLjA5WlwiXG4gICAgICAgIGZpbGw9XCIjRDFEM0Q0XCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTIzNS4wNDQgMTE5Ljk1MkMyMzQuOTMzIDExOS45NTYgMjM0LjgyNSAxMTkuOTIgMjM0LjczOSAxMTkuODVDMjMxLjUyMSAxMTcuNDEgMjI4LjA2MiAxMTUuMzA1IDIyNC40MTcgMTEzLjU2N0MyMjQuMzI5IDExMy41MjcgMjI0LjI1NSAxMTMuNDYyIDIyNC4yMDMgMTEzLjM4MkMyMjQuMTUxIDExMy4zMDEgMjI0LjEyMyAxMTMuMjA3IDIyNC4xMjIgMTEzLjExMUMyMjQuMTIyIDExMy4xMTEgMjI0LjEyMiAxMTMuMDM5IDIyNC4xMjIgMTEzLjAwOUwyMjUuOTU5IDEwMS45NzZDMjI1Ljk3MyAxMDEuOSAyMjYuMDA0IDEwMS44MjkgMjI2LjA1IDEwMS43NjdDMjI2LjA5NSAxMDEuNzA2IDIyNi4xNTUgMTAxLjY1NiAyMjYuMjIzIDEwMS42MjFDMjI2LjI5MSAxMDEuNTg2IDIyNi4zNjYgMTAxLjU2OCAyMjYuNDQxIDEwMS41NjhDMjI2LjUxNyAxMDEuNTY4IDIyNi41OTIgMTAxLjU4NiAyMjYuNjYgMTAxLjYyMUMyMzAuMzk5IDEwMy4yNTUgMjMzLjk0NiAxMDUuMjk3IDIzNy4yMzYgMTA3LjcxMUMyMzcuMzEyIDEwNy43NjcgMjM3LjM3MSAxMDcuODQzIDIzNy40MDcgMTA3LjkzMUMyMzcuNDQzIDEwOC4wMTkgMjM3LjQ1NCAxMDguMTE1IDIzNy40MzkgMTA4LjIwOEwyMzUuNTQxIDExOS41MDVDMjM1LjUyOCAxMTkuNTkzIDIzNS40OTIgMTE5LjY3NSAyMzUuNDM2IDExOS43NDVDMjM1LjM4MSAxMTkuODE0IDIzNS4zMDkgMTE5Ljg2OCAyMzUuMjI2IDExOS45MDFDMjM1LjE2OSAxMTkuOTI4IDIzNS4xMDcgMTE5Ljk0NSAyMzUuMDQ0IDExOS45NTJaTTIyNS4xOTggMTEyLjg0N0MyMjguNTI3IDExNC40NTkgMjMxLjcwMSAxMTYuMzc2IDIzNC42NzggMTE4LjU3MUwyMzYuMzkzIDEwOC40MjFDMjMzLjQxNyAxMDYuMjQ2IDIzMC4yMjcgMTA0LjM3OSAyMjYuODczIDEwMi44NDlMMjI1LjE5OCAxMTIuODQ3WlwiXG4gICAgICAgIGZpbGw9XCIjMjMxRjIwXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTIyMC43NjIgMTM2LjIzMkMyMjQuNDM2IDEzOC4wNjkgMjI3LjkwNiAxNDAuMjg3IDIzMS4xMTUgMTQyLjg1TDIzMy4wMzQgMTMxLjUwMkMyMjkuNzg5IDEyOS4wMzcgMjI2LjI5NiAxMjYuOTE3IDIyMi42MSAxMjUuMTc5TDIyMC43NjIgMTM2LjIzMlpcIlxuICAgICAgICBmaWxsPVwiI0QxRDNENFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yMzEuMTE1IDE0My4zNDdDMjMwLjk5OCAxNDMuMzQ5IDIzMC44ODMgMTQzLjMxIDIzMC43OTEgMTQzLjIzNkMyMjcuNjE1IDE0MC42OTEgMjI0LjE3NSAxMzguNDk2IDIyMC41MjkgMTM2LjY4OUMyMjAuNDM1IDEzNi42MzcgMjIwLjM1OCAxMzYuNTU4IDIyMC4zMDkgMTM2LjQ2MkMyMjAuMjYxIDEzNi4zNjYgMjIwLjI0MiAxMzYuMjU4IDIyMC4yNTUgMTM2LjE1MUwyMjIuMTEyIDEyNS4wNjdDMjIyLjEyMyAxMjQuOTg5IDIyMi4xNTIgMTI0LjkxNSAyMjIuMTk5IDEyNC44NTFDMjIyLjI0NSAxMjQuNzg4IDIyMi4zMDYgMTI0LjczNiAyMjIuMzc2IDEyNC43MDJDMjIyLjQ0NSAxMjQuNjY0IDIyMi41MjIgMTI0LjY0NSAyMjIuNiAxMjQuNjQ1QzIyMi42NzggMTI0LjY0NSAyMjIuNzU0IDEyNC42NjQgMjIyLjgyMyAxMjQuNzAyQzIyNi41NDMgMTI2LjQ1IDIzMC4wNjggMTI4LjU4NiAyMzMuMzM4IDEzMS4wNzZDMjMzLjQwMiAxMzEuMTIzIDIzMy40NTQgMTMxLjE4NCAyMzMuNDg5IDEzMS4yNTRDMjMzLjUyNCAxMzEuMzI1IDIzMy41NDIgMTMxLjQwMyAyMzMuNTQxIDEzMS40ODJMMjMxLjYxMyAxNDIuOTQxQzIzMS41OTggMTQzLjAyNyAyMzEuNTYxIDE0My4xMDggMjMxLjUwNiAxNDMuMTc1QzIzMS40NTEgMTQzLjI0MyAyMzEuMzc5IDE0My4yOTUgMjMxLjI5OCAxNDMuMzI3TDIzMS4xMTUgMTQzLjM0N1pNMjIxLjMyMSAxMzUuOTQ4QzIyNC42NDcgMTM3LjYzNCAyMjcuODA3IDEzOS42MjkgMjMwLjc2IDE0MS45MDZMMjMyLjQ4NiAxMzEuNjk1QzIyOS41MTMgMTI5LjQ2OSAyMjYuMzM5IDEyNy41MjUgMjIzLjAwNiAxMjUuODg5TDIyMS4zMjEgMTM1Ljk0OFpcIlxuICAgICAgICBmaWxsPVwiIzIzMUYyMFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yNTIuMzkgNDcuNDRDMjU1LjE3NCA1MC40NjA3IDI1Ny43MTMgNTMuNjk4NiAyNTkuOTgyIDU3LjEyMzFMMjcwLjc5MiA1NS4wOTMxQzI2OS4wMzcgNTEuNTU1OSAyNjYuOTMyIDQ4LjIwMzIgMjY0LjUwOSA0NS4wODUyTDI1Mi4zOSA0Ny40NFpcIlxuICAgICAgICBmaWxsPVwiI0QxRDNENFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yNTkuOTgyIDU3LjU5QzI1OS44OTggNTcuNTkwMSAyNTkuODE2IDU3LjU2OTggMjU5Ljc0MSA1Ny41MzA5QzI1OS42NjcgNTcuNDkyIDI1OS42MDMgNTcuNDM1NyAyNTkuNTU2IDU3LjM2NjdDMjU3LjMwOSA1My45NTg5IDI1NC43ODcgNTAuNzQwNyAyNTIuMDE0IDQ3Ljc0NDVDMjUxLjk1NCA0Ny42NzgzIDI1MS45MTMgNDcuNTk3NyAyNTEuODkzIDQ3LjUxMDVDMjUxLjg3MyA0Ny40MjM0IDI1MS44NzcgNDcuMzMyNyAyNTEuOTAzIDQ3LjI0NzJDMjUxLjkzMiA0Ny4xNjE0IDI1MS45ODMgNDcuMDg0NSAyNTIuMDUgNDcuMDI0MUMyNTIuMTE4IDQ2Ljk2MzcgMjUyLjIgNDYuOTIxNiAyNTIuMjg4IDQ2LjkwMjFMMjY0LjQwNyA0NC40OTY1QzI2NC40OTkgNDQuNDc3IDI2NC41OTUgNDQuNDgzOCAyNjQuNjgzIDQ0LjUxNjFDMjY0Ljc3MSA0NC41NDg1IDI2NC44NDggNDQuNjA1IDI2NC45MDUgNDQuNjc5MkMyNjcuMzQ5IDQ3LjgyMzEgMjY5LjQ3NCA1MS4yMDI5IDI3MS4yNDkgNTQuNzY4M0MyNzEuMjgzIDU0LjgzODcgMjcxLjMgNTQuOTE1OSAyNzEuMyA1NC45OTQxQzI3MS4zIDU1LjA3MjMgMjcxLjI4MiA1NS4xNDk1IDI3MS4yNDggNTUuMjE5OEMyNzEuMjE0IDU1LjI5MDEgMjcxLjE2NCA1NS4zNTE4IDI3MS4xMDMgNTUuNDAwMkMyNzEuMDQxIDU1LjQ0ODUgMjcwLjk3IDU1LjQ4MjQgMjcwLjg5MyA1NS40OTkxTDI2MC4wODQgNTcuNTI5MUwyNTkuOTgyIDU3LjU5Wk0yNTMuMzY0IDQ3LjcyNDJDMjU1Ljg2NCA1MC41MDMzIDI1OC4xNTcgNTMuNDYxNSAyNjAuMjI2IDU2LjU3NUwyNjkuOTkgNTQuNjM2NEMyNjguMzY2IDUxLjQ0MTMgMjY2LjQ1IDQ4LjQwMzYgMjY0LjI2NSA0NS41NjIzTDI1My4zNjQgNDcuNzI0MlpcIlxuICAgICAgICBmaWxsPVwiIzIzMUYyMFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0xOTcuMzg3IDExOS43ODlDMTY0Ljc1NSAxMTkuNzg5IDEzOC4yMTMgMTEwLjY1NCAxMzguMjEzIDk5LjU1MDFDMTM4LjIxMyA5OS40MTU1IDEzOC4yNjYgOTkuMjg2NCAxMzguMzYxIDk5LjE5MTNDMTM4LjQ1NiA5OS4wOTYxIDEzOC41ODUgOTkuMDQyNiAxMzguNzIgOTkuMDQyNkMxMzguODU1IDk5LjA0MjYgMTM4Ljk4NCA5OS4wOTYxIDEzOS4wNzkgOTkuMTkxM0MxMzkuMTc0IDk5LjI4NjQgMTM5LjIyOCA5OS40MTU1IDEzOS4yMjggOTkuNTUwMUMxMzkuMjI4IDExMC4xNDcgMTY1LjMxMyAxMTguNzc0IDE5Ny4zODcgMTE4Ljc3NEMyMjkuNDYxIDExOC43NzQgMjU1LjU0NyAxMTAuMTQ3IDI1NS41NDcgOTkuNTUwMUMyNTUuNTQ3IDk5LjQxNTUgMjU1LjYgOTkuMjg2NCAyNTUuNjk1IDk5LjE5MTNDMjU1Ljc5IDk5LjA5NjEgMjU1LjkxOSA5OS4wNDI2IDI1Ni4wNTQgOTkuMDQyNkMyNTYuMTg5IDk5LjA0MjYgMjU2LjMxOCA5OS4wOTYxIDI1Ni40MTMgOTkuMTkxM0MyNTYuNTA4IDk5LjI4NjQgMjU2LjU2MiA5OS40MTU1IDI1Ni41NjIgOTkuNTUwMUMyNTYuNTYyIDExMC44OTggMjMwLjU2NyAxMTkuNzg5IDE5Ny4zODcgMTE5Ljc4OVpcIlxuICAgICAgICBmaWxsPVwiIzIzMUYyMFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yMDkuODkyIDE4OC4wMThDMjA2LjU1MiAxODguMDE4IDIwNi41NTIgMTkzLjIwNCAyMDkuODkyIDE5My4yMDRDMjEzLjIzMSAxOTMuMjA0IDIxMy4yMzEgMTg4LjAxOCAyMDkuODkyIDE4OC4wMThaXCJcbiAgICAgICAgZmlsbD1cIndoaXRlXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTIxNi4xOTUgMjM1LjM1N0wyMTUuOTUxIDIzNC44N0MyMTUuNDA5IDIzNC4wMjEgMjE0LjU4NyAyMzMuMzg5IDIxMy42MjcgMjMzLjA4NEMyMTMuMTI0IDIzMi45MjYgMjEyLjU4OSAyMzIuOTAxIDIxMi4wNzQgMjMzLjAxMkMyMTEuNTU4IDIzMy4wMzIgMjExLjA1NyAyMzMuMTkgMjEwLjYyMyAyMzMuNDY5TDIwOS44NDEgMjM0LjA3OEMyMDkuMzYxIDIzNC41NTMgMjA5LjAxMSAyMzUuMTQ0IDIwOC44MjYgMjM1Ljc5NEMyMDguODI2IDIzNi4xMzkgMjA4LjczNSAyMzYuNDg0IDIwOC42OTQgMjM2LjgwOUMyMDguNjkgMjM3LjUgMjA4Ljg3MiAyMzguMTgxIDIwOS4yMjIgMjM4Ljc3OEwyMDkuNDY2IDIzOS4yNTVDMjA5LjcwMiAyMzkuNzAyIDIxMC4wNTIgMjQwLjA4IDIxMC40ODEgMjQwLjM1MUMyMTAuODUgMjQwLjY5NSAyMTEuMzA2IDI0MC45MzQgMjExLjggMjQxLjA0MUMyMTIuODI4IDI0MS4yODIgMjEzLjkwOSAyNDEuMTQ1IDIxNC44NDUgMjQwLjY1NUwyMTUuNjI3IDI0MC4wNDZDMjE2LjEwNyAyMzkuNTcxIDIxNi40NTYgMjM4Ljk4MSAyMTYuNjQyIDIzOC4zMzFDMjE2LjY0MiAyMzcuOTg2IDIxNi43MzMgMjM3LjY0MSAyMTYuNzc0IDIzNy4zMTZDMjE2Ljc2NCAyMzYuNjIyIDIxNi41NjQgMjM1Ljk0NSAyMTYuMTk1IDIzNS4zNTdaXCJcbiAgICAgICAgZmlsbD1cIndoaXRlXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTE3OC4wMjEgMTc4LjIxM0MxNzMuMDE3IDE3OC4yMTMgMTczLjAwNyAxODUuOTg4IDE3OC4wMjEgMTg1Ljk4OEMxODMuMDM1IDE4NS45ODggMTgzLjAyNSAxNzguMjEzIDE3OC4wMjEgMTc4LjIxM1pcIlxuICAgICAgICBmaWxsPVwid2hpdGVcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMTk3LjcyMiAyMDQuMDA0QzE5Mi43MTggMjA0LjAwNCAxOTIuNzA4IDIxMS43NzkgMTk3LjcyMiAyMTEuNzc5QzIwMi43MzYgMjExLjc3OSAyMDIuNzM2IDIwNC4wMDQgMTk3LjcyMiAyMDQuMDA0WlwiXG4gICAgICAgIGZpbGw9XCJ3aGl0ZVwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0xNzcuNTM0IDIyOC4xMUMxNzIuNTMgMjI4LjExIDE3Mi41MiAyMzUuODg1IDE3Ny41MzQgMjM1Ljg4NUMxODIuNTQ4IDIzNS44ODUgMTgyLjUzOCAyMjguMTEgMTc3LjUzNCAyMjguMTFaXCJcbiAgICAgICAgZmlsbD1cIndoaXRlXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTIyOC4xNDIgMTkzLjUzOUMyMjMuMTM4IDE5My41MzkgMjIzLjEyNyAyMDEuMzE0IDIyOC4xNDIgMjAxLjMxNEMyMzMuMTU2IDIwMS4zMTQgMjMzLjE1NiAxOTMuNTM5IDIyOC4xNDIgMTkzLjUzOVpcIlxuICAgICAgICBmaWxsPVwid2hpdGVcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMTcwLjM0NyAyMDEuMjAyQzE2NS4zNDQgMjAxLjIwMiAxNjUuMzQ0IDIwOC45NzcgMTcwLjM0NyAyMDguOTc3QzE3NS4zNTEgMjA4Ljk3NyAxNzUuMzYyIDIwMS4yMDIgMTcwLjM0NyAyMDEuMjAyWlwiXG4gICAgICAgIGZpbGw9XCJ3aGl0ZVwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yMjYuMTkzIDIxOS4wODdDMjIxLjE4OSAyMTkuMDg3IDIyMS4xNzkgMjI2Ljg2MiAyMjYuMTkzIDIyNi44NjJDMjMxLjIwNyAyMjYuODYyIDIzMS4yMDcgMjE5LjA4NyAyMjYuMTkzIDIxOS4wODdaXCJcbiAgICAgICAgZmlsbD1cIndoaXRlXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTE5NC41NjUgMTgxLjQyQzE5MS4yMjYgMTgxLjQyIDE5MS4yMTYgMTg2LjYwNyAxOTQuNTY1IDE4Ni42MDdDMTk3LjkxNSAxODYuNjA3IDE5Ny45MjUgMTgxLjQyIDE5NC41NjUgMTgxLjQyWlwiXG4gICAgICAgIGZpbGw9XCJ3aGl0ZVwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0xOTYuMjMgMjQzLjM5NkMxOTYuMTc0IDI0My4yMzkgMTk2LjA4NCAyNDMuMDk3IDE5NS45NjYgMjQyLjk4QzE5NS44NDkgMjQyLjg2MiAxOTUuNzA2IDI0Mi43NzIgMTk1LjU1IDI0Mi43MTZDMTk1LjM5NyAyNDIuNjM0IDE5NS4yMjUgMjQyLjU5NSAxOTUuMDUzIDI0Mi42MDRIMTk0LjcwN0MxOTQuNDg4IDI0Mi42NjMgMTk0LjI4OSAyNDIuNzc4IDE5NC4xMjkgMjQyLjkzOUMxOTQuMDY4IDI0My4wMzEgMTkzLjk5NyAyNDMuMTEyIDE5My45MjYgMjQzLjIwM0MxOTMuODEyIDI0My40MDQgMTkzLjc1MyAyNDMuNjMyIDE5My43NTMgMjQzLjg2M1YyNDQuMzVDMTkzLjc0NiAyNDQuNTI2IDE5My43ODQgMjQ0LjcwMSAxOTMuODY1IDI0NC44NThDMTkzLjkxNyAyNDUuMDE2IDE5NC4wMDggMjQ1LjE1OSAxOTQuMTI5IDI0NS4yNzRDMTk0LjI0NSAyNDUuMzkzIDE5NC4zODggMjQ1LjQ4MyAxOTQuNTQ1IDI0NS41MzhDMTk0LjcwMiAyNDUuNjE4IDE5NC44NzcgMjQ1LjY1NyAxOTUuMDUzIDI0NS42NDlIMTk1LjM5OEMxOTUuNjEzIDI0NS41ODggMTk1LjgwOSAyNDUuNDczIDE5NS45NjYgMjQ1LjMxNEwxOTYuMTY5IDI0NS4wNUMxOTYuMjgzIDI0NC44NDkgMTk2LjM0MiAyNDQuNjIyIDE5Ni4zNDIgMjQ0LjM5MVYyNDMuOTE0QzE5Ni4zNTEgMjQzLjczNCAxOTYuMzEyIDI0My41NTYgMTk2LjIzIDI0My4zOTZaXCJcbiAgICAgICAgZmlsbD1cIndoaXRlXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTE4My4zNyAyMTMuOUMxNzkuMTk4IDIxMy45IDE3OS4xODggMjIwLjM4NiAxODMuMzcgMjIwLjM4NkMxODcuNTUyIDIyMC4zODYgMTg3LjU1MiAyMTMuOSAxODMuMzcgMjEzLjlaXCJcbiAgICAgICAgZmlsbD1cIndoaXRlXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTIxMy4wNTkgMjEyLjQzOEMyMDguODg3IDIxMi40MzggMjA4Ljg3NyAyMTguOTE0IDIxMy4wNTkgMjE4LjkxNEMyMTcuMjQgMjE4LjkxNCAyMTcuMjEgMjEyLjQzOCAyMTMuMDU5IDIxMi40MzhaXCJcbiAgICAgICAgZmlsbD1cIndoaXRlXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTE2Mi45MjggMTc0LjE1M0MxNTkuNTk5IDE3NC4xNTMgMTU5LjU4OCAxNzkuMzM5IDE2Mi45MjggMTc5LjMzOUMxNjYuMjY3IDE3OS4zMzkgMTY2LjI3NyAxNzQuMTUzIDE2Mi45MjggMTc0LjE1M1pcIlxuICAgICAgICBmaWxsPVwid2hpdGVcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMjMwLjA5IDE3NS4xMjdDMjI2Ljc1MSAxNzUuMTI3IDIyNi43NDEgMTgwLjMxNCAyMzAuMDkgMTgwLjMxNEMyMzMuNDQgMTgwLjMxNCAyMzMuNDUgMTc1LjEyNyAyMzAuMDkgMTc1LjEyN1pcIlxuICAgICAgICBmaWxsPVwid2hpdGVcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMTkxLjc2NCAyMjMuODI3QzE5Ni44MzkgMjE4LjI5NSAyMjMuNjg2IDIxNi41MzkgMjM4LjY0NyAyMTcuNTY0QzI1My42MDggMjE4LjU4OSAyNjEuMzQyIDIyNS4wMDQgMjYzLjY3NyAyMzIuOTUyQzI2Ni4wMTEgMjQwLjg5OSAyNjguNDM3IDI2NS4zNCAyNDguOTc5IDI3My44MzZDMjI5LjUyMiAyODIuMzMxIDIwNC4zMiAyODEuNDU4IDE5NS43NzMgMjY5LjM2QzE4Ny4yMjcgMjU3LjI2MSAxODYuNjU4IDIyOS4zNTggMTkxLjc2NCAyMjMuODI3WlwiXG4gICAgICAgIGZpbGw9XCIjMjMxRjIwXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTIyMi4wNDEgMjc5Ljk0NkMyMTAuNjk0IDI3OS45NDYgMjAwLjQxMiAyNzYuNzg5IDE5NS4zNTcgMjY5LjY0NEMxODYuNDc2IDI1Ny4wODggMTg2LjE3MSAyMjkuMTU1IDE5MS4zOTkgMjIzLjQ4MkwxOTEuNzY0IDIyMy44MjdMMTkxLjM5OSAyMjMuNDgyQzE5Ni45MSAyMTcuNTEzIDIyNS4xMDcgMjE2LjEzMyAyMzguNjc3IDIxNy4wNTdDMjUyLjQxIDIxOC4wMTEgMjYxLjQ2NCAyMjMuNjAzIDI2NC4xNTQgMjMyLjgwOUMyNjYuNTA5IDI0MC44NDggMjY4LjgxMyAyNjUuNzI2IDI0OS4xODIgMjc0LjMwM0MyNDAuNjAzIDI3Ny45NzYgMjMxLjM3NCAyNzkuODk1IDIyMi4wNDEgMjc5Ljk0NlpNMjI5LjY2NCAyMTcuNzg3QzIxNC43MDMgMjE3Ljc4NyAxOTYuMTY5IDIxOS44MTcgMTkyLjEwOSAyMjQuMTcyQzE4Ny4xODYgMjI5LjUwMSAxODcuNjg0IDI1Ny4wODggMTk2LjE2OSAyNjkuMDY1QzIwMy4yNzQgMjc5LjEyNCAyMjYuMTEyIDI4My4yNzUgMjQ4Ljc1NiAyNzMuMzY5QzI2Ny43MjcgMjY1LjA5NyAyNjUuNDUzIDI0MC44ODkgMjYzLjE2OSAyMzMuMDk0QzI2MC42MDEgMjI0LjMyNCAyNTEuODcyIDIxOC45ODUgMjM4LjU4NiAyMTguMDcyQzIzNS45MDYgMjE3Ljg3OSAyMzIuODcxIDIxNy43ODcgMjI5LjY2NCAyMTcuNzg3WlwiXG4gICAgICAgIGZpbGw9XCIjMjMxRjIwXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTI3Mi41ODggMjIzLjAzNUMyNzIuNTg4IDIyMy4wMzUgMjcwLjYxOSAyNDIuMDM2IDI3OC44IDI1NC4zMDdDMjg2Ljk4MSAyNjYuNTc5IDMwMC40MyAyNjEuMTM4IDMwOS4yNSAyNTQuNDI5QzMxOC4wNzEgMjQ3LjcyIDMyMS44OTcgMjI2LjMxMyAzMjAuNDE1IDIxNS42NDZDMzE4LjkzMyAyMDQuOTc4IDMxNC44NDMgMjAzLjQ2NiAzMDQuNzc0IDIwNC4yOThDMjk0LjcwNSAyMDUuMTMgMjc3LjI4OCAyMTAuNjMyIDI3Mi41ODggMjIzLjAzNVpcIlxuICAgICAgICBmaWxsPVwiIzIzMUYyMFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yOTEuNjQgMjYyLjExM0MyOTAuNzM5IDI2Mi4xMTQgMjg5LjgzOSAyNjIuMDM5IDI4OC45NSAyNjEuODg5QzI4NC42OTcgMjYxLjE3OSAyODEuMTQ1IDI1OC43MTIgMjc4LjM4NCAyNTQuNTcxQzI3MC4xOTMgMjQyLjMgMjcyLjA3MSAyMjMuMTU3IDI3Mi4wOTEgMjIyLjk2NEMyNzIuMDg2IDIyMi45MjQgMjcyLjA4NiAyMjIuODgzIDI3Mi4wOTEgMjIyLjg0MkMyNzYuODMxIDIxMC4zNjggMjk0LjE4OCAyMDQuNTcyIDMwNC42OTMgMjAzLjc4QzMxNC44NDMgMjAyLjk4OSAzMTkuMjg5IDIwNC40NCAzMjAuODcyIDIxNS41NjVDMzIyLjQ1NSAyMjYuNjg5IDMxOC40MTYgMjQ4LjExNiAzMDkuNTU1IDI1NC44MjVDMzA1Ljc5OSAyNTcuNjg3IDI5OC44MDYgMjYyLjExMyAyOTEuNjQgMjYyLjExM1pNMjczLjA4NiAyMjMuMTM3QzI3Mi45NzQgMjI0LjM1NSAyNzEuNDcyIDI0Mi40MjIgMjc5LjIyNyAyNTQuMDEzQzI4MS44MjUgMjU3LjkxIDI4NS4xNTQgMjYwLjIzNSAyODkuMTEzIDI2MC44OTVDMjk2Ljc4NiAyNjIuMTk0IDMwNC44NDUgMjU3LjEzOSAzMDguOTY2IDI1NC4wMjNDMzEyLjg1MyAyNTEuMDY5IDMxNi4xNDIgMjQ0LjgxNyAzMTguMjMzIDIzNi4zOTJDMzIwLjA0IDIyOS4xMDUgMzIwLjY3OSAyMjEuMTY3IDMxOS44OTggMjE1LjcwN0MzMTguNDM2IDIwNS40NjUgMzE0LjgyMyAyMDMuOTk0IDMwNC43OTQgMjA0Ljc4NUMyOTQuNTYzIDIwNS41OTcgMjc3LjY4NCAyMTEuMTQ5IDI3My4wODYgMjIzLjEzN1pcIlxuICAgICAgICBmaWxsPVwiIzIzMUYyMFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yNzYuOTYzIDIyNi40NTZDMjc2Ljk2MyAyMjYuNDU2IDI3NC4xMjEgMjIzLjY2NCAyNjYuODEzIDIyNC43QzI1OS41MDUgMjI1LjczNSAyNTYuMTE1IDIyOS43NzUgMjU2LjExNSAyMjkuNzc1TDI1OC4zMTggMjM1LjYwMUMyNTguMzE4IDIzNS42MDEgMjY3LjQ1MyAyMjguMzIzIDI3Ni4yNTMgMjMzLjI2NkwyNzYuOTYzIDIyNi40NTZaXCJcbiAgICAgICAgZmlsbD1cIiMyMzFGMjBcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMjU4LjMyOCAyMzYuMDU3QzI1OC4yODEgMjM2LjA2NyAyNTguMjMyIDIzNi4wNjcgMjU4LjE4NiAyMzYuMDU3QzI1OC4xMSAyMzYuMDM3IDI1OC4wNCAyMzUuOTk4IDI1Ny45ODEgMjM1Ljk0NkMyNTcuOTIzIDIzNS44OTMgMjU3Ljg3OCAyMzUuODI3IDI1Ny44NTEgMjM1Ljc1M0wyNTUuNjU4IDIyOS45MTdDMjU1LjYyMyAyMjkuODMzIDI1NS42MTIgMjI5Ljc0MSAyNTUuNjI2IDIyOS42NTFDMjU1LjY0MSAyMjkuNTYyIDI1NS42OCAyMjkuNDc4IDI1NS43MzkgMjI5LjQwOUMyNTUuODgyIDIyOS4yNDcgMjU5LjM1MyAyMjUuMjY4IDI2Ni43NTIgMjI0LjIyM0MyNzQuMTUxIDIyMy4xNzcgMjc3LjE5NiAyMjUuOTg5IDI3Ny4zMTggMjI2LjExQzI3Ny4zNzIgMjI2LjE2NSAyNzcuNDEzIDIyNi4yMyAyNzcuNDM5IDIyNi4zMDJDMjc3LjQ2NiAyMjYuMzc0IDI3Ny40NzYgMjI2LjQ1IDI3Ny40NzEgMjI2LjUyN0wyNzYuNzYgMjMzLjI4N0MyNzYuNzUzIDIzMy4zNjkgMjc2LjcyNSAyMzMuNDQ5IDI3Ni42NzkgMjMzLjUxOEMyNzYuNjMyIDIzMy41ODcgMjc2LjU3IDIzMy42NDQgMjc2LjQ5NiAyMzMuNjgyQzI3Ni40MjEgMjMzLjcyMiAyNzYuMzM4IDIzMy43NDMgMjc2LjI1MyAyMzMuNzQzQzI3Ni4xNjggMjMzLjc0MyAyNzYuMDg0IDIzMy43MjIgMjc2LjAwOSAyMzMuNjgyQzI2Ny42NDUgMjI4Ljk3MyAyNTguNzU0IDIzNS45MDUgMjU4LjY0MiAyMzUuOTc2QzI1OC41NDkgMjM2LjAzNiAyNTguNDM5IDIzNi4wNjUgMjU4LjMyOCAyMzYuMDU3Wk0yNTYuNzE0IDIyOS44MzZMMjU4LjU2MSAyMzQuNzU4QzI2MC42NTIgMjMzLjMxNyAyNjguMzI1IDIyOC42NjggMjc1LjgxNiAyMzIuNDE0TDI3Ni40MTUgMjI2LjY2OUMyNzUuNzA0IDIyNi4xNDEgMjcyLjgyMiAyMjQuMzU1IDI2Ni44NzQgMjI1LjE5N0MyNjMuMDgxIDIyNS42MjYgMjU5LjUyMyAyMjcuMjUxIDI1Ni43MTQgMjI5LjgzNlpcIlxuICAgICAgICBmaWxsPVwiIzIzMUYyMFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yMDAuMTQ4IDIyMi4wMkMyMDAuMTQ4IDIyMi4wMiAxMzcuNjM0IDIyMy41MTIgMTI4Ljk3NiAyMjMuMzdDMTIwLjMxOCAyMjMuMjI4IDExMy4xMTIgMjM4LjM4MiAxMTcuMzc1IDI0MS4xODNDMTIxLjYzOCAyNDMuOTg1IDEyNC40OCAyMzIuMjcyIDEzMC4wMTEgMjMxLjgxNUMxMzUuNTQzIDIzMS4zNTggMTk2LjkxIDIzMi45NDEgMTk2LjkxIDIzMi45NDFMMjAwLjE0OCAyMjIuMDJaXCJcbiAgICAgICAgZmlsbD1cIiMyMzFGMjBcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMTE4LjY5NCAyNDIuMTQ3QzExOC4xMjMgMjQyLjE0IDExNy41NjcgMjQxLjk2IDExNy4xMDEgMjQxLjYzQzExNS41MDcgMjQwLjYxNSAxMTUuMTcyIDIzOC4xMDggMTE2LjE3NyAyMzQuODM5QzExNy43MiAyMjkuODQ2IDEyMi42NTMgMjIyLjg4MyAxMjguODU0IDIyMi44ODNIMTI4Ljk4NkMxMzcuNTQzIDIyMy4wNDUgMTk5LjUwOCAyMjEuNTQzIDIwMC4xMzggMjIxLjUzM0MyMDAuMjE3IDIyMS41MzIgMjAwLjI5NSAyMjEuNTQ5IDIwMC4zNjcgMjIxLjU4M0MyMDAuNDM5IDIyMS42MTYgMjAwLjUwMyAyMjEuNjY1IDIwMC41NTQgMjIxLjcyNkMyMDAuNTk5IDIyMS43OTIgMjAwLjYzIDIyMS44NjYgMjAwLjY0NCAyMjEuOTQ1QzIwMC42NTggMjIyLjAyNCAyMDAuNjU1IDIyMi4xMDUgMjAwLjYzNSAyMjIuMTgyTDE5Ny40MTcgMjMzLjA4NEMxOTcuMzgxIDIzMy4xODcgMTk3LjMxNCAyMzMuMjc4IDE5Ny4yMjUgMjMzLjM0M0MxOTcuMTM2IDIzMy40MDggMTk3LjAzIDIzMy40NDUgMTk2LjkyIDIzMy40NDlDMTk2LjMwMSAyMzMuNDQ5IDEzNS41MjMgMjMxLjg5NiAxMzAuMDUyIDIzMi4zNDNDMTI3LjYyNiAyMzIuNTM1IDEyNS42MzcgMjM1LjI2NiAxMjMuODgxIDIzNy42NzFDMTIyLjI3NyAyMzkuODg0IDEyMC42MTIgMjQyLjE0NyAxMTguNjk0IDI0Mi4xNDdaTTEyOC44NDQgMjIzLjg3N0MxMjMuNzY5IDIyMy44NzcgMTE4LjgwNiAyMjkuNjkzIDExNy4xMzEgMjM1LjEzNEMxMTYuMjc4IDIzNy44OTUgMTE2LjQ3MSAyNDAuMDA2IDExNy42NDkgMjQwLjc3N0MxMTkuMzg0IDI0MS45MjQgMTIwLjgzNiAyNDAuMTA3IDEyMy4wNTkgMjM3LjA2MkMxMjQuOTQ2IDIzNC40ODQgMTI3LjExOSAyMzEuNTUxIDEyOS45NjEgMjMxLjMxN0MxMzUuMzEgMjMwLjg4MSAxOTAuODYxIDIzMi4yNzIgMTk2LjU0NSAyMzIuNDE0TDE5OS40NTggMjIyLjU0OEMxOTIuNTg2IDIyMi43MSAxMzcuMDQ1IDIyNC4wMiAxMjguOTU2IDIyMy44ODhMMTI4Ljg0NCAyMjMuODc3WlwiXG4gICAgICAgIGZpbGw9XCIjMjMxRjIwXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9