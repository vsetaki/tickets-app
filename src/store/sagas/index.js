import { all } from 'redux-saga/effects/';
import tickets from './tickets';

export default function* () {
  yield all([
    tickets(),
  ]);
}
