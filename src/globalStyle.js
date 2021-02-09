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
    /* overflow-x: hidden; */
    @media screen and (max-width: 768px) {
        h1 {
            font-size: 4.6rem;
        }
        h2 {
            font-size: 4.2rem;
        }
        h3 {
            font-size: 3.4rem;
        }
        h4 {
            font-size: 2.8rem;
        }
        .text_large {
            font-size: 2.4rem;
        }
        .text_medium {
            font-size: 2rem;
        }
        .text_small {
            font-size: 1.6rem;
        }
    }
}
h1 {
    font-style: normal;
font-weight: bold;
font-size: 8.4rem;
line-height: 110%;
/* or 92px */
display: flex;
align-items: center;
letter-spacing: -0.045em;
}
h2 {
    font-style: normal;
font-weight: bold;
font-size: 6.4rem;
line-height: 110%;
/* or 70px */

display: flex;
align-items: center;
letter-spacing: -0.045em;
}
h3 {
    font-style: normal;
font-weight: bold;
font-size: 5.2rem;
line-height: 110%;
/* or 57px */

display: flex;
align-items: center;
letter-spacing: -0.045em;
}
h4 {
    font-style: normal;
font-weight: 500;
font-size: 4rem;
line-height: 110%;
/* or 48px */

display: flex;
align-items: center;
letter-spacing: -0.03em;
}
.text_subtitle {
    font-style: normal;
font-weight: bold;
font-size: 3rem;
line-height: 120%;
/* or 36px */

letter-spacing: -0.03em;
}
.text_large {
    font-style: normal;
font-weight: normal;
font-size: 2.8rem;
line-height: 120%;
/* or 34px */
letter-spacing: -0.01em;
}
.text_medium {
    font-style: normal;
font-weight: normal;
font-size: 2.4rem;
line-height: 130%;
/* or 31px */
letter-spacing: -0.02em;
}
.text_small {
    font-style: normal;
font-weight: bold;
font-size: 1.8rem;
line-height: 135%;
/* or 24px */
letter-spacing: -0.01em;
}
.caption {
    font-style: normal;
font-weight: 500;
font-size: 2.2rem;
line-height: 120%;
/* or 28px */
letter-spacing: 0.11em;
text-transform: uppercase;
}
/* h1 {
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
    line-height: 110%;
}
h4 {
    font-style: normal;
    font-weight: bold;
    font-size: clamp(2.2rem, 4vw, 4.4rem);
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
} */

`;

export default GlobalStyle;
