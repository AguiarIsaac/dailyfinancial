import { InfoElement, SectionStatus } from "./styles";
import { useContext, useEffect, useState } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { TransactionProps } from "../../contexts/TransactionsContext";
import ReactApexChart from "react-apexcharts";
import { useForm } from "react-hook-form";

export function MonthlyBalance() {
  const { register, handleSubmit } = useForm()
  const TransactionContext = useContext(TransactionsContext)
  const listTransactions = TransactionContext.listTransactions
  const [listFilteredByMonth, setListFilteredByMonth] = useState([] as any)
  const [period, setPeriod] = useState<any>()
  const months = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]
  
  function handleGetMonth(data: any) {
    // retorna o numrero do mes seleciconado no form
    const dateSepared = data.month.split('-')
    const monthSelected = Number(dateSepared[1])

    //retorna o numero do mes de todas as transacoes
    const list = listTransactions.map(transaction => {
      const month = new Date(transaction.dateOfTransaction).getUTCMonth()
      return month + 1
    })

    const listFiltreds = listTransactions.filter(transaction => {
      const month = new Date(transaction.dateOfTransaction).getUTCMonth()
      const monsthFormated = month + 1

      if(monsthFormated === monthSelected) {
        return transaction
      }
    })

    setListFilteredByMonth(listFiltreds)
    // console.log(listFiltreds)
    // Aqui ele filtra os meses 
    // console.log(list.filter(month => month === monthSelected))
  }

  function totalValueCalc (array: TransactionProps[], type: string) {
    const filterTypeTransaction = array.filter(item => item.type == type)
  
    const filterValuesTransaction = filterTypeTransaction.map(item => {return item.value})

    const sumTransactions = filterValuesTransaction.reduce((accumulator: any, currentValue: any) => 
    parseInt(accumulator)  + parseInt(currentValue), 0)

    return sumTransactions
  }

  const totalValues = {
    input: totalValueCalc(listFilteredByMonth, 'input'),
    output: totalValueCalc(listFilteredByMonth, 'output'),
    dividends: totalValueCalc(listFilteredByMonth, 'dividends'),
    aports: totalValueCalc(listFilteredByMonth, 'aports')
  }

  const series = [totalValues.input, totalValues.output, totalValues.aports, totalValues.dividends]
  const options = {
    colors: ['rgb(0,176,124)', 'rgb(255, 105, 118)', 'rgb(197, 163, 74)', 'rgb(0, 128, 148)'],
    labels: ['Entradas', 'Saídas', 'Aportes', 'Dividendos'],
    chart: {
      type: 'donut',
      foreColor: 'rgb(255,255,255)'
    },
    tooltip: {
      y: {
        formatter: function (val: any) {
          const valueformated = val.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
          const values = valueformated
  
          return values
        }
      }
    }
    
  }


  useEffect(() => {
    const timeElapsed = Date.now()
    const currentDate = new Date(timeElapsed)
    setPeriod(currentDate)
  },[])
  
  return (
    <SectionStatus>
      <ReactApexChart options={options} series={series} type="donut" height={'100%'} width={'100%'}/>
      
      <InfoElement>
        <div className="periodo">
          <form onSubmit={handleSubmit(handleGetMonth)}>
            <h4>Resumo de periodo: {months[new Date(period).getMonth()]}</h4>
            <input
              {...register('month', {required: true})}  
              type="month"
              name="month" id="month" />
            <button type="submit">verificar</button>
          </form>
        </div>
        <div className="resumo">
          <span className="input">Entradas: <p>{totalValues.input.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}.</p></span>
          <span className="output">Saídas: <p>{totalValues.output.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}.</p></span>
          <span className="aports">Aportes: <p>{totalValues.aports.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}.</p></span>
          <span className="dividends">Dividendos: <p>{totalValues.dividends.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}.</p></span>
        </div>
      </InfoElement>
    </SectionStatus>
  )
}