"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var Main = function Main(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('main', className)
  }, children);
};

Main.propTypes = {
  className: _propTypes.default.string,
  children: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element, _propTypes.default.node])
};
Main.defaultProps = {
  className: '',
  children: ''
};
var _default = Main;
exports.default = _default;