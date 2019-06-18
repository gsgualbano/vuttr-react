import styled from 'styled-components';
import { Theme } from '~/styles/global';

interface ButtonProps {
  outline: boolean;
}

type Props = ButtonProps & Theme;

export const Button = styled.button`
  display: inline-flex;
  flex-direction: row;
  font-size: 16px;
  color: ${({ outline }: ButtonProps) => (outline ? '#365df0' : '#ffffff')};
  background: ${({ outline, theme }: Props) => (outline ? theme.colors.buttonOutlineBackground : '#365df0')};
  padding: 5px 10px;
  border-radius: 5px;
  border: none;
  justify-content: center;
  align-items: center;

  &:hover {
    ${({ outline }: ButtonProps) => (outline ? 'color: #2f55cc' : 'background: #2f55cc')};
  }

  &:click {
    ${({ outline }: ButtonProps) => (outline ? 'color: #244aa8' : 'background: #244aa8')};
    background-color: #244aa8;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
