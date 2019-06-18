import React from 'react';

import { Container } from './styles';

/**
 * Propriedades da Tag
 */
interface OwnProps {
  /** elemento jsx */
  children: React.ReactNode;
}

/**
 * Tag badge.
 */
const Tag = ({ children }: OwnProps): JSX.Element => <Container>{children}</Container>;

export default Tag;
