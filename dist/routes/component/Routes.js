"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _index = _interopRequireDefault(require("../index"));

var _History = _interopRequireDefault(require("./History"));

var _Dashboard = _interopRequireDefault(require("../../layouts/Dashboard"));

var _Auth = _interopRequireDefault(require("../../layouts/Auth"));

var _Page = _interopRequireDefault(require("../../layouts/auth/Page404"));

var _ScrollToTop = _interopRequireDefault(require("../../components/ScrollToTop"));

var childRoutes = function childRoutes(Layout, routes) {
  return routes.map(function (_ref, index) {
    var children = _ref.children,
        path = _ref.path,
        Component = _ref.component;
    return children ? // Route item with children
    children.map(function (_ref2, index) {
      var path = _ref2.path,
          Component = _ref2.component;
      return /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
        key: index,
        path: path,
        exact: true,
        render: function render(props) {
          return /*#__PURE__*/_react.default.createElement(Layout, null, /*#__PURE__*/_react.default.createElement(Component, props));
        }
      });
    }) :
    /*#__PURE__*/
    // Route item without children
    _react.default.createElement(_reactRouterDom.Route, {
      key: index,
      path: path,
      exact: true,
      render: function render(props) {
        return /*#__PURE__*/_react.default.createElement(Layout, null, /*#__PURE__*/_react.default.createElement(Component, props));
      }
    });
  });
};

var privateRoute = function privateRoute(_ref3, i) {
  var path = _ref3.path,
      Component = _ref3.component,
      title = _ref3.title;
  return /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    key: i,
    path: path,
    render: function render(props) {
      return /*#__PURE__*/_react.default.createElement(_Dashboard.default, null, /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({}, props, {
        title: title
      })));
    }
  });
};

var Routes = function Routes() {
  return /*#__PURE__*/_react.default.createElement(_reactRouterDom.Router, {
    history: _History.default
  }, /*#__PURE__*/_react.default.createElement(_ScrollToTop.default, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Switch, null, _index.default.map(function (e, i) {
    return privateRoute(e, i);
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    render: function render() {
      return /*#__PURE__*/_react.default.createElement(_Auth.default, null, /*#__PURE__*/_react.default.createElement(_Page.default, null));
    }
  }))));
};

var _default = Routes;
exports.default = _default;