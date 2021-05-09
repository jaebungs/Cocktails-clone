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


var _jsxFileName = "C:\\Users\\jaebu\\Desktop\\cocktail-v2\\src\\client\\components\\Shaker.js",
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

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5Cjaebu%5CDesktop%5Ccocktail-v2%5Csrc%5Cclient%5Cpages%5Cindex.js!./":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5Cjaebu%5CDesktop%5Ccocktail-v2%5Csrc%5Cclient%5Cpages%5Cindex.js ***!
  \*******************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.i, ".shaker_cocktailSVG__3eEDi {\n  width: 40rem;\n  height: 30rem;\n}\n\n.shaker_cockailSVGContainer__4TRvT {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 700px;\n  height: 700px;\n  border-radius: 50%;\n  border: 2px solid #000;\n  margin: 40px auto 0 auto;\n}\n\n.shaker_searchContainer__1Q-xk {\n  text-align: center;\n  padding: 0 4.5rem;\n}\n\n.shaker_searchContainer__1Q-xk .shaker_h2__7SF51 {\n  font-size: 2.2rem;\n  margin: 5px 0;\n}\n\n.shaker_searchContainer__1Q-xk .shaker_h3__3GrDm {\n  font-size: 1.4rem;\n  font-weight: normal;\n  margin: 0 0 10px 0;\n}\n\n.shaker_searchContainer__1Q-xk .shaker_searchInput__2oqbE {\n  font-size: 1rem;\n  padding: 0.5rem;\n}\n\n.shaker_searchContainer__1Q-xk .shaker_searchBtn__2p0ay {\n  font-size: 1rem;\n  margin: 0.5rem;\n  padding: 0.5rem 0.8rem;\n}", "",{"version":3,"sources":["webpack://shaker.module.scss"],"names":[],"mappings":"AAAA;EACI,YAAA;EACA,aAAA;AACJ;;AAEA;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,sBAAA;EACA,wBAAA;AACJ;;AAEA;EACI,kBAAA;EACA,iBAAA;AACJ;;AACI;EACI,iBAAA;EACA,aAAA;AACR;;AAEI;EACI,iBAAA;EACA,mBAAA;EACA,kBAAA;AAAR;;AAGI;EACI,eAAA;EACA,eAAA;AADR;;AAII;EACI,eAAA;EACA,cAAA;EACA,sBAAA;AAFR","sourcesContent":[".cocktailSVG {\r\n    width: 40rem;\r\n    height: 30rem;\r\n}\r\n\r\n.cockailSVGContainer {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 700px;\r\n    height: 700px;\r\n    border-radius: 50%;\r\n    border: 2px solid #000;\r\n    margin: 40px auto 0 auto;\r\n}\r\n\r\n.searchContainer {\r\n    text-align: center;\r\n    padding: 0 4.5rem;\r\n\r\n    .h2 {\r\n        font-size: 2.2rem;\r\n        margin:  5px 0;\r\n    }\r\n    \r\n    .h3 {\r\n        font-size: 1.4rem;\r\n        font-weight: normal;\r\n        margin: 0 0 10px 0;\r\n    }\r\n\r\n    .searchInput {\r\n        font-size: 1rem;\r\n        padding: 0.5rem;\r\n    }\r\n\r\n    .searchBtn {\r\n        font-size: 1rem;\r\n        margin: 0.5rem;\r\n        padding: 0.5rem 0.8rem;\r\n    }\r\n}\r\n\r\n"],"sourceRoot":""}]);
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

var _jsxFileName = "C:\\Users\\jaebu\\Desktop\\cocktail-v2\\src\\client\\pages\\index.js";

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

var _jsxFileName = "C:\\Users\\jaebu\\Desktop\\cocktail-v2\\src\\client\\svg\\cocktailnotfoundsvg.js";

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

var _jsxFileName = "C:\\Users\\jaebu\\Desktop\\cocktail-v2\\src\\client\\svg\\cocktailsvg.js";

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

},[["./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5Cjaebu%5CDesktop%5Ccocktail-v2%5Csrc%5Cclient%5Cpages%5Cindex.js!./","webpack"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaGFrZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvcG9seWZpbGxzL29iamVjdC1hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtY2xpZW50LXBhZ2VzLWxvYWRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vX05fRS8od2VicGFjaykvY3NzLWxvYWRlci9hcGkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9zaGFrZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vX05fRS8od2VicGFjaykvd2VicGFjay9oYXJtb255LW1vZHVsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2Nqcy9yZWFjdC1qc3gtZGV2LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9zaGFrZXIubW9kdWxlLnNjc3M/MjhlNCIsIndlYnBhY2s6Ly9fTl9FLy4vc3ZnL2NvY2t0YWlsbm90Zm91bmRzdmcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3N2Zy9jb2NrdGFpbHN2Zy5qcyJdLCJuYW1lcyI6WyJTaGFrZXIiLCJ1c2VTdGF0ZSIsImlzTm90Zm91bmQiLCJzZXRJc05vdEZvdW5kIiwic2VhcmNoSW5wdXQiLCJzZXRTZWFyY2hJbnB1dCIsImhhbmRsZUNsaWNrU2VhcmNoIiwiaGFuZGxlQ2hhbmdlSW5wdXQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzdHlsZWQiLCJjb2NrYWlsU1ZHQ29udGFpbmVyIiwiY29ja3RhaWxTVkciLCJzZWFyY2hDb250YWluZXIiLCJoMiIsImgzIiwic2VhcmNoQnRuIiwiSG9tZSIsIkNvY2t0YWlsTm90Rm91bmQiLCJjbGFzc05hbWUiLCJDb2NrdGFpbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQUEsa0JBQ2lCQyxzREFBUSxDQUFDLEtBQUQsQ0FEekI7QUFBQSxNQUNaQyxVQURZO0FBQUEsTUFDQUMsYUFEQTs7QUFBQSxtQkFFbUJGLHNEQUFRLENBQUMsRUFBRCxDQUYzQjtBQUFBLE1BRVpHLFdBRlk7QUFBQSxNQUVDQyxjQUZEOztBQUluQixNQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQU07QUFDOUJILGlCQUFhLENBQUMsSUFBRCxDQUFiO0FBQ0QsR0FGRDs7QUFJQSxNQUFNSSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUFDLENBQUMsRUFBSTtBQUM3Qkgsa0JBQWMsQ0FBQ0csQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBZDtBQUNELEdBRkQ7O0FBSUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUVDLGlFQUFNLENBQUNDLG1CQUF2QjtBQUFBLGVBQ0csQ0FBQ1YsVUFBRCxnQkFDQyxxRUFBQywyREFBRDtBQUFhLGVBQVMsRUFBRVMsaUVBQU0sQ0FBQ0U7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURELGdCQUdDLHFFQUFDLG1FQUFEO0FBQWtCLGVBQVMs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OztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEhBQTBIO0FBQzFIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbUVBQW1FOztBQUVuRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiLFdBQVcsY0FBYztBQUN6QixXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEVBQUU7O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssRUFBRTtBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkIsMkRBQTJELFNBQVM7QUFDcEUseUJBQXlCLFNBQVM7QUFDbEM7QUFDQSxhQUFhLFNBQVM7QUFDdEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLEVBQUU7QUFDYjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw0REFBNEQ7QUFDNUQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFVBQVU7QUFDckIsV0FBVyxFQUFFO0FBQ2I7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsaUJBQWlCO0FBQ3RDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsMkNBQTJDOztBQUUzQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLGlCQUFpQjtBQUNwQzs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZDQUE2QztBQUM3Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIscUJBQXFCO0FBQ2hEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7O0FDbHJDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUViLElBQUksSUFBcUM7QUFDekM7QUFDQTs7QUFFQSxjQUFjLG1CQUFPLENBQUMsZ0ZBQWU7O0FBRXJDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjs7QUFFQTtBQUNBLG1CQUFtQjs7QUFFbkI7QUFDQTtBQUNBLEtBQUs7OztBQUdMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwRkFBMEYsYUFBYTtBQUN2RztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4RkFBOEYsZUFBZTtBQUM3RztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUssRUFBRTs7QUFFUCxpREFBaUQ7QUFDakQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsOE1BQThNOztBQUU5TTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsV0FBVztBQUN4QixjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFdBQVc7QUFDeEIsYUFBYSxVQUFVO0FBQ3ZCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFdBQVc7QUFDeEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsVUFBVTtBQUN2QixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsV0FBVztBQUN4QixhQUFhLE9BQU87QUFDcEIsYUFBYSxVQUFVO0FBQ3ZCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EseUJBQXlCOztBQUV6QiwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxnQkFBZ0I7QUFDM0I7QUFDQSxXQUFXLFVBQVU7QUFDckI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFVBQVU7QUFDckI7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUI7O0FBRXpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1EQUFtRDs7QUFFbkQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxH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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixZQUFZLGFBQWE7QUFDekI7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxFQUFFOztBQUVQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7O0FBR1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCOztBQUVsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUEseUNBQXlDO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQSxtQ0FBbUM7QUFDbkM7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSwyQkFBMkI7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQSx5Q0FBeUM7QUFDekM7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQzs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7O0FBRVI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFROztBQUVSO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0EsU0FBUztBQUNULHdCQUF3QjtBQUN4QjtBQUNBLFNBQVM7QUFDVCx3QkFBd0I7QUFDeEI7QUFDQSxTQUFTO0FBQ1QseUJBQXlCO0FBQ3pCO0FBQ0EsU0FBUztBQUNULHlCQUF5QjtBQUN6QjtBQUNBLFNBQVM7QUFDVCxrQ0FBa0M7QUFDbEM7QUFDQSxTQUFTO0FBQ1QsNEJBQTRCO0FBQzVCO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMERBQTBEOztBQUUxRDtBQUNBOztBQUVBO0FBQ0EsMERBQTBEO0FBQzFEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFROzs7QUFHUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZLGtCQUFrQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7O0FBR2pCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOzs7QUFHSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEhBQTBIO0FBQzFIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbUVBQW1FOztBQUVuRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLEVBQUU7QUFDYjs7O0FBR0E7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a3MvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29ja3RhaWxTVkcgZnJvbSAnLi4vc3ZnL2NvY2t0YWlsc3ZnLmpzJztcbmltcG9ydCBDb3VsZE5vdEZvdW5kU1ZHIGZyb20gJy4uL3N2Zy9jb2NrdGFpbG5vdGZvdW5kc3ZnLmpzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnLi4vc3R5bGVzL3NoYWtlci5tb2R1bGUuc2Nzcyc7XG5cbmNvbnN0IFNoYWtlciA9ICgpID0+IHtcbiAgY29uc3QgW2lzTm90Zm91bmQsIHNldElzTm90Rm91bmRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2VhcmNoSW5wdXQsIHNldFNlYXJjaElucHV0XSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zdCBoYW5kbGVDbGlja1NlYXJjaCA9ICgpID0+IHtcbiAgICBzZXRJc05vdEZvdW5kKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZUlucHV0ID0gZSA9PiB7XG4gICAgc2V0U2VhcmNoSW5wdXQoZS50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlZC5jb2NrYWlsU1ZHQ29udGFpbmVyfT5cbiAgICAgIHshaXNOb3Rmb3VuZCA/IChcbiAgICAgICAgPENvY2t0YWlsU1ZHIGNsYXNzTmFtZT17c3R5bGVkLmNvY2t0YWlsU1ZHfSAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPENvdWxkTm90Rm91bmRTVkcgY2xhc3NOYW1lPXtzdHlsZWQuY29ja3RhaWxTVkd9IC8+XG4gICAgICApfVxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlZC5zZWFyY2hDb250YWluZXJ9PlxuICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZWQuaDJ9PlRoZSBDb2NrdGFpbCBTaGFrZXI8L2gyPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZWQuaDN9PllvdSBnaXZlIHVzIGFuIGluZ3JlZGllbnQsIHdlIGdpdmUgeW91IGEgcmVjaXBlIGZvciBjb2NrdGFpbDwvaDM+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVkLnNlYXJjaElucHV0fVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VJbnB1dH1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlB1dCBvbmUgbGlxdW9yIHR5cGUgaGVyZS5cIlxuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVkLnNlYXJjaEJ0bn0gb25DbGljaz17aGFuZGxlQ2xpY2tTZWFyY2h9PlxuICAgICAgICAgIFNlYXJjaFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2hha2VyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIGFzc2lnbj1PYmplY3QuYXNzaWduLmJpbmQoT2JqZWN0KTttb2R1bGUuZXhwb3J0cz1hc3NpZ247bW9kdWxlLmV4cG9ydHMuZGVmYXVsdD1tb2R1bGUuZXhwb3J0cztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW9iamVjdC1hc3NpZ24uanMubWFwIiwiXG4gICAgKHdpbmRvdy5fX05FWFRfUCA9IHdpbmRvdy5fX05FWFRfUCB8fCBbXSkucHVzaChbXG4gICAgICBcIi9cIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxqYWVidVxcXFxEZXNrdG9wXFxcXGNvY2t0YWlsLXYyXFxcXHNyY1xcXFxjbGllbnRcXFxccGFnZXNcXFxcaW5kZXguanNcIik7XG4gICAgICB9XG4gICAgXSk7XG4gICIsIlwidXNlIHN0cmljdFwiO2NvbnN0IGlzT2xkSUU9ZnVuY3Rpb24gaXNPbGRJRSgpe2xldCBtZW1vO3JldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpe2lmKHR5cGVvZiBtZW1vPT09J3VuZGVmaW5lZCcpey8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4vLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4vLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4vLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbi8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xubWVtbz1Cb29sZWFuKHdpbmRvdyYmZG9jdW1lbnQmJmRvY3VtZW50LmFsbCYmIXdpbmRvdy5hdG9iKTt9cmV0dXJuIG1lbW87fTt9KCk7Y29uc3QgZ2V0VGFyZ2V0PWZ1bmN0aW9uIGdldFRhcmdldCgpe2NvbnN0IG1lbW89e307cmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCl7aWYodHlwZW9mIG1lbW9bdGFyZ2V0XT09PSd1bmRlZmluZWQnKXtsZXQgc3R5bGVUYXJnZXQ9ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOy8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5pZih3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQmJnN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KXt0cnl7Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbi8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5zdHlsZVRhcmdldD1zdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDt9Y2F0Y2goZSl7Ly8gaXN0YW5idWwgaWdub3JlIG5leHRcbnN0eWxlVGFyZ2V0PW51bGw7fX1tZW1vW3RhcmdldF09c3R5bGVUYXJnZXQ7fXJldHVybiBtZW1vW3RhcmdldF07fTt9KCk7Y29uc3Qgc3R5bGVzSW5Eb209W107ZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcil7bGV0IHJlc3VsdD0tMTtmb3IobGV0IGk9MDtpPHN0eWxlc0luRG9tLmxlbmd0aDtpKyspe2lmKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXI9PT1pZGVudGlmaWVyKXtyZXN1bHQ9aTticmVhazt9fXJldHVybiByZXN1bHQ7fWZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LG9wdGlvbnMpe2NvbnN0IGlkQ291bnRNYXA9e307Y29uc3QgaWRlbnRpZmllcnM9W107Zm9yKGxldCBpPTA7aTxsaXN0Lmxlbmd0aDtpKyspe2NvbnN0IGl0ZW09bGlzdFtpXTtjb25zdCBpZD1vcHRpb25zLmJhc2U/aXRlbVswXStvcHRpb25zLmJhc2U6aXRlbVswXTtjb25zdCBjb3VudD1pZENvdW50TWFwW2lkXXx8MDtjb25zdCBpZGVudGlmaWVyPWAke2lkfSAke2NvdW50fWA7aWRDb3VudE1hcFtpZF09Y291bnQrMTtjb25zdCBpbmRleD1nZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtjb25zdCBvYmo9e2NzczppdGVtWzFdLG1lZGlhOml0ZW1bMl0sc291cmNlTWFwOml0ZW1bM119O2lmKGluZGV4IT09LTEpe3N0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7c3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTt9ZWxzZXtzdHlsZXNJbkRvbS5wdXNoKHtpZGVudGlmaWVyLHVwZGF0ZXI6YWRkU3R5bGUob2JqLG9wdGlvbnMpLHJlZmVyZW5jZXM6MX0pO31pZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO31yZXR1cm4gaWRlbnRpZmllcnM7fWZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKXtjb25zdCBzdHlsZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO2NvbnN0IGF0dHJpYnV0ZXM9b3B0aW9ucy5hdHRyaWJ1dGVzfHx7fTtpZih0eXBlb2YgYXR0cmlidXRlcy5ub25jZT09PSd1bmRlZmluZWQnKXtjb25zdCBub25jZT0vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbnR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyE9PSd1bmRlZmluZWQnP19fd2VicGFja19ub25jZV9fOm51bGw7aWYobm9uY2Upe2F0dHJpYnV0ZXMubm9uY2U9bm9uY2U7fX1PYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGtleT0+e3N0eWxlLnNldEF0dHJpYnV0ZShrZXksYXR0cmlidXRlc1trZXldKTt9KTtpZih0eXBlb2Ygb3B0aW9ucy5pbnNlcnQ9PT0nZnVuY3Rpb24nKXtvcHRpb25zLmluc2VydChzdHlsZSk7fWVsc2V7Y29uc3QgdGFyZ2V0PWdldFRhcmdldChvcHRpb25zLmluc2VydHx8J2hlYWQnKTtpZighdGFyZ2V0KXt0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO310YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO31yZXR1cm4gc3R5bGU7fWZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSl7Ly8gaXN0YW5idWwgaWdub3JlIGlmXG5pZihzdHlsZS5wYXJlbnROb2RlPT09bnVsbCl7cmV0dXJuIGZhbHNlO31zdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTt9LyogaXN0YW5idWwgaWdub3JlIG5leHQgICovY29uc3QgcmVwbGFjZVRleHQ9ZnVuY3Rpb24gcmVwbGFjZVRleHQoKXtjb25zdCB0ZXh0U3RvcmU9W107cmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgscmVwbGFjZW1lbnQpe3RleHRTdG9yZVtpbmRleF09cmVwbGFjZW1lbnQ7cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7fTt9KCk7ZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSxpbmRleCxyZW1vdmUsb2JqKXtjb25zdCBjc3M9cmVtb3ZlPycnOm9iai5tZWRpYT9gQG1lZGlhICR7b2JqLm1lZGlhfSB7JHtvYmouY3NzfX1gOm9iai5jc3M7Ly8gRm9yIG9sZCBJRVxuLyogaXN0YW5idWwgaWdub3JlIGlmICAqL2lmKHN0eWxlLnN0eWxlU2hlZXQpe3N0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dD1yZXBsYWNlVGV4dChpbmRleCxjc3MpO31lbHNle2NvbnN0IGNzc05vZGU9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtjb25zdCBjaGlsZE5vZGVzPXN0eWxlLmNoaWxkTm9kZXM7aWYoY2hpbGROb2Rlc1tpbmRleF0pe3N0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTt9aWYoY2hpbGROb2Rlcy5sZW5ndGgpe3N0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLGNoaWxkTm9kZXNbaW5kZXhdKTt9ZWxzZXtzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTt9fX1mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLG9wdGlvbnMsb2JqKXtsZXQgY3NzPW9iai5jc3M7Y29uc3QgbWVkaWE9b2JqLm1lZGlhO2NvbnN0IHNvdXJjZU1hcD1vYmouc291cmNlTWFwO2lmKG1lZGlhKXtzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJyxtZWRpYSk7fWVsc2V7c3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO31pZihzb3VyY2VNYXAmJnR5cGVvZiBidG9hIT09J3VuZGVmaW5lZCcpe2Nzcys9YFxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsJHtidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpfSAqL2A7fS8vIEZvciBvbGQgSUVcbi8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9pZihzdHlsZS5zdHlsZVNoZWV0KXtzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQ9Y3NzO31lbHNle3doaWxlKHN0eWxlLmZpcnN0Q2hpbGQpe3N0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO31zdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTt9fWxldCBzaW5nbGV0b249bnVsbDtsZXQgc2luZ2xldG9uQ291bnRlcj0wO2Z1bmN0aW9uIGFkZFN0eWxlKG9iaixvcHRpb25zKXtsZXQgc3R5bGU7bGV0IHVwZGF0ZTtsZXQgcmVtb3ZlO2lmKG9wdGlvbnMuc2luZ2xldG9uKXtjb25zdCBzdHlsZUluZGV4PXNpbmdsZXRvbkNvdW50ZXIrKztzdHlsZT1zaW5nbGV0b258fChzaW5nbGV0b249aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTt1cGRhdGU9YXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsc3R5bGUsc3R5bGVJbmRleCxmYWxzZSk7cmVtb3ZlPWFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLHN0eWxlLHN0eWxlSW5kZXgsdHJ1ZSk7fWVsc2V7c3R5bGU9aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO3VwZGF0ZT1hcHBseVRvVGFnLmJpbmQobnVsbCxzdHlsZSxvcHRpb25zKTtyZW1vdmU9KCk9PntyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO307fXVwZGF0ZShvYmopO3JldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmope2lmKG5ld09iail7aWYobmV3T2JqLmNzcz09PW9iai5jc3MmJm5ld09iai5tZWRpYT09PW9iai5tZWRpYSYmbmV3T2JqLnNvdXJjZU1hcD09PW9iai5zb3VyY2VNYXApe3JldHVybjt9dXBkYXRlKG9iaj1uZXdPYmopO31lbHNle3JlbW92ZSgpO319O31tb2R1bGUuZXhwb3J0cz0obGlzdCxvcHRpb25zKT0+e29wdGlvbnM9b3B0aW9uc3x8e307Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4vLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5pZighb3B0aW9ucy5zaW5nbGV0b24mJnR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiE9PSdib29sZWFuJyl7b3B0aW9ucy5zaW5nbGV0b249aXNPbGRJRSgpO31saXN0PWxpc3R8fFtdO2xldCBsYXN0SWRlbnRpZmllcnM9bW9kdWxlc1RvRG9tKGxpc3Qsb3B0aW9ucyk7cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KXtuZXdMaXN0PW5ld0xpc3R8fFtdO2lmKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSE9PSdbb2JqZWN0IEFycmF5XScpe3JldHVybjt9Zm9yKGxldCBpPTA7aTxsYXN0SWRlbnRpZmllcnMubGVuZ3RoO2krKyl7Y29uc3QgaWRlbnRpZmllcj1sYXN0SWRlbnRpZmllcnNbaV07Y29uc3QgaW5kZXg9Z2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7c3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTt9Y29uc3QgbmV3TGFzdElkZW50aWZpZXJzPW1vZHVsZXNUb0RvbShuZXdMaXN0LG9wdGlvbnMpO2ZvcihsZXQgaT0wO2k8bGFzdElkZW50aWZpZXJzLmxlbmd0aDtpKyspe2NvbnN0IGlkZW50aWZpZXI9bGFzdElkZW50aWZpZXJzW2ldO2NvbnN0IGluZGV4PWdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO2lmKHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzPT09MCl7c3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIoKTtzdHlsZXNJbkRvbS5zcGxpY2UoaW5kZXgsMSk7fX1sYXN0SWRlbnRpZmllcnM9bmV3TGFzdElkZW50aWZpZXJzO307fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cz1mdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBuPXs3NjI6ZnVuY3Rpb24obil7bi5leHBvcnRzPWZ1bmN0aW9uKG4pe3ZhciB0PVtdO3QudG9TdHJpbmc9ZnVuY3Rpb24gdG9TdHJpbmcoKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24odCl7dmFyIHI9Y3NzV2l0aE1hcHBpbmdUb1N0cmluZyh0LG4pO2lmKHRbMl0pe3JldHVyblwiQG1lZGlhIFwiLmNvbmNhdCh0WzJdLFwiIHtcIikuY29uY2F0KHIsXCJ9XCIpfXJldHVybiByfSkuam9pbihcIlwiKX07dC5pPWZ1bmN0aW9uKG4scixvKXtpZih0eXBlb2Ygbj09PVwic3RyaW5nXCIpe249W1tudWxsLG4sXCJcIl1dfXZhciBlPXt9O2lmKG8pe2Zvcih2YXIgYT0wO2E8dGhpcy5sZW5ndGg7YSsrKXt2YXIgYz10aGlzW2FdWzBdO2lmKGMhPW51bGwpe2VbY109dHJ1ZX19fWZvcih2YXIgaT0wO2k8bi5sZW5ndGg7aSsrKXt2YXIgdT1bXS5jb25jYXQobltpXSk7aWYobyYmZVt1WzBdXSl7Y29udGludWV9aWYocil7aWYoIXVbMl0pe3VbMl09cn1lbHNle3VbMl09XCJcIi5jb25jYXQocixcIiBhbmQgXCIpLmNvbmNhdCh1WzJdKX19dC5wdXNoKHUpfX07cmV0dXJuIHR9O2Z1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcobix0KXt2YXIgcj1uWzFdfHxcIlwiO3ZhciBvPW5bM107aWYoIW8pe3JldHVybiByfWlmKHQmJnR5cGVvZiBidG9hPT09XCJmdW5jdGlvblwiKXt2YXIgZT10b0NvbW1lbnQobyk7dmFyIGE9by5zb3VyY2VzLm1hcChmdW5jdGlvbihuKXtyZXR1cm5cIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KG8uc291cmNlUm9vdHx8XCJcIikuY29uY2F0KG4sXCIgKi9cIil9KTtyZXR1cm5bcl0uY29uY2F0KGEpLmNvbmNhdChbZV0pLmpvaW4oXCJcXG5cIil9cmV0dXJuW3JdLmpvaW4oXCJcXG5cIil9ZnVuY3Rpb24gdG9Db21tZW50KG4pe3ZhciB0PWJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KG4pKSkpO3ZhciByPVwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KHQpO3JldHVyblwiLyojIFwiLmNvbmNhdChyLFwiICovXCIpfX19O3ZhciB0PXt9O2Z1bmN0aW9uIF9fbmNjd3Bja19yZXF1aXJlX18ocil7aWYodFtyXSl7cmV0dXJuIHRbcl0uZXhwb3J0c312YXIgbz10W3JdPXtleHBvcnRzOnt9fTt2YXIgZT10cnVlO3RyeXtuW3JdKG8sby5leHBvcnRzLF9fbmNjd3Bja19yZXF1aXJlX18pO2U9ZmFsc2V9ZmluYWxseXtpZihlKWRlbGV0ZSB0W3JdfXJldHVybiBvLmV4cG9ydHN9X19uY2N3cGNrX3JlcXVpcmVfXy5hYj1fX2Rpcm5hbWUrXCIvXCI7cmV0dXJuIF9fbmNjd3Bja19yZXF1aXJlX18oNzYyKX0oKTsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuc2hha2VyX2NvY2t0YWlsU1ZHX18zZUVEaSB7XFxuICB3aWR0aDogNDByZW07XFxuICBoZWlnaHQ6IDMwcmVtO1xcbn1cXG5cXG4uc2hha2VyX2NvY2thaWxTVkdDb250YWluZXJfXzRUUnZUIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA3MDBweDtcXG4gIGhlaWdodDogNzAwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xcbiAgbWFyZ2luOiA0MHB4IGF1dG8gMCBhdXRvO1xcbn1cXG5cXG4uc2hha2VyX3NlYXJjaENvbnRhaW5lcl9fMVEteGsge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMCA0LjVyZW07XFxufVxcblxcbi5zaGFrZXJfc2VhcmNoQ29udGFpbmVyX18xUS14ayAuc2hha2VyX2gyX183U0Y1MSB7XFxuICBmb250LXNpemU6IDIuMnJlbTtcXG4gIG1hcmdpbjogNXB4IDA7XFxufVxcblxcbi5zaGFrZXJfc2VhcmNoQ29udGFpbmVyX18xUS14ayAuc2hha2VyX2gzX18zR3JEbSB7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBtYXJnaW46IDAgMCAxMHB4IDA7XFxufVxcblxcbi5zaGFrZXJfc2VhcmNoQ29udGFpbmVyX18xUS14ayAuc2hha2VyX3NlYXJjaElucHV0X18yb3FiRSB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBwYWRkaW5nOiAwLjVyZW07XFxufVxcblxcbi5zaGFrZXJfc2VhcmNoQ29udGFpbmVyX18xUS14ayAuc2hha2VyX3NlYXJjaEJ0bl9fMnAwYXkge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgbWFyZ2luOiAwLjVyZW07XFxuICBwYWRkaW5nOiAwLjVyZW0gMC44cmVtO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc2hha2VyLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFDSTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtBQUNSOztBQUVJO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQVI7O0FBR0k7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQURSOztBQUlJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtBQUZSXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jb2NrdGFpbFNWRyB7XFxyXFxuICAgIHdpZHRoOiA0MHJlbTtcXHJcXG4gICAgaGVpZ2h0OiAzMHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvY2thaWxTVkdDb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB3aWR0aDogNzAwcHg7XFxyXFxuICAgIGhlaWdodDogNzAwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcXHJcXG4gICAgbWFyZ2luOiA0MHB4IGF1dG8gMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoQ29udGFpbmVyIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAwIDQuNXJlbTtcXHJcXG5cXHJcXG4gICAgLmgyIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xcclxcbiAgICAgICAgbWFyZ2luOiAgNXB4IDA7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIC5oMyB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICAgICAgICBtYXJnaW46IDAgMCAxMHB4IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNlYXJjaElucHV0IHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2VhcmNoQnRuIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgICAgIG1hcmdpbjogMC41cmVtO1xcclxcbiAgICAgICAgcGFkZGluZzogMC41cmVtIDAuOHJlbTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJjb2NrdGFpbFNWR1wiOiBcInNoYWtlcl9jb2NrdGFpbFNWR19fM2VFRGlcIixcblx0XCJjb2NrYWlsU1ZHQ29udGFpbmVyXCI6IFwic2hha2VyX2NvY2thaWxTVkdDb250YWluZXJfXzRUUnZUXCIsXG5cdFwic2VhcmNoQ29udGFpbmVyXCI6IFwic2hha2VyX3NlYXJjaENvbnRhaW5lcl9fMVEteGtcIixcblx0XCJoMlwiOiBcInNoYWtlcl9oMl9fN1NGNTFcIixcblx0XCJoM1wiOiBcInNoYWtlcl9oM19fM0dyRG1cIixcblx0XCJzZWFyY2hJbnB1dFwiOiBcInNoYWtlcl9zZWFyY2hJbnB1dF9fMm9xYkVcIixcblx0XCJzZWFyY2hCdG5cIjogXCJzaGFrZXJfc2VhcmNoQnRuX18ycDBheVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIm1vZHVsZS5leHBvcnRzID1cbi8qKioqKiovIChmdW5jdGlvbigpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHR2YXIgX193ZWJwYWNrX21vZHVsZXNfXyA9ICh7XG5cbi8qKiovIDkzMTpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUpIHtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcmlnaW5hbE1vZHVsZSkge1xuXHRpZiAoIW9yaWdpbmFsTW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdHZhciBtb2R1bGUgPSBPYmplY3QuY3JlYXRlKG9yaWdpbmFsTW9kdWxlKTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJleHBvcnRzXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWVcblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcblxuXG4vKioqLyB9KVxuXG4vKioqKioqLyBcdH0pO1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX25jY3dwY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcbi8qKioqKiovIFx0XHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdHZhciB0aHJldyA9IHRydWU7XG4vKioqKioqLyBcdFx0dHJ5IHtcbi8qKioqKiovIFx0XHRcdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fbmNjd3Bja19yZXF1aXJlX18pO1xuLyoqKioqKi8gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbi8qKioqKiovIFx0XHR9IGZpbmFsbHkge1xuLyoqKioqKi8gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovIFx0XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gXHQvKiB3ZWJwYWNrL3J1bnRpbWUvY29tcGF0ICovXG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHRfX25jY3dwY2tfcmVxdWlyZV9fLmFiID0gX19kaXJuYW1lICsgXCIvXCI7LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIFx0Ly8gbW9kdWxlIGV4cG9ydHMgbXVzdCBiZSByZXR1cm5lZCBmcm9tIHJ1bnRpbWUgc28gZW50cnkgaW5saW5pbmcgaXMgZGlzYWJsZWRcbi8qKioqKiovIFx0Ly8gc3RhcnR1cFxuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fbmNjd3Bja19yZXF1aXJlX18oOTMxKTtcbi8qKioqKiovIH0pKClcbjsiLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE3LjAuMlxuICogcmVhY3QtanN4LWRldi1ydW50aW1lLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBfYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG4vLyBBVFRFTlRJT05cbi8vIFdoZW4gYWRkaW5nIG5ldyBzeW1ib2xzIHRvIHRoaXMgZmlsZSxcbi8vIFBsZWFzZSBjb25zaWRlciBhbHNvIGFkZGluZyB0byAncmVhY3QtZGV2dG9vbHMtc2hhcmVkL3NyYy9iYWNrZW5kL1JlYWN0U3ltYm9scydcbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gMHhlYWNhO1xuZXhwb3J0cy5GcmFnbWVudCA9IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSAweGVhY2U7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gMHhlYWQxO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IDB4ZWFkODtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gMHhlYWQ0O1xudmFyIFJFQUNUX0JMT0NLX1RZUEUgPSAweGVhZDk7XG52YXIgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSAweGVhZGE7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IDB4ZWFkNTtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gMHhlYWQ3O1xudmFyIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gMHhlYWUwO1xudmFyIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gMHhlYWUxO1xudmFyIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gMHhlYWUyO1xudmFyIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IDB4ZWFlMztcblxuaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcikge1xuICB2YXIgc3ltYm9sRm9yID0gU3ltYm9sLmZvcjtcbiAgUkVBQ1RfRUxFTUVOVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5lbGVtZW50Jyk7XG4gIFJFQUNUX1BPUlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wb3J0YWwnKTtcbiAgZXhwb3J0cy5GcmFnbWVudCA9IHN5bWJvbEZvcigncmVhY3QuZnJhZ21lbnQnKTtcbiAgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3RyaWN0X21vZGUnKTtcbiAgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucHJvZmlsZXInKTtcbiAgUkVBQ1RfUFJPVklERVJfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucHJvdmlkZXInKTtcbiAgUkVBQ1RfQ09OVEVYVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5jb250ZXh0Jyk7XG4gIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZvcndhcmRfcmVmJyk7XG4gIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlJyk7XG4gIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpO1xuICBSRUFDVF9NRU1PX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm1lbW8nKTtcbiAgUkVBQ1RfTEFaWV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sYXp5Jyk7XG4gIFJFQUNUX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmJsb2NrJyk7XG4gIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zZXJ2ZXIuYmxvY2snKTtcbiAgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZnVuZGFtZW50YWwnKTtcbiAgUkVBQ1RfU0NPUEVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2NvcGUnKTtcbiAgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9wYXF1ZS5pZCcpO1xuICBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZGVidWdfdHJhY2VfbW9kZScpO1xuICBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub2Zmc2NyZWVuJyk7XG4gIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGVnYWN5X2hpZGRlbicpO1xufVxuXG52YXIgTUFZQkVfSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG52YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7XG5mdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgaWYgKG1heWJlSXRlcmFibGUgPT09IG51bGwgfHwgdHlwZW9mIG1heWJlSXRlcmFibGUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgbWF5YmVJdGVyYXRvciA9IE1BWUJFX0lURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW01BWUJFX0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF07XG5cbiAgaWYgKHR5cGVvZiBtYXliZUl0ZXJhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIG1heWJlSXRlcmF0b3I7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxudmFyIFJlYWN0U2hhcmVkSW50ZXJuYWxzID0gUmVhY3QuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ7XG5cbmZ1bmN0aW9uIGVycm9yKGZvcm1hdCkge1xuICB7XG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGFyZ3NbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgcHJpbnRXYXJuaW5nKCdlcnJvcicsIGZvcm1hdCwgYXJncyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJpbnRXYXJuaW5nKGxldmVsLCBmb3JtYXQsIGFyZ3MpIHtcbiAgLy8gV2hlbiBjaGFuZ2luZyB0aGlzIGxvZ2ljLCB5b3UgbWlnaHQgd2FudCB0byBhbHNvXG4gIC8vIHVwZGF0ZSBjb25zb2xlV2l0aFN0YWNrRGV2Lnd3dy5qcyBhcyB3ZWxsLlxuICB7XG4gICAgdmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuICAgIHZhciBzdGFjayA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSgpO1xuXG4gICAgaWYgKHN0YWNrICE9PSAnJykge1xuICAgICAgZm9ybWF0ICs9ICclcyc7XG4gICAgICBhcmdzID0gYXJncy5jb25jYXQoW3N0YWNrXSk7XG4gICAgfVxuXG4gICAgdmFyIGFyZ3NXaXRoRm9ybWF0ID0gYXJncy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiAnJyArIGl0ZW07XG4gICAgfSk7IC8vIENhcmVmdWw6IFJOIGN1cnJlbnRseSBkZXBlbmRzIG9uIHRoaXMgcHJlZml4XG5cbiAgICBhcmdzV2l0aEZvcm1hdC51bnNoaWZ0KCdXYXJuaW5nOiAnICsgZm9ybWF0KTsgLy8gV2UgaW50ZW50aW9uYWxseSBkb24ndCB1c2Ugc3ByZWFkIChvciAuYXBwbHkpIGRpcmVjdGx5IGJlY2F1c2UgaXRcbiAgICAvLyBicmVha3MgSUU5OiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzEzNjEwXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZ1xuXG4gICAgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwoY29uc29sZVtsZXZlbF0sIGNvbnNvbGUsIGFyZ3NXaXRoRm9ybWF0KTtcbiAgfVxufVxuXG4vLyBGaWx0ZXIgY2VydGFpbiBET00gYXR0cmlidXRlcyAoZS5nLiBzcmMsIGhyZWYpIGlmIHRoZWlyIHZhbHVlcyBhcmUgZW1wdHkgc3RyaW5ncy5cblxudmFyIGVuYWJsZVNjb3BlQVBJID0gZmFsc2U7IC8vIEV4cGVyaW1lbnRhbCBDcmVhdGUgRXZlbnQgSGFuZGxlIEFQSS5cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIE5vdGU6IHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIChlLmcuIGlmIGl0J3MgYSBwb2x5ZmlsbCkuXG5cblxuICBpZiAodHlwZSA9PT0gZXhwb3J0cy5GcmFnbWVudCB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFIHx8IGVuYWJsZVNjb3BlQVBJICkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsKSB7XG4gICAgaWYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0JMT0NLX1RZUEUgfHwgdHlwZVswXSA9PT0gUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZ2V0V3JhcHBlZE5hbWUob3V0ZXJUeXBlLCBpbm5lclR5cGUsIHdyYXBwZXJOYW1lKSB7XG4gIHZhciBmdW5jdGlvbk5hbWUgPSBpbm5lclR5cGUuZGlzcGxheU5hbWUgfHwgaW5uZXJUeXBlLm5hbWUgfHwgJyc7XG4gIHJldHVybiBvdXRlclR5cGUuZGlzcGxheU5hbWUgfHwgKGZ1bmN0aW9uTmFtZSAhPT0gJycgPyB3cmFwcGVyTmFtZSArIFwiKFwiICsgZnVuY3Rpb25OYW1lICsgXCIpXCIgOiB3cmFwcGVyTmFtZSk7XG59XG5cbmZ1bmN0aW9uIGdldENvbnRleHROYW1lKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgJ0NvbnRleHQnO1xufVxuXG5mdW5jdGlvbiBnZXRDb21wb25lbnROYW1lKHR5cGUpIHtcbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIC8vIEhvc3Qgcm9vdCwgdGV4dCBub2RlIG9yIGp1c3QgaW52YWxpZCB0eXBlLlxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAge1xuICAgIGlmICh0eXBlb2YgdHlwZS50YWcgPT09ICdudW1iZXInKSB7XG4gICAgICBlcnJvcignUmVjZWl2ZWQgYW4gdW5leHBlY3RlZCBvYmplY3QgaW4gZ2V0Q29tcG9uZW50TmFtZSgpLiAnICsgJ1RoaXMgaXMgbGlrZWx5IGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgbnVsbDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgZXhwb3J0cy5GcmFnbWVudDpcbiAgICAgIHJldHVybiAnRnJhZ21lbnQnO1xuXG4gICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgIHJldHVybiAnUG9ydGFsJztcblxuICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgIHJldHVybiAnUHJvZmlsZXInO1xuXG4gICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgcmV0dXJuICdTdHJpY3RNb2RlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2UnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlTGlzdCc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUoY29udGV4dCkgKyAnLkNvbnN1bWVyJztcblxuICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICB2YXIgcHJvdmlkZXIgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUocHJvdmlkZXIuX2NvbnRleHQpICsgJy5Qcm92aWRlcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldFdyYXBwZWROYW1lKHR5cGUsIHR5cGUucmVuZGVyLCAnRm9yd2FyZFJlZicpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKTtcblxuICAgICAgY2FzZSBSRUFDVF9CTE9DS19UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZSh0eXBlLl9yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKGluaXQocGF5bG9hZCkpO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG4vLyBIZWxwZXJzIHRvIHBhdGNoIGNvbnNvbGUubG9ncyB0byBhdm9pZCBsb2dnaW5nIGR1cmluZyBzaWRlLWVmZmVjdCBmcmVlXG4vLyByZXBsYXlpbmcgb24gcmVuZGVyIGZ1bmN0aW9uLiBUaGlzIGN1cnJlbnRseSBvbmx5IHBhdGNoZXMgdGhlIG9iamVjdFxuLy8gbGF6aWx5IHdoaWNoIHdvbid0IGNvdmVyIGlmIHRoZSBsb2cgZnVuY3Rpb24gd2FzIGV4dHJhY3RlZCBlYWdlcmx5LlxuLy8gV2UgY291bGQgYWxzbyBlYWdlcmx5IHBhdGNoIHRoZSBtZXRob2QuXG52YXIgZGlzYWJsZWREZXB0aCA9IDA7XG52YXIgcHJldkxvZztcbnZhciBwcmV2SW5mbztcbnZhciBwcmV2V2FybjtcbnZhciBwcmV2RXJyb3I7XG52YXIgcHJldkdyb3VwO1xudmFyIHByZXZHcm91cENvbGxhcHNlZDtcbnZhciBwcmV2R3JvdXBFbmQ7XG5cbmZ1bmN0aW9uIGRpc2FibGVkTG9nKCkge31cblxuZGlzYWJsZWRMb2cuX19yZWFjdERpc2FibGVkTG9nID0gdHJ1ZTtcbmZ1bmN0aW9uIGRpc2FibGVMb2dzKCkge1xuICB7XG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgcHJldkxvZyA9IGNvbnNvbGUubG9nO1xuICAgICAgcHJldkluZm8gPSBjb25zb2xlLmluZm87XG4gICAgICBwcmV2V2FybiA9IGNvbnNvbGUud2FybjtcbiAgICAgIHByZXZFcnJvciA9IGNvbnNvbGUuZXJyb3I7XG4gICAgICBwcmV2R3JvdXAgPSBjb25zb2xlLmdyb3VwO1xuICAgICAgcHJldkdyb3VwQ29sbGFwc2VkID0gY29uc29sZS5ncm91cENvbGxhcHNlZDtcbiAgICAgIHByZXZHcm91cEVuZCA9IGNvbnNvbGUuZ3JvdXBFbmQ7IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTkwOTlcblxuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBkaXNhYmxlZExvZyxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgaW5mbzogcHJvcHMsXG4gICAgICAgIGxvZzogcHJvcHMsXG4gICAgICAgIHdhcm46IHByb3BzLFxuICAgICAgICBlcnJvcjogcHJvcHMsXG4gICAgICAgIGdyb3VwOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IHByb3BzLFxuICAgICAgICBncm91cEVuZDogcHJvcHNcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBkaXNhYmxlZERlcHRoKys7XG4gIH1cbn1cbmZ1bmN0aW9uIHJlZW5hYmxlTG9ncygpIHtcbiAge1xuICAgIGRpc2FibGVkRGVwdGgtLTtcblxuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBsb2c6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZMb2dcbiAgICAgICAgfSksXG4gICAgICAgIGluZm86IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZJbmZvXG4gICAgICAgIH0pLFxuICAgICAgICB3YXJuOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2V2FyblxuICAgICAgICB9KSxcbiAgICAgICAgZXJyb3I6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZFcnJvclxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXA6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cENvbGxhcHNlZFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBFbmQ6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cEVuZFxuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGlmIChkaXNhYmxlZERlcHRoIDwgMCkge1xuICAgICAgZXJyb3IoJ2Rpc2FibGVkRGVwdGggZmVsbCBiZWxvdyB6ZXJvLiAnICsgJ1RoaXMgaXMgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudERpc3BhdGNoZXI7XG52YXIgcHJlZml4O1xuZnVuY3Rpb24gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICBpZiAocHJlZml4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEV4dHJhY3QgdGhlIFZNIHNwZWNpZmljIHByZWZpeCB1c2VkIGJ5IGVhY2ggbGluZS5cbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIHZhciBtYXRjaCA9IHguc3RhY2sudHJpbSgpLm1hdGNoKC9cXG4oICooYXQgKT8pLyk7XG4gICAgICAgIHByZWZpeCA9IG1hdGNoICYmIG1hdGNoWzFdIHx8ICcnO1xuICAgICAgfVxuICAgIH0gLy8gV2UgdXNlIHRoZSBwcmVmaXggdG8gZW5zdXJlIG91ciBzdGFja3MgbGluZSB1cCB3aXRoIG5hdGl2ZSBzdGFjayBmcmFtZXMuXG5cblxuICAgIHJldHVybiAnXFxuJyArIHByZWZpeCArIG5hbWU7XG4gIH1cbn1cbnZhciByZWVudHJ5ID0gZmFsc2U7XG52YXIgY29tcG9uZW50RnJhbWVDYWNoZTtcblxue1xuICB2YXIgUG9zc2libHlXZWFrTWFwID0gdHlwZW9mIFdlYWtNYXAgPT09ICdmdW5jdGlvbicgPyBXZWFrTWFwIDogTWFwO1xuICBjb21wb25lbnRGcmFtZUNhY2hlID0gbmV3IFBvc3NpYmx5V2Vha01hcCgpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBjb25zdHJ1Y3QpIHtcbiAgLy8gSWYgc29tZXRoaW5nIGFza2VkIGZvciBhIHN0YWNrIGluc2lkZSBhIGZha2UgcmVuZGVyLCBpdCBzaG91bGQgZ2V0IGlnbm9yZWQuXG4gIGlmICghZm4gfHwgcmVlbnRyeSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHtcbiAgICB2YXIgZnJhbWUgPSBjb21wb25lbnRGcmFtZUNhY2hlLmdldChmbik7XG5cbiAgICBpZiAoZnJhbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZyYW1lO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb250cm9sO1xuICByZWVudHJ5ID0gdHJ1ZTtcbiAgdmFyIHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2UgPSBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZTsgLy8gJEZsb3dGaXhNZSBJdCBkb2VzIGFjY2VwdCB1bmRlZmluZWQuXG5cbiAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSB1bmRlZmluZWQ7XG4gIHZhciBwcmV2aW91c0Rpc3BhdGNoZXI7XG5cbiAge1xuICAgIHByZXZpb3VzRGlzcGF0Y2hlciA9IFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudDsgLy8gU2V0IHRoZSBkaXNwYXRjaGVyIGluIERFViBiZWNhdXNlIHRoaXMgbWlnaHQgYmUgY2FsbCBpbiB0aGUgcmVuZGVyIGZ1bmN0aW9uXG4gICAgLy8gZm9yIHdhcm5pbmdzLlxuXG4gICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50ID0gbnVsbDtcbiAgICBkaXNhYmxlTG9ncygpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBUaGlzIHNob3VsZCB0aHJvdy5cbiAgICBpZiAoY29uc3RydWN0KSB7XG4gICAgICAvLyBTb21ldGhpbmcgc2hvdWxkIGJlIHNldHRpbmcgdGhlIHByb3BzIGluIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICAgIHZhciBGYWtlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfTsgLy8gJEZsb3dGaXhNZVxuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGYWtlLnByb3RvdHlwZSwgJ3Byb3BzJywge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBXZSB1c2UgYSB0aHJvd2luZyBzZXR0ZXIgaW5zdGVhZCBvZiBmcm96ZW4gb3Igbm9uLXdyaXRhYmxlIHByb3BzXG4gICAgICAgICAgLy8gYmVjYXVzZSB0aGF0IHdvbid0IHRocm93IGluIGEgbm9uLXN0cmljdCBtb2RlIGZ1bmN0aW9uLlxuICAgICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09ICdvYmplY3QnICYmIFJlZmxlY3QuY29uc3RydWN0KSB7XG4gICAgICAgIC8vIFdlIGNvbnN0cnVjdCBhIGRpZmZlcmVudCBjb250cm9sIGZvciB0aGlzIGNhc2UgdG8gaW5jbHVkZSBhbnkgZXh0cmFcbiAgICAgICAgLy8gZnJhbWVzIGFkZGVkIGJ5IHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChGYWtlLCBbXSk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIFJlZmxlY3QuY29uc3RydWN0KGZuLCBbXSwgRmFrZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIEZha2UuY2FsbCgpO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBmbi5jYWxsKEZha2UucHJvdG90eXBlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICB9XG5cbiAgICAgIGZuKCk7XG4gICAgfVxuICB9IGNhdGNoIChzYW1wbGUpIHtcbiAgICAvLyBUaGlzIGlzIGlubGluZWQgbWFudWFsbHkgYmVjYXVzZSBjbG9zdXJlIGRvZXNuJ3QgZG8gaXQgZm9yIHVzLlxuICAgIGlmIChzYW1wbGUgJiYgY29udHJvbCAmJiB0eXBlb2Ygc2FtcGxlLnN0YWNrID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gVGhpcyBleHRyYWN0cyB0aGUgZmlyc3QgZnJhbWUgZnJvbSB0aGUgc2FtcGxlIHRoYXQgaXNuJ3QgYWxzbyBpbiB0aGUgY29udHJvbC5cbiAgICAgIC8vIFNraXBwaW5nIG9uZSBmcmFtZSB0aGF0IHdlIGFzc3VtZSBpcyB0aGUgZnJhbWUgdGhhdCBjYWxscyB0aGUgdHdvLlxuICAgICAgdmFyIHNhbXBsZUxpbmVzID0gc2FtcGxlLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBjb250cm9sTGluZXMgPSBjb250cm9sLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBzID0gc2FtcGxlTGluZXMubGVuZ3RoIC0gMTtcbiAgICAgIHZhciBjID0gY29udHJvbExpbmVzLmxlbmd0aCAtIDE7XG5cbiAgICAgIHdoaWxlIChzID49IDEgJiYgYyA+PSAwICYmIHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgLy8gV2UgZXhwZWN0IGF0IGxlYXN0IG9uZSBzdGFjayBmcmFtZSB0byBiZSBzaGFyZWQuXG4gICAgICAgIC8vIFR5cGljYWxseSB0aGlzIHdpbGwgYmUgdGhlIHJvb3QgbW9zdCBvbmUuIEhvd2V2ZXIsIHN0YWNrIGZyYW1lcyBtYXkgYmVcbiAgICAgICAgLy8gY3V0IG9mZiBkdWUgdG8gbWF4aW11bSBzdGFjayBsaW1pdHMuIEluIHRoaXMgY2FzZSwgb25lIG1heWJlIGN1dCBvZmZcbiAgICAgICAgLy8gZWFybGllciB0aGFuIHRoZSBvdGhlci4gV2UgYXNzdW1lIHRoYXQgdGhlIHNhbXBsZSBpcyBsb25nZXIgb3IgdGhlIHNhbWVcbiAgICAgICAgLy8gYW5kIHRoZXJlIGZvciBjdXQgb2ZmIGVhcmxpZXIuIFNvIHdlIHNob3VsZCBmaW5kIHRoZSByb290IG1vc3QgZnJhbWUgaW5cbiAgICAgICAgLy8gdGhlIHNhbXBsZSBzb21ld2hlcmUgaW4gdGhlIGNvbnRyb2wuXG4gICAgICAgIGMtLTtcbiAgICAgIH1cblxuICAgICAgZm9yICg7IHMgPj0gMSAmJiBjID49IDA7IHMtLSwgYy0tKSB7XG4gICAgICAgIC8vIE5leHQgd2UgZmluZCB0aGUgZmlyc3Qgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgd2hpY2ggc2hvdWxkIGJlIHRoZVxuICAgICAgICAvLyBmcmFtZSB0aGF0IGNhbGxlZCBvdXIgc2FtcGxlIGZ1bmN0aW9uIGFuZCB0aGUgY29udHJvbC5cbiAgICAgICAgaWYgKHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAvLyBJbiBWOCwgdGhlIGZpcnN0IGxpbmUgaXMgZGVzY3JpYmluZyB0aGUgbWVzc2FnZSBidXQgb3RoZXIgVk1zIGRvbid0LlxuICAgICAgICAgIC8vIElmIHdlJ3JlIGFib3V0IHRvIHJldHVybiB0aGUgZmlyc3QgbGluZSwgYW5kIHRoZSBjb250cm9sIGlzIGFsc28gb24gdGhlIHNhbWVcbiAgICAgICAgICAvLyBsaW5lLCB0aGF0J3MgYSBwcmV0dHkgZ29vZCBpbmRpY2F0b3IgdGhhdCBvdXIgc2FtcGxlIHRocmV3IGF0IHNhbWUgbGluZSBhc1xuICAgICAgICAgIC8vIHRoZSBjb250cm9sLiBJLmUuIGJlZm9yZSB3ZSBlbnRlcmVkIHRoZSBzYW1wbGUgZnJhbWUuIFNvIHdlIGlnbm9yZSB0aGlzIHJlc3VsdC5cbiAgICAgICAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaWYgeW91IHBhc3NlZCBhIGNsYXNzIHRvIGZ1bmN0aW9uIGNvbXBvbmVudCwgb3Igbm9uLWZ1bmN0aW9uLlxuICAgICAgICAgIGlmIChzICE9PSAxIHx8IGMgIT09IDEpIHtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgcy0tO1xuICAgICAgICAgICAgICBjLS07IC8vIFdlIG1heSBzdGlsbCBoYXZlIHNpbWlsYXIgaW50ZXJtZWRpYXRlIGZyYW1lcyBmcm9tIHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgICAgICAgLy8gVGhlIG5leHQgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgc2hvdWxkIGJlIG91ciBtYXRjaCB0aG91Z2guXG5cbiAgICAgICAgICAgICAgaWYgKGMgPCAwIHx8IHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAgICAgICAvLyBWOCBhZGRzIGEgXCJuZXdcIiBwcmVmaXggZm9yIG5hdGl2ZSBjbGFzc2VzLiBMZXQncyByZW1vdmUgaXQgdG8gbWFrZSBpdCBwcmV0dGllci5cbiAgICAgICAgICAgICAgICB2YXIgX2ZyYW1lID0gJ1xcbicgKyBzYW1wbGVMaW5lc1tzXS5yZXBsYWNlKCcgYXQgbmV3ICcsICcgYXQgJyk7XG5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBfZnJhbWUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gLy8gUmV0dXJuIHRoZSBsaW5lIHdlIGZvdW5kLlxuXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gX2ZyYW1lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IHdoaWxlIChzID49IDEgJiYgYyA+PSAwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICByZWVudHJ5ID0gZmFsc2U7XG5cbiAgICB7XG4gICAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQgPSBwcmV2aW91c0Rpc3BhdGNoZXI7XG4gICAgICByZWVuYWJsZUxvZ3MoKTtcbiAgICB9XG5cbiAgICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2U7XG4gIH0gLy8gRmFsbGJhY2sgdG8ganVzdCB1c2luZyB0aGUgbmFtZSBpZiB3ZSBjb3VsZG4ndCBtYWtlIGl0IHRocm93LlxuXG5cbiAgdmFyIG5hbWUgPSBmbiA/IGZuLmRpc3BsYXlOYW1lIHx8IGZuLm5hbWUgOiAnJztcbiAgdmFyIHN5bnRoZXRpY0ZyYW1lID0gbmFtZSA/IGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUpIDogJyc7XG5cbiAge1xuICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBzeW50aGV0aWNGcmFtZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN5bnRoZXRpY0ZyYW1lO1xufVxuZnVuY3Rpb24gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKGZuLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBmYWxzZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvdWxkQ29uc3RydWN0KENvbXBvbmVudCkge1xuICB2YXIgcHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcbiAgcmV0dXJuICEhKHByb3RvdHlwZSAmJiBwcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLCBzb3VyY2UsIG93bmVyRm4pIHtcblxuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAge1xuICAgICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUodHlwZSwgc2hvdWxkQ29uc3RydWN0KHR5cGUpKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKHR5cGUpO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZScpO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlTGlzdCcpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKHR5cGUucmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIC8vIE1lbW8gbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZS50eXBlLCBzb3VyY2UsIG93bmVyRm4pO1xuXG4gICAgICBjYXNlIFJFQUNUX0JMT0NLX1RZUEU6XG4gICAgICAgIHJldHVybiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUodHlwZS5fcmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBMYXp5IG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihpbml0KHBheWxvYWQpLCBzb3VyY2UsIG93bmVyRm4pO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHt9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbnZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCkge1xuICB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5zZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZWxlbWVudCkge1xuICB7XG4gICAgLy8gJEZsb3dGaXhNZSBUaGlzIGlzIG9rYXkgYnV0IEZsb3cgZG9lc24ndCBrbm93IGl0LlxuICAgIHZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG5cbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAoaGFzKHR5cGVTcGVjcywgdHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3IkMSA9IHZvaWQgMDsgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmFyIGVyciA9IEVycm9yKChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgJyArICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSArICdgLicgKyAnVGhpcyBvZnRlbiBoYXBwZW5zIGJlY2F1c2Ugb2YgdHlwb3Mgc3VjaCBhcyBgUHJvcFR5cGVzLmZ1bmN0aW9uYCBpbnN0ZWFkIG9mIGBQcm9wVHlwZXMuZnVuY2AuJyk7XG4gICAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlcnJvciQxID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnKTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciQxID0gZXg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IkMSAmJiAhKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICAgIGVycm9yKCclczogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICVzJyArICcgYCVzYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgKyAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJXMuICcgKyAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgKyAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLicsIGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJywgbG9jYXRpb24sIHR5cGVTcGVjTmFtZSwgdHlwZW9mIGVycm9yJDEpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IkMS5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvciQxLm1lc3NhZ2VdID0gdHJ1ZTtcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICAgIGVycm9yKCdGYWlsZWQgJXMgdHlwZTogJXMnLCBsb2NhdGlvbiwgZXJyb3IkMS5tZXNzYWdlKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnRPd25lciA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudE93bmVyO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBSRVNFUlZFRF9QUk9QUyA9IHtcbiAga2V5OiB0cnVlLFxuICByZWY6IHRydWUsXG4gIF9fc2VsZjogdHJ1ZSxcbiAgX19zb3VyY2U6IHRydWVcbn07XG52YXIgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd247XG52YXIgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd247XG52YXIgZGlkV2FybkFib3V0U3RyaW5nUmVmcztcblxue1xuICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzID0ge307XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkUmVmKGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAncmVmJykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ3JlZicpLmdldDtcblxuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb25maWcucmVmICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkS2V5KGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAna2V5JykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ2tleScpLmdldDtcblxuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb25maWcua2V5ICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcsIHNlbGYpIHtcbiAge1xuICAgIGlmICh0eXBlb2YgY29uZmlnLnJlZiA9PT0gJ3N0cmluZycgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCAmJiBzZWxmICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQuc3RhdGVOb2RlICE9PSBzZWxmKSB7XG4gICAgICB2YXIgY29tcG9uZW50TmFtZSA9IGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKTtcblxuICAgICAgaWYgKCFkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdKSB7XG4gICAgICAgIGVycm9yKCdDb21wb25lbnQgXCIlc1wiIGNvbnRhaW5zIHRoZSBzdHJpbmcgcmVmIFwiJXNcIi4gJyArICdTdXBwb3J0IGZvciBzdHJpbmcgcmVmcyB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gJyArICdUaGlzIGNhc2UgY2Fubm90IGJlIGF1dG9tYXRpY2FsbHkgY29udmVydGVkIHRvIGFuIGFycm93IGZ1bmN0aW9uLiAnICsgJ1dlIGFzayB5b3UgdG8gbWFudWFsbHkgZml4IHRoaXMgY2FzZSBieSB1c2luZyB1c2VSZWYoKSBvciBjcmVhdGVSZWYoKSBpbnN0ZWFkLiAnICsgJ0xlYXJuIG1vcmUgYWJvdXQgdXNpbmcgcmVmcyBzYWZlbHkgaGVyZTogJyArICdodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3RyaWN0LW1vZGUtc3RyaW5nLXJlZicsIGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKSwgY29uZmlnLnJlZik7XG5cbiAgICAgICAgZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB7XG4gICAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ0tleSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYGtleWAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2FybkFib3V0QWNjZXNzaW5nS2V5LmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdrZXknLCB7XG4gICAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ0tleSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB7XG4gICAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ1JlZiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYHJlZmAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2FybkFib3V0QWNjZXNzaW5nUmVmLmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdyZWYnLCB7XG4gICAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ1JlZixcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9XG59XG4vKipcbiAqIEZhY3RvcnkgbWV0aG9kIHRvIGNyZWF0ZSBhIG5ldyBSZWFjdCBlbGVtZW50LiBUaGlzIG5vIGxvbmdlciBhZGhlcmVzIHRvXG4gKiB0aGUgY2xhc3MgcGF0dGVybiwgc28gZG8gbm90IHVzZSBuZXcgdG8gY2FsbCBpdC4gQWxzbywgaW5zdGFuY2VvZiBjaGVja1xuICogd2lsbCBub3Qgd29yay4gSW5zdGVhZCB0ZXN0ICQkdHlwZW9mIGZpZWxkIGFnYWluc3QgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIHRvIGNoZWNrXG4gKiBpZiBzb21ldGhpbmcgaXMgYSBSZWFjdCBFbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHsqfSBwcm9wc1xuICogQHBhcmFtIHsqfSBrZXlcbiAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gcmVmXG4gKiBAcGFyYW0geyp9IG93bmVyXG4gKiBAcGFyYW0geyp9IHNlbGYgQSAqdGVtcG9yYXJ5KiBoZWxwZXIgdG8gZGV0ZWN0IHBsYWNlcyB3aGVyZSBgdGhpc2AgaXNcbiAqIGRpZmZlcmVudCBmcm9tIHRoZSBgb3duZXJgIHdoZW4gUmVhY3QuY3JlYXRlRWxlbWVudCBpcyBjYWxsZWQsIHNvIHRoYXQgd2VcbiAqIGNhbiB3YXJuLiBXZSB3YW50IHRvIGdldCByaWQgb2Ygb3duZXIgYW5kIHJlcGxhY2Ugc3RyaW5nIGByZWZgcyB3aXRoIGFycm93XG4gKiBmdW5jdGlvbnMsIGFuZCBhcyBsb25nIGFzIGB0aGlzYCBhbmQgb3duZXIgYXJlIHRoZSBzYW1lLCB0aGVyZSB3aWxsIGJlIG5vXG4gKiBjaGFuZ2UgaW4gYmVoYXZpb3IuXG4gKiBAcGFyYW0geyp9IHNvdXJjZSBBbiBhbm5vdGF0aW9uIG9iamVjdCAoYWRkZWQgYnkgYSB0cmFuc3BpbGVyIG9yIG90aGVyd2lzZSlcbiAqIGluZGljYXRpbmcgZmlsZW5hbWUsIGxpbmUgbnVtYmVyLCBhbmQvb3Igb3RoZXIgaW5mb3JtYXRpb24uXG4gKiBAaW50ZXJuYWxcbiAqL1xuXG5cbnZhciBSZWFjdEVsZW1lbnQgPSBmdW5jdGlvbiAodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKSB7XG4gIHZhciBlbGVtZW50ID0ge1xuICAgIC8vIFRoaXMgdGFnIGFsbG93cyB1cyB0byB1bmlxdWVseSBpZGVudGlmeSB0aGlzIGFzIGEgUmVhY3QgRWxlbWVudFxuICAgICQkdHlwZW9mOiBSRUFDVF9FTEVNRU5UX1RZUEUsXG4gICAgLy8gQnVpbHQtaW4gcHJvcGVydGllcyB0aGF0IGJlbG9uZyBvbiB0aGUgZWxlbWVudFxuICAgIHR5cGU6IHR5cGUsXG4gICAga2V5OiBrZXksXG4gICAgcmVmOiByZWYsXG4gICAgcHJvcHM6IHByb3BzLFxuICAgIC8vIFJlY29yZCB0aGUgY29tcG9uZW50IHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyB0aGlzIGVsZW1lbnQuXG4gICAgX293bmVyOiBvd25lclxuICB9O1xuXG4gIHtcbiAgICAvLyBUaGUgdmFsaWRhdGlvbiBmbGFnIGlzIGN1cnJlbnRseSBtdXRhdGl2ZS4gV2UgcHV0IGl0IG9uXG4gICAgLy8gYW4gZXh0ZXJuYWwgYmFja2luZyBzdG9yZSBzbyB0aGF0IHdlIGNhbiBmcmVlemUgdGhlIHdob2xlIG9iamVjdC5cbiAgICAvLyBUaGlzIGNhbiBiZSByZXBsYWNlZCB3aXRoIGEgV2Vha01hcCBvbmNlIHRoZXkgYXJlIGltcGxlbWVudGVkIGluXG4gICAgLy8gY29tbW9ubHkgdXNlZCBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMuXG4gICAgZWxlbWVudC5fc3RvcmUgPSB7fTsgLy8gVG8gbWFrZSBjb21wYXJpbmcgUmVhY3RFbGVtZW50cyBlYXNpZXIgZm9yIHRlc3RpbmcgcHVycG9zZXMsIHdlIG1ha2VcbiAgICAvLyB0aGUgdmFsaWRhdGlvbiBmbGFnIG5vbi1lbnVtZXJhYmxlICh3aGVyZSBwb3NzaWJsZSwgd2hpY2ggc2hvdWxkXG4gICAgLy8gaW5jbHVkZSBldmVyeSBlbnZpcm9ubWVudCB3ZSBydW4gdGVzdHMgaW4pLCBzbyB0aGUgdGVzdCBmcmFtZXdvcmtcbiAgICAvLyBpZ25vcmVzIGl0LlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQuX3N0b3JlLCAndmFsaWRhdGVkJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogZmFsc2VcbiAgICB9KTsgLy8gc2VsZiBhbmQgc291cmNlIGFyZSBERVYgb25seSBwcm9wZXJ0aWVzLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc2VsZicsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzZWxmXG4gICAgfSk7IC8vIFR3byBlbGVtZW50cyBjcmVhdGVkIGluIHR3byBkaWZmZXJlbnQgcGxhY2VzIHNob3VsZCBiZSBjb25zaWRlcmVkXG4gICAgLy8gZXF1YWwgZm9yIHRlc3RpbmcgcHVycG9zZXMgYW5kIHRoZXJlZm9yZSB3ZSBoaWRlIGl0IGZyb20gZW51bWVyYXRpb24uXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zb3VyY2UnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc291cmNlXG4gICAgfSk7XG5cbiAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50LnByb3BzKTtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuLyoqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vcmVhY3Rqcy9yZmNzL3B1bGwvMTA3XG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xuICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICovXG5cbmZ1bmN0aW9uIGpzeERFVih0eXBlLCBjb25maWcsIG1heWJlS2V5LCBzb3VyY2UsIHNlbGYpIHtcbiAge1xuICAgIHZhciBwcm9wTmFtZTsgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxuXG4gICAgdmFyIHByb3BzID0ge307XG4gICAgdmFyIGtleSA9IG51bGw7XG4gICAgdmFyIHJlZiA9IG51bGw7IC8vIEN1cnJlbnRseSwga2V5IGNhbiBiZSBzcHJlYWQgaW4gYXMgYSBwcm9wLiBUaGlzIGNhdXNlcyBhIHBvdGVudGlhbFxuICAgIC8vIGlzc3VlIGlmIGtleSBpcyBhbHNvIGV4cGxpY2l0bHkgZGVjbGFyZWQgKGllLiA8ZGl2IHsuLi5wcm9wc30ga2V5PVwiSGlcIiAvPlxuICAgIC8vIG9yIDxkaXYga2V5PVwiSGlcIiB7Li4ucHJvcHN9IC8+ICkuIFdlIHdhbnQgdG8gZGVwcmVjYXRlIGtleSBzcHJlYWQsXG4gICAgLy8gYnV0IGFzIGFuIGludGVybWVkaWFyeSBzdGVwLCB3ZSB3aWxsIHVzZSBqc3hERVYgZm9yIGV2ZXJ5dGhpbmcgZXhjZXB0XG4gICAgLy8gPGRpdiB7Li4ucHJvcHN9IGtleT1cIkhpXCIgLz4sIGJlY2F1c2Ugd2UgYXJlbid0IGN1cnJlbnRseSBhYmxlIHRvIHRlbGwgaWZcbiAgICAvLyBrZXkgaXMgZXhwbGljaXRseSBkZWNsYXJlZCB0byBiZSB1bmRlZmluZWQgb3Igbm90LlxuXG4gICAgaWYgKG1heWJlS2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGtleSA9ICcnICsgbWF5YmVLZXk7XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgcmVmID0gY29uZmlnLnJlZjtcbiAgICAgIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcsIHNlbGYpO1xuICAgIH0gLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgYXJlIGFkZGVkIHRvIGEgbmV3IHByb3BzIG9iamVjdFxuXG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH0gLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG5cblxuICAgIGlmICh0eXBlICYmIHR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgICB2YXIgZGVmYXVsdFByb3BzID0gdHlwZS5kZWZhdWx0UHJvcHM7XG5cbiAgICAgIGZvciAocHJvcE5hbWUgaW4gZGVmYXVsdFByb3BzKSB7XG4gICAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoa2V5IHx8IHJlZikge1xuICAgICAgdmFyIGRpc3BsYXlOYW1lID0gdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgPyB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCAnVW5rbm93bicgOiB0eXBlO1xuXG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWYpIHtcbiAgICAgICAgZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3RFbGVtZW50KHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQsIHByb3BzKTtcbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50T3duZXIkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudE93bmVyO1xudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCkge1xuICB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd247XG5cbntcbiAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSBmYWxzZTtcbn1cbi8qKlxuICogVmVyaWZpZXMgdGhlIG9iamVjdCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjaXN2YWxpZGVsZW1lbnRcbiAqIEBwYXJhbSB7P29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIGBvYmplY3RgIGlzIGEgUmVhY3RFbGVtZW50LlxuICogQGZpbmFsXG4gKi9cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnQob2JqZWN0KSB7XG4gIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpIHtcbiAge1xuICAgIGlmIChSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQpIHtcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQudHlwZSk7XG5cbiAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgdGhlIHJlbmRlciBtZXRob2Qgb2YgYCcgKyBuYW1lICsgJ2AuJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oc291cmNlKSB7XG4gIHtcbiAgICBpZiAoc291cmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciBmaWxlTmFtZSA9IHNvdXJjZS5maWxlTmFtZS5yZXBsYWNlKC9eLipbXFxcXFxcL10vLCAnJyk7XG4gICAgICB2YXIgbGluZU51bWJlciA9IHNvdXJjZS5saW5lTnVtYmVyO1xuICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB5b3VyIGNvZGUgYXQgJyArIGZpbGVOYW1lICsgJzonICsgbGluZU51bWJlciArICcuJztcbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cbi8qKlxuICogV2FybiBpZiB0aGVyZSdzIG5vIGtleSBleHBsaWNpdGx5IHNldCBvbiBkeW5hbWljIGFycmF5cyBvZiBjaGlsZHJlbiBvclxuICogb2JqZWN0IGtleXMgYXJlIG5vdCB2YWxpZC4gVGhpcyBhbGxvd3MgdXMgdG8ga2VlcCB0cmFjayBvZiBjaGlsZHJlbiBiZXR3ZWVuXG4gKiB1cGRhdGVzLlxuICovXG5cblxudmFyIG93bmVySGFzS2V5VXNlV2FybmluZyA9IHt9O1xuXG5mdW5jdGlvbiBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpIHtcbiAge1xuICAgIHZhciBpbmZvID0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG5cbiAgICBpZiAoIWluZm8pIHtcbiAgICAgIHZhciBwYXJlbnROYW1lID0gdHlwZW9mIHBhcmVudFR5cGUgPT09ICdzdHJpbmcnID8gcGFyZW50VHlwZSA6IHBhcmVudFR5cGUuZGlzcGxheU5hbWUgfHwgcGFyZW50VHlwZS5uYW1lO1xuXG4gICAgICBpZiAocGFyZW50TmFtZSkge1xuICAgICAgICBpbmZvID0gXCJcXG5cXG5DaGVjayB0aGUgdG9wLWxldmVsIHJlbmRlciBjYWxsIHVzaW5nIDxcIiArIHBhcmVudE5hbWUgKyBcIj4uXCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZm87XG4gIH1cbn1cbi8qKlxuICogV2FybiBpZiB0aGUgZWxlbWVudCBkb2Vzbid0IGhhdmUgYW4gZXhwbGljaXQga2V5IGFzc2lnbmVkIHRvIGl0LlxuICogVGhpcyBlbGVtZW50IGlzIGluIGFuIGFycmF5LiBUaGUgYXJyYXkgY291bGQgZ3JvdyBhbmQgc2hyaW5rIG9yIGJlXG4gKiByZW9yZGVyZWQuIEFsbCBjaGlsZHJlbiB0aGF0IGhhdmVuJ3QgYWxyZWFkeSBiZWVuIHZhbGlkYXRlZCBhcmUgcmVxdWlyZWQgdG9cbiAqIGhhdmUgYSBcImtleVwiIHByb3BlcnR5IGFzc2lnbmVkIHRvIGl0LiBFcnJvciBzdGF0dXNlcyBhcmUgY2FjaGVkIHNvIGEgd2FybmluZ1xuICogd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudCBFbGVtZW50IHRoYXQgcmVxdWlyZXMgYSBrZXkuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgZWxlbWVudCdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUV4cGxpY2l0S2V5KGVsZW1lbnQsIHBhcmVudFR5cGUpIHtcbiAge1xuICAgIGlmICghZWxlbWVudC5fc3RvcmUgfHwgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkIHx8IGVsZW1lbnQua2V5ICE9IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgIHZhciBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvID0gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKTtcblxuICAgIGlmIChvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10gPSB0cnVlOyAvLyBVc3VhbGx5IHRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBvZmZlbmRlciwgYnV0IGlmIGl0IGFjY2VwdHMgY2hpbGRyZW4gYXMgYVxuICAgIC8vIHByb3BlcnR5LCBpdCBtYXkgYmUgdGhlIGNyZWF0b3Igb2YgdGhlIGNoaWxkIHRoYXQncyByZXNwb25zaWJsZSBmb3JcbiAgICAvLyBhc3NpZ25pbmcgaXQgYSBrZXkuXG5cbiAgICB2YXIgY2hpbGRPd25lciA9ICcnO1xuXG4gICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5fb3duZXIgJiYgZWxlbWVudC5fb3duZXIgIT09IFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudCkge1xuICAgICAgLy8gR2l2ZSB0aGUgY29tcG9uZW50IHRoYXQgb3JpZ2luYWxseSBjcmVhdGVkIHRoaXMgY2hpbGQuXG4gICAgICBjaGlsZE93bmVyID0gXCIgSXQgd2FzIHBhc3NlZCBhIGNoaWxkIGZyb20gXCIgKyBnZXRDb21wb25lbnROYW1lKGVsZW1lbnQuX293bmVyLnR5cGUpICsgXCIuXCI7XG4gICAgfVxuXG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KTtcblxuICAgIGVycm9yKCdFYWNoIGNoaWxkIGluIGEgbGlzdCBzaG91bGQgaGF2ZSBhIHVuaXF1ZSBcImtleVwiIHByb3AuJyArICclcyVzIFNlZSBodHRwczovL3JlYWN0anMub3JnL2xpbmsvd2FybmluZy1rZXlzIGZvciBtb3JlIGluZm9ybWF0aW9uLicsIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8sIGNoaWxkT3duZXIpO1xuXG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgfVxufVxuLyoqXG4gKiBFbnN1cmUgdGhhdCBldmVyeSBlbGVtZW50IGVpdGhlciBpcyBwYXNzZWQgaW4gYSBzdGF0aWMgbG9jYXRpb24sIGluIGFuXG4gKiBhcnJheSB3aXRoIGFuIGV4cGxpY2l0IGtleXMgcHJvcGVydHkgZGVmaW5lZCwgb3IgaW4gYW4gb2JqZWN0IGxpdGVyYWxcbiAqIHdpdGggdmFsaWQga2V5IHByb3BlcnR5LlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdE5vZGV9IG5vZGUgU3RhdGljYWxseSBwYXNzZWQgY2hpbGQgb2YgYW55IHR5cGUuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgbm9kZSdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUNoaWxkS2V5cyhub2RlLCBwYXJlbnRUeXBlKSB7XG4gIHtcbiAgICBpZiAodHlwZW9mIG5vZGUgIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkobm9kZSkpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2hpbGQgPSBub2RlW2ldO1xuXG4gICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KGNoaWxkLCBwYXJlbnRUeXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNWYWxpZEVsZW1lbnQobm9kZSkpIHtcbiAgICAgIC8vIFRoaXMgZWxlbWVudCB3YXMgcGFzc2VkIGluIGEgdmFsaWQgbG9jYXRpb24uXG4gICAgICBpZiAobm9kZS5fc3RvcmUpIHtcbiAgICAgICAgbm9kZS5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG5vZGUpIHtcbiAgICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihub2RlKTtcblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIEVudHJ5IGl0ZXJhdG9ycyB1c2VkIHRvIHByb3ZpZGUgaW1wbGljaXQga2V5cyxcbiAgICAgICAgLy8gYnV0IG5vdyB3ZSBwcmludCBhIHNlcGFyYXRlIHdhcm5pbmcgZm9yIHRoZW0gbGF0ZXIuXG4gICAgICAgIGlmIChpdGVyYXRvckZuICE9PSBub2RlLmVudHJpZXMpIHtcbiAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwobm9kZSk7XG4gICAgICAgICAgdmFyIHN0ZXA7XG5cbiAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShzdGVwLnZhbHVlLCBwYXJlbnRUeXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYW4gZWxlbWVudCwgdmFsaWRhdGUgdGhhdCBpdHMgcHJvcHMgZm9sbG93IHRoZSBwcm9wVHlwZXMgZGVmaW5pdGlvbixcbiAqIHByb3ZpZGVkIGJ5IHRoZSB0eXBlLlxuICpcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KSB7XG4gIHtcbiAgICB2YXIgdHlwZSA9IGVsZW1lbnQudHlwZTtcblxuICAgIGlmICh0eXBlID09PSBudWxsIHx8IHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcHJvcFR5cGVzO1xuXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCAvLyBOb3RlOiBNZW1vIG9ubHkgY2hlY2tzIG91dGVyIHByb3BzIGhlcmUuXG4gICAgLy8gSW5uZXIgcHJvcHMgYXJlIGNoZWNrZWQgaW4gdGhlIHJlY29uY2lsZXIuXG4gICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSkge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocHJvcFR5cGVzKSB7XG4gICAgICAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKHR5cGUpO1xuICAgICAgY2hlY2tQcm9wVHlwZXMocHJvcFR5cGVzLCBlbGVtZW50LnByb3BzLCAncHJvcCcsIG5hbWUsIGVsZW1lbnQpO1xuICAgIH0gZWxzZSBpZiAodHlwZS5Qcm9wVHlwZXMgIT09IHVuZGVmaW5lZCAmJiAhcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24pIHtcbiAgICAgIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gdHJ1ZTsgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcblxuICAgICAgdmFyIF9uYW1lID0gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKTtcblxuICAgICAgZXJyb3IoJ0NvbXBvbmVudCAlcyBkZWNsYXJlZCBgUHJvcFR5cGVzYCBpbnN0ZWFkIG9mIGBwcm9wVHlwZXNgLiBEaWQgeW91IG1pc3NwZWxsIHRoZSBwcm9wZXJ0eSBhc3NpZ25tZW50PycsIF9uYW1lIHx8ICdVbmtub3duJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0eXBlLmdldERlZmF1bHRQcm9wcyA9PT0gJ2Z1bmN0aW9uJyAmJiAhdHlwZS5nZXREZWZhdWx0UHJvcHMuaXNSZWFjdENsYXNzQXBwcm92ZWQpIHtcbiAgICAgIGVycm9yKCdnZXREZWZhdWx0UHJvcHMgaXMgb25seSB1c2VkIG9uIGNsYXNzaWMgUmVhY3QuY3JlYXRlQ2xhc3MgJyArICdkZWZpbml0aW9ucy4gVXNlIGEgc3RhdGljIHByb3BlcnR5IG5hbWVkIGBkZWZhdWx0UHJvcHNgIGluc3RlYWQuJyk7XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGEgZnJhZ21lbnQsIHZhbGlkYXRlIHRoYXQgaXQgY2FuIG9ubHkgYmUgcHJvdmlkZWQgd2l0aCBmcmFnbWVudCBwcm9wc1xuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGZyYWdtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZnJhZ21lbnQpIHtcbiAge1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZnJhZ21lbnQucHJvcHMpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcblxuICAgICAgaWYgKGtleSAhPT0gJ2NoaWxkcmVuJyAmJiBrZXkgIT09ICdrZXknKSB7XG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICAgIGVycm9yKCdJbnZhbGlkIHByb3AgYCVzYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLiAnICsgJ1JlYWN0LkZyYWdtZW50IGNhbiBvbmx5IGhhdmUgYGtleWAgYW5kIGBjaGlsZHJlbmAgcHJvcHMuJywga2V5KTtcblxuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZnJhZ21lbnQucmVmICE9PSBudWxsKSB7XG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcblxuICAgICAgZXJyb3IoJ0ludmFsaWQgYXR0cmlidXRlIGByZWZgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuJyk7XG5cbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGpzeFdpdGhWYWxpZGF0aW9uKHR5cGUsIHByb3BzLCBrZXksIGlzU3RhdGljQ2hpbGRyZW4sIHNvdXJjZSwgc2VsZikge1xuICB7XG4gICAgdmFyIHZhbGlkVHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKTsgLy8gV2Ugd2FybiBpbiB0aGlzIGNhc2UgYnV0IGRvbid0IHRocm93LiBXZSBleHBlY3QgdGhlIGVsZW1lbnQgY3JlYXRpb24gdG9cbiAgICAvLyBzdWNjZWVkIGFuZCB0aGVyZSB3aWxsIGxpa2VseSBiZSBlcnJvcnMgaW4gcmVuZGVyLlxuXG4gICAgaWYgKCF2YWxpZFR5cGUpIHtcbiAgICAgIHZhciBpbmZvID0gJyc7XG5cbiAgICAgIGlmICh0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgT2JqZWN0LmtleXModHlwZSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGluZm8gKz0gJyBZb3UgbGlrZWx5IGZvcmdvdCB0byBleHBvcnQgeW91ciBjb21wb25lbnQgZnJvbSB0aGUgZmlsZSAnICsgXCJpdCdzIGRlZmluZWQgaW4sIG9yIHlvdSBtaWdodCBoYXZlIG1peGVkIHVwIGRlZmF1bHQgYW5kIG5hbWVkIGltcG9ydHMuXCI7XG4gICAgICB9XG5cbiAgICAgIHZhciBzb3VyY2VJbmZvID0gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oc291cmNlKTtcblxuICAgICAgaWYgKHNvdXJjZUluZm8pIHtcbiAgICAgICAgaW5mbyArPSBzb3VyY2VJbmZvO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5mbyArPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHR5cGVTdHJpbmc7XG5cbiAgICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSAnbnVsbCc7XG4gICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodHlwZSkpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9ICdhcnJheSc7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgIT09IHVuZGVmaW5lZCAmJiB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEUpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9IFwiPFwiICsgKGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKSB8fCAnVW5rbm93bicpICsgXCIgLz5cIjtcbiAgICAgICAgaW5mbyA9ICcgRGlkIHlvdSBhY2NpZGVudGFsbHkgZXhwb3J0IGEgSlNYIGxpdGVyYWwgaW5zdGVhZCBvZiBhIGNvbXBvbmVudD8nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHlwZVN0cmluZyA9IHR5cGVvZiB0eXBlO1xuICAgICAgfVxuXG4gICAgICBlcnJvcignUmVhY3QuanN4OiB0eXBlIGlzIGludmFsaWQgLS0gZXhwZWN0ZWQgYSBzdHJpbmcgKGZvciAnICsgJ2J1aWx0LWluIGNvbXBvbmVudHMpIG9yIGEgY2xhc3MvZnVuY3Rpb24gKGZvciBjb21wb3NpdGUgJyArICdjb21wb25lbnRzKSBidXQgZ290OiAlcy4lcycsIHR5cGVTdHJpbmcsIGluZm8pO1xuICAgIH1cblxuICAgIHZhciBlbGVtZW50ID0ganN4REVWKHR5cGUsIHByb3BzLCBrZXksIHNvdXJjZSwgc2VsZik7IC8vIFRoZSByZXN1bHQgY2FuIGJlIG51bGxpc2ggaWYgYSBtb2NrIG9yIGEgY3VzdG9tIGZ1bmN0aW9uIGlzIHVzZWQuXG4gICAgLy8gVE9ETzogRHJvcCB0aGlzIHdoZW4gdGhlc2UgYXJlIG5vIGxvbmdlciBhbGxvd2VkIGFzIHRoZSB0eXBlIGFyZ3VtZW50LlxuXG4gICAgaWYgKGVsZW1lbnQgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfSAvLyBTa2lwIGtleSB3YXJuaW5nIGlmIHRoZSB0eXBlIGlzbid0IHZhbGlkIHNpbmNlIG91ciBrZXkgdmFsaWRhdGlvbiBsb2dpY1xuICAgIC8vIGRvZXNuJ3QgZXhwZWN0IGEgbm9uLXN0cmluZy9mdW5jdGlvbiB0eXBlIGFuZCBjYW4gdGhyb3cgY29uZnVzaW5nIGVycm9ycy5cbiAgICAvLyBXZSBkb24ndCB3YW50IGV4Y2VwdGlvbiBiZWhhdmlvciB0byBkaWZmZXIgYmV0d2VlbiBkZXYgYW5kIHByb2QuXG4gICAgLy8gKFJlbmRlcmluZyB3aWxsIHRocm93IHdpdGggYSBoZWxwZnVsIG1lc3NhZ2UgYW5kIGFzIHNvb24gYXMgdGhlIHR5cGUgaXNcbiAgICAvLyBmaXhlZCwgdGhlIGtleSB3YXJuaW5ncyB3aWxsIGFwcGVhci4pXG5cblxuICAgIGlmICh2YWxpZFR5cGUpIHtcbiAgICAgIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuO1xuXG4gICAgICBpZiAoY2hpbGRyZW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoaXNTdGF0aWNDaGlsZHJlbikge1xuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICB2YWxpZGF0ZUNoaWxkS2V5cyhjaGlsZHJlbltpXSwgdHlwZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICAgICAgICAgIE9iamVjdC5mcmVlemUoY2hpbGRyZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlcnJvcignUmVhY3QuanN4OiBTdGF0aWMgY2hpbGRyZW4gc2hvdWxkIGFsd2F5cyBiZSBhbiBhcnJheS4gJyArICdZb3UgYXJlIGxpa2VseSBleHBsaWNpdGx5IGNhbGxpbmcgUmVhY3QuanN4cyBvciBSZWFjdC5qc3hERVYuICcgKyAnVXNlIHRoZSBCYWJlbCB0cmFuc2Zvcm0gaW5zdGVhZC4nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsaWRhdGVDaGlsZEtleXMoY2hpbGRyZW4sIHR5cGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT09IGV4cG9ydHMuRnJhZ21lbnQpIHtcbiAgICAgIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhlbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn0gLy8gVGhlc2UgdHdvIGZ1bmN0aW9ucyBleGlzdCB0byBzdGlsbCBnZXQgY2hpbGQgd2FybmluZ3MgaW4gZGV2XG5cbnZhciBqc3hERVYkMSA9ICBqc3hXaXRoVmFsaWRhdGlvbiA7XG5cbmV4cG9ydHMuanN4REVWID0ganN4REVWJDE7XG4gIH0pKCk7XG59XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE3LjAuMlxuICogcmVhY3QuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxuLy8gVE9ETzogdGhpcyBpcyBzcGVjaWFsIGJlY2F1c2UgaXQgZ2V0cyBpbXBvcnRlZCBkdXJpbmcgYnVpbGQuXG52YXIgUmVhY3RWZXJzaW9uID0gJzE3LjAuMic7XG5cbi8vIEFUVEVOVElPTlxuLy8gV2hlbiBhZGRpbmcgbmV3IHN5bWJvbHMgdG8gdGhpcyBmaWxlLFxuLy8gUGxlYXNlIGNvbnNpZGVyIGFsc28gYWRkaW5nIHRvICdyZWFjdC1kZXZ0b29scy1zaGFyZWQvc3JjL2JhY2tlbmQvUmVhY3RTeW1ib2xzJ1xuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSAweGVhY2E7XG5leHBvcnRzLkZyYWdtZW50ID0gMHhlYWNiO1xuZXhwb3J0cy5TdHJpY3RNb2RlID0gMHhlYWNjO1xuZXhwb3J0cy5Qcm9maWxlciA9IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IDB4ZWFjZTtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gMHhlYWQwO1xuZXhwb3J0cy5TdXNwZW5zZSA9IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IDB4ZWFkNDtcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gMHhlYWQ5O1xudmFyIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gMHhlYWRhO1xudmFyIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSAweGVhZDU7XG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IDB4ZWFkNztcbnZhciBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IDB4ZWFlMDtcbnZhciBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IDB4ZWFlMTtcbnZhciBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IDB4ZWFlMjtcbnZhciBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSAweGVhZTM7XG5cbmlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3IpIHtcbiAgdmFyIHN5bWJvbEZvciA9IFN5bWJvbC5mb3I7XG4gIFJFQUNUX0VMRU1FTlRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZWxlbWVudCcpO1xuICBSRUFDVF9QT1JUQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucG9ydGFsJyk7XG4gIGV4cG9ydHMuRnJhZ21lbnQgPSBzeW1ib2xGb3IoJ3JlYWN0LmZyYWdtZW50Jyk7XG4gIGV4cG9ydHMuU3RyaWN0TW9kZSA9IHN5bWJvbEZvcigncmVhY3Quc3RyaWN0X21vZGUnKTtcbiAgZXhwb3J0cy5Qcm9maWxlciA9IHN5bWJvbEZvcigncmVhY3QucHJvZmlsZXInKTtcbiAgUkVBQ1RfUFJPVklERVJfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucHJvdmlkZXInKTtcbiAgUkVBQ1RfQ09OVEVYVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5jb250ZXh0Jyk7XG4gIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZvcndhcmRfcmVmJyk7XG4gIGV4cG9ydHMuU3VzcGVuc2UgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlJyk7XG4gIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpO1xuICBSRUFDVF9NRU1PX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm1lbW8nKTtcbiAgUkVBQ1RfTEFaWV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sYXp5Jyk7XG4gIFJFQUNUX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmJsb2NrJyk7XG4gIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zZXJ2ZXIuYmxvY2snKTtcbiAgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZnVuZGFtZW50YWwnKTtcbiAgUkVBQ1RfU0NPUEVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2NvcGUnKTtcbiAgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9wYXF1ZS5pZCcpO1xuICBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZGVidWdfdHJhY2VfbW9kZScpO1xuICBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub2Zmc2NyZWVuJyk7XG4gIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGVnYWN5X2hpZGRlbicpO1xufVxuXG52YXIgTUFZQkVfSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG52YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7XG5mdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgaWYgKG1heWJlSXRlcmFibGUgPT09IG51bGwgfHwgdHlwZW9mIG1heWJlSXRlcmFibGUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgbWF5YmVJdGVyYXRvciA9IE1BWUJFX0lURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW01BWUJFX0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF07XG5cbiAgaWYgKHR5cGVvZiBtYXliZUl0ZXJhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIG1heWJlSXRlcmF0b3I7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBLZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudCBkaXNwYXRjaGVyLlxuICovXG52YXIgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciA9IHtcbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKiBAdHlwZSB7UmVhY3RDb21wb25lbnR9XG4gICAqL1xuICBjdXJyZW50OiBudWxsXG59O1xuXG4vKipcbiAqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IGJhdGNoJ3MgY29uZmlndXJhdGlvbiBzdWNoIGFzIGhvdyBsb25nIGFuIHVwZGF0ZVxuICogc2hvdWxkIHN1c3BlbmQgZm9yIGlmIGl0IG5lZWRzIHRvLlxuICovXG52YXIgUmVhY3RDdXJyZW50QmF0Y2hDb25maWcgPSB7XG4gIHRyYW5zaXRpb246IDBcbn07XG5cbi8qKlxuICogS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnQgb3duZXIuXG4gKlxuICogVGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIGNvbXBvbmVudCB3aG8gc2hvdWxkIG93biBhbnkgY29tcG9uZW50cyB0aGF0IGFyZVxuICogY3VycmVudGx5IGJlaW5nIGNvbnN0cnVjdGVkLlxuICovXG52YXIgUmVhY3RDdXJyZW50T3duZXIgPSB7XG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICogQHR5cGUge1JlYWN0Q29tcG9uZW50fVxuICAgKi9cbiAgY3VycmVudDogbnVsbFxufTtcblxudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSB7fTtcbnZhciBjdXJyZW50RXh0cmFTdGFja0ZyYW1lID0gbnVsbDtcbmZ1bmN0aW9uIHNldEV4dHJhU3RhY2tGcmFtZShzdGFjaykge1xuICB7XG4gICAgY3VycmVudEV4dHJhU3RhY2tGcmFtZSA9IHN0YWNrO1xuICB9XG59XG5cbntcbiAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5zZXRFeHRyYVN0YWNrRnJhbWUgPSBmdW5jdGlvbiAoc3RhY2spIHtcbiAgICB7XG4gICAgICBjdXJyZW50RXh0cmFTdGFja0ZyYW1lID0gc3RhY2s7XG4gICAgfVxuICB9OyAvLyBTdGFjayBpbXBsZW1lbnRhdGlvbiBpbmplY3RlZCBieSB0aGUgY3VycmVudCByZW5kZXJlci5cblxuXG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0Q3VycmVudFN0YWNrID0gbnVsbDtcblxuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN0YWNrID0gJyc7IC8vIEFkZCBhbiBleHRyYSB0b3AgZnJhbWUgd2hpbGUgYW4gZWxlbWVudCBpcyBiZWluZyB2YWxpZGF0ZWRcblxuICAgIGlmIChjdXJyZW50RXh0cmFTdGFja0ZyYW1lKSB7XG4gICAgICBzdGFjayArPSBjdXJyZW50RXh0cmFTdGFja0ZyYW1lO1xuICAgIH0gLy8gRGVsZWdhdGUgdG8gdGhlIGluamVjdGVkIHJlbmRlcmVyLXNwZWNpZmljIGltcGxlbWVudGF0aW9uXG5cblxuICAgIHZhciBpbXBsID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRDdXJyZW50U3RhY2s7XG5cbiAgICBpZiAoaW1wbCkge1xuICAgICAgc3RhY2sgKz0gaW1wbCgpIHx8ICcnO1xuICAgIH1cblxuICAgIHJldHVybiBzdGFjaztcbiAgfTtcbn1cblxuLyoqXG4gKiBVc2VkIGJ5IGFjdCgpIHRvIHRyYWNrIHdoZXRoZXIgeW91J3JlIGluc2lkZSBhbiBhY3QoKSBzY29wZS5cbiAqL1xudmFyIElzU29tZVJlbmRlcmVyQWN0aW5nID0ge1xuICBjdXJyZW50OiBmYWxzZVxufTtcblxudmFyIFJlYWN0U2hhcmVkSW50ZXJuYWxzID0ge1xuICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyOiBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLFxuICBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZzogUmVhY3RDdXJyZW50QmF0Y2hDb25maWcsXG4gIFJlYWN0Q3VycmVudE93bmVyOiBSZWFjdEN1cnJlbnRPd25lcixcbiAgSXNTb21lUmVuZGVyZXJBY3Rpbmc6IElzU29tZVJlbmRlcmVyQWN0aW5nLFxuICAvLyBVc2VkIGJ5IHJlbmRlcmVycyB0byBhdm9pZCBidW5kbGluZyBvYmplY3QtYXNzaWduIHR3aWNlIGluIFVNRCBidW5kbGVzOlxuICBhc3NpZ246IF9hc3NpZ25cbn07XG5cbntcbiAgUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG59XG5cbi8vIGJ5IGNhbGxzIHRvIHRoZXNlIG1ldGhvZHMgYnkgYSBCYWJlbCBwbHVnaW4uXG4vL1xuLy8gSW4gUFJPRCAob3IgaW4gcGFja2FnZXMgd2l0aG91dCBhY2Nlc3MgdG8gUmVhY3QgaW50ZXJuYWxzKSxcbi8vIHRoZXkgYXJlIGxlZnQgYXMgdGhleSBhcmUgaW5zdGVhZC5cblxuZnVuY3Rpb24gd2Fybihmb3JtYXQpIHtcbiAge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHByaW50V2FybmluZygnd2FybicsIGZvcm1hdCwgYXJncyk7XG4gIH1cbn1cbmZ1bmN0aW9uIGVycm9yKGZvcm1hdCkge1xuICB7XG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGFyZ3NbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgcHJpbnRXYXJuaW5nKCdlcnJvcicsIGZvcm1hdCwgYXJncyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJpbnRXYXJuaW5nKGxldmVsLCBmb3JtYXQsIGFyZ3MpIHtcbiAgLy8gV2hlbiBjaGFuZ2luZyB0aGlzIGxvZ2ljLCB5b3UgbWlnaHQgd2FudCB0byBhbHNvXG4gIC8vIHVwZGF0ZSBjb25zb2xlV2l0aFN0YWNrRGV2Lnd3dy5qcyBhcyB3ZWxsLlxuICB7XG4gICAgdmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuICAgIHZhciBzdGFjayA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSgpO1xuXG4gICAgaWYgKHN0YWNrICE9PSAnJykge1xuICAgICAgZm9ybWF0ICs9ICclcyc7XG4gICAgICBhcmdzID0gYXJncy5jb25jYXQoW3N0YWNrXSk7XG4gICAgfVxuXG4gICAgdmFyIGFyZ3NXaXRoRm9ybWF0ID0gYXJncy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiAnJyArIGl0ZW07XG4gICAgfSk7IC8vIENhcmVmdWw6IFJOIGN1cnJlbnRseSBkZXBlbmRzIG9uIHRoaXMgcHJlZml4XG5cbiAgICBhcmdzV2l0aEZvcm1hdC51bnNoaWZ0KCdXYXJuaW5nOiAnICsgZm9ybWF0KTsgLy8gV2UgaW50ZW50aW9uYWxseSBkb24ndCB1c2Ugc3ByZWFkIChvciAuYXBwbHkpIGRpcmVjdGx5IGJlY2F1c2UgaXRcbiAgICAvLyBicmVha3MgSUU5OiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzEzNjEwXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZ1xuXG4gICAgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwoY29uc29sZVtsZXZlbF0sIGNvbnNvbGUsIGFyZ3NXaXRoRm9ybWF0KTtcbiAgfVxufVxuXG52YXIgZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50ID0ge307XG5cbmZ1bmN0aW9uIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCBjYWxsZXJOYW1lKSB7XG4gIHtcbiAgICB2YXIgX2NvbnN0cnVjdG9yID0gcHVibGljSW5zdGFuY2UuY29uc3RydWN0b3I7XG4gICAgdmFyIGNvbXBvbmVudE5hbWUgPSBfY29uc3RydWN0b3IgJiYgKF9jb25zdHJ1Y3Rvci5kaXNwbGF5TmFtZSB8fCBfY29uc3RydWN0b3IubmFtZSkgfHwgJ1JlYWN0Q2xhc3MnO1xuICAgIHZhciB3YXJuaW5nS2V5ID0gY29tcG9uZW50TmFtZSArIFwiLlwiICsgY2FsbGVyTmFtZTtcblxuICAgIGlmIChkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnRbd2FybmluZ0tleV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlcnJvcihcIkNhbid0IGNhbGwgJXMgb24gYSBjb21wb25lbnQgdGhhdCBpcyBub3QgeWV0IG1vdW50ZWQuIFwiICsgJ1RoaXMgaXMgYSBuby1vcCwgYnV0IGl0IG1pZ2h0IGluZGljYXRlIGEgYnVnIGluIHlvdXIgYXBwbGljYXRpb24uICcgKyAnSW5zdGVhZCwgYXNzaWduIHRvIGB0aGlzLnN0YXRlYCBkaXJlY3RseSBvciBkZWZpbmUgYSBgc3RhdGUgPSB7fTtgICcgKyAnY2xhc3MgcHJvcGVydHkgd2l0aCB0aGUgZGVzaXJlZCBzdGF0ZSBpbiB0aGUgJXMgY29tcG9uZW50LicsIGNhbGxlck5hbWUsIGNvbXBvbmVudE5hbWUpO1xuXG4gICAgZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50W3dhcm5pbmdLZXldID0gdHJ1ZTtcbiAgfVxufVxuLyoqXG4gKiBUaGlzIGlzIHRoZSBhYnN0cmFjdCBBUEkgZm9yIGFuIHVwZGF0ZSBxdWV1ZS5cbiAqL1xuXG5cbnZhciBSZWFjdE5vb3BVcGRhdGVRdWV1ZSA9IHtcbiAgLyoqXG4gICAqIENoZWNrcyB3aGV0aGVyIG9yIG5vdCB0aGlzIGNvbXBvc2l0ZSBjb21wb25lbnQgaXMgbW91bnRlZC5cbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2Ugd2Ugd2FudCB0byB0ZXN0LlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIG1vdW50ZWQsIGZhbHNlIG90aGVyd2lzZS5cbiAgICogQHByb3RlY3RlZFxuICAgKiBAZmluYWxcbiAgICovXG4gIGlzTW91bnRlZDogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBGb3JjZXMgYW4gdXBkYXRlLiBUaGlzIHNob3VsZCBvbmx5IGJlIGludm9rZWQgd2hlbiBpdCBpcyBrbm93biB3aXRoXG4gICAqIGNlcnRhaW50eSB0aGF0IHdlIGFyZSAqKm5vdCoqIGluIGEgRE9NIHRyYW5zYWN0aW9uLlxuICAgKlxuICAgKiBZb3UgbWF5IHdhbnQgdG8gY2FsbCB0aGlzIHdoZW4geW91IGtub3cgdGhhdCBzb21lIGRlZXBlciBhc3BlY3Qgb2YgdGhlXG4gICAqIGNvbXBvbmVudCdzIHN0YXRlIGhhcyBjaGFuZ2VkIGJ1dCBgc2V0U3RhdGVgIHdhcyBub3QgY2FsbGVkLlxuICAgKlxuICAgKiBUaGlzIHdpbGwgbm90IGludm9rZSBgc2hvdWxkQ29tcG9uZW50VXBkYXRlYCwgYnV0IGl0IHdpbGwgaW52b2tlXG4gICAqIGBjb21wb25lbnRXaWxsVXBkYXRlYCBhbmQgYGNvbXBvbmVudERpZFVwZGF0ZWAuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IGNhbGxlck5hbWUgbmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlRm9yY2VVcGRhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ2ZvcmNlVXBkYXRlJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlcGxhY2VzIGFsbCBvZiB0aGUgc3RhdGUuIEFsd2F5cyB1c2UgdGhpcyBvciBgc2V0U3RhdGVgIHRvIG11dGF0ZSBzdGF0ZS5cbiAgICogWW91IHNob3VsZCB0cmVhdCBgdGhpcy5zdGF0ZWAgYXMgaW1tdXRhYmxlLlxuICAgKlxuICAgKiBUaGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBgdGhpcy5zdGF0ZWAgd2lsbCBiZSBpbW1lZGlhdGVseSB1cGRhdGVkLCBzb1xuICAgKiBhY2Nlc3NpbmcgYHRoaXMuc3RhdGVgIGFmdGVyIGNhbGxpbmcgdGhpcyBtZXRob2QgbWF5IHJldHVybiB0aGUgb2xkIHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbXBsZXRlU3RhdGUgTmV4dCBzdGF0ZS5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBjYWxsZXJOYW1lIG5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZVJlcGxhY2VTdGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBjb21wbGV0ZVN0YXRlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAncmVwbGFjZVN0YXRlJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNldHMgYSBzdWJzZXQgb2YgdGhlIHN0YXRlLiBUaGlzIG9ubHkgZXhpc3RzIGJlY2F1c2UgX3BlbmRpbmdTdGF0ZSBpc1xuICAgKiBpbnRlcm5hbC4gVGhpcyBwcm92aWRlcyBhIG1lcmdpbmcgc3RyYXRlZ3kgdGhhdCBpcyBub3QgYXZhaWxhYmxlIHRvIGRlZXBcbiAgICogcHJvcGVydGllcyB3aGljaCBpcyBjb25mdXNpbmcuIFRPRE86IEV4cG9zZSBwZW5kaW5nU3RhdGUgb3IgZG9uJ3QgdXNlIGl0XG4gICAqIGR1cmluZyB0aGUgbWVyZ2UuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0ge29iamVjdH0gcGFydGlhbFN0YXRlIE5leHQgcGFydGlhbCBzdGF0ZSB0byBiZSBtZXJnZWQgd2l0aCBzdGF0ZS5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBOYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVTZXRTdGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdzZXRTdGF0ZScpO1xuICB9XG59O1xuXG52YXIgZW1wdHlPYmplY3QgPSB7fTtcblxue1xuICBPYmplY3QuZnJlZXplKGVtcHR5T2JqZWN0KTtcbn1cbi8qKlxuICogQmFzZSBjbGFzcyBoZWxwZXJzIGZvciB0aGUgdXBkYXRpbmcgc3RhdGUgb2YgYSBjb21wb25lbnQuXG4gKi9cblxuXG5mdW5jdGlvbiBDb21wb25lbnQocHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHtcbiAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0OyAvLyBJZiBhIGNvbXBvbmVudCBoYXMgc3RyaW5nIHJlZnMsIHdlIHdpbGwgYXNzaWduIGEgZGlmZmVyZW50IG9iamVjdCBsYXRlci5cblxuICB0aGlzLnJlZnMgPSBlbXB0eU9iamVjdDsgLy8gV2UgaW5pdGlhbGl6ZSB0aGUgZGVmYXVsdCB1cGRhdGVyIGJ1dCB0aGUgcmVhbCBvbmUgZ2V0cyBpbmplY3RlZCBieSB0aGVcbiAgLy8gcmVuZGVyZXIuXG5cbiAgdGhpcy51cGRhdGVyID0gdXBkYXRlciB8fCBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcbn1cblxuQ29tcG9uZW50LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50ID0ge307XG4vKipcbiAqIFNldHMgYSBzdWJzZXQgb2YgdGhlIHN0YXRlLiBBbHdheXMgdXNlIHRoaXMgdG8gbXV0YXRlXG4gKiBzdGF0ZS4gWW91IHNob3VsZCB0cmVhdCBgdGhpcy5zdGF0ZWAgYXMgaW1tdXRhYmxlLlxuICpcbiAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGB0aGlzLnN0YXRlYCB3aWxsIGJlIGltbWVkaWF0ZWx5IHVwZGF0ZWQsIHNvXG4gKiBhY2Nlc3NpbmcgYHRoaXMuc3RhdGVgIGFmdGVyIGNhbGxpbmcgdGhpcyBtZXRob2QgbWF5IHJldHVybiB0aGUgb2xkIHZhbHVlLlxuICpcbiAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGNhbGxzIHRvIGBzZXRTdGF0ZWAgd2lsbCBydW4gc3luY2hyb25vdXNseSxcbiAqIGFzIHRoZXkgbWF5IGV2ZW50dWFsbHkgYmUgYmF0Y2hlZCB0b2dldGhlci4gIFlvdSBjYW4gcHJvdmlkZSBhbiBvcHRpb25hbFxuICogY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIHdoZW4gdGhlIGNhbGwgdG8gc2V0U3RhdGUgaXMgYWN0dWFsbHlcbiAqIGNvbXBsZXRlZC5cbiAqXG4gKiBXaGVuIGEgZnVuY3Rpb24gaXMgcHJvdmlkZWQgdG8gc2V0U3RhdGUsIGl0IHdpbGwgYmUgY2FsbGVkIGF0IHNvbWUgcG9pbnQgaW5cbiAqIHRoZSBmdXR1cmUgKG5vdCBzeW5jaHJvbm91c2x5KS4gSXQgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGUgdXAgdG8gZGF0ZVxuICogY29tcG9uZW50IGFyZ3VtZW50cyAoc3RhdGUsIHByb3BzLCBjb250ZXh0KS4gVGhlc2UgdmFsdWVzIGNhbiBiZSBkaWZmZXJlbnRcbiAqIGZyb20gdGhpcy4qIGJlY2F1c2UgeW91ciBmdW5jdGlvbiBtYXkgYmUgY2FsbGVkIGFmdGVyIHJlY2VpdmVQcm9wcyBidXQgYmVmb3JlXG4gKiBzaG91bGRDb21wb25lbnRVcGRhdGUsIGFuZCB0aGlzIG5ldyBzdGF0ZSwgcHJvcHMsIGFuZCBjb250ZXh0IHdpbGwgbm90IHlldCBiZVxuICogYXNzaWduZWQgdG8gdGhpcy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdHxmdW5jdGlvbn0gcGFydGlhbFN0YXRlIE5leHQgcGFydGlhbCBzdGF0ZSBvciBmdW5jdGlvbiB0b1xuICogICAgICAgIHByb2R1Y2UgbmV4dCBwYXJ0aWFsIHN0YXRlIHRvIGJlIG1lcmdlZCB3aXRoIGN1cnJlbnQgc3RhdGUuXG4gKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIHN0YXRlIGlzIHVwZGF0ZWQuXG4gKiBAZmluYWxcbiAqIEBwcm90ZWN0ZWRcbiAqL1xuXG5Db21wb25lbnQucHJvdG90eXBlLnNldFN0YXRlID0gZnVuY3Rpb24gKHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2spIHtcbiAgaWYgKCEodHlwZW9mIHBhcnRpYWxTdGF0ZSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHBhcnRpYWxTdGF0ZSA9PT0gJ2Z1bmN0aW9uJyB8fCBwYXJ0aWFsU3RhdGUgPT0gbnVsbCkpIHtcbiAgICB7XG4gICAgICB0aHJvdyBFcnJvciggXCJzZXRTdGF0ZSguLi4pOiB0YWtlcyBhbiBvYmplY3Qgb2Ygc3RhdGUgdmFyaWFibGVzIHRvIHVwZGF0ZSBvciBhIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYW4gb2JqZWN0IG9mIHN0YXRlIHZhcmlhYmxlcy5cIiApO1xuICAgIH1cbiAgfVxuXG4gIHRoaXMudXBkYXRlci5lbnF1ZXVlU2V0U3RhdGUodGhpcywgcGFydGlhbFN0YXRlLCBjYWxsYmFjaywgJ3NldFN0YXRlJyk7XG59O1xuLyoqXG4gKiBGb3JjZXMgYW4gdXBkYXRlLiBUaGlzIHNob3VsZCBvbmx5IGJlIGludm9rZWQgd2hlbiBpdCBpcyBrbm93biB3aXRoXG4gKiBjZXJ0YWludHkgdGhhdCB3ZSBhcmUgKipub3QqKiBpbiBhIERPTSB0cmFuc2FjdGlvbi5cbiAqXG4gKiBZb3UgbWF5IHdhbnQgdG8gY2FsbCB0aGlzIHdoZW4geW91IGtub3cgdGhhdCBzb21lIGRlZXBlciBhc3BlY3Qgb2YgdGhlXG4gKiBjb21wb25lbnQncyBzdGF0ZSBoYXMgY2hhbmdlZCBidXQgYHNldFN0YXRlYCB3YXMgbm90IGNhbGxlZC5cbiAqXG4gKiBUaGlzIHdpbGwgbm90IGludm9rZSBgc2hvdWxkQ29tcG9uZW50VXBkYXRlYCwgYnV0IGl0IHdpbGwgaW52b2tlXG4gKiBgY29tcG9uZW50V2lsbFVwZGF0ZWAgYW5kIGBjb21wb25lbnREaWRVcGRhdGVgLlxuICpcbiAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgdXBkYXRlIGlzIGNvbXBsZXRlLlxuICogQGZpbmFsXG4gKiBAcHJvdGVjdGVkXG4gKi9cblxuXG5Db21wb25lbnQucHJvdG90eXBlLmZvcmNlVXBkYXRlID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIHRoaXMudXBkYXRlci5lbnF1ZXVlRm9yY2VVcGRhdGUodGhpcywgY2FsbGJhY2ssICdmb3JjZVVwZGF0ZScpO1xufTtcbi8qKlxuICogRGVwcmVjYXRlZCBBUElzLiBUaGVzZSBBUElzIHVzZWQgdG8gZXhpc3Qgb24gY2xhc3NpYyBSZWFjdCBjbGFzc2VzIGJ1dCBzaW5jZVxuICogd2Ugd291bGQgbGlrZSB0byBkZXByZWNhdGUgdGhlbSwgd2UncmUgbm90IGdvaW5nIHRvIG1vdmUgdGhlbSBvdmVyIHRvIHRoaXNcbiAqIG1vZGVybiBiYXNlIGNsYXNzLiBJbnN0ZWFkLCB3ZSBkZWZpbmUgYSBnZXR0ZXIgdGhhdCB3YXJucyBpZiBpdCdzIGFjY2Vzc2VkLlxuICovXG5cblxue1xuICB2YXIgZGVwcmVjYXRlZEFQSXMgPSB7XG4gICAgaXNNb3VudGVkOiBbJ2lzTW91bnRlZCcsICdJbnN0ZWFkLCBtYWtlIHN1cmUgdG8gY2xlYW4gdXAgc3Vic2NyaXB0aW9ucyBhbmQgcGVuZGluZyByZXF1ZXN0cyBpbiAnICsgJ2NvbXBvbmVudFdpbGxVbm1vdW50IHRvIHByZXZlbnQgbWVtb3J5IGxlYWtzLiddLFxuICAgIHJlcGxhY2VTdGF0ZTogWydyZXBsYWNlU3RhdGUnLCAnUmVmYWN0b3IgeW91ciBjb2RlIHRvIHVzZSBzZXRTdGF0ZSBpbnN0ZWFkIChzZWUgJyArICdodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzMyMzYpLiddXG4gIH07XG5cbiAgdmFyIGRlZmluZURlcHJlY2F0aW9uV2FybmluZyA9IGZ1bmN0aW9uIChtZXRob2ROYW1lLCBpbmZvKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbXBvbmVudC5wcm90b3R5cGUsIG1ldGhvZE5hbWUsIHtcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICB3YXJuKCclcyguLi4pIGlzIGRlcHJlY2F0ZWQgaW4gcGxhaW4gSmF2YVNjcmlwdCBSZWFjdCBjbGFzc2VzLiAlcycsIGluZm9bMF0sIGluZm9bMV0pO1xuXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgZm9yICh2YXIgZm5OYW1lIGluIGRlcHJlY2F0ZWRBUElzKSB7XG4gICAgaWYgKGRlcHJlY2F0ZWRBUElzLmhhc093blByb3BlcnR5KGZuTmFtZSkpIHtcbiAgICAgIGRlZmluZURlcHJlY2F0aW9uV2FybmluZyhmbk5hbWUsIGRlcHJlY2F0ZWRBUElzW2ZuTmFtZV0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBDb21wb25lbnREdW1teSgpIHt9XG5cbkNvbXBvbmVudER1bW15LnByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG4vKipcbiAqIENvbnZlbmllbmNlIGNvbXBvbmVudCB3aXRoIGRlZmF1bHQgc2hhbGxvdyBlcXVhbGl0eSBjaGVjayBmb3Igc0NVLlxuICovXG5cbmZ1bmN0aW9uIFB1cmVDb21wb25lbnQocHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHtcbiAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0OyAvLyBJZiBhIGNvbXBvbmVudCBoYXMgc3RyaW5nIHJlZnMsIHdlIHdpbGwgYXNzaWduIGEgZGlmZmVyZW50IG9iamVjdCBsYXRlci5cblxuICB0aGlzLnJlZnMgPSBlbXB0eU9iamVjdDtcbiAgdGhpcy51cGRhdGVyID0gdXBkYXRlciB8fCBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcbn1cblxudmFyIHB1cmVDb21wb25lbnRQcm90b3R5cGUgPSBQdXJlQ29tcG9uZW50LnByb3RvdHlwZSA9IG5ldyBDb21wb25lbnREdW1teSgpO1xucHVyZUNvbXBvbmVudFByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFB1cmVDb21wb25lbnQ7IC8vIEF2b2lkIGFuIGV4dHJhIHByb3RvdHlwZSBqdW1wIGZvciB0aGVzZSBtZXRob2RzLlxuXG5fYXNzaWduKHB1cmVDb21wb25lbnRQcm90b3R5cGUsIENvbXBvbmVudC5wcm90b3R5cGUpO1xuXG5wdXJlQ29tcG9uZW50UHJvdG90eXBlLmlzUHVyZVJlYWN0Q29tcG9uZW50ID0gdHJ1ZTtcblxuLy8gYW4gaW1tdXRhYmxlIG9iamVjdCB3aXRoIGEgc2luZ2xlIG11dGFibGUgdmFsdWVcbmZ1bmN0aW9uIGNyZWF0ZVJlZigpIHtcbiAgdmFyIHJlZk9iamVjdCA9IHtcbiAgICBjdXJyZW50OiBudWxsXG4gIH07XG5cbiAge1xuICAgIE9iamVjdC5zZWFsKHJlZk9iamVjdCk7XG4gIH1cblxuICByZXR1cm4gcmVmT2JqZWN0O1xufVxuXG5mdW5jdGlvbiBnZXRXcmFwcGVkTmFtZShvdXRlclR5cGUsIGlubmVyVHlwZSwgd3JhcHBlck5hbWUpIHtcbiAgdmFyIGZ1bmN0aW9uTmFtZSA9IGlubmVyVHlwZS5kaXNwbGF5TmFtZSB8fCBpbm5lclR5cGUubmFtZSB8fCAnJztcbiAgcmV0dXJuIG91dGVyVHlwZS5kaXNwbGF5TmFtZSB8fCAoZnVuY3Rpb25OYW1lICE9PSAnJyA/IHdyYXBwZXJOYW1lICsgXCIoXCIgKyBmdW5jdGlvbk5hbWUgKyBcIilcIiA6IHdyYXBwZXJOYW1lKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29udGV4dE5hbWUodHlwZSkge1xuICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCAnQ29udGV4dCc7XG59XG5cbmZ1bmN0aW9uIGdldENvbXBvbmVudE5hbWUodHlwZSkge1xuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgLy8gSG9zdCByb290LCB0ZXh0IG5vZGUgb3IganVzdCBpbnZhbGlkIHR5cGUuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB7XG4gICAgaWYgKHR5cGVvZiB0eXBlLnRhZyA9PT0gJ251bWJlcicpIHtcbiAgICAgIGVycm9yKCdSZWNlaXZlZCBhbiB1bmV4cGVjdGVkIG9iamVjdCBpbiBnZXRDb21wb25lbnROYW1lKCkuICcgKyAnVGhpcyBpcyBsaWtlbHkgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCBudWxsO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBleHBvcnRzLkZyYWdtZW50OlxuICAgICAgcmV0dXJuICdGcmFnbWVudCc7XG5cbiAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgcmV0dXJuICdQb3J0YWwnO1xuXG4gICAgY2FzZSBleHBvcnRzLlByb2ZpbGVyOlxuICAgICAgcmV0dXJuICdQcm9maWxlcic7XG5cbiAgICBjYXNlIGV4cG9ydHMuU3RyaWN0TW9kZTpcbiAgICAgIHJldHVybiAnU3RyaWN0TW9kZSc7XG5cbiAgICBjYXNlIGV4cG9ydHMuU3VzcGVuc2U6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZUxpc3QnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgIHZhciBjb250ZXh0ID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKGNvbnRleHQpICsgJy5Db25zdW1lcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgdmFyIHByb3ZpZGVyID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKHByb3ZpZGVyLl9jb250ZXh0KSArICcuUHJvdmlkZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRXcmFwcGVkTmFtZSh0eXBlLCB0eXBlLnJlbmRlciwgJ0ZvcndhcmRSZWYnKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHR5cGUudHlwZSk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfQkxPQ0tfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUodHlwZS5fcmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZShpbml0KHBheWxvYWQpKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBSRVNFUlZFRF9QUk9QUyA9IHtcbiAga2V5OiB0cnVlLFxuICByZWY6IHRydWUsXG4gIF9fc2VsZjogdHJ1ZSxcbiAgX19zb3VyY2U6IHRydWVcbn07XG52YXIgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24sIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duLCBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzO1xuXG57XG4gIGRpZFdhcm5BYm91dFN0cmluZ1JlZnMgPSB7fTtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRSZWYoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdyZWYnKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAncmVmJykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5yZWYgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRLZXkoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdrZXknKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAna2V5JykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5rZXkgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkgPSBmdW5jdGlvbiAoKSB7XG4gICAge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBga2V5YCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdrZXknLCB7XG4gICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdLZXksXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ1JlZiA9IGZ1bmN0aW9uICgpIHtcbiAgICB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGByZWZgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHdhcm5BYm91dEFjY2Vzc2luZ1JlZi5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ3JlZicsIHtcbiAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ1JlZixcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcpIHtcbiAge1xuICAgIGlmICh0eXBlb2YgY29uZmlnLnJlZiA9PT0gJ3N0cmluZycgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCAmJiBjb25maWcuX19zZWxmICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQuc3RhdGVOb2RlICE9PSBjb25maWcuX19zZWxmKSB7XG4gICAgICB2YXIgY29tcG9uZW50TmFtZSA9IGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKTtcblxuICAgICAgaWYgKCFkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdKSB7XG4gICAgICAgIGVycm9yKCdDb21wb25lbnQgXCIlc1wiIGNvbnRhaW5zIHRoZSBzdHJpbmcgcmVmIFwiJXNcIi4gJyArICdTdXBwb3J0IGZvciBzdHJpbmcgcmVmcyB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gJyArICdUaGlzIGNhc2UgY2Fubm90IGJlIGF1dG9tYXRpY2FsbHkgY29udmVydGVkIHRvIGFuIGFycm93IGZ1bmN0aW9uLiAnICsgJ1dlIGFzayB5b3UgdG8gbWFudWFsbHkgZml4IHRoaXMgY2FzZSBieSB1c2luZyB1c2VSZWYoKSBvciBjcmVhdGVSZWYoKSBpbnN0ZWFkLiAnICsgJ0xlYXJuIG1vcmUgYWJvdXQgdXNpbmcgcmVmcyBzYWZlbHkgaGVyZTogJyArICdodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3RyaWN0LW1vZGUtc3RyaW5nLXJlZicsIGNvbXBvbmVudE5hbWUsIGNvbmZpZy5yZWYpO1xuXG4gICAgICAgIGRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBGYWN0b3J5IG1ldGhvZCB0byBjcmVhdGUgYSBuZXcgUmVhY3QgZWxlbWVudC4gVGhpcyBubyBsb25nZXIgYWRoZXJlcyB0b1xuICogdGhlIGNsYXNzIHBhdHRlcm4sIHNvIGRvIG5vdCB1c2UgbmV3IHRvIGNhbGwgaXQuIEFsc28sIGluc3RhbmNlb2YgY2hlY2tcbiAqIHdpbGwgbm90IHdvcmsuIEluc3RlYWQgdGVzdCAkJHR5cGVvZiBmaWVsZCBhZ2FpbnN0IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSB0byBjaGVja1xuICogaWYgc29tZXRoaW5nIGlzIGEgUmVhY3QgRWxlbWVudC5cbiAqXG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEBwYXJhbSB7Kn0gcHJvcHNcbiAqIEBwYXJhbSB7Kn0ga2V5XG4gKiBAcGFyYW0ge3N0cmluZ3xvYmplY3R9IHJlZlxuICogQHBhcmFtIHsqfSBvd25lclxuICogQHBhcmFtIHsqfSBzZWxmIEEgKnRlbXBvcmFyeSogaGVscGVyIHRvIGRldGVjdCBwbGFjZXMgd2hlcmUgYHRoaXNgIGlzXG4gKiBkaWZmZXJlbnQgZnJvbSB0aGUgYG93bmVyYCB3aGVuIFJlYWN0LmNyZWF0ZUVsZW1lbnQgaXMgY2FsbGVkLCBzbyB0aGF0IHdlXG4gKiBjYW4gd2Fybi4gV2Ugd2FudCB0byBnZXQgcmlkIG9mIG93bmVyIGFuZCByZXBsYWNlIHN0cmluZyBgcmVmYHMgd2l0aCBhcnJvd1xuICogZnVuY3Rpb25zLCBhbmQgYXMgbG9uZyBhcyBgdGhpc2AgYW5kIG93bmVyIGFyZSB0aGUgc2FtZSwgdGhlcmUgd2lsbCBiZSBub1xuICogY2hhbmdlIGluIGJlaGF2aW9yLlxuICogQHBhcmFtIHsqfSBzb3VyY2UgQW4gYW5ub3RhdGlvbiBvYmplY3QgKGFkZGVkIGJ5IGEgdHJhbnNwaWxlciBvciBvdGhlcndpc2UpXG4gKiBpbmRpY2F0aW5nIGZpbGVuYW1lLCBsaW5lIG51bWJlciwgYW5kL29yIG90aGVyIGluZm9ybWF0aW9uLlxuICogQGludGVybmFsXG4gKi9cblxuXG52YXIgUmVhY3RFbGVtZW50ID0gZnVuY3Rpb24gKHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIG93bmVyLCBwcm9wcykge1xuICB2YXIgZWxlbWVudCA9IHtcbiAgICAvLyBUaGlzIHRhZyBhbGxvd3MgdXMgdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhpcyBhcyBhIFJlYWN0IEVsZW1lbnRcbiAgICAkJHR5cGVvZjogUkVBQ1RfRUxFTUVOVF9UWVBFLFxuICAgIC8vIEJ1aWx0LWluIHByb3BlcnRpZXMgdGhhdCBiZWxvbmcgb24gdGhlIGVsZW1lbnRcbiAgICB0eXBlOiB0eXBlLFxuICAgIGtleToga2V5LFxuICAgIHJlZjogcmVmLFxuICAgIHByb3BzOiBwcm9wcyxcbiAgICAvLyBSZWNvcmQgdGhlIGNvbXBvbmVudCByZXNwb25zaWJsZSBmb3IgY3JlYXRpbmcgdGhpcyBlbGVtZW50LlxuICAgIF9vd25lcjogb3duZXJcbiAgfTtcblxuICB7XG4gICAgLy8gVGhlIHZhbGlkYXRpb24gZmxhZyBpcyBjdXJyZW50bHkgbXV0YXRpdmUuIFdlIHB1dCBpdCBvblxuICAgIC8vIGFuIGV4dGVybmFsIGJhY2tpbmcgc3RvcmUgc28gdGhhdCB3ZSBjYW4gZnJlZXplIHRoZSB3aG9sZSBvYmplY3QuXG4gICAgLy8gVGhpcyBjYW4gYmUgcmVwbGFjZWQgd2l0aCBhIFdlYWtNYXAgb25jZSB0aGV5IGFyZSBpbXBsZW1lbnRlZCBpblxuICAgIC8vIGNvbW1vbmx5IHVzZWQgZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzLlxuICAgIGVsZW1lbnQuX3N0b3JlID0ge307IC8vIFRvIG1ha2UgY29tcGFyaW5nIFJlYWN0RWxlbWVudHMgZWFzaWVyIGZvciB0ZXN0aW5nIHB1cnBvc2VzLCB3ZSBtYWtlXG4gICAgLy8gdGhlIHZhbGlkYXRpb24gZmxhZyBub24tZW51bWVyYWJsZSAod2hlcmUgcG9zc2libGUsIHdoaWNoIHNob3VsZFxuICAgIC8vIGluY2x1ZGUgZXZlcnkgZW52aXJvbm1lbnQgd2UgcnVuIHRlc3RzIGluKSwgc28gdGhlIHRlc3QgZnJhbWV3b3JrXG4gICAgLy8gaWdub3JlcyBpdC5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50Ll9zdG9yZSwgJ3ZhbGlkYXRlZCcsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IGZhbHNlXG4gICAgfSk7IC8vIHNlbGYgYW5kIHNvdXJjZSBhcmUgREVWIG9ubHkgcHJvcGVydGllcy5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NlbGYnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc2VsZlxuICAgIH0pOyAvLyBUd28gZWxlbWVudHMgY3JlYXRlZCBpbiB0d28gZGlmZmVyZW50IHBsYWNlcyBzaG91bGQgYmUgY29uc2lkZXJlZFxuICAgIC8vIGVxdWFsIGZvciB0ZXN0aW5nIHB1cnBvc2VzIGFuZCB0aGVyZWZvcmUgd2UgaGlkZSBpdCBmcm9tIGVudW1lcmF0aW9uLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc291cmNlJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNvdXJjZVxuICAgIH0pO1xuXG4gICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudC5wcm9wcyk7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufTtcbi8qKlxuICogQ3JlYXRlIGFuZCByZXR1cm4gYSBuZXcgUmVhY3RFbGVtZW50IG9mIHRoZSBnaXZlbiB0eXBlLlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNjcmVhdGVlbGVtZW50XG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0eXBlLCBjb25maWcsIGNoaWxkcmVuKSB7XG4gIHZhciBwcm9wTmFtZTsgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxuXG4gIHZhciBwcm9wcyA9IHt9O1xuICB2YXIga2V5ID0gbnVsbDtcbiAgdmFyIHJlZiA9IG51bGw7XG4gIHZhciBzZWxmID0gbnVsbDtcbiAgdmFyIHNvdXJjZSA9IG51bGw7XG5cbiAgaWYgKGNvbmZpZyAhPSBudWxsKSB7XG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIHJlZiA9IGNvbmZpZy5yZWY7XG5cbiAgICAgIHtcbiAgICAgICAgd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcbiAgICB9XG5cbiAgICBzZWxmID0gY29uZmlnLl9fc2VsZiA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbmZpZy5fX3NlbGY7XG4gICAgc291cmNlID0gY29uZmlnLl9fc291cmNlID09PSB1bmRlZmluZWQgPyBudWxsIDogY29uZmlnLl9fc291cmNlOyAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBhcmUgYWRkZWQgdG8gYSBuZXcgcHJvcHMgb2JqZWN0XG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgfSAvLyBDaGlsZHJlbiBjYW4gYmUgbW9yZSB0aGFuIG9uZSBhcmd1bWVudCwgYW5kIHRob3NlIGFyZSB0cmFuc2ZlcnJlZCBvbnRvXG4gIC8vIHRoZSBuZXdseSBhbGxvY2F0ZWQgcHJvcHMgb2JqZWN0LlxuXG5cbiAgdmFyIGNoaWxkcmVuTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCAtIDI7XG5cbiAgaWYgKGNoaWxkcmVuTGVuZ3RoID09PSAxKSB7XG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgfSBlbHNlIGlmIChjaGlsZHJlbkxlbmd0aCA+IDEpIHtcbiAgICB2YXIgY2hpbGRBcnJheSA9IEFycmF5KGNoaWxkcmVuTGVuZ3RoKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW5MZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGRBcnJheVtpXSA9IGFyZ3VtZW50c1tpICsgMl07XG4gICAgfVxuXG4gICAge1xuICAgICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgICAgT2JqZWN0LmZyZWV6ZShjaGlsZEFycmF5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkQXJyYXk7XG4gIH0gLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG5cblxuICBpZiAodHlwZSAmJiB0eXBlLmRlZmF1bHRQcm9wcykge1xuICAgIHZhciBkZWZhdWx0UHJvcHMgPSB0eXBlLmRlZmF1bHRQcm9wcztcblxuICAgIGZvciAocHJvcE5hbWUgaW4gZGVmYXVsdFByb3BzKSB7XG4gICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB7XG4gICAgaWYgKGtleSB8fCByZWYpIHtcbiAgICAgIHZhciBkaXNwbGF5TmFtZSA9IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nID8gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgJ1Vua25vd24nIDogdHlwZTtcblxuICAgICAgaWYgKGtleSkge1xuICAgICAgICBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVmKSB7XG4gICAgICAgIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0RWxlbWVudCh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LCBwcm9wcyk7XG59XG5mdW5jdGlvbiBjbG9uZUFuZFJlcGxhY2VLZXkob2xkRWxlbWVudCwgbmV3S2V5KSB7XG4gIHZhciBuZXdFbGVtZW50ID0gUmVhY3RFbGVtZW50KG9sZEVsZW1lbnQudHlwZSwgbmV3S2V5LCBvbGRFbGVtZW50LnJlZiwgb2xkRWxlbWVudC5fc2VsZiwgb2xkRWxlbWVudC5fc291cmNlLCBvbGRFbGVtZW50Ll9vd25lciwgb2xkRWxlbWVudC5wcm9wcyk7XG4gIHJldHVybiBuZXdFbGVtZW50O1xufVxuLyoqXG4gKiBDbG9uZSBhbmQgcmV0dXJuIGEgbmV3IFJlYWN0RWxlbWVudCB1c2luZyBlbGVtZW50IGFzIHRoZSBzdGFydGluZyBwb2ludC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjY2xvbmVlbGVtZW50XG4gKi9cblxuZnVuY3Rpb24gY2xvbmVFbGVtZW50KGVsZW1lbnQsIGNvbmZpZywgY2hpbGRyZW4pIHtcbiAgaWYgKCEhKGVsZW1lbnQgPT09IG51bGwgfHwgZWxlbWVudCA9PT0gdW5kZWZpbmVkKSkge1xuICAgIHtcbiAgICAgIHRocm93IEVycm9yKCBcIlJlYWN0LmNsb25lRWxlbWVudCguLi4pOiBUaGUgYXJndW1lbnQgbXVzdCBiZSBhIFJlYWN0IGVsZW1lbnQsIGJ1dCB5b3UgcGFzc2VkIFwiICsgZWxlbWVudCArIFwiLlwiICk7XG4gICAgfVxuICB9XG5cbiAgdmFyIHByb3BOYW1lOyAvLyBPcmlnaW5hbCBwcm9wcyBhcmUgY29waWVkXG5cbiAgdmFyIHByb3BzID0gX2Fzc2lnbih7fSwgZWxlbWVudC5wcm9wcyk7IC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcblxuXG4gIHZhciBrZXkgPSBlbGVtZW50LmtleTtcbiAgdmFyIHJlZiA9IGVsZW1lbnQucmVmOyAvLyBTZWxmIGlzIHByZXNlcnZlZCBzaW5jZSB0aGUgb3duZXIgaXMgcHJlc2VydmVkLlxuXG4gIHZhciBzZWxmID0gZWxlbWVudC5fc2VsZjsgLy8gU291cmNlIGlzIHByZXNlcnZlZCBzaW5jZSBjbG9uZUVsZW1lbnQgaXMgdW5saWtlbHkgdG8gYmUgdGFyZ2V0ZWQgYnkgYVxuICAvLyB0cmFuc3BpbGVyLCBhbmQgdGhlIG9yaWdpbmFsIHNvdXJjZSBpcyBwcm9iYWJseSBhIGJldHRlciBpbmRpY2F0b3Igb2YgdGhlXG4gIC8vIHRydWUgb3duZXIuXG5cbiAgdmFyIHNvdXJjZSA9IGVsZW1lbnQuX3NvdXJjZTsgLy8gT3duZXIgd2lsbCBiZSBwcmVzZXJ2ZWQsIHVubGVzcyByZWYgaXMgb3ZlcnJpZGRlblxuXG4gIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuXG4gIGlmIChjb25maWcgIT0gbnVsbCkge1xuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICAvLyBTaWxlbnRseSBzdGVhbCB0aGUgcmVmIGZyb20gdGhlIHBhcmVudC5cbiAgICAgIHJlZiA9IGNvbmZpZy5yZWY7XG4gICAgICBvd25lciA9IFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQ7XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcbiAgICB9IC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIG92ZXJyaWRlIGV4aXN0aW5nIHByb3BzXG5cblxuICAgIHZhciBkZWZhdWx0UHJvcHM7XG5cbiAgICBpZiAoZWxlbWVudC50eXBlICYmIGVsZW1lbnQudHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICAgIGRlZmF1bHRQcm9wcyA9IGVsZW1lbnQudHlwZS5kZWZhdWx0UHJvcHM7XG4gICAgfVxuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgaWYgKGNvbmZpZ1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCAmJiBkZWZhdWx0UHJvcHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSAvLyBDaGlsZHJlbiBjYW4gYmUgbW9yZSB0aGFuIG9uZSBhcmd1bWVudCwgYW5kIHRob3NlIGFyZSB0cmFuc2ZlcnJlZCBvbnRvXG4gIC8vIHRoZSBuZXdseSBhbGxvY2F0ZWQgcHJvcHMgb2JqZWN0LlxuXG5cbiAgdmFyIGNoaWxkcmVuTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCAtIDI7XG5cbiAgaWYgKGNoaWxkcmVuTGVuZ3RoID09PSAxKSB7XG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgfSBlbHNlIGlmIChjaGlsZHJlbkxlbmd0aCA+IDEpIHtcbiAgICB2YXIgY2hpbGRBcnJheSA9IEFycmF5KGNoaWxkcmVuTGVuZ3RoKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW5MZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGRBcnJheVtpXSA9IGFyZ3VtZW50c1tpICsgMl07XG4gICAgfVxuXG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZEFycmF5O1xuICB9XG5cbiAgcmV0dXJuIFJlYWN0RWxlbWVudChlbGVtZW50LnR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIG93bmVyLCBwcm9wcyk7XG59XG4vKipcbiAqIFZlcmlmaWVzIHRoZSBvYmplY3QgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2lzdmFsaWRlbGVtZW50XG4gKiBAcGFyYW0gez9vYmplY3R9IG9iamVjdFxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBgb2JqZWN0YCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIEBmaW5hbFxuICovXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuXG52YXIgU0VQQVJBVE9SID0gJy4nO1xudmFyIFNVQlNFUEFSQVRPUiA9ICc6Jztcbi8qKlxuICogRXNjYXBlIGFuZCB3cmFwIGtleSBzbyBpdCBpcyBzYWZlIHRvIHVzZSBhcyBhIHJlYWN0aWRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IHRvIGJlIGVzY2FwZWQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IHRoZSBlc2NhcGVkIGtleS5cbiAqL1xuXG5mdW5jdGlvbiBlc2NhcGUoa2V5KSB7XG4gIHZhciBlc2NhcGVSZWdleCA9IC9bPTpdL2c7XG4gIHZhciBlc2NhcGVyTG9va3VwID0ge1xuICAgICc9JzogJz0wJyxcbiAgICAnOic6ICc9MidcbiAgfTtcbiAgdmFyIGVzY2FwZWRTdHJpbmcgPSBrZXkucmVwbGFjZShlc2NhcGVSZWdleCwgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgcmV0dXJuIGVzY2FwZXJMb29rdXBbbWF0Y2hdO1xuICB9KTtcbiAgcmV0dXJuICckJyArIGVzY2FwZWRTdHJpbmc7XG59XG4vKipcbiAqIFRPRE86IFRlc3QgdGhhdCBhIHNpbmdsZSBjaGlsZCBhbmQgYW4gYXJyYXkgd2l0aCBvbmUgaXRlbSBoYXZlIHRoZSBzYW1lIGtleVxuICogcGF0dGVybi5cbiAqL1xuXG5cbnZhciBkaWRXYXJuQWJvdXRNYXBzID0gZmFsc2U7XG52YXIgdXNlclByb3ZpZGVkS2V5RXNjYXBlUmVnZXggPSAvXFwvKy9nO1xuXG5mdW5jdGlvbiBlc2NhcGVVc2VyUHJvdmlkZWRLZXkodGV4dCkge1xuICByZXR1cm4gdGV4dC5yZXBsYWNlKHVzZXJQcm92aWRlZEtleUVzY2FwZVJlZ2V4LCAnJCYvJyk7XG59XG4vKipcbiAqIEdlbmVyYXRlIGEga2V5IHN0cmluZyB0aGF0IGlkZW50aWZpZXMgYSBlbGVtZW50IHdpdGhpbiBhIHNldC5cbiAqXG4gKiBAcGFyYW0geyp9IGVsZW1lbnQgQSBlbGVtZW50IHRoYXQgY291bGQgY29udGFpbiBhIG1hbnVhbCBrZXkuXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggSW5kZXggdGhhdCBpcyB1c2VkIGlmIGEgbWFudWFsIGtleSBpcyBub3QgcHJvdmlkZWQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cblxuXG5mdW5jdGlvbiBnZXRFbGVtZW50S2V5KGVsZW1lbnQsIGluZGV4KSB7XG4gIC8vIERvIHNvbWUgdHlwZWNoZWNraW5nIGhlcmUgc2luY2Ugd2UgY2FsbCB0aGlzIGJsaW5kbHkuIFdlIHdhbnQgdG8gZW5zdXJlXG4gIC8vIHRoYXQgd2UgZG9uJ3QgYmxvY2sgcG90ZW50aWFsIGZ1dHVyZSBFUyBBUElzLlxuICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdvYmplY3QnICYmIGVsZW1lbnQgIT09IG51bGwgJiYgZWxlbWVudC5rZXkgIT0gbnVsbCkge1xuICAgIC8vIEV4cGxpY2l0IGtleVxuICAgIHJldHVybiBlc2NhcGUoJycgKyBlbGVtZW50LmtleSk7XG4gIH0gLy8gSW1wbGljaXQga2V5IGRldGVybWluZWQgYnkgdGhlIGluZGV4IGluIHRoZSBzZXRcblxuXG4gIHJldHVybiBpbmRleC50b1N0cmluZygzNik7XG59XG5cbmZ1bmN0aW9uIG1hcEludG9BcnJheShjaGlsZHJlbiwgYXJyYXksIGVzY2FwZWRQcmVmaXgsIG5hbWVTb0ZhciwgY2FsbGJhY2spIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgY2hpbGRyZW47XG5cbiAgaWYgKHR5cGUgPT09ICd1bmRlZmluZWQnIHx8IHR5cGUgPT09ICdib29sZWFuJykge1xuICAgIC8vIEFsbCBvZiB0aGUgYWJvdmUgYXJlIHBlcmNlaXZlZCBhcyBudWxsLlxuICAgIGNoaWxkcmVuID0gbnVsbDtcbiAgfVxuXG4gIHZhciBpbnZva2VDYWxsYmFjayA9IGZhbHNlO1xuXG4gIGlmIChjaGlsZHJlbiA9PT0gbnVsbCkge1xuICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICBpbnZva2VDYWxsYmFjayA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICBzd2l0Y2ggKGNoaWxkcmVuLiQkdHlwZW9mKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgfVxuICB9XG5cbiAgaWYgKGludm9rZUNhbGxiYWNrKSB7XG4gICAgdmFyIF9jaGlsZCA9IGNoaWxkcmVuO1xuICAgIHZhciBtYXBwZWRDaGlsZCA9IGNhbGxiYWNrKF9jaGlsZCk7IC8vIElmIGl0J3MgdGhlIG9ubHkgY2hpbGQsIHRyZWF0IHRoZSBuYW1lIGFzIGlmIGl0IHdhcyB3cmFwcGVkIGluIGFuIGFycmF5XG4gICAgLy8gc28gdGhhdCBpdCdzIGNvbnNpc3RlbnQgaWYgdGhlIG51bWJlciBvZiBjaGlsZHJlbiBncm93czpcblxuICAgIHZhciBjaGlsZEtleSA9IG5hbWVTb0ZhciA9PT0gJycgPyBTRVBBUkFUT1IgKyBnZXRFbGVtZW50S2V5KF9jaGlsZCwgMCkgOiBuYW1lU29GYXI7XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShtYXBwZWRDaGlsZCkpIHtcbiAgICAgIHZhciBlc2NhcGVkQ2hpbGRLZXkgPSAnJztcblxuICAgICAgaWYgKGNoaWxkS2V5ICE9IG51bGwpIHtcbiAgICAgICAgZXNjYXBlZENoaWxkS2V5ID0gZXNjYXBlVXNlclByb3ZpZGVkS2V5KGNoaWxkS2V5KSArICcvJztcbiAgICAgIH1cblxuICAgICAgbWFwSW50b0FycmF5KG1hcHBlZENoaWxkLCBhcnJheSwgZXNjYXBlZENoaWxkS2V5LCAnJywgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgcmV0dXJuIGM7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKG1hcHBlZENoaWxkICE9IG51bGwpIHtcbiAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChtYXBwZWRDaGlsZCkpIHtcbiAgICAgICAgbWFwcGVkQ2hpbGQgPSBjbG9uZUFuZFJlcGxhY2VLZXkobWFwcGVkQ2hpbGQsIC8vIEtlZXAgYm90aCB0aGUgKG1hcHBlZCkgYW5kIG9sZCBrZXlzIGlmIHRoZXkgZGlmZmVyLCBqdXN0IGFzXG4gICAgICAgIC8vIHRyYXZlcnNlQWxsQ2hpbGRyZW4gdXNlZCB0byBkbyBmb3Igb2JqZWN0cyBhcyBjaGlsZHJlblxuICAgICAgICBlc2NhcGVkUHJlZml4ICsgKCAvLyAkRmxvd0ZpeE1lIEZsb3cgaW5jb3JyZWN0bHkgdGhpbmtzIFJlYWN0LlBvcnRhbCBkb2Vzbid0IGhhdmUgYSBrZXlcbiAgICAgICAgbWFwcGVkQ2hpbGQua2V5ICYmICghX2NoaWxkIHx8IF9jaGlsZC5rZXkgIT09IG1hcHBlZENoaWxkLmtleSkgPyAvLyAkRmxvd0ZpeE1lIEZsb3cgaW5jb3JyZWN0bHkgdGhpbmtzIGV4aXN0aW5nIGVsZW1lbnQncyBrZXkgY2FuIGJlIGEgbnVtYmVyXG4gICAgICAgIGVzY2FwZVVzZXJQcm92aWRlZEtleSgnJyArIG1hcHBlZENoaWxkLmtleSkgKyAnLycgOiAnJykgKyBjaGlsZEtleSk7XG4gICAgICB9XG5cbiAgICAgIGFycmF5LnB1c2gobWFwcGVkQ2hpbGQpO1xuICAgIH1cblxuICAgIHJldHVybiAxO1xuICB9XG5cbiAgdmFyIGNoaWxkO1xuICB2YXIgbmV4dE5hbWU7XG4gIHZhciBzdWJ0cmVlQ291bnQgPSAwOyAvLyBDb3VudCBvZiBjaGlsZHJlbiBmb3VuZCBpbiB0aGUgY3VycmVudCBzdWJ0cmVlLlxuXG4gIHZhciBuZXh0TmFtZVByZWZpeCA9IG5hbWVTb0ZhciA9PT0gJycgPyBTRVBBUkFUT1IgOiBuYW1lU29GYXIgKyBTVUJTRVBBUkFUT1I7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgIG5leHROYW1lID0gbmV4dE5hbWVQcmVmaXggKyBnZXRFbGVtZW50S2V5KGNoaWxkLCBpKTtcbiAgICAgIHN1YnRyZWVDb3VudCArPSBtYXBJbnRvQXJyYXkoY2hpbGQsIGFycmF5LCBlc2NhcGVkUHJlZml4LCBuZXh0TmFtZSwgY2FsbGJhY2spO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4oY2hpbGRyZW4pO1xuXG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB2YXIgaXRlcmFibGVDaGlsZHJlbiA9IGNoaWxkcmVuO1xuXG4gICAgICB7XG4gICAgICAgIC8vIFdhcm4gYWJvdXQgdXNpbmcgTWFwcyBhcyBjaGlsZHJlblxuICAgICAgICBpZiAoaXRlcmF0b3JGbiA9PT0gaXRlcmFibGVDaGlsZHJlbi5lbnRyaWVzKSB7XG4gICAgICAgICAgaWYgKCFkaWRXYXJuQWJvdXRNYXBzKSB7XG4gICAgICAgICAgICB3YXJuKCdVc2luZyBNYXBzIGFzIGNoaWxkcmVuIGlzIG5vdCBzdXBwb3J0ZWQuICcgKyAnVXNlIGFuIGFycmF5IG9mIGtleWVkIFJlYWN0RWxlbWVudHMgaW5zdGVhZC4nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkaWRXYXJuQWJvdXRNYXBzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwoaXRlcmFibGVDaGlsZHJlbik7XG4gICAgICB2YXIgc3RlcDtcbiAgICAgIHZhciBpaSA9IDA7XG5cbiAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgY2hpbGQgPSBzdGVwLnZhbHVlO1xuICAgICAgICBuZXh0TmFtZSA9IG5leHROYW1lUHJlZml4ICsgZ2V0RWxlbWVudEtleShjaGlsZCwgaWkrKyk7XG4gICAgICAgIHN1YnRyZWVDb3VudCArPSBtYXBJbnRvQXJyYXkoY2hpbGQsIGFycmF5LCBlc2NhcGVkUHJlZml4LCBuZXh0TmFtZSwgY2FsbGJhY2spO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHZhciBjaGlsZHJlblN0cmluZyA9ICcnICsgY2hpbGRyZW47XG5cbiAgICAgIHtcbiAgICAgICAge1xuICAgICAgICAgIHRocm93IEVycm9yKCBcIk9iamVjdHMgYXJlIG5vdCB2YWxpZCBhcyBhIFJlYWN0IGNoaWxkIChmb3VuZDogXCIgKyAoY2hpbGRyZW5TdHJpbmcgPT09ICdbb2JqZWN0IE9iamVjdF0nID8gJ29iamVjdCB3aXRoIGtleXMgeycgKyBPYmplY3Qua2V5cyhjaGlsZHJlbikuam9pbignLCAnKSArICd9JyA6IGNoaWxkcmVuU3RyaW5nKSArIFwiKS4gSWYgeW91IG1lYW50IHRvIHJlbmRlciBhIGNvbGxlY3Rpb24gb2YgY2hpbGRyZW4sIHVzZSBhbiBhcnJheSBpbnN0ZWFkLlwiICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3VidHJlZUNvdW50O1xufVxuXG4vKipcbiAqIE1hcHMgY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbm1hcFxuICpcbiAqIFRoZSBwcm92aWRlZCBtYXBGdW5jdGlvbihjaGlsZCwgaW5kZXgpIHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoXG4gKiBsZWFmIGNoaWxkLlxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHBhcmFtIHtmdW5jdGlvbigqLCBpbnQpfSBmdW5jIFRoZSBtYXAgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyp9IGNvbnRleHQgQ29udGV4dCBmb3IgbWFwRnVuY3Rpb24uXG4gKiBAcmV0dXJuIHtvYmplY3R9IE9iamVjdCBjb250YWluaW5nIHRoZSBvcmRlcmVkIG1hcCBvZiByZXN1bHRzLlxuICovXG5mdW5jdGlvbiBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuYywgY29udGV4dCkge1xuICBpZiAoY2hpbGRyZW4gPT0gbnVsbCkge1xuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfVxuXG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGNvdW50ID0gMDtcbiAgbWFwSW50b0FycmF5KGNoaWxkcmVuLCByZXN1bHQsICcnLCAnJywgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgcmV0dXJuIGZ1bmMuY2FsbChjb250ZXh0LCBjaGlsZCwgY291bnQrKyk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuLyoqXG4gKiBDb3VudCB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXNcbiAqIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVuY291bnRcbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIG51bWJlciBvZiBjaGlsZHJlbi5cbiAqL1xuXG5cbmZ1bmN0aW9uIGNvdW50Q2hpbGRyZW4oY2hpbGRyZW4pIHtcbiAgdmFyIG4gPSAwO1xuICBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuY3Rpb24gKCkge1xuICAgIG4rKzsgLy8gRG9uJ3QgcmV0dXJuIGFueXRoaW5nXG4gIH0pO1xuICByZXR1cm4gbjtcbn1cblxuLyoqXG4gKiBJdGVyYXRlcyB0aHJvdWdoIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5mb3JlYWNoXG4gKlxuICogVGhlIHByb3ZpZGVkIGZvckVhY2hGdW5jKGNoaWxkLCBpbmRleCkgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2hcbiAqIGxlYWYgY2hpbGQuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCosIGludCl9IGZvckVhY2hGdW5jXG4gKiBAcGFyYW0geyp9IGZvckVhY2hDb250ZXh0IENvbnRleHQgZm9yIGZvckVhY2hDb250ZXh0LlxuICovXG5mdW5jdGlvbiBmb3JFYWNoQ2hpbGRyZW4oY2hpbGRyZW4sIGZvckVhY2hGdW5jLCBmb3JFYWNoQ29udGV4dCkge1xuICBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuY3Rpb24gKCkge1xuICAgIGZvckVhY2hGdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IC8vIERvbid0IHJldHVybiBhbnl0aGluZy5cbiAgfSwgZm9yRWFjaENvbnRleHQpO1xufVxuLyoqXG4gKiBGbGF0dGVuIGEgY2hpbGRyZW4gb2JqZWN0ICh0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmApIGFuZFxuICogcmV0dXJuIGFuIGFycmF5IHdpdGggYXBwcm9wcmlhdGVseSByZS1rZXllZCBjaGlsZHJlbi5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW50b2FycmF5XG4gKi9cblxuXG5mdW5jdGlvbiB0b0FycmF5KGNoaWxkcmVuKSB7XG4gIHJldHVybiBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgcmV0dXJuIGNoaWxkO1xuICB9KSB8fCBbXTtcbn1cbi8qKlxuICogUmV0dXJucyB0aGUgZmlyc3QgY2hpbGQgaW4gYSBjb2xsZWN0aW9uIG9mIGNoaWxkcmVuIGFuZCB2ZXJpZmllcyB0aGF0IHRoZXJlXG4gKiBpcyBvbmx5IG9uZSBjaGlsZCBpbiB0aGUgY29sbGVjdGlvbi5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5vbmx5XG4gKlxuICogVGhlIGN1cnJlbnQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBmdW5jdGlvbiBhc3N1bWVzIHRoYXQgYSBzaW5nbGUgY2hpbGQgZ2V0c1xuICogcGFzc2VkIHdpdGhvdXQgYSB3cmFwcGVyLCBidXQgdGhlIHB1cnBvc2Ugb2YgdGhpcyBoZWxwZXIgZnVuY3Rpb24gaXMgdG9cbiAqIGFic3RyYWN0IGF3YXkgdGhlIHBhcnRpY3VsYXIgc3RydWN0dXJlIG9mIGNoaWxkcmVuLlxuICpcbiAqIEBwYXJhbSB7P29iamVjdH0gY2hpbGRyZW4gQ2hpbGQgY29sbGVjdGlvbiBzdHJ1Y3R1cmUuXG4gKiBAcmV0dXJuIHtSZWFjdEVsZW1lbnR9IFRoZSBmaXJzdCBhbmQgb25seSBgUmVhY3RFbGVtZW50YCBjb250YWluZWQgaW4gdGhlXG4gKiBzdHJ1Y3R1cmUuXG4gKi9cblxuXG5mdW5jdGlvbiBvbmx5Q2hpbGQoY2hpbGRyZW4pIHtcbiAgaWYgKCFpc1ZhbGlkRWxlbWVudChjaGlsZHJlbikpIHtcbiAgICB7XG4gICAgICB0aHJvdyBFcnJvciggXCJSZWFjdC5DaGlsZHJlbi5vbmx5IGV4cGVjdGVkIHRvIHJlY2VpdmUgYSBzaW5nbGUgUmVhY3QgZWxlbWVudCBjaGlsZC5cIiApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjaGlsZHJlbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29udGV4dChkZWZhdWx0VmFsdWUsIGNhbGN1bGF0ZUNoYW5nZWRCaXRzKSB7XG4gIGlmIChjYWxjdWxhdGVDaGFuZ2VkQml0cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2FsY3VsYXRlQ2hhbmdlZEJpdHMgPSBudWxsO1xuICB9IGVsc2Uge1xuICAgIHtcbiAgICAgIGlmIChjYWxjdWxhdGVDaGFuZ2VkQml0cyAhPT0gbnVsbCAmJiB0eXBlb2YgY2FsY3VsYXRlQ2hhbmdlZEJpdHMgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZXJyb3IoJ2NyZWF0ZUNvbnRleHQ6IEV4cGVjdGVkIHRoZSBvcHRpb25hbCBzZWNvbmQgYXJndW1lbnQgdG8gYmUgYSAnICsgJ2Z1bmN0aW9uLiBJbnN0ZWFkIHJlY2VpdmVkOiAlcycsIGNhbGN1bGF0ZUNoYW5nZWRCaXRzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YXIgY29udGV4dCA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfQ09OVEVYVF9UWVBFLFxuICAgIF9jYWxjdWxhdGVDaGFuZ2VkQml0czogY2FsY3VsYXRlQ2hhbmdlZEJpdHMsXG4gICAgLy8gQXMgYSB3b3JrYXJvdW5kIHRvIHN1cHBvcnQgbXVsdGlwbGUgY29uY3VycmVudCByZW5kZXJlcnMsIHdlIGNhdGVnb3JpemVcbiAgICAvLyBzb21lIHJlbmRlcmVycyBhcyBwcmltYXJ5IGFuZCBvdGhlcnMgYXMgc2Vjb25kYXJ5LiBXZSBvbmx5IGV4cGVjdFxuICAgIC8vIHRoZXJlIHRvIGJlIHR3byBjb25jdXJyZW50IHJlbmRlcmVycyBhdCBtb3N0OiBSZWFjdCBOYXRpdmUgKHByaW1hcnkpIGFuZFxuICAgIC8vIEZhYnJpYyAoc2Vjb25kYXJ5KTsgUmVhY3QgRE9NIChwcmltYXJ5KSBhbmQgUmVhY3QgQVJUIChzZWNvbmRhcnkpLlxuICAgIC8vIFNlY29uZGFyeSByZW5kZXJlcnMgc3RvcmUgdGhlaXIgY29udGV4dCB2YWx1ZXMgb24gc2VwYXJhdGUgZmllbGRzLlxuICAgIF9jdXJyZW50VmFsdWU6IGRlZmF1bHRWYWx1ZSxcbiAgICBfY3VycmVudFZhbHVlMjogZGVmYXVsdFZhbHVlLFxuICAgIC8vIFVzZWQgdG8gdHJhY2sgaG93IG1hbnkgY29uY3VycmVudCByZW5kZXJlcnMgdGhpcyBjb250ZXh0IGN1cnJlbnRseVxuICAgIC8vIHN1cHBvcnRzIHdpdGhpbiBpbiBhIHNpbmdsZSByZW5kZXJlci4gU3VjaCBhcyBwYXJhbGxlbCBzZXJ2ZXIgcmVuZGVyaW5nLlxuICAgIF90aHJlYWRDb3VudDogMCxcbiAgICAvLyBUaGVzZSBhcmUgY2lyY3VsYXJcbiAgICBQcm92aWRlcjogbnVsbCxcbiAgICBDb25zdW1lcjogbnVsbFxuICB9O1xuICBjb250ZXh0LlByb3ZpZGVyID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9QUk9WSURFUl9UWVBFLFxuICAgIF9jb250ZXh0OiBjb250ZXh0XG4gIH07XG4gIHZhciBoYXNXYXJuZWRBYm91dFVzaW5nTmVzdGVkQ29udGV4dENvbnN1bWVycyA9IGZhbHNlO1xuICB2YXIgaGFzV2FybmVkQWJvdXRVc2luZ0NvbnN1bWVyUHJvdmlkZXIgPSBmYWxzZTtcbiAgdmFyIGhhc1dhcm5lZEFib3V0RGlzcGxheU5hbWVPbkNvbnN1bWVyID0gZmFsc2U7XG5cbiAge1xuICAgIC8vIEEgc2VwYXJhdGUgb2JqZWN0LCBidXQgcHJveGllcyBiYWNrIHRvIHRoZSBvcmlnaW5hbCBjb250ZXh0IG9iamVjdCBmb3JcbiAgICAvLyBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS4gSXQgaGFzIGEgZGlmZmVyZW50ICQkdHlwZW9mLCBzbyB3ZSBjYW4gcHJvcGVybHlcbiAgICAvLyB3YXJuIGZvciB0aGUgaW5jb3JyZWN0IHVzYWdlIG9mIENvbnRleHQgYXMgYSBDb25zdW1lci5cbiAgICB2YXIgQ29uc3VtZXIgPSB7XG4gICAgICAkJHR5cGVvZjogUkVBQ1RfQ09OVEVYVF9UWVBFLFxuICAgICAgX2NvbnRleHQ6IGNvbnRleHQsXG4gICAgICBfY2FsY3VsYXRlQ2hhbmdlZEJpdHM6IGNvbnRleHQuX2NhbGN1bGF0ZUNoYW5nZWRCaXRzXG4gICAgfTsgLy8gJEZsb3dGaXhNZTogRmxvdyBjb21wbGFpbnMgYWJvdXQgbm90IHNldHRpbmcgYSB2YWx1ZSwgd2hpY2ggaXMgaW50ZW50aW9uYWwgaGVyZVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoQ29uc3VtZXIsIHtcbiAgICAgIFByb3ZpZGVyOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICghaGFzV2FybmVkQWJvdXRVc2luZ0NvbnN1bWVyUHJvdmlkZXIpIHtcbiAgICAgICAgICAgIGhhc1dhcm5lZEFib3V0VXNpbmdDb25zdW1lclByb3ZpZGVyID0gdHJ1ZTtcblxuICAgICAgICAgICAgZXJyb3IoJ1JlbmRlcmluZyA8Q29udGV4dC5Db25zdW1lci5Qcm92aWRlcj4gaXMgbm90IHN1cHBvcnRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gRGlkIHlvdSBtZWFuIHRvIHJlbmRlciA8Q29udGV4dC5Qcm92aWRlcj4gaW5zdGVhZD8nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gY29udGV4dC5Qcm92aWRlcjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX1Byb3ZpZGVyKSB7XG4gICAgICAgICAgY29udGV4dC5Qcm92aWRlciA9IF9Qcm92aWRlcjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF9jdXJyZW50VmFsdWU6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuX2N1cnJlbnRWYWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX2N1cnJlbnRWYWx1ZSkge1xuICAgICAgICAgIGNvbnRleHQuX2N1cnJlbnRWYWx1ZSA9IF9jdXJyZW50VmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfY3VycmVudFZhbHVlMjoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5fY3VycmVudFZhbHVlMjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX2N1cnJlbnRWYWx1ZTIpIHtcbiAgICAgICAgICBjb250ZXh0Ll9jdXJyZW50VmFsdWUyID0gX2N1cnJlbnRWYWx1ZTI7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfdGhyZWFkQ291bnQ6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuX3RocmVhZENvdW50O1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfdGhyZWFkQ291bnQpIHtcbiAgICAgICAgICBjb250ZXh0Ll90aHJlYWRDb3VudCA9IF90aHJlYWRDb3VudDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIENvbnN1bWVyOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICghaGFzV2FybmVkQWJvdXRVc2luZ05lc3RlZENvbnRleHRDb25zdW1lcnMpIHtcbiAgICAgICAgICAgIGhhc1dhcm5lZEFib3V0VXNpbmdOZXN0ZWRDb250ZXh0Q29uc3VtZXJzID0gdHJ1ZTtcblxuICAgICAgICAgICAgZXJyb3IoJ1JlbmRlcmluZyA8Q29udGV4dC5Db25zdW1lci5Db25zdW1lcj4gaXMgbm90IHN1cHBvcnRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gRGlkIHlvdSBtZWFuIHRvIHJlbmRlciA8Q29udGV4dC5Db25zdW1lcj4gaW5zdGVhZD8nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gY29udGV4dC5Db25zdW1lcjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGRpc3BsYXlOYW1lOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0LmRpc3BsYXlOYW1lO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChkaXNwbGF5TmFtZSkge1xuICAgICAgICAgIGlmICghaGFzV2FybmVkQWJvdXREaXNwbGF5TmFtZU9uQ29uc3VtZXIpIHtcbiAgICAgICAgICAgIHdhcm4oJ1NldHRpbmcgYGRpc3BsYXlOYW1lYCBvbiBDb250ZXh0LkNvbnN1bWVyIGhhcyBubyBlZmZlY3QuICcgKyBcIllvdSBzaG91bGQgc2V0IGl0IGRpcmVjdGx5IG9uIHRoZSBjb250ZXh0IHdpdGggQ29udGV4dC5kaXNwbGF5TmFtZSA9ICclcycuXCIsIGRpc3BsYXlOYW1lKTtcblxuICAgICAgICAgICAgaGFzV2FybmVkQWJvdXREaXNwbGF5TmFtZU9uQ29uc3VtZXIgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pOyAvLyAkRmxvd0ZpeE1lOiBGbG93IGNvbXBsYWlucyBhYm91dCBtaXNzaW5nIHByb3BlcnRpZXMgYmVjYXVzZSBpdCBkb2Vzbid0IHVuZGVyc3RhbmQgZGVmaW5lUHJvcGVydHlcblxuICAgIGNvbnRleHQuQ29uc3VtZXIgPSBDb25zdW1lcjtcbiAgfVxuXG4gIHtcbiAgICBjb250ZXh0Ll9jdXJyZW50UmVuZGVyZXIgPSBudWxsO1xuICAgIGNvbnRleHQuX2N1cnJlbnRSZW5kZXJlcjIgPSBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRleHQ7XG59XG5cbnZhciBVbmluaXRpYWxpemVkID0gLTE7XG52YXIgUGVuZGluZyA9IDA7XG52YXIgUmVzb2x2ZWQgPSAxO1xudmFyIFJlamVjdGVkID0gMjtcblxuZnVuY3Rpb24gbGF6eUluaXRpYWxpemVyKHBheWxvYWQpIHtcbiAgaWYgKHBheWxvYWQuX3N0YXR1cyA9PT0gVW5pbml0aWFsaXplZCkge1xuICAgIHZhciBjdG9yID0gcGF5bG9hZC5fcmVzdWx0O1xuICAgIHZhciB0aGVuYWJsZSA9IGN0b3IoKTsgLy8gVHJhbnNpdGlvbiB0byB0aGUgbmV4dCBzdGF0ZS5cblxuICAgIHZhciBwZW5kaW5nID0gcGF5bG9hZDtcbiAgICBwZW5kaW5nLl9zdGF0dXMgPSBQZW5kaW5nO1xuICAgIHBlbmRpbmcuX3Jlc3VsdCA9IHRoZW5hYmxlO1xuICAgIHRoZW5hYmxlLnRoZW4oZnVuY3Rpb24gKG1vZHVsZU9iamVjdCkge1xuICAgICAgaWYgKHBheWxvYWQuX3N0YXR1cyA9PT0gUGVuZGluZykge1xuICAgICAgICB2YXIgZGVmYXVsdEV4cG9ydCA9IG1vZHVsZU9iamVjdC5kZWZhdWx0O1xuXG4gICAgICAgIHtcbiAgICAgICAgICBpZiAoZGVmYXVsdEV4cG9ydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBlcnJvcignbGF6eTogRXhwZWN0ZWQgdGhlIHJlc3VsdCBvZiBhIGR5bmFtaWMgaW1wb3J0KCkgY2FsbC4gJyArICdJbnN0ZWFkIHJlY2VpdmVkOiAlc1xcblxcbllvdXIgY29kZSBzaG91bGQgbG9vayBsaWtlOiBcXG4gICcgKyAvLyBCcmVhayB1cCBpbXBvcnRzIHRvIGF2b2lkIGFjY2lkZW50YWxseSBwYXJzaW5nIHRoZW0gYXMgZGVwZW5kZW5jaWVzLlxuICAgICAgICAgICAgJ2NvbnN0IE15Q29tcG9uZW50ID0gbGF6eSgoKSA9PiBpbXAnICsgXCJvcnQoJy4vTXlDb21wb25lbnQnKSlcIiwgbW9kdWxlT2JqZWN0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gLy8gVHJhbnNpdGlvbiB0byB0aGUgbmV4dCBzdGF0ZS5cblxuXG4gICAgICAgIHZhciByZXNvbHZlZCA9IHBheWxvYWQ7XG4gICAgICAgIHJlc29sdmVkLl9zdGF0dXMgPSBSZXNvbHZlZDtcbiAgICAgICAgcmVzb2x2ZWQuX3Jlc3VsdCA9IGRlZmF1bHRFeHBvcnQ7XG4gICAgICB9XG4gICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICBpZiAocGF5bG9hZC5fc3RhdHVzID09PSBQZW5kaW5nKSB7XG4gICAgICAgIC8vIFRyYW5zaXRpb24gdG8gdGhlIG5leHQgc3RhdGUuXG4gICAgICAgIHZhciByZWplY3RlZCA9IHBheWxvYWQ7XG4gICAgICAgIHJlamVjdGVkLl9zdGF0dXMgPSBSZWplY3RlZDtcbiAgICAgICAgcmVqZWN0ZWQuX3Jlc3VsdCA9IGVycm9yO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaWYgKHBheWxvYWQuX3N0YXR1cyA9PT0gUmVzb2x2ZWQpIHtcbiAgICByZXR1cm4gcGF5bG9hZC5fcmVzdWx0O1xuICB9IGVsc2Uge1xuICAgIHRocm93IHBheWxvYWQuX3Jlc3VsdDtcbiAgfVxufVxuXG5mdW5jdGlvbiBsYXp5KGN0b3IpIHtcbiAgdmFyIHBheWxvYWQgPSB7XG4gICAgLy8gV2UgdXNlIHRoZXNlIGZpZWxkcyB0byBzdG9yZSB0aGUgcmVzdWx0LlxuICAgIF9zdGF0dXM6IC0xLFxuICAgIF9yZXN1bHQ6IGN0b3JcbiAgfTtcbiAgdmFyIGxhenlUeXBlID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9MQVpZX1RZUEUsXG4gICAgX3BheWxvYWQ6IHBheWxvYWQsXG4gICAgX2luaXQ6IGxhenlJbml0aWFsaXplclxuICB9O1xuXG4gIHtcbiAgICAvLyBJbiBwcm9kdWN0aW9uLCB0aGlzIHdvdWxkIGp1c3Qgc2V0IGl0IG9uIHRoZSBvYmplY3QuXG4gICAgdmFyIGRlZmF1bHRQcm9wcztcbiAgICB2YXIgcHJvcFR5cGVzOyAvLyAkRmxvd0ZpeE1lXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhsYXp5VHlwZSwge1xuICAgICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGRlZmF1bHRQcm9wcztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobmV3RGVmYXVsdFByb3BzKSB7XG4gICAgICAgICAgZXJyb3IoJ1JlYWN0LmxhenkoLi4uKTogSXQgaXMgbm90IHN1cHBvcnRlZCB0byBhc3NpZ24gYGRlZmF1bHRQcm9wc2AgdG8gJyArICdhIGxhenkgY29tcG9uZW50IGltcG9ydC4gRWl0aGVyIHNwZWNpZnkgdGhlbSB3aGVyZSB0aGUgY29tcG9uZW50ICcgKyAnaXMgZGVmaW5lZCwgb3IgY3JlYXRlIGEgd3JhcHBpbmcgY29tcG9uZW50IGFyb3VuZCBpdC4nKTtcblxuICAgICAgICAgIGRlZmF1bHRQcm9wcyA9IG5ld0RlZmF1bHRQcm9wczsgLy8gTWF0Y2ggcHJvZHVjdGlvbiBiZWhhdmlvciBtb3JlIGNsb3NlbHk6XG4gICAgICAgICAgLy8gJEZsb3dGaXhNZVxuXG4gICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGxhenlUeXBlLCAnZGVmYXVsdFByb3BzJywge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcHJvcFR5cGVzOiB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3BUeXBlcztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobmV3UHJvcFR5cGVzKSB7XG4gICAgICAgICAgZXJyb3IoJ1JlYWN0LmxhenkoLi4uKTogSXQgaXMgbm90IHN1cHBvcnRlZCB0byBhc3NpZ24gYHByb3BUeXBlc2AgdG8gJyArICdhIGxhenkgY29tcG9uZW50IGltcG9ydC4gRWl0aGVyIHNwZWNpZnkgdGhlbSB3aGVyZSB0aGUgY29tcG9uZW50ICcgKyAnaXMgZGVmaW5lZCwgb3IgY3JlYXRlIGEgd3JhcHBpbmcgY29tcG9uZW50IGFyb3VuZCBpdC4nKTtcblxuICAgICAgICAgIHByb3BUeXBlcyA9IG5ld1Byb3BUeXBlczsgLy8gTWF0Y2ggcHJvZHVjdGlvbiBiZWhhdmlvciBtb3JlIGNsb3NlbHk6XG4gICAgICAgICAgLy8gJEZsb3dGaXhNZVxuXG4gICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGxhenlUeXBlLCAncHJvcFR5cGVzJywge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gbGF6eVR5cGU7XG59XG5cbmZ1bmN0aW9uIGZvcndhcmRSZWYocmVuZGVyKSB7XG4gIHtcbiAgICBpZiAocmVuZGVyICE9IG51bGwgJiYgcmVuZGVyLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUpIHtcbiAgICAgIGVycm9yKCdmb3J3YXJkUmVmIHJlcXVpcmVzIGEgcmVuZGVyIGZ1bmN0aW9uIGJ1dCByZWNlaXZlZCBhIGBtZW1vYCAnICsgJ2NvbXBvbmVudC4gSW5zdGVhZCBvZiBmb3J3YXJkUmVmKG1lbW8oLi4uKSksIHVzZSAnICsgJ21lbW8oZm9yd2FyZFJlZiguLi4pKS4nKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiByZW5kZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGVycm9yKCdmb3J3YXJkUmVmIHJlcXVpcmVzIGEgcmVuZGVyIGZ1bmN0aW9uIGJ1dCB3YXMgZ2l2ZW4gJXMuJywgcmVuZGVyID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHJlbmRlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChyZW5kZXIubGVuZ3RoICE9PSAwICYmIHJlbmRlci5sZW5ndGggIT09IDIpIHtcbiAgICAgICAgZXJyb3IoJ2ZvcndhcmRSZWYgcmVuZGVyIGZ1bmN0aW9ucyBhY2NlcHQgZXhhY3RseSB0d28gcGFyYW1ldGVyczogcHJvcHMgYW5kIHJlZi4gJXMnLCByZW5kZXIubGVuZ3RoID09PSAxID8gJ0RpZCB5b3UgZm9yZ2V0IHRvIHVzZSB0aGUgcmVmIHBhcmFtZXRlcj8nIDogJ0FueSBhZGRpdGlvbmFsIHBhcmFtZXRlciB3aWxsIGJlIHVuZGVmaW5lZC4nKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocmVuZGVyICE9IG51bGwpIHtcbiAgICAgIGlmIChyZW5kZXIuZGVmYXVsdFByb3BzICE9IG51bGwgfHwgcmVuZGVyLnByb3BUeXBlcyAhPSBudWxsKSB7XG4gICAgICAgIGVycm9yKCdmb3J3YXJkUmVmIHJlbmRlciBmdW5jdGlvbnMgZG8gbm90IHN1cHBvcnQgcHJvcFR5cGVzIG9yIGRlZmF1bHRQcm9wcy4gJyArICdEaWQgeW91IGFjY2lkZW50YWxseSBwYXNzIGEgUmVhY3QgY29tcG9uZW50PycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhciBlbGVtZW50VHlwZSA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSxcbiAgICByZW5kZXI6IHJlbmRlclxuICB9O1xuXG4gIHtcbiAgICB2YXIgb3duTmFtZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudFR5cGUsICdkaXNwbGF5TmFtZScsIHtcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBvd25OYW1lO1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgb3duTmFtZSA9IG5hbWU7XG5cbiAgICAgICAgaWYgKHJlbmRlci5kaXNwbGF5TmFtZSA9PSBudWxsKSB7XG4gICAgICAgICAgcmVuZGVyLmRpc3BsYXlOYW1lID0gbmFtZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnRUeXBlO1xufVxuXG4vLyBGaWx0ZXIgY2VydGFpbiBET00gYXR0cmlidXRlcyAoZS5nLiBzcmMsIGhyZWYpIGlmIHRoZWlyIHZhbHVlcyBhcmUgZW1wdHkgc3RyaW5ncy5cblxudmFyIGVuYWJsZVNjb3BlQVBJID0gZmFsc2U7IC8vIEV4cGVyaW1lbnRhbCBDcmVhdGUgRXZlbnQgSGFuZGxlIEFQSS5cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIE5vdGU6IHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIChlLmcuIGlmIGl0J3MgYSBwb2x5ZmlsbCkuXG5cblxuICBpZiAodHlwZSA9PT0gZXhwb3J0cy5GcmFnbWVudCB8fCB0eXBlID09PSBleHBvcnRzLlByb2ZpbGVyIHx8IHR5cGUgPT09IFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFIHx8IHR5cGUgPT09IGV4cG9ydHMuU3RyaWN0TW9kZSB8fCB0eXBlID09PSBleHBvcnRzLlN1c3BlbnNlIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgfHwgZW5hYmxlU2NvcGVBUEkgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwpIHtcbiAgICBpZiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSB8fCB0eXBlWzBdID09PSBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBtZW1vKHR5cGUsIGNvbXBhcmUpIHtcbiAge1xuICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpKSB7XG4gICAgICBlcnJvcignbWVtbzogVGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBjb21wb25lbnQuIEluc3RlYWQgJyArICdyZWNlaXZlZDogJXMnLCB0eXBlID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBlbGVtZW50VHlwZSA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfTUVNT19UWVBFLFxuICAgIHR5cGU6IHR5cGUsXG4gICAgY29tcGFyZTogY29tcGFyZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbXBhcmVcbiAgfTtcblxuICB7XG4gICAgdmFyIG93bk5hbWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnRUeXBlLCAnZGlzcGxheU5hbWUnLCB7XG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gb3duTmFtZTtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIG93bk5hbWUgPSBuYW1lO1xuXG4gICAgICAgIGlmICh0eXBlLmRpc3BsYXlOYW1lID09IG51bGwpIHtcbiAgICAgICAgICB0eXBlLmRpc3BsYXlOYW1lID0gbmFtZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnRUeXBlO1xufVxuXG5mdW5jdGlvbiByZXNvbHZlRGlzcGF0Y2hlcigpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQ7XG5cbiAgaWYgKCEoZGlzcGF0Y2hlciAhPT0gbnVsbCkpIHtcbiAgICB7XG4gICAgICB0aHJvdyBFcnJvciggXCJJbnZhbGlkIGhvb2sgY2FsbC4gSG9va3MgY2FuIG9ubHkgYmUgY2FsbGVkIGluc2lkZSBvZiB0aGUgYm9keSBvZiBhIGZ1bmN0aW9uIGNvbXBvbmVudC4gVGhpcyBjb3VsZCBoYXBwZW4gZm9yIG9uZSBvZiB0aGUgZm9sbG93aW5nIHJlYXNvbnM6XFxuMS4gWW91IG1pZ2h0IGhhdmUgbWlzbWF0Y2hpbmcgdmVyc2lvbnMgb2YgUmVhY3QgYW5kIHRoZSByZW5kZXJlciAoc3VjaCBhcyBSZWFjdCBET00pXFxuMi4gWW91IG1pZ2h0IGJlIGJyZWFraW5nIHRoZSBSdWxlcyBvZiBIb29rc1xcbjMuIFlvdSBtaWdodCBoYXZlIG1vcmUgdGhhbiBvbmUgY29weSBvZiBSZWFjdCBpbiB0aGUgc2FtZSBhcHBcXG5TZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL2ludmFsaWQtaG9vay1jYWxsIGZvciB0aXBzIGFib3V0IGhvdyB0byBkZWJ1ZyBhbmQgZml4IHRoaXMgcHJvYmxlbS5cIiApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkaXNwYXRjaGVyO1xufVxuXG5mdW5jdGlvbiB1c2VDb250ZXh0KENvbnRleHQsIHVuc3RhYmxlX29ic2VydmVkQml0cykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG5cbiAge1xuICAgIGlmICh1bnN0YWJsZV9vYnNlcnZlZEJpdHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IoJ3VzZUNvbnRleHQoKSBzZWNvbmQgYXJndW1lbnQgaXMgcmVzZXJ2ZWQgZm9yIGZ1dHVyZSAnICsgJ3VzZSBpbiBSZWFjdC4gUGFzc2luZyBpdCBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ1lvdSBwYXNzZWQ6ICVzLiVzJywgdW5zdGFibGVfb2JzZXJ2ZWRCaXRzLCB0eXBlb2YgdW5zdGFibGVfb2JzZXJ2ZWRCaXRzID09PSAnbnVtYmVyJyAmJiBBcnJheS5pc0FycmF5KGFyZ3VtZW50c1syXSkgPyAnXFxuXFxuRGlkIHlvdSBjYWxsIGFycmF5Lm1hcCh1c2VDb250ZXh0KT8gJyArICdDYWxsaW5nIEhvb2tzIGluc2lkZSBhIGxvb3AgaXMgbm90IHN1cHBvcnRlZC4gJyArICdMZWFybiBtb3JlIGF0IGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9ydWxlcy1vZi1ob29rcycgOiAnJyk7XG4gICAgfSAvLyBUT0RPOiBhZGQgYSBtb3JlIGdlbmVyaWMgd2FybmluZyBmb3IgaW52YWxpZCB2YWx1ZXMuXG5cblxuICAgIGlmIChDb250ZXh0Ll9jb250ZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciByZWFsQ29udGV4dCA9IENvbnRleHQuX2NvbnRleHQ7IC8vIERvbid0IGRlZHVwbGljYXRlIGJlY2F1c2UgdGhpcyBsZWdpdGltYXRlbHkgY2F1c2VzIGJ1Z3NcbiAgICAgIC8vIGFuZCBub2JvZHkgc2hvdWxkIGJlIHVzaW5nIHRoaXMgaW4gZXhpc3RpbmcgY29kZS5cblxuICAgICAgaWYgKHJlYWxDb250ZXh0LkNvbnN1bWVyID09PSBDb250ZXh0KSB7XG4gICAgICAgIGVycm9yKCdDYWxsaW5nIHVzZUNvbnRleHQoQ29udGV4dC5Db25zdW1lcikgaXMgbm90IHN1cHBvcnRlZCwgbWF5IGNhdXNlIGJ1Z3MsIGFuZCB3aWxsIGJlICcgKyAncmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gY2FsbCB1c2VDb250ZXh0KENvbnRleHQpIGluc3RlYWQ/Jyk7XG4gICAgICB9IGVsc2UgaWYgKHJlYWxDb250ZXh0LlByb3ZpZGVyID09PSBDb250ZXh0KSB7XG4gICAgICAgIGVycm9yKCdDYWxsaW5nIHVzZUNvbnRleHQoQ29udGV4dC5Qcm92aWRlcikgaXMgbm90IHN1cHBvcnRlZC4gJyArICdEaWQgeW91IG1lYW4gdG8gY2FsbCB1c2VDb250ZXh0KENvbnRleHQpIGluc3RlYWQ/Jyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlQ29udGV4dChDb250ZXh0LCB1bnN0YWJsZV9vYnNlcnZlZEJpdHMpO1xufVxuZnVuY3Rpb24gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcbn1cbmZ1bmN0aW9uIHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbEFyZywgaW5pdCkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbEFyZywgaW5pdCk7XG59XG5mdW5jdGlvbiB1c2VSZWYoaW5pdGlhbFZhbHVlKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlUmVmKGluaXRpYWxWYWx1ZSk7XG59XG5mdW5jdGlvbiB1c2VFZmZlY3QoY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlRWZmZWN0KGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VMYXlvdXRFZmZlY3QoY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlTGF5b3V0RWZmZWN0KGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VDYWxsYmFjayhjYWxsYmFjaywgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUNhbGxiYWNrKGNhbGxiYWNrLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZU1lbW8oY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlTWVtbyhjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGNyZWF0ZSwgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCBjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlRGVidWdWYWx1ZSh2YWx1ZSwgZm9ybWF0dGVyRm4pIHtcbiAge1xuICAgIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgICByZXR1cm4gZGlzcGF0Y2hlci51c2VEZWJ1Z1ZhbHVlKHZhbHVlLCBmb3JtYXR0ZXJGbik7XG4gIH1cbn1cblxuLy8gSGVscGVycyB0byBwYXRjaCBjb25zb2xlLmxvZ3MgdG8gYXZvaWQgbG9nZ2luZyBkdXJpbmcgc2lkZS1lZmZlY3QgZnJlZVxuLy8gcmVwbGF5aW5nIG9uIHJlbmRlciBmdW5jdGlvbi4gVGhpcyBjdXJyZW50bHkgb25seSBwYXRjaGVzIHRoZSBvYmplY3Rcbi8vIGxhemlseSB3aGljaCB3b24ndCBjb3ZlciBpZiB0aGUgbG9nIGZ1bmN0aW9uIHdhcyBleHRyYWN0ZWQgZWFnZXJseS5cbi8vIFdlIGNvdWxkIGFsc28gZWFnZXJseSBwYXRjaCB0aGUgbWV0aG9kLlxudmFyIGRpc2FibGVkRGVwdGggPSAwO1xudmFyIHByZXZMb2c7XG52YXIgcHJldkluZm87XG52YXIgcHJldldhcm47XG52YXIgcHJldkVycm9yO1xudmFyIHByZXZHcm91cDtcbnZhciBwcmV2R3JvdXBDb2xsYXBzZWQ7XG52YXIgcHJldkdyb3VwRW5kO1xuXG5mdW5jdGlvbiBkaXNhYmxlZExvZygpIHt9XG5cbmRpc2FibGVkTG9nLl9fcmVhY3REaXNhYmxlZExvZyA9IHRydWU7XG5mdW5jdGlvbiBkaXNhYmxlTG9ncygpIHtcbiAge1xuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHByZXZMb2cgPSBjb25zb2xlLmxvZztcbiAgICAgIHByZXZJbmZvID0gY29uc29sZS5pbmZvO1xuICAgICAgcHJldldhcm4gPSBjb25zb2xlLndhcm47XG4gICAgICBwcmV2RXJyb3IgPSBjb25zb2xlLmVycm9yO1xuICAgICAgcHJldkdyb3VwID0gY29uc29sZS5ncm91cDtcbiAgICAgIHByZXZHcm91cENvbGxhcHNlZCA9IGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQ7XG4gICAgICBwcmV2R3JvdXBFbmQgPSBjb25zb2xlLmdyb3VwRW5kOyAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzE5MDk5XG5cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogZGlzYWJsZWRMb2csXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGluZm86IHByb3BzLFxuICAgICAgICBsb2c6IHByb3BzLFxuICAgICAgICB3YXJuOiBwcm9wcyxcbiAgICAgICAgZXJyb3I6IHByb3BzLFxuICAgICAgICBncm91cDogcHJvcHMsXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBFbmQ6IHByb3BzXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgZGlzYWJsZWREZXB0aCsrO1xuICB9XG59XG5mdW5jdGlvbiByZWVuYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBkaXNhYmxlZERlcHRoLS07XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgbG9nOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2TG9nXG4gICAgICAgIH0pLFxuICAgICAgICBpbmZvOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2SW5mb1xuICAgICAgICB9KSxcbiAgICAgICAgd2FybjogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldldhcm5cbiAgICAgICAgfSksXG4gICAgICAgIGVycm9yOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2RXJyb3JcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBDb2xsYXBzZWRcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwRW5kOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBFbmRcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA8IDApIHtcbiAgICAgIGVycm9yKCdkaXNhYmxlZERlcHRoIGZlbGwgYmVsb3cgemVyby4gJyArICdUaGlzIGlzIGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudERpc3BhdGNoZXIkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudERpc3BhdGNoZXI7XG52YXIgcHJlZml4O1xuZnVuY3Rpb24gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICBpZiAocHJlZml4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEV4dHJhY3QgdGhlIFZNIHNwZWNpZmljIHByZWZpeCB1c2VkIGJ5IGVhY2ggbGluZS5cbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIHZhciBtYXRjaCA9IHguc3RhY2sudHJpbSgpLm1hdGNoKC9cXG4oICooYXQgKT8pLyk7XG4gICAgICAgIHByZWZpeCA9IG1hdGNoICYmIG1hdGNoWzFdIHx8ICcnO1xuICAgICAgfVxuICAgIH0gLy8gV2UgdXNlIHRoZSBwcmVmaXggdG8gZW5zdXJlIG91ciBzdGFja3MgbGluZSB1cCB3aXRoIG5hdGl2ZSBzdGFjayBmcmFtZXMuXG5cblxuICAgIHJldHVybiAnXFxuJyArIHByZWZpeCArIG5hbWU7XG4gIH1cbn1cbnZhciByZWVudHJ5ID0gZmFsc2U7XG52YXIgY29tcG9uZW50RnJhbWVDYWNoZTtcblxue1xuICB2YXIgUG9zc2libHlXZWFrTWFwID0gdHlwZW9mIFdlYWtNYXAgPT09ICdmdW5jdGlvbicgPyBXZWFrTWFwIDogTWFwO1xuICBjb21wb25lbnRGcmFtZUNhY2hlID0gbmV3IFBvc3NpYmx5V2Vha01hcCgpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBjb25zdHJ1Y3QpIHtcbiAgLy8gSWYgc29tZXRoaW5nIGFza2VkIGZvciBhIHN0YWNrIGluc2lkZSBhIGZha2UgcmVuZGVyLCBpdCBzaG91bGQgZ2V0IGlnbm9yZWQuXG4gIGlmICghZm4gfHwgcmVlbnRyeSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHtcbiAgICB2YXIgZnJhbWUgPSBjb21wb25lbnRGcmFtZUNhY2hlLmdldChmbik7XG5cbiAgICBpZiAoZnJhbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZyYW1lO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb250cm9sO1xuICByZWVudHJ5ID0gdHJ1ZTtcbiAgdmFyIHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2UgPSBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZTsgLy8gJEZsb3dGaXhNZSBJdCBkb2VzIGFjY2VwdCB1bmRlZmluZWQuXG5cbiAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSB1bmRlZmluZWQ7XG4gIHZhciBwcmV2aW91c0Rpc3BhdGNoZXI7XG5cbiAge1xuICAgIHByZXZpb3VzRGlzcGF0Y2hlciA9IFJlYWN0Q3VycmVudERpc3BhdGNoZXIkMS5jdXJyZW50OyAvLyBTZXQgdGhlIGRpc3BhdGNoZXIgaW4gREVWIGJlY2F1c2UgdGhpcyBtaWdodCBiZSBjYWxsIGluIHRoZSByZW5kZXIgZnVuY3Rpb25cbiAgICAvLyBmb3Igd2FybmluZ3MuXG5cbiAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyJDEuY3VycmVudCA9IG51bGw7XG4gICAgZGlzYWJsZUxvZ3MoKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgLy8gVGhpcyBzaG91bGQgdGhyb3cuXG4gICAgaWYgKGNvbnN0cnVjdCkge1xuICAgICAgLy8gU29tZXRoaW5nIHNob3VsZCBiZSBzZXR0aW5nIHRoZSBwcm9wcyBpbiB0aGUgY29uc3RydWN0b3IuXG4gICAgICB2YXIgRmFrZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH07IC8vICRGbG93Rml4TWVcblxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmFrZS5wcm90b3R5cGUsICdwcm9wcycsIHtcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gV2UgdXNlIGEgdGhyb3dpbmcgc2V0dGVyIGluc3RlYWQgb2YgZnJvemVuIG9yIG5vbi13cml0YWJsZSBwcm9wc1xuICAgICAgICAgIC8vIGJlY2F1c2UgdGhhdCB3b24ndCB0aHJvdyBpbiBhIG5vbi1zdHJpY3QgbW9kZSBmdW5jdGlvbi5cbiAgICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSAnb2JqZWN0JyAmJiBSZWZsZWN0LmNvbnN0cnVjdCkge1xuICAgICAgICAvLyBXZSBjb25zdHJ1Y3QgYSBkaWZmZXJlbnQgY29udHJvbCBmb3IgdGhpcyBjYXNlIHRvIGluY2x1ZGUgYW55IGV4dHJhXG4gICAgICAgIC8vIGZyYW1lcyBhZGRlZCBieSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoRmFrZSwgW10pO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChmbiwgW10sIEZha2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBGYWtlLmNhbGwoKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgZm4uY2FsbChGYWtlLnByb3RvdHlwZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgfVxuXG4gICAgICBmbigpO1xuICAgIH1cbiAgfSBjYXRjaCAoc2FtcGxlKSB7XG4gICAgLy8gVGhpcyBpcyBpbmxpbmVkIG1hbnVhbGx5IGJlY2F1c2UgY2xvc3VyZSBkb2Vzbid0IGRvIGl0IGZvciB1cy5cbiAgICBpZiAoc2FtcGxlICYmIGNvbnRyb2wgJiYgdHlwZW9mIHNhbXBsZS5zdGFjayA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIFRoaXMgZXh0cmFjdHMgdGhlIGZpcnN0IGZyYW1lIGZyb20gdGhlIHNhbXBsZSB0aGF0IGlzbid0IGFsc28gaW4gdGhlIGNvbnRyb2wuXG4gICAgICAvLyBTa2lwcGluZyBvbmUgZnJhbWUgdGhhdCB3ZSBhc3N1bWUgaXMgdGhlIGZyYW1lIHRoYXQgY2FsbHMgdGhlIHR3by5cbiAgICAgIHZhciBzYW1wbGVMaW5lcyA9IHNhbXBsZS5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgY29udHJvbExpbmVzID0gY29udHJvbC5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgcyA9IHNhbXBsZUxpbmVzLmxlbmd0aCAtIDE7XG4gICAgICB2YXIgYyA9IGNvbnRyb2xMaW5lcy5sZW5ndGggLSAxO1xuXG4gICAgICB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCAmJiBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgIC8vIFdlIGV4cGVjdCBhdCBsZWFzdCBvbmUgc3RhY2sgZnJhbWUgdG8gYmUgc2hhcmVkLlxuICAgICAgICAvLyBUeXBpY2FsbHkgdGhpcyB3aWxsIGJlIHRoZSByb290IG1vc3Qgb25lLiBIb3dldmVyLCBzdGFjayBmcmFtZXMgbWF5IGJlXG4gICAgICAgIC8vIGN1dCBvZmYgZHVlIHRvIG1heGltdW0gc3RhY2sgbGltaXRzLiBJbiB0aGlzIGNhc2UsIG9uZSBtYXliZSBjdXQgb2ZmXG4gICAgICAgIC8vIGVhcmxpZXIgdGhhbiB0aGUgb3RoZXIuIFdlIGFzc3VtZSB0aGF0IHRoZSBzYW1wbGUgaXMgbG9uZ2VyIG9yIHRoZSBzYW1lXG4gICAgICAgIC8vIGFuZCB0aGVyZSBmb3IgY3V0IG9mZiBlYXJsaWVyLiBTbyB3ZSBzaG91bGQgZmluZCB0aGUgcm9vdCBtb3N0IGZyYW1lIGluXG4gICAgICAgIC8vIHRoZSBzYW1wbGUgc29tZXdoZXJlIGluIHRoZSBjb250cm9sLlxuICAgICAgICBjLS07XG4gICAgICB9XG5cbiAgICAgIGZvciAoOyBzID49IDEgJiYgYyA+PSAwOyBzLS0sIGMtLSkge1xuICAgICAgICAvLyBOZXh0IHdlIGZpbmQgdGhlIGZpcnN0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHdoaWNoIHNob3VsZCBiZSB0aGVcbiAgICAgICAgLy8gZnJhbWUgdGhhdCBjYWxsZWQgb3VyIHNhbXBsZSBmdW5jdGlvbiBhbmQgdGhlIGNvbnRyb2wuXG4gICAgICAgIGlmIChzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgLy8gSW4gVjgsIHRoZSBmaXJzdCBsaW5lIGlzIGRlc2NyaWJpbmcgdGhlIG1lc3NhZ2UgYnV0IG90aGVyIFZNcyBkb24ndC5cbiAgICAgICAgICAvLyBJZiB3ZSdyZSBhYm91dCB0byByZXR1cm4gdGhlIGZpcnN0IGxpbmUsIGFuZCB0aGUgY29udHJvbCBpcyBhbHNvIG9uIHRoZSBzYW1lXG4gICAgICAgICAgLy8gbGluZSwgdGhhdCdzIGEgcHJldHR5IGdvb2QgaW5kaWNhdG9yIHRoYXQgb3VyIHNhbXBsZSB0aHJldyBhdCBzYW1lIGxpbmUgYXNcbiAgICAgICAgICAvLyB0aGUgY29udHJvbC4gSS5lLiBiZWZvcmUgd2UgZW50ZXJlZCB0aGUgc2FtcGxlIGZyYW1lLiBTbyB3ZSBpZ25vcmUgdGhpcyByZXN1bHQuXG4gICAgICAgICAgLy8gVGhpcyBjYW4gaGFwcGVuIGlmIHlvdSBwYXNzZWQgYSBjbGFzcyB0byBmdW5jdGlvbiBjb21wb25lbnQsIG9yIG5vbi1mdW5jdGlvbi5cbiAgICAgICAgICBpZiAocyAhPT0gMSB8fCBjICE9PSAxKSB7XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgIHMtLTtcbiAgICAgICAgICAgICAgYy0tOyAvLyBXZSBtYXkgc3RpbGwgaGF2ZSBzaW1pbGFyIGludGVybWVkaWF0ZSBmcmFtZXMgZnJvbSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgICAgICAgIC8vIFRoZSBuZXh0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHNob3VsZCBiZSBvdXIgbWF0Y2ggdGhvdWdoLlxuXG4gICAgICAgICAgICAgIGlmIChjIDwgMCB8fCBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgICAgICAgLy8gVjggYWRkcyBhIFwibmV3XCIgcHJlZml4IGZvciBuYXRpdmUgY2xhc3Nlcy4gTGV0J3MgcmVtb3ZlIGl0IHRvIG1ha2UgaXQgcHJldHRpZXIuXG4gICAgICAgICAgICAgICAgdmFyIF9mcmFtZSA9ICdcXG4nICsgc2FtcGxlTGluZXNbc10ucmVwbGFjZSgnIGF0IG5ldyAnLCAnIGF0ICcpO1xuXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgX2ZyYW1lKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IC8vIFJldHVybiB0aGUgbGluZSB3ZSBmb3VuZC5cblxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9mcmFtZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZmluYWxseSB7XG4gICAgcmVlbnRyeSA9IGZhbHNlO1xuXG4gICAge1xuICAgICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciQxLmN1cnJlbnQgPSBwcmV2aW91c0Rpc3BhdGNoZXI7XG4gICAgICByZWVuYWJsZUxvZ3MoKTtcbiAgICB9XG5cbiAgICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2U7XG4gIH0gLy8gRmFsbGJhY2sgdG8ganVzdCB1c2luZyB0aGUgbmFtZSBpZiB3ZSBjb3VsZG4ndCBtYWtlIGl0IHRocm93LlxuXG5cbiAgdmFyIG5hbWUgPSBmbiA/IGZuLmRpc3BsYXlOYW1lIHx8IGZuLm5hbWUgOiAnJztcbiAgdmFyIHN5bnRoZXRpY0ZyYW1lID0gbmFtZSA/IGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUpIDogJyc7XG5cbiAge1xuICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBzeW50aGV0aWNGcmFtZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN5bnRoZXRpY0ZyYW1lO1xufVxuZnVuY3Rpb24gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKGZuLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBmYWxzZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvdWxkQ29uc3RydWN0KENvbXBvbmVudCkge1xuICB2YXIgcHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcbiAgcmV0dXJuICEhKHByb3RvdHlwZSAmJiBwcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLCBzb3VyY2UsIG93bmVyRm4pIHtcblxuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAge1xuICAgICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUodHlwZSwgc2hvdWxkQ29uc3RydWN0KHR5cGUpKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKHR5cGUpO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBleHBvcnRzLlN1c3BlbnNlOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZScpO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlTGlzdCcpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKHR5cGUucmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIC8vIE1lbW8gbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZS50eXBlLCBzb3VyY2UsIG93bmVyRm4pO1xuXG4gICAgICBjYXNlIFJFQUNUX0JMT0NLX1RZUEU6XG4gICAgICAgIHJldHVybiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUodHlwZS5fcmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBMYXp5IG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihpbml0KHBheWxvYWQpLCBzb3VyY2UsIG93bmVyRm4pO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHt9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbnZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZWxlbWVudCkge1xuICB7XG4gICAgLy8gJEZsb3dGaXhNZSBUaGlzIGlzIG9rYXkgYnV0IEZsb3cgZG9lc24ndCBrbm93IGl0LlxuICAgIHZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG5cbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAoaGFzKHR5cGVTcGVjcywgdHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3IkMSA9IHZvaWQgMDsgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmFyIGVyciA9IEVycm9yKChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgJyArICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSArICdgLicgKyAnVGhpcyBvZnRlbiBoYXBwZW5zIGJlY2F1c2Ugb2YgdHlwb3Mgc3VjaCBhcyBgUHJvcFR5cGVzLmZ1bmN0aW9uYCBpbnN0ZWFkIG9mIGBQcm9wVHlwZXMuZnVuY2AuJyk7XG4gICAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlcnJvciQxID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnKTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciQxID0gZXg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IkMSAmJiAhKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICAgIGVycm9yKCclczogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICVzJyArICcgYCVzYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgKyAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJXMuICcgKyAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgKyAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLicsIGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJywgbG9jYXRpb24sIHR5cGVTcGVjTmFtZSwgdHlwZW9mIGVycm9yJDEpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IkMS5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvciQxLm1lc3NhZ2VdID0gdHJ1ZTtcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICAgIGVycm9yKCdGYWlsZWQgJXMgdHlwZTogJXMnLCBsb2NhdGlvbiwgZXJyb3IkMS5tZXNzYWdlKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCkge1xuICB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcbiAgICAgIHNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duO1xuXG57XG4gIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpIHtcbiAgaWYgKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQpIHtcbiAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKTtcblxuICAgIGlmIChuYW1lKSB7XG4gICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHRoZSByZW5kZXIgbWV0aG9kIG9mIGAnICsgbmFtZSArICdgLic7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpIHtcbiAgaWYgKHNvdXJjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGZpbGVOYW1lID0gc291cmNlLmZpbGVOYW1lLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKTtcbiAgICB2YXIgbGluZU51bWJlciA9IHNvdXJjZS5saW5lTnVtYmVyO1xuICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgeW91ciBjb2RlIGF0ICcgKyBmaWxlTmFtZSArICc6JyArIGxpbmVOdW1iZXIgKyAnLic7XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtRm9yUHJvcHMoZWxlbWVudFByb3BzKSB7XG4gIGlmIChlbGVtZW50UHJvcHMgIT09IG51bGwgJiYgZWxlbWVudFByb3BzICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oZWxlbWVudFByb3BzLl9fc291cmNlKTtcbiAgfVxuXG4gIHJldHVybiAnJztcbn1cbi8qKlxuICogV2FybiBpZiB0aGVyZSdzIG5vIGtleSBleHBsaWNpdGx5IHNldCBvbiBkeW5hbWljIGFycmF5cyBvZiBjaGlsZHJlbiBvclxuICogb2JqZWN0IGtleXMgYXJlIG5vdCB2YWxpZC4gVGhpcyBhbGxvd3MgdXMgdG8ga2VlcCB0cmFjayBvZiBjaGlsZHJlbiBiZXR3ZWVuXG4gKiB1cGRhdGVzLlxuICovXG5cblxudmFyIG93bmVySGFzS2V5VXNlV2FybmluZyA9IHt9O1xuXG5mdW5jdGlvbiBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpIHtcbiAgdmFyIGluZm8gPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcblxuICBpZiAoIWluZm8pIHtcbiAgICB2YXIgcGFyZW50TmFtZSA9IHR5cGVvZiBwYXJlbnRUeXBlID09PSAnc3RyaW5nJyA/IHBhcmVudFR5cGUgOiBwYXJlbnRUeXBlLmRpc3BsYXlOYW1lIHx8IHBhcmVudFR5cGUubmFtZTtcblxuICAgIGlmIChwYXJlbnROYW1lKSB7XG4gICAgICBpbmZvID0gXCJcXG5cXG5DaGVjayB0aGUgdG9wLWxldmVsIHJlbmRlciBjYWxsIHVzaW5nIDxcIiArIHBhcmVudE5hbWUgKyBcIj4uXCI7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGluZm87XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlIGVsZW1lbnQgZG9lc24ndCBoYXZlIGFuIGV4cGxpY2l0IGtleSBhc3NpZ25lZCB0byBpdC5cbiAqIFRoaXMgZWxlbWVudCBpcyBpbiBhbiBhcnJheS4gVGhlIGFycmF5IGNvdWxkIGdyb3cgYW5kIHNocmluayBvciBiZVxuICogcmVvcmRlcmVkLiBBbGwgY2hpbGRyZW4gdGhhdCBoYXZlbid0IGFscmVhZHkgYmVlbiB2YWxpZGF0ZWQgYXJlIHJlcXVpcmVkIHRvXG4gKiBoYXZlIGEgXCJrZXlcIiBwcm9wZXJ0eSBhc3NpZ25lZCB0byBpdC4gRXJyb3Igc3RhdHVzZXMgYXJlIGNhY2hlZCBzbyBhIHdhcm5pbmdcbiAqIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnQgRWxlbWVudCB0aGF0IHJlcXVpcmVzIGEga2V5LlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIGVsZW1lbnQncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVFeHBsaWNpdEtleShlbGVtZW50LCBwYXJlbnRUeXBlKSB7XG4gIGlmICghZWxlbWVudC5fc3RvcmUgfHwgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkIHx8IGVsZW1lbnQua2V5ICE9IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICB2YXIgY3VycmVudENvbXBvbmVudEVycm9ySW5mbyA9IGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSk7XG5cbiAgaWYgKG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSA9IHRydWU7IC8vIFVzdWFsbHkgdGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIG9mZmVuZGVyLCBidXQgaWYgaXQgYWNjZXB0cyBjaGlsZHJlbiBhcyBhXG4gIC8vIHByb3BlcnR5LCBpdCBtYXkgYmUgdGhlIGNyZWF0b3Igb2YgdGhlIGNoaWxkIHRoYXQncyByZXNwb25zaWJsZSBmb3JcbiAgLy8gYXNzaWduaW5nIGl0IGEga2V5LlxuXG4gIHZhciBjaGlsZE93bmVyID0gJyc7XG5cbiAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5fb3duZXIgJiYgZWxlbWVudC5fb3duZXIgIT09IFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQpIHtcbiAgICAvLyBHaXZlIHRoZSBjb21wb25lbnQgdGhhdCBvcmlnaW5hbGx5IGNyZWF0ZWQgdGhpcyBjaGlsZC5cbiAgICBjaGlsZE93bmVyID0gXCIgSXQgd2FzIHBhc3NlZCBhIGNoaWxkIGZyb20gXCIgKyBnZXRDb21wb25lbnROYW1lKGVsZW1lbnQuX293bmVyLnR5cGUpICsgXCIuXCI7XG4gIH1cblxuICB7XG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KTtcblxuICAgIGVycm9yKCdFYWNoIGNoaWxkIGluIGEgbGlzdCBzaG91bGQgaGF2ZSBhIHVuaXF1ZSBcImtleVwiIHByb3AuJyArICclcyVzIFNlZSBodHRwczovL3JlYWN0anMub3JnL2xpbmsvd2FybmluZy1rZXlzIGZvciBtb3JlIGluZm9ybWF0aW9uLicsIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8sIGNoaWxkT3duZXIpO1xuXG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgfVxufVxuLyoqXG4gKiBFbnN1cmUgdGhhdCBldmVyeSBlbGVtZW50IGVpdGhlciBpcyBwYXNzZWQgaW4gYSBzdGF0aWMgbG9jYXRpb24sIGluIGFuXG4gKiBhcnJheSB3aXRoIGFuIGV4cGxpY2l0IGtleXMgcHJvcGVydHkgZGVmaW5lZCwgb3IgaW4gYW4gb2JqZWN0IGxpdGVyYWxcbiAqIHdpdGggdmFsaWQga2V5IHByb3BlcnR5LlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdE5vZGV9IG5vZGUgU3RhdGljYWxseSBwYXNzZWQgY2hpbGQgb2YgYW55IHR5cGUuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgbm9kZSdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUNoaWxkS2V5cyhub2RlLCBwYXJlbnRUeXBlKSB7XG4gIGlmICh0eXBlb2Ygbm9kZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheShub2RlKSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNoaWxkID0gbm9kZVtpXTtcblxuICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KGNoaWxkLCBwYXJlbnRUeXBlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNWYWxpZEVsZW1lbnQobm9kZSkpIHtcbiAgICAvLyBUaGlzIGVsZW1lbnQgd2FzIHBhc3NlZCBpbiBhIHZhbGlkIGxvY2F0aW9uLlxuICAgIGlmIChub2RlLl9zdG9yZSkge1xuICAgICAgbm9kZS5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICB9XG4gIH0gZWxzZSBpZiAobm9kZSkge1xuICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihub2RlKTtcblxuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gRW50cnkgaXRlcmF0b3JzIHVzZWQgdG8gcHJvdmlkZSBpbXBsaWNpdCBrZXlzLFxuICAgICAgLy8gYnV0IG5vdyB3ZSBwcmludCBhIHNlcGFyYXRlIHdhcm5pbmcgZm9yIHRoZW0gbGF0ZXIuXG4gICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gbm9kZS5lbnRyaWVzKSB7XG4gICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChub2RlKTtcbiAgICAgICAgdmFyIHN0ZXA7XG5cbiAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShzdGVwLnZhbHVlLCBwYXJlbnRUeXBlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYW4gZWxlbWVudCwgdmFsaWRhdGUgdGhhdCBpdHMgcHJvcHMgZm9sbG93IHRoZSBwcm9wVHlwZXMgZGVmaW5pdGlvbixcbiAqIHByb3ZpZGVkIGJ5IHRoZSB0eXBlLlxuICpcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KSB7XG4gIHtcbiAgICB2YXIgdHlwZSA9IGVsZW1lbnQudHlwZTtcblxuICAgIGlmICh0eXBlID09PSBudWxsIHx8IHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcHJvcFR5cGVzO1xuXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCAvLyBOb3RlOiBNZW1vIG9ubHkgY2hlY2tzIG91dGVyIHByb3BzIGhlcmUuXG4gICAgLy8gSW5uZXIgcHJvcHMgYXJlIGNoZWNrZWQgaW4gdGhlIHJlY29uY2lsZXIuXG4gICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSkge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocHJvcFR5cGVzKSB7XG4gICAgICAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKHR5cGUpO1xuICAgICAgY2hlY2tQcm9wVHlwZXMocHJvcFR5cGVzLCBlbGVtZW50LnByb3BzLCAncHJvcCcsIG5hbWUsIGVsZW1lbnQpO1xuICAgIH0gZWxzZSBpZiAodHlwZS5Qcm9wVHlwZXMgIT09IHVuZGVmaW5lZCAmJiAhcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24pIHtcbiAgICAgIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gdHJ1ZTsgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcblxuICAgICAgdmFyIF9uYW1lID0gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKTtcblxuICAgICAgZXJyb3IoJ0NvbXBvbmVudCAlcyBkZWNsYXJlZCBgUHJvcFR5cGVzYCBpbnN0ZWFkIG9mIGBwcm9wVHlwZXNgLiBEaWQgeW91IG1pc3NwZWxsIHRoZSBwcm9wZXJ0eSBhc3NpZ25tZW50PycsIF9uYW1lIHx8ICdVbmtub3duJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0eXBlLmdldERlZmF1bHRQcm9wcyA9PT0gJ2Z1bmN0aW9uJyAmJiAhdHlwZS5nZXREZWZhdWx0UHJvcHMuaXNSZWFjdENsYXNzQXBwcm92ZWQpIHtcbiAgICAgIGVycm9yKCdnZXREZWZhdWx0UHJvcHMgaXMgb25seSB1c2VkIG9uIGNsYXNzaWMgUmVhY3QuY3JlYXRlQ2xhc3MgJyArICdkZWZpbml0aW9ucy4gVXNlIGEgc3RhdGljIHByb3BlcnR5IG5hbWVkIGBkZWZhdWx0UHJvcHNgIGluc3RlYWQuJyk7XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGEgZnJhZ21lbnQsIHZhbGlkYXRlIHRoYXQgaXQgY2FuIG9ubHkgYmUgcHJvdmlkZWQgd2l0aCBmcmFnbWVudCBwcm9wc1xuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGZyYWdtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZnJhZ21lbnQpIHtcbiAge1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZnJhZ21lbnQucHJvcHMpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcblxuICAgICAgaWYgKGtleSAhPT0gJ2NoaWxkcmVuJyAmJiBrZXkgIT09ICdrZXknKSB7XG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICAgIGVycm9yKCdJbnZhbGlkIHByb3AgYCVzYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLiAnICsgJ1JlYWN0LkZyYWdtZW50IGNhbiBvbmx5IGhhdmUgYGtleWAgYW5kIGBjaGlsZHJlbmAgcHJvcHMuJywga2V5KTtcblxuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZnJhZ21lbnQucmVmICE9PSBudWxsKSB7XG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcblxuICAgICAgZXJyb3IoJ0ludmFsaWQgYXR0cmlidXRlIGByZWZgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuJyk7XG5cbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24odHlwZSwgcHJvcHMsIGNoaWxkcmVuKSB7XG4gIHZhciB2YWxpZFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSk7IC8vIFdlIHdhcm4gaW4gdGhpcyBjYXNlIGJ1dCBkb24ndCB0aHJvdy4gV2UgZXhwZWN0IHRoZSBlbGVtZW50IGNyZWF0aW9uIHRvXG4gIC8vIHN1Y2NlZWQgYW5kIHRoZXJlIHdpbGwgbGlrZWx5IGJlIGVycm9ycyBpbiByZW5kZXIuXG5cbiAgaWYgKCF2YWxpZFR5cGUpIHtcbiAgICB2YXIgaW5mbyA9ICcnO1xuXG4gICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiBPYmplY3Qua2V5cyh0eXBlKS5sZW5ndGggPT09IDApIHtcbiAgICAgIGluZm8gKz0gJyBZb3UgbGlrZWx5IGZvcmdvdCB0byBleHBvcnQgeW91ciBjb21wb25lbnQgZnJvbSB0aGUgZmlsZSAnICsgXCJpdCdzIGRlZmluZWQgaW4sIG9yIHlvdSBtaWdodCBoYXZlIG1peGVkIHVwIGRlZmF1bHQgYW5kIG5hbWVkIGltcG9ydHMuXCI7XG4gICAgfVxuXG4gICAgdmFyIHNvdXJjZUluZm8gPSBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bUZvclByb3BzKHByb3BzKTtcblxuICAgIGlmIChzb3VyY2VJbmZvKSB7XG4gICAgICBpbmZvICs9IHNvdXJjZUluZm87XG4gICAgfSBlbHNlIHtcbiAgICAgIGluZm8gKz0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG4gICAgfVxuXG4gICAgdmFyIHR5cGVTdHJpbmc7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgdHlwZVN0cmluZyA9ICdudWxsJztcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodHlwZSkpIHtcbiAgICAgIHR5cGVTdHJpbmcgPSAnYXJyYXknO1xuICAgIH0gZWxzZSBpZiAodHlwZSAhPT0gdW5kZWZpbmVkICYmIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRSkge1xuICAgICAgdHlwZVN0cmluZyA9IFwiPFwiICsgKGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKSB8fCAnVW5rbm93bicpICsgXCIgLz5cIjtcbiAgICAgIGluZm8gPSAnIERpZCB5b3UgYWNjaWRlbnRhbGx5IGV4cG9ydCBhIEpTWCBsaXRlcmFsIGluc3RlYWQgb2YgYSBjb21wb25lbnQ/JztcbiAgICB9IGVsc2Uge1xuICAgICAgdHlwZVN0cmluZyA9IHR5cGVvZiB0eXBlO1xuICAgIH1cblxuICAgIHtcbiAgICAgIGVycm9yKCdSZWFjdC5jcmVhdGVFbGVtZW50OiB0eXBlIGlzIGludmFsaWQgLS0gZXhwZWN0ZWQgYSBzdHJpbmcgKGZvciAnICsgJ2J1aWx0LWluIGNvbXBvbmVudHMpIG9yIGEgY2xhc3MvZnVuY3Rpb24gKGZvciBjb21wb3NpdGUgJyArICdjb21wb25lbnRzKSBidXQgZ290OiAlcy4lcycsIHR5cGVTdHJpbmcsIGluZm8pO1xuICAgIH1cbiAgfVxuXG4gIHZhciBlbGVtZW50ID0gY3JlYXRlRWxlbWVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyAvLyBUaGUgcmVzdWx0IGNhbiBiZSBudWxsaXNoIGlmIGEgbW9jayBvciBhIGN1c3RvbSBmdW5jdGlvbiBpcyB1c2VkLlxuICAvLyBUT0RPOiBEcm9wIHRoaXMgd2hlbiB0aGVzZSBhcmUgbm8gbG9uZ2VyIGFsbG93ZWQgYXMgdGhlIHR5cGUgYXJndW1lbnQuXG5cbiAgaWYgKGVsZW1lbnQgPT0gbnVsbCkge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9IC8vIFNraXAga2V5IHdhcm5pbmcgaWYgdGhlIHR5cGUgaXNuJ3QgdmFsaWQgc2luY2Ugb3VyIGtleSB2YWxpZGF0aW9uIGxvZ2ljXG4gIC8vIGRvZXNuJ3QgZXhwZWN0IGEgbm9uLXN0cmluZy9mdW5jdGlvbiB0eXBlIGFuZCBjYW4gdGhyb3cgY29uZnVzaW5nIGVycm9ycy5cbiAgLy8gV2UgZG9uJ3Qgd2FudCBleGNlcHRpb24gYmVoYXZpb3IgdG8gZGlmZmVyIGJldHdlZW4gZGV2IGFuZCBwcm9kLlxuICAvLyAoUmVuZGVyaW5nIHdpbGwgdGhyb3cgd2l0aCBhIGhlbHBmdWwgbWVzc2FnZSBhbmQgYXMgc29vbiBhcyB0aGUgdHlwZSBpc1xuICAvLyBmaXhlZCwgdGhlIGtleSB3YXJuaW5ncyB3aWxsIGFwcGVhci4pXG5cblxuICBpZiAodmFsaWRUeXBlKSB7XG4gICAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGFyZ3VtZW50c1tpXSwgdHlwZSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGUgPT09IGV4cG9ydHMuRnJhZ21lbnQpIHtcbiAgICB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZWxlbWVudCk7XG4gIH0gZWxzZSB7XG4gICAgdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cbnZhciBkaWRXYXJuQWJvdXREZXByZWNhdGVkQ3JlYXRlRmFjdG9yeSA9IGZhbHNlO1xuZnVuY3Rpb24gY3JlYXRlRmFjdG9yeVdpdGhWYWxpZGF0aW9uKHR5cGUpIHtcbiAgdmFyIHZhbGlkYXRlZEZhY3RvcnkgPSBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24uYmluZChudWxsLCB0eXBlKTtcbiAgdmFsaWRhdGVkRmFjdG9yeS50eXBlID0gdHlwZTtcblxuICB7XG4gICAgaWYgKCFkaWRXYXJuQWJvdXREZXByZWNhdGVkQ3JlYXRlRmFjdG9yeSkge1xuICAgICAgZGlkV2FybkFib3V0RGVwcmVjYXRlZENyZWF0ZUZhY3RvcnkgPSB0cnVlO1xuXG4gICAgICB3YXJuKCdSZWFjdC5jcmVhdGVGYWN0b3J5KCkgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gQ29uc2lkZXIgdXNpbmcgSlNYICcgKyAnb3IgdXNlIFJlYWN0LmNyZWF0ZUVsZW1lbnQoKSBkaXJlY3RseSBpbnN0ZWFkLicpO1xuICAgIH0gLy8gTGVnYWN5IGhvb2s6IHJlbW92ZSBpdFxuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodmFsaWRhdGVkRmFjdG9yeSwgJ3R5cGUnLCB7XG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICB3YXJuKCdGYWN0b3J5LnR5cGUgaXMgZGVwcmVjYXRlZC4gQWNjZXNzIHRoZSBjbGFzcyBkaXJlY3RseSAnICsgJ2JlZm9yZSBwYXNzaW5nIGl0IHRvIGNyZWF0ZUZhY3RvcnkuJyk7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICd0eXBlJywge1xuICAgICAgICAgIHZhbHVlOiB0eXBlXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB2YWxpZGF0ZWRGYWN0b3J5O1xufVxuZnVuY3Rpb24gY2xvbmVFbGVtZW50V2l0aFZhbGlkYXRpb24oZWxlbWVudCwgcHJvcHMsIGNoaWxkcmVuKSB7XG4gIHZhciBuZXdFbGVtZW50ID0gY2xvbmVFbGVtZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YWxpZGF0ZUNoaWxkS2V5cyhhcmd1bWVudHNbaV0sIG5ld0VsZW1lbnQudHlwZSk7XG4gIH1cblxuICB2YWxpZGF0ZVByb3BUeXBlcyhuZXdFbGVtZW50KTtcbiAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5cbntcblxuICB0cnkge1xuICAgIHZhciBmcm96ZW5PYmplY3QgPSBPYmplY3QuZnJlZXplKHt9KTtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1uZXcgKi9cblxuICAgIG5ldyBNYXAoW1tmcm96ZW5PYmplY3QsIG51bGxdXSk7XG4gICAgbmV3IFNldChbZnJvemVuT2JqZWN0XSk7XG4gICAgLyogZXNsaW50LWVuYWJsZSBuby1uZXcgKi9cbiAgfSBjYXRjaCAoZSkge1xuICB9XG59XG5cbnZhciBjcmVhdGVFbGVtZW50JDEgPSAgY3JlYXRlRWxlbWVudFdpdGhWYWxpZGF0aW9uIDtcbnZhciBjbG9uZUVsZW1lbnQkMSA9ICBjbG9uZUVsZW1lbnRXaXRoVmFsaWRhdGlvbiA7XG52YXIgY3JlYXRlRmFjdG9yeSA9ICBjcmVhdGVGYWN0b3J5V2l0aFZhbGlkYXRpb24gO1xudmFyIENoaWxkcmVuID0ge1xuICBtYXA6IG1hcENoaWxkcmVuLFxuICBmb3JFYWNoOiBmb3JFYWNoQ2hpbGRyZW4sXG4gIGNvdW50OiBjb3VudENoaWxkcmVuLFxuICB0b0FycmF5OiB0b0FycmF5LFxuICBvbmx5OiBvbmx5Q2hpbGRcbn07XG5cbmV4cG9ydHMuQ2hpbGRyZW4gPSBDaGlsZHJlbjtcbmV4cG9ydHMuQ29tcG9uZW50ID0gQ29tcG9uZW50O1xuZXhwb3J0cy5QdXJlQ29tcG9uZW50ID0gUHVyZUNvbXBvbmVudDtcbmV4cG9ydHMuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQgPSBSZWFjdFNoYXJlZEludGVybmFscztcbmV4cG9ydHMuY2xvbmVFbGVtZW50ID0gY2xvbmVFbGVtZW50JDE7XG5leHBvcnRzLmNyZWF0ZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0O1xuZXhwb3J0cy5jcmVhdGVFbGVtZW50ID0gY3JlYXRlRWxlbWVudCQxO1xuZXhwb3J0cy5jcmVhdGVGYWN0b3J5ID0gY3JlYXRlRmFjdG9yeTtcbmV4cG9ydHMuY3JlYXRlUmVmID0gY3JlYXRlUmVmO1xuZXhwb3J0cy5mb3J3YXJkUmVmID0gZm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnQgPSBpc1ZhbGlkRWxlbWVudDtcbmV4cG9ydHMubGF6eSA9IGxhenk7XG5leHBvcnRzLm1lbW8gPSBtZW1vO1xuZXhwb3J0cy51c2VDYWxsYmFjayA9IHVzZUNhbGxiYWNrO1xuZXhwb3J0cy51c2VDb250ZXh0ID0gdXNlQ29udGV4dDtcbmV4cG9ydHMudXNlRGVidWdWYWx1ZSA9IHVzZURlYnVnVmFsdWU7XG5leHBvcnRzLnVzZUVmZmVjdCA9IHVzZUVmZmVjdDtcbmV4cG9ydHMudXNlSW1wZXJhdGl2ZUhhbmRsZSA9IHVzZUltcGVyYXRpdmVIYW5kbGU7XG5leHBvcnRzLnVzZUxheW91dEVmZmVjdCA9IHVzZUxheW91dEVmZmVjdDtcbmV4cG9ydHMudXNlTWVtbyA9IHVzZU1lbW87XG5leHBvcnRzLnVzZVJlZHVjZXIgPSB1c2VSZWR1Y2VyO1xuZXhwb3J0cy51c2VSZWYgPSB1c2VSZWY7XG5leHBvcnRzLnVzZVN0YXRlID0gdXNlU3RhdGU7XG5leHBvcnRzLnZlcnNpb24gPSBSZWFjdFZlcnNpb247XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1qc3gtZGV2LXJ1bnRpbWUucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtanN4LWRldi1ydW50aW1lLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNoYWtlciBmcm9tICcuLi9jb21wb25lbnRzL1NoYWtlci5qcyc7XG4vLyBpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuLy8gY29uc3QgSG9tZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4vLyAgIHdpZHRoOiAxMDB2dztcbi8vICAgaGVpZ2h0OiAxMDB2aDtcbi8vIGA7XG5cbi8vIGNvbnN0IFRpdGxlID0gc3R5bGVkLmgxYFxuLy8gICBmb250LXNpemU6ICczcmVtJyA6ICcxcmVtJztcblxuLy8gYDtcblxuLy8gY29uc3QgTmF2YmFyID0gc3R5bGVkLmRpdmBcbi8vICAgZGlzcGxheTogJ2ZsZXgnO1xuLy8gICBhbGluZy1pdGVtczogJ2Jhc2VsaW5lJztcbi8vICAgd2lkdGg6IDEwMCU7XG4vLyBgO1xuXG4vLyBjb25zdCBOYXZJdGVtID0gc3R5bGVkLmFgXG4vLyAgIGZvbnQtc2l6ZTogJzEuMXJlbSc7XG4vLyBgO1xuXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuLy8gICByZXR1cm4gKFxuLy8gICAgIDxIb21lQ29udGFpbmVyPlxuLy8gICAgICAgPE5hdmJhcj5cbi8vICAgICAgICAgPFRpdGxlPk15bXkgQ29ja3RhaWxzPC9UaXRsZT5cbi8vICAgICAgICAge2NvbmZpZ3MubmF2cy5tYXAoKGUsIGluZGV4KSA9PiAoXG4vLyAgICAgICAgICAgPE5hdkl0ZW0ga2V5PXtpbmRleH0gaHJlZj17ZS5ocmVmfT5cbi8vICAgICAgICAgICAgIHtlLm5hbWV9XG4vLyAgICAgICAgICAgPC9OYXZJdGVtPlxuLy8gICAgICAgICApKX1cbi8vICAgICAgIDwvTmF2YmFyPlxuLy8gICAgIDwvSG9tZUNvbnRhaW5lcj5cbi8vICAgKTtcbi8vIH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPFNoYWtlciAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTIhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0zLTMhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTQhLi9zaGFrZXIubW9kdWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL3NoYWtlci5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL3NoYWtlci5tb2R1bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29ja3RhaWxOb3RGb3VuZCh7IGNsYXNzTmFtZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgIGhlaWdodD1cIjEwMCVcIlxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICB2aWV3Qm94PVwiMCAwIDM4NiAyODZcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yNzMuNzA1IDI4MC44MjlDMjc1Ljk1OCAyODAuODI5IDI3OC4yMjIgMjgwLjc2OCAyODAuNDg1IDI4MC43MjhDMjkwLjUwMyAyODAuNTI1IDMwMi40MjkgMjgyLjY5NyAzMTAuOTM1IDI3Ni4zMTJDMzEzLjk4IDI3My45OTggMzE2Ljk1NCAyNzEuMzA4IDMyMC42NDkgMjcwLjIyMkMzMjMuOTA3IDI2OS4yMDcgMzI3LjQyOSAyNjkuNjY0IDMzMC43OTkgMjY4Ljk2NEMzNDUuNjk5IDI2NS44NDggMzQ0Ljc5NSAyNTEuMSAzMzYuODg5IDI0MS43MjFDMzI5LjIxNSAyMzIuNTg2IDMxNy4yOTkgMjI5LjM3OSAzMDguMjM1IDIyMi4wNzFDMzAyLjcyNCAyMTcuNjE1IDI5NC45NzkgMjE4LjUxOCAyODguNjU2IDIxOC41MThDMjcxLjM2OCAyMTguNTI5IDI1NC41NzggMjI0LjMxMiAyNDAuOTUxIDIzNC45NTFDMjM2LjA4OSAyMzguNjc2IDIzMS42MzMgMjQxLjI5NSAyMjcuOTk5IDI0Ny4wNEMyMjMuODc3IDI1My42MjggMjIwLjg4NSAyNjAuODYgMjE5LjE0OSAyNjguNDM2QzIxOC41OTUgMjcwLjI4MiAyMTguNDg3IDI3Mi4yMzQgMjE4LjgzNCAyNzQuMTNDMjIwLjAzMiAyNzguNjk4IDIyNS4yNjkgMjgwLjIyIDIyOC40NTYgMjgwLjMyMkMyNDMuNDc4IDI4MC43MzggMjU4LjYwMiAyODEuMDAyIDI3My43MDUgMjgwLjgyOVpcIlxuICAgICAgICBmaWxsPVwiI0M0RkM2OFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yOTIuNjk2IDI4MS40MzhDMjkwLjg0OCAyODEuNDM4IDI4OC45OTEgMjgxLjM3NyAyODcuMTQzIDI4MS4zMjZDMjg0LjgxOSAyODEuMjU1IDI4Mi42MjcgMjgxLjE5NSAyODAuNDk1IDI4MS4yMzVDMjc4LjM2NCAyODEuMjc2IDI3NS45NjggMjgxLjMxNiAyNzMuNzA1IDI4MS4zMzdDMjYwLjU3MSAyODEuNDc5IDI0Ni4xNjggMjgxLjMzNyAyMjguMzY1IDI4MC44MTlDMjI1LjIzOSAyODAuNzI4IDIxOS41NzUgMjc5LjI0NiAyMTguMjc2IDI3NC4yNTJDMjE3LjkwMSAyNzIuMjc3IDIxOC4wMDYgMjcwLjI0MSAyMTguNTggMjY4LjMxNEMyMjAuMzQzIDI2MC42ODYgMjIzLjM1NCAyNTMuNDAyIDIyNy40OTIgMjQ2Ljc1NkMyMzAuNTM3IDI0MS45NDQgMjM0LjE5MSAyMzkuMjU1IDIzOC4wNTggMjM2LjQxM0MyMzguODggMjM1LjgxNCAyMzkuNzIzIDIzNS4xOTUgMjQwLjU3NSAyMzQuNTM1QzI1NC44NzcgMjIzLjYwMyAyNzEuNDcyIDIxNy44NjkgMjg4LjU5NSAyMTguMDAxQzI4OS40NzggMjE4LjAwMSAyOTAuMzkxIDIxOC4wMDEgMjkxLjMyNSAyMTguMDAxQzI5Ny4wOCAyMTcuODg5IDMwMy42MDcgMjE3Ljc2NyAzMDguNDg5IDIyMS43MDVDMzEyLjI0OSAyMjQuNTUyIDMxNi4yNDYgMjI3LjA3MiAzMjAuNDM2IDIyOS4yMzdDMzI2LjQxNCAyMzIuNTQ2IDMzMi42MTYgMjM1Ljk2NiAzMzcuMjEzIDI0MS40MTdDMzQyLjIxNyAyNDcuMzQ0IDM0NC4xNzYgMjU0Ljg2NSAzNDIuMjA3IDI2MC41OEMzNDEuMTAxIDI2My43ODcgMzM4LjIyOCAyNjcuOTM5IDMzMC44NDkgMjY5LjQ4MUMzMjkuMzMyIDI2OS43NjUgMzI3Ljc5NSAyNjkuOTM1IDMyNi4yNTEgMjY5Ljk4OUMzMjQuMzkxIDI3MC4wMjYgMzIyLjU0MiAyNzAuMjc4IDMyMC43NCAyNzAuNzRDMzE3LjgxNyAyNzEuNjEzIDMxNS4zIDI3My41NzIgMzEyLjg3NCAyNzUuNDZDMzEyLjMwNSAyNzUuODk2IDMxMS43NTcgMjc2LjMzMyAzMTEuMTg5IDI3Ni43NTlDMzA1LjkwMSAyODAuNzE3IDI5OS4zNjQgMjgxLjQzOCAyOTIuNjk2IDI4MS40MzhaTTI4MS45MzcgMjgwLjIxQzI4My42MzIgMjgwLjIxIDI4NS4zNTcgMjgwLjI2MSAyODcuMTY0IDI4MC4zMTFDMjk1LjQ4NyAyODAuNTU1IDMwNC4wOTQgMjgwLjgwOSAzMTAuNjIgMjc1LjkwNkMzMTEuMTc5IDI3NS40OSAzMTEuNzI3IDI3NS4wNTQgMzEyLjI4NSAyNzQuNjI3QzMxNC43OTIgMjcyLjY2OCAzMTcuMzYgMjcwLjY0OSAzMjAuNDg2IDI2OS43MjVDMzIyLjM1MiAyNjkuMjUgMzI0LjI2NiAyNjguOTg4IDMyNi4xOTEgMjY4Ljk0M0MzMjcuNjgyIDI2OC44ODkgMzI5LjE2OCAyNjguNzI2IDMzMC42MzYgMjY4LjQ1NkMzMzYuMTE3IDI2Ny4zMTkgMzM5Ljc3MSAyNjQuNDY3IDM0MS4yNDMgMjYwLjIxNEMzNDMuMSAyNTQuODM1IDM0MS4yNDMgMjQ3LjcgMzM2LjQzMiAyNDIuMDM2QzMzMS45MDUgMjM2LjcyNyAzMjUuODE1IDIzMy4zNDcgMzE5Ljk0OCAyMzAuMTRDMzE1LjcwMiAyMjcuOTUxIDMxMS42NTQgMjI1LjM5NyAzMDcuODQ5IDIyMi41MDdDMzAzLjI1MiAyMTguNzkyIDI5Ni45MTggMjE4LjkxNCAyOTEuMzQ2IDIxOS4wMjZDMjkwLjIyOSAyMTkuMDI2IDI4OS4xNDMgMjE5LjAyNiAyODguMDc3IDIxOS4wMjZDMjcxLjM3IDIxOS4wMjYgMjU1LjE3MSAyMjQuNjU5IDI0MS4xODQgMjM1LjM1N0MyNDAuMzMyIDIzNi4wMTcgMjM5LjQ4OSAyMzYuNjM2IDIzOC42NTcgMjM3LjI0NUMyMzQuODcxIDI0MC4wMjYgMjMxLjI5OCAyNDIuNjU1IDIyOC4zNTUgMjQ3LjMxNEMyMjQuMjczIDI1My44NTcgMjIxLjMwNiAyNjEuMDMzIDIxOS41NzUgMjY4LjU0OEMyMTkuMDQyIDI3MC4zMTcgMjE4LjkzIDI3Mi4xODggMjE5LjI1IDI3NC4wMDhDMjIwLjQwNyAyNzguNDI0IDIyNS41NDMgMjc5LjczMyAyMjguMzg1IDI3OS44MTRDMjQ2LjE3OCAyODAuMzIyIDI2MC41NzEgMjgwLjQ4NCAyNzMuNjg1IDI4MC4zMzJDMjc1Ljk0OCAyODAuMzMyIDI3OC4yMDEgMjgwLjI3MSAyODAuNDY1IDI4MC4yM0wyODEuOTM3IDI4MC4yMVpcIlxuICAgICAgICBmaWxsPVwiIzIzMUYyMFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yODEuMzM4IDIwMy43NUMyNjEuMDM4IDE5Ni44NTggMjQwLjA2OCAxOTIuNTg1IDIxOC45MzYgMTkyLjE4OUMxODMuNTczIDE5MS41NiAxNDkuOTE1IDIwMy44MDEgMTE3LjQzNiAyMTkuMDQ2QzEwNC44OCAyMjQuOTUzIDkyLjI3MzcgMjMxLjQzOSA4MS40NTM4IDI0MS4wNjFDNzMuOTEyMyAyNDcuNzcxIDYzLjExMjcgMjYzLjczNiA3MC40MDA0IDI3NS40MzlDNzEuOTU0MyAyNzcuOCA3NC4yMDI5IDI3OS42MTkgNzYuODM1NSAyODAuNjQ2QzkxLjIxODEgMjg2LjY3NSAxMDcuNjcxIDI4Mi4zNzIgMTIyLjI2NyAyODAuMTlDMTY0Ljc3NSAyNzMuODM2IDIwOC43MDQgMjg5Ljk3NCAyNTAuNTEyIDI3NS4zODlDMjUzLjc3IDI3NC4yNTIgMjU3LjcxOSAyNzEuNTQyIDI1Ni45MDcgMjY3LjcwNUMyNTYuMjU3IDI2NC41ODkgMjUyLjY3NCAyNjMuMTg4IDI1Mi4xMDYgMjYwLjA0MkMyNTEuNDQ2IDI1Ni4zODggMjU1LjE1MSAyNTMuODcxIDI1OC4xOTYgMjUyLjc5NUMyNzguOCAyNDUuNTg4IDMwMi4wMTMgMjQ2LjQgMzE5Ljk0OCAyMzIuNjE3QzMyMS41MTEgMjMxLjYwNiAzMjIuNzAyIDIzMC4xMTMgMzIzLjMzOCAyMjguMzY0QzMyNC41MzYgMjI0LjExMSAzMjAuNDg2IDIyMC40ODcgMzE2Ljk0NCAyMTguNzIxQzMwNS40MjYgMjEyLjkzNSAyOTMuNTMgMjA3LjkzNCAyODEuMzM4IDIwMy43NVpcIlxuICAgICAgICBmaWxsPVwid2hpdGVcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNOTMuNzY1NyAyODQuMjA5Qzg3Ljg5NTQgMjg0LjMyNCA4Mi4wNjE5IDI4My4yNTggNzYuNjEyMiAyODEuMDczQzczLjg3MjYgMjgwLjAxNiA3MS41MzU3IDI3OC4xMjMgNjkuOTMzNSAyNzUuNjYzQzY2LjY0NDkgMjcwLjM3NSA2Ni42MTQ1IDI2My42MjUgNjkuODYyNSAyNTYuMTM0QzcyLjUxNTQgMjUwLjI2IDc2LjMzNDcgMjQ0Ljk4NyA4MS4wODg0IDI0MC42MzVDOTIuMzU0OSAyMzAuNjE3IDEwNS42MzEgMjIzLjk3OSAxMTcuMTkyIDIxOC41NDlDMTQ2LjMyMiAyMDQuODY2IDE4MS4xOTggMTkwLjk2MSAyMTguOTQ2IDE5MS42NDFDMjM4LjkwMSAxOTEuOTk2IDI1OS45NDEgMTk1Ljg5NCAyODEuNSAyMDMuMjMyQzI5My43MTMgMjA3LjQyMiAzMDUuNjI5IDIxMi40MzEgMzE3LjE2NyAyMTguMjI0QzMyMS4wMzQgMjIwLjE1MiAzMjUuMDk0IDIyMy45ODkgMzIzLjgyNiAyMjguNDY1QzMyMy4xNjQgMjMwLjMyMyAzMjEuOTA4IDIzMS45MSAzMjAuMjUzIDIzMi45ODJDMzA4LjU2IDI0MS45NjUgMjk0LjQyMSAyNDQuODM3IDI4MC43NDkgMjQ3LjYxOEMyNzMuMzA5IDI0OS4xMzEgMjY1LjYwNSAyNTAuNjYzIDI1OC4zNjggMjUzLjIzMUMyNTUuMzIzIDI1NC4yOTcgMjUxLjk5NCAyNTYuNjgyIDI1Mi41NzMgMjU5LjkxQzI1Mi45NjYgMjYxLjMxNyAyNTMuNzYgMjYyLjU3OSAyNTQuODU2IDI2My41NDRDMjU2LjA2MiAyNjQuNjMyIDI1Ni45MzQgMjY2LjA0IDI1Ny4zNzQgMjY3LjYwNEMyNTguMjM2IDI3MS42NjQgMjU0LjMyOSAyNzQuNTk3IDI1MC42NTQgMjc1Ljg2NkMyMjYuNDE2IDI4NC4zMjEgMjAxLjEwMiAyODIuNDczIDE3Ni42MSAyODAuNjc3QzE1OC43MjYgMjc5LjM2NyAxNDAuMjMyIDI3OC4wMTggMTIyLjMxOCAyODAuNjc3QzEyMC4wODUgMjgxLjAwMiAxMTcuODExIDI4MS4zODcgMTE1LjUwNyAyODEuNzczQzEwOC4zMDEgMjgyLjk3MSAxMDAuOTYyIDI4NC4yMDkgOTMuNzY1NyAyODQuMjA5Wk0yMTYuMzA3IDE5Mi42MzZDMTc5Ljc2NyAxOTIuNjM2IDE0NS45NjcgMjA2LjE1NiAxMTcuNjI4IDIxOS40NjJDMTA2LjEyOCAyMjQuODcyIDkyLjkzMzQgMjMxLjQ1OSA4MS43Njg0IDI0MS4zOTZDNzcuMTIwMiAyNDUuNjQzIDczLjM4NjggMjUwLjc5MiA3MC43OTYzIDI1Ni41M0M2OC42MjQyIDI2MS41MjQgNjYuODY4MiAyNjguODExIDcwLjc5NjMgMjc1LjExNUM3Mi4yODUyIDI3Ny4zOTQgNzQuNDU1NSAyNzkuMTQ1IDc2Ljk5NzkgMjgwLjExOUM4OS4wNDYgMjg1LjE5NCAxMDIuMzczIDI4Mi45MiAxMTUuMzM0IDI4MC43NDhDMTE3LjY0OSAyODAuMzYyIDExOS45MjIgMjc5Ljk3NiAxMjIuMTY1IDI3OS42NDJDMTQwLjE5MiAyNzYuOTQyIDE1OC43MDUgMjc4LjMwMiAxNzYuNjgxIDI3OS42NDJDMjAxLjA0MSAyODEuNDI4IDIyNi4yODQgMjgzLjI3NSAyNTAuMzE5IDI3NC44OTFDMjUzLjU2NyAyNzMuNzU1IDI1Ny4wOTkgMjcxLjIxNyAyNTYuNDA5IDI2Ny43ODZDMjU1Ljk5MiAyNjYuNDE5IDI1NS4yMDUgMjY1LjE5MyAyNTQuMTM2IDI2NC4yNDRDMjUyLjkwNyAyNjMuMTQ0IDI1Mi4wMjggMjYxLjcwOCAyNTEuNjA4IDI2MC4xMTNDMjUwLjkwOCAyNTYuMjU2IDI1NC42NTMgMjUzLjQ4NSAyNTguMDY0IDI1Mi4yOTdDMjY1LjM3MiAyNDkuNzQgMjczLjEwNiAyNDguMTY2IDI4MC41NzYgMjQ2LjY0NEMyOTQuMTM3IDI0My44OTMgMzA4LjE2NCAyNDEuMDQxIDMxOS42NzQgMjMyLjJDMzIxLjE0NSAyMzEuMjUxIDMyMi4yNyAyMjkuODUyIDMyMi44ODIgMjI4LjIxMUMzMjMuOTc4IDIyNC4zMjQgMzIwLjI2MyAyMjAuOTAzIDMxNi43NDEgMjE5LjE0OEMzMDUuMjQ0IDIxMy4zODUgMjkzLjM3NiAyMDguMzkzIDI4MS4yMTYgMjA0LjIwN0MyNTkuNzU5IDE5Ni45MDkgMjM4LjgwOSAxOTMuMDQyIDIxOC45NjYgMTkyLjY3NkwyMTYuMzA3IDE5Mi42MzZaXCJcbiAgICAgICAgZmlsbD1cIiMyMzFGMjBcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMjg5Ljg4NCAyNTIuNjgzQzI4OC40MjEgMjUyLjY4NSAyODYuOTYgMjUyLjU5IDI4NS41MDkgMjUyLjM5OUMyODUuMzc4IDI1Mi4zNzkgMjg1LjI2IDI1Mi4zMDggMjg1LjE4IDI1Mi4yMDJDMjg1LjEgMjUyLjA5NiAyODUuMDY2IDI1MS45NjIgMjg1LjA4MyAyNTEuODMxQzI4NS4wODkgMjUxLjc2MyAyODUuMTA5IDI1MS42OTggMjg1LjE0MSAyNTEuNjM5QzI4NS4xNzQgMjUxLjU4IDI4NS4yMTggMjUxLjUyOSAyODUuMjcyIDI1MS40ODhDMjg1LjMyNSAyNTEuNDQ3IDI4NS4zODYgMjUxLjQxNyAyODUuNDUyIDI1MS40MDFDMjg1LjUxNyAyNTEuMzg1IDI4NS41ODUgMjUxLjM4MyAyODUuNjUxIDI1MS4zOTRDMjkzLjU0NCAyNTIuMzg1IDMwMS41MzIgMjUwLjU0NCAzMDguMTk1IDI0Ni4xOTdDMzA4LjMwNyAyNDYuMTMzIDMwOC40NDEgMjQ2LjExNCAzMDguNTY3IDI0Ni4xNDVDMzA4LjY5MyAyNDYuMTc2IDMwOC44MDMgMjQ2LjI1NCAzMDguODczIDI0Ni4zNjRDMzA4Ljk0MyAyNDYuNDczIDMwOC45NjkgMjQ2LjYwNSAzMDguOTQ1IDI0Ni43MzNDMzA4LjkyIDI0Ni44NiAzMDguODQ4IDI0Ni45NzQgMzA4Ljc0MyAyNDcuMDVDMzAzLjEyNyAyNTAuNjk4IDI5Ni41OCAyNTIuNjUzIDI4OS44ODQgMjUyLjY4M1pcIlxuICAgICAgICBmaWxsPVwid2hpdGVcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMzE4LjUwNyAyNDguNjMzQzMxOC40MjUgMjQ4LjYzMyAzMTguMzQzIDI0OC42MTMgMzE4LjI3MSAyNDguNTc0QzMxOC4xOTggMjQ4LjUzNSAzMTguMTM2IDI0OC40NzkgMzE4LjA5MSAyNDguNDFDMzE4LjA1MiAyNDguMzU1IDMxOC4wMjUgMjQ4LjI5MyAzMTguMDExIDI0OC4yMjdDMzE3Ljk5NyAyNDguMTYxIDMxNy45OTYgMjQ4LjA5MyAzMTguMDA4IDI0OC4wMjdDMzE4LjAyIDI0Ny45NjEgMzE4LjA0NiAyNDcuODk4IDMxOC4wODMgMjQ3Ljg0MkMzMTguMTE5IDI0Ny43ODYgMzE4LjE2NyAyNDcuNzM3IDMxOC4yMjMgMjQ3LjdMMzI0LjQ1NSAyNDMuNDc3QzMyNC41NjggMjQzLjQwMyAzMjQuNzA2IDI0My4zNzcgMzI0LjgzOSAyNDMuNDAzQzMyNC45NzIgMjQzLjQzIDMyNS4wODkgMjQzLjUwNyAzMjUuMTY1IDI0My42MTlDMzI1LjIzOSAyNDMuNzMxIDMyNS4yNjUgMjQzLjg2NyAzMjUuMjM5IDI0My45OTlDMzI1LjIxMiAyNDQuMTMgMzI1LjEzNSAyNDQuMjQ1IDMyNS4wMjMgMjQ0LjMyTDMxOC43OTEgMjQ4LjU0MkMzMTguNzA5IDI0OC42MDIgMzE4LjYwOSAyNDguNjM0IDMxOC41MDcgMjQ4LjYzM1pcIlxuICAgICAgICBmaWxsPVwid2hpdGVcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMjU5Ljk1MiAyNzQuMTVDMjU5LjgxNyAyNzQuMTY4IDI1OS42ODEgMjc0LjEzMSAyNTkuNTczIDI3NC4wNDhDMjU5LjQ2NiAyNzMuOTY2IDI1OS4zOTYgMjczLjg0MyAyNTkuMzc4IDI3My43MDlDMjU5LjM2MSAyNzMuNTc0IDI1OS4zOTcgMjczLjQzOCAyNTkuNDggMjczLjMzMUMyNTkuNTYzIDI3My4yMjMgMjU5LjY4NSAyNzMuMTUzIDI1OS44MiAyNzMuMTM1QzI2Mi44NjUgMjcyLjMyMyAyNjUuMjggMjY4LjgyMiAyNjUuMzExIDI2NS4xNjhDMjY1LjMwOSAyNjUuMSAyNjUuMzIyIDI2NS4wMzMgMjY1LjM0OCAyNjQuOTcxQzI2NS4zNzMgMjY0LjkwOCAyNjUuNDEyIDI2NC44NTIgMjY1LjQ2IDI2NC44MDVDMjY1LjUwOSAyNjQuNzU4IDI2NS41NjcgMjY0LjcyMiAyNjUuNjMgMjY0LjY5OUMyNjUuNjk0IDI2NC42NzYgMjY1Ljc2MSAyNjQuNjY2IDI2NS44MjggMjY0LjY3QzI2NS44OTUgMjY0LjY3IDI2NS45NiAyNjQuNjgzIDI2Ni4wMjEgMjY0LjcwOUMyNjYuMDgyIDI2NC43MzUgMjY2LjEzNyAyNjQuNzcyIDI2Ni4xODQgMjY0LjgyQzI2Ni4yMyAyNjQuODY3IDI2Ni4yNjcgMjY0LjkyMyAyNjYuMjkxIDI2NC45ODRDMjY2LjMxNSAyNjUuMDQ2IDI2Ni4zMjcgMjY1LjExMiAyNjYuMzI2IDI2NS4xNzhDMjY2LjMyNiAyNjkuMzM5IDI2My42MDYgMjczLjE3NiAyNjAuMDg0IDI3NC4xMkwyNTkuOTUyIDI3NC4xNVpcIlxuICAgICAgICBmaWxsPVwid2hpdGVcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMTYxLjM1NSAyNjIuMDAxQzE5OC42MSAyNjIuMDAxIDIyOC44MTEgMjU3LjYwMiAyMjguODExIDI1Mi4xNzZDMjI4LjgxMSAyNDYuNzQ5IDE5OC42MSAyNDIuMzUgMTYxLjM1NSAyNDIuMzVDMTI0LjA5OSAyNDIuMzUgOTMuODk3NyAyNDYuNzQ5IDkzLjg5NzcgMjUyLjE3NkM5My44OTc3IDI1Ny42MDIgMTI0LjA5OSAyNjIuMDAxIDE2MS4zNTUgMjYyLjAwMVpcIlxuICAgICAgICBmaWxsPVwiI0U2RTdFOFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0xODUuNjY0IDI0LjAxMzhDMTg1Ljc0OSAyNC4yMDYgMTg1LjgxNCAyNC40MDY4IDE4NS44NTcgMjQuNjEyN0wxODcuMTg2IDMwLjY0MThMMTg1LjczNSAzMC45NTY0QzE4NC4yODMgMzEuMjgxMiAxODIuODUyIDMxLjYyNjMgMTgxLjQzMSAzMS45NzE0TDE4MC4xMzIgMjUuODIwNUMxNzkuOTc5IDI1LjExNDEgMTgwLjA5MiAyNC4zNzYgMTgwLjQ0OSAyMy43NDc4QzE4MC44MDcgMjMuMTE5NiAxODEuMzg0IDIyLjY0NTUgMTgyLjA3IDIyLjQxNjVDMTgyLjc1NSAyMi4xODc2IDE4My41MDEgMjIuMjE5OCAxODQuMTY1IDIyLjUwNzFDMTg0LjgyOCAyMi43OTQ0IDE4NS4zNjIgMjMuMzE2NSAxODUuNjY0IDIzLjk3MzJWMjQuMDEzOFpcIlxuICAgICAgICBmaWxsPVwid2hpdGVcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMTgxLjQzMSAzMi41MTk1QzE4MS4zMzggMzIuNTIxNSAxODEuMjQ3IDMyLjQ5NjggMTgxLjE2NyAzMi40NDg1QzE4MS4wNTEgMzIuMzczNSAxODAuOTY4IDMyLjI1NzUgMTgwLjkzNCAzMi4xMjM3TDE3OS42NTUgMjUuOTYyNkMxNzkuNDgxIDI1LjEzNjIgMTc5LjYxNyAyNC4yNzQ2IDE4MC4wMzggMjMuNTQyMUMxODAuNDU4IDIyLjgwOTYgMTgxLjEzMyAyMi4yNTcyIDE4MS45MzQgMjEuOTkwMUMxODIuNzM1IDIxLjcyMyAxODMuNjA3IDIxLjc2IDE4NC4zODIgMjIuMDkzOEMxODUuMTU4IDIyLjQyNzcgMTg1Ljc4NCAyMy4wMzUyIDE4Ni4xNDEgMjMuODAwN0MxODYuMjQ0IDI0LjAyNDggMTg2LjMyMyAyNC4yNTk3IDE4Ni4zNzQgMjQuNTAxTDE4Ny42OTQgMzAuNTMwMUMxODcuNzEgMzAuNTk3NCAxODcuNzEyIDMwLjY2NzQgMTg3LjcgMzAuNzM1NUMxODcuNjg4IDMwLjgwMzcgMTg3LjY2MiAzMC44Njg2IDE4Ny42MjMgMzAuOTI2QzE4Ny41ODggMzAuOTgzMiAxODcuNTQgMzEuMDMyIDE4Ny40ODQgMzEuMDY4OEMxODcuNDI4IDMxLjEwNTYgMTg3LjM2NCAzMS4xMjk2IDE4Ny4yOTggMzEuMTM5MUwxODUuOTY4IDMxLjQyMzNIMTg1Ljg1N0MxODQuNDE1IDMxLjczOCAxODIuOTc0IDMyLjA5MzIgMTgxLjU4MyAzMi40MzgzTDE4MS40MzEgMzIuNTE5NVpNMTgzLjAwNSAyMi44MjYzQzE4Mi44MTMgMjIuODI2NSAxODIuNjIzIDIyLjg0NjkgMTgyLjQzNiAyMi44ODcyQzE4MS44MzIgMjMuMDQ4IDE4MS4zMTIgMjMuNDM0MyAxODAuOTgzIDIzLjk2NjZDMTgwLjY1NSAyNC40OTkgMTgwLjU0MyAyNS4xMzcgMTgwLjY3IDI1Ljc0OTVMMTgxLjg2OCAzMS4zODI3QzE4My4xMTYgMzEuMDU3OSAxODQuMzg1IDMwLjc0MzMgMTg1LjY3NCAzMC40NTkxSDE4NS43NzVMMTg2LjYyOCAzMC4yNjYyTDE4NS40MSAyNC43MzQ1QzE4NS4zNzMgMjQuNTY2OSAxODUuMzE4IDI0LjQwMzcgMTg1LjI0OCAyNC4yNDczQzE4NS4wNTQgMjMuODE2NCAxODQuNzM5IDIzLjQ1MTkgMTg0LjM0IDIzLjE5OTJDMTgzLjk0MSAyMi45NDY1IDE4My40NzcgMjIuODE2OCAxODMuMDA1IDIyLjgyNjNaXCJcbiAgICAgICAgZmlsbD1cIiMyMzFGMjBcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMTAwLjg1IDEwOC41MjNDMTAzLjc5NCAxMjEuNzk5IDE0OC42ODcgMTIzLjExOCAyMDEuMTAyIDExMS40NjZDMjUzLjUxNyA5OS44MTQgMjkzLjYyOSA3OS42MDUzIDI5MC42NzYgNjYuMzI5MUMyODcuNzIyIDUzLjA1MjkgMjM4LjE0OSAxOS4zMDQyIDE4NS43NDUgMzAuOTU2NEMxMzMuMzQxIDQyLjYwODYgOTcuODk2NyA5NS4yNDY1IDEwMC44NSAxMDguNTIzWlwiXG4gICAgICAgIGZpbGw9XCIjQzRGQzY4XCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTEzNy4yNzkgMTE5LjkyMUMxMzUuNjE0IDExOS45MjEgMTMzLjk5IDExOS45MjEgMTMyLjQwNyAxMTkuODVDMTEzLjIyMyAxMTkuMjkyIDEwMS44MzUgMTE1LjMwMyAxMDAuMzUzIDEwOC42ODVDOTcuMzY5IDk1LjI2NjggMTMyLjkyNCA0Mi4yMjI5IDE4NS42MTMgMzAuNTMwMUMyMzguOTkyIDE4LjU5MzcgMjg4LjI2IDUzLjAwMjIgMjkxLjE3MyA2Ni4yMTc1QzI5NC4yMTggNzkuOTgwOSAyNTQuNzE0IDEwMC4wNjggMjAxLjIxNCAxMTEuOTY0QzE3Ny45NCAxMTcuMTQgMTU1LjQ3OCAxMTkuOTIxIDEzNy4yNzkgMTE5LjkyMVpNMTAxLjM0OCAxMDguNDExQzEwMi42OTggMTE0LjUwMSAxMTQuMDI1IDExOC4yOTcgMTMyLjQzNyAxMTguODM1QzE1MS4zMzYgMTE5LjM4MyAxNzUuNjg2IDExNi42MDIgMjAwLjk5IDExMC45NjlDMjUzLjA2IDk5LjM5NzkgMjkzLjA2MSA3OS40MjI3IDI5MC4xNzggNjYuNDQwOEMyODguNzY4IDYwLjA4NjkgMjc1LjgwNiA0OC4zNzM4IDI1Ni41NDEgMzkuNzU2NUMyNDMuMTQzIDMzLjc1NzggMjE2LjE0NCAyNC43MTQyIDE4NS44MzYgMzEuNDQzNkMxMzMuNjc1IDQzLjA0NTEgOTguNDU1IDk1LjIzNjQgMTAxLjM0OCAxMDguNDExWlwiXG4gICAgICAgIGZpbGw9XCIjMjMxRjIwXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTI5MC42NzYgNjYuMzI5MkMyOTMuNTU4IDc5LjI5MDcgMjU1LjQwNCA5OC44NTk5IDIwNC44MDcgMTEwLjYyNEMyMDMuNTg5IDExMC45MTggMjAyLjM1IDExMS4xOTIgMjAxLjExMiAxMTEuNDc2TDE5OC40ODMgMTEyLjA0NUMxNDcuMTk1IDEyMy4wNjggMTAzLjc0MyAxMjEuNTc2IDEwMC44NCAxMDguNTIzQzk3LjkzNzQgOTUuNDY5OCAxMzYuODkzIDc1LjU5NjEgMTg4LjIzMiA2My44NjI3TDE5MC40MTQgNjMuMzc1NUwxOTQuMjIgNjIuNTQzMkMyNDUuMDAxIDUxLjgxNDcgMjg3Ljc5MyA1My4zNzc4IDI5MC42NzYgNjYuMzI5MlpcIlxuICAgICAgICBmaWxsPVwiIzIzMUYyMFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0xMzcuMzE5IDExOS45MzFDMTE2LjEyNiAxMTkuOTMxIDEwMi4wMDggMTE2LjA5NSAxMDAuMzUzIDEwOC42MzRDOTcuMzA4MSA5NS4xNzU1IDEzNS44NzggNzUuMzAxOCAxODguMTIgNjMuMzk1OEwxOTAuMzAyIDYyLjg5ODVMMTk0LjExOSA2Mi4wNzYzQzI0NS42IDUxLjE2NTEgMjg4LjIzIDUyLjk0MTMgMjkxLjE2MyA2Ni4yMTc1QzI5NC4wOTYgNzkuNDkzNyAyNTYuMjI3IDk5LjE5NDkgMjA0Ljg4OCAxMTEuMTIxQzIwMy42NyAxMTEuNDE1IDIwMi40MzIgMTExLjY5IDIwMS4xOTMgMTExLjk2NEMyMDAuMzIgMTEyLjE2NyAxOTkuNDM3IDExMi4zNDkgMTk4LjU2NCAxMTIuNTQyQzE3NS41MDQgMTE3LjQ3NSAxNTQuMTc4IDExOS45MzEgMTM3LjMxOSAxMTkuOTMxWk0yNTQuMjk4IDU1Ljk4NjNDMjM3LjY5MyA1NS45ODYzIDIxNi43NDMgNTguMzAwNSAxOTQuMzMyIDYzLjA5MTNMMTkwLjUyNiA2My45MjM2QzE4OS43ODUgNjQuMDc1OSAxODkuMDY0IDY0LjI0ODQgMTg4LjM1NCA2NC40MTA4QzEzNy42MDQgNzYuMDAyMSA5OC41MjYgOTUuNzU0IDEwMS4zMzggMTA4LjQ0MkMxMDQuMTQ5IDEyMS4xMjkgMTQ3LjY4MiAxMjIuNDc5IDE5OC4zODIgMTExLjU3OEwyMDEgMTExLjAwOUMyMDIuMjM5IDExMC43MzIgMjAzLjQ2NyAxMTAuNDQ4IDIwNC42ODUgMTEwLjE1N0MyNTQuNjAzIDk4LjU1NTQgMjkyLjk5IDc4Ljk1NTggMjkwLjE3OCA2Ni41MTE5QzI4OC42NDYgNTkuNTQ5IDI3NC44MTEgNTYuMDA2NiAyNTQuMjk4IDU2LjAwNjZWNTUuOTg2M1pcIlxuICAgICAgICBmaWxsPVwiIzIzMUYyMFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yNjcuMTc4IDU2LjAwNjZDMjU2LjMwOCA1NC45OTE2IDI0Mi4yOTEgNTUuMzc3MyAyMjYuNDc3IDU3LjIyNDZDMjE2Ljk0OCA0NC4zNjE3IDIwMy40NTIgMzQuOTkxOCAxODguMDY5IDMwLjU2MDZDMjI2LjQyNiAyNC4wOTUgMjU2LjI4OCA0Ni4zMjM1IDI2Ny4xNzggNTYuMDA2NlpcIlxuICAgICAgICBmaWxsPVwid2hpdGVcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMjI2LjQ3NyA1Ny43MzIxQzIyNi4zOTcgNTcuNzMyOSAyMjYuMzE3IDU3LjcxNSAyMjYuMjQ1IDU3LjY3OTdDMjI2LjE3MyA1Ny42NDQ1IDIyNi4xMSA1Ny41OTI5IDIyNi4wNjEgNTcuNTI5MUMyMTYuNjE1IDQ0Ljc2MDggMjAzLjIyOCAzNS40NTgxIDE4Ny45NjggMzEuMDU3OUMxODcuODUzIDMxLjAzMjEgMTg3Ljc1MSAzMC45Njc1IDE4Ny42NzkgMzAuODc0OUMxODcuNjA3IDMwLjc4MjQgMTg3LjU2OSAzMC42Njc3IDE4Ny41NzIgMzAuNTUwNEMxODcuNTczIDMwLjQzMzIgMTg3LjYxNSAzMC4zMiAxODcuNjkxIDMwLjIzMDlDMTg3Ljc2NyAzMC4xNDE3IDE4Ny44NzIgMzAuMDgyMyAxODcuOTg4IDMwLjA2MzJDMjI2LjQ4NyAyMy41NjcyIDI1Ni40MyA0NS43NzU0IDI2Ny41MTMgNTUuNjIwOUMyNjcuNTkyIDU1LjY5MjIgMjY3LjY0NyA1NS43ODU5IDI2Ny42NyA1NS44ODk0QzI2Ny42OTQgNTUuOTkyOSAyNjcuNjg1IDU2LjEwMTEgMjY3LjY0NSA1Ni4xOTk1QzI2Ny42MDMgNTYuMjk4NyAyNjcuNTI5IDU2LjM4MTcgMjY3LjQzNiA1Ni40MzY1QzI2Ny4zNDMgNTYuNDkxMyAyNjcuMjM1IDU2LjUxNDkgMjY3LjEyOCA1Ni41MDRDMjU2LjE5NiA1NS40ODkgMjQyLjE1OSA1NS44OTUgMjI2LjUyOCA1Ny43MzIxSDIyNi40NzdaTTE5MC40MjQgMzAuNzEyOEMyMDQuOTA2IDM1LjQyNzMgMjE3LjU3OCA0NC40OTg0IDIyNi43MSA1Ni42ODY3QzI0MS41NyA1NC45NjEyIDI1NC45NzggNTQuNTQ1IDI2NS42NzYgNTUuMzU3QzI1NC4xMTUgNDUuNDEgMjI2LjE0MiAyNS42ODg2IDE5MC40MjQgMzAuNzEyOFpcIlxuICAgICAgICBmaWxsPVwiIzIzMUYyMFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0xNzkuMDk3IDMyLjY3MThDMTc5LjA5NyAzMi42NzE4IDE2My41NTcgNDUuNjIzMSAxNTcuNjcgNzIuMjU2N0MxNDIuMjQyIDc3LjI1MDUgMTI5LjAyNyA4Mi44MTI4IDExOS4yMzIgODguMzc1QzEyMi4xMTcgODAuMTc2MSAxMjYuMjIzIDcyLjQ1OTggMTMxLjQxMiA2NS40ODY3QzE0MS42NzQgNTEuODQ1MSAxNTkuMDMgMzcuNTg0NCAxNzkuMDk3IDMyLjY3MThaXCJcbiAgICAgICAgZmlsbD1cIndoaXRlXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTExOS4yMzIgODguODYyMUMxMTkuMTE0IDg4Ljg2MjIgMTE5IDg4LjgyMjkgMTE4LjkwNyA4OC43NTA1QzExOC44MjggODguNjg0IDExOC43NzEgODguNTk1IDExOC43NDQgODguNDk1MkMxMTguNzE3IDg4LjM5NTQgMTE4LjcyIDg4LjI4OTcgMTE4Ljc1NSA4OC4xOTIyQzEyMS42MiA3OS45NDA1IDEyNS43MjcgNzIuMTc0MyAxMzAuOTM1IDY1LjE2MTlDMTQzLjI2NyA0OC44NTA4IDE2MS4yMTIgMzYuNTE4NiAxNzguOTU1IDMyLjE3NDRDMTc5LjA2NSAzMi4xNTAyIDE3OS4xODEgMzIuMTYzNyAxNzkuMjgzIDMyLjIxMjhDMTc5LjM4NSAzMi4yNjE5IDE3OS40NjggMzIuMzQzNyAxNzkuNTE4IDMyLjQ0NTNDMTc5LjU2OCAzMi41NDY5IDE3OS41ODMgMzIuNjYyMyAxNzkuNTYgMzIuNzczMkMxNzkuNTM3IDMyLjg4NDIgMTc5LjQ3OCAzMi45ODQyIDE3OS4zOTEgMzMuMDU3NEMxNzkuMjM5IDMzLjE4OTQgMTYzLjkxMiA0Ni4yNTI0IDE1OC4xMzcgNzIuMzQ4MUMxNTguMTE2IDcyLjQzMzMgMTU4LjA3NSA3Mi41MTIgMTU4LjAxNiA3Mi41Nzc0QzE1Ny45NTggNzIuNjQyOSAxNTcuODg0IDcyLjY5MzEgMTU3LjgwMiA3Mi43MjM2QzE0Mi41NzcgNzcuNjQ2NCAxMjkuMzExIDgzLjIwODYgMTE5LjQ0NSA4OC44MDEyQzExOS4zOCA4OC44MzcgMTE5LjMwNyA4OC44NTc4IDExOS4yMzIgODguODYyMVpNMTc3LjI4IDMzLjY2NjRDMTYwLjM3IDM4LjM1NTcgMTQzLjUyMSA1MC4yNDE0IDEzMS43NjcgNjUuNzcwOUMxMjYuODg4IDcyLjMzNTEgMTIyLjk4IDc5LjU2ODYgMTIwLjE2NiA4Ny4yNDgzQzEyOS45MiA4MS44ODkxIDE0Mi42NjggNzYuNTcwNSAxNTcuMjQ0IDcxLjhDMTU5LjU3NyA2MS4xNjQ2IDE2My45NyA1MS4wODg5IDE3MC4xNzUgNDIuMTQxN0MxNzIuMjkxIDM5LjExNDMgMTc0LjY2OCAzNi4yNzg0IDE3Ny4yOCAzMy42NjY0WlwiXG4gICAgICAgIGZpbGw9XCIjMjMxRjIwXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTIyMy4wMzYgMjI2LjgwMUwyMjQuODEyIDIyNi4zMjRDMjI2LjQ2MSAyMjUuODUxIDIyOC4xNzMgMjI1LjYzMiAyMjkuODg3IDIyNS42NzRIMjMwLjIxMkwyMDQuODM3IDExMC41OTNMMTk0LjIyIDYyLjU3MzdDMTkyLjk1MiA2Mi44Mjc0IDE5MS42OTMgNjMuMTExNiAxOTAuNDE0IDYzLjM4NTdMMTg4LjIzMiA2My44OTMyTDE5OC40OTMgMTEyLjA0NUwyMjIuOTQ1IDIyNi44MzFMMjIzLjAzNiAyMjYuODAxWlwiXG4gICAgICAgIGZpbGw9XCJ3aGl0ZVwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yMjIuOTQ1IDIyNy4zMzlDMjIyLjg1NSAyMjcuMzQgMjIyLjc2NyAyMjcuMzE2IDIyMi42OTEgMjI3LjI2OEMyMjIuNjMxIDIyNy4yMzMgMjIyLjU3OCAyMjcuMTg2IDIyMi41MzYgMjI3LjEzQzIyMi40OTQgMjI3LjA3NCAyMjIuNDY0IDIyNy4wMTEgMjIyLjQ0NyAyMjYuOTQzTDE4Ny43NzUgNjMuOTk0N0MxODcuNzYgNjMuOTMwNyAxODcuNzU4IDYzLjg2NDMgMTg3Ljc2OSA2My43OTk1QzE4Ny43NzkgNjMuNzM0NyAxODcuODAzIDYzLjY3MjYgMTg3LjgzOCA2My42MTY5QzE4Ny44NzMgNjMuNTYxMiAxODcuOTE4IDYzLjUxMyAxODcuOTcyIDYzLjQ3NTFDMTg4LjAyNiA2My40MzcxIDE4OC4wODYgNjMuNDEwMiAxODguMTUxIDYzLjM5NThMMTg4LjUxNiA2My4zMTQ2TDE5MC4zNTMgNjIuODg4M0wxOTEuNzU0IDYyLjU4MzhMMTk0LjE1OSA2Mi4wNzYzQzE5NC4yOSA2Mi4wNDkxIDE5NC40MjYgNjIuMDc0MyAxOTQuNTM4IDYyLjE0NjVDMTk0LjY1IDYyLjIxODYgMTk0LjcyOSA2Mi4zMzIgMTk0Ljc1OCA2Mi40NjJMMjMwLjY5OSAyMjUuNjAzQzIzMC43MTkgMjI1LjY4MSAyMzAuNzE5IDIyNS43NjIgMjMwLjcgMjI1Ljg0QzIzMC42OCAyMjUuOTE4IDIzMC42NDIgMjI1Ljk5IDIzMC41ODggMjI2LjA1QzIzMC41MzIgMjI2LjEwOCAyMzAuNDY0IDIyNi4xNTMgMjMwLjM4OCAyMjYuMTgyQzIzMC4zMTMgMjI2LjIxIDIzMC4yMzIgMjI2LjIyIDIzMC4xNTEgMjI2LjIxMkgyMjkuODU3QzIyOC4yMDYgMjI2LjE3NCAyMjYuNTYgMjI2LjM4OSAyMjQuOTc1IDIyNi44NTFMMjIzLjQ5MyAyMjcuMjM3TDIyMy4yMzkgMjI3LjMwOEgyMjMuMTM4TDIyMi45NDUgMjI3LjMzOVpNMTg4Ljc5IDY0LjI2ODdMMjIzLjMgMjI2LjE5MkwyMjQuNjYgMjI1LjgzNkMyMjYuMjM0IDIyNS4zOTggMjI3Ljg1OCAyMjUuMTY2IDIyOS40OTIgMjI1LjE0NkwxOTMuODY1IDYzLjE3MjVMMTkxLjk2NyA2My41Nzg1TDE5MC41NTYgNjMuODgzTDE4OC43OSA2NC4yNjg3WlwiXG4gICAgICAgIGZpbGw9XCIjMjMxRjIwXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTIyMy45MDkgMjUyLjc3NUMyMjMuNjEgMjUyLjc3NCAyMjMuMzE1IDI1Mi43MDcgMjIzLjA0NSAyNTIuNTc5QzIyMi43NzQgMjUyLjQ1MSAyMjIuNTM2IDI1Mi4yNjUgMjIyLjM0NiAyNTIuMDM0TDE0MC43OTEgMTUzQzE0MC40NTIgMTUyLjU4NCAxNDAuMjkxIDE1Mi4wNSAxNDAuMzQ0IDE1MS41MTZDMTQwLjM5OCAxNTAuOTgyIDE0MC42NjEgMTUwLjQ5IDE0MS4wNzUgMTUwLjE1QzE0MS40OSAxNDkuODA5IDE0Mi4wMjMgMTQ5LjY0NiAxNDIuNTU3IDE0OS42OTdDMTQzLjA5MiAxNDkuNzQ4IDE0My41ODQgMTUwLjAwOSAxNDMuOTI3IDE1MC40MjJMMjI1LjQ4MiAyNDkuNDI1QzIyNS43MjcgMjQ5LjcyMyAyMjUuODgyIDI1MC4wODMgMjI1LjkyOSAyNTAuNDY2QzIyNS45NzYgMjUwLjg0OCAyMjUuOTEzIDI1MS4yMzYgMjI1Ljc0OCAyNTEuNTg0QzIyNS41ODMgMjUxLjkzMiAyMjUuMzIzIDI1Mi4yMjUgMjI0Ljk5NyAyNTIuNDMxQzIyNC42NzIgMjUyLjYzNiAyMjQuMjk0IDI1Mi43NDUgMjIzLjkwOSAyNTIuNzQ0VjI1Mi43NzVaXCJcbiAgICAgICAgZmlsbD1cIiMyMzFGMjBcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMTQxLjE4NyAyNTAuMzA4QzE0MC43NjkgMjUwLjMwOSAxNDAuMzYyIDI1MC4xODEgMTQwLjAxOSAyNDkuOTQzQzEzOS44MDEgMjQ5Ljc4OSAxMzkuNjE1IDI0OS41OTQgMTM5LjQ3MyAyNDkuMzY4QzEzOS4zMyAyNDkuMTQyIDEzOS4yMzQgMjQ4Ljg5MSAxMzkuMTg4IDI0OC42MjhDMTM5LjE0MyAyNDguMzY1IDEzOS4xNSAyNDguMDk1IDEzOS4yMDkgMjQ3LjgzNUMxMzkuMjY4IDI0Ny41NzUgMTM5LjM3OCAyNDcuMzI5IDEzOS41MzIgMjQ3LjExMUwxNzUuNzU3IDE5NS41MDhDMTc1LjkxMSAxOTUuMjkgMTc2LjEwNiAxOTUuMTAzIDE3Ni4zMzEgMTk0Ljk2QzE3Ni41NTYgMTk0LjgxNyAxNzYuODA3IDE5NC43MTkgMTc3LjA3IDE5NC42NzNDMTc3LjMzMyAxOTQuNjI3IDE3Ny42MDMgMTk0LjYzMyAxNzcuODYzIDE5NC42OTFDMTc4LjEyNCAxOTQuNzQ5IDE3OC4zNzEgMTk0Ljg1OCAxNzguNTg5IDE5NS4wMTFDMTc4LjgwOCAxOTUuMTY0IDE3OC45OTQgMTk1LjM1OSAxNzkuMTM3IDE5NS41ODRDMTc5LjI4MSAxOTUuODA5IDE3OS4zNzggMTk2LjA2MSAxNzkuNDI0IDE5Ni4zMjRDMTc5LjQ3MSAxOTYuNTg3IDE3OS40NjUgMTk2Ljg1NiAxNzkuNDA3IDE5Ny4xMTdDMTc5LjM0OSAxOTcuMzc3IDE3OS4yNCAxOTcuNjI0IDE3OS4wODcgMTk3Ljg0M0wxNDIuODUxIDI0OS40MjVDMTQyLjY2NiAyNDkuNjk2IDE0Mi40MTcgMjQ5LjkxOCAxNDIuMTI3IDI1MC4wNzFDMTQxLjgzOCAyNTAuMjI1IDE0MS41MTUgMjUwLjMwNiAxNDEuMTg3IDI1MC4zMDhaXCJcbiAgICAgICAgZmlsbD1cIiMyMzFGMjBcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMTQ1LjU3MSAxNDMuNjExSDk0LjMwMzdDOTQuMzAzNyAxNDMuNjExIDk0LjA5MDUgMTgxLjExNiAxMTEuNjUgMjAxLjI0M0MxMjkuMjA5IDIyMS4zNyAxNTIuMTY5IDIyMS4zODEgMTU4Ljc0NiAyMjEuNjA0QzE2NS4zMjMgMjIxLjgyNyAxODguMSAyMjEuNjA0IDE4OC4xIDIyMS42MDRDMTgxLjM2NiAyMTkuNzkzIDE3NS4xMTYgMjE2LjUxNyAxNjkuNzk2IDIxMi4wMDlDMTY0LjQ3NSAyMDcuNTAxIDE2MC4yMTcgMjAxLjg3NCAxNTcuMzI1IDE5NS41MjlDMTQ3LjEwNCAxNzMuNjI1IDE0NS41NzEgMTQzLjYxMSAxNDUuNTcxIDE0My42MTFaXCJcbiAgICAgICAgZmlsbD1cIiNDNEZDNjhcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMTY5LjIzMSAyMjIuMjAzQzE2NC44NzcgMjIyLjIwMyAxNjAuODc4IDIyMi4yMDMgMTU4LjY5NSAyMjIuMTExSDE1Ny45ODVDMTUwLjY0NiAyMjEuODk4IDEyOC4zMTYgMjIxLjIzOSAxMTEuMjM0IDIwMS42MDhDOTMuNzg2IDE4MS41NjIgOTMuNzk2MiAxNDQuMDE3IDkzLjc5NjIgMTQzLjY0MkM5My43OTg3IDE0My41MDggOTMuODUzIDE0My4zOCA5My45NDc3IDE0My4yODZDOTQuMDQyMyAxNDMuMTkxIDk0LjE2OTkgMTQzLjEzNyA5NC4zMDM3IDE0My4xMzRIMTQ1LjU3MUMxNDUuNzAxIDE0My4xMzQgMTQ1LjgyNSAxNDMuMTgzIDE0NS45MiAxNDMuMjcyQzE0Ni4wMTQgMTQzLjM2MSAxNDYuMDcxIDE0My40ODIgMTQ2LjA3OSAxNDMuNjExQzE0Ni4wNzkgMTQzLjkxNiAxNDcuNzIzIDE3My43ODcgMTU3LjgxMiAxOTUuMzc2QzE2MC42ODkgMjAxLjYyNyAxNjQuODk2IDIwNy4xNzQgMTcwLjE0IDIxMS42MjlDMTc1LjM4NCAyMTYuMDgzIDE4MS41MzggMjE5LjMzOSAxODguMTcxIDIyMS4xNjdDMTg4LjI5MyAyMjEuMTkyIDE4OC40MDEgMjIxLjI2IDE4OC40NzYgMjIxLjM1OUMxODguNTUxIDIyMS40NTggMTg4LjU4NyAyMjEuNTgyIDE4OC41NzcgMjIxLjcwNUMxODguNTY1IDIyMS44MyAxODguNTA3IDIyMS45NDcgMTg4LjQxNiAyMjIuMDMyQzE4OC4zMjQgMjIyLjExOCAxODguMjA1IDIyMi4xNjggMTg4LjA3OSAyMjIuMTcyQzE4Ny45MjcgMjIyLjExMSAxNzcuODY5IDIyMi4yMDMgMTY5LjIzMSAyMjIuMjAzWk05NC44MjEzIDE0NC4xMTlDOTQuODgyMiAxNDguNjQ2IDk1Ljg5NzIgMTgyLjQxNSAxMTEuOTk1IDIwMC45NTlDMTI4Ljc4MyAyMjAuMjQ0IDE1MC43ODggMjIwLjg5MyAxNTguMDE1IDIyMS4xMDdIMTU4LjczNkMxNjMuNjg5IDIyMS4yNjkgMTc4LjEwMiAyMjEuMTc4IDE4NC43IDIyMS4xMDdDMTc4LjYxNCAyMTguOTMyIDE3My4wMjMgMjE1LjU2OSAxNjguMjUgMjExLjIxMkMxNjMuNDc3IDIwNi44NTYgMTU5LjYxOCAyMDEuNTk0IDE1Ni44OTkgMTk1LjczMkMxNDcuNDI5IDE3NS41MDMgMTQ1LjM0OCAxNDguMDI3IDE0NS4wOTQgMTQ0LjEwOUw5NC44MjEzIDE0NC4xMTlaXCJcbiAgICAgICAgZmlsbD1cIiMyMzFGMjBcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMTQ4LjMwMiAyMjAuODIyQzE0OC4zMDIgMjIwLjgyMiAxNjQuNjMzIDIxOC4wODIgMTcwLjMyNyAyMDUuODIxSDIyMS44NzlDMjIxLjg3OSAyMDUuODIxIDIxMy4xMiAyMTcuMzYxIDIwOC43MzUgMjE5Ljg0OEMyMDQuMzUgMjIyLjMzNSAxODguMDY5IDIyMS42MDQgMTg4LjA2OSAyMjEuNjA0QzE4OC4wNjkgMjIxLjYwNCAxNTQuNDkzIDIyMC44MjIgMTQ4LjMwMiAyMjAuODIyWlwiXG4gICAgICAgIGZpbGw9XCIjQzRGQzY4XCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTE5My4zNzggMjIyLjIxM0MxOTAuNDc1IDIyMi4yMTMgMTg4LjMwMyAyMjIuMTIxIDE4OC4wNDkgMjIyLjEwMUMxODcuNzk1IDIyMi4wODEgMTU0LjQxMiAyMjEuMzMgMTQ4LjMwMiAyMjEuMzNDMTQ4LjE3NCAyMjEuMzMgMTQ4LjA1MSAyMjEuMjgyIDE0Ny45NTYgMjIxLjE5NkMxNDcuODYyIDIyMS4xMDkgMTQ3LjgwNCAyMjAuOTkgMTQ3Ljc5NCAyMjAuODYzQzE0Ny43ODIgMjIwLjczNiAxNDcuODIgMjIwLjYwOSAxNDcuOSAyMjAuNTA5QzE0Ny45NzkgMjIwLjQwOCAxNDguMDk0IDIyMC4zNDMgMTQ4LjIyIDIyMC4zMjVDMTQ4LjM3MyAyMjAuMzI1IDE2NC4zNDkgMjE3LjQ3MyAxNjkuODcgMjA1LjYwN0MxNjkuOTA5IDIwNS41MTkgMTY5Ljk3MyAyMDUuNDQzIDE3MC4wNTQgMjA1LjM5MUMxNzAuMTM1IDIwNS4zMzggMTcwLjIzIDIwNS4zMTEgMTcwLjMyNyAyMDUuMzEzSDIyMS44NzlDMjIxLjk3NCAyMDUuMzEzIDIyMi4wNjcgMjA1LjMzOSAyMjIuMTQ4IDIwNS4zOUMyMjIuMjI5IDIwNS40NCAyMjIuMjk0IDIwNS41MTIgMjIyLjMzNiAyMDUuNTk3QzIyMi4zNzggMjA1LjY4MSAyMjIuMzk2IDIwNS43NzUgMjIyLjM4NyAyMDUuODY5QzIyMi4zNzggMjA1Ljk2MiAyMjIuMzQyIDIwNi4wNTEgMjIyLjI4NSAyMDYuMTI1QzIyMS45MyAyMDYuNjAyIDIxMy40MDQgMjE3Ljc4NyAyMDguOTg4IDIyMC4yODRDMjA2LjEyNiAyMjEuOTA4IDE5OC41ODUgMjIyLjIxMyAxOTMuMzc4IDIyMi4yMTNaTTE1Mi4xNzkgMjIwLjM1NUMxNjIuOTE4IDIyMC41MDggMTg3Ljc5NSAyMjEuMDg2IDE4OC4wNzkgMjIxLjA5NkMxODguMzY0IDIyMS4xMDYgMjA0LjMxOSAyMjEuNzg3IDIwOC40OTEgMjE5LjQwMUMyMTIuMDU0IDIxNy4zNzEgMjE4Ljc3MyAyMDguOTg3IDIyMC44NDQgMjA2LjMyOEgxNzAuNjUyQzE2Ni41NTEgMjE0Ljc5MyAxNTcuMzg2IDIxOC43NDIgMTUyLjE3OSAyMjAuMzU1WlwiXG4gICAgICAgIGZpbGw9XCIjMjMxRjIwXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTE3NS40NDMgMjU3LjM0MkMxNzUuMTQ1IDI1Ny4zNDIgMTc0Ljg1IDI1Ny4yNzcgMTc0LjU4IDI1Ny4xNTFDMTc0LjMxIDI1Ny4wMjUgMTc0LjA3MSAyNTYuODQgMTczLjg4IDI1Ni42MTFMOTIuMzY1IDE1Ny42MThDOTIuMDg4OCAxNTcuMjAyIDkxLjk3NTkgMTU2LjY5OCA5Mi4wNDc3IDE1Ni4yMDRDOTIuMTE5NiAxNTUuNzEgOTIuMzcxMyAxNTUuMjU5IDkyLjc1NDUgMTU0LjkzOUM5My4xMzc4IDE1NC42MTggOTMuNjI1OCAxNTQuNDUgOTQuMTI1MSAxNTQuNDY3Qzk0LjYyNDQgMTU0LjQ4NCA5NS4xIDE1NC42ODQgOTUuNDYwOCAxNTUuMDNMMTc3LjAxNiAyNTQuMDIzQzE3Ny4xODYgMjU0LjIyOSAxNzcuMzE0IDI1NC40NjYgMTc3LjM5MyAyNTQuNzIxQzE3Ny40NzEgMjU0Ljk3NyAxNzcuNDk5IDI1NS4yNDUgMTc3LjQ3MyAyNTUuNTExQzE3Ny40NDggMjU1Ljc3NyAxNzcuMzcgMjU2LjAzNSAxNzcuMjQ0IDI1Ni4yNzFDMTc3LjExOSAyNTYuNTA3IDE3Ni45NDggMjU2LjcxNiAxNzYuNzQyIDI1Ni44ODVDMTc2LjM3MyAyNTcuMTggMTc1LjkxNSAyNTcuMzQxIDE3NS40NDMgMjU3LjM0MlpcIlxuICAgICAgICBmaWxsPVwiIzIzMUYyMFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk05Mi43MjAyIDI1NC44ODZDOTIuMzAwNyAyNTQuODgxIDkxLjg5MjkgMjU0Ljc0NiA5MS41NTMgMjU0LjVDOTEuMTE1NCAyNTQuMTkgOTAuODE4NCAyNTMuNzE4IDkwLjcyNzEgMjUzLjE5QzkwLjYzNTggMjUyLjY2MSA5MC43NTc2IDI1Mi4xMTggOTEuMDY1OCAyNTEuNjc4TDEyNy4yOTEgMjAwLjA3NkMxMjcuNTk5IDE5OS42MzQgMTI4LjA3IDE5OS4zMzMgMTI4LjYgMTk5LjIzOUMxMjkuMTMxIDE5OS4xNDUgMTI5LjY3NiAxOTkuMjY1IDEzMC4xMTggMTk5LjU3M0MxMzAuNTU5IDE5OS44ODIgMTMwLjg2IDIwMC4zNTMgMTMwLjk1NSAyMDAuODgzQzEzMS4wNDkgMjAxLjQxMyAxMzAuOTI5IDIwMS45NTkgMTMwLjYyIDIwMi40TDk0LjM5NSAyNTQuMDIzQzk0LjIwNjMgMjU0LjI5MSA5My45NTU0IDI1NC41MSA5My42NjM4IDI1NC42NkM5My4zNzIxIDI1NC44MTEgOTMuMDQ4MyAyNTQuODg4IDkyLjcyMDIgMjU0Ljg4NlpcIlxuICAgICAgICBmaWxsPVwiIzIzMUYyMFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yOTMuMDUxIDIwNC44NTZDMjkzLjA0MyAyMTAuNzU3IDI5MC42OTMgMjE2LjQxNCAyODYuNTE4IDIyMC41ODNDMjgyLjM0MiAyMjQuNzUzIDI3Ni42ODMgMjI3LjA5NSAyNzAuNzgyIDIyNy4wOTVDMjY5LjIxOSAyMjcuMDkzIDI2Ny42NjIgMjI2LjkzIDI2Ni4xMzMgMjI2LjYwOEMyNjUuNTk1IDIyNi40ODYgMjY1LjA2NyAyMjYuMzU0IDI2NC41MzkgMjI2LjIwMkMyNjEuMzEgMjI1LjI1NiAyNTguMzM3IDIyMy41OTIgMjU1Ljg0MSAyMjEuMzM1QzI1My4zNDUgMjE5LjA3OSAyNTEuMzkyIDIxNi4yODcgMjUwLjEyNiAyMTMuMTY5QzI0OS42MzcgMjExLjk2NCAyNDkuMjU2IDIxMC43MTcgMjQ4Ljk5IDIwOS40NDRDMjQ4LjI2NyAyMDYuMDYyIDI0OC4zNDQgMjAyLjU1OCAyNDkuMjEyIDE5OS4yMUMyNTAuMDgxIDE5NS44NjMgMjUxLjcxOCAxOTIuNzY0IDI1My45OTQgMTkwLjE1OUMyNTQuMjM3IDE4OS44NzUgMjU0LjQ5MSAxODkuNjAxIDI1NC43NDUgMTg5LjM0N0MyNTguMTQ2IDE4NS44IDI2Mi42MzEgMTgzLjQ4NiAyNjcuNDkzIDE4Mi43N0MyNjguMjkzIDE4Mi42NDQgMjY5LjEgMTgyLjU2OSAyNjkuOTA5IDE4Mi41NDdDMjcwLjIwMyAxODIuNTQ3IDI3MC40ODcgMTgyLjU0NyAyNzAuNzgyIDE4Mi41NDdDMjc0LjUxNCAxODIuNTQ2IDI3OC4xODggMTgzLjQ4MyAyODEuNDYzIDE4NS4yNzNDMjg0LjczOSAxODcuMDYyIDI4Ny41MTMgMTg5LjY0NyAyODkuNTI5IDE5Mi43ODhDMjg5LjgzMyAxOTMuMjc1IDI5MC4xMjggMTkzLjgwMyAyOTAuNDAyIDE5NC4yOEMyOTIuMTU1IDE5Ny41MjkgMjkzLjA2NiAyMDEuMTY1IDI5My4wNTEgMjA0Ljg1NlpcIlxuICAgICAgICBmaWxsPVwid2hpdGVcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMjcwLjc4MiAyMjcuNjQzQzI2OS4xODUgMjI3LjY0MiAyNjcuNTk0IDIyNy40NzUgMjY2LjAzMSAyMjcuMTQ2QzI2NS40NzMgMjI3LjAyNCAyNjQuOTM1IDIyNi44OTIgMjY0LjM5NyAyMjYuNzNDMjYxLjEwNSAyMjUuNzUgMjU4LjA3NSAyMjQuMDQ0IDI1NS41MjkgMjIxLjczN0MyNTIuOTg0IDIxOS40MzEgMjUwLjk4OCAyMTYuNTgzIDI0OS42OSAyMTMuNDAzQzI0OS4xODUgMjEyLjE2OSAyNDguNzk1IDIxMC44OTEgMjQ4LjUyMyAyMDkuNTg2QzI0OC4xOTUgMjA4LjAzMSAyNDguMDI5IDIwNi40NDYgMjQ4LjAyNSAyMDQuODU2QzI0OC4wMjkgMTk5LjM1MiAyNTAuMDIzIDE5NC4wMzUgMjUzLjYzOCAxODkuODg1QzI1My44OTIgMTg5LjU5MSAyNTQuMTQ2IDE4OS4zMTcgMjU0LjQxIDE4OS4wNTNDMjU3Ljg5OSAxODUuNDM3IDI2Mi40ODMgMTgzLjA3MiAyNjcuNDUyIDE4Mi4zMjNDMjY4LjI3MyAxODIuMjAyIDI2OS4xIDE4Mi4xMjcgMjY5LjkyOSAxODIuMUgyNzAuODEyQzI3NC42MjYgMTgyLjEwMSAyNzguMzc5IDE4My4wNjIgMjgxLjcyNSAxODQuODk0QzI4NS4wNyAxODYuNzI2IDI4Ny45MDEgMTg5LjM3MSAyODkuOTU1IDE5Mi41ODVDMjkwLjI3IDE5My4wODIgMjkwLjU3NCAxOTMuNiAyOTAuODQ4IDE5NC4xMDhDMjkzLjI3NCAxOTguNjI2IDI5NC4xMDQgMjAzLjgzMiAyOTMuMjAzIDIwOC44ODFDMjkyLjMwMiAyMTMuOTMgMjg5LjcyNCAyMTguNTI3IDI4NS44ODUgMjIxLjkyOUMyODQuOTU5IDIyMi43NjcgMjgzLjk2IDIyMy41MjEgMjgyLjkwMSAyMjQuMTgyQzI3OS4yNjggMjI2LjQ1NSAyNzUuMDY3IDIyNy42NTUgMjcwLjc4MiAyMjcuNjQzWk0yNzAuNzgyIDE4My4wOTVIMjY5LjkyOUMyNjkuMTQxIDE4My4xMTkgMjY4LjM1NCAxODMuMTkgMjY3LjU3NCAxODMuMzA4QzI2Mi44MjcgMTg0LjAyNCAyNTguNDQ3IDE4Ni4yODEgMjU1LjExIDE4OS43MzNDMjU0Ljg2IDE4OS45OTcgMjU0LjYxNiAxOTAuMjYxIDI1NC4zNzkgMTkwLjUyNUMyNTEuOTc0IDE5My4yNzggMjUwLjMwMSAxOTYuNTkzIDI0OS41MTUgMjAwLjE2M0MyNDguNzI5IDIwMy43MzMgMjQ4Ljg1NSAyMDcuNDQ0IDI0OS44ODIgMjEwLjk1M0MyNTAuOTA5IDIxNC40NjIgMjUyLjgwMyAyMTcuNjU1IDI1NS4zODkgMjIwLjIzOUMyNTcuOTc2IDIyMi44MjIgMjYxLjE3MiAyMjQuNzEyIDI2NC42ODIgMjI1LjczNUMyNjUuMTk5IDIyNS44ODcgMjY1LjY5NyAyMjYuMDE5IDI2Ni4yMzQgMjI2LjEzMUMyNjcuNzI5IDIyNi40NDggMjY5LjI1MyAyMjYuNjA4IDI3MC43ODIgMjI2LjYwOEMyNzQuNTM1IDIyNi41OTkgMjc4LjIyMiAyMjUuNjIxIDI4MS40ODUgMjIzLjc2N0MyODQuNzQ5IDIyMS45MTMgMjg3LjQ3NyAyMTkuMjQ3IDI4OS40MDcgMjE2LjAyOEMyOTEuMzM2IDIxMi44MDkgMjkyLjQgMjA5LjE0NiAyOTIuNDk2IDIwNS4zOTRDMjkyLjU5MiAyMDEuNjQyIDI5MS43MTcgMTk3LjkyOSAyODkuOTU1IDE5NC42MTVDMjg5LjY5MSAxOTQuMTA4IDI4OS4zOTcgMTkzLjYgMjg5LjEwMiAxOTMuMTQzQzI4Ny4xNCAxOTAuMDYzIDI4NC40MzMgMTg3LjUyNiAyODEuMjMgMTg1Ljc3QzI3OC4wMjggMTg0LjAxNCAyNzQuNDM0IDE4My4wOTMgMjcwLjc4MiAxODMuMDk1WlwiXG4gICAgICAgIGZpbGw9XCIjMjMxRjIwXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTI2OC4wNjIgMTk2LjI4QzI2Ny45MyAxOTYuMzkxIDI2Ni42NzEgMTk3LjQ2NyAyNjQuODI0IDE5OS4wOTFDMjU5LjY5NSAyMDMuNTQ1IDI1NC43OTMgMjA4LjI1NCAyNTAuMTM3IDIxMy4yQzI0OS42NDcgMjExLjk5NSAyNDkuMjY2IDIxMC43NDggMjQ5IDIwOS40NzVDMjQ4LjI3OCAyMDYuMDkyIDI0OC4zNTQgMjAyLjU4OCAyNDkuMjIyIDE5OS4yNDFDMjUwLjA5MSAxOTUuODkzIDI1MS43MjggMTkyLjc5NCAyNTQuMDA0IDE5MC4xOUMyNTQuMjQ3IDE4OS45MDUgMjU0LjUwMSAxODkuNjMxIDI1NC43NTUgMTg5LjM3OEMyNTguNjcgMTkwLjIyNiAyNjIuMzY5IDE5MS44NjYgMjY1LjYyNiAxOTQuMTk5QzI2Ni40ODMgMTk0LjgzNyAyNjcuMjk3IDE5NS41MzIgMjY4LjA2MiAxOTYuMjhaXCJcbiAgICAgICAgZmlsbD1cIiNDNEZDNjhcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMjUwLjEyNiAyMTMuNzE3SDI1MC4wNDVDMjQ5Ljk2IDIxMy43MDQgMjQ5Ljg4IDIxMy42NjkgMjQ5LjgxMiAyMTMuNjE2QzI0OS43NDUgMjEzLjU2MyAyNDkuNjkyIDIxMy40OTMgMjQ5LjY2IDIxMy40MTNDMjQ5LjE1NSAyMTIuMTc5IDI0OC43NjQgMjEwLjkwMSAyNDguNDkyIDIwOS41OTZDMjQ4LjE2NSAyMDguMDQxIDI0Ny45OTggMjA2LjQ1NiAyNDcuOTk1IDIwNC44NjdDMjQ3Ljk5OSAxOTkuMzYyIDI0OS45OTIgMTk0LjA0NSAyNTMuNjA4IDE4OS44OTVDMjUzLjg2MiAxODkuNjExIDI1NC4xMTUgMTg5LjMyNyAyNTQuMzc5IDE4OS4wNjNDMjU0LjQzOSAxODguOTk5IDI1NC41MTUgMTg4Ljk1MyAyNTQuNTk5IDE4OC45MjhDMjU0LjY4MyAxODguOTAzIDI1NC43NzEgMTg4LjkwMSAyNTQuODU2IDE4OC45MjFDMjU4LjgzOSAxODkuNzkxIDI2Mi42MDMgMTkxLjQ2MyAyNjUuOTIgMTkzLjgzM0MyNjYuNzk0IDE5NC40NzUgMjY3LjYyOCAxOTUuMTcgMjY4LjQxNyAxOTUuOTE0QzI2OC41MDQgMTk1Ljk5OSAyNjguNTU5IDE5Ni4xMTIgMjY4LjU3IDE5Ni4yMzNDMjY4LjU4MSAxOTYuMzU0IDI2OC41NDggMTk2LjQ3NSAyNjguNDc4IDE5Ni41NzRDMjY4LjQ0NSAxOTYuNjMgMjY4LjQgMTk2LjY3OSAyNjguMzQ2IDE5Ni43MTZDMjY4LjEwMiAxOTYuOTE5IDI2Ni44OTQgMTk3Ljk1NCAyNjUuMTQ4IDE5OS40OTdDMjYwLjAzMiAyMDMuOTM3IDI1NS4xNDQgMjA4LjYzMiAyNTAuNTAyIDIxMy41NjVDMjUwLjQ1MyAyMTMuNjE0IDI1MC4zOTQgMjEzLjY1MyAyNTAuMzMgMjEzLjY3OUMyNTAuMjY1IDIxMy43MDYgMjUwLjE5NiAyMTMuNzE4IDI1MC4xMjYgMjEzLjcxN1pNMjU0LjkwNyAxODkuOTY2TDI1NC4zNzkgMTkwLjU0NUMyNTIuMTU3IDE5My4wODkgMjUwLjU1OCAxOTYuMTE2IDI0OS43MDkgMTk5LjM4NkMyNDguODU5IDIwMi42NTYgMjQ4Ljc4MyAyMDYuMDc5IDI0OS40ODcgMjA5LjM4M0MyNDkuNjg3IDIxMC4zNiAyNDkuOTYyIDIxMS4zMjEgMjUwLjMwOSAyMTIuMjU2QzI1NC41ODIgMjA3LjU5NyAyNjAuOTY3IDIwMS44MzIgMjY0LjUxOSAxOTguNzI2QzI2NS44MDggMTk3LjU4OSAyNjYuODAzIDE5Ni42OTYgMjY3LjM0MSAxOTYuMjU5QzI2Ni42OTQgMTk1LjY4NSAyNjYuMDE3IDE5NS4xNDYgMjY1LjMxMSAxOTQuNjQ1QzI2Mi4xOSAxOTIuNDA4IDI1OC42NTIgMTkwLjgxNyAyNTQuOTA3IDE4OS45NjZaXCJcbiAgICAgICAgZmlsbD1cIiMyMzFGMjBcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMjkwLjQwMiAxOTQuMzIxQzI4Ny43NzMgMTk0LjA2NyAyODUuNjMxIDE5OC4zODEgMjgzLjIxNSAxOTguNTAyQzI4MC4xNSAxOTguNTExIDI3Ny4wOTIgMTk4LjgwMyAyNzQuMDggMTk5LjM3NUMyNzEuOTM5IDE5OS44MDIgMjY4LjIwNCAxOTguNTUzIDI2OC4yMDQgMTk4LjU1M0wyNjcuOTggMTkzLjM0NkwyNjcuNTM0IDE4Mi44MzFDMjY4LjMzMyAxODIuNzA1IDI2OS4xNCAxODIuNjMgMjY5Ljk0OSAxODIuNjA4QzI3MC4yNDQgMTgyLjYwOCAyNzAuNTI4IDE4Mi42MDggMjcwLjgyMiAxODIuNjA4QzI3NC41NTUgMTgyLjYwNyAyNzguMjI4IDE4My41NDQgMjgxLjUwNCAxODUuMzM0QzI4NC43OCAxODcuMTIzIDI4Ny41NTMgMTg5LjcwNyAyODkuNTY5IDE5Mi44NDlDMjg5LjgzMyAxOTMuMzE2IDI5MC4xMjggMTkzLjgxMyAyOTAuNDAyIDE5NC4zMjFaXCJcbiAgICAgICAgZmlsbD1cIiNDNEZDNjhcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMjczLjAzNSAxOTkuOTc0QzI3MS4zMzEgMTk5Ljg5MiAyNjkuNjQ3IDE5OS41NzUgMjY4LjAzMSAxOTkuMDNDMjY3LjkzNCAxOTguOTk4IDI2Ny44NSAxOTguOTM3IDI2Ny43ODggMTk4Ljg1NUMyNjcuNzI2IDE5OC43NzQgMjY3LjY5MSAxOTguNjc2IDI2Ny42ODYgMTk4LjU3NEwyNjYuOTQ1IDE4Mi44NTFDMjY2Ljk0MSAxODIuNzI3IDI2Ni45ODEgMTgyLjYwNSAyNjcuMDYgMTgyLjUwOEMyNjcuMTM4IDE4Mi40MTEgMjY3LjI0OSAxODIuMzQ1IDI2Ny4zNzEgMTgyLjMyM0MyNjguMTk1IDE4Mi4yMDIgMjY5LjAyNiAxODIuMTI4IDI2OS44NTggMTgyLjFIMjcwLjc0MUMyNzQuNTY3IDE4Mi4wODkgMjc4LjMzNSAxODMuMDQ0IDI4MS42OTQgMTg0Ljg3N0MyODUuMDUyIDE4Ni43MSAyODcuODk0IDE4OS4zNjEgMjg5Ljk1NSAxOTIuNTg1QzI5MC4yNyAxOTMuMDgyIDI5MC41NzQgMTkzLjYgMjkwLjg0OCAxOTQuMTA4QzI5MC44OTYgMTk0LjE4NyAyOTAuOTIxIDE5NC4yNzkgMjkwLjkyMSAxOTQuMzcxQzI5MC45MjEgMTk0LjQ2NCAyOTAuODk2IDE5NC41NTUgMjkwLjg0OCAxOTQuNjM1QzI5MC43OTMgMTk0LjcwOCAyOTAuNzIgMTk0Ljc2NyAyOTAuNjM3IDE5NC44MDZDMjkwLjU1NCAxOTQuODQ0IDI5MC40NjMgMTk0Ljg2MyAyOTAuMzcxIDE5NC44NTlDMjg5LjIyNCAxOTQuNzM3IDI4OC4wMzcgMTk1LjgyMyAyODYuODkgMTk2Ljg4OUMyODUuNzQzIDE5Ny45NTQgMjg0LjU3NiAxOTkuMDEgMjgzLjI1NiAxOTkuMDYxQzI4MC4xOTEgMTk5LjA2NyAyNzcuMTMzIDE5OS4zNTYgMjc0LjEyMSAxOTkuOTIzQzI3My43NjEgMTk5Ljk3NSAyNzMuMzk4IDE5OS45OTIgMjczLjAzNSAxOTkuOTc0Wk0yNjguNjkxIDE5OC4xNjhDMjY5LjYyNSAxOTguNDYyIDI3Mi4zMzUgMTk5LjE4MyAyNzMuOTY5IDE5OC44NzhDMjc3LjAyNCAxOTguMzAxIDI4MC4xMjYgMTk4LjAwNSAyODMuMjM2IDE5Ny45OTVDMjg0LjE4IDE5Ny45OTUgMjg1LjE3NCAxOTcuMDUxIDI4Ni4yMiAxOTYuMDg3QzI4Ny4xNDEgMTk1LjA3MyAyODguMzA0IDE5NC4zMDggMjg5LjYgMTkzLjg2NEwyODkuMTMzIDE5My4wOTNDMjg3LjA4MyAxODkuOTAzIDI4NC4yMzYgMTg3LjMwNSAyODAuODcyIDE4NS41NTVDMjc3LjUwOSAxODMuODA1IDI3My43NDggMTgyLjk2NCAyNjkuOTYgMTgzLjExNUMyNjkuMzIgMTgzLjExNSAyNjguNjgxIDE4My4xODYgMjY4LjA1MSAxODMuMjY3TDI2OC42OTEgMTk4LjE2OFpcIlxuICAgICAgICBmaWxsPVwiIzIzMUYyMFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yOTMuMDUxIDIwNC44NTZDMjkzLjA0MSAyMDguNjI1IDI5Mi4wODEgMjEyLjMzIDI5MC4yNTkgMjE1LjYyOEMyODguNDM3IDIxOC45MjYgMjg1LjgxMiAyMjEuNzExIDI4Mi42MjcgMjIzLjcyNUwyNjkuNzY3IDIwMC41NDNMMjY3Ljg4OSAxOTcuMTUzTDI2OC45MDQgMTk2Ljk1QzI2OS41NzQgMTk2LjgwNyAyODMuMTY1IDE5Mi42MTYgMjg5LjU1OSAxOTIuODlDMjg5Ljg2NCAxOTMuMzc3IDI5MC4xNTggMTkzLjkwNSAyOTAuNDMyIDE5NC4zODJDMjkyLjE1OSAxOTcuNjAzIDI5My4wNTggMjAxLjIwMiAyOTMuMDUxIDIwNC44NTZaXCJcbiAgICAgICAgZmlsbD1cIndoaXRlXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTI4Mi42MjcgMjI0LjIzM0gyODIuNTA1QzI4Mi40MzcgMjI0LjIxNyAyODIuMzczIDIyNC4xODggMjgyLjMxNyAyMjQuMTQ2QzI4Mi4yNjEgMjI0LjEwNCAyODIuMjE0IDIyNC4wNSAyODIuMTggMjIzLjk4OUwyNjcuNDQyIDE5Ny40MTZDMjY3LjQwMSAxOTcuMzM4IDI2Ny4zOCAxOTcuMjUxIDI2Ny4zODIgMTk3LjE2MkMyNjcuMzgzIDE5Ny4wNzQgMjY3LjQwOCAxOTYuOTg3IDI2Ny40NTMgMTk2LjkxMUMyNjcuNDk3IDE5Ni44MzQgMjY3LjU2MSAxOTYuNzcxIDI2Ny42MzcgMTk2LjcyNkMyNjcuNzE0IDE5Ni42ODEgMjY3LjggMTk2LjY1NyAyNjcuODg5IDE5Ni42NTVIMjY3Ljk0TDI2OC43NzIgMTk2LjQ4M0MyNjguODUzIDE5Ni40ODMgMjY5LjE1OCAxOTYuMzgxIDI2OS42NDUgMTk2LjIzOUMyNzkuMTI1IDE5My41MzkgMjg1LjgyNCAxOTIuMjQgMjg5LjU0OSAxOTIuMzYyQzI4OS42MzEgMTkyLjM2MyAyODkuNzExIDE5Mi4zODYgMjg5Ljc4MiAxOTIuNDI2QzI4OS44NTMgMTkyLjQ2NyAyODkuOTEyIDE5Mi41MjUgMjg5Ljk1NSAxOTIuNTk1QzI5MC4yNyAxOTMuMDkzIDI5MC41NzQgMTkzLjYxIDI5MC44NDggMTk0LjExOEMyOTMuMjc0IDE5OC42MzcgMjk0LjEwNCAyMDMuODQyIDI5My4yMDMgMjA4Ljg5MUMyOTIuMzAyIDIxMy45NCAyODkuNzI0IDIxOC41MzggMjg1Ljg4NSAyMjEuOTM5QzI4NC45NTkgMjIyLjc3NyAyODMuOTYgMjIzLjUzMSAyODIuOTAxIDIyNC4xOTJDMjgyLjgxNSAyMjQuMjMxIDI4Mi43MiAyMjQuMjQ1IDI4Mi42MjcgMjI0LjIzM1pNMjY4LjY2IDE5Ny40OThMMjgyLjgwOSAyMjMuMDM1QzI4My42NTMgMjIyLjQ3MSAyODQuNDU2IDIyMS44NTEgMjg1LjIxNSAyMjEuMTc4QzI4OC44NzggMjE3LjkyOSAyOTEuMzM5IDIxMy41NCAyOTIuMTk5IDIwOC43MkMyOTMuMDU5IDIwMy45IDI5Mi4yNjggMTk4LjkzIDI4OS45NTUgMTk0LjYxNUMyODkuNzMyIDE5NC4xODkgMjg5LjQ4OCAxOTMuNzgzIDI4OS4yNDUgMTkzLjM3N0MyODUuNTUgMTkzLjM3NyAyNzkuMDk1IDE5NC42MTUgMjY5Ljk2IDE5Ny4yMjRMMjY5LjAxNiAxOTcuNDg3TDI2OC42NiAxOTcuNDk4WlwiXG4gICAgICAgIGZpbGw9XCIjMjMxRjIwXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTI2OC4wNjEgMTk2LjI4QzI2OC4wNjEgMTk2LjM1MSAyNjcuOTkgMTk2LjY0NSAyNjcuODg5IDE5Ny4xMzJDMjY3LjczNyAxOTcuOTE0IDI2Ny40OTMgMTk5LjE2MiAyNjcuMjE5IDIwMC44MzdDMjY2LjIwNCAyMDcuMTUgMjY0LjY4MiAyMTguNjUgMjY2LjEzMyAyMjYuNjI4QzI2NS41OTUgMjI2LjUwNiAyNjUuMDY3IDIyNi4zNzQgMjY0LjUzOSAyMjYuMjIyQzI2MS4zMSAyMjUuMjc2IDI1OC4zMzcgMjIzLjYxMyAyNTUuODQxIDIyMS4zNTZDMjUzLjM0NSAyMTkuMDk5IDI1MS4zOTIgMjE2LjMwNyAyNTAuMTI2IDIxMy4xOUMyNDkuNjM3IDIxMS45ODQgMjQ5LjI1NiAyMTAuNzM4IDI0OC45OSAyMDkuNDY1QzI1MC42MzcgMjA2LjY5IDI1Mi45MzIgMjA0LjM1NyAyNTUuNjc4IDIwMi42NjRDMjU4LjQ0OSAyMDAuODQgMjYxLjMzNSAxOTkuMTk2IDI2NC4zMTYgMTk3Ljc0MUMyNjUuNTEzIDE5Ny4xMzIgMjY2Ljc2OCAxOTYuNjQyIDI2OC4wNjEgMTk2LjI4WlwiXG4gICAgICAgIGZpbGw9XCJ3aGl0ZVwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yNjYuMTMzIDIyNy4xNTZIMjY2LjAyMUMyNjUuNDczIDIyNy4wMzQgMjY0LjkzNSAyMjYuOTAyIDI2NC4zOTcgMjI2Ljc0QzI2MS4xMDQgMjI1Ljc1OSAyNTguMDczIDIyNC4wNTEgMjU1LjUyNyAyMjEuNzQzQzI1Mi45ODIgMjE5LjQzNSAyNTAuOTg3IDIxNi41ODUgMjQ5LjY5IDIxMy40MDNDMjQ5LjE4NSAyMTIuMTY5IDI0OC43OTUgMjEwLjg5MSAyNDguNTIzIDIwOS41ODZDMjQ4LjQ5NCAyMDkuNDY2IDI0OC41MTIgMjA5LjMzOSAyNDguNTczIDIwOS4yMzFDMjUwLjI3MyAyMDYuMzk0IDI1Mi42MjYgMjA0LjAwMyAyNTUuNDM1IDIwMi4yNThDMjU4LjIyIDIwMC40MiAyNjEuMTIzIDE5OC43NjUgMjY0LjEyMyAxOTcuMzA1QzI2NS4zNjQgMTk2LjY3NCAyNjYuNjYyIDE5Ni4xNjQgMjY4LjAwMSAxOTUuNzgyQzI2OC4wNzQgMTk1Ljc2NyAyNjguMTUgMTk1Ljc2OSAyNjguMjIyIDE5NS43ODhDMjY4LjI5NCAxOTUuODA4IDI2OC4zNjEgMTk1Ljg0NCAyNjguNDE3IDE5NS44OTRDMjY4LjQ3NCAxOTUuOTQxIDI2OC41MiAxOTUuOTk5IDI2OC41NTIgMTk2LjA2NkMyNjguNTgzIDE5Ni4xMzMgMjY4LjYgMTk2LjIwNiAyNjguNTk5IDE5Ni4yOEMyNjguNTk5IDE5Ni40MzIgMjY4LjUxOCAxOTYuNzM2IDI2OC40MTcgMTk3LjIzNEMyNjguNDE3IDE5Ny4yMzQgMjY4LjQxNyAxOTcuMjM0IDI2OC40MTcgMTk3LjI5NUMyNjguMjY1IDE5OC4wODYgMjY4LjAyMSAxOTkuMzI1IDI2Ny43NTcgMjAwLjkyOEMyNjYuNzQyIDIwNy4wOTkgMjY1LjI0IDIxOC42MyAyNjYuNjcxIDIyNi41NDdDMjY2LjY4NiAyMjYuNjI5IDI2Ni42ODEgMjI2LjcxMyAyNjYuNjU2IDIyNi43OTNDMjY2LjYzMSAyMjYuODcyIDI2Ni41ODggMjI2Ljk0NSAyNjYuNTI5IDIyNy4wMDRDMjY2LjQ3NyAyMjcuMDU1IDI2Ni40MTUgMjI3LjA5NSAyNjYuMzQ3IDIyNy4xMjFDMjY2LjI3OSAyMjcuMTQ3IDI2Ni4yMDYgMjI3LjE1OSAyNjYuMTMzIDIyNy4xNTZaTTI0OS41MjggMjA5LjU2NkMyNDkuNzY5IDIxMC43NDIgMjUwLjEwOSAyMTEuODk3IDI1MC41NDMgMjEzLjAxN0MyNTEuNzg1IDIxNi4wNjEgMjUzLjY5NiAyMTguNzg3IDI1Ni4xMzUgMjIwLjk5MkMyNTguNTc0IDIyMy4xOTcgMjYxLjQ3NyAyMjQuODI1IDI2NC42MzEgMjI1Ljc1NUwyNjUuNDUzIDIyNS45NzhDMjY0LjIxNSAyMTcuOTYgMjY1LjY2NiAyMDYuODE1IDI2Ni42NzEgMjAwLjc2NkMyNjYuOTQ1IDE5OS4xMzIgMjY3LjE4OSAxOTcuODQzIDI2Ny4zNDEgMTk3LjA1MUMyNjYuMzY2IDE5Ny4zOTggMjY1LjQxIDE5Ny43OTggMjY0LjQ3OSAxOTguMjQ5QzI2MS41MTkgMTk5LjY5NyAyNTguNjU1IDIwMS4zMzEgMjU1LjkwMiAyMDMuMTQxQzI1My4zMTEgMjA0Ljc2NCAyNTEuMTMgMjA2Ljk2MyAyNDkuNTI4IDIwOS41NjZaXCJcbiAgICAgICAgZmlsbD1cIiMyMzFGMjBcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMjg1LjU1IDIyMS41MjNDMjgxLjQ4MSAyMjUuMTM0IDI3Ni4yMjIgMjI3LjExOCAyNzAuNzgyIDIyNy4wOTVDMjY5LjIxOSAyMjcuMDkzIDI2Ny42NjIgMjI2LjkzIDI2Ni4xMzMgMjI2LjYwOEMyNjUuNTk1IDIyNi40ODYgMjY1LjA2NyAyMjYuMzU0IDI2NC41MzkgMjI2LjIwMkMyNjQuMDUxIDIyMS42NjEgMjYzLjk1OSAyMTcuMDg2IDI2NC4yNjUgMjEyLjUzQzI2NC41OTggMjA4LjQ3NiAyNjUuMzU3IDIwNC40NjggMjY2LjUyOSAyMDAuNTczQzI2Ni45NTcgMTk5LjEwNSAyNjcuNDY2IDE5Ny42NjIgMjY4LjA1MSAxOTYuMjQ5QzI2OC4wNTEgMTk2LjI0OSAyNjguMzQ2IDE5Ni40NzIgMjY4Ljg2MyAxOTYuOTA5QzI2OS4zODEgMTk3LjM0NSAyNzAuMjg0IDE5OC4xMjcgMjcxLjI5OSAxOTkuMDcxQzI3NC45MTYgMjAyLjM0NiAyNzguMDY0IDIwNi4xMDMgMjgwLjY1OCAyMTAuMjM2QzI4Mi43NSAyMTMuNzgxIDI4NC4zOTQgMjE3LjU3MiAyODUuNTUgMjIxLjUyM1pcIlxuICAgICAgICBmaWxsPVwiI0M0RkM2OFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yNzAuNzgyIDIyNy42NDNDMjY5LjE4NSAyMjcuNjQyIDI2Ny41OTQgMjI3LjQ3NSAyNjYuMDMxIDIyNy4xNDZDMjY1LjQ3MyAyMjcuMDI0IDI2NC45MzUgMjI2Ljg5MiAyNjQuMzk3IDIyNi43M0MyNjQuMjk5IDIyNi43MDMgMjY0LjIxMSAyMjYuNjQ3IDI2NC4xNDYgMjI2LjU2OUMyNjQuMDgxIDIyNi40OTEgMjY0LjA0MSAyMjYuMzk1IDI2NC4wMzIgMjI2LjI5M0MyNjMuNTQ4IDIyMS43MjIgMjYzLjQ1NiAyMTcuMTE3IDI2My43NTggMjEyLjUzQzI2NC4wOTQgMjA4LjQ0MSAyNjQuODYgMjA0LjQgMjY2LjA0MiAyMDAuNDcyQzI2Ni42OTEgMTk4LjMxIDI2Ny4yOCAxOTYuODI4IDI2Ny41NjQgMTk2LjEyN0MyNjcuNTk4IDE5Ni4wNTQgMjY3LjY0MyAxOTUuOTg2IDI2Ny42OTYgMTk1LjkyNEMyNjcuNzkxIDE5NS44NDQgMjY3LjkxMiAxOTUuOCAyNjguMDM2IDE5NS44QzI2OC4xNjEgMTk1LjggMjY4LjI4MSAxOTUuODQ0IDI2OC4zNzYgMTk1LjkyNEwyNjkuMTk4IDE5Ni42MDRDMjY5LjU5NCAxOTYuOTM5IDI3MC40NTcgMTk3LjY3IDI3MS42NTUgMTk4Ljc4N0MyNzUuMzI3IDIwMi4wNzcgMjc4LjUyNSAyMDUuODYyIDI4MS4xNTUgMjEwLjAzM0MyODMuMjYxIDIxMy41OTcgMjg0LjkxOCAyMTcuNDA5IDI4Ni4wODggMjIxLjM4MUMyODYuMTE0IDIyMS40NzIgMjg2LjExNCAyMjEuNTY4IDI4Ni4wODkgMjIxLjY1OUMyODYuMDY0IDIyMS43NTEgMjg2LjAxNSAyMjEuODMzIDI4NS45NDYgMjIxLjg5OEMyODUuMDE0IDIyMi43MzQgMjg0LjAxMiAyMjMuNDg4IDI4Mi45NTIgMjI0LjE1MkMyNzkuMzA4IDIyNi40NDUgMjc1LjA4NyAyMjcuNjU2IDI3MC43ODIgMjI3LjY0M1pNMjY1LjAxNiAyMjUuODQ3TDI2Ni4yMzQgMjI2LjE1MUMyNjcuNzI5IDIyNi40NjggMjY5LjI1MyAyMjYuNjI4IDI3MC43ODIgMjI2LjYyOEMyNzQuODggMjI2LjYzIDI3OC44OTUgMjI1LjQ3MiAyODIuMzYzIDIyMy4yODlDMjgzLjI4IDIyMi43MTQgMjg0LjE1MyAyMjIuMDY5IDI4NC45NzEgMjIxLjM2QzI4My44MjggMjE3LjU3OCAyODIuMjM2IDIxMy45NDYgMjgwLjIzMSAyMTAuNTRDMjc3LjY2MyAyMDYuNDQ2IDI3NC41NDUgMjAyLjcyMyAyNzAuOTY0IDE5OS40NzdDMjY5Ljc4NyAxOTguMzgxIDI2OC45MzQgMTk3LjY2IDI2OC41NDkgMTk3LjMzNUwyNjguMjc1IDE5Ny4xMDJDMjY3Ljk1IDE5Ny45MTQgMjY3LjUwMyAxOTkuMTMyIDI2Ny4wMTYgMjAwLjc2NkMyNjUuODUxIDIwNC42MjQgMjY1LjA5OSAyMDguNTk0IDI2NC43NzMgMjEyLjYxMUMyNjQuNDggMjE3LjAyMiAyNjQuNTYxIDIyMS40NSAyNjUuMDE2IDIyNS44NDdaXCJcbiAgICAgICAgZmlsbD1cIiMyMzFGMjBcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMjY5LjkwOSAxODIuNjA4QzI2OS42NjIgMTg2LjIxOCAyNjkuMjIyIDE4OS44MTMgMjY4LjU4OSAxOTMuMzc3QzI2OC4yOTUgMTk1LjEyMiAyNjguMDYyIDE5Ni4yOCAyNjguMDYyIDE5Ni4yOEMyNjcuMTc3IDE5NS42NDEgMjY2LjI1OSAxOTUuMDUyIDI2NS4zMTEgMTk0LjUxM0MyNjEuNzczIDE5Mi41MjYgMjU3Ljk1OSAxOTEuMDc5IDI1My45OTQgMTkwLjIyQzI1NC4yMzcgMTg5LjkzNiAyNTQuNDkxIDE4OS42NjIgMjU0Ljc0NSAxODkuNDA4QzI1OC4xNDYgMTg1Ljg2MSAyNjIuNjMxIDE4My41NDcgMjY3LjQ5MyAxODIuODMxQzI2OC4yOTMgMTgyLjcwNSAyNjkuMSAxODIuNjMgMjY5LjkwOSAxODIuNjA4WlwiXG4gICAgICAgIGZpbGw9XCJ3aGl0ZVwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yNjguMDYxIDE5Ni43ODdDMjY3Ljk1NiAxOTYuNzgzIDI2Ny44NTMgMTk2Ljc0OCAyNjcuNzY3IDE5Ni42ODZDMjY2LjkgMTk2LjA2IDI2NS45OTkgMTk1LjQ4NCAyNjUuMDY3IDE5NC45NkMyNjEuNTc4IDE5Mi45OTQgMjU3LjgxNSAxOTEuNTYxIDI1My45MDIgMTkwLjcwN0MyNTMuODE3IDE5MC42ODkgMjUzLjczOCAxOTAuNjQ5IDI1My42NzQgMTkwLjU5QzI1My42MDkgMTkwLjUzMSAyNTMuNTYyIDE5MC40NTYgMjUzLjUzNyAxOTAuMzcyQzI1My41MDggMTkwLjI5IDI1My41MDEgMTkwLjIwMiAyNTMuNTE3IDE5MC4xMTdDMjUzLjUzNCAxOTAuMDMxIDI1My41NzIgMTg5Ljk1MSAyNTMuNjI4IDE4OS44ODVDMjUzLjg4MiAxODkuNjAxIDI1NC4xMzYgMTg5LjMxNyAyNTQuNCAxODkuMDUzQzI1Ny44ODkgMTg1LjQzNyAyNjIuNDczIDE4My4wNzIgMjY3LjQ0MiAxODIuMzIzQzI2OC4yNjMgMTgyLjIwMiAyNjkuMDkgMTgyLjEyNyAyNjkuOTE5IDE4Mi4xQzI3MC4wNTggMTgyLjA5NiAyNzAuMTkzIDE4Mi4xNDcgMjcwLjI5NCAxODIuMjQyQzI3MC4zNDQgMTgyLjI5MyAyNzAuMzgzIDE4Mi4zNTMgMjcwLjQwNyAxODIuNDJDMjcwLjQzMiAxODIuNDg2IDI3MC40NDIgMTgyLjU1NyAyNzAuNDM3IDE4Mi42MjhDMjcwLjE4NyAxODYuMjYyIDI2OS43NDMgMTg5Ljg4MSAyNjkuMTA3IDE5My40NjhDMjY4LjgxMyAxOTUuMjE0IDI2OC41NzkgMTk2LjM3MSAyNjguNTc5IDE5Ni4zNzFDMjY4LjU2NSAxOTYuNDU1IDI2OC41MyAxOTYuNTMzIDI2OC40NzcgMTk2LjU5OUMyNjguNDIzIDE5Ni42NjUgMjY4LjM1NCAxOTYuNzE2IDI2OC4yNzUgMTk2Ljc0N0MyNjguMjA3IDE5Ni43NzMgMjY4LjEzNCAxOTYuNzg3IDI2OC4wNjEgMTk2Ljc4N1pNMjU0Ljk0OCAxODkuOTE2QzI1OC42NjQgMTkwLjc5OCAyNjIuMjM5IDE5Mi4xOTggMjY1LjU2NSAxOTQuMDc3QzI2Ni4zMDYgMTk0LjQ5MyAyNjcuMDE2IDE5NC45NCAyNjcuNzE2IDE5NS40MDdDMjY3LjgwOCAxOTQuOTA5IDI2Ny45NCAxOTQuMTc5IDI2OC4wODIgMTkzLjI5NkMyNjguNTY5IDE5MC40MTMgMjY5LjE3OCAxODYuMzgzIDI2OS4zNzEgMTgzLjE0NkMyNjguNzYyIDE4My4xNDYgMjY4LjE2MyAxODMuMjQ3IDI2Ny41NzQgMTgzLjMzOEMyNjIuODI3IDE4NC4wNTQgMjU4LjQ0NyAxODYuMzEyIDI1NS4xMSAxODkuNzYzTDI1NC45NDggMTg5LjkxNlpcIlxuICAgICAgICBmaWxsPVwiIzIzMUYyMFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yNjguMDYxIDIwMC45NDlDMjcwLjE2NCAyMDAuOTQ5IDI3MS44NjggMTk5LjI0NSAyNzEuODY4IDE5Ny4xNDJDMjcxLjg2OCAxOTUuMDQgMjcwLjE2NCAxOTMuMzM2IDI2OC4wNjEgMTkzLjMzNkMyNjUuOTU5IDE5My4zMzYgMjY0LjI1NSAxOTUuMDQgMjY0LjI1NSAxOTcuMTQyQzI2NC4yNTUgMTk5LjI0NSAyNjUuOTU5IDIwMC45NDkgMjY4LjA2MSAyMDAuOTQ5WlwiXG4gICAgICAgIGZpbGw9XCJ3aGl0ZVwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yNjguMDYxIDIwMS40NTZDMjY3LjIwOCAyMDEuNDU2IDI2Ni4zNzQgMjAxLjIwMyAyNjUuNjY1IDIwMC43MjlDMjY0Ljk1NiAyMDAuMjU1IDI2NC40MDMgMTk5LjU4MSAyNjQuMDc2IDE5OC43OTNDMjYzLjc1IDE5OC4wMDUgMjYzLjY2NCAxOTcuMTM4IDI2My44MzEgMTk2LjMwMUMyNjMuOTk3IDE5NS40NjQgMjY0LjQwOCAxOTQuNjk1IDI2NS4wMTEgMTk0LjA5MkMyNjUuNjE0IDE5My40ODkgMjY2LjM4MyAxOTMuMDc4IDI2Ny4yMiAxOTIuOTEyQzI2OC4wNTcgMTkyLjc0NSAyNjguOTI0IDE5Mi44MyAyNjkuNzEyIDE5My4xNTdDMjcwLjUwMSAxOTMuNDgzIDI3MS4xNzQgMTk0LjAzNiAyNzEuNjQ4IDE5NC43NDZDMjcyLjEyMiAxOTUuNDU1IDI3Mi4zNzUgMTk2LjI4OSAyNzIuMzc1IDE5Ny4xNDJDMjcyLjM3MyAxOTguMjg2IDI3MS45MTcgMTk5LjM4MSAyNzEuMTA5IDIwMC4xOUMyNzAuMyAyMDAuOTk4IDI2OS4yMDUgMjAxLjQ1MyAyNjguMDYxIDIwMS40NTZaTTI2OC4wNjEgMTkzLjg1NEMyNjcuNDA5IDE5My44NTQgMjY2Ljc3IDE5NC4wNDggMjY2LjIyOCAxOTQuNDFDMjY1LjY4NSAxOTQuNzczIDI2NS4yNjIgMTk1LjI4OSAyNjUuMDEzIDE5NS44OTNDMjY0Ljc2MyAxOTYuNDk2IDI2NC42OTkgMTk3LjE2IDI2NC44MjcgMTk3LjhDMjY0Ljk1NSAxOTguNDQgMjY1LjI3IDE5OS4wMjggMjY1LjczMyAxOTkuNDg5QzI2Ni4xOTUgMTk5Ljk1IDI2Ni43ODQgMjAwLjI2MyAyNjcuNDI0IDIwMC4zODlDMjY4LjA2NSAyMDAuNTE1IDI2OC43MjggMjAwLjQ0OCAyNjkuMzMxIDIwMC4xOTdDMjY5LjkzNCAxOTkuOTQ2IDI3MC40NDggMTk5LjUyMiAyNzAuODA5IDE5OC45NzhDMjcxLjE3IDE5OC40MzQgMjcxLjM2MiAxOTcuNzk1IDI3MS4zNiAxOTcuMTQyQzI3MS4zNTggMTk2LjI2OSAyNzEuMDA5IDE5NS40MzMgMjcwLjM5IDE5NC44MTZDMjY5Ljc3MiAxOTQuMiAyNjguOTM1IDE5My44NTQgMjY4LjA2MSAxOTMuODU0WlwiXG4gICAgICAgIGZpbGw9XCIjMjMxRjIwXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTIyMC4wMTEgMjI4LjUyNkMyMjAuODM2IDIyNy43MjEgMjIxLjc5OCAyMjcuMDcxIDIyMi44NTMgMjI2LjYwOEMyMjQuMzM1IDIyNi4wMzkgMjI4LjY1OSAyMjMuOTY5IDIzMi44IDIyNi42MDhcIlxuICAgICAgICBmaWxsPVwid2hpdGVcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMjIwLjAxMSAyMjkuMDM0QzIxOS45MTIgMjI5LjAzMiAyMTkuODE1IDIyOS4wMDIgMjE5LjczMyAyMjguOTQ2QzIxOS42NTEgMjI4Ljg5IDIxOS41ODcgMjI4LjgxMSAyMTkuNTQ5IDIyOC43MTlDMjE5LjUxMSAyMjguNjI4IDIxOS41MDEgMjI4LjUyNyAyMTkuNTIgMjI4LjQyOUMyMTkuNTM5IDIyOC4zMzIgMjE5LjU4NyAyMjguMjQyIDIxOS42NTYgMjI4LjE3MUMyMjAuNTM2IDIyNy4zMTEgMjIxLjU2OSAyMjYuNjIzIDIyMi43MDEgMjI2LjE0MUwyMjMuMDc3IDIyNS45ODlDMjI0Ljg3MyAyMjUuMjc4IDIyOS4wNTUgMjIzLjYwMyAyMzMuMTA1IDIyNi4xODFDMjMzLjIxOSAyMjYuMjUzIDIzMy4zMDEgMjI2LjM2NyAyMzMuMzMxIDIyNi40OThDMjMzLjM2MiAyMjYuNjI5IDIzMy4zMzkgMjI2Ljc2NyAyMzMuMjY3IDIyNi44ODJDMjMzLjE5NiAyMjYuOTk2IDIzMy4wODIgMjI3LjA3OCAyMzIuOTUxIDIyNy4xMDhDMjMyLjgxOSAyMjcuMTM5IDIzMi42ODEgMjI3LjExNiAyMzIuNTY3IDIyNy4wNDRDMjI4Ljk1NCAyMjQuNzQgMjI1LjIzOSAyMjYuMjIyIDIyMy40MzIgMjI2LjkzM0wyMjMuMDQ2IDIyNy4wODVDMjIyLjA2IDIyNy41MjUgMjIxLjE2IDIyOC4xMzcgMjIwLjM4NyAyMjguODkxQzIyMC4zMzcgMjI4LjkzOSAyMjAuMjc4IDIyOC45NzYgMjIwLjIxNCAyMjlDMjIwLjE0OSAyMjkuMDI1IDIyMC4wOCAyMjkuMDM2IDIyMC4wMTEgMjI5LjAzNFpcIlxuICAgICAgICBmaWxsPVwiIzIzMUYyMFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yMjYuODUyIDI3MS4yNThDMjI2LjE5MyAyNzEuMjU4IDIyNS41MzMgMjcxLjI1OCAyMjQuODczIDI3MS4yMDdDMjI0LjczOSAyNzEuMjA3IDIyNC42MSAyNzEuMTU0IDIyNC41MTQgMjcxLjA1OEMyMjQuNDE5IDI3MC45NjMgMjI0LjM2NiAyNzAuODM0IDIyNC4zNjYgMjcwLjY5OUMyMjQuMzY2IDI3MC41NjUgMjI0LjQxOSAyNzAuNDM2IDIyNC41MTQgMjcwLjM0MUMyMjQuNjEgMjcwLjI0NSAyMjQuNzM5IDI3MC4xOTIgMjI0Ljg3MyAyNzAuMTkyQzIzMS4wNzYgMjcwLjUwMSAyMzcuMjYyIDI2OS4zMTMgMjQyLjkxIDI2Ni43MzFDMjQzLjAzMiAyNjYuNjc2IDI0My4xNzIgMjY2LjY3MiAyNDMuMjk3IDI2Ni43MTlDMjQzLjQyMyAyNjYuNzY3IDI0My41MjQgMjY2Ljg2MiAyNDMuNTggMjY2Ljk4NUMyNDMuNjA5IDI2Ny4wNDQgMjQzLjYyNSAyNjcuMTA5IDI0My42MjkgMjY3LjE3NkMyNDMuNjMyIDI2Ny4yNDIgMjQzLjYyMiAyNjcuMzA4IDI0My41OTkgMjY3LjM3MUMyNDMuNTc3IDI2Ny40MzMgMjQzLjU0MiAyNjcuNDkxIDI0My40OTYgMjY3LjUzOUMyNDMuNDUxIDI2Ny41ODggMjQzLjM5NyAyNjcuNjI3IDI0My4zMzYgMjY3LjY1NEMyMzguMTYxIDI3MC4wMTYgMjMyLjU0MSAyNzEuMjQ1IDIyNi44NTIgMjcxLjI1OFpcIlxuICAgICAgICBmaWxsPVwiIzIzMUYyMFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yNjUuMzYyIDIyOS4xMjVDMjcxLjE2NyAyMjYuNjc5IDI3Ny4yOTggMjI0LjE4MiAyODMuNTYxIDIyNC44NTJDMjg2LjY1NyAyMjUuMzA2IDI4OS42NzYgMjI2LjE4NCAyOTIuNTMzIDIyNy40NlwiXG4gICAgICAgIGZpbGw9XCJ3aGl0ZVwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yNjUuMzYyIDIyOS42MTJDMjY1LjI2MiAyMjkuNjEgMjY1LjE2NCAyMjkuNTggMjY1LjA4MiAyMjkuNTI0QzI2NC45OTkgMjI5LjQ2OCAyNjQuOTM0IDIyOS4zOSAyNjQuODk1IDIyOS4yOThDMjY0Ljg2OCAyMjkuMjM2IDI2NC44NTQgMjI5LjE2OSAyNjQuODU0IDIyOS4xMDJDMjY0Ljg1MyAyMjkuMDM0IDI2NC44NjYgMjI4Ljk2OCAyNjQuODkxIDIyOC45MDVDMjY0LjkxNyAyMjguODQzIDI2NC45NTQgMjI4Ljc4NiAyNjUuMDAyIDIyOC43MzlDMjY1LjA1IDIyOC42OTEgMjY1LjEwNiAyMjguNjUzIDI2NS4xNjkgMjI4LjYyOEMyNzAuNzQxIDIyNi4yODMgMjc3LjA1NCAyMjMuNjM0IDI4My42MTEgMjI0LjMzNEMyODYuNzYzIDIyNC43ODkgMjg5LjgzNyAyMjUuNjc3IDI5Mi43NDYgMjI2Ljk3M0MyOTIuODcxIDIyNy4wMjQgMjkyLjk3MSAyMjcuMTIzIDI5My4wMjQgMjI3LjI0OEMyOTMuMDc2IDIyNy4zNzMgMjkzLjA3NyAyMjcuNTEzIDI5My4wMjUgMjI3LjYzOEMyOTIuOTc0IDIyNy43NjMgMjkyLjg3NiAyMjcuODYzIDI5Mi43NTEgMjI3LjkxNUMyOTIuNjI2IDIyNy45NjggMjkyLjQ4NiAyMjcuOTY4IDI5Mi4zNjEgMjI3LjkxN0MyODkuNTQ2IDIyNi42NTUgMjg2LjU3MSAyMjUuNzg3IDI4My41MiAyMjUuMzM5QzI3Ny4yMzcgMjI0LjY1OSAyNzEuMDQ2IDIyNy4yNjggMjY1LjU3NSAyMjkuNTcyQzI2NS41MDcgMjI5LjU5OCAyNjUuNDM1IDIyOS42MTIgMjY1LjM2MiAyMjkuNjEyWlwiXG4gICAgICAgIGZpbGw9XCIjMjMxRjIwXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTI5Ny41NzggMjczLjUzMUgyOTYuODk4QzI5Ni44MzEgMjczLjUyOSAyOTYuNzY1IDI3My41MTMgMjk2LjcwNSAyNzMuNDg1QzI5Ni42NDQgMjczLjQ1NyAyOTYuNTkgMjczLjQxNyAyOTYuNTQ1IDI3My4zNjhDMjk2LjQ5OSAyNzMuMzE5IDI5Ni40NjQgMjczLjI2MiAyOTYuNDQxIDI3My4xOTlDMjk2LjQxOCAyNzMuMTM3IDI5Ni40MDggMjczLjA3IDI5Ni40MSAyNzMuMDAzQzI5Ni40MjEgMjcyLjg3MSAyOTYuNDgxIDI3Mi43NDcgMjk2LjU3OSAyNzIuNjU2QzI5Ni42NzcgMjcyLjU2NiAyOTYuODA1IDI3Mi41MTYgMjk2LjkzOCAyNzIuNTE2QzMwMC45MjkgMjcyLjY0OCAzMDQuODUyIDI3MS40NjQgMzA4LjEwMyAyNjkuMTQ2QzMwOS4xMTggMjY4LjQ0NiAzMTAuMDExIDI2Ny42MzQgMzEwLjkxNSAyNjYuODQyQzMxMi43MDEgMjY1LjA3NyAzMTQuODE0IDI2My42NzcgMzE3LjEzNyAyNjIuNzIxQzMxOC41NjcgMjYyLjMwMyAzMjAuMDQzIDI2Mi4wNTggMzIxLjUzMiAyNjEuOTkxQzMyMi42MjggMjYxLjkzMiAzMjMuNzIgMjYxLjgwMyAzMjQuOCAyNjEuNjA1QzMyNi45MSAyNjEuMTAxIDMyOC44NDQgMjYwLjAzOCAzMzAuNCAyNTguNTI2QzMzMS45NTYgMjU3LjAxNSAzMzMuMDc2IDI1NS4xMTIgMzMzLjY0MSAyNTMuMDE4QzMzMy42NTcgMjUyLjk1MSAzMzMuNjg3IDI1Mi44ODkgMzMzLjcyOCAyNTIuODM0QzMzMy43NjkgMjUyLjc3OCAzMzMuODIgMjUyLjczMiAzMzMuODc5IDI1Mi42OTZDMzMzLjkzOCAyNTIuNjYxIDMzNC4wMDMgMjUyLjYzOCAzMzQuMDcxIDI1Mi42MjhDMzM0LjEzOSAyNTIuNjE3IDMzNC4yMDggMjUyLjYyMSAzMzQuMjc1IDI1Mi42MzdDMzM0LjM0MiAyNTIuNjU0IDMzNC40MDQgMjUyLjY4NCAzMzQuNDYgMjUyLjcyNUMzMzQuNTE1IDI1Mi43NjYgMzM0LjU2MSAyNTIuODE3IDMzNC41OTcgMjUyLjg3NkMzMzQuNjMyIDI1Mi45MzUgMzM0LjY1NSAyNTMgMzM0LjY2NiAyNTMuMDY4QzMzNC42NzYgMjUzLjEzNiAzMzQuNjcyIDI1My4yMDUgMzM0LjY1NiAyNTMuMjcyQzMzNC4wMzkgMjU1LjU0NSAzMzIuODIzIDI1Ny42MTEgMzMxLjEzMyAyNTkuMjUyQzMyOS40NDQgMjYwLjg5MyAzMjcuMzQ0IDI2Mi4wNSAzMjUuMDU0IDI2Mi42QzMyMy45NTUgMjYyLjgyIDMyMi44NDMgMjYyLjk2NiAzMjEuNzI1IDI2My4wMzZDMzIwLjMxOSAyNjMuMTA3IDMxOC45MjYgMjYzLjMzOCAzMTcuNTczIDI2My43MjZDMzE1LjM0NSAyNjQuNjAyIDMxMy4zMTUgMjY1LjkxNyAzMTEuNjA1IDI2Ny41OTNDMzEwLjY4MiAyNjguNDMxIDMwOS43MTcgMjY5LjIyIDMwOC43MTIgMjY5Ljk1OEMzMDUuNDYgMjcyLjI3MyAzMDEuNTcgMjczLjUyMSAyOTcuNTc4IDI3My41MzFaXCJcbiAgICAgICAgZmlsbD1cIndoaXRlXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29ja3RhaWwoeyBjbGFzc05hbWUgfSkge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgdmlld0JveD1cIjAgMCAzODYgMjg2XCJcbiAgICAgIG1hcmdpbj1cIjFyZW1cIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yMDEuNDc3IDI3My44MzZDMjQ0LjEwOSAyNzMuODM2IDI3OC42NjggMjY0LjQ2NSAyNzguNjY4IDI1Mi45MDZDMjc4LjY2OCAyNDEuMzQ4IDI0NC4xMDkgMjMxLjk3NyAyMDEuNDc3IDIzMS45NzdDMTU4Ljg0NiAyMzEuOTc3IDEyNC4yODcgMjQxLjM0OCAxMjQuMjg3IDI1Mi45MDZDMTI0LjI4NyAyNjQuNDY1IDE1OC44NDYgMjczLjgzNiAyMDEuNDc3IDI3My44MzZaXCJcbiAgICAgICAgZmlsbD1cIiNFNkU3RThcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMzEwLjExMyAyMDYuNTYyQzMxMC4xMTMgMjA2LjU2MiAyMzkuMDYzIDE5OS40MDYgMjMwLjQ1NiAyMDAuMTY3QzIyMS44NDkgMjAwLjkyOCAyMTIuNTExIDIxNy45MDkgMjE3LjAzNyAyMjAuMjY0QzIyMS41NjQgMjIyLjYxOSAyMjYuNDA2IDIwNy45OTMgMjMxLjg5NyAyMDYuOTY4QzIzNy4zODggMjA1Ljk0MiAzMTAuMTEzIDIxNi4yMDQgMzEwLjExMyAyMTYuMjA0VjIwNi41NjJaXCJcbiAgICAgICAgZmlsbD1cIiMyMzFGMjBcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMjE4LjA3MyAyMjEuMDA1QzIxNy42MyAyMjEuMDAyIDIxNy4xOTQgMjIwLjg5MSAyMTYuODA0IDIyMC42OEMyMTUuOTAxIDIyMC4yMDMgMjE0LjkzNiAyMTkuMDE2IDIxNS41MjUgMjE2LjA0MkMyMTYuNzMzIDIwOS45NTIgMjIzLjY0NSAyMDAuMjE4IDIzMC40MTUgMTk5LjYyOUMyMzguOTcyIDE5OC44ODggMzA3LjI2MSAyMDUuNzE5IDMxMC4xNjQgMjA2LjAzNEMzMTAuMjg4IDIwNi4wNDQgMzEwLjQwNSAyMDYuMTAxIDMxMC40ODkgMjA2LjE5M0MzMTAuNTc0IDIwNi4yODUgMzEwLjYyMSAyMDYuNDA2IDMxMC42MiAyMDYuNTMxVjIxNi4xNzRDMzEwLjYyMSAyMTYuMjQ3IDMxMC42MDYgMjE2LjMxOSAzMTAuNTc2IDIxNi4zODVDMzEwLjU0NiAyMTYuNDUyIDMxMC41MDMgMjE2LjUxMSAzMTAuNDQ4IDIxNi41NTlDMzEwLjM5MiAyMTYuNjA3IDMxMC4zMjggMjE2LjY0MiAzMTAuMjU4IDIxNi42NjNDMzEwLjE4OCAyMTYuNjg0IDMxMC4xMTQgMjE2LjY5IDMxMC4wNDIgMjE2LjY4MUMzMDkuMzIxIDIxNi41NjkgMjM3LjMyNyAyMDYuNDQgMjMxLjk4OCAyMDcuNDM0QzIyOS42MjMgMjA3Ljg3MSAyMjcuMjc5IDIxMS4yMiAyMjUuMDA1IDIxNC40NThDMjIyLjczMiAyMTcuNjk2IDIyMC40MDcgMjIxLjAwNSAyMTguMDczIDIyMS4wMDVaTTIzMi4yMTIgMjAwLjU4M0MyMzEuNTAxIDIwMC41ODMgMjMwLjkyMyAyMDAuNTgzIDIzMC41MDcgMjAwLjYzNEMyMjQuNDE3IDIwMS4xNzIgMjE3LjY2NyAyMTAuNDU5IDIxNi41MiAyMTYuMjM1QzIxNi4zMDcgMjE3LjMxIDIxNi4xMjQgMjE5LjE4OCAyMTcuMjcxIDIxOS43ODdDMjE5LjMwMSAyMjAuODAyIDIyMS42NjYgMjE3LjQ1MiAyMjQuMTczIDIxMy44OEMyMjYuNTY4IDIxMC40NzkgMjI5LjAzNSAyMDYuOTU3IDIzMS44MDYgMjA2LjQ0QzIzNy4xMTQgMjA1LjQyNSAzMDIuMjY3IDIxNC41NiAzMDkuNjE2IDIxNS41NzVWMjA2Ljk2OEMzMDMuODMgMjA2LjQ1IDI0NS4yMjQgMjAwLjYxNCAyMzIuMjEyIDIwMC42MTRWMjAwLjU4M1pcIlxuICAgICAgICBmaWxsPVwiIzIzMUYyMFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0xOTcuMzg3IDI2OC45NTRDMTczLjI4MSAyNjguOTU0IDE1NC40MDIgMjYxLjcwNyAxNTQuNDAyIDI1Mi40NkwxMzguMjIzIDk5LjYwMDlDMTM4LjIwOCA5OS40Njc3IDEzOC4yNDcgOTkuMzM0MyAxMzguMzMxIDk5LjIyOTdDMTM4LjQxNSA5OS4xMjUyIDEzOC41MzYgOTkuMDU3OSAxMzguNjY5IDk5LjA0MjZDMTM4LjgwMiA5OS4wMjgzIDEzOC45MzYgOTkuMDY3MyAxMzkuMDQgOTkuMTUwOUMxMzkuMTQ1IDk5LjIzNDYgMTM5LjIxMiA5OS4zNTYyIDEzOS4yMjggOTkuNDg5MkwxNTUuNDY4IDI1Mi40MDlDMTU1LjQ2OCAyNjAuOTk2IDE3NC4yOTYgMjY3LjkzOSAxOTcuNDM4IDI2Ny45MzlDMjIwLjU4IDI2Ny45MzkgMjM5LjQwOCAyNjAuOTk2IDIzOS40MDggMjUyLjQ2TDI1NS42NDggOTkuNDg5MkMyNTUuNjYzIDk5LjM1NDYgMjU1LjczMSA5OS4yMzE0IDI1NS44MzYgOTkuMTQ2N0MyNTUuOTQyIDk5LjA2MiAyNTYuMDc3IDk5LjAyMjcgMjU2LjIxMSA5OS4wMzc1QzI1Ni4zNDYgOTkuMDUyMyAyNTYuNDY5IDk5LjEyIDI1Ni41NTQgOTkuMjI1N0MyNTYuNjM5IDk5LjMzMTMgMjU2LjY3OCA5OS40NjYzIDI1Ni42NjMgOTkuNjAwOUwyNDAuMzcyIDI1Mi40N0MyNDAuMzcyIDI2MS43MDYgMjIxLjQ5MyAyNjguOTU0IDE5Ny4zODcgMjY4Ljk1NFpcIlxuICAgICAgICBmaWxsPVwiIzIzMUYyMFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0xOTcuMzg3IDExOS43ODlDMTY0Ljc2NSAxMTkuNzg5IDEzOC4yMTMgMTEwLjY1NCAxMzguMjEzIDk5LjQ4OTJDMTM4LjIxMyA4OC4zMjQyIDE2NC43NjUgNzkuMTg5MiAxOTcuMzg3IDc5LjE4OTJDMjMwLjAwOSA3OS4xODkyIDI1Ni41NjIgODguMzI0MiAyNTYuNTYyIDk5LjQ4OTJDMjU2LjU2MiAxMTAuNjU0IDIzMC4wMTkgMTE5Ljc4OSAxOTcuMzg3IDExOS43ODlaTTE5Ny4zODcgODAuMzA1N0MxNjUuMzIzIDgwLjMwNTcgMTM5LjIyOCA4OC45MzMyIDEzOS4yMjggOTkuNTkwN0MxMzkuMjI4IDExMC4yNDggMTY1LjMyMyAxMTguODc2IDE5Ny4zODcgMTE4Ljg3NkMyMjkuNDUxIDExOC44NzYgMjU1LjU0NyAxMTAuMjQ4IDI1NS41NDcgOTkuNTkwN0MyNTUuNTQ3IDg4LjkzMzIgMjI5LjQ1MSA4MC4zMDU3IDE5Ny4zODcgODAuMzA1N1pcIlxuICAgICAgICBmaWxsPVwiIzIzMUYyMFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yNDguMDI1IDE1Mi4zMkwyMzUuNDggMjU0LjA4NEMyMzUuNDggMjU0LjA4NCAyMjIuNjkxIDI2NS43NTYgMTk0LjUwNCAyNjQuNTQ5QzE2Ni4zMTggMjYzLjM0MSAxNTguODI3IDI1My4xMDkgMTU4LjgyNyAyNTMuMTA5TDE0Ni43MzkgMTUyLjMySDI0OC4wMjVaXCJcbiAgICAgICAgZmlsbD1cIiNDNEZDNjhcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMTk4LjQ1MyAyNjUuMTM3QzE5Ny4xNTQgMjY1LjEzNyAxOTUuODE0IDI2NS4xMzcgMTk0LjM5MyAyNjUuMDU2QzE2Ni4yODcgMjYzLjg0OCAxNTguNjQ1IDI1My44MyAxNTguMzMgMjUzLjQwNEMxNTguMjc5IDI1My4zMzYgMTU4LjI0NyAyNTMuMjU1IDE1OC4yMzggMjUzLjE3TDE0Ni4xNiAxNTIuMzgxQzE0Ni4xNTIgMTUyLjMxIDE0Ni4xNTkgMTUyLjIzOCAxNDYuMTggMTUyLjE3QzE0Ni4yMDEgMTUyLjEwMiAxNDYuMjM1IDE1Mi4wMzkgMTQ2LjI4MiAxNTEuOTg1QzE0Ni4zMyAxNTEuOTMgMTQ2LjM4OSAxNTEuODg2IDE0Ni40NTYgMTUxLjg1N0MxNDYuNTIyIDE1MS44MjcgMTQ2LjU5NSAxNTEuODEyIDE0Ni42NjcgMTUxLjgxMkgyNDguMDA1QzI0OC4wNzcgMTUxLjgxMiAyNDguMTQ3IDE1MS44MjcgMjQ4LjIxMiAxNTEuODU3QzI0OC4yNzcgMTUxLjg4NyAyNDguMzM1IDE1MS45MyAyNDguMzgxIDE1MS45ODVDMjQ4LjQyOCAxNTIuMDM5IDI0OC40NjUgMTUyLjEwMSAyNDguNDg3IDE1Mi4xNjlDMjQ4LjUxIDE1Mi4yMzcgMjQ4LjUxOSAxNTIuMzA5IDI0OC41MTMgMTUyLjM4MUwyMzUuOTI3IDI1NC4xNDVDMjM1LjkxNSAyNTQuMjY3IDIzNS44NTcgMjU0LjM3OSAyMzUuNzY0IDI1NC40NTlDMjM1LjY0MiAyNTQuNTcxIDIyMy43NTcgMjY1LjEzNyAxOTguNDUzIDI2NS4xMzdaTTE1OS4yNjQgMjUyLjkwNkMxNjEuMjc0IDI1NS4wNSAxNjMuNjg5IDI1Ni43NzUgMTY2LjM2OSAyNTcuOTgxQzE3MS4yNDEgMjYwLjQwNyAxODAuMDgxIDI2My40MzIgMTk0LjQ4NCAyNjQuMDcxQzIyMC41NyAyNjUuMTg4IDIzMy40OTEgMjU1LjA2OCAyMzQuOTQyIDI1My44NUwyNDcuNDQ3IDE1Mi44NThIMTQ3LjI1NkwxNTkuMjY0IDI1Mi45MDZaXCJcbiAgICAgICAgZmlsbD1cIiMyMzFGMjBcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMTk3LjM1NyAxNjYuMTg1QzIyNS4zNCAxNjYuMTg1IDI0OC4wMjUgMTU5LjQgMjQ4LjAyNSAxNTEuMDMxQzI0OC4wMjUgMTQyLjY2MiAyMjUuMzQgMTM1Ljg3NyAxOTcuMzU3IDEzNS44NzdDMTY5LjM3MyAxMzUuODc3IDE0Ni42ODggMTQyLjY2MiAxNDYuNjg4IDE1MS4wMzFDMTQ2LjY4OCAxNTkuNCAxNjkuMzczIDE2Ni4xODUgMTk3LjM1NyAxNjYuMTg1WlwiXG4gICAgICAgIGZpbGw9XCIjQzRGQzY4XCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTE5Ny4zNTcgMTY2LjY5MkMxNjguNjUyIDE2Ni42OTIgMTQ2LjE4IDE1OS44MTEgMTQ2LjE4IDE1MS4wMzFDMTQ2LjE4IDE0Mi4yNTEgMTY4LjY1MiAxMzUuMzY5IDE5Ny4zNTcgMTM1LjM2OUMyMjYuMDYxIDEzNS4zNjkgMjQ4LjUzMyAxNDIuMjUxIDI0OC41MzMgMTUxLjAzMUMyNDguNTMzIDE1OS44MTEgMjI2LjA1MSAxNjYuNjkyIDE5Ny4zNTcgMTY2LjY5MlpNMTk3LjM1NyAxMzYuMzg0QzE3MC4xNjUgMTM2LjM4NCAxNDcuMTk1IDE0My4wOTQgMTQ3LjE5NSAxNTEuMDMxQzE0Ny4xOTUgMTU4Ljk2OCAxNzAuMTY1IDE2NS42NzcgMTk3LjM1NyAxNjUuNjc3QzIyNC41NDggMTY1LjY3NyAyNDcuNTE4IDE1OC45NjggMjQ3LjUxOCAxNTEuMDMxQzI0Ny41MTggMTQzLjA5NCAyMjQuNTQ4IDEzNi4zODQgMTk3LjM1NyAxMzYuMzg0WlwiXG4gICAgICAgIGZpbGw9XCIjMjMxRjIwXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTE3NS41OTUgMTQ4LjU2NEwxNTUuNzcyIDc1LjUzNTJMMTUyLjMwMSA3Ny44OUwxNzEuNTg2IDE0OS41NDlDMTcxLjU4NiAxNDkuNTQ5IDE3My4wODggMTUxLjAzMSAxNzUuNTk1IDE0OC41NjRaXCJcbiAgICAgICAgZmlsbD1cIndoaXRlXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTE3Mi44NzUgMTUwLjQ5M0MxNzIuMjgxIDE1MC41MDUgMTcxLjcwNCAxNTAuMjk5IDE3MS4yNTEgMTQ5LjkxNEMxNzEuMTkyIDE0OS44NSAxNzEuMTQ3IDE0OS43NzQgMTcxLjExOSAxNDkuNjkxTDE1MS44MzQgNzguMDMyMUMxNTEuODA0IDc3LjkzMTEgMTUxLjgwNyA3Ny44MjMxIDE1MS44NDQgNzcuNzI0MkMxNTEuODgxIDc3LjYyNTQgMTUxLjk0OCA3Ny41NDExIDE1Mi4wMzcgNzcuNDg0TDE1NS41MDggNzUuMTE5MUMxNTUuNTczIDc1LjA3MiAxNTUuNjQ5IDc1LjA0MTggMTU1LjcyOSA3NS4wMzEyQzE1NS44MDkgNzUuMDIwNiAxNTUuODkgNzUuMDI5OCAxNTUuOTY1IDc1LjA1ODJDMTU2LjA0MSA3NS4wODYzIDE1Ni4xMSA3NS4xMzIzIDE1Ni4xNjQgNzUuMTkyNEMxNTYuMjE5IDc1LjI1MjQgMTU2LjI1OSA3NS4zMjQ3IDE1Ni4yOCA3NS40MDMzTDE3Ni4xMzMgMTQ4LjQ4M0MxNzYuMTU3IDE0OC41NyAxNzYuMTU4IDE0OC42NjIgMTc2LjEzNSAxNDguNzVDMTc2LjExMSAxNDguODM3IDE3Ni4wNjUgMTQ4LjkxNyAxNzYuMDAxIDE0OC45ODFDMTc1LjE5OSAxNDkuODc3IDE3NC4wNzUgMTUwLjQyIDE3Mi44NzUgMTUwLjQ5M1pNMTcyLjA2MyAxNDkuMjY1QzE3Mi4zNTcgMTQ5LjQ1OCAxNzMuMzgyIDE0OS45MTQgMTc1LjA0NyAxNDguNDAyTDE1NS40NjggNzYuMzM3MUwxNTIuODg5IDc4LjEwMzJMMTcyLjA2MyAxNDkuMjY1WlwiXG4gICAgICAgIGZpbGw9XCIjMjMxRjIwXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTIwNy4yNjMgNzguMzI2NUMxOTUuNTE5IDU2LjI1MDIgMTcwLjk2NyA0NC4zOTUgMTQ3Ljc0MyA1MS4xNjUxQzEyNC41MiA1Ny45MzUxIDExMC4yMzkgODEuMjA5MSAxMTIuMjE4IDEwNi4xMjdMMjA3LjI2MyA3OC4zMjY1WlwiXG4gICAgICAgIGZpbGw9XCJ3aGl0ZVwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0xMTIuMjQ5IDEwNi42MzVDMTEyLjE0NyAxMDYuNjM0IDExMi4wNDggMTA2LjYwMiAxMTEuOTY1IDEwNi41NDNDMTExLjkwNCAxMDYuNSAxMTEuODU0IDEwNi40NDQgMTExLjgxNyAxMDYuMzc5QzExMS43OCAxMDYuMzE0IDExMS43NTggMTA2LjI0MiAxMTEuNzUxIDEwNi4xNjhDMTA5LjcyMSA4MC42OTE0IDEyNC43NjQgNTcuMzU2NiAxNDcuNjAxIDUwLjY3NzlDMTcwLjQzOSA0My45OTkyIDE5NS43MTIgNTUuNTI5NiAyMDcuNzEgNzguMDgyOUMyMDcuNzQyIDc4LjE0OTMgMjA3Ljc1OSA3OC4yMjIxIDIwNy43NTkgNzguMjk2QzIwNy43NTkgNzguMzY5OSAyMDcuNzQyIDc4LjQ0MjcgMjA3LjcxIDc4LjUwOTJDMjA3LjY4IDc4LjU3OSAyMDcuNjM2IDc4LjY0MTUgMjA3LjU4IDc4LjY5MjRDMjA3LjUyNCA3OC43NDMzIDIwNy40NTcgNzguNzgxMiAyMDcuMzg1IDc4LjgwMzVMMTEyLjM4MSAxMDYuNjA0TDExMi4yNDkgMTA2LjYzNVpNMTYwLjgxNyA0OS43OTQ4QzE1Ni40NCA0OS43OTEzIDE1Mi4wODYgNTAuNDEzNCAxNDcuODg1IDUxLjY0MjFDMTI1LjY5OCA1OC4xMzgxIDExMC45OSA4MC43MDE1IDExMi43MTYgMTA1LjQzN0wyMDYuNTEyIDc4LjAzMjFDMTk2LjkxIDYwLjQyMTggMTc5LjAyNiA0OS44MDUgMTYwLjgxNyA0OS44MDVWNDkuNzk0OFpcIlxuICAgICAgICBmaWxsPVwiIzIzMUYyMFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0xOTIuODUgODIuNTM4N0MxODIuNTg4IDYwLjAzNjIgMTYzLjkyMiA0Ni40MjUgMTQ3Ljc0MyA1MS4xNjUxQzEzMS41NjQgNTUuOTA1MSAxMjMuMTcgNzcuNDIzMSAxMjYuNjYyIDEwMS45MTVMMTkyLjg1IDgyLjUzODdaXCJcbiAgICAgICAgZmlsbD1cIiNFNkU3RThcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMTI2LjY2MiAxMDIuNDIzQzEyNi41NjUgMTAyLjQyMiAxMjYuNDY5IDEwMi4zOTQgMTI2LjM4OCAxMDIuMzQxQzEyNi4zMjYgMTAyLjMwMiAxMjYuMjc0IDEwMi4yNDkgMTI2LjIzNCAxMDIuMTg4QzEyNi4xOTQgMTAyLjEyNyAxMjYuMTY3IDEwMi4wNTggMTI2LjE1NCAxMDEuOTg2QzEyMi41MzEgNzYuNTI5OSAxMzEuMzUxIDU1LjQzODIgMTQ3LjYwMSA1MC42Nzc4QzE2My44NTEgNDUuOTE3NSAxODIuNjQ5IDU4LjkzOTkgMTkzLjI3NiA4Mi4zMzU3QzE5My4zMDYgODIuNDAwOSAxOTMuMzIyIDgyLjQ3MTkgMTkzLjMyMiA4Mi41NDM4QzE5My4zMjIgODIuNjE1NiAxOTMuMzA2IDgyLjY4NjYgMTkzLjI3NiA4Mi43NTE5QzE5My4yNDUgODIuODE3OSAxOTMuMTk5IDgyLjg3NjUgMTkzLjE0MyA4Mi45MjM3QzE5My4wODcgODIuOTcxIDE5My4wMjIgODMuMDA1OCAxOTIuOTUyIDgzLjAyNTlMMTI2Ljc2MyAxMDIuNDAyTDEyNi42NjIgMTAyLjQyM1pNMTU0LjIwOSA1MC43NTlDMTUyLjA2OSA1MC43NTUzIDE0OS45NCA1MS4wNTYxIDE0Ny44ODUgNTEuNjUyMkMxMzIuNTA4IDU2LjE0ODcgMTIzLjgzIDc2Ljk2NjMgMTI3LjA3OCAxMDEuMjM1TDE5Mi4xNSA4Mi4xOTM2QzE4My4xOTcgNjIuOTY5NSAxNjguMDg0IDUwLjc1OSAxNTQuMjA5IDUwLjc1OVpcIlxuICAgICAgICBmaWxsPVwiIzIzMUYyMFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0xNzQuMjU1IDg3Ljk3OTFDMTY1Ljg5MiA2NC45MTgzIDE0Ny43NDMgNTEuMTY1MSAxNDcuNzQzIDUxLjE2NTFDMTQ3Ljc0MyA1MS4xNjUxIDEzOS44NjcgNzIuNTQxIDE0NS4yNTcgOTYuNDY0NUwxNzQuMjU1IDg3Ljk3OTFaXCJcbiAgICAgICAgZmlsbD1cIndoaXRlXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTE0NS4yNTcgOTYuOTcyQzE0NS4xNjcgOTYuOTczOCAxNDUuMDc5IDk2Ljk0OTEgMTQ1LjAwMyA5Ni45MDFDMTQ0Ljk0MyA5Ni44NjY0IDE0NC44OTIgOTYuODE5NiAxNDQuODUxIDk2Ljc2MzZDMTQ0LjgxMSA5Ni43MDc2IDE0NC43ODMgOTYuNjQzNyAxNDQuNzY5IDk2LjU3NjJDMTM5LjQgNzIuODE1IDE0Ny4xNzUgNTEuMjA1NyAxNDcuMjY2IDUwLjk5MjVDMTQ3LjI5NCA1MC45MTc4IDE0Ny4zMzkgNTAuODUwNiAxNDcuMzk3IDUwLjc5NkMxNDcuNDU1IDUwLjc0MTQgMTQ3LjUyNSA1MC43MDEgMTQ3LjYwMSA1MC42Nzc5QzE0Ny42NzcgNTAuNjU4IDE0Ny43NTYgNTAuNjU1IDE0Ny44MzQgNTAuNjY5QzE0Ny45MTEgNTAuNjgzMSAxNDcuOTg0IDUwLjcxMzggMTQ4LjA0OCA1MC43NTkxQzE0OC4yMzEgNTAuOTAxMiAxNjYuNDE5IDY0Ljg3NzcgMTc0LjczMiA4Ny44MDY2QzE3NC43NTQgODcuODcxOCAxNzQuNzYzIDg3Ljk0MDkgMTc0Ljc1OCA4OC4wMDk2QzE3NC43NTMgODguMDc4NCAxNzQuNzM1IDg4LjE0NTQgMTc0LjcwNCA4OC4yMDY5QzE3NC42NzIgODguMjY4MyAxNzQuNjI5IDg4LjMyMjkgMTc0LjU3NyA4OC4zNjc1QzE3NC41MjQgODguNDEyIDE3NC40NjMgODguNDQ1NiAxNzQuMzk3IDg4LjQ2NjNMMTQ1LjM5OSA5Ni45NTE3QzE0NS4zNTMgOTYuOTY5IDE0NS4zMDUgOTYuOTc1OSAxNDUuMjU3IDk2Ljk3MlpNMTQ3Ljk4NyA1Mi4wMDc1QzE0Ni43NDkgNTUuNzgzMyAxNDEuMDg1IDc0Ljg3NTUgMTQ1LjY0MiA5NS44MjUxTDE3My41NjUgODcuNjQ0MkMxNjYuMTM1IDY3LjU0NzIgMTUxLjA2MiA1NC41NDUgMTQ3Ljk4NyA1Mi4wMDc1WlwiXG4gICAgICAgIGZpbGw9XCIjMjMxRjIwXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTMwMC45ODggMzcuNzQ2OEwyODcuNzkzIDQwLjM3NTZMMjc1Ljc0NSA0Mi43NzFMMjY0LjUwOSA0NS4wMDRMMjUyLjM5IDQ3LjQ0TDIzNS4wNDQgNTAuOTAxMkwyMzQuNzU5IDUyLjYxNjVMMjMyLjg0MSA2NC4wODZMMjMwLjI4MyA3OS4zMTFMMjI4LjQzNiA5MC4zOTQ4TDIyNi40NzcgMTAyLjA2N0wyMjQuNjMgMTEzLjA5TDIyMi42IDEyNS4xMjhMMjIwLjc1MiAxMzYuMjEyTDIxOC41NSAxNDkuNDA3QzIxOC41NSAxNDkuNDA3IDIxOS41NjUgMTUyLjAxNSAyMjQuNjQgMTUyLjMxQzIyOS43MTUgMTUyLjYwNCAyMzAuMDI5IDE0OS40MDcgMjMwLjAyOSAxNDkuNDA3TDIzMS4xMTUgMTQyLjg1TDIzMy4wMzQgMTMxLjUwMkwyMzUuMDY0IDExOS40NzVMMjM2Ljk3MiAxMDguMTU3TDIzOC44MTkgOTcuMTI0M0wyNDAuNzM4IDg1LjczNkwyNDIuOTQgNzIuNTQxTDI0NS4wMzEgNjAuMTQ3OFY1OS45NTVMMjU5Ljk3MiA1Ny4wNzI0TDI3MC43ODIgNTUuMDQyNEwyODMuNDQ5IDUyLjYwNjRMMjkzLjk4NSA1MC41NzY0TDMwMi43MzQgNDguODkxNUMzMDIuNzM0IDQ4Ljg5MTUgMzA2LjU4MSA0MS4xMzY5IDMwMC45ODggMzcuNzQ2OFpcIlxuICAgICAgICBmaWxsPVwid2hpdGVcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMjI1LjMzIDE1Mi44NDhDMjI1LjExNyAxNTIuODQ4IDIyNC44ODMgMTUyLjg0OCAyMjQuNjUgMTUyLjg0OEMyMTkuMzcyIDE1Mi41MzMgMjE4LjE4NCAxNDkuNzQyIDIxOC4xMzQgMTQ5LjYzQzIxOC4xMTQgMTQ5LjU0IDIxOC4xMTQgMTQ5LjQ0NiAyMTguMTM0IDE0OS4zNTZMMjM0LjU0NiA1MC43ODk1QzIzNC41NjIgNTAuNjg4MyAyMzQuNjA5IDUwLjU5NDMgMjM0LjY4IDUwLjUyQzIzNC43NSA1MC40NDU4IDIzNC44NDIgNTAuMzk0NiAyMzQuOTQyIDUwLjM3MzRMMzAwLjkxNyAzNy4yNDk0QzMwMC45NzcgMzcuMjMzNyAzMDEuMDQgMzcuMjMxIDMwMS4xMDEgMzcuMjQxNUMzMDEuMTYzIDM3LjI1MiAzMDEuMjIxIDM3LjI3NTQgMzAxLjI3MiAzNy4zMTAzQzMwNy4yMSA0MC45MDM0IDMwMy4zMDIgNDkuMDEzMyAzMDMuMjMxIDQ5LjA5NDVDMzAzLjE5OCA0OS4xNjM5IDMwMy4xNDggNDkuMjI0MSAzMDMuMDg2IDQ5LjI3MDFDMzAzLjAyNCA0OS4zMTYxIDMwMi45NTIgNDkuMzQ2MyAzMDIuODc2IDQ5LjM1ODRMMjQ1LjQ4OCA2MC40MDE2TDIzMC41MTcgMTQ5LjQ5OEMyMzAuNTE3IDE0OS40OTggMjMwLjA5IDE1Mi44NDggMjI1LjMzIDE1Mi44NDhaTTIxOS4xMjggMTQ5LjMzNkMyMTkuNDAyIDE0OS44MDMgMjIwLjY2MSAxNTEuNTY5IDIyNC43MTEgMTUxLjgxMkMyMjkuMTM2IDE1Mi4wNzYgMjI5LjU1MiAxNDkuNDY4IDIyOS41NjMgMTQ5LjM1NkwyNDQuNTg1IDU5LjkwNDJDMjQ0LjYgNTkuNzk5OCAyNDQuNjQ3IDU5LjcwMjYgMjQ0LjcxOSA1OS42MjYyQzI0NC43OTIgNTkuNTQ5OCAyNDQuODg3IDU5LjQ5NzkgMjQ0Ljk5MSA1OS40Nzc5TDMwMi4zOTkgNDguNDU1QzMwMi45NTcgNDcuMTk2NCAzMDUuMzQyIDQxLjIwNzkgMzAwLjg4NyAzOC4zMDVMMjM1LjQ4IDUxLjMwNzJMMjE5LjEyOCAxNDkuMzM2WlwiXG4gICAgICAgIGZpbGw9XCIjMjMxRjIwXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTI3NS43NDUgNDIuNzcxQzI3OC42MTEgNDUuNzk2NyAyODEuMTkzIDQ5LjA3ODcgMjgzLjQ1OSA1Mi41NzU5TDI5My45OTUgNTAuNTQ1OUMyOTIuMjI0IDQ2Ljk5MjEgMjkwLjE1MyA0My41OTY0IDI4Ny44MDMgNDAuMzk1OUwyNzUuNzQ1IDQyLjc3MVpcIlxuICAgICAgICBmaWxsPVwiI0QxRDNENFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yODMuNDU5IDUzLjA4MzRDMjgzLjM3NCA1My4wODMzIDI4My4yOTEgNTMuMDYxOCAyODMuMjE2IDUzLjAyMUMyODMuMTQyIDUyLjk4MDIgMjgzLjA3OSA1Mi45MjE0IDI4My4wMzMgNTIuODVDMjgwLjc4OCA0OS4zNzYgMjc4LjIyNiA0Ni4xMTc1IDI3NS4zOCA0My4xMTYxQzI3NS4zMTYgNDMuMDUyIDI3NS4yNzEgNDIuOTcxOSAyNzUuMjUgNDIuODg0M0MyNzUuMjI4IDQyLjc5NjcgMjc1LjIzMSA0Mi43MDQ5IDI3NS4yNTggNDIuNjE4OEMyNzUuMjg3IDQyLjUzMyAyNzUuMzM4IDQyLjQ1NjEgMjc1LjQwNSA0Mi4zOTU3QzI3NS40NzMgNDIuMzM1MiAyNzUuNTU1IDQyLjI5MzIgMjc1LjY0NCA0Mi4yNzM3TDI4Ny43MDIgMzkuODc4M0MyODcuNzk2IDM5Ljg2MDMgMjg3Ljg5MyAzOS44Njg4IDI4Ny45ODMgMzkuOTAyOEMyODguMDcyIDM5LjkzNjkgMjg4LjE1MSAzOS45OTUxIDI4OC4yMDkgNDAuMDcxMUMyOTAuNTg0IDQzLjMwMDUgMjkyLjY3MiA0Ni43MzA3IDI5NC40NTEgNTAuMzIyNkMyOTQuNDg1IDUwLjM5MyAyOTQuNTAzIDUwLjQ3MDIgMjk0LjUwMyA1MC41NDg0QzI5NC41MDMgNTAuNjI2NiAyOTQuNDg1IDUwLjcwMzggMjk0LjQ1MSA1MC43NzQxQzI5NC40MTcgNTAuODQ0NCAyOTQuMzY3IDUwLjkwNjEgMjk0LjMwNiA1MC45NTQ0QzI5NC4yNDQgNTEuMDAyOCAyOTQuMTczIDUxLjAzNjcgMjk0LjA5NiA1MS4wNTM0TDI4My41NSA1My4wODM0SDI4My40NTlaTTI3Ni43NCA0My4wOTU4QzI3OS4zMDYgNDUuODY2MSAyODEuNjM1IDQ4Ljg0NzIgMjgzLjcwMyA1Mi4wMDc1TDI5My4yNDQgNTAuMTgwNUMyOTEuNjAzIDQ2Ljk1MzcgMjg5LjcwOSA0My44NjE4IDI4Ny41OCA0MC45MzM5TDI3Ni43NCA0My4wOTU4WlwiXG4gICAgICAgIGZpbGw9XCIjMjMxRjIwXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTIzMi44NDEgNjQuMDU1NkMyMzYuNTAzIDY2LjUxMjIgMjM5Ljg4MyA2OS4zNjQ2IDI0Mi45MiA3Mi41NjEzTDI0NS4wMTEgNjAuMTY4MUMyNDEuOTM0IDU3LjIxMDMgMjM4LjQ4OCA1NC42NjE5IDIzNC43NTkgNTIuNTg2MUwyMzIuODQxIDY0LjA1NTZaXCJcbiAgICAgICAgZmlsbD1cIiNEMUQzRDRcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMjQyLjkyIDczLjA2ODhDMjQyLjc4MiA3My4wNjQ2IDI0Mi42NSA3My4wMDYzIDI0Mi41NTUgNzIuOTA2M0MyMzkuNTQxIDY5LjczNjkgMjM2LjE4OCA2Ni45MDg0IDIzMi41NTcgNjQuNDcxN0MyMzIuNDc2IDY0LjQxOTIgMjMyLjQxMyA2NC4zNDM5IDIzMi4zNzUgNjQuMjU1M0MyMzIuMzM3IDY0LjE2NjggMjMyLjMyNiA2NC4wNjkgMjMyLjM0NCA2My45NzQ0TDIzNC4yNjIgNTIuNTE1QzIzNC4yNzIgNTIuNDM0MiAyMzQuMzAyIDUyLjM1NzMgMjM0LjM1IDUyLjI5MTZDMjM0LjM5OCA1Mi4yMjU5IDIzNC40NjIgNTIuMTczNSAyMzQuNTM2IDUyLjEzOTVDMjM0LjYwNiA1Mi4xMDIxIDIzNC42ODUgNTIuMDgyNiAyMzQuNzY0IDUyLjA4MjZDMjM0Ljg0NCA1Mi4wODI2IDIzNC45MjIgNTIuMTAyMSAyMzQuOTkzIDUyLjEzOTVDMjM4Ljc2MyA1NC4yMzE5IDI0Mi4yNDcgNTYuODA0MyAyNDUuMzU2IDU5Ljc5MjZDMjQ1LjQxNiA1OS44NTA3IDI0NS40NjIgNTkuOTIyNiAyNDUuNDg4IDYwLjAwMjJDMjQ1LjUxNSA2MC4wODE3IDI0NS41MjIgNjAuMTY2NSAyNDUuNTA4IDYwLjI0OTNMMjQzLjQ3OCA3Mi42NDI1QzI0My40NjIgNzIuNzM2MiAyNDMuNDIgNzIuODIzOCAyNDMuMzU4IDcyLjg5NTRDMjQzLjI5NSA3Mi45NjcgMjQzLjIxNCA3My4wMiAyNDMuMTIzIDczLjA0ODVMMjQyLjkyIDczLjA2ODhaTTIzMy4zODkgNjMuODIyMUMyMzYuNjk4IDY2LjA2NTcgMjM5Ljc3OCA2OC42MjkgMjQyLjU4NSA3MS40NzUyTDI0NC40NTMgNjAuMzEwMkMyNDEuNjMgNTcuNjI5OSAyMzguNTAyIDU1LjI4OTYgMjM1LjEzNSA1My4zMzcyTDIzMy4zODkgNjMuODIyMVpcIlxuICAgICAgICBmaWxsPVwiIzIzMUYyMFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yMjguNDM2IDkwLjM5NDhDMjMyLjEyMSA5Mi4yNDg2IDIzNS41OTYgOTQuNDk0NiAyMzguNzk5IDk3LjA5MzhMMjQwLjcxNyA4NS43MDU1QzIzNy40NjIgODMuMjI5OSAyMzMuOTY3IDgxLjA4NzcgMjMwLjI4MyA3OS4zMTFMMjI4LjQzNiA5MC4zOTQ4WlwiXG4gICAgICAgIGZpbGw9XCIjRDFEM0Q0XCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTIzOC43OTkgOTcuNjAxM0MyMzguNjg0IDk3LjYwNTEgMjM4LjU3MSA5Ny41NjUyIDIzOC40ODQgOTcuNDg5N0MyMzUuMzA2IDk0LjkxMyAyMzEuODU5IDkyLjY4NzMgMjI4LjIwMiA5MC44NTE2QzIyOC4xMDUgOTAuODAzMSAyMjguMDI2IDkwLjcyNDYgMjI3Ljk3NyA5MC42Mjc4QzIyNy45MjcgOTAuNTMwOSAyMjcuOTEgOTAuNDIwOCAyMjcuOTI4IDkwLjMxMzZMMjI5Ljc4NiA3OS4yMjk4QzIyOS43OTkgNzkuMTUyOSAyMjkuODMgNzkuMDgwMiAyMjkuODc2IDc5LjAxNjlDMjI5LjkyMiA3OC45NTM2IDIyOS45ODEgNzguOTAxNSAyMzAuMDUgNzguODY0NEMyMzAuMTE5IDc4LjgyOTYgMjMwLjE5NSA3OC44MTE1IDIzMC4yNzMgNzguODExNUMyMzAuMzUxIDc4LjgxMTUgMjMwLjQyNyA3OC44Mjk2IDIzMC40OTYgNzguODY0NEMyMzQuMjE2IDgwLjY0NjUgMjM3Ljc0MyA4Mi44MDYyIDI0MS4wMjIgODUuMzA5N0MyNDEuMDk3IDg1LjM2NDQgMjQxLjE1NiA4NS40Mzg5IDI0MS4xOTIgODUuNTI0OEMyNDEuMjI4IDg1LjYxMDcgMjQxLjIzOSA4NS43MDQ4IDI0MS4yMjUgODUuNzk2OUwyMzkuMzA3IDk3LjE3NUMyMzkuMjkxIDk3LjI2MiAyMzkuMjUyIDk3LjM0MzQgMjM5LjE5NSA5Ny40MTFDMjM5LjEzOCA5Ny40Nzg3IDIzOS4wNjUgOTcuNTMwMyAyMzguOTgyIDk3LjU2MDdDMjM4LjkyMyA5Ny41ODQxIDIzOC44NjIgOTcuNTk3OCAyMzguNzk5IDk3LjYwMTNaTTIyOC45OTQgOTAuMDdDMjMyLjMzNSA5MS43ODc1IDIzNS41IDkzLjgyNzIgMjM4LjQ0NCA5Ni4xNkwyNDAuMTY5IDg1LjkyODhDMjM3LjE5MyA4My42ODYxIDIzNC4wMTYgODEuNzIyMiAyMzAuNjc5IDgwLjA2MjFMMjI4Ljk5NCA5MC4wN1pcIlxuICAgICAgICBmaWxsPVwiIzIzMUYyMFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yMjQuNjMgMTEzLjA5QzIyOC4zMDYgMTE0Ljg0NCAyMzEuNzk1IDExNi45NjYgMjM1LjA0NCAxMTkuNDI0TDIzNi45NTIgMTA4LjEwN0MyMzMuNjkzIDEwNS43IDIzMC4xODEgMTAzLjY1OCAyMjYuNDc3IDEwMi4wMTdMMjI0LjYzIDExMy4wOVpcIlxuICAgICAgICBmaWxsPVwiI0QxRDNENFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yMzUuMDQ0IDExOS45NTJDMjM0LjkzMyAxMTkuOTU2IDIzNC44MjUgMTE5LjkyIDIzNC43MzkgMTE5Ljg1QzIzMS41MjEgMTE3LjQxIDIyOC4wNjIgMTE1LjMwNSAyMjQuNDE3IDExMy41NjdDMjI0LjMyOSAxMTMuNTI3IDIyNC4yNTUgMTEzLjQ2MiAyMjQuMjAzIDExMy4zODJDMjI0LjE1MSAxMTMuMzAxIDIyNC4xMjMgMTEzLjIwNyAyMjQuMTIyIDExMy4xMTFDMjI0LjEyMiAxMTMuMTExIDIyNC4xMjIgMTEzLjAzOSAyMjQuMTIyIDExMy4wMDlMMjI1Ljk1OSAxMDEuOTc2QzIyNS45NzMgMTAxLjkgMjI2LjAwNCAxMDEuODI5IDIyNi4wNSAxMDEuNzY3QzIyNi4wOTUgMTAxLjcwNiAyMjYuMTU1IDEwMS42NTYgMjI2LjIyMyAxMDEuNjIxQzIyNi4yOTEgMTAxLjU4NiAyMjYuMzY2IDEwMS41NjggMjI2LjQ0MSAxMDEuNTY4QzIyNi41MTcgMTAxLjU2OCAyMjYuNTkyIDEwMS41ODYgMjI2LjY2IDEwMS42MjFDMjMwLjM5OSAxMDMuMjU1IDIzMy45NDYgMTA1LjI5NyAyMzcuMjM2IDEwNy43MTFDMjM3LjMxMiAxMDcuNzY3IDIzNy4zNzEgMTA3Ljg0MyAyMzcuNDA3IDEwNy45MzFDMjM3LjQ0MyAxMDguMDE5IDIzNy40NTQgMTA4LjExNSAyMzcuNDM5IDEwOC4yMDhMMjM1LjU0MSAxMTkuNTA1QzIzNS41MjggMTE5LjU5MyAyMzUuNDkyIDExOS42NzUgMjM1LjQzNiAxMTkuNzQ1QzIzNS4zODEgMTE5LjgxNCAyMzUuMzA5IDExOS44NjggMjM1LjIyNiAxMTkuOTAxQzIzNS4xNjkgMTE5LjkyOCAyMzUuMTA3IDExOS45NDUgMjM1LjA0NCAxMTkuOTUyWk0yMjUuMTk4IDExMi44NDdDMjI4LjUyNyAxMTQuNDU5IDIzMS43MDEgMTE2LjM3NiAyMzQuNjc4IDExOC41NzFMMjM2LjM5MyAxMDguNDIxQzIzMy40MTcgMTA2LjI0NiAyMzAuMjI3IDEwNC4zNzkgMjI2Ljg3MyAxMDIuODQ5TDIyNS4xOTggMTEyLjg0N1pcIlxuICAgICAgICBmaWxsPVwiIzIzMUYyMFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yMjAuNzYyIDEzNi4yMzJDMjI0LjQzNiAxMzguMDY5IDIyNy45MDYgMTQwLjI4NyAyMzEuMTE1IDE0Mi44NUwyMzMuMDM0IDEzMS41MDJDMjI5Ljc4OSAxMjkuMDM3IDIyNi4yOTYgMTI2LjkxNyAyMjIuNjEgMTI1LjE3OUwyMjAuNzYyIDEzNi4yMzJaXCJcbiAgICAgICAgZmlsbD1cIiNEMUQzRDRcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMjMxLjExNSAxNDMuMzQ3QzIzMC45OTggMTQzLjM0OSAyMzAuODgzIDE0My4zMSAyMzAuNzkxIDE0My4yMzZDMjI3LjYxNSAxNDAuNjkxIDIyNC4xNzUgMTM4LjQ5NiAyMjAuNTI5IDEzNi42ODlDMjIwLjQzNSAxMzYuNjM3IDIyMC4zNTggMTM2LjU1OCAyMjAuMzA5IDEzNi40NjJDMjIwLjI2MSAxMzYuMzY2IDIyMC4yNDIgMTM2LjI1OCAyMjAuMjU1IDEzNi4xNTFMMjIyLjExMiAxMjUuMDY3QzIyMi4xMjMgMTI0Ljk4OSAyMjIuMTUyIDEyNC45MTUgMjIyLjE5OSAxMjQuODUxQzIyMi4yNDUgMTI0Ljc4OCAyMjIuMzA2IDEyNC43MzYgMjIyLjM3NiAxMjQuNzAyQzIyMi40NDUgMTI0LjY2NCAyMjIuNTIyIDEyNC42NDUgMjIyLjYgMTI0LjY0NUMyMjIuNjc4IDEyNC42NDUgMjIyLjc1NCAxMjQuNjY0IDIyMi44MjMgMTI0LjcwMkMyMjYuNTQzIDEyNi40NSAyMzAuMDY4IDEyOC41ODYgMjMzLjMzOCAxMzEuMDc2QzIzMy40MDIgMTMxLjEyMyAyMzMuNDU0IDEzMS4xODQgMjMzLjQ4OSAxMzEuMjU0QzIzMy41MjQgMTMxLjMyNSAyMzMuNTQyIDEzMS40MDMgMjMzLjU0MSAxMzEuNDgyTDIzMS42MTMgMTQyLjk0MUMyMzEuNTk4IDE0My4wMjcgMjMxLjU2MSAxNDMuMTA4IDIzMS41MDYgMTQzLjE3NUMyMzEuNDUxIDE0My4yNDMgMjMxLjM3OSAxNDMuMjk1IDIzMS4yOTggMTQzLjMyN0wyMzEuMTE1IDE0My4zNDdaTTIyMS4zMjEgMTM1Ljk0OEMyMjQuNjQ3IDEzNy42MzQgMjI3LjgwNyAxMzkuNjI5IDIzMC43NiAxNDEuOTA2TDIzMi40ODYgMTMxLjY5NUMyMjkuNTEzIDEyOS40NjkgMjI2LjMzOSAxMjcuNTI1IDIyMy4wMDYgMTI1Ljg4OUwyMjEuMzIxIDEzNS45NDhaXCJcbiAgICAgICAgZmlsbD1cIiMyMzFGMjBcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMjUyLjM5IDQ3LjQ0QzI1NS4xNzQgNTAuNDYwNyAyNTcuNzEzIDUzLjY5ODYgMjU5Ljk4MiA1Ny4xMjMxTDI3MC43OTIgNTUuMDkzMUMyNjkuMDM3IDUxLjU1NTkgMjY2LjkzMiA0OC4yMDMyIDI2NC41MDkgNDUuMDg1MkwyNTIuMzkgNDcuNDRaXCJcbiAgICAgICAgZmlsbD1cIiNEMUQzRDRcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMjU5Ljk4MiA1Ny41OUMyNTkuODk4IDU3LjU5MDEgMjU5LjgxNiA1Ny41Njk4IDI1OS43NDEgNTcuNTMwOUMyNTkuNjY3IDU3LjQ5MiAyNTkuNjAzIDU3LjQzNTcgMjU5LjU1NiA1Ny4zNjY3QzI1Ny4zMDkgNTMuOTU4OSAyNTQuNzg3IDUwLjc0MDcgMjUyLjAxNCA0Ny43NDQ1QzI1MS45NTQgNDcuNjc4MyAyNTEuOTEzIDQ3LjU5NzcgMjUxLjg5MyA0Ny41MTA1QzI1MS44NzMgNDcuNDIzNCAyNTEuODc3IDQ3LjMzMjcgMjUxLjkwMyA0Ny4yNDcyQzI1MS45MzIgNDcuMTYxNCAyNTEuOTgzIDQ3LjA4NDUgMjUyLjA1IDQ3LjAyNDFDMjUyLjExOCA0Ni45NjM3IDI1Mi4yIDQ2LjkyMTYgMjUyLjI4OCA0Ni45MDIxTDI2NC40MDcgNDQuNDk2NUMyNjQuNDk5IDQ0LjQ3NyAyNjQuNTk1IDQ0LjQ4MzggMjY0LjY4MyA0NC41MTYxQzI2NC43NzEgNDQuNTQ4NSAyNjQuODQ4IDQ0LjYwNSAyNjQuOTA1IDQ0LjY3OTJDMjY3LjM0OSA0Ny44MjMxIDI2OS40NzQgNTEuMjAyOSAyNzEuMjQ5IDU0Ljc2ODNDMjcxLjI4MyA1NC44Mzg3IDI3MS4zIDU0LjkxNTkgMjcxLjMgNTQuOTk0MUMyNzEuMyA1NS4wNzIzIDI3MS4yODIgNTUuMTQ5NSAyNzEuMjQ4IDU1LjIxOThDMjcxLjIxNCA1NS4yOTAxIDI3MS4xNjQgNTUuMzUxOCAyNzEuMTAzIDU1LjQwMDJDMjcxLjA0MSA1NS40NDg1IDI3MC45NyA1NS40ODI0IDI3MC44OTMgNTUuNDk5MUwyNjAuMDg0IDU3LjUyOTFMMjU5Ljk4MiA1Ny41OVpNMjUzLjM2NCA0Ny43MjQyQzI1NS44NjQgNTAuNTAzMyAyNTguMTU3IDUzLjQ2MTUgMjYwLjIyNiA1Ni41NzVMMjY5Ljk5IDU0LjYzNjRDMjY4LjM2NiA1MS40NDEzIDI2Ni40NSA0OC40MDM2IDI2NC4yNjUgNDUuNTYyM0wyNTMuMzY0IDQ3LjcyNDJaXCJcbiAgICAgICAgZmlsbD1cIiMyMzFGMjBcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMTk3LjM4NyAxMTkuNzg5QzE2NC43NTUgMTE5Ljc4OSAxMzguMjEzIDExMC42NTQgMTM4LjIxMyA5OS41NTAxQzEzOC4yMTMgOTkuNDE1NSAxMzguMjY2IDk5LjI4NjQgMTM4LjM2MSA5OS4xOTEzQzEzOC40NTYgOTkuMDk2MSAxMzguNTg1IDk5LjA0MjYgMTM4LjcyIDk5LjA0MjZDMTM4Ljg1NSA5OS4wNDI2IDEzOC45ODQgOTkuMDk2MSAxMzkuMDc5IDk5LjE5MTNDMTM5LjE3NCA5OS4yODY0IDEzOS4yMjggOTkuNDE1NSAxMzkuMjI4IDk5LjU1MDFDMTM5LjIyOCAxMTAuMTQ3IDE2NS4zMTMgMTE4Ljc3NCAxOTcuMzg3IDExOC43NzRDMjI5LjQ2MSAxMTguNzc0IDI1NS41NDcgMTEwLjE0NyAyNTUuNTQ3IDk5LjU1MDFDMjU1LjU0NyA5OS40MTU1IDI1NS42IDk5LjI4NjQgMjU1LjY5NSA5OS4xOTEzQzI1NS43OSA5OS4wOTYxIDI1NS45MTkgOTkuMDQyNiAyNTYuMDU0IDk5LjA0MjZDMjU2LjE4OSA5OS4wNDI2IDI1Ni4zMTggOTkuMDk2MSAyNTYuNDEzIDk5LjE5MTNDMjU2LjUwOCA5OS4yODY0IDI1Ni41NjIgOTkuNDE1NSAyNTYuNTYyIDk5LjU1MDFDMjU2LjU2MiAxMTAuODk4IDIzMC41NjcgMTE5Ljc4OSAxOTcuMzg3IDExOS43ODlaXCJcbiAgICAgICAgZmlsbD1cIiMyMzFGMjBcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMjA5Ljg5MiAxODguMDE4QzIwNi41NTIgMTg4LjAxOCAyMDYuNTUyIDE5My4yMDQgMjA5Ljg5MiAxOTMuMjA0QzIxMy4yMzEgMTkzLjIwNCAyMTMuMjMxIDE4OC4wMTggMjA5Ljg5MiAxODguMDE4WlwiXG4gICAgICAgIGZpbGw9XCJ3aGl0ZVwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yMTYuMTk1IDIzNS4zNTdMMjE1Ljk1MSAyMzQuODdDMjE1LjQwOSAyMzQuMDIxIDIxNC41ODcgMjMzLjM4OSAyMTMuNjI3IDIzMy4wODRDMjEzLjEyNCAyMzIuOTI2IDIxMi41ODkgMjMyLjkwMSAyMTIuMDc0IDIzMy4wMTJDMjExLjU1OCAyMzMuMDMyIDIxMS4wNTcgMjMzLjE5IDIxMC42MjMgMjMzLjQ2OUwyMDkuODQxIDIzNC4wNzhDMjA5LjM2MSAyMzQuNTUzIDIwOS4wMTEgMjM1LjE0NCAyMDguODI2IDIzNS43OTRDMjA4LjgyNiAyMzYuMTM5IDIwOC43MzUgMjM2LjQ4NCAyMDguNjk0IDIzNi44MDlDMjA4LjY5IDIzNy41IDIwOC44NzIgMjM4LjE4MSAyMDkuMjIyIDIzOC43NzhMMjA5LjQ2NiAyMzkuMjU1QzIwOS43MDIgMjM5LjcwMiAyMTAuMDUyIDI0MC4wOCAyMTAuNDgxIDI0MC4zNTFDMjEwLjg1IDI0MC42OTUgMjExLjMwNiAyNDAuOTM0IDIxMS44IDI0MS4wNDFDMjEyLjgyOCAyNDEuMjgyIDIxMy45MDkgMjQxLjE0NSAyMTQuODQ1IDI0MC42NTVMMjE1LjYyNyAyNDAuMDQ2QzIxNi4xMDcgMjM5LjU3MSAyMTYuNDU2IDIzOC45ODEgMjE2LjY0MiAyMzguMzMxQzIxNi42NDIgMjM3Ljk4NiAyMTYuNzMzIDIzNy42NDEgMjE2Ljc3NCAyMzcuMzE2QzIxNi43NjQgMjM2LjYyMiAyMTYuNTY0IDIzNS45NDUgMjE2LjE5NSAyMzUuMzU3WlwiXG4gICAgICAgIGZpbGw9XCJ3aGl0ZVwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0xNzguMDIxIDE3OC4yMTNDMTczLjAxNyAxNzguMjEzIDE3My4wMDcgMTg1Ljk4OCAxNzguMDIxIDE4NS45ODhDMTgzLjAzNSAxODUuOTg4IDE4My4wMjUgMTc4LjIxMyAxNzguMDIxIDE3OC4yMTNaXCJcbiAgICAgICAgZmlsbD1cIndoaXRlXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTE5Ny43MjIgMjA0LjAwNEMxOTIuNzE4IDIwNC4wMDQgMTkyLjcwOCAyMTEuNzc5IDE5Ny43MjIgMjExLjc3OUMyMDIuNzM2IDIxMS43NzkgMjAyLjczNiAyMDQuMDA0IDE5Ny43MjIgMjA0LjAwNFpcIlxuICAgICAgICBmaWxsPVwid2hpdGVcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMTc3LjUzNCAyMjguMTFDMTcyLjUzIDIyOC4xMSAxNzIuNTIgMjM1Ljg4NSAxNzcuNTM0IDIzNS44ODVDMTgyLjU0OCAyMzUuODg1IDE4Mi41MzggMjI4LjExIDE3Ny41MzQgMjI4LjExWlwiXG4gICAgICAgIGZpbGw9XCJ3aGl0ZVwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yMjguMTQyIDE5My41MzlDMjIzLjEzOCAxOTMuNTM5IDIyMy4xMjcgMjAxLjMxNCAyMjguMTQyIDIwMS4zMTRDMjMzLjE1NiAyMDEuMzE0IDIzMy4xNTYgMTkzLjUzOSAyMjguMTQyIDE5My41MzlaXCJcbiAgICAgICAgZmlsbD1cIndoaXRlXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTE3MC4zNDcgMjAxLjIwMkMxNjUuMzQ0IDIwMS4yMDIgMTY1LjM0NCAyMDguOTc3IDE3MC4zNDcgMjA4Ljk3N0MxNzUuMzUxIDIwOC45NzcgMTc1LjM2MiAyMDEuMjAyIDE3MC4zNDcgMjAxLjIwMlpcIlxuICAgICAgICBmaWxsPVwid2hpdGVcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMjI2LjE5MyAyMTkuMDg3QzIyMS4xODkgMjE5LjA4NyAyMjEuMTc5IDIyNi44NjIgMjI2LjE5MyAyMjYuODYyQzIzMS4yMDcgMjI2Ljg2MiAyMzEuMjA3IDIxOS4wODcgMjI2LjE5MyAyMTkuMDg3WlwiXG4gICAgICAgIGZpbGw9XCJ3aGl0ZVwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0xOTQuNTY1IDE4MS40MkMxOTEuMjI2IDE4MS40MiAxOTEuMjE2IDE4Ni42MDcgMTk0LjU2NSAxODYuNjA3QzE5Ny45MTUgMTg2LjYwNyAxOTcuOTI1IDE4MS40MiAxOTQuNTY1IDE4MS40MlpcIlxuICAgICAgICBmaWxsPVwid2hpdGVcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMTk2LjIzIDI0My4zOTZDMTk2LjE3NCAyNDMuMjM5IDE5Ni4wODQgMjQzLjA5NyAxOTUuOTY2IDI0Mi45OEMxOTUuODQ5IDI0Mi44NjIgMTk1LjcwNiAyNDIuNzcyIDE5NS41NSAyNDIuNzE2QzE5NS4zOTcgMjQyLjYzNCAxOTUuMjI1IDI0Mi41OTUgMTk1LjA1MyAyNDIuNjA0SDE5NC43MDdDMTk0LjQ4OCAyNDIuNjYzIDE5NC4yODkgMjQyLjc3OCAxOTQuMTI5IDI0Mi45MzlDMTk0LjA2OCAyNDMuMDMxIDE5My45OTcgMjQzLjExMiAxOTMuOTI2IDI0My4yMDNDMTkzLjgxMiAyNDMuNDA0IDE5My43NTMgMjQzLjYzMiAxOTMuNzUzIDI0My44NjNWMjQ0LjM1QzE5My43NDYgMjQ0LjUyNiAxOTMuNzg0IDI0NC43MDEgMTkzLjg2NSAyNDQuODU4QzE5My45MTcgMjQ1LjAxNiAxOTQuMDA4IDI0NS4xNTkgMTk0LjEyOSAyNDUuMjc0QzE5NC4yNDUgMjQ1LjM5MyAxOTQuMzg4IDI0NS40ODMgMTk0LjU0NSAyNDUuNTM4QzE5NC43MDIgMjQ1LjYxOCAxOTQuODc3IDI0NS42NTcgMTk1LjA1MyAyNDUuNjQ5SDE5NS4zOThDMTk1LjYxMyAyNDUuNTg4IDE5NS44MDkgMjQ1LjQ3MyAxOTUuOTY2IDI0NS4zMTRMMTk2LjE2OSAyNDUuMDVDMTk2LjI4MyAyNDQuODQ5IDE5Ni4zNDIgMjQ0LjYyMiAxOTYuMzQyIDI0NC4zOTFWMjQzLjkxNEMxOTYuMzUxIDI0My43MzQgMTk2LjMxMiAyNDMuNTU2IDE5Ni4yMyAyNDMuMzk2WlwiXG4gICAgICAgIGZpbGw9XCJ3aGl0ZVwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0xODMuMzcgMjEzLjlDMTc5LjE5OCAyMTMuOSAxNzkuMTg4IDIyMC4zODYgMTgzLjM3IDIyMC4zODZDMTg3LjU1MiAyMjAuMzg2IDE4Ny41NTIgMjEzLjkgMTgzLjM3IDIxMy45WlwiXG4gICAgICAgIGZpbGw9XCJ3aGl0ZVwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yMTMuMDU5IDIxMi40MzhDMjA4Ljg4NyAyMTIuNDM4IDIwOC44NzcgMjE4LjkxNCAyMTMuMDU5IDIxOC45MTRDMjE3LjI0IDIxOC45MTQgMjE3LjIxIDIxMi40MzggMjEzLjA1OSAyMTIuNDM4WlwiXG4gICAgICAgIGZpbGw9XCJ3aGl0ZVwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0xNjIuOTI4IDE3NC4xNTNDMTU5LjU5OSAxNzQuMTUzIDE1OS41ODggMTc5LjMzOSAxNjIuOTI4IDE3OS4zMzlDMTY2LjI2NyAxNzkuMzM5IDE2Ni4yNzcgMTc0LjE1MyAxNjIuOTI4IDE3NC4xNTNaXCJcbiAgICAgICAgZmlsbD1cIndoaXRlXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTIzMC4wOSAxNzUuMTI3QzIyNi43NTEgMTc1LjEyNyAyMjYuNzQxIDE4MC4zMTQgMjMwLjA5IDE4MC4zMTRDMjMzLjQ0IDE4MC4zMTQgMjMzLjQ1IDE3NS4xMjcgMjMwLjA5IDE3NS4xMjdaXCJcbiAgICAgICAgZmlsbD1cIndoaXRlXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTE5MS43NjQgMjIzLjgyN0MxOTYuODM5IDIxOC4yOTUgMjIzLjY4NiAyMTYuNTM5IDIzOC42NDcgMjE3LjU2NEMyNTMuNjA4IDIxOC41ODkgMjYxLjM0MiAyMjUuMDA0IDI2My42NzcgMjMyLjk1MkMyNjYuMDExIDI0MC44OTkgMjY4LjQzNyAyNjUuMzQgMjQ4Ljk3OSAyNzMuODM2QzIyOS41MjIgMjgyLjMzMSAyMDQuMzIgMjgxLjQ1OCAxOTUuNzczIDI2OS4zNkMxODcuMjI3IDI1Ny4yNjEgMTg2LjY1OCAyMjkuMzU4IDE5MS43NjQgMjIzLjgyN1pcIlxuICAgICAgICBmaWxsPVwiIzIzMUYyMFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yMjIuMDQxIDI3OS45NDZDMjEwLjY5NCAyNzkuOTQ2IDIwMC40MTIgMjc2Ljc4OSAxOTUuMzU3IDI2OS42NDRDMTg2LjQ3NiAyNTcuMDg4IDE4Ni4xNzEgMjI5LjE1NSAxOTEuMzk5IDIyMy40ODJMMTkxLjc2NCAyMjMuODI3TDE5MS4zOTkgMjIzLjQ4MkMxOTYuOTEgMjE3LjUxMyAyMjUuMTA3IDIxNi4xMzMgMjM4LjY3NyAyMTcuMDU3QzI1Mi40MSAyMTguMDExIDI2MS40NjQgMjIzLjYwMyAyNjQuMTU0IDIzMi44MDlDMjY2LjUwOSAyNDAuODQ4IDI2OC44MTMgMjY1LjcyNiAyNDkuMTgyIDI3NC4zMDNDMjQwLjYwMyAyNzcuOTc2IDIzMS4zNzQgMjc5Ljg5NSAyMjIuMDQxIDI3OS45NDZaTTIyOS42NjQgMjE3Ljc4N0MyMTQuNzAzIDIxNy43ODcgMTk2LjE2OSAyMTkuODE3IDE5Mi4xMDkgMjI0LjE3MkMxODcuMTg2IDIyOS41MDEgMTg3LjY4NCAyNTcuMDg4IDE5Ni4xNjkgMjY5LjA2NUMyMDMuMjc0IDI3OS4xMjQgMjI2LjExMiAyODMuMjc1IDI0OC43NTYgMjczLjM2OUMyNjcuNzI3IDI2NS4wOTcgMjY1LjQ1MyAyNDAuODg5IDI2My4xNjkgMjMzLjA5NEMyNjAuNjAxIDIyNC4zMjQgMjUxLjg3MiAyMTguOTg1IDIzOC41ODYgMjE4LjA3MkMyMzUuOTA2IDIxNy44NzkgMjMyLjg3MSAyMTcuNzg3IDIyOS42NjQgMjE3Ljc4N1pcIlxuICAgICAgICBmaWxsPVwiIzIzMUYyMFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yNzIuNTg4IDIyMy4wMzVDMjcyLjU4OCAyMjMuMDM1IDI3MC42MTkgMjQyLjAzNiAyNzguOCAyNTQuMzA3QzI4Ni45ODEgMjY2LjU3OSAzMDAuNDMgMjYxLjEzOCAzMDkuMjUgMjU0LjQyOUMzMTguMDcxIDI0Ny43MiAzMjEuODk3IDIyNi4zMTMgMzIwLjQxNSAyMTUuNjQ2QzMxOC45MzMgMjA0Ljk3OCAzMTQuODQzIDIwMy40NjYgMzA0Ljc3NCAyMDQuMjk4QzI5NC43MDUgMjA1LjEzIDI3Ny4yODggMjEwLjYzMiAyNzIuNTg4IDIyMy4wMzVaXCJcbiAgICAgICAgZmlsbD1cIiMyMzFGMjBcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMjkxLjY0IDI2Mi4xMTNDMjkwLjczOSAyNjIuMTE0IDI4OS44MzkgMjYyLjAzOSAyODguOTUgMjYxLjg4OUMyODQuNjk3IDI2MS4xNzkgMjgxLjE0NSAyNTguNzEyIDI3OC4zODQgMjU0LjU3MUMyNzAuMTkzIDI0Mi4zIDI3Mi4wNzEgMjIzLjE1NyAyNzIuMDkxIDIyMi45NjRDMjcyLjA4NiAyMjIuOTI0IDI3Mi4wODYgMjIyLjg4MyAyNzIuMDkxIDIyMi44NDJDMjc2LjgzMSAyMTAuMzY4IDI5NC4xODggMjA0LjU3MiAzMDQuNjkzIDIwMy43OEMzMTQuODQzIDIwMi45ODkgMzE5LjI4OSAyMDQuNDQgMzIwLjg3MiAyMTUuNTY1QzMyMi40NTUgMjI2LjY4OSAzMTguNDE2IDI0OC4xMTYgMzA5LjU1NSAyNTQuODI1QzMwNS43OTkgMjU3LjY4NyAyOTguODA2IDI2Mi4xMTMgMjkxLjY0IDI2Mi4xMTNaTTI3My4wODYgMjIzLjEzN0MyNzIuOTc0IDIyNC4zNTUgMjcxLjQ3MiAyNDIuNDIyIDI3OS4yMjcgMjU0LjAxM0MyODEuODI1IDI1Ny45MSAyODUuMTU0IDI2MC4yMzUgMjg5LjExMyAyNjAuODk1QzI5Ni43ODYgMjYyLjE5NCAzMDQuODQ1IDI1Ny4xMzkgMzA4Ljk2NiAyNTQuMDIzQzMxMi44NTMgMjUxLjA2OSAzMTYuMTQyIDI0NC44MTcgMzE4LjIzMyAyMzYuMzkyQzMyMC4wNCAyMjkuMTA1IDMyMC42NzkgMjIxLjE2NyAzMTkuODk4IDIxNS43MDdDMzE4LjQzNiAyMDUuNDY1IDMxNC44MjMgMjAzLjk5NCAzMDQuNzk0IDIwNC43ODVDMjk0LjU2MyAyMDUuNTk3IDI3Ny42ODQgMjExLjE0OSAyNzMuMDg2IDIyMy4xMzdaXCJcbiAgICAgICAgZmlsbD1cIiMyMzFGMjBcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMjc2Ljk2MyAyMjYuNDU2QzI3Ni45NjMgMjI2LjQ1NiAyNzQuMTIxIDIyMy42NjQgMjY2LjgxMyAyMjQuN0MyNTkuNTA1IDIyNS43MzUgMjU2LjExNSAyMjkuNzc1IDI1Ni4xMTUgMjI5Ljc3NUwyNTguMzE4IDIzNS42MDFDMjU4LjMxOCAyMzUuNjAxIDI2Ny40NTMgMjI4LjMyMyAyNzYuMjUzIDIzMy4yNjZMMjc2Ljk2MyAyMjYuNDU2WlwiXG4gICAgICAgIGZpbGw9XCIjMjMxRjIwXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTI1OC4zMjggMjM2LjA1N0MyNTguMjgxIDIzNi4wNjcgMjU4LjIzMiAyMzYuMDY3IDI1OC4xODYgMjM2LjA1N0MyNTguMTEgMjM2LjAzNyAyNTguMDQgMjM1Ljk5OCAyNTcuOTgxIDIzNS45NDZDMjU3LjkyMyAyMzUuODkzIDI1Ny44NzggMjM1LjgyNyAyNTcuODUxIDIzNS43NTNMMjU1LjY1OCAyMjkuOTE3QzI1NS42MjMgMjI5LjgzMyAyNTUuNjEyIDIyOS43NDEgMjU1LjYyNiAyMjkuNjUxQzI1NS42NDEgMjI5LjU2MiAyNTUuNjggMjI5LjQ3OCAyNTUuNzM5IDIyOS40MDlDMjU1Ljg4MiAyMjkuMjQ3IDI1OS4zNTMgMjI1LjI2OCAyNjYuNzUyIDIyNC4yMjNDMjc0LjE1MSAyMjMuMTc3IDI3Ny4xOTYgMjI1Ljk4OSAyNzcuMzE4IDIyNi4xMUMyNzcuMzcyIDIyNi4xNjUgMjc3LjQxMyAyMjYuMjMgMjc3LjQzOSAyMjYuMzAyQzI3Ny40NjYgMjI2LjM3NCAyNzcuNDc2IDIyNi40NSAyNzcuNDcxIDIyNi41MjdMMjc2Ljc2IDIzMy4yODdDMjc2Ljc1MyAyMzMuMzY5IDI3Ni43MjUgMjMzLjQ0OSAyNzYuNjc5IDIzMy41MThDMjc2LjYzMiAyMzMuNTg3IDI3Ni41NyAyMzMuNjQ0IDI3Ni40OTYgMjMzLjY4MkMyNzYuNDIxIDIzMy43MjIgMjc2LjMzOCAyMzMuNzQzIDI3Ni4yNTMgMjMzLjc0M0MyNzYuMTY4IDIzMy43NDMgMjc2LjA4NCAyMzMuNzIyIDI3Ni4wMDkgMjMzLjY4MkMyNjcuNjQ1IDIyOC45NzMgMjU4Ljc1NCAyMzUuOTA1IDI1OC42NDIgMjM1Ljk3NkMyNTguNTQ5IDIzNi4wMzYgMjU4LjQzOSAyMzYuMDY1IDI1OC4zMjggMjM2LjA1N1pNMjU2LjcxNCAyMjkuODM2TDI1OC41NjEgMjM0Ljc1OEMyNjAuNjUyIDIzMy4zMTcgMjY4LjMyNSAyMjguNjY4IDI3NS44MTYgMjMyLjQxNEwyNzYuNDE1IDIyNi42NjlDMjc1LjcwNCAyMjYuMTQxIDI3Mi44MjIgMjI0LjM1NSAyNjYuODc0IDIyNS4xOTdDMjYzLjA4MSAyMjUuNjI2IDI1OS41MjMgMjI3LjI1MSAyNTYuNzE0IDIyOS44MzZaXCJcbiAgICAgICAgZmlsbD1cIiMyMzFGMjBcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMjAwLjE0OCAyMjIuMDJDMjAwLjE0OCAyMjIuMDIgMTM3LjYzNCAyMjMuNTEyIDEyOC45NzYgMjIzLjM3QzEyMC4zMTggMjIzLjIyOCAxMTMuMTEyIDIzOC4zODIgMTE3LjM3NSAyNDEuMTgzQzEyMS42MzggMjQzLjk4NSAxMjQuNDggMjMyLjI3MiAxMzAuMDExIDIzMS44MTVDMTM1LjU0MyAyMzEuMzU4IDE5Ni45MSAyMzIuOTQxIDE5Ni45MSAyMzIuOTQxTDIwMC4xNDggMjIyLjAyWlwiXG4gICAgICAgIGZpbGw9XCIjMjMxRjIwXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTExOC42OTQgMjQyLjE0N0MxMTguMTIzIDI0Mi4xNCAxMTcuNTY3IDI0MS45NiAxMTcuMTAxIDI0MS42M0MxMTUuNTA3IDI0MC42MTUgMTE1LjE3MiAyMzguMTA4IDExNi4xNzcgMjM0LjgzOUMxMTcuNzIgMjI5Ljg0NiAxMjIuNjUzIDIyMi44ODMgMTI4Ljg1NCAyMjIuODgzSDEyOC45ODZDMTM3LjU0MyAyMjMuMDQ1IDE5OS41MDggMjIxLjU0MyAyMDAuMTM4IDIyMS41MzNDMjAwLjIxNyAyMjEuNTMyIDIwMC4yOTUgMjIxLjU0OSAyMDAuMzY3IDIyMS41ODNDMjAwLjQzOSAyMjEuNjE2IDIwMC41MDMgMjIxLjY2NSAyMDAuNTU0IDIyMS43MjZDMjAwLjU5OSAyMjEuNzkyIDIwMC42MyAyMjEuODY2IDIwMC42NDQgMjIxLjk0NUMyMDAuNjU4IDIyMi4wMjQgMjAwLjY1NSAyMjIuMTA1IDIwMC42MzUgMjIyLjE4MkwxOTcuNDE3IDIzMy4wODRDMTk3LjM4MSAyMzMuMTg3IDE5Ny4zMTQgMjMzLjI3OCAxOTcuMjI1IDIzMy4zNDNDMTk3LjEzNiAyMzMuNDA4IDE5Ny4wMyAyMzMuNDQ1IDE5Ni45MiAyMzMuNDQ5QzE5Ni4zMDEgMjMzLjQ0OSAxMzUuNTIzIDIzMS44OTYgMTMwLjA1MiAyMzIuMzQzQzEyNy42MjYgMjMyLjUzNSAxMjUuNjM3IDIzNS4yNjYgMTIzLjg4MSAyMzcuNjcxQzEyMi4yNzcgMjM5Ljg4NCAxMjAuNjEyIDI0Mi4xNDcgMTE4LjY5NCAyNDIuMTQ3Wk0xMjguODQ0IDIyMy44NzdDMTIzLjc2OSAyMjMuODc3IDExOC44MDYgMjI5LjY5MyAxMTcuMTMxIDIzNS4xMzRDMTE2LjI3OCAyMzcuODk1IDExNi40NzEgMjQwLjAwNiAxMTcuNjQ5IDI0MC43NzdDMTE5LjM4NCAyNDEuOTI0IDEyMC44MzYgMjQwLjEwNyAxMjMuMDU5IDIzNy4wNjJDMTI0Ljk0NiAyMzQuNDg0IDEyNy4xMTkgMjMxLjU1MSAxMjkuOTYxIDIzMS4zMTdDMTM1LjMxIDIzMC44ODEgMTkwLjg2MSAyMzIuMjcyIDE5Ni41NDUgMjMyLjQxNEwxOTkuNDU4IDIyMi41NDhDMTkyLjU4NiAyMjIuNzEgMTM3LjA0NSAyMjQuMDIgMTI4Ljk1NiAyMjMuODg4TDEyOC44NDQgMjIzLjg3N1pcIlxuICAgICAgICBmaWxsPVwiIzIzMUYyMFwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==