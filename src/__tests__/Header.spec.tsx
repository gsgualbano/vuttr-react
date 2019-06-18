import React from 'react';
import { renderWithReduxAndTheme } from '~/utils';
import { cleanup, fireEvent } from '@testing-library/react';

import Header from '~/components/Header';

import 'jest-dom/extend-expect';

import light from '~/themes/light';

describe('<Header />', () => {
  afterEach(cleanup);

  it('render correctly', () => {
    const { asFragment } = renderWithReduxAndTheme(<Header />, light);
    expect(asFragment()).toMatchSnapshot();
  });

  it('show modal', () => {
    const { getByText } = renderWithReduxAndTheme(<Header />, light);
    fireEvent.click(getByText('Add'));
    expect(getByText('Add new tool')).toBeInTheDocument();
    expect(getByText('Tool Name')).toBeInTheDocument();
    expect(getByText('Tool Link')).toBeInTheDocument();
    expect(getByText('Tool description')).toBeInTheDocument();
    expect(getByText('Tags')).toBeInTheDocument();
  });

  it('Closes modal on ouside click', () => {
    const { queryByText, getByText, getByTestId } = renderWithReduxAndTheme(<Header />, light);
    fireEvent.click(getByText('Add'));
    fireEvent.click(getByTestId('outside-modal'));
    expect(queryByText('Add new tool')).not.toBeInTheDocument();
    expect(queryByText('Tool Name')).not.toBeInTheDocument();
    expect(queryByText('Tool Link')).not.toBeInTheDocument();
    expect(queryByText('Tool description')).not.toBeInTheDocument();
    expect(queryByText('Tags')).not.toBeInTheDocument();
  });
});
