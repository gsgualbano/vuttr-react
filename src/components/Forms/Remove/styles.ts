import styled from 'styled-components';
import { ReactComponent as Icon } from '~/assets/icons/Icon-Close-2px.svg';

export const Container = styled.div``;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: 600;
  margin: 10px 0 20px;
`;

export const IconContainer = styled.div`
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const CloseIcon = styled(Icon)`
  width: 14px;
  height: 14px;
  margin-right: 10px;

  g > path.a {
    stroke: #f95e5a;
    stroke-width: 10px;
  }
`;

export const Content = styled.div`
  margin: 20px 0 30px;
`;

export const Text = styled.p`
  color: #8f8a9b;
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
