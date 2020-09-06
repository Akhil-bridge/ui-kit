"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = asyncComponent;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireDefault(require("react"));

var _Loader = _interopRequireDefault(require("../Loader"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function asyncComponent(importComponent) {
  var AsyncComponent = /*#__PURE__*/function (_React$Component) {
    (0, _inherits2.default)(AsyncComponent, _React$Component);

    var _super = _createSuper(AsyncComponent);

    function AsyncComponent(props) {
      var _this;

      (0, _classCallCheck2.default)(this, AsyncComponent);
      _this = _super.call(this, props);
      _this.state = {
        component: null
      };
      return _this;
    }

    (0, _createClass2.default)(AsyncComponent, [{
      key: "componentDidMount",
      value: function () {
        var _componentDidMount = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
          var _yield$importComponen, component;

          return _regenerator.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return importComponent();

                case 2:
                  _yield$importComponen = _context.sent;
                  component = _yield$importComponen.default;
                  this.setState({
                    component: component
                  });

                case 5:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function componentDidMount() {
          return _componentDidMount.apply(this, arguments);
        }

        return componentDidMount;
      }()
    }, {
      key: "render",
      value: function render() {
        var C = this.state.component;
        return C ? /*#__PURE__*/_react.default.createElement(C, this.props) : /*#__PURE__*/_react.default.createElement(_Loader.default, null);
      }
    }]);
    return AsyncComponent;
  }(_react.default.Component);

  return AsyncComponent;
}