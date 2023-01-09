import { ArrowCircleDown, ArrowCircleUp } from "phosphor-react";
import { useEffect, useState } from "react";
import { TransactionComponent } from "./styles";

interface transactionProps {
  id: string
  description: string,
  value: number,
  category: string,
  type: string,
  created_at: Date,
  dateOfTransaction: Date
}

export function Transaction({id, description, type, value, category, created_at, dateOfTransaction}: transactionProps) {
  
  function verifyTransaction() {
    if(type == 'input') {
      setOperationType(true)
    } else {
      setOperationType(false)
    }
  }
  
  function DateFormat(date: Date) {
    const day = new Date(date).getDay()
    const month = new Date(date).getMonth() + 1
    const year = new Date(date).getFullYear()
    
    
    return `${day}/${month}/${year}`
  }
  
  const [operationType, setOperationType] = useState(true)
  const dateOfTransactionFormated = DateFormat(dateOfTransaction)
  const valueFormated = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(value)
  
  useEffect(() =>{
    verifyTransaction()
  },[])
  
  return (
    <TransactionComponent>
    <div className="line1">
      <div className="column1">
        {operationType && <ArrowCircleUp size={18} color={'#00875F'} />}
        {!operationType && <ArrowCircleDown size={18} color={'#F75A68'} />}

        <span>{description}</span>
      </div>
      {/* <div className="tags">
        <span className="tag">freela</span>
        <span className="tag">BH</span>
      </div> */}

      {operationType && <span className="valuePositive">{valueFormated}</span>}
      {!operationType && <span className="valueNegative">{valueFormated}</span>}
      
    </div>

    <div className="line2">
      <small>{dateOfTransactionFormated}</small>
    </div>
  </TransactionComponent>
  )
}