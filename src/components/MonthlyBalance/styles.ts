import styled from "styled-components";

export const SectionStatus = styled.section`
  grid-row: 1 / span 1;
  grid-column: 2 / span 1;
  height: 250px;
  width: 100%;
  background: ${props => props.theme.colors.backgroundCard};
  border-radius: 4px 4px 0 0;
  padding:0.5rem;

  display: flex;
  align-items: flex-start;
  justify-content: space-around;
`
// export const StatusContent = styled.div`
//   .formContent {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-direction: column;
//     text-align: center;
//     gap: 0.5rem;

    // input[type="month"] {
    //   border: none;
    //   height: 25px;
    //   border-top-left-radius: 6px;
    //   border-bottom-left-radius: 6px;
    //   padding: 0.5rem;
    //   background: ${props => props.theme.colors.backgroundCard};
    //   color: ${props => props.theme.colors.titleText};
    //   font-family: 'Roboto', sans-serif;
    //   outline: none;
    //   cursor: pointer;

    //   ::-webkit-calendar-picker-indicator {
    //     filter: invert(1);
    //     cursor: pointer;
    //   }
    // }


  //   button[type='submit'] {
  //     height: 25px;
  //     border: 0;
  //     background: ${props => props.theme.colors.baseColor};
  //     color: ${props => props.theme.colors.titleText};
  //     font-weight: bold;
  //     padding: 0 1.25rem;
  //     cursor: pointer;
  //     border-top-right-radius: 6px;
  //     border-bottom-right-radius: 6px;
  //     &:disabled {
  //       opacity: 0.6;
  //       cursor: not-allowed;
  //     }
  //     &:not(:disabled):hover {
  //       background: ${props => props.theme.colors.baseColorHover};
  //       transition: background-color 0.2s;
  //     }
  //   }
  // }

//   .analitcs {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     gap: 0.5rem;
//     flex-wrap: wrap;
//   }

//   .notFoundItems {
//     display: flex;
//     width: 100%;
//     height: 20rem;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     gap: 1rem;
//     text-align: center;
//   }

//   .calcs {
//     display: flex;
//     gap: 0.5rem;
//     align-items: center;
//     justify-content: center;

//     .calcsValues {
//       display: flex;
//       flex-direction: column;
//       align-items: flex-end;
//     }
//   }
// `

export const InfoElement = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: space-around;

  .resumo {
    width: 100%;
    display: flex;
    flex-direction: column;
    background: rgb(240 248 255 / 98%);
    border-radius: 4px;
    padding: 0.25rem;

    span {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid ${props => props.theme.colors.text};

      &.input p{
        color: ${props => props.theme.colors.inputColor}; 
      }

      &.output p{
        color: ${props => props.theme.colors.outputColor}; 
      }

      &.aports p{
        color: ${props => props.theme.colors.investmentColor}; 
      }

      &.dividends p{
        color: ${props => props.theme.colors.dividendColor}; 
      }
    }
  }

  .periodo {

    h4 {
      text-align: center;
      margin-bottom: 0.5rem;
    }

    form {
      div {
        display: flex;
      }
    }
    input[type="month"] {
      border: none;
      height: 25px;
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
      padding: 0.5rem;
      background: ${props => props.theme.colors.background};
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
      padding: 0 0.5rem;
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
`