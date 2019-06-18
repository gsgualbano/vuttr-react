import React from 'react';

import { Animated } from 'react-animated-css';
import { Container, Content } from './styles';

/**
 * Props do Modal
 */
interface OwnProps {
  /** se o modal está visível */
  visible?: boolean;
  /** dispatcher para mostrar o modal */
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  /** elemento jsx  */
  children?: React.ReactNode;
}

/**
 * Modal.
 */
const Modal = ({ visible = false, setShowModal, children }: OwnProps): JSX.Element => (
  <>
    {visible && (
      <Animated isVisible={visible} animationIn="fadeIn" animationOut="fadeOut">
        <Container onClick={() => setShowModal(false)} data-testid="outside-modal">
          <Content onClick={e => e.stopPropagation()} data-testid="inside-modal">
            {children}
          </Content>
        </Container>
      </Animated>
    )}
  </>
);

export default Modal;
