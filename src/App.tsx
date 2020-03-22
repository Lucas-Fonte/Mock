import React, { useState } from 'react';
import { Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import Routes from './routes';

import history from './services/history';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import Header from './components/Header';

const App: React.FC = () => {
  const latestTheme = window.localStorage.getItem('theme');
  const [theme, setTheme] = useState(latestTheme === 'light' ? dark : light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
    window.localStorage.setItem('theme', theme.title);
  };

  return (
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
        <Routes />
      </ThemeProvider>
    </Router>
  );
};


export default App;
