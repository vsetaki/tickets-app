import {
  takeLatest, all, call, put, select, delay,
} from 'redux-saga/effects';
import * as api from '../../api';
import { SEARCH_INTERVAL, SEARCH_TIMEOUT } from '../../constants';
import { getSearchId } from '../selectors/search';
import { updateSearchIdAction, setErrorAction, stopSearchProcessAction } from '../actions/search';
import { START_SEARCH_PROCESS } from '../actionTypes/search';
import { START_FETCH_TICKETS, STOP_FETCH_TICKETS } from '../actionTypes/tickets';
import { updateTicketsAction, startFetchTicketsAction, stopFetchTicketsAction } from '../actions/tickets';

function* handleStartSearch() {
  try {
    const searchId = yield call(api.getSearchId);
    yield put(updateSearchIdAction(searchId));
    yield put(startFetchTicketsAction());
  } catch (error) {
    console.error(error);
    yield put(setErrorAction(error));
  }
}

function* fetchTickets() {
  const searchId = yield select(getSearchId);
  const searchStartTime = Date.now();

  let stopSearch = false;
  // let serverErrorsCounter = 0;

  while (true) {
    stopSearch = Date.now() - searchStartTime > SEARCH_TIMEOUT;
    stopSearch = false;

    try {
      const response = yield call(api.getTickets, searchId);
      const { stop, tickets } = response;
      yield put(updateTicketsAction(tickets));

      if (stop || stopSearch) {
        yield put(stopFetchTicketsAction());
        break;
      }

      // if (serverErrorsCounter > 5) {
      //   yield put(stopFetchTicketsAction());
      //   yield put(setErrorAction('To many server errors'));
      // }

      yield delay(SEARCH_INTERVAL);
    } catch (error) {
      // serverErrorsCounter += 1;
      console.error(error);
    }
  }
}

function* handleStartFetchTickets() {
  yield fetchTickets();
}

function* handleStopFetchTickets() {
  yield put(stopSearchProcessAction());
}

export default function* () {
  yield all([
    takeLatest(START_SEARCH_PROCESS, handleStartSearch),
    takeLatest(START_FETCH_TICKETS, handleStartFetchTickets),
    takeLatest(STOP_FETCH_TICKETS, handleStopFetchTickets),
  ]);
}
