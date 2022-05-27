import { createGlobalStyle, ThemeContext} from "styled-components"

const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.mainText};
        transition: all 0.50s linear;
    }
`

export default GlobalStyles