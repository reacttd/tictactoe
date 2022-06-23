import React from "react";
import styled from 'styled-components';

// Dummy Components
const ButtonStandardPinkPurple=props=>{
    return(
        <Standard className="Standard">
            {props.btnText}
        </Standard>
    )
};
export default ButtonStandardPinkPurple;

const Standard=styled.button`
// margin:5px;
width: 180px;
height: 70px;
color: #fff;
border-radius: 5px;
// padding: 10px 25px;
font-family: 'Lato', sans-serif;
font-weight: 500;
background: transparent;
cursor: pointer;
transition: all 0.3s ease;
position: relative;
display: inline-block;
 box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
 7px 7px 20px 0px rgba(0,0,0,.1),
 4px 4px 5px 0px rgba(0,0,0,.1);
outline: none;
    border: none;
    background: #6a82fb;
    background-image: linear-gradient(to right, #fc5c7d, #6a82fb);
      color: #fff;
      overflow: hidden;
  }
  :hover {
      text-decoration: none;
      color: #fff;
  }
  :before {
      position: absolute;
      content: '';
      display: inline-block;
      top: -180px;
      left: 0;
      width: 30px;
      height: 100%;
      background-color: #fff;
      animation: shiny-btn1 3s ease-in-out infinite;
  }
&:hover{
    opacity: .7;
  }
  &:active{
    box-shadow:  4px 4px 6px 0 rgba(255,255,255,.3),
                -4px -4px 6px 0 rgba(116, 125, 136, .2), 
      inset -4px -4px 6px 0 rgba(255,255,255,.2),
      inset 4px 4px 6px 0 rgba(0, 0, 0, .2);
  }
  
  
  @-webkit-keyframes shiny-btn1 {
      0% { -webkit-transform: scale(0) rotate(45deg); opacity: 0; }
      80% { -webkit-transform: scale(0) rotate(45deg); opacity: 0.5; }
      81% { -webkit-transform: scale(4) rotate(45deg); opacity: 1; }
      100% { -webkit-transform: scale(50) rotate(45deg); opacity: 0; }
  }
    }`