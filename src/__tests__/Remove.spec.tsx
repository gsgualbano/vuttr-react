import React from 'react';
import { renderWithRedux } from '~/utils';
import Remove from '~/components/Forms/Remove';
import 'jest-styled-components';

describe('<Remove />', () => {
  const tool = {
    id: 1,
    title: 'Google',
    link: 'http://google.com',
    description: 'Search Website',
    tags: ['search', 'engine', 'website'],
  };

  it('render correctly', () => {
    const { asFragment } = renderWithRedux(<Remove setShowModal={() => {}} tool={tool} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
