import React from 'react';
import { Link } from 'react-router';

import Menu from './Menu';

import classes from './Header.scss';

export const Header =
  () =>
    <header className={classes['main']}>

      <Menu />
    </header>;

export default Header;
