import { UPDATE_TICKETS, START_FETCH_TICKETS, STOP_FETCH_TICKETS } from '../actionTypes/tickets';

export const updateTicketsAction = (payload) => ({
  type: UPDATE_TICKETS,
  payload,
});

export const startFetchTicketsAction = () => ({
  type: START_FETCH_TICKETS,
});

export const stopFetchTicketsAction = () => ({
  type: STOP_FETCH_TICKETS,
});
