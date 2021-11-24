import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`


html {
    @media (max-width: 1080) {
        font-size: 93.75%;
    }

    @media (max-width: 720px){
        font-size: 87.5%;
    }
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
}

h1, h2, h3, h4, h5,h6, strong{
    font-family: 'Montserrat', sans-serif; 
    font-weight: 700;
}

button{
    cursor: pointer;
}
`
