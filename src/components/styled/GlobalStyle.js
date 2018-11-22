import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
    padding: 0;
    margin: 0;
    font-family: Roboto, Arial, Helvetica, sans-serif;
    color: #1f2a4b;
    background-color: #f6f7f8;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ul {
    padding: 0;
    list-style-type: none;
  }
`;

export default GlobalStyle;
