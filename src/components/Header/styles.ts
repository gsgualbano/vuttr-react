import styled from 'styled-components';
import { ReactComponent as PIcon } from '~/assets/icons/Icon-Plus-Circle-2px.svg';
import { ReactComponent as SIcon } from '~/assets/icons/Icon-Search-2px.svg';
import { ReactComponent as MoonIcon } from '~/assets/icons/Icon-Dark Mode 2px.svg';
import { ReactComponent as SunIcon } from '~/assets/icons/Icon-Light-Mode-2px.svg';

export const Container = styled.div``;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 42px;
  margin: 30px 0;
  letter-spacing: 2px;
`;

export const SubTitle = styled.h2`
  font-weight: 600;
  font-size: 30px;
  margin: 30px 0;
  letter-spacing: 2px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: 10px 0;
`;

export const Search = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    margin-bottom: 10px;
    justify-content: none;
  }
`;

export const SearchInput = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 5px;
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.InputBorderColor};
  background-color: ${({ theme }) => theme.colors.InputBackground};
  width: 200pt;
  margin-right: 10px;
  padding: 10px;
  font-family: 'Source Sans Pro', sans-serif;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const Input = styled.input.attrs({
  type: 'text',
})`
  border: none;
  width: 100%;
  background: inherit;
  outline: none;
`;

export const CheckBox = styled.input.attrs({
  type: 'checkbox',
})``;

export const IconContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const PlusIcon = styled(PIcon)`
  width: 14px;
  height: 14px;
  margin-right: 5px;

  g > circle.a {
    stroke: #ffffff;
    stroke-width: 2px;
  }

  g > path.b {
    stroke: #ffffff;
    stroke-width: 7px;
  }
`;

export const SearchIcon = styled(SIcon)`
  width: 14px;
  height: 14px;
  margin-right: 5px;

  g > path.a {
    stroke: #b1adb9;
  }

  g > circle.a {
    stroke: #b1adb9;
  }
`;

export const ThemeButton = styled.button`
  max-height: 30px;
  background: transparent;
  border: none;
  color: #b1adb9;
  font-size: 20px;
  margin: auto 0;
`;

export const DarkIcon = styled(MoonIcon)`
  width: 18px;
  height: 18px;
  margin-right: 7px;

  g > path.a {
    stroke: #b1adb9;
  }

  g > circle.a {
    stroke: #b1adb9;
  }
`;

export const LightIcon = styled(SunIcon)`
  width: 14px;
  height: 14px;
  margin-right: 5px;

  g > path.a {
    stroke: #b1adb9;
  }

  g > circle.a {
    stroke: #b1adb9;
  }
`;
