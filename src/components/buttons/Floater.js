import styled from 'styled-components';

// Dummy Components
const Floater = props => {

    return(
        <Float>
            {props.btnText}
        </Float>
    )
};
export default Floater; 

const Float = styled.button`
margin:5px;
width: 130px;
height: 40px;
color: pink;
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
  border-radius: 20px 20px 0 0;
  border: none;
  background: black;
  // font-family: 'Mochiy Pop One';
}
&:hover {
  border-top: white solid 2px;
  border-bottom: white solid 2px;
  background: pink;
  color: white;
  cursor: pointer;
}
  
`