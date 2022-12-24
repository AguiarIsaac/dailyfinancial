import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import { useContext } from 'react';
import { useForm, Controller } from "react-hook-form";
import { TransactionsContext } from '../contexts/TransactionsContext';
import { CloseButton, Content, Item, Overlay, TransactionType } from './styles'

export function NewTransactionModal() {
  
  const {register, handleSubmit, control, reset } = useForm()
  const TransactionContext = useContext(TransactionsContext)

  function handleCreateNewTransaction(data: any) {
    const dataformated = {
      id: Math.floor(Date.now() * Math.random()).toString(36),
      created_at: new Date(),
      ...data
    }

    TransactionContext.addToList(dataformated)


    reset()
  }
  
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input {...register('description', {required: true})} type="text" placeholder='Descrição' />
          <input {...register('value', {required: true})} type="number" placeholder='Valor' />
          <input {...register('category', {required: true})} type="text" placeholder='Categoria' />

          <Controller 
            control={control}
            name="type"
            render={( {field }) => {
              return (
                <TransactionType onValueChange={field.onChange} value={field.value}>
                  <Item value="input" id="input">
                    <ArrowCircleUp size={18}/>
                    Entrada
                  </Item>

                  <Item value="output" id="output">
                    <ArrowCircleDown size={18}/>
                    Saída  
                  </Item>
                </TransactionType>
              )
            }}
          />


          <button type="submit">Cadastrar</button>
        </form>
      </Content> 
    </Dialog.Portal>
  )
}