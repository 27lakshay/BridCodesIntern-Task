import React from "react";
import styled from "styled-components";
import image from "../assets/image1.png";

const InfoContainer = styled.div`
    margin: 0 auto;
    /* padding: 3rem 5rem; */
    display: flex;
    max-width: 1600px;
    flex-direction: column;
    @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 6vw;
    }
`;
const MediaCol = styled.div`
flex-basis:100%;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        --o-object-fit: cover;
        border-radius: 10px;
    }
`;
const TextCol = styled.div`
    flex-basis:100%;
    height: 100%;
    align-self: center;
`;

const infoContainer = () => {
    return (
        <InfoContainer>
            <MediaCol>
                <img src={image}></img>
            </MediaCol>
            <TextCol>
                <h3>The best design for your<br/>studio website</h3>
                <div className="text_large">
                    Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit
                    ipsum malesuada duis volutpat.
                </div>
            </TextCol>
        </InfoContainer>
    );
};

export default infoContainer;
