"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _CustomerRoutes = _interopRequireDefault(require("./CustomerRoutes"));

var _RoleRoutes = _interopRequireDefault(require("./RoleRoutes"));

var _default = [].concat((0, _toConsumableArray2.default)(_CustomerRoutes.default), (0, _toConsumableArray2.default)(_RoleRoutes.default));

exports.default = _default;