import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: white;
  }

  html, body, #root {
    height: 100%;
    max-height: 100vh;
    max-width: 100vw;
    width: 100%;
  }

  *, button, input {
    background: none;
    border: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    outline: 0;
  }

  html {
    background-color: black;
  }
`;
