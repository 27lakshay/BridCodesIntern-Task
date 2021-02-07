import React from "react";
import styled from "styled-components";
import Slider from "./imageSlider";
import { SliderData } from "../data/sliderData";
import { ButtonNormal } from "./button";
import Review from "./review";

const Hero = styled.div`
    padding-top: 10%;
    display: flex;
    justify-content: center;
    max-width: 1400px;
    margin: 0px auto;
    @media screen and (max-width: 1200px) {
        flex-direction: column;
    }
    /* display: grid;
    grid-template-columns: 2fr 1fr;
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    } */
    .hero {
        padding: 2% 5%;
        width: 60%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        @media screen and (max-width: 1200px) {
            width: 100%;
    }
    }
    h1 {
        margin-bottom: 20px;
    }
`;

const hero = () => {
    return (
        <Hero>
            <div className="hero">
                <div>
                    <div className="text1 caption">Design Inspiration</div>
                    <h1 className="text2">
                        Convallis turpis
                        <br />
                        erat tempus,
                        <br />
                        viverra aliquet.
                    </h1>
                    <ButtonNormal primary>Get In Touch</ButtonNormal>
                </div>
                <Review />
            </div>
            <Slider slides={SliderData} />
        </Hero>
    );
};

export default hero;
