"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Routes = _interopRequireDefault(require("../routes/component/Routes"));

var _App = _interopRequireDefault(require("../App"));

describe('My Test Suite', function () {
  it('My Test Case', function () {
    var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_App.default, null));
    expect(wrapper.contains( /*#__PURE__*/_react.default.createElement(_Routes.default, null))).toBe(true);
  });
});