import { SectionStatus } from "./styles";

export function Status() {
  return (
    <SectionStatus>
      <header>
      <h1>Status financeiro</h1>
      </header>

      <div className="content">
        <h2>Mês atual: Janeiro</h2>

        <form>
          <h3>Selecionar Periodo: </h3>
          <input type="month" name="" id="" />
          <button type="submit">Buscar</button>
        </form>

        <div className="analitcs">
          <div className="line">
            <p>Entradas: R$ 2.080,00</p>
          </div>

          <div className="line">
            <p>Saídas: R$ 1.080,00</p>
          </div>

          <div className="line">
            <p>Aportes: R$ 280,00.</p>
          </div>

          <div className="line">
            <p>Dividendos: R$ 0,90.</p>
          </div>

        </div>
      </div>
    </SectionStatus>
  )
}