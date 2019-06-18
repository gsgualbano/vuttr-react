import { createGlobalStyle } from 'styled-components';

export interface Theme {
  theme: {
    colors: {
      background: string,
      textColor: string,
      cardBackground: string,
      cardBorderColor: string,
      modalBackground: string,
      modalBorderColor: string,
      linkColor: string,
      linkVisitedColor: string,
      buttonOutlineBackground: string,
      InputBackground: string,
      InputBorderColor: string,
    },
  };
}

const GlobalStyles = createGlobalStyle`
  body {
    font-family: "Source Sans Pro", sans-serif;
    color: ${({ theme }: Theme) => theme.colors.textColor};
    font-size: 20px;
  }
  
  button {
    font-family: "Source Sans Pro";
    font-weight: 600;
    transition: background-color 400ms;
  }

  button:hover {
    cursor: pointer;
  }

  button:focus {
    outline: 0;
  }

  a {
    color: ${({ theme }: Theme) => theme.colors.linkColor};
  }

  a:visited {
    color: ${({ theme }: Theme) => theme.colors.linkVisitedColor};
  }
`;

export default GlobalStyles;
