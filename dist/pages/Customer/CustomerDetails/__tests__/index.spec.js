"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = _interopRequireDefault(require("../index"));

var _Table = _interopRequireDefault(require("../../../../components/Table"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

jest.mock('react-router-dom', function () {
  return {
    useHistory: function useHistory() {
      return {
        push: jest.fn()
      };
    }
  };
});
describe('Customer details page', function () {
  var customerDetails = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_index.default, null));
  var searchFor = customerDetails.find('#searchFor');
  it('Customer details landing page does not expecting the table in initial load', function () {
    expect(customerDetails.contains( /*#__PURE__*/_react.default.createElement(_Table.default, null))).toBe(false);
  });
  it('Customer details triggering search button with out search for', /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            customerDetails.find('Button').simulate('click');
            expect(customerDetails.find(_Table.default).length).toBe(1);

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  it('Customer details triggering search button with search for', /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            searchFor.simulate('keyup', {
              target: {
                value: 100
              }
            });
            customerDetails.find('Button').simulate('click');
            expect(customerDetails.find(_Table.default).length).toBe(1);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
  it('renders correctly snapshot test', function () {
    var tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_index.default, null)).toJSON();

    expect(tree).toMatchSnapshot();
  });
});