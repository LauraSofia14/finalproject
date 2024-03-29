import React from "react";
import styled from "styled-components";
import Favorites from "./components/favorites/favorites";
import ContactsList from "./components/contactList/contacts";
import Overview from "./components/overview/overview";
import logofp from './assets/logofp.png';
import { BrowserRouter as Router, Route,  Routes, Link } from 'react-router-dom';

const AppWrapper = styled.div ``;

const NavbarContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    color: black;
`;

const Logo = styled.img`
    height: 40px;
    width: auto;
    background-color: #ececec;
`;

const NavLinks = styled.ul`
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
`;

const NavItem = styled.li`
    margin-left: 20px;
`;

const NavLink = styled(Link)`
    text-decoration: none;
    color: black;
    &:hover {
    color: #C1D72F;
}
`;
const Button = styled.button`
    padding: 8px 16px;
    background-color: #C1D72F;
    color: #333;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
    background-color: #C1D72F;
}
`;


function App() {
  return(
    <AppWrapper>
      <Router>
        <NavbarContainer>
            <Logo src={logofp} alt="Logo" />
            <NavLinks>
                <NavItem>
                    <NavLink to="/overview">Overview</NavLink>
                </NavItem>
            </NavLinks>
            <NavLinks>
                <NavItem>
                    <NavLink to="/contacts">Contacts</NavLink>
                </NavItem>
            </NavLinks>
            <NavLinks>
                <NavItem>
                    <NavLink to="/favorites">Favorites</NavLink>
                </NavItem>
            </NavLinks>
            <Button>+ New</Button>
            </NavbarContainer>
            <Routes>
              <Route  path="/overview" element={<Overview />} />
              <Route  path="/contacts" element={<ContactsList />} />
              <Route  path="/fvorites" element={<Favorites />} />
            </Routes>
      </Router>
    </AppWrapper>
  )
}

export default App;