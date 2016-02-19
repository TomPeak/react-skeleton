import { createAction, handleActions } from 'redux-actions';
import Immutable from 'immutable';

import { versions } from 'GLOBALS';

const initialState = Immutable.Map(versions);

// ------------------------------------
// Constants
// ------------------------------------

export const LOAD_CURRENT_VERSION = 'LOAD_CURRENT_VERSION';

// ------------------------------------
// Actions
// ------------------------------------

export const loadCurrentVersion =
  createAction(
    LOAD_CURRENT_VERSION,
    value => value
  );

export const actions = {
  loadCurrentVersion,
};

// ------------------------------------
// Reducer
// ------------------------------------

export default handleActions({

  // a pixel has been hovered
  [LOAD_CURRENT_VERSION]:
    (state, { payload: p }) =>
      state,

}, initialState);
