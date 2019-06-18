import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';

import useDarkMode from 'use-dark-mode';

import MainPage from './pages/Main';
import GlobalStyles from '~/styles/global';

import store from './store';
import 'react-toastify/dist/ReactToastify.css';


import lightTheme from './themes/light';
import darkTheme from './themes/dark';

const App: React.FC = (): JSX.Element => {
  const darkMode = useDarkMode();

  return (
    <ThemeProvider theme={darkMode.value ? darkTheme : lightTheme}>
      <Provider store={store}>
        <GlobalStyles />
        <MainPage />
        <ToastContainer />
      </Provider>
    </ThemeProvider>
  );
};

export default App;
