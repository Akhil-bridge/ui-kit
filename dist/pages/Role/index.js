"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactstrap = require("reactstrap");

var _reactRouterDom = require("react-router-dom");

var _Header = _interopRequireDefault(require("../../components/Header"));

var _HeaderTitle = _interopRequireDefault(require("../../components/HeaderTitle"));

var _Table = _interopRequireDefault(require("../../components/Table"));

var _roleServices = require("../../services/roleServices");

var _role = _interopRequireDefault(require("../../strings/role/role"));

var _Input = _interopRequireDefault(require("../../components/Input"));

var Role = function Role() {
  var history = (0, _reactRouterDom.useHistory)();
  var columns = [{
    name: _role.default.label_column_no,
    selector: 'no',
    width: '50px'
  }, {
    name: _role.default.label_column_role,
    cell: function cell(row) {
      return row.name;
    },
    width: '200px'
  }, {
    name: _role.default.label_column_permission,
    cell: function cell(row) {
      return /*#__PURE__*/_react.default.createElement(_reactstrap.ListGroup, {
        style: {
          marginLeft: 0
        }
      }, row.permission.map(function (item) {
        return /*#__PURE__*/_react.default.createElement(_reactstrap.ListGroupItem, {
          className: "border-0 bg-transparent pt-0 pb-0 pl-0",
          key: Math.random().toString(36).substring(3)
        }, item);
      }));
    }
  }, {
    name: _role.default.label_column_actions,
    cell: function cell() {
      return /*#__PURE__*/_react.default.createElement(_reactstrap.Button, {
        color: "outline-primary",
        size: "md",
        onClick: function onClick() {
          return history.push('/role-detail');
        }
      }, _role.default.label_button_details);
    },
    ignoreRowClick: true,
    allowOverflow: true,
    button: true
  }];
  var optionSearch = [{
    value: 'role_name',
    label: 'Role Name'
  }, {
    value: 'permission',
    label: 'Permission'
  }];
  return /*#__PURE__*/_react.default.createElement(_reactstrap.Container, {
    fluid: true
  }, /*#__PURE__*/_react.default.createElement(_Header.default, null, /*#__PURE__*/_react.default.createElement(_HeaderTitle.default, null, "Role User")), /*#__PURE__*/_react.default.createElement(_reactstrap.Card, null, /*#__PURE__*/_react.default.createElement(_reactstrap.CardHeader, null, /*#__PURE__*/_react.default.createElement(_reactstrap.CardTitle, {
    tag: "h5",
    className: "mb-0 f--size__16"
  }, "Filter Role")), /*#__PURE__*/_react.default.createElement(_reactstrap.CardBody, {
    className: "mt-2"
  }, /*#__PURE__*/_react.default.createElement(_reactstrap.Row, null, /*#__PURE__*/_react.default.createElement(_reactstrap.Col, {
    md: 2,
    className: "align-self-center"
  }, /*#__PURE__*/_react.default.createElement(_reactstrap.Label, {
    className: "f--size__16"
  }, "Search By"), /*#__PURE__*/_react.default.createElement("span", {
    className: "fa-pull-right"
  }, ":")), /*#__PURE__*/_react.default.createElement(_reactstrap.Col, {
    md: 3
  }, /*#__PURE__*/_react.default.createElement(_Input.default, {
    type: "select",
    isClearable: false,
    placeholder: "",
    defaultValue: optionSearch[0],
    onChange: function onChange(e) {
      return e;
    },
    options: optionSearch
  })), /*#__PURE__*/_react.default.createElement(_reactstrap.Col, {
    md: 3
  }, /*#__PURE__*/_react.default.createElement(_reactstrap.Input, {
    onChange: function onChange(e) {
      return e;
    },
    className: "h-100"
  }))), /*#__PURE__*/_react.default.createElement(_reactstrap.Row, null, /*#__PURE__*/_react.default.createElement(_reactstrap.Col, {
    className: "align-self-center offset-2 mt-3"
  }, /*#__PURE__*/_react.default.createElement(_reactstrap.Button, {
    color: "success",
    size: "lg"
  }, "Search"))))), /*#__PURE__*/_react.default.createElement(_reactstrap.Row, null, /*#__PURE__*/_react.default.createElement(_reactstrap.Col, null, /*#__PURE__*/_react.default.createElement(_Table.default, {
    serverSide: true,
    name: _role.default.title_table_role,
    defaultSortFieldColumn: "",
    defaultSortAscending: false,
    fetchData: _roleServices.getListRole,
    columns: columns,
    pagination: true,
    paginationRowsPerPageOptions: [10, 20, 50],
    paginationOptionsRowsPerPageText: _role.default.label_rows_per_page,
    paginationOptionsRangeSeparatorText: _role.default.label_range_separator_pagination,
    paginationSelectAllRowsItemText: _role.default.label_select_all_rows,
    checkbox: true,
    createBtn: true,
    navCreate: function navCreate() {
      return history.push('/role-create');
    }
  }))));
};

var _default = Role;
exports.default = _default;