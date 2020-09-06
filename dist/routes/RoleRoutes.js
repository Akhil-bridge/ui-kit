"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _interopRequireWildcard2 = _interopRequireDefault(require("@babel/runtime/helpers/interopRequireWildcard"));

var _Async = _interopRequireDefault(require("../components/Async"));

var Role = (0, _Async.default)(function () {
  return Promise.resolve().then(function () {
    return (0, _interopRequireWildcard2.default)(require('../pages/Role/index'));
  });
});
var CreateRole = (0, _Async.default)(function () {
  return Promise.resolve().then(function () {
    return (0, _interopRequireWildcard2.default)(require('../pages/Role/FormRole'));
  });
});
var roleRoutes = [{
  path: '/',
  role: [],
  layout: 'sidebar',
  component: null
}, {
  path: '/role-list',
  role: [],
  layout: 'sidebar',
  component: Role
}, {
  path: '/role/user',
  role: [],
  layout: 'sidebar',
  component: Role
}, {
  path: '/role-create',
  role: [],
  layout: 'sidebar',
  component: CreateRole,
  title: 'create_role_user'
}, {
  path: '/role-edit',
  role: [],
  layout: 'sidebar',
  component: CreateRole,
  title: 'edit_role user'
}];
var _default = roleRoutes;
exports.default = _default;