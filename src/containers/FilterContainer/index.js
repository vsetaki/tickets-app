import { connect } from 'react-redux';
import component from '../../components/Filter';

import { getFilters } from '../../store/selectors/filters';
import { STOPS_FILTER } from '../../constants';
import { updateFiltersAction } from '../../store/actions/filters';

const mapStateToProps = state => ({
  value: getFilters(state),
  items: Object.values(STOPS_FILTER),
});

const mapDispatchToProps = dispatch => ({
  updateFilters: value => dispatch(updateFiltersAction(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(component);
