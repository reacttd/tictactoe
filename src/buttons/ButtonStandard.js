import React from "react";
import styled from 'styled-components';

// Dummy Components
const ButtonStandard=props=>{
    return(
        <Standard>
            {props.btnText}
        </Standard>
    )
};
export default ButtonStandard;

const Standard=styled.button`
    margin-top:20px;
    padding:8px;
    border-radius:3px;
    font-size:2rem;
    color:pink;
    &:hover {
        color: purple;// <Thing> when hovered
    }`