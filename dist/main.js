/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/reset.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/reset.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n", "",{"version":3,"sources":["webpack://src/reset.css"],"names":[],"mappings":"AAAA;;;CAGC;;AAED;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/reset.css");
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_1__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@media (min-width:320px)  {\n    /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */\n    *{\n        box-sizing: border-box;\n    }\n    html {\n        position: relative;\n        min-height: 100%;\n    }\n    body {\n        margin: 0 0 25px;\n        padding: 10px;\n    }\n    b {\n        font-weight: 700;\n    }\n    .logo-wrapper{\n        text-align: center;\n        margin: 20px auto;\n    }\n    .logo {\n        text-decoration: none;\n        font-weight: 700;\n        font-size: 40px;\n        color: rgb(80, 80, 80);\n        transition: .3s;\n    }\n    .logo:hover {\n        color: rgb(0, 0, 0);\n        font-size: 44px;\n        transition: .3s;\n    }\n    /*Project title styling*/\n    .project-tab {\n        display: flex;\n        justify-content: space-between;\n        text-align: center;\n        font-size: 24px;\n        font-weight: 700;\n        margin: 0 auto;\n    }\n    .project-tab-title{\n        display: block;\n        word-wrap: break-word;\n        cursor: pointer;\n        width: 90%;\n    }\n    .more-projects{\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        width: 10%;\n        cursor: pointer;\n    }\n    /*main container styling*/\n    .content-container {\n        width: 95%;\n        margin: 20px auto;\n    }\n    /*Button for adding project styling*/\n    .add-project_window{\n        width: 160px;\n        padding: 4px 8px;\n        margin: auto;\n        background: rgb(114, 211, 17);\n        border: 1px solid rgb(0, 180, 0);\n        border-radius: 5px;\n        color: rgb(255, 255, 255);\n        font-size: 20px;\n        font-weight: 700;\n        cursor: pointer;\n    }\n    .add-project_window:active{\n        background-color: rgb(111, 194, 27);\n    }\n    /*Styling for background of pop-up windows to add/edit task or project*/\n    .add-project-wrapper,\n    .add-task-wrapper,\n    .edit-project-wrapper,\n    .edit-task-wrapper,\n    .assurance-wrapper,\n    .task-assurance-wrapper {\n        visibility: hidden;\n        position: fixed;\n        top: 0;\n        left: 0;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        min-width: 100vw;\n        min-height: 100vh;\n        background-color: rgba(0, 0, 0, 0.35);\n    }\n    /*Close button for pop-ups styling*/\n    .close{\n        font-size: 18px;\n        font-weight: 600;\n        display: block;\n        position: absolute;\n        top: 10px;\n        right: 10px;\n        cursor: pointer;\n    }\n    /*Adding project container styling*/\n    .add-project_container,\n    .edit-project-container {\n        position: relative;\n        display: inline-block;\n        width: 300px;\n        height: 160px;\n        margin: 0 auto;\n        text-align: center;\n        background-color: white;\n    }\n    .add-project_container form,\n    .edit-project-container form {\n        margin-top: 10px;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n    }\n    .add-project_container input,\n    .add-project_container select,\n    .add-project_container button,\n    .add-task-container select,\n    .add-task-container input,\n    .add-task-container textarea,\n    .add-task-container button{\n        margin-top: 10px;\n    }\n    .new-project-title,\n    .new-task-title,\n    .edit-project-title,\n    .edit-task-title {\n        font-weight: 600;\n        font-size: 18px;\n        padding-top: 10px;\n    }\n    /*Adding task styling*/\n    .add-task-container form {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n    }\n    .add-task-container {\n        position: relative;\n        display: inline-block;\n        width: 300px;\n        height: 300px;\n        margin: 0 auto;\n        text-align: center;\n        background-color: white;\n    }\n\n    /*Editing project styling*/\n    .edit-project-container input,\n    .edit-project-container button,\n    .edit-project-container select {\n        margin-top: 10px;\n    }\n    /*deleting project pop-up*/\n    .assurance-container,\n    .task-assurance-container {\n        position: relative;\n        display: inline-block;\n        margin: 0 auto;\n        width: 300px;\n        height: 100px;\n        background-color: white;\n        text-align: center;\n    }\n    .assurance-text,\n    .task-assurance-text {\n        display: block;\n        margin-top: 10px;\n        padding: 0 20px;\n    }\n    .assurance-buttons,\n    .task-assurance-buttons {\n        width: 250px;\n        margin: 15px auto;\n        display: flex;\n        justify-content: space-evenly;\n    }\n    /*Editing Task styling*/\n    .edit-task-container {\n        position: relative;\n        display: inline-block;\n        margin: 0 auto;\n        width: 300px;\n        height: 200px;\n        background-color: white;\n        text-align: center;\n    }\n    /*Invidual Project styling*/\n    .project {\n        display: flex;\n        justify-content: space-between;\n        margin: 15px 0;\n    }\n    .project i{\n        margin-left: 5px;\n        font-size: 20px;\n        cursor: pointer;\n    }\n    .project-title{\n        display: block;\n        word-wrap: break-word;\n        cursor: pointer;\n        font-size: 20px;\n        font-weight: 500;\n        width: 250px;\n    }\n    .project div {\n        display: flex;\n        align-items: center;\n    }\n    /* All projects styling*/\n\n    .all-projects {\n        display: flex;\n        flex-direction: column;\n        visibility: visible;\n    }\n    .all-projects-container {\n        display: flex;\n        flex-direction: column;\n    }\n\n    /*All Tasks styling*/\n    .task {\n        padding: 10px;\n    }\n    .task i {\n        padding-right: 10px;\n        font-size: 24px;\n        cursor: pointer;\n    }\n    .task-bar {\n        display: flex;\n        justify-content: space-between;\n\n    }\n    .task-title {\n        font-size: 20px;\n        font-weight: 700;\n    }\n    .more-wrapper {\n        display: flex;\n        flex-direction: column;\n        margin-top: 10px;\n    }\n    .more-wrapper span {\n        padding-bottom: 10px;\n        word-wrap: break-word;\n    }\n    .task-description {\n        display: flex;\n        flex-direction: column;\n        padding-bottom: 10px;\n    }\n    .task-description span {\n        padding: 5px 15px;\n\n    }\n    .task-buttons-wrapper {\n        margin-top: 10px;\n        display: flex;\n        justify-content: space-evenly;\n    }\n    /*Add Task button styling*/\n    .add-task_window {\n        border-radius: 50%;\n        position: fixed;\n        bottom: 50px;\n        right: 30px;\n        font-size: 40px;\n        font-weight: 700;\n        cursor: pointer;\n        background-color: tomato;\n        color: rgb(255, 253, 245);\n    }\n    /*footer styling*/\n    footer {\n        position: absolute;\n        left: 0;\n        bottom: 0;\n        height: 25px;\n        width: 100%;\n        overflow: hidden;\n        display: flex;\n        justify-content: center;\n    }\n    .author,\n    .author a {\n        font-size: 14px;\n        color: rgb(141, 141, 141);\n    }\n    .author a {\n        color: black;\n        text-decoration: none;\n        font-weight: 700;\n    }\n}\n@media (min-width:480px)  { /* smartphones, Android phones, landscape iPhone */ }\n@media (min-width:600px)  {\n    /* portrait tablets, portrait iPad, e-readers (Nook/Kindle), landscape 800x480 phones (Android) */\n    .project-tab {\n        width: 90%;\n    }\n    .content-container {\n        width: 80%;\n    }\n    .all-projects-container {\n        margin: 0 20px;\n    }\n    .add-task_window {\n        right: 5%;\n    }\n}\n@media (min-width:801px)  { \n    /* tablet, landscape iPad, lo-res laptops ands desktops */ \n    .add-task_window {\n        right: 10%;\n    }\n}\n@media (min-width:1025px) {\n    /* big landscape tablets, laptops, and desktops */\n    .project-tab {\n        width: 800px;\n    }\n    .content-container {\n        width: 800px;\n    }\n    .add-task_window {\n        right: 16%;\n    }\n}\n@media (min-width:1281px) {\n    /* hi-res laptops and desktops */\n    .add-task_window {\n        right: 20%;\n    }\n}\n@media (min-width: 1440px){\n    .add-task_window {\n        right: 25%;\n    }\n}", "",{"version":3,"sources":["webpack://src/style.css"],"names":[],"mappings":"AAEA;IACI,oEAAoE;IACpE;QACI,sBAAsB;IAC1B;IACA;QACI,kBAAkB;QAClB,gBAAgB;IACpB;IACA;QACI,gBAAgB;QAChB,aAAa;IACjB;IACA;QACI,gBAAgB;IACpB;IACA;QACI,kBAAkB;QAClB,iBAAiB;IACrB;IACA;QACI,qBAAqB;QACrB,gBAAgB;QAChB,eAAe;QACf,sBAAsB;QACtB,eAAe;IACnB;IACA;QACI,mBAAmB;QACnB,eAAe;QACf,eAAe;IACnB;IACA,wBAAwB;IACxB;QACI,aAAa;QACb,8BAA8B;QAC9B,kBAAkB;QAClB,eAAe;QACf,gBAAgB;QAChB,cAAc;IAClB;IACA;QACI,cAAc;QACd,qBAAqB;QACrB,eAAe;QACf,UAAU;IACd;IACA;QACI,aAAa;QACb,uBAAuB;QACvB,mBAAmB;QACnB,UAAU;QACV,eAAe;IACnB;IACA,yBAAyB;IACzB;QACI,UAAU;QACV,iBAAiB;IACrB;IACA,oCAAoC;IACpC;QACI,YAAY;QACZ,gBAAgB;QAChB,YAAY;QACZ,6BAA6B;QAC7B,gCAAgC;QAChC,kBAAkB;QAClB,yBAAyB;QACzB,eAAe;QACf,gBAAgB;QAChB,eAAe;IACnB;IACA;QACI,mCAAmC;IACvC;IACA,uEAAuE;IACvE;;;;;;QAMI,kBAAkB;QAClB,eAAe;QACf,MAAM;QACN,OAAO;QACP,aAAa;QACb,sBAAsB;QACtB,uBAAuB;QACvB,gBAAgB;QAChB,iBAAiB;QACjB,qCAAqC;IACzC;IACA,mCAAmC;IACnC;QACI,eAAe;QACf,gBAAgB;QAChB,cAAc;QACd,kBAAkB;QAClB,SAAS;QACT,WAAW;QACX,eAAe;IACnB;IACA,mCAAmC;IACnC;;QAEI,kBAAkB;QAClB,qBAAqB;QACrB,YAAY;QACZ,aAAa;QACb,cAAc;QACd,kBAAkB;QAClB,uBAAuB;IAC3B;IACA;;QAEI,gBAAgB;QAChB,aAAa;QACb,sBAAsB;QACtB,mBAAmB;IACvB;IACA;;;;;;;QAOI,gBAAgB;IACpB;IACA;;;;QAII,gBAAgB;QAChB,eAAe;QACf,iBAAiB;IACrB;IACA,sBAAsB;IACtB;QACI,aAAa;QACb,sBAAsB;QACtB,mBAAmB;IACvB;IACA;QACI,kBAAkB;QAClB,qBAAqB;QACrB,YAAY;QACZ,aAAa;QACb,cAAc;QACd,kBAAkB;QAClB,uBAAuB;IAC3B;;IAEA,0BAA0B;IAC1B;;;QAGI,gBAAgB;IACpB;IACA,0BAA0B;IAC1B;;QAEI,kBAAkB;QAClB,qBAAqB;QACrB,cAAc;QACd,YAAY;QACZ,aAAa;QACb,uBAAuB;QACvB,kBAAkB;IACtB;IACA;;QAEI,cAAc;QACd,gBAAgB;QAChB,eAAe;IACnB;IACA;;QAEI,YAAY;QACZ,iBAAiB;QACjB,aAAa;QACb,6BAA6B;IACjC;IACA,uBAAuB;IACvB;QACI,kBAAkB;QAClB,qBAAqB;QACrB,cAAc;QACd,YAAY;QACZ,aAAa;QACb,uBAAuB;QACvB,kBAAkB;IACtB;IACA,2BAA2B;IAC3B;QACI,aAAa;QACb,8BAA8B;QAC9B,cAAc;IAClB;IACA;QACI,gBAAgB;QAChB,eAAe;QACf,eAAe;IACnB;IACA;QACI,cAAc;QACd,qBAAqB;QACrB,eAAe;QACf,eAAe;QACf,gBAAgB;QAChB,YAAY;IAChB;IACA;QACI,aAAa;QACb,mBAAmB;IACvB;IACA,wBAAwB;;IAExB;QACI,aAAa;QACb,sBAAsB;QACtB,mBAAmB;IACvB;IACA;QACI,aAAa;QACb,sBAAsB;IAC1B;;IAEA,oBAAoB;IACpB;QACI,aAAa;IACjB;IACA;QACI,mBAAmB;QACnB,eAAe;QACf,eAAe;IACnB;IACA;QACI,aAAa;QACb,8BAA8B;;IAElC;IACA;QACI,eAAe;QACf,gBAAgB;IACpB;IACA;QACI,aAAa;QACb,sBAAsB;QACtB,gBAAgB;IACpB;IACA;QACI,oBAAoB;QACpB,qBAAqB;IACzB;IACA;QACI,aAAa;QACb,sBAAsB;QACtB,oBAAoB;IACxB;IACA;QACI,iBAAiB;;IAErB;IACA;QACI,gBAAgB;QAChB,aAAa;QACb,6BAA6B;IACjC;IACA,0BAA0B;IAC1B;QACI,kBAAkB;QAClB,eAAe;QACf,YAAY;QACZ,WAAW;QACX,eAAe;QACf,gBAAgB;QAChB,eAAe;QACf,wBAAwB;QACxB,yBAAyB;IAC7B;IACA,iBAAiB;IACjB;QACI,kBAAkB;QAClB,OAAO;QACP,SAAS;QACT,YAAY;QACZ,WAAW;QACX,gBAAgB;QAChB,aAAa;QACb,uBAAuB;IAC3B;IACA;;QAEI,eAAe;QACf,yBAAyB;IAC7B;IACA;QACI,YAAY;QACZ,qBAAqB;QACrB,gBAAgB;IACpB;AACJ;AACA,4BAA4B,kDAAkD,EAAE;AAChF;IACI,iGAAiG;IACjG;QACI,UAAU;IACd;IACA;QACI,UAAU;IACd;IACA;QACI,cAAc;IAClB;IACA;QACI,SAAS;IACb;AACJ;AACA;IACI,yDAAyD;IACzD;QACI,UAAU;IACd;AACJ;AACA;IACI,iDAAiD;IACjD;QACI,YAAY;IAChB;IACA;QACI,YAAY;IAChB;IACA;QACI,UAAU;IACd;AACJ;AACA;IACI,gCAAgC;IAChC;QACI,UAAU;IACd;AACJ;AACA;IACI;QACI,UAAU;IACd;AACJ","sourcesContent":["@import './reset.css';\n\n@media (min-width:320px)  {\n    /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */\n    *{\n        box-sizing: border-box;\n    }\n    html {\n        position: relative;\n        min-height: 100%;\n    }\n    body {\n        margin: 0 0 25px;\n        padding: 10px;\n    }\n    b {\n        font-weight: 700;\n    }\n    .logo-wrapper{\n        text-align: center;\n        margin: 20px auto;\n    }\n    .logo {\n        text-decoration: none;\n        font-weight: 700;\n        font-size: 40px;\n        color: rgb(80, 80, 80);\n        transition: .3s;\n    }\n    .logo:hover {\n        color: rgb(0, 0, 0);\n        font-size: 44px;\n        transition: .3s;\n    }\n    /*Project title styling*/\n    .project-tab {\n        display: flex;\n        justify-content: space-between;\n        text-align: center;\n        font-size: 24px;\n        font-weight: 700;\n        margin: 0 auto;\n    }\n    .project-tab-title{\n        display: block;\n        word-wrap: break-word;\n        cursor: pointer;\n        width: 90%;\n    }\n    .more-projects{\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        width: 10%;\n        cursor: pointer;\n    }\n    /*main container styling*/\n    .content-container {\n        width: 95%;\n        margin: 20px auto;\n    }\n    /*Button for adding project styling*/\n    .add-project_window{\n        width: 160px;\n        padding: 4px 8px;\n        margin: auto;\n        background: rgb(114, 211, 17);\n        border: 1px solid rgb(0, 180, 0);\n        border-radius: 5px;\n        color: rgb(255, 255, 255);\n        font-size: 20px;\n        font-weight: 700;\n        cursor: pointer;\n    }\n    .add-project_window:active{\n        background-color: rgb(111, 194, 27);\n    }\n    /*Styling for background of pop-up windows to add/edit task or project*/\n    .add-project-wrapper,\n    .add-task-wrapper,\n    .edit-project-wrapper,\n    .edit-task-wrapper,\n    .assurance-wrapper,\n    .task-assurance-wrapper {\n        visibility: hidden;\n        position: fixed;\n        top: 0;\n        left: 0;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        min-width: 100vw;\n        min-height: 100vh;\n        background-color: rgba(0, 0, 0, 0.35);\n    }\n    /*Close button for pop-ups styling*/\n    .close{\n        font-size: 18px;\n        font-weight: 600;\n        display: block;\n        position: absolute;\n        top: 10px;\n        right: 10px;\n        cursor: pointer;\n    }\n    /*Adding project container styling*/\n    .add-project_container,\n    .edit-project-container {\n        position: relative;\n        display: inline-block;\n        width: 300px;\n        height: 160px;\n        margin: 0 auto;\n        text-align: center;\n        background-color: white;\n    }\n    .add-project_container form,\n    .edit-project-container form {\n        margin-top: 10px;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n    }\n    .add-project_container input,\n    .add-project_container select,\n    .add-project_container button,\n    .add-task-container select,\n    .add-task-container input,\n    .add-task-container textarea,\n    .add-task-container button{\n        margin-top: 10px;\n    }\n    .new-project-title,\n    .new-task-title,\n    .edit-project-title,\n    .edit-task-title {\n        font-weight: 600;\n        font-size: 18px;\n        padding-top: 10px;\n    }\n    /*Adding task styling*/\n    .add-task-container form {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n    }\n    .add-task-container {\n        position: relative;\n        display: inline-block;\n        width: 300px;\n        height: 300px;\n        margin: 0 auto;\n        text-align: center;\n        background-color: white;\n    }\n\n    /*Editing project styling*/\n    .edit-project-container input,\n    .edit-project-container button,\n    .edit-project-container select {\n        margin-top: 10px;\n    }\n    /*deleting project pop-up*/\n    .assurance-container,\n    .task-assurance-container {\n        position: relative;\n        display: inline-block;\n        margin: 0 auto;\n        width: 300px;\n        height: 100px;\n        background-color: white;\n        text-align: center;\n    }\n    .assurance-text,\n    .task-assurance-text {\n        display: block;\n        margin-top: 10px;\n        padding: 0 20px;\n    }\n    .assurance-buttons,\n    .task-assurance-buttons {\n        width: 250px;\n        margin: 15px auto;\n        display: flex;\n        justify-content: space-evenly;\n    }\n    /*Editing Task styling*/\n    .edit-task-container {\n        position: relative;\n        display: inline-block;\n        margin: 0 auto;\n        width: 300px;\n        height: 200px;\n        background-color: white;\n        text-align: center;\n    }\n    /*Invidual Project styling*/\n    .project {\n        display: flex;\n        justify-content: space-between;\n        margin: 15px 0;\n    }\n    .project i{\n        margin-left: 5px;\n        font-size: 20px;\n        cursor: pointer;\n    }\n    .project-title{\n        display: block;\n        word-wrap: break-word;\n        cursor: pointer;\n        font-size: 20px;\n        font-weight: 500;\n        width: 250px;\n    }\n    .project div {\n        display: flex;\n        align-items: center;\n    }\n    /* All projects styling*/\n\n    .all-projects {\n        display: flex;\n        flex-direction: column;\n        visibility: visible;\n    }\n    .all-projects-container {\n        display: flex;\n        flex-direction: column;\n    }\n\n    /*All Tasks styling*/\n    .task {\n        padding: 10px;\n    }\n    .task i {\n        padding-right: 10px;\n        font-size: 24px;\n        cursor: pointer;\n    }\n    .task-bar {\n        display: flex;\n        justify-content: space-between;\n\n    }\n    .task-title {\n        font-size: 20px;\n        font-weight: 700;\n    }\n    .more-wrapper {\n        display: flex;\n        flex-direction: column;\n        margin-top: 10px;\n    }\n    .more-wrapper span {\n        padding-bottom: 10px;\n        word-wrap: break-word;\n    }\n    .task-description {\n        display: flex;\n        flex-direction: column;\n        padding-bottom: 10px;\n    }\n    .task-description span {\n        padding: 5px 15px;\n\n    }\n    .task-buttons-wrapper {\n        margin-top: 10px;\n        display: flex;\n        justify-content: space-evenly;\n    }\n    /*Add Task button styling*/\n    .add-task_window {\n        border-radius: 50%;\n        position: fixed;\n        bottom: 50px;\n        right: 30px;\n        font-size: 40px;\n        font-weight: 700;\n        cursor: pointer;\n        background-color: tomato;\n        color: rgb(255, 253, 245);\n    }\n    /*footer styling*/\n    footer {\n        position: absolute;\n        left: 0;\n        bottom: 0;\n        height: 25px;\n        width: 100%;\n        overflow: hidden;\n        display: flex;\n        justify-content: center;\n    }\n    .author,\n    .author a {\n        font-size: 14px;\n        color: rgb(141, 141, 141);\n    }\n    .author a {\n        color: black;\n        text-decoration: none;\n        font-weight: 700;\n    }\n}\n@media (min-width:480px)  { /* smartphones, Android phones, landscape iPhone */ }\n@media (min-width:600px)  {\n    /* portrait tablets, portrait iPad, e-readers (Nook/Kindle), landscape 800x480 phones (Android) */\n    .project-tab {\n        width: 90%;\n    }\n    .content-container {\n        width: 80%;\n    }\n    .all-projects-container {\n        margin: 0 20px;\n    }\n    .add-task_window {\n        right: 5%;\n    }\n}\n@media (min-width:801px)  { \n    /* tablet, landscape iPad, lo-res laptops ands desktops */ \n    .add-task_window {\n        right: 10%;\n    }\n}\n@media (min-width:1025px) {\n    /* big landscape tablets, laptops, and desktops */\n    .project-tab {\n        width: 800px;\n    }\n    .content-container {\n        width: 800px;\n    }\n    .add-task_window {\n        right: 16%;\n    }\n}\n@media (min-width:1281px) {\n    /* hi-res laptops and desktops */\n    .add-task_window {\n        right: 20%;\n    }\n}\n@media (min-width: 1440px){\n    .add-task_window {\n        right: 25%;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/DOMs.js":
/*!*********************!*\
  !*** ./src/DOMs.js ***!
  \*********************/
