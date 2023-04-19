import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Container } from './components/Container'
import { TransactionsContextProvider } from './contexts/TransactionsContext'
import { Header } from './components/Header'
import { List } from './components/List/indext'
import { GlobalStyle } from './styles/globalstyle'
import Dark from './styles/themes/Dark'
import Light from './styles/themes/Light'
import { MonthlyBalance } from './components/MonthlyBalance/Index'
import { AnnualBalance } from './components/AnnualBalance'

export function App() {

  const [changeTheme, setChangeTheme] = useState(true)

  return (
    <TransactionsContextProvider>
      <ThemeProvider theme={changeTheme ? Dark : Light}>
        <Header />

        <Container>
          <List />
          <MonthlyBalance />
          <AnnualBalance />
        </Container>
        <GlobalStyle />
      </ThemeProvider>
    </TransactionsContextProvider>
  )
}

