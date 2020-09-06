"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.PartnerLinkage = exports.DeviceInfo = exports.TransactionsHistory = exports.Emoneyinfo = exports.CustomerInfo = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactstrap = require("reactstrap");

var _moment = _interopRequireDefault(require("moment"));

var _Header = _interopRequireDefault(require("../../../../components/Header"));

var _HeaderTitle = _interopRequireDefault(require("../../../../components/HeaderTitle"));

var _user = _interopRequireDefault(require("../../../../strings/user"));

var _userServices = require("../../../../services/userServices");

var _Accordion = _interopRequireDefault(require("../../../../components/Accordion"));

var _Table = _interopRequireDefault(require("../../../../components/Table"));

var CustomerInfo = function CustomerInfo(_ref) {
  var AccountNumber = _ref.AccountNumber;

  var _useState = (0, _react.useState)([]),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      customerDetails = _useState2[0],
      setCustomerDetails = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  (0, _react.useEffect)(function () {
    setLoading(true);
    (0, _userServices.getUser)(AccountNumber).then(function (info) {
      if (info) {
        var details = [{
          key: _user.default.cif,
          value: info.cif || ''
        }, {
          key: _user.default.label_name,
          value: info.name || ''
        }, {
          key: _user.default.mobile,
          value: info.mobilenumber || ''
        }, {
          key: _user.default.email,
          value: info.email || ''
        }, {
          key: _user.default.account_level,
          value: info.account_level || ''
        }, {
          key: _user.default.status,
          value: info.account_status || ''
        }];

        if (info.account_status === 'active') {
          var additionalData = [{
            key: _user.default.ID_card_number,
            value: info.ID_card_number || ''
          }, {
            key: _user.default.birth_date,
            value: info.birth_date || ''
          }, {
            key: _user.default.birth_place,
            value: info.birth_place || ''
          }, {
            key: _user.default.address,
            value: info.address || ''
          }, {
            key: _user.default.city,
            value: info.city || ''
          }, {
            key: _user.default.province,
            value: info.province || ''
          }];
          details = [].concat((0, _toConsumableArray2.default)(details), additionalData);
        }

        var action = {
          key: _user.default.action,
          value: /*#__PURE__*/_react.default.createElement("div", {
            className: "ml-0"
          }, /*#__PURE__*/_react.default.createElement(_reactstrap.Button, {
            color: "primary",
            className: "m-1"
          }, _user.default.edit), info.account_status !== 'active' ? /*#__PURE__*/_react.default.createElement(_reactstrap.Button, {
            color: "danger",
            className: "m-1"
          }, _user.default.block) : /*#__PURE__*/_react.default.createElement(_reactstrap.Button, {
            color: "info",
            className: "m-1"
          }, _user.default.active))
        };
        details.push(action);
        setCustomerDetails(details);
      } else {
        setCustomerDetails({});
      }

      setLoading(false);
    });
  }, [AccountNumber]);
  return /*#__PURE__*/_react.default.createElement(_Table.default, {
    serverSide: false,
    data: customerDetails,
    simpleMode: true,
    noTableHead: true,
    noHeader: true,
    isNotUseHeadertable: true,
    loading: loading
  });
};

exports.CustomerInfo = CustomerInfo;
CustomerInfo.propTypes = {
  AccountNumber: _propTypes.default.string.isRequired
};

var Emoneyinfo = function Emoneyinfo(_ref2) {
  var AccountNumber = _ref2.AccountNumber;

  var _useState5 = (0, _react.useState)([]),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      Emoney = _useState6[0],
      setEmoneyinfo = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      loading = _useState8[0],
      setLoading = _useState8[1];

  (0, _react.useEffect)(function () {
    setLoading(true);
    (0, _userServices.getEMoneyInfo)(AccountNumber).then(function (info) {
      if (info) {
        var details = [{
          key: _user.default.account_number,
          value: info.account_number || ''
        }, {
          key: _user.default.current_balance,
          value: info.current_balance || ''
        }, {
          key: _user.default.pending_balance,
          value: info.pending_balance || ''
        }, {
          key: _user.default.total_incoming_funds,
          value: info.total_incoming_funds || ''
        }, {
          key: _user.default.top_up_limit,
          value: info.top_up_limit || ''
        }];
        setEmoneyinfo(details);
      } else {
        setEmoneyinfo({});
      }

      setLoading(false);
    });
  }, [AccountNumber]);
  return /*#__PURE__*/_react.default.createElement(_Table.default, {
    serverSide: false,
    data: Emoney,
    simpleMode: true,
    noTableHead: true,
    noHeader: true,
    isNotUseHeadertable: true,
    loading: loading
  });
};

