import React from 'react';
import styled from 'styled-components';

const Error = ({theField}) => {


    if (!theField.errors || theField.errors.length < 1) { return '';}
    
    return (
        <ErrorStyled className='Error'>
            Error 
        </ErrorStyled>
    );
}

export default Error;

const ErrorStyled = styled.div`
    color: white;
`;