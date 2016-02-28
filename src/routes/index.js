import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import CoreLayout from 'layouts/CoreLayout';

import IndexView from 'views/Index';

import SettingsView from 'views/Settings';

import NotFoundView from 'views/NotFound';

export default (
  <Route path='/' component={CoreLayout}>
    <IndexRoute
      component={IndexView}
    />

    <Route
      path='settings'
      component={SettingsView}
    />

    <Route path='/404' component={NotFoundView} />

    <Redirect from='*' to='/404' />
  </Route>
);
