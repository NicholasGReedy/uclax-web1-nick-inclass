import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import Light from './Light.jsx';

const Lightbox = () => {

    return (
        <LightboxStyled className='Lightbox'>
            <Light /> 
        </LightboxStyled>
    );
}

export default Lightbox;

const LightboxStyled = styled.div`
    
`;