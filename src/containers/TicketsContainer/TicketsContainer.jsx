import React from 'react';
import PropTypes from 'prop-types';
import Empty from '../../components/Empty';
import Tickets from '../../components/Tickets';
import Ticket from '../../components/Ticket';
import Welcome from '../../components/Welcome';

const TicketsContainer = ({
  count, items, clearFilters, startSearch,
}) => {
  if (!count) {
    return <Welcome onClick={startSearch} />;
  }

  if (items && items.length) {
    return <Tickets items={items} />;
  }

  return <Empty count={count} onClick={clearFilters} />;
};

TicketsContainer.defaultProps = {
  items: null,
};

TicketsContainer.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(Ticket.propTypes).isRequired),
  count: PropTypes.number.isRequired,
  clearFilters: PropTypes.func.isRequired,
  startSearch: PropTypes.func.isRequired,
};

export default TicketsContainer;
