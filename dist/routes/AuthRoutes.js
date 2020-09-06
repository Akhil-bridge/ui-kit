"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _interopRequireWildcard2 = _interopRequireDefault(require("@babel/runtime/helpers/interopRequireWildcard"));

var _Async = _interopRequireDefault(require("../components/Async"));

var Login = (0, _Async.default)(function () {
  return Promise.resolve().then(function () {
    return (0, _interopRequireWildcard2.default)(require('../layouts/auth/SignIn'));
  });
});
var authRoutes = [{
  path: '/login',
  role: [],
  layout: '',
  component: Login
}];
var _default = authRoutes;
exports.default = _default;