import { createContext, ReactNode, useState } from "react";

interface ContextProps {
  children: ReactNode
}

interface TransactionsContextProps {
  listTransactions: TransactionProps[],
  addToList: (newState: TransactionProps) => void
}

interface TransactionProps {
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

  return (
    <TransactionsContext.Provider value={{listTransactions, addToList}}>
      {children}
    </TransactionsContext.Provider>
  )
}

// FORMATAR DATAS --> OK 50% (falta numeros abaixo de 10)
// FORMATAR VALORES --> OK 50% (falta mascara no input)
// ADICIONAR DESCRIÇÃO
// EDITAR REGISTRO
// APAGAR (MOTIVO E DEIXAR SALVO EM UMA TABELA DE EXCLUIDOS)