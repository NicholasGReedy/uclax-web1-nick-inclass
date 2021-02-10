import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';



/* Scripts ---------------------------*/
import { mq } from '../../common/media_queries.js';

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

`;