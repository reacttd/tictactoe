import React from 'react';
import styled from 'styled-components';


// Dummy Components
const Slant=props=>{
    return(
        <Slanted>
            {props.btnText}
        </Slanted>
    )
};
export default Slant;

const Slanted = styled.button`
        padding: '16px',
        width: '130px',
        height: '40px',
        background: 'pink',
        color: 'black'
    `
