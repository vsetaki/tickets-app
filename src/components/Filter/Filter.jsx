import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Paper from '../../ui/Paper';
import Checkbox from '../../ui/Checkbox';
import { flattenValue } from '../../utils';
import { STOPS_ALL_VALUE } from '../../constants';

const StyledCaption = styled.div`
  ${props => props.theme.typography.caption}
  padding: ${props => props.theme.spacing}px ${props => props.theme.spacing}px 10px;
  line-height: 100%;
`;

const StyledCheckboxList = styled.ul`
  padding-bottom: 10px;
`;

const StyledCheckboxItem = styled(Checkbox)`
  cursor: pointer;
  display: block;
  height: 40px;
  line-height: 40px;
  padding: 0 ${props => props.theme.spacing}px;

  :hover {
    background-color: #F1FCFF;
  }
`;

const Filter = ({
  items, value, updateFilters, ...props
}) => (
  <Paper padding={0} {...props}>
    <StyledCaption>
      Количество пересадок
    </StyledCaption>
    <StyledCheckboxList>
      {items.map(item => (
        <li key={item.value}>
          <StyledCheckboxItem
            id={`cb_${item.value}`}
            checked={
              item.value === null
                ? flattenValue(value) === STOPS_ALL_VALUE
                : value[item.value]
            }
            onChange={() => updateFilters(item.value)}
          >
            {item.label}
          </StyledCheckboxItem>
        </li>
      ))}
    </StyledCheckboxList>
  </Paper>
);

Filter.defaultProps = {
  value: null,
};

Filter.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.number,
  }).isRequired).isRequired,
  value: PropTypes.shape({}),
  updateFilters: PropTypes.func.isRequired,
};

export default Filter;
