import React from "react";
import "../styles/landingpage.scss";
import Hero from "./hero";
import InfoBox from "./infoContainer";
import CardWrapper from "./cardCarousel";
import Review from "./review";
import { InfoDataOne, InfoDataTwo } from "../data/infoData";
import Footer from "./footer";
import styled from "styled-components";
import Team from "./team";
import InfoBoxImage from "./InfoBoxImage";
import InfoBoxText from "./InfoBoxText";

const BgColor1 = styled.div`
    position: absolute;
    z-index: -100;
    width: 100vw;
    height: 150vh;
    background: linear-gradient(0deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%), #fff4d4;
`;

const BgColor2 = styled.div`
    position: absolute;
    z-index: -100;
    top: 150vh;
    width: 100vw;
    height: 150vh;
    background: linear-gradient(0deg, #ffffff -45.04%, rgba(255, 255, 255, 0) 102.87%), #d8f6ff;
`;

const LandingPage = () => {
    return (
        <>
            <BgColor1 />
            <BgColor2 />
            <Hero />
            {/* <InfoBoxImage /> */}
            {/* <InfoBox {...InfoDataOne} /> */}
            {/* <InfoBox {...InfoDataTwo} /> */}
            <CardWrapper />
            {/* <InfoBoxText /> */}
            <Team />
            <Review />
            {/* <Footer /> */}
        </>
    );
};

export default LandingPage;
