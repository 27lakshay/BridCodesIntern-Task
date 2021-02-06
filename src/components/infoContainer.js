import React from "react";
import styled from "styled-components";
import { InfoContainer } from "./info";

const ColumnLeft = styled.div`
    max-width: 800px;
    justify-self: end;
    order: ${({ reverse }) => (reverse ? "2" : "1")};
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        --o-object-fit: cover;
        border-radius: 10px;
    }
    @media screen and (max-width: 768px) {
        height: 60%;
        order: 2;
    }
`;
const ColumnRight = styled.div`
    max-width: 800px;
    justify-self: start;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    order: ${({ reverse }) => (reverse ? "1" : "2")};
    @media screen and (max-width: 768px) {
        order: 1;
    }
`;

const infoContainer = ({ image, heading, content, button, reverse }) => {
    return (
        <InfoContainer>
            <ColumnLeft reverse={reverse}>
                <img src={image}></img>
            </ColumnLeft>
            <ColumnRight reverse={reverse}>
                <h3>{heading}</h3>
                <div className="text_large">{content}</div>
                {/* <a>{button}</a> */}
            </ColumnRight>
        </InfoContainer>
    );
};

export default infoContainer;
