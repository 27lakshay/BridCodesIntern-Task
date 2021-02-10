import React from "react";
import styled from "styled-components";
import { InfoContainer } from "./info";
import icon from "../assets/icon.png";

const InfoBoxTextContainer = styled(InfoContainer)`
    grid-template-rows: 1fr 1fr;
    grid-template-columns: none;
    /* margin: 5rem auto; */
    @media screen and (max-width: 768px) {
        grid-template-rows: auto;
    }
`;

const RowTop = styled.div`
    > * {
        margin-bottom: 2rem;
    }
`;
const RowBottom = styled.div`
    display: flex;
    flex-direction: row;
    img {
        width: 50px;
        height: 50px;
    }
    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;
const TextBox = styled.div`
    display: flex;
    > div > * {
        margin-bottom: 2rem;
    }
`;

const InfoBoxText = () => {
    return (
        <InfoBoxTextContainer>
            <RowTop>
                <div className="caption">Design Concept</div>
                <h3>The best design for your studio website</h3>
                <p className="text_large">
                    Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit
                    ipsum malesuada a, duis volutpat. Convallis turpis erat tempus, viverra aliquet.
                    Nullam viverra nam auctor sit ipsum malesuada a, duis volutpat.
                </p>
            </RowTop>
            <RowBottom>
                <div>
                    <TextBox>
                        <img src={icon} />
                        <div>
                            <div className="text_subtitle">Design concept</div>
                            <div className="text_medium">
                                Vitae nulla nunc euismod vel nunc euismod velpretium tellus accumsan
                                nulla nunc euismod ve semper.
                            </div>
                        </div>
                    </TextBox>
                    <TextBox>
                        <img src={icon} />
                        <div>
                            <div className="text_subtitle">Design concept</div>
                            <div className="text_medium">
                                Vitae nulla nunc euismod vel nunc euismod velpretium tellus accumsan
                                nulla nunc euismod ve semper.
                            </div>
                        </div>
                    </TextBox>
                </div>
                <div>
                    <TextBox>
                        <img src={icon} />
                        <div>
                            <div className="text_subtitle">Design concept</div>
                            <div className="text_medium">
                                Vitae nulla nunc euismod vel nunc euismod velpretium tellus accumsan
                                nulla nunc euismod ve semper.
                            </div>
                        </div>
                    </TextBox>
                    <TextBox>
                        <img src={icon} />
                        <div>
                            <div className="text_subtitle">Design concept</div>
                            <div className="text_medium">
                                Vitae nulla nunc euismod vel nunc euismod velpretium tellus accumsan
                                nulla nunc euismod ve semper.
                            </div>
                        </div>
                    </TextBox>
                </div>
            </RowBottom>
        </InfoBoxTextContainer>
    );
};

export default InfoBoxText;
