import React from 'react';
import { render } from '@testing-library/react';
import Tag from '~/components/TagsInput/Tag';
import 'jest-dom/extend-expect';
import 'jest-styled-components';

describe('<Tag />', () => {
  it('render correctly', () => {
    const { asFragment } = render(<Tag>Google</Tag>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('render with text', () => {
    const { getByText } = render(<Tag>Bing</Tag>);
    expect(getByText('Bing')).toBeInTheDocument();
  });
});
