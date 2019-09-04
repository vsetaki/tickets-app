import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
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
