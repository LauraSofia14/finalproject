import React from "react";
import styled from 'styled-components';

const ContainerCards = styled.div`
    display: flex;
    justify-content: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    background-color: white;
    padding: 10px;
    max-width: 200px;
    margin-top: 3%;
`;

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Avatar = styled.img`
    width: 35%;
    margin-top: 5px;
    height: 40%;
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

const RemoveButton = styled.button`
    background-color: white;
    color: red;
    border: 1px solid red;
    padding: 5px 15px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 5px;
`;

const ContactCard = ({buttonStyle}) =>{
    return(
        <>
        {buttonStyle === `home` &&(
            <button>♡</button>
        )}
        {buttonStyle === `contacts` &&(
            <div>
            <button className="favorite">♡</button>
            <button className="trash">trash</button>
            </div>
        )}
        {buttonStyle === `favorites` &&(
            <button className="remove">X remove</button>
        )}
        </>
    )
}

export default ContactCard;

