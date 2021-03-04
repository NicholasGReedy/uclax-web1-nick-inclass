import React from 'react';
import styled from 'styled-components';


const Textarea = ({theField,onChange}) => {
    const theClassName = (!theField.errors || theField.errors.length < 1)
            ? 'Textarea'
            : 'Textarea error'

    return (
        <TextareaStyled className={ theClassName }

        id={ theField.id }
        value={ theField.value }
        
        onChange={ onChange }
        />
    );
}

export default Textarea;

const TextareaStyled = styled.textarea`
    
    background-color: #fff;
    padding: 10px 20px;
    font-size: 18px;

    border: solid 3px black;
    border-radius: 5px;

    height: 200px;

    border: solid 3px #c4c4c4;

&:focus {
    border: solid 3px #969696;
}
&.error {
    border: solid 3px red;
}
`;