import { connect } from 'react-redux';
import Layout from '../../components/Layout';
import { startSearchProcessAction } from '../../store/actions/search';
import { getSearchProcessing } from '../../store/selectors/search';

const mapStateToProps = state => ({
  processing: getSearchProcessing(state),
});

const mapDispatchToProps = dispatch => ({
  startSearchProcess: () => dispatch(startSearchProcessAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
