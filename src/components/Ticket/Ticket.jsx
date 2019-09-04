/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Paper from '../../ui/Paper';
import Segment from '../Segment';
import { formatCurrency } from '../../utils';
import Logo from '../Logo';

const StyledTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${props => props.theme.spacing}px;
`;

const StyledPrice = styled.span`
  font-size: 24px;
  color: ${props => props.theme.colors.primary};
`;

const StyledSegment = styled(Segment)`
  margin-bottom: 10px;
`;

const StyledLogo = styled(Logo)`
  margin-bottom: 10px;
  margin-right: 30px;
`;

const Ticket = ({
  price, carrier, segments, ...props
}) => (
  <Paper {...props}>
    <StyledTop>
      <StyledPrice>
        {formatCurrency(price)}
      </StyledPrice>
      <StyledLogo code={carrier} />
    </StyledTop>
    {segments.map((item, index) => <StyledSegment key={index} {...item} />)}
  </Paper>
);

Ticket.propTypes = {
  price: PropTypes.number.isRequired,
  carrier: PropTypes.string.isRequired,
  segments: PropTypes.arrayOf(PropTypes.shape(Segment.propTypes).isRequired).isRequired,
};

export default Ticket;
