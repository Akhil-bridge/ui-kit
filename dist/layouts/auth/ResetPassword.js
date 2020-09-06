"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _reactstrap = require("reactstrap");

var ResetPassword = function ResetPassword() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "text-center mt-4"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "h2"
  }, "Reset password"), /*#__PURE__*/_react.default.createElement("p", {
    className: "lead"
  }, "Enter your email to reset your password.")), /*#__PURE__*/_react.default.createElement(_reactstrap.Card, null, /*#__PURE__*/_react.default.createElement(_reactstrap.CardBody, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "m-sm-4"
  }, /*#__PURE__*/_react.default.createElement(_reactstrap.Form, null, /*#__PURE__*/_react.default.createElement(_reactstrap.FormGroup, null, /*#__PURE__*/_react.default.createElement(_reactstrap.Label, null, "Email"), /*#__PURE__*/_react.default.createElement(_reactstrap.Input, {
    bsSize: "lg",
    type: "email",
    name: "email",
    placeholder: "Enter your email"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "text-center mt-3"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/dashboard"
  }, /*#__PURE__*/_react.default.createElement(_reactstrap.Button, {
    color: "primary",
    size: "lg"
  }, "Reset password"))))))));
};

var _default = ResetPassword;
exports.default = _default;