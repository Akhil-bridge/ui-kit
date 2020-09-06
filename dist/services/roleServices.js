"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPermission = exports.getListRole = void 0;
var example = {
  length: 1,
  data: [{
    name: 'role_a',
    status: 1,
    permission: ['view customer', 'request block customer']
  }, {
    name: 'role_b',
    status: 1,
    permission: ['approve block customer', 'approve unblock customer']
  }, {
    name: 'role_c',
    status: 0,
    permission: ['permission xyz', 'permission abc']
  }]
};
var permission = {
  data: [{
    name: 'customer detail',
    description: '',
    status: 0,
    permission: [{
      name: 'view_customer_list',
      description: 'description view customer list',
      status: 0
    }, {
      name: 'request_block_customer',
      description: 'description request block customer',
      status: 1
    }, {
      name: 'request_unblock_customer',
      description: 'description request unblock customer',
      status: 1
    }, {
      name: 'close_customer_accound',
      description: 'description close customer accound',
      status: 0
    }]
  }, {
    name: 'approval_customer_detail',
    description: '',
    status: 1,
    permission: [{
      name: 'view_customer_list',
      description: 'desciption view customer list',
      status: 0
    }, {
      name: 'request_block customer',
      desciption: 'descriptioon request block customer',
      status: 1
    }, {
      id: 7,
      name: 'request unblock customer',
      description: 'description request unblock customer',
      status: 1
    }, {
      id: 8,
      name: 'close customer accound',
      description: 'description close customer accound',
      status: 1
    }]
  }]
};

var getListRole = function getListRole() {
  return new Promise(function (resolve) {
    resolve(example);
  });
};

exports.getListRole = getListRole;

var getPermission = function getPermission() {
  return new Promise(function (resolve) {
    resolve(permission);
  });
};

exports.getPermission = getPermission;