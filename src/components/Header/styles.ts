import styled from "styled-components";
import logo from "../../assets/images/hashira-ligth.png";

export const HeaderComponent = styled.header`
  max-width: 1400px;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;

  div.logoContainer {
    width: 6rem;
    height: 6rem;
    background: url(${props => props.theme.backgroundImg}) center center no-repeat;
    background-size: cover;
  }

  span.title {
    margin-top: -1rem;
  }
`