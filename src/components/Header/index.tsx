import React, { useState } from 'react';

import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import * as ToolsAction from '~/store/ducks/tools/actions';

import useDarkMode from 'use-dark-mode';

import Modal from '../Modal';
import AddForm from '~/components/Forms/Add';
import PrimaryButton from '~/components/Common/PrimaryButton';

import {
  Container,
  Title,
  SubTitle,
  Row,
  Search,
  SearchInput,
  SearchIcon,
  Input,
  CheckBox,
  IconContainer,
  PlusIcon,
  ThemeButton,
  DarkIcon,
  LightIcon,
} from './styles';

/**
 * Props que vem do redux
 */
interface DispatchProps {
  /** ação para pesquisar ferramentas */
  searchToolGeneral(data: string): void;
  /** ação para pesquisar ferramentas por tag */
  searchToolTag(data: string): void;
}

/**
 * Cabeçalho da página
 */
const Header = ({ searchToolGeneral, searchToolTag }: DispatchProps): JSX.Element => {
  // custom hook that creates a state shared across components and saves on local storage
  const darkMode = useDarkMode();

  // states
  const [showModal, setShowModal] = useState<boolean>(false);
  const [checkbox, setCheckBox] = useState<boolean>(true);

  // show modal when add button pressed
  const handleAddPress = (e: React.MouseEvent<HTMLElement>): void => {
    setShowModal(true);
  };

  // Input change of the search box
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (checkbox) {
      return searchToolTag(e.target.value); 
    }

    return searchToolGeneral(e.target.value);
  };

  // On the check or discheck of the checkbox
  const handleCheckBoxChange = (e: React.ChangeEvent<HTMLElement>): void => {
    setCheckBox(!checkbox);
  };

  return (
    <Container>
      <Row>
        <Title>VUTTR</Title>
        <ThemeButton type="button" onClick={darkMode.toggle}>
          {darkMode.value ? (
            <>
              <LightIcon />
              Light Theme
            </>
          ) : (
            <>
              <DarkIcon />
              Dark Theme
            </>
          )}
        </ThemeButton>
      </Row>
      <SubTitle>Very Useful Tools to Remember</SubTitle>
      <Row>
        <Search>
          <SearchInput>
            <SearchIcon />
            <Input placeholder="Search" onChange={handleInputChange} />
          </SearchInput>
          <CheckBox defaultChecked={checkbox} onChange={handleCheckBoxChange} />
          search in tags only
        </Search>
        <PrimaryButton onClick={handleAddPress}>
          <IconContainer>
            <PlusIcon />
          </IconContainer>
          Add
        </PrimaryButton>
      </Row>
      <Modal visible={showModal} setShowModal={setShowModal}>
        <AddForm setShowModal={setShowModal} />
      </Modal>
    </Container>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(ToolsAction, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Header);
