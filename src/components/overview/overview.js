import React from "react";
import styled from "styled-components";
import Favorites from "../favorites/favorites";
import ContactsList from "../contactList/contacts";

const AppWrapper = styled.div ``;

function Overview() {
    return(
        <AppWrapper>
            <Favorites></Favorites>
            <ContactsList></ContactsList>
        </AppWrapper>
)
}

export default Overview;