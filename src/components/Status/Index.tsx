import { ChartComponent, SectionStatus, StatusContent } from "./styles";
import { Chart } from "react-google-charts";
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { SmileyWink, SmileyXEyes } from "phosphor-react";

export function Status() {
  const TransactionContext = useContext(TransactionsContext)
  const listTransactions = TransactionContext.listTransactions
  console.log(listTransactions)

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
      color: '#C4C4CC',
      fontName: 'Roboto'
    },
    titleTextStyle: {
      color: '#C4C4CC',
      fontName: 'Roboto',
      fontSize: 16
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
        
        {listTransactions.length > 0 && <ChartComponent chartType="PieChart" data={data} options={options} /> }  
         
        {listTransactions.length === 0 && 
          <div className="notFoundItems">
            <SmileyXEyes size={42} />
            <small>Não foram encontradas Transações. <br />Experimente adicionar uma nova transação!</small>
          </div>
        }

        <div className="analitcs">
          <div className="line">
            <p>Entradas: ;</p>
          </div>

          <div className="line">
            <p>Saídas: ;</p>
          </div>

          <div className="line">
            <p>Aportes:;</p>
          </div>

          <div className="line">
            <p>Dividendos: .</p>
          </div>
        </div>
      </StatusContent>
    </SectionStatus>
  )
}