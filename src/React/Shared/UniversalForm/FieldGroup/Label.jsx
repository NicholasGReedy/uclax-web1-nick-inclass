import React from 'react';
import styled from 'styled-components';

const Label = ({theField}) => {

    return (
        <LabelStyled className='Label'>
        { theField.label }
        </LabelStyled>
    );
}

export default Label;

const LabelStyled = styled.div`
    
`;