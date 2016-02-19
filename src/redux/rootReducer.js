import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';
import { reducer as form } from 'redux-form';

import Immutable from 'immutable';

import versions from 'redux/modules/versions';
import settings from 'redux/modules/settings';

export default Immutable.fromJS(combineReducers({
  routeReducer,
  form,

  versions,
  settings,
}));
