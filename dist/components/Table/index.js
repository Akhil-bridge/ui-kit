"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactDataTableComponent = _interopRequireWildcard(require("react-data-table-component"));

var _lodash = _interopRequireDefault(require("lodash"));

var _reactstrap = require("reactstrap");

var _reactFeather = require("react-feather");

var _parseToQueryString = require("../../utils/parseToQueryString");

require("./_index.scss");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var TableComponent = function TableComponent(props) {
  var options = props;

  var _useState = (0, _react.useState)([]),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      rawData = _useState2[0],
      setRawData = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      data = _useState4[0],
      setData = _useState4[1];

  var _useState5 = (0, _react.useState)(options.loading),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      loading = _useState6[0],
      setLoading = _useState6[1];

  var _useState7 = (0, _react.useState)(0),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      totalRows = _useState8[0],
      setTotalRows = _useState8[1];

  var _useState9 = (0, _react.useState)(options.paginationRowsPerPageOptions[0]),
      _useState10 = (0, _slicedToArray2.default)(_useState9, 2),
      perPage = _useState10[0],
      setPerPage = _useState10[1];

  var _useState11 = (0, _react.useState)(1),
      _useState12 = (0, _slicedToArray2.default)(_useState11, 2),
      page = _useState12[0],
      setPage = _useState12[1];

  var _useState13 = (0, _react.useState)(options.defaultSortFieldColumn),
      _useState14 = (0, _slicedToArray2.default)(_useState13, 2),
      column = _useState14[0],
      setColumn = _useState14[1];

  var _useState15 = (0, _react.useState)(options.defaultSortAscending),
      _useState16 = (0, _slicedToArray2.default)(_useState15, 2),
      ascending = _useState16[0],
      setAscending = _useState16[1];

  var _useState17 = (0, _react.useState)(false),
      _useState18 = (0, _slicedToArray2.default)(_useState17, 1),
      resetPaginationToggle = _useState18[0];

  var _useState19 = (0, _react.useState)(options.columns),
      _useState20 = (0, _slicedToArray2.default)(_useState19, 2),
      tableColumn = _useState20[0],
      setTableColumn = _useState20[1];

  var simpleColumn = [{
    selector: 'key'
  }, {
    selector: 'value',
    right: true
  }];
  var customStyles = {
    header: {
      style: {
        display: 'none'
      }
    },
    headCells: {
      style: {
        margin: '5px 0',
        fontSize: '16px'
      }
    },
    rows: {
      style: {
        padding: '0',
        '&:not(:last-of-type)': {
          borderBottomStyle: 'none'
        },
        '&:nth-child(odd)': {
          backgroundColor: '#f8f8f8',
          borderRadius: '8px'
        }
      }
    },
    cells: {
      style: {
        '&:not(:last-of-type)': {
          margin: '10px 0',
          width: 'max-content',
          borderRightColor: _reactDataTableComponent.defaultThemes.default.divider.default
        }
      }
    }
  };

  var baseQuery = _objectSpread({
    page: page,
    item_per_page: perPage,
    column: column,
    ascending: ascending,
    q: ''
  }, options.extraQuery);

  var fetchData = function fetchData(newPage) {
    setLoading(true);

    if (!options.fetchData) {
      setLoading(false);
      return false;
    }

    options.fetchData((0, _parseToQueryString.parseToQueryString)(_objectSpread(_objectSpread({}, baseQuery), {}, {
      page: newPage
    }))).then(function (r) {
      if (r && r.data) {
        options.isEmptyData(r.data.length === 0);
        setData(r.data.map(function (e, i) {
          e.no = i + Number(perPage) * (Number(page) - 1) + 1;
          return e;
        }));
        setTotalRows(r.length);
        options.propTable(options.extraQuery);
      } else {
        options.isEmptyData(true);
        setData([]);
        setTotalRows(0);
      }
    });
    setLoading(false);
    return true;
  };

  var handlePageChange = function handlePageChange(newPage) {
    if (options.serverSide) {
      fetchData(newPage);
    } else {
      setData(_lodash.default.orderBy(rawData, [column], [options.defaultSortAscending]).slice(perPage * (newPage - 1), perPage * newPage).map(function (e, i) {
        e.no = i + Number(perPage) * (Number(newPage) - 1) + 1;
        return e;
      }));
    }

    setPage(newPage);
  };

  var handlePerRowsChange = function handlePerRowsChange(newPerPage, newPage) {
    setLoading(true);

    if (options.serverSide) {
      options.fetchData((0, _parseToQueryString.parseToQueryString)(_objectSpread(_objectSpread({}, baseQuery), {}, {
        page: newPage,
        item_per_page: newPerPage
      }))).then(function (r) {
        if (r && r.data) {
          setPage(newPage);
          setData(r.data.map(function (e, i) {
            e.no = i + Number(r.item_per_page) * (Number(r.page) - 1) + 1;
            return e;
          }));
          setPerPage(newPerPage);
        } else {
          setData([]);
          setTotalRows(0);
        }
      });
    } else {
      setData(_lodash.default.orderBy(rawData, [column], [options.defaultSortAscending]).slice(newPerPage * (newPage - 1), newPerPage * newPage).map(function (e, i) {
        e.no = i + Number(newPerPage) * (Number(newPage) - 1) + 1;
        return e;
      }));
    }

    setLoading(false);
  };

  var handleSort = function handleSort(newColumn, sortDirection) {
    setLoading(true);

    if (options.serverSide) {
      options.fetchData((0, _parseToQueryString.parseToQueryString)(_objectSpread(_objectSpread({}, baseQuery), {}, {
        column: newColumn.selector,
        ascending: sortDirection === 'asc'
      }))).then(function (r) {
        if (r && r.data) {
          setColumn(newColumn.selector);
          setAscending(sortDirection === 'asc');
          setData(r.data.map(function (e, i) {
            e.no = i + Number(r.item_per_page) * (Number(r.page) - 1) + 1;
            return e;
          }));
          options.propTable({
            column: newColumn.selector,
            ascending: sortDirection === 'asc'
          });
        } else {
          setData([]);
          setTotalRows(0);
        }
      });
    } else if (newColumn.selector) {
      setData(_lodash.default.orderBy(rawData, [newColumn.selector], [sortDirection]).slice(perPage * (page - 1), perPage * page).map(function (e, i) {
        e.no = i + Number(perPage) * (Number(page) - 1) + 1;
        return e;
      }));
    }

    setLoading(false);
  };

  (0, _react.useEffect)(function () {
    if (options.serverSide) {
      fetchData(page);
    } else if (options.simpleMode) {
      setData(options.data);
      setTableColumn(simpleColumn);
      setLoading(options.loading);
    } else {
      setRawData(options.data);
      setData(_lodash.default.orderBy(options.data, [column], [options.defaultSortAscending]).slice(perPage * (page - 1), perPage * page).map(function (e, i) {
        e.no = i + Number(perPage) * (Number(page) - 1) + 1;
        return e;
      }));
      setTotalRows(options.data.length);
    }
  }, [options]);

  var handleRowSelected = _react.default.useCallback(function () {}, []);

  var rowSelectCritera = function rowSelectCritera(row) {
    return row.status;
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, options.showSearchResult && /*#__PURE__*/_react.default.createElement(_reactstrap.Card, {
    className: "flex-fill w-100"
  }, !options.isNotUseHeadertable && /*#__PURE__*/_react.default.createElement(_reactstrap.CardHeader, {
    className: "pl-3 grey-color"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card-actions float-right"
  }, options.isRefresh && /*#__PURE__*/_react.default.createElement("span", {
    className: "cursor-pointer mr-1"
  }, /*#__PURE__*/_react.default.createElement(_reactFeather.RefreshCw, {
    className: "card-actions__svg__refresh"
  })), options.createBtn && /*#__PURE__*/_react.default.createElement(_reactstrap.Button, {
    color: "primary",
    className: "p-1 ml-3"
  }, /*#__PURE__*/_react.default.createElement("span", {
    onClick: options.navCreate
  }, /*#__PURE__*/_react.default.createElement(_reactFeather.PlusSquare, (0, _defineProperty2.default)({
    size: 24,
    className: "card-actions__svg__square"
  }, "className", "mr-2")), /*#__PURE__*/_react.default.createElement("label", null, "Create")))), /*#__PURE__*/_react.default.createElement(_reactstrap.CardTitle, {
    tag: "h5",
    className: "mb-0"
  }, options.name)), /*#__PURE__*/_react.default.createElement(_reactDataTableComponent.default, {
    className: options.useCustomHeaderTable ? 'tableHeader' : null,
    columns: tableColumn,
    data: data,
    progressPending: loading,
    pagination: options.pagination,
    paginationServer: true,
    paginationTotalRows: totalRows,
    paginationComponentOptions: {
      rowsPerPageText: options.paginationOptionsRowsPerPageText,
      rangeSeparatorText: options.paginationOptionsRangeSeparatorText,
      selectAllRowsItemText: options.paginationSelectAllRowsItemText
    },
    paginationResetDefaultPage: resetPaginationToggle,
    paginationRowsPerPageOptions: options.paginationRowsPerPageOptions,
    onChangeRowsPerPage: handlePerRowsChange,
    onChangePage: handlePageChange,
    onSort: handleSort,
    sortServer: true,
    persistTableHead: true,
    defaultSortField: options.defaultSortFieldColumn,
    customStyles: customStyles,
    expandableRows: options.expandable,
    expandableRowsComponent: options.expandableRowsComponent,
    dense: true,
    responsive: true,
    selectableRows: options.checkbox,
    onSelectedRowsChange: handleRowSelected,
    selectableRowSelected: rowSelectCritera,
    noHeader: options.noHeader,
    noTableHead: options.noTableHead
  })));
};

TableComponent.defaultProps = {
  name: '',
  serverSide: true,
  fetchData: null,
  extraQuery: {},
  colorHeader: '#0d47a1',
  defaultSortFieldColumn: '',
  defaultSortAscending: false,
  pagination: false,
  paginationRowsPerPageOptions: [10, 50, 100],
  paginationOptionsRowsPerPageText: 'Rows per page:',
  paginationOptionsRangeSeparatorText: 'of',
  paginationSelectAllRowsItemText: 'All',
  expandable: false,
  simpleMode: false,
  noHeader: false,
  isNotUseHeadertable: false,
  noTableHead: false,
  loading: false,
  expandableRowsComponent: function expandableRowsComponent(e) {
    return /*#__PURE__*/_react.default.createElement("div", null, JSON.stringify(e));
  },
  isEmptyData: function isEmptyData() {},
  propTable: function propTable() {},
  columns: [],
  selectableRows: false,
  createBtn: false,
  navCreate: function navCreate() {},
  isRefresh: true,
  useCustomHeaderTable: false,
  checkbox: false,
  showSearchResult: true,
  handleRowSelected: function handleRowSelected() {}
};
var _default = TableComponent;
exports.default = _default;