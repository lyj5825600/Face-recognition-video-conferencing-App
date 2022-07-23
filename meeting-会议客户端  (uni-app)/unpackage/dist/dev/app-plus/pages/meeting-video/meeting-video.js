"use weex:vue";
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***************************************************************************************************************!*\
  !*** D:/WebStudyProject/uniapp-project/meeting-demo/main.js?{"page":"pages%2Fmeeting-video%2Fmeeting-video"} ***!
  \***************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-polyfill */ 4);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_polyfill__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_meeting_video_meeting_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/meeting-video/meeting-video.nvue?mpType=page */ 5);\n\n        \n        \n        \n        \n        _pages_meeting_video_meeting_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mpType = 'page'\n        _pages_meeting_video_meeting_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].route = 'pages/meeting-video/meeting-video'\n        _pages_meeting_video_meeting_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].el = '#root'\n        new Vue(_pages_meeting_video_meeting_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsUUFBOEI7QUFDOUIsUUFBNkI7QUFDN0IsUUFBOEU7QUFDOUUsUUFBUSwyRkFBRztBQUNYLFFBQVEsMkZBQUc7QUFDWCxRQUFRLDJGQUFHO0FBQ1gsZ0JBQWdCLDJGQUFHIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgXG4gICAgICAgIGltcG9ydCAndW5pLWFwcC1zdHlsZSdcbiAgICAgICAgaW1wb3J0ICd1bmktcG9seWZpbGwnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy9tZWV0aW5nLXZpZGVvL21lZXRpbmctdmlkZW8ubnZ1ZT9tcFR5cGU9cGFnZSdcbiAgICAgICAgQXBwLm1wVHlwZSA9ICdwYWdlJ1xuICAgICAgICBBcHAucm91dGUgPSAncGFnZXMvbWVldGluZy12aWRlby9tZWV0aW5nLXZpZGVvJ1xuICAgICAgICBBcHAuZWwgPSAnI3Jvb3QnXG4gICAgICAgIG5ldyBWdWUoQXBwKVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!**********************************************************************************!*\
  !*** D:/WebStudyProject/uniapp-project/meeting-demo/main.js?{"type":"appStyle"} ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=scss */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsbURBQTRDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzXCIpLmRlZmF1bHQsVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!***********************************************************************************************!*\
  !*** D:/WebStudyProject/uniapp-project/meeting-demo/App.vue?vue&type=style&index=0&lang=scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--10-oneOf-0-2!../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--10-oneOf-0-3!../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-4!../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=scss */ 3);
/* harmony import */ var _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 3 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/WebStudyProject/uniapp-project/meeting-demo/App.vue?vue&type=style&index=0&lang=scss ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".uni-popup__wrapper": {
    "": {
      "borderRadius": [
        "30rpx",
        1,
        0,
        20
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),
/* 4 */
/*!*******************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-cli-shared/lib/uni-polyfill.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  var global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}

/***/ }),
/* 5 */
/*!*********************************************************************************************************!*\
  !*** D:/WebStudyProject/uniapp-project/meeting-demo/pages/meeting-video/meeting-video.nvue?mpType=page ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _meeting_video_nvue_vue_type_template_id_0b9cafd4_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./meeting-video.nvue?vue&type=template&id=0b9cafd4&scoped=true&mpType=page */ 6);\n/* harmony import */ var _meeting_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./meeting-video.nvue?vue&type=script&lang=js&mpType=page */ 55);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _meeting_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _meeting_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./meeting-video.nvue?vue&type=style&index=0&id=0b9cafd4&lang=scss&scoped=true&mpType=page */ 64).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./meeting-video.nvue?vue&type=style&index=0&id=0b9cafd4&lang=scss&scoped=true&mpType=page */ 64).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _meeting_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _meeting_video_nvue_vue_type_template_id_0b9cafd4_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _meeting_video_nvue_vue_type_template_id_0b9cafd4_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"0b9cafd4\",\n  \"50d8a02f\",\n  false,\n  _meeting_video_nvue_vue_type_template_id_0b9cafd4_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/meeting-video/meeting-video.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0o7QUFDbEo7QUFDNkU7QUFDTDtBQUN4RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLG1HQUEyRjtBQUMvSSxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsbUdBQTJGO0FBQ3BKOztBQUVBOztBQUVBO0FBQzZLO0FBQzdLLGdCQUFnQixvTEFBVTtBQUMxQixFQUFFLCtGQUFNO0FBQ1IsRUFBRSxnSEFBTTtBQUNSLEVBQUUseUhBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsb0hBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9tZWV0aW5nLXZpZGVvLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGI5Y2FmZDQmc2NvcGVkPXRydWUmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL21lZXRpbmctdmlkZW8ubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9tZWV0aW5nLXZpZGVvLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL21lZXRpbmctdmlkZW8ubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTBiOWNhZmQ0Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi9tZWV0aW5nLXZpZGVvLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wYjljYWZkNCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL3d6IEFwcC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMGI5Y2FmZDRcIixcbiAgXCI1MGQ4YTAyZlwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9tZWV0aW5nLXZpZGVvL21lZXRpbmctdmlkZW8ubnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!***************************************************************************************************************************************************!*\
  !*** D:/WebStudyProject/uniapp-project/meeting-demo/pages/meeting-video/meeting-video.nvue?vue&type=template&id=0b9cafd4&scoped=true&mpType=page ***!
  \***************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_meeting_video_nvue_vue_type_template_id_0b9cafd4_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./meeting-video.nvue?vue&type=template&id=0b9cafd4&scoped=true&mpType=page */ 7);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_meeting_video_nvue_vue_type_template_id_0b9cafd4_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_meeting_video_nvue_vue_type_template_id_0b9cafd4_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_meeting_video_nvue_vue_type_template_id_0b9cafd4_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_meeting_video_nvue_vue_type_template_id_0b9cafd4_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 7 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/WebStudyProject/uniapp-project/meeting-demo/pages/meeting-video/meeting-video.nvue?vue&type=template&id=0b9cafd4&scoped=true&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    NavTop: __webpack_require__(/*! @/components/NavTop/NavTop.vue */ 8).default,
    uniPopup: __webpack_require__(/*! @/uni_modules/uni-popup/components/uni-popup/uni-popup.vue */ 17)
      .default,
    uniIcons: __webpack_require__(/*! @/uni_modules/uni-icons/components/uni-icons/uni-icons.vue */ 32)
      .default,
    uniList: __webpack_require__(/*! @/uni_modules/uni-list/components/uni-list/uni-list.vue */ 41)
      .default,
    uniListChat: __webpack_require__(/*! @/uni_modules/uni-list/components/uni-list-chat/uni-list-chat.vue */ 48)
      .default
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: {
        scrollY: true,
        showScrollbar: true,
        enableBackToTop: true,
        bubble: "true"
      }
    },
    [
      _c(
        "view",
        {
          style: {
            width: _vm.windowWidth + "px",
            height: _vm.windowHeight + "px",
            backgroundColor: "#222425"
          }
        },
        [
          _c("NavTop", { attrs: { bgCr: "black" } }, [
            _c(
              "view",
              {
                staticClass: ["top-bar"],
                style: { height: _vm.topBarHeight + "px" }
              },
              [
                _vm.peeridInfo.length > 0
                  ? _c(
                      "view",
                      {
                        staticClass: ["sound-box"],
                        on: {
                          click: function($event) {
                            _vm.setEnableSpeakerphone(_vm.Speakerphone)
                          }
                        }
                      },
                      [
                        _c("u-image", {
                          staticStyle: { width: "60rpx", height: "60rpx" },
                          attrs: {
                            src: _vm.Speakerphone
                              ? "../../static/images/icon/icon_speakers.png"
                              : "../../static/images/icon/icon_speaker.png"
                          }
                        })
                      ],
                      1
                    )
                  : _vm._e(),
                _c("view", { staticClass: ["bar-title"] }, [
                  _c(
                    "u-text",
                    {
                      staticClass: ["font-color"],
                      staticStyle: { fontSize: "32rpx" },
                      appendAsTree: true,
                      attrs: { append: "tree" }
                    },
                    [_vm._v(_vm._s(_vm.meetingNumber))]
                  ),
                  _c(
                    "u-text",
                    {
                      staticClass: ["font-color"],
                      staticStyle: { fontSize: "23rpx" },
                      appendAsTree: true,
                      attrs: { append: "tree" }
                    },
                    [_vm._v(_vm._s(_vm.downCount))]
                  )
                ]),
                _c(
                  "view",
                  { staticClass: ["end-btn"], on: { click: _vm.destroyRtc } },
                  [
                    _c(
                      "u-text",
                      {
                        staticClass: ["font-color"],
                        appendAsTree: true,
                        attrs: { append: "tree" }
                      },
                      [_vm._v("结束")]
                    )
                  ]
                )
              ]
            )
          ]),
          _c(
            "scroll-view",
            {
              staticClass: ["canvasView"],
              style: {
                width: _vm.windowWidth + "px",
                height: _vm.windowHeight - 65 - _vm.barHeight.allHeight + "px",
                backgroundColor: "#222425"
              },
              attrs: { scrollY: true }
            },
            [
              _c(
                "view",
                { staticClass: ["video"], class: _vm.peeridInfoStyle },
                [
                  _c("AR-CanvasView", {
                    ref: "location",
                    staticStyle: { flex: "1" }
                  }),
                  _c(
                    "view",
                    {
                      staticClass: ["location-none"],
                      style: {
                        left: _vm.video ? "-800px" : "0px",
                        backgroundColor: _vm.video ? "" : "#222425",
                        opacity: _vm.video ? "0" : "1"
                      }
                    },
                    [
                      _c("u-image", {
                        staticClass: ["user-avatar"],
                        attrs: { src: _vm.localPerson.avatar }
                      }),
                      _c(
                        "u-text",
                        {
                          staticClass: ["user-name", "font-color"],
                          appendAsTree: true,
                          attrs: { append: "tree" }
                        },
                        [_vm._v(_vm._s(_vm.localPerson.nickname))]
                      )
                    ],
                    1
                  ),
                  _vm.video
                    ? _c("view", { staticClass: ["cur-username"] }, [
                        _c(
                          "u-text",
                          {
                            staticClass: ["font-color", "txt"],
                            appendAsTree: true,
                            attrs: { append: "tree" }
                          },
                          [_vm._v(_vm._s(_vm.localPerson.nickname))]
                        )
                      ])
                    : _vm._e()
                ],
                1
              ),
              _vm._l(_vm.peeridInfo, function(peerid) {
                return _c(
                  "view",
                  {
                    key: peerid.uid,
                    staticClass: ["video"],
                    class: _vm.peeridInfoStyle
                  },
                  [
                    _c(
                      "view",
                      { staticStyle: { flex: "1" } },
                      [
                        _c("AR-CanvasView", {
                          ref: "remote" + peerid.uid,
                          refInFor: true,
                          staticStyle: { flex: "1" }
                        }),
                        _c(
                          "view",
                          {
                            staticClass: ["location-none"],
                            style: {
                              left: peerid.videoStatus ? "-800px" : "0px",
                              backgroundColor: peerid.videoStatus
                                ? ""
                                : "#222425",
                              opacity: peerid.videoStatus ? "0" : "1"
                            }
                          },
                          [
                            _c("u-image", {
                              staticClass: ["user-avatar"],
                              attrs: { src: peerid.avatar }
                            }),
                            _c(
                              "u-text",
                              {
                                staticClass: ["user-name", "font-color"],
                                appendAsTree: true,
                                attrs: { append: "tree" }
                              },
                              [_vm._v(_vm._s(peerid.nickname))]
                            )
                          ],
                          1
                        ),
                        peerid.videoStatus
                          ? _c("view", { staticClass: ["cur-username"] }, [
                              _c(
                                "u-text",
                                {
                                  staticClass: ["font-color", "txt"],
                                  appendAsTree: true,
                                  attrs: { append: "tree" }
                                },
                                [_vm._v(_vm._s(peerid.nickname))]
                              )
                            ])
                          : _vm._e()
                      ],
                      1
                    )
                  ]
                )
              })
            ],
            2
          ),
          _c(
            "view",
            {
              staticClass: ["btm-tools"],
              style: { width: _vm.windowWidth + "px" }
            },
            [
              _c(
                "view",
                {
                  staticStyle: {
                    flexDirection: "row",
                    justifyContent: "space-between"
                  }
                },
                [
                  _vm.video
                    ? _c(
                        "view",
                        {
                          staticClass: ["icon"],
                          on: { click: _vm.switchCamera }
                        },
                        [
                          _c("u-image", {
                            staticClass: ["icon_img"],
                            attrs: {
                              src: "../../static/images/icon/camera.png"
                            }
                          }),
                          _c(
                            "u-text",
                            {
                              staticClass: ["icon_text"],
                              appendAsTree: true,
                              attrs: { append: "tree" }
                            },
                            [_vm._v(_vm._s(_vm.camera ? "摄像前" : "摄像后"))]
                          )
                        ],
                        1
                      )
                    : _vm._e(),
                  _c(
                    "view",
                    { staticClass: ["icon"], on: { click: _vm.destroyRtc } },
                    [
                      _c("u-image", {
                        staticClass: ["icon_img"],
                        attrs: { src: "../../static/images/icon/over.png" }
                      }),
                      _c(
                        "u-text",
                        {
                          staticClass: ["icon_text"],
                          appendAsTree: true,
                          attrs: { append: "tree" }
                        },
                        [_vm._v("挂断")]
                      )
                    ],
                    1
                  ),
                  _c(
                    "view",
                    {
                      staticClass: ["icon"],
                      on: {
                        click: function($event) {
                          _vm.enableLocalAudio(_vm.checked)
                        }
                      }
                    },
                    [
                      _c("u-image", {
                        staticClass: ["icon_img"],
                        attrs: {
                          src: _vm.checked
                            ? "../../static/images/icon/au_in.png"
                            : "../../static/images/icon/au_on.png"
                        }
                      }),
                      _c(
                        "u-text",
                        {
                          staticClass: ["icon_text"],
                          appendAsTree: true,
                          attrs: { append: "tree" }
                        },
                        [_vm._v("静音")]
                      )
                    ],
                    1
                  ),
                  _c(
                    "view",
                    {
                      staticClass: ["icon"],
                      on: {
                        click: function($event) {
                          _vm.enableLocalVideo(_vm.video)
                        }
                      }
                    },
                    [
                      _c("u-image", {
                        staticClass: ["icon_img"],
                        attrs: {
                          src: _vm.video
                            ? "../../static/images/icon/vi_on.png"
                            : "../../static/images/icon/vi_in.png"
                        }
                      }),
                      _c(
                        "u-text",
                        {
                          staticClass: ["icon_text"],
                          appendAsTree: true,
                          attrs: { append: "tree" }
                        },
                        [_vm._v("视频")]
                      )
                    ],
                    1
                  ),
                  _c(
                    "view",
                    {
                      staticClass: ["icon"],
                      on: {
                        click: function($event) {
                          _vm.$refs.participantPopup.open("bottom")
                        }
                      }
                    },
                    [
                      _c("u-image", {
                        staticClass: ["icon_img", "icon_list_img"],
                        attrs: {
                          src: "../../static/images/icon/list-white.png"
                        }
                      }),
                      _c(
                        "u-text",
                        {
                          staticClass: ["icon_text"],
                          appendAsTree: true,
                          attrs: { append: "tree" }
                        },
                        [
                          _vm._v(
                            "管理成员(" + _vm._s(_vm.participantCount) + ")"
                          )
                        ]
                      )
                    ],
                    1
                  )
                ]
              )
            ]
          ),
          _c(
            "uni-popup",
            { ref: "participantPopup", attrs: { backgroundColor: "#fff" } },
            [
              _c(
                "view",
                {
                  staticClass: ["popup-content"],
                  style: {
                    height: _vm.windowHeight - _vm.barHeight.allHeight + "px"
                  }
                },
                [
                  _c(
                    "view",
                    { staticClass: ["participant-title"] },
                    [
                      _c("view", { staticClass: ["title"] }, [
                        _c(
                          "u-text",
                          {
                            staticClass: ["title-txt"],
                            appendAsTree: true,
                            attrs: { append: "tree" }
                          },
                          [
                            _vm._v(
                              "管理成员（" +
                                _vm._s(_vm.participantCount) +
                                "人）"
                            )
                          ]
                        )
                      ]),
                      _c("uni-icons", {
                        attrs: { type: "closeempty", size: "25" },
                        on: {
                          click: function($event) {
                            _vm.$refs.participantPopup.close()
                          }
                        }
                      })
                    ],
                    1
                  ),
                  _c(
                    "uni-list",
                    _vm._l([_vm.localPerson].concat(_vm.peeridInfo), function(
                      mem
                    ) {
                      return _c(
                        "uni-list-chat",
                        {
                          key: mem.id,
                          attrs: {
                            avatarCircle: true,
                            title: mem.nickname,
                            avatar: mem.avatar,
                            note:
                              mem.id == _vm.originatorUserInfoId
                                ? "（主持人，我）"
                                : "参会人",
                            time: "2020-02-02 20:20"
                          }
                        },
                        [
                          _c(
                            "view",
                            {
                              staticClass: ["chat-custom-right"],
                              attrs: { color: "#ccc" }
                            },
                            [
                              mem.videoStatus
                                ? _c("uni-icons", {
                                    attrs: {
                                      type: "videocam-filled",
                                      size: "33"
                                    }
                                  })
                                : _c("u-image", {
                                    staticClass: ["is_video-img"],
                                    attrs: {
                                      src:
                                        "../../static/images/icon/mute-camera-gray.png"
                                    }
                                  })
                            ],
                            1
                          )
                        ]
                      )
                    }),
                    1
                  )
                ],
                1
              )
            ]
          )
        ],
        1
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 8 */
/*!***********************************************************************************!*\
  !*** D:/WebStudyProject/uniapp-project/meeting-demo/components/NavTop/NavTop.vue ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _NavTop_vue_vue_type_template_id_7608b004_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavTop.vue?vue&type=template&id=7608b004&scoped=true& */ 9);\n/* harmony import */ var _NavTop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavTop.vue?vue&type=script&lang=js& */ 11);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _NavTop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _NavTop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./NavTop.vue?vue&type=style&index=0&id=7608b004&lang=scss&scoped=true& */ 14).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./NavTop.vue?vue&type=style&index=0&id=7608b004&lang=scss&scoped=true& */ 14).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _NavTop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _NavTop_vue_vue_type_template_id_7608b004_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _NavTop_vue_vue_type_template_id_7608b004_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"7608b004\",\n  \"4813e336\",\n  false,\n  _NavTop_vue_vue_type_template_id_7608b004_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"components/NavTop/NavTop.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0g7QUFDL0g7QUFDMEQ7QUFDTDtBQUNyRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLGdGQUF3RTtBQUM1SCxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsZ0ZBQXdFO0FBQ2pJOztBQUVBOztBQUVBO0FBQzZLO0FBQzdLLGdCQUFnQixvTEFBVTtBQUMxQixFQUFFLDRFQUFNO0FBQ1IsRUFBRSw2RkFBTTtBQUNSLEVBQUUsc0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsaUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9OYXZUb3AudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc2MDhiMDA0JnNjb3BlZD10cnVlJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTmF2VG9wLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTmF2VG9wLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL05hdlRvcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03NjA4YjAwNCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL05hdlRvcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03NjA4YjAwNCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi93eiBBcHAvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjc2MDhiMDA0XCIsXG4gIFwiNDgxM2UzMzZcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9OYXZUb3AvTmF2VG9wLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!******************************************************************************************************************************!*\
  !*** D:/WebStudyProject/uniapp-project/meeting-demo/components/NavTop/NavTop.vue?vue&type=template&id=7608b004&scoped=true& ***!
  \******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_NavTop_vue_vue_type_template_id_7608b004_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./NavTop.vue?vue&type=template&id=7608b004&scoped=true& */ 10);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_NavTop_vue_vue_type_template_id_7608b004_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_NavTop_vue_vue_type_template_id_7608b004_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_NavTop_vue_vue_type_template_id_7608b004_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_NavTop_vue_vue_type_template_id_7608b004_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 10 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/WebStudyProject/uniapp-project/meeting-demo/components/NavTop/NavTop.vue?vue&type=template&id=7608b004&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    {
      staticClass: ["nav-top"],
      class: { "nav-top-fixed": _vm.fixed },
      style: {
        height: _vm.barHeight.allHeight + "px",
        backgroundColor: _vm.bgCr
      }
    },
    [
      _c("view", {
        staticClass: ["status_bar"],
        style: { height: _vm.barHeight.statusBarHeight + "px" }
      }),
      _vm._t("default")
    ],
    2
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 11 */
/*!************************************************************************************************************!*\
  !*** D:/WebStudyProject/uniapp-project/meeting-demo/components/NavTop/NavTop.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_NavTop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--5-0!../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./NavTop.vue?vue&type=script&lang=js& */ 12);\n/* harmony import */ var _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_NavTop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_NavTop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_NavTop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_NavTop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_NavTop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1jLENBQWdCLCtkQUFHLEVBQUMiLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL3d6IEFwcC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtMCEuLi8uLi8uLi8uLi8uLi93eiBBcHAvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi8uLi8uLi8uLi93eiBBcHAvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTmF2VG9wLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi93eiBBcHAvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LTAhLi4vLi4vLi4vLi4vLi4vd3ogQXBwL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi4vLi4vLi4vLi4vLi4vd3ogQXBwL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL05hdlRvcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/WebStudyProject/uniapp-project/meeting-demo/components/NavTop/NavTop.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\nvar _vuex = __webpack_require__(/*! vuex */ 13);function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var _default =\n{\n  data: function data() {\n    return {};\n\n\n  },\n  props: {\n    bgCr: {\n      type: String,\n      default: 'white' },\n\n    fixed: {\n      type: Boolean,\n      default: false } },\n\n\n  computed: _objectSpread({},\n  (0, _vuex.mapState)(['barHeight'])),\n\n  created: function created() {var _this = this;\n    if (!this.barHeight.allHeight || !this.barHeight.statusBarHeight) {\n      this.$isBarHeight().then(function (isTemp) {\n        _this.$store.state.barHeight = isTemp;\n      });\n    }\n  },\n  methods: {} };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9OYXZUb3AvTmF2VG9wLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBVUEsZ0Q7QUFDQTtBQUNBLE1BREEsa0JBQ0E7QUFDQTs7O0FBR0EsR0FMQTtBQU1BO0FBQ0E7QUFDQSxrQkFEQTtBQUVBLHNCQUZBLEVBREE7O0FBS0E7QUFDQSxtQkFEQTtBQUVBLG9CQUZBLEVBTEEsRUFOQTs7O0FBZ0JBO0FBQ0Esb0NBREEsQ0FoQkE7O0FBbUJBLFNBbkJBLHFCQW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkE7QUFHQTtBQUNBLEdBekJBO0FBMEJBLGFBMUJBLEUiLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG5cdDx2aWV3IGNsYXNzPVwibmF2LXRvcFwiIDpjbGFzcz1cInsnbmF2LXRvcC1maXhlZCc6IGZpeGVkfVwiIDpzdHlsZT1cIntoZWlnaHQ6IGJhckhlaWdodC5hbGxIZWlnaHQgKyAncHgnLCBiYWNrZ3JvdW5kQ29sb3I6IGJnQ3J9XCI+XHJcblx0XHQ8dmlldyBjbGFzcz1cInN0YXR1c19iYXJcIiA6c3R5bGU9XCJ7aGVpZ2h0OiBiYXJIZWlnaHQuc3RhdHVzQmFySGVpZ2h0ICsgJ3B4J31cIj5cclxuXHRcdFx0PCEtLSDov5nph4zmmK/nirbmgIHmoI8gLS0+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8c2xvdD48L3Nsb3Q+XHJcblx0PC92aWV3PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cclxuXHRpbXBvcnQgeyBtYXBTdGF0ZSB9IGZyb20gJ3Z1ZXgnXG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRkYXRhKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XG5cdFx0XHR9XG5cdFx0fSxcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdGJnQ3I6IHtcclxuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdFx0ZGVmYXVsdDogJ3doaXRlJ1xyXG5cdFx0XHR9LFxyXG4gICAgICBmaXhlZDoge1xyXG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgZGVmYXVsdDogZmFsc2VcclxuICAgICAgfVxyXG5cdFx0fSxcclxuXHRcdGNvbXB1dGVkOiB7XHJcblx0XHRcdC4uLm1hcFN0YXRlKFsnYmFySGVpZ2h0J10pXHJcblx0XHR9LFxyXG5cdFx0Y3JlYXRlZCgpIHtcclxuXHRcdFx0aWYoIXRoaXMuYmFySGVpZ2h0LmFsbEhlaWdodHx8IXRoaXMuYmFySGVpZ2h0LnN0YXR1c0JhckhlaWdodCl7XHJcblx0XHRcdFx0dGhpcy4kaXNCYXJIZWlnaHQoKS50aGVuKChpc1RlbXApPT57XHJcblx0XHRcdFx0XHR0aGlzLiRzdG9yZS5zdGF0ZS5iYXJIZWlnaHQgPSBpc1RlbXBcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9XHJcblx0XHR9LFxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdFxuXHRcdH1cblx0fVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cbiAgLm5hdi10b3AtZml4ZWQge1xyXG4gICAgLy8g57KY5oCn5a6a5L2NXHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuXHRcdHRvcDogMDtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICB9XG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */
/*!********************************************!*\
  !*** ./node_modules/vuex/dist/vuex.esm.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.install = install;exports.mapState = exports.mapMutations = exports.mapGetters = exports.mapActions = exports.createNamespacedHelpers = exports.Store = exports.default = void 0; /*!
                                                                                                                                                                                                                                                                      * vuex v3.4.0
                                                                                                                                                                                                                                                                      * (c) 2020 Evan You
                                                                                                                                                                                                                                                                      * @license MIT
                                                                                                                                                                                                                                                                      */
function applyMixin(Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if (options === void 0) options = {};

      options.init = options.init ?
      [vuexInit].concat(options.init) :
      vuexInit;
      _init.call(this, options);
    };
  }

  /**
     * Vuex init hook, injected into each instances init hooks list.
     */

  function vuexInit() {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function' ?
      options.store() :
      options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}

var target = typeof window !== 'undefined' ?
window :
typeof global !== 'undefined' ?
global :
{};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin(store) {
  if (!devtoolHook) {return;}

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  }, { prepend: true });

  store.subscribeAction(function (action, state) {
    devtoolHook.emit('vuex:action', action, state);
  }, { prepend: true });
}

/**
   * Get the first item that pass the test
   * by second argument function
   *
   * @param {Array} list
   * @param {Function} f
   * @return {*}
   */

/**
       * forEach for object
       */
function forEachValue(obj, fn) {
  Object.keys(obj).forEach(function (key) {return fn(obj[key], key);});
}

function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}

function isPromise(val) {
  return val && typeof val.then === 'function';
}

function assert(condition, msg) {
  if (!condition) {throw new Error("[vuex] " + msg);}
}

function partial(fn, arg) {
  return function () {
    return fn(arg);
  };
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module(rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors = { namespaced: { configurable: true } };

prototypeAccessors.namespaced.get = function () {
  return !!this._rawModule.namespaced;
};

Module.prototype.addChild = function addChild(key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild(key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild(key) {
  return this._children[key];
};

Module.prototype.hasChild = function hasChild(key) {
  return key in this._children;
};

Module.prototype.update = function update(rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild(fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter(fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction(fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation(fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties(Module.prototype, prototypeAccessors);

var ModuleCollection = function ModuleCollection(rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get(path) {
  return path.reduce(function (module, key) {
    return module.getChild(key);
  }, this.root);
};

ModuleCollection.prototype.getNamespace = function getNamespace(path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '');
  }, '');
};

ModuleCollection.prototype.update = function update$1(rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register(path, rawModule, runtime) {
  var this$1 = this;
  if (runtime === void 0) runtime = true;

  if (true) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister(path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) {return;}

  parent.removeChild(key);
};

ModuleCollection.prototype.isRegistered = function isRegistered(path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];

  return parent.hasChild(key);
};

function update(path, targetModule, newModule) {
  if (true) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if (true) {
          console.warn(
          "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
          'manual reload is needed');

        }
        return;
      }
      update(
      path.concat(key),
      targetModule.getChild(key),
      newModule.modules[key]);

    }
  }
}

var functionAssert = {
  assert: function assert(value) {return typeof value === 'function';},
  expected: 'function' };


var objectAssert = {
  assert: function assert(value) {return typeof value === 'function' ||
    typeof value === 'object' && typeof value.handler === 'function';},
  expected: 'function or object with "handler" function' };


var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert };


function assertRawModule(path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) {return;}

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
      assertOptions.assert(value),
      makeAssertionMessage(path, key, type, value, assertOptions.expected));

    });
  });
}

function makeAssertionMessage(path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + path.join('.') + "\"";
  }
  buf += " is " + JSON.stringify(value) + ".";
  return buf;
}

var Vue; // bind on install

var Store = function Store(options) {
  var this$1 = this;
  if (options === void 0) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if (true) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "store must be called with the new operator.");
  }

  var plugins = options.plugins;if (plugins === void 0) plugins = [];
  var strict = options.strict;if (strict === void 0) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();
  this._makeLocalGettersCache = Object.create(null);

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch(type, payload) {
    return dispatch.call(store, type, payload);
  };
  this.commit = function boundCommit(type, payload, options) {
    return commit.call(store, type, payload, options);
  };

  // strict mode
  this.strict = strict;

  var state = this._modules.root.state;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) {return plugin(this$1);});

  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
  if (useDevtools) {
    devtoolPlugin(this);
  }
};exports.Store = Store;

var prototypeAccessors$1 = { state: { configurable: true } };

prototypeAccessors$1.state.get = function () {
  return this._vm._data.$$state;
};

prototypeAccessors$1.state.set = function (v) {
  if (true) {
    assert(false, "use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit(_type, _payload, _options) {
  var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
  var type = ref.type;
  var payload = ref.payload;
  var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if (true) {
      console.error("[vuex] unknown mutation type: " + type);
    }
    return;
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator(handler) {
      handler(payload);
    });
  });

  this._subscribers.
  slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
  .forEach(function (sub) {return sub(mutation, this$1.state);});

  if (
   true &&
  options && options.silent)
  {
    console.warn(
    "[vuex] mutation type: " + type + ". Silent option has been removed. " +
    'Use the filter functionality in the vue-devtools');

  }
};

Store.prototype.dispatch = function dispatch(_type, _payload) {
  var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
  var type = ref.type;
  var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if (true) {
      console.error("[vuex] unknown action type: " + type);
    }
    return;
  }

  try {
    this._actionSubscribers.
    slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .filter(function (sub) {return sub.before;}).
    forEach(function (sub) {return sub.before(action, this$1.state);});
  } catch (e) {
    if (true) {
      console.warn("[vuex] error in before action subscribers: ");
      console.error(e);
    }
  }

  var result = entry.length > 1 ?
  Promise.all(entry.map(function (handler) {return handler(payload);})) :
  entry[0](payload);

  return new Promise(function (resolve, reject) {
    result.then(function (res) {
      try {
        this$1._actionSubscribers.
        filter(function (sub) {return sub.after;}).
        forEach(function (sub) {return sub.after(action, this$1.state);});
      } catch (e) {
        if (true) {
          console.warn("[vuex] error in after action subscribers: ");
          console.error(e);
        }
      }
      resolve(res);
    }, function (error) {
      try {
        this$1._actionSubscribers.
        filter(function (sub) {return sub.error;}).
        forEach(function (sub) {return sub.error(action, this$1.state, error);});
      } catch (e) {
        if (true) {
          console.warn("[vuex] error in error action subscribers: ");
          console.error(e);
        }
      }
      reject(error);
    });
  });
};

Store.prototype.subscribe = function subscribe(fn, options) {
  return genericSubscribe(fn, this._subscribers, options);
};

Store.prototype.subscribeAction = function subscribeAction(fn, options) {
  var subs = typeof fn === 'function' ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options);
};

Store.prototype.watch = function watch(getter, cb, options) {
  var this$1 = this;

  if (true) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () {return getter(this$1.state, this$1.getters);}, cb, options);
};

Store.prototype.replaceState = function replaceState(state) {
  var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule(path, rawModule, options) {
  if (options === void 0) options = {};

  if (typeof path === 'string') {path = [path];}

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule(path) {
  var this$1 = this;

  if (typeof path === 'string') {path = [path];}

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hasModule = function hasModule(path) {
  if (typeof path === 'string') {path = [path];}

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  return this._modules.isRegistered(path);
};

Store.prototype.hotUpdate = function hotUpdate(newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit(fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties(Store.prototype, prototypeAccessors$1);

function genericSubscribe(fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend ?
    subs.unshift(fn) :
    subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  };
}

function resetStore(store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM(store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  // reset local getters cache
  store._makeLocalGettersCache = Object.create(null);
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldVm.
    // using partial to return function with only arguments preserved in closure environment.
    computed[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      get: function get() {return store._vm[key];},
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state },

    computed: computed });

  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () {return oldVm.$destroy();});
  }
}

function installModule(store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    if (store._modulesNamespaceMap[namespace] && "development" !== 'production') {
      console.error("[vuex] duplicate namespace " + namespace + " for the namespaced module " + path.join('/'));
    }
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      if (true) {
        if (moduleName in parentState) {
          console.warn(
          "[vuex] state field \"" + moduleName + "\" was overridden by a module with the same name at \"" + path.join('.') + "\"");

        }
      }
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
   * make localized dispatch, commit, getters and state
   * if there is no namespace, just use root ones
   */
function makeLocalContext(store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ( true && !store._actions[type]) {
          console.error("[vuex] unknown local action type: " + args.type + ", global type: " + type);
          return;
        }
      }

      return store.dispatch(type, payload);
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ( true && !store._mutations[type]) {
          console.error("[vuex] unknown local mutation type: " + args.type + ", global type: " + type);
          return;
        }
      }

      store.commit(type, payload, options);
    } };


  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace ?
      function () {return store.getters;} :
      function () {return makeLocalGetters(store, namespace);} },

    state: {
      get: function get() {return getNestedState(store.state, path);} } });



  return local;
}

function makeLocalGetters(store, namespace) {
  if (!store._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store.getters).forEach(function (type) {
      // skip if the target getter is not match this namespace
      if (type.slice(0, splitPos) !== namespace) {return;}

      // extract local getter type
      var localType = type.slice(splitPos);

      // Add a port to the getters proxy.
      // Define as getter property because
      // we do not want to evaluate the getters in this time.
      Object.defineProperty(gettersProxy, localType, {
        get: function get() {return store.getters[type];},
        enumerable: true });

    });
    store._makeLocalGettersCache[namespace] = gettersProxy;
  }

  return store._makeLocalGettersCache[namespace];
}

function registerMutation(store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler(payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction(store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler(payload) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state },
    payload);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err;
      });
    } else {
      return res;
    }
  });
}

function registerGetter(store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if (true) {
      console.error("[vuex] duplicate getter key: " + type);
    }
    return;
  }
  store._wrappedGetters[type] = function wrappedGetter(store) {
    return rawGetter(
    local.state, // local state
    local.getters, // local getters
    store.state, // root state
    store.getters // root getters
    );
  };
}

function enableStrictMode(store) {
  store._vm.$watch(function () {return this._data.$$state;}, function () {
    if (true) {
      assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState(state, path) {
  return path.reduce(function (state, key) {return state[key];}, state);
}

function unifyObjectStyle(type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if (true) {
    assert(typeof type === 'string', "expects string as the type, but found " + typeof type + ".");
  }

  return { type: type, payload: payload, options: options };
}

function install(_Vue) {
  if (Vue && _Vue === Vue) {
    if (true) {
      console.error(
      '[vuex] already installed. Vue.use(Vuex) should be called only once.');

    }
    return;
  }
  Vue = _Vue;
  applyMixin(Vue);
}

/**
   * Reduce the code which written in Vue.js for getting the state.
   * @param {String} [namespace] - Module's namespace
   * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
   * @param {Object}
   */
var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  if ( true && !isValidMap(states)) {
    console.error('[vuex] mapState: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState() {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return;
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function' ?
      val.call(this, state, getters) :
      state[val];
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res;
});

/**
     * Reduce the code which written in Vue.js for committing the mutation
     * @param {String} [namespace] - Module's namespace
     * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept anthor params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
     * @return {Object}
     */exports.mapState = mapState;
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  if ( true && !isValidMap(mutations)) {
    console.error('[vuex] mapMutations: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation() {
      var args = [],len = arguments.length;
      while (len--) {args[len] = arguments[len];}

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return;
        }
        commit = module.context.commit;
      }
      return typeof val === 'function' ?
      val.apply(this, [commit].concat(args)) :
      commit.apply(this.$store, [val].concat(args));
    };
  });
  return res;
});

/**
     * Reduce the code which written in Vue.js for getting the getters
     * @param {String} [namespace] - Module's namespace
     * @param {Object|Array} getters
     * @return {Object}
     */exports.mapMutations = mapMutations;
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  if ( true && !isValidMap(getters)) {
    console.error('[vuex] mapGetters: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter() {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return;
      }
      if ( true && !(val in this.$store.getters)) {
        console.error("[vuex] unknown getter: " + val);
        return;
      }
      return this.$store.getters[val];
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res;
});

/**
     * Reduce the code which written in Vue.js for dispatch the action
     * @param {String} [namespace] - Module's namespace
     * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
     * @return {Object}
     */exports.mapGetters = mapGetters;
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  if ( true && !isValidMap(actions)) {
    console.error('[vuex] mapActions: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction() {
      var args = [],len = arguments.length;
      while (len--) {args[len] = arguments[len];}

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return;
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function' ?
      val.apply(this, [dispatch].concat(args)) :
      dispatch.apply(this.$store, [val].concat(args));
    };
  });
  return res;
});

/**
     * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
     * @param {String} namespace
     * @return {Object}
     */exports.mapActions = mapActions;
var createNamespacedHelpers = function createNamespacedHelpers(namespace) {return {
    mapState: mapState.bind(null, namespace),
    mapGetters: mapGetters.bind(null, namespace),
    mapMutations: mapMutations.bind(null, namespace),
    mapActions: mapActions.bind(null, namespace) };
};

/**
    * Normalize the map
    * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
    * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
    * @param {Array|Object} map
    * @return {Object}
    */exports.createNamespacedHelpers = createNamespacedHelpers;
function normalizeMap(map) {
  if (!isValidMap(map)) {
    return [];
  }
  return Array.isArray(map) ?
  map.map(function (key) {return { key: key, val: key };}) :
  Object.keys(map).map(function (key) {return { key: key, val: map[key] };});
}

/**
   * Validate whether given map is valid or not
   * @param {*} map
   * @return {Boolean}
   */
function isValidMap(map) {
  return Array.isArray(map) || isObject(map);
}

/**
   * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
   * @param {Function} fn
   * @return {Function}
   */
function normalizeNamespace(fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map);
  };
}

/**
   * Search a special module from store by namespace. if module not exist, print error message.
   * @param {Object} store
   * @param {String} helper
   * @param {String} namespace
   * @return {Object}
   */
function getModuleByNamespace(store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if ( true && !module) {
    console.error("[vuex] module namespace not found in " + helper + "(): " + namespace);
  }
  return module;
}

var index = {
  Store: Store,
  install: install,
  version: '3.4.0',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers };var _default =


index;exports.default = _default;

/***/ }),
/* 14 */
/*!*********************************************************************************************************************************************!*\
  !*** D:/WebStudyProject/uniapp-project/meeting-demo/components/NavTop/NavTop.vue?vue&type=style&index=0&id=7608b004&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_NavTop_vue_vue_type_style_index_0_id_7608b004_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--10-oneOf-0-2!../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--10-oneOf-0-3!../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-4!../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./NavTop.vue?vue&type=style&index=0&id=7608b004&lang=scss&scoped=true& */ 15);
/* harmony import */ var _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_NavTop_vue_vue_type_style_index_0_id_7608b004_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_NavTop_vue_vue_type_style_index_0_id_7608b004_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_NavTop_vue_vue_type_style_index_0_id_7608b004_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_NavTop_vue_vue_type_style_index_0_id_7608b004_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_NavTop_vue_vue_type_style_index_0_id_7608b004_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 15 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/WebStudyProject/uniapp-project/meeting-demo/components/NavTop/NavTop.vue?vue&type=style&index=0&id=7608b004&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".nav-top-fixed": {
    "": {
      "position": [
        "sticky",
        0,
        0,
        20
      ],
      "top": [
        0,
        0,
        0,
        20
      ],
      "zIndex": [
        999,
        0,
        0,
        20
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),
/* 16 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 17 */
/*!***************************************************************************************************************!*\
  !*** D:/WebStudyProject/uniapp-project/meeting-demo/uni_modules/uni-popup/components/uni-popup/uni-popup.vue ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _uni_popup_vue_vue_type_template_id_7c43d41b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-popup.vue?vue&type=template&id=7c43d41b& */ 18);\n/* harmony import */ var _uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-popup.vue?vue&type=script&lang=js& */ 28);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./uni-popup.vue?vue&type=style&index=0&lang=scss& */ 30).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./uni-popup.vue?vue&type=style&index=0&lang=scss& */ 30).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _uni_popup_vue_vue_type_template_id_7c43d41b___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _uni_popup_vue_vue_type_template_id_7c43d41b___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"3d4cdf5c\",\n  false,\n  _uni_popup_vue_vue_type_template_id_7c43d41b___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"uni_modules/uni-popup/components/uni-popup/uni-popup.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBc0g7QUFDdEg7QUFDNkQ7QUFDTDtBQUN4RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLDJEQUFtRDtBQUN2RyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsMkRBQW1EO0FBQzVHOztBQUVBOztBQUVBO0FBQ21MO0FBQ25MLGdCQUFnQixvTEFBVTtBQUMxQixFQUFFLCtFQUFNO0FBQ1IsRUFBRSxvRkFBTTtBQUNSLEVBQUUsNkZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsd0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIxNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vdW5pLXBvcHVwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03YzQzZDQxYiZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3VuaS1wb3B1cC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3VuaS1wb3B1cC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi91bmktcG9wdXAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi91bmktcG9wdXAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vd3ogQXBwL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCIzZDRjZGY1Y1wiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ1bmlfbW9kdWxlcy91bmktcG9wdXAvY29tcG9uZW50cy91bmktcG9wdXAvdW5pLXBvcHVwLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///17\n");

/***/ }),
/* 18 */
/*!**********************************************************************************************************************************************!*\
  !*** D:/WebStudyProject/uniapp-project/meeting-demo/uni_modules/uni-popup/components/uni-popup/uni-popup.vue?vue&type=template&id=7c43d41b& ***!
  \**********************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_template_id_7c43d41b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-popup.vue?vue&type=template&id=7c43d41b& */ 19);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_template_id_7c43d41b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_template_id_7c43d41b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_template_id_7c43d41b___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_template_id_7c43d41b___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 19 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/WebStudyProject/uniapp-project/meeting-demo/uni_modules/uni-popup/components/uni-popup/uni-popup.vue?vue&type=template&id=7c43d41b& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uniTransition: __webpack_require__(/*! @/uni_modules/uni-transition/components/uni-transition/uni-transition.vue */ 20)
      .default
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.showPopup
    ? _c(
        "view",
        {
          staticClass: ["uni-popup"],
          class: [_vm.popupstyle, _vm.isDesktop ? "fixforpc-z-index" : ""]
        },
        [
          _c(
            "view",
            { on: { touchstart: _vm.touchstart } },
            [
              _vm.maskShow
                ? _c("uni-transition", {
                    key: "1",
                    attrs: {
                      name: "mask",
                      modeClass: "fade",
                      styles: _vm.maskClass,
                      duration: _vm.duration,
                      show: _vm.showTrans
                    },
                    on: { click: _vm.onTap }
                  })
                : _vm._e(),
              _c(
                "uni-transition",
                {
                  key: "2",
                  attrs: {
                    modeClass: _vm.ani,
                    name: "content",
                    styles: _vm.transClass,
                    duration: _vm.duration,
                    show: _vm.showTrans
                  },
                  on: { click: _vm.onTap }
                },
                [
                  _c(
                    "view",
                    {
                      staticClass: ["uni-popup__wrapper"],
                      class: [_vm.popupstyle],
                      style: { backgroundColor: _vm.bg },
                      on: { click: _vm.clear }
                    },
                    [_vm._t("default")],
                    2
                  )
                ]
              )
            ],
            1
          )
        ]
      )
    : _vm._e()
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 20 */
/*!******************************************************************************************************************************!*\
  !*** D:/WebStudyProject/uniapp-project/meeting-demo/uni_modules/uni-transition/components/uni-transition/uni-transition.vue ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _uni_transition_vue_vue_type_template_id_6369f8c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-transition.vue?vue&type=template&id=6369f8c4& */ 21);\n/* harmony import */ var _uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-transition.vue?vue&type=script&lang=js& */ 23);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      \n}\n\n/* normalize component */\n\nvar component = Object(_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _uni_transition_vue_vue_type_template_id_6369f8c4___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _uni_transition_vue_vue_type_template_id_6369f8c4___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"4575f2bd\",\n  false,\n  _uni_transition_vue_vue_type_template_id_6369f8c4___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"uni_modules/uni-transition/components/uni-transition/uni-transition.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkg7QUFDM0g7QUFDa0U7QUFDTDtBQUM3RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDbUw7QUFDbkwsZ0JBQWdCLG9MQUFVO0FBQzFCLEVBQUUsb0ZBQU07QUFDUixFQUFFLHlGQUFNO0FBQ1IsRUFBRSxrR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSw2RkFBVTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNlLGdGIiwiZmlsZSI6IjIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi91bmktdHJhbnNpdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjM2OWY4YzQmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi91bmktdHJhbnNpdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3VuaS10cmFuc2l0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIFxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3d6IEFwcC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiNDU3NWYyYmRcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidW5pX21vZHVsZXMvdW5pLXRyYW5zaXRpb24vY29tcG9uZW50cy91bmktdHJhbnNpdGlvbi91bmktdHJhbnNpdGlvbi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///20\n");

/***/ }),
/* 21 */
/*!*************************************************************************************************************************************************************!*\
  !*** D:/WebStudyProject/uniapp-project/meeting-demo/uni_modules/uni-transition/components/uni-transition/uni-transition.vue?vue&type=template&id=6369f8c4& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_template_id_6369f8c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-transition.vue?vue&type=template&id=6369f8c4& */ 22);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_template_id_6369f8c4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_template_id_6369f8c4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_template_id_6369f8c4___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_template_id_6369f8c4___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 22 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/WebStudyProject/uniapp-project/meeting-demo/uni_modules/uni-transition/components/uni-transition/uni-transition.vue?vue&type=template&id=6369f8c4& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.isShow
    ? _c(
        "view",
        {
          ref: "ani",
          class: _vm.customClass,
          style: _vm.transformStyles,
          attrs: { animation: _vm.animationData },
          on: { click: _vm.onClick }
        },
        [_vm._t("default")],
        2
      )
    : _vm._e()
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 23 */
/*!*******************************************************************************************************************************************************!*\
  !*** D:/WebStudyProject/uniapp-project/meeting-demo/uni_modules/uni-transition/components/uni-transition/uni-transition.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--5-0!../../../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!../../../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-transition.vue?vue&type=script&lang=js& */ 24);\n/* harmony import */ var _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTZkLENBQWdCLHVlQUFHLEVBQUMiLCJmaWxlIjoiMjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3d6IEFwcC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi93eiBBcHAvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi93eiBBcHAvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLXRyYW5zaXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3d6IEFwcC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi93eiBBcHAvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi93eiBBcHAvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLXRyYW5zaXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///23\n");

/***/ }),
/* 24 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/WebStudyProject/uniapp-project/meeting-demo/uni_modules/uni-transition/components/uni-transition/uni-transition.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\nvar _createAnimation = __webpack_require__(/*! ./createAnimation */ 26);function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === \"Object\" && o.constructor) n = o.constructor.name;if (n === \"Map\" || n === \"Set\") return Array.from(o);if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}\n\n/**\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * Transition 过渡动画\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * @description 简单过渡动画组件\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * @tutorial https://ext.dcloud.net.cn/plugin?id=985\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * @property {Boolean} show = [false|true] 控制组件显示或隐藏\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * @property {Array|String} modeClass = [fade|slide-top|slide-right|slide-bottom|slide-left|zoom-in|zoom-out] 过渡动画类型\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       *  @value fade 渐隐渐出过渡\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       *  @value slide-top 由上至下过渡\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       *  @value slide-right 由右至左过渡\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       *  @value slide-bottom 由下至上过渡\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       *  @value slide-left 由左至右过渡\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       *  @value zoom-in 由小到大过渡\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       *  @value zoom-out 由大到小过渡\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * @property {Number} duration 过渡动画持续时间\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * @property {Object} styles 组件样式，同 css 样式，注意带’-‘连接符的属性需要使用小驼峰写法如：`backgroundColor:red`\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       */var _default2 =\n{\n  name: 'uniTransition',\n  emits: ['click', 'change'],\n  props: {\n    show: {\n      type: Boolean,\n      default: false },\n\n    modeClass: {\n      type: [Array, String],\n      default: function _default() {\n        return 'fade';\n      } },\n\n    duration: {\n      type: Number,\n      default: 300 },\n\n    styles: {\n      type: Object,\n      default: function _default() {\n        return {};\n      } },\n\n    customClass: {\n      type: String,\n      default: '' } },\n\n\n  data: function data() {\n    return {\n      isShow: false,\n      transform: '',\n      opacity: 1,\n      animationData: {},\n      durationTime: 300,\n      config: {} };\n\n  },\n  watch: {\n    show: {\n      handler: function handler(newVal) {\n        if (newVal) {\n          this.open();\n        } else {\n          // 避免上来就执行 close,导致动画错乱\n          if (this.isShow) {\n            this.close();\n          }\n        }\n      },\n      immediate: true } },\n\n\n  computed: {\n    // 生成样式数据\n    stylesObject: function stylesObject() {\n      var styles = _objectSpread(_objectSpread({},\n      this.styles), {}, {\n        'transition-duration': this.duration / 1000 + 's' });\n\n      var transform = '';\n      for (var i in styles) {\n        var line = this.toLine(i);\n        transform += line + ':' + styles[i] + ';';\n      }\n      return transform;\n    },\n    // 初始化动画条件\n    transformStyles: function transformStyles() {\n      return 'transform:' + this.transform + ';' + 'opacity:' + this.opacity + ';' + this.stylesObject;\n    } },\n\n  created: function created() {\n    // 动画默认配置\n    this.config = {\n      duration: this.duration,\n      timingFunction: 'ease',\n      transformOrigin: '50% 50%',\n      delay: 0 };\n\n    this.durationTime = this.duration;\n  },\n  methods: {\n    /**\r\n              *  ref 触发 初始化动画\r\n              */\n    init: function init() {var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n      if (obj.duration) {\n        this.durationTime = obj.duration;\n      }\n      this.animation = (0, _createAnimation.createAnimation)(Object.assign(this.config, obj), this);\n    },\n    /**\r\n        * 点击组件触发回调\r\n        */\n    onClick: function onClick() {\n      this.$emit('click', {\n        detail: this.isShow });\n\n    },\n    /**\r\n        * ref 触发 动画分组\r\n        * @param {Object} obj\r\n        */\n    step: function step(obj) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n      if (!this.animation) return;\n      for (var i in obj) {\n        try {\n          if (typeof obj[i] === 'object') {var _this$animation;\n            (_this$animation = this.animation)[i].apply(_this$animation, _toConsumableArray(obj[i]));\n          } else {\n            this.animation[i](obj[i]);\n          }\n        } catch (e) {\n          __f__(\"error\", \"\\u65B9\\u6CD5 \".concat(i, \" \\u4E0D\\u5B58\\u5728\"), \" at uni_modules/uni-transition/components/uni-transition/uni-transition.vue:139\");\n        }\n      }\n      this.animation.step(config);\n      return this;\n    },\n    /**\r\n        *  ref 触发 执行动画\r\n        */\n    run: function run(fn) {\n      if (!this.animation) return;\n      this.animation.run(fn);\n    },\n    // 开始过度动画\n    open: function open() {var _this = this;\n      clearTimeout(this.timer);\n      this.transform = '';\n      this.isShow = true;var _this$styleInit =\n      this.styleInit(false),opacity = _this$styleInit.opacity,transform = _this$styleInit.transform;\n      if (typeof opacity !== 'undefined') {\n        this.opacity = opacity;\n      }\n      this.transform = transform;\n      // 确保动态样式已经生效后，执行动画，如果不加 nextTick ，会导致 wx 动画执行异常\n      this.$nextTick(function () {\n        // TODO 定时器保证动画完全执行，目前有些问题，后面会取消定时器\n        _this.timer = setTimeout(function () {\n          _this.animation = (0, _createAnimation.createAnimation)(_this.config, _this);\n          _this.tranfromInit(false).step();\n          _this.animation.run();\n          _this.$emit('change', {\n            detail: _this.isShow });\n\n        }, 20);\n      });\n    },\n    // 关闭过度动画\n    close: function close(type) {var _this2 = this;\n      if (!this.animation) return;\n      this.tranfromInit(true).\n      step().\n      run(function () {\n        _this2.isShow = false;\n        _this2.animationData = null;\n        _this2.animation = null;var _this2$styleInit =\n        _this2.styleInit(false),opacity = _this2$styleInit.opacity,transform = _this2$styleInit.transform;\n        _this2.opacity = opacity || 1;\n        _this2.transform = transform;\n        _this2.$emit('change', {\n          detail: _this2.isShow });\n\n      });\n    },\n    // 处理动画开始前的默认样式\n    styleInit: function styleInit(type) {var _this3 = this;\n      var styles = {\n        transform: '' };\n\n      var buildStyle = function buildStyle(type, mode) {\n        if (mode === 'fade') {\n          styles.opacity = _this3.animationType(type)[mode];\n        } else {\n          styles.transform += _this3.animationType(type)[mode] + ' ';\n        }\n      };\n      if (typeof this.modeClass === 'string') {\n        buildStyle(type, this.modeClass);\n      } else {\n        this.modeClass.forEach(function (mode) {\n          buildStyle(type, mode);\n        });\n      }\n      return styles;\n    },\n    // 处理内置组合动画\n    tranfromInit: function tranfromInit(type) {var _this4 = this;\n      var buildTranfrom = function buildTranfrom(type, mode) {\n        var aniNum = null;\n        if (mode === 'fade') {\n          aniNum = type ? 0 : 1;\n        } else {\n          aniNum = type ? '-100%' : '0';\n          if (mode === 'zoom-in') {\n            aniNum = type ? 0.8 : 1;\n          }\n          if (mode === 'zoom-out') {\n            aniNum = type ? 1.2 : 1;\n          }\n          if (mode === 'slide-right') {\n            aniNum = type ? '100%' : '0';\n          }\n          if (mode === 'slide-bottom') {\n            aniNum = type ? '100%' : '0';\n          }\n        }\n        _this4.animation[_this4.animationMode()[mode]](aniNum);\n      };\n      if (typeof this.modeClass === 'string') {\n        buildTranfrom(type, this.modeClass);\n      } else {\n        this.modeClass.forEach(function (mode) {\n          buildTranfrom(type, mode);\n        });\n      }\n\n      return this.animation;\n    },\n    animationType: function animationType(type) {\n      return {\n        fade: type ? 1 : 0,\n        'slide-top': \"translateY(\".concat(type ? '0' : '-100%', \")\"),\n        'slide-right': \"translateX(\".concat(type ? '0' : '100%', \")\"),\n        'slide-bottom': \"translateY(\".concat(type ? '0' : '100%', \")\"),\n        'slide-left': \"translateX(\".concat(type ? '0' : '-100%', \")\"),\n        'zoom-in': \"scaleX(\".concat(type ? 1 : 0.8, \") scaleY(\").concat(type ? 1 : 0.8, \")\"),\n        'zoom-out': \"scaleX(\".concat(type ? 1 : 1.2, \") scaleY(\").concat(type ? 1 : 1.2, \")\") };\n\n    },\n    // 内置动画类型与实际动画对应字典\n    animationMode: function animationMode() {\n      return {\n        fade: 'opacity',\n        'slide-top': 'translateY',\n        'slide-right': 'translateX',\n        'slide-bottom': 'translateY',\n        'slide-left': 'translateX',\n        'zoom-in': 'scale',\n        'zoom-out': 'scale' };\n\n    },\n    // 驼峰转中横线\n    toLine: function toLine(name) {\n      return name.replace(/([A-Z])/g, '-$1').toLowerCase();\n    } } };exports.default = _default2;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 25)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdW5pLXRyYW5zaXRpb24vY29tcG9uZW50cy91bmktdHJhbnNpdGlvbi91bmktdHJhbnNpdGlvbi52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFLQSx3RTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQTtBQUNBLHVCQURBO0FBRUEsNEJBRkE7QUFHQTtBQUNBO0FBQ0EsbUJBREE7QUFFQSxvQkFGQSxFQURBOztBQUtBO0FBQ0EsMkJBREE7QUFFQSxhQUZBLHNCQUVBO0FBQ0E7QUFDQSxPQUpBLEVBTEE7O0FBV0E7QUFDQSxrQkFEQTtBQUVBLGtCQUZBLEVBWEE7O0FBZUE7QUFDQSxrQkFEQTtBQUVBLGFBRkEsc0JBRUE7QUFDQTtBQUNBLE9BSkEsRUFmQTs7QUFxQkE7QUFDQSxrQkFEQTtBQUVBLGlCQUZBLEVBckJBLEVBSEE7OztBQTZCQSxNQTdCQSxrQkE2QkE7QUFDQTtBQUNBLG1CQURBO0FBRUEsbUJBRkE7QUFHQSxnQkFIQTtBQUlBLHVCQUpBO0FBS0EsdUJBTEE7QUFNQSxnQkFOQTs7QUFRQSxHQXRDQTtBQXVDQTtBQUNBO0FBQ0EsYUFEQSxtQkFDQSxNQURBLEVBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BVkE7QUFXQSxxQkFYQSxFQURBLEVBdkNBOzs7QUFzREE7QUFDQTtBQUNBLGdCQUZBLDBCQUVBO0FBQ0E7QUFDQSxpQkFEQTtBQUVBLHlEQUZBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBYkE7QUFjQTtBQUNBLG1CQWZBLDZCQWVBO0FBQ0E7QUFDQSxLQWpCQSxFQXREQTs7QUF5RUEsU0F6RUEscUJBeUVBO0FBQ0E7QUFDQTtBQUNBLDZCQURBO0FBRUEsNEJBRkE7QUFHQSxnQ0FIQTtBQUlBLGNBSkE7O0FBTUE7QUFDQSxHQWxGQTtBQW1GQTtBQUNBOzs7QUFHQSxRQUpBLGtCQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQVRBO0FBVUE7OztBQUdBLFdBYkEscUJBYUE7QUFDQTtBQUNBLDJCQURBOztBQUdBLEtBakJBO0FBa0JBOzs7O0FBSUEsUUF0QkEsZ0JBc0JBLEdBdEJBLEVBc0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQSxTQU5BLENBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FyQ0E7QUFzQ0E7OztBQUdBLE9BekNBLGVBeUNBLEVBekNBLEVBeUNBO0FBQ0E7QUFDQTtBQUNBLEtBNUNBO0FBNkNBO0FBQ0EsUUE5Q0Esa0JBOENBO0FBQ0E7QUFDQTtBQUNBLHlCQUhBO0FBSUEsMkJBSkEsQ0FJQSxPQUpBLG1CQUlBLE9BSkEsQ0FJQSxTQUpBLG1CQUlBLFNBSkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FEQTs7QUFHQSxTQVBBLEVBT0EsRUFQQTtBQVFBLE9BVkE7QUFXQSxLQW5FQTtBQW9FQTtBQUNBLFNBckVBLGlCQXFFQSxJQXJFQSxFQXFFQTtBQUNBO0FBQ0E7QUFDQSxVQURBO0FBRUEsU0FGQSxDQUVBO0FBQ0E7QUFDQTtBQUNBLGdDQUhBO0FBSUEsK0JBSkEsQ0FJQSxPQUpBLG9CQUlBLE9BSkEsQ0FJQSxTQUpBLG9CQUlBLFNBSkE7QUFLQTtBQUNBO0FBQ0E7QUFDQSwrQkFEQTs7QUFHQSxPQVpBO0FBYUEsS0FwRkE7QUFxRkE7QUFDQSxhQXRGQSxxQkFzRkEsSUF0RkEsRUFzRkE7QUFDQTtBQUNBLHFCQURBOztBQUdBO0FBQ0E7QUFDQTtBQUNBLFNBRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQSxPQU5BO0FBT0E7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUZBO0FBR0E7QUFDQTtBQUNBLEtBekdBO0FBMEdBO0FBQ0EsZ0JBM0dBLHdCQTJHQSxJQTNHQSxFQTJHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FwQkE7QUFxQkE7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUZBO0FBR0E7O0FBRUE7QUFDQSxLQTFJQTtBQTJJQSxpQkEzSUEseUJBMklBLElBM0lBLEVBMklBO0FBQ0E7QUFDQSwwQkFEQTtBQUVBLG9FQUZBO0FBR0EscUVBSEE7QUFJQSxzRUFKQTtBQUtBLHFFQUxBO0FBTUEsNEZBTkE7QUFPQSw2RkFQQTs7QUFTQSxLQXJKQTtBQXNKQTtBQUNBLGlCQXZKQSwyQkF1SkE7QUFDQTtBQUNBLHVCQURBO0FBRUEsaUNBRkE7QUFHQSxtQ0FIQTtBQUlBLG9DQUpBO0FBS0Esa0NBTEE7QUFNQSwwQkFOQTtBQU9BLDJCQVBBOztBQVNBLEtBaktBO0FBa0tBO0FBQ0EsVUFuS0Esa0JBbUtBLElBbktBLEVBbUtBO0FBQ0E7QUFDQSxLQXJLQSxFQW5GQSxFIiwiZmlsZSI6IjI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IHYtaWY9XCJpc1Nob3dcIiByZWY9XCJhbmlcIiA6YW5pbWF0aW9uPVwiYW5pbWF0aW9uRGF0YVwiIDpjbGFzcz1cImN1c3RvbUNsYXNzXCIgOnN0eWxlPVwidHJhbnNmb3JtU3R5bGVzXCIgQGNsaWNrPVwib25DbGlja1wiPjxzbG90Pjwvc2xvdD48L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgeyBjcmVhdGVBbmltYXRpb24gfSBmcm9tICcuL2NyZWF0ZUFuaW1hdGlvbidcclxuXHJcbi8qKlxyXG4gKiBUcmFuc2l0aW9uIOi/h+a4oeWKqOeUu1xyXG4gKiBAZGVzY3JpcHRpb24g566A5Y2V6L+H5rih5Yqo55S757uE5Lu2XHJcbiAqIEB0dXRvcmlhbCBodHRwczovL2V4dC5kY2xvdWQubmV0LmNuL3BsdWdpbj9pZD05ODVcclxuICogQHByb3BlcnR5IHtCb29sZWFufSBzaG93ID0gW2ZhbHNlfHRydWVdIOaOp+WItue7hOS7tuaYvuekuuaIlumakOiXj1xyXG4gKiBAcHJvcGVydHkge0FycmF5fFN0cmluZ30gbW9kZUNsYXNzID0gW2ZhZGV8c2xpZGUtdG9wfHNsaWRlLXJpZ2h0fHNsaWRlLWJvdHRvbXxzbGlkZS1sZWZ0fHpvb20taW58em9vbS1vdXRdIOi/h+a4oeWKqOeUu+exu+Wei1xyXG4gKiAgQHZhbHVlIGZhZGUg5riQ6ZqQ5riQ5Ye66L+H5rihXHJcbiAqICBAdmFsdWUgc2xpZGUtdG9wIOeUseS4iuiHs+S4i+i/h+a4oVxyXG4gKiAgQHZhbHVlIHNsaWRlLXJpZ2h0IOeUseWPs+iHs+W3pui/h+a4oVxyXG4gKiAgQHZhbHVlIHNsaWRlLWJvdHRvbSDnlLHkuIvoh7PkuIrov4fmuKFcclxuICogIEB2YWx1ZSBzbGlkZS1sZWZ0IOeUseW3puiHs+WPs+i/h+a4oVxyXG4gKiAgQHZhbHVlIHpvb20taW4g55Sx5bCP5Yiw5aSn6L+H5rihXHJcbiAqICBAdmFsdWUgem9vbS1vdXQg55Sx5aSn5Yiw5bCP6L+H5rihXHJcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBkdXJhdGlvbiDov4fmuKHliqjnlLvmjIHnu63ml7bpl7RcclxuICogQHByb3BlcnR5IHtPYmplY3R9IHN0eWxlcyDnu4Tku7bmoLflvI/vvIzlkIwgY3NzIOagt+W8j++8jOazqOaEj+W4puKAmS3igJjov57mjqXnrKbnmoTlsZ7mgKfpnIDopoHkvb/nlKjlsI/pqbzls7Dlhpnms5XlpoLvvJpgYmFja2dyb3VuZENvbG9yOnJlZGBcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRuYW1lOiAndW5pVHJhbnNpdGlvbicsXHJcblx0ZW1pdHM6WydjbGljaycsJ2NoYW5nZSddLFxyXG5cdHByb3BzOiB7XHJcblx0XHRzaG93OiB7XHJcblx0XHRcdHR5cGU6IEJvb2xlYW4sXHJcblx0XHRcdGRlZmF1bHQ6IGZhbHNlXHJcblx0XHR9LFxyXG5cdFx0bW9kZUNsYXNzOiB7XHJcblx0XHRcdHR5cGU6IFtBcnJheSwgU3RyaW5nXSxcclxuXHRcdFx0ZGVmYXVsdCgpIHtcclxuXHRcdFx0XHRyZXR1cm4gJ2ZhZGUnXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRkdXJhdGlvbjoge1xyXG5cdFx0XHR0eXBlOiBOdW1iZXIsXHJcblx0XHRcdGRlZmF1bHQ6IDMwMFxyXG5cdFx0fSxcclxuXHRcdHN0eWxlczoge1xyXG5cdFx0XHR0eXBlOiBPYmplY3QsXHJcblx0XHRcdGRlZmF1bHQoKSB7XHJcblx0XHRcdFx0cmV0dXJuIHt9XHJcblx0XHRcdH1cclxuXHRcdH0sXG5cdFx0Y3VzdG9tQ2xhc3M6e1xuXHRcdFx0dHlwZTogU3RyaW5nLFxuXHRcdFx0ZGVmYXVsdDogJydcblx0XHR9XHJcblx0fSxcclxuXHRkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0aXNTaG93OiBmYWxzZSxcclxuXHRcdFx0dHJhbnNmb3JtOiAnJyxcclxuXHRcdFx0b3BhY2l0eTogMSxcclxuXHRcdFx0YW5pbWF0aW9uRGF0YToge30sXHJcblx0XHRcdGR1cmF0aW9uVGltZTogMzAwLFxyXG5cdFx0XHRjb25maWc6IHt9XHJcblx0XHR9XHJcblx0fSxcclxuXHR3YXRjaDoge1xyXG5cdFx0c2hvdzoge1xyXG5cdFx0XHRoYW5kbGVyKG5ld1ZhbCkge1xyXG5cdFx0XHRcdGlmIChuZXdWYWwpIHtcclxuXHRcdFx0XHRcdHRoaXMub3BlbigpXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdC8vIOmBv+WFjeS4iuadpeWwseaJp+ihjCBjbG9zZSzlr7zoh7TliqjnlLvplJnkubFcclxuXHRcdFx0XHRcdGlmICh0aGlzLmlzU2hvdykge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmNsb3NlKClcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdGltbWVkaWF0ZTogdHJ1ZVxyXG5cdFx0fVxyXG5cdH0sXHJcblx0Y29tcHV0ZWQ6IHtcclxuXHRcdC8vIOeUn+aIkOagt+W8j+aVsOaNrlxyXG5cdFx0c3R5bGVzT2JqZWN0KCkge1xyXG5cdFx0XHRsZXQgc3R5bGVzID0ge1xyXG5cdFx0XHRcdC4uLnRoaXMuc3R5bGVzLFxyXG5cdFx0XHRcdCd0cmFuc2l0aW9uLWR1cmF0aW9uJzogdGhpcy5kdXJhdGlvbiAvIDEwMDAgKyAncydcclxuXHRcdFx0fVxyXG5cdFx0XHRsZXQgdHJhbnNmb3JtID0gJydcclxuXHRcdFx0Zm9yIChsZXQgaSBpbiBzdHlsZXMpIHtcclxuXHRcdFx0XHRsZXQgbGluZSA9IHRoaXMudG9MaW5lKGkpXHJcblx0XHRcdFx0dHJhbnNmb3JtICs9IGxpbmUgKyAnOicgKyBzdHlsZXNbaV0gKyAnOydcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gdHJhbnNmb3JtXHJcblx0XHR9LFxyXG5cdFx0Ly8g5Yid5aeL5YyW5Yqo55S75p2h5Lu2XHJcblx0XHR0cmFuc2Zvcm1TdHlsZXMoKSB7XHJcblx0XHRcdHJldHVybiAndHJhbnNmb3JtOicgKyB0aGlzLnRyYW5zZm9ybSArICc7JyArICdvcGFjaXR5OicgKyB0aGlzLm9wYWNpdHkgKyAnOycgKyB0aGlzLnN0eWxlc09iamVjdFxyXG5cdFx0fVxyXG5cdH0sXHJcblx0Y3JlYXRlZCgpIHtcclxuXHRcdC8vIOWKqOeUu+m7mOiupOmFjee9rlxyXG5cdFx0dGhpcy5jb25maWcgPSB7XHJcblx0XHRcdGR1cmF0aW9uOiB0aGlzLmR1cmF0aW9uLFxyXG5cdFx0XHR0aW1pbmdGdW5jdGlvbjogJ2Vhc2UnLFxyXG5cdFx0XHR0cmFuc2Zvcm1PcmlnaW46ICc1MCUgNTAlJyxcclxuXHRcdFx0ZGVsYXk6IDBcclxuXHRcdH1cclxuXHRcdHRoaXMuZHVyYXRpb25UaW1lID0gdGhpcy5kdXJhdGlvblxyXG5cdH0sXHJcblx0bWV0aG9kczoge1xyXG5cdFx0LyoqXHJcblx0XHQgKiAgcmVmIOinpuWPkSDliJ3lp4vljJbliqjnlLtcclxuXHRcdCAqL1xyXG5cdFx0aW5pdChvYmogPSB7fSkge1xyXG5cdFx0XHRpZiAob2JqLmR1cmF0aW9uKSB7XHJcblx0XHRcdFx0dGhpcy5kdXJhdGlvblRpbWUgPSBvYmouZHVyYXRpb25cclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLmFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbihPYmplY3QuYXNzaWduKHRoaXMuY29uZmlnLCBvYmopLHRoaXMpXHJcblx0XHR9LFxyXG5cdFx0LyoqXHJcblx0XHQgKiDngrnlh7vnu4Tku7bop6blj5Hlm57osINcclxuXHRcdCAqL1xyXG5cdFx0b25DbGljaygpIHtcclxuXHRcdFx0dGhpcy4kZW1pdCgnY2xpY2snLCB7XHJcblx0XHRcdFx0ZGV0YWlsOiB0aGlzLmlzU2hvd1xyXG5cdFx0XHR9KVxyXG5cdFx0fSxcclxuXHRcdC8qKlxyXG5cdFx0ICogcmVmIOinpuWPkSDliqjnlLvliIbnu4RcclxuXHRcdCAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcclxuXHRcdCAqL1xyXG5cdFx0c3RlcChvYmosIGNvbmZpZyA9IHt9KSB7XHJcblx0XHRcdGlmICghdGhpcy5hbmltYXRpb24pIHJldHVyblxuXHRcdFx0Zm9yIChsZXQgaSBpbiBvYmopIHtcclxuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGlmKHR5cGVvZiBvYmpbaV0gPT09ICdvYmplY3QnKXtcblx0XHRcdFx0XHRcdHRoaXMuYW5pbWF0aW9uW2ldKC4uLm9ialtpXSlcblx0XHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRcdHRoaXMuYW5pbWF0aW9uW2ldKG9ialtpXSlcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcihg5pa55rOVICR7aX0g5LiN5a2Y5ZyoYClcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5hbmltYXRpb24uc3RlcChjb25maWcpXG5cdFx0XHRyZXR1cm4gdGhpc1xyXG5cdFx0fSxcclxuXHRcdC8qKlxyXG5cdFx0ICogIHJlZiDop6blj5Eg5omn6KGM5Yqo55S7XHJcblx0XHQgKi9cclxuXHRcdHJ1bihmbikge1xyXG5cdFx0XHRpZiAoIXRoaXMuYW5pbWF0aW9uKSByZXR1cm5cclxuXHRcdFx0dGhpcy5hbmltYXRpb24ucnVuKGZuKVxyXG5cdFx0fSxcclxuXHRcdC8vIOW8gOWni+i/h+W6puWKqOeUu1xyXG5cdFx0b3BlbigpIHtcclxuXHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMudGltZXIpXHJcblx0XHRcdHRoaXMudHJhbnNmb3JtID0gJydcclxuXHRcdFx0dGhpcy5pc1Nob3cgPSB0cnVlXHJcblx0XHRcdGxldCB7IG9wYWNpdHksIHRyYW5zZm9ybSB9ID0gdGhpcy5zdHlsZUluaXQoZmFsc2UpXHJcblx0XHRcdGlmICh0eXBlb2Ygb3BhY2l0eSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdFx0XHR0aGlzLm9wYWNpdHkgPSBvcGFjaXR5XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cclxuXHRcdFx0Ly8g56Gu5L+d5Yqo5oCB5qC35byP5bey57uP55Sf5pWI5ZCO77yM5omn6KGM5Yqo55S777yM5aaC5p6c5LiN5YqgIG5leHRUaWNrIO+8jOS8muWvvOiHtCB3eCDliqjnlLvmiafooYzlvILluLhcclxuXHRcdFx0dGhpcy4kbmV4dFRpY2soKCkgPT4ge1xyXG5cdFx0XHRcdC8vIFRPRE8g5a6a5pe25Zmo5L+d6K+B5Yqo55S75a6M5YWo5omn6KGM77yM55uu5YmN5pyJ5Lqb6Zeu6aKY77yM5ZCO6Z2i5Lya5Y+W5raI5a6a5pe25ZmoXHJcblx0XHRcdFx0dGhpcy50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5hbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24odGhpcy5jb25maWcsIHRoaXMpXHJcblx0XHRcdFx0XHR0aGlzLnRyYW5mcm9tSW5pdChmYWxzZSkuc3RlcCgpXHJcblx0XHRcdFx0XHR0aGlzLmFuaW1hdGlvbi5ydW4oKVxyXG5cdFx0XHRcdFx0dGhpcy4kZW1pdCgnY2hhbmdlJywge1xyXG5cdFx0XHRcdFx0XHRkZXRhaWw6IHRoaXMuaXNTaG93XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH0sIDIwKVxyXG5cdFx0XHR9KVxyXG5cdFx0fSxcclxuXHRcdC8vIOWFs+mXrei/h+W6puWKqOeUu1xyXG5cdFx0Y2xvc2UodHlwZSkge1xyXG5cdFx0XHRpZiAoIXRoaXMuYW5pbWF0aW9uKSByZXR1cm5cclxuXHRcdFx0dGhpcy50cmFuZnJvbUluaXQodHJ1ZSlcclxuXHRcdFx0XHQuc3RlcCgpXHJcblx0XHRcdFx0LnJ1bigoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmlzU2hvdyA9IGZhbHNlXHJcblx0XHRcdFx0XHR0aGlzLmFuaW1hdGlvbkRhdGEgPSBudWxsXHJcblx0XHRcdFx0XHR0aGlzLmFuaW1hdGlvbiA9IG51bGxcclxuXHRcdFx0XHRcdGxldCB7IG9wYWNpdHksIHRyYW5zZm9ybSB9ID0gdGhpcy5zdHlsZUluaXQoZmFsc2UpXHJcblx0XHRcdFx0XHR0aGlzLm9wYWNpdHkgPSBvcGFjaXR5IHx8IDFcclxuXHRcdFx0XHRcdHRoaXMudHJhbnNmb3JtID0gdHJhbnNmb3JtXHJcblx0XHRcdFx0XHR0aGlzLiRlbWl0KCdjaGFuZ2UnLCB7XHJcblx0XHRcdFx0XHRcdGRldGFpbDogdGhpcy5pc1Nob3dcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fSlcclxuXHRcdH0sXHJcblx0XHQvLyDlpITnkIbliqjnlLvlvIDlp4vliY3nmoTpu5jorqTmoLflvI9cclxuXHRcdHN0eWxlSW5pdCh0eXBlKSB7XHJcblx0XHRcdGxldCBzdHlsZXMgPSB7XHJcblx0XHRcdFx0dHJhbnNmb3JtOiAnJ1xyXG5cdFx0XHR9XHJcblx0XHRcdGxldCBidWlsZFN0eWxlID0gKHR5cGUsIG1vZGUpID0+IHtcclxuXHRcdFx0XHRpZiAobW9kZSA9PT0gJ2ZhZGUnKSB7XHJcblx0XHRcdFx0XHRzdHlsZXMub3BhY2l0eSA9IHRoaXMuYW5pbWF0aW9uVHlwZSh0eXBlKVttb2RlXVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRzdHlsZXMudHJhbnNmb3JtICs9IHRoaXMuYW5pbWF0aW9uVHlwZSh0eXBlKVttb2RlXSArICcgJ1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAodHlwZW9mIHRoaXMubW9kZUNsYXNzID09PSAnc3RyaW5nJykge1xyXG5cdFx0XHRcdGJ1aWxkU3R5bGUodHlwZSwgdGhpcy5tb2RlQ2xhc3MpXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5tb2RlQ2xhc3MuZm9yRWFjaChtb2RlID0+IHtcclxuXHRcdFx0XHRcdGJ1aWxkU3R5bGUodHlwZSwgbW9kZSlcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBzdHlsZXNcclxuXHRcdH0sXHJcblx0XHQvLyDlpITnkIblhoXnva7nu4TlkIjliqjnlLtcclxuXHRcdHRyYW5mcm9tSW5pdCh0eXBlKSB7XHJcblx0XHRcdGxldCBidWlsZFRyYW5mcm9tID0gKHR5cGUsIG1vZGUpID0+IHtcclxuXHRcdFx0XHRsZXQgYW5pTnVtID0gbnVsbFxyXG5cdFx0XHRcdGlmIChtb2RlID09PSAnZmFkZScpIHtcclxuXHRcdFx0XHRcdGFuaU51bSA9IHR5cGUgPyAwIDogMVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRhbmlOdW0gPSB0eXBlID8gJy0xMDAlJyA6ICcwJ1xyXG5cdFx0XHRcdFx0aWYgKG1vZGUgPT09ICd6b29tLWluJykge1xyXG5cdFx0XHRcdFx0XHRhbmlOdW0gPSB0eXBlID8gMC44IDogMVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYgKG1vZGUgPT09ICd6b29tLW91dCcpIHtcclxuXHRcdFx0XHRcdFx0YW5pTnVtID0gdHlwZSA/IDEuMiA6IDFcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmIChtb2RlID09PSAnc2xpZGUtcmlnaHQnKSB7XHJcblx0XHRcdFx0XHRcdGFuaU51bSA9IHR5cGUgPyAnMTAwJScgOiAnMCdcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmIChtb2RlID09PSAnc2xpZGUtYm90dG9tJykge1xyXG5cdFx0XHRcdFx0XHRhbmlOdW0gPSB0eXBlID8gJzEwMCUnIDogJzAnXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMuYW5pbWF0aW9uW3RoaXMuYW5pbWF0aW9uTW9kZSgpW21vZGVdXShhbmlOdW0pXHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHR5cGVvZiB0aGlzLm1vZGVDbGFzcyA9PT0gJ3N0cmluZycpIHtcclxuXHRcdFx0XHRidWlsZFRyYW5mcm9tKHR5cGUsIHRoaXMubW9kZUNsYXNzKVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMubW9kZUNsYXNzLmZvckVhY2gobW9kZSA9PiB7XHJcblx0XHRcdFx0XHRidWlsZFRyYW5mcm9tKHR5cGUsIG1vZGUpXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXMuYW5pbWF0aW9uXHJcblx0XHR9LFxyXG5cdFx0YW5pbWF0aW9uVHlwZSh0eXBlKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0ZmFkZTogdHlwZSA/IDEgOiAwLFxyXG5cdFx0XHRcdCdzbGlkZS10b3AnOiBgdHJhbnNsYXRlWSgke3R5cGUgPyAnMCcgOiAnLTEwMCUnfSlgLFxyXG5cdFx0XHRcdCdzbGlkZS1yaWdodCc6IGB0cmFuc2xhdGVYKCR7dHlwZSA/ICcwJyA6ICcxMDAlJ30pYCxcclxuXHRcdFx0XHQnc2xpZGUtYm90dG9tJzogYHRyYW5zbGF0ZVkoJHt0eXBlID8gJzAnIDogJzEwMCUnfSlgLFxyXG5cdFx0XHRcdCdzbGlkZS1sZWZ0JzogYHRyYW5zbGF0ZVgoJHt0eXBlID8gJzAnIDogJy0xMDAlJ30pYCxcclxuXHRcdFx0XHQnem9vbS1pbic6IGBzY2FsZVgoJHt0eXBlID8gMSA6IDAuOH0pIHNjYWxlWSgke3R5cGUgPyAxIDogMC44fSlgLFxyXG5cdFx0XHRcdCd6b29tLW91dCc6IGBzY2FsZVgoJHt0eXBlID8gMSA6IDEuMn0pIHNjYWxlWSgke3R5cGUgPyAxIDogMS4yfSlgXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHQvLyDlhoXnva7liqjnlLvnsbvlnovkuI7lrp7pmYXliqjnlLvlr7nlupTlrZflhbhcclxuXHRcdGFuaW1hdGlvbk1vZGUoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0ZmFkZTogJ29wYWNpdHknLFxyXG5cdFx0XHRcdCdzbGlkZS10b3AnOiAndHJhbnNsYXRlWScsXHJcblx0XHRcdFx0J3NsaWRlLXJpZ2h0JzogJ3RyYW5zbGF0ZVgnLFxyXG5cdFx0XHRcdCdzbGlkZS1ib3R0b20nOiAndHJhbnNsYXRlWScsXHJcblx0XHRcdFx0J3NsaWRlLWxlZnQnOiAndHJhbnNsYXRlWCcsXHJcblx0XHRcdFx0J3pvb20taW4nOiAnc2NhbGUnLFxyXG5cdFx0XHRcdCd6b29tLW91dCc6ICdzY2FsZSdcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdC8vIOmpvOWzsOi9rOS4reaoque6v1xyXG5cdFx0dG9MaW5lKG5hbWUpIHtcclxuXHRcdFx0cmV0dXJuIG5hbWUucmVwbGFjZSgvKFtBLVpdKS9nLCAnLSQxJykudG9Mb3dlckNhc2UoKVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///24\n");

/***/ }),
/* 25 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.log = log;exports.default = formatLog;function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}

function isDebugMode() {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__;
}

function jsonStringifyReplacer(k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }';
    default:
      return p;}

}

function log(type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  console[type].apply(console, args);
}

function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var type = args.shift();
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'));
    return console[type].apply(console, args);
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase();

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---';
      } catch (e) {
        v = type;
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }

    return v;
  });
  var msg = '';

  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }

  console[type](msg);
}

/***/ }),
/* 26 */
/*!******************************************************************************************************************************!*\
  !*** D:/WebStudyProject/uniapp-project/meeting-demo/uni_modules/uni-transition/components/uni-transition/createAnimation.js ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.createAnimation = createAnimation;function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError(\"Cannot call a class as a function\");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if (\"value\" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;} // const defaultOption = {\n// \tduration: 300,\n// \ttimingFunction: 'linear',\n// \tdelay: 0,\n// \ttransformOrigin: '50% 50% 0'\n// }\n\nvar nvueAnimation = __webpack_provided_uni_dot_requireNativePlugin('animation');var\n\nMPAnimation = /*#__PURE__*/function () {\n  function MPAnimation(options, _this) {_classCallCheck(this, MPAnimation);\n    this.options = options;\n    this.animation = uni.createAnimation(options);\n    this.currentStepAnimates = {};\n    this.next = 0;\n    this.$ = _this;\n\n  }_createClass(MPAnimation, [{ key: \"_nvuePushAnimates\", value: function _nvuePushAnimates(\n\n    type, args) {\n      var aniObj = this.currentStepAnimates[this.next];\n      var styles = {};\n      if (!aniObj) {\n        styles = {\n          styles: {},\n          config: {} };\n\n      } else {\n        styles = aniObj;\n      }\n      if (animateTypes1.includes(type)) {\n        if (!styles.styles.transform) {\n          styles.styles.transform = '';\n        }\n        var unit = '';\n        if (type === 'rotate') {\n          unit = 'deg';\n        }\n        styles.styles.transform += \"\".concat(type, \"(\").concat(args + unit, \") \");\n      } else {\n        styles.styles[type] = \"\".concat(args);\n      }\n      this.currentStepAnimates[this.next] = styles;\n    } }, { key: \"_animateRun\", value: function _animateRun()\n    {var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n      var ref = this.$.$refs['ani'].ref;\n      if (!ref) return;\n      return new Promise(function (resolve, reject) {\n        nvueAnimation.transition(ref, _objectSpread({\n          styles: styles },\n        config),\n        function (res) {\n          resolve();\n        });\n      });\n    } }, { key: \"_nvueNextAnimate\", value: function _nvueNextAnimate(\n\n    animates) {var _this2 = this;var step = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;var fn = arguments.length > 2 ? arguments[2] : undefined;\n      var obj = animates[step];\n      if (obj) {var\n\n        styles =\n\n        obj.styles,config = obj.config;\n        this._animateRun(styles, config).then(function () {\n          step += 1;\n          _this2._nvueNextAnimate(animates, step, fn);\n        });\n      } else {\n        this.currentStepAnimates = {};\n        typeof fn === 'function' && fn();\n        this.isEnd = true;\n      }\n    } }, { key: \"step\", value: function step()\n\n    {var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n\n\n\n      this.currentStepAnimates[this.next].config = Object.assign({}, this.options, config);\n      this.currentStepAnimates[this.next].styles.transformOrigin = this.currentStepAnimates[this.next].config.transformOrigin;\n      this.next++;\n\n      return this;\n    } }, { key: \"run\", value: function run(\n\n    fn) {\n\n\n\n\n\n\n\n      this.isEnd = false;\n      var ref = this.$.$refs['ani'] && this.$.$refs['ani'].ref;\n      if (!ref) return;\n      this._nvueNextAnimate(this.currentStepAnimates, 0, fn);\n      this.next = 0;\n\n    } }]);return MPAnimation;}();\n\n\n\nvar animateTypes1 = ['matrix', 'matrix3d', 'rotate', 'rotate3d', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scale3d',\n'scaleX', 'scaleY', 'scaleZ', 'skew', 'skewX', 'skewY', 'translate', 'translate3d', 'translateX', 'translateY',\n'translateZ'];\n\nvar animateTypes2 = ['opacity', 'backgroundColor'];\nvar animateTypes3 = ['width', 'height', 'left', 'right', 'top', 'bottom'];\nanimateTypes1.concat(animateTypes2, animateTypes3).forEach(function (type) {\n  MPAnimation.prototype[type] = function () {for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}\n\n\n\n\n    this._nvuePushAnimates(type, args);\n\n    return this;\n  };\n});\n\nfunction createAnimation(option, _this) {\n  if (!_this) return;\n  clearTimeout(_this.timer);\n  return new MPAnimation(option, _this);\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 27)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdW5pLXRyYW5zaXRpb24vY29tcG9uZW50cy91bmktdHJhbnNpdGlvbi9jcmVhdGVBbmltYXRpb24uanMiXSwibmFtZXMiOlsibnZ1ZUFuaW1hdGlvbiIsInVuaSIsIk1QQW5pbWF0aW9uIiwib3B0aW9ucyIsIl90aGlzIiwiYW5pbWF0aW9uIiwiY3JlYXRlQW5pbWF0aW9uIiwiY3VycmVudFN0ZXBBbmltYXRlcyIsIm5leHQiLCIkIiwidHlwZSIsImFyZ3MiLCJhbmlPYmoiLCJzdHlsZXMiLCJjb25maWciLCJhbmltYXRlVHlwZXMxIiwiaW5jbHVkZXMiLCJ0cmFuc2Zvcm0iLCJ1bml0IiwicmVmIiwiJHJlZnMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInRyYW5zaXRpb24iLCJyZXMiLCJhbmltYXRlcyIsInN0ZXAiLCJmbiIsIm9iaiIsIl9hbmltYXRlUnVuIiwidGhlbiIsIl9udnVlTmV4dEFuaW1hdGUiLCJpc0VuZCIsIk9iamVjdCIsImFzc2lnbiIsInRyYW5zZm9ybU9yaWdpbiIsImFuaW1hdGVUeXBlczIiLCJhbmltYXRlVHlwZXMzIiwiY29uY2F0IiwiZm9yRWFjaCIsInByb3RvdHlwZSIsIl9udnVlUHVzaEFuaW1hdGVzIiwib3B0aW9uIiwiY2xlYXJUaW1lb3V0IiwidGltZXIiXSwibWFwcGluZ3MiOiJ1M0RBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGFBQWEsR0FBR0MsOENBQUEsQ0FBd0IsV0FBeEIsQ0FBdEIsQzs7QUFFTUMsVztBQUNMLHVCQUFZQyxPQUFaLEVBQXFCQyxLQUFyQixFQUE0QjtBQUMzQixTQUFLRCxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLRSxTQUFMLEdBQWlCSixHQUFHLENBQUNLLGVBQUosQ0FBb0JILE9BQXBCLENBQWpCO0FBQ0EsU0FBS0ksbUJBQUwsR0FBMkIsRUFBM0I7QUFDQSxTQUFLQyxJQUFMLEdBQVksQ0FBWjtBQUNBLFNB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LENBQXVCaEMsSUFBdkIsRUFBNkJDLElBQTdCOztBQUVBLFdBQU8sSUFBUDtBQUNBLEdBUkQ7QUFTQSxDQVZEOztBQVlPLFNBQVNMLGVBQVQsQ0FBeUJxQyxNQUF6QixFQUFpQ3ZDLEtBQWpDLEVBQXdDO0FBQzlDLE1BQUcsQ0FBQ0EsS0FBSixFQUFXO0FBQ1h3QyxjQUFZLENBQUN4QyxLQUFLLENBQUN5QyxLQUFQLENBQVo7QUFDQSxTQUFPLElBQUkzQyxXQUFKLENBQWdCeUMsTUFBaEIsRUFBd0J2QyxLQUF4QixDQUFQO0FBQ0EsQyIsImZpbGUiOiIyNi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnN0IGRlZmF1bHRPcHRpb24gPSB7XHJcbi8vIFx0ZHVyYXRpb246IDMwMCxcclxuLy8gXHR0aW1pbmdGdW5jdGlvbjogJ2xpbmVhcicsXHJcbi8vIFx0ZGVsYXk6IDAsXHJcbi8vIFx0dHJhbnNmb3JtT3JpZ2luOiAnNTAlIDUwJSAwJ1xyXG4vLyB9XHJcblxyXG5jb25zdCBudnVlQW5pbWF0aW9uID0gdW5pLnJlcXVpcmVOYXRpdmVQbHVnaW4oJ2FuaW1hdGlvbicpXHJcblxyXG5jbGFzcyBNUEFuaW1hdGlvbiB7XHJcblx0Y29uc3RydWN0b3Iob3B0aW9ucywgX3RoaXMpIHtcclxuXHRcdHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcclxuXHRcdHRoaXMuYW5pbWF0aW9uID0gdW5pLmNyZWF0ZUFuaW1hdGlvbihvcHRpb25zKVxyXG5cdFx0dGhpcy5jdXJyZW50U3RlcEFuaW1hdGVzID0ge31cclxuXHRcdHRoaXMubmV4dCA9IDBcclxuXHRcdHRoaXMuJCA9IF90aGlzXHJcblxyXG5cdH1cclxuXHJcblx0X252dWVQdXNoQW5pbWF0ZXModHlwZSwgYXJncykge1xyXG5cdFx0bGV0IGFuaU9iaiA9IHRoaXMuY3VycmVudFN0ZXBBbmltYXRlc1t0aGlzLm5leHRdXHJcblx0XHRsZXQgc3R5bGVzID0ge31cclxuXHRcdGlmICghYW5pT2JqKSB7XHJcblx0XHRcdHN0eWxlcyA9IHtcclxuXHRcdFx0XHRzdHlsZXM6IHt9LFxyXG5cdFx0XHRcdGNvbmZpZzoge31cclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c3R5bGVzID0gYW5pT2JqXHJcblx0XHR9XHJcblx0XHRpZiAoYW5pbWF0ZVR5cGVzMS5pbmNsdWRlcyh0eXBlKSkge1xyXG5cdFx0XHRpZiAoIXN0eWxlcy5zdHlsZXMudHJhbnNmb3JtKSB7XHJcblx0XHRcdFx0c3R5bGVzLnN0eWxlcy50cmFuc2Zvcm0gPSAnJ1xyXG5cdFx0XHR9XHJcblx0XHRcdGxldCB1bml0ID0gJydcclxuXHRcdFx0aWYodHlwZSA9PT0gJ3JvdGF0ZScpe1xyXG5cdFx0XHRcdHVuaXQgPSAnZGVnJ1xyXG5cdFx0XHR9XHJcblx0XHRcdHN0eWxlcy5zdHlsZXMudHJhbnNmb3JtICs9IGAke3R5cGV9KCR7YXJncyt1bml0fSkgYFxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c3R5bGVzLnN0eWxlc1t0eXBlXSA9IGAke2FyZ3N9YFxyXG5cdFx0fVxyXG5cdFx0dGhpcy5jdXJyZW50U3RlcEFuaW1hdGVzW3RoaXMubmV4dF0gPSBzdHlsZXNcclxuXHR9XHJcblx0X2FuaW1hdGVSdW4oc3R5bGVzID0ge30sIGNvbmZpZyA9IHt9KSB7XHJcblx0XHRsZXQgcmVmID0gdGhpcy4kLiRyZWZzWydhbmknXS5yZWZcclxuXHRcdGlmICghcmVmKSByZXR1cm5cclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRcdG52dWVBbmltYXRpb24udHJhbnNpdGlvbihyZWYsIHtcclxuXHRcdFx0XHRzdHlsZXMsXHJcblx0XHRcdFx0Li4uY29uZmlnXHJcblx0XHRcdH0sIHJlcyA9PiB7XHJcblx0XHRcdFx0cmVzb2x2ZSgpXHJcblx0XHRcdH0pXHJcblx0XHR9KVxyXG5cdH1cclxuXHJcblx0X252dWVOZXh0QW5pbWF0ZShhbmltYXRlcywgc3RlcCA9IDAsIGZuKSB7XHJcblx0XHRsZXQgb2JqID0gYW5pbWF0ZXNbc3RlcF1cclxuXHRcdGlmIChvYmopIHtcclxuXHRcdFx0bGV0IHtcclxuXHRcdFx0XHRzdHlsZXMsXHJcblx0XHRcdFx0Y29uZmlnXHJcblx0XHRcdH0gPSBvYmpcclxuXHRcdFx0dGhpcy5fYW5pbWF0ZVJ1bihzdHlsZXMsIGNvbmZpZykudGhlbigoKSA9PiB7XHJcblx0XHRcdFx0c3RlcCArPSAxXHJcblx0XHRcdFx0dGhpcy5fbnZ1ZU5leHRBbmltYXRlKGFuaW1hdGVzLCBzdGVwLCBmbilcclxuXHRcdFx0fSlcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuY3VycmVudFN0ZXBBbmltYXRlcyA9IHt9XHJcblx0XHRcdHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJyAmJiBmbigpXHJcblx0XHRcdHRoaXMuaXNFbmQgPSB0cnVlXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRzdGVwKGNvbmZpZyA9IHt9KSB7XHJcblxyXG5cclxuXHJcblxyXG5cdFx0dGhpcy5jdXJyZW50U3RlcEFuaW1hdGVzW3RoaXMubmV4dF0uY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5vcHRpb25zLCBjb25maWcpXHJcblx0XHR0aGlzLmN1cnJlbnRTdGVwQW5pbWF0ZXNbdGhpcy5uZXh0XS5zdHlsZXMudHJhbnNmb3JtT3JpZ2luID0gdGhpcy5jdXJyZW50U3RlcEFuaW1hdGVzW3RoaXMubmV4dF0uY29uZmlnLnRyYW5zZm9ybU9yaWdpblxyXG5cdFx0dGhpcy5uZXh0KytcclxuXHJcblx0XHRyZXR1cm4gdGhpc1xyXG5cdH1cclxuXHJcblx0cnVuKGZuKSB7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cdFx0dGhpcy5pc0VuZCA9IGZhbHNlXHJcblx0XHRsZXQgcmVmID0gdGhpcy4kLiRyZWZzWydhbmknXSAmJiB0aGlzLiQuJHJlZnNbJ2FuaSddLnJlZlxyXG5cdFx0aWYoIXJlZikgcmV0dXJuXHJcblx0XHR0aGlzLl9udnVlTmV4dEFuaW1hdGUodGhpcy5jdXJyZW50U3RlcEFuaW1hdGVzLCAwLCBmbilcclxuXHRcdHRoaXMubmV4dCA9IDBcclxuXHJcblx0fVxyXG59XHJcblxyXG5cclxuY29uc3QgYW5pbWF0ZVR5cGVzMSA9IFsnbWF0cml4JywgJ21hdHJpeDNkJywgJ3JvdGF0ZScsICdyb3RhdGUzZCcsICdyb3RhdGVYJywgJ3JvdGF0ZVknLCAncm90YXRlWicsICdzY2FsZScsICdzY2FsZTNkJyxcclxuXHQnc2NhbGVYJywgJ3NjYWxlWScsICdzY2FsZVonLCAnc2tldycsICdza2V3WCcsICdza2V3WScsICd0cmFuc2xhdGUnLCAndHJhbnNsYXRlM2QnLCAndHJhbnNsYXRlWCcsICd0cmFuc2xhdGVZJyxcclxuXHQndHJhbnNsYXRlWidcclxuXVxyXG5jb25zdCBhbmltYXRlVHlwZXMyID0gWydvcGFjaXR5JywgJ2JhY2tncm91bmRDb2xvciddXHJcbmNvbnN0IGFuaW1hdGVUeXBlczMgPSBbJ3dpZHRoJywgJ2hlaWdodCcsICdsZWZ0JywgJ3JpZ2h0JywgJ3RvcCcsICdib3R0b20nXVxyXG5hbmltYXRlVHlwZXMxLmNvbmNhdChhbmltYXRlVHlwZXMyLCBhbmltYXRlVHlwZXMzKS5mb3JFYWNoKHR5cGUgPT4ge1xyXG5cdE1QQW5pbWF0aW9uLnByb3RvdHlwZVt0eXBlXSA9IGZ1bmN0aW9uKC4uLmFyZ3MpIHtcclxuXHJcblxyXG5cclxuXHJcblx0XHR0aGlzLl9udnVlUHVzaEFuaW1hdGVzKHR5cGUsIGFyZ3MpXHJcblxyXG5cdFx0cmV0dXJuIHRoaXNcclxuXHR9XHJcbn0pXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQW5pbWF0aW9uKG9wdGlvbiwgX3RoaXMpIHtcclxuXHRpZighX3RoaXMpIHJldHVyblxyXG5cdGNsZWFyVGltZW91dChfdGhpcy50aW1lcilcclxuXHRyZXR1cm4gbmV3IE1QQW5pbWF0aW9uKG9wdGlvbiwgX3RoaXMpXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///26\n");

/***/ }),
/* 27 */
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = requireNativePlugin;function requireNativePlugin(name) {
  return weex.requireModule(name);
}

/***/ }),
/* 28 */
/*!****************************************************************************************************************************************!*\
  !*** D:/WebStudyProject/uniapp-project/meeting-demo/uni_modules/uni-popup/components/uni-popup/uni-popup.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--5-0!../../../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!../../../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-popup.vue?vue&type=script&lang=js& */ 29);\n/* harmony import */ var _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXdkLENBQWdCLGtlQUFHLEVBQUMiLCJmaWxlIjoiMjguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3d6IEFwcC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi93eiBBcHAvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi93eiBBcHAvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLXBvcHVwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi93eiBBcHAvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vd3ogQXBwL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vd3ogQXBwL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VuaS1wb3B1cC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///28\n");

/***/ }),
/* 29 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/WebStudyProject/uniapp-project/meeting-demo/uni_modules/uni-popup/components/uni-popup/uni-popup.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n/**\n * PopUp 弹出层\n * @description 弹出层组件，为了解决遮罩弹层的问题\n * @tutorial https://ext.dcloud.net.cn/plugin?id=329\n * @property {String} type = [top|center|bottom|left|right|message|dialog|share] 弹出方式\n * \t@value top 顶部弹出\n * \t@value center 中间弹出\n * \t@value bottom 底部弹出\n * \t@value left\t\t左侧弹出\n * \t@value right  右侧弹出\n * \t@value message 消息提示\n * \t@value dialog 对话框\n * \t@value share 底部分享示例\n * @property {Boolean} animation = [true|false] 是否开启动画\n * @property {Boolean} maskClick = [true|false] 蒙版点击是否关闭弹窗(废弃)\n * @property {Boolean} isMaskClick = [true|false] 蒙版点击是否关闭弹窗\n * @property {String}  backgroundColor 主窗口背景色\n * @property {String}  maskBackgroundColor 蒙版颜色\n * @property {Boolean} safeArea\t\t   是否适配底部安全区\n * @event {Function} change 打开关闭弹窗触发，e={show: false}\n * @event {Function} maskClick 点击遮罩触发\n */var _default =\n\n{\n  name: 'uniPopup',\n  components: {},\n\n\n\n\n  emits: ['change', 'maskClick'],\n  props: {\n    // 开启动画\n    animation: {\n      type: Boolean,\n      default: true },\n\n    // 弹出层类型，可选值，top: 顶部弹出层；bottom：底部弹出层；center：全屏弹出层\n    // message: 消息提示 ; dialog : 对话框\n    type: {\n      type: String,\n      default: 'center' },\n\n    // maskClick\n    isMaskClick: {\n      type: Boolean,\n      default: null },\n\n    // TODO 2 个版本后废弃属性 ，使用 isMaskClick\n    maskClick: {\n      type: Boolean,\n      default: null },\n\n    backgroundColor: {\n      type: String,\n      default: 'none' },\n\n    safeArea: {\n      type: Boolean,\n      default: true },\n\n    maskBackgroundColor: {\n      type: String,\n      default: 'rgba(0, 0, 0, 0.4)' } },\n\n\n\n  watch: {\n    /**\n            * 监听type类型\n            */\n    type: {\n      handler: function handler(type) {\n        if (!this.config[type]) return;\n        this[this.config[type]](true);\n      },\n      immediate: true },\n\n    isDesktop: {\n      handler: function handler(newVal) {\n        if (!this.config[newVal]) return;\n        this[this.config[this.type]](true);\n      },\n      immediate: true },\n\n    /**\n                          * 监听遮罩是否可点击\n                          * @param {Object} val\n                          */\n    maskClick: {\n      handler: function handler(val) {\n        this.mkclick = val;\n      },\n      immediate: true },\n\n    isMaskClick: {\n      handler: function handler(val) {\n        this.mkclick = val;\n      },\n      immediate: true },\n\n    // H5 下禁止底部滚动\n    showPopup: function showPopup(show) {\n\n\n\n\n    } },\n\n  data: function data() {\n    return {\n      duration: 300,\n      ani: [],\n      showPopup: false,\n      showTrans: false,\n      popupWidth: 0,\n      popupHeight: 0,\n      config: {\n        top: 'top',\n        bottom: 'bottom',\n        center: 'center',\n        left: 'left',\n        right: 'right',\n        message: 'top',\n        dialog: 'center',\n        share: 'bottom' },\n\n      maskClass: {\n        position: 'fixed',\n        bottom: 0,\n        top: 0,\n        left: 0,\n        right: 0,\n        backgroundColor: 'rgba(0, 0, 0, 0.4)' },\n\n      transClass: {\n        position: 'fixed',\n        left: 0,\n        right: 0 },\n\n      maskShow: true,\n      mkclick: true,\n      popupstyle: this.isDesktop ? 'fixforpc-top' : 'top' };\n\n  },\n  computed: {\n    isDesktop: function isDesktop() {\n      return this.popupWidth >= 500 && this.popupHeight >= 500;\n    },\n    bg: function bg() {\n      if (this.backgroundColor === '' || this.backgroundColor === 'none') {\n        return 'transparent';\n      }\n      return this.backgroundColor;\n    } },\n\n  mounted: function mounted() {var _this = this;\n    var fixSize = function fixSize() {var _uni$getSystemInfoSyn =\n\n\n\n\n\n\n\n      uni.getSystemInfoSync(),windowWidth = _uni$getSystemInfoSyn.windowWidth,windowHeight = _uni$getSystemInfoSyn.windowHeight,windowTop = _uni$getSystemInfoSyn.windowTop,safeArea = _uni$getSystemInfoSyn.safeArea,screenHeight = _uni$getSystemInfoSyn.screenHeight,safeAreaInsets = _uni$getSystemInfoSyn.safeAreaInsets;\n      _this.popupWidth = windowWidth;\n      _this.popupHeight = windowHeight + (windowTop || 0);\n      // TODO fix by mehaotian 是否适配底部安全区 ,目前微信ios 、和 app ios 计算有差异，需要框架修复\n      if (safeArea && _this.safeArea) {\n\n\n\n\n        _this.safeAreaInsets = safeAreaInsets.bottom;\n\n      } else {\n        _this.safeAreaInsets = 0;\n      }\n    };\n    fixSize();\n\n\n\n\n\n\n  },\n\n  // TODO vue2\n  destroyed: function destroyed() {\n    this.setH5Visible();\n  },\n\n\n\n\n\n\n\n  created: function created() {\n    // this.mkclick =  this.isMaskClick || this.maskClick\n    if (this.isMaskClick === null && this.maskClick === null) {\n      this.mkclick = true;\n    } else {\n      this.mkclick = this.isMaskClick !== null ? this.isMaskClick : this.maskClick;\n    }\n    if (this.animation) {\n      this.duration = 300;\n    } else {\n      this.duration = 0;\n    }\n    // TODO 处理 message 组件生命周期异常的问题\n    this.messageChild = null;\n    // TODO 解决头条冒泡的问题\n    this.clearPropagation = false;\n    this.maskClass.backgroundColor = this.maskBackgroundColor;\n  },\n  methods: {\n    setH5Visible: function setH5Visible() {\n\n\n\n\n    },\n    /**\n        * 公用方法，不显示遮罩层\n        */\n    closeMask: function closeMask() {\n      this.maskShow = false;\n    },\n    /**\n        * 公用方法，遮罩层禁止点击\n        */\n    disableMask: function disableMask() {\n      this.mkclick = false;\n    },\n    // TODO nvue 取消冒泡\n    clear: function clear(e) {\n\n\n\n      this.clearPropagation = true;\n    },\n\n    open: function open(direction) {\n      // fix by mehaotian 处理快速打开关闭的情况\n      if (this.showPopup) {\n        clearTimeout(this.timer);\n        this.showPopup = false;\n      }\n      var innerType = ['top', 'center', 'bottom', 'left', 'right', 'message', 'dialog', 'share'];\n      if (!(direction && innerType.indexOf(direction) !== -1)) {\n        direction = this.type;\n      }\n      if (!this.config[direction]) {\n        __f__(\"error\", '缺少类型：', direction, \" at uni_modules/uni-popup/components/uni-popup/uni-popup.vue:280\");\n        return;\n      }\n      this[this.config[direction]]();\n      this.$emit('change', {\n        show: true,\n        type: direction });\n\n    },\n    close: function close(type) {var _this2 = this;\n      this.showTrans = false;\n      this.$emit('change', {\n        show: false,\n        type: this.type });\n\n      clearTimeout(this.timer);\n      // // 自定义关闭事件\n      // this.customOpen && this.customClose()\n      this.timer = setTimeout(function () {\n        _this2.showPopup = false;\n      }, 300);\n    },\n    // TODO 处理冒泡事件，头条的冒泡事件有问题 ，先这样兼容\n    touchstart: function touchstart() {\n      this.clearPropagation = false;\n    },\n\n    onTap: function onTap() {\n      if (this.clearPropagation) {\n        // fix by mehaotian 兼容 nvue\n        this.clearPropagation = false;\n        return;\n      }\n      this.$emit('maskClick');\n      if (!this.mkclick) return;\n      this.close();\n    },\n    /**\n        * 顶部弹出样式处理\n        */\n    top: function top(type) {var _this3 = this;\n      this.popupstyle = this.isDesktop ? 'fixforpc-top' : 'top';\n      this.ani = ['slide-top'];\n      this.transClass = {\n        position: 'fixed',\n        left: 0,\n        right: 0,\n        backgroundColor: this.bg };\n\n      // TODO 兼容 type 属性 ，后续会废弃\n      if (type) return;\n      this.showPopup = true;\n      this.showTrans = true;\n      this.$nextTick(function () {\n        if (_this3.messageChild && _this3.type === 'message') {\n          _this3.messageChild.timerClose();\n        }\n      });\n    },\n    /**\n        * 底部弹出样式处理\n        */\n    bottom: function bottom(type) {\n      this.popupstyle = 'bottom';\n      this.ani = ['slide-bottom'];\n      this.transClass = {\n        position: 'fixed',\n        left: 0,\n        right: 0,\n        bottom: 0,\n        paddingBottom: this.safeAreaInsets + 'px',\n        backgroundColor: this.bg };\n\n      // TODO 兼容 type 属性 ，后续会废弃\n      if (type) return;\n      this.showPopup = true;\n      this.showTrans = true;\n    },\n    /**\n        * 中间弹出样式处理\n        */\n    center: function center(type) {\n      this.popupstyle = 'center';\n      this.ani = ['zoom-out', 'fade'];\n      this.transClass = {\n        position: 'fixed',\n\n\n\n\n        bottom: 0,\n        left: 0,\n        right: 0,\n        top: 0,\n        justifyContent: 'center',\n        alignItems: 'center' };\n\n      // TODO 兼容 type 属性 ，后续会废弃\n      if (type) return;\n      this.showPopup = true;\n      this.showTrans = true;\n    },\n    left: function left(type) {\n      this.popupstyle = 'left';\n      this.ani = ['slide-left'];\n      this.transClass = {\n        position: 'fixed',\n        left: 0,\n        bottom: 0,\n        top: 0,\n        backgroundColor: this.bg };\n\n\n\n\n\n      // TODO 兼容 type 属性 ，后续会废弃\n      if (type) return;\n      this.showPopup = true;\n      this.showTrans = true;\n    },\n    right: function right(type) {\n      this.popupstyle = 'right';\n      this.ani = ['slide-right'];\n      this.transClass = {\n        position: 'fixed',\n        bottom: 0,\n        right: 0,\n        top: 0,\n        backgroundColor: this.bg };\n\n\n\n\n\n      // TODO 兼容 type 属性 ，后续会废弃\n      if (type) return;\n      this.showPopup = true;\n      this.showTrans = true;\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 25)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdW5pLXBvcHVwL2NvbXBvbmVudHMvdW5pLXBvcHVwL3VuaS1wb3B1cC52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJBO0FBQ0Esa0JBREE7QUFFQSxnQkFGQTs7Ozs7QUFPQSxnQ0FQQTtBQVFBO0FBQ0E7QUFDQTtBQUNBLG1CQURBO0FBRUEsbUJBRkEsRUFGQTs7QUFNQTtBQUNBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBLHVCQUZBLEVBUkE7O0FBWUE7QUFDQTtBQUNBLG1CQURBO0FBRUEsbUJBRkEsRUFiQTs7QUFpQkE7QUFDQTtBQUNBLG1CQURBO0FBRUEsbUJBRkEsRUFsQkE7O0FBc0JBO0FBQ0Esa0JBREE7QUFFQSxxQkFGQSxFQXRCQTs7QUEwQkE7QUFDQSxtQkFEQTtBQUVBLG1CQUZBLEVBMUJBOztBQThCQTtBQUNBLGtCQURBO0FBRUEsbUNBRkEsRUE5QkEsRUFSQTs7OztBQTRDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSkE7QUFLQSxxQkFMQSxFQUpBOztBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FKQTtBQUtBLHFCQUxBLEVBWEE7O0FBa0JBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0EsT0FIQTtBQUlBLHFCQUpBLEVBdEJBOztBQTRCQTtBQUNBO0FBQ0E7QUFDQSxPQUhBO0FBSUEscUJBSkEsRUE1QkE7O0FBa0NBO0FBQ0EsYUFuQ0EscUJBbUNBLElBbkNBLEVBbUNBOzs7OztBQUtBLEtBeENBLEVBNUNBOztBQXNGQSxNQXRGQSxrQkFzRkE7QUFDQTtBQUNBLG1CQURBO0FBRUEsYUFGQTtBQUdBLHNCQUhBO0FBSUEsc0JBSkE7QUFLQSxtQkFMQTtBQU1BLG9CQU5BO0FBT0E7QUFDQSxrQkFEQTtBQUVBLHdCQUZBO0FBR0Esd0JBSEE7QUFJQSxvQkFKQTtBQUtBLHNCQUxBO0FB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LHlCQURBO0FBRUEsZUFGQTtBQUdBLGlCQUhBO0FBSUEsY0FKQTtBQUtBLGdDQUxBOzs7Ozs7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBOUpBO0FBK0pBLFNBL0pBLGlCQStKQSxJQS9KQSxFQStKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQURBO0FBRUEsaUJBRkE7QUFHQSxnQkFIQTtBQUlBLGNBSkE7QUFLQSxnQ0FMQTs7Ozs7O0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQWpMQSxFQW5NQSxFIiwiZmlsZSI6IjI5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IHYtaWY9XCJzaG93UG9wdXBcIiBjbGFzcz1cInVuaS1wb3B1cFwiIDpjbGFzcz1cIltwb3B1cHN0eWxlLCBpc0Rlc2t0b3AgPyAnZml4Zm9ycGMtei1pbmRleCcgOiAnJ11cIj5cclxuXHRcdDx2aWV3IEB0b3VjaHN0YXJ0PVwidG91Y2hzdGFydFwiPlxyXG5cdFx0XHQ8dW5pLXRyYW5zaXRpb24ga2V5PVwiMVwiIHYtaWY9XCJtYXNrU2hvd1wiIG5hbWU9XCJtYXNrXCIgbW9kZS1jbGFzcz1cImZhZGVcIiA6c3R5bGVzPVwibWFza0NsYXNzXCJcclxuXHRcdFx0XHQ6ZHVyYXRpb249XCJkdXJhdGlvblwiIDpzaG93PVwic2hvd1RyYW5zXCIgQGNsaWNrPVwib25UYXBcIiAvPlxyXG5cdFx0XHQ8dW5pLXRyYW5zaXRpb24ga2V5PVwiMlwiIDptb2RlLWNsYXNzPVwiYW5pXCIgbmFtZT1cImNvbnRlbnRcIiA6c3R5bGVzPVwidHJhbnNDbGFzc1wiIDpkdXJhdGlvbj1cImR1cmF0aW9uXCJcclxuXHRcdFx0XHQ6c2hvdz1cInNob3dUcmFuc1wiIEBjbGljaz1cIm9uVGFwXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1bmktcG9wdXBfX3dyYXBwZXJcIiA6c3R5bGU9XCJ7IGJhY2tncm91bmRDb2xvcjogYmcgfVwiIDpjbGFzcz1cIltwb3B1cHN0eWxlXVwiIEBjbGljaz1cImNsZWFyXCI+XHJcblx0XHRcdFx0XHQ8c2xvdCAvPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC91bmktdHJhbnNpdGlvbj5cclxuXHRcdDwvdmlldz5cclxuXHRcdDwhLS0gI2lmZGVmIEg1IC0tPlxyXG5cdFx0PGtleXByZXNzIHYtaWY9XCJtYXNrU2hvd1wiIEBlc2M9XCJvblRhcFwiIC8+XHJcblx0XHQ8IS0tICNlbmRpZiAtLT5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdC8vICNpZmRlZiBINVxyXG5cdGltcG9ydCBrZXlwcmVzcyBmcm9tICcuL2tleXByZXNzLmpzJ1xyXG5cdC8vICNlbmRpZlxyXG5cclxuXHQvKipcclxuXHQgKiBQb3BVcCDlvLnlh7rlsYJcclxuXHQgKiBAZGVzY3JpcHRpb24g5by55Ye65bGC57uE5Lu277yM5Li65LqG6Kej5Yaz6YGu572p5by55bGC55qE6Zeu6aKYXHJcblx0ICogQHR1dG9yaWFsIGh0dHBzOi8vZXh0LmRjbG91ZC5uZXQuY24vcGx1Z2luP2lkPTMyOVxyXG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nfSB0eXBlID0gW3RvcHxjZW50ZXJ8Ym90dG9tfGxlZnR8cmlnaHR8bWVzc2FnZXxkaWFsb2d8c2hhcmVdIOW8ueWHuuaWueW8j1xyXG5cdCAqIFx0QHZhbHVlIHRvcCDpobbpg6jlvLnlh7pcclxuXHQgKiBcdEB2YWx1ZSBjZW50ZXIg5Lit6Ze05by55Ye6XHJcblx0ICogXHRAdmFsdWUgYm90dG9tIOW6lemDqOW8ueWHulxyXG5cdCAqIFx0QHZhbHVlIGxlZnRcdFx05bem5L6n5by55Ye6XHJcblx0ICogXHRAdmFsdWUgcmlnaHQgIOWPs+S+p+W8ueWHulxyXG5cdCAqIFx0QHZhbHVlIG1lc3NhZ2Ug5raI5oGv5o+Q56S6XHJcblx0ICogXHRAdmFsdWUgZGlhbG9nIOWvueivneahhlxyXG5cdCAqIFx0QHZhbHVlIHNoYXJlIOW6lemDqOWIhuS6q+ekuuS+i1xyXG5cdCAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gYW5pbWF0aW9uID0gW3RydWV8ZmFsc2VdIOaYr+WQpuW8gOWQr+WKqOeUu1xyXG5cdCAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gbWFza0NsaWNrID0gW3RydWV8ZmFsc2VdIOiSmeeJiOeCueWHu+aYr+WQpuWFs+mXreW8ueeqlyjlup/lvIMpXHJcblx0ICogQHByb3BlcnR5IHtCb29sZWFufSBpc01hc2tDbGljayA9IFt0cnVlfGZhbHNlXSDokpnniYjngrnlh7vmmK/lkKblhbPpl63lvLnnqpdcclxuXHQgKiBAcHJvcGVydHkge1N0cmluZ30gIGJhY2tncm91bmRDb2xvciDkuLvnqpflj6Pog4zmma/oibJcclxuXHQgKiBAcHJvcGVydHkge1N0cmluZ30gIG1hc2tCYWNrZ3JvdW5kQ29sb3Ig6JKZ54mI6aKc6ImyXHJcblx0ICogQHByb3BlcnR5IHtCb29sZWFufSBzYWZlQXJlYVx0XHQgICDmmK/lkKbpgILphY3lupXpg6jlronlhajljLpcclxuXHQgKiBAZXZlbnQge0Z1bmN0aW9ufSBjaGFuZ2Ug5omT5byA5YWz6Zet5by556qX6Kem5Y+R77yMZT17c2hvdzogZmFsc2V9XHJcblx0ICogQGV2ZW50IHtGdW5jdGlvbn0gbWFza0NsaWNrIOeCueWHu+mBrue9qeinpuWPkVxyXG5cdCAqL1xyXG5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRuYW1lOiAndW5pUG9wdXAnLFxyXG5cdFx0Y29tcG9uZW50czoge1xyXG5cdFx0XHQvLyAjaWZkZWYgSDVcclxuXHRcdFx0a2V5cHJlc3NcclxuXHRcdFx0Ly8gI2VuZGlmXHJcblx0XHR9LFxyXG5cdFx0ZW1pdHM6IFsnY2hhbmdlJywgJ21hc2tDbGljayddLFxyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0Ly8g5byA5ZCv5Yqo55S7XHJcblx0XHRcdGFuaW1hdGlvbjoge1xyXG5cdFx0XHRcdHR5cGU6IEJvb2xlYW4sXHJcblx0XHRcdFx0ZGVmYXVsdDogdHJ1ZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDlvLnlh7rlsYLnsbvlnovvvIzlj6/pgInlgLzvvIx0b3A6IOmhtumDqOW8ueWHuuWxgu+8m2JvdHRvbe+8muW6lemDqOW8ueWHuuWxgu+8m2NlbnRlcu+8muWFqOWxj+W8ueWHuuWxglxyXG5cdFx0XHQvLyBtZXNzYWdlOiDmtojmga/mj5DnpLogOyBkaWFsb2cgOiDlr7nor53moYZcclxuXHRcdFx0dHlwZToge1xyXG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OiAnY2VudGVyJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyBtYXNrQ2xpY2tcclxuXHRcdFx0aXNNYXNrQ2xpY2s6IHtcclxuXHRcdFx0XHR0eXBlOiBCb29sZWFuLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IG51bGxcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8gVE9ETyAyIOS4queJiOacrOWQjuW6n+W8g+WxnuaApyDvvIzkvb/nlKggaXNNYXNrQ2xpY2tcclxuXHRcdFx0bWFza0NsaWNrOiB7XHJcblx0XHRcdFx0dHlwZTogQm9vbGVhbixcclxuXHRcdFx0XHRkZWZhdWx0OiBudWxsXHJcblx0XHRcdH0sXHJcblx0XHRcdGJhY2tncm91bmRDb2xvcjoge1xyXG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OiAnbm9uZSdcclxuXHRcdFx0fSxcclxuXHRcdFx0c2FmZUFyZWE6IHtcclxuXHRcdFx0XHR0eXBlOiBCb29sZWFuLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IHRydWVcclxuXHRcdFx0fSxcclxuXHRcdFx0bWFza0JhY2tncm91bmRDb2xvcjoge1xyXG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OiAncmdiYSgwLCAwLCAwLCAwLjQpJ1xyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHJcblx0XHR3YXRjaDoge1xyXG5cdFx0XHQvKipcclxuXHRcdFx0ICog55uR5ZCsdHlwZeexu+Wei1xyXG5cdFx0XHQgKi9cclxuXHRcdFx0dHlwZToge1xyXG5cdFx0XHRcdGhhbmRsZXI6IGZ1bmN0aW9uKHR5cGUpIHtcclxuXHRcdFx0XHRcdGlmICghdGhpcy5jb25maWdbdHlwZV0pIHJldHVyblxyXG5cdFx0XHRcdFx0dGhpc1t0aGlzLmNvbmZpZ1t0eXBlXV0odHJ1ZSlcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGltbWVkaWF0ZTogdHJ1ZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRpc0Rlc2t0b3A6IHtcclxuXHRcdFx0XHRoYW5kbGVyOiBmdW5jdGlvbihuZXdWYWwpIHtcclxuXHRcdFx0XHRcdGlmICghdGhpcy5jb25maWdbbmV3VmFsXSkgcmV0dXJuXHJcblx0XHRcdFx0XHR0aGlzW3RoaXMuY29uZmlnW3RoaXMudHlwZV1dKHRydWUpXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRpbW1lZGlhdGU6IHRydWVcclxuXHRcdFx0fSxcclxuXHRcdFx0LyoqXHJcblx0XHRcdCAqIOebkeWQrOmBrue9qeaYr+WQpuWPr+eCueWHu1xyXG5cdFx0XHQgKiBAcGFyYW0ge09iamVjdH0gdmFsXHJcblx0XHRcdCAqL1xyXG5cdFx0XHRtYXNrQ2xpY2s6IHtcclxuXHRcdFx0XHRoYW5kbGVyOiBmdW5jdGlvbih2YWwpIHtcclxuXHRcdFx0XHRcdHRoaXMubWtjbGljayA9IHZhbFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0aW1tZWRpYXRlOiB0cnVlXHJcblx0XHRcdH0sXHJcblx0XHRcdGlzTWFza0NsaWNrOiB7XHJcblx0XHRcdFx0aGFuZGxlcjogZnVuY3Rpb24odmFsKSB7XHJcblx0XHRcdFx0XHR0aGlzLm1rY2xpY2sgPSB2YWxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGltbWVkaWF0ZTogdHJ1ZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyBINSDkuIvnpoHmraLlupXpg6jmu5rliqhcclxuXHRcdFx0c2hvd1BvcHVwKHNob3cpIHtcclxuXHRcdFx0XHQvLyAjaWZkZWYgSDVcclxuXHRcdFx0XHQvLyBmaXggYnkgbWVoYW90aWFuIOWkhOeQhiBoNSDmu5rliqjnqb/pgI/nmoTpl67pophcclxuXHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLnN0eWxlLm92ZXJmbG93ID0gc2hvdyA/ICdoaWRkZW4nIDogJ3Zpc2libGUnXHJcblx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGR1cmF0aW9uOiAzMDAsXHJcblx0XHRcdFx0YW5pOiBbXSxcclxuXHRcdFx0XHRzaG93UG9wdXA6IGZhbHNlLFxyXG5cdFx0XHRcdHNob3dUcmFuczogZmFsc2UsXHJcblx0XHRcdFx0cG9wdXBXaWR0aDogMCxcclxuXHRcdFx0XHRwb3B1cEhlaWdodDogMCxcclxuXHRcdFx0XHRjb25maWc6IHtcclxuXHRcdFx0XHRcdHRvcDogJ3RvcCcsXHJcblx0XHRcdFx0XHRib3R0b206ICdib3R0b20nLFxyXG5cdFx0XHRcdFx0Y2VudGVyOiAnY2VudGVyJyxcclxuXHRcdFx0XHRcdGxlZnQ6ICdsZWZ0JyxcclxuXHRcdFx0XHRcdHJpZ2h0OiAncmlnaHQnLFxyXG5cdFx0XHRcdFx0bWVzc2FnZTogJ3RvcCcsXHJcblx0XHRcdFx0XHRkaWFsb2c6ICdjZW50ZXInLFxyXG5cdFx0XHRcdFx0c2hhcmU6ICdib3R0b20nXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRtYXNrQ2xhc3M6IHtcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiAnZml4ZWQnLFxyXG5cdFx0XHRcdFx0Ym90dG9tOiAwLFxyXG5cdFx0XHRcdFx0dG9wOiAwLFxyXG5cdFx0XHRcdFx0bGVmdDogMCxcclxuXHRcdFx0XHRcdHJpZ2h0OiAwLFxyXG5cdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjQpJ1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0dHJhbnNDbGFzczoge1xyXG5cdFx0XHRcdFx0cG9zaXRpb246ICdmaXhlZCcsXHJcblx0XHRcdFx0XHRsZWZ0OiAwLFxyXG5cdFx0XHRcdFx0cmlnaHQ6IDBcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdG1hc2tTaG93OiB0cnVlLFxyXG5cdFx0XHRcdG1rY2xpY2s6IHRydWUsXHJcblx0XHRcdFx0cG9wdXBzdHlsZTogdGhpcy5pc0Rlc2t0b3AgPyAnZml4Zm9ycGMtdG9wJyA6ICd0b3AnXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRjb21wdXRlZDoge1xyXG5cdFx0XHRpc0Rlc2t0b3AoKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMucG9wdXBXaWR0aCA+PSA1MDAgJiYgdGhpcy5wb3B1cEhlaWdodCA+PSA1MDBcclxuXHRcdFx0fSxcclxuXHRcdFx0YmcoKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMuYmFja2dyb3VuZENvbG9yID09PSAnJyB8fCB0aGlzLmJhY2tncm91bmRDb2xvciA9PT0gJ25vbmUnKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gJ3RyYW5zcGFyZW50J1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5iYWNrZ3JvdW5kQ29sb3JcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG1vdW50ZWQoKSB7XHJcblx0XHRcdGNvbnN0IGZpeFNpemUgPSAoKSA9PiB7XHJcblx0XHRcdFx0Y29uc3Qge1xyXG5cdFx0XHRcdFx0d2luZG93V2lkdGgsXHJcblx0XHRcdFx0XHR3aW5kb3dIZWlnaHQsXHJcblx0XHRcdFx0XHR3aW5kb3dUb3AsXHJcblx0XHRcdFx0XHRzYWZlQXJlYSxcclxuXHRcdFx0XHRcdHNjcmVlbkhlaWdodCxcclxuXHRcdFx0XHRcdHNhZmVBcmVhSW5zZXRzXHJcblx0XHRcdFx0fSA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpXHJcblx0XHRcdFx0dGhpcy5wb3B1cFdpZHRoID0gd2luZG93V2lkdGhcclxuXHRcdFx0XHR0aGlzLnBvcHVwSGVpZ2h0ID0gd2luZG93SGVpZ2h0ICsgKHdpbmRvd1RvcCB8fCAwKVxyXG5cdFx0XHRcdC8vIFRPRE8gZml4IGJ5IG1laGFvdGlhbiDmmK/lkKbpgILphY3lupXpg6jlronlhajljLogLOebruWJjeW+ruS/oWlvcyDjgIHlkowgYXBwIGlvcyDorqHnrpfmnInlt67lvILvvIzpnIDopoHmoYbmnrbkv67lpI1cclxuXHRcdFx0XHRpZiAoc2FmZUFyZWEgJiYgdGhpcy5zYWZlQXJlYSkge1xyXG5cdFx0XHRcdFx0Ly8gI2lmZGVmIE1QLVdFSVhJTlxyXG5cdFx0XHRcdFx0dGhpcy5zYWZlQXJlYUluc2V0cyA9IHNjcmVlbkhlaWdodCAtIHNhZmVBcmVhLmJvdHRvbVxyXG5cdFx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0XHQvLyAjaWZuZGVmIE1QLVdFSVhJTlxyXG5cdFx0XHRcdFx0dGhpcy5zYWZlQXJlYUluc2V0cyA9IHNhZmVBcmVhSW5zZXRzLmJvdHRvbVxyXG5cdFx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRoaXMuc2FmZUFyZWFJbnNldHMgPSAwXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGZpeFNpemUoKVxyXG5cdFx0XHQvLyAjaWZkZWYgSDVcclxuXHRcdFx0Ly8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZpeFNpemUpXHJcblx0XHRcdC8vIHRoaXMuJG9uY2UoJ2hvb2s6YmVmb3JlRGVzdHJveScsICgpID0+IHtcclxuXHRcdFx0Ly8gXHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZml4U2l6ZSlcclxuXHRcdFx0Ly8gfSlcclxuXHRcdFx0Ly8gI2VuZGlmXHJcblx0XHR9LFxyXG5cdFx0Ly8gI2lmbmRlZiBWVUUzXHJcblx0XHQvLyBUT0RPIHZ1ZTJcclxuXHRcdGRlc3Ryb3llZCgpIHtcclxuXHRcdFx0dGhpcy5zZXRINVZpc2libGUoKVxyXG5cdFx0fSxcclxuXHRcdC8vICNlbmRpZlxyXG5cdFx0Ly8gI2lmZGVmIFZVRTNcclxuXHRcdC8vIFRPRE8gdnVlM1xyXG5cdFx0dW5tb3VudGVkKCkge1xyXG5cdFx0XHR0aGlzLnNldEg1VmlzaWJsZSgpXHJcblx0XHR9LFxyXG5cdFx0Ly8gI2VuZGlmXHJcblx0XHRjcmVhdGVkKCkge1xyXG5cdFx0XHQvLyB0aGlzLm1rY2xpY2sgPSAgdGhpcy5pc01hc2tDbGljayB8fCB0aGlzLm1hc2tDbGlja1xyXG5cdFx0XHRpZiAodGhpcy5pc01hc2tDbGljayA9PT0gbnVsbCAmJiB0aGlzLm1hc2tDbGljayA9PT0gbnVsbCkge1xyXG5cdFx0XHRcdHRoaXMubWtjbGljayA9IHRydWVcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLm1rY2xpY2sgPSB0aGlzLmlzTWFza0NsaWNrICE9PSBudWxsID8gdGhpcy5pc01hc2tDbGljayA6IHRoaXMubWFza0NsaWNrXHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHRoaXMuYW5pbWF0aW9uKSB7XHJcblx0XHRcdFx0dGhpcy5kdXJhdGlvbiA9IDMwMFxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuZHVyYXRpb24gPSAwXHJcblx0XHRcdH1cclxuXHRcdFx0Ly8gVE9ETyDlpITnkIYgbWVzc2FnZSDnu4Tku7bnlJ/lkb3lkajmnJ/lvILluLjnmoTpl67pophcclxuXHRcdFx0dGhpcy5tZXNzYWdlQ2hpbGQgPSBudWxsXHJcblx0XHRcdC8vIFRPRE8g6Kej5Yaz5aS05p2h5YaS5rOh55qE6Zeu6aKYXHJcblx0XHRcdHRoaXMuY2xlYXJQcm9wYWdhdGlvbiA9IGZhbHNlXHJcblx0XHRcdHRoaXMubWFza0NsYXNzLmJhY2tncm91bmRDb2xvciA9IHRoaXMubWFza0JhY2tncm91bmRDb2xvclxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0c2V0SDVWaXNpYmxlKCkge1xyXG5cdFx0XHRcdC8vICNpZmRlZiBINVxyXG5cdFx0XHRcdC8vIGZpeCBieSBtZWhhb3RpYW4g5aSE55CGIGg1IOa7muWKqOepv+mAj+eahOmXrumimFxyXG5cdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0uc3R5bGUub3ZlcmZsb3cgPSAndmlzaWJsZSdcclxuXHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0fSxcclxuXHRcdFx0LyoqXHJcblx0XHRcdCAqIOWFrOeUqOaWueazle+8jOS4jeaYvuekuumBrue9qeWxglxyXG5cdFx0XHQgKi9cclxuXHRcdFx0Y2xvc2VNYXNrKCkge1xyXG5cdFx0XHRcdHRoaXMubWFza1Nob3cgPSBmYWxzZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvKipcclxuXHRcdFx0ICog5YWs55So5pa55rOV77yM6YGu572p5bGC56aB5q2i54K55Ye7XHJcblx0XHRcdCAqL1xyXG5cdFx0XHRkaXNhYmxlTWFzaygpIHtcclxuXHRcdFx0XHR0aGlzLm1rY2xpY2sgPSBmYWxzZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyBUT0RPIG52dWUg5Y+W5raI5YaS5rOhXHJcblx0XHRcdGNsZWFyKGUpIHtcclxuXHRcdFx0XHQvLyAjaWZuZGVmIEFQUC1OVlVFXHJcblx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKVxyXG5cdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcdHRoaXMuY2xlYXJQcm9wYWdhdGlvbiA9IHRydWVcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdG9wZW4oZGlyZWN0aW9uKSB7XHJcblx0XHRcdFx0Ly8gZml4IGJ5IG1laGFvdGlhbiDlpITnkIblv6vpgJ/miZPlvIDlhbPpl63nmoTmg4XlhrVcclxuXHRcdFx0XHRpZiAodGhpcy5zaG93UG9wdXApIHtcclxuXHRcdFx0XHRcdGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKVxyXG5cdFx0XHRcdFx0dGhpcy5zaG93UG9wdXAgPSBmYWxzZVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsZXQgaW5uZXJUeXBlID0gWyd0b3AnLCAnY2VudGVyJywgJ2JvdHRvbScsICdsZWZ0JywgJ3JpZ2h0JywgJ21lc3NhZ2UnLCAnZGlhbG9nJywgJ3NoYXJlJ11cclxuXHRcdFx0XHRpZiAoIShkaXJlY3Rpb24gJiYgaW5uZXJUeXBlLmluZGV4T2YoZGlyZWN0aW9uKSAhPT0gLTEpKSB7XHJcblx0XHRcdFx0XHRkaXJlY3Rpb24gPSB0aGlzLnR5cGVcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKCF0aGlzLmNvbmZpZ1tkaXJlY3Rpb25dKSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKCfnvLrlsJHnsbvlnovvvJonLCBkaXJlY3Rpb24pXHJcblx0XHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpc1t0aGlzLmNvbmZpZ1tkaXJlY3Rpb25dXSgpXHJcblx0XHRcdFx0dGhpcy4kZW1pdCgnY2hhbmdlJywge1xyXG5cdFx0XHRcdFx0c2hvdzogdHJ1ZSxcclxuXHRcdFx0XHRcdHR5cGU6IGRpcmVjdGlvblxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdGNsb3NlKHR5cGUpIHtcclxuXHRcdFx0XHR0aGlzLnNob3dUcmFucyA9IGZhbHNlXHJcblx0XHRcdFx0dGhpcy4kZW1pdCgnY2hhbmdlJywge1xyXG5cdFx0XHRcdFx0c2hvdzogZmFsc2UsXHJcblx0XHRcdFx0XHR0eXBlOiB0aGlzLnR5cGVcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKVxyXG5cdFx0XHRcdC8vIC8vIOiHquWumuS5ieWFs+mXreS6i+S7tlxyXG5cdFx0XHRcdC8vIHRoaXMuY3VzdG9tT3BlbiAmJiB0aGlzLmN1c3RvbUNsb3NlKClcclxuXHRcdFx0XHR0aGlzLnRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnNob3dQb3B1cCA9IGZhbHNlXHJcblx0XHRcdFx0fSwgMzAwKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyBUT0RPIOWkhOeQhuWGkuazoeS6i+S7tu+8jOWktOadoeeahOWGkuazoeS6i+S7tuaciemXrumimCDvvIzlhYjov5nmoLflhbzlrrlcclxuXHRcdFx0dG91Y2hzdGFydCgpIHtcclxuXHRcdFx0XHR0aGlzLmNsZWFyUHJvcGFnYXRpb24gPSBmYWxzZVxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0b25UYXAoKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMuY2xlYXJQcm9wYWdhdGlvbikge1xyXG5cdFx0XHRcdFx0Ly8gZml4IGJ5IG1laGFvdGlhbiDlhbzlrrkgbnZ1ZVxyXG5cdFx0XHRcdFx0dGhpcy5jbGVhclByb3BhZ2F0aW9uID0gZmFsc2VcclxuXHRcdFx0XHRcdHJldHVyblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLiRlbWl0KCdtYXNrQ2xpY2snKVxyXG5cdFx0XHRcdGlmICghdGhpcy5ta2NsaWNrKSByZXR1cm5cclxuXHRcdFx0XHR0aGlzLmNsb3NlKClcclxuXHRcdFx0fSxcclxuXHRcdFx0LyoqXHJcblx0XHRcdCAqIOmhtumDqOW8ueWHuuagt+W8j+WkhOeQhlxyXG5cdFx0XHQgKi9cclxuXHRcdFx0dG9wKHR5cGUpIHtcclxuXHRcdFx0XHR0aGlzLnBvcHVwc3R5bGUgPSB0aGlzLmlzRGVza3RvcCA/ICdmaXhmb3JwYy10b3AnIDogJ3RvcCdcclxuXHRcdFx0XHR0aGlzLmFuaSA9IFsnc2xpZGUtdG9wJ11cclxuXHRcdFx0XHR0aGlzLnRyYW5zQ2xhc3MgPSB7XHJcblx0XHRcdFx0XHRwb3NpdGlvbjogJ2ZpeGVkJyxcclxuXHRcdFx0XHRcdGxlZnQ6IDAsXHJcblx0XHRcdFx0XHRyaWdodDogMCxcclxuXHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogdGhpcy5iZ1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQvLyBUT0RPIOWFvOWuuSB0eXBlIOWxnuaApyDvvIzlkI7nu63kvJrlup/lvINcclxuXHRcdFx0XHRpZiAodHlwZSkgcmV0dXJuXHJcblx0XHRcdFx0dGhpcy5zaG93UG9wdXAgPSB0cnVlXHJcblx0XHRcdFx0dGhpcy5zaG93VHJhbnMgPSB0cnVlXHJcblx0XHRcdFx0dGhpcy4kbmV4dFRpY2soKCkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHRoaXMubWVzc2FnZUNoaWxkICYmIHRoaXMudHlwZSA9PT0gJ21lc3NhZ2UnKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMubWVzc2FnZUNoaWxkLnRpbWVyQ2xvc2UoKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdC8qKlxyXG5cdFx0XHQgKiDlupXpg6jlvLnlh7rmoLflvI/lpITnkIZcclxuXHRcdFx0ICovXHJcblx0XHRcdGJvdHRvbSh0eXBlKSB7XHJcblx0XHRcdFx0dGhpcy5wb3B1cHN0eWxlID0gJ2JvdHRvbSdcclxuXHRcdFx0XHR0aGlzLmFuaSA9IFsnc2xpZGUtYm90dG9tJ11cclxuXHRcdFx0XHR0aGlzLnRyYW5zQ2xhc3MgPSB7XHJcblx0XHRcdFx0XHRwb3NpdGlvbjogJ2ZpeGVkJyxcclxuXHRcdFx0XHRcdGxlZnQ6IDAsXHJcblx0XHRcdFx0XHRyaWdodDogMCxcclxuXHRcdFx0XHRcdGJvdHRvbTogMCxcclxuXHRcdFx0XHRcdHBhZGRpbmdCb3R0b206IHRoaXMuc2FmZUFyZWFJbnNldHMgKyAncHgnLFxyXG5cdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiB0aGlzLmJnXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vIFRPRE8g5YW85a65IHR5cGUg5bGe5oCnIO+8jOWQjue7reS8muW6n+W8g1xyXG5cdFx0XHRcdGlmICh0eXBlKSByZXR1cm5cclxuXHRcdFx0XHR0aGlzLnNob3dQb3B1cCA9IHRydWVcclxuXHRcdFx0XHR0aGlzLnNob3dUcmFucyA9IHRydWVcclxuXHRcdFx0fSxcclxuXHRcdFx0LyoqXHJcblx0XHRcdCAqIOS4remXtOW8ueWHuuagt+W8j+WkhOeQhlxyXG5cdFx0XHQgKi9cclxuXHRcdFx0Y2VudGVyKHR5cGUpIHtcclxuXHRcdFx0XHR0aGlzLnBvcHVwc3R5bGUgPSAnY2VudGVyJ1xyXG5cdFx0XHRcdHRoaXMuYW5pID0gWyd6b29tLW91dCcsICdmYWRlJ11cclxuXHRcdFx0XHR0aGlzLnRyYW5zQ2xhc3MgPSB7XHJcblx0XHRcdFx0XHRwb3NpdGlvbjogJ2ZpeGVkJyxcclxuXHRcdFx0XHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cclxuXHRcdFx0XHRcdGRpc3BsYXk6ICdmbGV4JyxcclxuXHRcdFx0XHRcdGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG5cdFx0XHRcdFx0LyogI2VuZGlmICovXHJcblx0XHRcdFx0XHRib3R0b206IDAsXHJcblx0XHRcdFx0XHRsZWZ0OiAwLFxyXG5cdFx0XHRcdFx0cmlnaHQ6IDAsXHJcblx0XHRcdFx0XHR0b3A6IDAsXHJcblx0XHRcdFx0XHRqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcblx0XHRcdFx0XHRhbGlnbkl0ZW1zOiAnY2VudGVyJ1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQvLyBUT0RPIOWFvOWuuSB0eXBlIOWxnuaApyDvvIzlkI7nu63kvJrlup/lvINcclxuXHRcdFx0XHRpZiAodHlwZSkgcmV0dXJuXHJcblx0XHRcdFx0dGhpcy5zaG93UG9wdXAgPSB0cnVlXHJcblx0XHRcdFx0dGhpcy5zaG93VHJhbnMgPSB0cnVlXHJcblx0XHRcdH0sXHJcblx0XHRcdGxlZnQodHlwZSkge1xyXG5cdFx0XHRcdHRoaXMucG9wdXBzdHlsZSA9ICdsZWZ0J1xyXG5cdFx0XHRcdHRoaXMuYW5pID0gWydzbGlkZS1sZWZ0J11cclxuXHRcdFx0XHR0aGlzLnRyYW5zQ2xhc3MgPSB7XHJcblx0XHRcdFx0XHRwb3NpdGlvbjogJ2ZpeGVkJyxcclxuXHRcdFx0XHRcdGxlZnQ6IDAsXHJcblx0XHRcdFx0XHRib3R0b206IDAsXHJcblx0XHRcdFx0XHR0b3A6IDAsXHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuYmcsXHJcblx0XHRcdFx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0XHRcdFx0XHRkaXNwbGF5OiAnZmxleCcsXHJcblx0XHRcdFx0XHRmbGV4RGlyZWN0aW9uOiAnY29sdW1uJ1xyXG5cdFx0XHRcdFx0LyogI2VuZGlmICovXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vIFRPRE8g5YW85a65IHR5cGUg5bGe5oCnIO+8jOWQjue7reS8muW6n+W8g1xyXG5cdFx0XHRcdGlmICh0eXBlKSByZXR1cm5cclxuXHRcdFx0XHR0aGlzLnNob3dQb3B1cCA9IHRydWVcclxuXHRcdFx0XHR0aGlzLnNob3dUcmFucyA9IHRydWVcclxuXHRcdFx0fSxcclxuXHRcdFx0cmlnaHQodHlwZSkge1xyXG5cdFx0XHRcdHRoaXMucG9wdXBzdHlsZSA9ICdyaWdodCdcclxuXHRcdFx0XHR0aGlzLmFuaSA9IFsnc2xpZGUtcmlnaHQnXVxyXG5cdFx0XHRcdHRoaXMudHJhbnNDbGFzcyA9IHtcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiAnZml4ZWQnLFxyXG5cdFx0XHRcdFx0Ym90dG9tOiAwLFxyXG5cdFx0XHRcdFx0cmlnaHQ6IDAsXHJcblx0XHRcdFx0XHR0b3A6IDAsXHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuYmcsXHJcblx0XHRcdFx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0XHRcdFx0XHRkaXNwbGF5OiAnZmxleCcsXHJcblx0XHRcdFx0XHRmbGV4RGlyZWN0aW9uOiAnY29sdW1uJ1xyXG5cdFx0XHRcdFx0LyogI2VuZGlmICovXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vIFRPRE8g5YW85a65IHR5cGUg5bGe5oCnIO+8jOWQjue7reS8muW6n+W8g1xyXG5cdFx0XHRcdGlmICh0eXBlKSByZXR1cm5cclxuXHRcdFx0XHR0aGlzLnNob3dQb3B1cCA9IHRydWVcclxuXHRcdFx0XHR0aGlzLnNob3dUcmFucyA9IHRydWVcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxyXG5cdC51bmktcG9wdXAge1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdFx0ei1pbmRleDogOTk7XHJcblxyXG5cdFx0LyogI2VuZGlmICovXHJcblx0XHQmLnRvcCxcclxuXHRcdCYubGVmdCxcclxuXHRcdCYucmlnaHQge1xyXG5cdFx0XHQvKiAjaWZkZWYgSDUgKi9cclxuXHRcdFx0dG9wOiB2YXIoLS13aW5kb3ctdG9wKTtcclxuXHRcdFx0LyogI2VuZGlmICovXHJcblx0XHRcdC8qICNpZm5kZWYgSDUgKi9cclxuXHRcdFx0dG9wOiAwO1xyXG5cdFx0XHQvKiAjZW5kaWYgKi9cclxuXHRcdH1cclxuXHJcblx0XHQudW5pLXBvcHVwX193cmFwcGVyIHtcclxuXHRcdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0LyogI2VuZGlmICovXHJcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcblx0XHRcdC8qIGlwaG9uZXgg562J5a6J5YWo5Yy66K6+572u77yM5bqV6YOo5a6J5YWo5Yy66YCC6YWNICovXHJcblx0XHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cclxuXHRcdFx0Ly8gcGFkZGluZy1ib3R0b206IGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pO1xyXG5cdFx0XHQvLyBwYWRkaW5nLWJvdHRvbTogZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pO1xyXG5cdFx0XHQvKiAjZW5kaWYgKi9cclxuXHRcdFx0Ji5sZWZ0LFxyXG5cdFx0XHQmLnJpZ2h0IHtcclxuXHRcdFx0XHQvKiAjaWZkZWYgSDUgKi9cclxuXHRcdFx0XHRwYWRkaW5nLXRvcDogdmFyKC0td2luZG93LXRvcCk7XHJcblx0XHRcdFx0LyogI2VuZGlmICovXHJcblx0XHRcdFx0LyogI2lmbmRlZiBINSAqL1xyXG5cdFx0XHRcdHBhZGRpbmctdG9wOiAwO1xyXG5cdFx0XHRcdC8qICNlbmRpZiAqL1xyXG5cdFx0XHRcdGZsZXg6IDE7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC5maXhmb3JwYy16LWluZGV4IHtcclxuXHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cclxuXHRcdHotaW5kZXg6IDk5OTtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdH1cclxuXHJcblx0LmZpeGZvcnBjLXRvcCB7XHJcblx0XHR0b3A6IDA7XHJcblx0fVxyXG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///29\n");

/***/ }),
/* 30 */
/*!*************************************************************************************************************************************************!*\
  !*** D:/WebStudyProject/uniapp-project/meeting-demo/uni_modules/uni-popup/components/uni-popup/uni-popup.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!../../../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--10-oneOf-0-2!../../../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--10-oneOf-0-3!../../../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-4!../../../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-popup.vue?vue&type=style&index=0&lang=scss& */ 31);
/* harmony import */ var _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 31 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/WebStudyProject/uniapp-project/meeting-demo/uni_modules/uni-popup/components/uni-popup/uni-popup.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".uni-popup": {
    "": {
      "position": [
        "fixed",
        0,
        0,
        20
      ]
    },
    ".top": {
      "top": [
        0,
        0,
        1,
        21
      ]
    },
    ".left": {
      "top": [
        0,
        0,
        1,
        21
      ]
    },
    ".right": {
      "top": [
        0,
        0,
        1,
        21
      ]
    }
  },
  ".uni-popup__wrapper": {
    ".uni-popup ": {
      "position": [
        "relative",
        0,
        1,
        22
      ]
    },
    ".uni-popup .left": {
      "paddingTop": [
        0,
        0,
        2,
        23
      ],
      "flex": [
        1,
        0,
        2,
        23
      ]
    },
    ".uni-popup .right": {
      "paddingTop": [
        0,
        0,
        2,
        23
      ],
      "flex": [
        1,
        0,
        2,
        23
      ]
    }
  },
  ".fixforpc-top": {
    "": {
      "top": [
        0,
        0,
        0,
        24
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),
/* 32 */
/*!***************************************************************************************************************!*\
  !*** D:/WebStudyProject/uniapp-project/meeting-demo/uni_modules/uni-icons/components/uni-icons/uni-icons.vue ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _uni_icons_vue_vue_type_template_id_a2e81f6e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-icons.vue?vue&type=template&id=a2e81f6e& */ 33);\n/* harmony import */ var _uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-icons.vue?vue&type=script&lang=js& */ 35);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./uni-icons.vue?vue&type=style&index=0&lang=scss& */ 39).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./uni-icons.vue?vue&type=style&index=0&lang=scss& */ 39).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _uni_icons_vue_vue_type_template_id_a2e81f6e___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _uni_icons_vue_vue_type_template_id_a2e81f6e___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"6f94fb8a\",\n  false,\n  _uni_icons_vue_vue_type_template_id_a2e81f6e___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"uni_modules/uni-icons/components/uni-icons/uni-icons.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBc0g7QUFDdEg7QUFDNkQ7QUFDTDtBQUN4RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLDJEQUFtRDtBQUN2RyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsMkRBQW1EO0FBQzVHOztBQUVBOztBQUVBO0FBQ21MO0FBQ25MLGdCQUFnQixvTEFBVTtBQUMxQixFQUFFLCtFQUFNO0FBQ1IsRUFBRSxvRkFBTTtBQUNSLEVBQUUsNkZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsd0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIzMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vdW5pLWljb25zLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hMmU4MWY2ZSZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3VuaS1pY29ucy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3VuaS1pY29ucy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi91bmktaWNvbnMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi91bmktaWNvbnMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vd3ogQXBwL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCI2Zjk0ZmI4YVwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ1bmlfbW9kdWxlcy91bmktaWNvbnMvY29tcG9uZW50cy91bmktaWNvbnMvdW5pLWljb25zLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///32\n");

/***/ }),
/* 33 */
/*!**********************************************************************************************************************************************!*\
  !*** D:/WebStudyProject/uniapp-project/meeting-demo/uni_modules/uni-icons/components/uni-icons/uni-icons.vue?vue&type=template&id=a2e81f6e& ***!
  \**********************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_template_id_a2e81f6e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-icons.vue?vue&type=template&id=a2e81f6e& */ 34);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_template_id_a2e81f6e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_template_id_a2e81f6e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_template_id_a2e81f6e___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_template_id_a2e81f6e___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 34 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/WebStudyProject/uniapp-project/meeting-demo/uni_modules/uni-icons/components/uni-icons/uni-icons.vue?vue&type=template&id=a2e81f6e& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "u-text",
    {
      staticClass: ["uni-icons"],
      style: { color: _vm.color, "font-size": _vm.iconSize },
      appendAsTree: true,
      attrs: { append: "tree" },
      on: { click: _vm._onClick }
    },
    [_vm._v(_vm._s(_vm.unicode))]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 35 */
/*!****************************************************************************************************************************************!*\
  !*** D:/WebStudyProject/uniapp-project/meeting-demo/uni_modules/uni-icons/components/uni-icons/uni-icons.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--5-0!../../../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!../../../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-icons.vue?vue&type=script&lang=js& */ 36);\n/* harmony import */ var _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXdkLENBQWdCLGtlQUFHLEVBQUMiLCJmaWxlIjoiMzUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3d6IEFwcC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi93eiBBcHAvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi93eiBBcHAvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLWljb25zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi93eiBBcHAvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vd3ogQXBwL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vd3ogQXBwL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VuaS1pY29ucy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///35\n");

/***/ }),
/* 36 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/WebStudyProject/uniapp-project/meeting-demo/uni_modules/uni-icons/components/uni-icons/uni-icons.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\nvar _icons = _interopRequireDefault(__webpack_require__(/*! ./icons.js */ 37));\n\n\n\n\n\n\nvar _uniicons = _interopRequireDefault(__webpack_require__(/*! ./uniicons.ttf */ 38));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\nvar getVal = function getVal(val) {var reg = /^[0-9]*$/g;return typeof val === 'number' || reg.test(val) ? val + 'px' : val;};var domModule = weex.requireModule('dom');domModule.addRule('fontFace', { 'fontFamily': \"uniicons\", 'src': \"url('\" + _uniicons.default + \"')\" }); /**\n                                                                                                                                                                                                                                                                                 * Icons 图标\n                                                                                                                                                                                                                                                                                 * @description 用于展示 icons 图标\n                                                                                                                                                                                                                                                                                 * @tutorial https://ext.dcloud.net.cn/plugin?id=28\n                                                                                                                                                                                                                                                                                 * @property {Number} size 图标大小\n                                                                                                                                                                                                                                                                                 * @property {String} type 图标图案，参考示例\n                                                                                                                                                                                                                                                                                 * @property {String} color 图标颜色\n                                                                                                                                                                                                                                                                                 * @property {String} customPrefix 自定义图标\n                                                                                                                                                                                                                                                                                 * @event {Function} click 点击 Icon 触发事件\n                                                                                                                                                                                                                                                                                 */var _default = { name: 'UniIcons',\n  emits: ['click'],\n  props: {\n    type: {\n      type: String,\n      default: '' },\n\n    color: {\n      type: String,\n      default: '#333333' },\n\n    size: {\n      type: [Number, String],\n      default: 16 },\n\n    customPrefix: {\n      type: String,\n      default: '' } },\n\n\n  data: function data() {\n    return {\n      icons: _icons.default.glyphs };\n\n  },\n  computed: {\n    unicode: function unicode() {var _this = this;\n      var code = this.icons.find(function (v) {return v.font_class === _this.type;});\n      if (code) {\n        return unescape(\"%u\".concat(code.unicode));\n      }\n      return '';\n    },\n    iconSize: function iconSize() {\n      return getVal(this.size);\n    } },\n\n  methods: {\n    _onClick: function _onClick() {\n      this.$emit('click');\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdW5pLWljb25zL2NvbXBvbmVudHMvdW5pLWljb25zL3VuaS1pY29ucy52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQVVBOzs7Ozs7O0FBT0Esc0Y7Ozs7Ozs7OztBQU5BLG1DQUNBLHNCQUNBLG1FQUNBLENBSEEsQ0FLQSwwQ0FFQSxnQ0FDQSx3QkFEQSxFQUVBLHlDQUZBLEksQ0FNQTs7Ozs7Ozs7O2tTQVVBLEVBQ0EsZ0JBREE7QUFFQSxrQkFGQTtBQUdBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBLGlCQUZBLEVBREE7O0FBS0E7QUFDQSxrQkFEQTtBQUVBLHdCQUZBLEVBTEE7O0FBU0E7QUFDQSw0QkFEQTtBQUVBLGlCQUZBLEVBVEE7O0FBYUE7QUFDQSxrQkFEQTtBQUVBLGlCQUZBLEVBYkEsRUFIQTs7O0FBcUJBLE1BckJBLGtCQXFCQTtBQUNBO0FBQ0Esa0NBREE7O0FBR0EsR0F6QkE7QUEwQkE7QUFDQSxXQURBLHFCQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBUEE7QUFRQSxZQVJBLHNCQVFBO0FBQ0E7QUFDQSxLQVZBLEVBMUJBOztBQXNDQTtBQUNBLFlBREEsc0JBQ0E7QUFDQTtBQUNBLEtBSEEsRUF0Q0EsRSIsImZpbGUiOiIzNi5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0PCEtLSAjaWZkZWYgQVBQLU5WVUUgLS0+XG5cdDx0ZXh0IDpzdHlsZT1cInsgY29sb3I6IGNvbG9yLCAnZm9udC1zaXplJzogaWNvblNpemUgfVwiIGNsYXNzPVwidW5pLWljb25zXCIgQGNsaWNrPVwiX29uQ2xpY2tcIj57e3VuaWNvZGV9fTwvdGV4dD5cblx0PCEtLSAjZW5kaWYgLS0+XG5cdDwhLS0gI2lmbmRlZiBBUFAtTlZVRSAtLT5cblx0PHRleHQgOnN0eWxlPVwieyBjb2xvcjogY29sb3IsICdmb250LXNpemUnOiBpY29uU2l6ZSB9XCIgY2xhc3M9XCJ1bmktaWNvbnNcIiA6Y2xhc3M9XCJbJ3VuaXVpLScrdHlwZSxjdXN0b21QcmVmaXgsY3VzdG9tUHJlZml4P3R5cGU6JyddXCIgQGNsaWNrPVwiX29uQ2xpY2tcIj48L3RleHQ+XG5cdDwhLS0gI2VuZGlmIC0tPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgaWNvbnMgZnJvbSAnLi9pY29ucy5qcyc7XG5cdGNvbnN0IGdldFZhbCA9ICh2YWwpID0+IHtcblx0XHRjb25zdCByZWcgPSAvXlswLTldKiQvZ1xuXHRcdHJldHVybiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicgfHzjgIByZWcudGVzdCh2YWwpICk/IHZhbCArICdweCcgOiB2YWw7XG5cdH0gXHJcblx0Ly8gI2lmZGVmIEFQUC1OVlVFXHJcblx0dmFyIGRvbU1vZHVsZSA9IHdlZXgucmVxdWlyZU1vZHVsZSgnZG9tJyk7XHJcblx0aW1wb3J0IGljb25VcmwgZnJvbSAnLi91bmlpY29ucy50dGYnXHJcblx0ZG9tTW9kdWxlLmFkZFJ1bGUoJ2ZvbnRGYWNlJywge1xyXG5cdFx0J2ZvbnRGYW1pbHknOiBcInVuaWljb25zXCIsXHJcblx0XHQnc3JjJzogXCJ1cmwoJ1wiK2ljb25VcmwrXCInKVwiXHJcblx0fSk7XHJcblx0Ly8gI2VuZGlmXHJcblxyXG5cdC8qKlxyXG5cdCAqIEljb25zIOWbvuagh1xyXG5cdCAqIEBkZXNjcmlwdGlvbiDnlKjkuo7lsZXnpLogaWNvbnMg5Zu+5qCHXHJcblx0ICogQHR1dG9yaWFsIGh0dHBzOi8vZXh0LmRjbG91ZC5uZXQuY24vcGx1Z2luP2lkPTI4XHJcblx0ICogQHByb3BlcnR5IHtOdW1iZXJ9IHNpemUg5Zu+5qCH5aSn5bCPXHJcblx0ICogQHByb3BlcnR5IHtTdHJpbmd9IHR5cGUg5Zu+5qCH5Zu+5qGI77yM5Y+C6ICD56S65L6LXHJcblx0ICogQHByb3BlcnR5IHtTdHJpbmd9IGNvbG9yIOWbvuagh+minOiJslxuXHQgKiBAcHJvcGVydHkge1N0cmluZ30gY3VzdG9tUHJlZml4IOiHquWumuS5ieWbvuagh1xuXHQgKiBAZXZlbnQge0Z1bmN0aW9ufSBjbGljayDngrnlh7sgSWNvbiDop6blj5Hkuovku7ZcclxuXHQgKi9cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRuYW1lOiAnVW5pSWNvbnMnLFxyXG5cdFx0ZW1pdHM6WydjbGljayddLFxyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0dHlwZToge1xyXG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OiAnJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRjb2xvcjoge1xyXG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OiAnIzMzMzMzMydcclxuXHRcdFx0fSxcclxuXHRcdFx0c2l6ZToge1xyXG5cdFx0XHRcdHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXHJcblx0XHRcdFx0ZGVmYXVsdDogMTZcclxuXHRcdFx0fSxcblx0XHRcdGN1c3RvbVByZWZpeDp7XG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcblx0XHRcdFx0ZGVmYXVsdDogJydcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGljb25zOiBpY29ucy5nbHlwaHNcclxuXHRcdFx0fVxyXG5cdFx0fSxcblx0XHRjb21wdXRlZDp7XG5cdFx0XHR1bmljb2RlKCl7XG5cdFx0XHRcdGxldCBjb2RlID0gdGhpcy5pY29ucy5maW5kKHY9PnYuZm9udF9jbGFzcyA9PT0gdGhpcy50eXBlKVxuXHRcdFx0XHRpZihjb2RlKXtcblx0XHRcdFx0XHRyZXR1cm4gdW5lc2NhcGUoYCV1JHtjb2RlLnVuaWNvZGV9YClcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gJydcblx0XHRcdH0sXG5cdFx0XHRpY29uU2l6ZSgpe1xuXHRcdFx0XHRyZXR1cm4gZ2V0VmFsKHRoaXMuc2l6ZSlcblx0XHRcdH1cblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRfb25DbGljaygpIHtcclxuXHRcdFx0XHR0aGlzLiRlbWl0KCdjbGljaycpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG5cdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cblx0QGltcG9ydCAnLi91bmlpY29ucy5jc3MnO1xyXG5cdEBmb250LWZhY2Uge1xyXG5cdFx0Zm9udC1mYW1pbHk6IHVuaWljb25zO1xyXG5cdFx0c3JjOiB1cmwoJy4vdW5paWNvbnMudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xyXG5cdH1cclxuXHJcblx0LyogI2VuZGlmICovXG5cdC51bmktaWNvbnMge1xyXG5cdFx0Zm9udC1mYW1pbHk6IHVuaWljb25zO1xyXG5cdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdH1cclxuXHJcbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///36\n");

/***/ }),
/* 37 */
/*!**********************************************************************************************************!*\
  !*** D:/WebStudyProject/uniapp-project/meeting-demo/uni_modules/uni-icons/components/uni-icons/icons.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _default = {\n  \"id\": \"2852637\",\n  \"name\": \"uniui图标库\",\n  \"font_family\": \"uniicons\",\n  \"css_prefix_text\": \"uniui-\",\n  \"description\": \"\",\n  \"glyphs\": [\n  {\n    \"icon_id\": \"25027049\",\n    \"name\": \"yanse\",\n    \"font_class\": \"color\",\n    \"unicode\": \"e6cf\",\n    \"unicode_decimal\": 59087 },\n\n  {\n    \"icon_id\": \"25027048\",\n    \"name\": \"wallet\",\n    \"font_class\": \"wallet\",\n    \"unicode\": \"e6b1\",\n    \"unicode_decimal\": 59057 },\n\n  {\n    \"icon_id\": \"25015720\",\n    \"name\": \"settings-filled\",\n    \"font_class\": \"settings-filled\",\n    \"unicode\": \"e6ce\",\n    \"unicode_decimal\": 59086 },\n\n  {\n    \"icon_id\": \"25015434\",\n    \"name\": \"shimingrenzheng-filled\",\n    \"font_class\": \"auth-filled\",\n    \"unicode\": \"e6cc\",\n    \"unicode_decimal\": 59084 },\n\n  {\n    \"icon_id\": \"24934246\",\n    \"name\": \"shop-filled\",\n    \"font_class\": \"shop-filled\",\n    \"unicode\": \"e6cd\",\n    \"unicode_decimal\": 59085 },\n\n  {\n    \"icon_id\": \"24934159\",\n    \"name\": \"staff-filled-01\",\n    \"font_class\": \"staff-filled\",\n    \"unicode\": \"e6cb\",\n    \"unicode_decimal\": 59083 },\n\n  {\n    \"icon_id\": \"24932461\",\n    \"name\": \"VIP-filled\",\n    \"font_class\": \"vip-filled\",\n    \"unicode\": \"e6c6\",\n    \"unicode_decimal\": 59078 },\n\n  {\n    \"icon_id\": \"24932462\",\n    \"name\": \"plus_circle_fill\",\n    \"font_class\": \"plus-filled\",\n    \"unicode\": \"e6c7\",\n    \"unicode_decimal\": 59079 },\n\n  {\n    \"icon_id\": \"24932463\",\n    \"name\": \"folder_add-filled\",\n    \"font_class\": \"folder-add-filled\",\n    \"unicode\": \"e6c8\",\n    \"unicode_decimal\": 59080 },\n\n  {\n    \"icon_id\": \"24932464\",\n    \"name\": \"yanse-filled\",\n    \"font_class\": \"color-filled\",\n    \"unicode\": \"e6c9\",\n    \"unicode_decimal\": 59081 },\n\n  {\n    \"icon_id\": \"24932465\",\n    \"name\": \"tune-filled\",\n    \"font_class\": \"tune-filled\",\n    \"unicode\": \"e6ca\",\n    \"unicode_decimal\": 59082 },\n\n  {\n    \"icon_id\": \"24932455\",\n    \"name\": \"a-rilidaka-filled\",\n    \"font_class\": \"calendar-filled\",\n    \"unicode\": \"e6c0\",\n    \"unicode_decimal\": 59072 },\n\n  {\n    \"icon_id\": \"24932456\",\n    \"name\": \"notification-filled\",\n    \"font_class\": \"notification-filled\",\n    \"unicode\": \"e6c1\",\n    \"unicode_decimal\": 59073 },\n\n  {\n    \"icon_id\": \"24932457\",\n    \"name\": \"wallet-filled\",\n    \"font_class\": \"wallet-filled\",\n    \"unicode\": \"e6c2\",\n    \"unicode_decimal\": 59074 },\n\n  {\n    \"icon_id\": \"24932458\",\n    \"name\": \"paihangbang-filled\",\n    \"font_class\": \"medal-filled\",\n    \"unicode\": \"e6c3\",\n    \"unicode_decimal\": 59075 },\n\n  {\n    \"icon_id\": \"24932459\",\n    \"name\": \"gift-filled\",\n    \"font_class\": \"gift-filled\",\n    \"unicode\": \"e6c4\",\n    \"unicode_decimal\": 59076 },\n\n  {\n    \"icon_id\": \"24932460\",\n    \"name\": \"fire-filled\",\n    \"font_class\": \"fire-filled\",\n    \"unicode\": \"e6c5\",\n    \"unicode_decimal\": 59077 },\n\n  {\n    \"icon_id\": \"24928001\",\n    \"name\": \"refreshempty\",\n    \"font_class\": \"refreshempty\",\n    \"unicode\": \"e6bf\",\n    \"unicode_decimal\": 59071 },\n\n  {\n    \"icon_id\": \"24926853\",\n    \"name\": \"location-ellipse\",\n    \"font_class\": \"location-filled\",\n    \"unicode\": \"e6af\",\n    \"unicode_decimal\": 59055 },\n\n  {\n    \"icon_id\": \"24926735\",\n    \"name\": \"person-filled\",\n    \"font_class\": \"person-filled\",\n    \"unicode\": \"e69d\",\n    \"unicode_decimal\": 59037 },\n\n  {\n    \"icon_id\": \"24926703\",\n    \"name\": \"personadd-filled\",\n    \"font_class\": \"personadd-filled\",\n    \"unicode\": \"e698\",\n    \"unicode_decimal\": 59032 },\n\n  {\n    \"icon_id\": \"24923351\",\n    \"name\": \"back\",\n    \"font_class\": \"back\",\n    \"unicode\": \"e6b9\",\n    \"unicode_decimal\": 59065 },\n\n  {\n    \"icon_id\": \"24923352\",\n    \"name\": \"forward\",\n    \"font_class\": \"forward\",\n    \"unicode\": \"e6ba\",\n    \"unicode_decimal\": 59066 },\n\n  {\n    \"icon_id\": \"24923353\",\n    \"name\": \"arrowthinright\",\n    \"font_class\": \"arrow-right\",\n    \"unicode\": \"e6bb\",\n    \"unicode_decimal\": 59067 },\n\n  {\n    \"icon_id\": \"24923353\",\n    \"name\": \"arrowthinright\",\n    \"font_class\": \"arrowthinright\",\n    \"unicode\": \"e6bb\",\n    \"unicode_decimal\": 59067 },\n\n  {\n    \"icon_id\": \"24923354\",\n    \"name\": \"arrowthinleft\",\n    \"font_class\": \"arrow-left\",\n    \"unicode\": \"e6bc\",\n    \"unicode_decimal\": 59068 },\n\n  {\n    \"icon_id\": \"24923354\",\n    \"name\": \"arrowthinleft\",\n    \"font_class\": \"arrowthinleft\",\n    \"unicode\": \"e6bc\",\n    \"unicode_decimal\": 59068 },\n\n  {\n    \"icon_id\": \"24923355\",\n    \"name\": \"arrowthinup\",\n    \"font_class\": \"arrow-up\",\n    \"unicode\": \"e6bd\",\n    \"unicode_decimal\": 59069 },\n\n  {\n    \"icon_id\": \"24923355\",\n    \"name\": \"arrowthinup\",\n    \"font_class\": \"arrowthinup\",\n    \"unicode\": \"e6bd\",\n    \"unicode_decimal\": 59069 },\n\n  {\n    \"icon_id\": \"24923356\",\n    \"name\": \"arrowthindown\",\n    \"font_class\": \"arrow-down\",\n    \"unicode\": \"e6be\",\n    \"unicode_decimal\": 59070 },\n  {\n    \"icon_id\": \"24923356\",\n    \"name\": \"arrowthindown\",\n    \"font_class\": \"arrowthindown\",\n    \"unicode\": \"e6be\",\n    \"unicode_decimal\": 59070 },\n\n  {\n    \"icon_id\": \"24923349\",\n    \"name\": \"arrowdown\",\n    \"font_class\": \"bottom\",\n    \"unicode\": \"e6b8\",\n    \"unicode_decimal\": 59064 },\n  {\n    \"icon_id\": \"24923349\",\n    \"name\": \"arrowdown\",\n    \"font_class\": \"arrowdown\",\n    \"unicode\": \"e6b8\",\n    \"unicode_decimal\": 59064 },\n\n  {\n    \"icon_id\": \"24923346\",\n    \"name\": \"arrowright\",\n    \"font_class\": \"right\",\n    \"unicode\": \"e6b5\",\n    \"unicode_decimal\": 59061 },\n\n  {\n    \"icon_id\": \"24923346\",\n    \"name\": \"arrowright\",\n    \"font_class\": \"arrowright\",\n    \"unicode\": \"e6b5\",\n    \"unicode_decimal\": 59061 },\n\n  {\n    \"icon_id\": \"24923347\",\n    \"name\": \"arrowup\",\n    \"font_class\": \"top\",\n    \"unicode\": \"e6b6\",\n    \"unicode_decimal\": 59062 },\n\n  {\n    \"icon_id\": \"24923347\",\n    \"name\": \"arrowup\",\n    \"font_class\": \"arrowup\",\n    \"unicode\": \"e6b6\",\n    \"unicode_decimal\": 59062 },\n\n  {\n    \"icon_id\": \"24923348\",\n    \"name\": \"arrowleft\",\n    \"font_class\": \"left\",\n    \"unicode\": \"e6b7\",\n    \"unicode_decimal\": 59063 },\n\n  {\n    \"icon_id\": \"24923348\",\n    \"name\": \"arrowleft\",\n    \"font_class\": \"arrowleft\",\n    \"unicode\": \"e6b7\",\n    \"unicode_decimal\": 59063 },\n\n  {\n    \"icon_id\": \"24923334\",\n    \"name\": \"eye\",\n    \"font_class\": \"eye\",\n    \"unicode\": \"e651\",\n    \"unicode_decimal\": 58961 },\n\n  {\n    \"icon_id\": \"24923335\",\n    \"name\": \"eye-filled\",\n    \"font_class\": \"eye-filled\",\n    \"unicode\": \"e66a\",\n    \"unicode_decimal\": 58986 },\n\n  {\n    \"icon_id\": \"24923336\",\n    \"name\": \"eye-slash\",\n    \"font_class\": \"eye-slash\",\n    \"unicode\": \"e6b3\",\n    \"unicode_decimal\": 59059 },\n\n  {\n    \"icon_id\": \"24923337\",\n    \"name\": \"eye-slash-filled\",\n    \"font_class\": \"eye-slash-filled\",\n    \"unicode\": \"e6b4\",\n    \"unicode_decimal\": 59060 },\n\n  {\n    \"icon_id\": \"24923305\",\n    \"name\": \"info-filled\",\n    \"font_class\": \"info-filled\",\n    \"unicode\": \"e649\",\n    \"unicode_decimal\": 58953 },\n\n  {\n    \"icon_id\": \"24923299\",\n    \"name\": \"reload-01\",\n    \"font_class\": \"reload\",\n    \"unicode\": \"e6b2\",\n    \"unicode_decimal\": 59058 },\n\n  {\n    \"icon_id\": \"24923195\",\n    \"name\": \"mic_slash_fill\",\n    \"font_class\": \"micoff-filled\",\n    \"unicode\": \"e6b0\",\n    \"unicode_decimal\": 59056 },\n\n  {\n    \"icon_id\": \"24923165\",\n    \"name\": \"map-pin-ellipse\",\n    \"font_class\": \"map-pin-ellipse\",\n    \"unicode\": \"e6ac\",\n    \"unicode_decimal\": 59052 },\n\n  {\n    \"icon_id\": \"24923166\",\n    \"name\": \"map-pin\",\n    \"font_class\": \"map-pin\",\n    \"unicode\": \"e6ad\",\n    \"unicode_decimal\": 59053 },\n\n  {\n    \"icon_id\": \"24923167\",\n    \"name\": \"location\",\n    \"font_class\": \"location\",\n    \"unicode\": \"e6ae\",\n    \"unicode_decimal\": 59054 },\n\n  {\n    \"icon_id\": \"24923064\",\n    \"name\": \"starhalf\",\n    \"font_class\": \"starhalf\",\n    \"unicode\": \"e683\",\n    \"unicode_decimal\": 59011 },\n\n  {\n    \"icon_id\": \"24923065\",\n    \"name\": \"star\",\n    \"font_class\": \"star\",\n    \"unicode\": \"e688\",\n    \"unicode_decimal\": 59016 },\n\n  {\n    \"icon_id\": \"24923066\",\n    \"name\": \"star-filled\",\n    \"font_class\": \"star-filled\",\n    \"unicode\": \"e68f\",\n    \"unicode_decimal\": 59023 },\n\n  {\n    \"icon_id\": \"24899646\",\n    \"name\": \"a-rilidaka\",\n    \"font_class\": \"calendar\",\n    \"unicode\": \"e6a0\",\n    \"unicode_decimal\": 59040 },\n\n  {\n    \"icon_id\": \"24899647\",\n    \"name\": \"fire\",\n    \"font_class\": \"fire\",\n    \"unicode\": \"e6a1\",\n    \"unicode_decimal\": 59041 },\n\n  {\n    \"icon_id\": \"24899648\",\n    \"name\": \"paihangbang\",\n    \"font_class\": \"medal\",\n    \"unicode\": \"e6a2\",\n    \"unicode_decimal\": 59042 },\n\n  {\n    \"icon_id\": \"24899649\",\n    \"name\": \"font\",\n    \"font_class\": \"font\",\n    \"unicode\": \"e6a3\",\n    \"unicode_decimal\": 59043 },\n\n  {\n    \"icon_id\": \"24899650\",\n    \"name\": \"gift\",\n    \"font_class\": \"gift\",\n    \"unicode\": \"e6a4\",\n    \"unicode_decimal\": 59044 },\n\n  {\n    \"icon_id\": \"24899651\",\n    \"name\": \"link\",\n    \"font_class\": \"link\",\n    \"unicode\": \"e6a5\",\n    \"unicode_decimal\": 59045 },\n\n  {\n    \"icon_id\": \"24899652\",\n    \"name\": \"notification\",\n    \"font_class\": \"notification\",\n    \"unicode\": \"e6a6\",\n    \"unicode_decimal\": 59046 },\n\n  {\n    \"icon_id\": \"24899653\",\n    \"name\": \"staff\",\n    \"font_class\": \"staff\",\n    \"unicode\": \"e6a7\",\n    \"unicode_decimal\": 59047 },\n\n  {\n    \"icon_id\": \"24899654\",\n    \"name\": \"VIP\",\n    \"font_class\": \"vip\",\n    \"unicode\": \"e6a8\",\n    \"unicode_decimal\": 59048 },\n\n  {\n    \"icon_id\": \"24899655\",\n    \"name\": \"folder_add\",\n    \"font_class\": \"folder-add\",\n    \"unicode\": \"e6a9\",\n    \"unicode_decimal\": 59049 },\n\n  {\n    \"icon_id\": \"24899656\",\n    \"name\": \"tune\",\n    \"font_class\": \"tune\",\n    \"unicode\": \"e6aa\",\n    \"unicode_decimal\": 59050 },\n\n  {\n    \"icon_id\": \"24899657\",\n    \"name\": \"shimingrenzheng\",\n    \"font_class\": \"auth\",\n    \"unicode\": \"e6ab\",\n    \"unicode_decimal\": 59051 },\n\n  {\n    \"icon_id\": \"24899565\",\n    \"name\": \"person\",\n    \"font_class\": \"person\",\n    \"unicode\": \"e699\",\n    \"unicode_decimal\": 59033 },\n\n  {\n    \"icon_id\": \"24899566\",\n    \"name\": \"email-filled\",\n    \"font_class\": \"email-filled\",\n    \"unicode\": \"e69a\",\n    \"unicode_decimal\": 59034 },\n\n  {\n    \"icon_id\": \"24899567\",\n    \"name\": \"phone-filled\",\n    \"font_class\": \"phone-filled\",\n    \"unicode\": \"e69b\",\n    \"unicode_decimal\": 59035 },\n\n  {\n    \"icon_id\": \"24899568\",\n    \"name\": \"phone\",\n    \"font_class\": \"phone\",\n    \"unicode\": \"e69c\",\n    \"unicode_decimal\": 59036 },\n\n  {\n    \"icon_id\": \"24899570\",\n    \"name\": \"email\",\n    \"font_class\": \"email\",\n    \"unicode\": \"e69e\",\n    \"unicode_decimal\": 59038 },\n\n  {\n    \"icon_id\": \"24899571\",\n    \"name\": \"personadd\",\n    \"font_class\": \"personadd\",\n    \"unicode\": \"e69f\",\n    \"unicode_decimal\": 59039 },\n\n  {\n    \"icon_id\": \"24899558\",\n    \"name\": \"chatboxes-filled\",\n    \"font_class\": \"chatboxes-filled\",\n    \"unicode\": \"e692\",\n    \"unicode_decimal\": 59026 },\n\n  {\n    \"icon_id\": \"24899559\",\n    \"name\": \"contact\",\n    \"font_class\": \"contact\",\n    \"unicode\": \"e693\",\n    \"unicode_decimal\": 59027 },\n\n  {\n    \"icon_id\": \"24899560\",\n    \"name\": \"chatbubble-filled\",\n    \"font_class\": \"chatbubble-filled\",\n    \"unicode\": \"e694\",\n    \"unicode_decimal\": 59028 },\n\n  {\n    \"icon_id\": \"24899561\",\n    \"name\": \"contact-filled\",\n    \"font_class\": \"contact-filled\",\n    \"unicode\": \"e695\",\n    \"unicode_decimal\": 59029 },\n\n  {\n    \"icon_id\": \"24899562\",\n    \"name\": \"chatboxes\",\n    \"font_class\": \"chatboxes\",\n    \"unicode\": \"e696\",\n    \"unicode_decimal\": 59030 },\n\n  {\n    \"icon_id\": \"24899563\",\n    \"name\": \"chatbubble\",\n    \"font_class\": \"chatbubble\",\n    \"unicode\": \"e697\",\n    \"unicode_decimal\": 59031 },\n\n  {\n    \"icon_id\": \"24881290\",\n    \"name\": \"upload-filled\",\n    \"font_class\": \"upload-filled\",\n    \"unicode\": \"e68e\",\n    \"unicode_decimal\": 59022 },\n\n  {\n    \"icon_id\": \"24881292\",\n    \"name\": \"upload\",\n    \"font_class\": \"upload\",\n    \"unicode\": \"e690\",\n    \"unicode_decimal\": 59024 },\n\n  {\n    \"icon_id\": \"24881293\",\n    \"name\": \"weixin\",\n    \"font_class\": \"weixin\",\n    \"unicode\": \"e691\",\n    \"unicode_decimal\": 59025 },\n\n  {\n    \"icon_id\": \"24881274\",\n    \"name\": \"compose\",\n    \"font_class\": \"compose\",\n    \"unicode\": \"e67f\",\n    \"unicode_decimal\": 59007 },\n\n  {\n    \"icon_id\": \"24881275\",\n    \"name\": \"qq\",\n    \"font_class\": \"qq\",\n    \"unicode\": \"e680\",\n    \"unicode_decimal\": 59008 },\n\n  {\n    \"icon_id\": \"24881276\",\n    \"name\": \"download-filled\",\n    \"font_class\": \"download-filled\",\n    \"unicode\": \"e681\",\n    \"unicode_decimal\": 59009 },\n\n  {\n    \"icon_id\": \"24881277\",\n    \"name\": \"pengyouquan\",\n    \"font_class\": \"pyq\",\n    \"unicode\": \"e682\",\n    \"unicode_decimal\": 59010 },\n\n  {\n    \"icon_id\": \"24881279\",\n    \"name\": \"sound\",\n    \"font_class\": \"sound\",\n    \"unicode\": \"e684\",\n    \"unicode_decimal\": 59012 },\n\n  {\n    \"icon_id\": \"24881280\",\n    \"name\": \"trash-filled\",\n    \"font_class\": \"trash-filled\",\n    \"unicode\": \"e685\",\n    \"unicode_decimal\": 59013 },\n\n  {\n    \"icon_id\": \"24881281\",\n    \"name\": \"sound-filled\",\n    \"font_class\": \"sound-filled\",\n    \"unicode\": \"e686\",\n    \"unicode_decimal\": 59014 },\n\n  {\n    \"icon_id\": \"24881282\",\n    \"name\": \"trash\",\n    \"font_class\": \"trash\",\n    \"unicode\": \"e687\",\n    \"unicode_decimal\": 59015 },\n\n  {\n    \"icon_id\": \"24881284\",\n    \"name\": \"videocam-filled\",\n    \"font_class\": \"videocam-filled\",\n    \"unicode\": \"e689\",\n    \"unicode_decimal\": 59017 },\n\n  {\n    \"icon_id\": \"24881285\",\n    \"name\": \"spinner-cycle\",\n    \"font_class\": \"spinner-cycle\",\n    \"unicode\": \"e68a\",\n    \"unicode_decimal\": 59018 },\n\n  {\n    \"icon_id\": \"24881286\",\n    \"name\": \"weibo\",\n    \"font_class\": \"weibo\",\n    \"unicode\": \"e68b\",\n    \"unicode_decimal\": 59019 },\n\n  {\n    \"icon_id\": \"24881288\",\n    \"name\": \"videocam\",\n    \"font_class\": \"videocam\",\n    \"unicode\": \"e68c\",\n    \"unicode_decimal\": 59020 },\n\n  {\n    \"icon_id\": \"24881289\",\n    \"name\": \"download\",\n    \"font_class\": \"download\",\n    \"unicode\": \"e68d\",\n    \"unicode_decimal\": 59021 },\n\n  {\n    \"icon_id\": \"24879601\",\n    \"name\": \"help\",\n    \"font_class\": \"help\",\n    \"unicode\": \"e679\",\n    \"unicode_decimal\": 59001 },\n\n  {\n    \"icon_id\": \"24879602\",\n    \"name\": \"navigate-filled\",\n    \"font_class\": \"navigate-filled\",\n    \"unicode\": \"e67a\",\n    \"unicode_decimal\": 59002 },\n\n  {\n    \"icon_id\": \"24879603\",\n    \"name\": \"plusempty\",\n    \"font_class\": \"plusempty\",\n    \"unicode\": \"e67b\",\n    \"unicode_decimal\": 59003 },\n\n  {\n    \"icon_id\": \"24879604\",\n    \"name\": \"smallcircle\",\n    \"font_class\": \"smallcircle\",\n    \"unicode\": \"e67c\",\n    \"unicode_decimal\": 59004 },\n\n  {\n    \"icon_id\": \"24879605\",\n    \"name\": \"minus-filled\",\n    \"font_class\": \"minus-filled\",\n    \"unicode\": \"e67d\",\n    \"unicode_decimal\": 59005 },\n\n  {\n    \"icon_id\": \"24879606\",\n    \"name\": \"micoff\",\n    \"font_class\": \"micoff\",\n    \"unicode\": \"e67e\",\n    \"unicode_decimal\": 59006 },\n\n  {\n    \"icon_id\": \"24879588\",\n    \"name\": \"closeempty\",\n    \"font_class\": \"closeempty\",\n    \"unicode\": \"e66c\",\n    \"unicode_decimal\": 58988 },\n\n  {\n    \"icon_id\": \"24879589\",\n    \"name\": \"clear\",\n    \"font_class\": \"clear\",\n    \"unicode\": \"e66d\",\n    \"unicode_decimal\": 58989 },\n\n  {\n    \"icon_id\": \"24879590\",\n    \"name\": \"navigate\",\n    \"font_class\": \"navigate\",\n    \"unicode\": \"e66e\",\n    \"unicode_decimal\": 58990 },\n\n  {\n    \"icon_id\": \"24879591\",\n    \"name\": \"minus\",\n    \"font_class\": \"minus\",\n    \"unicode\": \"e66f\",\n    \"unicode_decimal\": 58991 },\n\n  {\n    \"icon_id\": \"24879592\",\n    \"name\": \"image\",\n    \"font_class\": \"image\",\n    \"unicode\": \"e670\",\n    \"unicode_decimal\": 58992 },\n\n  {\n    \"icon_id\": \"24879593\",\n    \"name\": \"mic\",\n    \"font_class\": \"mic\",\n    \"unicode\": \"e671\",\n    \"unicode_decimal\": 58993 },\n\n  {\n    \"icon_id\": \"24879594\",\n    \"name\": \"paperplane\",\n    \"font_class\": \"paperplane\",\n    \"unicode\": \"e672\",\n    \"unicode_decimal\": 58994 },\n\n  {\n    \"icon_id\": \"24879595\",\n    \"name\": \"close\",\n    \"font_class\": \"close\",\n    \"unicode\": \"e673\",\n    \"unicode_decimal\": 58995 },\n\n  {\n    \"icon_id\": \"24879596\",\n    \"name\": \"help-filled\",\n    \"font_class\": \"help-filled\",\n    \"unicode\": \"e674\",\n    \"unicode_decimal\": 58996 },\n\n  {\n    \"icon_id\": \"24879597\",\n    \"name\": \"plus-filled\",\n    \"font_class\": \"paperplane-filled\",\n    \"unicode\": \"e675\",\n    \"unicode_decimal\": 58997 },\n\n  {\n    \"icon_id\": \"24879598\",\n    \"name\": \"plus\",\n    \"font_class\": \"plus\",\n    \"unicode\": \"e676\",\n    \"unicode_decimal\": 58998 },\n\n  {\n    \"icon_id\": \"24879599\",\n    \"name\": \"mic-filled\",\n    \"font_class\": \"mic-filled\",\n    \"unicode\": \"e677\",\n    \"unicode_decimal\": 58999 },\n\n  {\n    \"icon_id\": \"24879600\",\n    \"name\": \"image-filled\",\n    \"font_class\": \"image-filled\",\n    \"unicode\": \"e678\",\n    \"unicode_decimal\": 59000 },\n\n  {\n    \"icon_id\": \"24855900\",\n    \"name\": \"locked-filled\",\n    \"font_class\": \"locked-filled\",\n    \"unicode\": \"e668\",\n    \"unicode_decimal\": 58984 },\n\n  {\n    \"icon_id\": \"24855901\",\n    \"name\": \"info\",\n    \"font_class\": \"info\",\n    \"unicode\": \"e669\",\n    \"unicode_decimal\": 58985 },\n\n  {\n    \"icon_id\": \"24855903\",\n    \"name\": \"locked\",\n    \"font_class\": \"locked\",\n    \"unicode\": \"e66b\",\n    \"unicode_decimal\": 58987 },\n\n  {\n    \"icon_id\": \"24855884\",\n    \"name\": \"camera-filled\",\n    \"font_class\": \"camera-filled\",\n    \"unicode\": \"e658\",\n    \"unicode_decimal\": 58968 },\n\n  {\n    \"icon_id\": \"24855885\",\n    \"name\": \"chat-filled\",\n    \"font_class\": \"chat-filled\",\n    \"unicode\": \"e659\",\n    \"unicode_decimal\": 58969 },\n\n  {\n    \"icon_id\": \"24855886\",\n    \"name\": \"camera\",\n    \"font_class\": \"camera\",\n    \"unicode\": \"e65a\",\n    \"unicode_decimal\": 58970 },\n\n  {\n    \"icon_id\": \"24855887\",\n    \"name\": \"circle\",\n    \"font_class\": \"circle\",\n    \"unicode\": \"e65b\",\n    \"unicode_decimal\": 58971 },\n\n  {\n    \"icon_id\": \"24855888\",\n    \"name\": \"checkmarkempty\",\n    \"font_class\": \"checkmarkempty\",\n    \"unicode\": \"e65c\",\n    \"unicode_decimal\": 58972 },\n\n  {\n    \"icon_id\": \"24855889\",\n    \"name\": \"chat\",\n    \"font_class\": \"chat\",\n    \"unicode\": \"e65d\",\n    \"unicode_decimal\": 58973 },\n\n  {\n    \"icon_id\": \"24855890\",\n    \"name\": \"circle-filled\",\n    \"font_class\": \"circle-filled\",\n    \"unicode\": \"e65e\",\n    \"unicode_decimal\": 58974 },\n\n  {\n    \"icon_id\": \"24855891\",\n    \"name\": \"flag\",\n    \"font_class\": \"flag\",\n    \"unicode\": \"e65f\",\n    \"unicode_decimal\": 58975 },\n\n  {\n    \"icon_id\": \"24855892\",\n    \"name\": \"flag-filled\",\n    \"font_class\": \"flag-filled\",\n    \"unicode\": \"e660\",\n    \"unicode_decimal\": 58976 },\n\n  {\n    \"icon_id\": \"24855893\",\n    \"name\": \"gear-filled\",\n    \"font_class\": \"gear-filled\",\n    \"unicode\": \"e661\",\n    \"unicode_decimal\": 58977 },\n\n  {\n    \"icon_id\": \"24855894\",\n    \"name\": \"home\",\n    \"font_class\": \"home\",\n    \"unicode\": \"e662\",\n    \"unicode_decimal\": 58978 },\n\n  {\n    \"icon_id\": \"24855895\",\n    \"name\": \"home-filled\",\n    \"font_class\": \"home-filled\",\n    \"unicode\": \"e663\",\n    \"unicode_decimal\": 58979 },\n\n  {\n    \"icon_id\": \"24855896\",\n    \"name\": \"gear\",\n    \"font_class\": \"gear\",\n    \"unicode\": \"e664\",\n    \"unicode_decimal\": 58980 },\n\n  {\n    \"icon_id\": \"24855897\",\n    \"name\": \"smallcircle-filled\",\n    \"font_class\": \"smallcircle-filled\",\n    \"unicode\": \"e665\",\n    \"unicode_decimal\": 58981 },\n\n  {\n    \"icon_id\": \"24855898\",\n    \"name\": \"map-filled\",\n    \"font_class\": \"map-filled\",\n    \"unicode\": \"e666\",\n    \"unicode_decimal\": 58982 },\n\n  {\n    \"icon_id\": \"24855899\",\n    \"name\": \"map\",\n    \"font_class\": \"map\",\n    \"unicode\": \"e667\",\n    \"unicode_decimal\": 58983 },\n\n  {\n    \"icon_id\": \"24855825\",\n    \"name\": \"refresh-filled\",\n    \"font_class\": \"refresh-filled\",\n    \"unicode\": \"e656\",\n    \"unicode_decimal\": 58966 },\n\n  {\n    \"icon_id\": \"24855826\",\n    \"name\": \"refresh\",\n    \"font_class\": \"refresh\",\n    \"unicode\": \"e657\",\n    \"unicode_decimal\": 58967 },\n\n  {\n    \"icon_id\": \"24855808\",\n    \"name\": \"cloud-upload\",\n    \"font_class\": \"cloud-upload\",\n    \"unicode\": \"e645\",\n    \"unicode_decimal\": 58949 },\n\n  {\n    \"icon_id\": \"24855809\",\n    \"name\": \"cloud-download-filled\",\n    \"font_class\": \"cloud-download-filled\",\n    \"unicode\": \"e646\",\n    \"unicode_decimal\": 58950 },\n\n  {\n    \"icon_id\": \"24855810\",\n    \"name\": \"cloud-download\",\n    \"font_class\": \"cloud-download\",\n    \"unicode\": \"e647\",\n    \"unicode_decimal\": 58951 },\n\n  {\n    \"icon_id\": \"24855811\",\n    \"name\": \"cloud-upload-filled\",\n    \"font_class\": \"cloud-upload-filled\",\n    \"unicode\": \"e648\",\n    \"unicode_decimal\": 58952 },\n\n  {\n    \"icon_id\": \"24855813\",\n    \"name\": \"redo\",\n    \"font_class\": \"redo\",\n    \"unicode\": \"e64a\",\n    \"unicode_decimal\": 58954 },\n\n  {\n    \"icon_id\": \"24855814\",\n    \"name\": \"images-filled\",\n    \"font_class\": \"images-filled\",\n    \"unicode\": \"e64b\",\n    \"unicode_decimal\": 58955 },\n\n  {\n    \"icon_id\": \"24855815\",\n    \"name\": \"undo-filled\",\n    \"font_class\": \"undo-filled\",\n    \"unicode\": \"e64c\",\n    \"unicode_decimal\": 58956 },\n\n  {\n    \"icon_id\": \"24855816\",\n    \"name\": \"more\",\n    \"font_class\": \"more\",\n    \"unicode\": \"e64d\",\n    \"unicode_decimal\": 58957 },\n\n  {\n    \"icon_id\": \"24855817\",\n    \"name\": \"more-filled\",\n    \"font_class\": \"more-filled\",\n    \"unicode\": \"e64e\",\n    \"unicode_decimal\": 58958 },\n\n  {\n    \"icon_id\": \"24855818\",\n    \"name\": \"undo\",\n    \"font_class\": \"undo\",\n    \"unicode\": \"e64f\",\n    \"unicode_decimal\": 58959 },\n\n  {\n    \"icon_id\": \"24855819\",\n    \"name\": \"images\",\n    \"font_class\": \"images\",\n    \"unicode\": \"e650\",\n    \"unicode_decimal\": 58960 },\n\n  {\n    \"icon_id\": \"24855821\",\n    \"name\": \"paperclip\",\n    \"font_class\": \"paperclip\",\n    \"unicode\": \"e652\",\n    \"unicode_decimal\": 58962 },\n\n  {\n    \"icon_id\": \"24855822\",\n    \"name\": \"settings\",\n    \"font_class\": \"settings\",\n    \"unicode\": \"e653\",\n    \"unicode_decimal\": 58963 },\n\n  {\n    \"icon_id\": \"24855823\",\n    \"name\": \"search\",\n    \"font_class\": \"search\",\n    \"unicode\": \"e654\",\n    \"unicode_decimal\": 58964 },\n\n  {\n    \"icon_id\": \"24855824\",\n    \"name\": \"redo-filled\",\n    \"font_class\": \"redo-filled\",\n    \"unicode\": \"e655\",\n    \"unicode_decimal\": 58965 },\n\n  {\n    \"icon_id\": \"24841702\",\n    \"name\": \"list\",\n    \"font_class\": \"list\",\n    \"unicode\": \"e644\",\n    \"unicode_decimal\": 58948 },\n\n  {\n    \"icon_id\": \"24841489\",\n    \"name\": \"mail-open-filled\",\n    \"font_class\": \"mail-open-filled\",\n    \"unicode\": \"e63a\",\n    \"unicode_decimal\": 58938 },\n\n  {\n    \"icon_id\": \"24841491\",\n    \"name\": \"hand-thumbsdown-filled\",\n    \"font_class\": \"hand-down-filled\",\n    \"unicode\": \"e63c\",\n    \"unicode_decimal\": 58940 },\n\n  {\n    \"icon_id\": \"24841492\",\n    \"name\": \"hand-thumbsdown\",\n    \"font_class\": \"hand-down\",\n    \"unicode\": \"e63d\",\n    \"unicode_decimal\": 58941 },\n\n  {\n    \"icon_id\": \"24841493\",\n    \"name\": \"hand-thumbsup-filled\",\n    \"font_class\": \"hand-up-filled\",\n    \"unicode\": \"e63e\",\n    \"unicode_decimal\": 58942 },\n\n  {\n    \"icon_id\": \"24841494\",\n    \"name\": \"hand-thumbsup\",\n    \"font_class\": \"hand-up\",\n    \"unicode\": \"e63f\",\n    \"unicode_decimal\": 58943 },\n\n  {\n    \"icon_id\": \"24841496\",\n    \"name\": \"heart-filled\",\n    \"font_class\": \"heart-filled\",\n    \"unicode\": \"e641\",\n    \"unicode_decimal\": 58945 },\n\n  {\n    \"icon_id\": \"24841498\",\n    \"name\": \"mail-open\",\n    \"font_class\": \"mail-open\",\n    \"unicode\": \"e643\",\n    \"unicode_decimal\": 58947 },\n\n  {\n    \"icon_id\": \"24841488\",\n    \"name\": \"heart\",\n    \"font_class\": \"heart\",\n    \"unicode\": \"e639\",\n    \"unicode_decimal\": 58937 },\n\n  {\n    \"icon_id\": \"24839963\",\n    \"name\": \"loop\",\n    \"font_class\": \"loop\",\n    \"unicode\": \"e633\",\n    \"unicode_decimal\": 58931 },\n\n  {\n    \"icon_id\": \"24839866\",\n    \"name\": \"pulldown\",\n    \"font_class\": \"pulldown\",\n    \"unicode\": \"e632\",\n    \"unicode_decimal\": 58930 },\n\n  {\n    \"icon_id\": \"24813798\",\n    \"name\": \"scan\",\n    \"font_class\": \"scan\",\n    \"unicode\": \"e62a\",\n    \"unicode_decimal\": 58922 },\n\n  {\n    \"icon_id\": \"24813786\",\n    \"name\": \"bars\",\n    \"font_class\": \"bars\",\n    \"unicode\": \"e627\",\n    \"unicode_decimal\": 58919 },\n\n  {\n    \"icon_id\": \"24813788\",\n    \"name\": \"cart-filled\",\n    \"font_class\": \"cart-filled\",\n    \"unicode\": \"e629\",\n    \"unicode_decimal\": 58921 },\n\n  {\n    \"icon_id\": \"24813790\",\n    \"name\": \"checkbox\",\n    \"font_class\": \"checkbox\",\n    \"unicode\": \"e62b\",\n    \"unicode_decimal\": 58923 },\n\n  {\n    \"icon_id\": \"24813791\",\n    \"name\": \"checkbox-filled\",\n    \"font_class\": \"checkbox-filled\",\n    \"unicode\": \"e62c\",\n    \"unicode_decimal\": 58924 },\n\n  {\n    \"icon_id\": \"24813794\",\n    \"name\": \"shop\",\n    \"font_class\": \"shop\",\n    \"unicode\": \"e62f\",\n    \"unicode_decimal\": 58927 },\n\n  {\n    \"icon_id\": \"24813795\",\n    \"name\": \"headphones\",\n    \"font_class\": \"headphones\",\n    \"unicode\": \"e630\",\n    \"unicode_decimal\": 58928 },\n\n  {\n    \"icon_id\": \"24813796\",\n    \"name\": \"cart\",\n    \"font_class\": \"cart\",\n    \"unicode\": \"e631\",\n    \"unicode_decimal\": 58929 }] };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdW5pLWljb25zL2NvbXBvbmVudHMvdW5pLWljb25zL2ljb25zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJzR0FBZTtBQUNiLFFBQU0sU0FETztBQUViLFVBQVEsVUFGSztBQUdiLGlCQUFlLFVBSEY7QUFJYixxQkFBbUIsUUFKTjtBQUtiLGlCQUFlLEVBTEY7QUFNYixZQUFVO0FBQ1I7QUFDRSxlQUFXLFVBRGI7QUFFRSxZQUFRLE9BRlY7QUFHRSxrQkFBYyxPQUhoQjtBQUlFLGVBQVcsTUFKYjtBQUtFLHVCQUFtQixLQUxyQixFQURROztBQVFSO0FBQ0UsZUFBVyxVQURiO0FBRUUsWUFBUSxRQUZWO0FBR0Usa0JBQWMsUUFIaEI7QUFJRSxlQUFXLE1BSmI7QUFLRSx1QkFBbUIsS0FMckIsRUFSUTs7QUFlUjtBQUNFLGVBQVcsVUFEYjtBQUVFLFlBQVEsaUJBRlY7QUFHRSxrQkFBYyxpQkFIaEI7QUFJRSxlQUFXLE1BSmI7QUFLRSx1QkFBbUIsS0FMckIsRUFmUTs7QUFzQlI7QUFDRSxlQUFXLFVBRGI7QUFFRSxZQUFRLHdCQUZWO0FBR0Usa0JBQWMsYUFIaEI7QUFJRSxlQUFXLE1BSmI7QUFLRSx1QkFBbUIsS0FMckIsRUF0QlE7O0FBNkJSO0FBQ0UsZUFBVyxVQURiO0FBRUUsWUFBUSxhQUZWO0FBR0Usa0JBQWMsYUFIaEI7QUFJRSxlQUFXLE1BSmI7QUFLRSx1QkFBbUIsS0FMckIsRUE3QlE7O0FBb0NSO0FBQ0UsZUFBVyxVQURiO0FBRUUsWUFBUSxpQkFGVjtBQUdFLGtCQUFjLGNBSGhCO0FBSUUsZUFBVyxNQUpiO0FBS0UsdUJBQW1CLEtBTHJCLEVBcENROztBQTJDUjtBQUNFLGVBQVcsVUFEYjtBQUVFLFlBQVEsWUFGVjtBQUdFLGtCQUFjLFlBSGhCO0FBSUUsZUFBVyxNQUpiO0FBS0UsdUJBQW1CLEtBTHJCLEVBM0NROztBQWtEUjtBQUNFLGVBQVcsVUFEYjtBQUVFLFlBQVEsa0JBRlY7QUFHRSxr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QXhsQ1E7O0FBK2xDUjtBQUNFLGVBQVcsVUFEYjtBQUVFLFlBQVEsYUFGVjtBQUdFLGtCQUFjLGFBSGhCO0FBSUUsZUFBVyxNQUpiO0FBS0UsdUJBQW1CLEtBTHJCLEVBL2xDUTs7QUFzbUNSO0FBQ0UsZUFBVyxVQURiO0FBRUUsWUFBUSxVQUZWO0FBR0Usa0JBQWMsVUFIaEI7QUFJRSxlQUFXLE1BSmI7QUFLRSx1QkFBbUIsS0FMckIsRUF0bUNROztBQTZtQ1I7QUFDRSxlQUFXLFVBRGI7QUFFRSxZQUFRLGlCQUZWO0FBR0Usa0JBQWMsaUJBSGhCO0FBSUUsZUFBVyxNQUpiO0FBS0UsdUJBQW1CLEtBTHJCLEVBN21DUTs7QUFvbkNSO0FBQ0UsZUFBVyxVQURiO0FBRUUsWUFBUSxNQUZWO0FBR0Usa0JBQWMsTUFIaEI7QUFJRSxlQUFXLE1BSmI7QUFLRSx1QkFBbUIsS0FMckIsRUFwbkNROztBQTJuQ1I7QUFDRSxlQUFXLFVBRGI7QUFFRSxZQUFRLFlBRlY7QUFHRSxrQkFBYyxZQUhoQjtBQUlFLGVBQVcsTUFKYjtBQUtFLHVCQUFtQixLQUxyQixFQTNuQ1E7O0FBa29DUjtBQUNFLGVBQVcsVUFEYjtBQUVFLFlBQVEsTUFGVjtBQUdFLGtCQUFjLE1BSGhCO0FBSUUsZUFBVyxNQUpiO0FBS0UsdUJBQW1CLEtBTHJCLEVBbG9DUSxDQU5HLEUiLCJmaWxlIjoiMzcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XHJcbiAgXCJpZFwiOiBcIjI4NTI2MzdcIixcclxuICBcIm5hbWVcIjogXCJ1bml1aeWbvuagh+W6k1wiLFxyXG4gIFwiZm9udF9mYW1pbHlcIjogXCJ1bmlpY29uc1wiLFxyXG4gIFwiY3NzX3ByZWZpeF90ZXh0XCI6IFwidW5pdWktXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxyXG4gIFwiZ2x5cGhzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJpY29uX2lkXCI6IFwiMjUwMjcwNDlcIixcclxuICAgICAgXCJuYW1lXCI6IFwieWFuc2VcIixcclxuICAgICAgXCJmb250X2NsYXNzXCI6IFwiY29sb3JcIixcclxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTZjZlwiLFxyXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1OTA4N1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpY29uX2lkXCI6IFwiMjUwMjcwNDhcIixcclxuICAgICAgXCJuYW1lXCI6IFwid2FsbGV0XCIsXHJcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcIndhbGxldFwiLFxyXG4gICAgICBcInVuaWNvZGVcIjogXCJlNmIxXCIsXHJcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU5MDU3XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImljb25faWRcIjogXCIyNTAxNTcyMFwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJzZXR0aW5ncy1maWxsZWRcIixcclxuICAgICAgXCJmb250X2NsYXNzXCI6IFwic2V0dGluZ3MtZmlsbGVkXCIsXHJcbiAgICAgIFwidW5pY29kZVwiOiBcImU2Y2VcIixcclxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTkwODZcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI1MDE1NDM0XCIsXHJcbiAgICAgIFwibmFtZVwiOiBcInNoaW1pbmdyZW56aGVuZy1maWxsZWRcIixcclxuICAgICAgXCJmb250X2NsYXNzXCI6IFwiYXV0aC1maWxsZWRcIixcclxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTZjY1wiLFxyXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1OTA4NFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ5MzQyNDZcIixcclxuICAgICAgXCJuYW1lXCI6IFwic2hvcC1maWxsZWRcIixcclxuICAgICAgXCJmb250X2NsYXNzXCI6IFwic2hvcC1maWxsZWRcIixcclxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTZjZFwiLFxyXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1OTA4NVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ5MzQxNTlcIixcclxuICAgICAgXCJuYW1lXCI6IFwic3RhZmYtZmlsbGVkLTAxXCIsXHJcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcInN0YWZmLWZpbGxlZFwiLFxyXG4gICAgICBcInVuaWNvZGVcIjogXCJlNmNiXCIsXHJcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU5MDgzXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImljb25faWRcIjogXCIyNDkzMjQ2MVwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJWSVAtZmlsbGVkXCIsXHJcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcInZpcC1maWxsZWRcIixcclxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTZjNlwiLFxyXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1OTA3OFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ5MzI0NjJcIixcclxuICAgICAgXCJuYW1lXCI6IFwicGx1c19jaXJjbGVfZmlsbFwiLFxyXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJwbHVzLWZpbGxlZFwiLFxyXG4gICAgICBcInVuaWNvZGVcIjogXCJlNmM3XCIsXHJcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU5MDc5XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImljb25faWRcIjogXCIyNDkzMjQ2M1wiLFxyXG4gICAgICBcIm5hbWVcIjogXCJmb2xkZXJfYWRkLWZpbGxlZFwiLFxyXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJmb2xkZXItYWRkLWZpbGxlZFwiLFxyXG4gICAgICBcInVuaWNvZGVcIjogXCJlNmM4XCIsXHJcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU5MDgwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImljb25faWRcIjogXCIyNDkzMjQ2NFwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJ5YW5zZS1maWxsZWRcIixcclxuICAgICAgXCJmb250X2NsYXNzXCI6IFwiY29sb3ItZmlsbGVkXCIsXHJcbiAgICAgIFwidW5pY29kZVwiOiBcImU2YzlcIixcclxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTkwODFcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0OTMyNDY1XCIsXHJcbiAgICAgIFwibmFtZVwiOiBcInR1bmUtZmlsbGVkXCIsXHJcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcInR1bmUtZmlsbGVkXCIsXHJcbiAgICAgIFwidW5pY29kZVwiOiBcImU2Y2FcIixcclxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTkwODJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0OTMyNDU1XCIsXHJcbiAgICAgIFwibmFtZVwiOiBcImEtcmlsaWRha2EtZmlsbGVkXCIsXHJcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcImNhbGVuZGFyLWZpbGxlZFwiLFxyXG4gICAgICBcInVuaWNvZGVcIjogXCJlNmMwXCIsXHJcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU5MDcyXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImljb25faWRcIjogXCIyNDkzMjQ1NlwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJub3RpZmljYXRpb24tZmlsbGVkXCIsXHJcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcIm5vdGlmaWNhdGlvbi1maWxsZWRcIixcclxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTZjMVwiLFxyXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1OTA3M1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ5MzI0NTdcIixcclxuICAgICAgXCJuYW1lXCI6IFwid2FsbGV0LWZpbGxlZFwiLFxyXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJ3YWxsZXQtZmlsbGVkXCIsXHJcbiAgICAgIFwidW5pY29kZVwiOiBcImU2YzJcIixcclxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTkwNzRcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0OTMyNDU4XCIsXHJcbiAgICAgIFwibmFtZVwiOiBcInBhaWhhbmdiYW5nLWZpbGxlZFwiLFxyXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJtZWRhbC1maWxsZWRcIixcclxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTZjM1wiLFxyXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1OTA3NVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ5MzI0NTlcIixcclxuICAgICAgXCJuYW1lXCI6IFwiZ2lmdC1maWxsZWRcIixcclxuICAgICAgXCJmb250X2NsYXNzXCI6IFwiZ2lmdC1maWxsZWRcIixcclxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTZjNFwiLFxyXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1OTA3NlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ5MzI0NjBcIixcclxuICAgICAgXCJuYW1lXCI6IFwiZmlyZS1maWxsZWRcIixcclxuICAgICAgXCJmb250X2NsYXNzXCI6IFwiZmlyZS1maWxsZWRcIixcclxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTZjNVwiLFxyXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1OTA3N1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ5MjgwMDFcIixcclxuICAgICAgXCJuYW1lXCI6IFwicmVmcmVzaGVtcHR5XCIsXHJcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcInJlZnJlc2hlbXB0eVwiLFxyXG4gICAgICBcInVuaWNvZGVcIjogXCJlNmJmXCIsXHJcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU5MDcxXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImljb25faWRcIjogXCIyNDkyNjg1M1wiLFxyXG4gICAgICBcIm5hbWVcIjogXCJsb2NhdGlvbi1lbGxpcHNlXCIsXHJcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcImxvY2F0aW9uLWZpbGxlZFwiLFxyXG4gICAgICBcInVuaWNvZGVcIjogXCJlNmFmXCIsXHJcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU5MDU1XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImljb25faWRcIjogXCIyNDkyNjczNVwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJwZXJzb24tZmlsbGVkXCIsXHJcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcInBlcnNvbi1maWxsZWRcIixcclxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTY5ZFwiLFxyXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1OTAzN1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ5MjY3MDNcIixcclxuICAgICAgXCJuYW1lXCI6IFwicGVyc29uYWRkLWZpbGxlZFwiLFxyXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJwZXJzb25hZGQtZmlsbGVkXCIsXHJcbiAgICAgIFwidW5pY29kZVwiOiBcImU2OThcIixcclxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTkwMzJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0OTIzMzUxXCIsXHJcbiAgICAgIFwibmFtZVwiOiBcImJhY2tcIixcclxuICAgICAgXCJmb250X2NsYXNzXCI6IFwiYmFja1wiLFxyXG4gICAgICBcInVuaWNvZGVcIjogXCJlNmI5XCIsXHJcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU5MDY1XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImljb25faWRcIjogXCIyNDkyMzM1MlwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJmb3J3YXJkXCIsXHJcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcImZvcndhcmRcIixcclxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTZiYVwiLFxyXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1OTA2NlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ5MjMzNTNcIixcclxuICAgICAgXCJuYW1lXCI6IFwiYXJyb3d0aGlucmlnaHRcIixcclxuICAgICAgXCJmb250X2NsYXNzXCI6IFwiYXJyb3ctcmlnaHRcIixcclxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTZiYlwiLFxyXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1OTA2N1xyXG4gICAgfSxcclxuXHRcdHtcclxuXHRcdCAgXCJpY29uX2lkXCI6IFwiMjQ5MjMzNTNcIixcclxuXHRcdCAgXCJuYW1lXCI6IFwiYXJyb3d0aGlucmlnaHRcIixcclxuXHRcdCAgXCJmb250X2NsYXNzXCI6IFwiYXJyb3d0aGlucmlnaHRcIixcclxuXHRcdCAgXCJ1bmljb2RlXCI6IFwiZTZiYlwiLFxyXG5cdFx0ICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1OTA2N1xyXG5cdFx0fSxcclxuICAgIHtcclxuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ5MjMzNTRcIixcclxuICAgICAgXCJuYW1lXCI6IFwiYXJyb3d0aGlubGVmdFwiLFxyXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJhcnJvdy1sZWZ0XCIsXHJcbiAgICAgIFwidW5pY29kZVwiOiBcImU2YmNcIixcclxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTkwNjhcclxuICAgIH0sXHJcblx0XHR7XHJcblx0XHQgIFwiaWNvbl9pZFwiOiBcIjI0OTIzMzU0XCIsXHJcblx0XHQgIFwibmFtZVwiOiBcImFycm93dGhpbmxlZnRcIixcclxuXHRcdCAgXCJmb250X2NsYXNzXCI6IFwiYXJyb3d0aGlubGVmdFwiLFxyXG5cdFx0ICBcInVuaWNvZGVcIjogXCJlNmJjXCIsXHJcblx0XHQgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU5MDY4XHJcblx0XHR9LFxyXG4gICAge1xyXG4gICAgICBcImljb25faWRcIjogXCIyNDkyMzM1NVwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJhcnJvd3RoaW51cFwiLFxyXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJhcnJvdy11cFwiLFxyXG4gICAgICBcInVuaWNvZGVcIjogXCJlNmJkXCIsXHJcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU5MDY5XHJcbiAgICB9LFxyXG5cdFx0e1xyXG5cdFx0ICBcImljb25faWRcIjogXCIyNDkyMzM1NVwiLFxyXG5cdFx0ICBcIm5hbWVcIjogXCJhcnJvd3RoaW51cFwiLFxyXG5cdFx0ICBcImZvbnRfY2xhc3NcIjogXCJhcnJvd3RoaW51cFwiLFxyXG5cdFx0ICBcInVuaWNvZGVcIjogXCJlNmJkXCIsXHJcblx0XHQgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU5MDY5XHJcblx0XHR9LFxyXG4gICAge1xyXG4gICAgICBcImljb25faWRcIjogXCIyNDkyMzM1NlwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJhcnJvd3RoaW5kb3duXCIsXHJcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcImFycm93LWRvd25cIixcclxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTZiZVwiLFxyXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1OTA3MFxyXG4gICAgfSx7XHJcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0OTIzMzU2XCIsXHJcbiAgICAgIFwibmFtZVwiOiBcImFycm93dGhpbmRvd25cIixcclxuICAgICAgXCJmb250X2NsYXNzXCI6IFwiYXJyb3d0aGluZG93blwiLFxyXG4gICAgICBcInVuaWNvZGVcIjogXCJlNmJlXCIsXHJcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU5MDcwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImljb25faWRcIjogXCIyNDkyMzM0OVwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJhcnJvd2Rvd25cIixcclxuICAgICAgXCJmb250X2NsYXNzXCI6IFwiYm90dG9tXCIsXHJcbiAgICAgIFwidW5pY29kZVwiOiBcImU2YjhcIixcclxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTkwNjRcclxuICAgIH0se1xyXG4gICAgICBcImljb25faWRcIjogXCIyNDkyMzM0OVwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJhcnJvd2Rvd25cIixcclxuICAgICAgXCJmb250X2NsYXNzXCI6IFwiYXJyb3dkb3duXCIsXHJcbiAgICAgIFwidW5pY29kZVwiOiBcImU2YjhcIixcclxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTkwNjRcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0OTIzMzQ2XCIsXHJcbiAgICAgIFwibmFtZVwiOiBcImFycm93cmlnaHRcIixcclxuICAgICAgXCJmb250X2NsYXNzXCI6IFwicmlnaHRcIixcclxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTZiNVwiLFxyXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1OTA2MVxyXG4gICAgfSxcclxuXHRcdHtcclxuXHRcdCAgXCJpY29uX2lkXCI6IFwiMjQ5MjMzNDZcIixcclxuXHRcdCAgXCJuYW1lXCI6IFwiYXJyb3dyaWdodFwiLFxyXG5cdFx0ICBcImZvbnRfY2xhc3NcIjogXCJhcnJvd3JpZ2h0XCIsXHJcblx0XHQgIFwidW5pY29kZVwiOiBcImU2YjVcIixcclxuXHRcdCAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTkwNjFcclxuXHRcdH0sXHJcbiAgICB7XHJcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0OTIzMzQ3XCIsXHJcbiAgICAgIFwibmFtZVwiOiBcImFycm93dXBcIixcclxuICAgICAgXCJmb250X2NsYXNzXCI6IFwidG9wXCIsXHJcbiAgICAgIFwidW5pY29kZVwiOiBcImU2YjZcIixcclxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTkwNjJcclxuICAgIH0sXHJcblx0XHR7XHJcblx0XHQgIFwiaWNvbl9pZFwiOiBcIjI0OTIzMzQ3XCIsXHJcblx0XHQgIFwibmFtZVwiOiBcImFycm93dXBcIixcclxuXHRcdCAgXCJmb250X2NsYXNzXCI6IFwiYXJyb3d1cFwiLFxyXG5cdFx0ICBcInVuaWNvZGVcIjogXCJlNmI2XCIsXHJcblx0XHQgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU5MDYyXHJcblx0XHR9LFxyXG4gICAge1xyXG4gICAgICBcImljb25faWRcIjogXCIyNDkyMzM0OFwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJhcnJvd2xlZnRcIixcclxuICAgICAgXCJmb250X2NsYXNzXCI6IFwibGVmdFwiLFxyXG4gICAgICBcInVuaWNvZGVcIjogXCJlNmI3XCIsXHJcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU5MDYzXHJcbiAgICB9LFxyXG5cdFx0e1xyXG5cdFx0ICBcImljb25faWRcIjogXCIyNDkyMzM0OFwiLFxyXG5cdFx0ICBcIm5hbWVcIjogXCJhcnJvd2xlZnRcIixcclxuXHRcdCAgXCJmb250X2NsYXNzXCI6IFwiYXJyb3dsZWZ0XCIsXHJcblx0XHQgIFwidW5pY29kZVwiOiBcImU2YjdcIixcclxuXHRcdCAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTkwNjNcclxuXHRcdH0sXHJcbiAgICB7XHJcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0OTIzMzM0XCIsXHJcbiAgICAgIFwibmFtZVwiOiBcImV5ZVwiLFxyXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJleWVcIixcclxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTY1MVwiLFxyXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1ODk2MVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ5MjMzMzVcIixcclxuICAgICAgXCJuYW1lXCI6IFwiZXllLWZpbGxlZFwiLFxyXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJleWUtZmlsbGVkXCIsXHJcbiAgICAgIFwidW5pY29kZVwiOiBcImU2NmFcIixcclxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTg5ODZcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0OTIzMzM2XCIsXHJcbiAgICAgIFwibmFtZVwiOiBcImV5ZS1zbGFzaFwiLFxyXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJleWUtc2xhc2hcIixcclxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTZiM1wiLFxyXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1OTA1OVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ5MjMzMzdcIixcclxuICAgICAgXCJuYW1lXCI6IFwiZXllLXNsYXNoLWZpbGxlZFwiLFxyXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJleWUtc2xhc2gtZmlsbGVkXCIsXHJcbiAgICAgIFwidW5pY29kZVwiOiBcImU2YjRcIixcclxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTkwNjBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0OTIzMzA1XCIsXHJcbiAgICAgIFwibmFtZVwiOiBcImluZm8tZmlsbGVkXCIsXHJcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcImluZm8tZmlsbGVkXCIsXHJcbiAgICAgIFwidW5pY29kZVwiOiBcImU2NDlcIixcclxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTg5NTNcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0OTIzMjk5XCIsXHJcbiAgICAgIFwibmFtZVwiOiBcInJlbG9hZC0wMVwiLFxyXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJyZWxvYWRcIixcclxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTZiMlwiLFxyXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1OTA1OFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ5MjMxOTVcIixcclxuICAgICAgXCJuYW1lXCI6IFwibWljX3NsYXNoX2ZpbGxcIixcclxuICAgICAgXCJmb250X2NsYXNzXCI6IFwibWljb2ZmLWZpbGxlZFwiLFxyXG4gICAgICBcInVuaWNvZGVcIjogXCJlNmIwXCIsXHJcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU5MDU2XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImljb25faWRcIjogXCIyNDkyMzE2NVwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJtYXAtcGluLWVsbGlwc2VcIixcclxuICAgICAgXCJmb250X2NsYXNzXCI6IFwibWFwLXBpbi1lbGxpcHNlXCIsXHJcbiAgICAgIFwidW5pY29kZVwiOiBcImU2YWNcIixcclxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTkwNTJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0OTIzMTY2XCIsXHJcbiAgICAgIFwibmFtZVwiOiBcIm1hcC1waW5cIixcclxuICAgICAgXCJmb250X2NsYXNzXCI6IFwibWFwLXBpblwiLFxyXG4gICAgICBcInVuaWNvZGVcIjogXCJlNmFkXCIsXHJcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU5MDUzXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImljb25faWRcIjogXCIyNDkyMzE2N1wiLFxyXG4gICAgICBcIm5hbWVcIjogXCJsb2NhdGlvblwiLFxyXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJsb2NhdGlvblwiLFxyXG4gICAgICBcInVuaWNvZGVcIjogXCJlNmFlXCIsXHJcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU5MDU0XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImljb25faWRcIjogXCIyNDkyMzA2NFwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJzdGFyaGFsZlwiLFxyXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJzdGFyaGFsZlwiLFxyXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjgzXCIsXHJcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU5MDExXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImljb25faWRcIjogXCIyNDkyMzA2NVwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJzdGFyXCIsXHJcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcInN0YXJcIixcclxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTY4OFwiLFxyXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1OTAxNlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ5MjMwNjZcIixcclxuICAgICAgXCJuYW1lXCI6IFwic3Rhci1maWxsZWRcIixcclxuICAgICAgXCJmb250X2NsYXNzXCI6IFwic3Rhci1maWxsZWRcIixcclxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTY4ZlwiLFxyXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1OTAyM1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4OTk2NDZcIixcclxuICAgICAgXCJuYW1lXCI6IFwiYS1yaWxpZGFrYVwiLFxyXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJjYWxlbmRhclwiLFxyXG4gICAgICBcInVuaWNvZGVcIjogXCJlNmEwXCIsXHJcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU5MDQwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImljb25faWRcIjogXCIyNDg5OTY0N1wiLFxyXG4gICAgICBcIm5hbWVcIjogXCJmaXJlXCIsXHJcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcImZpcmVcIixcclxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTZhMVwiLFxyXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1OTA0MVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4OTk2NDhcIixcclxuICAgICAgXCJuYW1lXCI6IFwicGFpaGFuZ2JhbmdcIixcclxuICAgICAgXCJmb250X2NsYXNzXCI6IFwibWVkYWxcIixcclxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTZhMlwiLFxyXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1OTA0MlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4OTk2NDlcIixcclxuICAgICAgXCJuYW1lXCI6IFwiZm9udFwiLFxyXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJmb250XCIsXHJcbiAgICAgIFwidW5pY29kZVwiOiBcImU2YTNcIixcclxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTkwNDNcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0ODk5NjUwXCIsXHJcbiAgICAgIFwibmFtZVwiOiBcImdpZnRcIixcclxuICAgICAgXCJmb250X2NsYXNzXCI6IFwiZ2lmdFwiLFxyXG4gICAgICBcInVuaWNvZGVcIjogXCJlNmE0XCIsXHJcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU5MDQ0XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImljb25faWRcIjogXCIyNDg5OTY1MVwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJsaW5rXCIsXHJcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcImxpbmtcIixcclxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTZhNVwiLFxyXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1OTA0NVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4OTk2NTJcIixcclxuICAgICAgXCJuYW1lXCI6IFwibm90aWZpY2F0aW9uXCIsXHJcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcIm5vdGlmaWNhdGlvblwiLFxyXG4gICAgICBcInVuaWNvZGVcIjogXCJlNmE2XCIsXHJcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU5MDQ2XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImljb25faWRcIjogXCIyNDg5OTY1M1wiLFxyXG4gICAgICBcIm5hbWVcIjogXCJzdGFmZlwiLFxyXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJzdGFmZlwiLFxyXG4gICAgICBcInVuaWNvZGVcIjogXCJlNmE3XCIsXHJcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU5MDQ3XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImljb25faWRcIjogXCIyNDg5OTY1NFwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJWSVBcIixcclxuICAgICAgXCJmb250X2NsYXNzXCI6IFwidmlwXCIsXHJcbiAgICAgIFwidW5pY29kZVwiOiBcImU2YThcIixcclxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTkwNDhcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0ODk5NjU1XCIsXHJcbiAgICAgIFwibmFtZVwiOiBcImZvbGRlcl9hZGRcIixcclxuICAgICAgXCJmb250X2NsYXNzXCI6IFwiZm9sZGVyLWFkZFwiLFxyXG4gICAgICBcInVuaWNvZGVcIjogXCJlNmE5XCIsXHJcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU5MDQ5XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImljb25faWRcIjogXCIyNDg5OTY1NlwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJ0dW5lXCIsXHJcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcInR1bmVcIixcclxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTZhYVwiLFxyXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1OTA1MFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4OTk2NTdcIixcclxuICAgICAgXCJuYW1lXCI6IFwic2hpbWluZ3JlbnpoZW5nXCIsXHJcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcImF1dGhcIixcclxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTZhYlwiLFxyXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1OTA1MVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4OTk1NjVcIixcclxuICAgICAgXCJuYW1lXCI6IFwicGVyc29uXCIsXHJcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcInBlcnNvblwiLFxyXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjk5XCIsXHJcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU5MDMzXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImljb25faWRcIjogXCIyNDg5OTU2NlwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJlbWFpbC1maWxsZWRcIixcclxuICAgICAgXCJmb250X2NsYXNzXCI6IFwiZW1haWwtZmlsbGVkXCIsXHJcbiAgICAgIFwidW5pY29kZVwiOiBcImU2OWFcIixcclxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTkwMzRcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0ODk5NTY3XCIsXHJcbiAgICAgIFwibmFtZVwiOiBcInBob25lLWZpbGxlZFwiLFxyXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJwaG9uZS1maWxsZWRcIixcclxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTY5YlwiLFxyXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1OTAzNVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4OTk1NjhcIixcclxuICAgICAgXCJuYW1lXCI6IFwicGhvbmVcIixcclxuICAgICAgXCJmb250X2NsYXNzXCI6IFwicGhvbmVcIixcclxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTY5Y1wiLFxyXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1OTAzNlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4OTk1NzBcIixcclxuICAgICAgXCJuYW1lXCI6IFwiZW1haWxcIixcclxuICAgICAgXCJmb250X2NsYXNzXCI6IFwiZW1haWxcIixcclxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTY5ZVwiLFxyXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1OTAzOFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4OTk1NzFcIixcclxuICAgICAgXCJuYW1lXCI6IFwicGVyc29uYWRkXCIsXHJcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcInBlcnNvbmFkZFwiLFxyXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjlmXCIsXHJcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU5MDM5XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImljb25faWRcIjogXCIyNDg5OTU1OFwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJjaGF0Ym94ZXMtZmlsbGVkXCIsXHJcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcImNoYXRib3hlcy1maWxsZWRcIixcclxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTY5MlwiLFxyXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1OTAyNlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4OTk1NTlcIixcclxuICAgICAgXCJuYW1lXCI6IFwiY29udGFjdFwiLFxyXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJjb250YWN0XCIsXHJcbiAgICAgIFwidW5pY29kZVwiOiBcImU2OTNcIixcclxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTkwMjdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0ODk5NTYwXCIsXHJcbiAgICAgIFwibmFtZVwiOiBcImNoYXRidWJibGUtZmlsbGVkXCIsXHJcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcImNoYXRidWJibGUtZmlsbGVkXCIsXHJcbiAgICAgIFwidW5pY29kZVwiOiBcImU2OTRcIixcclxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTkwMjhcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0ODk5NTYxXCIsXHJcbiAgICAgIFwibmFtZVwiOiBcImNvbnRhY3QtZmlsbGVkXCIsXHJcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcImNvbnRhY3QtZmlsbGVkXCIsXHJcbiAgICAgIFwidW5pY29kZVwiOiBcImU2OTVcIixcclxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTkwMjlcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0ODk5NTYyXCIsXHJcbiAgICAgIFwibmFtZVwiOiBcImNoYXRib3hlc1wiLFxyXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJjaGF0Ym94ZXNcIixcclxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTY5NlwiLFxyXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1OTAzMFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4OTk1NjNcIixcclxuICAgICAgXCJuYW1lXCI6IFwiY2hhdGJ1YmJsZVwiLFxyXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJjaGF0YnViYmxlXCIsXHJcbiAgICAgIFwidW5pY29kZVwiOiBcImU2OTdcIixcclxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTkwMzFcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0ODgxMjkwXCIsXHJcbiAgICAgIFwibmFtZVwiOiBcInVwbG9hZC1maWxsZWRcIixcclxuICAgICAgXCJmb250X2NsYXNzXCI6IFwidXBsb2FkLWZpbGxlZFwiLFxyXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjhlXCIsXHJcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU5MDIyXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImljb25faWRcIjogXCIyNDg4MTI5MlwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJ1cGxvYWRcIixcclxuICAgICAgXCJmb250X2NsYXNzXCI6IFwidXBsb2FkXCIsXHJcbiAgICAgIFwidW5pY29kZVwiOiBcImU2OTBcIixcclxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTkwMjRcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0ODgxMjkzXCIsXHJcbiAgICAgIFwibmFtZVwiOiBcIndlaXhpblwiLFxyXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJ3ZWl4aW5cIixcclxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTY5MVwiLFxyXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1OTAyNVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4ODEyNzRcIixcclxuICAgICAgXCJuYW1lXCI6IFwiY29tcG9zZVwiLFxyXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJjb21wb3NlXCIsXHJcbiAgICAgIFwidW5pY29kZVwiOiBcImU2N2ZcIixcclxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTkwMDdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0ODgxMjc1XCIsXHJcbiAgICAgIFwibmFtZVwiOiBcInFxXCIsXHJcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcInFxXCIsXHJcbiAgICAgIFwidW5pY29kZVwiOiBcImU2ODBcIixcclxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTkwMDhcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0ODgxMjc2XCIsXHJcbiAgICAgIFwibmFtZVwiOiBcImRvd25sb2FkLWZpbGxlZFwiLFxyXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJkb3dubG9hZC1maWxsZWRcIixcclxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTY4MVwiLFxyXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1OTAwOVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4ODEyNzdcIixcclxuICAgICAgXCJuYW1lXCI6IFwicGVuZ3lvdXF1YW5cIixcclxuICAgICAgXCJmb250X2NsYXNzXCI6IFwicHlxXCIsXHJcbiAgICAgIFwidW5pY29kZVwiOiBcImU2ODJcIixcclxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTkwMTBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0ODgxMjc5XCIsXHJcbiAgICAgIFwibmFtZVwiOiBcInNvdW5kXCIsXHJcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcInNvdW5kXCIsXHJcbiAgICAgIFwidW5pY29kZVwiOiBcImU2ODRcIixcclxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTkwMTJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0ODgxMjgwXCIsXHJcbiAgICAgIFwibmFtZVwiOiBcInRyYXNoLWZpbGxlZFwiLFxyXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJ0cmFzaC1maWxsZWRcIixcclxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTY4NVwiLFxyXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1OTAxM1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4ODEyODFcIixcclxuICAgICAgXCJuYW1lXCI6IFwic291bmQtZmlsbGVkXCIsXHJcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcInNvdW5kLWZpbGxlZFwiLFxyXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjg2XCIsXHJcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU5MDE0XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImljb25faWRcIjogXCIyNDg4MTI4MlwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJ0cmFzaFwiLFxyXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJ0cmFzaFwiLFxyXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjg3XCIsXHJcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU5MDE1XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImljb25faWRcIjogXCIyNDg4MTI4NFwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJ2aWRlb2NhbS1maWxsZWRcIixcclxuICAgICAgXCJmb250X2NsYXNzXCI6IFwidmlkZW9jYW0tZmlsbGVkXCIsXHJcbiAgICAgIFwidW5pY29kZVwiOiBcImU2ODlcIixcclxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTkwMTdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0ODgxMjg1XCIsXHJcbiAgICAgIFwibmFtZVwiOiBcInNwaW5uZXItY3ljbGVcIixcclxuICAgICAgXCJmb250X2NsYXNzXCI6IFwic3Bpbm5lci1jeWNsZVwiLFxyXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjhhXCIsXHJcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU5MDE4XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImljb25faWRcIjogXCIyNDg4MTI4NlwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJ3ZWlib1wiLFxyXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJ3ZWlib1wiLFxyXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjhiXCIsXHJcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU5MDE5XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImljb25faWRcIjogXCIyNDg4MTI4OFwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJ2aWRlb2NhbVwiLFxyXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJ2aWRlb2NhbVwiLFxyXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjhjXCIsXHJcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU5MDIwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImljb25faWRcIjogXCIyNDg4MTI4OVwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJkb3dubG9hZFwiLFxyXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJkb3dubG9hZFwiLFxyXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjhkXCIsXHJcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU5MDIxXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImljb25faWRcIjogXCIyNDg3OTYwMVwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJoZWxwXCIsXHJcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcImhlbHBcIixcclxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTY3OVwiLFxyXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1OTAwMVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4Nzk2MDJcIixcclxuICAgICAgXCJuYW1lXCI6IFwibmF2aWdhdGUtZmlsbGVkXCIsXHJcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcIm5hdmlnYXRlLWZpbGxlZFwiLFxyXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjdhXCIsXHJcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU5MDAyXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImljb25faWRcIjogXCIyNDg3OTYwM1wiLFxyXG4gICAgICBcIm5hbWVcIjogXCJwbHVzZW1wdHlcIixcclxuICAgICAgXCJmb250X2NsYXNzXCI6IFwicGx1c2VtcHR5XCIsXHJcbiAgICAgIFwidW5pY29kZVwiOiBcImU2N2JcIixcclxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTkwMDNcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0ODc5NjA0XCIsXHJcbiAgICAgIFwibmFtZVwiOiBcInNtYWxsY2lyY2xlXCIsXHJcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcInNtYWxsY2lyY2xlXCIsXHJcbiAgICAgIFwidW5pY29kZVwiOiBcImU2N2NcIixcclxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTkwMDRcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0ODc5NjA1XCIsXHJcbiAgICAgIFwibmFtZVwiOiBcIm1pbnVzLWZpbGxlZFwiLFxyXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJtaW51cy1maWxsZWRcIixcclxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTY3ZFwiLFxyXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1OTAwNVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4Nzk2MDZcIixcclxuICAgICAgXCJuYW1lXCI6IFwibWljb2ZmXCIsXHJcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcIm1pY29mZlwiLFxyXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjdlXCIsXHJcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU5MDA2XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImljb25faWRcIjogXCIyNDg3OTU4OFwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJjbG9zZWVtcHR5XCIsXHJcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcImNsb3NlZW1wdHlcIixcclxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTY2Y1wiLFxyXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1ODk4OFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4Nzk1ODlcIixcclxuICAgICAgXCJuYW1lXCI6IFwiY2xlYXJcIixcclxuICAgICAgXCJmb250X2NsYXNzXCI6IFwiY2xlYXJcIixcclxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTY2ZFwiLFxyXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1ODk4OVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4Nzk1OTBcIixcclxuICAgICAgXCJuYW1lXCI6IFwibmF2aWdhdGVcIixcclxuICAgICAgXCJmb250X2NsYXNzXCI6IFwibmF2aWdhdGVcIixcclxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTY2ZVwiLFxyXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1ODk5MFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4Nzk1OTFcIixcclxuICAgICAgXCJuYW1lXCI6IFwibWludXNcIixcclxuICAgICAgXCJmb250X2NsYXNzXCI6IFwibWludXNcIixcclxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTY2ZlwiLFxyXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1ODk5MVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4Nzk1OTJcIixcclxuICAgICAgXCJuYW1lXCI6IFwiaW1hZ2VcIixcclxuICAgICAgXCJmb250X2NsYXNzXCI6IFwiaW1hZ2VcIixcclxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTY3MFwiLFxyXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1ODk5MlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4Nzk1OTNcIixcclxuICAgICAgXCJuYW1lXCI6IFwibWljXCIsXHJcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcIm1pY1wiLFxyXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjcxXCIsXHJcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU4OTkzXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImljb25faWRcIjogXCIyNDg3OTU5NFwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJwYXBlcnBsYW5lXCIsXHJcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcInBhcGVycGxhbmVcIixcclxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTY3MlwiLFxyXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1ODk5NFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4Nzk1OTVcIixcclxuICAgICAgXCJuYW1lXCI6IFwiY2xvc2VcIixcclxuICAgICAgXCJmb250X2NsYXNzXCI6IFwiY2xvc2VcIixcclxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTY3M1wiLFxyXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1ODk5NVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4Nzk1OTZcIixcclxuICAgICAgXCJuYW1lXCI6IFwiaGVscC1maWxsZWRcIixcclxuICAgICAgXCJmb250X2NsYXNzXCI6IFwiaGVscC1maWxsZWRcIixcclxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTY3NFwiLFxyXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1ODk5NlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4Nzk1OTdcIixcclxuICAgICAgXCJuYW1lXCI6IFwicGx1cy1maWxsZWRcIixcclxuICAgICAgXCJmb250X2NsYXNzXCI6IFwicGFwZXJwbGFuZS1maWxsZWRcIixcclxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTY3NVwiLFxyXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1ODk5N1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4Nzk1OThcIixcclxuICAgICAgXCJuYW1lXCI6IFwicGx1c1wiLFxyXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJwbHVzXCIsXHJcbiAgICAgIFwidW5pY29kZVwiOiBcImU2NzZcIixcclxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTg5OThcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0ODc5NTk5XCIsXHJcbiAgICAgIFwibmFtZVwiOiBcIm1pYy1maWxsZWRcIixcclxuICAgICAgXCJmb250X2NsYXNzXCI6IFwibWljLWZpbGxlZFwiLFxyXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjc3XCIsXHJcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU4OTk5XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImljb25faWRcIjogXCIyNDg3OTYwMFwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJpbWFnZS1maWxsZWRcIixcclxuICAgICAgXCJmb250X2NsYXNzXCI6IFwiaW1hZ2UtZmlsbGVkXCIsXHJcbiAgICAgIFwidW5pY29kZVwiOiBcImU2NzhcIixcclxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTkwMDBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0ODU1OTAwXCIsXHJcbiAgICAgIFwibmFtZVwiOiBcImxvY2tlZC1maWxsZWRcIixcclxuICAgICAgXCJmb250X2NsYXNzXCI6IFwibG9ja2VkLWZpbGxlZFwiLFxyXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjY4XCIsXHJcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU4OTg0XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImljb25faWRcIjogXCIyNDg1NTkwMVwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJpbmZvXCIsXHJcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcImluZm9cIixcclxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTY2OVwiLFxyXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1ODk4NVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4NTU5MDNcIixcclxuICAgICAgXCJuYW1lXCI6IFwibG9ja2VkXCIsXHJcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcImxvY2tlZFwiLFxyXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjZiXCIsXHJcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU4OTg3XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImljb25faWRcIjogXCIyNDg1NTg4NFwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJjYW1lcmEtZmlsbGVkXCIsXHJcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcImNhbWVyYS1maWxsZWRcIixcclxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTY1OFwiLFxyXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1ODk2OFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4NTU4ODVcIixcclxuICAgICAgXCJuYW1lXCI6IFwiY2hhdC1maWxsZWRcIixcclxuICAgICAgXCJmb250X2NsYXNzXCI6IFwiY2hhdC1maWxsZWRcIixcclxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTY1OVwiLFxyXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1ODk2OVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4NTU4ODZcIixcclxuICAgICAgXCJuYW1lXCI6IFwiY2FtZXJhXCIsXHJcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcImNhbWVyYVwiLFxyXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjVhXCIsXHJcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU4OTcwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImljb25faWRcIjogXCIyNDg1NTg4N1wiLFxyXG4gICAgICBcIm5hbWVcIjogXCJjaXJjbGVcIixcclxuICAgICAgXCJmb250X2NsYXNzXCI6IFwiY2lyY2xlXCIsXHJcbiAgICAgIFwidW5pY29kZVwiOiBcImU2NWJcIixcclxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTg5NzFcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0ODU1ODg4XCIsXHJcbiAgICAgIFwibmFtZVwiOiBcImNoZWNrbWFya2VtcHR5XCIsXHJcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcImNoZWNrbWFya2VtcHR5XCIsXHJcbiAgICAgIFwidW5pY29kZVwiOiBcImU2NWNcIixcclxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTg5NzJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0ODU1ODg5XCIsXHJcbiAgICAgIFwibmFtZVwiOiBcImNoYXRcIixcclxuICAgICAgXCJmb250X2NsYXNzXCI6IFwiY2hhdFwiLFxyXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjVkXCIsXHJcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU4OTczXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImljb25faWRcIjogXCIyNDg1NTg5MFwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJjaXJjbGUtZmlsbGVkXCIsXHJcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcImNpcmNsZS1maWxsZWRcIixcclxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTY1ZVwiLFxyXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1ODk3NFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4NTU4OTFcIixcclxuICAgICAgXCJuYW1lXCI6IFwiZmxhZ1wiLFxyXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJmbGFnXCIsXHJcbiAgICAgIFwidW5pY29kZVwiOiBcImU2NWZcIixcclxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTg5NzVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0ODU1ODkyXCIsXHJcbiAgICAgIFwibmFtZVwiOiBcImZsYWctZmlsbGVkXCIsXHJcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcImZsYWctZmlsbGVkXCIsXHJcbiAgICAgIFwidW5pY29kZVwiOiBcImU2NjBcIixcclxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTg5NzZcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0ODU1ODkzXCIsXHJcbiAgICAgIFwibmFtZVwiOiBcImdlYXItZmlsbGVkXCIsXHJcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcImdlYXItZmlsbGVkXCIsXHJcbiAgICAgIFwidW5pY29kZVwiOiBcImU2NjFcIixcclxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTg5NzdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0ODU1ODk0XCIsXHJcbiAgICAgIFwibmFtZVwiOiBcImhvbWVcIixcclxuICAgICAgXCJmb250X2NsYXNzXCI6IFwiaG9tZVwiLFxyXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjYyXCIsXHJcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU4OTc4XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImljb25faWRcIjogXCIyNDg1NTg5NVwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJob21lLWZpbGxlZFwiLFxyXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJob21lLWZpbGxlZFwiLFxyXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjYzXCIsXHJcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU4OTc5XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImljb25faWRcIjogXCIyNDg1NTg5NlwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJnZWFyXCIsXHJcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcImdlYXJcIixcclxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTY2NFwiLFxyXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1ODk4MFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4NTU4OTdcIixcclxuICAgICAgXCJuYW1lXCI6IFwic21hbGxjaXJjbGUtZmlsbGVkXCIsXHJcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcInNtYWxsY2lyY2xlLWZpbGxlZFwiLFxyXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjY1XCIsXHJcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU4OTgxXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImljb25faWRcIjogXCIyNDg1NTg5OFwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJtYXAtZmlsbGVkXCIsXHJcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcIm1hcC1maWxsZWRcIixcclxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTY2NlwiLFxyXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1ODk4MlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4NTU4OTlcIixcclxuICAgICAgXCJuYW1lXCI6IFwibWFwXCIsXHJcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcIm1hcFwiLFxyXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjY3XCIsXHJcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU4OTgzXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImljb25faWRcIjogXCIyNDg1NTgyNVwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJyZWZyZXNoLWZpbGxlZFwiLFxyXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJyZWZyZXNoLWZpbGxlZFwiLFxyXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjU2XCIsXHJcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU4OTY2XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImljb25faWRcIjogXCIyNDg1NTgyNlwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJyZWZyZXNoXCIsXHJcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcInJlZnJlc2hcIixcclxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTY1N1wiLFxyXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1ODk2N1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4NTU4MDhcIixcclxuICAgICAgXCJuYW1lXCI6IFwiY2xvdWQtdXBsb2FkXCIsXHJcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcImNsb3VkLXVwbG9hZFwiLFxyXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjQ1XCIsXHJcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU4OTQ5XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImljb25faWRcIjogXCIyNDg1NTgwOVwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJjbG91ZC1kb3dubG9hZC1maWxsZWRcIixcclxuICAgICAgXCJmb250X2NsYXNzXCI6IFwiY2xvdWQtZG93bmxvYWQtZmlsbGVkXCIsXHJcbiAgICAgIFwidW5pY29kZVwiOiBcImU2NDZcIixcclxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTg5NTBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0ODU1ODEwXCIsXHJcbiAgICAgIFwibmFtZVwiOiBcImNsb3VkLWRvd25sb2FkXCIsXHJcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcImNsb3VkLWRvd25sb2FkXCIsXHJcbiAgICAgIFwidW5pY29kZVwiOiBcImU2NDdcIixcclxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTg5NTFcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0ODU1ODExXCIsXHJcbiAgICAgIFwibmFtZVwiOiBcImNsb3VkLXVwbG9hZC1maWxsZWRcIixcclxuICAgICAgXCJmb250X2NsYXNzXCI6IFwiY2xvdWQtdXBsb2FkLWZpbGxlZFwiLFxyXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjQ4XCIsXHJcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU4OTUyXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImljb25faWRcIjogXCIyNDg1NTgxM1wiLFxyXG4gICAgICBcIm5hbWVcIjogXCJyZWRvXCIsXHJcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcInJlZG9cIixcclxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTY0YVwiLFxyXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1ODk1NFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4NTU4MTRcIixcclxuICAgICAgXCJuYW1lXCI6IFwiaW1hZ2VzLWZpbGxlZFwiLFxyXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJpbWFnZXMtZmlsbGVkXCIsXHJcbiAgICAgIFwidW5pY29kZVwiOiBcImU2NGJcIixcclxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTg5NTVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0ODU1ODE1XCIsXHJcbiAgICAgIFwibmFtZVwiOiBcInVuZG8tZmlsbGVkXCIsXHJcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcInVuZG8tZmlsbGVkXCIsXHJcbiAgICAgIFwidW5pY29kZVwiOiBcImU2NGNcIixcclxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTg5NTZcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0ODU1ODE2XCIsXHJcbiAgICAgIFwibmFtZVwiOiBcIm1vcmVcIixcclxuICAgICAgXCJmb250X2NsYXNzXCI6IFwibW9yZVwiLFxyXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjRkXCIsXHJcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU4OTU3XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImljb25faWRcIjogXCIyNDg1NTgxN1wiLFxyXG4gICAgICBcIm5hbWVcIjogXCJtb3JlLWZpbGxlZFwiLFxyXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJtb3JlLWZpbGxlZFwiLFxyXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjRlXCIsXHJcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU4OTU4XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImljb25faWRcIjogXCIyNDg1NTgxOFwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJ1bmRvXCIsXHJcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcInVuZG9cIixcclxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTY0ZlwiLFxyXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1ODk1OVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4NTU4MTlcIixcclxuICAgICAgXCJuYW1lXCI6IFwiaW1hZ2VzXCIsXHJcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcImltYWdlc1wiLFxyXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjUwXCIsXHJcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU4OTYwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImljb25faWRcIjogXCIyNDg1NTgyMVwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJwYXBlcmNsaXBcIixcclxuICAgICAgXCJmb250X2NsYXNzXCI6IFwicGFwZXJjbGlwXCIsXHJcbiAgICAgIFwidW5pY29kZVwiOiBcImU2NTJcIixcclxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTg5NjJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0ODU1ODIyXCIsXHJcbiAgICAgIFwibmFtZVwiOiBcInNldHRpbmdzXCIsXHJcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcInNldHRpbmdzXCIsXHJcbiAgICAgIFwidW5pY29kZVwiOiBcImU2NTNcIixcclxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTg5NjNcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0ODU1ODIzXCIsXHJcbiAgICAgIFwibmFtZVwiOiBcInNlYXJjaFwiLFxyXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJzZWFyY2hcIixcclxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTY1NFwiLFxyXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1ODk2NFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4NTU4MjRcIixcclxuICAgICAgXCJuYW1lXCI6IFwicmVkby1maWxsZWRcIixcclxuICAgICAgXCJmb250X2NsYXNzXCI6IFwicmVkby1maWxsZWRcIixcclxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTY1NVwiLFxyXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1ODk2NVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4NDE3MDJcIixcclxuICAgICAgXCJuYW1lXCI6IFwibGlzdFwiLFxyXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJsaXN0XCIsXHJcbiAgICAgIFwidW5pY29kZVwiOiBcImU2NDRcIixcclxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTg5NDhcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0ODQxNDg5XCIsXHJcbiAgICAgIFwibmFtZVwiOiBcIm1haWwtb3Blbi1maWxsZWRcIixcclxuICAgICAgXCJmb250X2NsYXNzXCI6IFwibWFpbC1vcGVuLWZpbGxlZFwiLFxyXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjNhXCIsXHJcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU4OTM4XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImljb25faWRcIjogXCIyNDg0MTQ5MVwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJoYW5kLXRodW1ic2Rvd24tZmlsbGVkXCIsXHJcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcImhhbmQtZG93bi1maWxsZWRcIixcclxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTYzY1wiLFxyXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1ODk0MFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4NDE0OTJcIixcclxuICAgICAgXCJuYW1lXCI6IFwiaGFuZC10aHVtYnNkb3duXCIsXHJcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcImhhbmQtZG93blwiLFxyXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjNkXCIsXHJcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU4OTQxXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImljb25faWRcIjogXCIyNDg0MTQ5M1wiLFxyXG4gICAgICBcIm5hbWVcIjogXCJoYW5kLXRodW1ic3VwLWZpbGxlZFwiLFxyXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJoYW5kLXVwLWZpbGxlZFwiLFxyXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjNlXCIsXHJcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU4OTQyXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImljb25faWRcIjogXCIyNDg0MTQ5NFwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJoYW5kLXRodW1ic3VwXCIsXHJcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcImhhbmQtdXBcIixcclxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTYzZlwiLFxyXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1ODk0M1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4NDE0OTZcIixcclxuICAgICAgXCJuYW1lXCI6IFwiaGVhcnQtZmlsbGVkXCIsXHJcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcImhlYXJ0LWZpbGxlZFwiLFxyXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjQxXCIsXHJcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU4OTQ1XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImljb25faWRcIjogXCIyNDg0MTQ5OFwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJtYWlsLW9wZW5cIixcclxuICAgICAgXCJmb250X2NsYXNzXCI6IFwibWFpbC1vcGVuXCIsXHJcbiAgICAgIFwidW5pY29kZVwiOiBcImU2NDNcIixcclxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTg5NDdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0ODQxNDg4XCIsXHJcbiAgICAgIFwibmFtZVwiOiBcImhlYXJ0XCIsXHJcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcImhlYXJ0XCIsXHJcbiAgICAgIFwidW5pY29kZVwiOiBcImU2MzlcIixcclxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTg5MzdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0ODM5OTYzXCIsXHJcbiAgICAgIFwibmFtZVwiOiBcImxvb3BcIixcclxuICAgICAgXCJmb250X2NsYXNzXCI6IFwibG9vcFwiLFxyXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjMzXCIsXHJcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU4OTMxXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImljb25faWRcIjogXCIyNDgzOTg2NlwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJwdWxsZG93blwiLFxyXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJwdWxsZG93blwiLFxyXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjMyXCIsXHJcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU4OTMwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImljb25faWRcIjogXCIyNDgxMzc5OFwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJzY2FuXCIsXHJcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcInNjYW5cIixcclxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTYyYVwiLFxyXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1ODkyMlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4MTM3ODZcIixcclxuICAgICAgXCJuYW1lXCI6IFwiYmFyc1wiLFxyXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJiYXJzXCIsXHJcbiAgICAgIFwidW5pY29kZVwiOiBcImU2MjdcIixcclxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTg5MTlcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0ODEzNzg4XCIsXHJcbiAgICAgIFwibmFtZVwiOiBcImNhcnQtZmlsbGVkXCIsXHJcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcImNhcnQtZmlsbGVkXCIsXHJcbiAgICAgIFwidW5pY29kZVwiOiBcImU2MjlcIixcclxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTg5MjFcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0ODEzNzkwXCIsXHJcbiAgICAgIFwibmFtZVwiOiBcImNoZWNrYm94XCIsXHJcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcImNoZWNrYm94XCIsXHJcbiAgICAgIFwidW5pY29kZVwiOiBcImU2MmJcIixcclxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTg5MjNcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0ODEzNzkxXCIsXHJcbiAgICAgIFwibmFtZVwiOiBcImNoZWNrYm94LWZpbGxlZFwiLFxyXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJjaGVja2JveC1maWxsZWRcIixcclxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTYyY1wiLFxyXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1ODkyNFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4MTM3OTRcIixcclxuICAgICAgXCJuYW1lXCI6IFwic2hvcFwiLFxyXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJzaG9wXCIsXHJcbiAgICAgIFwidW5pY29kZVwiOiBcImU2MmZcIixcclxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTg5MjdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0ODEzNzk1XCIsXHJcbiAgICAgIFwibmFtZVwiOiBcImhlYWRwaG9uZXNcIixcclxuICAgICAgXCJmb250X2NsYXNzXCI6IFwiaGVhZHBob25lc1wiLFxyXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjMwXCIsXHJcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU4OTI4XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImljb25faWRcIjogXCIyNDgxMzc5NlwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJjYXJ0XCIsXHJcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcImNhcnRcIixcclxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTYzMVwiLFxyXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1ODkyOVxyXG4gICAgfVxyXG4gIF1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///37\n");

/***/ }),
/* 38 */
/*!**************************************************************************************************************!*\
  !*** D:/WebStudyProject/uniapp-project/meeting-demo/uni_modules/uni-icons/components/uni-icons/uniicons.ttf ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/uni_modules/uni-icons/components/uni-icons/uniicons.ttf\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjM4LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi91bmlfbW9kdWxlcy91bmktaWNvbnMvY29tcG9uZW50cy91bmktaWNvbnMvdW5paWNvbnMudHRmXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///38\n");

/***/ }),
/* 39 */
/*!*************************************************************************************************************************************************!*\
  !*** D:/WebStudyProject/uniapp-project/meeting-demo/uni_modules/uni-icons/components/uni-icons/uni-icons.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!../../../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--10-oneOf-0-2!../../../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--10-oneOf-0-3!../../../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-4!../../../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-icons.vue?vue&type=style&index=0&lang=scss& */ 40);
/* harmony import */ var _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 40 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/WebStudyProject/uniapp-project/meeting-demo/uni_modules/uni-icons/components/uni-icons/uni-icons.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".uni-icons": {
    "": {
      "fontFamily": [
        "uniicons",
        0,
        0,
        20
      ],
      "textDecoration": [
        "none",
        0,
        0,
        20
      ],
      "textAlign": [
        "center",
        0,
        0,
        20
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),
/* 41 */
/*!************************************************************************************************************!*\
  !*** D:/WebStudyProject/uniapp-project/meeting-demo/uni_modules/uni-list/components/uni-list/uni-list.vue ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _uni_list_vue_vue_type_template_id_5009d455___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-list.vue?vue&type=template&id=5009d455& */ 42);\n/* harmony import */ var _uni_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-list.vue?vue&type=script&lang=js& */ 44);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./uni-list.vue?vue&type=style&index=0&lang=scss& */ 46).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./uni-list.vue?vue&type=style&index=0&lang=scss& */ 46).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _uni_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _uni_list_vue_vue_type_template_id_5009d455___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _uni_list_vue_vue_type_template_id_5009d455___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"413da9b4\",\n  false,\n  _uni_list_vue_vue_type_template_id_5009d455___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"uni_modules/uni-list/components/uni-list/uni-list.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcUg7QUFDckg7QUFDNEQ7QUFDTDtBQUN2RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLDBEQUFrRDtBQUN0RyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsMERBQWtEO0FBQzNHOztBQUVBOztBQUVBO0FBQ21MO0FBQ25MLGdCQUFnQixvTEFBVTtBQUMxQixFQUFFLDhFQUFNO0FBQ1IsRUFBRSxtRkFBTTtBQUNSLEVBQUUsNEZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsdUZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI0MS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vdW5pLWxpc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUwMDlkNDU1JlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdW5pLWxpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi91bmktbGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi91bmktbGlzdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL3VuaS1saXN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3d6IEFwcC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiNDEzZGE5YjRcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidW5pX21vZHVsZXMvdW5pLWxpc3QvY29tcG9uZW50cy91bmktbGlzdC91bmktbGlzdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///41\n");

/***/ }),
/* 42 */
/*!*******************************************************************************************************************************************!*\
  !*** D:/WebStudyProject/uniapp-project/meeting-demo/uni_modules/uni-list/components/uni-list/uni-list.vue?vue&type=template&id=5009d455& ***!
  \*******************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_list_vue_vue_type_template_id_5009d455___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-list.vue?vue&type=template&id=5009d455& */ 43);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_list_vue_vue_type_template_id_5009d455___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_list_vue_vue_type_template_id_5009d455___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_list_vue_vue_type_template_id_5009d455___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_list_vue_vue_type_template_id_5009d455___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 43 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/WebStudyProject/uniapp-project/meeting-demo/uni_modules/uni-list/components/uni-list/uni-list.vue?vue&type=template&id=5009d455& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "list",
    {
      staticClass: ["uni-list"],
      class: { "uni-list--border": _vm.border },
      attrs: { enableBackToTop: _vm.enableBackToTop, loadmoreoffset: "15" }
    },
    [_vm._t("default")],
    2
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 44 */
/*!*************************************************************************************************************************************!*\
  !*** D:/WebStudyProject/uniapp-project/meeting-demo/uni_modules/uni-list/components/uni-list/uni-list.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--5-0!../../../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!../../../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-list.vue?vue&type=script&lang=js& */ 45);\n/* harmony import */ var _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVkLENBQWdCLGllQUFHLEVBQUMiLCJmaWxlIjoiNDQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3d6IEFwcC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi93eiBBcHAvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi93eiBBcHAvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLWxpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3d6IEFwcC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi93eiBBcHAvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi93eiBBcHAvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLWxpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///44\n");

/***/ }),
/* 45 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/WebStudyProject/uniapp-project/meeting-demo/uni_modules/uni-list/components/uni-list/uni-list.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/**\r\n * List 列表\r\n * @description 列表组件\r\n * @tutorial https://ext.dcloud.net.cn/plugin?id=24\r\n * @property {String} \tborder = [true|false] \t\t标题\r\n */var _default =\n{\n  name: 'uniList',\n  'mp-weixin': {\n    options: {\n      multipleSlots: false } },\n\n\n  props: {\n    enableBackToTop: {\n      type: [Boolean, String],\n      default: false },\n\n    scrollY: {\n      type: [Boolean, String],\n      default: false },\n\n    border: {\n      type: Boolean,\n      default: true } },\n\n\n  // provide() {\n  // \treturn {\n  // \t\tlist: this\n  // \t};\n  // },\n  created: function created() {\n    this.firstChildAppend = false;\n  },\n  methods: {\n    loadMore: function loadMore(e) {\n      this.$emit('scrolltolower');\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdW5pLWxpc3QvY29tcG9uZW50cy91bmktbGlzdC91bmktbGlzdC52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFjQTs7Ozs7O0FBTUE7QUFDQSxpQkFEQTtBQUVBO0FBQ0E7QUFDQSwwQkFEQSxFQURBLEVBRkE7OztBQU9BO0FBQ0E7QUFDQSw2QkFEQTtBQUVBLG9CQUZBLEVBREE7O0FBS0E7QUFDQSw2QkFEQTtBQUVBLG9CQUZBLEVBTEE7O0FBU0E7QUFDQSxtQkFEQTtBQUVBLG1CQUZBLEVBVEEsRUFQQTs7O0FBcUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQTFCQSxxQkEwQkE7QUFDQTtBQUNBLEdBNUJBO0FBNkJBO0FBQ0EsWUFEQSxvQkFDQSxDQURBLEVBQ0E7QUFDQTtBQUNBLEtBSEEsRUE3QkEsRSIsImZpbGUiOiI0NS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8IS0tICNpZm5kZWYgQVBQLU5WVUUgLS0+XHJcblx0PHZpZXcgY2xhc3M9XCJ1bmktbGlzdCB1bmktYm9yZGVyLXRvcC1ib3R0b21cIj5cclxuXHRcdDx2aWV3IHYtaWY9XCJib3JkZXJcIiBjbGFzcz1cInVuaS1saXN0LS1ib3JkZXItdG9wXCI+PC92aWV3PlxyXG5cdFx0PHNsb3QgLz5cclxuXHRcdDx2aWV3IHYtaWY9XCJib3JkZXJcIiBjbGFzcz1cInVuaS1saXN0LS1ib3JkZXItYm90dG9tXCI+PC92aWV3PlxyXG5cdDwvdmlldz5cclxuXHQ8IS0tICNlbmRpZiAtLT5cclxuXHQ8IS0tICNpZmRlZiBBUFAtTlZVRSAtLT5cclxuXHQ8bGlzdCBjbGFzcz1cInVuaS1saXN0XCIgOmNsYXNzPVwieyAndW5pLWxpc3QtLWJvcmRlcic6IGJvcmRlciB9XCIgOmVuYWJsZUJhY2tUb1RvcD1cImVuYWJsZUJhY2tUb1RvcFwiIGxvYWRtb3Jlb2Zmc2V0PVwiMTVcIj48c2xvdCAvPjwvbGlzdD5cclxuXHQ8IS0tICNlbmRpZiAtLT5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbi8qKlxyXG4gKiBMaXN0IOWIl+ihqFxyXG4gKiBAZGVzY3JpcHRpb24g5YiX6KGo57uE5Lu2XHJcbiAqIEB0dXRvcmlhbCBodHRwczovL2V4dC5kY2xvdWQubmV0LmNuL3BsdWdpbj9pZD0yNFxyXG4gKiBAcHJvcGVydHkge1N0cmluZ30gXHRib3JkZXIgPSBbdHJ1ZXxmYWxzZV0gXHRcdOagh+mimFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdG5hbWU6ICd1bmlMaXN0JyxcclxuXHQnbXAtd2VpeGluJzoge1xyXG5cdFx0b3B0aW9uczoge1xyXG5cdFx0XHRtdWx0aXBsZVNsb3RzOiBmYWxzZVxyXG5cdFx0fVxyXG5cdH0sXHJcblx0cHJvcHM6IHtcclxuXHRcdGVuYWJsZUJhY2tUb1RvcDoge1xyXG5cdFx0XHR0eXBlOiBbQm9vbGVhbiwgU3RyaW5nXSxcclxuXHRcdFx0ZGVmYXVsdDogZmFsc2VcclxuXHRcdH0sXHJcblx0XHRzY3JvbGxZOiB7XHJcblx0XHRcdHR5cGU6IFtCb29sZWFuLCBTdHJpbmddLFxyXG5cdFx0XHRkZWZhdWx0OiBmYWxzZVxyXG5cdFx0fSxcclxuXHRcdGJvcmRlcjoge1xyXG5cdFx0XHR0eXBlOiBCb29sZWFuLFxyXG5cdFx0XHRkZWZhdWx0OiB0cnVlXHJcblx0XHR9XHJcblx0fSxcclxuXHQvLyBwcm92aWRlKCkge1xyXG5cdC8vIFx0cmV0dXJuIHtcclxuXHQvLyBcdFx0bGlzdDogdGhpc1xyXG5cdC8vIFx0fTtcclxuXHQvLyB9LFxyXG5cdGNyZWF0ZWQoKSB7XHJcblx0XHR0aGlzLmZpcnN0Q2hpbGRBcHBlbmQgPSBmYWxzZTtcclxuXHR9LFxyXG5cdG1ldGhvZHM6IHtcclxuXHRcdGxvYWRNb3JlKGUpIHtcclxuXHRcdFx0dGhpcy4kZW1pdCgnc2Nyb2xsdG9sb3dlcicpO1xyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuPC9zY3JpcHQ+XHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiID5cclxuJHVuaS1iZy1jb2xvcjojZmZmZmZmO1xyXG4kdW5pLWJvcmRlci1jb2xvcjojZTVlNWU1O1xyXG4udW5pLWxpc3Qge1xyXG5cdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdC8qICNlbmRpZiAqL1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICR1bmktYmctY29sb3I7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi51bmktbGlzdC0tYm9yZGVyIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0LyogI2lmZGVmIEFQUC1OVlVFICovXHJcblx0Ym9yZGVyLXRvcC1jb2xvcjogJHVuaS1ib3JkZXItY29sb3I7XHJcblx0Ym9yZGVyLXRvcC1zdHlsZTogc29saWQ7XHJcblx0Ym9yZGVyLXRvcC13aWR0aDogMC41cHg7XHJcblx0Ym9yZGVyLWJvdHRvbS1jb2xvcjogJHVuaS1ib3JkZXItY29sb3I7XHJcblx0Ym9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XHJcblx0Ym9yZGVyLWJvdHRvbS13aWR0aDogMC41cHg7XHJcblx0LyogI2VuZGlmICovXHJcblx0ei1pbmRleDogLTE7XHJcbn1cclxuXHJcbi8qICNpZm5kZWYgQVBQLU5WVUUgKi9cclxuXHJcbi51bmktbGlzdC0tYm9yZGVyLXRvcCB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogMDtcclxuXHRyaWdodDogMDtcclxuXHRsZWZ0OiAwO1xyXG5cdGhlaWdodDogMXB4O1xyXG5cdC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMC41KTtcclxuXHR0cmFuc2Zvcm06IHNjYWxlWSgwLjUpO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICR1bmktYm9yZGVyLWNvbG9yO1xyXG5cdHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi51bmktbGlzdC0tYm9yZGVyLWJvdHRvbSB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGJvdHRvbTogMDtcclxuXHRyaWdodDogMDtcclxuXHRsZWZ0OiAwO1xyXG5cdGhlaWdodDogMXB4O1xyXG5cdC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMC41KTtcclxuXHR0cmFuc2Zvcm06IHNjYWxlWSgwLjUpO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICR1bmktYm9yZGVyLWNvbG9yO1xyXG59XHJcblxyXG4vKiAjZW5kaWYgKi9cclxuPC9zdHlsZT5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///45\n");

/***/ }),
/* 46 */
/*!**********************************************************************************************************************************************!*\
  !*** D:/WebStudyProject/uniapp-project/meeting-demo/uni_modules/uni-list/components/uni-list/uni-list.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_list_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!../../../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--10-oneOf-0-2!../../../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--10-oneOf-0-3!../../../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-4!../../../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-list.vue?vue&type=style&index=0&lang=scss& */ 47);
/* harmony import */ var _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_list_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_list_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_list_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_list_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_list_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 47 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/WebStudyProject/uniapp-project/meeting-demo/uni_modules/uni-list/components/uni-list/uni-list.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".uni-list": {
    "": {
      "backgroundColor": [
        "#ffffff",
        0,
        0,
        20
      ],
      "position": [
        "relative",
        0,
        0,
        20
      ],
      "flexDirection": [
        "column",
        0,
        0,
        20
      ]
    }
  },
  ".uni-list--border": {
    "": {
      "position": [
        "relative",
        0,
        0,
        21
      ],
      "borderTopColor": [
        "#e5e5e5",
        0,
        0,
        21
      ],
      "borderTopStyle": [
        "solid",
        0,
        0,
        21
      ],
      "borderTopWidth": [
        "0.5",
        0,
        0,
        21
      ],
      "borderBottomColor": [
        "#e5e5e5",
        0,
        0,
        21
      ],
      "borderBottomStyle": [
        "solid",
        0,
        0,
        21
      ],
      "borderBottomWidth": [
        "0.5",
        0,
        0,
        21
      ],
      "zIndex": [
        -1,
        0,
        0,
        21
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),
/* 48 */
/*!**********************************************************************************************************************!*\
  !*** D:/WebStudyProject/uniapp-project/meeting-demo/uni_modules/uni-list/components/uni-list-chat/uni-list-chat.vue ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _uni_list_chat_vue_vue_type_template_id_3d9bc00b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-list-chat.vue?vue&type=template&id=3d9bc00b& */ 49);\n/* harmony import */ var _uni_list_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-list-chat.vue?vue&type=script&lang=js& */ 51);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_list_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_list_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./uni-list-chat.vue?vue&type=style&index=0&lang=scss& */ 53).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./uni-list-chat.vue?vue&type=style&index=0&lang=scss& */ 53).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _uni_list_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _uni_list_chat_vue_vue_type_template_id_3d9bc00b___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _uni_list_chat_vue_vue_type_template_id_3d9bc00b___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"d0d70ca0\",\n  false,\n  _uni_list_chat_vue_vue_type_template_id_3d9bc00b___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"uni_modules/uni-list/components/uni-list-chat/uni-list-chat.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEg7QUFDMUg7QUFDaUU7QUFDTDtBQUM1RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLCtEQUF1RDtBQUMzRyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsK0RBQXVEO0FBQ2hIOztBQUVBOztBQUVBO0FBQ21MO0FBQ25MLGdCQUFnQixvTEFBVTtBQUMxQixFQUFFLG1GQUFNO0FBQ1IsRUFBRSx3RkFBTTtBQUNSLEVBQUUsaUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNEZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI0OC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vdW5pLWxpc3QtY2hhdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2Q5YmMwMGImXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi91bmktbGlzdC1jaGF0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vdW5pLWxpc3QtY2hhdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi91bmktbGlzdC1jaGF0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vdW5pLWxpc3QtY2hhdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi93eiBBcHAvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBcImQwZDcwY2EwXCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInVuaV9tb2R1bGVzL3VuaS1saXN0L2NvbXBvbmVudHMvdW5pLWxpc3QtY2hhdC91bmktbGlzdC1jaGF0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///48\n");

/***/ }),
/* 49 */
/*!*****************************************************************************************************************************************************!*\
  !*** D:/WebStudyProject/uniapp-project/meeting-demo/uni_modules/uni-list/components/uni-list-chat/uni-list-chat.vue?vue&type=template&id=3d9bc00b& ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_list_chat_vue_vue_type_template_id_3d9bc00b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-list-chat.vue?vue&type=template&id=3d9bc00b& */ 50);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_list_chat_vue_vue_type_template_id_3d9bc00b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_list_chat_vue_vue_type_template_id_3d9bc00b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_list_chat_vue_vue_type_template_id_3d9bc00b___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_list_chat_vue_vue_type_template_id_3d9bc00b___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 50 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/WebStudyProject/uniapp-project/meeting-demo/uni_modules/uni-list/components/uni-list-chat/uni-list-chat.vue?vue&type=template&id=3d9bc00b& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("cell", { appendAsTree: true, attrs: { append: "tree" } }, [
    _c(
      "view",
      {
        staticClass: ["uni-list-chat"],
        attrs: {
          hoverClass: !_vm.clickable && !_vm.link ? "" : "uni-list-chat--hover"
        },
        on: { click: _vm.onClick }
      },
      [
        _c("view", {
          class: {
            "uni-list--border": _vm.border,
            "uni-list-chat--first": _vm.isFirstChild
          }
        }),
        _c("view", { staticClass: ["uni-list-chat__container"] }, [
          _c("view", { staticClass: ["uni-list-chat__header-warp"] }, [
            _vm.avatarCircle || _vm.avatarList.length === 0
              ? _c(
                  "view",
                  {
                    staticClass: ["uni-list-chat__header"],
                    class: { "header--circle": _vm.avatarCircle }
                  },
                  [
                    _c("u-image", {
                      staticClass: ["uni-list-chat__header-image"],
                      class: { "header--circle": _vm.avatarCircle },
                      attrs: { src: _vm.avatar, mode: "aspectFill" }
                    })
                  ],
                  1
                )
              : _c(
                  "view",
                  { staticClass: ["uni-list-chat__header"] },
                  _vm._l(_vm.avatarList, function(item, index) {
                    return _c(
                      "view",
                      {
                        key: index,
                        staticClass: ["uni-list-chat__header-box"],
                        class: _vm.computedAvatar,
                        style: {
                          width: _vm.imageWidth + "px",
                          height: _vm.imageWidth + "px"
                        }
                      },
                      [
                        _c("u-image", {
                          staticClass: ["uni-list-chat__header-image"],
                          style: {
                            width: _vm.imageWidth + "px",
                            height: _vm.imageWidth + "px"
                          },
                          attrs: { src: item.url, mode: "aspectFill" }
                        })
                      ],
                      1
                    )
                  }),
                  0
                )
          ]),
          _vm.badgeText && _vm.badgePositon === "left"
            ? _c(
                "view",
                {
                  staticClass: [
                    "uni-list-chat__badge",
                    "uni-list-chat__badge-pos"
                  ],
                  class: [_vm.isSingle]
                },
                [
                  _c(
                    "u-text",
                    {
                      staticClass: ["uni-list-chat__badge-text"],
                      appendAsTree: true,
                      attrs: { append: "tree" }
                    },
                    [
                      _vm._v(
                        _vm._s(_vm.badgeText === "dot" ? "" : _vm.badgeText)
                      )
                    ]
                  )
                ]
              )
            : _vm._e(),
          _c("view", { staticClass: ["uni-list-chat__content"] }, [
            _c("view", { staticClass: ["uni-list-chat__content-main"] }, [
              _c(
                "u-text",
                {
                  staticClass: ["uni-list-chat__content-title", "uni-ellipsis"],
                  appendAsTree: true,
                  attrs: { append: "tree" }
                },
                [_vm._v(_vm._s(_vm.title))]
              ),
              _c(
                "u-text",
                {
                  staticClass: ["uni-list-chat__content-note", "uni-ellipsis"],
                  appendAsTree: true,
                  attrs: { append: "tree" }
                },
                [_vm._v(_vm._s(_vm.note))]
              )
            ]),
            _c(
              "view",
              { staticClass: ["uni-list-chat__content-extra"] },
              [
                _vm._t("default", [
                  _c(
                    "u-text",
                    {
                      staticClass: ["uni-list-chat__content-extra-text"],
                      appendAsTree: true,
                      attrs: { append: "tree" }
                    },
                    [_vm._v(_vm._s(_vm.time))]
                  ),
                  _vm.badgeText && _vm.badgePositon === "right"
                    ? _c(
                        "view",
                        {
                          staticClass: ["uni-list-chat__badge"],
                          class: [
                            _vm.isSingle,
                            _vm.badgePositon === "right"
                              ? "uni-list-chat--right"
                              : ""
                          ]
                        },
                        [
                          _c(
                            "u-text",
                            {
                              staticClass: ["uni-list-chat__badge-text"],
                              appendAsTree: true,
                              attrs: { append: "tree" }
                            },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.badgeText === "dot" ? "" : _vm.badgeText
                                )
                              )
                            ]
                          )
                        ]
                      )
                    : _vm._e()
                ])
              ],
              2
            )
          ])
        ])
      ]
    )
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 51 */
/*!***********************************************************************************************************************************************!*\
  !*** D:/WebStudyProject/uniapp-project/meeting-demo/uni_modules/uni-list/components/uni-list-chat/uni-list-chat.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_list_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--5-0!../../../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!../../../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-list-chat.vue?vue&type=script&lang=js& */ 52);\n/* harmony import */ var _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_list_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_list_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_list_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_list_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_list_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTRkLENBQWdCLHNlQUFHLEVBQUMiLCJmaWxlIjoiNTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3d6IEFwcC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi93eiBBcHAvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi93eiBBcHAvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLWxpc3QtY2hhdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vd3ogQXBwL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3d6IEFwcC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3d6IEFwcC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktbGlzdC1jaGF0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///51\n");

/***/ }),
/* 52 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/WebStudyProject/uniapp-project/meeting-demo/uni_modules/uni-list/components/uni-list-chat/uni-list-chat.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n// 头像大小\nvar avatarWidth = 45;\n\n/**\n                       * ListChat 聊天列表\n                       * @description 聊天列表,用于创建聊天类列表\n                       * @tutorial https://ext.dcloud.net.cn/plugin?id=24\n                       * @property {String} \ttitle \t\t\t\t\t\t\t标题\n                       * @property {String} \tnote \t\t\t\t\t\t\t描述\n                       * @property {Boolean} \tclickable = [true|false] \t\t是否开启点击反馈，默认为false\n                       * @property {String} \tbadgeText\t\t\t\t\t\t数字角标内容\n                       * @property {String}  \tbadgePositon = [left|right]\t\t角标位置，默认为 right\n                       * @property {String} \tlink = [false｜navigateTo|redirectTo|reLaunch|switchTab] 是否展示右侧箭头并开启点击反馈，默认为false\n                       *  @value false\t \t不开启\n                       *  @value navigateTo \t同 uni.navigateTo()\n                       * \t@value redirectTo \t同 uni.redirectTo()\n                       * \t@value reLaunch   \t同 uni.reLaunch()\n                       * \t@value switchTab  \t同 uni.switchTab()\n                       * @property {String | PageURIString} \tto  \t\t\t跳转目标页面\n                       * @property {String} \ttime\t\t\t\t\t\t\t右侧时间显示\n                       * @property {Boolean} \tavatarCircle = [true|false]\t\t是否显示圆形头像，默认为false\n                       * @property {String} \tavatar\t\t\t\t\t\t\t头像地址，avatarCircle 不填时生效\n                       * @property {Array} \tavatarList \t\t\t\t\t\t头像组，格式为 [{url:''}]\n                       * @event {Function} \tclick \t\t\t\t\t\t\t点击 uniListChat 触发事件\n                       */var _default2 =\n{\n  name: 'UniListChat',\n  emits: ['click'],\n  props: {\n    title: {\n      type: String,\n      default: '' },\n\n    note: {\n      type: String,\n      default: '' },\n\n    clickable: {\n      type: Boolean,\n      default: false },\n\n    link: {\n      type: [Boolean, String],\n      default: false },\n\n    to: {\n      type: String,\n      default: '' },\n\n    badgeText: {\n      type: [String, Number],\n      default: '' },\n\n    badgePositon: {\n      type: String,\n      default: 'right' },\n\n    time: {\n      type: String,\n      default: '' },\n\n    avatarCircle: {\n      type: Boolean,\n      default: false },\n\n    avatar: {\n      type: String,\n      default: '' },\n\n    avatarList: {\n      type: Array,\n      default: function _default() {\n        return [];\n      } } },\n\n\n  // inject: ['list'],\n  computed: {\n    isSingle: function isSingle() {\n      if (this.badgeText === 'dot') {\n        return 'uni-badge--dot';\n      } else {\n        var badgeText = this.badgeText.toString();\n        if (badgeText.length > 1) {\n          return 'uni-badge--complex';\n        } else {\n          return 'uni-badge--single';\n        }\n      }\n    },\n    computedAvatar: function computedAvatar() {\n      if (this.avatarList.length > 4) {\n        this.imageWidth = avatarWidth * 0.31;\n        return 'avatarItem--3';\n      } else if (this.avatarList.length > 1) {\n        this.imageWidth = avatarWidth * 0.47;\n        return 'avatarItem--2';\n      } else {\n        this.imageWidth = avatarWidth;\n        return 'avatarItem--1';\n      }\n    } },\n\n  data: function data() {\n    return {\n      isFirstChild: false,\n      border: true,\n      // avatarList: 3,\n      imageWidth: 50 };\n\n  },\n  mounted: function mounted() {\n    this.list = this.getForm();\n    if (this.list) {\n      if (!this.list.firstChildAppend) {\n        this.list.firstChildAppend = true;\n        this.isFirstChild = true;\n      }\n      this.border = this.list.border;\n    }\n  },\n  methods: {\n    /**\n              * 获取父元素实例\n              */\n    getForm: function getForm() {var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'uniList';\n      var parent = this.$parent;\n      var parentName = parent.$options.name;\n      while (parentName !== name) {\n        parent = parent.$parent;\n        if (!parent) return false;\n        parentName = parent.$options.name;\n      }\n      return parent;\n    },\n    onClick: function onClick() {\n      if (this.to !== '') {\n        this.openPage();\n        return;\n      }\n\n      if (this.clickable || this.link) {\n        this.$emit('click', {\n          data: {} });\n\n      }\n    },\n    openPage: function openPage() {\n      if (['navigateTo', 'redirectTo', 'reLaunch', 'switchTab'].indexOf(this.link) !== -1) {\n        this.pageApi(this.link);\n      } else {\n        this.pageApi('navigateTo');\n      }\n    },\n    pageApi: function pageApi(api) {var _this = this;\n      uni[api]({\n        url: this.to,\n        success: function success(res) {\n          _this.$emit('click', {\n            data: res });\n\n        },\n        fail: function fail(err) {\n          _this.$emit('click', {\n            data: err });\n\n          __f__(\"error\", err.errMsg, \" at uni_modules/uni-list/components/uni-list-chat/uni-list-chat.vue:212\");\n        } });\n\n    } } };exports.default = _default2;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 25)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdW5pLWxpc3QvY29tcG9uZW50cy91bmktbGlzdC1jaGF0L3VuaS1saXN0LWNoYXQudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JBO0FBQ0EscUJBREE7QUFFQSxrQkFGQTtBQUdBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBLGlCQUZBLEVBREE7O0FBS0E7QUFDQSxrQkFEQTtBQUVBLGlCQUZBLEVBTEE7O0FBU0E7QUFDQSxtQkFEQTtBQUVBLG9CQUZBLEVBVEE7O0FBYUE7QUFDQSw2QkFEQTtBQUVBLG9CQUZBLEVBYkE7O0FBaUJBO0FBQ0Esa0JBREE7QUFFQSxpQkFGQSxFQWpCQTs7QUFxQkE7QUFDQSw0QkFEQTtBQUVBLGlCQUZBLEVBckJBOztBQXlCQTtBQUNBLGtCQURBO0FBRUEsc0JBRkEsRUF6QkE7O0FBNkJBO0FBQ0Esa0JBREE7QUFFQSxpQkFGQSxFQTdCQTs7QUFpQ0E7QUFDQSxtQkFEQTtBQUVBLG9CQUZBLEVBakNBOztBQXFDQTtBQUNBLGtCQURBO0FBRUEsaUJBRkEsRUFyQ0E7O0FBeUNBO0FBQ0EsaUJBREE7QUFFQSxhQUZBLHNCQUVBO0FBQ0E7QUFDQSxPQUpBLEVBekNBLEVBSEE7OztBQW1EQTtBQUNBO0FBQ0EsWUFEQSxzQkFDQTtBQUNBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQVpBO0FBYUEsa0JBYkEsNEJBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUhBLE1BR0E7QUFDQTtBQUNBO0FBQ0EsT0FIQSxNQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0F4QkEsRUFwREE7O0FBOEVBLE1BOUVBLGtCQThFQTtBQUNBO0FBQ0EseUJBREE7QUFFQSxrQkFGQTtBQUdBO0FBQ0Esb0JBSkE7O0FBTUEsR0FyRkE7QUFzRkEsU0F0RkEscUJBc0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBL0ZBO0FBZ0dBO0FBQ0E7OztBQUdBLFdBSkEscUJBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FiQTtBQWNBLFdBZEEscUJBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBREE7O0FBR0E7QUFDQSxLQXpCQTtBQTBCQSxZQTFCQSxzQkEwQkE7QUFDQTtBQUNBO0FBQ0EsT0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBLEtBaENBO0FBaUNBLFdBakNBLG1CQWlDQSxHQWpDQSxFQWlDQTtBQUNBO0FBQ0Esb0JBREE7QUFFQTtBQUNBO0FBQ0EscUJBREE7O0FBR0EsU0FOQTtBQU9BO0FBQ0E7QUFDQSxxQkFEQTs7QUFHQTtBQUNBLFNBWkE7O0FBY0EsS0FoREEsRUFoR0EsRSIsImZpbGUiOiI1Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8IS0tICNpZmRlZiBBUFAtTlZVRSAtLT5cclxuXHQ8Y2VsbD5cclxuXHRcdDwhLS0gI2VuZGlmIC0tPlxyXG5cdFx0PHZpZXcgOmhvdmVyLWNsYXNzPVwiIWNsaWNrYWJsZSAmJiAhbGluayA/ICcnIDogJ3VuaS1saXN0LWNoYXQtLWhvdmVyJ1wiIGNsYXNzPVwidW5pLWxpc3QtY2hhdFwiIEBjbGljay5zdG9wPVwib25DbGlja1wiPlxyXG5cdFx0XHQ8dmlldyA6Y2xhc3M9XCJ7ICd1bmktbGlzdC0tYm9yZGVyJzogYm9yZGVyLCAndW5pLWxpc3QtY2hhdC0tZmlyc3QnOiBpc0ZpcnN0Q2hpbGQgfVwiPjwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ1bmktbGlzdC1jaGF0X19jb250YWluZXJcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInVuaS1saXN0LWNoYXRfX2hlYWRlci13YXJwXCI+XHJcblx0XHRcdFx0XHQ8dmlldyB2LWlmPVwiYXZhdGFyQ2lyY2xlIHx8IGF2YXRhckxpc3QubGVuZ3RoID09PSAwXCIgY2xhc3M9XCJ1bmktbGlzdC1jaGF0X19oZWFkZXJcIiA6Y2xhc3M9XCJ7ICdoZWFkZXItLWNpcmNsZSc6IGF2YXRhckNpcmNsZSB9XCI+XHJcblx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cInVuaS1saXN0LWNoYXRfX2hlYWRlci1pbWFnZVwiIDpjbGFzcz1cInsgJ2hlYWRlci0tY2lyY2xlJzogYXZhdGFyQ2lyY2xlIH1cIiA6c3JjPVwiYXZhdGFyXCIgbW9kZT1cImFzcGVjdEZpbGxcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PCEtLSDlpLTlg4/nu4QgLS0+XHJcblx0XHRcdFx0XHQ8dmlldyB2LWVsc2UgY2xhc3M9XCJ1bmktbGlzdC1jaGF0X19oZWFkZXJcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIGF2YXRhckxpc3RcIiA6a2V5PVwiaW5kZXhcIiBjbGFzcz1cInVuaS1saXN0LWNoYXRfX2hlYWRlci1ib3hcIiA6Y2xhc3M9XCJjb21wdXRlZEF2YXRhclwiXHJcblx0XHRcdFx0XHRcdCA6c3R5bGU9XCJ7IHdpZHRoOiBpbWFnZVdpZHRoICsgJ3B4JywgaGVpZ2h0OiBpbWFnZVdpZHRoICsgJ3B4JyB9XCI+XHJcblx0XHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwidW5pLWxpc3QtY2hhdF9faGVhZGVyLWltYWdlXCIgOnN0eWxlPVwieyB3aWR0aDogaW1hZ2VXaWR0aCArICdweCcsIGhlaWdodDogaW1hZ2VXaWR0aCArICdweCcgfVwiIDpzcmM9XCJpdGVtLnVybFwiXHJcblx0XHRcdFx0XHRcdFx0IG1vZGU9XCJhc3BlY3RGaWxsXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyB2LWlmPVwiYmFkZ2VUZXh0ICYmIGJhZGdlUG9zaXRvbiA9PT0gJ2xlZnQnXCIgY2xhc3M9XCJ1bmktbGlzdC1jaGF0X19iYWRnZSB1bmktbGlzdC1jaGF0X19iYWRnZS1wb3NcIiA6Y2xhc3M9XCJbaXNTaW5nbGVdXCI+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInVuaS1saXN0LWNoYXRfX2JhZGdlLXRleHRcIj57eyBiYWRnZVRleHQgPT09ICdkb3QnID8gJycgOiBiYWRnZVRleHQgfX08L3RleHQ+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidW5pLWxpc3QtY2hhdF9fY29udGVudFwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1bmktbGlzdC1jaGF0X19jb250ZW50LW1haW5cIj5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ1bmktbGlzdC1jaGF0X19jb250ZW50LXRpdGxlIHVuaS1lbGxpcHNpc1wiPnt7IHRpdGxlIH19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInVuaS1saXN0LWNoYXRfX2NvbnRlbnQtbm90ZSB1bmktZWxsaXBzaXNcIj57eyBub3RlIH19PC90ZXh0PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1bmktbGlzdC1jaGF0X19jb250ZW50LWV4dHJhXCI+XHJcblx0XHRcdFx0XHRcdDxzbG90PlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidW5pLWxpc3QtY2hhdF9fY29udGVudC1leHRyYS10ZXh0XCI+e3sgdGltZSB9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyB2LWlmPVwiYmFkZ2VUZXh0ICYmIGJhZGdlUG9zaXRvbiA9PT0gJ3JpZ2h0J1wiIGNsYXNzPVwidW5pLWxpc3QtY2hhdF9fYmFkZ2VcIiA6Y2xhc3M9XCJbaXNTaW5nbGUsIGJhZGdlUG9zaXRvbiA9PT0gJ3JpZ2h0JyA/ICd1bmktbGlzdC1jaGF0LS1yaWdodCcgOiAnJ11cIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidW5pLWxpc3QtY2hhdF9fYmFkZ2UtdGV4dFwiPnt7IGJhZGdlVGV4dCA9PT0gJ2RvdCcgPyAnJyA6IGJhZGdlVGV4dCB9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvc2xvdD5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDwhLS0gI2lmZGVmIEFQUC1OVlVFIC0tPlxyXG5cdDwvY2VsbD5cclxuXHQ8IS0tICNlbmRpZiAtLT5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0Ly8g5aS05YOP5aSn5bCPXHJcblx0Y29uc3QgYXZhdGFyV2lkdGggPSA0NTtcclxuXHJcblx0LyoqXHJcblx0ICogTGlzdENoYXQg6IGK5aSp5YiX6KGoXHJcblx0ICogQGRlc2NyaXB0aW9uIOiBiuWkqeWIl+ihqCznlKjkuo7liJvlu7rogYrlpKnnsbvliJfooahcclxuXHQgKiBAdHV0b3JpYWwgaHR0cHM6Ly9leHQuZGNsb3VkLm5ldC5jbi9wbHVnaW4/aWQ9MjRcclxuXHQgKiBAcHJvcGVydHkge1N0cmluZ30gXHR0aXRsZSBcdFx0XHRcdFx0XHRcdOagh+mimFxyXG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBcdG5vdGUgXHRcdFx0XHRcdFx0XHTmj4/ov7BcclxuXHQgKiBAcHJvcGVydHkge0Jvb2xlYW59IFx0Y2xpY2thYmxlID0gW3RydWV8ZmFsc2VdIFx0XHTmmK/lkKblvIDlkK/ngrnlh7vlj43ppojvvIzpu5jorqTkuLpmYWxzZVxyXG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBcdGJhZGdlVGV4dFx0XHRcdFx0XHRcdOaVsOWtl+inkuagh+WGheWuuVxyXG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nfSAgXHRiYWRnZVBvc2l0b24gPSBbbGVmdHxyaWdodF1cdFx06KeS5qCH5L2N572u77yM6buY6K6k5Li6IHJpZ2h0XHJcblx0ICogQHByb3BlcnR5IHtTdHJpbmd9IFx0bGluayA9IFtmYWxzZe+9nG5hdmlnYXRlVG98cmVkaXJlY3RUb3xyZUxhdW5jaHxzd2l0Y2hUYWJdIOaYr+WQpuWxleekuuWPs+S+p+eureWktOW5tuW8gOWQr+eCueWHu+WPjemmiO+8jOm7mOiupOS4umZhbHNlXHJcblx0ICogIEB2YWx1ZSBmYWxzZVx0IFx05LiN5byA5ZCvXHJcblx0ICogIEB2YWx1ZSBuYXZpZ2F0ZVRvIFx05ZCMIHVuaS5uYXZpZ2F0ZVRvKClcclxuXHQgKiBcdEB2YWx1ZSByZWRpcmVjdFRvIFx05ZCMIHVuaS5yZWRpcmVjdFRvKClcclxuXHQgKiBcdEB2YWx1ZSByZUxhdW5jaCAgIFx05ZCMIHVuaS5yZUxhdW5jaCgpXHJcblx0ICogXHRAdmFsdWUgc3dpdGNoVGFiICBcdOWQjCB1bmkuc3dpdGNoVGFiKClcclxuXHQgKiBAcHJvcGVydHkge1N0cmluZyB8IFBhZ2VVUklTdHJpbmd9IFx0dG8gIFx0XHRcdOi3s+i9rOebruagh+mhtemdolxyXG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBcdHRpbWVcdFx0XHRcdFx0XHRcdOWPs+S+p+aXtumXtOaYvuekulxyXG5cdCAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gXHRhdmF0YXJDaXJjbGUgPSBbdHJ1ZXxmYWxzZV1cdFx05piv5ZCm5pi+56S65ZyG5b2i5aS05YOP77yM6buY6K6k5Li6ZmFsc2VcclxuXHQgKiBAcHJvcGVydHkge1N0cmluZ30gXHRhdmF0YXJcdFx0XHRcdFx0XHRcdOWktOWDj+WcsOWdgO+8jGF2YXRhckNpcmNsZSDkuI3loavml7bnlJ/mlYhcclxuXHQgKiBAcHJvcGVydHkge0FycmF5fSBcdGF2YXRhckxpc3QgXHRcdFx0XHRcdFx05aS05YOP57uE77yM5qC85byP5Li6IFt7dXJsOicnfV1cclxuXHQgKiBAZXZlbnQge0Z1bmN0aW9ufSBcdGNsaWNrIFx0XHRcdFx0XHRcdFx054K55Ye7IHVuaUxpc3RDaGF0IOinpuWPkeS6i+S7tlxyXG5cdCAqL1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdG5hbWU6ICdVbmlMaXN0Q2hhdCcsXHJcblx0XHRlbWl0czpbJ2NsaWNrJ10sXHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHR0aXRsZToge1xyXG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OiAnJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRub3RlOiB7XHJcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRcdGRlZmF1bHQ6ICcnXHJcblx0XHRcdH0sXHJcblx0XHRcdGNsaWNrYWJsZToge1xyXG5cdFx0XHRcdHR5cGU6IEJvb2xlYW4sXHJcblx0XHRcdFx0ZGVmYXVsdDogZmFsc2VcclxuXHRcdFx0fSxcclxuXHRcdFx0bGluazoge1xyXG5cdFx0XHRcdHR5cGU6IFtCb29sZWFuLCBTdHJpbmddLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IGZhbHNlXHJcblx0XHRcdH0sXHJcblx0XHRcdHRvOiB7XHJcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRcdGRlZmF1bHQ6ICcnXHJcblx0XHRcdH0sXHJcblx0XHRcdGJhZGdlVGV4dDoge1xyXG5cdFx0XHRcdHR5cGU6IFtTdHJpbmcsIE51bWJlcl0sXHJcblx0XHRcdFx0ZGVmYXVsdDogJydcclxuXHRcdFx0fSxcclxuXHRcdFx0YmFkZ2VQb3NpdG9uOiB7XHJcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRcdGRlZmF1bHQ6ICdyaWdodCdcclxuXHRcdFx0fSxcclxuXHRcdFx0dGltZToge1xyXG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OiAnJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRhdmF0YXJDaXJjbGU6IHtcclxuXHRcdFx0XHR0eXBlOiBCb29sZWFuLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IGZhbHNlXHJcblx0XHRcdH0sXHJcblx0XHRcdGF2YXRhcjoge1xyXG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OiAnJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRhdmF0YXJMaXN0OiB7XHJcblx0XHRcdFx0dHlwZTogQXJyYXksXHJcblx0XHRcdFx0ZGVmYXVsdCAoKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gW107XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0Ly8gaW5qZWN0OiBbJ2xpc3QnXSxcclxuXHRcdGNvbXB1dGVkOiB7XHJcblx0XHRcdGlzU2luZ2xlKCkge1xyXG5cdFx0XHRcdGlmICh0aGlzLmJhZGdlVGV4dCA9PT0gJ2RvdCcpIHtcclxuXHRcdFx0XHRcdHJldHVybiAndW5pLWJhZGdlLS1kb3QnO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRjb25zdCBiYWRnZVRleHQgPSB0aGlzLmJhZGdlVGV4dC50b1N0cmluZygpO1xyXG5cdFx0XHRcdFx0aWYgKGJhZGdlVGV4dC5sZW5ndGggPiAxKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiAndW5pLWJhZGdlLS1jb21wbGV4JztcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiAndW5pLWJhZGdlLS1zaW5nbGUnO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Y29tcHV0ZWRBdmF0YXIoKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMuYXZhdGFyTGlzdC5sZW5ndGggPiA0KSB7XHJcblx0XHRcdFx0XHR0aGlzLmltYWdlV2lkdGggPSBhdmF0YXJXaWR0aCAqIDAuMzE7XHJcblx0XHRcdFx0XHRyZXR1cm4gJ2F2YXRhckl0ZW0tLTMnO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5hdmF0YXJMaXN0Lmxlbmd0aCA+IDEpIHtcclxuXHRcdFx0XHRcdHRoaXMuaW1hZ2VXaWR0aCA9IGF2YXRhcldpZHRoICogMC40NztcclxuXHRcdFx0XHRcdHJldHVybiAnYXZhdGFySXRlbS0tMic7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRoaXMuaW1hZ2VXaWR0aCA9IGF2YXRhcldpZHRoO1xyXG5cdFx0XHRcdFx0cmV0dXJuICdhdmF0YXJJdGVtLS0xJztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGlzRmlyc3RDaGlsZDogZmFsc2UsXHJcblx0XHRcdFx0Ym9yZGVyOiB0cnVlLFxyXG5cdFx0XHRcdC8vIGF2YXRhckxpc3Q6IDMsXHJcblx0XHRcdFx0aW1hZ2VXaWR0aDogNTBcclxuXHRcdFx0fTtcclxuXHRcdH0sXHJcblx0XHRtb3VudGVkKCkge1xyXG5cdFx0XHR0aGlzLmxpc3QgPSB0aGlzLmdldEZvcm0oKVxyXG5cdFx0XHRpZiAodGhpcy5saXN0KSB7XHJcblx0XHRcdFx0aWYgKCF0aGlzLmxpc3QuZmlyc3RDaGlsZEFwcGVuZCkge1xyXG5cdFx0XHRcdFx0dGhpcy5saXN0LmZpcnN0Q2hpbGRBcHBlbmQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0dGhpcy5pc0ZpcnN0Q2hpbGQgPSB0cnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLmJvcmRlciA9IHRoaXMubGlzdC5ib3JkZXI7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdC8qKlxyXG5cdFx0XHQgKiDojrflj5bniLblhYPntKDlrp7kvotcclxuXHRcdFx0ICovXHJcblx0XHRcdGdldEZvcm0obmFtZSA9ICd1bmlMaXN0Jykge1xyXG5cdFx0XHRcdGxldCBwYXJlbnQgPSB0aGlzLiRwYXJlbnQ7XHJcblx0XHRcdFx0bGV0IHBhcmVudE5hbWUgPSBwYXJlbnQuJG9wdGlvbnMubmFtZTtcclxuXHRcdFx0XHR3aGlsZSAocGFyZW50TmFtZSAhPT0gbmFtZSkge1xyXG5cdFx0XHRcdFx0cGFyZW50ID0gcGFyZW50LiRwYXJlbnQ7XHJcblx0XHRcdFx0XHRpZiAoIXBhcmVudCkgcmV0dXJuIGZhbHNlXHJcblx0XHRcdFx0XHRwYXJlbnROYW1lID0gcGFyZW50LiRvcHRpb25zLm5hbWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiBwYXJlbnQ7XHJcblx0XHRcdH0sXHJcblx0XHRcdG9uQ2xpY2soKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMudG8gIT09ICcnKSB7XHJcblx0XHRcdFx0XHR0aGlzLm9wZW5QYWdlKCk7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAodGhpcy5jbGlja2FibGUgfHwgdGhpcy5saW5rKSB7XHJcblx0XHRcdFx0XHR0aGlzLiRlbWl0KCdjbGljaycsIHtcclxuXHRcdFx0XHRcdFx0ZGF0YToge31cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0b3BlblBhZ2UoKSB7XHJcblx0XHRcdFx0aWYgKFsnbmF2aWdhdGVUbycsICdyZWRpcmVjdFRvJywgJ3JlTGF1bmNoJywgJ3N3aXRjaFRhYiddLmluZGV4T2YodGhpcy5saW5rKSAhPT0gLTEpIHtcclxuXHRcdFx0XHRcdHRoaXMucGFnZUFwaSh0aGlzLmxpbmspO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLnBhZ2VBcGkoJ25hdmlnYXRlVG8nKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdHBhZ2VBcGkoYXBpKSB7XHJcblx0XHRcdFx0dW5pW2FwaV0oe1xyXG5cdFx0XHRcdFx0dXJsOiB0aGlzLnRvLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogcmVzID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy4kZW1pdCgnY2xpY2snLCB7XHJcblx0XHRcdFx0XHRcdFx0ZGF0YTogcmVzXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGZhaWw6IGVyciA9PiB7XHJcblx0XHRcdFx0XHRcdHRoaXMuJGVtaXQoJ2NsaWNrJywge1xyXG5cdFx0XHRcdFx0XHRcdGRhdGE6IGVyclxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcihlcnIuZXJyTXNnKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgPlxyXG5cdCR1bmktZm9udC1zaXplLWxnOjE2cHg7XHJcblx0JHVuaS1zcGFjaW5nLXJvdy1zbTogNXB4O1xyXG5cdCR1bmktc3BhY2luZy1yb3ctYmFzZTogMTBweDtcclxuXHQkdW5pLXNwYWNpbmctcm93LWxnOiAxNXB4O1xyXG5cdCRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdCRkaXZpZGUtbGluZS1jb2xvcjogI2U1ZTVlNTtcclxuXHQkYXZhdGFyLXdpZHRoOiA0NXB4O1xyXG5cdCRhdmF0YXItYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cdCRhdmF0YXItYm9yZGVyLWNvbG9yOiAjZWVlO1xyXG5cdCRhdmF0YXItYm9yZGVyLXdpZHRoOiAxcHg7XHJcblx0JHRpdGxlLXNpemU6IDE2cHg7XHJcblx0JHRpdGxlLWNvbG9yOiAjM2I0MTQ0O1xyXG5cdCR0aXRsZS13ZWlnaHQ6IG5vcm1hbDtcclxuXHQkbm90ZS1zaXplOiAxMnB4O1xyXG5cdCRub3RlLWNvbG9yOiAjOTk5O1xyXG5cdCRub3RlLXdlaWdodDogbm9ybWFsO1xyXG5cdCRyaWdodC10ZXh0LXNpemU6IDEycHg7XHJcblx0JHJpZ2h0LXRleHQtY29sb3I6ICM5OTk7XHJcblx0JHJpZ2h0LXRleHQtd2VpZ2h0OiBub3JtYWw7XHJcblx0JGJhZGdlLWxlZnQ6IDBweDtcclxuXHQkYmFkZ2UtdG9wOiAwcHg7XHJcblx0JGRvdC13aWR0aDogMTBweDtcclxuXHQkZG90LWhlaWdodDogMTBweDtcclxuXHQkYmFkZ2Utc2l6ZTogMThweDtcclxuXHQkYmFkZ2UtZm9udDogMTJweDtcclxuXHQkYmFkZ2UtY29sb3I6ICNmZmY7XHJcblx0JGJhZGdlLWJhY2tncm91bmQtY29sb3I6ICNmZjVhNWY7XHJcblx0JGJhZGdlLXNwYWNlOiA2cHg7XHJcblx0JGhvdmVyOiAjZjVmNWY1O1xyXG5cclxuXHQudW5pLWxpc3QtY2hhdCB7XHJcblx0XHRmb250LXNpemU6ICR1bmktZm9udC1zaXplLWxnO1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yO1xyXG5cdH1cclxuXHJcblx0Ly8gLnVuaS1saXN0LWNoYXQtLWRpc2FibGVkIHtcclxuXHQvLyBcdG9wYWNpdHk6IDAuMztcclxuXHQvLyB9XHJcblxyXG5cdC51bmktbGlzdC1jaGF0LS1ob3ZlciB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkaG92ZXI7XHJcblx0fVxyXG5cclxuXHQudW5pLWxpc3QtLWJvcmRlciB7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRtYXJnaW4tbGVmdDogJHVuaS1zcGFjaW5nLXJvdy1sZztcclxuXHRcdC8qICNpZmRlZiBBUFAtUExVUyAqL1xyXG5cdFx0Ym9yZGVyLXRvcC1jb2xvcjogJGRpdmlkZS1saW5lLWNvbG9yO1xyXG5cdFx0Ym9yZGVyLXRvcC1zdHlsZTogc29saWQ7XHJcblx0XHRib3JkZXItdG9wLXdpZHRoOiAwLjVweDtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdH1cclxuXHJcblx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdC51bmktbGlzdC0tYm9yZGVyOmFmdGVyIHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHRvcDogMDtcclxuXHRcdHJpZ2h0OiAwO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdGhlaWdodDogMXB4O1xyXG5cdFx0Y29udGVudDogJyc7XHJcblx0XHQtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDAuNSk7XHJcblx0XHR0cmFuc2Zvcm06IHNjYWxlWSgwLjUpO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogJGRpdmlkZS1saW5lLWNvbG9yO1xyXG5cdH1cclxuXHJcblx0LnVuaS1saXN0LWl0ZW0tLWZpcnN0OmFmdGVyIHtcclxuXHRcdGhlaWdodDogMHB4O1xyXG5cdH1cclxuXHJcblx0LyogI2VuZGlmICovXHJcblxyXG5cdC51bmktbGlzdC1jaGF0LS1maXJzdCB7XHJcblx0XHRib3JkZXItdG9wLXdpZHRoOiAwcHg7XHJcblx0fVxyXG5cclxuXHQudW5pLWVsbGlwc2lzIHtcclxuXHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cclxuXHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHR3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cdFx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHRcdC8qICNpZmRlZiBBUFAtTlZVRSAqL1xyXG5cdFx0bGluZXM6IDE7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHR9XHJcblxyXG5cdC51bmktZWxsaXBzaXMtMiB7XHJcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcblx0XHRkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuXHRcdC13ZWJraXQtbGluZS1jbGFtcDogMjtcclxuXHRcdC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHJcblx0XHQvKiAjaWZkZWYgQVBQLU5WVUUgKi9cclxuXHRcdGxpbmVzOiAyO1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0fVxyXG5cclxuXHQudW5pLWxpc3QtY2hhdF9fY29udGFpbmVyIHtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRmbGV4OiAxO1xyXG5cdFx0cGFkZGluZzogJHVuaS1zcGFjaW5nLXJvdy1iYXNlICR1bmktc3BhY2luZy1yb3ctbGc7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdH1cclxuXHJcblx0LnVuaS1saXN0LWNoYXRfX2hlYWRlci13YXJwIHtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR9XHJcblxyXG5cdC51bmktbGlzdC1jaGF0X19oZWFkZXIge1xyXG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGZsZXgtd3JhcDogd3JhcC1yZXZlcnNlO1xyXG5cdFx0LyogI2lmZGVmIEFQUC1OVlVFICovXHJcblx0XHR3aWR0aDogNTBweDtcclxuXHRcdGhlaWdodDogNTBweDtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdFx0d2lkdGg6ICRhdmF0YXItd2lkdGg7XHJcblx0XHRoZWlnaHQ6ICRhdmF0YXItd2lkdGg7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHJcblx0XHRib3JkZXItcmFkaXVzOiAkYXZhdGFyLWJvcmRlci1yYWRpdXM7XHJcblx0XHRib3JkZXItY29sb3I6ICRhdmF0YXItYm9yZGVyLWNvbG9yO1xyXG5cdFx0Ym9yZGVyLXdpZHRoOiAkYXZhdGFyLWJvcmRlci13aWR0aDtcclxuXHRcdGJvcmRlci1zdHlsZTogc29saWQ7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdH1cclxuXHJcblx0LnVuaS1saXN0LWNoYXRfX2hlYWRlci1ib3gge1xyXG5cdFx0LyogI2lmbmRlZiBBUFAtUExVUyAqL1xyXG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHR3aWR0aDogJGF2YXRhci13aWR0aDtcclxuXHRcdGhlaWdodDogJGF2YXRhci13aWR0aDtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdFx0LyogI2lmZGVmIEFQUC1OVlVFICovXHJcblx0XHR3aWR0aDogNTBweDtcclxuXHRcdGhlaWdodDogNTBweDtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDJweDtcclxuXHR9XHJcblxyXG5cdC51bmktbGlzdC1jaGF0X19oZWFkZXItaW1hZ2Uge1xyXG5cdFx0bWFyZ2luOiAxcHg7XHJcblx0XHQvKiAjaWZkZWYgQVBQLU5WVUUgKi9cclxuXHRcdHdpZHRoOiA1MHB4O1xyXG5cdFx0aGVpZ2h0OiA1MHB4O1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0XHR3aWR0aDogJGF2YXRhci13aWR0aDtcclxuXHRcdGhlaWdodDogJGF2YXRhci13aWR0aDtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdH1cclxuXHJcblx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdC51bmktbGlzdC1jaGF0X19oZWFkZXItaW1hZ2Uge1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHR9XHJcblxyXG5cdC5hdmF0YXJJdGVtLS0xIHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdH1cclxuXHJcblx0LmF2YXRhckl0ZW0tLTIge1xyXG5cdFx0d2lkdGg6IDQ3JTtcclxuXHRcdGhlaWdodDogNDclO1xyXG5cdH1cclxuXHJcblx0LmF2YXRhckl0ZW0tLTMge1xyXG5cdFx0d2lkdGg6IDMyJTtcclxuXHRcdGhlaWdodDogMzIlO1xyXG5cdH1cclxuXHJcblx0LyogI2VuZGlmICovXHJcblx0LmhlYWRlci0tY2lyY2xlIHtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHR9XHJcblxyXG5cdC51bmktbGlzdC1jaGF0X19jb250ZW50IHtcclxuXHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRmbGV4OiAxO1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdHBhZGRpbmc6IDJweCAwO1xyXG5cdH1cclxuXHJcblx0LnVuaS1saXN0LWNoYXRfX2NvbnRlbnQtbWFpbiB7XHJcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0cGFkZGluZy1sZWZ0OiAkdW5pLXNwYWNpbmctcm93LWJhc2U7XHJcblx0XHRmbGV4OiAxO1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHR9XHJcblxyXG5cdC51bmktbGlzdC1jaGF0X19jb250ZW50LXRpdGxlIHtcclxuXHRcdGZvbnQtc2l6ZTogJHRpdGxlLXNpemU7XHJcblx0XHRjb2xvcjogJHRpdGxlLWNvbG9yO1xyXG5cdFx0Zm9udC13ZWlnaHQ6ICR0aXRsZS13ZWlnaHQ7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdH1cclxuXHJcblx0LnVuaS1saXN0LWNoYXRfX2NvbnRlbnQtbm90ZSB7XHJcblx0XHRtYXJnaW4tdG9wOiAzcHg7XHJcblx0XHRjb2xvcjogJG5vdGUtY29sb3I7XHJcblx0XHRmb250LXNpemU6ICRub3RlLXNpemU7XHJcblx0XHRmb250LXdlaWdodDogJHRpdGxlLXdlaWdodDtcclxuXHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0fVxyXG5cclxuXHQudW5pLWxpc3QtY2hhdF9fY29udGVudC1leHRyYSB7XHJcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0XHRmbGV4LXNocmluazogMDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcblx0XHRtYXJnaW4tbGVmdDogNXB4O1xyXG5cdH1cclxuXHJcblx0LnVuaS1saXN0LWNoYXRfX2NvbnRlbnQtZXh0cmEtdGV4dCB7XHJcblx0XHRjb2xvcjogJHJpZ2h0LXRleHQtY29sb3I7XHJcblx0XHRmb250LXNpemU6ICRyaWdodC10ZXh0LXNpemU7XHJcblx0XHRmb250LXdlaWdodDogJHJpZ2h0LXRleHQtd2VpZ2h0O1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHR9XHJcblxyXG5cdC51bmktbGlzdC1jaGF0X19iYWRnZS1wb3Mge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0LyogI2lmZGVmIEFQUC1OVlVFICovXHJcblx0XHRsZWZ0OiA1NXB4O1xyXG5cdFx0dG9wOiAzcHg7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cclxuXHRcdGxlZnQ6IGNhbGMoI3skYXZhdGFyLXdpZHRofSArIDEwcHggLSAjeyRiYWRnZS1zcGFjZX0gKyAjeyRiYWRnZS1sZWZ0fSk7XHJcblx0XHR0b3A6IGNhbGMoI3skdW5pLXNwYWNpbmctcm93LWJhc2V9LyAyICsgMXB4ICsgI3skYmFkZ2UtdG9wfSk7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHR9XHJcblxyXG5cdC51bmktbGlzdC1jaGF0X19iYWRnZSB7XHJcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxMDBweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICRiYWRnZS1iYWNrZ3JvdW5kLWNvbG9yO1xyXG5cdH1cclxuXHJcblx0LnVuaS1saXN0LWNoYXRfX2JhZGdlLXRleHQge1xyXG5cdFx0Y29sb3I6ICRiYWRnZS1jb2xvcjtcclxuXHRcdGZvbnQtc2l6ZTogJGJhZGdlLWZvbnQ7XHJcblx0fVxyXG5cclxuXHQudW5pLWJhZGdlLS1zaW5nbGUge1xyXG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdFx0Ly8gbGVmdDogY2FsYygjeyRhdmF0YXItd2lkdGh9ICsgN3B4ICsgI3skYmFkZ2UtbGVmdH0pO1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0XHR3aWR0aDogJGJhZGdlLXNpemU7XHJcblx0XHRoZWlnaHQ6ICRiYWRnZS1zaXplO1xyXG5cdH1cclxuXHJcblx0LnVuaS1iYWRnZS0tY29tcGxleCB7XHJcblx0XHQvKiAjaWZkZWYgQVBQLU5WVUUgKi9cclxuXHRcdGxlZnQ6IDUwcHg7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cclxuXHRcdHdpZHRoOiBhdXRvO1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0XHRoZWlnaHQ6ICRiYWRnZS1zaXplO1xyXG5cdFx0cGFkZGluZzogMCAkYmFkZ2Utc3BhY2U7XHJcblx0fVxyXG5cclxuXHQudW5pLWJhZGdlLS1kb3Qge1xyXG5cdFx0LyogI2lmZGVmIEFQUC1OVlVFICovXHJcblx0XHRsZWZ0OiA2MHB4O1xyXG5cdFx0dG9wOiA2cHg7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cclxuXHRcdGxlZnQ6IGNhbGMoI3skYXZhdGFyLXdpZHRofSArIDE1cHggLSAjeyRkb3Qtd2lkdGh9LyAyICsgMXB4ICsgI3skYmFkZ2UtbGVmdH0pO1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0XHR3aWR0aDogJGRvdC13aWR0aDtcclxuXHRcdGhlaWdodDogJGRvdC1oZWlnaHQ7XHJcblx0XHRwYWRkaW5nOiAwO1xyXG5cdH1cclxuXHJcblx0LnVuaS1saXN0LWNoYXQtLXJpZ2h0IHtcclxuXHRcdC8qICNpZmRlZiBBUFAtTlZVRSAqL1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdH1cclxuPC9zdHlsZT5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///52\n");

/***/ }),
/* 53 */
/*!********************************************************************************************************************************************************!*\
  !*** D:/WebStudyProject/uniapp-project/meeting-demo/uni_modules/uni-list/components/uni-list-chat/uni-list-chat.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_list_chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!../../../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--10-oneOf-0-2!../../../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--10-oneOf-0-3!../../../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-4!../../../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-list-chat.vue?vue&type=style&index=0&lang=scss& */ 54);
/* harmony import */ var _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_list_chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_list_chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_list_chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_list_chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_list_chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 54 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/WebStudyProject/uniapp-project/meeting-demo/uni_modules/uni-list/components/uni-list-chat/uni-list-chat.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".uni-list-chat": {
    "": {
      "fontSize": [
        "16",
        0,
        0,
        20
      ],
      "position": [
        "relative",
        0,
        0,
        20
      ],
      "flexDirection": [
        "column",
        0,
        0,
        20
      ],
      "justifyContent": [
        "space-between",
        0,
        0,
        20
      ],
      "backgroundColor": [
        "#ffffff",
        0,
        0,
        20
      ]
    }
  },
  ".uni-list-chat--hover": {
    "": {
      "backgroundColor": [
        "#f5f5f5",
        0,
        0,
        21
      ]
    }
  },
  ".uni-list--border": {
    "": {
      "position": [
        "relative",
        0,
        0,
        22
      ],
      "marginLeft": [
        "15",
        0,
        0,
        22
      ],
      "borderTopColor": [
        "#e5e5e5",
        0,
        0,
        22
      ],
      "borderTopStyle": [
        "solid",
        0,
        0,
        22
      ],
      "borderTopWidth": [
        "0.5",
        0,
        0,
        22
      ]
    }
  },
  ".uni-list-chat--first": {
    "": {
      "borderTopWidth": [
        "0",
        0,
        0,
        23
      ]
    }
  },
  ".uni-ellipsis": {
    "": {
      "lines": [
        1,
        0,
        0,
        24
      ]
    }
  },
  ".uni-ellipsis-2": {
    "": {
      "lines": [
        2,
        0,
        0,
        25
      ]
    }
  },
  ".uni-list-chat__container": {
    "": {
      "position": [
        "relative",
        0,
        0,
        26
      ],
      "flexDirection": [
        "row",
        0,
        0,
        26
      ],
      "flex": [
        1,
        0,
        0,
        26
      ],
      "paddingTop": [
        "10",
        0,
        0,
        26
      ],
      "paddingRight": [
        "15",
        0,
        0,
        26
      ],
      "paddingBottom": [
        "10",
        0,
        0,
        26
      ],
      "paddingLeft": [
        "15",
        0,
        0,
        26
      ],
      "overflow": [
        "hidden",
        0,
        0,
        26
      ]
    }
  },
  ".uni-list-chat__header-warp": {
    "": {
      "position": [
        "relative",
        0,
        0,
        27
      ]
    }
  },
  ".uni-list-chat__header": {
    "": {
      "flexDirection": [
        "row",
        0,
        0,
        28
      ],
      "justifyContent": [
        "center",
        0,
        0,
        28
      ],
      "alignItems": [
        "center",
        0,
        0,
        28
      ],
      "flexWrap": [
        "wrap-reverse",
        0,
        0,
        28
      ],
      "width": [
        "50",
        0,
        0,
        28
      ],
      "height": [
        "50",
        0,
        0,
        28
      ],
      "borderRadius": [
        "5",
        0,
        0,
        28
      ],
      "borderColor": [
        "#eeeeee",
        0,
        0,
        28
      ],
      "borderWidth": [
        "1",
        0,
        0,
        28
      ],
      "borderStyle": [
        "solid",
        0,
        0,
        28
      ],
      "overflow": [
        "hidden",
        0,
        0,
        28
      ]
    }
  },
  ".uni-list-chat__header-box": {
    "": {
      "width": [
        "50",
        0,
        0,
        29
      ],
      "height": [
        "50",
        0,
        0,
        29
      ],
      "overflow": [
        "hidden",
        0,
        0,
        29
      ],
      "borderRadius": [
        "2",
        0,
        0,
        29
      ]
    }
  },
  ".uni-list-chat__header-image": {
    "": {
      "marginTop": [
        "1",
        0,
        0,
        30
      ],
      "marginRight": [
        "1",
        0,
        0,
        30
      ],
      "marginBottom": [
        "1",
        0,
        0,
        30
      ],
      "marginLeft": [
        "1",
        0,
        0,
        30
      ],
      "width": [
        "50",
        0,
        0,
        30
      ],
      "height": [
        "50",
        0,
        0,
        30
      ]
    }
  },
  ".header--circle": {
    "": {
      "borderRadius": [
        50,
        0,
        0,
        31
      ]
    }
  },
  ".uni-list-chat__content": {
    "": {
      "flexDirection": [
        "row",
        0,
        0,
        32
      ],
      "flex": [
        1,
        0,
        0,
        32
      ],
      "overflow": [
        "hidden",
        0,
        0,
        32
      ],
      "paddingTop": [
        "2",
        0,
        0,
        32
      ],
      "paddingRight": [
        0,
        0,
        0,
        32
      ],
      "paddingBottom": [
        "2",
        0,
        0,
        32
      ],
      "paddingLeft": [
        0,
        0,
        0,
        32
      ]
    }
  },
  ".uni-list-chat__content-main": {
    "": {
      "flexDirection": [
        "column",
        0,
        0,
        33
      ],
      "justifyContent": [
        "space-between",
        0,
        0,
        33
      ],
      "paddingLeft": [
        "10",
        0,
        0,
        33
      ],
      "flex": [
        1,
        0,
        0,
        33
      ],
      "overflow": [
        "hidden",
        0,
        0,
        33
      ]
    }
  },
  ".uni-list-chat__content-title": {
    "": {
      "fontSize": [
        "16",
        0,
        0,
        34
      ],
      "color": [
        "#3b4144",
        0,
        0,
        34
      ],
      "fontWeight": [
        "normal",
        0,
        0,
        34
      ],
      "overflow": [
        "hidden",
        0,
        0,
        34
      ]
    }
  },
  ".uni-list-chat__content-note": {
    "": {
      "marginTop": [
        "3",
        0,
        0,
        35
      ],
      "color": [
        "#999999",
        0,
        0,
        35
      ],
      "fontSize": [
        "12",
        0,
        0,
        35
      ],
      "fontWeight": [
        "normal",
        0,
        0,
        35
      ],
      "overflow": [
        "hidden",
        0,
        0,
        35
      ]
    }
  },
  ".uni-list-chat__content-extra": {
    "": {
      "flexDirection": [
        "column",
        0,
        0,
        36
      ],
      "justifyContent": [
        "space-between",
        0,
        0,
        36
      ],
      "alignItems": [
        "flex-end",
        0,
        0,
        36
      ],
      "marginLeft": [
        "5",
        0,
        0,
        36
      ]
    }
  },
  ".uni-list-chat__content-extra-text": {
    "": {
      "color": [
        "#999999",
        0,
        0,
        37
      ],
      "fontSize": [
        "12",
        0,
        0,
        37
      ],
      "fontWeight": [
        "normal",
        0,
        0,
        37
      ],
      "overflow": [
        "hidden",
        0,
        0,
        37
      ]
    }
  },
  ".uni-list-chat__badge-pos": {
    "": {
      "position": [
        "absolute",
        0,
        0,
        38
      ],
      "left": [
        "55",
        0,
        0,
        38
      ],
      "top": [
        "3",
        0,
        0,
        38
      ]
    }
  },
  ".uni-list-chat__badge": {
    "": {
      "justifyContent": [
        "center",
        0,
        0,
        39
      ],
      "alignItems": [
        "center",
        0,
        0,
        39
      ],
      "borderRadius": [
        "100",
        0,
        0,
        39
      ],
      "backgroundColor": [
        "#ff5a5f",
        0,
        0,
        39
      ]
    }
  },
  ".uni-list-chat__badge-text": {
    "": {
      "color": [
        "#ffffff",
        0,
        0,
        40
      ],
      "fontSize": [
        "12",
        0,
        0,
        40
      ]
    }
  },
  ".uni-badge--single": {
    "": {
      "width": [
        "18",
        0,
        0,
        41
      ],
      "height": [
        "18",
        0,
        0,
        41
      ]
    }
  },
  ".uni-badge--complex": {
    "": {
      "left": [
        "50",
        0,
        0,
        42
      ],
      "height": [
        "18",
        0,
        0,
        42
      ],
      "paddingTop": [
        0,
        0,
        0,
        42
      ],
      "paddingRight": [
        "6",
        0,
        0,
        42
      ],
      "paddingBottom": [
        0,
        0,
        0,
        42
      ],
      "paddingLeft": [
        "6",
        0,
        0,
        42
      ]
    }
  },
  ".uni-badge--dot": {
    "": {
      "left": [
        "60",
        0,
        0,
        43
      ],
      "top": [
        "6",
        0,
        0,
        43
      ],
      "width": [
        "10",
        0,
        0,
        43
      ],
      "height": [
        "10",
        0,
        0,
        43
      ],
      "paddingTop": [
        0,
        0,
        0,
        43
      ],
      "paddingRight": [
        0,
        0,
        0,
        43
      ],
      "paddingBottom": [
        0,
        0,
        0,
        43
      ],
      "paddingLeft": [
        0,
        0,
        0,
        43
      ]
    }
  },
  ".uni-list-chat--right": {
    "": {
      "left": [
        0,
        0,
        0,
        44
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),
/* 55 */
/*!*********************************************************************************************************************************!*\
  !*** D:/WebStudyProject/uniapp-project/meeting-demo/pages/meeting-video/meeting-video.nvue?vue&type=script&lang=js&mpType=page ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_meeting_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--5-0!../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./meeting-video.nvue?vue&type=script&lang=js&mpType=page */ 56);\n/* harmony import */ var _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_meeting_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_meeting_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_meeting_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_meeting_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_meeting_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNkLENBQWdCLGtmQUFHLEVBQUMiLCJmaWxlIjoiNTUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL3d6IEFwcC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtMCEuLi8uLi8uLi8uLi8uLi93eiBBcHAvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi8uLi8uLi8uLi93eiBBcHAvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbWVldGluZy12aWRlby5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vd3ogQXBwL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS0wIS4uLy4uLy4uLy4uLy4uL3d6IEFwcC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0xIS4uLy4uLy4uLy4uLy4uL3d6IEFwcC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tZWV0aW5nLXZpZGVvLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///55\n");

/***/ }),
/* 56 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/WebStudyProject/uniapp-project/meeting-demo/pages/meeting-video/meeting-video.nvue?vue&type=script&lang=js&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 57));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _vuex = __webpack_require__(/*! vuex */ 13);\nvar _until = _interopRequireDefault(__webpack_require__(/*! ../../utils/until.js */ 59));\nvar _index = __webpack_require__(/*! ../../api/index.js */ 61);\nvar _uniAsync = __webpack_require__(/*! ../../utils/uniAsync.js */ 63);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};}var _default =\n{\n  data: function data() {\n    return {\n      // appid标识\n      appid: '',\n      // 房间号\n      channel: '',\n      // 本地用户\n      localuid: '',\n      // 远端用户\n      peeridInfo: [],\n      // 远端视频容器\n      remoteLits: [],\n      windowWidth: 400,\n      windowHeight: 800,\n      noSponsor: '', // 会议发起者是否在线\n      checked: true, // 音频开关\n      // 远端视频容器样式\n      peeridInfoStyle: \"video_local\",\n      // 房主\n      originatorUserInfoId: '',\n      video: true, // 视频开关\n      // 本人信息对象\n      localPerson: {},\n      // 会议号\n      meetingNumber: '',\n      camera: true, // 默认前置,\n      Speakerphone: false, // 是否免提 \n      startTime: '', // 会议开始时间\n      endTime: '', // 会议结束时间,\n      downCount: '', // 会议倒计时\n      isMeetingEnd: '', // 会议是否结束\n      timer: null, // 倒计时定时器唯一标识\n      timingTimer: null, // 计时器唯一标识\n      timing: 0, // 会议时间已到但房主还未离开房间继续计时\n      // 进入的页面是签到页\n      page: '' };\n\n  },\n  onShow: function onShow() {var _this = this;\n    this.timer = setInterval( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var _getApp$downCount, downCount, isEnd;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:\n              // 倒计时\n              _getApp$downCount = getApp().downCount(_this.endTime), downCount = _getApp$downCount.downCount, isEnd = _getApp$downCount.isEnd;\n              _this.downCount = downCount;\n              _this.isMeetingEnd = isEnd;if (!\n              isEnd) {_context.next = 13;break;}if (!\n              _this.getOriginatorUserOnline()) {_context.next = 8;break;}\n              _this.timingTimer = setInterval(function () {\n                _this.timing++;\n                // 正计时\n                var _getApp$downCount2 = getApp().downCount(_this.timing, true),downCount = _getApp$downCount2.downCount;\n                _this.downCount = downCount;\n                if (!_this.getOriginatorUserOnline()) {\n                  _this.destroyRtc();\n                  clearInterval(_this.timingTimer);\n                  _this.timingTimer = null;\n                }\n              }, 1000);_context.next = 11;break;case 8:_context.next = 10;return (\n\n                (0, _uniAsync.showToast)({ title: '会议时间已到!', icon: 'none', mask: true }));case 10:\n              // 房主离开房间了,销毁实例,退出房间\n              setTimeout(_this.destroyRtc, 1500);case 11:\n\n              // 清除定时器\n              clearInterval(_this.timer);\n              _this.timer = null;case 13:case \"end\":return _context.stop();}}}, _callee);})),\n\n    1000);\n  },\n  onHide: function onHide() {\n    if (this.timer !== null) clearInterval(this.timer);\n    if (this.timingTimer !== null) clearInterval(this.timingTimer);\n  },\n  onLoad: function onLoad(_ref2) {var meetingNumber = _ref2.meetingNumber,startTime = _ref2.startTime,endTime = _ref2.endTime,_ref2$page = _ref2.page,page = _ref2$page === void 0 ? '' : _ref2$page;\n    this.meetingNumber = meetingNumber;\n    if (page) this.page = page;\n    // 初始化信息创建视频RTC所需\n    this.joinConferenceFun(meetingNumber);\n    this.startTime = startTime;\n    this.endTime = endTime;\n  },\n  computed: _objectSpread(_objectSpread(_objectSpread({},\n  (0, _vuex.mapState)(['barHeight', 'RtcModule'])),\n  (0, _vuex.mapGetters)(['topBarHeight'])), {}, {\n    // 参会总人数\n    participantCount: function participantCount() {\n      return this.peeridInfo.length + 1;\n    } }),\n\n  watch: {\n    peeridInfo: {\n      // 监听远端人数[变换样式]\n      deep: true,\n      immediate: true,\n      handler: function handler(newList, oldList) {\n        if (newList.length === 0) {\n          this.peeridInfoStyle = 'video_local';\n        } else {\n          this.peeridInfoStyle = 'video_local_1';\n        }\n      } } },\n\n\n  created: function created() {var _this2 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {var oInfo;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return (\n                _until.default.getWidthHeight());case 2:oInfo = _context2.sent;\n              _this2.windowWidth = oInfo.windowWidth;\n              _this2.windowHeight = oInfo.windowHeight;case 5:case \"end\":return _context2.stop();}}}, _callee2);}))();\n  },\n  methods: {\n    // 判断房主是否在线或当前用户是否为房主\n    getOriginatorUserOnline: function getOriginatorUserOnline() {var\n      peeridInfo = this.peeridInfo,originatorUserInfoId = this.originatorUserInfoId,localuid = this.localuid;\n      return peeridInfo.some(function (item) {return item.id == originatorUserInfoId;}) || localuid == originatorUserInfoId;\n    },\n    // 获取信息\n    joinConferenceFun: function joinConferenceFun(meetingNumber) {var _this3 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {var _yield$joinConference, res;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.next = 2;return (\n                  (0, _index.joinConference)({ meetingNumber: meetingNumber }));case 2:_yield$joinConference = _context3.sent;res = _yield$joinConference.obj;if (!(\n                res.originatorUserInfoId != res.participantUserId && _this3.peeridInfo.length == 0)) {_context3.next = 8;break;}\n                _this3.noSponsor = '会议发起者不在线,请等候..';_context3.next = 8;return (\n                  (0, _uniAsync.showToast)({ title: _this3.noSponsor, icon: 'none' }));case 8:\n\n                _this3.appid = res.appId;\n                _this3.localuid = res.participantUserId;\n                _this3.channel = meetingNumber;\n                _this3.originatorUserInfoId = res.originatorUserInfoId;\n                __f__(\"log\", JSON.stringify(res), '@#$#@@#$#@', \" at pages/meeting-video/meeting-video.nvue:224\");\n                _this3.callbackFn();\n                _this3.init();\n                _this3.enableVideo();\n                _this3.join();\n                _this3.getUserInfoByIdFun(res.participantUserId, true);case 18:case \"end\":return _context3.stop();}}}, _callee3);}))();\n    },\n    // 根据id获取用户信息\n    getUserInfoByIdFun: function getUserInfoByIdFun(id, local) {var _this4 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5() {var _yield$getUserInfoByI, res;return _regenerator.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:_context5.next = 2;return (\n                  (0, _index.getUserInfoById)({ id: id }));case 2:_yield$getUserInfoByI = _context5.sent;res = _yield$getUserInfoByI.obj;\n                __f__(\"log\", JSON.stringify(res), \" at pages/meeting-video/meeting-video.nvue:234\");\n                if (local) {\n                  // 本地[本人] // 自加一个是否开启视频\n                  _this4.localPerson = _objectSpread(_objectSpread({}, res), {}, { videoStatus: true });\n                } else {\n                  _this4.peeridInfo.push(_objectSpread({\n                    uid: id,\n                    videoStatus: true },\n                  res));\n\n                  __f__(\"log\", JSON.stringify(_this4.peeridInfo), \" at pages/meeting-video/meeting-video.nvue:244\");\n                  _this4.$nextTick(function () {\n                    var data1 = {\n                      remote: _this4.$refs['remote' + id],\n                      peerid: id };\n\n                    // 本地视频容器\n                    if (data1.location) {\n                      _this4.location = data1.location;\n                      // 远端视频容器\n                    } else if (data1.peerid && data1.remote) {\n                      var oa = _this4.remoteLits.filter(function (item) {\n                        return item.peerid == data1.peerid;\n                      });\n                      if (oa.length == 0) {\n                        _this4.remoteLits.push(data1);\n                        setTimeout(function () {\n                          _this4.remoteLits.map( /*#__PURE__*/function () {var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4(item) {return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:if (!(\n                                      item.peerid == data1.peerid)) {_context4.next = 7;break;}\n                                      __f__(\"log\", \"频道\", _this4.channel, \" at pages/meeting-video/meeting-video.nvue:263\");\n                                      __f__(\"log\", item.peerid, _this4.remoteLits, _this4.peeridInfo, \" at pages/meeting-video/meeting-video.nvue:264\");_context4.next = 5;return (\n                                        item.remote[0].setupRemoteVideo({\n                                          \"uid\": item.peerid,\n                                          \"channelId\": _this4.channel,\n                                          \"renderMode\": 1,\n                                          \"mirrorMode\": 0 },\n                                        function (res) {\n                                          __f__(\"log\", '渲染远端视频', res, \" at pages/meeting-video/meeting-video.nvue:271\");\n                                        }));case 5:_context4.next = 7;return (\n\n                                        item.remote[0].startPreview(function (res) {\n                                          __f__(\"log\", '远端本地预览', res, \" at pages/meeting-video/meeting-video.nvue:275\");\n                                        }));case 7:case \"end\":return _context4.stop();}}}, _callee4);}));return function (_x) {return _ref3.apply(this, arguments);};}());\n\n\n                        }, 500);\n                      }\n                    }\n                  });\n                }case 6:case \"end\":return _context5.stop();}}}, _callee5);}))();\n    },\n    callbackFn: function callbackFn() {var _this5 = this; // 1\n      var that = this;\n      this.RtcModule.setCallBack(function (res) {\n        switch (res.engineEvent) {\n          case \"onWarning\": //警告回调\n            __f__(\"log\", 'onWarning', \" at pages/meeting-video/meeting-video.nvue:290\");\n            break;\n          case \"onError\": //错误回调\n            __f__(\"log\", 'onError', \" at pages/meeting-video/meeting-video.nvue:293\");\n            break;\n          case \"onJoinChannelSuccess\": //用户加入成功\n            __f__(\"log\", 'onJoinChannelSuccess', \" at pages/meeting-video/meeting-video.nvue:296\");\n            __f__(\"log\", JSON.stringify(res), '@$@#@$$#@@#onJoinChannelSuccess', \" at pages/meeting-video/meeting-video.nvue:297\");\n            that.localVideo();\n            break;\n          case \"onLeaveChannel\": //离开频道回调\n            __f__(\"log\", 'onLeaveChannel', \" at pages/meeting-video/meeting-video.nvue:301\");\n            break;\n          case \"onUserJoined\": //远端用户加入当前频道回调。\n            __f__(\"log\", 'onUserJoined', \" at pages/meeting-video/meeting-video.nvue:304\");\n            break;\n          case \"onUserOffline\": //远端用户离开当前频道回调。\n            __f__(\"log\", 'onUserOffline', \" at pages/meeting-video/meeting-video.nvue:307\");\n            _this5.userOffLine(res);\n            break;\n          case \"onFirstLocalAudioFrame\": //已发送本地音频首帧的回调。（页面上添加音频）\n            __f__(\"log\", 'onFirstLocalAudioFrame', \" at pages/meeting-video/meeting-video.nvue:311\");\n            break;\n          case \"onFirstLocalVideoFrame\": //已显示本地视频首帧的回调。（页面添加本地视频）\n            // this.promptFn(\"error\", \"已显示本地视频首帧的回调\");\n            __f__(\"log\", 'onFirstLocalVideoFrame', \" at pages/meeting-video/meeting-video.nvue:315\");\n            break;\n          case \"onRemoteVideoStateChanged\": // 远端用户视频状态发生已变化回调(当频道内的用户超过 17 个时，该回调可能不准确)）\n            __f__(\"log\", \"onFirstRemoteVideoDecoded远端用户视频状态发生已变化回调\", res, \" at pages/meeting-video/meeting-video.nvue:318\");\n            that.videoStateChanged(res);\n            break;\n          case \"onFirstRemoteVideoDecoded\": //已完成远端视频首帧解码回调。（页面添加远端视频）\n            __f__(\"log\", 'onFirstRemoteVideoDecoded', res, \" at pages/meeting-video/meeting-video.nvue:322\");\n            // 远端视频渲染\n            that.remotenableVide(res.uid);\n            break;}\n\n      });\n    },\n    destroyRtc: function destroyRtc() {var _this6 = this;\n      this.RtcModule.destroyRtc(function (res) {\n        __f__(\"log\", \"销毁实例\", _this6.page, \" at pages/meeting-video/meeting-video.nvue:331\");\n        // 如果是从签到页或创建会议页进来的就直接退回首页\n        if (_this6.page == '1') {\n          uni.switchTab({\n            url: '/pages/index/index' });\n\n        } else {\n          // 销毁实例说明该用户退出了本次会议\n          uni.navigateBack({\n            delta: 2 });\n\n        }\n      });\n    },\n    // 摄像头（前后）\n    switchCamera: function switchCamera() {\n      this.camera = !this.camera;\n      this.RtcModule.switchCamera(function (res) {\n        __f__(\"log\", 'RTC 摄像头前后 switchCamera 方法调用', res.code === 0 ? '成功' : '失败：' + res, \" at pages/meeting-video/meeting-video.nvue:349\");\n      });\n    },\n    // 音频是否免提\n    setEnableSpeakerphone: function setEnableSpeakerphone(fase) {\n      var Speakerphone = !fase;\n      this.Speakerphone = Speakerphone;\n      // 默认扬声器播放\n      this.RtcModule.setEnableSpeakerphone({\n        \"enabled\": Speakerphone },\n      function (res) {\n        __f__(\"log\", 'RTC 远端加入房间后设置' + (Speakerphone ? '开启' : '关闭') + '扬声器播放', res.code === 0 ? '成功' :\n        '失败：' +\n        res, \" at pages/meeting-video/meeting-video.nvue:360\");\n      });\n    },\n    // 初始化\n    init: function init() {var _this7 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6() {return _regenerator.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0: // 2\n                __f__(\"log\", _this7.RtcModule.create, \" at pages/meeting-video/meeting-video.nvue:367\");_context6.next = 3;return (\n                  _this7.RtcModule.create({\n                    //anyRTC 为 App 开发者签发的 App ID。\n                    \"appId\": _this7.appid },\n                  function (res) {\n                    __f__(\"log\", JSON.stringify(res), \" at pages/meeting-video/meeting-video.nvue:372\");\n                  }));case 3:case \"end\":return _context6.stop();}}}, _callee6);}))();\n    },\n    enableVideo: function enableVideo() {// 3\n      this.RtcModule.enableVideo(function (res) {\n        __f__(\"log\", '启用视频:' + res.code, \" at pages/meeting-video/meeting-video.nvue:377\");\n      });\n    },\n    // 用户离开当前房间时调用\n    userOffLine: function userOffLine(data) {\n      if (data) {\n        // 删除当前匹配的远端用户\n        this.peeridInfo.splice(this.peeridInfo.findIndex(function (item) {return item.uid === data.uid;}), 1);\n        // 如果推流，需要重新推流\n        // if (this.liveState) {\n        // \tthis.liveTranscoFn();\n        // }\n      }\n    },\n    // 转语音\n    toSpeech: function toSpeech() {\n      // 关闭视频模块\n      this.RtcModule.disableVideo(function (res) {\n        __f__(\"log\", 'RTC 关闭视频模块 disableVideo 方法调用', res.code === 0 ? '成功' : '失败：' +\n        res, \" at pages/meeting-video/meeting-video.nvue:395\");\n      });\n    },\n    // 音频是否关闭\n    enableLocalAudio: function enableLocalAudio(checked) {\n      var checkedAudio = !checked;\n      this.checked = checkedAudio;\n      this.RtcModule.enableLocalAudio({\n        \"enabled\": checkedAudio },\n      function (res) {\n        __f__(\"log\", 'RTC 音频' + (checkedAudio ? '开启' : '关闭'), (res.code === 0 ? '成功' : '失败：') + res, \" at pages/meeting-video/meeting-video.nvue:406\");\n      });\n    },\n    remotenableVide: function remotenableVide(data) {var _this8 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee7() {var that, oa;return _regenerator.default.wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:\n                that = _this8;if (!\n                data) {_context7.next = 9;break;}\n                oa = that.peeridInfo.filter(function (item) {\n                  return item.uid == data;\n                });if (!(\n                oa.length == 0)) {_context7.next = 9;break;}if (!(\n                _this8.originatorUserInfoId == data)) {_context7.next = 8;break;}\n                _this8.noSponsor = '会议发起者进入房间';_context7.next = 8;return (\n                  (0, _uniAsync.showToast)({ title: _this8.noSponsor, icon: 'none' }));case 8:\n\n                // 发请求获取该远端用户信息\n                _this8.getUserInfoByIdFun(data, false);case 9:case \"end\":return _context7.stop();}}}, _callee7);}))();\n\n\n    },\n    join: function join() {// 4\n      // this.localuid = this.randomFn(6)\n      this.RtcModule.joinChannel({\n        \"token\": \"\",\n        \"channelId\": this.channel,\n        \"uid\": this.localuid },\n      function (res) {\n        __f__(\"log\", '加入房间', +res.code == 0 ? '成功' : '失败' + res, \" at pages/meeting-video/meeting-video.nvue:432\");\n      });\n    },\n    videoStateChanged: function videoStateChanged(data) {\n      if (data) {\n        // 数组map方法当数组值为基本类型时不改变其原数组,当值为复杂类型(object)时会改变原数组\n        this.peeridInfo.map(function (item) {\n          if (item.uid == data.uid) {\n            // 远端用户关闭视频[reason=5和状态state == 0,说明用户关闭了视频]\n            if (data.reason == 5 && data.state == 0) {\n              item.videoStatus = false;\n              // 远端用户开启视频[reason=0和状态state == 2,说明用户开启了视频]\n            } else if (data.state == 2 && data.reason == 0) {\n              item.videoStatus = true;\n            }\n          }\n        });\n      }\n    },\n    localVideo: function localVideo() {var _this9 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee8() {return _regenerator.default.wrap(function _callee8$(_context8) {while (1) {switch (_context8.prev = _context8.next) {case 0:_context8.next = 2;return (\n                  _this9.$refs.location.setupLocalVideo({\n                    \"renderMode\": 1,\n                    \"channelId\": _this9.channel,\n                    \"uid\": _this9.localuid,\n                    \"mirrorMode\": 0 },\n                  function (res) {\n                    __f__(\"log\", '视频渲染', res, \" at pages/meeting-video/meeting-video.nvue:458\");\n                    // 本地预览\n                    _this9.RtcModule.startPreview(function (res) {\n                      __f__(\"log\", '本地预览', res, \" at pages/meeting-video/meeting-video.nvue:461\");\n                    });\n                  }));case 2:case \"end\":return _context8.stop();}}}, _callee8);}))();\n    },\n    // 本地视频是否采集\n    enableLocalVideo: function enableLocalVideo(checked) {\n      var videoChecked = !checked;\n      this.video = videoChecked;\n      this.$set(this.localPerson, 'videoStatus', videoChecked);\n      this.RtcModule.enableLocalVideo({\n        \"enabled\": videoChecked },\n      function (res) {\n        __f__(\"log\", 'RTC 视频' + (videoChecked ? '开启' : '关闭'), (res.code === 0 ? '成功' : '失败：') + res, \" at pages/meeting-video/meeting-video.nvue:473\");\n      });\n    },\n    // 随机生成\n    randomFn: function randomFn(len, charSet) {\n      charSet = charSet || 'abcdefghijkImnopqrstuvwxyz0123456789';\n      var randomString = '';\n      for (var i = 0; i < len; i++) {\n        var randomPoz = Math.floor(Math.random() * charSet.length);\n        randomString = charSet.substring(randomPoz, randomPoz + 1);\n      }\n      return randomString;\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 25)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvbWVldGluZy12aWRlby9tZWV0aW5nLXZpZGVvLm52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThGQTtBQUNBO0FBQ0E7QUFDQSx1RTtBQUNBO0FBQ0EsTUFEQSxrQkFDQTtBQUNBO0FBQ0E7QUFDQSxlQUZBO0FBR0E7QUFDQSxpQkFKQTtBQUtBO0FBQ0Esa0JBTkE7QUFPQTtBQUNBLG9CQVJBO0FBU0E7QUFDQSxvQkFWQTtBQVdBLHNCQVhBO0FBWUEsdUJBWkE7QUFhQSxtQkFiQSxFQWFBO0FBQ0EsbUJBZEEsRUFjQTtBQUNBO0FBQ0Esb0NBaEJBO0FBaUJBO0FBQ0EsOEJBbEJBO0FBbUJBLGlCQW5CQSxFQW1CQTtBQUNBO0FBQ0EscUJBckJBO0FBc0JBO0FBQ0EsdUJBdkJBO0FBd0JBLGtCQXhCQSxFQXdCQTtBQUNBLHlCQXpCQSxFQXlCQTtBQUNBLG1CQTFCQSxFQTBCQTtBQUNBLGlCQTNCQSxFQTJCQTtBQUNBLG1CQTVCQSxFQTRCQTtBQUNBLHNCQTdCQSxFQTZCQTtBQUNBLGlCQTlCQSxFQThCQTtBQUNBLHVCQS9CQSxFQStCQTtBQUNBLGVBaENBLEVBZ0NBO0FBQ0E7QUFDQSxjQWxDQTs7QUFvQ0EsR0F0Q0E7QUF1Q0EsUUF2Q0Esb0JBdUNBO0FBQ0E7QUFDQTtBQURBLGtDQUVBLGlDQUZBLEVBRUEsU0FGQSxxQkFFQSxTQUZBLEVBRUEsS0FGQSxxQkFFQSxLQUZBO0FBR0E7QUFDQSx5Q0FKQTtBQUtBLG1CQUxBO0FBTUEsNkNBTkE7QUFPQTtBQUNBO0FBQ0E7QUFGQSx5Q0FHQSxzQ0FIQSxDQUdBLFNBSEEsc0JBR0EsU0FIQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBVkEsRUFVQSxJQVZBLEVBUEE7O0FBbUJBLHdG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QkFuUUEsNEJBbVFBLE9BblFBLEVBbVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFEQTtBQUVBO0FBQ0E7QUFDQSxPQUpBO0FBS0EsS0E1UUE7QUE2UUE7QUFDQSxZQTlRQSxvQkE4UUEsR0E5UUEsRUE4UUEsT0E5UUEsRUE4UUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBdFJBLEVBNUdBLEUiLCJmaWxlIjoiNTYuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDx2aWV3IDpzdHlsZT1cInt3aWR0aDogd2luZG93V2lkdGggKyAncHgnLGhlaWdodDogd2luZG93SGVpZ2h0ICsgJ3B4JywgYmFja2dyb3VuZENvbG9yOiAnIzIyMjQyNSd9XCI+XHJcbiAgICA8TmF2VG9wIGJnQ3I9XCJibGFja1wiPlxyXG4gICAgXHQ8dmlldyBjbGFzcz1cInRvcC1iYXJcIiA6c3R5bGU9XCJ7aGVpZ2h0OiB0b3BCYXJIZWlnaHQgKyAncHgnfVwiPlxyXG4gICAgICAgIDx2aWV3IGNsYXNzPVwic291bmQtYm94XCIgdi1pZj1cInBlZXJpZEluZm8ubGVuZ3RoID4gMFwiIEBjbGljaz1cInNldEVuYWJsZVNwZWFrZXJwaG9uZShTcGVha2VycGhvbmUpXCI+XHJcbiAgICAgICAgICA8aW1hZ2UgOnNyYz1cIlNwZWFrZXJwaG9uZSA/ICcuLi8uLi9zdGF0aWMvaW1hZ2VzL2ljb24vaWNvbl9zcGVha2Vycy5wbmcnIDogJy4uLy4uL3N0YXRpYy9pbWFnZXMvaWNvbi9pY29uX3NwZWFrZXIucG5nJ1wiIHN0eWxlPVwid2lkdGg6IDYwcnB4O2hlaWdodDogNjBycHg7XCI+PC9pbWFnZT5cclxuICAgICAgICA8L3ZpZXc+XHJcbiAgICBcdFx0PHZpZXcgY2xhc3M9XCJiYXItdGl0bGVcIj5cclxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiZm9udC1jb2xvclwiIHN0eWxlPVwiZm9udC1zaXplOiAzMnJweDtcIj57eyBtZWV0aW5nTnVtYmVyIH19PC90ZXh0PlxyXG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJmb250LWNvbG9yXCIgc3R5bGU9XCJmb250LXNpemU6IDIzcnB4O1wiPnt7IGRvd25Db3VudCB9fTwvdGV4dD5cclxuICAgICAgICA8L3ZpZXc+XHJcbiAgICBcdFx0PHZpZXcgY2xhc3M9XCJlbmQtYnRuXCIgQGNsaWNrPVwiZGVzdHJveVJ0Y1wiPjx0ZXh0IGNsYXNzPVwiZm9udC1jb2xvclwiPue7k+adnzwvdGV4dD48L3ZpZXc+XHJcbiAgICBcdDwvdmlldz5cclxuICAgIDwvTmF2VG9wPlxuPCEtLSAgICA8YnV0dG9uIEBjbGljaz1cImNhbGxiYWNrRm5cIj7liJ3lp4vljJblm57osIM8L2J1dHRvbj5cbiAgICA8YnV0dG9uIEBjbGljaz1cImluaXRcIj7liJ3lp4vljJblrp7kvos8L2J1dHRvbj5cbiAgICA8YnV0dG9uIEBjbGljaz1cImVuYWJsZVZpZGVvXCI+5ZCv55So6KeG6aKRPC9idXR0b24+XG4gICAgPGJ1dHRvbiBAY2xpY2s9XCJqb2luXCI+5Yqg5YWl5oi/6Ze0PC9idXR0b24+XHJcbiAgICA8YnV0dG9uIEBjbGljaz1cImRlc3Ryb3lSdGNcIj7pgIDlh7rpobXpnaLliY3orrDlvpfplIDmr4Hlrp7kvos8L2J1dHRvbj5cclxuICAgIDxidXR0b24gQGNsaWNrPVwiZGVzdHJveVJ0Y1wiPumAgOWHuumhtemdouWJjeiusOW+l+mUgOavgeWunuS+izwvYnV0dG9uIC0tPlxyXG4gICAgPHNjcm9sbC12aWV3IHNjcm9sbC15IGNsYXNzPVwiY2FudmFzVmlld1wiIDpzdHlsZT1cInt3aWR0aDogd2luZG93V2lkdGggKyAncHgnLGhlaWdodDogKHdpbmRvd0hlaWdodCAtIDY1IC0gYmFySGVpZ2h0LmFsbEhlaWdodCkgKyAncHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjMjIyNDI1J31cIj5cclxuICAgICAgPHZpZXcgY2xhc3M9XCJ2aWRlb1wiIDpjbGFzcz1cInBlZXJpZEluZm9TdHlsZVwiPlxyXG4gICAgICAgIDwhLS0ge3tsb2NhbHVpZH19IC0tPlxyXG4gICAgICAgIDxBUi1DYW52YXNWaWV3IHJlZj1cImxvY2F0aW9uXCIgc3R5bGU9XCJmbGV4OiAxO1wiIC8+XHJcbiAgICAgICAgPCEtLSDlhbPpl63op4bpopHlkI7mmL7npLogLS0+XHJcbiAgICAgICAgPHZpZXcgY2xhc3M9XCJsb2NhdGlvbi1ub25lXCIgOnN0eWxlPVwie2xlZnQ6IHZpZGVvID8gJy04MDBweCcgOiAnMHB4JyxiYWNrZ3JvdW5kQ29sb3I6ICB2aWRlbyA/ICcnOicjMjIyNDI1JyxvcGFjaXR5OiB2aWRlbyA/ICcwJzonMSd9XCI+XHJcbiAgICAgICAgXHQ8aW1hZ2UgOnNyYz1cImxvY2FsUGVyc29uLmF2YXRhclwiIGNsYXNzPVwidXNlci1hdmF0YXJcIj48L2ltYWdlPlxyXG4gICAgICAgIFx0PHRleHQgY2xhc3M9XCJ1c2VyLW5hbWUgZm9udC1jb2xvclwiPnt7bG9jYWxQZXJzb24ubmlja25hbWV9fTwvdGV4dD5cclxuICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgPHZpZXcgY2xhc3M9XCJjdXItdXNlcm5hbWVcIiB2LWlmPVwidmlkZW9cIj48dGV4dCBjbGFzcz1cImZvbnQtY29sb3IgdHh0XCI+e3tsb2NhbFBlcnNvbi5uaWNrbmFtZX19PC90ZXh0Pjwvdmlldz5cclxuICAgICAgPC92aWV3PlxyXG4gICAgICA8IS0tIOi/nOerr+eUqOaIt+inhumikea4suafkyAtLT5cclxuICAgICAgPHZpZXcgdi1mb3I9XCJwZWVyaWQgaW4gcGVlcmlkSW5mb1wiIDprZXk9XCJwZWVyaWQudWlkXCIgY2xhc3M9XCJ2aWRlb1wiIDpjbGFzcz1cInBlZXJpZEluZm9TdHlsZVwiPlxyXG4gICAgICAgIDx2aWV3IHN0eWxlPVwiZmxleDogMTtcIj5cclxuICAgICAgICAgIDxBUi1DYW52YXNWaWV3IDpyZWY9XCIncmVtb3RlJytwZWVyaWQudWlkXCIgc3R5bGU9XCJmbGV4OiAxO1wiIC8+XHJcbiAgICAgICAgICA8IS0tIOWFs+mXreinhumikeWQjuaYvuekuiAtLT5cclxuICAgICAgICAgIDx2aWV3IGNsYXNzPVwibG9jYXRpb24tbm9uZVwiIDpzdHlsZT1cIntsZWZ0OiBwZWVyaWQudmlkZW9TdGF0dXMgPyAnLTgwMHB4JyA6ICcwcHgnLGJhY2tncm91bmRDb2xvcjogIHBlZXJpZC52aWRlb1N0YXR1cyA/ICcnOicjMjIyNDI1JyxvcGFjaXR5OiBwZWVyaWQudmlkZW9TdGF0dXMgPyAnMCc6JzEnfVwiPlxyXG4gICAgICAgICAgICA8aW1hZ2UgOnNyYz1cInBlZXJpZC5hdmF0YXJcIiBjbGFzcz1cInVzZXItYXZhdGFyXCI+PC9pbWFnZT5cclxuICAgICAgICAgIFx0PHRleHQgY2xhc3M9XCJ1c2VyLW5hbWUgZm9udC1jb2xvclwiPnt7cGVlcmlkLm5pY2tuYW1lfX08L3RleHQ+XHJcbiAgICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgICA8dmlldyBjbGFzcz1cImN1ci11c2VybmFtZVwiIHYtaWY9XCJwZWVyaWQudmlkZW9TdGF0dXNcIj48dGV4dCBjbGFzcz1cImZvbnQtY29sb3IgdHh0XCI+e3twZWVyaWQubmlja25hbWV9fTwvdGV4dD48L3ZpZXc+XHJcbiAgICAgICAgPC92aWV3PlxyXG4gICAgICA8L3ZpZXc+XHJcbiAgICA8L3Njcm9sbC12aWV3PlxyXG4gICAgPHZpZXcgY2xhc3M9XCJidG0tdG9vbHNcIiA6c3R5bGU9XCJ7d2lkdGg6IHdpbmRvd1dpZHRoICsgJ3B4J31cIj5cclxuICAgICAgPHZpZXcgc3R5bGU9XCJmbGV4LWRpcmVjdGlvbjogcm93O2p1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcIj5cclxuICAgICAgICA8IS0tIOWIh+aNouWJjeWQjuaRhOWDj+WktCAtLT5cclxuICAgICAgICA8dmlldyBjbGFzcz1cImljb25cIiB2LWlmPVwidmlkZW9cIiBAY2xpY2s9XCJzd2l0Y2hDYW1lcmFcIj5cclxuICAgICAgICAgIDxpbWFnZSBjbGFzcz1cImljb25faW1nXCIgc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9pY29uL2NhbWVyYS5wbmdcIj48L2ltYWdlPlxyXG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJpY29uX3RleHRcIj57eyBjYW1lcmEgPyAn5pGE5YOP5YmNJyA6J+aRhOWDj+WQjicgfX08L3RleHQ+XHJcbiAgICAgICAgPC92aWV3PlxyXG4gICAgICAgIDwhLS0g5oyC5patIC0tPlxyXG4gICAgICAgIDx2aWV3IGNsYXNzPVwiaWNvblwiIEBjbGljaz1cImRlc3Ryb3lSdGNcIj5cclxuICAgICAgICAgIDxpbWFnZSBjbGFzcz1cImljb25faW1nXCIgc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9pY29uL292ZXIucG5nXCI+PC9pbWFnZT5cclxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiaWNvbl90ZXh0XCI+5oyC5patPC90ZXh0PlxyXG4gICAgICAgIDwvdmlldz5cclxuICAgICAgICA8IS0tIOmdmemfsyAtLT5cclxuICAgICAgICA8dmlldyBjbGFzcz1cImljb25cIiBAY2xpY2s9XCJlbmFibGVMb2NhbEF1ZGlvKGNoZWNrZWQpXCI+XHJcbiAgICAgICAgICA8aW1hZ2UgY2xhc3M9XCJpY29uX2ltZ1wiIDpzcmM9XCJjaGVja2VkID8gJy4uLy4uL3N0YXRpYy9pbWFnZXMvaWNvbi9hdV9pbi5wbmcnIDogJy4uLy4uL3N0YXRpYy9pbWFnZXMvaWNvbi9hdV9vbi5wbmcnXCI+PC9pbWFnZT5cclxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiaWNvbl90ZXh0XCI+6Z2Z6Z+zPC90ZXh0PlxyXG4gICAgICAgIDwvdmlldz5cclxuICAgICAgICA8dmlldyBjbGFzcz1cImljb25cIiBAY2xpY2s9XCJlbmFibGVMb2NhbFZpZGVvKHZpZGVvKVwiPlxyXG4gICAgICAgICAgPGltYWdlIGNsYXNzPVwiaWNvbl9pbWdcIiA6c3JjPVwidmlkZW8gPyAnLi4vLi4vc3RhdGljL2ltYWdlcy9pY29uL3ZpX29uLnBuZycgOiAnLi4vLi4vc3RhdGljL2ltYWdlcy9pY29uL3ZpX2luLnBuZydcIj48L2ltYWdlPlxyXG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJpY29uX3RleHRcIj7op4bpopE8L3RleHQ+XHJcbiAgICAgICAgPC92aWV3PlxyXG4gICAgICAgIDx2aWV3IGNsYXNzPVwiaWNvblwiIEBjbGljaz1cIiRyZWZzLnBhcnRpY2lwYW50UG9wdXAub3BlbignYm90dG9tJylcIj5cclxuICAgICAgICAgIDxpbWFnZSBjbGFzcz1cImljb25faW1nIGljb25fbGlzdF9pbWdcIiBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2ljb24vbGlzdC13aGl0ZS5wbmdcIj48L2ltYWdlPlxyXG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJpY29uX3RleHRcIj7nrqHnkIbmiJDlkZgoe3twYXJ0aWNpcGFudENvdW50fX0pPC90ZXh0PlxyXG4gICAgICAgIDwvdmlldz5cclxuICAgICAgPC92aWV3PlxyXG4gICAgPC92aWV3PlxuICAgIDwhLS0g5pmu6YCa5by556qXIC0tPlxyXG4gICAgPHVuaS1wb3B1cCByZWY9XCJwYXJ0aWNpcGFudFBvcHVwXCIgYmFja2dyb3VuZC1jb2xvcj1cIiNmZmZcIj5cclxuICAgICAgPHZpZXcgY2xhc3M9XCJwb3B1cC1jb250ZW50XCIgOnN0eWxlPVwie2hlaWdodDogKHdpbmRvd0hlaWdodCAtIGJhckhlaWdodC5hbGxIZWlnaHQpICsgJ3B4J31cIj5cclxuICAgICAgICA8dmlldyBjbGFzcz1cInBhcnRpY2lwYW50LXRpdGxlXCI+XHJcbiAgICAgICAgICA8dmlldyBjbGFzcz1cInRpdGxlXCI+XHJcbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwidGl0bGUtdHh0XCI+566h55CG5oiQ5ZGY77yIe3sgcGFydGljaXBhbnRDb3VudCB9feS6uu+8iTwvdGV4dD5cclxuICAgICAgICAgIDwvdmlldz5cclxuICAgICAgICAgIDx1bmktaWNvbnMgdHlwZT1cImNsb3NlZW1wdHlcIiBzaXplPVwiMjVcIiBAdGFwPVwiJHJlZnMucGFydGljaXBhbnRQb3B1cC5jbG9zZSgpXCI+PC91bmktaWNvbnM+XHJcbiAgICAgICAgPC92aWV3PlxyXG4gICAgICAgIDx1bmktbGlzdD5cclxuICAgICAgICAgIDx1bmktbGlzdC1jaGF0IHYtZm9yPVwibWVtIGluIFtsb2NhbFBlcnNvbiwgLi4ucGVlcmlkSW5mb11cIiA6a2V5PVwibWVtLmlkXCIgOmF2YXRhci1jaXJjbGU9XCJ0cnVlXCIgOnRpdGxlPVwibWVtLm5pY2tuYW1lXCIgIDphdmF0YXI9XCJtZW0uYXZhdGFyXCIgOm5vdGU9XCJtZW0uaWQgPT0gb3JpZ2luYXRvclVzZXJJbmZvSWQgPyBg77yI5Li75oyB5Lq677yM5oiR77yJYCA6ICflj4LkvJrkuronXCIgdGltZT1cIjIwMjAtMDItMDIgMjA6MjBcIj5cclxuICAgICAgICAgICAgPHZpZXcgY2xhc3M9XCJjaGF0LWN1c3RvbS1yaWdodFwiIGNvbG9yPVwiI2NjY1wiPlxyXG4gICAgICAgICAgICAgIDx1bmktaWNvbnMgdi1pZj1cIm1lbS52aWRlb1N0YXR1c1wiIHR5cGU9XCJ2aWRlb2NhbS1maWxsZWRcIiBzaXplPVwiMzNcIj48L3VuaS1pY29ucz5cclxuICAgICAgICAgICAgICA8aW1hZ2Ugdi1lbHNlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvaWNvbi9tdXRlLWNhbWVyYS1ncmF5LnBuZ1wiIGNsYXNzPVwiaXNfdmlkZW8taW1nXCI+PC9pbWFnZT5cclxuICAgICAgICAgICAgPC92aWV3PlxyXG4gICAgICAgICAgPC91bmktbGlzdC1jaGF0PlxyXG4gICAgICAgIDwvdW5pLWxpc3Q+XHJcbiAgICAgIDwvdmlldz5cclxuICAgIDwvdW5pLXBvcHVwPlxyXG4gIDwvdmlldz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IHsgbWFwU3RhdGUsIG1hcEdldHRlcnMgfSBmcm9tICd2dWV4J1xyXG4gIGltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vdXRpbHMvdW50aWwuanNcIjtcclxuICBpbXBvcnQgeyBqb2luQ29uZmVyZW5jZSwgZ2V0VXNlckluZm9CeUlkIH0gZnJvbSAnLi4vLi4vYXBpL2luZGV4LmpzJ1xyXG4gIGltcG9ydCB7IHNob3dUb2FzdCB9IGZyb20gJy4uLy4uL3V0aWxzL3VuaUFzeW5jLmpzJ1xuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC8vIGFwcGlk5qCH6K+GXG4gICAgICAgIGFwcGlkOiAnJyxcbiAgICAgICAgLy8g5oi/6Ze05Y+3XG4gICAgICAgIGNoYW5uZWw6ICcnLFxuICAgICAgICAvLyDmnKzlnLDnlKjmiLdcbiAgICAgICAgbG9jYWx1aWQ6ICcnLFxuICAgICAgICAvLyDov5znq6/nlKjmiLdcbiAgICAgICAgcGVlcmlkSW5mbzogW10sXHJcbiAgICAgICAgLy8g6L+c56uv6KeG6aKR5a655ZmoXHJcbiAgICAgICAgcmVtb3RlTGl0czogW10sXHJcbiAgICAgICAgd2luZG93V2lkdGg6IDQwMCxcclxuICAgICAgICB3aW5kb3dIZWlnaHQ6IDgwMCxcclxuICAgICAgICBub1Nwb25zb3I6ICcnLCAvLyDkvJrorq7lj5HotbfogIXmmK/lkKblnKjnur9cclxuICAgICAgICBjaGVja2VkOiB0cnVlLCAvLyDpn7PpopHlvIDlhbNcclxuICAgICAgICAvLyDov5znq6/op4bpopHlrrnlmajmoLflvI9cclxuICAgICAgICBwZWVyaWRJbmZvU3R5bGU6IFwidmlkZW9fbG9jYWxcIixcclxuICAgICAgICAvLyDmiL/kuLtcclxuICAgICAgICBvcmlnaW5hdG9yVXNlckluZm9JZDogJycsXHJcbiAgICAgICAgdmlkZW86IHRydWUsIC8vIOinhumikeW8gOWFs1xyXG4gICAgICAgIC8vIOacrOS6uuS/oeaBr+WvueixoVxyXG4gICAgICAgIGxvY2FsUGVyc29uOiB7fSxcclxuICAgICAgICAvLyDkvJrorq7lj7dcclxuICAgICAgICBtZWV0aW5nTnVtYmVyOiAnJyxcclxuICAgICAgICBjYW1lcmE6IHRydWUsIC8vIOm7mOiupOWJjee9rixcclxuICAgICAgICBTcGVha2VycGhvbmU6IGZhbHNlLCAvLyDmmK/lkKblhY3mj5AgXHJcbiAgICAgICAgc3RhcnRUaW1lOiAnJywgLy8g5Lya6K6u5byA5aeL5pe26Ze0XHJcbiAgICAgICAgZW5kVGltZTogJycsIC8vIOS8muiurue7k+adn+aXtumXtCxcclxuICAgICAgICBkb3duQ291bnQ6ICcnLCAvLyDkvJrorq7lgJLorqHml7ZcclxuICAgICAgICBpc01lZXRpbmdFbmQ6ICcnLCAvLyDkvJrorq7mmK/lkKbnu5PmnZ9cclxuICAgICAgICB0aW1lcjogbnVsbCwgLy8g5YCS6K6h5pe25a6a5pe25Zmo5ZSv5LiA5qCH6K+GXHJcbiAgICAgICAgdGltaW5nVGltZXI6IG51bGwsIC8vIOiuoeaXtuWZqOWUr+S4gOagh+ivhlxyXG4gICAgICAgIHRpbWluZzogMCwgLy8g5Lya6K6u5pe26Ze05bey5Yiw5L2G5oi/5Li76L+Y5pyq56a75byA5oi/6Ze057un57ut6K6h5pe2XHJcbiAgICAgICAgLy8g6L+b5YWl55qE6aG16Z2i5piv562+5Yiw6aG1XHJcbiAgICAgICAgcGFnZTogJydcbiAgICAgIH1cbiAgICB9LFxyXG4gICAgb25TaG93KCkge1xyXG4gICAgICB0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwoIGFzeW5jICgpID0+IHtcclxuICAgICAgICAvLyDlgJLorqHml7ZcclxuICAgICAgICBjb25zdCB7IGRvd25Db3VudCwgaXNFbmQgfSA9IGdldEFwcCgpLmRvd25Db3VudCh0aGlzLmVuZFRpbWUpXHJcbiAgICAgICAgdGhpcy5kb3duQ291bnQgPSBkb3duQ291bnRcclxuICAgICAgICB0aGlzLmlzTWVldGluZ0VuZCA9IGlzRW5kXHJcbiAgICAgICAgaWYgKGlzRW5kKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5nZXRPcmlnaW5hdG9yVXNlck9ubGluZSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGltaW5nVGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy50aW1pbmcrK1xyXG4gICAgICAgICAgICAgIC8vIOato+iuoeaXtlxyXG4gICAgICAgICAgICAgIGNvbnN0IHsgZG93bkNvdW50IH0gPSBnZXRBcHAoKS5kb3duQ291bnQodGhpcy50aW1pbmcsIHRydWUpXHJcbiAgICAgICAgICAgICAgdGhpcy5kb3duQ291bnQgPSBkb3duQ291bnRcclxuICAgICAgICAgICAgICBpZiAoIXRoaXMuZ2V0T3JpZ2luYXRvclVzZXJPbmxpbmUoKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXN0cm95UnRjKClcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1pbmdUaW1lcilcclxuICAgICAgICAgICAgICAgIHRoaXMudGltaW5nVGltZXIgPSBudWxsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCAxMDAwKVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYXdhaXQgc2hvd1RvYXN0KHt0aXRsZTogJ+S8muiuruaXtumXtOW3suWIsCEnLCBpY29uOiAnbm9uZScsIG1hc2s6IHRydWV9KVxyXG4gICAgICAgICAgICAvLyDmiL/kuLvnprvlvIDmiL/pl7TkuoYs6ZSA5q+B5a6e5L6LLOmAgOWHuuaIv+mXtFxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHRoaXMuZGVzdHJveVJ0YywgMTUwMClcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC8vIOa4hemZpOWumuaXtuWZqFxyXG4gICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKVxyXG4gICAgICAgICAgdGhpcy50aW1lciA9IG51bGxcclxuICAgICAgICB9XHJcbiAgICAgIH0sIDEwMDApXHJcbiAgICB9LFxyXG4gICAgb25IaWRlKCkge1xyXG4gICAgICBpZiAodGhpcy50aW1lciAhPT0gbnVsbCkgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKVxyXG4gICAgICBpZiAodGhpcy50aW1pbmdUaW1lciAhPT0gbnVsbCkgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWluZ1RpbWVyKVxyXG4gICAgfSxcclxuICAgIG9uTG9hZCh7IG1lZXRpbmdOdW1iZXIsIHN0YXJ0VGltZSwgZW5kVGltZSwgcGFnZSA9ICcnIH0pIHtcclxuICAgICAgdGhpcy5tZWV0aW5nTnVtYmVyID0gbWVldGluZ051bWJlclxyXG4gICAgICBpZiAocGFnZSkgdGhpcy5wYWdlID0gcGFnZVxyXG4gICAgICAvLyDliJ3lp4vljJbkv6Hmga/liJvlu7rop4bpopFSVEPmiYDpnIBcclxuICAgICAgdGhpcy5qb2luQ29uZmVyZW5jZUZ1bihtZWV0aW5nTnVtYmVyKVxyXG4gICAgICB0aGlzLnN0YXJ0VGltZSA9IHN0YXJ0VGltZVxyXG4gICAgICB0aGlzLmVuZFRpbWUgPSBlbmRUaW1lXHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgICAgLi4ubWFwU3RhdGUoWydiYXJIZWlnaHQnLCAnUnRjTW9kdWxlJ10pLFxyXG4gICAgICAuLi5tYXBHZXR0ZXJzKFsndG9wQmFySGVpZ2h0J10pLFxyXG4gICAgICAvLyDlj4LkvJrmgLvkurrmlbBcclxuICAgICAgcGFydGljaXBhbnRDb3VudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wZWVyaWRJbmZvLmxlbmd0aCArIDFcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHdhdGNoOiB7XHJcbiAgICAgIHBlZXJpZEluZm86IHtcclxuICAgICAgICAvLyDnm5HlkKzov5znq6/kurrmlbBb5Y+Y5o2i5qC35byPXVxyXG4gICAgICAgIGRlZXA6IHRydWUsXHJcbiAgICAgICAgaW1tZWRpYXRlOiB0cnVlLFxyXG4gICAgICAgIGhhbmRsZXIobmV3TGlzdCwgb2xkTGlzdCkge1xyXG4gICAgICAgICAgaWYgKG5ld0xpc3QubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGVlcmlkSW5mb1N0eWxlID0gJ3ZpZGVvX2xvY2FsJ1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wZWVyaWRJbmZvU3R5bGUgPSAndmlkZW9fbG9jYWxfMSdcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhc3luYyBjcmVhdGVkKCkge1xyXG4gICAgICBjb25zdCBvSW5mbyA9IGF3YWl0IFV0aWxzLmdldFdpZHRoSGVpZ2h0KCk7XHJcbiAgICAgIHRoaXMud2luZG93V2lkdGggPSBvSW5mby53aW5kb3dXaWR0aDtcclxuICAgICAgdGhpcy53aW5kb3dIZWlnaHQgPSBvSW5mby53aW5kb3dIZWlnaHQ7XHJcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgLy8g5Yik5pat5oi/5Li75piv5ZCm5Zyo57q/5oiW5b2T5YmN55So5oi35piv5ZCm5Li65oi/5Li7XHJcbiAgICAgIGdldE9yaWdpbmF0b3JVc2VyT25saW5lICgpIHtcclxuICAgICAgICBjb25zdCB7IHBlZXJpZEluZm8sIG9yaWdpbmF0b3JVc2VySW5mb0lkLCBsb2NhbHVpZCB9ID0gdGhpc1xyXG4gICAgICAgIHJldHVybiBwZWVyaWRJbmZvLnNvbWUoaXRlbSA9PiBpdGVtLmlkID09IG9yaWdpbmF0b3JVc2VySW5mb0lkKSB8fCBsb2NhbHVpZCA9PSBvcmlnaW5hdG9yVXNlckluZm9JZFxyXG4gICAgICB9LFxyXG4gICAgICAvLyDojrflj5bkv6Hmga9cclxuICAgICAgYXN5bmMgam9pbkNvbmZlcmVuY2VGdW4obWVldGluZ051bWJlcikge1xyXG4gICAgICAgIGNvbnN0IHtvYmo6IHJlc30gPSBhd2FpdCBqb2luQ29uZmVyZW5jZSh7bWVldGluZ051bWJlcn0pXHJcbiAgICAgICAgaWYgKHJlcy5vcmlnaW5hdG9yVXNlckluZm9JZCAhPSByZXMucGFydGljaXBhbnRVc2VySWQgJiYgdGhpcy5wZWVyaWRJbmZvLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICB0aGlzLm5vU3BvbnNvciA9ICfkvJrorq7lj5HotbfogIXkuI3lnKjnur8s6K+3562J5YCZLi4nXHJcbiAgICAgICAgICBhd2FpdCBzaG93VG9hc3Qoe3RpdGxlOiB0aGlzLm5vU3BvbnNvciwgaWNvbjogJ25vbmUnfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hcHBpZCA9IHJlcy5hcHBJZFxyXG4gICAgICAgIHRoaXMubG9jYWx1aWQgPSByZXMucGFydGljaXBhbnRVc2VySWRcclxuICAgICAgICB0aGlzLmNoYW5uZWwgPSBtZWV0aW5nTnVtYmVyXHJcbiAgICAgICAgdGhpcy5vcmlnaW5hdG9yVXNlckluZm9JZCA9IHJlcy5vcmlnaW5hdG9yVXNlckluZm9JZFxyXG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlcyksICdAIyQjQEAjJCNAJylcclxuICAgICAgICB0aGlzLmNhbGxiYWNrRm4oKVxyXG4gICAgICAgIHRoaXMuaW5pdCgpXHJcbiAgICAgICAgdGhpcy5lbmFibGVWaWRlbygpXHJcbiAgICAgICAgdGhpcy5qb2luKClcclxuICAgICAgICB0aGlzLmdldFVzZXJJbmZvQnlJZEZ1bihyZXMucGFydGljaXBhbnRVc2VySWQsIHRydWUpXHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIOagueaNrmlk6I635Y+W55So5oi35L+h5oGvXHJcbiAgICAgIGFzeW5jIGdldFVzZXJJbmZvQnlJZEZ1bihpZCwgbG9jYWwpIHtcclxuICAgICAgICBjb25zdCB7IG9iajogcmVzIH0gPSBhd2FpdCBnZXRVc2VySW5mb0J5SWQoe2lkfSlcclxuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXMpKVxyXG4gICAgICAgIGlmIChsb2NhbCkge1xyXG4gICAgICAgICAgLy8g5pys5ZywW+acrOS6ul0gLy8g6Ieq5Yqg5LiA5Liq5piv5ZCm5byA5ZCv6KeG6aKRXHJcbiAgICAgICAgICB0aGlzLmxvY2FsUGVyc29uID0gey4uLnJlcywgdmlkZW9TdGF0dXM6IHRydWV9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMucGVlcmlkSW5mby5wdXNoKHtcclxuICAgICAgICAgIFx0dWlkOiBpZCxcclxuICAgICAgICAgIFx0dmlkZW9TdGF0dXM6IHRydWUsXHJcbiAgICAgICAgICAgIC4uLnJlc1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLnBlZXJpZEluZm8pKVxyXG4gICAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhMSA9IHtcclxuICAgICAgICAgIFx0XHRyZW1vdGU6IHRoaXMuJHJlZnNbJ3JlbW90ZScgKyBpZF0sXHJcbiAgICAgICAgICBcdFx0cGVlcmlkOiBpZCxcclxuICAgICAgICAgIFx0fVxyXG4gICAgICAgICAgICAvLyDmnKzlnLDop4bpopHlrrnlmahcclxuICAgICAgICAgICAgaWYgKGRhdGExLmxvY2F0aW9uKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGRhdGExLmxvY2F0aW9uXHJcbiAgICAgICAgICAgIFx0Ly8g6L+c56uv6KeG6aKR5a655ZmoXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YTEucGVlcmlkICYmIGRhdGExLnJlbW90ZSkge1xyXG4gICAgICAgICAgICBcdGNvbnN0IG9hID0gdGhpcy5yZW1vdGVMaXRzLmZpbHRlcihpdGVtID0+IHtcclxuICAgICAgICAgICAgXHRcdHJldHVybiBpdGVtLnBlZXJpZCA9PSBkYXRhMS5wZWVyaWRcclxuICAgICAgICAgICAgXHR9KTtcclxuICAgICAgICAgICAgXHRpZiAob2EubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgXHRcdHRoaXMucmVtb3RlTGl0cy5wdXNoKGRhdGExKTtcclxuICAgICAgICAgICAgXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnJlbW90ZUxpdHMubWFwKGFzeW5jIGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICBcdGlmIChpdGVtLnBlZXJpZCA9PSBkYXRhMS5wZWVyaWQpIHtcclxuICAgICAgICAgICAgICAgICAgXHRcdGNvbnNvbGUubG9nKFwi6aKR6YGTXCIsIHRoaXMuY2hhbm5lbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtLnBlZXJpZCwgdGhpcy5yZW1vdGVMaXRzICwgdGhpcy5wZWVyaWRJbmZvKVxyXG4gICAgICAgICAgICAgICAgICBcdFx0YXdhaXQgaXRlbS5yZW1vdGVbMF0uc2V0dXBSZW1vdGVWaWRlbyh7XHJcbiAgICAgICAgICAgICAgICAgIFx0XHRcdFwidWlkXCI6IGl0ZW0ucGVlcmlkLFxyXG4gICAgICAgICAgICAgICAgICBcdFx0XHRcImNoYW5uZWxJZFwiOiB0aGlzLmNoYW5uZWwsXHJcbiAgICAgICAgICAgICAgICAgIFx0XHRcdFwicmVuZGVyTW9kZVwiOiAxLFxyXG4gICAgICAgICAgICAgICAgICBcdFx0XHRcIm1pcnJvck1vZGVcIjogMFxyXG4gICAgICAgICAgICAgICAgICBcdFx0fSwgKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBcdFx0XHRjb25zb2xlLmxvZygn5riy5p+T6L+c56uv6KeG6aKRJywgcmVzKTtcclxuICAgICAgICAgICAgICAgICAgXHRcdH0pO1xyXG4gICAgICAgICAgICAgICAgICBcdFx0Ly8g5pys5Zyw6aKE6KeIXHJcbiAgICAgICAgICAgICAgICAgIFx0XHRhd2FpdCBpdGVtLnJlbW90ZVswXS5zdGFydFByZXZpZXcoKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBcdFx0XHRjb25zb2xlLmxvZygn6L+c56uv5pys5Zyw6aKE6KeIJywgcmVzKTtcclxuICAgICAgICAgICAgICAgICAgXHRcdH0pO1xyXG4gICAgICAgICAgICAgICAgICBcdH1cclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgXHRcdH0sIDUwMCk7XHJcbiAgICAgICAgICAgIFx0fVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcbiAgICAgIGNhbGxiYWNrRm4oKSB7IC8vIDFcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXNcbiAgICAgICAgdGhpcy5SdGNNb2R1bGUuc2V0Q2FsbEJhY2soKHJlcykgPT4ge1xuICAgICAgICAgIHN3aXRjaCAocmVzLmVuZ2luZUV2ZW50KSB7XG4gICAgICAgICAgICBjYXNlIFwib25XYXJuaW5nXCI6IC8v6K2m5ZGK5Zue6LCDXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdvbldhcm5pbmcnKVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJvbkVycm9yXCI6IC8v6ZSZ6K+v5Zue6LCDXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdvbkVycm9yJylcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwib25Kb2luQ2hhbm5lbFN1Y2Nlc3NcIjogLy/nlKjmiLfliqDlhaXmiJDlip9cbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ29uSm9pbkNoYW5uZWxTdWNjZXNzJylcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXMpLCAnQCRAI0AkJCNAQCNvbkpvaW5DaGFubmVsU3VjY2VzcycpXG4gICAgICAgICAgICAgIHRoYXQubG9jYWxWaWRlbygpXG4gICAgICAgICAgICAgIGJyZWFrOyBcbiAgICAgICAgICAgIGNhc2UgXCJvbkxlYXZlQ2hhbm5lbFwiOiAvL+emu+W8gOmikemBk+Wbnuiwg1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnb25MZWF2ZUNoYW5uZWwnKVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJvblVzZXJKb2luZWRcIjogLy/ov5znq6/nlKjmiLfliqDlhaXlvZPliY3popHpgZPlm57osIPjgIJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ29uVXNlckpvaW5lZCcpXG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIm9uVXNlck9mZmxpbmVcIjogLy/ov5znq6/nlKjmiLfnprvlvIDlvZPliY3popHpgZPlm57osIPjgIJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ29uVXNlck9mZmxpbmUnKVxyXG4gICAgICAgICAgICAgIHRoaXMudXNlck9mZkxpbmUocmVzKVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJvbkZpcnN0TG9jYWxBdWRpb0ZyYW1lXCI6IC8v5bey5Y+R6YCB5pys5Zyw6Z+z6aKR6aaW5bin55qE5Zue6LCD44CC77yI6aG16Z2i5LiK5re75Yqg6Z+z6aKR77yJXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdvbkZpcnN0TG9jYWxBdWRpb0ZyYW1lJylcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwib25GaXJzdExvY2FsVmlkZW9GcmFtZVwiOiAvL+W3suaYvuekuuacrOWcsOinhumikemmluW4p+eahOWbnuiwg+OAgu+8iOmhtemdoua3u+WKoOacrOWcsOinhumike+8iVxuICAgICAgICAgICAgICAvLyB0aGlzLnByb21wdEZuKFwiZXJyb3JcIiwgXCLlt7LmmL7npLrmnKzlnLDop4bpopHpppbluKfnmoTlm57osINcIik7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdvbkZpcnN0TG9jYWxWaWRlb0ZyYW1lJylcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJvblJlbW90ZVZpZGVvU3RhdGVDaGFuZ2VkXCI6IC8vIOi/nOerr+eUqOaIt+inhumikeeKtuaAgeWPkeeUn+W3suWPmOWMluWbnuiwgyjlvZPpopHpgZPlhoXnmoTnlKjmiLfotoXov4cgMTcg5Liq5pe277yM6K+l5Zue6LCD5Y+v6IO95LiN5YeG56GuKe+8iVxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9uRmlyc3RSZW1vdGVWaWRlb0RlY29kZWTov5znq6/nlKjmiLfop4bpopHnirbmgIHlj5HnlJ/lt7Llj5jljJblm57osINcIiwgcmVzKVxyXG4gICAgICAgICAgICAgIHRoYXQudmlkZW9TdGF0ZUNoYW5nZWQocmVzKVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJvbkZpcnN0UmVtb3RlVmlkZW9EZWNvZGVkXCI6IC8v5bey5a6M5oiQ6L+c56uv6KeG6aKR6aaW5bin6Kej56CB5Zue6LCD44CC77yI6aG16Z2i5re75Yqg6L+c56uv6KeG6aKR77yJXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdvbkZpcnN0UmVtb3RlVmlkZW9EZWNvZGVkJywgcmVzKVxyXG4gICAgICAgICAgICAgIC8vIOi/nOerr+inhumikea4suafk1xyXG4gICAgICAgICAgICAgIHRoYXQucmVtb3RlbmFibGVWaWRlKHJlcy51aWQpXG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0sXHJcbiAgICAgIGRlc3Ryb3lSdGMoKSB7XHJcbiAgICAgICAgdGhpcy5SdGNNb2R1bGUuZGVzdHJveVJ0YygocmVzKSA9PiB7XHJcbiAgICAgICAgXHRjb25zb2xlLmxvZyhcIumUgOavgeWunuS+i1wiLCB0aGlzLnBhZ2UpO1xyXG4gICAgICAgICAgLy8g5aaC5p6c5piv5LuO562+5Yiw6aG15oiW5Yib5bu65Lya6K6u6aG16L+b5p2l55qE5bCx55u05o6l6YCA5Zue6aaW6aG1XHJcbiAgICAgICAgICBpZiAodGhpcy5wYWdlID09ICcxJykge1xyXG4gICAgICAgICAgICB1bmkuc3dpdGNoVGFiKHtcclxuICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvaW5kZXgvaW5kZXgnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyDplIDmr4Hlrp7kvovor7TmmI7or6XnlKjmiLfpgIDlh7rkuobmnKzmrKHkvJrorq5cclxuICAgICAgICAgICAgdW5pLm5hdmlnYXRlQmFjayh7XHJcbiAgICAgICAgICAgICAgZGVsdGE6IDJcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgICAgLy8g5pGE5YOP5aS077yI5YmN5ZCO77yJXHJcbiAgICAgIHN3aXRjaENhbWVyYSgpIHtcclxuICAgICAgICB0aGlzLmNhbWVyYSA9ICF0aGlzLmNhbWVyYTtcclxuICAgICAgXHR0aGlzLlJ0Y01vZHVsZS5zd2l0Y2hDYW1lcmEoKHJlcykgPT4ge1xyXG4gICAgICBcdFx0Y29uc29sZS5sb2coJ1JUQyDmkYTlg4/lpLTliY3lkI4gc3dpdGNoQ2FtZXJhIOaWueazleiwg+eUqCcsIHJlcy5jb2RlID09PSAwID8gJ+aIkOWKnycgOiAn5aSx6LSl77yaJyArIHJlcyk7XHJcbiAgICAgIFx0fSlcclxuICAgICAgfSxcclxuICAgICAgLy8g6Z+z6aKR5piv5ZCm5YWN5o+QXHJcbiAgICAgIHNldEVuYWJsZVNwZWFrZXJwaG9uZShmYXNlKSB7XHJcbiAgICAgICAgY29uc3QgU3BlYWtlcnBob25lID0gIWZhc2VcclxuICAgICAgICB0aGlzLlNwZWFrZXJwaG9uZSA9IFNwZWFrZXJwaG9uZVxyXG4gICAgICBcdC8vIOm7mOiupOaJrOWjsOWZqOaSreaUvlxyXG4gICAgICBcdHRoaXMuUnRjTW9kdWxlLnNldEVuYWJsZVNwZWFrZXJwaG9uZSh7XHJcbiAgICAgIFx0XHRcImVuYWJsZWRcIjogU3BlYWtlcnBob25lXHJcbiAgICAgIFx0fSwgKHJlcykgPT4ge1xyXG4gICAgICBcdFx0Y29uc29sZS5sb2coJ1JUQyDov5znq6/liqDlhaXmiL/pl7TlkI7orr7nva4nICsgKFNwZWFrZXJwaG9uZSA/ICflvIDlkK8nIDogJ+WFs+mXrScpICsgJ+aJrOWjsOWZqOaSreaUvicsIHJlcy5jb2RlID09PSAwID8gJ+aIkOWKnycgOlxyXG4gICAgICBcdFx0XHQn5aSx6LSl77yaJyArXHJcbiAgICAgIFx0XHRcdHJlcyk7XHJcbiAgICAgIFx0fSk7XHJcbiAgICAgIH0sXG4gICAgICAvLyDliJ3lp4vljJZcbiAgICAgIGFzeW5jIGluaXQoKSB7IC8vIDJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5SdGNNb2R1bGUuY3JlYXRlKVxuICAgICAgICBhd2FpdCB0aGlzLlJ0Y01vZHVsZS5jcmVhdGUoe1xuICAgICAgICAgIC8vYW55UlRDIOS4uiBBcHAg5byA5Y+R6ICF562+5Y+R55qEIEFwcCBJROOAglxuICAgICAgICAgIFwiYXBwSWRcIjogdGhpcy5hcHBpZFxuICAgICAgICB9LCAocmVzKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzKSlcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgZW5hYmxlVmlkZW8oKSB7IC8vIDNcbiAgICAgICAgdGhpcy5SdGNNb2R1bGUuZW5hYmxlVmlkZW8ocmVzID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygn5ZCv55So6KeG6aKROicgKyByZXMuY29kZSlcbiAgICAgICAgfSlcbiAgICAgIH0sXHJcbiAgICAgIC8vIOeUqOaIt+emu+W8gOW9k+WJjeaIv+mXtOaXtuiwg+eUqFxyXG4gICAgICB1c2VyT2ZmTGluZShkYXRhKSB7XHJcbiAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgIC8vIOWIoOmZpOW9k+WJjeWMuemFjeeahOi/nOerr+eUqOaIt1xyXG4gICAgICAgIFx0dGhpcy5wZWVyaWRJbmZvLnNwbGljZSh0aGlzLnBlZXJpZEluZm8uZmluZEluZGV4KGl0ZW0gPT4gaXRlbS51aWQgPT09IGRhdGEudWlkKSwgMSk7XHJcbiAgICAgICAgXHQvLyDlpoLmnpzmjqjmtYHvvIzpnIDopoHph43mlrDmjqjmtYFcclxuICAgICAgICBcdC8vIGlmICh0aGlzLmxpdmVTdGF0ZSkge1xyXG4gICAgICAgIFx0Ly8gXHR0aGlzLmxpdmVUcmFuc2NvRm4oKTtcclxuICAgICAgICBcdC8vIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIOi9rOivremfs1xyXG4gICAgICB0b1NwZWVjaCgpIHtcclxuICAgICAgXHQvLyDlhbPpl63op4bpopHmqKHlnZdcclxuICAgICAgXHR0aGlzLlJ0Y01vZHVsZS5kaXNhYmxlVmlkZW8oKHJlcykgPT4ge1xyXG4gICAgICBcdFx0Y29uc29sZS5sb2coJ1JUQyDlhbPpl63op4bpopHmqKHlnZcgZGlzYWJsZVZpZGVvIOaWueazleiwg+eUqCcsIHJlcy5jb2RlID09PSAwID8gJ+aIkOWKnycgOiAn5aSx6LSl77yaJyArXHJcbiAgICAgIFx0XHRcdHJlcyk7XHJcbiAgICAgIFx0fSlcclxuICAgICAgfSxcclxuICAgICAgLy8g6Z+z6aKR5piv5ZCm5YWz6ZetXHJcbiAgICAgIGVuYWJsZUxvY2FsQXVkaW8oY2hlY2tlZCkge1xyXG4gICAgICAgIGNvbnN0IGNoZWNrZWRBdWRpbyA9ICFjaGVja2VkXHJcbiAgICAgICAgdGhpcy5jaGVja2VkID0gY2hlY2tlZEF1ZGlvXHJcbiAgICAgIFx0dGhpcy5SdGNNb2R1bGUuZW5hYmxlTG9jYWxBdWRpbyh7XHJcbiAgICAgIFx0XHRcImVuYWJsZWRcIjogY2hlY2tlZEF1ZGlvXHJcbiAgICAgIFx0fSwgKHJlcykgPT4ge1xyXG4gICAgICBcdFx0Y29uc29sZS5sb2coJ1JUQyDpn7PpopEnICsgKGNoZWNrZWRBdWRpbyA/ICflvIDlkK8nIDogJ+WFs+mXrScpLCAocmVzLmNvZGUgPT09IDAgPyAn5oiQ5YqfJyA6ICflpLHotKXvvJonKSArIHJlcyk7XHJcbiAgICAgIFx0fSlcclxuICAgICAgfSxcclxuICAgICAgYXN5bmMgcmVtb3RlbmFibGVWaWRlKGRhdGEpIHtcclxuICAgICAgICBjb25zdCB0aGF0ID0gdGhpc1xyXG4gICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgXHRjb25zdCBvYSA9IHRoYXQucGVlcmlkSW5mby5maWx0ZXIoKGl0ZW0pID0+IHtcclxuICAgICAgICBcdFx0cmV0dXJuIGl0ZW0udWlkID09IGRhdGFcclxuICAgICAgICBcdH0pXHJcbiAgICAgICAgXHRpZiAob2EubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMub3JpZ2luYXRvclVzZXJJbmZvSWQgPT0gZGF0YSkge1xyXG4gICAgICAgICAgICAgIHRoaXMubm9TcG9uc29yID0gJ+S8muiuruWPkei1t+iAhei/m+WFpeaIv+mXtCdcclxuICAgICAgICAgICAgICBhd2FpdCBzaG93VG9hc3Qoe3RpdGxlOiB0aGlzLm5vU3BvbnNvciwgaWNvbjogJ25vbmUnfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyDlj5Hor7fmsYLojrflj5bor6Xov5znq6/nlKjmiLfkv6Hmga9cclxuICAgICAgICAgICAgdGhpcy5nZXRVc2VySW5mb0J5SWRGdW4oZGF0YSwgZmFsc2UpXHJcbiAgICAgICAgXHR9XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxuICAgICAgam9pbigpIHsgLy8gNFxuICAgICAgICAvLyB0aGlzLmxvY2FsdWlkID0gdGhpcy5yYW5kb21Gbig2KVxuICAgICAgICB0aGlzLlJ0Y01vZHVsZS5qb2luQ2hhbm5lbCh7XG4gICAgICAgICAgXCJ0b2tlblwiOiBcIlwiLFxuICAgICAgICAgIFwiY2hhbm5lbElkXCI6IHRoaXMuY2hhbm5lbCxcbiAgICAgICAgICBcInVpZFwiOiB0aGlzLmxvY2FsdWlkXG4gICAgICAgIH0sIHJlcyA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ+WKoOWFpeaIv+mXtCcsICArIHJlcy5jb2RlID09IDAgPyAn5oiQ5YqfJyA6ICflpLHotKUnICsgcmVzKVxuICAgICAgICB9KVxuICAgICAgfSxcclxuICAgICAgdmlkZW9TdGF0ZUNoYW5nZWQoZGF0YSkge1xyXG4gICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAvLyDmlbDnu4RtYXDmlrnms5XlvZPmlbDnu4TlgLzkuLrln7rmnKznsbvlnovml7bkuI3mlLnlj5jlhbbljp/mlbDnu4Qs5b2T5YC85Li65aSN5p2C57G75Z6LKG9iamVjdCnml7bkvJrmlLnlj5jljp/mlbDnu4RcclxuICAgICAgICBcdHRoaXMucGVlcmlkSW5mby5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgXHRcdGlmIChpdGVtLnVpZCA9PSBkYXRhLnVpZCkge1xyXG4gICAgICAgIFx0XHRcdC8vIOi/nOerr+eUqOaIt+WFs+mXreinhumikVtyZWFzb249NeWSjOeKtuaAgXN0YXRlID09IDAs6K+05piO55So5oi35YWz6Zet5LqG6KeG6aKRXVxyXG4gICAgICAgIFx0XHRcdGlmIChkYXRhLnJlYXNvbiA9PSA1ICYmIGRhdGEuc3RhdGUgPT0gMCkge1xyXG4gICAgICAgIFx0XHRcdFx0aXRlbS52aWRlb1N0YXR1cyA9IGZhbHNlO1xyXG4gICAgICAgIFx0XHRcdFx0Ly8g6L+c56uv55So5oi35byA5ZCv6KeG6aKRW3JlYXNvbj0w5ZKM54q25oCBc3RhdGUgPT0gMizor7TmmI7nlKjmiLflvIDlkK/kuobop4bpopFdXHJcbiAgICAgICAgXHRcdFx0fSBlbHNlIGlmIChkYXRhLnN0YXRlID09IDIgJiYgZGF0YS5yZWFzb24gPT0gMCkge1xyXG4gICAgICAgIFx0XHRcdFx0aXRlbS52aWRlb1N0YXR1cyA9IHRydWU7XHJcbiAgICAgICAgXHRcdFx0fVxyXG4gICAgICAgIFx0XHR9XHJcbiAgICAgICAgXHR9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcbiAgICAgIGFzeW5jIGxvY2FsVmlkZW8oKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuJHJlZnMubG9jYXRpb24uc2V0dXBMb2NhbFZpZGVvKHtcbiAgICAgICAgICBcInJlbmRlck1vZGVcIjogMSxcbiAgICAgICAgICBcImNoYW5uZWxJZFwiOiB0aGlzLmNoYW5uZWwsXG4gICAgICAgICAgXCJ1aWRcIjogdGhpcy5sb2NhbHVpZCxcbiAgICAgICAgICBcIm1pcnJvck1vZGVcIjogMFxuICAgICAgICB9LCByZXMgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCfop4bpopHmuLLmn5MnLCByZXMpXG4gICAgICAgICAgLy8g5pys5Zyw6aKE6KeIXG4gICAgICAgICAgdGhpcy5SdGNNb2R1bGUuc3RhcnRQcmV2aWV3KChyZXMpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmnKzlnLDpooTop4gnLCByZXMpXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICB9LFxyXG4gICAgICAvLyDmnKzlnLDop4bpopHmmK/lkKbph4fpm4ZcclxuICAgICAgZW5hYmxlTG9jYWxWaWRlbyhjaGVja2VkKSB7XHJcbiAgICAgICAgY29uc3QgdmlkZW9DaGVja2VkID0gIWNoZWNrZWRcclxuICAgICAgICB0aGlzLnZpZGVvID0gdmlkZW9DaGVja2VkXHJcbiAgICAgICAgdGhpcy4kc2V0KHRoaXMubG9jYWxQZXJzb24sICd2aWRlb1N0YXR1cycsIHZpZGVvQ2hlY2tlZClcclxuICAgICAgXHR0aGlzLlJ0Y01vZHVsZS5lbmFibGVMb2NhbFZpZGVvKHtcclxuICAgICAgXHRcdFwiZW5hYmxlZFwiOiB2aWRlb0NoZWNrZWRcclxuICAgICAgXHR9LCAocmVzKSA9PiB7XHJcbiAgICAgIFx0XHRjb25zb2xlLmxvZygnUlRDIOinhumikScgKyAodmlkZW9DaGVja2VkID8gJ+W8gOWQrycgOiAn5YWz6ZetJyksIChyZXMuY29kZSA9PT0gMCA/ICfmiJDlip8nIDogJ+Wksei0pe+8micpICsgcmVzKTtcclxuICAgICAgXHR9KVxyXG4gICAgICB9LFxyXG4gICAgICAvLyDpmo/mnLrnlJ/miJBcclxuICAgICAgcmFuZG9tRm4obGVuLCBjaGFyU2V0KSB7XHJcbiAgICAgICAgY2hhclNldCA9IGNoYXJTZXQgfHwgJ2FiY2RlZmdoaWprSW1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSdcclxuICAgICAgICBsZXQgcmFuZG9tU3RyaW5nID0gJydcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICBsZXQgcmFuZG9tUG96ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhclNldC5sZW5ndGgpXHJcbiAgICAgICAgICByYW5kb21TdHJpbmcgPSBjaGFyU2V0LnN1YnN0cmluZyhyYW5kb21Qb3osIHJhbmRvbVBveiArIDEpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByYW5kb21TdHJpbmdcclxuICAgICAgfVxuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuICAudHh0IHtcclxuICAgIGZvbnQtc2l6ZTogMjhycHg7XHJcbiAgICAvKiDmmL7npLrnnIHnlaXlj7cgKi9cclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgLyog6LaF5Ye66YOo5YiG55yB55Wl5Y+3ICovXHJcbiAgICBsaW5lczogMTsgLy8gTlZVReS4i+imgei/meS4quWxnuaApyzmnaXorqnmloflrZfotoXlh7rpmpDol4/lj5jnnIHnlaXlj7dcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2lkdGg6IDMwMHJweDtcclxuICB9XG4gIC52aWRlbyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAubG9jYXRpb24tbm9uZSB7XHJcbiAgICAgIGZsZXg6IDE7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgLnVzZXItYXZhdGFyIHtcclxuICAgICAgICB3aWR0aDogODBycHg7XHJcbiAgICAgICAgaGVpZ2h0OiA4MHJweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIH1cclxuICAgICAgLnVzZXItbmFtZSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBycHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyOHJweDtcclxuICAgICAgfVxyXG4gICAgfVxuICAgIC5jdXItdXNlcm5hbWUge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHdpZHRoOiAzMDBycHg7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICBwYWRkaW5nOiA4cnB4IDIwcnB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuZm9udC1jb2xvciB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgLnRvcC1iYXIge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIHBhZGRpbmc6IDAgMzBycHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC5iYXItdGl0bGUge1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmVuZC1idG4ge1xyXG4gICAgICA+IC5mb250LWNvbG9yIHtcclxuICAgICAgICBmb250LXNpemU6IDI2cnB4O1xyXG4gICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLyogMeS4quinhumikSAqL1xyXG4gIC52aWRlb19sb2NhbCB7XHJcbiAgXHRmbGV4OiAxO1xyXG4gIH1cclxuICBcclxuICAuY2FudmFzVmlldyB7XHJcbiAgXHRmbGV4LXdyYXA6IHdyYXA7XHJcbiAgXHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIH1cclxuICAvKiA05Liq6KeG6aKRICovXHJcbiAgLnZpZGVvX2xvY2FsXzEge1xyXG4gIFx0d2lkdGg6IDM3NXJweDtcclxuICBcdGhlaWdodDogNDIwcnB4O1xyXG4gIH1cclxuICBcclxuICAvKiDnm7jlhbPmk43kvZwgKi9cclxuICAuYnRtLXRvb2xzIHtcclxuICBcdHBvc2l0aW9uOiBmaXhlZDtcclxuICBcdGJvdHRvbTogMDtcclxuICBcdHBhZGRpbmc6IDEwcnB4IDMwcnB4O1xyXG4gIFx0d2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAuaWNvbiB7XHJcbiAgICBcdC8qIGJhY2tncm91bmQtY29sb3I6ICMwMDdBRkY7ICovXHJcbiAgICBcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmljb25faW1nIHtcclxuICAgIFx0d2lkdGg6IDgwcnB4O1xyXG4gICAgXHRoZWlnaHQ6IDgwcnB4O1xyXG4gICAgfVxyXG4gICAgLmljb25fbGlzdF9pbWcge1xyXG4gICAgICB3aWR0aDogNjBycHg7XHJcbiAgICAgIGhlaWdodDogNjBycHg7XHJcbiAgICB9XHJcbiAgICAuaWNvbl90ZXh0IHtcclxuICAgICAgZm9udC1zaXplOiAyOHJweDtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbiAgfVxuICAucG9wdXAtY29udGVudCB7XHJcbiAgICAucGFydGljaXBhbnQtdGl0bGUge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICBwYWRkaW5nOiAyMHJweCAzMHJweDtcclxuICAgICAgLnRpdGxlIHtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgLnRpdGxlLXR4dCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDMycnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNoYXQtY3VzdG9tLXJpZ2h0IHtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgd2lkdGg6IDUwcnB4O1xyXG4gICAgICBoZWlnaHQ6IDUwcnB4O1xyXG4gICAgICAuaXNfdmlkZW8taW1nIHtcclxuICAgICAgICBoZWlnaHQ6IDUwcnB4O1xyXG4gICAgICAgIGhlaWdodDogNTBycHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///56\n");

/***/ }),
/* 57 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 58);

/***/ }),
/* 58 */
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true });

    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
  NativeIteratorPrototype !== Op &&
  hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
  Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
  GeneratorFunctionPrototype,
  toStringTagSymbol,
  "GeneratorFunction");


  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ?
    ctor === GeneratorFunction ||
    // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" :
    false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function (arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
        typeof value === "object" &&
        hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
      // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(
      callInvokeWithMethodAndArg,
      // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) :
      callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
    wrap(innerFn, outerFn, self, tryLocsList),
    PromiseImpl);


    return exports.isGeneratorFunction(outerFn) ?
    iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ?
          GenStateCompleted :
          GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done };


        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
        "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
          hasOwn.call(this, name) &&
          !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function stop() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
        hasOwn.call(entry, "finallyLoc") &&
        this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (
      type === "break" ||
      type === "continue") &&
      finallyEntry.tryLoc <= arg &&
      arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
      record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc };


      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    } };


  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
// If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
 true ? module.exports : undefined);


try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}

/***/ }),
/* 59 */
/*!*********************************************************************!*\
  !*** D:/WebStudyProject/uniapp-project/meeting-demo/utils/until.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 57));var _permission = _interopRequireDefault(__webpack_require__(/*! ../js_sdk/wa-permission/permission.js */ 60));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};}\nvar Utils = {\n  // 平台分类查询权限\n  equipment: function equipment() {return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var oa, ob, _oa, _ob;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:if (!(\n\n              uni.getSystemInfoSync().platform == 'ios')) {_context.next = 11;break;}_context.next = 3;return (\n\n                Utils.requestAndroidPermission(\"camera\", 'ios', '相机'));case 3:oa = _context.sent;_context.next = 6;return (\n\n                Utils.requestAndroidPermission(\"record\", 'ios', '录音'));case 6:ob = _context.sent;_context.next = 9;return (\n                uni.showToast({\n                  title: oa + \";\" + ob,\n                  icon: \"none\",\n                  duration: 2000 }));case 9:_context.next = 20;break;case 11:if (!(\n\n              uni.getSystemInfoSync().platform === 'android')) {_context.next = 20;break;}_context.next = 14;return (\n\n                Utils.requestAndroidPermission(\"android.permission.CAMERA\", 'android', '相机'));case 14:_oa = _context.sent;_context.next = 17;return (\n\n                Utils.requestAndroidPermission(\"android.permission.RECORD_AUDIO\", 'android', '录音'));case 17:_ob = _context.sent;_context.next = 20;return (\n                uni.showToast({\n                  title: _oa + \";\" + _ob,\n                  icon: \"none\",\n                  duration: 2000 }));case 20:case \"end\":return _context.stop();}}}, _callee);}))();\n\n\n  },\n  // 查询权限封装\n  requestAndroidPermission: function requestAndroidPermission(permisionID, type, libe) {return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {var result, strStatus;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:\n              result = 0;\n              strStatus = \"\";if (!(\n              type == 'ios')) {_context2.next = 8;break;}_context2.next = 5;return _permission.default.judgeIosPermission(permisionID);case 5:result = _context2.sent;_context2.next = 11;break;case 8:_context2.next = 10;return _permission.default.\n              requestAndroidPermission(\n              permisionID);case 10:result = _context2.sent;case 11:\n              if (result == 1) {\n                strStatus = \"已获得授权,可正常使用\";\n              } else if (result == 0) {\n                strStatus = \"未获得授权,无法使用\";\n              } else {\n                strStatus = \"被永久拒绝权限,无法使用\";\n              };return _context2.abrupt(\"return\",\n              libe + strStatus);case 14:case \"end\":return _context2.stop();}}}, _callee2);}))();\n  },\n  // 获取高度宽度\n  getWidthHeight: function getWidthHeight() {\n    var obj = {\n      windowWidth: 0,\n      windowHeight: 0 };\n\n    uni.getSystemInfo({\n      success: function success(res) {\n        obj = Object.assign(obj, res);\n      } });\n\n    return obj;\n  } };var _default =\n\nUtils;exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdXRpbHMvdW50aWwuanMiXSwibmFtZXMiOlsiVXRpbHMiLCJlcXVpcG1lbnQiLCJ1bmkiLCJnZXRTeXN0ZW1JbmZvU3luYyIsInBsYXRmb3JtIiwicmVxdWVzdEFuZHJvaWRQZXJtaXNzaW9uIiwib2EiLCJvYiIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsImR1cmF0aW9uIiwicGVybWlzaW9uSUQiLCJ0eXBlIiwibGliZSIsInJlc3VsdCIsInN0clN0YXR1cyIsInBlcm1pc2lvbiIsImp1ZGdlSW9zUGVybWlzc2lvbiIsImdldFdpZHRoSGVpZ2h0Iiwib2JqIiwid2luZG93V2lkdGgiLCJ3aW5kb3dIZWlnaHQiLCJnZXRTeXN0ZW1JbmZvIiwic3VjY2VzcyIsInJlcyIsIk9iamVjdCIsImFzc2lnbiJdLCJtYXBwaW5ncyI6IjJNQUFBLCtHO0FBQ0EsSUFBTUEsS0FBSyxHQUFHO0FBQ2I7QUFDTUMsV0FGTyx1QkFFSzs7QUFFYkMsaUJBQUcsQ0FBQ0MsaUJBQUosR0FBd0JDLFFBQXhCLElBQW9DLEtBRnZCOztBQUlESixxQkFBSyxDQUFDSyx3QkFBTixDQUErQixRQUEvQixFQUF5QyxLQUF6QyxFQUFnRCxJQUFoRCxDQUpDLFNBSVpDLEVBSlk7O0FBTUROLHFCQUFLLENBQUNLLHdCQUFOLENBQStCLFFBQS9CLEVBQXlDLEtBQXpDLEVBQWdELElBQWhELENBTkMsU0FNWkUsRUFOWTtBQU9WTCxtQkFBRyxDQUFDTSxTQUFKLENBQWM7QUFDbkJDLHVCQUFLLEVBQUVILEVBQUUsR0FBRyxHQUFMLEdBQVdDLEVBREM7QUFFbkJHLHNCQUFJLEVBQUUsTUFGYTtBQUduQkMsMEJBQVEsRUFBRSxJQUhTLEVBQWQsQ0FQVTs7QUFZTlQsaUJBQUcsQ0FBQ0MsaUJBQUosR0FBd0JDLFFBQXhCLEtBQXFDLFNBWi9COztBQWNESixxQkFBSyxDQUFDSyx3QkFBTixDQUErQiwyQkFBL0IsRUFBNEQsU0FBNUQsRUFBdUUsSUFBdkUsQ0FkQyxVQWNaQyxHQWRZOztBQWdCRE4scUJBQUssQ0FBQ0ssd0JBQU4sQ0FBK0IsaUNBQS9CLEVBQWtFLFNBQWxFLEVBQTZFLElBQTdFLENBaEJDLFVBZ0JaRSxHQWhCWTtBQWlCVkwsbUJBQUcsQ0FBQ00sU0FBSixDQUFjO0FBQ25CQyx1QkFBSyxFQUFFSCxHQUFFLEdBQUcsR0FBTCxHQUFXQyxHQURDO0FBRW5CRyxzQkFBSSxFQUFFLE1BRmE7QUFHbkJDLDBCQUFRLEVBQUUsSUFIUyxFQUFkLENBakJVOzs7QUF1QmpCLEdBekJZO0FBMEJiO0FBQ01OLDBCQTNCTyxvQ0EyQmtCTyxXQTNCbEIsRUEyQitCQyxJQTNCL0IsRUEyQnFDQyxJQTNCckMsRUEyQjJDO0FBQ25EQyxvQkFEbUQsR0FDMUMsQ0FEMEM7QUFFbkRDLHVCQUZtRCxHQUV2QyxFQUZ1QztBQUd2REgsa0JBQUksSUFBSSxLQUgrQyx3REFHeEJJLG9CQUFVQyxrQkFBVixDQUE2Qk4sV0FBN0IsQ0FId0IsUUFHdkNHLE1BSHVDLDhFQUdtQ0U7QUFDeEZaLHNDQUR3RjtBQUV4Rk8seUJBRndGLENBSG5DLFNBR29CRyxNQUhwQjtBQU12RCxrQkFBSUEsTUFBTSxJQUFJLENBQWQsRUFBaUI7QUFDaEJDLHlCQUFTLEdBQUcsYUFBWjtBQUNBLGVBRkQsTUFFTyxJQUFJRCxNQUFNLElBQUksQ0FBZCxFQUFpQjtBQUN2QkMseUJBQVMsR0FBRyxZQUFaO0FBQ0EsZUFGTSxNQUVBO0FBQ05BLHlCQUFTLEdBQUcsY0FBWjtBQUNBLGdCQVpzRDtBQWFoREYsa0JBQUksR0FBR0UsU0FieUM7QUFjdkQsR0F6Q1k7QUEwQ2I7QUFDQUcsZ0JBM0NhLDRCQTJDSTtBQUNoQixRQUFJQyxHQUFHLEdBQUc7QUFDVEMsaUJBQVcsRUFBRSxDQURKO0FBRVRDLGtCQUFZLEVBQUUsQ0FGTCxFQUFWOztBQUlBcEIsT0FBRyxDQUFDcUIsYUFBSixDQUFrQjtBQUNqQkMsYUFBTyxFQUFFLGlCQUFTQyxHQUFULEVBQWM7QUFDdEJMLFdBQUcsR0FBR00sTUFBTSxDQUFDQyxNQUFQLENBQWNQLEdBQWQsRUFBbUJLLEdBQW5CLENBQU47QUFDQSxPQUhnQixFQUFsQjs7QUFLQSxXQUFPTCxHQUFQO0FBQ0EsR0F0RFksRUFBZCxDOztBQXdEZXBCLEsiLCJmaWxlIjoiNTkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGVybWlzaW9uIGZyb20gXCIuLi9qc19zZGsvd2EtcGVybWlzc2lvbi9wZXJtaXNzaW9uLmpzXCJcbmNvbnN0IFV0aWxzID0ge1xuXHQvLyDlubPlj7DliIbnsbvmn6Xor6LmnYPpmZBcblx0YXN5bmMgZXF1aXBtZW50KCkge1xuXHRcdC8vIOafpeeci+adg+mZkFxuXHRcdGlmICh1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS5wbGF0Zm9ybSA9PSAnaW9zJykge1xuXHRcdFx0Ly/mn6XnnIvnm7jmnLrmnYPpmZBcblx0XHRcdGxldCBvYSA9IGF3YWl0IFV0aWxzLnJlcXVlc3RBbmRyb2lkUGVybWlzc2lvbihcImNhbWVyYVwiLCAnaW9zJywgJ+ebuOacuicpO1xuXHRcdFx0Ly/mn6XnnIvlvZXpn7PmnYPpmZBcblx0XHRcdGxldCBvYiA9IGF3YWl0IFV0aWxzLnJlcXVlc3RBbmRyb2lkUGVybWlzc2lvbihcInJlY29yZFwiLCAnaW9zJywgJ+W9lemfsycpO1xuXHRcdFx0YXdhaXQgdW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdHRpdGxlOiBvYSArIFwiO1wiICsgb2IsXG5cdFx0XHRcdGljb246IFwibm9uZVwiLFxuXHRcdFx0XHRkdXJhdGlvbjogMjAwMFxuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIGlmICh1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS5wbGF0Zm9ybSA9PT0gJ2FuZHJvaWQnKSB7XG5cdFx0XHQvL+afpeeci+ebuOacuuadg+mZkFxuXHRcdFx0bGV0IG9hID0gYXdhaXQgVXRpbHMucmVxdWVzdEFuZHJvaWRQZXJtaXNzaW9uKFwiYW5kcm9pZC5wZXJtaXNzaW9uLkNBTUVSQVwiLCAnYW5kcm9pZCcsICfnm7jmnLonKTtcblx0XHRcdC8v5p+l55yL5b2V6Z+z5p2D6ZmQXG5cdFx0XHRsZXQgb2IgPSBhd2FpdCBVdGlscy5yZXF1ZXN0QW5kcm9pZFBlcm1pc3Npb24oXCJhbmRyb2lkLnBlcm1pc3Npb24uUkVDT1JEX0FVRElPXCIsICdhbmRyb2lkJywgJ+W9lemfsycpO1xuXHRcdFx0YXdhaXQgdW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdHRpdGxlOiBvYSArIFwiO1wiICsgb2IsXG5cdFx0XHRcdGljb246IFwibm9uZVwiLFxuXHRcdFx0XHRkdXJhdGlvbjogMjAwMFxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9LFxuXHQvLyDmn6Xor6LmnYPpmZDlsIHoo4Vcblx0YXN5bmMgcmVxdWVzdEFuZHJvaWRQZXJtaXNzaW9uKHBlcm1pc2lvbklELCB0eXBlLCBsaWJlKSB7XG5cdFx0bGV0IHJlc3VsdCA9IDA7XG5cdFx0bGV0IHN0clN0YXR1cyA9IFwiXCI7XG5cdFx0dHlwZSA9PSAnaW9zJyA/IHJlc3VsdCA9IGF3YWl0IHBlcm1pc2lvbi5qdWRnZUlvc1Blcm1pc3Npb24ocGVybWlzaW9uSUQpIDogcmVzdWx0ID0gYXdhaXQgcGVybWlzaW9uXG5cdFx0XHQucmVxdWVzdEFuZHJvaWRQZXJtaXNzaW9uKFxuXHRcdFx0XHRwZXJtaXNpb25JRCk7XG5cdFx0aWYgKHJlc3VsdCA9PSAxKSB7XG5cdFx0XHRzdHJTdGF0dXMgPSBcIuW3suiOt+W+l+aOiOadgyzlj6/mraPluLjkvb/nlKhcIlxuXHRcdH0gZWxzZSBpZiAocmVzdWx0ID09IDApIHtcblx0XHRcdHN0clN0YXR1cyA9IFwi5pyq6I635b6X5o6I5p2DLOaXoOazleS9v+eUqFwiXG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0clN0YXR1cyA9IFwi6KKr5rC45LmF5ouS57ud5p2D6ZmQLOaXoOazleS9v+eUqFwiXG5cdFx0fTtcblx0XHRyZXR1cm4gbGliZSArIHN0clN0YXR1c1xuXHR9LFxuXHQvLyDojrflj5bpq5jluqblrr3luqZcblx0Z2V0V2lkdGhIZWlnaHQoKSB7XG5cdFx0bGV0IG9iaiA9IHtcblx0XHRcdHdpbmRvd1dpZHRoOiAwLFxuXHRcdFx0d2luZG93SGVpZ2h0OiAwLFxuXHRcdH1cblx0XHR1bmkuZ2V0U3lzdGVtSW5mbyh7XG5cdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcblx0XHRcdFx0b2JqID0gT2JqZWN0LmFzc2lnbihvYmosIHJlcyk7XG5cdFx0XHR9XG5cdFx0fSlcblx0XHRyZXR1cm4gb2JqXG5cdH1cbn1cbmV4cG9ydCBkZWZhdWx0IFV0aWxzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///59\n");

/***/ }),
/* 60 */
/*!*****************************************************************************************!*\
  !*** D:/WebStudyProject/uniapp-project/meeting-demo/js_sdk/wa-permission/permission.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(__f__) {/**\r\n * 本模块封装了Android、iOS的应用权限判断、打开应用权限设置界面、以及位置系统服务是否开启\r\n */\n\nvar isIos;\n\nisIos = plus.os.name == \"iOS\";\n\n\n// 判断推送权限是否开启\nfunction judgeIosPermissionPush() {\n  var result = false;\n  var UIApplication = plus.ios.import(\"UIApplication\");\n  var app = UIApplication.sharedApplication();\n  var enabledTypes = 0;\n  if (app.currentUserNotificationSettings) {\n    var settings = app.currentUserNotificationSettings();\n    enabledTypes = settings.plusGetAttribute(\"types\");\n    __f__(\"log\", \"enabledTypes1:\" + enabledTypes, \" at js_sdk/wa-permission/permission.js:19\");\n    if (enabledTypes == 0) {\n      __f__(\"log\", \"推送权限没有开启\", \" at js_sdk/wa-permission/permission.js:21\");\n    } else {\n      result = true;\n      __f__(\"log\", \"已经开启推送功能!\", \" at js_sdk/wa-permission/permission.js:24\");\n    }\n    plus.ios.deleteObject(settings);\n  } else {\n    enabledTypes = app.enabledRemoteNotificationTypes();\n    if (enabledTypes == 0) {\n      __f__(\"log\", \"推送权限没有开启!\", \" at js_sdk/wa-permission/permission.js:30\");\n    } else {\n      result = true;\n      __f__(\"log\", \"已经开启推送功能!\", \" at js_sdk/wa-permission/permission.js:33\");\n    }\n    __f__(\"log\", \"enabledTypes2:\" + enabledTypes, \" at js_sdk/wa-permission/permission.js:35\");\n  }\n  plus.ios.deleteObject(app);\n  plus.ios.deleteObject(UIApplication);\n  return result;\n}\n\n// 判断定位权限是否开启\nfunction judgeIosPermissionLocation() {\n  var result = false;\n  var cllocationManger = plus.ios.import(\"CLLocationManager\");\n  var status = cllocationManger.authorizationStatus();\n  result = status != 2;\n  __f__(\"log\", \"定位权限开启：\" + result, \" at js_sdk/wa-permission/permission.js:48\");\n  // 以下代码判断了手机设备的定位是否关闭，推荐另行使用方法 checkSystemEnableLocation\n  /* var enable = cllocationManger.locationServicesEnabled();\r\n  var status = cllocationManger.authorizationStatus();\r\n  console.log(\"enable:\" + enable);\r\n  console.log(\"status:\" + status);\r\n  if (enable && status != 2) {\r\n  \tresult = true;\r\n  \tconsole.log(\"手机定位服务已开启且已授予定位权限\");\r\n  } else {\r\n  \tconsole.log(\"手机系统的定位没有打开或未给予定位权限\");\r\n  } */\n  plus.ios.deleteObject(cllocationManger);\n  return result;\n}\n\n// 判断麦克风权限是否开启\nfunction judgeIosPermissionRecord() {\n  var result = false;\n  var avaudiosession = plus.ios.import(\"AVAudioSession\");\n  var avaudio = avaudiosession.sharedInstance();\n  var permissionStatus = avaudio.recordPermission();\n  __f__(\"log\", \"permissionStatus:\" + permissionStatus, \" at js_sdk/wa-permission/permission.js:70\");\n  if (permissionStatus == 1684369017 || permissionStatus == 1970168948) {\n    __f__(\"log\", \"麦克风权限没有开启\", \" at js_sdk/wa-permission/permission.js:72\");\n  } else {\n    result = true;\n    __f__(\"log\", \"麦克风权限已经开启\", \" at js_sdk/wa-permission/permission.js:75\");\n  }\n  plus.ios.deleteObject(avaudiosession);\n  return result;\n}\n\n// 判断相机权限是否开启\nfunction judgeIosPermissionCamera() {\n  var result = false;\n  var AVCaptureDevice = plus.ios.import(\"AVCaptureDevice\");\n  var authStatus = AVCaptureDevice.authorizationStatusForMediaType('vide');\n  __f__(\"log\", \"authStatus:\" + authStatus, \" at js_sdk/wa-permission/permission.js:86\");\n  if (authStatus == 3) {\n    result = true;\n    __f__(\"log\", \"相机权限已经开启\", \" at js_sdk/wa-permission/permission.js:89\");\n  } else {\n    __f__(\"log\", \"相机权限没有开启\", \" at js_sdk/wa-permission/permission.js:91\");\n  }\n  plus.ios.deleteObject(AVCaptureDevice);\n  return result;\n}\n\n// 判断相册权限是否开启\nfunction judgeIosPermissionPhotoLibrary() {\n  var result = false;\n  var PHPhotoLibrary = plus.ios.import(\"PHPhotoLibrary\");\n  var authStatus = PHPhotoLibrary.authorizationStatus();\n  __f__(\"log\", \"authStatus:\" + authStatus, \" at js_sdk/wa-permission/permission.js:102\");\n  if (authStatus == 3) {\n    result = true;\n    __f__(\"log\", \"相册权限已经开启\", \" at js_sdk/wa-permission/permission.js:105\");\n  } else {\n    __f__(\"log\", \"相册权限没有开启\", \" at js_sdk/wa-permission/permission.js:107\");\n  }\n  plus.ios.deleteObject(PHPhotoLibrary);\n  return result;\n}\n\n// 判断通讯录权限是否开启\nfunction judgeIosPermissionContact() {\n  var result = false;\n  var CNContactStore = plus.ios.import(\"CNContactStore\");\n  var cnAuthStatus = CNContactStore.authorizationStatusForEntityType(0);\n  if (cnAuthStatus == 3) {\n    result = true;\n    __f__(\"log\", \"通讯录权限已经开启\", \" at js_sdk/wa-permission/permission.js:120\");\n  } else {\n    __f__(\"log\", \"通讯录权限没有开启\", \" at js_sdk/wa-permission/permission.js:122\");\n  }\n  plus.ios.deleteObject(CNContactStore);\n  return result;\n}\n\n// 判断日历权限是否开启\nfunction judgeIosPermissionCalendar() {\n  var result = false;\n  var EKEventStore = plus.ios.import(\"EKEventStore\");\n  var ekAuthStatus = EKEventStore.authorizationStatusForEntityType(0);\n  if (ekAuthStatus == 3) {\n    result = true;\n    __f__(\"log\", \"日历权限已经开启\", \" at js_sdk/wa-permission/permission.js:135\");\n  } else {\n    __f__(\"log\", \"日历权限没有开启\", \" at js_sdk/wa-permission/permission.js:137\");\n  }\n  plus.ios.deleteObject(EKEventStore);\n  return result;\n}\n\n// 判断备忘录权限是否开启\nfunction judgeIosPermissionMemo() {\n  var result = false;\n  var EKEventStore = plus.ios.import(\"EKEventStore\");\n  var ekAuthStatus = EKEventStore.authorizationStatusForEntityType(1);\n  if (ekAuthStatus == 3) {\n    result = true;\n    __f__(\"log\", \"备忘录权限已经开启\", \" at js_sdk/wa-permission/permission.js:150\");\n  } else {\n    __f__(\"log\", \"备忘录权限没有开启\", \" at js_sdk/wa-permission/permission.js:152\");\n  }\n  plus.ios.deleteObject(EKEventStore);\n  return result;\n}\n\n// Android权限查询\nfunction requestAndroidPermission(permissionID) {\n  return new Promise(function (resolve, reject) {\n    plus.android.requestPermissions(\n    [permissionID], // 理论上支持多个权限同时查询，但实际上本函数封装只处理了一个权限的情况。有需要的可自行扩展封装\n    function (resultObj) {\n      var result = 0;\n      for (var i = 0; i < resultObj.granted.length; i++) {\n        var grantedPermission = resultObj.granted[i];\n        __f__(\"log\", '已获取的权限：' + grantedPermission, \" at js_sdk/wa-permission/permission.js:167\");\n        result = 1;\n      }\n      for (var i = 0; i < resultObj.deniedPresent.length; i++) {\n        var deniedPresentPermission = resultObj.deniedPresent[i];\n        __f__(\"log\", '拒绝本次申请的权限：' + deniedPresentPermission, \" at js_sdk/wa-permission/permission.js:172\");\n        result = 0;\n      }\n      for (var i = 0; i < resultObj.deniedAlways.length; i++) {\n        var deniedAlwaysPermission = resultObj.deniedAlways[i];\n        __f__(\"log\", '永久拒绝申请的权限：' + deniedAlwaysPermission, \" at js_sdk/wa-permission/permission.js:177\");\n        result = -1;\n      }\n      resolve(result);\n      // 若所需权限被拒绝,则打开APP设置界面,可以在APP设置界面打开相应权限\n      // if (result != 1) {\n      // gotoAppPermissionSetting()\n      // }\n    },\n    function (error) {\n      __f__(\"log\", '申请权限错误：' + error.code + \" = \" + error.message, \" at js_sdk/wa-permission/permission.js:187\");\n      resolve({\n        code: error.code,\n        message: error.message });\n\n    });\n\n  });\n}\n\n// 使用一个方法，根据参数判断权限\nfunction judgeIosPermission(permissionID) {\n  if (permissionID == \"location\") {\n    return judgeIosPermissionLocation();\n  } else if (permissionID == \"camera\") {\n    return judgeIosPermissionCamera();\n  } else if (permissionID == \"photoLibrary\") {\n    return judgeIosPermissionPhotoLibrary();\n  } else if (permissionID == \"record\") {\n    return judgeIosPermissionRecord();\n  } else if (permissionID == \"push\") {\n    return judgeIosPermissionPush();\n  } else if (permissionID == \"contact\") {\n    return judgeIosPermissionContact();\n  } else if (permissionID == \"calendar\") {\n    return judgeIosPermissionCalendar();\n  } else if (permissionID == \"memo\") {\n    return judgeIosPermissionMemo();\n  }\n  return false;\n}\n\n// 跳转到**应用**的权限页面\nfunction gotoAppPermissionSetting() {\n  if (isIos) {\n    var UIApplication = plus.ios.import(\"UIApplication\");\n    var application2 = UIApplication.sharedApplication();\n    var NSURL2 = plus.ios.import(\"NSURL\");\n    // var setting2 = NSURL2.URLWithString(\"prefs:root=LOCATION_SERVICES\");\t\t\n    var setting2 = NSURL2.URLWithString(\"app-settings:\");\n    application2.openURL(setting2);\n\n    plus.ios.deleteObject(setting2);\n    plus.ios.deleteObject(NSURL2);\n    plus.ios.deleteObject(application2);\n  } else {\n    // console.log(plus.device.vendor);\n    var Intent = plus.android.importClass(\"android.content.Intent\");\n    var Settings = plus.android.importClass(\"android.provider.Settings\");\n    var Uri = plus.android.importClass(\"android.net.Uri\");\n    var mainActivity = plus.android.runtimeMainActivity();\n    var intent = new Intent();\n    intent.setAction(Settings.ACTION_APPLICATION_DETAILS_SETTINGS);\n    var uri = Uri.fromParts(\"package\", mainActivity.getPackageName(), null);\n    intent.setData(uri);\n    mainActivity.startActivity(intent);\n  }\n}\n\n// 检查系统的设备服务是否开启\n// var checkSystemEnableLocation = async function () {\nfunction checkSystemEnableLocation() {\n  if (isIos) {\n    var result = false;\n    var cllocationManger = plus.ios.import(\"CLLocationManager\");\n    var result = cllocationManger.locationServicesEnabled();\n    __f__(\"log\", \"系统定位开启:\" + result, \" at js_sdk/wa-permission/permission.js:253\");\n    plus.ios.deleteObject(cllocationManger);\n    return result;\n  } else {\n    var context = plus.android.importClass(\"android.content.Context\");\n    var locationManager = plus.android.importClass(\"android.location.LocationManager\");\n    var main = plus.android.runtimeMainActivity();\n    var mainSvr = main.getSystemService(context.LOCATION_SERVICE);\n    var result = mainSvr.isProviderEnabled(locationManager.GPS_PROVIDER);\n    __f__(\"log\", \"系统定位开启:\" + result, \" at js_sdk/wa-permission/permission.js:262\");\n    return result;\n  }\n}\n\nmodule.exports = {\n  judgeIosPermission: judgeIosPermission,\n  requestAndroidPermission: requestAndroidPermission,\n  checkSystemEnableLocation: checkSystemEnableLocation,\n  gotoAppPermissionSetting: gotoAppPermissionSetting };\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 25)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL3dhLXBlcm1pc3Npb24vcGVybWlzc2lvbi5qcyJdLCJuYW1lcyI6WyJpc0lvcyIsInBsdXMiLCJvcyIsIm5hbWUiLCJqdWRnZUlvc1Blcm1pc3Npb25QdXNoIiwicmVzdWx0IiwiVUlBcHBsaWNhdGlvbiIsImlvcyIsImltcG9ydCIsImFwcCIsInNoYXJlZEFwcGxpY2F0aW9uIiwiZW5hYmxlZFR5cGVzIiwiY3VycmVudFVzZXJOb3RpZmljYXRpb25TZXR0aW5ncyIsInNldHRpbmdzIiwicGx1c0dldEF0dHJpYnV0ZSIsImRlbGV0ZU9iamVjdCIsImVuYWJsZWRSZW1vdGVOb3RpZmljYXRpb25UeXBlcyIsImp1ZGdlSW9zUGVybWlzc2lvbkxvY2F0aW9uIiwiY2xsb2NhdGlvbk1hbmdlciIsInN0YXR1cyIsImF1dGhvcml6YXRpb25TdGF0dXMiLCJqdWRnZUlvc1Blcm1pc3Npb25SZWNvcmQiLCJhdmF1ZGlvc2Vzc2lvbiIsImF2YXVkaW8iLCJzaGFyZWRJbnN0YW5jZSIsInBlcm1pc3Npb25TdGF0dXMiLCJyZWNvcmRQZXJtaXNzaW9uIiwianVkZ2VJb3NQZXJtaXNzaW9uQ2FtZXJhIiwiQVZDYXB0dXJlRGV2aWNlIiwiYXV0aFN0YXR1cyIsImF1dGhvcml6YXRpb25TdGF0dXNGb3JNZWRpYVR5cGUiLCJqdWRnZUlvc1Blcm1pc3Npb25QaG90b0xpYnJhcnkiLCJQSFBob3RvTGlicmFyeSIsImp1ZGdlSW9zUGVybWlzc2lvbkNvbnRhY3QiLCJDTkNvbnRhY3RTdG9yZSIsImNuQXV0aFN0YXR1cyIsImF1dGhvcml6YXRpb25TdGF0dXNGb3JFbnRpdHlUeXBlIiwianVkZ2VJb3NQZXJtaXNzaW9uQ2FsZW5kYXIiLCJFS0V2ZW50U3RvcmUiLCJla0F1dGhTdGF0dXMiLCJqdWRnZUlvc1Blcm1pc3Npb25NZW1vIiwicmVxdWVzdEFuZHJvaWRQZXJtaXNzaW9uIiwicGVybWlzc2lvbklEIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJhbmRyb2lkIiwicmVxdWVzdFBlcm1pc3Npb25zIiwicmVzdWx0T2JqIiwiaSIsImdyYW50ZWQiLCJsZW5ndGgiLCJncmFudGVkUGVybWlzc2lvbiIsImRlbmllZFByZXNlbnQiLCJkZW5pZWRQcmVzZW50UGVybWlzc2lvbiIsImRlbmllZEFsd2F5cyIsImRlbmllZEFsd2F5c1Blcm1pc3Npb24iLCJlcnJvciIsImNvZGUiLCJtZXNzYWdlIiwianVkZ2VJb3NQZXJtaXNzaW9uIiwiZ290b0FwcFBlcm1pc3Npb25TZXR0aW5nIiwiYXBwbGljYXRpb24yIiwiTlNVUkwyIiwic2V0dGluZzIiLCJVUkxXaXRoU3RyaW5nIiwib3BlblVSTCIsIkludGVudCIsImltcG9ydENsYXNzIiwiU2V0dGluZ3MiLCJVcmkiLCJtYWluQWN0aXZpdHkiLCJydW50aW1lTWFpbkFjdGl2aXR5IiwiaW50ZW50Iiwic2V0QWN0aW9uIiwiQUNUSU9OX0FQUExJQ0FUSU9OX0RFVEFJTFNfU0VUVElOR1MiLCJ1cmkiLCJmcm9tUGFydHMiLCJnZXRQYWNrYWdlTmFtZSIsInNldERhdGEiLCJzdGFydEFjdGl2aXR5IiwiY2hlY2tTeXN0ZW1FbmFibGVMb2NhdGlvbiIsImxvY2F0aW9uU2VydmljZXNFbmFibGVkIiwiY29udGV4dCIsImxvY2F0aW9uTWFuYWdlciIsIm1haW4iLCJtYWluU3ZyIiwiZ2V0U3lzdGVtU2VydmljZSIsIkxPQ0FUSU9OX1NFUlZJQ0UiLCJpc1Byb3ZpZGVyRW5hYmxlZCIsIkdQU19QUk9WSURFUiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBSUEsSUFBSUEsS0FBSjs7QUFFQUEsS0FBSyxHQUFJQyxJQUFJLENBQUNDLEVBQUwsQ0FBUUMsSUFBUixJQUFnQixLQUF6Qjs7O0FBR0E7QUFDQSxTQUFTQyxzQkFBVCxHQUFrQztBQUNqQyxNQUFJQyxNQUFNLEdBQUcsS0FBYjtBQUNBLE1BQUlDLGFBQWEsR0FBR0wsSUFBSSxDQUFDTSxHQUFMLENBQVNDLE1BQVQsQ0FB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QVk3RSxNQUF4QjtBQUNBSixRQUFJLENBQUNNLEdBQUwsQ0FBU1EsWUFBVCxDQUFzQkcsZ0JBQXRCO0FBQ0EsV0FBT2IsTUFBUDtBQUNBLEdBUEQsTUFPTztBQUNOLFFBQUk4RSxPQUFPLEdBQUdsRixJQUFJLENBQUM2QyxPQUFMLENBQWFzQixXQUFiLENBQXlCLHlCQUF6QixDQUFkO0FBQ0EsUUFBSWdCLGVBQWUsR0FBR25GLElBQUksQ0FBQzZDLE9BQUwsQ0FBYXNCLFdBQWIsQ0FBeUIsa0NBQXpCLENBQXRCO0FBQ0EsUUFBSWlCLElBQUksR0FBR3BGLElBQUksQ0FBQzZDLE9BQUwsQ0FBYTBCLG1CQUFiLEVBQVg7QUFDQSxRQUFJYyxPQUFPLEdBQUdELElBQUksQ0FBQ0UsZ0JBQUwsQ0FBc0JKLE9BQU8sQ0FBQ0ssZ0JBQTlCLENBQWQ7QUFDQSxRQUFJbkYsTUFBTSxHQUFHaUYsT0FBTyxDQUFDRyxpQkFBUixDQUEwQkwsZUFBZSxDQUFDTSxZQUExQyxDQUFiO0FBQ0EsaUJBQVksWUFBWXJGLE1BQXhCO0FBQ0EsV0FBT0EsTUFBUDtBQUNBO0FBQ0Q7O0FBRURzRixNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDaEJoQyxvQkFBa0IsRUFBRUEsa0JBREo7QUFFaEJuQiwwQkFBd0IsRUFBRUEsd0JBRlY7QUFHaEJ3QywyQkFBeUIsRUFBRUEseUJBSFg7QUFJaEJwQiwwQkFBd0IsRUFBRUEsd0JBSlYsRUFBakIsQyIsImZpbGUiOiI2MC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDmnKzmqKHlnZflsIHoo4XkuoZBbmRyb2lk44CBaU9T55qE5bqU55So5p2D6ZmQ5Yik5pat44CB5omT5byA5bqU55So5p2D6ZmQ6K6+572u55WM6Z2i44CB5Lul5Y+K5L2N572u57O757uf5pyN5Yqh5piv5ZCm5byA5ZCvXHJcbiAqL1xyXG5cclxudmFyIGlzSW9zXHJcblxyXG5pc0lvcyA9IChwbHVzLm9zLm5hbWUgPT0gXCJpT1NcIilcclxuXHJcblxyXG4vLyDliKTmlq3mjqjpgIHmnYPpmZDmmK/lkKblvIDlkK9cclxuZnVuY3Rpb24ganVkZ2VJb3NQZXJtaXNzaW9uUHVzaCgpIHtcclxuXHR2YXIgcmVzdWx0ID0gZmFsc2U7XHJcblx0dmFyIFVJQXBwbGljYXRpb24gPSBwbHVzLmlvcy5pbXBvcnQoXCJVSUFwcGxpY2F0aW9uXCIpO1xyXG5cdHZhciBhcHAgPSBVSUFwcGxpY2F0aW9uLnNoYXJlZEFwcGxpY2F0aW9uKCk7XHJcblx0dmFyIGVuYWJsZWRUeXBlcyA9IDA7XHJcblx0aWYgKGFwcC5jdXJyZW50VXNlck5vdGlmaWNhdGlvblNldHRpbmdzKSB7XHJcblx0XHR2YXIgc2V0dGluZ3MgPSBhcHAuY3VycmVudFVzZXJOb3RpZmljYXRpb25TZXR0aW5ncygpO1xyXG5cdFx0ZW5hYmxlZFR5cGVzID0gc2V0dGluZ3MucGx1c0dldEF0dHJpYnV0ZShcInR5cGVzXCIpO1xyXG5cdFx0Y29uc29sZS5sb2coXCJlbmFibGVkVHlwZXMxOlwiICsgZW5hYmxlZFR5cGVzKTtcclxuXHRcdGlmIChlbmFibGVkVHlwZXMgPT0gMCkge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIuaOqOmAgeadg+mZkOayoeacieW8gOWQr1wiKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJlc3VsdCA9IHRydWU7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwi5bey57uP5byA5ZCv5o6o6YCB5Yqf6IO9IVwiKVxyXG5cdFx0fVxyXG5cdFx0cGx1cy5pb3MuZGVsZXRlT2JqZWN0KHNldHRpbmdzKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0ZW5hYmxlZFR5cGVzID0gYXBwLmVuYWJsZWRSZW1vdGVOb3RpZmljYXRpb25UeXBlcygpO1xyXG5cdFx0aWYgKGVuYWJsZWRUeXBlcyA9PSAwKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwi5o6o6YCB5p2D6ZmQ5rKh5pyJ5byA5ZCvIVwiKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJlc3VsdCA9IHRydWU7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwi5bey57uP5byA5ZCv5o6o6YCB5Yqf6IO9IVwiKVxyXG5cdFx0fVxyXG5cdFx0Y29uc29sZS5sb2coXCJlbmFibGVkVHlwZXMyOlwiICsgZW5hYmxlZFR5cGVzKTtcclxuXHR9XHJcblx0cGx1cy5pb3MuZGVsZXRlT2JqZWN0KGFwcCk7XHJcblx0cGx1cy5pb3MuZGVsZXRlT2JqZWN0KFVJQXBwbGljYXRpb24pO1xyXG5cdHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbi8vIOWIpOaWreWumuS9jeadg+mZkOaYr+WQpuW8gOWQr1xyXG5mdW5jdGlvbiBqdWRnZUlvc1Blcm1pc3Npb25Mb2NhdGlvbigpIHtcclxuXHR2YXIgcmVzdWx0ID0gZmFsc2U7XHJcblx0dmFyIGNsbG9jYXRpb25NYW5nZXIgPSBwbHVzLmlvcy5pbXBvcnQoXCJDTExvY2F0aW9uTWFuYWdlclwiKTtcclxuXHR2YXIgc3RhdHVzID0gY2xsb2NhdGlvbk1hbmdlci5hdXRob3JpemF0aW9uU3RhdHVzKCk7XHJcblx0cmVzdWx0ID0gKHN0YXR1cyAhPSAyKVxyXG5cdGNvbnNvbGUubG9nKFwi5a6a5L2N5p2D6ZmQ5byA5ZCv77yaXCIgKyByZXN1bHQpO1xyXG5cdC8vIOS7peS4i+S7o+eggeWIpOaWreS6huaJi+acuuiuvuWkh+eahOWumuS9jeaYr+WQpuWFs+mXre+8jOaOqOiNkOWPpuihjOS9v+eUqOaWueazlSBjaGVja1N5c3RlbUVuYWJsZUxvY2F0aW9uXHJcblx0LyogdmFyIGVuYWJsZSA9IGNsbG9jYXRpb25NYW5nZXIubG9jYXRpb25TZXJ2aWNlc0VuYWJsZWQoKTtcclxuXHR2YXIgc3RhdHVzID0gY2xsb2NhdGlvbk1hbmdlci5hdXRob3JpemF0aW9uU3RhdHVzKCk7XHJcblx0Y29uc29sZS5sb2coXCJlbmFibGU6XCIgKyBlbmFibGUpO1xyXG5cdGNvbnNvbGUubG9nKFwic3RhdHVzOlwiICsgc3RhdHVzKTtcclxuXHRpZiAoZW5hYmxlICYmIHN0YXR1cyAhPSAyKSB7XHJcblx0XHRyZXN1bHQgPSB0cnVlO1xyXG5cdFx0Y29uc29sZS5sb2coXCLmiYvmnLrlrprkvY3mnI3liqHlt7LlvIDlkK/kuJTlt7LmjojkuojlrprkvY3mnYPpmZBcIik7XHJcblx0fSBlbHNlIHtcclxuXHRcdGNvbnNvbGUubG9nKFwi5omL5py657O757uf55qE5a6a5L2N5rKh5pyJ5omT5byA5oiW5pyq57uZ5LqI5a6a5L2N5p2D6ZmQXCIpO1xyXG5cdH0gKi9cclxuXHRwbHVzLmlvcy5kZWxldGVPYmplY3QoY2xsb2NhdGlvbk1hbmdlcik7XHJcblx0cmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuLy8g5Yik5pat6bqm5YWL6aOO5p2D6ZmQ5piv5ZCm5byA5ZCvXHJcbmZ1bmN0aW9uIGp1ZGdlSW9zUGVybWlzc2lvblJlY29yZCgpIHtcclxuXHR2YXIgcmVzdWx0ID0gZmFsc2U7XHJcblx0dmFyIGF2YXVkaW9zZXNzaW9uID0gcGx1cy5pb3MuaW1wb3J0KFwiQVZBdWRpb1Nlc3Npb25cIik7XHJcblx0dmFyIGF2YXVkaW8gPSBhdmF1ZGlvc2Vzc2lvbi5zaGFyZWRJbnN0YW5jZSgpO1xyXG5cdHZhciBwZXJtaXNzaW9uU3RhdHVzID0gYXZhdWRpby5yZWNvcmRQZXJtaXNzaW9uKCk7XHJcblx0Y29uc29sZS5sb2coXCJwZXJtaXNzaW9uU3RhdHVzOlwiICsgcGVybWlzc2lvblN0YXR1cyk7XHJcblx0aWYgKHBlcm1pc3Npb25TdGF0dXMgPT0gMTY4NDM2OTAxNyB8fCBwZXJtaXNzaW9uU3RhdHVzID09IDE5NzAxNjg5NDgpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwi6bqm5YWL6aOO5p2D6ZmQ5rKh5pyJ5byA5ZCvXCIpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRyZXN1bHQgPSB0cnVlO1xyXG5cdFx0Y29uc29sZS5sb2coXCLpuqblhYvpo47mnYPpmZDlt7Lnu4/lvIDlkK9cIik7XHJcblx0fVxyXG5cdHBsdXMuaW9zLmRlbGV0ZU9iamVjdChhdmF1ZGlvc2Vzc2lvbik7XHJcblx0cmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuLy8g5Yik5pat55u45py65p2D6ZmQ5piv5ZCm5byA5ZCvXHJcbmZ1bmN0aW9uIGp1ZGdlSW9zUGVybWlzc2lvbkNhbWVyYSgpIHtcclxuXHR2YXIgcmVzdWx0ID0gZmFsc2U7XHJcblx0dmFyIEFWQ2FwdHVyZURldmljZSA9IHBsdXMuaW9zLmltcG9ydChcIkFWQ2FwdHVyZURldmljZVwiKTtcclxuXHR2YXIgYXV0aFN0YXR1cyA9IEFWQ2FwdHVyZURldmljZS5hdXRob3JpemF0aW9uU3RhdHVzRm9yTWVkaWFUeXBlKCd2aWRlJyk7XHJcblx0Y29uc29sZS5sb2coXCJhdXRoU3RhdHVzOlwiICsgYXV0aFN0YXR1cyk7XHJcblx0aWYgKGF1dGhTdGF0dXMgPT0gMykge1xyXG5cdFx0cmVzdWx0ID0gdHJ1ZTtcclxuXHRcdGNvbnNvbGUubG9nKFwi55u45py65p2D6ZmQ5bey57uP5byA5ZCvXCIpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIuebuOacuuadg+mZkOayoeacieW8gOWQr1wiKTtcclxuXHR9XHJcblx0cGx1cy5pb3MuZGVsZXRlT2JqZWN0KEFWQ2FwdHVyZURldmljZSk7XHJcblx0cmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuLy8g5Yik5pat55u45YaM5p2D6ZmQ5piv5ZCm5byA5ZCvXHJcbmZ1bmN0aW9uIGp1ZGdlSW9zUGVybWlzc2lvblBob3RvTGlicmFyeSgpIHtcclxuXHR2YXIgcmVzdWx0ID0gZmFsc2U7XHJcblx0dmFyIFBIUGhvdG9MaWJyYXJ5ID0gcGx1cy5pb3MuaW1wb3J0KFwiUEhQaG90b0xpYnJhcnlcIik7XHJcblx0dmFyIGF1dGhTdGF0dXMgPSBQSFBob3RvTGlicmFyeS5hdXRob3JpemF0aW9uU3RhdHVzKCk7XHJcblx0Y29uc29sZS5sb2coXCJhdXRoU3RhdHVzOlwiICsgYXV0aFN0YXR1cyk7XHJcblx0aWYgKGF1dGhTdGF0dXMgPT0gMykge1xyXG5cdFx0cmVzdWx0ID0gdHJ1ZTtcclxuXHRcdGNvbnNvbGUubG9nKFwi55u45YaM5p2D6ZmQ5bey57uP5byA5ZCvXCIpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIuebuOWGjOadg+mZkOayoeacieW8gOWQr1wiKTtcclxuXHR9XHJcblx0cGx1cy5pb3MuZGVsZXRlT2JqZWN0KFBIUGhvdG9MaWJyYXJ5KTtcclxuXHRyZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vLyDliKTmlq3pgJrorq/lvZXmnYPpmZDmmK/lkKblvIDlkK9cclxuZnVuY3Rpb24ganVkZ2VJb3NQZXJtaXNzaW9uQ29udGFjdCgpIHtcclxuXHR2YXIgcmVzdWx0ID0gZmFsc2U7XHJcblx0dmFyIENOQ29udGFjdFN0b3JlID0gcGx1cy5pb3MuaW1wb3J0KFwiQ05Db250YWN0U3RvcmVcIik7XHJcblx0dmFyIGNuQXV0aFN0YXR1cyA9IENOQ29udGFjdFN0b3JlLmF1dGhvcml6YXRpb25TdGF0dXNGb3JFbnRpdHlUeXBlKDApO1xyXG5cdGlmIChjbkF1dGhTdGF0dXMgPT0gMykge1xyXG5cdFx0cmVzdWx0ID0gdHJ1ZTtcclxuXHRcdGNvbnNvbGUubG9nKFwi6YCa6K6v5b2V5p2D6ZmQ5bey57uP5byA5ZCvXCIpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIumAmuiur+W9leadg+mZkOayoeacieW8gOWQr1wiKTtcclxuXHR9XHJcblx0cGx1cy5pb3MuZGVsZXRlT2JqZWN0KENOQ29udGFjdFN0b3JlKTtcclxuXHRyZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vLyDliKTmlq3ml6XljobmnYPpmZDmmK/lkKblvIDlkK9cclxuZnVuY3Rpb24ganVkZ2VJb3NQZXJtaXNzaW9uQ2FsZW5kYXIoKSB7XHJcblx0dmFyIHJlc3VsdCA9IGZhbHNlO1xyXG5cdHZhciBFS0V2ZW50U3RvcmUgPSBwbHVzLmlvcy5pbXBvcnQoXCJFS0V2ZW50U3RvcmVcIik7XHJcblx0dmFyIGVrQXV0aFN0YXR1cyA9IEVLRXZlbnRTdG9yZS5hdXRob3JpemF0aW9uU3RhdHVzRm9yRW50aXR5VHlwZSgwKTtcclxuXHRpZiAoZWtBdXRoU3RhdHVzID09IDMpIHtcclxuXHRcdHJlc3VsdCA9IHRydWU7XHJcblx0XHRjb25zb2xlLmxvZyhcIuaXpeWOhuadg+mZkOW3sue7j+W8gOWQr1wiKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0Y29uc29sZS5sb2coXCLml6XljobmnYPpmZDmsqHmnInlvIDlkK9cIik7XHJcblx0fVxyXG5cdHBsdXMuaW9zLmRlbGV0ZU9iamVjdChFS0V2ZW50U3RvcmUpO1xyXG5cdHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbi8vIOWIpOaWreWkh+W/mOW9leadg+mZkOaYr+WQpuW8gOWQr1xyXG5mdW5jdGlvbiBqdWRnZUlvc1Blcm1pc3Npb25NZW1vKCkge1xyXG5cdHZhciByZXN1bHQgPSBmYWxzZTtcclxuXHR2YXIgRUtFdmVudFN0b3JlID0gcGx1cy5pb3MuaW1wb3J0KFwiRUtFdmVudFN0b3JlXCIpO1xyXG5cdHZhciBla0F1dGhTdGF0dXMgPSBFS0V2ZW50U3RvcmUuYXV0aG9yaXphdGlvblN0YXR1c0ZvckVudGl0eVR5cGUoMSk7XHJcblx0aWYgKGVrQXV0aFN0YXR1cyA9PSAzKSB7XHJcblx0XHRyZXN1bHQgPSB0cnVlO1xyXG5cdFx0Y29uc29sZS5sb2coXCLlpIflv5jlvZXmnYPpmZDlt7Lnu4/lvIDlkK9cIik7XHJcblx0fSBlbHNlIHtcclxuXHRcdGNvbnNvbGUubG9nKFwi5aSH5b+Y5b2V5p2D6ZmQ5rKh5pyJ5byA5ZCvXCIpO1xyXG5cdH1cclxuXHRwbHVzLmlvcy5kZWxldGVPYmplY3QoRUtFdmVudFN0b3JlKTtcclxuXHRyZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vLyBBbmRyb2lk5p2D6ZmQ5p+l6K+iXHJcbmZ1bmN0aW9uIHJlcXVlc3RBbmRyb2lkUGVybWlzc2lvbihwZXJtaXNzaW9uSUQpIHtcclxuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0cGx1cy5hbmRyb2lkLnJlcXVlc3RQZXJtaXNzaW9ucyhcclxuXHRcdFx0W3Blcm1pc3Npb25JRF0sIC8vIOeQhuiuuuS4iuaUr+aMgeWkmuS4quadg+mZkOWQjOaXtuafpeivou+8jOS9huWunumZheS4iuacrOWHveaVsOWwgeijheWPquWkhOeQhuS6huS4gOS4quadg+mZkOeahOaDheWGteOAguaciemcgOimgeeahOWPr+iHquihjOaJqeWxleWwgeijhVxyXG5cdFx0XHRmdW5jdGlvbihyZXN1bHRPYmopIHtcclxuXHRcdFx0XHR2YXIgcmVzdWx0ID0gMDtcclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdE9iai5ncmFudGVkLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHR2YXIgZ3JhbnRlZFBlcm1pc3Npb24gPSByZXN1bHRPYmouZ3JhbnRlZFtpXTtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCflt7Lojrflj5bnmoTmnYPpmZDvvJonICsgZ3JhbnRlZFBlcm1pc3Npb24pO1xyXG5cdFx0XHRcdFx0cmVzdWx0ID0gMVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdE9iai5kZW5pZWRQcmVzZW50Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHR2YXIgZGVuaWVkUHJlc2VudFBlcm1pc3Npb24gPSByZXN1bHRPYmouZGVuaWVkUHJlc2VudFtpXTtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCfmi5Lnu53mnKzmrKHnlLPor7fnmoTmnYPpmZDvvJonICsgZGVuaWVkUHJlc2VudFBlcm1pc3Npb24pO1xyXG5cdFx0XHRcdFx0cmVzdWx0ID0gMFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdE9iai5kZW5pZWRBbHdheXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdHZhciBkZW5pZWRBbHdheXNQZXJtaXNzaW9uID0gcmVzdWx0T2JqLmRlbmllZEFsd2F5c1tpXTtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCfmsLjkuYXmi5Lnu53nlLPor7fnmoTmnYPpmZDvvJonICsgZGVuaWVkQWx3YXlzUGVybWlzc2lvbik7XHJcblx0XHRcdFx0XHRyZXN1bHQgPSAtMVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXNvbHZlKHJlc3VsdCk7XHJcblx0XHRcdFx0Ly8g6Iul5omA6ZyA5p2D6ZmQ6KKr5ouS57udLOWImeaJk+W8gEFQUOiuvue9rueVjOmdoizlj6/ku6XlnKhBUFDorr7nva7nlYzpnaLmiZPlvIDnm7jlupTmnYPpmZBcclxuXHRcdFx0XHQvLyBpZiAocmVzdWx0ICE9IDEpIHtcclxuXHRcdFx0XHQvLyBnb3RvQXBwUGVybWlzc2lvblNldHRpbmcoKVxyXG5cdFx0XHRcdC8vIH1cclxuXHRcdFx0fSxcclxuXHRcdFx0ZnVuY3Rpb24oZXJyb3IpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygn55Sz6K+35p2D6ZmQ6ZSZ6K+v77yaJyArIGVycm9yLmNvZGUgKyBcIiA9IFwiICsgZXJyb3IubWVzc2FnZSk7XHJcblx0XHRcdFx0cmVzb2x2ZSh7XHJcblx0XHRcdFx0XHRjb2RlOiBlcnJvci5jb2RlLFxyXG5cdFx0XHRcdFx0bWVzc2FnZTogZXJyb3IubWVzc2FnZVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cdH0pO1xyXG59XHJcblxyXG4vLyDkvb/nlKjkuIDkuKrmlrnms5XvvIzmoLnmja7lj4LmlbDliKTmlq3mnYPpmZBcclxuZnVuY3Rpb24ganVkZ2VJb3NQZXJtaXNzaW9uKHBlcm1pc3Npb25JRCkge1xyXG5cdGlmIChwZXJtaXNzaW9uSUQgPT0gXCJsb2NhdGlvblwiKSB7XHJcblx0XHRyZXR1cm4ganVkZ2VJb3NQZXJtaXNzaW9uTG9jYXRpb24oKVxyXG5cdH0gZWxzZSBpZiAocGVybWlzc2lvbklEID09IFwiY2FtZXJhXCIpIHtcclxuXHRcdHJldHVybiBqdWRnZUlvc1Blcm1pc3Npb25DYW1lcmEoKVxyXG5cdH0gZWxzZSBpZiAocGVybWlzc2lvbklEID09IFwicGhvdG9MaWJyYXJ5XCIpIHtcclxuXHRcdHJldHVybiBqdWRnZUlvc1Blcm1pc3Npb25QaG90b0xpYnJhcnkoKVxyXG5cdH0gZWxzZSBpZiAocGVybWlzc2lvbklEID09IFwicmVjb3JkXCIpIHtcclxuXHRcdHJldHVybiBqdWRnZUlvc1Blcm1pc3Npb25SZWNvcmQoKVxyXG5cdH0gZWxzZSBpZiAocGVybWlzc2lvbklEID09IFwicHVzaFwiKSB7XHJcblx0XHRyZXR1cm4ganVkZ2VJb3NQZXJtaXNzaW9uUHVzaCgpXHJcblx0fSBlbHNlIGlmIChwZXJtaXNzaW9uSUQgPT0gXCJjb250YWN0XCIpIHtcclxuXHRcdHJldHVybiBqdWRnZUlvc1Blcm1pc3Npb25Db250YWN0KClcclxuXHR9IGVsc2UgaWYgKHBlcm1pc3Npb25JRCA9PSBcImNhbGVuZGFyXCIpIHtcclxuXHRcdHJldHVybiBqdWRnZUlvc1Blcm1pc3Npb25DYWxlbmRhcigpXHJcblx0fSBlbHNlIGlmIChwZXJtaXNzaW9uSUQgPT0gXCJtZW1vXCIpIHtcclxuXHRcdHJldHVybiBqdWRnZUlvc1Blcm1pc3Npb25NZW1vKClcclxuXHR9XHJcblx0cmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG4vLyDot7PovazliLAqKuW6lOeUqCoq55qE5p2D6ZmQ6aG16Z2iXHJcbmZ1bmN0aW9uIGdvdG9BcHBQZXJtaXNzaW9uU2V0dGluZygpIHtcclxuXHRpZiAoaXNJb3MpIHtcclxuXHRcdHZhciBVSUFwcGxpY2F0aW9uID0gcGx1cy5pb3MuaW1wb3J0KFwiVUlBcHBsaWNhdGlvblwiKTtcclxuXHRcdHZhciBhcHBsaWNhdGlvbjIgPSBVSUFwcGxpY2F0aW9uLnNoYXJlZEFwcGxpY2F0aW9uKCk7XHJcblx0XHR2YXIgTlNVUkwyID0gcGx1cy5pb3MuaW1wb3J0KFwiTlNVUkxcIik7XHJcblx0XHQvLyB2YXIgc2V0dGluZzIgPSBOU1VSTDIuVVJMV2l0aFN0cmluZyhcInByZWZzOnJvb3Q9TE9DQVRJT05fU0VSVklDRVNcIik7XHRcdFxyXG5cdFx0dmFyIHNldHRpbmcyID0gTlNVUkwyLlVSTFdpdGhTdHJpbmcoXCJhcHAtc2V0dGluZ3M6XCIpO1xyXG5cdFx0YXBwbGljYXRpb24yLm9wZW5VUkwoc2V0dGluZzIpO1xyXG5cclxuXHRcdHBsdXMuaW9zLmRlbGV0ZU9iamVjdChzZXR0aW5nMik7XHJcblx0XHRwbHVzLmlvcy5kZWxldGVPYmplY3QoTlNVUkwyKTtcclxuXHRcdHBsdXMuaW9zLmRlbGV0ZU9iamVjdChhcHBsaWNhdGlvbjIpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHQvLyBjb25zb2xlLmxvZyhwbHVzLmRldmljZS52ZW5kb3IpO1xyXG5cdFx0dmFyIEludGVudCA9IHBsdXMuYW5kcm9pZC5pbXBvcnRDbGFzcyhcImFuZHJvaWQuY29udGVudC5JbnRlbnRcIik7XHJcblx0XHR2YXIgU2V0dGluZ3MgPSBwbHVzLmFuZHJvaWQuaW1wb3J0Q2xhc3MoXCJhbmRyb2lkLnByb3ZpZGVyLlNldHRpbmdzXCIpO1xyXG5cdFx0dmFyIFVyaSA9IHBsdXMuYW5kcm9pZC5pbXBvcnRDbGFzcyhcImFuZHJvaWQubmV0LlVyaVwiKTtcclxuXHRcdHZhciBtYWluQWN0aXZpdHkgPSBwbHVzLmFuZHJvaWQucnVudGltZU1haW5BY3Rpdml0eSgpO1xyXG5cdFx0dmFyIGludGVudCA9IG5ldyBJbnRlbnQoKTtcclxuXHRcdGludGVudC5zZXRBY3Rpb24oU2V0dGluZ3MuQUNUSU9OX0FQUExJQ0FUSU9OX0RFVEFJTFNfU0VUVElOR1MpO1xyXG5cdFx0dmFyIHVyaSA9IFVyaS5mcm9tUGFydHMoXCJwYWNrYWdlXCIsIG1haW5BY3Rpdml0eS5nZXRQYWNrYWdlTmFtZSgpLCBudWxsKTtcclxuXHRcdGludGVudC5zZXREYXRhKHVyaSk7XHJcblx0XHRtYWluQWN0aXZpdHkuc3RhcnRBY3Rpdml0eShpbnRlbnQpO1xyXG5cdH1cclxufVxyXG5cclxuLy8g5qOA5p+l57O757uf55qE6K6+5aSH5pyN5Yqh5piv5ZCm5byA5ZCvXHJcbi8vIHZhciBjaGVja1N5c3RlbUVuYWJsZUxvY2F0aW9uID0gYXN5bmMgZnVuY3Rpb24gKCkge1xyXG5mdW5jdGlvbiBjaGVja1N5c3RlbUVuYWJsZUxvY2F0aW9uKCkge1xyXG5cdGlmIChpc0lvcykge1xyXG5cdFx0dmFyIHJlc3VsdCA9IGZhbHNlO1xyXG5cdFx0dmFyIGNsbG9jYXRpb25NYW5nZXIgPSBwbHVzLmlvcy5pbXBvcnQoXCJDTExvY2F0aW9uTWFuYWdlclwiKTtcclxuXHRcdHZhciByZXN1bHQgPSBjbGxvY2F0aW9uTWFuZ2VyLmxvY2F0aW9uU2VydmljZXNFbmFibGVkKCk7XHJcblx0XHRjb25zb2xlLmxvZyhcIuezu+e7n+WumuS9jeW8gOWQrzpcIiArIHJlc3VsdCk7XHJcblx0XHRwbHVzLmlvcy5kZWxldGVPYmplY3QoY2xsb2NhdGlvbk1hbmdlcik7XHJcblx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdH0gZWxzZSB7XHJcblx0XHR2YXIgY29udGV4dCA9IHBsdXMuYW5kcm9pZC5pbXBvcnRDbGFzcyhcImFuZHJvaWQuY29udGVudC5Db250ZXh0XCIpO1xyXG5cdFx0dmFyIGxvY2F0aW9uTWFuYWdlciA9IHBsdXMuYW5kcm9pZC5pbXBvcnRDbGFzcyhcImFuZHJvaWQubG9jYXRpb24uTG9jYXRpb25NYW5hZ2VyXCIpO1xyXG5cdFx0dmFyIG1haW4gPSBwbHVzLmFuZHJvaWQucnVudGltZU1haW5BY3Rpdml0eSgpO1xyXG5cdFx0dmFyIG1haW5TdnIgPSBtYWluLmdldFN5c3RlbVNlcnZpY2UoY29udGV4dC5MT0NBVElPTl9TRVJWSUNFKTtcclxuXHRcdHZhciByZXN1bHQgPSBtYWluU3ZyLmlzUHJvdmlkZXJFbmFibGVkKGxvY2F0aW9uTWFuYWdlci5HUFNfUFJPVklERVIpO1xyXG5cdFx0Y29uc29sZS5sb2coXCLns7vnu5/lrprkvY3lvIDlkK86XCIgKyByZXN1bHQpO1xyXG5cdFx0cmV0dXJuIHJlc3VsdFxyXG5cdH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0anVkZ2VJb3NQZXJtaXNzaW9uOiBqdWRnZUlvc1Blcm1pc3Npb24sXHJcblx0cmVxdWVzdEFuZHJvaWRQZXJtaXNzaW9uOiByZXF1ZXN0QW5kcm9pZFBlcm1pc3Npb24sXHJcblx0Y2hlY2tTeXN0ZW1FbmFibGVMb2NhdGlvbjogY2hlY2tTeXN0ZW1FbmFibGVMb2NhdGlvbixcclxuXHRnb3RvQXBwUGVybWlzc2lvblNldHRpbmc6IGdvdG9BcHBQZXJtaXNzaW9uU2V0dGluZ1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///60\n");

/***/ }),
/* 61 */
/*!*******************************************************************!*\
  !*** D:/WebStudyProject/uniapp-project/meeting-demo/api/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.getCalendarId = exports.getCalendar = exports.addCalendar = exports.getUserInfoById = exports.joinConference = exports.faceRecognitionCheck = exports.conferenceIdViewTheConferenceStatus = exports.addOrUpdateParticipantPerson = exports.deleteParticipantsPersonList = exports.getParticipantsPersonList = exports.updateUserInfoImages = exports.updateNickname = exports.adminInfo = exports.closeMeeting = exports.saveMeeting = exports.viewConferenceInformationBasedTheId = exports.removeHistoryConference = exports.oneselfMeeting = exports.userHistoryConferencePull = exports.userHistoryConference = exports.logout = exports.register = exports.login = void 0;var _request = _interopRequireWildcard(__webpack_require__(/*! ./request.js */ 62));function _getRequireWildcardCache() {if (typeof WeakMap !== \"function\") return null;var cache = new WeakMap();_getRequireWildcardCache = function _getRequireWildcardCache() {return cache;};return cache;}function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;}if (obj === null || typeof obj !== \"object\" && typeof obj !== \"function\") {return { default: obj };}var cache = _getRequireWildcardCache();if (cache && cache.has(obj)) {return cache.get(obj);}var newObj = {};var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) {var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;if (desc && (desc.get || desc.set)) {Object.defineProperty(newObj, key, desc);} else {newObj[key] = obj[key];}}}newObj.default = obj;if (cache) {cache.set(obj, newObj);}return newObj;}\n\n// 1.登录\nvar login = function login(data) {return (0, _request.request1)({ url: '/app/login', data: data, method: 'post' });};\n// 2.注册\nexports.login = login;var register = function register(data) {return (0, _request.request1)({ url: '/registered', data: data, method: 'post' });};\n// 退出登录\nexports.register = register;var logout = function logout() {return (0, _request.request1)({ url: '/logout', method: 'post' });};\n\n// 历史会议记录\n// 1.用户查看会议记录\nexports.logout = logout;var userHistoryConference = function userHistoryConference(data) {return (0, _request.default)({ url: '/sign/userHistoryConference', data: data });};exports.userHistoryConference = userHistoryConference;\nvar userHistoryConferencePull = function userHistoryConferencePull(data) {return (0, _request.request1)({ url: '/sign/userHistoryConference', data: data });};\n// 2.用户查看自己创建的会议信息\nexports.userHistoryConferencePull = userHistoryConferencePull;var oneselfMeeting = function oneselfMeeting(data) {return (0, _request.request1)({ url: '/meeting/oneselfMeeting', data: data });};\n// 2.删除用户指定的历史会议记录\nexports.oneselfMeeting = oneselfMeeting;var removeHistoryConference = function removeHistoryConference(data) {return (0, _request.request1)({ url: '/sign/removeHistoryConference', data: data, method: 'post' });};\n// 3.查看会议信息{id}\nexports.removeHistoryConference = removeHistoryConference;var viewConferenceInformationBasedTheId = function viewConferenceInformationBasedTheId(id) {return (0, _request.default)({ url: '/meeting/viewConferenceInformationBasedTheId/' + id });};\n\n/* 创建与关闭会议 */\n// 1.创建会议\nexports.viewConferenceInformationBasedTheId = viewConferenceInformationBasedTheId;var saveMeeting = function saveMeeting(data) {return (0, _request.default)({ url: '/meeting/saveMeeting', data: data, method: 'post', tip: '创建中...' });};\n// 2.关闭会议\nexports.saveMeeting = saveMeeting;var closeMeeting = function closeMeeting() {return (0, _request.request1)({ url: '/meeting/shutDownMettingByUserName', method: 'post' });};\n\n/** 个人 */\n// 1.获取个人信息\nexports.closeMeeting = closeMeeting;var adminInfo = function adminInfo() {return (0, _request.request1)({ url: '/admin/info' });};\n\n// 2.修改昵称\nexports.adminInfo = adminInfo;var updateNickname = function updateNickname(data) {return (0, _request.request1)({ url: '/user-info/updateNickname', data: data, header: { 'content-type': 'application/x-www-form-urlencoded' }, method: 'post', tip: '修改中...' });};\n// 3.修改用户头像\nexports.updateNickname = updateNickname;var updateUserInfoImages = function updateUserInfoImages(data) {return (0, _request.request1)({ url: '/user-info/updateUserInfoImages', data: data, header: { 'content-type': 'application/x-www-form-urlencoded' }, method: 'post', tip: '修改中...' });};\n\n// 添加参会人\n// 1.参会人列表\nexports.updateUserInfoImages = updateUserInfoImages;var getParticipantsPersonList = function getParticipantsPersonList() {return (0, _request.default)({ url: '/participant-list/getParticipantsPersonList' });};\n// 2.删除参会人\nexports.getParticipantsPersonList = getParticipantsPersonList;var deleteParticipantsPersonList = function deleteParticipantsPersonList(data) {return (0, _request.default)({ url: '/participant-list/deleteParticipantsPersonList', data: data, method: 'post' });};\n// 3. 添加参会人信息\nexports.deleteParticipantsPersonList = deleteParticipantsPersonList;var addOrUpdateParticipantPerson = function addOrUpdateParticipantPerson(data) {return (0, _request.default)({ url: '/participant-list/addOrUpdateParticipantPerson', data: data, method: 'post', tip: '添加中...' });};\n\n// 1.会议号识别会议是否合法流程\nexports.addOrUpdateParticipantPerson = addOrUpdateParticipantPerson;var conferenceIdViewTheConferenceStatus = function conferenceIdViewTheConferenceStatus(data) {return (0, _request.request1)({ url: '/meeting/conferenceIdViewTheConferenceStatus', data: data, header: { 'content-type': 'application/x-www-form-urlencoded' }, method: 'post' });};\n// 2.会议签到\nexports.conferenceIdViewTheConferenceStatus = conferenceIdViewTheConferenceStatus;var faceRecognitionCheck = function faceRecognitionCheck(data) {return (0, _request.request1)({ url: '/sign/faceRecognitionCheck', data: data, header: { 'content-type': 'application/x-www-form-urlencoded' }, method: 'post', tip: '签到中...' });};\n\n// 3.视频会议\nexports.faceRecognitionCheck = faceRecognitionCheck;var joinConference = function joinConference(data) {return (0, _request.request1)({ url: '/meeting/joinConference', data: data });};exports.joinConference = joinConference;\n\nvar getUserInfoById = function getUserInfoById(data) {return (0, _request.request1)({ url: '/user-info/getUserInfoById', data: data });};\n\n// 1.新建日程\nexports.getUserInfoById = getUserInfoById;var addCalendar = function addCalendar(data) {return (0, _request.default)({ url: '/calendar/addCalendar', data: data, method: 'post', tip: '新建中...' });};\n// 1.查看本用户的日程\nexports.addCalendar = addCalendar;var getCalendar = function getCalendar(data) {return (0, _request.default)({ url: '/calendar/getCalendar', data: data });};\n// 2.日程详情\nexports.getCalendar = getCalendar;var getCalendarId = function getCalendarId(id) {return (0, _request.default)({ url: '/calendar/getCalendarId', data: { id: id } });};exports.getCalendarId = getCalendarId;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vYXBpL2luZGV4LmpzIl0sIm5hbWVzIjpbImxvZ2luIiwiZGF0YSIsInVybCIsIm1ldGhvZCIsInJlZ2lzdGVyIiwibG9nb3V0IiwidXNlckhpc3RvcnlDb25mZXJlbmNlIiwidXNlckhpc3RvcnlDb25mZXJlbmNlUHVsbCIsIm9uZXNlbGZNZWV0aW5nIiwicmVtb3ZlSGlzdG9yeUNvbmZlcmVuY2UiLCJ2aWV3Q29uZmVyZW5jZUluZm9ybWF0aW9uQmFzZWRUaGVJZCIsImlkIiwic2F2ZU1lZXRpbmciLCJ0aXAiLCJjbG9zZU1lZXRpbmciLCJhZG1pbkluZm8iLCJ1cGRhdGVOaWNrbmFtZSIsImhlYWRlciIsInVwZGF0ZVVzZXJJbmZvSW1hZ2VzIiwiZ2V0UGFydGljaXBhbnRzUGVyc29uTGlzdCIsImRlbGV0ZVBhcnRpY2lwYW50c1BlcnNvbkxpc3QiLCJhZGRPclVwZGF0ZVBhcnRpY2lwYW50UGVyc29uIiwiY29uZmVyZW5jZUlkVmlld1RoZUNvbmZlcmVuY2VTdGF0dXMiLCJmYWNlUmVjb2duaXRpb25DaGVjayIsImpvaW5Db25mZXJlbmNlIiwiZ2V0VXNlckluZm9CeUlkIiwiYWRkQ2FsZW5kYXIiLCJnZXRDYWxlbmRhciIsImdldENhbGVuZGFySWQiXSwibWFwcGluZ3MiOiJxdEJBQUEsb0Y7O0FBRUE7QUFDTyxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxJQUFELFVBQVUsdUJBQVMsRUFBQ0MsR0FBRyxFQUFFLFlBQU4sRUFBb0JELElBQUksRUFBSkEsSUFBcEIsRUFBMEJFLE1BQU0sRUFBRSxNQUFsQyxFQUFULENBQVYsRUFBZDtBQUNQO3NCQUNPLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNILElBQUQsVUFBVSx1QkFBUyxFQUFDQyxHQUFHLEVBQUUsYUFBTixFQUFxQkQsSUFBSSxFQUFKQSxJQUFyQixFQUEyQkUsTUFBTSxFQUFFLE1BQW5DLEVBQVQsQ0FBVixFQUFqQjtBQUNQOzRCQUNPLElBQU1FLE1BQU0sR0FBRyxTQUFUQSxNQUFTLFdBQU0sdUJBQVMsRUFBQ0gsR0FBRyxFQUFFLFNBQU4sRUFBaUJDLE1BQU0sRUFBRSxNQUF6QixFQUFULENBQU4sRUFBZjs7QUFFUDtBQUNBO3dCQUNPLElBQU1HLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsQ0FBQ0wsSUFBRCxVQUFVLHNCQUFRLEVBQUNDLEdBQUcsRUFBRSw2QkFBTixFQUFxQ0QsSUFBSSxFQUFKQSxJQUFyQyxFQUFSLENBQVYsRUFBOUIsQztBQUNBLElBQU1NLHlCQUF5QixHQUFHLFNBQTVCQSx5QkFBNEIsQ0FBQ04sSUFBRCxVQUFVLHVCQUFTLEVBQUNDLEdBQUcsRUFBRSw2QkFBTixFQUFxQ0QsSUFBSSxFQUFKQSxJQUFyQyxFQUFULENBQVYsRUFBbEM7QUFDUDs4REFDTyxJQUFNTyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNQLElBQUQsVUFBVSx1QkFBUyxFQUFDQyxHQUFHLEVBQUUseUJBQU4sRUFBaUNELElBQUksRUFBSkEsSUFBakMsRUFBVCxDQUFWLEVBQXZCO0FBQ1A7d0NBQ08sSUFBTVEsdUJBQXVCLEdBQUcsU0FBMUJBLHVCQUEwQixDQUFBUixJQUFJLFVBQUksdUJBQVMsRUFBQ0MsR0FBRyxFQUFFLCtCQUFOLEVBQXVDRCxJQUFJLEVBQUpBLElBQXZDLEVBQTZDRSxNQUFNLEVBQUUsTUFBckQsRUFBVCxDQUFKLEVBQXBDO0FBQ1A7MERBQ08sSUFBTU8sbUNBQW1DLEdBQUcsU0FBdENBLG1DQUFzQyxDQUFBQyxFQUFFLFVBQUksc0JBQVEsRUFBQ1QsR0FBRyxFQUFFLGtEQUFrRFMsRUFBeEQsRUFBUixDQUFKLEVBQTlDOztBQUVQO0FBQ0E7a0ZBQ08sSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQVgsSUFBSSxVQUFJLHNCQUFRLEVBQUNDLEdBQUcsRUFBRSxzQkFBTixFQUE4QkQsSUFBSSxFQUFKQSxJQUE5QixFQUFvQ0UsTUFBTSxFQUFFLE1BQTVDLEVBQW9EVSxHQUFHLEVBQUUsUUFBekQsRUFBUixDQUFKLEVBQXhCO0FBQ1A7a0NBQ08sSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsV0FBTSx1QkFBUyxFQUFDWixHQUFHLEVBQUUsb0NBQU4sRUFBNENDLE1BQU0sRUFBRSxNQUFwRCxFQUFULENBQU4sRUFBckI7O0FBRVA7QUFDQTtvQ0FDTyxJQUFNWSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxXQUFNLHVCQUFTLEVBQUNiLEdBQUcsRUFBRSxhQUFOLEVBQVQsQ0FBTixFQUFsQjs7QUFFUDs4QkFDTyxJQUFNYyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUFmLElBQUksVUFBSSx1QkFBUyxFQUFDQyxHQUFHLEVBQUUsMkJBQU4sRUFBbUNELElBQUksRUFBSkEsSUFBbkMsRUFBeUNnQixNQUFNLEVBQUUsRUFBQyxnQkFBZ0IsbUNBQWpCLEVBQWpELEVBQXdHZCxNQUFNLEVBQUUsTUFBaEgsRUFBd0hVLEdBQUcsRUFBRSxRQUE3SCxFQUFULENBQUosRUFBM0I7QUFDUDt3Q0FDTyxJQUFNSyxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLENBQUFqQixJQUFJLFVBQUksdUJBQVMsRUFBQ0MsR0FBRyxFQUFFLGlDQUFOLEVBQXlDRCxJQUFJLEVBQUpBLElBQXpDLEVBQStDZ0IsTUFBTSxFQUFFLEVBQUMsZ0JBQWdCLG1DQUFqQixFQUF2RCxFQUE4R2QsTUFBTSxFQUFFLE1BQXRILEVBQThIVSxHQUFHLEVBQUUsUUFBbkksRUFBVCxDQUFKLEVBQWpDOztBQUVQO0FBQ0E7b0RBQ08sSUFBTU0seUJBQXlCLEdBQUcsU0FBNUJBLHlCQUE0QixXQUFNLHNCQUFRLEVBQUNqQixHQUFHLEVBQUUsNkNBQU4sRUFBUixDQUFOLEVBQWxDO0FBQ1A7OERBQ08sSUFBTWtCLDRCQUE0QixHQUFHLFNBQS9CQSw0QkFBK0IsQ0FBQW5CLElBQUksVUFBSSxzQkFBUSxFQUFDQyxHQUFHLEVBQUUsZ0RBQU4sRUFBd0RELElBQUksRUFBSkEsSUFBeEQsRUFBOERFLE1BQU0sRUFBRSxNQUF0RSxFQUFSLENBQUosRUFBekM7QUFDUDtvRUFDTyxJQUFNa0IsNEJBQTRCLEdBQUcsU0FBL0JBLDRCQUErQixDQUFBcEIsSUFBSSxVQUFJLHNCQUFRLEVBQUNDLEdBQUcsRUFBRSxnREFBTixFQUF3REQsSUFBSSxFQUFKQSxJQUF4RCxFQUE4REUsTUFBTSxFQUFFLE1BQXRFLEVBQThFVSxHQUFHLEVBQUUsUUFBbkYsRUFBUixDQUFKLEVBQXpDOztBQUVQO29FQUNPLElBQU1TLG1DQUFtQyxHQUFHLFNBQXRDQSxtQ0FBc0MsQ0FBQXJCLElBQUksVUFBSSx1QkFBUyxFQUFDQyxHQUFHLEVBQUUsOENBQU4sRUFBc0RELElBQUksRUFBSkEsSUFBdEQsRUFBNERnQixNQUFNLEVBQUUsRUFBQyxnQkFBZ0IsbUNBQWpCLEVBQXBFLEVBQTJIZCxNQUFNLEVBQUUsTUFBbkksRUFBVCxDQUFKLEVBQWhEO0FBQ1A7a0ZBQ08sSUFBTW9CLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsQ0FBQXRCLElBQUksVUFBSSx1QkFBUyxFQUFDQyxHQUFHLEVBQUUsNEJBQU4sRUFBb0NELElBQUksRUFBSkEsSUFBcEMsRUFBMENnQixNQUFNLEVBQUUsRUFBQyxnQkFBZ0IsbUNBQWpCLEVBQWxELEVBQXlHZCxNQUFNLEVBQUUsTUFBakgsRUFBeUhVLEdBQUcsRUFBRSxRQUE5SCxFQUFULENBQUosRUFBakM7O0FBRVA7b0RBQ08sSUFBTVcsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFBdkIsSUFBSSxVQUFJLHVCQUFTLEVBQUNDLEdBQUcsRUFBRSx5QkFBTixFQUFpQ0QsSUFBSSxFQUFKQSxJQUFqQyxFQUFULENBQUosRUFBM0IsQzs7QUFFQSxJQUFNd0IsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFBeEIsSUFBSSxVQUFJLHVCQUFTLEVBQUNDLEdBQUcsRUFBRSw0QkFBTixFQUFvQ0QsSUFBSSxFQUFKQSxJQUFwQyxFQUFULENBQUosRUFBNUI7O0FBRVA7MENBQ08sSUFBTXlCLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUF6QixJQUFJLFVBQUksc0JBQVEsRUFBQ0MsR0FBRyxFQUFFLHVCQUFOLEVBQStCRCxJQUFJLEVBQUpBLElBQS9CLEVBQXFDRSxNQUFNLEVBQUUsTUFBN0MsRUFBcURVLEdBQUcsRUFBRSxRQUExRCxFQUFSLENBQUosRUFBeEI7QUFDUDtrQ0FDTyxJQUFNYyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFBMUIsSUFBSSxVQUFJLHNCQUFRLEVBQUNDLEdBQUcsRUFBRSx1QkFBTixFQUErQkQsSUFBSSxFQUFKQSxJQUEvQixFQUFSLENBQUosRUFBeEI7QUFDUDtrQ0FDTyxJQUFNMkIsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFBakIsRUFBRSxVQUFJLHNCQUFRLEVBQUNULEdBQUcsRUFBRSx5QkFBTixFQUFpQ0QsSUFBSSxFQUFFLEVBQUNVLEVBQUUsRUFBRkEsRUFBRCxFQUF2QyxFQUFSLENBQUosRUFBeEIsQyIsImZpbGUiOiI2MS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZXF1ZXN0LCB7IHJlcXVlc3QxIH0gZnJvbSBcIi4vcmVxdWVzdC5qc1wiXHJcblxyXG4vLyAxLueZu+W9lVxyXG5leHBvcnQgY29uc3QgbG9naW4gPSAoZGF0YSkgPT4gcmVxdWVzdDEoe3VybDogJy9hcHAvbG9naW4nLCBkYXRhLCBtZXRob2Q6ICdwb3N0J30pXHJcbi8vIDIu5rOo5YaMXHJcbmV4cG9ydCBjb25zdCByZWdpc3RlciA9IChkYXRhKSA9PiByZXF1ZXN0MSh7dXJsOiAnL3JlZ2lzdGVyZWQnLCBkYXRhLCBtZXRob2Q6ICdwb3N0J30pXHJcbi8vIOmAgOWHuueZu+W9lVxyXG5leHBvcnQgY29uc3QgbG9nb3V0ID0gKCkgPT4gcmVxdWVzdDEoe3VybDogJy9sb2dvdXQnLCBtZXRob2Q6ICdwb3N0J30pXHJcblxyXG4vLyDljoblj7LkvJrorq7orrDlvZVcclxuLy8gMS7nlKjmiLfmn6XnnIvkvJrorq7orrDlvZVcclxuZXhwb3J0IGNvbnN0IHVzZXJIaXN0b3J5Q29uZmVyZW5jZSA9IChkYXRhKSA9PiByZXF1ZXN0KHt1cmw6ICcvc2lnbi91c2VySGlzdG9yeUNvbmZlcmVuY2UnLCBkYXRhfSlcclxuZXhwb3J0IGNvbnN0IHVzZXJIaXN0b3J5Q29uZmVyZW5jZVB1bGwgPSAoZGF0YSkgPT4gcmVxdWVzdDEoe3VybDogJy9zaWduL3VzZXJIaXN0b3J5Q29uZmVyZW5jZScsIGRhdGF9KVxyXG4vLyAyLueUqOaIt+afpeeci+iHquW3seWIm+W7uueahOS8muiuruS/oeaBr1xyXG5leHBvcnQgY29uc3Qgb25lc2VsZk1lZXRpbmcgPSAoZGF0YSkgPT4gcmVxdWVzdDEoe3VybDogJy9tZWV0aW5nL29uZXNlbGZNZWV0aW5nJywgZGF0YX0pXHJcbi8vIDIu5Yig6Zmk55So5oi35oyH5a6a55qE5Y6G5Y+y5Lya6K6u6K6w5b2VXHJcbmV4cG9ydCBjb25zdCByZW1vdmVIaXN0b3J5Q29uZmVyZW5jZSA9IGRhdGEgPT4gcmVxdWVzdDEoe3VybDogJy9zaWduL3JlbW92ZUhpc3RvcnlDb25mZXJlbmNlJywgZGF0YSwgbWV0aG9kOiAncG9zdCd9KVxyXG4vLyAzLuafpeeci+S8muiuruS/oeaBr3tpZH1cclxuZXhwb3J0IGNvbnN0IHZpZXdDb25mZXJlbmNlSW5mb3JtYXRpb25CYXNlZFRoZUlkID0gaWQgPT4gcmVxdWVzdCh7dXJsOiAnL21lZXRpbmcvdmlld0NvbmZlcmVuY2VJbmZvcm1hdGlvbkJhc2VkVGhlSWQvJyArIGlkfSlcclxuXHJcbi8qIOWIm+W7uuS4juWFs+mXreS8muiuriAqL1xyXG4vLyAxLuWIm+W7uuS8muiurlxyXG5leHBvcnQgY29uc3Qgc2F2ZU1lZXRpbmcgPSBkYXRhID0+IHJlcXVlc3Qoe3VybDogJy9tZWV0aW5nL3NhdmVNZWV0aW5nJywgZGF0YSwgbWV0aG9kOiAncG9zdCcsIHRpcDogJ+WIm+W7uuS4rS4uLid9KVxyXG4vLyAyLuWFs+mXreS8muiurlxyXG5leHBvcnQgY29uc3QgY2xvc2VNZWV0aW5nID0gKCkgPT4gcmVxdWVzdDEoe3VybDogJy9tZWV0aW5nL3NodXREb3duTWV0dGluZ0J5VXNlck5hbWUnLCBtZXRob2Q6ICdwb3N0J30pXHJcblxyXG4vKiog5Liq5Lq6ICovXHJcbi8vIDEu6I635Y+W5Liq5Lq65L+h5oGvXHJcbmV4cG9ydCBjb25zdCBhZG1pbkluZm8gPSAoKSA9PiByZXF1ZXN0MSh7dXJsOiAnL2FkbWluL2luZm8nfSlcclxuXHJcbi8vIDIu5L+u5pS55pi156ewXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVOaWNrbmFtZSA9IGRhdGEgPT4gcmVxdWVzdDEoe3VybDogJy91c2VyLWluZm8vdXBkYXRlTmlja25hbWUnLCBkYXRhLCBoZWFkZXI6IHsnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCd9LCBtZXRob2Q6ICdwb3N0JywgdGlwOiAn5L+u5pS55LitLi4uJ30pXHJcbi8vIDMu5L+u5pS555So5oi35aS05YOPXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVVc2VySW5mb0ltYWdlcyA9IGRhdGEgPT4gcmVxdWVzdDEoe3VybDogJy91c2VyLWluZm8vdXBkYXRlVXNlckluZm9JbWFnZXMnLCBkYXRhLCBoZWFkZXI6IHsnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCd9LCBtZXRob2Q6ICdwb3N0JywgdGlwOiAn5L+u5pS55LitLi4uJ30pXHJcblxyXG4vLyDmt7vliqDlj4LkvJrkurpcclxuLy8gMS7lj4LkvJrkurrliJfooahcclxuZXhwb3J0IGNvbnN0IGdldFBhcnRpY2lwYW50c1BlcnNvbkxpc3QgPSAoKSA9PiByZXF1ZXN0KHt1cmw6ICcvcGFydGljaXBhbnQtbGlzdC9nZXRQYXJ0aWNpcGFudHNQZXJzb25MaXN0J30pXHJcbi8vIDIu5Yig6Zmk5Y+C5Lya5Lq6XHJcbmV4cG9ydCBjb25zdCBkZWxldGVQYXJ0aWNpcGFudHNQZXJzb25MaXN0ID0gZGF0YSA9PiByZXF1ZXN0KHt1cmw6ICcvcGFydGljaXBhbnQtbGlzdC9kZWxldGVQYXJ0aWNpcGFudHNQZXJzb25MaXN0JywgZGF0YSwgbWV0aG9kOiAncG9zdCd9KVxyXG4vLyAzLiDmt7vliqDlj4LkvJrkurrkv6Hmga9cclxuZXhwb3J0IGNvbnN0IGFkZE9yVXBkYXRlUGFydGljaXBhbnRQZXJzb24gPSBkYXRhID0+IHJlcXVlc3Qoe3VybDogJy9wYXJ0aWNpcGFudC1saXN0L2FkZE9yVXBkYXRlUGFydGljaXBhbnRQZXJzb24nLCBkYXRhLCBtZXRob2Q6ICdwb3N0JywgdGlwOiAn5re75Yqg5LitLi4uJ30pXHJcblxyXG4vLyAxLuS8muiuruWPt+ivhuWIq+S8muiuruaYr+WQpuWQiOazlea1geeoi1xyXG5leHBvcnQgY29uc3QgY29uZmVyZW5jZUlkVmlld1RoZUNvbmZlcmVuY2VTdGF0dXMgPSBkYXRhID0+IHJlcXVlc3QxKHt1cmw6ICcvbWVldGluZy9jb25mZXJlbmNlSWRWaWV3VGhlQ29uZmVyZW5jZVN0YXR1cycsIGRhdGEsIGhlYWRlcjogeydjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ30sIG1ldGhvZDogJ3Bvc3QnfSlcclxuLy8gMi7kvJrorq7nrb7liLBcclxuZXhwb3J0IGNvbnN0IGZhY2VSZWNvZ25pdGlvbkNoZWNrID0gZGF0YSA9PiByZXF1ZXN0MSh7dXJsOiAnL3NpZ24vZmFjZVJlY29nbml0aW9uQ2hlY2snLCBkYXRhLCBoZWFkZXI6IHsnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCd9LCBtZXRob2Q6ICdwb3N0JywgdGlwOiAn562+5Yiw5LitLi4uJ30pXHJcblxyXG4vLyAzLuinhumikeS8muiurlxyXG5leHBvcnQgY29uc3Qgam9pbkNvbmZlcmVuY2UgPSBkYXRhID0+IHJlcXVlc3QxKHt1cmw6ICcvbWVldGluZy9qb2luQ29uZmVyZW5jZScsIGRhdGF9KVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFVzZXJJbmZvQnlJZCA9IGRhdGEgPT4gcmVxdWVzdDEoe3VybDogJy91c2VyLWluZm8vZ2V0VXNlckluZm9CeUlkJywgZGF0YX0pXHJcblxyXG4vLyAxLuaWsOW7uuaXpeeoi1xyXG5leHBvcnQgY29uc3QgYWRkQ2FsZW5kYXIgPSBkYXRhID0+IHJlcXVlc3Qoe3VybDogJy9jYWxlbmRhci9hZGRDYWxlbmRhcicsIGRhdGEsIG1ldGhvZDogJ3Bvc3QnLCB0aXA6ICfmlrDlu7rkuK0uLi4nfSlcclxuLy8gMS7mn6XnnIvmnKznlKjmiLfnmoTml6XnqItcclxuZXhwb3J0IGNvbnN0IGdldENhbGVuZGFyID0gZGF0YSA9PiByZXF1ZXN0KHt1cmw6ICcvY2FsZW5kYXIvZ2V0Q2FsZW5kYXInLCBkYXRhfSlcclxuLy8gMi7ml6XnqIvor6bmg4VcclxuZXhwb3J0IGNvbnN0IGdldENhbGVuZGFySWQgPSBpZCA9PiByZXF1ZXN0KHt1cmw6ICcvY2FsZW5kYXIvZ2V0Q2FsZW5kYXJJZCcsIGRhdGE6IHtpZH19KSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///61\n");

/***/ }),
/* 62 */
/*!*********************************************************************!*\
  !*** D:/WebStudyProject/uniapp-project/meeting-demo/api/request.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = request;exports.request1 = request1;function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var BaseUrl = 'http://101.43.253.100:8082'; // http://223.156.182.181:8082\nvar ajaxTimes = 0;\nfunction request(params) {\n  // 每触发一次请求就加1\n  ajaxTimes++;\n  // 发送请求前先显示加载加载中提示语\n  uni.showLoading({\n    title: params.tip || \"加载中...\",\n    // 显示遮罩\n    mask: true });\n\n  return new Promise(function (resolve, reject) {\n    uni.request({\n      url: BaseUrl + params.url,\n      method: params.method || 'GET',\n      data: params.data || {},\n      header: _objectSpread({\n        Authorization: uni.getStorageSync('token') ? uni.getStorageSync('token') : '' },\n      params.header),\n\n      success: function success(res) {\n        if (res.data.code !== 200) {\n          return uni.showToast({ title: res.data.message, icon: 'none' });\n        }\n        resolve(res.data);\n      },\n      fail: function fail(err) {\n        uni.showToast({ title: '请求接口失败', icon: 'none' });\n        reject(err);\n      },\n      complete: function complete(res) {\n        ajaxTimes--;\n        if (ajaxTimes === 0) {\n          setTimeout(function () {\n            uni.hideLoading();\n          }, 300);\n        }\n      } });\n\n  });\n}\n\nfunction request1(params) {\n  return new Promise(function (resolve, reject) {\n    uni.request({\n      url: BaseUrl + params.url,\n      method: params.method || 'GET',\n      data: params.data || {},\n      header: _objectSpread({\n        Authorization: uni.getStorageSync('token') ? uni.getStorageSync('token') : '' },\n      params.header),\n\n      success: function success(res) {\n        resolve(res.data);\n      },\n      fail: function fail(err) {\n        uni.showToast({ title: '请求接口失败', icon: 'none' });\n        reject(err);\n      } });\n\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vYXBpL3JlcXVlc3QuanMiXSwibmFtZXMiOlsiQmFzZVVybCIsImFqYXhUaW1lcyIsInJlcXVlc3QiLCJwYXJhbXMiLCJ1bmkiLCJzaG93TG9hZGluZyIsInRpdGxlIiwidGlwIiwibWFzayIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidXJsIiwibWV0aG9kIiwiZGF0YSIsImhlYWRlciIsIkF1dGhvcml6YXRpb24iLCJnZXRTdG9yYWdlU3luYyIsInN1Y2Nlc3MiLCJyZXMiLCJjb2RlIiwic2hvd1RvYXN0IiwibWVzc2FnZSIsImljb24iLCJmYWlsIiwiZXJyIiwiY29tcGxldGUiLCJzZXRUaW1lb3V0IiwiaGlkZUxvYWRpbmciLCJyZXF1ZXN0MSJdLCJtYXBwaW5ncyI6IitvQ0FBQSxJQUFNQSxPQUFPLEdBQUcsNEJBQWhCLEMsQ0FBNkM7QUFDN0MsSUFBSUMsU0FBUyxHQUFHLENBQWhCO0FBQ2UsU0FBU0MsT0FBVCxDQUFpQkMsTUFBakIsRUFBeUI7QUFDdkM7QUFDQUYsV0FBUztBQUNUO0FBQ0FHLEtBQUcsQ0FBQ0MsV0FBSixDQUFnQjtBQUNkQyxTQUFLLEVBQUVILE1BQU0sQ0FBQ0ksR0FBUCxJQUFjLFFBRFA7QUFFZDtBQUNBQyxRQUFJLEVBQUUsSUFIUSxFQUFoQjs7QUFLQSxTQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdkNQLE9BQUcsQ0FBQ0YsT0FBSixDQUFZO0FBQ1hVLFNBQUcsRUFBRVosT0FBTyxHQUFHRyxNQUFNLENBQUNTLEdBRFg7QUFFWEMsWUFBTSxFQUFFVixNQUFNLENBQUNVLE1BQVAsSUFBaUIsS0FGZDtBQUdYQyxVQUFJLEVBQUVYLE1BQU0sQ0FBQ1csSUFBUCxJQUFlLEVBSFY7QUFJUkMsWUFBTTtBQUNKQyxxQkFBYSxFQUFFWixHQUFHLENBQUNhLGNBQUosQ0FBbUIsT0FBbkIsSUFBOEJiLEdBQUcsQ0FBQ2EsY0FBSixDQUFtQixPQUFuQixDQUE5QixHQUE0RCxFQUR2RTtBQUVEZCxZQUFNLENBQUNZLE1BRk4sQ0FKRTs7QUFRWEcsYUFSVyxtQkFRSEMsR0FSRyxFQVFFO0FBQ1osWUFBSUEsR0FBRyxDQUFDTCxJQUFKLENBQVNNLElBQVQsS0FBa0IsR0FBdEIsRUFBMkI7QUFDMUIsaUJBQU9oQixHQUFHLENBQUNpQixTQUFKLENBQWMsRUFBQ2YsS0FBSyxFQUFFYSxHQUFHLENBQUNMLElBQUosQ0FBU1EsT0FBakIsRUFBMEJDLElBQUksRUFBRSxNQUFoQyxFQUFkLENBQVA7QUFDQTtBQUNEYixlQUFPLENBQUNTLEdBQUcsQ0FBQ0wsSUFBTCxDQUFQO0FBQ0EsT0FiVTtBQWNYVSxVQWRXLGdCQWNOQyxHQWRNLEVBY0Q7QUFDVHJCLFdBQUcsQ0FBQ2lCLFNBQUosQ0FBYyxFQUFDZixLQUFLLEVBQUUsUUFBUixFQUFrQmlCLElBQUksRUFBRSxNQUF4QixFQUFkO0FBQ0FaLGNBQU0sQ0FBQ2MsR0FBRCxDQUFOO0FBQ0EsT0FqQlU7QUFrQlhDLGNBbEJXLG9CQWtCRlAsR0FsQkUsRUFrQkc7QUFDYmxCLGlCQUFTO0FBQ1QsWUFBSUEsU0FBUyxLQUFLLENBQWxCLEVBQXFCO0FBQ3BCMEIsb0JBQVUsQ0FBQyxZQUFNO0FBQ2hCdkIsZUFBRyxDQUFDd0IsV0FBSjtBQUNBLFdBRlMsRUFFUCxHQUZPLENBQVY7QUFHQTtBQUNELE9BekJVLEVBQVo7O0FBMkJBLEdBNUJNLENBQVA7QUE2QkE7O0FBRU0sU0FBU0MsUUFBVCxDQUFrQjFCLE1BQWxCLEVBQTBCO0FBQ2hDLFNBQU8sSUFBSU0sT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN2Q1AsT0FBRyxDQUFDRixPQUFKLENBQVk7QUFDWFUsU0FBRyxFQUFFWixPQUFPLEdBQUdHLE1BQU0sQ0FBQ1MsR0FEWDtBQUVYQyxZQUFNLEVBQUVWLE1BQU0sQ0FBQ1UsTUFBUCxJQUFpQixLQUZkO0FBR1hDLFVBQUksRUFBRVgsTUFBTSxDQUFDVyxJQUFQLElBQWUsRUFIVjtBQUlSQyxZQUFNO0FBQ0pDLHFCQUFhLEVBQUVaLEdBQUcsQ0FBQ2EsY0FBSixDQUFtQixPQUFuQixJQUE4QmIsR0FBRyxDQUFDYSxjQUFKLENBQW1CLE9BQW5CLENBQTlCLEdBQTRELEVBRHZFO0FBRURkLFlBQU0sQ0FBQ1ksTUFGTixDQUpFOztBQVFYRyxhQVJXLG1CQVFIQyxHQVJHLEVBUUU7QUFDWlQsZUFBTyxDQUFDUyxHQUFHLENBQUNMLElBQUwsQ0FBUDtBQUNBLE9BVlU7QUFXWFUsVUFYVyxnQkFXTkMsR0FYTSxFQVdEO0FBQ1RyQixXQUFHLENBQUNpQixTQUFKLENBQWMsRUFBQ2YsS0FBSyxFQUFFLFFBQVIsRUFBa0JpQixJQUFJLEVBQUUsTUFBeEIsRUFBZDtBQUNBWixjQUFNLENBQUNjLEdBQUQsQ0FBTjtBQUNBLE9BZFUsRUFBWjs7QUFnQkEsR0FqQk0sQ0FBUDtBQWtCQSIsImZpbGUiOiI2Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEJhc2VVcmwgPSAnaHR0cDovLzEwMS40My4yNTMuMTAwOjgwODInIC8vIGh0dHA6Ly8yMjMuMTU2LjE4Mi4xODE6ODA4MlxyXG5sZXQgYWpheFRpbWVzID0gMFxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1ZXN0KHBhcmFtcykge1xyXG5cdC8vIOavj+inpuWPkeS4gOasoeivt+axguWwseWKoDFcclxuXHRhamF4VGltZXMrK1xyXG5cdC8vIOWPkemAgeivt+axguWJjeWFiOaYvuekuuWKoOi9veWKoOi9veS4reaPkOekuuivrVxyXG5cdHVuaS5zaG93TG9hZGluZyh7XHJcblx0ICB0aXRsZTogcGFyYW1zLnRpcCB8fCBcIuWKoOi9veS4rS4uLlwiLFxyXG5cdCAgLy8g5pi+56S66YGu572pXHJcblx0ICBtYXNrOiB0cnVlXHJcblx0fSk7XHJcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdHVuaS5yZXF1ZXN0KHtcclxuXHRcdFx0dXJsOiBCYXNlVXJsICsgcGFyYW1zLnVybCxcclxuXHRcdFx0bWV0aG9kOiBwYXJhbXMubWV0aG9kIHx8ICdHRVQnLFxyXG5cdFx0XHRkYXRhOiBwYXJhbXMuZGF0YSB8fCB7fSxcclxuICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogdW5pLmdldFN0b3JhZ2VTeW5jKCd0b2tlbicpID8gdW5pLmdldFN0b3JhZ2VTeW5jKCd0b2tlbicpIDogJycsXHJcbiAgICAgICAgLi4ucGFyYW1zLmhlYWRlclxyXG4gICAgICB9LFxyXG5cdFx0XHRzdWNjZXNzKHJlcykge1xyXG5cdFx0XHRcdGlmIChyZXMuZGF0YS5jb2RlICE9PSAyMDApIHtcclxuXHRcdFx0XHRcdHJldHVybiB1bmkuc2hvd1RvYXN0KHt0aXRsZTogcmVzLmRhdGEubWVzc2FnZSwgaWNvbjogJ25vbmUnfSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmVzb2x2ZShyZXMuZGF0YSlcclxuXHRcdFx0fSxcclxuXHRcdFx0ZmFpbChlcnIpIHtcclxuXHRcdFx0XHR1bmkuc2hvd1RvYXN0KHt0aXRsZTogJ+ivt+axguaOpeWPo+Wksei0pScsIGljb246ICdub25lJ30pXHJcblx0XHRcdFx0cmVqZWN0KGVycilcclxuXHRcdFx0fSxcclxuXHRcdFx0Y29tcGxldGUocmVzKSB7XHJcblx0XHRcdFx0YWpheFRpbWVzLS1cclxuXHRcdFx0XHRpZiAoYWpheFRpbWVzID09PSAwKSB7XHJcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdFx0dW5pLmhpZGVMb2FkaW5nKClcclxuXHRcdFx0XHRcdH0sIDMwMClcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblx0fSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlcXVlc3QxKHBhcmFtcykge1xyXG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHR1bmkucmVxdWVzdCh7XHJcblx0XHRcdHVybDogQmFzZVVybCArIHBhcmFtcy51cmwsXHJcblx0XHRcdG1ldGhvZDogcGFyYW1zLm1ldGhvZCB8fCAnR0VUJyxcclxuXHRcdFx0ZGF0YTogcGFyYW1zLmRhdGEgfHwge30sXHJcbiAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgIEF1dGhvcml6YXRpb246IHVuaS5nZXRTdG9yYWdlU3luYygndG9rZW4nKSA/IHVuaS5nZXRTdG9yYWdlU3luYygndG9rZW4nKSA6ICcnLFxyXG4gICAgICAgIC4uLnBhcmFtcy5oZWFkZXJcclxuICAgICAgfSxcclxuXHRcdFx0c3VjY2VzcyhyZXMpIHtcclxuXHRcdFx0XHRyZXNvbHZlKHJlcy5kYXRhKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRmYWlsKGVycikge1xyXG5cdFx0XHRcdHVuaS5zaG93VG9hc3Qoe3RpdGxlOiAn6K+35rGC5o6l5Y+j5aSx6LSlJywgaWNvbjogJ25vbmUnfSlcclxuXHRcdFx0XHRyZWplY3QoZXJyKVxyXG5cdFx0XHR9XHJcblx0XHR9KVxyXG5cdH0pXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///62\n");

/***/ }),
/* 63 */
/*!************************************************************************!*\
  !*** D:/WebStudyProject/uniapp-project/meeting-demo/utils/uniAsync.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.showModal = exports.showLoading = exports.showToast = void 0;function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} // 显示消息提示框\nvar showToast = function showToast(params) {\n  return new Promise(function (resolve, reject) {\n    uni.showToast(_objectSpread(_objectSpread({},\n    params), {}, {\n      mask: true,\n      success: function success(res) {\n        resolve(res);\n      },\n      fail: function fail(err) {\n        reject(err);\n      } }));\n\n  });\n};\n// 显示 loading 提示框\nexports.showToast = showToast;var showLoading = function showLoading(params) {\n  return new Promise(function (resolve, reject) {\n    uni.showLoading(_objectSpread(_objectSpread({},\n    params), {}, {\n      success: function success(res) {\n        resolve(res);\n      },\n      fail: function fail(err) {\n        reject(err);\n      } }));\n\n  });\n};\n// 显示 loading 提示框\nexports.showLoading = showLoading;var showModal = function showModal(params) {\n  return new Promise(function (resolve, reject) {\n    uni.showModal(_objectSpread(_objectSpread({},\n    params), {}, {\n      success: function success(res) {\n        resolve(res);\n      },\n      fail: function fail(err) {\n        reject(err);\n      } }));\n\n  });\n};exports.showModal = showModal;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdXRpbHMvdW5pQXN5bmMuanMiXSwibmFtZXMiOlsic2hvd1RvYXN0IiwicGFyYW1zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ1bmkiLCJtYXNrIiwic3VjY2VzcyIsInJlcyIsImZhaWwiLCJlcnIiLCJzaG93TG9hZGluZyIsInNob3dNb2RhbCJdLCJtYXBwaW5ncyI6IitwQ0FBQTtBQUNPLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLE1BQUQsRUFBWTtBQUNwQyxTQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdkNDLE9BQUcsQ0FBQ0wsU0FBSjtBQUNJQyxVQURKO0FBRUNLLFVBQUksRUFBRSxJQUZQO0FBR0NDLGFBSEQsbUJBR1NDLEdBSFQsRUFHYztBQUNaTCxlQUFPLENBQUNLLEdBQUQsQ0FBUDtBQUNBLE9BTEY7QUFNQ0MsVUFORCxnQkFNTUMsR0FOTixFQU1XO0FBQ1ROLGNBQU0sQ0FBQ00sR0FBRCxDQUFOO0FBQ0EsT0FSRjs7QUFVQSxHQVhNLENBQVA7QUFZQSxDQWJNO0FBY1A7OEJBQ08sSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ1YsTUFBRCxFQUFZO0FBQ3RDLFNBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN2Q0MsT0FBRyxDQUFDTSxXQUFKO0FBQ0lWLFVBREo7QUFFQ00sYUFGRCxtQkFFU0MsR0FGVCxFQUVjO0FBQ1pMLGVBQU8sQ0FBQ0ssR0FBRCxDQUFQO0FBQ0EsT0FKRjtBQUtDQyxVQUxELGdCQUtNQyxHQUxOLEVBS1c7QUFDVE4sY0FBTSxDQUFDTSxHQUFELENBQU47QUFDQSxPQVBGOztBQVNBLEdBVk0sQ0FBUDtBQVdBLENBWk07QUFhUDtrQ0FDTyxJQUFNRSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDWCxNQUFELEVBQVk7QUFDcEMsU0FBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3ZDQyxPQUFHLENBQUNPLFNBQUo7QUFDSVgsVUFESjtBQUVDTSxhQUZELG1CQUVTQyxHQUZULEVBRWM7QUFDWkwsZUFBTyxDQUFDSyxHQUFELENBQVA7QUFDQSxPQUpGO0FBS0NDLFVBTEQsZ0JBS01DLEdBTE4sRUFLVztBQUNUTixjQUFNLENBQUNNLEdBQUQsQ0FBTjtBQUNBLE9BUEY7O0FBU0EsR0FWTSxDQUFQO0FBV0EsQ0FaTSxDIiwiZmlsZSI6IjYzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8g5pi+56S65raI5oGv5o+Q56S65qGGXHJcbmV4cG9ydCBjb25zdCBzaG93VG9hc3QgPSAocGFyYW1zKSA9PiB7XHJcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHQuLi5wYXJhbXMsXHJcblx0XHRcdG1hc2s6IHRydWUsXHJcblx0XHRcdHN1Y2Nlc3MocmVzKSB7XHJcblx0XHRcdFx0cmVzb2x2ZShyZXMpXHJcblx0XHRcdH0sXHJcblx0XHRcdGZhaWwoZXJyKSB7XHJcblx0XHRcdFx0cmVqZWN0KGVycilcclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHR9KVxyXG59XHJcbi8vIOaYvuekuiBsb2FkaW5nIOaPkOekuuahhlxyXG5leHBvcnQgY29uc3Qgc2hvd0xvYWRpbmcgPSAocGFyYW1zKSA9PiB7XHJcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdHVuaS5zaG93TG9hZGluZyh7XHJcblx0XHRcdC4uLnBhcmFtcyxcclxuXHRcdFx0c3VjY2VzcyhyZXMpIHtcclxuXHRcdFx0XHRyZXNvbHZlKHJlcylcclxuXHRcdFx0fSxcclxuXHRcdFx0ZmFpbChlcnIpIHtcclxuXHRcdFx0XHRyZWplY3QoZXJyKVxyXG5cdFx0XHR9XHJcblx0XHR9KVxyXG5cdH0pXHJcbn1cclxuLy8g5pi+56S6IGxvYWRpbmcg5o+Q56S65qGGXHJcbmV4cG9ydCBjb25zdCBzaG93TW9kYWwgPSAocGFyYW1zKSA9PiB7XHJcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdHVuaS5zaG93TW9kYWwoe1xyXG5cdFx0XHQuLi5wYXJhbXMsXHJcblx0XHRcdHN1Y2Nlc3MocmVzKSB7XHJcblx0XHRcdFx0cmVzb2x2ZShyZXMpXHJcblx0XHRcdH0sXHJcblx0XHRcdGZhaWwoZXJyKSB7XHJcblx0XHRcdFx0cmVqZWN0KGVycilcclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHR9KVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///63\n");

/***/ }),
/* 64 */
/*!******************************************************************************************************************************************************************!*\
  !*** D:/WebStudyProject/uniapp-project/meeting-demo/pages/meeting-video/meeting-video.nvue?vue&type=style&index=0&id=0b9cafd4&lang=scss&scoped=true&mpType=page ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_meeting_video_nvue_vue_type_style_index_0_id_0b9cafd4_lang_scss_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--10-oneOf-0-2!../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--10-oneOf-0-3!../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-4!../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./meeting-video.nvue?vue&type=style&index=0&id=0b9cafd4&lang=scss&scoped=true&mpType=page */ 65);
/* harmony import */ var _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_meeting_video_nvue_vue_type_style_index_0_id_0b9cafd4_lang_scss_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_meeting_video_nvue_vue_type_style_index_0_id_0b9cafd4_lang_scss_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_meeting_video_nvue_vue_type_style_index_0_id_0b9cafd4_lang_scss_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_meeting_video_nvue_vue_type_style_index_0_id_0b9cafd4_lang_scss_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_meeting_video_nvue_vue_type_style_index_0_id_0b9cafd4_lang_scss_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 65 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/WebStudyProject/uniapp-project/meeting-demo/pages/meeting-video/meeting-video.nvue?vue&type=style&index=0&id=0b9cafd4&lang=scss&scoped=true&mpType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".txt": {
    "": {
      "fontSize": [
        "28rpx",
        0,
        0,
        20
      ],
      "overflow": [
        "hidden",
        0,
        0,
        20
      ],
      "textOverflow": [
        "ellipsis",
        0,
        0,
        20
      ],
      "lines": [
        1,
        0,
        0,
        20
      ],
      "width": [
        "300rpx",
        0,
        0,
        20
      ]
    }
  },
  ".video": {
    "": {
      "position": [
        "relative",
        0,
        0,
        21
      ]
    }
  },
  ".location-none": {
    ".video ": {
      "flex": [
        1,
        0,
        1,
        22
      ],
      "position": [
        "absolute",
        0,
        1,
        22
      ],
      "top": [
        0,
        0,
        1,
        22
      ],
      "left": [
        0,
        0,
        1,
        22
      ],
      "bottom": [
        0,
        0,
        1,
        22
      ],
      "right": [
        0,
        0,
        1,
        22
      ],
      "justifyContent": [
        "center",
        0,
        1,
        22
      ],
      "alignItems": [
        "center",
        0,
        1,
        22
      ]
    }
  },
  ".user-avatar": {
    ".video .location-none ": {
      "width": [
        "80rpx",
        0,
        2,
        23
      ],
      "height": [
        "80rpx",
        0,
        2,
        23
      ],
      "borderRadius": [
        50,
        0,
        2,
        23
      ]
    }
  },
  ".user-name": {
    ".video .location-none ": {
      "marginTop": [
        "10rpx",
        0,
        2,
        24
      ],
      "fontSize": [
        "28rpx",
        0,
        2,
        24
      ]
    }
  },
  ".cur-username": {
    ".video ": {
      "position": [
        "absolute",
        0,
        1,
        25
      ],
      "width": [
        "300rpx",
        0,
        1,
        25
      ],
      "left": [
        0,
        0,
        1,
        25
      ],
      "bottom": [
        0,
        0,
        1,
        25
      ],
      "opacity": [
        0.5,
        0,
        1,
        25
      ],
      "paddingTop": [
        "8rpx",
        0,
        1,
        25
      ],
      "paddingRight": [
        "20rpx",
        0,
        1,
        25
      ],
      "paddingBottom": [
        "8rpx",
        0,
        1,
        25
      ],
      "paddingLeft": [
        "20rpx",
        0,
        1,
        25
      ]
    }
  },
  ".font-color": {
    "": {
      "color": [
        "#ffffff",
        0,
        0,
        26
      ]
    },
    ".top-bar .end-btn>": {
      "fontSize": [
        "26rpx",
        0,
        2,
        29
      ],
      "color": [
        "#FF0000",
        0,
        2,
        29
      ]
    }
  },
  ".top-bar": {
    "": {
      "flexDirection": [
        "row",
        0,
        0,
        27
      ],
      "paddingTop": [
        0,
        0,
        0,
        27
      ],
      "paddingRight": [
        "30rpx",
        0,
        0,
        27
      ],
      "paddingBottom": [
        0,
        0,
        0,
        27
      ],
      "paddingLeft": [
        "30rpx",
        0,
        0,
        27
      ],
      "justifyContent": [
        "flex-end",
        0,
        0,
        27
      ],
      "alignItems": [
        "center",
        0,
        0,
        27
      ]
    }
  },
  ".bar-title": {
    ".top-bar ": {
      "flex": [
        1,
        0,
        1,
        28
      ],
      "alignItems": [
        "center",
        0,
        1,
        28
      ]
    }
  },
  ".video_local": {
    "": {
      "flex": [
        1,
        0,
        0,
        31
      ]
    }
  },
  ".canvasView": {
    "": {
      "flexWrap": [
        "wrap",
        0,
        0,
        32
      ],
      "flexDirection": [
        "row",
        0,
        0,
        32
      ]
    }
  },
  ".video_local_1": {
    "": {
      "width": [
        "375rpx",
        0,
        0,
        34
      ],
      "height": [
        "420rpx",
        0,
        0,
        34
      ]
    }
  },
  ".btm-tools": {
    "": {
      "position": [
        "fixed",
        0,
        0,
        36
      ],
      "bottom": [
        0,
        0,
        0,
        36
      ],
      "paddingTop": [
        "10rpx",
        0,
        0,
        36
      ],
      "paddingRight": [
        "30rpx",
        0,
        0,
        36
      ],
      "paddingBottom": [
        "10rpx",
        0,
        0,
        36
      ],
      "paddingLeft": [
        "30rpx",
        0,
        0,
        36
      ],
      "width": [
        100,
        0,
        0,
        36
      ],
      "backgroundColor": [
        "#000000",
        0,
        0,
        36
      ],
      "flexDirection": [
        "column",
        0,
        0,
        36
      ],
      "justifyContent": [
        "space-between",
        0,
        0,
        36
      ]
    }
  },
  ".icon": {
    ".btm-tools ": {
      "justifyContent": [
        "center",
        0,
        1,
        37
      ],
      "alignItems": [
        "center",
        0,
        1,
        37
      ]
    }
  },
  ".icon_img": {
    ".btm-tools ": {
      "width": [
        "80rpx",
        0,
        1,
        38
      ],
      "height": [
        "80rpx",
        0,
        1,
        38
      ]
    }
  },
  ".icon_list_img": {
    ".btm-tools ": {
      "width": [
        "60rpx",
        0,
        1,
        39
      ],
      "height": [
        "60rpx",
        0,
        1,
        39
      ]
    }
  },
  ".icon_text": {
    ".btm-tools ": {
      "fontSize": [
        "28rpx",
        0,
        1,
        40
      ],
      "color": [
        "#ffffff",
        0,
        1,
        40
      ]
    }
  },
  ".participant-title": {
    ".popup-content ": {
      "flexDirection": [
        "row",
        0,
        1,
        41
      ],
      "justifyContent": [
        "flex-end",
        0,
        1,
        41
      ],
      "paddingTop": [
        "20rpx",
        0,
        1,
        41
      ],
      "paddingRight": [
        "30rpx",
        0,
        1,
        41
      ],
      "paddingBottom": [
        "20rpx",
        0,
        1,
        41
      ],
      "paddingLeft": [
        "30rpx",
        0,
        1,
        41
      ]
    }
  },
  ".title": {
    ".popup-content .participant-title ": {
      "flex": [
        1,
        0,
        2,
        42
      ],
      "alignItems": [
        "center",
        0,
        2,
        42
      ]
    }
  },
  ".title-txt": {
    ".popup-content .participant-title .title ": {
      "fontSize": [
        "32rpx",
        0,
        3,
        43
      ]
    }
  },
  ".chat-custom-right": {
    ".popup-content ": {
      "alignItems": [
        "center",
        0,
        1,
        44
      ],
      "width": [
        "50rpx",
        0,
        1,
        44
      ],
      "height": [
        "50rpx",
        0,
        1,
        44
      ]
    }
  },
  ".is_video-img": {
    ".popup-content .chat-custom-right ": {
      "height": [
        "50rpx",
        0,
        2,
        45
      ]
    }
  },
  "@VERSION": 2
}

/***/ })
/******/ ]);