import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string,
      baseText: string,
      baseCard: string,
  
      gray5: string,
      gray6: string,
      green: string,
      greenLigth: string,
      greenDark: string,
      red: string,
      redDark:string,
      yellow: string,
      blue: string
    },

    backgroundImg: string
  }
}