import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button.attrs({
  type: 'button',
})`
  border: 0;
  background: none;
  border-radius: ${props => props.theme.shape.borderRadius};
  cursor: pointer;
  height: 45px;
  background-color: ${props => props.theme.colors.primary};
  ${props => props.theme.typography.caption};

  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.secondary};
  padding: 0 ${props => props.theme.spacing}px;
`;

const Button = ({ children, ...props }) => (
  <StyledButton {...props}>
    {children}
  </StyledButton>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
