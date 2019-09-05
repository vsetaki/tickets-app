import { createSelector } from 'reselect';

// eslint-disable-next-line no-underscore-dangle
const _getFilters = state => state.get('filters');
export const getFilters = createSelector(
  _getFilters,
  filters => (filters ? filters.toJS() : null),
);
