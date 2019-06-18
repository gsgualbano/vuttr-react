import React from 'react';
import { renderWithRedux } from '~/utils';
import { cleanup, fireEvent } from '@testing-library/react';

import App from '~/App';

import 'jest-styled-components';

afterEach(cleanup);

describe('<App />', () => {
  it('render correctly', () => {
    const { asFragment } = renderWithRedux(<App />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('To switch to dark mode', () => {
    const { getByText, getByTestId } = renderWithRedux(<App />);
    fireEvent.click(getByText('Dark Theme'));
    expect(getByTestId('main-page')).toHaveStyleRule('background', '#1B1A1A');
  });
});
