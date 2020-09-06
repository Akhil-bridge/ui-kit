"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var Wrapper = function Wrapper(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('wrapper', className)
  }, children);
};

var _default = Wrapper;
exports.default = _default;