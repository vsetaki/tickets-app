import { UPDATE_FILTERS } from '../actionTypes/filters';

export const updateFiltersAction = payload => ({
  type: UPDATE_FILTERS,
  payload,
});
