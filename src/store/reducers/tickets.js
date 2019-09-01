import { Set, fromJS } from 'immutable';
import { UPDATE_TICKETS, START_FETCH_TICKETS } from '../actionTypes/tickets';

const initialState = Set();

export default function (state = initialState, action) {
  switch (action.type) {
    case START_FETCH_TICKETS:
      return initialState;
    case UPDATE_TICKETS:
      return state.union(fromJS(action.payload));
    default: return state;
  }
}
