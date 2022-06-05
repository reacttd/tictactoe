import styled from 'styled-components';

// Dummy Components
const Flipper = props => {

    return(
        <Flips>
            {props.btnText}
        </Flips>
    )
};
export default Flipper; 

const Flips = styled.button`
{  
//   position:absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   width: 160px;
//   height:50px;
//   line-height:50px;
//   font-size: 20px;
//   text-align:center;
//   text-transform:uppercase;
//   background:#ccc;
// }
// :before
// {
//   position:absolute;
//   top:10;
//   left:0;
//   width:100%;
//   height:100%;
//   text-align:center;
//   background:#ff005e;
//   color:#fff;
//   transition: 0.5s;
//   transform-origin:bottom;
//   transform: translateY(-100%) rotate(90deg);

// }
// @-webkit-keyframes shiny-btn1 {
//   0% { -webkit-transform: scale(0) rotate(45deg); opacity: 0; }
//   80% { -webkit-transform: scale(0) rotate(45deg); opacity: 0.5; }
//   81% { -webkit-transform: scale(4) rotate(45deg); opacity: 1; }
//   100% { -webkit-transform: scale(50) rotate(45deg); opacity: 0; }
// }
`