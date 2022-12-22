import { ArrowCircleUp } from "phosphor-react";
import { Transaction } from "./components/Transaction";
import { ListTransactions, SectionList } from "./styles";

export function List() {
  return (
    <SectionList>
      <header>
        <div className="text">
          <p>Transações</p>
          <small>Dezembro de 2022</small>
        </div>

        <button type="button">Nova transação</button>
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