"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactstrap = require("reactstrap");

var Login = function Login() {
  var _useState = (0, _react.useState)(''),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      email = _useState2[0],
      setEmail = _useState2[1];

  var _useState3 = (0, _react.useState)(''),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      password = _useState4[0],
      setPassword = _useState4[1];

  return /*#__PURE__*/_react.default.createElement(_reactstrap.Container, {
    className: "App"
  }, /*#__PURE__*/_react.default.createElement("h2", null, "Sign In"), /*#__PURE__*/_react.default.createElement(_reactstrap.Form, {
    className: "form"
  }, /*#__PURE__*/_react.default.createElement(_reactstrap.Col, null, /*#__PURE__*/_react.default.createElement(_reactstrap.FormGroup, null, /*#__PURE__*/_react.default.createElement(_reactstrap.Label, null, "Email"), /*#__PURE__*/_react.default.createElement(_reactstrap.Input, {
    type: "email",
    name: "email",
    id: "exampleEmail",
    placeholder: "Email"
  }))), /*#__PURE__*/_react.default.createElement(_reactstrap.Col, null, /*#__PURE__*/_react.default.createElement(_reactstrap.FormGroup, null, /*#__PURE__*/_react.default.createElement(_reactstrap.Label, {
    for: "examplePassword"
  }, "Password"), /*#__PURE__*/_react.default.createElement(_reactstrap.Input, {
    type: "password",
    name: "password",
    id: "examplePassword",
    placeholder: "********"
  }))), /*#__PURE__*/_react.default.createElement(_reactstrap.Button, null, "Submit")));
};

var _default = Login;
exports.default = _default;