/*! exports provided: printingModule, eventListeners */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printingModule", function() { return printingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventListeners", function() { return eventListeners; });
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");
/* harmony import */ var _todos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos.js */ "./src/todos.js");
/* eslint-disable new-cap */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */


const printingModule = (() => {
  const printTasks = () => {
    const allTasks = document.querySelector('.all-tasks');
    allTasks.innerHTML = '';
    const activeProjectID = document
        .querySelector('.project-tab-title')
        .getAttribute('id');
    const activeProjectIndex = _projects_js__WEBPACK_IMPORTED_MODULE_0__["projectHolder"].findIndex(
        (x) => x.getID() == activeProjectID,
    );
    for (
      let i = 0;
      i < _projects_js__WEBPACK_IMPORTED_MODULE_0__["projectHolder"][activeProjectIndex].toDoList.length;
      i++
    ) {
      const div = document.createElement('div');
      const div1 = document.createElement('div');
      div.setAttribute(
          'id',
          _projects_js__WEBPACK_IMPORTED_MODULE_0__["projectHolder"][activeProjectIndex].toDoList[i].getID(),
      );
      div.setAttribute('class', 'task');
      div1.setAttribute('class', 'task-bar');
      const taskTitle = document.createElement('span');
      taskTitle.setAttribute('class', 'task-title');
      taskTitle.textContent = _projects_js__WEBPACK_IMPORTED_MODULE_0__["projectHolder"][activeProjectIndex].toDoList[
          i
      ].getName();
      div1.appendChild(taskTitle);
      div1.innerHTML += `<div><span class="more-task_window"><i class="fas fa-caret-down"></i></span>` +
                        `<span class="complete-task"><i class="far fa-check-square"></i></span></div>`;
      const divMore = document.createElement('div');
      divMore.setAttribute('class', 'more-wrapper');
      divMore.style.display = 'none';
      const priorityInfo = document.createElement('span');
      priorityInfo.textContent =
          'Priority: ' +
          _projects_js__WEBPACK_IMPORTED_MODULE_0__["projectHolder"][activeProjectIndex].toDoList[i].getPriority();
      priorityInfo.style.margin = '0 auto';
      divMore.appendChild(priorityInfo);
      if (_projects_js__WEBPACK_IMPORTED_MODULE_0__["projectHolder"][activeProjectIndex].toDoList[i].getDate() != '') {
        const dateInfo = document.createElement('span');
        dateInfo.textContent =
          'Due to: ' + _projects_js__WEBPACK_IMPORTED_MODULE_0__["projectHolder"][activeProjectIndex].toDoList[i].getDate();
        divMore.appendChild(dateInfo);
      }
      if (_projects_js__WEBPACK_IMPORTED_MODULE_0__["projectHolder"][activeProjectIndex].toDoList[i].getDescription() != '') {
        const descriptionWrapper = document.createElement('div');
        descriptionWrapper.setAttribute('class', 'task-description');
        const descriptionInfo = document.createElement('span');
        descriptionInfo.textContent = 'Description:';
        descriptionInfo.style.margin = '0 auto';
        const descriptionContent = document.createElement('span');
        descriptionContent.textContent = _projects_js__WEBPACK_IMPORTED_MODULE_0__["projectHolder"][activeProjectIndex].toDoList[i].getDescription();
        descriptionContent.style.border = '1px solid black';
        descriptionWrapper.appendChild(descriptionInfo);
        descriptionWrapper.appendChild(descriptionContent);
        divMore.appendChild(descriptionWrapper);
      }
      const buttonsWrapper = document.createElement('div');
      buttonsWrapper.setAttribute('class', 'task-buttons-wrapper');
      buttonsWrapper.setAttribute('id', `${_projects_js__WEBPACK_IMPORTED_MODULE_0__["projectHolder"][activeProjectIndex].toDoList[i].getID()}`);
      const dltbutton = document.createElement('button');
      dltbutton.setAttribute('class', 'task-dlt');
      const editbutton = document.createElement('button');
      editbutton.setAttribute('class', 'task-edit');
      dltbutton.textContent = 'Delete';
      editbutton.textContent = 'Edit';
      buttonsWrapper.appendChild(dltbutton);
      buttonsWrapper.appendChild(editbutton);
      divMore.appendChild(buttonsWrapper);
      div.appendChild(div1);
      div.appendChild(divMore);
      allTasks.appendChild(div);
    }
    const moreTasks = document.querySelectorAll('.more-task_window');
    moreTasks.forEach((task) => {
      task.addEventListener('click', () => {
        if (task.parentNode.parentNode.parentNode.childNodes[1].style.display != 'flex' ) {
          task.parentNode.parentNode.parentNode.childNodes[1].style.display= 'flex';
        } else {
          task.parentNode.parentNode.parentNode.childNodes[1].style.display = 'none';
        }
      });
    });
    const completeTasks = document.querySelectorAll('.complete-task');
    completeTasks.forEach((task) => {
      task.addEventListener('click', () => {
        const taskID = task.parentNode.parentNode.parentNode.getAttribute('id');
        const taskIndex = _projects_js__WEBPACK_IMPORTED_MODULE_0__["projectHolder"][document.querySelector('.project-tab-title').getAttribute('id')].toDoList.findIndex(
            (x) => x.getID() == taskID,
        );
        if (task.parentNode.parentNode.parentNode.childNodes[0].style.color != 'green') {
          task.parentNode.parentNode.parentNode.childNodes[0].style.color = 'green';
          _projects_js__WEBPACK_IMPORTED_MODULE_0__["projectHolder"][document.querySelector('.project-tab-title').getAttribute('id')].toDoList[taskIndex].changeStatus('done');
        } else {
          task.parentNode.parentNode.parentNode.childNodes[0].style.color = 'black';
          _projects_js__WEBPACK_IMPORTED_MODULE_0__["projectHolder"][document.querySelector('.project-tab-title').getAttribute('id')].toDoList[taskIndex].changeStatus('to do');
        }
      });
    });
    const openEditTasks = document.querySelectorAll('.task-edit');
    openEditTasks.forEach((task) => {
      task.addEventListener('click', () => {
        document.querySelector('.edit-task-wrapper').style.visibility = 'visible';
        document.querySelector('.edit-task-title').setAttribute('id', task.parentNode.getAttribute('id'));
      });
    });
    const openDeleteTasks = document.querySelectorAll('.task-dlt');
    openDeleteTasks.forEach((task) => {
      task.addEventListener('click', ()=> {
        document.querySelector('.task-assurance-wrapper').style.visibility =
              'visible';
      });
      document.querySelector(
          '.task-assurance-text',
      ).innerHTML = `Do you want delete <b>${task.parentNode.parentNode.parentNode.childNodes[0].childNodes[0].textContent}</b> Task?`;
      document
          .querySelector('.task-assurance-text')
          .setAttribute(
              'id',
              task.parentElement.getAttribute('id'),
          );
    });
  };
  const chooseProject = (project) => {
    document.querySelector('.all-projects').style.display = 'none';
    document.querySelector('.project-tab-title').textContent =
        project.textContent;
    document.querySelector('.project-tab-title').style.color =
        project.style.color;
    document
        .querySelector('.project-tab-title')
        .setAttribute('id', project.parentElement.getAttribute('id'));
    document.querySelector('.all-tasks').style.visibility = 'visible';
  };
  const printProjects = () => {
    const allProjects = document.querySelector('.all-projects-container');
    allProjects.innerHTML = '';
    for (let i = 0; i < _projects_js__WEBPACK_IMPORTED_MODULE_0__["projectHolder"].length; i++) {
      const div = document.createElement('div');
      div.setAttribute('class', 'project');
      div.setAttribute('id', _projects_js__WEBPACK_IMPORTED_MODULE_0__["projectHolder"][i].getID());
      const spanTitle = document.createElement('span');
      spanTitle.setAttribute('class', 'project-title');
      spanTitle.textContent = _projects_js__WEBPACK_IMPORTED_MODULE_0__["projectHolder"][i].getName();
      spanTitle.style.color = _projects_js__WEBPACK_IMPORTED_MODULE_0__["projectHolder"][i].getColor();
      div.appendChild(spanTitle);
      div.innerHTML += `<div><span class="edit-project_window"><i class="fas fa-edit"></i></span> <span class="delete-project"><i class="fas fa-trash"></i></span></div>`;
      allProjects.appendChild(div);
    }
    // event listener to dynamically added projects to change view, edit, and delete them
    const chooseProjects = document.querySelectorAll('.project-title');
    chooseProjects.forEach((project) => {
      project.addEventListener('click', () => {
        printingModule.chooseProject(project);
        printingModule.printTasks();
      });
    });
    const openEditProjects = document.querySelectorAll(
        '.edit-project_window',
    );
    openEditProjects.forEach((pbutton) => {
      pbutton.addEventListener('click', () => {
        document.querySelector('.edit-project-wrapper').style.visibility =
              'visible';
        document
            .querySelector('.edit-project-title')
            .setAttribute(
                'id',
                pbutton.parentElement.parentElement.getAttribute('id'),
            );
      });
    });
    const deleteProjects = document.querySelectorAll('.delete-project');
    deleteProjects.forEach((project) => {
      project.addEventListener('click', () => {
        document.querySelector('.assurance-wrapper').style.visibility =
              'visible';
        document.querySelector(
            '.assurance-text',
        ).innerHTML = `Do you want delete <b>${project.parentNode.parentNode.childNodes[0].textContent}</b> Project?`;
        document
            .querySelector('.task-assurance-text')
            .setAttribute(
                'id',
                task.parentElement.parentElement.getAttribute('id'),
            );
      });
    });
  };
  return {
    printTasks,
    chooseProject,
    printProjects,
  };
})();
const eventListeners = (() => {
  // Close button
  const closeButtons = document.querySelectorAll('.close');
  closeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      button.parentElement.parentElement.style.visibility = 'hidden';
    });
  });
  const openAddTaskWindow = document.querySelector('.add-task_window');
  openAddTaskWindow.addEventListener('click', () => {
    if (
      document.querySelector('.add-task-wrapper').style.visibility != 'visible'
    ) {
      document.querySelector('.add-task-wrapper').style.visibility = 'visible';
    } else {
      document.querySelector('.add-task-wrapper').style.visibility = 'hidden';
    }
  });
  const addTask = document.querySelector('#add-task');
  addTask.addEventListener('click', () => {
    const title = document.querySelector('#add-task-title');
    const date = document.querySelector('#add-task-date');
    const priority = document.querySelector('#add-task-priority');
    const description = document.querySelector('#add-task-description');
    if (_projects_js__WEBPACK_IMPORTED_MODULE_0__["projectHolder"].length >= 1) {
      const projectID = document
          .querySelector('.project-tab-title')
          .getAttribute('id');
      const projectIndex = _projects_js__WEBPACK_IMPORTED_MODULE_0__["projectHolder"].findIndex(
          (x) => x.getID() == projectID,
      );
      if (title.value != '') {
        const newTask = Object(_todos_js__WEBPACK_IMPORTED_MODULE_1__["ToDoTask"])(
            title.value,
            description.value,
            date.value,
            priority.value,
            _projects_js__WEBPACK_IMPORTED_MODULE_0__["projectHolder"][projectIndex].giveTaskID(),
        );
        _projects_js__WEBPACK_IMPORTED_MODULE_0__["projectHolder"][projectIndex].addTask(newTask);
        document.querySelector('.add-task-wrapper').style.visibility = 'hidden';
        printingModule.printTasks();
      } else {
        alert('Task Title is not defined');
      }
    } else {
      alert('There is no Project available to assign task');
    }
    title.value = '';
    date.value = 'mm/dd/yyyy';
    priority.value = 'low';
    description.value = '';
  });
  const editTask = document.querySelector('#edit-task');
  editTask.addEventListener('click', () => {
    const projectIndex = _projects_js__WEBPACK_IMPORTED_MODULE_0__["projectHolder"].findIndex(
        (x) =>
          x.getID() ==
      document.querySelector('.project-tab-title').getAttribute('id'),
    );
    const taskIndex = _projects_js__WEBPACK_IMPORTED_MODULE_0__["projectHolder"][projectIndex].toDoList.findIndex(
        (y) =>
          y.getID() ==
      document.querySelector('.edit-task-title').getAttribute('id'),
    );
    const name = document.getElementById('edit-task-title');
    const date = document.getElementById('edit-task-date');
    const priority = document.getElementById('edit-task-priority');
    const description = document.getElementById('edit-task-description');
    if (name.value != '') {
      _projects_js__WEBPACK_IMPORTED_MODULE_0__["projectHolder"][projectIndex].toDoList[taskIndex].changeName(name.value);
    };
    if (date.value === '') {
      _projects_js__WEBPACK_IMPORTED_MODULE_0__["projectHolder"][projectIndex].toDoList[taskIndex].changeDate('');
    } else {
      _projects_js__WEBPACK_IMPORTED_MODULE_0__["projectHolder"][projectIndex].toDoList[taskIndex].changeDate(date.value);
    };
    if (priority.value != '') {
      _projects_js__WEBPACK_IMPORTED_MODULE_0__["projectHolder"][projectIndex].toDoList[taskIndex].changePriority(priority.value);
    };
    if (description.value === '') {
      _projects_js__WEBPACK_IMPORTED_MODULE_0__["projectHolder"][projectIndex].toDoList[taskIndex].changeDescription('');
    } else {
      _projects_js__WEBPACK_IMPORTED_MODULE_0__["projectHolder"][projectIndex].toDoList[taskIndex].changeDescription(description.value);
    };
    printingModule.printTasks();
    document.getElementById('edit-task-title').value = '';
    document.getElementById('edit-task-date').value = 'mm/dd/yyyy';
    document.getElementById('edit-task-priority').value = 'low';
    document.getElementById('edit-task-description').value = '';
    document.querySelector('.edit-task-wrapper').style.visibility = 'hidden';
  });
  const taskDeletion= document.querySelector('#task-yes-bttn');
  taskDeletion.addEventListener('click', () =>{
    const projectIndex = _projects_js__WEBPACK_IMPORTED_MODULE_0__["projectHolder"].findIndex(
        (x) =>
          x.getID() ==
        document.querySelector('.project-tab-title').getAttribute('id'),
    );
    const taskIndex = _projects_js__WEBPACK_IMPORTED_MODULE_0__["projectHolder"][projectIndex].toDoList.findIndex(
        (y) =>
          y.getID() ==
        document.querySelector('.task-assurance-text'),
    );
    _projects_js__WEBPACK_IMPORTED_MODULE_0__["projectHolder"][projectIndex].toDoList.splice(taskIndex, 1);
    printingModule.printTasks();
    document.querySelector('.task-assurance-wrapper').style.visibility = 'hidden';
  });
  const taskRefusingDeletion = document.querySelector('#task-no-bttn');
  taskRefusingDeletion.addEventListener('click', () => {
    document.querySelector('.task-assurance-wrapper').style.visibility = 'hidden';
  });
  // Project related
  const allProjectsView = document.querySelector('.more-projects');
  allProjectsView.addEventListener('click', () => {
    if (document.querySelector('.all-projects').style.display === 'none') {
      document.querySelector('.all-projects').style.display= 'flex';
      document.querySelector('.all-tasks').style.visibility = 'hidden';
    } else {
      document.querySelector('.all-projects').style.display = 'none';
      document.querySelector('.all-tasks').style.visibility = 'visible';
    }
  });
  const openAddProjectWindow = document.querySelector('.add-project_window');
  openAddProjectWindow.addEventListener('click', () => {
    if (
      document.querySelector('.add-project-wrapper').style.visibility !=
        'visible'
    ) {
      document.querySelector('.add-project-wrapper').style.visibility =
          'visible';
    } else {
      document.querySelector('.add-project-wrapper').style.visibility =
          'hidden';
    }
  });
  const addProject = document.querySelector('#add-project-bttn');
  addProject.addEventListener('click', () => {
    const name = document.querySelector('#add-project-name');
    const color = document.querySelector('#add-project-color');
    if (name.value != '') {
      const newProject = Object(_projects_js__WEBPACK_IMPORTED_MODULE_0__["Project"])(
          name.value,
          color.value,
          _projects_js__WEBPACK_IMPORTED_MODULE_0__["projectcounter"].getValue(),
      );
      _projects_js__WEBPACK_IMPORTED_MODULE_0__["projectHolder"].push(newProject);
      _projects_js__WEBPACK_IMPORTED_MODULE_0__["projectcounter"].incrementValue();
      document.querySelector('.add-project-wrapper').style.visibility =
          'hidden';
      printingModule.printProjects();
      if (_projects_js__WEBPACK_IMPORTED_MODULE_0__["projectHolder"].length == 1) {
        printingModule.chooseProject(
            document.getElementById(`${_projects_js__WEBPACK_IMPORTED_MODULE_0__["projectHolder"][0].getID()}`).childNodes[0],
        );
      }
    } else {
      alert('Empty Name Input');
    }
    name.value = '';
    color.value = 'black';
  });
  const editProjects = document.querySelector('#project-submit-edit');
  editProjects.addEventListener('click', () => {
    const newName = document.querySelector('#project-name-edit');
    const newColor = document.querySelector('#project-color-edit');
    const selectedProjectIndex = _projects_js__WEBPACK_IMPORTED_MODULE_0__["projectHolder"].findIndex(
        (x) =>
          x.getID() ==
          document.querySelector('.edit-project-title').getAttribute('id'),
    );
    console.log(editProjects.parentElement.parentElement.getAttribute('id'));
    if (newName.value != '') {
      _projects_js__WEBPACK_IMPORTED_MODULE_0__["projectHolder"][selectedProjectIndex].changeName(newName.value);
      if (document.querySelector('.edit-project-title').getAttribute('id') === document.querySelector('.project-tab-title').getAttribute('id')) {
        document.querySelector('.project-tab-title').textContent = newName.value;
      }
    }
    _projects_js__WEBPACK_IMPORTED_MODULE_0__["projectHolder"][selectedProjectIndex].changeColor(newColor.value);
    printingModule.printProjects();
    document.querySelector('.edit-project-wrapper').style.visibility = 'hidden';
    newName.value = '';
    newColor.value = 'black';
  });
  const acceptDeletion = document.querySelector('#yes-bttn');
  acceptDeletion.addEventListener('click', () => {
    const projectIndex = _projects_js__WEBPACK_IMPORTED_MODULE_0__["projectHolder"].findIndex(
        (x) =>
          x.getID() ==
          document.querySelector('.assurance-text').getAttribute('id'),
    );
    if (
      document.querySelector('.project-tab-title').getAttribute('id') ==
          document.querySelector('.assurance-text').getAttribute('id') &&
        _projects_js__WEBPACK_IMPORTED_MODULE_0__["projectHolder"].length > 1
    ) {
      _projects_js__WEBPACK_IMPORTED_MODULE_0__["projectHolder"].splice(projectIndex, 1);
      printingModule.chooseProject(
          document.getElementById(`${_projects_js__WEBPACK_IMPORTED_MODULE_0__["projectHolder"][0].getID()}`).childNodes[0],
      );
      printingModule.printTasks();
      document.querySelector('.all-projects').style.display = 'flex';
      document.querySelector('.all-tasks').style.visibility = 'hidden';
    } else if (
      document.querySelector('.project-tab-title').getAttribute('id') ==
          document.querySelector('.assurance-text').getAttribute('id') &&
        _projects_js__WEBPACK_IMPORTED_MODULE_0__["projectHolder"].length <= 1
    ) {
      _projects_js__WEBPACK_IMPORTED_MODULE_0__["projectHolder"].splice(projectIndex, 1);
      document.querySelector('.all-tasks').innerHTML = '';
      document.querySelector('.project-tab-title').textContent =
          'Add and Choose New Project';
    } else {
      _projects_js__WEBPACK_IMPORTED_MODULE_0__["projectHolder"].splice(projectIndex, 1);
    }
    printingModule.printProjects();
    document.querySelector('.assurance-wrapper').style.visibility = 'hidden';
  });
  const rejectDeletion = document.querySelector('#no-bttn');
  rejectDeletion.addEventListener('click', () => {
    document.querySelector('.assurance-wrapper').style.visibility = 'hidden';
  });
})();



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DOMs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMs */ "./src/DOMs.js");
__webpack_require__(/*! ./style.css */ "./src/style.css");

