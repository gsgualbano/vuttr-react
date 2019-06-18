import React from 'react';
import { cleanup } from '@testing-library/react';
import { renderWithTheme } from '~/utils';

import PrimaryButton from '~/components/Common/PrimaryButton';

import 'jest-dom/extend-expect';
import 'jest-styled-components';

import dark from '~/themes/dark';
import light from '~/themes/light';

describe('<PrimaryButton />', () => {
  afterEach(cleanup);

  it('render correctly', () => {
    const { asFragment } = renderWithTheme(<PrimaryButton>Add</PrimaryButton>, light);
    expect(asFragment).toMatchSnapshot();
  });

  it('have correct color', () => {
    const { getByTestId } = renderWithTheme(<PrimaryButton>Add</PrimaryButton>, light);
    expect(getByTestId('primary-button')).toHaveStyleRule('background', '#365df0');
    expect(getByTestId('primary-button')).toHaveStyleRule('color', '#ffffff');
    expect(getByTestId('primary-button')).toHaveStyleRule('background', '#2f55cc', {
      modifier: ':hover',
    });
  });

  it('have correct outline color', () => {
    const { getByTestId } = renderWithTheme(<PrimaryButton outline>Add</PrimaryButton>, light);
    expect(getByTestId('primary-button')).toHaveStyleRule('background', '#ffffff');
    expect(getByTestId('primary-button')).toHaveStyleRule('color', '#365df0');
    expect(getByTestId('primary-button')).toHaveStyleRule('color', '#2f55cc', {
      modifier: ':hover',
    });
  });

  it('have correct dark outline color', () => {
    const { getByTestId } = renderWithTheme(<PrimaryButton outline>Add</PrimaryButton>, dark);
    expect(getByTestId('primary-button')).toHaveStyleRule('background', '#29292B');
    expect(getByTestId('primary-button')).toHaveStyleRule('color', '#365df0');
    expect(getByTestId('primary-button')).toHaveStyleRule('color', '#2f55cc', {
      modifier: ':hover',
    });
  });
});
