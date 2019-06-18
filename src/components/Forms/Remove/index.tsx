import React from 'react';

import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import * as ToolsActions from '~/store/ducks/tools/actions';
import { Tool } from '~/store/ducks/tools/types';

import {
 Container, Header, Content, Bottom, Text, IconContainer, CloseIcon,
} from './styles';
import PrimaryButton from '~/components/Common/PrimaryButton';
import DangerButton from '~/components/Common/DangerButton';

interface DispatchProps {
  /** saga action remove tool */
  removeTool(id: number): void;
}

/**
 * Props do RemoveForm
 */
interface OwnProps {
  /** objeto com informações sobre a ferramenta como id, title, description, link, tags */
  tool: Tool;
  /** dispatcher para mostrar o modal */
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

type Props = OwnProps & DispatchProps;

/**
 * Remove Form.
 */
const RemoveForm = ({ tool, removeTool, setShowModal }: Props): JSX.Element => {
  const handleCancelButton = (): void => {
    setShowModal(false);
  };

  const handleRemoveButton = (id: number): void => {
    removeTool(tool.id);
    setShowModal(false);
  };

  return (
    <Container>
      <Header>
        <IconContainer>
          <CloseIcon />
        </IconContainer>
        Remove tool
      </Header>
      <Content>
        <Text>{`Are you sure you want to remove ${tool.title} ?`}</Text>
      </Content>
      <Bottom>
        <PrimaryButton onClick={handleCancelButton}>Cancel</PrimaryButton>
        <DangerButton onClick={() => handleRemoveButton(tool.id)}>Yes, remove</DangerButton>
      </Bottom>
    </Container>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(ToolsActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(RemoveForm);
