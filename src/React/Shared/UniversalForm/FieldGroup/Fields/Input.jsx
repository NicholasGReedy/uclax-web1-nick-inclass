import React from 'react';
import styled from 'styled-components';

const Input = ({theField,onChange}) => {


    const theClassName = (!theField.errors || theField.errors.length < 1)
            ? 'Input'
            : 'Input error'

    return (
        <InputStyled 
        className={ theClassName }

        id={ theField.id }
        value={ theField.value }

        onChange={ onChange }
        />
    );
}

export default Input;

const InputStyled = styled.input`
    display: block;
    width: 100%;
    font-size: 16px;
    padding: 5px 10px;
    border: solid 3px #c4c4c4;
    border-radius: 5px;
    outline: none;

    border: solid 3px #c4c4c4;

    &:focus {
        border: solid 3px #969696;
    }
    &.error {
        border: solid 3px red;
    }

`;