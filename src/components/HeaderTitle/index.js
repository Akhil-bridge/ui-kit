import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const defaultProps = {
  tag: 'h1',
  className: '',
  children: '',
};

const HeaderTitle = ({
  children, className, tag: Tag, ...rest
}) => (
  <Tag className={classNames('header-title', className)} {...rest}>
    {children}
  </Tag>
);

HeaderTitle.defaultProps = defaultProps;
HeaderTitle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  tag: PropTypes.string,
};

export default HeaderTitle;
