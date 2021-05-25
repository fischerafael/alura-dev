import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  ${(props) => resetCSS}
`

const resetCSS = css`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`
