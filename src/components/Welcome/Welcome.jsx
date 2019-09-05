import React from 'react';
import PropTypes from 'prop-types';
import TextBlockWithAction from '../TextBlockWithAction';

const Welcome = ({ onClick }) => (
  <TextBlockWithAction onClick={onClick} buttonText="Начать поиск">
    Начните поиск билетов на лучшем тестовом сервере
  </TextBlockWithAction>
);

Welcome.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Welcome;
