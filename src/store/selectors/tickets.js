import { createSelector } from 'reselect';
import { getSorting } from './sorting';
import { SORTING } from '../../constants';
import { getDurationFromTicket } from '../../utils';

// eslint-disable-next-line no-underscore-dangle
const _getTickets = (state) => state.get('tickets');

export const getTickets = createSelector(
  [_getTickets, getSorting],
  (tickets, sorting) => {
    if (!tickets) {
      return [];
    }

    if (sorting === SORTING.PRICE) {
      return tickets.sortBy((item) => item.get(sorting)).toJS();
    }

    if (sorting === SORTING.DURATION) {
      return tickets.sort((a, b) => {
        const durationA = getDurationFromTicket(a);
        const durationB = getDurationFromTicket(b);
        if (durationA < durationB) {
          return -1;
        }
        if (durationA > durationB) {
          return 1;
        }
        return 0;
      }).toJS();
    }

    return tickets.toJS();
  },
);
