import { Map } from 'immutable';
import {
  UPDATE_SEARCH_ID, START_SEARCH_PROCESS, STOP_SEARCH_PROCESS, SET_SEARCH_ERROR,
} from '../actionTypes/search';

const initialState = Map();

export default function (state = initialState, action) {
  switch (action.type) {
    case START_SEARCH_PROCESS:
      return state.set('processing', true);
    case STOP_SEARCH_PROCESS:
      return state.set('processing', false);
    case UPDATE_SEARCH_ID:
      return state.set('searchId', action.payload);
    case SET_SEARCH_ERROR:
      return state.set('error', action.payload);
    default: return state;
  }
}
