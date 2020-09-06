"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Wrapper = _interopRequireDefault(require("../components/Wrapper"));

var _Sidebar = _interopRequireDefault(require("../components/Sidebar"));

var _Main = _interopRequireDefault(require("../components/Main"));

var _Navbar = _interopRequireDefault(require("../components/Navbar"));

var _Content = _interopRequireDefault(require("../components/Content"));

var _Footer = _interopRequireDefault(require("../components/Footer"));

var Dashboard = function Dashboard(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react.default.createElement(_Wrapper.default, null, /*#__PURE__*/_react.default.createElement(_Sidebar.default, null), /*#__PURE__*/_react.default.createElement(_Main.default, null, /*#__PURE__*/_react.default.createElement(_Navbar.default, null), /*#__PURE__*/_react.default.createElement(_Content.default, null, children), /*#__PURE__*/_react.default.createElement(_Footer.default, null)));
};

Dashboard.propTypes = {
  children: _propTypes.default.element.isRequired
};

var _default = (0, _reactRedux.connect)(function () {
  return {};
})(Dashboard);

exports.default = _default;