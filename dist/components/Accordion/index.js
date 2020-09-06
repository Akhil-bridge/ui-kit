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

var _reactFeather = require("react-feather");

var _propTypes = _interopRequireDefault(require("prop-types"));

var DetailAccordion = function DetailAccordion(_ref) {
  var Title = _ref.Title,
      children = _ref.children;

  var _useState = (0, _react.useState)(true),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      toggleButtonStatus = _useState2[0],
      setToggleButtonStatus = _useState2[1];

  var toggleAction = function toggleAction() {
    return setToggleButtonStatus(!toggleButtonStatus);
  };

  return /*#__PURE__*/_react.default.createElement(_reactstrap.Card, null, /*#__PURE__*/_react.default.createElement(_reactstrap.CardHeader, {
    className: "grey-color"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card-actions float-right pt-2"
  }, toggleButtonStatus ?
  /*#__PURE__*/

  /* eslint-disable jsx-a11y/click-events-have-key-events,
      jsx-a11y/interactive-supports-focus */
  _react.default.createElement("span", {
    role: "button",
    className: "cursor-pointer mr-1",
    id: "customer_info",
    onClick: toggleAction
  }, /*#__PURE__*/_react.default.createElement(_reactFeather.MinusCircle, null)) : /*#__PURE__*/_react.default.createElement("span", {
    role: "button",
    className: "cursor-pointer mr-1",
    id: "customer_info",
    onClick: toggleAction
  }, /*#__PURE__*/_react.default.createElement(_reactFeather.PlusCircle, null))
  /* eslint-disable jsx-a11y/click-events-have-key-events,
  jsx-a11y/interactive-supports-focus */
  , ' '), /*#__PURE__*/_react.default.createElement(_reactstrap.CardTitle, {
    tag: "h5",
    className: "my-2"
  }, Title)), /*#__PURE__*/_react.default.createElement(_reactstrap.Collapse, {
    isOpen: toggleButtonStatus
  }, /*#__PURE__*/_react.default.createElement(_reactstrap.CardBody, null, children)));
};

DetailAccordion.propTypes = {
  Title: _propTypes.default.string.isRequired,
  children: _propTypes.default.element.isRequired
};
var _default = DetailAccordion;
exports.default = _default;