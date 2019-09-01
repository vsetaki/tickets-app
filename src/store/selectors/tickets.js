import { createSelector } from 'reselect';

// eslint-disable-next-line no-underscore-dangle
const _getTickets = (state) => state.get('tickets');

// eslint-disable-next-line import/prefer-default-export
export const getTickets = createSelector(
  _getTickets,
  (tickets) => (tickets ? tickets.toJS() : []),
);
