import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import Nav from './Nav.jsx';

const NavLarge = () => {

    return (
        <NavLargeStyled className='NavLarge'>
            <Nav />
        </NavLargeStyled>
    );
}

export default NavLarge;

const NavLargeStyled = styled.div`

display: flex;
justify-content: center;
background-color: #0d4b4b;
padding: 20px;


.Nav {
    display: flex;
        width: 500px;
}

    a {
        flex: 1;
        text-align: center;
        display: block;
        background:teal;
        color: white;
        text-decoration: none;

        padding: 10px;
        margin: 10px;

        &.active {
            background-color: #085a5a;
        }
        &:hover {
            background-color: #41cece;
            color: #031818;
        }
    }
`;