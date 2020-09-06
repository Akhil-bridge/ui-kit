"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _reactstrap = require("reactstrap");

var Page500 = function Page500() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "display-1 font-weight-bold"
  }, "500"), /*#__PURE__*/_react.default.createElement("p", {
    className: "h1"
  }, "Internal server error."), /*#__PURE__*/_react.default.createElement("p", {
    className: "h2 font-weight-normal mt-3 mb-4"
  }, "The server encountered something unexpected that didn't allow it to complete the request."), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/dashboard"
  }, /*#__PURE__*/_react.default.createElement(_reactstrap.Button, {
    color: "primary",
    size: "lg"
  }, "Return to website")));
};

var _default = Page500;
exports.default = _default;