import React, { PropTypes } from 'react';

import Header from './Header';

import 'styles/core.scss';
import classes from './CoreLayout.scss';

export const CoreLayout =
  ({ children }) =>
    <div className={classes['container']}>
      <Header />

      <div className={classes['view']}>
        {children}
      </div>
    </div>;

CoreLayout.propTypes = {
  children: PropTypes.element,
};

export default CoreLayout;
