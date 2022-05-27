import { createGlobalStyle, ThemeContext} from "styled-components"

const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.mainText};
        /* font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif; */
        transition: all 0.50s linear;
    }
`

export default GlobalStyles