_DOMs__WEBPACK_IMPORTED_MODULE_0__["printingModule"].printProjects();
_DOMs__WEBPACK_IMPORTED_MODULE_0__["printingModule"].chooseProject(document.querySelector('.project-title'));

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/*! exports provided: Project, projectcounter, projectHolder, defaultProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return Project; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectcounter", function() { return projectcounter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectHolder", function() { return projectHolder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultProject", function() { return defaultProject; });
const projectHolder = []; // optional, find if this variable is needed
const projectcounter = (() => {
  let value = 0;
  const getValue = () => value;
  const incrementValue = () => {
    value++;
  };
  return {
    getValue,
    incrementValue,
  };
})(); // id for projects
const Project = (name, color = 'black', id = projectHolder.length()) => {
  const toDoList = [];
  let taskCounter = 0;
  const giveTaskID = () => taskCounter;
  const getName = () => name;
  const changeName = (newName) => (name = newName);
  const getColor = () => color;
  const changeColor = (newColor) => (color = newColor);
  const getID = () => id;
  const addTask = (task) => {
    toDoList.push(task);
    taskCounter++;
  };
  const deleteTask = (taskIndex) => toDoList.splice(taskIndex, 1);
  return {
    toDoList,
    getName,
    changeName,
    getColor,
    changeColor,
    getID,
    addTask,
    deleteTask,
    giveTaskID,
  };
};
// eslint-disable-next-line new-cap
const defaultProject = Project('Default', 'black', projectcounter.getValue());
projectHolder.push(defaultProject);
projectcounter.incrementValue();



/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/todos.js":
/*!**********************!*\
  !*** ./src/todos.js ***!
  \**********************/
