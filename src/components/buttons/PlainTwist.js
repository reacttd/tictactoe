import styled from 'styled-components';

// Dummy Components
const PlainTwist = props => {

    return(
        <Plain>
            {props.btnText}
        </Plain>
    )
};
export default PlainTwist; 

const Plain = styled.button`
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
// margin-right: 2px;
    background: 
    repeating-linear-gradient(-45deg, #98AFC7 , #98AFC7 5px, #AFDCEC 5px, #AFDCEC 10px);
      #AFDCEC; /* background color */
    color: #fff;
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