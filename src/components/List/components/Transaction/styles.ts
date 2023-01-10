import styled from "styled-components";

export const TransactionComponent = styled.div`

  background: #29292E;
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
      color: ${props => props.theme.colors.green}
    }

    span.valueNegative {
      color: ${props => props.theme.colors.red}
    }

    span.valueDividends {
      color: ${props => props.theme.colors.blue}
    }

    span.valueAports {
      color: ${props => props.theme.colors.yellow}
    }

    /* div.tags {
      width: 8rem;
      display: flex;
      flex-wrap: wrap;
      gap: 0.25rem;

      span.tag {
        background: ${props => props.theme.colors.red};
        border-radius: 9999px;
        padding: 0 2px;
        font-size: 11px;
        min-width: 36px;
        text-align: center;
      }
    } */
  }

  div.line2 {
    small {
      margin-left: 1.6rem;
      font-size: 10px;
    }
  }
`