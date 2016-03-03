import { createAction, handleActions } from 'redux-actions';
import Immutable from 'immutable';

import { fetchJSON } from 'utils/http';
import { getItem } from 'utils/storage';

import { versions } from 'GLOBALS';

const initialState = Immutable.Map(versions);

// ------------------------------------
// Constants
// ------------------------------------

export const LOAD_CURRENT_VERSION = 'LOAD_CURRENT_VERSION';
export const AVAILABLE_VERSIONS_REQUEST = 'AVAILABLE_VERSIONS_REQUEST';
export const AVAILABLE_VERSIONS_SUCCESS = 'AVAILABLE_VERSIONS_SUCCESS';
export const AVAILABLE_VERSIONS_ERROR = 'AVAILABLE_VERSIONS_ERROR';

// ------------------------------------
// Actions
// ------------------------------------

export const loadCurrentVersion =
  createAction(
    LOAD_CURRENT_VERSION,
    async value =>
      await getItem(value)
  );

export const fetchAvailableVersions =
  createAction(
    AVAILABLE_VERSIONS_REQUEST,
    async url =>
      console.log('fetching url', url) ||
      await fetchJSON({ url, json: true })
  );

export const actions = {
  loadCurrentVersion,
  fetchAvailableVersions,
};

// ------------------------------------
// Reducer
// ------------------------------------

export default handleActions({

  [LOAD_CURRENT_VERSION]:
    (state, { payload: p }) =>
      state,

  [AVAILABLE_VERSIONS_REQUEST]: {
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
