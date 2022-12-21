import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'
import { GlobalStyle } from './styles/globalstyle'
import dark from './styles/themes/Dark'

export function App() {
  
  return (
    <ThemeProvider theme={dark}>
      <Header />
      <GlobalStyle />
    </ThemeProvider>
  )
}

