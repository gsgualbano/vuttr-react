import React from 'react';
import { cleanup } from '@testing-library/react';
import { renderWithTheme } from '~/utils';

import DangerButton from '~/components/Common/DangerButton';

import 'jest-dom/extend-expect';
import 'jest-styled-components';

import dark from '~/themes/dark';
import light from '~/themes/light';

afterEach(cleanup);

describe('<DangerButton />', () => {
  it('render correctly', () => {
    const { asFragment } = renderWithTheme(<DangerButton>Remove</DangerButton>, light);
    expect(asFragment()).toMatchSnapshot();
  });

  it('have correct color', () => {
    const { getByTestId } = renderWithTheme(<DangerButton>Remove</DangerButton>, light);
    expect(getByTestId('danger-button')).toHaveStyleRule('background', '#f95e5a');
    expect(getByTestId('danger-button')).toHaveStyleRule('color', '#ffffff');
    expect(getByTestId('danger-button')).toHaveStyleRule('background', '#cc4c4c', {
      modifier: ':hover',
    });
  });

  it('have correct outline color', () => {
    const { getByTestId } = renderWithTheme(<DangerButton outline>Remove</DangerButton>, light);
    expect(getByTestId('danger-button')).toHaveStyleRule('background', '#ffffff');
    expect(getByTestId('danger-button')).toHaveStyleRule('color', '#f95e5a');
    expect(getByTestId('danger-button')).toHaveStyleRule('color', '#cc4c4c', {
      modifier: ':hover',
    });
  });

  it('have correct dark outline color', () => {
    const { getByTestId } = renderWithTheme(<DangerButton outline>Remove</DangerButton>, dark);
    expect(getByTestId('danger-button')).toHaveStyleRule('background', '#29292B');
    expect(getByTestId('danger-button')).toHaveStyleRule('color', '#f95e5a');
    expect(getByTestId('danger-button')).toHaveStyleRule('color', '#cc4c4c', {
      modifier: ':hover',
    });
  });
});
