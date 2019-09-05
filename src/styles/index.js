import { createGlobalStyle } from 'styled-components';
import theme from './theme';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    color: ${theme.colors.content};
  }

  html, button {
    font-size: 12px;
    font-family: 'Open Sans', sans-serif;
  }

  body {
    background: #F3F7FA;
  }
  
  ul {
    list-style: none;
  }
`;
