import React from "react";
import Card from "./card";
import styled from "styled-components";

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
        <CardWrapper>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </CardWrapper>
    );
};

export default cardCarousel;