exports.Emoneyinfo = Emoneyinfo;
Emoneyinfo.propTypes = {
  AccountNumber: _propTypes.default.string.isRequired
};

var TransactionsHistory = function TransactionsHistory(_ref3) {
  var AccountNumber = _ref3.AccountNumber;

  var _useState9 = (0, _react.useState)([]),
      _useState10 = (0, _slicedToArray2.default)(_useState9, 2),
      Transactions = _useState10[0],
      setTransactions = _useState10[1];

  var _useState11 = (0, _react.useState)(false),
      _useState12 = (0, _slicedToArray2.default)(_useState11, 2),
      loading = _useState12[0],
      setLoading = _useState12[1];

  var columns = [{
    name: _user.default.trx_date_and_time,
    cell: function cell(row) {
      return _moment.default.utc(row.trx_date_and_time).format('MM/DD/YYYY HH:mm:ss');
    },
    sortable: false
  }, {
    name: _user.default.trx_type,
    selector: 'trx_type',
    sortable: false
  }, {
    name: _user.default.trx_ID,
    selector: 'trx_ID',
    sortable: false
  }, {
    name: _user.default.trx_amount,
    selector: 'trx_amount',
    sortable: false
  }, {
    name: _user.default.trx_status,
    selector: 'trx_status',
    sortable: false
  }];
  (0, _react.useEffect)(function () {
    setLoading(true);
    (0, _userServices.getLastTansactions)(AccountNumber).then(function (info) {
      if (info) {
        setTransactions(info);
      } else {
        setTransactions({});
      }

      setLoading(false);
    });
  }, [AccountNumber]);
  return /*#__PURE__*/_react.default.createElement(_Table.default, {
    columns: columns,
    data: Transactions,
    noTableHead: true,
    serverSide: false,
    noHeader: true,
    isNotUseHeadertable: true,
    loading: loading
  });
};

exports.TransactionsHistory = TransactionsHistory;
TransactionsHistory.propTypes = {
  AccountNumber: _propTypes.default.string.isRequired
};

var DeviceInfo = function DeviceInfo(_ref4) {
  var AccountNumber = _ref4.AccountNumber;

  var _useState13 = (0, _react.useState)([]),
      _useState14 = (0, _slicedToArray2.default)(_useState13, 2),
      DeviceInfoList = _useState14[0],
      setDeviceInfoList = _useState14[1];

  var _useState15 = (0, _react.useState)(false),
      _useState16 = (0, _slicedToArray2.default)(_useState15, 2),
      loading = _useState16[0],
      setLoading = _useState16[1];

  var columns = [{
    name: _user.default.deviceID,
    selector: 'deviceID',
    sortable: false
  }, {
    name: _user.default.last_login,
    cell: function cell(row) {
      return _moment.default.utc(row.last_login).format('MM/DD/YYYY HH:mm:ss');
    },
    sortable: false
  }, {
    name: _user.default.last_blocked,
    cell: function cell(row) {
      return row.last_blocked ? _moment.default.utc(row.last_blocked).format('MM/DD/YYYY HH:mm:ss') : '';
    },
    sortable: false
  }, {
    name: _user.default.device_status,
    selector: 'device_status',
    sortable: false
  }, {
    name: _user.default.action,
    cell: function cell(data) {
      switch (data.device_status) {
        case 'Active':
          return /*#__PURE__*/_react.default.createElement(_reactstrap.Button, {
            color: "danger"
          }, _user.default.block);

        case 'Blocked':
          return /*#__PURE__*/_react.default.createElement(_reactstrap.Button, {
            color: "success"
          }, _user.default.unblock);

        case 'Temp Blocked':
          return /*#__PURE__*/_react.default.createElement(_reactstrap.Button, {
            color: "success"
          }, _user.default.unblock);

        default:
          return '-';
      }
    },
    ignoreRowClick: true,
    allowOverflow: true,
    button: true
  }];
  (0, _react.useEffect)(function () {
    setLoading(true);
    (0, _userServices.getDeviceInfo)(AccountNumber).then(function (info) {
      if (info) {
        setDeviceInfoList(info);
      } else {
        setDeviceInfoList({});
      }

      setLoading(false);
    });
  }, [AccountNumber]);
  return /*#__PURE__*/_react.default.createElement(_Table.default, {
    columns: columns,
    serverSide: false,
    data: DeviceInfoList,
    noTableHead: true,
    noHeader: true,
    isNotUseHeadertable: true,
    loading: loading
  });
};

exports.DeviceInfo = DeviceInfo;
DeviceInfo.propTypes = {
  AccountNumber: _propTypes.default.string.isRequired
};

