import React from "react";
import styled from "styled-components";
import { TeamData } from "../data/teamData";

const TeamContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: auto;
    /* height: 100vh; */
`;
const Members = styled.div`
    height: 100%;
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
        display: none;
    }
`;
const Member = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-height: 490px;
    max-width: 320px;
`;

const Team = ({ name, title }) => {
    return (
        <TeamContainer>
            <h2>Our Leadership</h2>
            <p>
                Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum
                malesuada a, duis volutpat.
            </p>
            <Members>
                {TeamData.map((item, index) => (
                    <Member key={index}>
                        <img src={item.image} />
                        <div>
                            <div>{item.name}</div>
                            <div>{item.title}</div>
                        </div>
                    </Member>
                ))}
            </Members>
        </TeamContainer>
    );
};

export default Team;
