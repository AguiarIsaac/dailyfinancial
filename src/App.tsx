import { useState } from 'react'
import { Calendar } from 'react-calendar'
import { ThemeProvider } from 'styled-components'
import { Container } from './components/Container'
import { Header } from './components/Header'
import { List } from './components/List/indext'
import { SwitchElement } from './components/Switch'
import { GlobalStyle } from './styles/globalstyle'
import Dark from './styles/themes/Dark'
import Light from './styles/themes/Light'

export function App() {

  const [changeTheme, setChangeTheme] = useState(true)

  return (
    <ThemeProvider theme={changeTheme ? Dark : Light}>
      <SwitchElement setChangeTheme={setChangeTheme} changeTheme={changeTheme}/>
      <Header />

      <Container>

        <List />
      </Container>
      <GlobalStyle />
    </ThemeProvider>
  )
}

