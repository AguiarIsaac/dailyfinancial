import styled from "styled-components";

export const HeaderComponent = styled.header`
  max-width: 1400px;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  svg {
    width: 6rem;
    color: ${props => props.theme.colors.baseText};
  }

  span.title {
    margin-top: -1rem;
  }
`