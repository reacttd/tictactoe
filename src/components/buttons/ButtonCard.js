import React from "react";
import styled from 'styled-components';

// Dummy Component
const ButtonCard = props => {
    return(
        <CardButton>
            {props.btnText}
        </CardButton>
    );
}
export default ButtonCard;

const CardButton=styled.button`
margin:5px;
  width: 130px;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
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
    background: rgb(255,151,0);
    border: none;
    z-index: 1;
  &:after {
    position: absolute;
    content: "";
    width: 100%;
    height: 0;
    top: 0;
    left: 0;
    z-index: -1;
    border-radius: 5px;
    background-color: #eaf818;
    background-image: linear-gradient(315deg, #eaf818 0%, #f6fc9c 74%);
     box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5);
     7px 7px 20px 0px rgba(0,0,0,.1),
     4px 4px 5px 0px rgba(0,0,0,.1);
    transition: all 0.3s ease;
  }
  &:hover {
    color: #000;
  }
  &:hover:after {
    top: auto;
    bottom: 0;
    height: 100%;
  }
  &:active {
    top: 2px;
  }

  `
// const styles={
//     purpBtn:{
//         display:'flex',
//         flexDirection:'column',
//         justifyContent:'space-evenly',
//         backgroundColor:'black',
//         boxShadow:'0 4px 8px 0 rgba(225, 175, 253, 1.0), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
//         color:'aqua',
//         padding:'10px',
//         marginBottom:'2%',
//         fontSize:'14px'
//     }
// };