import styled from "styled-components";

export const SectionList = styled.section`
  grid-row: 1 / span 2;
  grid-column: 1 / span 1;
  width: 100%;
  min-width: 18rem;
  height: 400px;

  header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    border-bottom: 1px solid ${props => props.theme.colors.text};
    margin-bottom: 1rem;
    min-height: 4.5rem;
  }


  button {
    height: 2rem;
    border: 0;
    background: ${props => props.theme.colors.baseColor};
    border-radius: 4px;
    padding: 0.25rem;
    color: ${props => props.theme.colors.titleText};
    cursor: pointer;
    font-weight: bold;

    &:hover {
      background: ${props => props.theme.colors.baseColorHover};
      transition: background-color 0.2s;
    }
  }
`

export const ListTransactions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 2rem;

  overflow-y: scroll;
  height: 400px;

  
  ::-webkit-scrollbar {
    width: 0.5rem;
    margin-left: 1rem;
    
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.text};
    border-radius: 8px;
    border: none;
  }
`