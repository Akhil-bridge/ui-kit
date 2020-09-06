"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var defaultProps = {
  tag: 'h1',
  className: '',
  children: ''
};

var HeaderTitle = function HeaderTitle(_ref) {
  var children = _ref.children,
      className = _ref.className,
      Tag = _ref.tag,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["children", "className", "tag"]);
  return /*#__PURE__*/_react.default.createElement(Tag, (0, _extends2.default)({
    className: (0, _classnames.default)('header-title', className)
  }, rest), children);
};

HeaderTitle.defaultProps = defaultProps;
HeaderTitle.propTypes = {
  className: _propTypes.default.string,
  children: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
  tag: _propTypes.default.string
};
var _default = HeaderTitle;
exports.default = _default;