import { connect } from 'react-redux';
import { getTickets, getTicketsCount } from '../../store/selectors/tickets';
import TicketsContainer from './TicketsContainer';
import { updateFiltersAction } from '../../store/actions/filters';
import { startSearchProcessAction } from '../../store/actions/search';

const mapStateToProps = state => ({
  items: getTickets(state),
  count: getTicketsCount(state),
});

const mapDispatchToProps = dispatch => ({
  clearFilters: () => dispatch(updateFiltersAction(null)),
  startSearch: () => dispatch(startSearchProcessAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TicketsContainer);
