import { HeaderComponent } from "./styles"
import paymentIcon from '../../assets/images/payment.webp'
export function Header() {

  return (
    <HeaderComponent>
      <img src={paymentIcon} alt="calendario" />
      <h1>Gerenciador Financeiro</h1>
    </HeaderComponent>
  )
}