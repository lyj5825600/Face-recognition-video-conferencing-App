(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/meeting-video/meeting-video"],{

/***/ 176:
/*!***************************************************************************************************************!*\
  !*** D:/WebStudyProject/uniapp-project/meeting-demo/main.js?{"page":"pages%2Fmeeting-video%2Fmeeting-video"} ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 5);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 4));
var _meetingVideo = _interopRequireDefault(__webpack_require__(/*! ./pages/meeting-video/meeting-video.nvue */ 177));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_meetingVideo.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 177:
/*!*********************************************************************************************!*\
  !*** D:/WebStudyProject/uniapp-project/meeting-demo/pages/meeting-video/meeting-video.nvue ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _meeting_video_nvue_vue_type_template_id_dfcbeef8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./meeting-video.nvue?vue&type=template&id=dfcbeef8&scoped=true& */ 178);
/* harmony import */ var _meeting_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./meeting-video.nvue?vue&type=script&lang=js& */ 180);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _meeting_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _meeting_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _meeting_video_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./meeting-video.nvue?vue&type=style&index=0&lang=css& */ 182);
/* harmony import */ var _meeting_video_nvue_vue_type_style_index_1_id_dfcbeef8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./meeting-video.nvue?vue&type=style&index=1&id=dfcbeef8&lang=scss&scoped=true& */ 184);
/* harmony import */ var _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);

var renderjs






/* normalize component */

var component = Object(_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _meeting_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _meeting_video_nvue_vue_type_template_id_dfcbeef8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _meeting_video_nvue_vue_type_template_id_dfcbeef8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "dfcbeef8",
  null,
  false,
  _meeting_video_nvue_vue_type_template_id_dfcbeef8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/meeting-video/meeting-video.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 178:
/*!****************************************************************************************************************************************!*\
  !*** D:/WebStudyProject/uniapp-project/meeting-demo/pages/meeting-video/meeting-video.nvue?vue&type=template&id=dfcbeef8&scoped=true& ***!
  \****************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_meeting_video_nvue_vue_type_template_id_dfcbeef8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./meeting-video.nvue?vue&type=template&id=dfcbeef8&scoped=true& */ 179);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_meeting_video_nvue_vue_type_template_id_dfcbeef8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_meeting_video_nvue_vue_type_template_id_dfcbeef8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_meeting_video_nvue_vue_type_template_id_dfcbeef8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_meeting_video_nvue_vue_type_template_id_dfcbeef8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 179:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/WebStudyProject/uniapp-project/meeting-demo/pages/meeting-video/meeting-video.nvue?vue&type=template&id=dfcbeef8&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    NavTop: function() {
      return Promise.all(/*! import() | components/NavTop/NavTop */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/NavTop/NavTop")]).then(__webpack_require__.bind(null, /*! @/components/NavTop/NavTop.vue */ 186))
    },
    uniPopup: function() {
      return __webpack_require__.e(/*! import() | uni_modules/uni-popup/components/uni-popup/uni-popup */ "uni_modules/uni-popup/components/uni-popup/uni-popup").then(__webpack_require__.bind(null, /*! @/uni_modules/uni-popup/components/uni-popup/uni-popup.vue */ 263))
    },
    uniIcons: function() {
      return Promise.all(/*! import() | uni_modules/uni-icons/components/uni-icons/uni-icons */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uni-icons/components/uni-icons/uni-icons.vue */ 193))
    },
    uniList: function() {
      return __webpack_require__.e(/*! import() | uni_modules/uni-list/components/uni-list/uni-list */ "uni_modules/uni-list/components/uni-list/uni-list").then(__webpack_require__.bind(null, /*! @/uni_modules/uni-list/components/uni-list/uni-list.vue */ 229))
    },
    uniListChat: function() {
      return __webpack_require__.e(/*! import() | uni_modules/uni-list/components/uni-list-chat/uni-list-chat */ "uni_modules/uni-list/components/uni-list-chat/uni-list-chat").then(__webpack_require__.bind(null, /*! @/uni_modules/uni-list/components/uni-list-chat/uni-list-chat.vue */ 277))
    }
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. ????????????????????????????????????")
    console.error(
      "2. ???????????????????????? easycom ??????????????????https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. ?????????????????? easycom ????????????????????????????????? components ??????????????????"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  if (!_vm._isMounted) {
    _vm.e0 = function($event) {
      return _vm.$refs.participantPopup.open("bottom")
    }

    _vm.e1 = function($event) {
      return _vm.$refs.participantPopup.close()
    }
  }
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 180:
/*!**********************************************************************************************************************!*\
  !*** D:/WebStudyProject/uniapp-project/meeting-demo/pages/meeting-video/meeting-video.nvue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_meeting_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./meeting-video.nvue?vue&type=script&lang=js& */ 181);
