import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Ticket from '../Ticket';

const StyledTicket = styled(Ticket)`
  margin-bottom: ${props => props.theme.spacing}px;
`;

const Tickets = ({ items }) => (
  items.map(item => (
    <StyledTicket key={item.carrier + item.price + item.segments[0].duration} {...item} />
  ))
);

Tickets.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(Ticket.propTypes).isRequired).isRequired,
};

export default Tickets;
