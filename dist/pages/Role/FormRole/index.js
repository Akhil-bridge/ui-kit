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

var _reactRouterDom = require("react-router-dom");

var _Header = _interopRequireDefault(require("../../../components/Header"));

var _HeaderTitle = _interopRequireDefault(require("../../../components/HeaderTitle"));

var _Table = _interopRequireDefault(require("../../../components/Table"));

var _roleServices = require("../../../services/roleServices");

var _Checkbox = _interopRequireDefault(require("../../../components/Checkbox"));

require("./_index.scss");

var FormRole = function FormRole(props) {
  var history = (0, _reactRouterDom.useHistory)();
  var options = props; // for validattion API

  var pageTitle = options.title.replace(/[_-]/g, ' ');
  var methodTitle = pageTitle.split(' ').slice(0, 1);

  var _useState = (0, _react.useState)(true),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      tooltipOpen = _useState2[0],
      setTooltipOpen = _useState2[1];

  var toggle = function toggle() {
    return setTooltipOpen(!tooltipOpen);
  };

  var columns = [{
    name: 'Menu/Sub menu - Object',
    selector: 'no',
    cell: function cell(row) {
      return row.name;
    }
  }, {
    name: 'Actions Permission',
    selector: 'no',
    cell: function cell(row) {
      return /*#__PURE__*/_react.default.createElement(_reactstrap.ListGroup, null, row.permission.map(function (item) {
        return /*#__PURE__*/_react.default.createElement(_reactstrap.ListGroupItem, {
          className: "border-0 bg-transparent pt-0 pb-0 pl-0",
          key: Math.random().toString(36).substring(3)
        }, /*#__PURE__*/_react.default.createElement(_reactstrap.Row, {
          className: "m-1"
        }, /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
          checked: item.status,
          disable: !row.status,
          onClick: function onClick() {
            return console.log('onchange checked');
          }
        }), /*#__PURE__*/_react.default.createElement(_reactstrap.Label, {
          id: "label-tooltip"
        }, item.name), /*#__PURE__*/_react.default.createElement(_reactstrap.UncontrolledTooltip, {
          target: "label-tooltip"
        }, item.description)));
      }));
    }
  }];

  var handleRowSelected = _react.default.useCallback(function (state) {
    console.log('state', state); // setSelectedRows(state.selectedRows);
  }, []);

  return /*#__PURE__*/_react.default.createElement(_reactstrap.Container, null, /*#__PURE__*/_react.default.createElement(_Header.default, null, /*#__PURE__*/_react.default.createElement(_HeaderTitle.default, {
    className: "text-capitalize"
  }, pageTitle)), /*#__PURE__*/_react.default.createElement(_reactstrap.Card, null, /*#__PURE__*/_react.default.createElement(_reactstrap.CardHeader, {
    className: "grey-color"
  }, /*#__PURE__*/_react.default.createElement(_reactstrap.CardTitle, {
    tag: "h5",
    className: "mb-0 f--size__16 text-capitalize"
  }, pageTitle)), /*#__PURE__*/_react.default.createElement(_reactstrap.CardBody, {
    className: "mt-2"
  }, /*#__PURE__*/_react.default.createElement(_reactstrap.Row, {
    className: "mt-2 mr-2 mb-2"
  }, /*#__PURE__*/_react.default.createElement(_reactstrap.Col, {
    md: 2,
    className: "align-self-center"
  }, /*#__PURE__*/_react.default.createElement(_reactstrap.Label, {
    className: "f--size__16"
  }, "Name"), /*#__PURE__*/_react.default.createElement("span", {
    className: "fa-pull-right"
  }, ":")), /*#__PURE__*/_react.default.createElement(_reactstrap.Col, {
    md: 3,
    className: "flex-shrink-1"
  }, /*#__PURE__*/_react.default.createElement(_reactstrap.Input, {
    name: "name",
    placeholder: "Role Name"
  }))), /*#__PURE__*/_react.default.createElement(_reactstrap.Row, {
    className: "mt-2 mr-2 mb-2"
  }, /*#__PURE__*/_react.default.createElement(_reactstrap.Col, {
    md: 2,
    className: "align-self-center"
  }, /*#__PURE__*/_react.default.createElement(_reactstrap.Label, {
    className: "f--size__16"
  }, "Description"), /*#__PURE__*/_react.default.createElement("span", {
    className: "fa-pull-right"
  }, ":")), /*#__PURE__*/_react.default.createElement(_reactstrap.Col, {
    md: 3,
    className: "flex-shrink-1"
  }, /*#__PURE__*/_react.default.createElement(_reactstrap.Input, {
    name: "description",
    placeholder: "Description"
  }))), /*#__PURE__*/_react.default.createElement(_reactstrap.Row, {
    className: "mt-2 mr-2 mb-2"
  }, /*#__PURE__*/_react.default.createElement(_reactstrap.Col, {
    md: 2,
    className: "align-item-flex-start"
  }, /*#__PURE__*/_react.default.createElement(_reactstrap.Label, {
    className: "f--size__16"
  }, "Permission"), /*#__PURE__*/_react.default.createElement("span", {
    className: "fa-pull-right"
  }, ":")), /*#__PURE__*/_react.default.createElement(_reactstrap.Col, null, /*#__PURE__*/_react.default.createElement(_Table.default, {
    isRefresh: false,
    columns: columns,
    fetchData: _roleServices.getPermission,
    serverSide: true,
    isNotUseHeadertable: true,
    useCustomHeaderTable: true,
    checkbox: true,
    handleRowSelected: handleRowSelected
  }))), /*#__PURE__*/_react.default.createElement(_reactstrap.Row, {
    className: "float-left offset-2"
  }, /*#__PURE__*/_react.default.createElement(_reactstrap.Button, {
    color: "danger",
    size: "lg",
    onClick: function onClick() {
      return console.log('delete role');
    }
  }, "Delete Role")), /*#__PURE__*/_react.default.createElement(_reactstrap.Row, {
    className: "float-right mr-2"
  }, /*#__PURE__*/_react.default.createElement(_reactstrap.Button, {
    color: "info",
    size: "lg",
    onClick: function onClick() {
      return history.goBack();
    },
    className: "m-2"
  }, "Back"), /*#__PURE__*/_react.default.createElement(_reactstrap.Button, {
    color: "success",
    size: "lg",
    className: "m-2",
    onClick: function onClick() {
      return console.log('save');
    }
  }, "Save")))));
};

var _default = FormRole;
exports.default = _default;