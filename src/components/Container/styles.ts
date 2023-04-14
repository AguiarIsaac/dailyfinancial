import styled from "styled-components";

export const ContainerComponent= styled.main`
  max-width: 1400px;
  width: 90%;
  margin: 0 auto;
  padding: 1rem;
  margin-bottom: 2rem;

  background: ${props => props.theme.colors.baseCard};
  border-radius: 6px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  display: flex;
  gap: 0.5rem;
`