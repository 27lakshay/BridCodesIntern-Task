import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 0 auto;
    max-width: 1400px;
    > div {
        display: flex;
        justify-content: space-evenly;
    }
    @media screen and (max-width: 992px) {
        flex-direction: column;
    }
`;

const FooterBG = styled.div`
    background: #23242a;
    width: 100%;
    height: 100%;
`;

const ColumnText = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2em 0;
    p {
        color: rgba(255, 255, 255, 0.5);
    }
    div {
        width: 70px;
        color: rgba(255, 255, 255, 0.5);
        font-family: "Sarina", cursive;
        font-style: normal;
        font-weight: normal;
        font-size: 32px;
        line-height: 110%;
        /* letter-spacing: -0.03em; */
    }
`;

const ColumnOptions = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2em 2em;
    @media screen and (max-width: 425px) {
        margin: 2em 0;
    }
    div {
        color: rgba(255, 255, 255, 0.5);
        margin-bottom: 3rem;
    }
    ul,
    li {
        list-style-type: none;
        color: rgba(255, 255, 255, 1);
        margin-bottom: 1rem;
        cursor: pointer;
        :hover {
            color: rgba(14, 111, 255, 1);
        }
    }
`;

const FooterBottom = styled.div`
    width: 100%;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    > div {
        margin: 0 auto;
        padding: 2em 0;
        color: rgba(255, 255, 255, 0.5);
        max-width: 1110px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        @media screen and (max-width: 425px) {
            /* display: flex; */
            flex-direction: column;
        }
    }
`;

const Footer = () => {
    return (
        <FooterBG>
            <FooterWrapper>
                <ColumnText>
                    <div>Space</div>
                    <p className="text_medium">
                        The best design for your web studio website. Vitae
                        <br />
                        nulla nunc euismod vel pretium tellus accumsan
                        <br />
                        semper. Vitae nulla nunc euismod vel pretium tellus
                        <br />
                        accumsan semper.
                    </p>
                </ColumnText>
                <div>
                    <ColumnOptions>
                        <div className="text_small">Pages</div>
                        <ul className="text_small">
                            <li>Templates</li>
                            <li>Prices</li>
                            <li>Help</li>
                            <li>Contact</li>
                        </ul>
                    </ColumnOptions>
                    <ColumnOptions>
                        <div className="text_small">Demos</div>
                        <ul className="text_small">
                            <li>Dark Theme</li>
                            <li>Light Theme</li>
                            <li>Classic Theme</li>
                        </ul>
                    </ColumnOptions>
                    <ColumnOptions>
                        <div className="text_small">Resources</div>
                        <ul className="text_small">
                            <li>Documentation</li>
                        </ul>
                    </ColumnOptions>
                </div>
            </FooterWrapper>
            <FooterBottom>
                <div>
                    <div className="text_small">© 2019-2020 All Rights Reserved.</div>
                    <div className="text_small">Terms of Service</div>
                </div>
            </FooterBottom>
        </FooterBG>
    );
};

export default Footer;
