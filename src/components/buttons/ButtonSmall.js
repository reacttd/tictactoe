
import styled from 'styled-components';

// Dummy Components
const ButtonSmall=props=>{
    return(
        <Small>
            {props.btnText}
        </Small>
    )
};
export default ButtonSmall;

const Small=styled.button`
// margin:5px;
  width: 140px;
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
  background: rgb(6,14,131);
  background: linear-gradient(0deg, rgba(6,14,131,1) 0%, rgba(12,25,180,1) 100%);
  border: none;
&:hover {
   background: rgb(0,3,255);
background: linear-gradient(0deg, rgba(0,3,255,1) 0%, rgba(2,126,251,1) 100%);
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