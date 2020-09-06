"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _detail = _interopRequireWildcard(require("../detail"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

jest.mock('react-router-dom', function () {
  return _objectSpread(_objectSpread({}, jest.requireActual('react-router-dom')), {}, {
    useParams: function useParams() {
      return {
        account_number: '100200300'
      };
    },
    useRouteMatch: function useRouteMatch() {
      return {
        url: '/customer/customer-details/detail/100200300'
      };
    }
  });
});
describe('CustomerDetails component', function () {
  var CustomerDetailsMounted = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_detail.default, null));
  it('CustomerDetails component expect a CustomerInfo component on success case', function () {
    expect(CustomerDetailsMounted.find(_detail.CustomerInfo).length).toBe(1);
  });
  it('CustomerDetails component expect a Emoneyinfo component on success case', function () {
    expect(CustomerDetailsMounted.find(_detail.Emoneyinfo).length).toBe(1);
  });
  it('CustomerDetails component expect a TransactionsHistory component on success case', function () {
    expect(CustomerDetailsMounted.find(_detail.TransactionsHistory).length).toBe(1);
  });
  it('CustomerDetails component expect a DeviceInfo component on success case', function () {
    expect(CustomerDetailsMounted.find(_detail.DeviceInfo).length).toBe(1);
  });
  it('CustomerDetails component expect a PartnerLinkage component on success case', function () {
    expect(CustomerDetailsMounted.find(_detail.PartnerLinkage).length).toBe(1);
  });
  it('CustomerDetails snapshot testing', function () {
    var tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_detail.default, null)).toJSON();

    expect(tree).toMatchSnapshot();
  });
});