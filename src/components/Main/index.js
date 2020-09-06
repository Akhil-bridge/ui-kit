import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Main = ({ className, children }) => (
  <div className={classNames('main', className)}>{children}</div>
);

Main.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node,
  ]),
};

Main.defaultProps = {
  className: '',
  children: '',
};
export default Main;
