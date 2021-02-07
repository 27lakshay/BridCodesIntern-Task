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
                <div className="caption"></div>
                <h3></h3>
                <p className="text_large"></p>
            </ColumnLeft>
            <ColumnRight>
                <div>
                    <img />
                    <div className="text_subtitle"></div>
                    <div className="text_medium"></div>
                </div>
            </ColumnRight>
        </InfoBoxTextContainer>
    );
};

export default InfoBoxText;
