import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { startSearchProcessAction } from '../../store/actions/search';

class AviasalesTicketsApp extends React.PureComponent {
  componentDidMount() {
    const { startSearchProcess } = this.props;
    startSearchProcess();
  }

  render() {
    return (
      <div>
        huy
        {/* <FiltersContainer /> */}
        {/* <TicketsContainer /> */}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startSearchProcess: () => dispatch(startSearchProcessAction()),
});

AviasalesTicketsApp.propTypes = {
  startSearchProcess: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(AviasalesTicketsApp);
