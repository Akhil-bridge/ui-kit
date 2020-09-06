"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _reactReduxToastr = _interopRequireDefault(require("react-redux-toastr"));

var _redux = _interopRequireDefault(require("./redux"));

var _Routes = _interopRequireDefault(require("./routes/component/Routes"));

require("./assets/scss/_app.scss");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var App = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(App, _React$Component);

  var _super = _createSuper(App);

  function App() {
    (0, _classCallCheck2.default)(this, App);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Remove `active` className from `.splash` element in `public/index.html`
      !document.querySelector('.splash') || document.querySelector('.splash').classList.remove('active');
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement(_reactRedux.Provider, {
        store: _redux.default
      }, /*#__PURE__*/_react.default.createElement(_Routes.default, null), /*#__PURE__*/_react.default.createElement(_reactReduxToastr.default, {
        timeOut: 5000,
        newestOnTop: true,
        position: "top-right",
        transitionIn: "fadeIn",
        transitionOut: "fadeOut",
        progressBar: true,
        closeOnToastrClick: true
      }));
    }
  }]);
  return App;
}(_react.default.Component);

var _default = App;
exports.default = _default;