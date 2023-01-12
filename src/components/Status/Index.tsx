import { ChartComponent, SectionStatus, StatusContent } from "./styles";
import { Chart } from "react-google-charts";
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { SmileyWink, SmileyXEyes } from "phosphor-react";
import { TransactionProps } from "../../contexts/TransactionsContext";

export function Status() {
  const TransactionContext = useContext(TransactionsContext)
  const listTransactions = TransactionContext.listTransactions
  
  function transactionCount( array: TransactionProps[], type: string) {
    return array.filter(item => item.type == type ).length
  }

  function totalValueCalc (array: TransactionProps[], type: string) {
    const filterTypeTransaction = array.filter(item => item.type == type)
    
    const filterValuesTransaction = filterTypeTransaction.map(item => {return item.value})
    
    const sumTransactions = filterValuesTransaction.reduce((accumulator: any, currentValue: any) => 
    parseInt(accumulator)  + parseInt(currentValue), 0)

    const valueFormated = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(sumTransactions)

    return valueFormated
  }

  const data = [
    ["Task", "monthly transactions"],
    ["Entradas", transactionCount(listTransactions, 'input')],
    ["Saídas", transactionCount(listTransactions, 'output')],
    ["Aportes", transactionCount(listTransactions, 'aports')],
    ["Dividendos", transactionCount(listTransactions, 'dividends')], // CSS-style declaration
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
        {/* <div className="formContent">
          <h2>Mês atual: Janeiro</h2>

          <form>
            <h3>Selecionar Periodo: </h3>
            <div className="formInput">
              <input type="month"/>
              <button type="submit">Buscar</button>
            </div>
          </form>
        </div> */}
        
        {listTransactions.length > 0 && <ChartComponent chartType="PieChart" data={data} options={options} /> }  
         
        {listTransactions.length === 0 && 
          <div className="notFoundItems">
            <SmileyXEyes size={42} />
            <small>Não foram encontradas Transações. <br />Experimente adicionar uma nova transação!</small>
          </div>
        }

        <div className="analitcs">
          <div className="line">
            <p>Entradas: {totalValueCalc(listTransactions, 'input')} ;</p>
          </div>

          <div className="line">
            <p>Saídas: {totalValueCalc(listTransactions, 'output')} ;</p>
          </div>

          <div className="line">
            <p>Aportes: {totalValueCalc(listTransactions, 'aports')};</p>
          </div>

          <div className="line">
            <p>Dividendos: {totalValueCalc(listTransactions, 'dividends')}.</p>
          </div>
        </div>
      </StatusContent>
    </SectionStatus>
  )
}