import React, { useState } from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { isValidEmail } from '../../../common/utilities.js';

/* Components ---------------------------*/
import Button from './Button.jsx';
import FieldGroup from './FieldGroup/FieldGroup.jsx';

const UniversalForm = ({fields}) => {


    const [theFields, theFieldsUpdate] = useState(fields);

    const handleFieldUpdate = (theUpdatedField) => {

        /* Validation ---------------------------*/
        const validation = theUpdatedField.validation;
        let errors = [];

        validation.forEach((val) => {
            switch (val) {
            case 'req':
                if (theUpdatedField.value.length < 1) {
                errors.push('The ${theUpdateField.label} is required');
        }
        case 'email':
            if (!isValidEmail(theUpdatedField.value)) {
                errors.push('The ${theUpdatedField.label} is required.');
            }
            break;
            default:
                return true;
        }
    });

        let validatedField = {
            ...theUpdatedField,
            errors: errors,
        }

        console.log('validatedField',validatedField);

        const newFields = theFields.map((field) => {
            return (field.id === validatedField.id) ? validatedField : field;
        });

        theFieldsUpdate(newFields);
    }

    return (
        <UniversalFormStyled className='UniversalForm'>
        <FieldGroup id='email' theFields={ theFields } handleFieldUpdate={ handleFieldUpdate } />
        <FieldGroup id='message' theFields={ theFields } handleFieldUpdate={ handleFieldUpdate } />
        <Button>Send Email</Button>
        </UniversalFormStyled>
    );
}

export default UniversalForm;

const UniversalFormStyled = styled.form`

max-width: 500px;
margin: 50px auto;
padding: 10px;
    
`;