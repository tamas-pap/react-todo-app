import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: Roboto, Arial, Helvetica, sans-serif;
    color: #1f2a4b;
  }

  ul {
    padding: 0;
    list-style-type: none;
  }
`;

export default GlobalStyle;
