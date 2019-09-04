import { connect } from 'react-redux';
import Layout from '../../components/Layout';
import { startSearchProcessAction } from '../../store/actions/search';

const mapDispatchToProps = dispatch => ({
  startSearchProcess: () => dispatch(startSearchProcessAction()),
});

export default connect(null, mapDispatchToProps)(Layout);
