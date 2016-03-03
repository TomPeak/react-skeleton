import { createAction, handleActions } from 'redux-actions';
import Immutable from 'immutable';

import { fetchJSON } from 'utils/http';

import { versions } from 'GLOBALS';

const initialState = Immutable.Map(versions);

// ------------------------------------
// Constants
// ------------------------------------

export const FETCH_AVAILABLE_VERSIONS = 'FETCH_AVAILABLE_VERSIONS';

// ------------------------------------
// Actions
// ------------------------------------

export const fetchAvailableVersions =
  createAction(
    FETCH_AVAILABLE_VERSIONS,
    async url =>
      await fetchJSON({ url, json: true })
  );

export const actions = {
  fetchAvailableVersions,
};

// ------------------------------------
// Reducer
// ------------------------------------

export default handleActions({
  [FETCH_AVAILABLE_VERSIONS]: {
    next(state, { payload }) {
      console.log('next', { payload });
      return state.set('fetchAvailableVersionsError', false);
    },
    throw(state, { payload }) {
      console.log('throw', { payload });
      return state.set('fetchAvailableVersionsError', payload.message);
    },
  },

}, initialState);
