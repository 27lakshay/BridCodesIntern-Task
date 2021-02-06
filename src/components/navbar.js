import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import { navbarData } from "../data/NavbarData";
import { ButtonSmall } from "./button";
import { FaBars } from "react-icons/fa";
import logoImage from "../assets/space.png";

const Nav = styled.nav`
    height: 60px;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    background: ${({ scrollNav }) => (scrollNav ? "rgba(112, 112, 112, 1)" : "transparent")};
    transition: background-color 200ms linear;
`;

const NavLink = css`
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-style: normal;
    font-weight: bold;
    font-size: 21px;
    line-height: 135%;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.01em;
    color: #b3aca2 !important;
    text-decoration: none;
    margin-left: 3rem;
`;
const Logo = styled.img`
    width: 110px;
    height: 30px;
    color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(30%, 50%);
`;
const MenuBars = styled(FaBars)`
    display: none;
    @media screen and (max-width: 768px) {
        display: block;
        color: #fff;
        height: 40px;
        width: 40px;
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-50%, 25%);
    }
`;

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const NavMenuLinks = styled(Link)`
    ${NavLink}
`;
const NavBtn = styled.div`
    margin-left: 3rem;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;
const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 30) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changeNav);
    }, []);

    return (
        <Nav scrollNav={scrollNav}>
            <Logo src={logoImage}></Logo>
            <MenuBars onClick={toggle} />
            <NavMenu>
                {navbarData.map((item, index) => (
                    <NavMenuLinks key={index}>{item.name}</NavMenuLinks>
                ))}
            </NavMenu>
            <NavBtn>
                <ButtonSmall>Get In Touch</ButtonSmall>
            </NavBtn>
        </Nav>
    );
};

export default Navbar;
