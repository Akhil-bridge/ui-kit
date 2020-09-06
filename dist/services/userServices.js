"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getListUserData = exports.getListUser = exports.getEMoneyInfo = exports.getPartnerLinkage = exports.getDeviceInfo = exports.getLastTansactions = exports.getUser = void 0;

var _fethcher = require("../utils/fethcher");

var _errorServiceHandling = _interopRequireDefault(require("../utils/errorServiceHandling"));

var example = {
  result: {
    data: [{
      cif: '55555555',
      name: 'Akhil Bridge',
      mobilenumber: '123456789',
      email: 'email@email.com',
      account_number: '100200300',
      account_level: 'Verified',
      ID_card_number: 'BLN120',
      birth_date: '15/01/19902',
      birth_place: 'New york',
      address: 'KH-23A, house 5, Newyork',
      city: 'Corland',
      province: 'newJessica',
      account_status: 'active',
      eMoney: {
        account_number: '100200300',
        current_balance: '123',
        pending_balance: '750',
        total_incoming_funds: 1500,
        top_up_limit: 677
      },
      lastTransaction: [{
        trx_date_and_time: '2020-07-23T11:26:45+0000',
        trx_type: 'Bill Payment',
        trx_ID: 'BPYU67T45',
        trx_amount: 'Rp23,5895',
        trx_status: 'Success'
      }, {
        trx_date_and_time: '2020-07-23T11:26:45+0000',
        trx_type: 'P2P Transfer',
        trx_ID: 'AS90SD9FK',
        trx_amount: 'Rp23,25478',
        trx_status: 'Fail'
      }, {
        trx_date_and_time: '2020-07-23T11:26:45+0000',
        trx_type: 'Bill Payment',
        trx_ID: 'SJ909088SNM',
        trx_amount: 'Rp23,000',
        trx_status: 'Success'
      }, {
        trx_date_and_time: '2020-07-23T11:26:45+0000',
        trx_type: 'Bill Payment',
        trx_ID: 'TYLP809988',
        trx_amount: 'Rp155555',
        trx_status: 'Fail'
      }, {
        trx_date_and_time: '2020-07-23T11:26:45+0000',
        trx_type: 'Bill Payment',
        trx_ID: 'BPYU67T45',
        trx_amount: 'Rp23,595',
        trx_status: 'Success'
      }],
      device_info: [{
        deviceID: 'Device 001',
        last_login: '2020-07-23T11:26:45+0000',
        last_blocked: '',
        device_status: 'Active'
      }, {
        deviceID: 'Device 002',
        last_login: '16:15:12 02/07/20',
        last_blocked: '2020-07-23T11:26:45+0000',
        device_status: 'Blocked'
      }, {
        deviceID: 'Device 003',
        last_login: '2020-07-23T11:26:45+0000',
        last_blocked: '',
        device_status: 'Inactive'
      }, {
        deviceID: 'Device 004',
        last_login: '2020-07-23T11:26:45+0000',
        last_blocked: '',
        device_status: 'Temp Blocked'
      }],
      partner_linkage: [{
        partner_name: 'Partner 1',
        partner_account_ID: 'SJKL6878GHm',
        link_date: '2020-07-23T11:26:45+0000',
        last_blocked: '',
        account_status: 'Unlinked'
      }, {
        partner_name: 'Partner 2',
        partner_account_ID: 'SDLOJA67897',
        link_date: '2020-07-23T11:26:45+0000',
        last_blocked: '',
        account_status: 'Linked'
      }, {
        partner_name: 'Partner 3',
        partner_account_ID: 'POI8906H',
        link_date: '2020-07-23T11:26:45+0000',
        last_blocked: '2020-07-23T11:26:45+0000',
        account_status: 'Blocked'
      }, {
        partner_name: 'Partner 4',
        partner_account_ID: 'MNIU79898',
        link_date: '2020-07-23T11:26:45+0000',
        last_blocked: '2020-07-23T11:26:45+0000',
        account_status: 'Temp Blocked'
      }]
    }, {
      cif: '666666',
      name: 'Amela',
      mobilenumber: '987654321',
      email: 'amela@email.com',
      account_number: '200300400',
      account_level: 'Unverified',
      status: 'Blocked',
      eMoney: {
        account_number: '200300400',
        current_balance: '365',
        pending_balance: '111',
        total_incoming_funds: 1587,
        top_up_limit: 100
      },
      lastTransaction: [{
        trx_date_and_time: '2020-07-23T11:26:45+0000',
        trx_type: 'Bill Payment',
        trx_ID: 'BPYU67T45',
        trx_amount: 'Rp23,5895',
        trx_status: 'Success'
      }, {
        trx_date_and_time: '2020-07-23T11:26:45+0000',
        trx_type: 'P2P Transfer',
        trx_ID: 'AS90SD9FK',
        trx_amount: 'Rp23,25478',
        trx_status: 'Fail'
      }, {
        trx_date_and_time: '2020-07-23T11:26:45+0000',
        trx_type: 'Bill Payment',
        trx_ID: 'SJ909088SNM',
        trx_amount: 'Rp23,000',
        trx_status: 'Success'
      }, {
        trx_date_and_time: '2020-07-23T11:26:45+0000',
        trx_type: 'Bill Payment',
        trx_ID: 'TYLP809988',
        trx_amount: 'Rp155555',
        trx_status: 'Fail'
      }, {
        trx_date_and_time: '2020-07-23T11:26:45+0000',
        trx_type: 'Bill Payment',
        trx_ID: 'BPYU67T45',
        trx_amount: 'Rp23,595',
        trx_status: 'Success'
      }],
      device_info: [{
        deviceID: 'Device 001',
        last_login: '2020-07-23T11:26:45+0000',
        last_blocked: '',
        device_status: 'Active'
      }, {
        deviceID: 'Device 002',
        last_login: '2020-07-23T11:26:45+0000',
        last_blocked: '12020-07-23T11:26:45+0000',
        device_status: 'Blocked'
      }, {
        deviceID: 'Device 003',
        last_login: '2020-07-23T11:26:45+0000',
        last_blocked: '',
        device_status: 'Inactive'
      }, {
        deviceID: 'Device 004',
        last_login: '2020-07-23T11:26:45+0000',
        last_blocked: '',
        device_status: 'Temp Blocked'
      }],
      partner_linkage: [{
        partner_name: 'Partner 1',
        partner_account_ID: 'SJKL6878GHm',
        link_date: '2020-07-23T11:26:45+0000',
        last_blocked: '',
        account_status: 'Unlinked'
      }, {
        partner_name: 'Partner 2',
        partner_account_ID: 'SDLOJA67897',
        link_date: '2020-07-23T11:26:45+0000',
        last_blocked: '',
        account_status: 'Linked'
      }, {
        partner_name: 'Partner 3',
        partner_account_ID: 'POI8906H',
        link_date: '2020-07-23T11:26:45+0000',
        last_blocked: '2020-07-23T11:26:45+0000',
        account_status: 'Blocked'
      }, {
        partner_name: 'Partner 4',
        partner_account_ID: 'MNIU79898',
        link_date: '2020-07-23T11:26:45+0000',
        last_blocked: '2020-07-23T11:26:45+0000',
        account_status: 'Temp Blocked'
      }]
    }]
  }
};
var example2 = {
  length: 1,
  data: [{
    transactionInfo: {
      transactionReferenceId: 'testingTimeTrx'
    },
    transaction_id: '200723042645074',
    transaction_date_time: '2020-07-23T11:26:45+0000',
    icon_url: 'https://firebasestorage.googleapis.com/v0/b/dimii-id.appspot.com/o/alfamart.png?alt=media&token=4ea85908-cdd0-4819-83d3-0836c62276c5',
    transaction_name: 'Alfamart Revised',
    transaction_status: 'SUCCESS',
    transaction_amount: 5000000,
    transaction_balance_type: 'DEBIT',
    transaction_type: '1',
    sourceOfFund: 'E-Money Account',
    transactionReferenceId: 'testingTimeTrx',
    saving_account_id: '380250434619',
    from: {
      customer_id: 1,
      customer_name: 'dhimas'
    },
    to: {
      customer_id: 1,
      customer_name: 'dhimas'
    }
  }]
};
/* export const getListUser = (req) => fetcher.get(`/list-user/search?${req}`)
  .then((res) => errorServiceHandling(example)); */

