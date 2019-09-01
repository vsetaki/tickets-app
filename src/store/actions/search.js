import {
  START_SEARCH_PROCESS,
  STOP_SEARCH_PROCESS,
  UPDATE_SEARCH_ID,
  SET_SEARCH_ERROR,
} from '../actionTypes/search';

export const startSearchProcessAction = () => ({
  type: START_SEARCH_PROCESS,
});

export const stopSearchProcessAction = () => ({
  type: STOP_SEARCH_PROCESS,
});

export const updateSearchIdAction = (payload) => ({
  type: UPDATE_SEARCH_ID,
  payload,
});

export const setErrorAction = (payload) => ({
  type: SET_SEARCH_ERROR,
  payload,
});
