import { ChartComponent, SectionStatus, StatusContent } from "./styles";
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { Minus, SmileyWink, SmileyXEyes } from "phosphor-react";
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

    const finalValue = {
      formated: new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(sumTransactions),
      unformated: sumTransactions
    }

    return finalValue
  }

  function calcs() {
    const inputs = totalValueCalc(listTransactions, 'input').unformated
    const outputs = totalValueCalc(listTransactions, 'output').unformated + totalValueCalc(listTransactions, 'aports').unformated
    
    const subtraction = inputs - outputs

    const subtractionFormated = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(subtraction)

    const results = {
      resultSubtraction: subtractionFormated,
      totalOfInputs: new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(outputs)
    }

    return results
  }

  const data = [
    ["Task", "monthly transactions"],
    [`${transactionCount(listTransactions, 'input')} entradas`, transactionCount(listTransactions, 'input')],
    [`${transactionCount(listTransactions, 'output')} saídas`, transactionCount(listTransactions, 'output')],
    [`${transactionCount(listTransactions, 'aports')} aportes`, transactionCount(listTransactions, 'aports')],
    [`${transactionCount(listTransactions, 'dividends')} dividendos`, transactionCount(listTransactions, 'dividends')], // CSS-style declaration
  ];
  
  const options = {
    title: ` Total de transações: ${listTransactions.length}`,
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
      fontSize: 14
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

        <h4>Parcial de entradas e saídas:</h4>
        <div className="calcs">
          <span><Minus size={18}/></span>
          <div className="calcsValues">
            <span>{totalValueCalc(listTransactions, 'input').formated}</span>
            <span>{calcs().totalOfInputs}</span>
            <div></div>
            <span>{calcs().resultSubtraction}</span>
          </div>
        </div>

        <div className="analitcs">
          <div className="line">
            <p>Entradas: {totalValueCalc(listTransactions, 'input').formated} ;</p>
          </div>

          <div className="line">
            <p>Saídas:{totalValueCalc(listTransactions, 'output').formated} ;</p>
          </div>

          <div className="line">
            <p>Aportes: {totalValueCalc(listTransactions, 'aports').formated};</p>
          </div>

          <div className="line">
            <p>Dividendos: {totalValueCalc(listTransactions, 'dividends').formated}.</p>
          </div>

          <div>
            <h4>Dados anuais</h4>
            
        </div>
        </div>

      </StatusContent>
    </SectionStatus>
  )
}