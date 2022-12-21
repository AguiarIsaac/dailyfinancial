import logo from "../../assets/svg/hashira.svg";
import { SwitchElement } from "../Switch";
import { HeaderComponent } from "./styles";

export function Header() {

  return (
    <HeaderComponent>
      <img src={logo} alt="Logo" />
      <span className="title">Hashira</span>

      <SwitchElement />
    </HeaderComponent>
  )
}