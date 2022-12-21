import logo from "../../assets/svg/hashira.svg";
import { Logo } from "../Logo";
import { HeaderComponent } from "./styles";

export function Header() {

  return (
    <HeaderComponent>
      <Logo />
      <span className="title">Hashira</span>
    </HeaderComponent>
  )
}