import { ArrowCircleDown, ArrowCircleUp, Bank, CurrencyCircleDollar } from "phosphor-react";
import { useEffect, useState } from "react";
import { TransactionComponent } from "./styles"

interface transactionProps {
  id: string
  description: string,
  value: number,
  category: string,
  type: string,
  created_at: Date,
  dateOfTransaction: Date
}

export function Transaction({id, description, type, value, dateOfTransaction, created_at}: transactionProps) {
  
  function verifyTransaction() {
    setOperationType(type)
  }

  function dataFormated(){
    const date = new Date(dateOfTransaction + 'T00:00:00-03:00')

    const day = date.getDate().toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const year = date.getFullYear().toString()
    return `${day == '00' ? '01': day}/${month}/${year}`
  }


  const [operationType, setOperationType] = useState('')
  const valueFormated = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(value)
  
  useEffect(() =>{
    verifyTransaction()
  },[])
  
  return (
    <TransactionComponent>
    <div className="line1">
      <div className="column1">
        {operationType == 'input' && <ArrowCircleUp size={18} color={'#00875F'} />}
        {operationType == 'output' && <ArrowCircleDown size={18} color={'#F75A68'} />}
        {operationType == 'dividends' && <CurrencyCircleDollar size={18} color={'#5189A1'} />}
        {operationType == 'aports' && <Bank size={16} color={'#C5A34A'} />}

        <span>{description}</span>
      </div>
      {/* <div className="tags">
        <span className="tag">freela</span>
        <span className="tag">BH</span>
      </div> */}

      {operationType == 'input' && <span className="valuePositive">{valueFormated}</span>}
      {operationType == 'output' && <span className="valueNegative">{valueFormated}</span>}
      {operationType == 'dividends' && <span className="valueDividends">{valueFormated}</span>}
      {operationType == 'aports' && <span className="valueAports">{valueFormated}</span>}
      
    </div>

    <div className="line2">
      <small>{dataFormated()}</small>
    </div>
  </TransactionComponent>
  )
}