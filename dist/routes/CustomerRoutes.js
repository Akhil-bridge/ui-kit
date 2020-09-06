"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _interopRequireWildcard2 = _interopRequireDefault(require("@babel/runtime/helpers/interopRequireWildcard"));

var _Async = _interopRequireDefault(require("../components/Async"));

var SearchCustomer = (0, _Async.default)(function () {
  return Promise.resolve().then(function () {
    return (0, _interopRequireWildcard2.default)(require('../pages/Customer/CustomerDetails'));
  });
});
var CustomerDetails = (0, _Async.default)(function () {
  return Promise.resolve().then(function () {
    return (0, _interopRequireWildcard2.default)(require('../pages/Customer/CustomerDetails/form/detail'));
  });
});
var CustomerTransactions = (0, _Async.default)(function () {
  return Promise.resolve().then(function () {
    return (0, _interopRequireWildcard2.default)(require('../pages/Customer/CustomerTransaction/index'));
  });
});
var customerRoutes = [{
  path: '/',
  role: [],
  layout: 'sidebar',
  component: SearchCustomer
}, {
  path: '/customer/customer-details',
  role: [],
  layout: 'sidebar',
  component: SearchCustomer
}, {
  path: '/customer/customer-transaction',
  role: [],
  layout: 'sidebar',
  component: CustomerTransactions
}, {
  path: '/customer/customer-details/detail/:account_number',
  role: [],
  layout: 'sidebar',
  component: CustomerDetails
}];
var _default = customerRoutes;
exports.default = _default;