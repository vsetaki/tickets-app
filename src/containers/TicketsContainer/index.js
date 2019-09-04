import { connect } from 'react-redux';
import { getTickets } from '../../store/selectors/tickets';
import Tickets from '../../components/Tickets';

const mapStateToProps = state => ({
  items: getTickets(state),
});

export default connect(mapStateToProps)(Tickets);
