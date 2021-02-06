import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    /* outline: 1px solid red; */
    /* color: #23242a; */
    }

html,
body {
    font-size: 10px;
    overflow-x: hidden;
}

h1 {
    font-style: normal;
    font-weight: bold;
    font-size: clamp(3.8rem, 6vw, 7rem);
    line-height: 110%;
}
h2 {
    font-style: normal;
    font-weight: bold;
    font-size: clamp(3.2rem, 5vw, 6.4rem);
    font-size: 2.4rem; 
    line-height: 110%;
}
h3 {
    font-style: normal;
    font-weight: bold;
    font-size: clamp(2.6rem, 4vw, 5.4rem);
    /* font-size: 1.6rem;  */
    line-height: 110%;
}
h4 {
    font-style: normal;
    font-weight: bold;
    font-size: clamp(2.2rem, 4vw, 4.4rem);
    /* font-size: 0.6rem;  */
    line-height: 110%;
}  

.text_large {
    font-style: normal;
    font-weight: normal;
    font-size: clamp(2rem, 3vw, 3.4rem);
    line-height: 120%;
}
.text_medium {
    font-style: normal;
font-weight: normal;
font-size: clamp(1.6rem, 2vw, 3rem);
line-height: 130%;
}

.text_small {
    font-style: normal;
font-weight: bold;
font-size: clamp(1.2rem, 2vw, 2.6rem);
line-height: 135%;
}

.caption {
    font-style: normal;
font-weight: 500;
font-size: clamp(1.6rem, 3vw, 3rem);
line-height: 120%;
letter-spacing: 0.11em;
text-transform: uppercase;
}

`;

export default GlobalStyle;
