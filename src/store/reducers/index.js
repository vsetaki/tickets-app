import { combineReducers } from 'redux-immutable';
import search from './search';
import tickets from './tickets';

export default combineReducers({
  search,
  tickets,
});
