"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactstrap = require("reactstrap");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Main = _interopRequireDefault(require("../components/Main"));

var Auth = function Auth(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Main.default, {
    className: "h-100 w-100"
  }, /*#__PURE__*/_react.default.createElement(_reactstrap.Container, {
    className: "h-100"
  }, /*#__PURE__*/_react.default.createElement(_reactstrap.Row, {
    className: "h-100"
  }, /*#__PURE__*/_react.default.createElement(_reactstrap.Col, {
    sm: "10",
    md: "8",
    lg: "6",
    className: "mx-auto d-table h-100"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "d-table-cell align-middle"
  }, children))))));
};

Auth.propTypes = {
  children: _propTypes.default.element.isRequired
};
var _default = Auth;
exports.default = _default;