import React from 'react';

import { Button } from './styles';

/**
 * Props do DangerButton.
 */
interface OwnProps {
  /** elemento jsx */
  children?: React.ReactNode;
  /** uma ação ser executa após o click no botão como um console.log ou função  */
  onClick?(e: React.MouseEvent<HTMLElement, MouseEvent>): void;
  /** inverter as cores do botão */
  outline?: boolean;
  /** tipo do botão */
  type?: 'submit' | 'reset' | 'button';
}

/**
 * Botão danger
 */
const DangerButton = ({
  type = 'button',
  outline = false,
  children,
  onClick,
}: OwnProps): JSX.Element => (
  <Button type={type} onClick={onClick} outline={outline} data-testid="danger-button">
    {children}
  </Button>
);

export default DangerButton;
