webpackHotUpdate("static/development/pages/posts/three-ways-to-remove-array-duplicates.js",{

/***/ "./pages/posts/three-ways-to-remove-array-duplicates.mdx":
/*!***************************************************************!*\
  !*** ./pages/posts/three-ways-to-remove-array-duplicates.mdx ***!
  \***************************************************************/
/*! exports provided: frontMatter, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frontMatter", function() { return frontMatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/index.es.js");
/* harmony import */ var _components_Post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Post */ "./components/Post.jsx");



/* @jsx mdx */


/* @jsx mdx */


var frontMatter = {
  slug: '/three-ways-to-remove-array-duplicates',
  title: '数组去重的三种方式',
  subTitle: '这是三种过滤数组中的重复元素，并返回只包含唯一变量的方法，我个人偏向于使用 filter，它在性能方面更占优势。',
  tags: ['javascript'],
  date: '2019/03/12',
  published: false
};

var makeShortcode = function makeShortcode(name) {
  return function MDXDefaultShortcode(props) {
    console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
    return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", props);
  };
};

var layoutProps = {
  frontMatter: frontMatter
};

var MDXLayout = function MDXLayout(_ref) {
  var children = _ref.children;
  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_Post__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: frontMatter
  }, children);
};

function MDXContent(_ref2) {
  var components = _ref2.components,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(MDXLayout, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h1", null, "\u6570\u7EC4\u53BB\u91CD\u7684\u4E09\u79CD\u65B9\u5F0F"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u8FD9\u662F\u6570\u7EC4\u53BB\u91CD\u7684\u4E09\u79CD\u65B9\u5F0F\uFF0C\u6211\u4E2A\u4EBA\u504F\u5411\u4E8E\u4F7F\u7528 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "filter"), " \u7684\u65B9\u5F0F\uFF0C\u5B83\u5728\u6027\u80FD\u65B9\u9762\u66F4\u5360\u4F18\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-js"
  }), "const array = ['sheep', 1, 2, 'sheep', 'sheep', 3];\n\n// 1.Set\n[...new Set(array)];\n\n// 2.filter\narray.filter((o, index) => array.indexOf(o) === index);\n\n// 3.reduce\narray.reduce((result, current) => {\n  return result.indexOf(current) < 0 ? result.concat([current]) : result;\n}, []);\n\n// ['sheep', 1, 2, 3]\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", null, "1.\u4F7F\u7528 Set"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u5148\u89E3\u91CA\u4E00\u4E0B\u4EC0\u4E48\u662F Set"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("blockquote", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    parentName: "blockquote"
  }, "Set \u662F ES6 \u65B0\u589E\u7684\u4E00\u79CD\u6570\u636E\u5BF9\u8C61\uFF0C\u53EA\u5141\u8BB8\u4FDD\u5B58\u552F\u4E00\u53D8\u91CF\uFF0C\u5F53\u4F60\u5C06\u5B83\u4F20\u5165\u4E00\u4E2A\u6570\u7EC4\u65F6\uFF0C\u5B83\u4F1A\u79FB\u9664\u6240\u6709\u91CD\u590D\u7684\u53D8\u91CF\u3002")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u4F7F\u7528 Set \u53BB\u9664\u91CD\u590D\u53D8\u91CF\u5206\u4E3A\u4E24\u6B65"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ol", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ol"
  }, "\u9996\u5148\u521B\u5EFA\u4E00\u4E2A Set \uFF0C\u5E76\u4F20\u5165\u4E00\u4E2A\u6570\u7EC4\uFF0C\u7531\u4E8E Set \u53EA\u5141\u8BB8\u552F\u4E00\u53D8\u91CF\uFF0C\u6240\u6709\u7684\u91CD\u590D\u9879\u90FD\u4F1A\u88AB\u79FB\u9664\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ol"
  }, "\u73B0\u5728\u6240\u6709\u91CD\u590D\u6027\u90FD\u88AB\u79FB\u9664\u4E86\uFF0C\u63A5\u7740\u4F7F\u7528\u5C55\u5F00\u8FD0\u7B97\u7B26 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li"
  }, "..."), " \u5C06 Set \u8F6C\u6362\u4F1A\u6570\u7EC4\u3002")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-js"
  }), "const array = ['sheep', 1, 2, 'sheep', 'sheep', 3];\n\n// \u7B2C\u4E00\u6B65\nconst uniqueSet = new Set(array);\n// Set { 'sheep', 1, 2, 3 }\n\n// \u7B2C\u4E8C\u6B65\nconst backToArray = [...uniqueSet];\n// ['sheep', 1, 2, 3]\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", null, "2.\u4F7F\u7528 filter"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u4E3A\u4E86\u7406\u89E3\u8FD9\u79CD\u65B9\u5F0F\uFF0C\u5148\u8981\u4E86\u89E3\u8FD9\u4E24\u4E2A\u65B9\u6CD5 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "indexOf"), " \u548C ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "filter"), "\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", null, "indexOf"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "indexOf \u65B9\u6CD5\u4F1A\u6839\u636E\u6240\u63D0\u4F9B\u7684\u5143\u7D20\u8FD4\u56DE\u6570\u7EC4\u4E2D\u7B2C\u4E00\u4E2A\u88AB\u627E\u5230\u76F8\u540C\u5143\u7D20\u7684\u4E0B\u6807"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-js"
  }), "const array = ['sheep', 1, 2, 'sheep', 'sheep', 3];\n\narray.indexOf('sheep'); // 0\narray.indexOf(1); // 1\narray.indexOf(2); // 2\narray.indexOf(3); // 5\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", null, "filter"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "filter"), " \u65B9\u6CD5\u4F1A\u6839\u636E\u6211\u4EEC\u7ED9\u5B9A\u7684\u6761\u4EF6\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684\u6570\u7EC4\u3002\u6362\u53E5\u8BDD\u8BF4\u5C31\u662F\uFF0C\u5982\u679C\u5143\u7D20\u901A\u8FC7\n\u6761\u4EF6\u8FD4\u56DE ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "true"), "\uFF0C\u5B83\u5C31\u4F1A\u88AB\u5305\u542B\u5728\u8FC7\u6EE4\u540E\u7684\u6570\u7EC4\u4E2D\uFF0C\u8FD4\u56DE ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "false"), " \u5C31\u4E0D\u4F1A\u5305\u542B\u5728\u65B0\u7684\n\u6570\u7EC4\u4E2D\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", null, "\u8FC7\u6EE4\u91CD\u590D\u9879"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "filter"), " \u65B9\u6CD5\u68C0\u7D22\u91CD\u590D\u9879\u5E76\u5254\u9664\u5B83\u4EEC\uFF0C\u53EA\u9700\u8981\u5C06\u8FC7\u6EE4\u6761\u4EF6\u8BBE\u7F6E\u4E3A\uFF1A"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-js"
  }), "const array = ['sheep', 1, 2, 'sheep', 'sheep', 3];\n\narray.filter((o, index) => array.indexOf(o) === index);\n// ['sheep', 1, 2, 3]\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", null, "3.\u4F7F\u7528 reduce"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "reduce"), " \u65B9\u6CD5\u4F1A\u6839\u636E\u4F20\u5165\u7684 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "reducer"), " \u51FD\u6570\u91CD\u7EC4\u6570\u7EC4\u5185\u7684\u5143\u7D20\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u4E3A\u4E86\u8FBE\u5230\u6211\u4EEC\u7684\u76EE\u6807\uFF0C\u6211\u4EEC\u7684 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "reducer"), " \u51FD\u6570\u9700\u8981\u68C0\u67E5\u6700\u7EC8\u7684\u6570\u7EC4\u4E2D\u662F\u5426\u5DF2\u7ECF\u5305\u542B\u4E86\u5F53\u524D\u5143\u7D20\uFF0C\u5982\u679C\u6CA1\u6709\u5C31\u52A0\u5165\uFF0C\n\u5426\u5219\u8DF3\u8FC7\u5F53\u524D\u5143\u7D20\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-js"
  }), "const array = ['sheep', 1, 2, 'sheep', 'sheep', 3];\n\narray.reduce((result, current) => {\n  return result.indexOf(current) < 0 ? result.concat([current]) : result;\n}, []);\n// ['sheep', 1, 2, 3]\n")));
}
MDXContent.isMDXComponent = true;

/***/ })

})
//# sourceMappingURL=three-ways-to-remove-array-duplicates.js.b39edbff8c93de185469.hot-update.js.map