import React from 'react';
import { ThemeProvider } from 'styled-components';

import Routes from './routes';
import { GlobalStyle, theme } from './styles';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Routes />
    <GlobalStyle />
  </ThemeProvider>
);

export default App;
