"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _reactstrap = require("reactstrap");

var _avatar = _interopRequireDefault(require("../../assets/img/avatars/avatar.jpg"));

var SignIn = function SignIn() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "text-center mt-4"
  }, /*#__PURE__*/_react.default.createElement("h2", null, "Welcome back, Linda"), /*#__PURE__*/_react.default.createElement("p", {
    className: "lead"
  }, "Sign in to your account to continue")), /*#__PURE__*/_react.default.createElement(_reactstrap.Card, null, /*#__PURE__*/_react.default.createElement(_reactstrap.CardBody, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "m-sm-4"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _avatar.default,
    alt: "Linda Miller",
    className: "img-fluid rounded-circle",
    width: "132",
    height: "132"
  })), /*#__PURE__*/_react.default.createElement(_reactstrap.Form, null, /*#__PURE__*/_react.default.createElement(_reactstrap.FormGroup, null, /*#__PURE__*/_react.default.createElement(_reactstrap.Label, null, "Email"), /*#__PURE__*/_react.default.createElement(_reactstrap.Input, {
    bsSize: "lg",
    type: "email",
    name: "email",
    placeholder: "Enter your email"
  })), /*#__PURE__*/_react.default.createElement(_reactstrap.FormGroup, null, /*#__PURE__*/_react.default.createElement(_reactstrap.Label, null, "Password"), /*#__PURE__*/_react.default.createElement(_reactstrap.Input, {
    bsSize: "lg",
    type: "password",
    name: "password",
    placeholder: "Enter your password"
  }), /*#__PURE__*/_react.default.createElement("small", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/auth/reset-password"
  }, "Forgot password?"))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactstrap.CustomInput, {
    type: "checkbox",
    id: "rememberMe",
    label: "Remember me next time",
    defaultChecked: true
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "text-center mt-3"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/dashboard"
  }, /*#__PURE__*/_react.default.createElement(_reactstrap.Button, {
    color: "primary",
    size: "lg"
  }, "Sign in"))))))));
};

var _default = SignIn;
exports.default = _default;