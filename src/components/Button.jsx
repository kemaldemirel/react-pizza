import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const Button = ({ className, children }) => {
  return (
    <Link to="/cart" className={classNames('button', className)}>
      {children}
    </Link>
  );
};

export default Button;
