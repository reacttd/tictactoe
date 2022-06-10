import styled from 'styled-components';



const CircleButtonBlueLg = props => {
    return (
        <Circle>
            {props.btnText}
        </Circle>
    )
}
export default CircleButtonBlueLg;

const Circle = styled.button`
{
    text-align:center;
    background:#6c98c9;
    height:100px;
    width:100px;
    color:white;
    padding:20px;
    font-family:fantasy;
    font-size:16px;
    display:inline-block;
    text-decoration:none;
    // margin:100px 50%;
    box-shadow:1px 5px 1px whitesmoke;
    border-radius:50%;
    border: none;
  }
  &:hover{
    background:#6c98c9;
     box-shadow:1px 5px 1px #6c98c9 ;
  }
  &:active{
    transform:translatey(4px);
    box-shadow:0px 0px 0px #6c98c9 ; 
  }
`