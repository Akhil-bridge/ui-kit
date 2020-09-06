"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatCurrency = void 0;

var formatCurrency = function formatCurrency(amount) {
  var decimalCount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var decimal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.';
  var thousands = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ',';
  if (!amount) return 0;
  var negativeSign = amount < 0 ? '-' : '';
  var i = Number(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
  var j = i.length > 3 ? i.length % 3 : 0;
  return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1".concat(thousands)) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : '');
};

exports.formatCurrency = formatCurrency;