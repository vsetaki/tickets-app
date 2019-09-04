import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import store from './store';
import LayoutContainer from './containers/LayoutContainer';
import GlobalStyles from './styles';
import theme from './styles/theme';

const App = () => (
  <Provider store={store}>
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <LayoutContainer />
      </ThemeProvider>
    </>
  </Provider>
);

export default App;
