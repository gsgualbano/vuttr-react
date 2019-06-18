import styled from 'styled-components';
import { ReactComponent as Icon } from '~/assets/icons/Icon-Close-2px.svg';
import { Theme } from '~/styles/global';

export const Container = styled.div`
  color: ${({ theme }: Theme) => theme.colors.textColor};
  border: 1px solid;
  border-color: ${({ theme }: Theme) => theme.colors.cardBorderColor};
  padding: 10px;
  margin: 20px 0;
  box-shadow: 0 15px 20px 0 rgba(0, 0, 0, 0.07);
  border-radius: 5px;
  background: ${({ theme }: Theme) => theme.colors.cardBackground};
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.a``;

export const Wrapper = styled.div`
  max-width: 100px;
`;

export const IconContainer = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const CloseIcon = styled(Icon)`
  width: 8px;
  height: 8px;
  margin-right: 5px;

  g > path.a {
    stroke: #f95e5a;
    stroke-width: 10px;
  }
`;

export const Description = styled.div`
  padding: 15px 0;
`;

export const Tags = styled.div`
  p {
    display: inline-block;
    font-weight: 600;
    margin-right: 4px;
  }
`;
