"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactstrap = require("reactstrap");

var _reactRouterDom = require("react-router-dom");

var Footer = function Footer() {
  return /*#__PURE__*/_react.default.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/_react.default.createElement(_reactstrap.Container, {
    fluid: true
  }, /*#__PURE__*/_react.default.createElement(_reactstrap.Row, {
    className: "text-muted"
  }, /*#__PURE__*/_react.default.createElement(_reactstrap.Col, {
    xs: 12,
    className: "text-right"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "mb-0"
  }, "\xA9", ' ', new Date().getFullYear(), ' ', "-", ' ', /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/",
    className: "text-muted"
  }, "Dimiiland"))))));
};

var _default = Footer;
exports.default = _default;