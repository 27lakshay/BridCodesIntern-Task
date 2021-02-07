import React from "react";
import styled from "styled-components";

const Footer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 2% auto;
    background: #23242A;
    max-width: 1400px;
`;

const ColumnText = styled.div`
    display: flex;
    flex-direction: column;
    p {
        color: rgba(255,255,255,0.5);
    }
`;

const ColumnOptions = styled.div`
    display: flex;
    flex-direction: column;
    div {
        color: rgba(255,255,255,0.5);
    }
    ul,
    li {
        list-style-type: none;
        color: rgba(255,255,255,1);
    }
`;

const footer = () => {
    return (
        <Footer>
            <ColumnText>
                <img></img>
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
        </Footer>
    );
};

export default footer;
