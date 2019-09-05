import React from 'react';
import PropTypes from 'prop-types';
import { pluralize } from '../../utils';
import TextBlockWithAction from '../TextBlockWithAction';

const text = ['рейс', 'рейса', 'рейсов'];

const Empty = ({ count, onClick }) => (
  <TextBlockWithAction onClick={onClick} buttonText="Расслабить фильтры">
    {`Мы нашли ${count} ${pluralize(count, text)}, но ни один не соответствует заданным фильтрам.`}
  </TextBlockWithAction>
);

Empty.propTypes = {
  count: PropTypes.number.isRequired,
  onClick: PropTypes.func,
};

Empty.defaultProps = {
  onClick: null,
};

export default Empty;
