/* eslint-disable max-len */
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { render } from '@testing-library/react';

import { ThemeProvider } from 'styled-components';
import { reducer } from '../store/ducks/tools';

interface Theme {
  colors: {
    background: string;
    textColor: string;
    cardBackground: string;
    cardBorderColor: string;
    modalBackground: string;
    modalBorderColor: string;
    linkColor: string;
    linkVisitedColor: string;
    buttonOutlineBackground: string;
    InputBackground: string;
    InputBorderColor: string;
  };
}

/** redux mock to render components that depends on the redux */
export const renderWithRedux = (
  component: JSX.Element,
  { initialState, store = createStore(reducer, initialState) }: any = {},
) => ({
  ...render(<Provider store={store}>{component}</Provider>),
  store,
});

/** render components thats depends on the theme provider */
export const renderWithTheme = (component: JSX.Element, theme: Theme) => render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);

/** render components thats depends on the redux and theme provider */
export const renderWithReduxAndTheme = (
  component: JSX.Element,
  theme: Theme,
  { initialState, store = createStore(reducer, initialState) }: any = {},
) => ({
  ...render(
    <ThemeProvider theme={theme}>
      <Provider store={store}>{component}</Provider>
    </ThemeProvider>,
  ),
  store,
});
