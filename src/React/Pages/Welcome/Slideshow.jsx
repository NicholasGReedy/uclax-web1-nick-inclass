import React from 'react';
import styled from 'styled-components';

const Slideshow = () => {

    return (
        <SlideshowStyled className='Slideshow'>
            <img src='/assets/img/Slideshow/slide-1.jpg' alt='Spa Slide 1' />
        </SlideshowStyled>
    );
}

export default Slideshow;

const SlideshowStyled = styled.div`
    
`;