import React from "react";
import styled from "styled-components";

const TeamContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const Members = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const team = () => {
    return (
        <TeamContainer>
            <h2>Our Leadership</h2>
            <p>
                Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum
                malesuada a, duis volutpat.
            </p>
            <Members>
                <Member>
                    <img src={} />
                    <div>
                        <div></div>
                    </div>
                </Member>
            </Members>
        </TeamContainer>
    );
};

export default team;
