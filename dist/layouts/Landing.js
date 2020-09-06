"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Main = _interopRequireDefault(require("../components/Main"));

var Landing = function Landing(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react.default.createElement(_Main.default, null, children);
};

Landing.propTypes = {
  children: _propTypes.default.element.isRequired
};
var _default = Landing;
exports.default = _default;