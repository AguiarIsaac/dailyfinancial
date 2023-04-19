import styled from "styled-components";

export const TransactionComponent = styled.div`

  background: ${props => props.theme.colors.backgroundCard};
  border-radius: 6px;
  padding: 0.25rem;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin-right: 0.25rem;

  div.line1 {
    display: flex;
    align-items: center;
    justify-content: space-between;

    div.column1 {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
    }

    span.valuePositive {
      color: ${props => props.theme.colors.inputColor}
    }

    span.valueNegative {
      color: ${props => props.theme.colors.outputColor}
    }

    span.valueDividends {
      color: ${props => props.theme.colors.dividendColor}
    }

    span.valueAports {
      color: ${props => props.theme.colors.investmentColor}
    }
  }

  div.line2 {
    small {
      margin-left: 1.6rem;
      font-size: 10px;
    }
  }
`