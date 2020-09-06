"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _reduxLogger = _interopRequireDefault(require("redux-logger"));

var _rootReducer = _interopRequireDefault(require("./rootReducer"));

var middlewares = [_reduxThunk.default, _reduxLogger.default];
var store = (0, _redux.createStore)(_rootReducer.default, _redux.applyMiddleware.apply(void 0, middlewares));
var _default = store;
exports.default = _default;