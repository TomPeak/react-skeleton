import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import CoreLayout from 'layouts/CoreLayout';

import InfoView from 'views/Info';

import SettingsView from 'views/Settings';

import WebGlView from 'views/3d';

import NotFoundView from 'views/NotFound';

export default (
  <Route path='/' component={CoreLayout}>
    <IndexRoute
      component={InfoView}
    />

    <Route
      path='settings'
      component={SettingsView}
    />

      <Route
      path='3d'
      component={WebGlView}
    />

    <Route path='/404' component={NotFoundView} />

    <Redirect from='*' to='/404' />
  </Route>
);
