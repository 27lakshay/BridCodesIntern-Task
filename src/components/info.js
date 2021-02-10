import styled from "styled-components";

// export const InfoContainer = styled.div`
//     max-width: 1400px;
//     max-height: 800px;
// `;

export const InfoContainer = styled.div`
    margin: 5rem auto;
    @media screen and (max-width: 1480px) {
        margin: 3% 3%;
    }
    display: grid;
    max-width: 1400px;
    grid-template-columns: 1fr 1fr;
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        height: 100%;
    }
`;
