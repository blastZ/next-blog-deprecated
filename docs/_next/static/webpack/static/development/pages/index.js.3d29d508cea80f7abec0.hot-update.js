webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Post.jsx":
/*!*****************************!*\
  !*** ./components/Post.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.jsx");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/index.es.js");
/* harmony import */ var _Highlight__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Highlight */ "./components/Highlight.jsx");







var Title = function Title(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    style: {
      display: 'none'
    }
  }, props.children);
};

var Pre = function Pre(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      backgroundColor: '#2f1d2e',
      padding: 24,
      paddingLeft: 32,
      borderLeft: '5px solid #38bb6c',
      overflowX: 'auto',
      margin: '32px 0px'
    }
  }, props.children);
};

var Code = function Code(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("code", {
    style: {
      padding: 2,
      fontFamily: 'roboto',
      color: props.className ? '#06b6ef' : '#ff5700'
    }
  }, props.children);
};

var components = {
  pre: Pre,
  code: _Highlight__WEBPACK_IMPORTED_MODULE_5__["default"],
  inlineCode: Code,
  h1: Title
};

var Post = function Post(_ref) {
  var _ref$data = _ref.data,
      title = _ref$data.title,
      date = _ref$data.date,
      slug = _ref$data.slug,
      classes = _ref.classes,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["MDXProvider"], {
    components: components
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.container
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: classes.title
  }, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: classes.subTitle
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: classes.date
  }, "".concat(date, " - ")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: classes.editLink,
    href: "https://github.com/blastZ/next-blog/blob/master/pages/posts".concat(slug, ".mdx")
  }, "EDIT THIS POST ON GITHUB")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.content
  }, children))));
};

var styles = function styles(theme) {
  var _container;

  return {
    container: (_container = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_container, theme.breakpoints.down('md'), {
      paddingLeft: 20,
      paddingRight: 20,
      marginLeft: 'auto',
      marginRight: 'auto',
      fontSize: 18
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_container, theme.breakpoints.up('lg'), {
      width: '66.66666667%',
      marginLeft: '16.66666667%'
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_container, "marginTop", 40), _container),
    title: {
      textAlign: 'center'
    },
    subTitle: {
      textAlign: 'center',
      marginTop: 32,
      fontSize: 20
    },
    date: {
      color: '#777'
    },
    editLink: {
      cursor: 'pointer',
      opacity: 0.7,
      '&:hover': {
        opacity: 1,
        color: '#ff5700'
      }
    },
    content: {
      marginTop: 64,
      wordWrap: 'break-word'
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles)(Post));

/***/ })

})
//# sourceMappingURL=index.js.3d29d508cea80f7abec0.hot-update.js.map