webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/Divider/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.jsx");
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/PostCard */ "./components/PostCard.jsx");
/* harmony import */ var _components_Category__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Category */ "./components/Category.jsx");
/* harmony import */ var _components_PageButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/PageButton */ "./components/PageButton.jsx");
/* harmony import */ var _data_posts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../data/posts */ "./data/posts.js");












var MainPage = function MainPage(_ref) {
  var _ref$data = _ref.data,
      data = _ref$data === void 0 ? [] : _ref$data,
      classes = _ref.classes;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      categoryList = _useState2[0],
      setCategoryList = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('all'),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      category = _useState4[0],
      setCategory = _useState4[1]; // set category list


  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var list = [{
      name: 'all',
      num: 5
    }, {
      name: 'react',
      num: 1
    }, {
      name: 'node',
      num: 2
    }, {
      name: 'javascript',
      num: 4
    }, {
      name: 'd3',
      num: 2
    }];
    setCategoryList(list);
  }, []); // change category
  // useEffect(() => {
  //   if (category === 'all') {
  //     setPosts([]);
  //   } else {
  //     setPosts([]);
  //   }
  // }, [category]);

  var changeCategory = function changeCategory(category) {
    tween({
      from: window.scrollY,
      to: 0,
      ease: easing.easeOut
    }).start({
      update: function update(v) {
        window.scrollTo(0, v);
      },
      complete: function complete() {
        setCategory(category);
      }
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.container,
    container: true,
    wrap: "nowrap"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.left,
    item: true
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.posts,
    item: true
  }, _data_posts__WEBPACK_IMPORTED_MODULE_10__["default"].filter(function (o) {
    return o.published;
  }).slice(0, 7).map(function (_ref2) {
    var id = _ref2.id,
        thumb = _ref2.thumb,
        title = _ref2.title,
        tags = _ref2.tags,
        date = _ref2.date,
        subTitle = _ref2.subTitle,
        slug = _ref2.slug;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_PostCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: slug,
      id: id,
      data: {
        thumb: thumb,
        title: title,
        tags: tags,
        slug: slug,
        date: date,
        subTitle: subTitle
      },
      changeCategory: changeCategory
    });
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_5___default.a, {
    light: true
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_PageButton__WEBPACK_IMPORTED_MODULE_9__["default"], null)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.right,
    item: true
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Category__WEBPACK_IMPORTED_MODULE_8__["default"], {
    changeCategory: changeCategory,
    categoryList: categoryList
  })))));
};

var styles = function styles(theme) {
  var _left, _right;

  return {
    container: {
      justifyContent: 'center'
    },
    left: (_left = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_left, theme.breakpoints.up('lg'), {
      width: '75%'
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_left, "padding", '0px 32px'), _left),
    posts: {
      minHeight: 400
    },
    right: (_right = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_right, theme.breakpoints.down('md'), {
      display: 'none'
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_right, theme.breakpoints.up('md'), {
      display: 'block',
      width: '25%'
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_right, "padding", '24px 24px'), _right)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles)(MainPage));

/***/ })

})
//# sourceMappingURL=index.js.5cfc8d7deb72e742fed1.hot-update.js.map