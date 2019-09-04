import { connect } from 'react-redux';
import component from '../../components/Sorting';

import { getSorting } from '../../store/selectors/sorting';
import { SORTING } from '../../constants';
import { updateSortingAction } from '../../store/actions/sorting';

const mapStateToProps = state => ({
  value: getSorting(state),
  items: Object.values(SORTING),
});

const mapDispatchToProps = dispatch => ({
  updateSorting: value => dispatch(updateSortingAction(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(component);
