import styled from "styled-components";

export const SectionStatus = styled.section`
  width: 48rem;
  height: 40rem;
  padding: 1rem; 

  background: ${props => props.theme.colors.baseCard};
  border-radius: 6px;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1rem 0;
    border-bottom: 1px solid ${props => props.theme.colors.gray5};
    margin-bottom: 1rem;
  }
`