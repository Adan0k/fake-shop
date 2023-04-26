import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
    padding: 0;
    margin: 0;
    color: #191919;
    }

    body{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }

    .App{
        min-height: 100vh;
    }

    a{
        text-decoration: none;
    }
`;

export default GlobalStyle;