import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import styled from 'styled-components';

/* c3 + tab ---------------------------*/

/* Scripts ---------------------------*/
import { mq } from '../common/media_queries.js';
import useMediaQuery from '../common/useMediaQuery.js';

/* Components ---------------------------*/
import Header from './Header.jsx';
import NavMobile from './Nav/NavMobile.jsx';
import NavLarge from './Nav/NavLarge.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';

const Container = () => {

    const { isSmall } = useMediaQuery();


    return (
        <BrowserRouter>
            <ContainerStyled className='Container'>
                <Header />
                {
                    isSmall
                    ? <NavMobile />
                    : <NavLarge />
                }
                <Main />
                <Footer />
            </ContainerStyled>
        </BrowserRouter>
    );
}

export default Container;

const ContainerStyled = styled.div`
    background-color: pink;
    
    @media ${mq.tablet} {
        background-color: yellow;
    }
    @media ${mq.desktop} {
        background-color: maroon;
    }
    
    @media ${mq.ultrawide} {
        background-color: purple
    }

    `;