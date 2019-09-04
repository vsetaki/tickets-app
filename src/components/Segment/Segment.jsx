import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { addMinutes, format, differenceInMilliseconds } from 'date-fns/esm';
import { pluralize } from '../../utils';

const pluralStops = ['пересадка', 'пересадки', 'пересадок'];
const pluralizeStops = value => pluralize(value, pluralStops);

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledSegmentItem = styled.div`
  width: 140px;
`;
const StyledCaption = styled.div`
  color: ${props => props.theme.colors.label};
`;

const StyledText = styled.div`
  font-size: 14px;
  font-weight: 600;
`;

const Segment = ({
  origin,
  destination,
  date,
  stops,
  duration,
  ...props
}) => {
  const stopsCount = stops.length;
  const dateObject = new Date(date);
  // TODO: посчитать правильно время в пути
  const durationText = format(differenceInMilliseconds(addMinutes(dateObject, duration), dateObject), 'dд Hч mм');
  return (
    <StyledContainer {...props}>
      <StyledSegmentItem>
        <StyledCaption>
          {`${origin} - ${destination}`}
        </StyledCaption>
        <StyledText>
          {format(dateObject, 'HH:mm')}
        </StyledText>
      </StyledSegmentItem>
      <StyledSegmentItem>
        <StyledCaption>
          В пути
        </StyledCaption>
        <StyledText>
          {durationText}
        </StyledText>
      </StyledSegmentItem>
      <StyledSegmentItem>
        <StyledCaption>
          {stopsCount ? `${stopsCount} ${pluralizeStops(stopsCount)}` : 'Нет пересадок'}
        </StyledCaption>
        <StyledText>
          {stopsCount > 0 ? stops.join(', ') : 'Прямой рейс'}
        </StyledText>
      </StyledSegmentItem>
    </StyledContainer>
  );
};

Segment.propTypes = {
  origin: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  stops: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  duration: PropTypes.number.isRequired,
};

export default Segment;
