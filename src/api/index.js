import { parseResponse } from '../utils';

const baseUrl = 'https://front-test.beta.aviasales.ru';

/**
 * @typedef {object} Ticket
 * @property {string} origin
 * @property {string} destination
 * @property {string} date
 * @property {string[]} stops
 * @property {number} duration
 */

/**
 * @typedef {object} Tickets
 * @property {string} searchId
 * @property {number} price
 * @property {string} carrier
 * @property {Ticket[]} segments
 */

/**
 * Initialize search process
 * @typedef {object} SearchIdResponse
 * @property {string} searchId
 * @return {Promise<SearchIdResponse>}
 */
export const getSearchId = () => fetch(`${baseUrl}/search`)
  .then(parseResponse)
  .then(({ searchId }) => searchId);

/**
 * Returns tickets and search process state
 * @typedef {object} TicketsResponse
 * @property {Tickets} tickets
 * @property {boolean} stop
 * @return {Promise<TicketsResponse>}
 */
export const getTickets = (searchId) => fetch(`${baseUrl}/tickets?searchId=${searchId}`)
  .then(parseResponse);
