import styled from 'styled-components';

// Dummy Components
const CottonCandy = props => {

    return(
        <Cotton>
            {props.btnText}
        </Cotton>
    )
};
export default CottonCandy ; 

const Cotton = styled.button`
margin:5px;
width: 130px;
height: 40px;
color: #fff;
border-radius: 5px;
padding: 10px 25px;
font-family: 'Lato', sans-serif;
font-weight: 500;
text-align:center;
background: transparent;
cursor: pointer;
transition: all 0.3s ease;
position: absolute;
display: inline-block;
 box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
 7px 7px 20px 0px rgba(0,0,0,.1),
 4px 4px 5px 0px rgba(0,0,0,.1);
outline: none;
  &{
    // margin-left: 30%;
    font-family: pacifico;
    background: linear-gradient(to right, dodgerblue, hotpink);
    border: none;
    border-radius: 10px;
    color: ghostwhite;
    letter-spacing: 2px;
  }
  &:hover {
    filter: blur(2px);
    border: 2px solid dodgerblue;
    cursor: pointer;
    box-shadow: 0 0 11px hotpink;
    background: linear-gradient(to right, hotpink, dodgerblue);
  }
  
`