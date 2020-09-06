"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetcher = exports.responseError = exports.BASE_URL = exports.RESPONSE_ERROR_CONNECTION = exports.RESPONSE_ERROR = exports.RESPONSE_SUCCESS = exports.ERROR_NO_CONNECTION = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var ERROR_NO_CONNECTION = ['Sorry there is problem. Pleas refresh again.'];
exports.ERROR_NO_CONNECTION = ERROR_NO_CONNECTION;
var RESPONSE_SUCCESS = 'SUCCESS';
exports.RESPONSE_SUCCESS = RESPONSE_SUCCESS;
var RESPONSE_ERROR = 'ERROR';
exports.RESPONSE_ERROR = RESPONSE_ERROR;
var RESPONSE_ERROR_CONNECTION = {
  status: RESPONSE_ERROR,
  errors: ERROR_NO_CONNECTION
};
exports.RESPONSE_ERROR_CONNECTION = RESPONSE_ERROR_CONNECTION;
var BASE_URL = window.BASE_URL_API;
exports.BASE_URL = BASE_URL;

var responseError = function responseError(errors) {
  return {
    status: RESPONSE_ERROR,
    errors: errors
  };
}; // const stringifyPrimitive = (v) => {
//     switch (typeof v) {
//         case 'string': return v;
//         case 'boolean': return v ? 'true' : 'false';
//         case 'number': return isFinite(v) ? v : '';
//         default: return '';
//     }
// };
// const stringify = (obj, sep, eq, name) => {
//     sep = sep || '&';
//     eq = eq || '=';
//     if (obj === null) {
//         obj = undefined;
//     }
//
//     if (typeof obj === 'object') {
//         return Object.keys(obj).map((k) => {
//             const ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
//             if (Array.isArray(obj[k])) {
//                 return obj[k].map((v) => ks + encodeURIComponent(stringifyPrimitive(v))).join(sep);
//             }
//             return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
//         }).join(sep);
//     }
//
//     return (!name) ? '' : encodeURIComponent(stringifyPrimitive(name)) + eq + encodeURIComponent(stringifyPrimitive(obj));
// };


exports.responseError = responseError;
var requestHeaders = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json;charset=UTF-8',
    Authorization: "Bearer ".concat(localStorage.getItem('Token'))
  }
};
var fetcher = {
  get: function get(urlPath) {
    return fetch(BASE_URL + urlPath, requestHeaders).then(function (response) {
      return response.json();
    }).catch(function (error) {
      return Promise.reject(error);
    });
  },
  post: function post(urlPath, params) {
    return fetch(BASE_URL + urlPath, _objectSpread(_objectSpread({}, requestHeaders), {}, {
      body: JSON.stringify(params),
      method: 'POST'
    })).then(function (response) {
      return response.json();
    }).catch(function (error) {
      return Promise.reject(new Error(error));
    });
  },
  put: function put(urlPath, params) {
    return fetch(BASE_URL + urlPath, _objectSpread(_objectSpread({}, requestHeaders), {}, {
      body: JSON.stringify(params),
      method: 'PUT'
    })).then(function (response) {
      return response.json();
    }).catch(function (error) {
      return Promise.reject(new Error(error));
    });
  },
  delete: function _delete(urlPath, params) {
    return fetch(BASE_URL + urlPath, _objectSpread(_objectSpread({}, requestHeaders), {}, {
      body: JSON.stringify(params),
      method: 'DELETE'
    })).then(function (response) {
      return response.json();
    }).catch(function (error) {
      return Promise.reject(new Error(error));
    });
  }
};
exports.fetcher = fetcher;