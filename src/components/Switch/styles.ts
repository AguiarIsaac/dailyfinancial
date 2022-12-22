import styled from "styled-components";

export const FormElement = styled.form`
  position: absolute;
  top: 1rem;
  right: 1rem;

  button {
  all: unset;
}

div {
  display: flex;
  align-items: center;

  svg {
    margin-right: 0.5rem;
  }
}

.SwitchRoot {
  width: 42px;
  height: 18px;
  background-color: #777;
  border-radius: 9999px;
  position: relative;
  box-shadow: 0 2px 10px #777;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.SwitchRoot:focus {
  box-shadow: 0 0 0 2px black;
}
.SwitchRoot[data-state='checked'] {
  background-color: black;
}

.SwitchThumb {
  display: block;
  width: 21px;
  height: 14px;
  background-color: white;
  border-radius: 9999px;
  box-shadow: 0 2px 2px #777;
  transition: transform 100ms;
  transform: translateX(2px);
  will-change: transform;
}
.SwitchThumb[data-state='checked'] {
  transform: translateX(19px);
}

.Label {
  color: ${props => props.theme.colors.baseText};
  font-size: 15px;
  line-height: 1;
  user-select: none;
}
`