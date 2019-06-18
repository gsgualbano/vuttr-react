import React, { useEffect } from 'react';

import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ToolsActions from '~/store/ducks/tools/actions';

import Header from '~/components/Header';
import Body from '~/components/Body';

import { Container, Content } from './styles';

interface DispatchProps {
  /** Saga action to fecth tools from the api */
  loadRequest(): void;
}

/**
 * MainPage
 */
const MainPage = ({ loadRequest }: DispatchProps): JSX.Element => {
  useEffect(() => {
    loadRequest();
  });

  return (
    <Content data-testid="main-page">
      <Container>
        <Header />
        <Body />
      </Container>
    </Content>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(ToolsActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(MainPage);
