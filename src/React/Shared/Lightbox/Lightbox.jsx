import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import Light from './Light.jsx';

const Lightbox = ({ show, onHide, children, width='340px' }) => {

    if (!show) {return ''; }

    return (
        <LightboxStyled className='Lightbox' onClick= { onHide }>
            <Light onHide={ onHide } width={ width }>
            { children }
            </Light>
        </LightboxStyled>
    );
}

export default Lightbox;

const LightboxStyled = styled.div`
    background-color: rgba(0,0,0,.75);

    position: fixed;
    left: 0px;
    top: 0px;
    bottom: 0px;
    right: 0px;

    z-index: 1000;
    
`;