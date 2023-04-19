import styled from "styled-components";

export const SectionStatus = styled.section`
  grid-row: 1 / span 1;
  grid-column: 2 / span 1;
  height: 250px;
  width: 100%;
  background: ${props => props.theme.colors.backgroundCard};
  border-radius: 4px 4px 0 0;
`
export const StatusContent = styled.div`
  .formContent {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;

    input[type="month"] {
      border: none;
      height: 25px;
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
      padding: 0.5rem;
      background: ${props => props.theme.colors.backgroundCard};
      color: ${props => props.theme.colors.titleText};
      font-family: 'Roboto', sans-serif;
      outline: none;
      cursor: pointer;

      ::-webkit-calendar-picker-indicator {
        filter: invert(1);
        cursor: pointer;
      }
    }


    button[type='submit'] {
      height: 25px;
      border: 0;
      background: ${props => props.theme.colors.baseColor};
      color: ${props => props.theme.colors.titleText};
      font-weight: bold;
      padding: 0 1.25rem;
      cursor: pointer;
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
      &:not(:disabled):hover {
        background: ${props => props.theme.colors.baseColorHover};
        transition: background-color 0.2s;
      }
    }
  }

  .analitcs {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  .notFoundItems {
    display: flex;
    width: 100%;
    height: 20rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    text-align: center;
  }

  .calcs {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;

    .calcsValues {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
  }
`

// .parent {
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   grid-template-rows: 1fr;
//   grid-column-gap: 0px;
//   grid-row-gap: 0px;
//   }
  
//   .div1 { grid-area: 1 / 1 / 2 / 2; }
//   .div2 { grid-area: 1 / 2 / 2 / 3; }