import styled from 'styled-components';

// Dummy Components
const Gummy = props => {

    return(
        <Gummies>
            {props.btnText}
        </Gummies>
    )
};
export default Gummy ; 

const Gummies = styled.button`
margin:5px;
width: 180px;
height: 60px;
color: #fff;
border-radius: 5px;
padding: 10px 25px;
font-family: 'Lato', sans-serif;
font-weight: bold;
font-size: 22px;
background: transparent;
cursor: pointer;
transition: all 0.3s ease;
position: relative;
display: inline-block;
 box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
 7px 7px 20px 0px rgba(0,0,0,.1),
 4px 4px 5px 0px rgba(0,0,0,.1);
outline: none;
    background: linear-gradient(to bottom right, hotpink, deeppink);
    font-family: fruktur;
    letter-spacing: 1px;
    color: #fff;
    border: none;
    border-radius: 0 50px;
    transition: border-radius 2s;
  &:hover {
    border-radius: 50px 0;
    cursor: pointer;
    border:2px solid black;
    box-shadow: 0 0 8px rgba(0, 150, 150, 0.8);
  }
  }`