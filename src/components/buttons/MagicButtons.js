import React from 'react';
import styled from 'styled-components';

// Dummy Components
const MagicButtons = props => {

    return(
        <Magic>
            {props.btnText}
        </Magic>
    )
};
export default MagicButtons ; 

const Magic = styled.button`
margin:5px;
width: 130px;
height: 40px;
color: #fff;
border-radius: 5px;
// padding: 10px 25px;
font-family: 'Lato', sans-serif;
font-weight: 500;
font-size:16px;
background: transparent;
cursor: pointer;
transition: all 0.3s ease;
position: relative;
display: inline-block;
 box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
 7px 7px 20px 0px rgba(0,0,0,.1),
 4px 4px 5px 0px rgba(0,0,0,.1);
outline: none;
  border: 2px solid rgb(96,9,240);
  background: ${(props) => 
    props.variant === 'outline' ? 'rgb(96,9,240)' : 'rgb(93, 137, 186)'};
  background: linear-gradient(0deg, rgba(96,9,240,1) 0%, rgba(129,5,240,1) 100%);
  background: ${(props) =>
    props.variant === 'linear-gradient' ? '(0deg, rgba(96,9,240,1) 0%, rgba(129,5,240,1) 100%)' : '(0deg, rgba(125, 147, 170,1) 0%, rgba(216, 222, 229, 0.5) 100%)'
  }

  
&:before {
  height: 0%;
  width: 2px;
}
&:hover {
  box-shadow:  4px 4px 6px 0 rgba(255,255,255,.5),
              -4px -4px 6px 0 rgba(116, 125, 136, .5), 
    inset -4px -4px 6px 0 rgba(255,255,255,.2),
    inset 4px 4px 6px 0 rgba(0, 0, 0, .4);
}
      

`