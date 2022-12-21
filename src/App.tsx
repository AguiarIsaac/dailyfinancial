import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'
import { GlobalStyle } from './styles/globalstyle'
import Dark from './styles/themes/Dark'
import Light from './styles/themes/Light'

export function App() {
  
  return (
    <ThemeProvider theme={Dark}>
      <Header />
      <GlobalStyle />
    </ThemeProvider>
  )
}

