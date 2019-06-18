import React, { useState } from 'react';
import { Form } from '@rocketseat/unform';
import * as Yup from 'yup';

import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as ToolsActions from '~/store/ducks/tools/actions';
import { FormData } from '~/store/ducks/tools/types';

import {
  Container,
  Header,
  Content,
  TextInput,
  Bottom,
  Label,
  TextArea,
  FormGroup,
  IconContainer,
  PlusIcon,
} from './styles';
import TagsInput from '~/components/TagsInput';
import PrimaryButton from '~/components/Common/PrimaryButton';

const schema = Yup.object().shape({
  title: Yup.string().required('Title required'),
  description: Yup.string().required('Description required'),
  link: Yup.string().required('Link required'),
});

/**
 * Props que vem do redux
 */
interface DispatchProps {
  /** ação para adicionar uma nova ferramena a api */
  addTool(data: FormData): void;
}

/**
 * Props do AddForm
 */
interface OwnProps {
  /** dispatcher para mostrar o modal */
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

type Props = DispatchProps & OwnProps;

/**
 * Formulário de adição de novas ferramentas
 */
const AddForm = ({ addTool, setShowModal }: Props): JSX.Element => {
  const [tags, setTags] = useState<string[]>([]);

  const handleSubmit = (data: any) => {
    const tool: FormData = {
      title: data.title,
      link: data.link,
      description: data.description,
      tags,
    };

    addTool(tool);
    setShowModal(false);
  };

  return (
    <Container>
      <Header>
        <IconContainer>
          <PlusIcon />
        </IconContainer>
        Add new tool
      </Header>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Content>
          <FormGroup>
            <Label htmlFor="title">Tool Name</Label>
            <TextInput data-testid="title" id="title" name="title" placeholder="Name" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="link">Tool Link</Label>
            <TextInput data-testid="link" id="link" name="link" placeholder="Link" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="description">Tool description</Label>
            <TextArea
              data-testid="description"
              id="description"
              name="description"
              placeholder="Description"
              rows={6}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="tags">Tags</Label>
            <TagsInput id="tags" name="tags" tags={tags} setTags={setTags} />
          </FormGroup>
        </Content>
        <Bottom>
          <PrimaryButton type="submit">Add tool</PrimaryButton>
        </Bottom>
      </Form>
    </Container>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(ToolsActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(AddForm);
