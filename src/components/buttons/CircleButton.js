import styled from 'styled-components';

const CircleButton = props => {
    return (
        <Circle>
            {props.btnText}
        </Circle>
    )
}
export default CircleButton;

const Circle = styled.button`
{
    text-align:center;
    background:#ffb6c1;
    height:90px;
    width:90px;
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
    background:#4CAFff;
     box-shadow:1px 5px 1px #005 ;
  }
  &:active{
    transform:translatey(4px);
    box-shadow:0px 0px 0px #005 ; 
  }
`