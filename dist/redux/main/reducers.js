"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var types = _interopRequireWildcard(require("../../utils/constants"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var themes = {
  modern: {
    primary: '#3B7DDD',
    secondary: '#6f42c1',
    tertiary: '#669ae5',
    success: '#28a745',
    info: '#20c997',
    warning: '#fd7e14',
    danger: '#dc3545',
    dark: '#153d77'
  },
  classic: {
    primary: '#38C485',
    secondary: '#5C59ED',
    tertiary: '#41D492',
    success: '#a877b5',
    info: '#00bcd4',
    warning: '#F2B51D',
    danger: '#F26666',
    dark: '#203A45'
  },
  dark: {
    primary: '#687ae8',
    secondary: '#95aac9',
    tertiary: '#95aac9',
    success: '#0c9',
    info: '#19b5fe',
    warning: '#f7bc06',
    danger: '#f2545b',
    dark: '#28304e'
  },
  light: {
    primary: '#3B7DDD',
    secondary: '#6f42c1',
    tertiary: '#669ae5',
    success: '#28a745',
    info: '#20c997',
    warning: '#fd7e14',
    danger: '#dc3545',
    dark: '#153d77'
  }
};
var initialState = {};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var actions = arguments.length > 1 ? arguments[1] : undefined;

  switch (actions.type) {
    case types.SIDEBAR_VISIBILITY_TOGGLE:
      return _objectSpread(_objectSpread({}, state), {}, {
        isOpen: !state.isOpen
      });

    case types.SIDEBAR_VISIBILITY_SHOW:
      return _objectSpread(_objectSpread({}, state), {}, {
        isOpen: true
      });

    case types.SIDEBAR_VISIBILITY_HIDE:
      return _objectSpread(_objectSpread({}, state), {}, {
        isOpen: false
      });

    case types.SIDEBAR_RIGHT_ENABLE:
      return _objectSpread(_objectSpread({}, state), {}, {
        isOnRight: true
      });

    case types.SIDEBAR_RIGHT_DISABLE:
      return _objectSpread(_objectSpread({}, state), {}, {
        isOnRight: false
      });

    case types.THEME_TOGGLE:
      return _objectSpread(_objectSpread({}, state), {}, {
        currentTheme: state.themes[actions.payload]
      });

    default:
      return state;
  }
}