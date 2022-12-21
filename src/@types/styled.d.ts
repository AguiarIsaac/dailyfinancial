import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string,
      baseText: string,
      baseCard: string,
  
      green: string,
      red: string,
      blue: string
    },
  }
}