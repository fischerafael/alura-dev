import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  ${(props) => resetCSS}
`

const resetCSS = css`
    *,
    html,
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font: 400 16px 'Inter', sans-serif;
    }
`
