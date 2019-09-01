import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import AviasalesTicketsApp from './containers/AviasalesTicketsApp';

const App = () => (
  <Provider store={store}>
    <AviasalesTicketsApp />
  </Provider>
);

export default App;
