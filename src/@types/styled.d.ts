import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
    baseColor: string,
    baseColorHover: string,
    background: string,
    backgroundCard: string,
    backgroundModal: string,
    titleText: string,
    text: string,

    inputColor: string,
    outputColor: string,
    investmentColor: string,
    dividendColor: string,
    },

    backgroundImg: string
  }
}