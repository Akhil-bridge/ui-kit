"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _default = [// {
//     path: "/",
//     name: "Dashboard",
//     header: "Main",
//     icon: faHome,
//     children: null
// },
{
  path: '/customer',
  name: 'Customer',
  icon: _freeSolidSvgIcons.faUsers,
  permission: ['ADMIN'],
  // change to permission
  children: [{
    path: '/customer/customer-details',
    name: 'Customer Details',
    role: []
  }, {
    path: '/customer/customer-transaction',
    name: 'Customer Transaction',
    role: []
  }]
}, {
  path: '/role',
  name: 'Employee',
  icon: _freeSolidSvgIcons.faUsers,
  permission: ['ADMIN'],
  // change to permission
  children: [{
    path: '/role-list',
    name: 'Role',
    role: []
  }]
}];
exports.default = _default;