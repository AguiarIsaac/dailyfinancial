import { ArrowCircleDown, ArrowCircleUp } from "phosphor-react";
import { useEffect, useState } from "react";
import { TransactionComponent } from "./styles";

interface transactionProps {
  TransactionType: 'input' | 'output'
}

export function Transaction({TransactionType}: transactionProps) {
  
  const [operationType, setOperationType] = useState(true)
  
  function verifyTransaction() {
    if(TransactionType == 'input') {
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

        <span>venda de site</span>
      </div>
      {/* <div className="tags">
        <span className="tag">freela</span>
        <span className="tag">BH</span>
      </div> */}

      {operationType && <span className="valuePositive">R$ 1.475,00</span>}
      {!operationType && <span className="valueNegative">R$ 1.475,00</span>}
      
    </div>

    <div className="line2">
      <small>11/12/2022</small>
    </div>
  </TransactionComponent>
  )
}