import { ArrowCircleDown, ArrowCircleUp } from "phosphor-react";
import { useEffect, useState } from "react";
import { TransactionComponent } from "./styles";

interface transactionProps {
  id: string
  description: string,
  value: number,
  category: string,
  type: string,
  created_at: Date
}

export function Transaction({id, description, type, value, category, created_at}: transactionProps) {
  
  const [operationType, setOperationType] = useState(true)
  
  function verifyTransaction() {
    if(type == 'input') {
      setOperationType(true)
    } else {
      setOperationType(false)
    }
  }
  
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

      {operationType && <span className="valuePositive">{value}</span>}
      {!operationType && <span className="valueNegative">{value}</span>}
      
    </div>

    <div className="line2">
      <small>{created_at.getMonth()}</small>
    </div>
  </TransactionComponent>
  )
}