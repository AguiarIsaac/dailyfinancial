import { ChartComponent, SectionStatus, StatusContent } from "./styles";
import { Chart } from "react-google-charts";
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";

export function Status() {
  const TransactionContext = useContext(TransactionsContext)
  const listTransactions = TransactionContext.listTransactions

  const transactionCount = {
    input: listTransactions.filter(item => item.type == 'input').length,
    output: listTransactions.filter(item => item.type == 'output').length,
    dividends: listTransactions.filter(item => item.type == 'dividends').length,
    aports: listTransactions.filter(item => item.type == 'aports').length
  }

  const data = [
    ["Task", "monthly transactions"],
    ["Entradas", transactionCount.input],
    ["Saídas", transactionCount.output],
    ["Aportes", transactionCount.aports],
    ["Dividendos", transactionCount.dividends], // CSS-style declaration
  ];
  
  const options = {
    title: "Balanço Mensal",
    pieHole: 0.4,
    is3D: true,
    backgroundColor: 'transparent',
    legendTextStyle: {
      color: '#FFFFFF'
    },
    titleTextStyle: {
      color: '#FFFFFF'
    },
    colors:  ['#00875F', '#F75A68', '#C5A34A', '#5189A1'],
  };


  return (
    <SectionStatus>
      <header>
      <h1>Status financeiro</h1>
      </header>

      <StatusContent>
        <div className="formContent">
          <h2>Mês atual: Janeiro</h2>

          <form>
            <h3>Selecionar Periodo: </h3>
            <div className="formInput">
              <input type="month"/>
              <button type="submit">Buscar</button>
            </div>
          </form>
        </div>
        
        <ChartComponent chartType="PieChart" data={data} options={options} />

        <div className="analitcs">
          <div className="line">
            <p>Entradas: R$ 2.080,00;</p>
          </div>

          <div className="line">
            <p>Saídas: R$ 1.080,00;</p>
          </div>

          <div className="line">
            <p>Aportes: R$ 280,00;</p>
          </div>

          <div className="line">
            <p>Dividendos: R$ 0,90.</p>
          </div>
        </div>
      </StatusContent>
    </SectionStatus>
  )
}