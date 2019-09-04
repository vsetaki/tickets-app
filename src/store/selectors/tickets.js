import { createSelector } from 'reselect';
import { getSorting } from './sorting';
import { SORTING, VISIBLE_TICKETS } from '../../constants';
import { getDurationFromTicket } from '../../utils';

// eslint-disable-next-line no-underscore-dangle
const _getTickets = state => state.get('tickets');

export const getTickets = createSelector(
  [_getTickets, getSorting],
  (tickets, sorting) => {
    if (!tickets) {
      return [];
    }

    let resultTickets = tickets;

    if (sorting === SORTING.PRICE.value) {
      resultTickets = tickets.sortBy(item => item.get(sorting));
    } else if (sorting === SORTING.DURATION.value) {
      resultTickets = tickets.sort((a, b) => {
        const durationA = getDurationFromTicket(a);
        const durationB = getDurationFromTicket(b);
        if (durationA < durationB) {
          return -1;
        }
        if (durationA > durationB) {
          return 1;
        }
        return 0;
      });
    }

    return resultTickets.slice(0, VISIBLE_TICKETS).toJS();
  },
);
