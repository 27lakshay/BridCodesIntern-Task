import React from "react";
import styled from "styled-components";
import { InfoContainer } from "./info";
import image1 from "../assets/image3.png";
import image2 from "../assets/image4.png";

const InfoBoxImageContainer = styled(InfoContainer)`
    grid-template-columns: 40% 60%;
    @media screen and (max-width: 1200px) {
        grid-template-columns: auto;
        margin: 5rem 1rem;
    }
`;

const ColumnLeft = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    @media screen and (max-width: 1200px) {
        display: none;
    }
`;
const ColumnRight = styled.div`
    img {
        max-width: 910px;
        max-height: 518px;
        width: 100%;
    }
`;

const Text = styled.div`
    width: 90%;
    > * {
        margin-bottom: 2rem;
    }
    @media screen and (max-width: 1200px) {
        width: 100%;
    }
`;

const InfoBoxImage = () => {
    return (
        <InfoBoxImageContainer>
            <ColumnLeft>
                <img src={image1} />
            </ColumnLeft>
            <ColumnRight>
                <Text>
                    <h2>Requirements gathering and analysis for references.</h2>
                    <div className="text_large">
                        Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit
                        ipsum malesuada a, duis volutpat. Convallis turpis erat tempus, viverra
                        aliquet. Nullam viverra nam auctor sit ipsum malesuada a, duis volutpat.
                    </div>
                </Text>
                <img src={image2} />
            </ColumnRight>
        </InfoBoxImageContainer>
    );
};

export default InfoBoxImage;
