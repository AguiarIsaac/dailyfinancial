import styled from "styled-components";

export const SectionList = styled.section`
  width: 24rem;
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


  button {
    height: 2rem;
    border: 0;
    background: ${props => props.theme.colors.green};
    border-radius: 4px;
    padding: 0.25rem;
    color: ${props => props.theme.colors.baseText};
    cursor: pointer;
    font-weight: bold;

    &:hover {
      background: ${props => props.theme.colors.greenLigth};
      transition: background-color 0.2s;
    }
  }
`

export const ListTransactions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  overflow-y: scroll;
  height: 82%;

  
  ::-webkit-scrollbar {
    width: 0.5rem;
    margin-left: 1rem;
    
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.gray5};
    border-radius: 8px;
    border: none;
  }
`