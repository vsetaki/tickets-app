import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Paper from '../../ui/Paper';
import Button from '../../ui/Button';

const StyledText = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: ${props => props.theme.spacing}px;
`;

const TextBlockWithAction = ({ children, buttonText, onClick }) => (
  <Paper>
    <StyledText>
      {children}
    </StyledText>
    <Button onClick={onClick}>
      {buttonText}
    </Button>
  </Paper>
);

TextBlockWithAction.propTypes = {
  children: PropTypes.node.isRequired,
  buttonText: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

TextBlockWithAction.defaultProps = {
  onClick: null,
};

export default TextBlockWithAction;
