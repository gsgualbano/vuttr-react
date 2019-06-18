import styled from 'styled-components';
import { ReactComponent as Icon } from '~/assets/icons/Icon-Close-2px.svg';
import { Theme } from '~/styles/global';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
  min-width: 100%;
  border: 1px solid;
  border-color: ${({ theme }: Theme) => (theme.colors.InputBorderColor ? theme.colors.InputBorderColor : '#ebeaed')};
  background: ${({ theme }: Theme) => (theme.colors.InputBackground ? theme.colors.InputBackground : '#f5f4f6')};
  border-radius: 5px;
`;

export const TextInput = styled.input.attrs({
  type: 'text',
})`
  background: inherit;
  border: none;
  padding: 10px;
  outline: none;
  width: 100%;
`;

export const RemoveButton = styled.button.attrs({
  type: 'button',
})`
  border: none;
  background: inherit;
  border-radius: inherit;
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
    stroke: #ffffff;
    stroke-width: 15px;
  }
`;

export const Text = styled.p`
  font-size: 16px;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 600;
  text-align: center;
  margin: 2px;
`;
