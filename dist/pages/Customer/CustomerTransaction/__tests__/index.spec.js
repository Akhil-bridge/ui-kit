"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _index = _interopRequireDefault(require("../index"));

var _Table = _interopRequireDefault(require("../../../../components/Table"));

jest.mock('react-router-dom', function () {
  return {
    useHistory: function useHistory() {
      return {
        push: jest.fn()
      };
    }
  };
});
describe('Customer transaction history page', function () {
  var customerTransaction = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_index.default, null));
  it('Customer transaction landing page does not expecting the table in initial load', function () {// expect(customerTransaction.contains(<TableComponent />)).toBe(false);
  });
  it('renders correctly snapshot test', function () {
    var tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_index.default, null)).toJSON();

    expect(tree).toMatchSnapshot();
  });
});