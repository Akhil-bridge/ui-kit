"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactstrap = require("reactstrap");

var _moment = _interopRequireDefault(require("moment"));

var _Header = _interopRequireDefault(require("../../../components/Header"));

var _HeaderTitle = _interopRequireDefault(require("../../../components/HeaderTitle"));

var _Table = _interopRequireDefault(require("../../../components/Table"));

var _userServices = require("../../../services/userServices");

var _transaction = _interopRequireDefault(require("../../../strings/customer/transaction"));

require("./_index.scss");

require("react-datepicker/dist/react-datepicker.css");

var _Input = _interopRequireDefault(require("../../../components/Input"));

var _formatCurrency = require("../../../utils/formatCurrency");

var _Label = _interopRequireDefault(require("reactstrap/lib/Label"));

var CustomerTransaction = function CustomerTransaction() {
  var columns = [{
    name: _transaction.default.label_column_no,
    selector: 'no',
    width: '50px'
  }, {
    name: _transaction.default.label_column_dimii_trx_id,
    selector: 'transaction_id'
  }, {
    name: _transaction.default.label_column_partner_ref_id,
    selector: 'transactionReferenceId'
  }, {
    name: _transaction.default.label_column_trx_date,
    cell: function cell(row) {
      return _moment.default.utc(row.transaction_date_time).format('MM/DD/YYYY');
    }
  }, {
    name: _transaction.default.label_column_trx_time,
    cell: function cell(row) {
      return _moment.default.utc(row.transaction_date_time).format('HH:mm:ss');
    }
  }, {
    name: _transaction.default.label_column_dr_cr,
    selector: 'transaction_balance_type'
  }, {
    name: _transaction.default.label_column_amount,
    cell: function cell(row) {
      return "Rp".concat((0, _formatCurrency.formatCurrency)(row.transaction_amount, 0));
    }
  }, {
    name: _transaction.default.label_column_from,
    cell: function cell(row) {
      return row.from.customer_name;
    }
  }, {
    name: _transaction.default.label_column_to,
    cell: function cell(row) {
      return row.to.customer_name;
    }
  }, {
    name: _transaction.default.label_column_status,
    selector: 'transaction_status'
  }, {
    name: _transaction.default.label_column_actions,
    cell: function cell(row) {
      return /*#__PURE__*/_react.default.createElement(_reactstrap.Button, {
        color: "outline-primary",
        size: "md",
        disabled: true
      }, _transaction.default.label_button_details);
    },
    ignoreRowClick: true,
    allowOverflow: true,
    button: true
  }];
  var optionSearch = [{
    value: 'card_no',
    label: 'Phone Number'
  }, {
    value: 'saving_product_id',
    label: 'Account Number'
  }, {
    value: 'transaction_id',
    label: 'Dimii Trx ID'
  }, {
    value: 'partner_ref_id',
    label: 'Partner Ref ID'
  }];

  var _useState = (0, _react.useState)({
    value: 'card_no',
    label: 'Phone Number'
  }),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      searchType = _useState2[0],
      setSearchType = _useState2[1];

  var _useState3 = (0, _react.useState)(''),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      searchInput = _useState4[0],
      setSearchInput = _useState4[1];

  var _useState5 = (0, _react.useState)(new Date()),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      startDate = _useState6[0],
      setStartDate = _useState6[1];

  var _useState7 = (0, _react.useState)(new Date()),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      endDate = _useState8[0],
      setEndDate = _useState8[1];

  return /*#__PURE__*/_react.default.createElement(_reactstrap.Container, {
    fluid: true
  }, /*#__PURE__*/_react.default.createElement(_Header.default, null, /*#__PURE__*/_react.default.createElement(_HeaderTitle.default, null, _transaction.default.title_customer_transaction)), /*#__PURE__*/_react.default.createElement(_reactstrap.Card, null, /*#__PURE__*/_react.default.createElement(_reactstrap.CardHeader, {
    className: "grey-color"
  }, /*#__PURE__*/_react.default.createElement(_reactstrap.CardTitle, {
    tag: "h5",
    className: "mb-0 f--size__16"
  }, _transaction.default.title_filter_customer_transaction)), /*#__PURE__*/_react.default.createElement(_reactstrap.CardBody, {
    className: "mt-2"
  }, /*#__PURE__*/_react.default.createElement(_reactstrap.Row, null, /*#__PURE__*/_react.default.createElement(_reactstrap.Col, {
    md: 2,
    className: "align-self-center"
  }, /*#__PURE__*/_react.default.createElement(_Label.default, {
    className: "f--size__16"
  }, _transaction.default.label_search_by), /*#__PURE__*/_react.default.createElement("span", {
    className: "fa-pull-right"
  }, ":")), /*#__PURE__*/_react.default.createElement(_reactstrap.Col, {
    md: 3
  }, /*#__PURE__*/_react.default.createElement(_Input.default, {
    type: "select",
    isClearable: false,
    placeholder: _transaction.default.placeholder_search_by,
    defaultValue: {
      value: 'card_no',
      label: 'Phone Number'
    },
    onChange: function onChange(e) {
      return setSearchType(e);
    },
    options: optionSearch
  })), /*#__PURE__*/_react.default.createElement(_reactstrap.Col, {
    md: 3
  }, /*#__PURE__*/_react.default.createElement(_reactstrap.Input, {
    onChange: function onChange(e) {
      return setSearchInput(e);
    }
  }))), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_reactstrap.Row, null, /*#__PURE__*/_react.default.createElement(_reactstrap.Col, {
    md: 2,
    className: "align-self-center"
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: "f--size__16"
  }, _transaction.default.label_date_range), /*#__PURE__*/_react.default.createElement("span", {
    className: "fa-pull-right"
  }, ":")), /*#__PURE__*/_react.default.createElement(_reactstrap.Col, {
    md: 3
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: "f--size__14"
  }, _transaction.default.label_start_date), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_Input.default, {
    type: "date-picker",
    selected: startDate,
    onChange: function onChange(e) {
      return setStartDate(e);
    },
    maxDate: endDate
  })), /*#__PURE__*/_react.default.createElement(_reactstrap.Col, {
    md: 3
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: "f--size__14"
  }, _transaction.default.label_end_date), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_Input.default, {
    type: "date-picker",
    value: endDate,
    onChange: function onChange(e) {
      return setEndDate(e);
    },
    minDate: startDate
  }))), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_reactstrap.Row, null, /*#__PURE__*/_react.default.createElement(_reactstrap.Col, {
    className: "align-self-center offset-2"
  }, /*#__PURE__*/_react.default.createElement(_reactstrap.Button, {
    color: "success",
    size: "lg"
  }, _transaction.default.label_button_search))))), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_reactstrap.Card, null, /*#__PURE__*/_react.default.createElement(_reactstrap.CardHeader, {
    className: "grey-color"
  }, /*#__PURE__*/_react.default.createElement(_reactstrap.CardTitle, {
    tag: "h5",
    className: "mb-0 f--size__16"
  }, _transaction.default.title_customer_info)), /*#__PURE__*/_react.default.createElement(_reactstrap.CardBody, {
    className: "mt-2"
  }, /*#__PURE__*/_react.default.createElement(_reactstrap.Row, null, /*#__PURE__*/_react.default.createElement(_reactstrap.Col, {
    md: 2,
    className: "align-self-center"
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: "f--size__16"
  }, _transaction.default.label_customer_name), /*#__PURE__*/_react.default.createElement("span", {
    className: "fa-pull-right"
  }, ":")), /*#__PURE__*/_react.default.createElement(_reactstrap.Col, null, /*#__PURE__*/_react.default.createElement("p", {
    className: "f--size__16 bold m-0"
  }, "Arya Permadi"))), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_reactstrap.Row, null, /*#__PURE__*/_react.default.createElement(_reactstrap.Col, {
    md: 2,
    className: "align-self-center"
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: "f--size__16"
  }, _transaction.default.label_CIF), /*#__PURE__*/_react.default.createElement("span", {
    className: "fa-pull-right"
  }, ":")), /*#__PURE__*/_react.default.createElement(_reactstrap.Col, null, /*#__PURE__*/_react.default.createElement("p", {
    className: "f--size__16 bold m-0"
  }, "di04586336"))), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_reactstrap.Row, null, /*#__PURE__*/_react.default.createElement(_reactstrap.Col, {
    md: 2,
    className: "align-self-center"
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: "f--size__16"
  }, _transaction.default.label_customer_phone_number), /*#__PURE__*/_react.default.createElement("span", {
    className: "fa-pull-right"
  }, ":")), /*#__PURE__*/_react.default.createElement(_reactstrap.Col, null, /*#__PURE__*/_react.default.createElement("p", {
    className: "f--size__16 bold m-0"
  }, "08123634646"))), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_reactstrap.Row, null, /*#__PURE__*/_react.default.createElement(_reactstrap.Col, {
    md: 2,
    className: "align-self-center"
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: "f--size__16"
  }, _transaction.default.label_customer_account_number), /*#__PURE__*/_react.default.createElement("span", {
    className: "fa-pull-right"
  }, ":")), /*#__PURE__*/_react.default.createElement(_reactstrap.Col, null, /*#__PURE__*/_react.default.createElement("p", {
    className: "f--size__16 bold m-0"
  }, "934534520"))), /*#__PURE__*/_react.default.createElement("br", null))), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_reactstrap.Row, null, /*#__PURE__*/_react.default.createElement(_reactstrap.Col, null, /*#__PURE__*/_react.default.createElement(_Table.default, {
    serverSide: true,
    name: _transaction.default.title_table_customer_transaction,
    fetchData: _userServices.getListUser // extraQuery={extraQuery}
    ,
    colorHeader: "",
    defaultSortFieldColumn: "",
    defaultSortAscending: false,
    pagination: true,
    paginationRowsPerPageOptions: [10, 20, 50],
    paginationOptionsRowsPerPageText: _transaction.default.label_rows_per_page,
    paginationOptionsRangeSeparatorText: _transaction.default.label_range_separator_pagination,
    paginationSelectAllRowsItemText: _transaction.default.label_select_all_rows,
    columns: columns
  }))));
};

var _default = CustomerTransaction;
exports.default = _default;