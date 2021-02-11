import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faBars,
} from '@fortawesome/free-solid-svg-icons';

/* Components ---------------------------*/
import Nav from './Nav.jsx';

const NavMobile = () => {

    const [showMobileMenu, showMobileMenuUpdate] = useState(false);


    const handleHamburgerToggle =() => {
        showMobileMenuUpdate(!showMobileMenu);
        console.log('showMobileMenu', showMobileMenu);
    }

    return (
        <NavMobileStyled className='NavMobile'>
            <div className="hamburger"
            onClick={ handleHamburgerToggle }
            >
            <FontAwesomeIcon icon={ faBars } />
            </div>
            {
                showMobileMenu &&
            <div className="nav-wrapper">
            <Nav />
            </div>
            }
        </NavMobileStyled>
    );
}

export default NavMobile;

const NavMobileStyled = styled.div`
    .hamburger {
        position: fixed;
        right: 0px;
        top: 0px;
        z-index: 1001;

        width: 50px;
        height: 50px;

        background-color: teal;
    
        text-align: center;
        padding-top: 9px;

        cursor: pointer;

        svg {
            font-size: 30px;
            color: white;
        }

    }
    .nav-wrapper {
        background-color: white;

        position: fixed;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;

        z-index: 1000;
    }

    .Nav {
        margin-top: 70px;
    }

    a{
        display: block;
        background: teal;
        color: white;
        text-decoration: none;
        padding: 10px;
        margin-bottom: 5px;

        &.active {
            background-color: #085a5a;
        }
        &:hover {
            background-color: #41cece;
            color: #031818;
        }
    }

`;