/* harmony import */ var _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_meeting_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_meeting_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_meeting_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_meeting_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_meeting_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 181:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/WebStudyProject/uniapp-project/meeting-demo/pages/meeting-video/meeting-video.nvue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 13));






























































































































var _vuex = __webpack_require__(/*! vuex */ 18);
var _until = _interopRequireDefault(__webpack_require__(/*! ../../utils/until.js */ 12));
var _index = __webpack_require__(/*! ../../api/index.js */ 19);
var _uniAsync = __webpack_require__(/*! ../../utils/uniAsync.js */ 35);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}var _default =
{
  data: function data() {
    return {
      // appid??????
      appid: '',
      // ?????????
      channel: '',
      // ????????????
      localuid: '',
      // ????????????
      peeridInfo: [],
      // ??????????????????
      remoteLits: [],
      windowWidth: 400,
      windowHeight: 800,
      noSponsor: '', // ???????????????????????????
      checked: true, // ????????????
      // ????????????????????????
      peeridInfoStyle: "video_local",
      // ??????
      originatorUserInfoId: '',
      video: true, // ????????????
      // ??????????????????
      localPerson: {},
      // ?????????
      meetingNumber: '',
      camera: true, // ????????????,
      Speakerphone: false, // ???????????? 
      startTime: '', // ??????????????????
      endTime: '', // ??????????????????,
      downCount: '', // ???????????????
      isMeetingEnd: '', // ??????????????????
      timer: null, // ??????????????????????????????
      timingTimer: null, // ?????????????????????
      timing: 0, // ?????????????????????????????????????????????????????????
      // ???????????????????????????
      page: '' };

  },
  onShow: function onShow() {var _this = this;
    this.timer = setInterval( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var _getApp$downCount, downCount, isEnd;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
              // ?????????
              _getApp$downCount = getApp().downCount(_this.endTime), downCount = _getApp$downCount.downCount, isEnd = _getApp$downCount.isEnd;
              _this.downCount = downCount;
              _this.isMeetingEnd = isEnd;if (!
              isEnd) {_context.next = 13;break;}if (!
              _this.getOriginatorUserOnline()) {_context.next = 8;break;}
              _this.timingTimer = setInterval(function () {
                _this.timing++;
                // ?????????
                var _getApp$downCount2 = getApp().downCount(_this.timing, true),downCount = _getApp$downCount2.downCount;
                _this.downCount = downCount;
                if (!_this.getOriginatorUserOnline()) {
                  _this.destroyRtc();
                  clearInterval(_this.timingTimer);
                  _this.timingTimer = null;
                }
              }, 1000);_context.next = 11;break;case 8:_context.next = 10;return (

                (0, _uniAsync.showToast)({ title: '??????????????????!', icon: 'none', mask: true }));case 10:
              // ?????????????????????,????????????,????????????
              setTimeout(_this.destroyRtc, 1500);case 11:

              // ???????????????
              clearInterval(_this.timer);
              _this.timer = null;case 13:case "end":return _context.stop();}}}, _callee);})),

    1000);
  },
  onHide: function onHide() {
    if (this.timer !== null) clearInterval(this.timer);
    if (this.timingTimer !== null) clearInterval(this.timingTimer);
  },
  onLoad: function onLoad(_ref2) {var meetingNumber = _ref2.meetingNumber,startTime = _ref2.startTime,endTime = _ref2.endTime,_ref2$page = _ref2.page,page = _ref2$page === void 0 ? '' : _ref2$page;
    this.meetingNumber = meetingNumber;
    if (page) this.page = page;
    // ???????????????????????????RTC??????
    this.joinConferenceFun(meetingNumber);
    this.startTime = startTime;
    this.endTime = endTime;
  },
  computed: _objectSpread(_objectSpread(_objectSpread({},
  (0, _vuex.mapState)(['barHeight', 'RtcModule'])),
  (0, _vuex.mapGetters)(['topBarHeight'])), {}, {
    // ???????????????
    participantCount: function participantCount() {
      return this.peeridInfo.length + 1;
    } }),

  watch: {
    peeridInfo: {
      // ??????????????????[????????????]
      deep: true,
      immediate: true,
      handler: function handler(newList, oldList) {
        if (newList.length === 0) {
          this.peeridInfoStyle = 'video_local';
        } else {
          this.peeridInfoStyle = 'video_local_1';
        }
      } } },


  created: function created() {var _this2 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {var oInfo;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return (
                _until.default.getWidthHeight());case 2:oInfo = _context2.sent;
              _this2.windowWidth = oInfo.windowWidth;
              _this2.windowHeight = oInfo.windowHeight;case 5:case "end":return _context2.stop();}}}, _callee2);}))();
  },
  methods: {
    // ??????????????????????????????????????????????????????
    getOriginatorUserOnline: function getOriginatorUserOnline() {var
      peeridInfo = this.peeridInfo,originatorUserInfoId = this.originatorUserInfoId,localuid = this.localuid;
      return peeridInfo.some(function (item) {return item.id == originatorUserInfoId;}) || localuid == originatorUserInfoId;
    },
    // ????????????
    joinConferenceFun: function joinConferenceFun(meetingNumber) {var _this3 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {var _yield$joinConference, res;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.next = 2;return (
                  (0, _index.joinConference)({ meetingNumber: meetingNumber }));case 2:_yield$joinConference = _context3.sent;res = _yield$joinConference.obj;if (!(
                res.originatorUserInfoId != res.participantUserId && _this3.peeridInfo.length == 0)) {_context3.next = 8;break;}
                _this3.noSponsor = '????????????????????????,?????????..';_context3.next = 8;return (
                  (0, _uniAsync.showToast)({ title: _this3.noSponsor, icon: 'none' }));case 8:

                _this3.appid = res.appId;
                _this3.localuid = res.participantUserId;
                _this3.channel = meetingNumber;
                _this3.originatorUserInfoId = res.originatorUserInfoId;
                console.log(JSON.stringify(res), '@#$#@@#$#@');
                _this3.callbackFn();
                _this3.init();
                _this3.enableVideo();
                _this3.join();
                _this3.getUserInfoByIdFun(res.participantUserId, true);case 18:case "end":return _context3.stop();}}}, _callee3);}))();
    },
    // ??????id??????????????????
    getUserInfoByIdFun: function getUserInfoByIdFun(id, local) {var _this4 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5() {var _yield$getUserInfoByI, res;return _regenerator.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:_context5.next = 2;return (
                  (0, _index.getUserInfoById)({ id: id }));case 2:_yield$getUserInfoByI = _context5.sent;res = _yield$getUserInfoByI.obj;
                console.log(JSON.stringify(res));
                if (local) {
                  // ??????[??????] // ??????????????????????????????
                  _this4.localPerson = _objectSpread(_objectSpread({}, res), {}, { videoStatus: true });
                } else {
                  _this4.peeridInfo.push(_objectSpread({
                    uid: id,
                    videoStatus: true },
                  res));

                  console.log(JSON.stringify(_this4.peeridInfo));
                  _this4.$nextTick(function () {
                    var data1 = {
                      remote: _this4.$refs['remote' + id],
                      peerid: id };

                    // ??????????????????
                    if (data1.location) {
                      _this4.location = data1.location;
                      // ??????????????????
                    } else if (data1.peerid && data1.remote) {
                      var oa = _this4.remoteLits.filter(function (item) {
                        return item.peerid == data1.peerid;
                      });
                      if (oa.length == 0) {
                        _this4.remoteLits.push(data1);
                        setTimeout(function () {
                          _this4.remoteLits.map( /*#__PURE__*/function () {var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4(item) {return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:if (!(
                                      item.peerid == data1.peerid)) {_context4.next = 7;break;}
                                      console.log("??????", _this4.channel);
                                      console.log(item.peerid, _this4.remoteLits, _this4.peeridInfo);_context4.next = 5;return (
                                        item.remote[0].setupRemoteVideo({
                                          "uid": item.peerid,
                                          "channelId": _this4.channel,
                                          "renderMode": 1,
                                          "mirrorMode": 0 },
                                        function (res) {
                                          console.log('??????????????????', res);
                                        }));case 5:_context4.next = 7;return (

                                        item.remote[0].startPreview(function (res) {
                                          console.log('??????????????????', res);
                                        }));case 7:case "end":return _context4.stop();}}}, _callee4);}));return function (_x) {return _ref3.apply(this, arguments);};}());


                        }, 500);
                      }
                    }
                  });
                }case 6:case "end":return _context5.stop();}}}, _callee5);}))();
    },
    callbackFn: function callbackFn() {var _this5 = this; // 1
      var that = this;
      this.RtcModule.setCallBack(function (res) {
        switch (res.engineEvent) {
          case "onWarning": //????????????
            console.log('onWarning');
            break;
          case "onError": //????????????
            console.log('onError');
            break;
          case "onJoinChannelSuccess": //??????????????????
            console.log('onJoinChannelSuccess');
            console.log(JSON.stringify(res), '@$@#@$$#@@#onJoinChannelSuccess');
            that.localVideo();
            break;
          case "onLeaveChannel": //??????????????????
            console.log('onLeaveChannel');
            break;
          case "onUserJoined": //???????????????????????????????????????
            console.log('onUserJoined');
            break;
          case "onUserOffline": //???????????????????????????????????????
            console.log('onUserOffline');
            _this5.userOffLine(res);
            break;
          case "onFirstLocalAudioFrame": //??????????????????????????????????????????????????????????????????
            console.log('onFirstLocalAudioFrame');
            break;
          case "onFirstLocalVideoFrame": //?????????????????????????????????????????????????????????????????????
            // this.promptFn("error", "????????????????????????????????????");
            console.log('onFirstLocalVideoFrame');
            break;
          case "onRemoteVideoStateChanged": // ?????????????????????????????????????????????(??????????????????????????? 17 ?????????????????????????????????)???
            console.log("onFirstRemoteVideoDecoded?????????????????????????????????????????????", res);
            that.videoStateChanged(res);
            break;
          case "onFirstRemoteVideoDecoded": //????????????????????????????????????????????????????????????????????????
            console.log('onFirstRemoteVideoDecoded', res);
            // ??????????????????
            that.remotenableVide(res.uid);
            break;}

      });
    },
    destroyRtc: function destroyRtc() {var _this6 = this;
      this.RtcModule.destroyRtc(function (res) {
        console.log("????????????", _this6.page);
        // ?????????????????????????????????????????????????????????????????????
        if (_this6.page == '1') {
          uni.switchTab({
            url: '/pages/index/index' });

        } else {
          // ????????????????????????????????????????????????
          uni.navigateBack({
            delta: 2 });

        }
      });
    },
    // ?????????????????????
    switchCamera: function switchCamera() {
      this.camera = !this.camera;
      this.RtcModule.switchCamera(function (res) {
        console.log('RTC ??????????????? switchCamera ????????????', res.code === 0 ? '??????' : '?????????' + res);
      });
    },
    // ??????????????????
    setEnableSpeakerphone: function setEnableSpeakerphone(fase) {
      var Speakerphone = !fase;
      this.Speakerphone = Speakerphone;
      // ?????????????????????
      this.RtcModule.setEnableSpeakerphone({
        "enabled": Speakerphone },
      function (res) {
        console.log('RTC ???????????????????????????' + (Speakerphone ? '??????' : '??????') + '???????????????', res.code === 0 ? '??????' :
        '?????????' +
        res);
      });
    },
    // ?????????
    init: function init() {var _this7 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6() {return _regenerator.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0: // 2
                console.log(_this7.RtcModule.create);_context6.next = 3;return (
                  _this7.RtcModule.create({
                    //anyRTC ??? App ?????????????????? App ID???
                    "appId": _this7.appid },
                  function (res) {
                    console.log(JSON.stringify(res));
                  }));case 3:case "end":return _context6.stop();}}}, _callee6);}))();
    },
    enableVideo: function enableVideo() {// 3
      this.RtcModule.enableVideo(function (res) {
        console.log('????????????:' + res.code);
      });
    },
    // ?????????????????????????????????
    userOffLine: function userOffLine(data) {
      if (data) {
        // ?????????????????????????????????
        this.peeridInfo.splice(this.peeridInfo.findIndex(function (item) {return item.uid === data.uid;}), 1);
        // ?????????????????????????????????
        // if (this.liveState) {
        // 	this.liveTranscoFn();
        // }
      }
    },
    // ?????????
    toSpeech: function toSpeech() {
      // ??????????????????
      this.RtcModule.disableVideo(function (res) {
        console.log('RTC ?????????????????? disableVideo ????????????', res.code === 0 ? '??????' : '?????????' +
        res);
      });
    },
    // ??????????????????
    enableLocalAudio: function enableLocalAudio(checked) {
      var checkedAudio = !checked;
      this.checked = checkedAudio;
      this.RtcModule.enableLocalAudio({
        "enabled": checkedAudio },
      function (res) {
        console.log('RTC ??????' + (checkedAudio ? '??????' : '??????'), (res.code === 0 ? '??????' : '?????????') + res);
      });
    },
    remotenableVide: function remotenableVide(data) {var _this8 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee7() {var that, oa;return _regenerator.default.wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:
                that = _this8;if (!
                data) {_context7.next = 9;break;}
                oa = that.peeridInfo.filter(function (item) {
                  return item.uid == data;
                });if (!(
                oa.length == 0)) {_context7.next = 9;break;}if (!(
                _this8.originatorUserInfoId == data)) {_context7.next = 8;break;}
                _this8.noSponsor = '???????????????????????????';_context7.next = 8;return (
                  (0, _uniAsync.showToast)({ title: _this8.noSponsor, icon: 'none' }));case 8:

                // ????????????????????????????????????
                _this8.getUserInfoByIdFun(data, false);case 9:case "end":return _context7.stop();}}}, _callee7);}))();


    },
    join: function join() {// 4
      // this.localuid = this.randomFn(6)
      this.RtcModule.joinChannel({
        "token": "",
        "channelId": this.channel,
        "uid": this.localuid },
      function (res) {
        console.log('????????????', +res.code == 0 ? '??????' : '??????' + res);
      });
    },
    videoStateChanged: function videoStateChanged(data) {
      if (data) {
        // ??????map?????????????????????????????????????????????????????????,?????????????????????(object)?????????????????????
        this.peeridInfo.map(function (item) {
          if (item.uid == data.uid) {
            // ????????????????????????[reason=5?????????state == 0,???????????????????????????]
            if (data.reason == 5 && data.state == 0) {
              item.videoStatus = false;
              // ????????????????????????[reason=0?????????state == 2,???????????????????????????]
            } else if (data.state == 2 && data.reason == 0) {
              item.videoStatus = true;
            }
          }
        });
      }
    },
    localVideo: function localVideo() {var _this9 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee8() {return _regenerator.default.wrap(function _callee8$(_context8) {while (1) {switch (_context8.prev = _context8.next) {case 0:_context8.next = 2;return (
                  _this9.$refs.location.setupLocalVideo({
                    "renderMode": 1,
                    "channelId": _this9.channel,
                    "uid": _this9.localuid,
                    "mirrorMode": 0 },
                  function (res) {
                    console.log('????????????', res);
                    // ????????????
                    _this9.RtcModule.startPreview(function (res) {
                      console.log('????????????', res);
                    });
                  }));case 2:case "end":return _context8.stop();}}}, _callee8);}))();
    },
    // ????????????????????????
    enableLocalVideo: function enableLocalVideo(checked) {
      var videoChecked = !checked;
      this.video = videoChecked;
      this.$set(this.localPerson, 'videoStatus', videoChecked);
      this.RtcModule.enableLocalVideo({
        "enabled": videoChecked },
      function (res) {
        console.log('RTC ??????' + (videoChecked ? '??????' : '??????'), (res.code === 0 ? '??????' : '?????????') + res);
      });
    },
    // ????????????
    randomFn: function randomFn(len, charSet) {
      charSet = charSet || 'abcdefghijkImnopqrstuvwxyz0123456789';
      var randomString = '';
      for (var i = 0; i < len; i++) {
        var randomPoz = Math.floor(Math.random() * charSet.length);
        randomString = charSet.substring(randomPoz, randomPoz + 1);
      }
      return randomString;
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 182:
/*!******************************************************************************************************************************!*\
  !*** D:/WebStudyProject/uniapp-project/meeting-demo/pages/meeting-video/meeting-video.nvue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_meeting_video_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./meeting-video.nvue?vue&type=style&index=0&lang=css& */ 183);
