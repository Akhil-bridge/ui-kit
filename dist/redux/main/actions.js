"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleSidebar = toggleSidebar;
exports.showSidebar = showSidebar;
exports.hideSidebar = hideSidebar;
exports.enableRightSidebar = enableRightSidebar;
exports.disableRightSidebar = disableRightSidebar;

var types = _interopRequireWildcard(require("../../utils/constants"));

function toggleSidebar() {
  return {
    type: types.SIDEBAR_VISIBILITY_TOGGLE
  };
}

function showSidebar() {
  return {
    type: types.SIDEBAR_VISIBILITY_SHOW
  };
}

function hideSidebar() {
  return {
    type: types.SIDEBAR_VISIBILITY_HIDE
  };
}

function enableRightSidebar() {
  return {
    type: types.SIDEBAR_RIGHT_ENABLE
  };
}

function disableRightSidebar() {
  return {
    type: types.SIDEBAR_RIGHT_DISABLE
  };
}