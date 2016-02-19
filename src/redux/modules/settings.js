import { createAction, handleActions } from 'redux-actions';
import Immutable from 'immutable';

import { fetch } from 'utils/http';

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
  value => value
);

export const loadSettings = createAction(
  LOAD_SETTINGS,
  async ({ protocol, host, port }) =>
    await fetch(`
      ${protocol}://${host}${port !== 80 ? ':' + port : ''}/settings/wifi/list
    `)
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
      Immutable.Map({
        ...state.toJS(),
        ...payload,
      }),

  [LOAD_SETTINGS]:
    (state, { payload }) => {
      const { status, responseText } = payload;

      if (status !== 200) {
        return state.delete('apLoading').set('apLoadError', 'No MagicShifter found in Network.');
      }

      let parsed = false;
      try {
        parsed = JSON.parse(responseText);
      } catch (err) {
        return state.delete('apLoading').set('apLoadError', 'MagicShifter response invalid');
      }

      if (parsed) {
        return state.delete('apLoading').set('accesspoints', parsed);
      }

      return state.delete('apLoading').set('apLoadError', 'Unknown Error');
    },

}, initialState);
