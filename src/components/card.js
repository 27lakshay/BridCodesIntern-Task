import React from "react";
import styled from "styled-components";

const Card = styled.div`
    width: 340px;
    /* min-width: 240px;
    max-width: 440px; */
    height: 380px;
    margin: 5rem 5rem;
    border-radius: 10px;
    background-color: green;
    box-shadow: 3px 3px 20px 3px rgba(0, 0, 0, 0.5);
    flex: 0 0 auto;
    display: grid;
    grid-template-rows: 30% 50% 20%;
`;
const CardBody = styled.div`
    padding: 5% 5%;
`;
const CardTitle = styled.div`
    padding: 5% 5%;
    align-self: flex-end;
`;
const CardFooter = styled.div`
    width: 100%;
    border-radius: 0 0 10px 10px;
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
