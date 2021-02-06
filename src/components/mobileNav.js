import React from "react";
import styled from "styled-components";
import { navbarData } from "../data/NavbarData";
import { FaTimes } from "react-icons/fa";
import logoImage from "../assets/space.png";

const DropDownContainer = styled.div`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #ffc928;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
    top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;
const CloseIcon = styled(FaTimes)`
    color: black;
`;
const DropDownWrapper = styled.div``;
const DropdownMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 80px);
    text-align: center;
    margin-bottom: 4rem;
    @media screen and (max-wdith: 480px) {
        grid-template-rows: repeat(4, 60px);
    }
`;
const DropdownLink = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    list-style: none;
    color: #fff;
    cursor: pointer;
    transition: 0.2s ease-in-out;
`;

const MobileNav = ({ isOpen, toggle }) => {
    return (
        <DropDownContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <DropDownWrapper>
                <DropdownMenu>
                    {navbarData.map((item, index) => (
                        <DropdownLink key={index}>{item.name}</DropdownLink>
                    ))}
                </DropdownMenu>
            </DropDownWrapper>
        </DropDownContainer>
    );
};

export default MobileNav;