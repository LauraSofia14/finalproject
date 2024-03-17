import React from 'react';
import styled from 'styled-components';
import Card from '../card/card';

const ContactsListContainer = styled.div`
    margin-left: 5%;
    margin-right: 5%;
`;

const TitleContactsList = styled.h1`
    font-size: 30px;
    font-weight: 600;
    margin-top: 30px;
`;

const LineaGreen = styled.div`
    background: #C1D72F;
    height: 2px;
    width: 970px;
    margin-left: 160px;
    margin-top: -3%;
`;

const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 20px;
`;

const StyledCard = styled(Card)`
    width: 200px;
    margin-bottom: 20px;
`;

const ContactsList = () => {
    const array = [1, 2, 3, 4];
    return (
        <ContactsListContainer>
            <div className="card-ContactsList">
                <TitleContactsList>ContactsList</TitleContactsList>
                <LineaGreen />
            </div>
            <CardContainer>
                {array.map(user => <Card key={user} />)}
            </CardContainer>
        </ContactsListContainer>
    );
}

export default ContactsList;
