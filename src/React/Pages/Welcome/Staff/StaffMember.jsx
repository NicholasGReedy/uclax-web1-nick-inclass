import React, { useState } from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { mq } from '../../../../common/media_queries.js';

/* Components ---------------------------*/
import Lightbox from '../../../Shared/Lightbox/Lightbox.jsx';

const StaffMember = ({member}) => {


    const [showLightbox, showLightboxUpdate] = useState(false);

    const handleOnHide = () => {
        console.log('Closing Lightbox');
        showLightboxUpdate(false);
    }

    const handleOnShow = () => {
        showLightboxUpdate(true);
    }

    return (
        <StaffMemberStyled className='StaffMember'>
            <div className='piece' onClick={ handleOnShow }>
            <img src={ member.image } alt={ member.name } />
            <h3>{ member.name }</h3>
            </div>
            
            <Lightbox
                show={ showLightbox }
                onHide={ handleOnHide }
                width='200px' 
                >
                <img src={ member.image } alt={ member.name }/>
                <h2>{ member.name }</h2> 
            </Lightbox>
        </StaffMemberStyled>
    );
}

export default StaffMember;

const StaffMemberStyled = styled.div`
    

flex: 1;
width: 100px; margin: 10px;

@media ${mq.tablet} {
    width: 150px; margin: 15px;
}

@media ${mq.desktop} {
    width: 200px; margin: 20px;
}

img {
    max-width: 100%;
    display: block;
}

h3 {
    margin: 0px;
    color: white;
    background-color: maroon;
    font-size: 16px;
    padding: 5px;
}
.Lightbox {
        img{
            display: block;
            max-width: 100%;
        }

        h2{
            background-color: maroon;
            color: white;
            padding: 10px;
            margin: 0px;
        }
}
`;