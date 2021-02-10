import React from "react";
import styled from "styled-components";

const Review = styled.div`
    display: flex;
    margin: 2rem auto;
    flex-direction: column;
    align-items: flex-start;
    max-width: 910px;
    > * {
        margin-bottom: 2rem;
    }
    @media screen and (max-width: 992px) {
        margin: 2rem 1rem;
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
const review = ({ content, image, name, title }) => {
    return (
        <Review>
            <h4>{content}</h4>
            <Profile>
                <img src={image} />
                <ProfileDetail>
                    <div className="text_subtitle">{name}</div>
                    <div className="text_medium">{title}</div>
                </ProfileDetail>
            </Profile>
        </Review>
    );
};

export default review;
