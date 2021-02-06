import React from "react";
import styled from "styled-components";
import { InfoContainer } from "./info";

const InfoBoxImageContainer = styled(InfoContainer)``;

const ColumnLeft = styled.div``;
const ColumnRight = styled.div``;
const InfoBoxImage = () => {
    return (
        <InfoBoxImageContainer>
            <ColumnLeft>
                <img />
            </ColumnLeft>
            <ColumnRight>
                <h3></h3>
                <div className="text_large"></div>
                <img />
            </ColumnRight>
        </InfoBoxImageContainer>
    );
};

export default InfoBoxImage;
