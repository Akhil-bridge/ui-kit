"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _reactRouterDom = require("react-router-dom");

var _classnames = _interopRequireDefault(require("classnames"));

var _reactstrap = require("reactstrap");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _Menu = _interopRequireDefault(require("../../layouts/Menu"));

var _routes2 = _interopRequireDefault(require("../../routes"));

var _logo = _interopRequireDefault(require("../../assets/img/logo/logo.png"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// import avatar from "../assets/img/avatars/avatar.jpg";
var initOpenRoutes = function initOpenRoutes(location) {
  /* Open collapse element that matches current url */
  var pathName = location.pathname;
  var _routes = {};

  _routes2.default.forEach(function (route, index) {
    var isActive = pathName.indexOf(route.path) === 0;
    var isOpen = route.open;
    var isHome = !!(route.containsHome && pathName === '/');
    _routes = _objectSpread(_objectSpread({}, _routes), {}, (0, _defineProperty2.default)({}, index, isActive || isOpen || isHome));
  });

  return _routes;
};

var SidebarCategory = (0, _reactRouterDom.withRouter)(function (_ref) {
  var name = _ref.name,
      badgeColor = _ref.badgeColor,
      badgeText = _ref.badgeText,
      icon = _ref.icon,
      isOpen = _ref.isOpen,
      children = _ref.children,
      onClick = _ref.onClick,
      location = _ref.location,
      to = _ref.to;

  var getSidebarItemClass = function getSidebarItemClass(path) {
    return location.pathname.indexOf(path) !== -1 || location.pathname === '/' && path === '/dashboard' ? 'active' : '';
  };

  return /*#__PURE__*/_react.default.createElement("li", {
    className: "sidebar-item ".concat(getSidebarItemClass(to))
  }, /*#__PURE__*/_react.default.createElement("span", {
    "data-toggle": "collapse",
    className: "sidebar-link ".concat(!isOpen ? 'collapsed' : ''),
    onClick: onClick,
    "aria-expanded": isOpen ? 'true' : 'false'
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: icon,
    fixedWidth: true,
    className: "align-middle mr-2"
  }), ' ', /*#__PURE__*/_react.default.createElement("span", {
    className: "align-middle"
  }, name), badgeColor && badgeText ? /*#__PURE__*/_react.default.createElement(_reactstrap.Badge, {
    color: badgeColor,
    size: 18,
    pill: true,
    className: "sidebar-badge"
  }, badgeText) : null), /*#__PURE__*/_react.default.createElement(_reactstrap.Collapse, {
    isOpen: isOpen
  }, /*#__PURE__*/_react.default.createElement("ul", {
    id: "item",
    className: "sidebar-dropdown list-unstyled"
  }, children)));
});
var SidebarItem = (0, _reactRouterDom.withRouter)(function (_ref2) {
  var name = _ref2.name,
      badgeColor = _ref2.badgeColor,
      badgeText = _ref2.badgeText,
      icon = _ref2.icon,
      location = _ref2.location,
      to = _ref2.to;

  var getSidebarItemClass = function getSidebarItemClass(path) {
    return location.pathname === path ? 'active' : '';
  };

  return /*#__PURE__*/_react.default.createElement("li", {
    className: "sidebar-item ".concat(getSidebarItemClass(to))
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    to: to,
    className: "sidebar-link",
    activeClassName: "active"
  }, icon ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: icon,
    fixedWidth: true,
    className: "align-middle mr-2"
  }), ' ', /*#__PURE__*/_react.default.createElement("span", {
    className: "align-middle"
  }, name)) : name, ' ', badgeColor && badgeText ? /*#__PURE__*/_react.default.createElement(_reactstrap.Badge, {
    color: badgeColor,
    size: 18,
    pill: true,
    className: "sidebar-badge"
  }, badgeText) : null));
});

var Sidebar = function Sidebar(_ref3) {
  var location = _ref3.location,
      sidebar = _ref3.sidebar;

  var _useState = (0, _react.useState)(function () {
    return initOpenRoutes(location);
  }),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      openRoutes = _useState2[0],
      setOpenRoutes = _useState2[1];

  var toggle = function toggle(index) {
    // Collapse all elements
    Object.keys(openRoutes).forEach(function (item) {
      return openRoutes[index] || setOpenRoutes(function (openRoutes) {
        return _objectSpread(_objectSpread({}, openRoutes), {}, (0, _defineProperty2.default)({}, item, false));
      });
    }); // Toggle selected element

    setOpenRoutes(function (openRoutes) {
      return _objectSpread(_objectSpread({}, openRoutes), {}, (0, _defineProperty2.default)({}, index, !openRoutes[index]));
    });
  };

  return /*#__PURE__*/_react.default.createElement("nav", {
    className: (0, _classnames.default)('sidebar', sidebar.isOpen || 'toggled', !sidebar.isOnRight || 'sidebar-right')
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sidebar-content"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: (0, _classnames.default)('sidebar-brand', !sidebar.isOnRight || 'text-right'),
    href: "/"
  }, sidebar.isOnRight || /*#__PURE__*/_react.default.createElement("img", {
    src: _logo.default,
    alt: "Dimii"
  }), ' ', !sidebar.isOnRight || /*#__PURE__*/_react.default.createElement("img", {
    src: _logo.default,
    alt: "Dimii"
  })), /*#__PURE__*/_react.default.createElement("ul", {
    className: "sidebar-nav"
  }, _Menu.default.map(function (category, index) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: index
    }, category.header ? /*#__PURE__*/_react.default.createElement("li", {
      className: "sidebar-header"
    }, category.header) : null, category.children ? /*#__PURE__*/_react.default.createElement(SidebarCategory, {
      name: category.name,
      badgeColor: category.badgeColor,
      badgeText: category.badgeText,
      icon: category.icon,
      to: category.path,
      isOpen: openRoutes[index],
      onClick: function onClick() {
        return toggle(index);
      }
    }, category.children.map(function (route, index) {
      return /*#__PURE__*/_react.default.createElement(SidebarItem, {
        key: index,
        name: route.name,
        to: route.path,
        badgeColor: route.badgeColor,
        badgeText: route.badgeText
      });
    })) : /*#__PURE__*/_react.default.createElement(SidebarItem, {
      name: category.name,
      to: category.path,
      icon: category.icon,
      badgeColor: category.badgeColor,
      badgeText: category.badgeText
    }));
  }))));
};

var _default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(function (store) {
  return {
    sidebar: store.main
  };
})(Sidebar));

exports.default = _default;