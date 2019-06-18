import React from 'react';
import { cleanup, fireEvent } from '@testing-library/react';
import { renderWithTheme } from '~/utils';

import TagsInput from '~/components/TagsInput';

import 'jest-dom/extend-expect';
import 'jest-styled-components';

import dark from '~/themes/dark';
import light from '~/themes/light';

afterEach(cleanup);

describe('<TagsInput />', () => {
  it('render correctly', () => {
    const { asFragment } = renderWithTheme(
      <TagsInput id="tags" name="tags" tags={['google', 'search', 'engine']} setTags={() => {}} />,
      light,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('render tags', () => {
    const { queryByText } = renderWithTheme(
      <TagsInput id="tags" name="tags" tags={['google', 'search', 'engine']} setTags={() => {}} />,
      light,
    );
    expect(queryByText('google')).toBeInTheDocument();
    expect(queryByText('search')).toBeInTheDocument();
    expect(queryByText('engine')).toBeInTheDocument();
  });

  it('have correct color light theme', () => {
    const { getByTestId } = renderWithTheme(
      <TagsInput id="tags" name="tags" tags={['google', 'search', 'engine']} setTags={() => {}} />,
      light,
    );
    expect(getByTestId('tags-input')).toHaveStyleRule('background', '#f5f4f6');
    expect(getByTestId('tags-input')).toHaveStyleRule('border-color', '#ebeaed');
  });

  it('have correct color dark theme', () => {
    const { getByTestId } = renderWithTheme(
      <TagsInput id="tags" name="tags" tags={['google', 'search', 'engine']} setTags={() => {}} />,
      dark,
    );
    expect(getByTestId('tags-input')).toHaveStyleRule('background', '#9e9fa2');
    expect(getByTestId('tags-input')).toHaveStyleRule('border-color', '#9e9fa2');
  });
});