/* harmony import */ var _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_meeting_video_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_meeting_video_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_meeting_video_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_meeting_video_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_meeting_video_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 183:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/WebStudyProject/uniapp-project/meeting-demo/pages/meeting-video/meeting-video.nvue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 184:
/*!*******************************************************************************************************************************************************!*\
  !*** D:/WebStudyProject/uniapp-project/meeting-demo/pages/meeting-video/meeting-video.nvue?vue&type=style&index=1&id=dfcbeef8&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_meeting_video_nvue_vue_type_style_index_1_id_dfcbeef8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../wz App/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./meeting-video.nvue?vue&type=style&index=1&id=dfcbeef8&lang=scss&scoped=true& */ 185);
/* harmony import */ var _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_meeting_video_nvue_vue_type_style_index_1_id_dfcbeef8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_meeting_video_nvue_vue_type_style_index_1_id_dfcbeef8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_meeting_video_nvue_vue_type_style_index_1_id_dfcbeef8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _wz_App_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_meeting_video_nvue_vue_type_style_index_1_id_dfcbeef8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_wz_App_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_meeting_video_nvue_vue_type_style_index_1_id_dfcbeef8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 185:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/WebStudyProject/uniapp-project/meeting-demo/pages/meeting-video/meeting-video.nvue?vue&type=style&index=1&id=dfcbeef8&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[176,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/meeting-video/meeting-video.js.map