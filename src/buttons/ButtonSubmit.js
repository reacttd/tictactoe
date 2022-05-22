import React from 'react';
import styled from 'styled-components';

// Dummy Components
const ButtonSubmit = props => {
    return(
        <SubmitBtn>
            {props.btnText}
        </SubmitBtn>
    )
};
export default ButtonSubmit ;

const SubmitBtn=styled.button`
padding: 1%;
width: 300px;
background-color: black;
color: aqua;`
    