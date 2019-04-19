webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/PostCard.jsx":
/*!*********************************!*\
  !*** ./components/PostCard.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/Card/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.es.js");
/* harmony import */ var _material_ui_icons_CalendarTodayOutlined__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/CalendarTodayOutlined */ "./node_modules/@material-ui/icons/CalendarTodayOutlined.js");
/* harmony import */ var _material_ui_icons_CalendarTodayOutlined__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CalendarTodayOutlined__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/Link/index.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);












var PostCard = function PostCard(_ref) {
  var classes = _ref.classes,
      _ref$data = _ref.data,
      title = _ref$data.title,
      date = _ref$data.date,
      tags = _ref$data.tags,
      slug = _ref$data.slug,
      subTitle = _ref$data.subTitle,
      changeCategory = _ref.changeCategory;

  var toPost = function toPost() {
    next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push(slug);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3___default.a, {
    elevation: 0,
    className: classes.card
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    onClick: toPost,
    src: "static/".concat(slug, "/thumb.jpg"),
    className: classes.cardActionArea
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.cardContent
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    onClick: toPost,
    className: classes.title,
    style: {
      color: '#555555'
    },
    variant: "h5"
  }, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    style: {
      fontSize: '0.8em',
      padding: '8px 0px',
      color: '#999999'
    },
    container: true,
    justify: "space-between"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    item: true
  }, "IN", ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    onClick: function onClick() {
      return changeCategory(tags[0] || '');
    },
    className: classes.category
  }, tags[0].toUpperCase() || '')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    item: true
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    container: true,
    alignItems: "center"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_CalendarTodayOutlined__WEBPACK_IMPORTED_MODULE_8___default.a, {
    style: {
      width: '0.6em',
      marginRight: 8
    }
  }), date))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
    className: classes.subTitle,
    component: "p"
  }, subTitle), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    color: "primary",
    className: classes.readButton,
    onClick: toPost,
    variant: "outlined"
  }, "Read")));
};

var styles = function styles(theme) {
  var _card, _cardContent, _cardActionArea;

  return {
    subTitle: {
      fontWeight: 300
    },
    card: (_card = {
      background: 'none',
      display: 'flex',
      width: '100%',
      marginTop: 40,
      marginBottom: 60
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_card, theme.breakpoints.down('md'), {
      flexDirection: 'column'
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_card, theme.breakpoints.between('md', 'xl'), {
      flexDirection: 'column'
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_card, theme.breakpoints.up('xl'), {
      flexDirection: 'row'
    }), _card),
    cardContent: (_cardContent = {
      padding: 4,
      paddingTop: 0
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_cardContent, theme.breakpoints.only('lg'), {
      width: '100%',
      paddingRight: 2
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_cardContent, theme.breakpoints.up('xl'), {
      width: '66.6666666666%'
    }), _cardContent),
    cardActionArea: (_cardActionArea = {
      cursor: 'pointer',
      transition: 'opacity 0.6s ease',
      '&:hover': {
        opacity: 0.8
      }
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_cardActionArea, theme.breakpoints.down('md'), {
      width: '100%',
      margin: '16px 0px'
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_cardActionArea, theme.breakpoints.between('md', 'xl'), {
      width: '100%',
      margin: '16px 0'
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_cardActionArea, theme.breakpoints.up('xl'), {
      width: '33.333333333%',
      maxHeight: 180,
      margin: '0 16px'
    }), _cardActionArea),
    readButton: {
      marginTop: 12,
      float: 'right',
      borderRadius: '1px'
    },
    title: {
      cursor: 'pointer',
      textUnderlinePosition: 'under',
      '&:hover': {
        color: '#009688 !important'
      }
    },
    category: {
      cursor: 'pointer',
      color: '#009688',
      marginLeft: 4,
      '&:hover': {
        color: '#009688 !important'
      }
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(PostCard));

/***/ })

})
//# sourceMappingURL=index.js.c60f8e138f8fb648c2df.hot-update.js.map