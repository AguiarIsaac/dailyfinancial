import styled from "styled-components";
import { Chart } from "react-google-charts";

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
export const StatusContent = styled.div`
  height: 86%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

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
      background: ${props => props.theme.colors.gray1};
      color: ${props => props.theme.colors.baseText};
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
      background: ${props => props.theme.colors.green};
      color: ${props => props.theme.colors.baseText};
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
        background: ${props => props.theme.colors.greenLigth};
        transition: background-color 0.2s;
      }
    }
  }

  .analitcs {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
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
`


export const ChartComponent = styled(Chart)`
  width: 100%;
  height: 20rem;
  font-family: 'Roboto', sans-serif;
`