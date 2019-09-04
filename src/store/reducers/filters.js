import { Map, fromJS } from 'immutable';
import { UPDATE_FILTERS } from '../actionTypes/filters';

const initialState = Map();

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_FILTERS:
      return state.set(fromJS(action.payload));
    default: return state;
  }
}
