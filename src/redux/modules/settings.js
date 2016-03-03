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
    (state, { payload }) =>
      console.log('set settings', { state: state.toJS(), payload }) ||
      Immutable.Map({
        ...state.toJS(),
        ...payload,
      }),

  [LOAD_SETTINGS]:
    (state, { payload }) => {
      console.log('settings', { state: state.toJS(), payload });
      return state.set('initialValues', payload);
    },

}, initialState);
