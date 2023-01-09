import { ListTransactions, SectionList } from "./styles";
import * as Dialog from '@radix-ui/react-dialog';
import { NewTransactionModal } from "../NewTransactionModal";
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { Transaction } from "./components/Transaction";

export function List() {
  
  const TransactionContext = useContext(TransactionsContext)
  
  const Month = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
  const timeElapsed = Date.now()
  const currentDate = new Date(timeElapsed)

  return (
    <SectionList>
      <header>
        <div className="text">
          <p>Transações</p>
          <small>{Month[currentDate.getMonth()]} de {currentDate.getFullYear()}</small>
        </div>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button type="button">Nova transação</button>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </header>

      <ListTransactions>
        {TransactionContext.listTransactions.map((TransactionItem) => {
          return (
            <Transaction
              key={TransactionItem.id}
              id={TransactionItem.id}
              created_at={TransactionItem.created_at}
              description={TransactionItem.description}
              value={TransactionItem.value}
              category={TransactionItem.category}
              type={TransactionItem.type}
              dateOfTransaction={TransactionItem.dateOfTransaction} 
            />
          )
        })}      
      </ListTransactions>
    </SectionList>
  )
}