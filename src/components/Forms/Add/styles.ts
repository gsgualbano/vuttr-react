import styled from 'styled-components';
import { Input, Textarea } from '@rocketseat/unform';
import { ReactComponent as Icon } from '~/assets/icons/Icon-Plus-Circle-2px.svg';

export const Container = styled.div``;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0 20px;
`;

export const Content = styled.div``;

export const FormGroup = styled.div`
  margin: 10px 0;

  span {
    font-size: 14px;
    color: #f95e5a;
  }
`;

export const Label = styled.label`
  font-size: 14px;
`;

export const TextInput = styled(Input)`
  display: block;
  border-radius: 5px;
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.InputBorderColor};
  background: ${({ theme }) => theme.colors.InputBackground};
  width: 95%;
  padding: 10px;
  font-family: 'Source Sans Pro, Regular', sans-serif;
`;

export const TextArea = styled(Textarea)`
  display: block;
  border-radius: 5px;
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.InputBorderColor};
  background: ${({ theme }) => theme.colors.InputBackground};
  width: 95%;
  padding: 10px;
  font-family: 'Source Sans Pro, Regular', sans-serif;
`;

export const Bottom = styled.div`
  text-align: right;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PlusIcon = styled(Icon)`
  width: 18px;
  height: 18px;
  margin-right: 10px;

  g > circle.a {
    stroke: #12db89;
  }

  g > path.b {
    stroke: #12db89;
    stroke-width: 5px;
  }
`;
