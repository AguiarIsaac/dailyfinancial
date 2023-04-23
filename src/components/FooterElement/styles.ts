import styled from "styled-components";

export const FooterComponent = styled.footer`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  position: fixed;
  bottom: 0;
  padding: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;


  button {
    border: none;
    background: none;
    color: ${props => props.theme.colors.titleText};
    cursor: pointer;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-direction: row-reverse;
    gap: 0.25rem;
  }

  button.download {
    svg {
      color: ${props => props.theme.colors.inputColor};
    }
  }

  button.upload {
    svg {
      color: ${props => props.theme.colors.outputColor};
    }
  }
`