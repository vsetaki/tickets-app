import { UPDATE_SORTING } from '../actionTypes/sorting';
import { SORTING } from '../../constants';

const initialState = SORTING.PRICE;

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_SORTING:
      return action.payload;
    default: return state;
  }
}
