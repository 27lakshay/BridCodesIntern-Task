import React from "react";
import styled from "styled-components";
import Card from "./card";
import { InfoContainer } from "./info";

const InfoBoxCardContainer = styled(InfoContainer)`
    grid-template-columns: none;
    grid-template-rows: 1fr 2fr;
`;

// const Text = styled.div`
//     display: flex;
//     justify-content: space-between;
// `

const CardWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
        display: none;
    }
`;

const InfoBoxCard = () => {
    return (
        <InfoBoxCardContainer>
            <div>
                <h3>
                    The best design for your
                    <br />
                    studio website
                </h3>
            </div>
            <CardWrapper>
                <Card />
                <Card />
                <Card />
            </CardWrapper>
        </InfoBoxCardContainer>
    );
};

export default InfoBoxCard;
