import React, { useState } from 'react';

import Modal from '../Modal';
import RemoveForm from '~/components/Forms/Remove';

import { Tool } from '~/store/ducks/tools/types';

import {
  Container,
  Header,
  Title,
  Description,
  Tags,
  CloseIcon,
  IconContainer,
  Wrapper,
} from './styles';
import DangerButton from '../Common/DangerButton';

/**
 * Props do Card.
 */
interface OwnProps {
  /** objeto com informações sobre a ferramenta como id, title, description, link, tags */
  tool: Tool;
}

/**
 * Card Item
 */
const Card = ({ tool }: OwnProps): JSX.Element => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleRemoveButton = (): void => {
    setShowModal(true);
  };

  return (
    <Container data-testid="card-item">
      <Header>
        <Title href={tool.link}>{tool.title}</Title>
        <Wrapper>
          <DangerButton outline onClick={handleRemoveButton}>
            <IconContainer>
              <CloseIcon />
            </IconContainer>
            remove
          </DangerButton>
        </Wrapper>
      </Header>
      <Description>{tool.description}</Description>
      <Tags>
        {tool.tags.map(tag => (
          <p key={tag}>{`#${tag}`}</p>
        ))}
      </Tags>
      <Modal visible={showModal} setShowModal={setShowModal}>
        <RemoveForm setShowModal={setShowModal} tool={tool} />
      </Modal>
    </Container>
  );
};

export default Card;
