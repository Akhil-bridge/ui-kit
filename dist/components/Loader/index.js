"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactstrap = require("reactstrap");

var Loader = function Loader() {
  return /*#__PURE__*/_react.default.createElement(_reactstrap.Container, {
    fluid: true,
    className: "vh-75 d-flex"
  }, /*#__PURE__*/_react.default.createElement(_reactstrap.Row, {
    className: "justify-content-center align-self-center w-100 text-center"
  }, /*#__PURE__*/_react.default.createElement(_reactstrap.Spinner, {
    color: "primary"
  })));
};

var _default = Loader;
exports.default = _default;