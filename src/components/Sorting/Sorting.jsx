import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// TODO: вынести Tabs
const Sorting = ({
  value, items, updateSorting, ...props
}) => (
  <StyledTabs {...props}>
    {items.map(item => (
      <li key={item.value}>
        <StyledButton
          active={item.value === value}
          onClick={item.value !== value ? () => updateSorting(item.value) : null}
        >
          {item.label}
        </StyledButton>
      </li>
    ))}
  </StyledTabs>
);

Sorting.propTypes = {
  value: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  updateSorting: PropTypes.func.isRequired,
};

const StyledButton = styled.button.attrs({
  type: 'button',
})`
  cursor: pointer;
  ${props => props.theme.typography.caption};
  ${props => (props.active ? `
    background-color: ${props.theme.colors.primary};
    color: ${props.theme.colors.secondary};
  ` : `
    background-color: ${props.theme.colors.secondary};
    box-shadow: inset 0 0 0 1px #DFE5EC;
  `)}
  border: 0;
  height: 100%;
  width: 100%;
`;

const StyledTabs = styled.ul`
  display: flex;
  height: 50px;

  li {
    flex-basis: 50%;

    &:first-child ${StyledButton} {
      border-radius: ${props => `${props.theme.shape.borderRadius} 0 0 ${props.theme.shape.borderRadius}`};
    }

    &:last-child ${StyledButton} {
      border-radius: ${props => `0 ${props.theme.shape.borderRadius} ${props.theme.shape.borderRadius} 0`};
    }
  }
`;

export default React.memo(Sorting);
