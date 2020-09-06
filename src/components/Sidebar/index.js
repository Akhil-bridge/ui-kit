import React, { useState } from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import classNames from 'classnames';

import { Badge, Collapse } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import menus from '../../layouts/Menu';
import routes from '../../routes';

import logo from '../../assets/img/logo/logo.png';
// import avatar from "../assets/img/avatars/avatar.jpg";

const initOpenRoutes = (location) => {
  /* Open collapse element that matches current url */
  const pathName = location.pathname;

  let _routes = {};

  routes.forEach((route, index) => {
    const isActive = pathName.indexOf(route.path) === 0;
    const isOpen = route.open;
    const isHome = !!(route.containsHome && pathName === '/');

    _routes = { ..._routes, [index]: isActive || isOpen || isHome };
  });

  return _routes;
};

const SidebarCategory = withRouter(
  ({
    name,
    badgeColor,
    badgeText,
    icon,
    isOpen,
    children,
    onClick,
    location,
    to,
  }) => {
    const getSidebarItemClass = (path) => (location.pathname.indexOf(path) !== -1
        || (location.pathname === '/' && path === '/dashboard')
      ? 'active'
      : '');

    return (
      <li className={`sidebar-item ${getSidebarItemClass(to)}`}>
        <span
          data-toggle="collapse"
          className={`sidebar-link ${!isOpen ? 'collapsed' : ''}`}
          onClick={onClick}
          aria-expanded={isOpen ? 'true' : 'false'}
        >
          <FontAwesomeIcon
            icon={icon}
            fixedWidth
            className="align-middle mr-2"
          />
          {' '}
          <span className="align-middle">{name}</span>
          {badgeColor && badgeText ? (
            <Badge color={badgeColor} size={18} pill className="sidebar-badge">
              {badgeText}
            </Badge>
          ) : null}
        </span>
        <Collapse isOpen={isOpen}>
          <ul id="item" className="sidebar-dropdown list-unstyled">
            {children}
          </ul>
        </Collapse>
      </li>
    );
  },
);

const SidebarItem = withRouter(
  ({
    name, badgeColor, badgeText, icon, location, to,
  }) => {
    const getSidebarItemClass = (path) => (location.pathname === path ? 'active' : '');

    return (
      <li className={`sidebar-item ${getSidebarItemClass(to)}`}>
        <NavLink to={to} className="sidebar-link" activeClassName="active">
          {icon ? (
            <>
              <FontAwesomeIcon
                icon={icon}
                fixedWidth
                className="align-middle mr-2"
              />
              {' '}
              <span className="align-middle">{name}</span>
            </>
          ) : (
            name
          )}
          {' '}
          {badgeColor && badgeText ? (
            <Badge color={badgeColor} size={18} pill className="sidebar-badge">
              {badgeText}
            </Badge>
          ) : null}
        </NavLink>
      </li>
    );
  },
);

const Sidebar = ({ location, sidebar }) => {
  const [openRoutes, setOpenRoutes] = useState(() => initOpenRoutes(location));

  const toggle = (index) => {
    // Collapse all elements
    Object.keys(openRoutes).forEach(
      (item) => openRoutes[index] || setOpenRoutes((openRoutes) => ({ ...openRoutes, [item]: false })),
    );

    // Toggle selected element
    setOpenRoutes((openRoutes) => ({ ...openRoutes, [index]: !openRoutes[index] }));
  };

  return (
    <nav
      className={classNames(
        'sidebar',
        sidebar.isOpen || 'toggled',
        !sidebar.isOnRight || 'sidebar-right',
      )}
    >
      <div className="sidebar-content">
        <a
          className={classNames(
            'sidebar-brand',
            !sidebar.isOnRight || 'text-right',
          )}
          href="/"
        >
          {sidebar.isOnRight || <img src={logo} alt="Dimii" />}
          {' '}
          {!sidebar.isOnRight || <img src={logo} alt="Dimii" />}
        </a>

        {/* <div className="sidebar-user"> */}
        {/*  <img */}
        {/*    src={avatar} */}
        {/*    className="img-fluid rounded-circle mb-2" */}
        {/*    alt="Linda Miller" */}
        {/*  /> */}
        {/*  <div className="font-weight-bold">Linda Miller</div> */}
        {/*  <small>Front-end Developer</small> */}
        {/* </div> */}
        <ul className="sidebar-nav">
          {menus.map((category, index) => (
            <React.Fragment key={index}>
              {category.header ? (
                <li className="sidebar-header">{category.header}</li>
              ) : null}

              {category.children ? (
                <SidebarCategory
                  name={category.name}
                  badgeColor={category.badgeColor}
                  badgeText={category.badgeText}
                  icon={category.icon}
                  to={category.path}
                  isOpen={openRoutes[index]}
                  onClick={() => toggle(index)}
                >
                  {category.children.map((route, index) => (
                    <SidebarItem
                      key={index}
                      name={route.name}
                      to={route.path}
                      badgeColor={route.badgeColor}
                      badgeText={route.badgeText}
                    />
                  ))}
                </SidebarCategory>
              ) : (
                <SidebarItem
                  name={category.name}
                  to={category.path}
                  icon={category.icon}
                  badgeColor={category.badgeColor}
                  badgeText={category.badgeText}
                />
              )}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(
  connect((store) => ({
    sidebar: store.main,
  }))(Sidebar),
);
