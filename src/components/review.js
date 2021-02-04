import React from "react";
import styled from "styled-components";
import dp from "../assets/dp1.png";

const Review = styled.div`
    height: 60vh;
    display: flex;
    margin: 0px auto;
    flex-direction: column;
    align-items: flex-start;
    max-width: 910px;
`;

const Profile = styled.div`
    max-width: 420px;
    display: flex;
    justify-content: space-between;
    img {
        width: 50px;
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
            <h4>
                “Every single person comes away and says - wow that's a really slick experience,
                that was so easy to use. I feel so much less stressed as I now know we’re doing
                everything by the book.”
            </h4>
            <Profile>
                <img src={dp} />
                <ProfileDetail>
                    <div classname="text_subtitle">Andry Ford</div>
                    <div className="text_medium">CEO at Whatever</div>
                </ProfileDetail>
            </Profile>
        </Review>
    );
};

export default review;
