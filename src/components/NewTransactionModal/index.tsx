import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import { CloseButton, Content, Item, Overlay, TransactionType } from './styles'

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form>
          <input type="text" placeholder='Descrição' />
          <input type="number" placeholder='Valor' />
          <input type="text" placeholder='Categoria' />

          <TransactionType>
            <Item value="input" id="input">
              <ArrowCircleUp size={18}/>
              Entrada
            </Item>

            <Item value="output" id="output">
              <ArrowCircleDown size={18}/>
              Saída  
            </Item>
          </TransactionType>

          <button type="submit">Cadastrar</button>
        </form>
      </Content> 
    </Dialog.Portal>
  )
}