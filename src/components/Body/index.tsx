import React from 'react';
import ReactLoading from 'react-loading';

import { connect } from 'react-redux';

import { Tool } from '~/store/ducks/tools/types';
import { ApplicationState } from '~/store';

import { 
  Container,
  Loading,
  ErrorMessage,
  EmptyToolsMessage,
} from './styles';

/**
 * Props que vem do redux.
 */
interface StateProps {
  /** array de tools */
  tools: Tool[];
  /** constante boolean que indica se ocorreu erro na requisição a api */
  loadError: boolean;
}

const Card = React.lazy<any>(() => import('../Card'));

/**
 * Corpo da página
 */
const Body = ({ tools, loadError }: StateProps): JSX.Element => {
  const renderLoadingIcon = (
    <Loading data-testid="load-spinner">
      <ReactLoading type="spin" color="#365DF0" height={70} width={70} />
    </Loading>
  );

  return (
    <Container>
      <React.Suspense fallback={renderLoadingIcon}>
        {tools.map(tool => (
          <Card key={tool.id} tool={tool} />
        ))}
      </React.Suspense>
      {tools.length === 0 && !loadError && <EmptyToolsMessage>No tools yet, to add a new tool press add!</EmptyToolsMessage>}
      {loadError && <ErrorMessage>Tools not found, try refreshing!</ErrorMessage>}
    </Container>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  tools: state.tools.data,
  loadError: state.tools.loadError,
});

export default connect(mapStateToProps)(Body);
