import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <NavStyled className="Nav">
        <NavLink to="/" exact>Welcome</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/login">Login</NavLink>
        </NavStyled>
    );
}

export default Nav;

const NavStyled = styled.nav`
    a {
        background:teal;
        color: white;
        text-decoration: none;

        padding: 10px;
        margin: 10px;

        &.active {
            background-color: #085a5a;
        }
    }
`;