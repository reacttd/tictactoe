import styled from 'styled-components';

// Dummy Components
const BubbleGumBlue = props => {

    return(
        <Gum>
            {props.btnText}
        </Gum>
    )
};
export default BubbleGumBlue ; 

const Gum = styled.button`
margin:5px;
width: 160px;
height: 70px;
color: #fff;
border-radius: 5px;
padding: 10px 25px;
font-family: 'Lato', sans-serif;
font-weight: bold;
font-size: 26px
background: transparent;
cursor: pointer;
transition: all 0.3s ease;
position: relative;
display: inline-block;
 box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
 7px 7px 20px 0px rgba(0,0,0,.1),
 4px 4px 5px 0px rgba(0,0,0,.1);
outline: none;
    background: linear-gradient(to bottom right, #6c98c9, #6c98c9);
    font-family: dongle;
    font-size: 26px;
    color: white;
    // font-weight: bold;
    // text-shadow: 0 0 8px indigo;
    transition: transform 1s, border-radius 1s;
    border: none;
    // border-radius: 20px;
  &:hover {
    cursor: pointer;
    border: 2px solid indigo;
    box-shadow: 0 0 8px aqua;
    background: linear-gradient(to right,#6c98c9, #6c98c9);
    transform: scale(1.4, 1.4);
    border-radius: 50%;
  }`