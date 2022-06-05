import styled from 'styled-components';

// Dummy Components
const PinkBlackStripes = props => {

    return(
        <Blue>
            {props.btnText}
        </Blue>
    )
};
export default PinkBlackStripes; 

const Blue = styled.button`
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
    background: 
    repeating-linear-gradient(-45deg, pink, pink 5px, black 5px, black 10px);
      blue; /* background color */
    color: ;
    border: none;
    transform: perspective(500px) rotateY(calc(20deg*var(--_i,-1)));
    text-shadow: 
      calc(var(--_i,-1)* 0.08em) -.01em 0   var(--c),
      calc(var(--_i,-1)*-0.08em)  .01em 2px #0004;
    outline-offset: .1em;
    transition: 0.3s;
  &:hover,
  &:focus-visible {
    --_p: 0%;
    --_i: 1;
  }
  &:active {
    text-shadow: none;
    color: var(--c);
    box-shadow: inset 0 0 9e9q #0005;
    transition: 0s;
  }
  
//   body {
//     margin: 0;
//     min-height: 100vh;
//     display: grid;
//     place-content: center;
//     background: #ccc;
//   }
//   button {
//     font-family: system-ui, sans-serif;
//     font-weight:bold;
//     font-size: 4rem;
//     margin: 0;
//     cursor: pointer;
//     p
`