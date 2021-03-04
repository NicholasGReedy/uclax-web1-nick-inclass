import React from 'react';
import styled from 'styled-components';

const Button = () => {

    return (
        <ButtonStyled className='Button'>
            Button 
        </ButtonStyled>
    );
}

export default Button;

const ButtonStyled = styled.button`
    background-color: #fff;
    padding: 10px 20px;
    font-size: 18px;

    border: solid 3px black;
    border-radius: 5px;
    
`;