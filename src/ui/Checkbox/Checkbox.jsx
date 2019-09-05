import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../styles/theme';
import { ReactComponent as CheckIcon } from '../../images/check.svg';

// TODO: add keyboard accessability

const Checkbox = ({
  children,
  checked,
  id,
  onChange,
  ...props
}) => (
  <StyledCheckboxLabel htmlFor={id} {...props}>
    <StyledWrapper>
      <StyledFakeCheckbox>
        {checked && <CheckIcon />}
      </StyledFakeCheckbox>
      <StyledCheckbox
        id={id}
        checked={checked}
        onChange={onChange}
      />
      {children}
    </StyledWrapper>
  </StyledCheckboxLabel>
);

const StyledWrapper = styled.span`
  display: flex;
  align-items: center;
`;

const StyledCheckboxLabel = styled.label`
  font-size: 13px;
`;

const StyledFakeCheckbox = styled.i`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  box-shadow: inset 0 0 0 1px #2196F3;
  border-radius: ${props => props.theme.shape.borderRadiusSmall};
  margin-right: 10px;
`;

const StyledCheckbox = styled.input.attrs({
  type: 'checkbox',
})`
  display: none;
  appearance: none;
`;

Checkbox.defaultProps = {
  padding: theme.spacing,
  onChange: null,
  checked: false,
};

Checkbox.propTypes = {
  children: PropTypes.node.isRequired,
  padding: PropTypes.number,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
};

export default Checkbox;
