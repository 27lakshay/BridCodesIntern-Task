import React from "react";
import "../styles/landingpage.scss";
import styled from "styled-components";

import { InfoContainer } from './info';

import InfoBox from "./infoContainer";
import Card from "./card";
import CardWrapper from "./cardCarousel";
import Review from "./review";
import { ButtonNormal, ButtonSmall } from "./button";
import { InfoDataOne, InfoDataTwo } from "../data/infoData";
import Footer from './footer';
// import { InfoContainer } from "./info";


const LandingPage = () => {
    return (
        <>
            <div className="hero">
                <div className="left">
                    <div className="text1 caption">Design Inspiration</div>
                    <h1 className="text2">
                        Convallis turpis
                        <br />
                        erat tempus,
                        <br />
                        viverra aliquet.{" "}
                    </h1>
                    <button>Get In Touch</button>
                    <div className="text3">Here Will Be A Review Component</div>
                </div>
                <div className="right">Image Carousel</div>
            </div>
            <InfoBox {...InfoDataOne}/>
            <InfoBox {...InfoDataTwo} />
            <CardWrapper />
            <Review />
            {/* <InfoContainer> */}
            <ButtonNormal primary>Get In Touch</ButtonNormal>
            <ButtonNormal>Get In Touch</ButtonNormal>
            <ButtonSmall>Get In Touch</ButtonSmall>
            {/* </InfoContainer> */}
            <Footer/>
        </>
    );
};

export default LandingPage;
