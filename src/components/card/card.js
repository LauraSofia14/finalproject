import React from "react";
import styled from "styled-components";
import ContactCard from "./contactCard";
import logofp from '../../assets/logofp.png';

const ContainerCards = styled.div`
    display: flex;
    justify-content: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    background-color: white;
    padding: 10px;
    margin-top: 3%;
    max-width:150px;
    max-height: auto;
`;

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Avatar = styled.img`
    width: 50px;
    margin-top: 5px;
    height: 50px;
    border-radius: 50px;
    border: 3px solid;
    border-color: #C1D72F;
`;

const Title = styled.h3`
    margin: 6px 0px;
`;

const Description = styled.p`
    margin: 6px 0px;
`;

const Divider = styled.hr`
    width: 80%;
    margin: 10px;
`;

const Card = () => {
    return (
    <div>
        <div>
        <ContainerCards>
            <CardContainer>
                <Avatar src={logofp} alt="avatar" />
                <Title>Full Name</Title>
                <Description>correo@gmail.com</Description>
                <Divider />
            <ContactCard buttonStyle="contacts" />
        </CardContainer>
        </ContainerCards>
        </div>
    
    </div>
);
};

export default Card;
