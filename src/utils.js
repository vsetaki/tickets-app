export const isDevelopment = () => {
  try {
    return process.env.NODE_ENV === 'development';
  } catch (e) {
    return false;
  }
};

export const parseResponse = (response) => response.json();

/**
 * Возвращает общую продолжительность перелета из пары билетов
 * @returns {number}
 */
export const getDurationFromTicket = (ticket) => {
  const durationTo = ticket.getIn(['segments', 0, 'duration']) || 0;
  const durationFrom = ticket.get(['segments', 1, 'duration']) || 0;
  return durationTo + durationFrom;
};
