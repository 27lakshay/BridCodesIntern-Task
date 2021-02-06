import React, { useState, useRef, useEffect } from "react";
import styled, { css } from "styled-components/macro";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";

const Slider = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    max-width: 600px;
    max-height: 700px;
    position: relative;
    overflow: hidden;
`;
const SlideWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
`;
const Slide = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    --o-object-fit: cover;
`;

const HeroSlide = styled.div`
    z-index: 1;
    width: 100%;
    height: 100%;
`;
const HeroSlider = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SliderButtons = styled.div`
    position: absolute;
    display: flex;
    bottom: 10px;
    left: 10px;
    z-index: 10;
`;

const ArrowButtons = css`
    width: 50px;
    height: 50px;
    border-radius: 8px;
    color: #23242a;
    background: rgba(255, 255, 255, 0.2) !important;
    cursor: pointer;
    background: none;
    padding: 10px;
    margin-right: 1rem;
    transition: 0.3s;
    &:hover {
        background: #0e6fff !important;
        color: white;
    }
    &:active {
        background: rgba(122, 122, 122, 0.26) ;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 40px;
    }
`;

const PrevButton = styled(IoArrowBack)`
    ${ArrowButtons}
`;
const NextButton = styled(IoArrowForward)`
    ${ArrowButtons}
`;

const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const timeout = useRef(null);

    // useEffect(() => {
    //     const nextSlide = () => {
    //         setCurrent((current) => (current === length - 1 ? 0 : current + 1));
    //     };
    //     timeout.current = setTimeout(nextSlide, 1000);
    //     return function () {
    //         if (timeout.current) {
    //             clearTimeout(timeout.current);
    //         }
    //     };
    // }, [current, length]);

    const nextSlide = () => {
        if (timeout.current) {
            clearTimeout(timeout.current);
        }
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        if (timeout.current) {
            clearTimeout(timeout.current);
        }
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <Slider>
            <SlideWrapper>
                {slides.map((slide, index) => {
                    return (
                        <HeroSlide key={index}>
                            {index === current && (
                                <HeroSlider>
                                    <Slide src={slide.image} />
                                </HeroSlider>
                            )}
                        </HeroSlide>
                    );
                })}
                <SliderButtons>
                    <PrevButton onClick={prevSlide}>Prev</PrevButton>
                    <NextButton onClick={nextSlide}>Next</NextButton>
                </SliderButtons>
            </SlideWrapper>
        </Slider>
    );
};

export default ImageSlider;
