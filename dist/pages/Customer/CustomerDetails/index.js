"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _reactstrap = require("reactstrap");

var _Header = _interopRequireDefault(require("../../../components/Header"));

var _HeaderTitle = _interopRequireDefault(require("../../../components/HeaderTitle"));

var _Table = _interopRequireDefault(require("../../../components/Table"));

var _userServices = require("../../../services/userServices");

var _user = _interopRequireDefault(require("../../../strings/user"));

require("./_index.scss");

var _Input = _interopRequireDefault(require("../../../components/Input"));

var SearchCustomer = function SearchCustomer() {
  var history = (0, _reactRouterDom.useHistory)();
  var timeoutRef = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      showSearchResult = _useState2[0],
      setShowSearchResult = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      searchError = _useState4[0],
      setSearchError = _useState4[1];

  var _useState5 = (0, _react.useState)('by-phone-number'),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      searchBy = _useState6[0],
      setSearchBy = _useState6[1];

  var _useState7 = (0, _react.useState)(''),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      searchFor = _useState8[0],
      setSearchFor = _useState8[1];

  var _useState9 = (0, _react.useState)({
    searchBy: '',
    searchFor: ''
  }),
      _useState10 = (0, _slicedToArray2.default)(_useState9, 2),
      extraQuery = _useState10[0],
      setExtraQuery = _useState10[1];

  var _useState11 = (0, _react.useState)(false),
      _useState12 = (0, _slicedToArray2.default)(_useState11, 2),
      enableAutoFetch = _useState12[0],
      setEnableAutoFetch = _useState12[1];

  var SearchParams = {
    'by-phone-number': _user.default.by_phone_number,
    'by-cif': _user.default.by_cif,
    'by-account-number': _user.default.by_account_number
  };

  var customerDetailAction = function customerDetailAction(path) {
    history.push(path);
  };

  var columns = [{
    name: _user.default.cif,
    selector: 'cif'
  }, {
    name: _user.default.label_name,
    selector: 'name'
  }, {
    name: _user.default.mobile,
    selector: 'mobilenumber'
  }, {
    name: _user.default.email,
    selector: 'email'
  }, {
    name: _user.default.account_number,
    selector: 'account_number'
  }, {
    name: _user.default.account_level,
    selector: 'account_level'
  }, {
    name: 'Action',
    cell: function cell(data) {
      return /*#__PURE__*/_react.default.createElement(_reactstrap.Button, {
        className: "btn btn-light",
        onClick: function onClick() {
          customerDetailAction("/customer/customer-details/detail/".concat(data.account_number));
        }
      }, _user.default.view_details);
    },
    ignoreRowClick: true,
    allowOverflow: true,
    button: true
  }];

  var setSearchType = function setSearchType(e) {
    return e && setSearchBy(e.value);
  };

  var searchCustomers = function searchCustomers() {
    clearTimeout(timeoutRef.current);

    if (!searchFor) {
      timeoutRef.current = setTimeout(function () {
        timeoutRef.current = null;
        setSearchError(false);
      }, 500);
      return setSearchError(true);
    }

    setEnableAutoFetch(true);
    setSearchError(false);
    setExtraQuery({
      searchBy: searchBy,
      searchFor: searchFor
    });
    return setShowSearchResult(true);
  };

  var updateSearchFor = function updateSearchFor(event) {
    setSearchFor(event.target.value);

    if (event.key === 'Enter') {
      searchCustomers();
    }
  };

  return /*#__PURE__*/_react.default.createElement(_reactstrap.Container, {
    fluid: true
  }, /*#__PURE__*/_react.default.createElement(_Header.default, null, /*#__PURE__*/_react.default.createElement(_HeaderTitle.default, null, _user.default.customer)), /*#__PURE__*/_react.default.createElement(_reactstrap.Row, null, /*#__PURE__*/_react.default.createElement(_reactstrap.Col, null, /*#__PURE__*/_react.default.createElement(_reactstrap.Card, null, /*#__PURE__*/_react.default.createElement(_reactstrap.CardHeader, {
    className: "grey-color"
  }, /*#__PURE__*/_react.default.createElement(_reactstrap.CardTitle, {
    tag: "h5",
    className: "mb-0"
  }, _user.default.search_customer)), /*#__PURE__*/_react.default.createElement(_reactstrap.CardBody, null, /*#__PURE__*/_react.default.createElement(_reactstrap.Row, null, /*#__PURE__*/_react.default.createElement(_reactstrap.Label, {
    className: "f--size__16 mt-2",
    for: "SearchType"
  }, _user.default.search_by, ": \xA0"), /*#__PURE__*/_react.default.createElement(_reactstrap.Col, {
    md: 4
  }, /*#__PURE__*/_react.default.createElement(_Input.default, {
    type: "select",
    isClearable: false,
    placeholder: _user.default.search_by,
    defaultValue: {
      value: 'by-phone-number',
      label: _user.default.by_phone_number
    },
    onChange: setSearchType,
    options: Object.keys(SearchParams).map(function (key) {
      return {
        value: key,
        label: SearchParams[key]
      };
    })
  })), /*#__PURE__*/_react.default.createElement(_reactstrap.Col, {
    md: 4
  }, /*#__PURE__*/_react.default.createElement(_reactstrap.Input, {
    autoFocus: true,
    invalid: searchError,
    onKeyUp: updateSearchFor,
    id: "searchFor",
    placeholder: "".concat(SearchParams[searchBy], " ").concat(_user.default.for, ". . .")
  })), /*#__PURE__*/_react.default.createElement(_reactstrap.Col, {
    md: 3
  }, /*#__PURE__*/_react.default.createElement(_reactstrap.Button, {
    onClick: searchCustomers,
    color: "success",
    size: "lg"
  }, _user.default.search))))))), /*#__PURE__*/_react.default.createElement(_reactstrap.Row, null, /*#__PURE__*/_react.default.createElement(_reactstrap.Col, null, /*#__PURE__*/_react.default.createElement(_Table.default, {
    showSearchResult: showSearchResult,
    tableTitle: _user.default.search_result_title,
    serverSide: true,
    fetchData: _userServices.getListUserData,
    extraQuery: extraQuery,
    colorHeader: "",
    defaultSortFieldColumn: "",
    defaultSortAscending: false,
    columns: columns,
    autoFetch: enableAutoFetch,
    noDataComponent: /*#__PURE__*/_react.default.createElement("div", {
      style: {
        padding: '24px'
      }
    }, _user.default.no_data_message)
  }))));
};

var _default = SearchCustomer;
exports.default = _default;