var PartnerLinkage = function PartnerLinkage(_ref5) {
  var AccountNumber = _ref5.AccountNumber;

  var _useState17 = (0, _react.useState)([]),
      _useState18 = (0, _slicedToArray2.default)(_useState17, 2),
      PartnerLinkageStatus = _useState18[0],
      setPartnerLinkageStatus = _useState18[1];

  var _useState19 = (0, _react.useState)(false),
      _useState20 = (0, _slicedToArray2.default)(_useState19, 2),
      loading = _useState20[0],
      setLoading = _useState20[1];

  var columns = [{
    name: _user.default.partner_name,
    selector: 'partner_name',
    sortable: false
  }, {
    name: _user.default.partner_account_ID,
    selector: 'partner_account_ID',
    sortable: false
  }, {
    name: _user.default.link_date,
    cell: function cell(row) {
      return _moment.default.utc(row.link_date).format('MM/DD/YYYY HH:mm:ss');
    },
    sortable: false
  }, {
    name: _user.default.last_blocked,
    cell: function cell(row) {
      return row.last_blocked ? _moment.default.utc(row.last_blocked).format('MM/DD/YYYY HH:mm:ss') : '';
    },
    sortable: false
  }, {
    name: _user.default.account_status,
    selector: 'account_status',
    sortable: false
  }, {
    name: _user.default.action,
    width: '200px',
    cell: function cell(data) {
      switch (data.account_status) {
        case 'Linked':
          return /*#__PURE__*/_react.default.createElement(_reactstrap.Button, {
            color: "danger"
          }, _user.default.block);

        case 'Blocked':
          return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactstrap.Button, {
            className: "mr-2",
            color: "danger"
          }, _user.default.unlink), /*#__PURE__*/_react.default.createElement(_reactstrap.Button, {
            color: "success"
          }, _user.default.unblock));

        case 'Temp Blocked':
          return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactstrap.Button, {
            className: "mr-2",
            color: "danger"
          }, _user.default.unlink), /*#__PURE__*/_react.default.createElement(_reactstrap.Button, {
            color: "success"
          }, _user.default.unblock));

        default:
          return '-';
      }
    },
    ignoreRowClick: true,
    allowOverflow: true,
    button: true
  }];
  (0, _react.useEffect)(function () {
    setLoading(true);
    (0, _userServices.getPartnerLinkage)(AccountNumber).then(function (info) {
      if (info) {
        setPartnerLinkageStatus(info);
      } else {
        setPartnerLinkageStatus({});
      }

      setLoading(false);
    });
  }, [AccountNumber]);
  return /*#__PURE__*/_react.default.createElement(_Table.default, {
    columns: columns,
    serverSide: false,
    data: PartnerLinkageStatus,
    noTableHead: true,
    noHeader: true,
    isNotUseHeadertable: true,
    loading: loading
  });
};

exports.PartnerLinkage = PartnerLinkage;
PartnerLinkage.propTypes = {
  AccountNumber: _propTypes.default.string.isRequired
};

var CustomerDetails = function CustomerDetails() {
  var _useParams = (0, _reactRouterDom.useParams)(),
      AccountNumber = _useParams.account_number;

  return /*#__PURE__*/_react.default.createElement(_reactstrap.Container, {
    fluid: true
  }, /*#__PURE__*/_react.default.createElement(_Header.default, null, /*#__PURE__*/_react.default.createElement(_HeaderTitle.default, null, _user.default.customer_details)), /*#__PURE__*/_react.default.createElement(_Accordion.default, {
    Title: _user.default.customer_info
  }, /*#__PURE__*/_react.default.createElement(CustomerInfo, {
    AccountNumber: AccountNumber
  })), /*#__PURE__*/_react.default.createElement(_Accordion.default, {
    Title: _user.default.eMoney_information
  }, /*#__PURE__*/_react.default.createElement(Emoneyinfo, {
    AccountNumber: AccountNumber
  })), /*#__PURE__*/_react.default.createElement(_Accordion.default, {
    Title: _user.default.transactions_history
  }, /*#__PURE__*/_react.default.createElement(TransactionsHistory, {
    AccountNumber: AccountNumber
  })), /*#__PURE__*/_react.default.createElement(_Accordion.default, {
    Title: _user.default.account_status
  }, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactstrap.CardTitle, {
    tag: "h6",
    className: "my-2"
  }, _user.default.dimii_app_label), /*#__PURE__*/_react.default.createElement(DeviceInfo, {
    AccountNumber: AccountNumber
  }))), /*#__PURE__*/_react.default.createElement(_Accordion.default, {
    Title: _user.default.account_status
  }, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactstrap.CardTitle, {
    tag: "h6",
    className: "my-2"
  }, _user.default.partner_linkage), /*#__PURE__*/_react.default.createElement(PartnerLinkage, {
    AccountNumber: AccountNumber
  }))));
};

var _default = CustomerDetails;
exports.default = _default;