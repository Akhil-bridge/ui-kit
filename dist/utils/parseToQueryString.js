"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseToQueryString = void 0;

var parseToQueryString = function parseToQueryString(obj) {
  return Object.keys(obj).map(function (key) {
    return "".concat(key, "=").concat(obj[key]);
  }).join('&');
};

exports.parseToQueryString = parseToQueryString;