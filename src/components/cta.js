import React from "react";
import styled from "styled-components";
import { ButtonNormal } from "./button";
const CTAWrapper = styled.div`
    max-width: 1400px;
    margin: 5rem auto;
    padding: 5em;
    display: flex;
    justify-content: space-between;
    border-radius: 12px;
    background: linear-gradient(0deg, #ffffff 0%, rgba(255, 255, 255, 0) 0%), #fff4d4;

    /* display: grid;
    grid-template-columns: 2fr 1fr; */
    > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        max-width: 680px;
        h4,
        p {
            margin-bottom: 3rem;
        }
    }
    @media screen and (max-width: 1400px) {
        margin: 5rem 1rem;
    }
    @media screen and (max-width: 992px) {
        flex-direction: column;
        padding: 2em;
    }
`;

const CTA = () => {
    return (
        <CTAWrapper>
            <div>
                <h4>All-in-one platform for business</h4>
                <p className="text_medium">
                    Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat,
                    viverra magna risus aliquam massa. Ac aliquam ac volutpat, viverra magna risus.
                </p>
            </div>
            <ButtonNormal primary>Get In Touch</ButtonNormal>
        </CTAWrapper>
    );
};

export default CTA;
