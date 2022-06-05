
import styled from 'styled-components';

// Dummy Components
const ButtonHoverAqua=props=>{
    return(
        <Hover>
            {props.btnText}
        </Hover>
    )
};
export default ButtonHoverAqua;

const Hover = styled.button`
margin:5px;
  width: 130px;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
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
    // width: 50px;
    // height: 20px;
    // line-height: 42px;
    padding: 0;
    border: none;
    background: #ffc0cb;
    background: linear-gradient(0deg, rgba(0,255,255, 1) 0%, rgba(0, 0, 0, 0.19) 100%);
  
  &:hover {
    color: aqua;
    background: transparent;
     box-shadow:none;
  }
  &:before,
  &&:after{
    content:'';
    position:absolute;
    top:0;
    right:0;
    height:2px;
    width:0;
    background: #ffdbe9;
    box-shadow:
     -1px -1px 5px 0px #fff,
     7px 7px 20px 0px #0003,
     4px 4px 5px 0px #0002;
    transition:400ms ease all;
  }
  &:after{
    right:inherit;
    top:inherit;
    left:0;
    bottom:0;
  }
  &:hover:before,
  &:hover:after{
    width:100%;
    transition:800ms ease all;
  }`