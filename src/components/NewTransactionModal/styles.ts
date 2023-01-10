import styled from "styled-components";
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group';

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${props => props.theme.colors.baseCard};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      border-radius: 6px;
      border: 0;
      background: ${props => props.theme.colors.gray1};
      color: ${props => props.theme.colors.baseText};
      padding: 1rem;
      &:focus-visible {
        outline: none;
        border: 1px solid ${props => props.theme.colors.green};
        color: ${props => props.theme.colors.baseText};
      }
    }
    button[type='submit'] {
      height: 50px;
      border: 0;
      background: ${props => props.theme.colors.green};
      color: ${props => props.theme.colors.baseText};
      font-weight: bold;
      padding: 0 1.25rem;
      border-radius: 6px;
      margin-top: 1.25rem;
      cursor: pointer;
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
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0; 
  cursor: pointer;
  color: ${props => props.theme.colors.gray5}
`

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`

export const Item = styled(RadioGroup.Item)`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  border: 0;

  &#input svg {
    color: ${props => props.theme.colors.green};
  }

  &#output svg {
    color: ${props => props.theme.colors.red};
  }

  &#dividends svg {
    color: ${props => props.theme.colors.blue};
  }

  &#aports svg {
    color: ${props => props.theme.colors.yellow};
  }

  background: ${props => props.theme.colors.gray3};
  color: ${props => props.theme.colors.gray6};

  &[data-state='unchecked']:hover {
    transition: background-color 0.2s;
    background: ${props => props.theme.colors.gray4};
  }

  &[data-state='checked']#input {
    color: ${props => props.theme.colors.baseText};
    background: ${props => props.theme.colors.green};
    svg {
      color: ${props => props.theme.colors.baseText};
    }
  }

  &[data-state='checked']#output {
    color: ${props => props.theme.colors.baseText};
    background: ${props => props.theme.colors.red};
    svg {
      color: ${props => props.theme.colors.baseText};
    }
  }

  &[data-state='checked']#dividends {
    color: ${props => props.theme.colors.baseText};
    background: ${props => props.theme.colors.blue};
    svg {
      color: ${props => props.theme.colors.baseText};
    }
  }

  &[data-state='checked']#aports {
    color: ${props => props.theme.colors.gray4};
    background: ${props => props.theme.colors.yellow};
    svg {
      color: ${props => props.theme.colors.gray4};
    }
  }
`