import React from "react";
import styled from "styled-components";
import { InfoContainer } from "./info";

const InfoBoxTextContainer = styled(InfoContainer)`
    grid-template-columns: 1fr 2fr !important;
`;

const ColumnLeft = styled.div``;
const ColumnRight = styled.div``;

const InfoBoxText = () => {
    return (
        <InfoBoxTextContainer>
            <ColumnLeft>
                <div></div>
                <h3></h3>
                <div className="text_large"></div>
            </ColumnLeft>
            <ColumnRight>
                <div>
                    <img />
                    <div></div>
                    <div></div>
                </div>
            </ColumnRight>
        </InfoBoxTextContainer>
    );
};

export default InfoBoxText;
