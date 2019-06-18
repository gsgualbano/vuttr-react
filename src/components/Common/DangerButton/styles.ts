import styled from 'styled-components';
import { Theme } from '~/styles/global';

interface ButtonProps {
  outline: boolean;
}

type Props = ButtonProps & Theme;

export const Button = styled.button`
  display: inline-flex;
  color: ${({ outline }: ButtonProps) => (outline ? '#f95e5a' : '#ffffff')};
  justify-content: center;
  align-items: center;
  font-size: 16px;
  padding: 5px 10px;
  border: none;
  margin-left: 5px;
  background: ${({ outline, theme }: Props) => (outline ? theme.colors.buttonOutlineBackground : '#f95e5a')};
  border-radius: 5px;

  &:hover {
    ${({ outline }: ButtonProps) => (outline ? 'color: #cc4c4c' : 'background: #cc4c4c')};
  }

  &:click {
    ${({ outline }: ButtonProps) => (outline ? 'color: #a53f3f' : 'background: #a53f3f')};
  }

  @media (max-width: 768px) {
    margin-left: 5px;
    width: 100%;
  }
`;
