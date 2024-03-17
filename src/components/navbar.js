import React from 'react';
import styled from 'styled-components';
import logofp from '../assets/logofp.png';

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

const NavLink = styled.a`
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


const Navbar = () =>{
    return(
        <div>
        <NavbarContainer>
            <Logo src={logofp} alt="Logo" />
            <NavLinks>
                <NavItem>
                    <NavLink to="/overview">Overview</NavLink>
                </NavItem>
            </NavLinks>
            <NavLinks>
                <NavItem>
                    <NavLink href="#">Contacts</NavLink>
                </NavItem>
            </NavLinks>
            <NavLinks>
                <NavItem>
                    <NavLink href="#">Favorites</NavLink>
                </NavItem>
            </NavLinks>
            <Button>+ New</Button>
        </NavbarContainer>
        <div>
        <hr className={'line-header'}></hr>
        </div>
        </div>
        
    )
}

export default Navbar;