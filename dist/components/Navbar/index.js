"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _reactstrap = require("reactstrap");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _actions = require("../../redux/main/actions");

// import avatar2 from "../assets/img/avatars/avatar-2.jpg";
// import avatar3 from "../assets/img/avatars/avatar-3.jpg";
// import avatar4 from "../assets/img/avatars/avatar-4.jpg";
// import avatar5 from "../assets/img/avatars/avatar-5.jpg";
// const notifications = [
//   {
//     type: "important",
//     title: "Update completed",
//     description: "Restart server 12 to complete the update.",
//     time: "2h ago"
//   },
//   {
//     type: "default",
//     title: "Lorem ipsum",
//     description: "Aliquam ex eros, imperdiet vulputate hendrerit et.",
//     time: "6h ago"
//   },
//   {
//     type: "login",
//     title: "Login from 192.186.1.1",
//     description: "",
//     time: "8h ago"
//   },
//   {
//     type: "request",
//     title: "New connection",
//     description: "Anna accepted your request.",
//     time: "12h ago"
//   }
// ];
//
// const messages = [
//   {
//     name: "Michelle Bilodeau",
//     avatar: avatar5,
//     description: "Nam pretium turpis et arcu. Duis arcu tortor.",
//     time: "5m ago"
//   },
//   {
//     name: "Kathie Burton",
//     avatar: avatar3,
//     description: "Pellentesque auctor neque nec urna.",
//     time: "30m ago"
//   },
//   {
//     name: "Alexander Groves",
//     avatar: avatar2,
//     description: "Curabitur ligula sapien euismod vitae.",
//     time: "2h ago"
//   },
//   {
//     name: "Daisy Seger",
//     avatar: avatar4,
//     description: "Aenean tellus metus, bibendum sed, posuere ac, mattis non.",
//     time: "5h ago"
//   }
// ];
//
// const NavbarDropdown = ({
//   children,
//   count,
//   header,
//   footer,
//   icon,
//   active,
//   indicator
// }) => (
//   <UncontrolledDropdown nav inNavbar className="ml-lg-1" active={active}>
//     <DropdownToggle nav className="nav-icon dropdown-toggle position-relative">
//       <FontAwesomeIcon icon={icon} className="align-middle" />
//       {indicator ? <span className="indicator" /> : ""}
//     </DropdownToggle>
//     <DropdownMenu right className="dropdown-menu-lg py-0">
//       <div className="dropdown-menu-header position-relative">
//         {count} {header}
//       </div>
//       <ListGroup>{children}</ListGroup>
//       <DropdownItem header className="dropdown-menu-footer">
//         <span className="text-muted">{footer}</span>
//       </DropdownItem>
//     </DropdownMenu>
//   </UncontrolledDropdown>
// );
//
// const NavbarDropdownItem = ({ icon, title, description, time, spacing }) => (
//   <ListGroupItem>
//     <Row noGutters className="align-items-center">
//       <Col xs={2}>{icon}</Col>
//       <Col xs={10} className={spacing ? "pl-2" : null}>
//         <div className="text-dark">{title}</div>
//         <div className="text-muted small mt-1">{description}</div>
//         <div className="text-muted small mt-1">{time}</div>
//       </Col>
//     </Row>
//   </ListGroupItem>
// );
var NavbarToggle = (0, _reactRedux.connect)(function (store) {
  return {
    app: store.app
  };
})(function (_ref) {
  var dispatch = _ref.dispatch;
  return /*#__PURE__*/_react.default.createElement("span", {
    className: "sidebar-toggle d-flex mr-2",
    onClick: function onClick() {
      dispatch((0, _actions.toggleSidebar)());
    }
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "hamburger align-self-center"
  }));
});
/* const NavbarSearch = connect((store) => ({
  sidebar: store.main,
}))(({ sidebar }) => (
  <Form inline>
    <Input
      type="text"
      placeholder="Search projects..."
      aria-label="Search"
      className={classNames(
        'form-control-lite',
        !sidebar.isOnRight || 'text-right',
      )}
    />
  </Form>
)); */

var NavbarDropdowns = (0, _reactRedux.connect)(function (store) {
  return {
    sidebar: store.main
  };
})(function (_ref2) {
  var sidebar = _ref2.sidebar;
  return /*#__PURE__*/_react.default.createElement(_reactstrap.Collapse, {
    navbar: true
  }, /*#__PURE__*/_react.default.createElement(_reactstrap.Nav, {
    className: !sidebar.isOnRight ? 'ml-auto' : 'mr-auto',
    navbar: true
  }, /*#__PURE__*/_react.default.createElement(_reactstrap.UncontrolledDropdown, {
    nav: true,
    inNavbar: true,
    className: "ml-lg-1"
  }, /*#__PURE__*/_react.default.createElement(_reactstrap.DropdownToggle, {
    nav: true,
    caret: true
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faCog,
    className: "align-middle"
  })), /*#__PURE__*/_react.default.createElement(_reactstrap.DropdownMenu, {
    right: true
  }, /*#__PURE__*/_react.default.createElement(_reactstrap.DropdownItem, null, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faArrowAltCircleRight,
    fixedWidth: true,
    className: "mr-2 align-middle"
  }), "Sign out")))));
});

var NavbarComponent = function NavbarComponent() {
  return /*#__PURE__*/_react.default.createElement(_reactstrap.Navbar, {
    expand: true,
    className: "navbar-theme"
  }, /*#__PURE__*/_react.default.createElement(NavbarToggle, null), /*#__PURE__*/_react.default.createElement(NavbarDropdowns, null));
};

var _default = NavbarComponent;
exports.default = _default;