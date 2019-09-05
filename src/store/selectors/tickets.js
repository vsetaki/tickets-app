import { createSelector } from 'reselect';
import { getSorting } from './sorting';
import { getFilters } from './filters';
import { SORTING, VISIBLE_TICKETS, STOPS_ALL_VALUE } from '../../constants';
import { getDurationFromTicket, flattenValue } from '../../utils';

// eslint-disable-next-line no-underscore-dangle
const _getTickets = state => state.get('tickets');
const getTicketsRaw = createSelector(
  _getTickets,
  tickets => tickets,
);

export const getTicketsCount = state => (getTicketsRaw(state) ? getTicketsRaw(state).size : 0);

export const getTickets = createSelector(
  [getTicketsRaw, getSorting, getFilters],
  (tickets, sorting, filter) => {
    if (!tickets || !tickets.size) {
      return null;
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

    if (!Object.keys(filter).length) {
      return null;
    }

    if (flattenValue(filter) !== STOPS_ALL_VALUE) {
      const stops = Object.keys(filter);
      resultTickets = resultTickets.filter((item) => {
        const stops0 = item.getIn(['segments', '0', 'stops']);
        const stops1 = item.getIn(['segments', '1', 'stops']);

        return stops.includes(String(stops0.size)) && stops.includes(String(stops1.size));
      });
    }

    return resultTickets.slice(0, VISIBLE_TICKETS).toJS();
  },
);
