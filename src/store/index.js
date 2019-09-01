import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

import reducer from './reducers';
import sagas from './sagas';
import { isDevelopment } from '../utils';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

if (isDevelopment()) {
  const logger = createLogger({ collapsed: true });
  middlewares.push(logger);
}

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(...middlewares),
  ),
);
sagaMiddleware.run(sagas);

export default store;
