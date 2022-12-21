import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'
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
      <GlobalStyle />
    </ThemeProvider>
  )
}

