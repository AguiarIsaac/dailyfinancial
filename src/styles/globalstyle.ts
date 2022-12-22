import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.gray6};
    transition: all 0.6s;
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`