import React from 'react';
import { renderWithReduxAndTheme } from '~/utils';
import { cleanup } from '@testing-library/react';

import Modal from '~/components/Modal';

import 'jest-dom/extend-expect';
import 'jest-styled-components';

import dark from '~/themes/dark';
import light from '~/themes/light';

describe('<Modal />', () => {
  afterEach(cleanup);

  const setShowModal = () => {};

  it('render correctly', () => {
    const { asFragment } = renderWithReduxAndTheme(
      <Modal visible setShowModal={setShowModal} />,
      light,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('not show when not visible', () => {
    const { queryByTestId } = renderWithReduxAndTheme(<Modal setShowModal={setShowModal} />, light);
    expect(queryByTestId('outside-modal')).not.toBeInTheDocument();
  });

  it('show when visible', () => {
    const { queryByTestId } = renderWithReduxAndTheme(
      <Modal visible setShowModal={setShowModal} />,
      light,
    );
    expect(queryByTestId('outside-modal')).toBeInTheDocument();
  });

  it('render with light theme', () => {
    const { getByTestId } = renderWithReduxAndTheme(
      <Modal visible setShowModal={setShowModal} />,
      light,
    );
    expect(getByTestId('inside-modal')).toHaveStyleRule('background', '#fefefe');
    expect(getByTestId('inside-modal')).toHaveStyleRule('color', '#170c3a');
    expect(getByTestId('inside-modal')).toHaveStyleRule('border-color', '#888');
  });

  it('render with dark theme', () => {
    const { getByTestId } = renderWithReduxAndTheme(
      <Modal visible setShowModal={setShowModal} />,
      dark,
    );
    expect(getByTestId('inside-modal')).toHaveStyleRule('background', '#29292B');
    expect(getByTestId('inside-modal')).toHaveStyleRule('color', '#fff');
    expect(getByTestId('inside-modal')).toHaveStyleRule('border-color', '#29292B');
  });
});
