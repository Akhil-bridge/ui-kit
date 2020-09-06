"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var errorServiceHandling = function errorServiceHandling(response) {
  return new Promise(function (resolve, reject) {
    resolve(response.data);
    reject(response);
    return null;
  });
};

var _default = errorServiceHandling;
exports.default = _default;