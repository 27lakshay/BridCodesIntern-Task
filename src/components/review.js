import React from "react";
import styled from "styled-components";
import dp from "../assets/dp1.png";

const Review = styled.div`
    display: flex;
    /* margin: 0px auto; */
    flex-direction: column;
    align-items: flex-start;
    max-width: 910px;
    > * {
        margin-bottom: 2rem;
    }
`;

const Profile = styled.div`
    max-width: 420px;
    display: flex;
    justify-content: space-between;
    img {
        width: 60px;
    }
`;
const ProfileDetail = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
`;
const review = () => {
    return (
        <Review>
            <h4>“I feel so much less stressed as I now know by the book.”</h4>
            <Profile>
                <img src={dp} />
                <ProfileDetail>
                    <div className="text_subtitle">Andry Ford</div>
                    <div className="text_medium">CEO at Whatever</div>
                </ProfileDetail>
            </Profile>
        </Review>
    );
};

export default review;
