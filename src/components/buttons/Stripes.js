import styled from 'styled-components';

// Dummy Components
const Stripes = props => {

    return(
        <Str>
            {props.btnText}
        </Str>
    )
};
export default Stripes ; 

const Str = styled.button`
margin:5px;
width: 130px;
height: 40px;
// color: #fff;
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

&{
  font : inherit;
  text-transform: capitalize;
  font-size: 16px;
  padding: 8px 16px 16px 16px;
  margin: 10px;
  background-color: #FFDEE9;
  color: black;
  border: 2px solid #B5FFFC;
  transition: color .3s ease, transform .3s ease;
  position: relative;
  z-index: 3;
  @keyframes stripe-slide {
    0% { background-position: 0% 0; }
    100% { background-position: 100% 0; }
  }
      
  &:after {
    content: '';
    height: 7px;
    width: 100%;
    background-image: repeating-linear-gradient(
        45deg,
        #FFDEE9,
        black 1px,
        transparent 2px,
        transparent 5px
    );
    border-top: 1px solid #B5FFFC;
    position: absolute;
    left: 0;
    bottom: 0;
    background-size: 7px 7px;
  }
  &:hover{
    background-color: #B5FFFC;
    color: black;
    border-color: #FFDEE9;
    &:after {
      background-image: repeating-linear-gradient(
        45deg,
        #FFDEE9,
        #000 1px,
        transparent 2px,
        transparent 5px
      );
      border-top: 1px solid #FFDEE9;
      animation: stripe-slide 5s infinite linear forwards;
    }
  }
  &:focus {
    outline: none;
  }
  &:active {
    &:after{
      position: absolute;
      background-color:#FFDEE9;
      left: -3%;
      width: 106%;
      background-image: none;
      border-top: 2px solid #FFDEE9;
      z-index: 1;
    }
    &:before{
      content: '';
      width: 100%;
      height: 80%;
      position: absolute;
      bottom: 20%;
      left: 0;
      outline: 8px solid #FFDEE9;
      border-radius: 5px;
      outline-offset: 2px;
      z-index: 2;
    }
    transform: translateY(9px);
    transition: all 0.01s;
    overflow: visible;
    border-bottom: none;
  }
}

`