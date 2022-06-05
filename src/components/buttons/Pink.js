import React from "react";
import styled from 'styled-components';

// Dummy Component
const Pink = props => {
    return(
        <Pinky>
            {props.btnText}
        </Pinky>
    );
}
export default Pink;

const Pinky=styled.button`
margin:5px;
  width: 130px;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  fontSize:16px;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
   box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
   7px 7px 20px 0px rgba(0,0,0,.1),
   4px 4px 5px 0px rgba(0,0,0,.1);
  outline: none;
  &{
    background: linear-gradient(0deg, rgba(255,105,180) 0%, rgba(225, 175, 253, 1.0) 100%);
      line-height: 42px;
      fontSize:16px;
      padding: 0;
      border: none;
    }
    &span {
      position: relative;
      display: block;
      width: 100%;
      height: 100%;
    }
    &:before,
    &:after {
      position: absolute;
      content: "";
      right: 0;
      bottom: 0;
      background: rgba(255,105,180);
      box-shadow:
       -7px -7px 20px 0px rgba(255,255,255,.9),
       -4px -4px 5px 0px rgba(255,255,255,.9),
       7px 7px 20px 0px rgba(0,0,0,.2),
       4px 4px 5px 0px rgba(0,0,0,.3);
      transition: all 0.3s ease;
    }
    &:before{
       height: 0%;
       width: 2px;
    }
    &:after {
      width: 0%;
      height: 2px;
    }
    &:hover{
      color: rgba(255,105,180);
      background: transparent;
    }
    &:hover:before {
      height: 100%;
    }
    &:hover:after {
      width: 100%;
    }
    & span:before,
    & span:after {
      position: absolute;
      content: "";
      left: 0;
      top: 0;
      background: rgba(255,105,180);
      box-shadow:
       -7px -7px 20px 0px rgba(255,255,255,.9),
       -4px -4px 5px 0px rgba(255,255,255,.9),
       7px 7px 20px 0px rgba(0,0,0,.2),
       4px 4px 5px 0px rgba(0,0,0,.3);
      transition: all 0.3s ease;
    }
    & span:before {
      width: 2px;
      height: 0%;
    }
    & span:after {
      height: 2px;
      width: 0%;
    }
    & span:hover:before {
      height: 100%;
    }
    & span:hover:after {
      width: 100%;
    }

  `