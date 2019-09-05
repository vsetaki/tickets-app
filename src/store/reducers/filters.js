import { Map, fromJS } from 'immutable';
import { UPDATE_FILTERS } from '../actionTypes/filters';

// TODO: move reducer logic to "stops" property

const initialState = fromJS({
  0: true,
  1: true,
  2: true,
  3: true,
});

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_FILTERS: {
      const { payload } = action;
      const key = String(payload);
      if (payload === null) {
        return state === initialState ? Map() : initialState;
      }
      if (state.get(key)) {
        return state.delete(key);
      }
      return state.merge(fromJS({
        [key]: true,
      }));
    }
    default: return state;
  }
}