/*! exports provided: ToDoTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToDoTask", function() { return ToDoTask; });
// eslint-disable-next-line max-len
const ToDoTask = (name, description = '', dueDate = '', priority = 'low', id, status = 'To do') => {
  const getName = () => name;
  const changeName = (newName) => name = newName;
  const getDescription= () => description;
  const changeDescription = (newDescirpiton) => description = newDescirpiton;
  const getDate = () => dueDate;
  const changeDate = (newDate) => dueDate = newDate;
  const getPriority = () => priority;
  const changePriority = (newPriority) => priority = newPriority;
  const getStatus = () => status;
  const changeStatus = (newStatus) => status = newStatus;
  const getID = () => id;
  return {
    getName,
    changeName,
    getDescription,
    changeDescription,
    getDate,
    changeDate,
    getPriority,
    changePriority,
    getStatus,
    changeStatus,
    getID,
  };
};



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Jlc2V0LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9ET01zLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovLy8uL3NyYy90b2Rvcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtR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QXdCLHFCQUFxQixPQUFPLEdBQUcsT0FBTyw4RUFBOEUsWUFBWSxNQUFNLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLFlBQVksTUFBTSxVQUFVLFlBQVksTUFBTSxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxNQUFNLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxZQUFZLE9BQU8sWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLFdBQVcsWUFBWSxNQUFNLFFBQVEsWUFBWSxXQUFXLFlBQVksTUFBTSxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxZQUFZLFFBQVEsWUFBWSxNQUFNLFlBQVksT0FBTyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sTUFBTSxVQUFVLFlBQVksV0FBVyxNQUFNLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxNQUFNLFlBQVksTUFBTSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sWUFBWSxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sWUFBWSxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxNQUFNLE1BQU0sVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssd0JBQXdCLE1BQU0sWUFBWSxNQUFNLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssWUFBWSxNQUFNLFVBQVUsS0FBSyxLQUFLLEtBQUssWUFBWSxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssWUFBWSxNQUFNLFVBQVUsS0FBSyxLQUFLLEtBQUssS0FBSyxVQUFVLEtBQUssK0NBQStDLCtCQUErQixtRkFBbUYsaUNBQWlDLE9BQU8sWUFBWSw2QkFBNkIsMkJBQTJCLE9BQU8sWUFBWSwyQkFBMkIsd0JBQXdCLE9BQU8sU0FBUywyQkFBMkIsT0FBTyxvQkFBb0IsNkJBQTZCLDRCQUE0QixPQUFPLGFBQWEsZ0NBQWdDLDJCQUEyQiwwQkFBMEIsaUNBQWlDLDBCQUEwQixPQUFPLG1CQUFtQiw4QkFBOEIsMEJBQTBCLDBCQUEwQixPQUFPLG1EQUFtRCx3QkFBd0IseUNBQXlDLDZCQUE2QiwwQkFBMEIsMkJBQTJCLHlCQUF5QixPQUFPLHlCQUF5Qix5QkFBeUIsZ0NBQWdDLDBCQUEwQixxQkFBcUIsT0FBTyxxQkFBcUIsd0JBQXdCLGtDQUFrQyw4QkFBOEIscUJBQXFCLDBCQUEwQixPQUFPLDBEQUEwRCxxQkFBcUIsNEJBQTRCLE9BQU8scUVBQXFFLHVCQUF1QiwyQkFBMkIsdUJBQXVCLHdDQUF3QywyQ0FBMkMsNkJBQTZCLG9DQUFvQywwQkFBMEIsMkJBQTJCLDBCQUEwQixPQUFPLGlDQUFpQyw4Q0FBOEMsT0FBTyw4T0FBOE8sNkJBQTZCLDBCQUEwQixpQkFBaUIsa0JBQWtCLHdCQUF3QixpQ0FBaUMsa0NBQWtDLDJCQUEyQiw0QkFBNEIsZ0RBQWdELE9BQU8sdURBQXVELDBCQUEwQiwyQkFBMkIseUJBQXlCLDZCQUE2QixvQkFBb0Isc0JBQXNCLDBCQUEwQixPQUFPLHNHQUFzRyw2QkFBNkIsZ0NBQWdDLHVCQUF1Qix3QkFBd0IseUJBQXlCLDZCQUE2QixrQ0FBa0MsT0FBTyxzRUFBc0UsMkJBQTJCLHdCQUF3QixpQ0FBaUMsOEJBQThCLE9BQU8sZ1BBQWdQLDJCQUEyQixPQUFPLGlHQUFpRywyQkFBMkIsMEJBQTBCLDRCQUE0QixPQUFPLDZEQUE2RCx3QkFBd0IsaUNBQWlDLDhCQUE4QixPQUFPLDJCQUEyQiw2QkFBNkIsZ0NBQWdDLHVCQUF1Qix3QkFBd0IseUJBQXlCLDZCQUE2QixrQ0FBa0MsT0FBTyxrSkFBa0osMkJBQTJCLE9BQU8sNkZBQTZGLDZCQUE2QixnQ0FBZ0MseUJBQXlCLHVCQUF1Qix3QkFBd0Isa0NBQWtDLDZCQUE2QixPQUFPLGtEQUFrRCx5QkFBeUIsMkJBQTJCLDBCQUEwQixPQUFPLHdEQUF3RCx1QkFBdUIsNEJBQTRCLHdCQUF3Qix3Q0FBd0MsT0FBTywwREFBMEQsNkJBQTZCLGdDQUFnQyx5QkFBeUIsdUJBQXVCLHdCQUF3QixrQ0FBa0MsNkJBQTZCLE9BQU8sa0RBQWtELHdCQUF3Qix5Q0FBeUMseUJBQXlCLE9BQU8saUJBQWlCLDJCQUEyQiwwQkFBMEIsMEJBQTBCLE9BQU8scUJBQXFCLHlCQUF5QixnQ0FBZ0MsMEJBQTBCLDBCQUEwQiwyQkFBMkIsdUJBQXVCLE9BQU8sb0JBQW9CLHdCQUF3Qiw4QkFBOEIsT0FBTyxzREFBc0Qsd0JBQXdCLGlDQUFpQyw4QkFBOEIsT0FBTywrQkFBK0Isd0JBQXdCLGlDQUFpQyxPQUFPLDBDQUEwQyx3QkFBd0IsT0FBTyxlQUFlLDhCQUE4QiwwQkFBMEIsMEJBQTBCLE9BQU8saUJBQWlCLHdCQUF3Qix5Q0FBeUMsU0FBUyxtQkFBbUIsMEJBQTBCLDJCQUEyQixPQUFPLHFCQUFxQix3QkFBd0IsaUNBQWlDLDJCQUEyQixPQUFPLDBCQUEwQiwrQkFBK0IsZ0NBQWdDLE9BQU8seUJBQXlCLHdCQUF3QixpQ0FBaUMsK0JBQStCLE9BQU8sOEJBQThCLDRCQUE0QixTQUFTLDZCQUE2QiwyQkFBMkIsd0JBQXdCLHdDQUF3QyxPQUFPLHlEQUF5RCw2QkFBNkIsMEJBQTBCLHVCQUF1QixzQkFBc0IsMEJBQTBCLDJCQUEyQiwwQkFBMEIsbUNBQW1DLG9DQUFvQyxPQUFPLHNDQUFzQyw2QkFBNkIsa0JBQWtCLG9CQUFvQix1QkFBdUIsc0JBQXNCLDJCQUEyQix3QkFBd0Isa0NBQWtDLE9BQU8sK0JBQStCLDBCQUEwQixvQ0FBb0MsT0FBTyxpQkFBaUIsdUJBQXVCLGdDQUFnQywyQkFBMkIsT0FBTyxHQUFHLDZCQUE2QixzREFBc0QsNkJBQTZCLDRIQUE0SCxxQkFBcUIsT0FBTywwQkFBMEIscUJBQXFCLE9BQU8sK0JBQStCLHlCQUF5QixPQUFPLHdCQUF3QixvQkFBb0IsT0FBTyxHQUFHLDZCQUE2QiwwRkFBMEYscUJBQXFCLE9BQU8sR0FBRyw2QkFBNkIsNEVBQTRFLHVCQUF1QixPQUFPLDBCQUEwQix1QkFBdUIsT0FBTyx3QkFBd0IscUJBQXFCLE9BQU8sR0FBRyw2QkFBNkIsK0RBQStELHFCQUFxQixPQUFPLEdBQUcsNkJBQTZCLHdCQUF3QixxQkFBcUIsT0FBTyxHQUFHLG1CQUFtQjtBQUM1L21CO0FBQ2Usc0ZBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNSMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7O0FBRWhCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRDQUE0QyxxQkFBcUI7QUFDakU7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCLGlCQUFpQjtBQUN0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLHFCQUFxQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCOztBQUU5Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxjQUFjO0FBQ25FO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDN0ZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7O0FBRXZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQix3QkFBd0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxTQUFJOztBQUVuRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSxxRUFBcUUscUJBQXFCLGFBQWE7O0FBRXZHOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsR0FBRzs7QUFFSDs7O0FBR0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQjtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1CQUFtQiw0QkFBNEI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsb0JBQW9CLDZCQUE2QjtBQUNqRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7O0FDNVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFLdUI7QUFDYTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiwwREFBYTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsMERBQWE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSwwREFBYTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLDBEQUFhO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLDBEQUFhO0FBQ3ZCO0FBQ0E7QUFDQSxVQUFVLDBEQUFhO0FBQ3ZCO0FBQ0E7QUFDQSx1QkFBdUIsMERBQWE7QUFDcEM7QUFDQTtBQUNBLFVBQVUsMERBQWE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLDBEQUFhO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLDBEQUFhLHlDQUF5QztBQUNqRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsMERBQWE7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLDBEQUFhO0FBQ3ZCLFNBQVM7QUFDVDtBQUNBLFVBQVUsMERBQWE7QUFDdkI7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLDZDQUE2Qyw4RUFBOEU7QUFDM0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixLQUFLLDBEQUFhLFFBQVE7QUFDN0M7QUFDQTtBQUNBLDZCQUE2QiwwREFBYTtBQUMxQztBQUNBO0FBQ0EsOEJBQThCLDBEQUFhO0FBQzNDLDhCQUE4QiwwREFBYTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLHdEQUF3RDtBQUN2RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMERBQWE7QUFDckI7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDBEQUFhO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwwREFBUTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMERBQWE7QUFDekI7QUFDQSxRQUFRLDBEQUFhO0FBQ3JCO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLHlCQUF5QiwwREFBYTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiwwREFBYTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDBEQUFhO0FBQ25CO0FBQ0E7QUFDQSxNQUFNLDBEQUFhO0FBQ25CLEtBQUs7QUFDTCxNQUFNLDBEQUFhO0FBQ25CO0FBQ0E7QUFDQSxNQUFNLDBEQUFhO0FBQ25CO0FBQ0E7QUFDQSxNQUFNLDBEQUFhO0FBQ25CLEtBQUs7QUFDTCxNQUFNLDBEQUFhO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSx5QkFBeUIsMERBQWE7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsMERBQWE7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDBEQUFhO0FBQ2pCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw0REFBTztBQUNoQztBQUNBO0FBQ0EsVUFBVSwyREFBYztBQUN4QjtBQUNBLE1BQU0sMERBQWE7QUFDbkIsTUFBTSwyREFBYztBQUNwQjtBQUNBO0FBQ0E7QUFDQSxVQUFVLDBEQUFhO0FBQ3ZCO0FBQ0EsdUNBQXVDLDBEQUFhLFlBQVk7QUFDaEU7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQywwREFBYTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDBEQUFhO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwwREFBYTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EseUJBQXlCLDBEQUFhO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwwREFBYTtBQUNyQjtBQUNBLE1BQU0sMERBQWE7QUFDbkI7QUFDQSxxQ0FBcUMsMERBQWEsWUFBWTtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsUUFBUSwwREFBYTtBQUNyQjtBQUNBLE1BQU0sMERBQWE7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLE1BQU0sMERBQWE7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ3VDOzs7Ozs7Ozs7Ozs7O0FDN2F4QztBQUFBO0FBQUEsbUJBQU8sQ0FBQyxvQ0FBYTtBQUNpQjtBQUN0QyxvREFBYztBQUNkLG9EQUFjLHlEOzs7Ozs7Ozs7Ozs7QUNIZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxJQUFJO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2dFOzs7Ozs7Ozs7Ozs7O0FDMUNoRTtBQUFBO0FBQUE7QUFBQTtBQUF5RjtBQUN6RixZQUF1Rjs7QUFFdkY7O0FBRUE7QUFDQTs7QUFFQSxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJVCxxSkFBTyxhQUFhLEU7Ozs7Ozs7Ozs7OztBQ1puQztBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0UiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL3Jlc2V0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0NBR0M7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Q0FhQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLFNBQVM7Q0FDVCxlQUFlO0NBQ2YsYUFBYTtDQUNiLHdCQUF3QjtBQUN6QjtBQUNBLGdEQUFnRDtBQUNoRDs7Q0FFQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7QUFDQTs7Q0FFQyxXQUFXO0NBQ1gsYUFBYTtBQUNkO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsaUJBQWlCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBtZWRpYSAobWluLXdpZHRoOjMyMHB4KSAge1xcbiAgICAvKiBzbWFydHBob25lcywgcG9ydHJhaXQgaVBob25lLCBwb3J0cmFpdCA0ODB4MzIwIHBob25lcyAoQW5kcm9pZCkgKi9cXG4gICAgKntcXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIH1cXG4gICAgaHRtbCB7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgICB9XFxuICAgIGJvZHkge1xcbiAgICAgICAgbWFyZ2luOiAwIDAgMjVweDtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIH1cXG4gICAgYiB7XFxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICB9XFxuICAgIC5sb2dvLXdyYXBwZXJ7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBtYXJnaW46IDIwcHggYXV0bztcXG4gICAgfVxcbiAgICAubG9nbyB7XFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICAgICAgY29sb3I6IHJnYig4MCwgODAsIDgwKTtcXG4gICAgICAgIHRyYW5zaXRpb246IC4zcztcXG4gICAgfVxcbiAgICAubG9nbzpob3ZlciB7XFxuICAgICAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgICAgICAgZm9udC1zaXplOiA0NHB4O1xcbiAgICAgICAgdHJhbnNpdGlvbjogLjNzO1xcbiAgICB9XFxuICAgIC8qUHJvamVjdCB0aXRsZSBzdHlsaW5nKi9cXG4gICAgLnByb2plY3QtdGFiIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBmb250LXNpemU6IDI0cHg7XFxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIH1cXG4gICAgLnByb2plY3QtdGFiLXRpdGxle1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICB3aWR0aDogOTAlO1xcbiAgICB9XFxuICAgIC5tb3JlLXByb2plY3Rze1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIHdpZHRoOiAxMCU7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG4gICAgLyptYWluIGNvbnRhaW5lciBzdHlsaW5nKi9cXG4gICAgLmNvbnRlbnQtY29udGFpbmVyIHtcXG4gICAgICAgIHdpZHRoOiA5NSU7XFxuICAgICAgICBtYXJnaW46IDIwcHggYXV0bztcXG4gICAgfVxcbiAgICAvKkJ1dHRvbiBmb3IgYWRkaW5nIHByb2plY3Qgc3R5bGluZyovXFxuICAgIC5hZGQtcHJvamVjdF93aW5kb3d7XFxuICAgICAgICB3aWR0aDogMTYwcHg7XFxuICAgICAgICBwYWRkaW5nOiA0cHggOHB4O1xcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKDExNCwgMjExLCAxNyk7XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMCwgMTgwLCAwKTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuICAgIC5hZGQtcHJvamVjdF93aW5kb3c6YWN0aXZle1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExMSwgMTk0LCAyNyk7XFxuICAgIH1cXG4gICAgLypTdHlsaW5nIGZvciBiYWNrZ3JvdW5kIG9mIHBvcC11cCB3aW5kb3dzIHRvIGFkZC9lZGl0IHRhc2sgb3IgcHJvamVjdCovXFxuICAgIC5hZGQtcHJvamVjdC13cmFwcGVyLFxcbiAgICAuYWRkLXRhc2std3JhcHBlcixcXG4gICAgLmVkaXQtcHJvamVjdC13cmFwcGVyLFxcbiAgICAuZWRpdC10YXNrLXdyYXBwZXIsXFxuICAgIC5hc3N1cmFuY2Utd3JhcHBlcixcXG4gICAgLnRhc2stYXNzdXJhbmNlLXdyYXBwZXIge1xcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBtaW4td2lkdGg6IDEwMHZ3O1xcbiAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzUpO1xcbiAgICB9XFxuICAgIC8qQ2xvc2UgYnV0dG9uIGZvciBwb3AtdXBzIHN0eWxpbmcqL1xcbiAgICAuY2xvc2V7XFxuICAgICAgICBmb250LXNpemU6IDE4cHg7XFxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDEwcHg7XFxuICAgICAgICByaWdodDogMTBweDtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcbiAgICAvKkFkZGluZyBwcm9qZWN0IGNvbnRhaW5lciBzdHlsaW5nKi9cXG4gICAgLmFkZC1wcm9qZWN0X2NvbnRhaW5lcixcXG4gICAgLmVkaXQtcHJvamVjdC1jb250YWluZXIge1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xcbiAgICAgICAgaGVpZ2h0OiAxNjBweDtcXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIH1cXG4gICAgLmFkZC1wcm9qZWN0X2NvbnRhaW5lciBmb3JtLFxcbiAgICAuZWRpdC1wcm9qZWN0LWNvbnRhaW5lciBmb3JtIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG4gICAgLmFkZC1wcm9qZWN0X2NvbnRhaW5lciBpbnB1dCxcXG4gICAgLmFkZC1wcm9qZWN0X2NvbnRhaW5lciBzZWxlY3QsXFxuICAgIC5hZGQtcHJvamVjdF9jb250YWluZXIgYnV0dG9uLFxcbiAgICAuYWRkLXRhc2stY29udGFpbmVyIHNlbGVjdCxcXG4gICAgLmFkZC10YXNrLWNvbnRhaW5lciBpbnB1dCxcXG4gICAgLmFkZC10YXNrLWNvbnRhaW5lciB0ZXh0YXJlYSxcXG4gICAgLmFkZC10YXNrLWNvbnRhaW5lciBidXR0b257XFxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICB9XFxuICAgIC5uZXctcHJvamVjdC10aXRsZSxcXG4gICAgLm5ldy10YXNrLXRpdGxlLFxcbiAgICAuZWRpdC1wcm9qZWN0LXRpdGxlLFxcbiAgICAuZWRpdC10YXNrLXRpdGxlIHtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgICAgICBmb250LXNpemU6IDE4cHg7XFxuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgfVxcbiAgICAvKkFkZGluZyB0YXNrIHN0eWxpbmcqL1xcbiAgICAuYWRkLXRhc2stY29udGFpbmVyIGZvcm0ge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxuICAgIC5hZGQtdGFzay1jb250YWluZXIge1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIH1cXG5cXG4gICAgLypFZGl0aW5nIHByb2plY3Qgc3R5bGluZyovXFxuICAgIC5lZGl0LXByb2plY3QtY29udGFpbmVyIGlucHV0LFxcbiAgICAuZWRpdC1wcm9qZWN0LWNvbnRhaW5lciBidXR0b24sXFxuICAgIC5lZGl0LXByb2plY3QtY29udGFpbmVyIHNlbGVjdCB7XFxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICB9XFxuICAgIC8qZGVsZXRpbmcgcHJvamVjdCBwb3AtdXAqL1xcbiAgICAuYXNzdXJhbmNlLWNvbnRhaW5lcixcXG4gICAgLnRhc2stYXNzdXJhbmNlLWNvbnRhaW5lciB7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgICAgIHdpZHRoOiAzMDBweDtcXG4gICAgICAgIGhlaWdodDogMTAwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcbiAgICAuYXNzdXJhbmNlLXRleHQsXFxuICAgIC50YXNrLWFzc3VyYW5jZS10ZXh0IHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgICAgIHBhZGRpbmc6IDAgMjBweDtcXG4gICAgfVxcbiAgICAuYXNzdXJhbmNlLWJ1dHRvbnMsXFxuICAgIC50YXNrLWFzc3VyYW5jZS1idXR0b25zIHtcXG4gICAgICAgIHdpZHRoOiAyNTBweDtcXG4gICAgICAgIG1hcmdpbjogMTVweCBhdXRvO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICB9XFxuICAgIC8qRWRpdGluZyBUYXNrIHN0eWxpbmcqL1xcbiAgICAuZWRpdC10YXNrLWNvbnRhaW5lciB7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgICAgIHdpZHRoOiAzMDBweDtcXG4gICAgICAgIGhlaWdodDogMjAwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcbiAgICAvKkludmlkdWFsIFByb2plY3Qgc3R5bGluZyovXFxuICAgIC5wcm9qZWN0IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBtYXJnaW46IDE1cHggMDtcXG4gICAgfVxcbiAgICAucHJvamVjdCBpe1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcbiAgICAucHJvamVjdC10aXRsZXtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgICAgIHdpZHRoOiAyNTBweDtcXG4gICAgfVxcbiAgICAucHJvamVjdCBkaXYge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG4gICAgLyogQWxsIHByb2plY3RzIHN0eWxpbmcqL1xcblxcbiAgICAuYWxsLXByb2plY3RzIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgfVxcbiAgICAuYWxsLXByb2plY3RzLWNvbnRhaW5lciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcblxcbiAgICAvKkFsbCBUYXNrcyBzdHlsaW5nKi9cXG4gICAgLnRhc2sge1xcbiAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgfVxcbiAgICAudGFzayBpIHtcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuICAgICAgICBmb250LXNpemU6IDI0cHg7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG4gICAgLnRhc2stYmFyIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuICAgIH1cXG4gICAgLnRhc2stdGl0bGUge1xcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgfVxcbiAgICAubW9yZS13cmFwcGVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgfVxcbiAgICAubW9yZS13cmFwcGVyIHNwYW4ge1xcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgIH1cXG4gICAgLnRhc2stZGVzY3JpcHRpb24ge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gICAgfVxcbiAgICAudGFzay1kZXNjcmlwdGlvbiBzcGFuIHtcXG4gICAgICAgIHBhZGRpbmc6IDVweCAxNXB4O1xcblxcbiAgICB9XFxuICAgIC50YXNrLWJ1dHRvbnMtd3JhcHBlciB7XFxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICB9XFxuICAgIC8qQWRkIFRhc2sgYnV0dG9uIHN0eWxpbmcqL1xcbiAgICAuYWRkLXRhc2tfd2luZG93IHtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgIGJvdHRvbTogNTBweDtcXG4gICAgICAgIHJpZ2h0OiAzMHB4O1xcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRvbWF0bztcXG4gICAgICAgIGNvbG9yOiByZ2IoMjU1LCAyNTMsIDI0NSk7XFxuICAgIH1cXG4gICAgLypmb290ZXIgc3R5bGluZyovXFxuICAgIGZvb3RlciB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgYm90dG9tOiAwO1xcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB9XFxuICAgIC5hdXRob3IsXFxuICAgIC5hdXRob3IgYSB7XFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgICAgICBjb2xvcjogcmdiKDE0MSwgMTQxLCAxNDEpO1xcbiAgICB9XFxuICAgIC5hdXRob3IgYSB7XFxuICAgICAgICBjb2xvcjogYmxhY2s7XFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOjQ4MHB4KSAgeyAvKiBzbWFydHBob25lcywgQW5kcm9pZCBwaG9uZXMsIGxhbmRzY2FwZSBpUGhvbmUgKi8gfVxcbkBtZWRpYSAobWluLXdpZHRoOjYwMHB4KSAge1xcbiAgICAvKiBwb3J0cmFpdCB0YWJsZXRzLCBwb3J0cmFpdCBpUGFkLCBlLXJlYWRlcnMgKE5vb2svS2luZGxlKSwgbGFuZHNjYXBlIDgwMHg0ODAgcGhvbmVzIChBbmRyb2lkKSAqL1xcbiAgICAucHJvamVjdC10YWIge1xcbiAgICAgICAgd2lkdGg6IDkwJTtcXG4gICAgfVxcbiAgICAuY29udGVudC1jb250YWluZXIge1xcbiAgICAgICAgd2lkdGg6IDgwJTtcXG4gICAgfVxcbiAgICAuYWxsLXByb2plY3RzLWNvbnRhaW5lciB7XFxuICAgICAgICBtYXJnaW46IDAgMjBweDtcXG4gICAgfVxcbiAgICAuYWRkLXRhc2tfd2luZG93IHtcXG4gICAgICAgIHJpZ2h0OiA1JTtcXG4gICAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDo4MDFweCkgIHsgXFxuICAgIC8qIHRhYmxldCwgbGFuZHNjYXBlIGlQYWQsIGxvLXJlcyBsYXB0b3BzIGFuZHMgZGVza3RvcHMgKi8gXFxuICAgIC5hZGQtdGFza193aW5kb3cge1xcbiAgICAgICAgcmlnaHQ6IDEwJTtcXG4gICAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDoxMDI1cHgpIHtcXG4gICAgLyogYmlnIGxhbmRzY2FwZSB0YWJsZXRzLCBsYXB0b3BzLCBhbmQgZGVza3RvcHMgKi9cXG4gICAgLnByb2plY3QtdGFiIHtcXG4gICAgICAgIHdpZHRoOiA4MDBweDtcXG4gICAgfVxcbiAgICAuY29udGVudC1jb250YWluZXIge1xcbiAgICAgICAgd2lkdGg6IDgwMHB4O1xcbiAgICB9XFxuICAgIC5hZGQtdGFza193aW5kb3cge1xcbiAgICAgICAgcmlnaHQ6IDE2JTtcXG4gICAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDoxMjgxcHgpIHtcXG4gICAgLyogaGktcmVzIGxhcHRvcHMgYW5kIGRlc2t0b3BzICovXFxuICAgIC5hZGQtdGFza193aW5kb3cge1xcbiAgICAgICAgcmlnaHQ6IDIwJTtcXG4gICAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTQ0MHB4KXtcXG4gICAgLmFkZC10YXNrX3dpbmRvdyB7XFxuICAgICAgICByaWdodDogMjUlO1xcbiAgICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksb0VBQW9FO0lBQ3BFO1FBQ0ksc0JBQXNCO0lBQzFCO0lBQ0E7UUFDSSxrQkFBa0I7UUFDbEIsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIsYUFBYTtJQUNqQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxrQkFBa0I7UUFDbEIsaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxxQkFBcUI7UUFDckIsZ0JBQWdCO1FBQ2hCLGVBQWU7UUFDZixzQkFBc0I7UUFDdEIsZUFBZTtJQUNuQjtJQUNBO1FBQ0ksbUJBQW1CO1FBQ25CLGVBQWU7UUFDZixlQUFlO0lBQ25CO0lBQ0Esd0JBQXdCO0lBQ3hCO1FBQ0ksYUFBYTtRQUNiLDhCQUE4QjtRQUM5QixrQkFBa0I7UUFDbEIsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxjQUFjO1FBQ2QscUJBQXFCO1FBQ3JCLGVBQWU7UUFDZixVQUFVO0lBQ2Q7SUFDQTtRQUNJLGFBQWE7UUFDYix1QkFBdUI7UUFDdkIsbUJBQW1CO1FBQ25CLFVBQVU7UUFDVixlQUFlO0lBQ25CO0lBQ0EseUJBQXlCO0lBQ3pCO1FBQ0ksVUFBVTtRQUNWLGlCQUFpQjtJQUNyQjtJQUNBLG9DQUFvQztJQUNwQztRQUNJLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsWUFBWTtRQUNaLDZCQUE2QjtRQUM3QixnQ0FB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QUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLGVBQWU7UUFDZix3QkFBd0I7UUFDeEIseUJBQXlCO0lBQzdCO0lBQ0EsaUJBQWlCO0lBQ2pCO1FBQ0ksa0JBQWtCO1FBQ2xCLE9BQU87UUFDUCxTQUFTO1FBQ1QsWUFBWTtRQUNaLFdBQVc7UUFDWCxnQkFBZ0I7UUFDaEIsYUFBYTtRQUNiLHVCQUF1QjtJQUMzQjtJQUNBOztRQUVJLGVBQWU7UUFDZix5QkFBeUI7SUFDN0I7SUFDQTtRQUNJLFlBQVk7UUFDWixxQkFBcUI7UUFDckIsZ0JBQWdCO0lBQ3BCO0FBQ0o7QUFDQSw0QkFBNEIsa0RBQWtELEVBQUU7QUFDaEY7SUFDSSxpR0FBaUc7SUFDakc7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksU0FBUztJQUNiO0FBQ0o7QUFDQTtJQUNJLHlEQUF5RDtJQUN6RDtRQUNJLFVBQVU7SUFDZDtBQUNKO0FBQ0E7SUFDSSxpREFBaUQ7SUFDakQ7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7QUFDSjtBQUNBO0lBQ0ksZ0NBQWdDO0lBQ2hDO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7QUFDQTtJQUNJO1FBQ0ksVUFBVTtJQUNkO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnLi9yZXNldC5jc3MnO1xcblxcbkBtZWRpYSAobWluLXdpZHRoOjMyMHB4KSAge1xcbiAgICAvKiBzbWFydHBob25lcywgcG9ydHJhaXQgaVBob25lLCBwb3J0cmFpdCA0ODB4MzIwIHBob25lcyAoQW5kcm9pZCkgKi9cXG4gICAgKntcXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIH1cXG4gICAgaHRtbCB7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgICB9XFxuICAgIGJvZHkge1xcbiAgICAgICAgbWFyZ2luOiAwIDAgMjVweDtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIH1cXG4gICAgYiB7XFxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICB9XFxuICAgIC5sb2dvLXdyYXBwZXJ7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBtYXJnaW46IDIwcHggYXV0bztcXG4gICAgfVxcbiAgICAubG9nbyB7XFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICAgICAgY29sb3I6IHJnYig4MCwgODAsIDgwKTtcXG4gICAgICAgIHRyYW5zaXRpb246IC4zcztcXG4gICAgfVxcbiAgICAubG9nbzpob3ZlciB7XFxuICAgICAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgICAgICAgZm9udC1zaXplOiA0NHB4O1xcbiAgICAgICAgdHJhbnNpdGlvbjogLjNzO1xcbiAgICB9XFxuICAgIC8qUHJvamVjdCB0aXRsZSBzdHlsaW5nKi9cXG4gICAgLnByb2plY3QtdGFiIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBmb250LXNpemU6IDI0cHg7XFxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIH1cXG4gICAgLnByb2plY3QtdGFiLXRpdGxle1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICB3aWR0aDogOTAlO1xcbiAgICB9XFxuICAgIC5tb3JlLXByb2plY3Rze1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIHdpZHRoOiAxMCU7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG4gICAgLyptYWluIGNvbnRhaW5lciBzdHlsaW5nKi9cXG4gICAgLmNvbnRlbnQtY29udGFpbmVyIHtcXG4gICAgICAgIHdpZHRoOiA5NSU7XFxuICAgICAgICBtYXJnaW46IDIwcHggYXV0bztcXG4gICAgfVxcbiAgICAvKkJ1dHRvbiBmb3IgYWRkaW5nIHByb2plY3Qgc3R5bGluZyovXFxuICAgIC5hZGQtcHJvamVjdF93aW5kb3d7XFxuICAgICAgICB3aWR0aDogMTYwcHg7XFxuICAgICAgICBwYWRkaW5nOiA0cHggOHB4O1xcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKDExNCwgMjExLCAxNyk7XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMCwgMTgwLCAwKTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuICAgIC5hZGQtcHJvamVjdF93aW5kb3c6YWN0aXZle1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExMSwgMTk0LCAyNyk7XFxuICAgIH1cXG4gICAgLypTdHlsaW5nIGZvciBiYWNrZ3JvdW5kIG9mIHBvcC11cCB3aW5kb3dzIHRvIGFkZC9lZGl0IHRhc2sgb3IgcHJvamVjdCovXFxuICAgIC5hZGQtcHJvamVjdC13cmFwcGVyLFxcbiAgICAuYWRkLXRhc2std3JhcHBlcixcXG4gICAgLmVkaXQtcHJvamVjdC13cmFwcGVyLFxcbiAgICAuZWRpdC10YXNrLXdyYXBwZXIsXFxuICAgIC5hc3N1cmFuY2Utd3JhcHBlcixcXG4gICAgLnRhc2stYXNzdXJhbmNlLXdyYXBwZXIge1xcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBtaW4td2lkdGg6IDEwMHZ3O1xcbiAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzUpO1xcbiAgICB9XFxuICAgIC8qQ2xvc2UgYnV0dG9uIGZvciBwb3AtdXBzIHN0eWxpbmcqL1xcbiAgICAuY2xvc2V7XFxuICAgICAgICBmb250LXNpemU6IDE4cHg7XFxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDEwcHg7XFxuICAgICAgICByaWdodDogMTBweDtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcbiAgICAvKkFkZGluZyBwcm9qZWN0IGNvbnRhaW5lciBzdHlsaW5nKi9cXG4gICAgLmFkZC1wcm9qZWN0X2NvbnRhaW5lcixcXG4gICAgLmVkaXQtcHJvamVjdC1jb250YWluZXIge1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xcbiAgICAgICAgaGVpZ2h0OiAxNjBweDtcXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIH1cXG4gICAgLmFkZC1wcm9qZWN0X2NvbnRhaW5lciBmb3JtLFxcbiAgICAuZWRpdC1wcm9qZWN0LWNvbnRhaW5lciBmb3JtIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG4gICAgLmFkZC1wcm9qZWN0X2NvbnRhaW5lciBpbnB1dCxcXG4gICAgLmFkZC1wcm9qZWN0X2NvbnRhaW5lciBzZWxlY3QsXFxuICAgIC5hZGQtcHJvamVjdF9jb250YWluZXIgYnV0dG9uLFxcbiAgICAuYWRkLXRhc2stY29udGFpbmVyIHNlbGVjdCxcXG4gICAgLmFkZC10YXNrLWNvbnRhaW5lciBpbnB1dCxcXG4gICAgLmFkZC10YXNrLWNvbnRhaW5lciB0ZXh0YXJlYSxcXG4gICAgLmFkZC10YXNrLWNvbnRhaW5lciBidXR0b257XFxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICB9XFxuICAgIC5uZXctcHJvamVjdC10aXRsZSxcXG4gICAgLm5ldy10YXNrLXRpdGxlLFxcbiAgICAuZWRpdC1wcm9qZWN0LXRpdGxlLFxcbiAgICAuZWRpdC10YXNrLXRpdGxlIHtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgICAgICBmb250LXNpemU6IDE4cHg7XFxuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgfVxcbiAgICAvKkFkZGluZyB0YXNrIHN0eWxpbmcqL1xcbiAgICAuYWRkLXRhc2stY29udGFpbmVyIGZvcm0ge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxuICAgIC5hZGQtdGFzay1jb250YWluZXIge1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIH1cXG5cXG4gICAgLypFZGl0aW5nIHByb2plY3Qgc3R5bGluZyovXFxuICAgIC5lZGl0LXByb2plY3QtY29udGFpbmVyIGlucHV0LFxcbiAgICAuZWRpdC1wcm9qZWN0LWNvbnRhaW5lciBidXR0b24sXFxuICAgIC5lZGl0LXByb2plY3QtY29udGFpbmVyIHNlbGVjdCB7XFxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICB9XFxuICAgIC8qZGVsZXRpbmcgcHJvamVjdCBwb3AtdXAqL1xcbiAgICAuYXNzdXJhbmNlLWNvbnRhaW5lcixcXG4gICAgLnRhc2stYXNzdXJhbmNlLWNvbnRhaW5lciB7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgICAgIHdpZHRoOiAzMDBweDtcXG4gICAgICAgIGhlaWdodDogMTAwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcbiAgICAuYXNzdXJhbmNlLXRleHQsXFxuICAgIC50YXNrLWFzc3VyYW5jZS10ZXh0IHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgICAgIHBhZGRpbmc6IDAgMjBweDtcXG4gICAgfVxcbiAgICAuYXNzdXJhbmNlLWJ1dHRvbnMsXFxuICAgIC50YXNrLWFzc3VyYW5jZS1idXR0b25zIHtcXG4gICAgICAgIHdpZHRoOiAyNTBweDtcXG4gICAgICAgIG1hcmdpbjogMTVweCBhdXRvO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICB9XFxuICAgIC8qRWRpdGluZyBUYXNrIHN0eWxpbmcqL1xcbiAgICAuZWRpdC10YXNrLWNvbnRhaW5lciB7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgICAgIHdpZHRoOiAzMDBweDtcXG4gICAgICAgIGhlaWdodDogMjAwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcbiAgICAvKkludmlkdWFsIFByb2plY3Qgc3R5bGluZyovXFxuICAgIC5wcm9qZWN0IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBtYXJnaW46IDE1cHggMDtcXG4gICAgfVxcbiAgICAucHJvamVjdCBpe1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcbiAgICAucHJvamVjdC10aXRsZXtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgICAgIHdpZHRoOiAyNTBweDtcXG4gICAgfVxcbiAgICAucHJvamVjdCBkaXYge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG4gICAgLyogQWxsIHByb2plY3RzIHN0eWxpbmcqL1xcblxcbiAgICAuYWxsLXByb2plY3RzIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgfVxcbiAgICAuYWxsLXByb2plY3RzLWNvbnRhaW5lciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcblxcbiAgICAvKkFsbCBUYXNrcyBzdHlsaW5nKi9cXG4gICAgLnRhc2sge1xcbiAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgfVxcbiAgICAudGFzayBpIHtcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuICAgICAgICBmb250LXNpemU6IDI0cHg7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG4gICAgLnRhc2stYmFyIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuICAgIH1cXG4gICAgLnRhc2stdGl0bGUge1xcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgfVxcbiAgICAubW9yZS13cmFwcGVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgfVxcbiAgICAubW9yZS13cmFwcGVyIHNwYW4ge1xcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgIH1cXG4gICAgLnRhc2stZGVzY3JpcHRpb24ge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gICAgfVxcbiAgICAudGFzay1kZXNjcmlwdGlvbiBzcGFuIHtcXG4gICAgICAgIHBhZGRpbmc6IDVweCAxNXB4O1xcblxcbiAgICB9XFxuICAgIC50YXNrLWJ1dHRvbnMtd3JhcHBlciB7XFxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICB9XFxuICAgIC8qQWRkIFRhc2sgYnV0dG9uIHN0eWxpbmcqL1xcbiAgICAuYWRkLXRhc2tfd2luZG93IHtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgIGJvdHRvbTogNTBweDtcXG4gICAgICAgIHJpZ2h0OiAzMHB4O1xcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRvbWF0bztcXG4gICAgICAgIGNvbG9yOiByZ2IoMjU1LCAyNTMsIDI0NSk7XFxuICAgIH1cXG4gICAgLypmb290ZXIgc3R5bGluZyovXFxuICAgIGZvb3RlciB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgYm90dG9tOiAwO1xcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB9XFxuICAgIC5hdXRob3IsXFxuICAgIC5hdXRob3IgYSB7XFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgICAgICBjb2xvcjogcmdiKDE0MSwgMTQxLCAxNDEpO1xcbiAgICB9XFxuICAgIC5hdXRob3IgYSB7XFxuICAgICAgICBjb2xvcjogYmxhY2s7XFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOjQ4MHB4KSAgeyAvKiBzbWFydHBob25lcywgQW5kcm9pZCBwaG9uZXMsIGxhbmRzY2FwZSBpUGhvbmUgKi8gfVxcbkBtZWRpYSAobWluLXdpZHRoOjYwMHB4KSAge1xcbiAgICAvKiBwb3J0cmFpdCB0YWJsZXRzLCBwb3J0cmFpdCBpUGFkLCBlLXJlYWRlcnMgKE5vb2svS2luZGxlKSwgbGFuZHNjYXBlIDgwMHg0ODAgcGhvbmVzIChBbmRyb2lkKSAqL1xcbiAgICAucHJvamVjdC10YWIge1xcbiAgICAgICAgd2lkdGg6IDkwJTtcXG4gICAgfVxcbiAgICAuY29udGVudC1jb250YWluZXIge1xcbiAgICAgICAgd2lkdGg6IDgwJTtcXG4gICAgfVxcbiAgICAuYWxsLXByb2plY3RzLWNvbnRhaW5lciB7XFxuICAgICAgICBtYXJnaW46IDAgMjBweDtcXG4gICAgfVxcbiAgICAuYWRkLXRhc2tfd2luZG93IHtcXG4gICAgICAgIHJpZ2h0OiA1JTtcXG4gICAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDo4MDFweCkgIHsgXFxuICAgIC8qIHRhYmxldCwgbGFuZHNjYXBlIGlQYWQsIGxvLXJlcyBsYXB0b3BzIGFuZHMgZGVza3RvcHMgKi8gXFxuICAgIC5hZGQtdGFza193aW5kb3cge1xcbiAgICAgICAgcmlnaHQ6IDEwJTtcXG4gICAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDoxMDI1cHgpIHtcXG4gICAgLyogYmlnIGxhbmRzY2FwZSB0YWJsZXRzLCBsYXB0b3BzLCBhbmQgZGVza3RvcHMgKi9cXG4gICAgLnByb2plY3QtdGFiIHtcXG4gICAgICAgIHdpZHRoOiA4MDBweDtcXG4gICAgfVxcbiAgICAuY29udGVudC1jb250YWluZXIge1xcbiAgICAgICAgd2lkdGg6IDgwMHB4O1xcbiAgICB9XFxuICAgIC5hZGQtdGFza193aW5kb3cge1xcbiAgICAgICAgcmlnaHQ6IDE2JTtcXG4gICAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDoxMjgxcHgpIHtcXG4gICAgLyogaGktcmVzIGxhcHRvcHMgYW5kIGRlc2t0b3BzICovXFxuICAgIC5hZGQtdGFza193aW5kb3cge1xcbiAgICAgICAgcmlnaHQ6IDIwJTtcXG4gICAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTQ0MHB4KXtcXG4gICAgLmFkZC10YXNrX3dpbmRvdyB7XFxuICAgICAgICByaWdodDogMjUlO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIi8qIGVzbGludC1kaXNhYmxlIG5ldy1jYXAgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5pbXBvcnQge1xuICBwcm9qZWN0SG9sZGVyLFxuICBQcm9qZWN0LFxuICBwcm9qZWN0Y291bnRlcixcbn0gZnJvbSAnLi9wcm9qZWN0cy5qcyc7XG5pbXBvcnQge1RvRG9UYXNrfSBmcm9tICcuL3RvZG9zLmpzJztcbmNvbnN0IHByaW50aW5nTW9kdWxlID0gKCgpID0+IHtcbiAgY29uc3QgcHJpbnRUYXNrcyA9ICgpID0+IHtcbiAgICBjb25zdCBhbGxUYXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwtdGFza3MnKTtcbiAgICBhbGxUYXNrcy5pbm5lckhUTUwgPSAnJztcbiAgICBjb25zdCBhY3RpdmVQcm9qZWN0SUQgPSBkb2N1bWVudFxuICAgICAgICAucXVlcnlTZWxlY3RvcignLnByb2plY3QtdGFiLXRpdGxlJylcbiAgICAgICAgLmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICBjb25zdCBhY3RpdmVQcm9qZWN0SW5kZXggPSBwcm9qZWN0SG9sZGVyLmZpbmRJbmRleChcbiAgICAgICAgKHgpID0+IHguZ2V0SUQoKSA9PSBhY3RpdmVQcm9qZWN0SUQsXG4gICAgKTtcbiAgICBmb3IgKFxuICAgICAgbGV0IGkgPSAwO1xuICAgICAgaSA8IHByb2plY3RIb2xkZXJbYWN0aXZlUHJvamVjdEluZGV4XS50b0RvTGlzdC5sZW5ndGg7XG4gICAgICBpKytcbiAgICApIHtcbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29uc3QgZGl2MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZGl2LnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAnaWQnLFxuICAgICAgICAgIHByb2plY3RIb2xkZXJbYWN0aXZlUHJvamVjdEluZGV4XS50b0RvTGlzdFtpXS5nZXRJRCgpLFxuICAgICAgKTtcbiAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Rhc2snKTtcbiAgICAgIGRpdjEuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0YXNrLWJhcicpO1xuICAgICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgdGFza1RpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFzay10aXRsZScpO1xuICAgICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdEhvbGRlclthY3RpdmVQcm9qZWN0SW5kZXhdLnRvRG9MaXN0W1xuICAgICAgICAgIGlcbiAgICAgIF0uZ2V0TmFtZSgpO1xuICAgICAgZGl2MS5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuICAgICAgZGl2MS5pbm5lckhUTUwgKz0gYDxkaXY+PHNwYW4gY2xhc3M9XCJtb3JlLXRhc2tfd2luZG93XCI+PGkgY2xhc3M9XCJmYXMgZmEtY2FyZXQtZG93blwiPjwvaT48L3NwYW4+YCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgPHNwYW4gY2xhc3M9XCJjb21wbGV0ZS10YXNrXCI+PGkgY2xhc3M9XCJmYXIgZmEtY2hlY2stc3F1YXJlXCI+PC9pPjwvc3Bhbj48L2Rpdj5gO1xuICAgICAgY29uc3QgZGl2TW9yZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZGl2TW9yZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21vcmUtd3JhcHBlcicpO1xuICAgICAgZGl2TW9yZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgY29uc3QgcHJpb3JpdHlJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgcHJpb3JpdHlJbmZvLnRleHRDb250ZW50ID1cbiAgICAgICAgICAnUHJpb3JpdHk6ICcgK1xuICAgICAgICAgIHByb2plY3RIb2xkZXJbYWN0aXZlUHJvamVjdEluZGV4XS50b0RvTGlzdFtpXS5nZXRQcmlvcml0eSgpO1xuICAgICAgcHJpb3JpdHlJbmZvLnN0eWxlLm1hcmdpbiA9ICcwIGF1dG8nO1xuICAgICAgZGl2TW9yZS5hcHBlbmRDaGlsZChwcmlvcml0eUluZm8pO1xuICAgICAgaWYgKHByb2plY3RIb2xkZXJbYWN0aXZlUHJvamVjdEluZGV4XS50b0RvTGlzdFtpXS5nZXREYXRlKCkgIT0gJycpIHtcbiAgICAgICAgY29uc3QgZGF0ZUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGRhdGVJbmZvLnRleHRDb250ZW50ID1cbiAgICAgICAgICAnRHVlIHRvOiAnICsgcHJvamVjdEhvbGRlclthY3RpdmVQcm9qZWN0SW5kZXhdLnRvRG9MaXN0W2ldLmdldERhdGUoKTtcbiAgICAgICAgZGl2TW9yZS5hcHBlbmRDaGlsZChkYXRlSW5mbyk7XG4gICAgICB9XG4gICAgICBpZiAocHJvamVjdEhvbGRlclthY3RpdmVQcm9qZWN0SW5kZXhdLnRvRG9MaXN0W2ldLmdldERlc2NyaXB0aW9uKCkgIT0gJycpIHtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRlc2NyaXB0aW9uV3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Rhc2stZGVzY3JpcHRpb24nKTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25JbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBkZXNjcmlwdGlvbkluZm8udGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb246JztcbiAgICAgICAgZGVzY3JpcHRpb25JbmZvLnN0eWxlLm1hcmdpbiA9ICcwIGF1dG8nO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uQ29udGVudC50ZXh0Q29udGVudCA9IHByb2plY3RIb2xkZXJbYWN0aXZlUHJvamVjdEluZGV4XS50b0RvTGlzdFtpXS5nZXREZXNjcmlwdGlvbigpO1xuICAgICAgICBkZXNjcmlwdGlvbkNvbnRlbnQuc3R5bGUuYm9yZGVyID0gJzFweCBzb2xpZCBibGFjayc7XG4gICAgICAgIGRlc2NyaXB0aW9uV3JhcHBlci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkluZm8pO1xuICAgICAgICBkZXNjcmlwdGlvbldyYXBwZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25Db250ZW50KTtcbiAgICAgICAgZGl2TW9yZS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbldyYXBwZXIpO1xuICAgICAgfVxuICAgICAgY29uc3QgYnV0dG9uc1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGJ1dHRvbnNXcmFwcGVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFzay1idXR0b25zLXdyYXBwZXInKTtcbiAgICAgIGJ1dHRvbnNXcmFwcGVyLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtwcm9qZWN0SG9sZGVyW2FjdGl2ZVByb2plY3RJbmRleF0udG9Eb0xpc3RbaV0uZ2V0SUQoKX1gKTtcbiAgICAgIGNvbnN0IGRsdGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgZGx0YnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFzay1kbHQnKTtcbiAgICAgIGNvbnN0IGVkaXRidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGVkaXRidXR0b24uc2V0QXR0cmlidXRlKCdjbGFzcycsICd0YXNrLWVkaXQnKTtcbiAgICAgIGRsdGJ1dHRvbi50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xuICAgICAgZWRpdGJ1dHRvbi50ZXh0Q29udGVudCA9ICdFZGl0JztcbiAgICAgIGJ1dHRvbnNXcmFwcGVyLmFwcGVuZENoaWxkKGRsdGJ1dHRvbik7XG4gICAgICBidXR0b25zV3JhcHBlci5hcHBlbmRDaGlsZChlZGl0YnV0dG9uKTtcbiAgICAgIGRpdk1vcmUuYXBwZW5kQ2hpbGQoYnV0dG9uc1dyYXBwZXIpO1xuICAgICAgZGl2LmFwcGVuZENoaWxkKGRpdjEpO1xuICAgICAgZGl2LmFwcGVuZENoaWxkKGRpdk1vcmUpO1xuICAgICAgYWxsVGFza3MuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICB9XG4gICAgY29uc3QgbW9yZVRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vcmUtdGFza193aW5kb3cnKTtcbiAgICBtb3JlVGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgdGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKHRhc2sucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2hpbGROb2Rlc1sxXS5zdHlsZS5kaXNwbGF5ICE9ICdmbGV4JyApIHtcbiAgICAgICAgICB0YXNrLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNoaWxkTm9kZXNbMV0uc3R5bGUuZGlzcGxheT0gJ2ZsZXgnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRhc2sucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2hpbGROb2Rlc1sxXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBjb25zdCBjb21wbGV0ZVRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbXBsZXRlLXRhc2snKTtcbiAgICBjb21wbGV0ZVRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIHRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tJRCA9IHRhc2sucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgICAgICBjb25zdCB0YXNrSW5kZXggPSBwcm9qZWN0SG9sZGVyW2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXRhYi10aXRsZScpLmdldEF0dHJpYnV0ZSgnaWQnKV0udG9Eb0xpc3QuZmluZEluZGV4KFxuICAgICAgICAgICAgKHgpID0+IHguZ2V0SUQoKSA9PSB0YXNrSUQsXG4gICAgICAgICk7XG4gICAgICAgIGlmICh0YXNrLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNoaWxkTm9kZXNbMF0uc3R5bGUuY29sb3IgIT0gJ2dyZWVuJykge1xuICAgICAgICAgIHRhc2sucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2hpbGROb2Rlc1swXS5zdHlsZS5jb2xvciA9ICdncmVlbic7XG4gICAgICAgICAgcHJvamVjdEhvbGRlcltkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC10YWItdGl0bGUnKS5nZXRBdHRyaWJ1dGUoJ2lkJyldLnRvRG9MaXN0W3Rhc2tJbmRleF0uY2hhbmdlU3RhdHVzKCdkb25lJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGFzay5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5jaGlsZE5vZGVzWzBdLnN0eWxlLmNvbG9yID0gJ2JsYWNrJztcbiAgICAgICAgICBwcm9qZWN0SG9sZGVyW2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXRhYi10aXRsZScpLmdldEF0dHJpYnV0ZSgnaWQnKV0udG9Eb0xpc3RbdGFza0luZGV4XS5jaGFuZ2VTdGF0dXMoJ3RvIGRvJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGNvbnN0IG9wZW5FZGl0VGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzay1lZGl0Jyk7XG4gICAgb3BlbkVkaXRUYXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICB0YXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC10YXNrLXdyYXBwZXInKS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC10YXNrLXRpdGxlJykuc2V0QXR0cmlidXRlKCdpZCcsIHRhc2sucGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoJ2lkJykpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgY29uc3Qgb3BlbkRlbGV0ZVRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2stZGx0Jyk7XG4gICAgb3BlbkRlbGV0ZVRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIHRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stYXNzdXJhbmNlLXdyYXBwZXInKS5zdHlsZS52aXNpYmlsaXR5ID1cbiAgICAgICAgICAgICAgJ3Zpc2libGUnO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICcudGFzay1hc3N1cmFuY2UtdGV4dCcsXG4gICAgICApLmlubmVySFRNTCA9IGBEbyB5b3Ugd2FudCBkZWxldGUgPGI+JHt0YXNrLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1swXS50ZXh0Q29udGVudH08L2I+IFRhc2s/YDtcbiAgICAgIGRvY3VtZW50XG4gICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWFzc3VyYW5jZS10ZXh0JylcbiAgICAgICAgICAuc2V0QXR0cmlidXRlKFxuICAgICAgICAgICAgICAnaWQnLFxuICAgICAgICAgICAgICB0YXNrLnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpZCcpLFxuICAgICAgICAgICk7XG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IGNob29zZVByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwtcHJvamVjdHMnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXRhYi10aXRsZScpLnRleHRDb250ZW50ID1cbiAgICAgICAgcHJvamVjdC50ZXh0Q29udGVudDtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC10YWItdGl0bGUnKS5zdHlsZS5jb2xvciA9XG4gICAgICAgIHByb2plY3Quc3R5bGUuY29sb3I7XG4gICAgZG9jdW1lbnRcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXRhYi10aXRsZScpXG4gICAgICAgIC5zZXRBdHRyaWJ1dGUoJ2lkJywgcHJvamVjdC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnaWQnKSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbC10YXNrcycpLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gIH07XG4gIGNvbnN0IHByaW50UHJvamVjdHMgPSAoKSA9PiB7XG4gICAgY29uc3QgYWxsUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsLXByb2plY3RzLWNvbnRhaW5lcicpO1xuICAgIGFsbFByb2plY3RzLmlubmVySFRNTCA9ICcnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdEhvbGRlci5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBkaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcm9qZWN0Jyk7XG4gICAgICBkaXYuc2V0QXR0cmlidXRlKCdpZCcsIHByb2plY3RIb2xkZXJbaV0uZ2V0SUQoKSk7XG4gICAgICBjb25zdCBzcGFuVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBzcGFuVGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcm9qZWN0LXRpdGxlJyk7XG4gICAgICBzcGFuVGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0SG9sZGVyW2ldLmdldE5hbWUoKTtcbiAgICAgIHNwYW5UaXRsZS5zdHlsZS5jb2xvciA9IHByb2plY3RIb2xkZXJbaV0uZ2V0Q29sb3IoKTtcbiAgICAgIGRpdi5hcHBlbmRDaGlsZChzcGFuVGl0bGUpO1xuICAgICAgZGl2LmlubmVySFRNTCArPSBgPGRpdj48c3BhbiBjbGFzcz1cImVkaXQtcHJvamVjdF93aW5kb3dcIj48aSBjbGFzcz1cImZhcyBmYS1lZGl0XCI+PC9pPjwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJkZWxldGUtcHJvamVjdFwiPjxpIGNsYXNzPVwiZmFzIGZhLXRyYXNoXCI+PC9pPjwvc3Bhbj48L2Rpdj5gO1xuICAgICAgYWxsUHJvamVjdHMuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICB9XG4gICAgLy8gZXZlbnQgbGlzdGVuZXIgdG8gZHluYW1pY2FsbHkgYWRkZWQgcHJvamVjdHMgdG8gY2hhbmdlIHZpZXcsIGVkaXQsIGFuZCBkZWxldGUgdGhlbVxuICAgIGNvbnN0IGNob29zZVByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtdGl0bGUnKTtcbiAgICBjaG9vc2VQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBwcmludGluZ01vZHVsZS5jaG9vc2VQcm9qZWN0KHByb2plY3QpO1xuICAgICAgICBwcmludGluZ01vZHVsZS5wcmludFRhc2tzKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBjb25zdCBvcGVuRWRpdFByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgJy5lZGl0LXByb2plY3Rfd2luZG93JyxcbiAgICApO1xuICAgIG9wZW5FZGl0UHJvamVjdHMuZm9yRWFjaCgocGJ1dHRvbikgPT4ge1xuICAgICAgcGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtcHJvamVjdC13cmFwcGVyJykuc3R5bGUudmlzaWJpbGl0eSA9XG4gICAgICAgICAgICAgICd2aXNpYmxlJztcbiAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1wcm9qZWN0LXRpdGxlJylcbiAgICAgICAgICAgIC5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgICAgICAgJ2lkJyxcbiAgICAgICAgICAgICAgICBwYnV0dG9uLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2lkJyksXG4gICAgICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgY29uc3QgZGVsZXRlUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsZXRlLXByb2plY3QnKTtcbiAgICBkZWxldGVQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXNzdXJhbmNlLXdyYXBwZXInKS5zdHlsZS52aXNpYmlsaXR5ID1cbiAgICAgICAgICAgICAgJ3Zpc2libGUnO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgJy5hc3N1cmFuY2UtdGV4dCcsXG4gICAgICAgICkuaW5uZXJIVE1MID0gYERvIHlvdSB3YW50IGRlbGV0ZSA8Yj4ke3Byb2plY3QucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNoaWxkTm9kZXNbMF0udGV4dENvbnRlbnR9PC9iPiBQcm9qZWN0P2A7XG4gICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcignLnRhc2stYXNzdXJhbmNlLXRleHQnKVxuICAgICAgICAgICAgLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAgICAgICAnaWQnLFxuICAgICAgICAgICAgICAgIHRhc2sucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnaWQnKSxcbiAgICAgICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBwcmludFRhc2tzLFxuICAgIGNob29zZVByb2plY3QsXG4gICAgcHJpbnRQcm9qZWN0cyxcbiAgfTtcbn0pKCk7XG5jb25zdCBldmVudExpc3RlbmVycyA9ICgoKSA9PiB7XG4gIC8vIENsb3NlIGJ1dHRvblxuICBjb25zdCBjbG9zZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2xvc2UnKTtcbiAgY2xvc2VCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGJ1dHRvbi5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgIH0pO1xuICB9KTtcbiAgY29uc3Qgb3BlbkFkZFRhc2tXaW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2tfd2luZG93Jyk7XG4gIG9wZW5BZGRUYXNrV2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay13cmFwcGVyJykuc3R5bGUudmlzaWJpbGl0eSAhPSAndmlzaWJsZSdcbiAgICApIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay13cmFwcGVyJykuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLXdyYXBwZXInKS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgfVxuICB9KTtcbiAgY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdGFzaycpO1xuICBhZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC10YXNrLXRpdGxlJyk7XG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdGFzay1kYXRlJyk7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXRhc2stcHJpb3JpdHknKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdGFzay1kZXNjcmlwdGlvbicpO1xuICAgIGlmIChwcm9qZWN0SG9sZGVyLmxlbmd0aCA+PSAxKSB7XG4gICAgICBjb25zdCBwcm9qZWN0SUQgPSBkb2N1bWVudFxuICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC10YWItdGl0bGUnKVxuICAgICAgICAgIC5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBwcm9qZWN0SG9sZGVyLmZpbmRJbmRleChcbiAgICAgICAgICAoeCkgPT4geC5nZXRJRCgpID09IHByb2plY3RJRCxcbiAgICAgICk7XG4gICAgICBpZiAodGl0bGUudmFsdWUgIT0gJycpIHtcbiAgICAgICAgY29uc3QgbmV3VGFzayA9IFRvRG9UYXNrKFxuICAgICAgICAgICAgdGl0bGUudmFsdWUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbi52YWx1ZSxcbiAgICAgICAgICAgIGRhdGUudmFsdWUsXG4gICAgICAgICAgICBwcmlvcml0eS52YWx1ZSxcbiAgICAgICAgICAgIHByb2plY3RIb2xkZXJbcHJvamVjdEluZGV4XS5naXZlVGFza0lEKCksXG4gICAgICAgICk7XG4gICAgICAgIHByb2plY3RIb2xkZXJbcHJvamVjdEluZGV4XS5hZGRUYXNrKG5ld1Rhc2spO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2std3JhcHBlcicpLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgcHJpbnRpbmdNb2R1bGUucHJpbnRUYXNrcygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQoJ1Rhc2sgVGl0bGUgaXMgbm90IGRlZmluZWQnKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgYWxlcnQoJ1RoZXJlIGlzIG5vIFByb2plY3QgYXZhaWxhYmxlIHRvIGFzc2lnbiB0YXNrJyk7XG4gICAgfVxuICAgIHRpdGxlLnZhbHVlID0gJyc7XG4gICAgZGF0ZS52YWx1ZSA9ICdtbS9kZC95eXl5JztcbiAgICBwcmlvcml0eS52YWx1ZSA9ICdsb3cnO1xuICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gJyc7XG4gIH0pO1xuICBjb25zdCBlZGl0VGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2snKTtcbiAgZWRpdFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdEluZGV4ID0gcHJvamVjdEhvbGRlci5maW5kSW5kZXgoXG4gICAgICAgICh4KSA9PlxuICAgICAgICAgIHguZ2V0SUQoKSA9PVxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtdGFiLXRpdGxlJykuZ2V0QXR0cmlidXRlKCdpZCcpLFxuICAgICk7XG4gICAgY29uc3QgdGFza0luZGV4ID0gcHJvamVjdEhvbGRlcltwcm9qZWN0SW5kZXhdLnRvRG9MaXN0LmZpbmRJbmRleChcbiAgICAgICAgKHkpID0+XG4gICAgICAgICAgeS5nZXRJRCgpID09XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC10YXNrLXRpdGxlJykuZ2V0QXR0cmlidXRlKCdpZCcpLFxuICAgICk7XG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXRhc2stdGl0bGUnKTtcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtdGFzay1kYXRlJyk7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC10YXNrLXByaW9yaXR5Jyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC10YXNrLWRlc2NyaXB0aW9uJyk7XG4gICAgaWYgKG5hbWUudmFsdWUgIT0gJycpIHtcbiAgICAgIHByb2plY3RIb2xkZXJbcHJvamVjdEluZGV4XS50b0RvTGlzdFt0YXNrSW5kZXhdLmNoYW5nZU5hbWUobmFtZS52YWx1ZSk7XG4gICAgfTtcbiAgICBpZiAoZGF0ZS52YWx1ZSA9PT0gJycpIHtcbiAgICAgIHByb2plY3RIb2xkZXJbcHJvamVjdEluZGV4XS50b0RvTGlzdFt0YXNrSW5kZXhdLmNoYW5nZURhdGUoJycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9qZWN0SG9sZGVyW3Byb2plY3RJbmRleF0udG9Eb0xpc3RbdGFza0luZGV4XS5jaGFuZ2VEYXRlKGRhdGUudmFsdWUpO1xuICAgIH07XG4gICAgaWYgKHByaW9yaXR5LnZhbHVlICE9ICcnKSB7XG4gICAgICBwcm9qZWN0SG9sZGVyW3Byb2plY3RJbmRleF0udG9Eb0xpc3RbdGFza0luZGV4XS5jaGFuZ2VQcmlvcml0eShwcmlvcml0eS52YWx1ZSk7XG4gICAgfTtcbiAgICBpZiAoZGVzY3JpcHRpb24udmFsdWUgPT09ICcnKSB7XG4gICAgICBwcm9qZWN0SG9sZGVyW3Byb2plY3RJbmRleF0udG9Eb0xpc3RbdGFza0luZGV4XS5jaGFuZ2VEZXNjcmlwdGlvbignJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb2plY3RIb2xkZXJbcHJvamVjdEluZGV4XS50b0RvTGlzdFt0YXNrSW5kZXhdLmNoYW5nZURlc2NyaXB0aW9uKGRlc2NyaXB0aW9uLnZhbHVlKTtcbiAgICB9O1xuICAgIHByaW50aW5nTW9kdWxlLnByaW50VGFza3MoKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC10YXNrLXRpdGxlJykudmFsdWUgPSAnJztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC10YXNrLWRhdGUnKS52YWx1ZSA9ICdtbS9kZC95eXl5JztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC10YXNrLXByaW9yaXR5JykudmFsdWUgPSAnbG93JztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC10YXNrLWRlc2NyaXB0aW9uJykudmFsdWUgPSAnJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC10YXNrLXdyYXBwZXInKS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gIH0pO1xuICBjb25zdCB0YXNrRGVsZXRpb249IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLXllcy1idHRuJyk7XG4gIHRhc2tEZWxldGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xuICAgIGNvbnN0IHByb2plY3RJbmRleCA9IHByb2plY3RIb2xkZXIuZmluZEluZGV4KFxuICAgICAgICAoeCkgPT5cbiAgICAgICAgICB4LmdldElEKCkgPT1cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtdGFiLXRpdGxlJykuZ2V0QXR0cmlidXRlKCdpZCcpLFxuICAgICk7XG4gICAgY29uc3QgdGFza0luZGV4ID0gcHJvamVjdEhvbGRlcltwcm9qZWN0SW5kZXhdLnRvRG9MaXN0LmZpbmRJbmRleChcbiAgICAgICAgKHkpID0+XG4gICAgICAgICAgeS5nZXRJRCgpID09XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWFzc3VyYW5jZS10ZXh0JyksXG4gICAgKTtcbiAgICBwcm9qZWN0SG9sZGVyW3Byb2plY3RJbmRleF0udG9Eb0xpc3Quc3BsaWNlKHRhc2tJbmRleCwgMSk7XG4gICAgcHJpbnRpbmdNb2R1bGUucHJpbnRUYXNrcygpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWFzc3VyYW5jZS13cmFwcGVyJykuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICB9KTtcbiAgY29uc3QgdGFza1JlZnVzaW5nRGVsZXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1uby1idHRuJyk7XG4gIHRhc2tSZWZ1c2luZ0RlbGV0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWFzc3VyYW5jZS13cmFwcGVyJykuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICB9KTtcbiAgLy8gUHJvamVjdCByZWxhdGVkXG4gIGNvbnN0IGFsbFByb2plY3RzVmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb3JlLXByb2plY3RzJyk7XG4gIGFsbFByb2plY3RzVmlldy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbC1wcm9qZWN0cycpLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbC1wcm9qZWN0cycpLnN0eWxlLmRpc3BsYXk9ICdmbGV4JztcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwtdGFza3MnKS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwtcHJvamVjdHMnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbC10YXNrcycpLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgfVxuICB9KTtcbiAgY29uc3Qgb3BlbkFkZFByb2plY3RXaW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3Rfd2luZG93Jyk7XG4gIG9wZW5BZGRQcm9qZWN0V2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdC13cmFwcGVyJykuc3R5bGUudmlzaWJpbGl0eSAhPVxuICAgICAgICAndmlzaWJsZSdcbiAgICApIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdC13cmFwcGVyJykuc3R5bGUudmlzaWJpbGl0eSA9XG4gICAgICAgICAgJ3Zpc2libGUnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3Qtd3JhcHBlcicpLnN0eWxlLnZpc2liaWxpdHkgPVxuICAgICAgICAgICdoaWRkZW4nO1xuICAgIH1cbiAgfSk7XG4gIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXByb2plY3QtYnR0bicpO1xuICBhZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXByb2plY3QtbmFtZScpO1xuICAgIGNvbnN0IGNvbG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1wcm9qZWN0LWNvbG9yJyk7XG4gICAgaWYgKG5hbWUudmFsdWUgIT0gJycpIHtcbiAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBQcm9qZWN0KFxuICAgICAgICAgIG5hbWUudmFsdWUsXG4gICAgICAgICAgY29sb3IudmFsdWUsXG4gICAgICAgICAgcHJvamVjdGNvdW50ZXIuZ2V0VmFsdWUoKSxcbiAgICAgICk7XG4gICAgICBwcm9qZWN0SG9sZGVyLnB1c2gobmV3UHJvamVjdCk7XG4gICAgICBwcm9qZWN0Y291bnRlci5pbmNyZW1lbnRWYWx1ZSgpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0LXdyYXBwZXInKS5zdHlsZS52aXNpYmlsaXR5ID1cbiAgICAgICAgICAnaGlkZGVuJztcbiAgICAgIHByaW50aW5nTW9kdWxlLnByaW50UHJvamVjdHMoKTtcbiAgICAgIGlmIChwcm9qZWN0SG9sZGVyLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgIHByaW50aW5nTW9kdWxlLmNob29zZVByb2plY3QoXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtwcm9qZWN0SG9sZGVyWzBdLmdldElEKCl9YCkuY2hpbGROb2Rlc1swXSxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgYWxlcnQoJ0VtcHR5IE5hbWUgSW5wdXQnKTtcbiAgICB9XG4gICAgbmFtZS52YWx1ZSA9ICcnO1xuICAgIGNvbG9yLnZhbHVlID0gJ2JsYWNrJztcbiAgfSk7XG4gIGNvbnN0IGVkaXRQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LXN1Ym1pdC1lZGl0Jyk7XG4gIGVkaXRQcm9qZWN0cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBuZXdOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbmFtZS1lZGl0Jyk7XG4gICAgY29uc3QgbmV3Q29sb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1jb2xvci1lZGl0Jyk7XG4gICAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0SW5kZXggPSBwcm9qZWN0SG9sZGVyLmZpbmRJbmRleChcbiAgICAgICAgKHgpID0+XG4gICAgICAgICAgeC5nZXRJRCgpID09XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtcHJvamVjdC10aXRsZScpLmdldEF0dHJpYnV0ZSgnaWQnKSxcbiAgICApO1xuICAgIGNvbnNvbGUubG9nKGVkaXRQcm9qZWN0cy5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpZCcpKTtcbiAgICBpZiAobmV3TmFtZS52YWx1ZSAhPSAnJykge1xuICAgICAgcHJvamVjdEhvbGRlcltzZWxlY3RlZFByb2plY3RJbmRleF0uY2hhbmdlTmFtZShuZXdOYW1lLnZhbHVlKTtcbiAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1wcm9qZWN0LXRpdGxlJykuZ2V0QXR0cmlidXRlKCdpZCcpID09PSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC10YWItdGl0bGUnKS5nZXRBdHRyaWJ1dGUoJ2lkJykpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtdGFiLXRpdGxlJykudGV4dENvbnRlbnQgPSBuZXdOYW1lLnZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgICBwcm9qZWN0SG9sZGVyW3NlbGVjdGVkUHJvamVjdEluZGV4XS5jaGFuZ2VDb2xvcihuZXdDb2xvci52YWx1ZSk7XG4gICAgcHJpbnRpbmdNb2R1bGUucHJpbnRQcm9qZWN0cygpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXByb2plY3Qtd3JhcHBlcicpLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICBuZXdOYW1lLnZhbHVlID0gJyc7XG4gICAgbmV3Q29sb3IudmFsdWUgPSAnYmxhY2snO1xuICB9KTtcbiAgY29uc3QgYWNjZXB0RGVsZXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjeWVzLWJ0dG4nKTtcbiAgYWNjZXB0RGVsZXRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdEluZGV4ID0gcHJvamVjdEhvbGRlci5maW5kSW5kZXgoXG4gICAgICAgICh4KSA9PlxuICAgICAgICAgIHguZ2V0SUQoKSA9PVxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hc3N1cmFuY2UtdGV4dCcpLmdldEF0dHJpYnV0ZSgnaWQnKSxcbiAgICApO1xuICAgIGlmIChcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXRhYi10aXRsZScpLmdldEF0dHJpYnV0ZSgnaWQnKSA9PVxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hc3N1cmFuY2UtdGV4dCcpLmdldEF0dHJpYnV0ZSgnaWQnKSAmJlxuICAgICAgICBwcm9qZWN0SG9sZGVyLmxlbmd0aCA+IDFcbiAgICApIHtcbiAgICAgIHByb2plY3RIb2xkZXIuc3BsaWNlKHByb2plY3RJbmRleCwgMSk7XG4gICAgICBwcmludGluZ01vZHVsZS5jaG9vc2VQcm9qZWN0KFxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3Byb2plY3RIb2xkZXJbMF0uZ2V0SUQoKX1gKS5jaGlsZE5vZGVzWzBdLFxuICAgICAgKTtcbiAgICAgIHByaW50aW5nTW9kdWxlLnByaW50VGFza3MoKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwtcHJvamVjdHMnKS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbC10YXNrcycpLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtdGFiLXRpdGxlJykuZ2V0QXR0cmlidXRlKCdpZCcpID09XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFzc3VyYW5jZS10ZXh0JykuZ2V0QXR0cmlidXRlKCdpZCcpICYmXG4gICAgICAgIHByb2plY3RIb2xkZXIubGVuZ3RoIDw9IDFcbiAgICApIHtcbiAgICAgIHByb2plY3RIb2xkZXIuc3BsaWNlKHByb2plY3RJbmRleCwgMSk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsLXRhc2tzJykuaW5uZXJIVE1MID0gJyc7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC10YWItdGl0bGUnKS50ZXh0Q29udGVudCA9XG4gICAgICAgICAgJ0FkZCBhbmQgQ2hvb3NlIE5ldyBQcm9qZWN0JztcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvamVjdEhvbGRlci5zcGxpY2UocHJvamVjdEluZGV4LCAxKTtcbiAgICB9XG4gICAgcHJpbnRpbmdNb2R1bGUucHJpbnRQcm9qZWN0cygpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hc3N1cmFuY2Utd3JhcHBlcicpLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgfSk7XG4gIGNvbnN0IHJlamVjdERlbGV0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25vLWJ0dG4nKTtcbiAgcmVqZWN0RGVsZXRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFzc3VyYW5jZS13cmFwcGVyJykuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICB9KTtcbn0pKCk7XG5leHBvcnQge3ByaW50aW5nTW9kdWxlLCBldmVudExpc3RlbmVyc307XG4iLCJyZXF1aXJlKCcuL3N0eWxlLmNzcycpO1xuaW1wb3J0IHtwcmludGluZ01vZHVsZX0gZnJvbSAnLi9ET01zJztcbnByaW50aW5nTW9kdWxlLnByaW50UHJvamVjdHMoKTtcbnByaW50aW5nTW9kdWxlLmNob29zZVByb2plY3QoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtdGl0bGUnKSk7IiwiY29uc3QgcHJvamVjdEhvbGRlciA9IFtdOyAvLyBvcHRpb25hbCwgZmluZCBpZiB0aGlzIHZhcmlhYmxlIGlzIG5lZWRlZFxuY29uc3QgcHJvamVjdGNvdW50ZXIgPSAoKCkgPT4ge1xuICBsZXQgdmFsdWUgPSAwO1xuICBjb25zdCBnZXRWYWx1ZSA9ICgpID0+IHZhbHVlO1xuICBjb25zdCBpbmNyZW1lbnRWYWx1ZSA9ICgpID0+IHtcbiAgICB2YWx1ZSsrO1xuICB9O1xuICByZXR1cm4ge1xuICAgIGdldFZhbHVlLFxuICAgIGluY3JlbWVudFZhbHVlLFxuICB9O1xufSkoKTsgLy8gaWQgZm9yIHByb2plY3RzXG5jb25zdCBQcm9qZWN0ID0gKG5hbWUsIGNvbG9yID0gJ2JsYWNrJywgaWQgPSBwcm9qZWN0SG9sZGVyLmxlbmd0aCgpKSA9PiB7XG4gIGNvbnN0IHRvRG9MaXN0ID0gW107XG4gIGxldCB0YXNrQ291bnRlciA9IDA7XG4gIGNvbnN0IGdpdmVUYXNrSUQgPSAoKSA9PiB0YXNrQ291bnRlcjtcbiAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IG5hbWU7XG4gIGNvbnN0IGNoYW5nZU5hbWUgPSAobmV3TmFtZSkgPT4gKG5hbWUgPSBuZXdOYW1lKTtcbiAgY29uc3QgZ2V0Q29sb3IgPSAoKSA9PiBjb2xvcjtcbiAgY29uc3QgY2hhbmdlQ29sb3IgPSAobmV3Q29sb3IpID0+IChjb2xvciA9IG5ld0NvbG9yKTtcbiAgY29uc3QgZ2V0SUQgPSAoKSA9PiBpZDtcbiAgY29uc3QgYWRkVGFzayA9ICh0YXNrKSA9PiB7XG4gICAgdG9Eb0xpc3QucHVzaCh0YXNrKTtcbiAgICB0YXNrQ291bnRlcisrO1xuICB9O1xuICBjb25zdCBkZWxldGVUYXNrID0gKHRhc2tJbmRleCkgPT4gdG9Eb0xpc3Quc3BsaWNlKHRhc2tJbmRleCwgMSk7XG4gIHJldHVybiB7XG4gICAgdG9Eb0xpc3QsXG4gICAgZ2V0TmFtZSxcbiAgICBjaGFuZ2VOYW1lLFxuICAgIGdldENvbG9yLFxuICAgIGNoYW5nZUNvbG9yLFxuICAgIGdldElELFxuICAgIGFkZFRhc2ssXG4gICAgZGVsZXRlVGFzayxcbiAgICBnaXZlVGFza0lELFxuICB9O1xufTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuZXctY2FwXG5jb25zdCBkZWZhdWx0UHJvamVjdCA9IFByb2plY3QoJ0RlZmF1bHQnLCAnYmxhY2snLCBwcm9qZWN0Y291bnRlci5nZXRWYWx1ZSgpKTtcbnByb2plY3RIb2xkZXIucHVzaChkZWZhdWx0UHJvamVjdCk7XG5wcm9qZWN0Y291bnRlci5pbmNyZW1lbnRWYWx1ZSgpO1xuZXhwb3J0IHtQcm9qZWN0LCBwcm9qZWN0Y291bnRlciwgcHJvamVjdEhvbGRlciwgZGVmYXVsdFByb2plY3R9O1xuIiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxuY29uc3QgVG9Eb1Rhc2sgPSAobmFtZSwgZGVzY3JpcHRpb24gPSAnJywgZHVlRGF0ZSA9ICcnLCBwcmlvcml0eSA9ICdsb3cnLCBpZCwgc3RhdHVzID0gJ1RvIGRvJykgPT4ge1xuICBjb25zdCBnZXROYW1lID0gKCkgPT4gbmFtZTtcbiAgY29uc3QgY2hhbmdlTmFtZSA9IChuZXdOYW1lKSA9PiBuYW1lID0gbmV3TmFtZTtcbiAgY29uc3QgZ2V0RGVzY3JpcHRpb249ICgpID0+IGRlc2NyaXB0aW9uO1xuICBjb25zdCBjaGFuZ2VEZXNjcmlwdGlvbiA9IChuZXdEZXNjaXJwaXRvbikgPT4gZGVzY3JpcHRpb24gPSBuZXdEZXNjaXJwaXRvbjtcbiAgY29uc3QgZ2V0RGF0ZSA9ICgpID0+IGR1ZURhdGU7XG4gIGNvbnN0IGNoYW5nZURhdGUgPSAobmV3RGF0ZSkgPT4gZHVlRGF0ZSA9IG5ld0RhdGU7XG4gIGNvbnN0IGdldFByaW9yaXR5ID0gKCkgPT4gcHJpb3JpdHk7XG4gIGNvbnN0IGNoYW5nZVByaW9yaXR5ID0gKG5ld1ByaW9yaXR5KSA9PiBwcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xuICBjb25zdCBnZXRTdGF0dXMgPSAoKSA9PiBzdGF0dXM7XG4gIGNvbnN0IGNoYW5nZVN0YXR1cyA9IChuZXdTdGF0dXMpID0+IHN0YXR1cyA9IG5ld1N0YXR1cztcbiAgY29uc3QgZ2V0SUQgPSAoKSA9PiBpZDtcbiAgcmV0dXJuIHtcbiAgICBnZXROYW1lLFxuICAgIGNoYW5nZU5hbWUsXG4gICAgZ2V0RGVzY3JpcHRpb24sXG4gICAgY2hhbmdlRGVzY3JpcHRpb24sXG4gICAgZ2V0RGF0ZSxcbiAgICBjaGFuZ2VEYXRlLFxuICAgIGdldFByaW9yaXR5LFxuICAgIGNoYW5nZVByaW9yaXR5LFxuICAgIGdldFN0YXR1cyxcbiAgICBjaGFuZ2VTdGF0dXMsXG4gICAgZ2V0SUQsXG4gIH07XG59O1xuZXhwb3J0IHtcbiAgVG9Eb1Rhc2ssXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==