import { combineReducers } from 'redux-immutable';
import filters from './filters';
import search from './search';
import sorting from './sorting';
import tickets from './tickets';

export default combineReducers({
  filters,
  search,
  sorting,
  tickets,
});
