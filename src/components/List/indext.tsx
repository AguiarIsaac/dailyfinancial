import { Transaction } from "./components/Transaction";
import { ListTransactions, SectionList } from "./styles";
import * as Dialog from '@radix-ui/react-dialog';
import { NewTransactionModal } from "../NewTransactionModal";

export function List() {
  return (
    <SectionList>
      <header>
        <div className="text">
          <p>Transações</p>
          <small>Dezembro de 2022</small>
        </div>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button type="button">Nova transação</button>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </header>

      <ListTransactions>
        <Transaction TransactionType='input'/>
        <Transaction TransactionType='output'/>
        <Transaction TransactionType='input'/>
        <Transaction TransactionType='input'/>
        <Transaction TransactionType='output'/>
        <Transaction TransactionType='input'/>
        <Transaction TransactionType='input'/>
        <Transaction TransactionType='input'/>
        <Transaction TransactionType='output'/>
        <Transaction TransactionType='input'/>
        <Transaction TransactionType='output'/>
        <Transaction TransactionType='output'/>
        <Transaction TransactionType='input'/>
        <Transaction TransactionType='output'/>
        <Transaction TransactionType='input'/>
        <Transaction TransactionType='output'/>
        <Transaction TransactionType='output'/>
        <Transaction TransactionType='input'/>
        <Transaction TransactionType='output'/>
      </ListTransactions>
    </SectionList>
  )
}