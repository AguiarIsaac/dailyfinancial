import styled from "styled-components";

export const HeaderComponent = styled.header`
  max-width: 1400px;
  height: 78.5px;
  margin: 0 auto;
  display: flex;
  margin-top: 2rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  text-align: center;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  h1 {
    color: ${ props => props.theme.colors.titleText}
  }

  img {
    width: 80px;
  }
`