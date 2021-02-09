import React from "react";
import styled from "styled-components";
import { TeamData } from "../data/teamData";

const TeamContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: auto;
    max-width: 1400px;
    margin: 0 auto;
    /* height: 100vh; */
    > * {
        margin-bottom: 3rem;
    }
    h2,
    p {
        align-self: center;
        text-align: center;
    }
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
    align-items: center;
    max-height: 490px;
    max-width: 320px;
    margin: 3rem 2rem;
`;

const Team = () => {
    return (
        <TeamContainer>
            <h2>Our Leadership</h2>
            <p className="text_large">
                Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum
                malesuada a, duis volutpat.
            </p>
            <Members>
                {TeamData.map((item, index) => (
                    <Member key={index}>
                        <img src={item.image} />
                        <div>
                            <div className="text_subtitle">{item.name}</div>
                            <div className="text_medium">{item.title}</div>
                        </div>
                    </Member>
                ))}
            </Members>
        </TeamContainer>
    );
};

export default Team;
