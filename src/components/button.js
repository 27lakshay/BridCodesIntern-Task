import styled from "styled-components";

export const ButtonNormal = styled.button`
    /* width: 252px;
    height: 72px; */
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 18px 41px;
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
    line-height: 120%;
    border-radius: 8px;
    text-align: center;
    border: none;
    color: white;
    /* primary=red secondary=blue */
    background: ${({ primary }) => (primary ? "#0E6FFF" : "#FF4242")};
`;

export const ButtonSmall = styled.button`
    /* width: 138px;
    height: 41px; */
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px 18px;
    border: 2px solid #ff4242;
    box-sizing: border-box;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 4px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 120%;
    /* identical to box height, or 22px */
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.03em;
    /* Primary */
    color: #0e6fff;
`;
