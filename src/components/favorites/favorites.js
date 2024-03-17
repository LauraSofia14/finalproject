import React from 'react';
import styled from 'styled-components';
import Card from '../card/card';

const FavoritesContainer = styled.div`
    margin-left: 5%;
    margin-right: 5%;
`;

const TitleFavorites = styled.h1`
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

const Favorites = () => {
    const array = [1, 2, 3, 4];
    return (
        <FavoritesContainer>
            <div className="card-favorites">
                <TitleFavorites>Favorites</TitleFavorites>
                <LineaGreen />
            </div>
            <CardContainer>
                {array.map(user => <Card key={user} />)}
            </CardContainer>
        </FavoritesContainer>
    );
}

export default Favorites;
