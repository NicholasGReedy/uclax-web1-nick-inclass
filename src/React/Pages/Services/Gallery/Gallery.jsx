import React from 'react';
import styled from 'styled-components';

/* Component ---------------------------*/
import GalleryItem from './GalleryItem.jsx';

const Gallery = ({ services, catChosen }) => {

    console.log('Gallery services', services, catChosen);
    return (
        <GalleryStyled className='Gallery'>
        {
            services.packages
            .filter((item) => {
                return (catChosen === 'All' || item.category === catChosen)
            })
            .map((item, idx) => {
                return <GalleryItem key={ idx } item={ item } />
            })
        }
        </GalleryStyled>
    );
}

export default Gallery;

const GalleryStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;