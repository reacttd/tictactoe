
import styled from 'styled-components';

// Dummy Components
const ButtonSmallRed=props=>{
    return(
        <Small>
            {props.btnText}
        </Small>
    )
};
export default ButtonSmallRed;

const Small=styled.button`
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
  background: #870000;
  background-image: linear-gradient(to right, #870000, #190a05);
  border: none;
&:hover {
   background: pink;
   background-image: linear-gradient(to right, #190a05, #870000);
}
  `
    // margin-top:50px;
    // font-size:1.5rem;
    // color:pink;
    // &:hover {
    //     color: purple;// <Thing> when hovered
    // }
    // & ~ & {
    //     background: pink; //<Thing> as a sibling of <Thing>, but maybe not directly next to it
    // }
    // & + & {
    //     background: white; // <Thing> next to <Thing>
    // }
    // &.something{
    //     background:orange; //<Thing> tagged with additional CSS class ".something"
    // }
    
    // .something-else & {
    //     border: 1px solid;// <Thing> inside another element labeled ".something else"

    // }`