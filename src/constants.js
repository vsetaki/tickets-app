export const SEARCH_INTERVAL = 1 * 1000; // 1 second
export const SEARCH_TIMEOUT = 60 * 1000; // 60 seconds
export const SORTING = {
  PRICE: {
    value: 'price',
    label: 'Самый дешевый',
  },
  DURATION: {
    value: 'duration',
    label: 'Самый быстрый',
  },
};
export const STOPS_FILTER = {
  ALL: {
    value: null,
    label: 'Все',
  },
  NONE: {
    value: 0,
    label: 'Без пересадок',
  },
  STOP_1: {
    value: 1,
    label: '1 пересадка',
  },
  STOP_2: {
    value: 2,
    label: '2 пересадки',
  },
  STOP_3: {
    value: 3,
    label: '3 пересадки',
  },
};
export const STOPS_ALL_VALUE = '0123';
export const CARRIER_LOGO_CDN = '//pics.avs.io';
export const VISIBLE_TICKETS = 5;
