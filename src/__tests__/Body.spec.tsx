import React from 'react';
import { cleanup, wait } from '@testing-library/react';
import { renderWithReduxAndTheme } from '~/utils';

import Body from '../components/Body';

import 'jest-dom/extend-expect';
import 'jest-styled-components';

import light from '~/themes/light';

describe('<Body />', () => {
  afterEach(cleanup);

  it('renders correctly', () => {
    const { asFragment } = renderWithReduxAndTheme(<Body />, light, {
      initialState: {
        tools: {
          data: [],
          loadError: false,
        },
      },
    });
    expect(asFragment()).toMatchSnapshot();
  });

  it('render with load error', () => {
    const { getByText } = renderWithReduxAndTheme(<Body />, light, {
      initialState: {
        tools: {
          data: [],
          loadError: true,
        },
      },
    });
    expect(getByText('Tools not found, try refreshing!')).toBeInTheDocument();
  });

  it('render with load spinner', () => {
    const { getByTestId } = renderWithReduxAndTheme(<Body />, light, {
      initialState: {
        tools: {
          data: [
            {
              id: 1,
              title: 'Google',
              description: 'Search Website',
              link: 'https://google.com',
              tags: ['site', 'search', 'engine'],
            },
            {
              id: 2,
              title: 'Facebook',
              description: 'Social Network',
              link: 'https://facebook.com',
              tags: ['social', 'network', 'site'],
            },
          ],
          loadError: false,
        },
      },
    });

    expect(getByTestId('load-spinner')).toBeInTheDocument();
  });

  it('render with cards', async () => {
    const { queryAllByTestId, getByText, queryAllByText } = renderWithReduxAndTheme(
      <Body />,
      light,
      {
        initialState: {
          tools: {
            data: [
              {
                id: 1,
                title: 'Google',
                description: 'Search Website',
                link: 'https://google.com',
                tags: ['site', 'search', 'engine'],
              },
              {
                id: 2,
                title: 'Facebook',
                description: 'Social Network',
                link: 'https://facebook.com',
                tags: ['social', 'network', 'site'],
              },
            ],
            loadError: false,
          },
        },
      },
    );

    await wait();
    expect(queryAllByTestId('card-item')).toHaveLength(2);
    expect(getByText('Google')).toBeInTheDocument();
    expect(getByText('Facebook')).toBeInTheDocument();
    expect(getByText('Search Website')).toBeInTheDocument();
    expect(getByText('Social Network')).toBeInTheDocument();
    expect(getByText('#search')).toBeInTheDocument();
    expect(getByText('#engine')).toBeInTheDocument();
    expect(getByText('#social')).toBeInTheDocument();
    expect(getByText('#network')).toBeInTheDocument();
    expect(queryAllByText('#site')).toHaveLength(2);
  });
});
