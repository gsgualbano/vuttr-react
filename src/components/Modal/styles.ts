import styled from 'styled-components';
import { Theme } from '~/styles/global';

export const Container = styled.div`
  display: flex;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.4);
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  color: ${({ theme }: Theme) => theme.colors.textColor};
  display: inline-block;
  background: ${({ theme }: Theme) => theme.colors.modalBackground};
  padding: 10px 20px;
  border: 1px solid;
  border-color: ${({ theme }: Theme) => theme.colors.modalBorderColor};
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  max-width: 540px;
  width: 100%;

  @media (min-width: 768px) {
    padding: 20px 40px;
  }
`;