var getUser = function getUser(accountnumber) {
  return new Promise(function (resolutionFunc) {
    var key = 'account_number';

    for (var i = 0; i < example.result.data.length; i += 1) {
      if (example.result.data[i][key].includes(accountnumber)) {
        resolutionFunc(example.result.data[i]);
      }
    }

    resolutionFunc({});
  });
};

exports.getUser = getUser;

var getLastTansactions = function getLastTansactions(accountnumber) {
  return new Promise(function (resolutionFunc) {
    var key = 'account_number';

    for (var i = 0; i < example.result.data.length; i += 1) {
      if (example.result.data[i][key].includes(accountnumber)) {
        resolutionFunc(example.result.data[i].lastTransaction ? example.result.data[i].lastTransaction : []);
      }
    }

    resolutionFunc({});
  });
};

exports.getLastTansactions = getLastTansactions;

var getDeviceInfo = function getDeviceInfo(accountnumber) {
  return new Promise(function (resolutionFunc) {
    var key = 'account_number';

    for (var i = 0; i < example.result.data.length; i += 1) {
      if (example.result.data[i][key].includes(accountnumber)) {
        resolutionFunc(example.result.data[i].device_info ? example.result.data[i].device_info : []);
      }
    }

    resolutionFunc({});
  });
};

