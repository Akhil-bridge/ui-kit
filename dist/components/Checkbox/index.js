"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _reactstrap = require("reactstrap");

require("./_index.scss");

var Checkbox = (0, _react.forwardRef)(function (_ref, ref) {
  var onClick = _ref.onClick,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["onClick"]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "custom-control custom-checkbox"
  }, /*#__PURE__*/_react.default.createElement(_reactstrap.Input, (0, _extends2.default)({
    type: "checkbox",
    className: "custom-control-input",
    ref: ref
  }, rest)), /*#__PURE__*/_react.default.createElement("label", {
    className: "custom-control-label",
    onClick: onClick
  }));
});
var _default = Checkbox;
exports.default = _default;