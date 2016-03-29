import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import CoreLayout from 'layouts/CoreLayout';

import IndexView from 'views/Index';

import ArticlesView from 'views/Articles';

import PriceView from 'views/Price';

import BillView from 'views/Bill';

import NotFoundView from 'views/NotFound';

export default (
  <Route path='/' component={CoreLayout}>
    <IndexRoute
      component={IndexView}
    />

    <Route
      path='article'
      component={ArticlesView}
    />
     <Route
      path='price'
      component={PriceView}
    />
     <Route
      path='bill'
      component={BillView}
    />
    <Route path='/404' component={NotFoundView} />

    <Redirect from='*' to='/404' />
  </Route>
);
