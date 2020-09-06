"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var defaultProps = {
  tag: 'div'
};

var Header = function Header(_ref) {
  var children = _ref.children,
      className = _ref.className,
      Tag = _ref.tag,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["children", "className", "tag"]);
  return /*#__PURE__*/_react.default.createElement(Tag, (0, _extends2.default)({
    className: (0, _classnames.default)('header', className)
  }, rest), children);
};

Header.defaultProps = defaultProps;
var _default = Header;
exports.default = _default;