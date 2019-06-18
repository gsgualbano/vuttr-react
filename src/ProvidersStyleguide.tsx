import React from 'react';
import { ThemeProvider } from 'styled-components';

import light from '~/themes/light';

import { Provider } from 'react-redux';
import {
  createStore,
  Store,
  combineReducers,
  Reducer,
} from 'redux';

import { ApplicationState } from './store';
import { ToolsState } from './store/ducks/tools/types';

interface Props {
  children: React.ReactChild;
}

export const INITIAL_STATE: ToolsState = {
  data: [
    {
      id: 1,
      title: 'Google',
      description: 'Most Popular Search Website',
      link: 'https://google.com',
      tags: ['search', 'site', 'google'],
    },
    {
      id: 2,
      title: 'Bing',
      description: ' A Search Website',
      link: 'https://bing.com',
      tags: ['search', 'site', 'bing'],
    },
    {
      id: 3,
      title: 'DuckDuckGo',
      description: 'Most Prvate Search Website',
      link: 'https://duckduckgo.com',
      tags: ['search', 'site', 'duckduckgo'],
    },
  ],
  loadError: false,
  addError: false,
  removeError: false,
};

const tools: Reducer<ToolsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const rootReducer = combineReducers({ tools });

const store: Store<ApplicationState> = createStore(rootReducer);

export default ({ children }: Props) => (
  <Provider store={store}>
    <ThemeProvider theme={light}>{children}</ThemeProvider>
  </Provider>
);
