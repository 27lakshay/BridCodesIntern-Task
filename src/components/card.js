import React from "react";
import styled from "styled-components";

const Card = styled.div`
    width: 440px;
    height: 440px;
    margin: 5rem 5rem;
    border-radius: 10px;
    background-color: white;
    box-shadow: 3px 4px 10px 3px rgba(0, 0, 0, 0.2);
    flex: 0 0 auto;
    display: grid;
    grid-template-rows: 30% 50% 20%;
    > div {
        margin: 1rem 0;
    }
    @media screen and (max-width: 768px) {
        width: 240px;
    }
`;
const CardBody = styled.div`
    padding: 0 3rem;
    width: 100%;
    height: 100%;
    /* padding: 5% 5%; */
`;
const CardTitle = styled.div`
    padding: 0 3rem;
    width: 100%;
    height: 100%;
    /* padding: 5% 5%; */
    /* align-self: flex-end; */
`;
const CardFooter = styled.div`
    width: 100%;
    height: 100%;
    border-top: 1px solid grey ;
    border-radius: 0 0 10px 10px;
    padding: 0 3rem;
`;

const card = () => {
    return (
        <Card>
            <CardTitle>
                <h4>Name</h4>
            </CardTitle>
            <CardBody className="text_medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat, viverra
                magna risus aliquam massa. Ac aliquam ac volutpat, viverra magna risus.
            </CardBody>
            <CardFooter className="text_small">Experienced Team</CardFooter>
        </Card>
    );
};

export default card;
