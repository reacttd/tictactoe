import styled from 'styled-components';

const DiagSlant = props => {
    return (
        <Slant>
            {props.btnText}
        </Slant>
    );
}
export default DiagSlant;
const Slant = styled.button`
*,
::before,
::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

{
  width: 100%;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)),
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  /* create 3d environment  */
  perspective: 1000px;
}

&{
  width: 350px;
  height: 100px;
  background: linear-gradient( #44A7C4, #006994 );
  border: 4px solid #006994 ;
  outline: none;
  border-radius: 6px;
  font-family: "Slabo 27px", serif;
  font-size: 35px;
  text-transform: uppercase;
  letter-spacing: 4px;
  color: #fff;
  text-shadow: 0 10px 10px #000;
  cursor: pointer;
  transform: rotateX(70deg) rotateZ(30deg);
  transform-style: preserve-3d;
  transition: transform 0.5s ease-in-out;
}

&::before {
  content: "";
  width: 100%;
  height: 15px;
  background-color:  background: linear-gradient(#, #006994 );
  ;
  position: absolute;
  bottom: 0;
  right: 0;
  transform: rotateX(90deg);
  transform-origin: bottom;
}

&::after {
  content: "";
  width: 15px;
  height: 100%;
  background-color:   background: linear-gradient(#, #006994 );
  ;
  position: absolute;
  top: 0;
  right: 0;
  transform: rotateY(-90deg);
  transform-origin: right;
}

&:hover {
  transform: rotateX(30deg) rotateZ(0deg);
}

`