import { css } from 'styled-components';

export default {
  colors: {
    primary: '#2196f3',
    secondary: '#ffffff',
    content: '#4a4a4a',
    label: '#a0b0b9',
    white: '#ffffff',
  },
  shape: {
    borderRadiusSmall: '2px',
    borderRadius: '5px',
  },
  spacing: 20,
  typography: {
    caption: css`
      letter-spacing: 0.5px;
      text-transform: uppercase;
      font-weight: 600;
    `,
  },
};
