import { createContext, ReactNode, useEffect, useState } from "react";

interface ContextProps {
  children: ReactNode
}

interface TransactionsContextProps {
  listTransactions: TransactionProps[],
  addToList: (newState: TransactionProps) => void
}

export interface TransactionProps {
  id: string
  created_at: Date
  description: string,
  value: number,
  category: string,
  type: string,
  dateOfTransaction: Date
}


export const TransactionsContext = createContext({} as TransactionsContextProps)

export function TransactionsContextProvider({children}: ContextProps) {

  const [listTransactions, setListTransactions] = useState<TransactionProps[]>([])

  function addToList(TransactionEnvied: TransactionProps) {
    if(listTransactions.length === 0) {
      setListTransactions([TransactionEnvied])
    } else {
      setListTransactions([...listTransactions, TransactionEnvied])
    }
    console.log(listTransactions)
  }

  useEffect(() => {
    if(listTransactions.length > 0) {
      const stateJSON = JSON.stringify(listTransactions)
      localStorage.setItem('@daily-financial: list-transaction-0.0.1', stateJSON)
    }
  },[listTransactions])

  useEffect(() => {
    const getLocalStorage = localStorage.getItem('@daily-financial: list-transaction-0.0.1')
    if(!getLocalStorage) {
      return
    }

    const convertList = JSON.parse(getLocalStorage)

    if(listTransactions.length === 0 && convertList) {
      setListTransactions(convertList)
    }
  },[])

  return (
    <TransactionsContext.Provider value={{listTransactions, addToList}}>
      {children}
    </TransactionsContext.Provider>
  )
}

// FORMATAR DATAS --> OK
// FORMATAR VALORES --> OK 
// ADICIONAR DESCRIÇÃO
// EDITAR REGISTRO
// APAGAR (MOTIVO E DEIXAR SALVO EM UMA TABELA DE EXCLUIDOS)