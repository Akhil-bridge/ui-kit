"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _reactReduxToastr = require("react-redux-toastr");

var _reducers = _interopRequireDefault(require("./main/reducers"));

var _default = (0, _redux.combineReducers)({
  toastr: _reactReduxToastr.reducer,
  main: _reducers.default
});

exports.default = _default;