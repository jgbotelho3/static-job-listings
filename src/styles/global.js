import { createGlobalStyle } from "styled-components";

import { theme } from "./theme";

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Spartan:wght@500;700&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
        box-sizing: inherit;
    }

}
html{
    font-size: 62.5%;
    
}
    body{
        font-family: ${theme.fonts.family.primary};
        background-color: ${theme.colors.primary};
        color: #fff;
    }
`;

export default GlobalStyles;
