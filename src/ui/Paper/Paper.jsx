import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../styles/theme';

const Paper = ({ children, ...props }) => (
  <StyledPaper {...props}>
    {children}
  </StyledPaper>
);

const StyledPaper = styled.div`
  padding: ${props => props.padding}px;
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.shape.borderRadius};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
`;

Paper.defaultProps = {
  padding: theme.spacing,
};

Paper.propTypes = {
  children: PropTypes.node.isRequired,
  padding: PropTypes.number,
};

export default Paper;
