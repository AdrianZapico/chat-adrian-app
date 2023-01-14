import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{

    width: 100vh;
    height: 100vh;
    font-family: 'Segoe UI', Verdana, Geneva, Tahoma, sans-serif;
    background-color: #1e3e3e;
}

`

export default GlobalStyle