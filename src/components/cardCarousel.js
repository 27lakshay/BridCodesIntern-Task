import React from "react";
import Card from "./card";
import styled from "styled-components";

const InfoBoxCardCarousel = styled.div`
    display: flex;
    flex-direction: column;
    > :nth-child(1) {
        align-self: center;
        text-align: center !important;
        > * {
            margin-bottom: 2rem;
        }
    }
`;  

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

const cardCarousel = () => {
    return (
        <InfoBoxCardCarousel>
            <div>
                <div className="caption">Design Concept</div>
                <h2>
                    The best design for your
                    <br />
                    studio website
                </h2>
            </div>
            <CardWrapper>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </CardWrapper>
        </InfoBoxCardCarousel>
    );
};

export default cardCarousel;
