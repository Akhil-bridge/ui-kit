"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _reactSelect = _interopRequireDefault(require("react-select/async/dist/react-select.esm"));

var _asyncCreatable = _interopRequireDefault(require("react-select/async-creatable"));

var _reactSelect2 = _interopRequireDefault(require("react-select"));

var _reactDatepicker = _interopRequireDefault(require("react-datepicker"));

require("./_index.scss");

var _Input = _interopRequireDefault(require("reactstrap/lib/Input"));

/**
 * please read interface as a default props at the bottom line code for details.
 * this component included : all input type, all input select type, and all date time picker type.
 * * */
function CInput(props) {
  var options = props;
  var InputDate = (0, _react.forwardRef)(function (p, ref) {
    return (
      /*#__PURE__*/
      // eslint-disable-next-line react/jsx-filename-extension
      _react.default.createElement(_Input.default, {
        className: "form-control bc--white date-input",
        onClick: p.onClick,
        value: p.value,
        type: "text",
        readOnly: true
      })
    );
  });

  var createLabel = function createLabel(inputValue) {
    return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("a", {
      className: "c--cool_blue"
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "m__l--10 m__r--10 f--ubuntu__bold"
    }, "+"), ' ', "Tambah tujuan pengriman"));
  };

  switch (options.type) {
    case 'select':
      return (
        /*#__PURE__*/
        // eslint-disable-next-line react/jsx-filename-extension
        _react.default.createElement(_reactSelect2.default, {
          isSearchable: options.isSearchable,
          isClearable: options.isClearable,
          string: true,
          defaultValue: options.defaultValue,
          placeholder: options.placeholder,
          onChange: options.onChange,
          noOptionsMessage: function noOptionsMessage() {
            return options.noOptionsMessage;
          },
          options: options.options
        })
      );

    case 'select-async':
      return /*#__PURE__*/_react.default.createElement(_reactSelect.default, {
        className: "inherit-z-index",
        defaultOptions: true,
        isClearable: true,
        onChange: options.onChange,
        placeholder: options.placeholder,
        loadOptions: options.loadOptions,
        noOptionsMessage: function noOptionsMessage() {
          return options.noOptionsMessage;
        },
        isOptionDisabled: options.isOptionDisabled
      });

    case 'select-async-creatable':
      return /*#__PURE__*/_react.default.createElement(_asyncCreatable.default, {
        className: "inherit-z-index",
        defaultOptions: true,
        isClearable: true,
        createOptionPosition: "first",
        onChange: options.onChange,
        placeholder: options.placeholder,
        loadOptions: options.loadOptions,
        noOptionsMessage: function noOptionsMessage() {
          return options.noOptionsMessage;
        },
        allowCreateWhileLoading: true,
        formatCreateLabel: createLabel,
        name: "asd",
        isOptionDisabled: options.isOptionDisabled
      });

    case 'date-picker':
      return /*#__PURE__*/_react.default.createElement(_reactDatepicker.default, {
        className: "form-control",
        dateFormat: options.dateFormat,
        onChange: options.onChange,
        maxDate: options.maxDate,
        minDate: options.minDate,
        selected: options.selected,
        customInput: /*#__PURE__*/_react.default.createElement(InputDate, null)
      });

    case 'time-picker':
      return /*#__PURE__*/_react.default.createElement(_reactDatepicker.default, (0, _extends2.default)({}, options, {
        className: "form-control",
        onChange: options.onChange,
        selected: options.selected,
        showTimeSelect: true,
        showTimeSelectOnly: true,
        timeIntervals: 10,
        timeCaption: options.timeCaption,
        customInput: /*#__PURE__*/_react.default.createElement(InputDate, {
          type: "time"
        }),
        dateFormat: "h:mm"
      }));

    case 'date-time-picker':
      return /*#__PURE__*/_react.default.createElement(_reactDatepicker.default, {
        className: "form-control",
        type: "date",
        dateFormat: "".concat(options.dateFormat, " hh:mm"),
        onChange: options.onChange,
        maxDate: options.maxDate,
        minDate: options.minDate,
        selected: options.selected,
        customInput: /*#__PURE__*/_react.default.createElement(InputDate, null),
        timeInputLabel: options.timeInputLabel,
        showTimeInput: true
      });

    default:
      return /*#__PURE__*/_react.default.createElement(_reactSelect2.default, {
        isSearchable: true,
        isClearable: true,
        string: true,
        onChange: options.onChange,
        placeholder: options.placeholder,
        noOptionsMessage: function noOptionsMessage() {
          return options.noOptionsMessage;
        },
        options: options.options
      });
  }
}

CInput.defaultProps = (0, _defineProperty2.default)({
  /**
   * this for general props.
   * begin
   * * */
  onChange: function onChange() {},
  placeholder: '',

  /**
   * end.
   * * */

  /**
   * this props for select input base from react select (https://react-select.com/props).
   * loadOptions is for asynchronous options.
   * begin
   * * */
  options: [],
  loadOptions: null,
  noOptionsMessage: 'No options',
  isClearable: true,
  isSearchable: true,

  /**
   * end.
   * * */

  /**
   * this props for date picker base from react date picker (https://reactdatepicker.com/).
   * timeInputLabel, timeCaption only use when time picker is active
   * begin
   * * */
  dateFormat: 'MM/dd/yyyy',
  maxDate: null,
  minDate: null,
  selected: new Date(),
  timeInputLabel: 'Time:',
  timeCaption: 'Time'
}, "isClearable", true);
var _default = CInput;
exports.default = _default;