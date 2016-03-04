import { createAction, handleActions } from 'redux-actions';
import Immutable from 'immutable';

import { getItem, setItem } from 'utils/storage';

import { host, port, protocol } from 'GLOBALS';

const initialState = Immutable.fromJS({
  host,
  port,
  protocol,
});

// ------------------------------------
// Constants
// ------------------------------------
export const SET_SETTINGS = 'SET_SETTINGS';
export const LOAD_SETTINGS = 'LOAD_SETTINGS';

// ------------------------------------
// Actions
// ------------------------------------
export const setSettings = createAction(
  SET_SETTINGS,
  async item =>
    await setItem('settings', item)
);

export const loadSettings = createAction(
  LOAD_SETTINGS,
  async () =>
    await getItem('settings')
);

export const actions = {
  setSettings,
  loadSettings,
};

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
  [SET_SETTINGS]:
    (state, { payload }) => {
      const newState = Immutable.Map({
        ...state.toJS(),
        ...payload,
      });

      return newState.set('initialValues', payload);
    },

  [LOAD_SETTINGS]:
    (state, { payload }) => {
      const newState = Immutable.Map({
        ...state.toJS(),
        ...payload,
      });

      return newState.set('initialValues', payload);
    },

}, initialState);
