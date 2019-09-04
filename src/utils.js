export const isDevelopment = () => {
  try {
    return process.env.NODE_ENV === 'development';
  } catch (e) {
    return false;
  }
};

export const parseResponse = response => response.json();

/**
 * Возвращает общую продолжительность перелета из пары билетов
 * @returns {number}
 */
export const getDurationFromTicket = (ticket) => {
  const durationTo = ticket.getIn(['segments', 0, 'duration']) || 0;
  const durationFrom = ticket.get(['segments', 1, 'duration']) || 0;
  return durationTo + durationFrom;
};

/**
 * Форматирует число в валюту
 * @param {number} value
 */
export const formatCurrency = value => (
  Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0,
  }).format(value)
);

/**
 * Множественное число
 * @param {number} i
 * @param {string[]} variants
 * @returns {string}
 */
export const pluralize = (i, variants) => {
  let variant = 2;
  if (i % 10 === 1 && i % 100 !== 11) {
    variant = 0;
  }

  if (i % 10 >= 2 && i % 10 <= 4 && (i % 100 < 10 || i % 100 >= 20)) {
    variant = 1;
  }

  return variants[variant];
};
