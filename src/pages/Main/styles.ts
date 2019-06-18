import styled from 'styled-components';
import { Theme } from '~/styles/global';

export const Container = styled.div`
  width: 100%;
  padding: 0 10px;

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }
`;

export const Content = styled.div`
  background: ${({ theme }: Theme) => theme.colors.background};
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
