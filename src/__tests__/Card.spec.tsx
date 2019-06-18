import React from 'react';
import Card from '~/components/Card';

import { render, cleanup, fireEvent } from '@testing-library/react';
import { renderWithReduxAndTheme, renderWithTheme } from '~/utils';

import 'jest-dom/extend-expect';
import 'jest-styled-components';

import dark from '~/themes/dark';
import light from '~/themes/light';

afterEach(cleanup);

describe('<Card />', () => {
  const tool = {
    id: 1,
    title: 'Google',
    description: 'Search Website',
    link: 'https://google.com',
    tags: ['site', 'search', 'engine'],
  };

  it('render correctly', () => {
    const { asFragment } = renderWithTheme(<Card key={tool.id} tool={tool} />, light);
    expect(asFragment()).toMatchSnapshot();
  });

  it('shows modal', () => {
    const { getByText } = renderWithReduxAndTheme(<Card key={tool.id} tool={tool} />, light);
    fireEvent.click(getByText('remove'));
    expect(getByText('Are you sure you want to remove Google ?')).toBeInTheDocument();
  });

  it('Closes modal on cancel button', () => {
    const { queryByText, getByText } = renderWithReduxAndTheme(
      <Card key={tool.id} tool={tool} />,
      light,
    );
    fireEvent.click(getByText('remove'));
    fireEvent.click(getByText('Cancel'));
    expect(queryByText('Are you sure you want to remove Google ?')).not.toBeInTheDocument();
  });

  it('Closes modal on ouside click', () => {
    const { queryByText, getByText, getByTestId } = renderWithReduxAndTheme(
      <Card key={tool.id} tool={tool} />,
      light,
    );
    fireEvent.click(getByText('remove'));
    fireEvent.click(getByTestId('outside-modal'));
    expect(queryByText('Are you sure you want to remove Google ?')).not.toBeInTheDocument();
  });

  it('render with light theme', () => {
    const { getByTestId } = renderWithTheme(<Card key={tool.id} tool={tool} />, light);
    expect(getByTestId('card-item')).toHaveStyleRule('background', '#fcfcfd');
    expect(getByTestId('card-item')).toHaveStyleRule('color', '#170c3a');
    expect(getByTestId('card-item')).toHaveStyleRule('border-color', '#ebeaed');
  });

  it('render with dark theme', () => {
    const { getByTestId } = renderWithTheme(<Card key={tool.id} tool={tool} />, dark);
    expect(getByTestId('card-item')).toHaveStyleRule('background', '#29292B');
    expect(getByTestId('card-item')).toHaveStyleRule('color', '#fff');
    expect(getByTestId('card-item')).toHaveStyleRule('border-color', '#29292B');
  });
});
