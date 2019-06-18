import React from 'react';
import { renderWithReduxAndTheme } from '~/utils';
import { cleanup } from '@testing-library/react';

import Add from '~/components/Forms/Add';

import 'jest-styled-components';

import light from '~/themes/light';
import dark from '~/themes/dark';

afterEach(cleanup);

describe('<Add />', () => {
  it('render correctly', () => {
    const { asFragment } = renderWithReduxAndTheme(<Add setShowModal={() => {}} />, light);
    expect(asFragment()).toMatchSnapshot();
  });

  it('have correct light theme', () => {
    const { getByTestId } = renderWithReduxAndTheme(<Add setShowModal={() => {}} />, light);
    expect(getByTestId('title')).toHaveStyleRule('background', '#f5f4f6');
    expect(getByTestId('link')).toHaveStyleRule('background', '#f5f4f6');
    expect(getByTestId('description')).toHaveStyleRule('background', '#f5f4f6');
  });

  it('have correct dark theme', () => {
    const { getByTestId } = renderWithReduxAndTheme(<Add setShowModal={() => {}} />, dark);
    expect(getByTestId('title')).toHaveStyleRule('background', '#9e9fa2');
    expect(getByTestId('link')).toHaveStyleRule('background', '#9e9fa2');
    expect(getByTestId('description')).toHaveStyleRule('background', '#9e9fa2');
  });
});
