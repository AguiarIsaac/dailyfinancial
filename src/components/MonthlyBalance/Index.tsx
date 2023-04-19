import { SectionStatus, StatusContent } from "./styles";
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { Minus, SmileyWink, SmileyXEyes } from "phosphor-react";
import { TransactionProps } from "../../contexts/TransactionsContext";
import ReactApexChart from "react-apexcharts";

export function MonthlyBalance() {
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

    const finalValue = {
      formated: new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(sumTransactions),
      unformated: sumTransactions
    }

    return finalValue
  }

  // function calcs() {
  //   const inputs = totalValueCalc(listTransactions, 'input').unformated
  //   const outputs = totalValueCalc(listTransactions, 'output').unformated + totalValueCalc(listTransactions, 'aports').unformated
    
  //   const subtraction = inputs - outputs

  //   const subtractionFormated = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(subtraction)

  //   const results = {
  //     resultSubtraction: subtractionFormated,
  //     totalOfInputs: new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(outputs)
  //   }

  //   return results
  // }

  const series = [44, 55, 41, 17, 15]
  const options = {
    chart: {
      type: 'donut',
    }
  }

  return (
    <SectionStatus>
      <ReactApexChart options={options} series={series} type="donut" height={'100%'} width={'60%'}/>
      {/* <div>
        <div className="formdata">
          <p>Selecionar Periodo: </p>
          <input type="month"/>
        </div>

        <span>Mês: Abril</span>
        <div className="balance">
          <div className="resumo">
            <span><p>Entradas</p> <p>R$ 1.250,25.</p></span>
            <span><p>Saídas</p> <p>R$ 875,00.</p></span>
            <span><p>Aportes</p> <p>R$ 550,00.</p></span>
            <span><p>Dividendos</p> <p>R$43,56.</p></span>
          </div>

          <div className="list">
            <span><p>salário</p> <p>R$ 1.250,00.</p></span>
          </div>
        </div>
      </div> */}

      <div className="info"></div>
    </SectionStatus>
  )
}