exports.getDeviceInfo = getDeviceInfo;

var getPartnerLinkage = function getPartnerLinkage(accountnumber) {
  return new Promise(function (resolutionFunc) {
    var key = 'account_number';

    for (var i = 0; i < example.result.data.length; i += 1) {
      if (example.result.data[i][key].includes(accountnumber)) {
        resolutionFunc(example.result.data[i].partner_linkage ? example.result.data[i].partner_linkage : []);
      }
    }

    resolutionFunc({});
  });
};

exports.getPartnerLinkage = getPartnerLinkage;

var getEMoneyInfo = function getEMoneyInfo(accountnumber) {
  return new Promise(function (resolutionFunc) {
    var key = 'account_number';

    for (var i = 0; i < example.result.data.length; i += 1) {
      if (example.result.data[i][key].includes(accountnumber)) {
        resolutionFunc(example.result.data[i].eMoney ? example.result.data[i].eMoney : []);
      }
    }

    resolutionFunc({});
  });
};

exports.getEMoneyInfo = getEMoneyInfo;

var getListUser = function getListUser(req) {
  return new Promise(function (resolve) {
    resolve(example2);
  });
}; // Mock result


exports.getListUser = getListUser;

var getListUserData = function getListUserData(req) {
  return new Promise(function (resolutionFunc) {
    resolutionFunc(example.result);
    var keyValPair = req.split('&');
    var filter = {};

    for (var i = 0; i < keyValPair.length; i += 1) {
      var pair = keyValPair[i].split('=');
      filter[pair[0]] = decodeURIComponent(pair[1]);
    }

    var SearchParams = {
      'by-phone-number': 'mobilenumber',
      'by-cif': 'cif',
      'by-account-number': 'account_number'
    };
    var key = SearchParams[filter.searchBy];

    for (var _i = 0; _i < example.result.data.length; _i += 1) {
      if (example.result.data[_i][key].includes(filter.searchFor)) {
        resolutionFunc({
          data: [example.result.data[_i]]
        });
      }
    }

    resolutionFunc({});
  });
};

exports.getListUserData = getListUserData;