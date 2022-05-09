
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
    margin-top:50px;
    font-size:1.5rem;
    color:pink;
    &:hover {
        color: purple;// <Thing> when hovered
    }
    & ~ & {
        background: pink; //<Thing> as a sibling of <Thing>, but maybe not directly next to it
    }
    & + & {
        background: white; // <Thing> next to <Thing>
    }
    &.something{
        background:orange; //<Thing> tagged with additional CSS class ".something"
    }
    
    .something-else & {
        border: 1px solid;// <Thing> inside another element labeled ".something else"

    }`