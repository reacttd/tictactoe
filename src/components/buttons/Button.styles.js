import styled, { keyframes } from 'styled-components';
// import styled from 'styled-components';

export const StyledButton = styled.button`
    border: 2px solid #ffb6c1;
    background-color: ${(props) =>
        props.variant === 'outline' ? '#000' : '#ffb6c1'};
    color: ${(props) => (props.variant === 'outline' ? '#ffb6c1' : '#000')};
    padding: 20px 68px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    transition: 0.5s all ease-out;
`
    // export const StyledButton=styled(button)`
    // border: 2px solid #ffb6c1;
    // background-color: ${(props) => 
    //     props.variant === 'outline' ? '#000' : '#ffb6c1'};
    // color: ${(props) => (props.variant === 'outline' ? '#ffb6c1' : '#000')};
    // margin:5px;
    // width: 130px;
    // height: 40px;
    // border-radius: 5px;
    // text-align: center;
    // text-decoration: none;
    // display: inline-block;
    // font-size: 16px;
    // cursor: pointer;
    // transition: 0.5s all ease-out;
    
    // // export default StyledButton;
    // // &:hover {
    // //     background-color: ${(props) => 
    //         props.variant !== 'outline' ? '#000' : '#ffb6c1'};
    //     color: ${(props) => (props.variant !== 'outline' ? '#ffb6c1' : '#000')};
    // }
    // `

    export const FancyButton = styled(StyledButton)`
    background-image: linear-gradient(to right, #f6d365 0%, #fda085 100%);
    border: none;
    `
    export const SubmitButton = styled(StyledButton).attrs((props) => ({
        type: 'submit',
    }))`
    box-shadow: 0 9px #999;
    &:active {
        background-color: ${(props) =>
        props.variant !== 'outline' ? 'FFF' : '#4caf50'};
        box-shadow: 0 5px #666;
        transform: translateY(4px);
    }
    `
//     export const ButtonThemed = styled(StyledButton)`
//     background-image: linear-gradient(to right, #A6B1F7  0%, #A6DAF7 100%);
//     border: none;
//     &:hover {
//         background-image: ${(props) => 
//             props.variant !== 'outline' ? '#F7A6C4' : '#A6F7C3'};
//         color: ${(props) => (props.variant !== 'outline' ? '#F7A6C4' : '#A6F7C3')};
//         box-shadow: 0 9px #999;
//     &:active {
//         background-color: ${(props) =>
//         props.variant !== 'outline' ? 'FFF' : '#F7A6C4'};
//         box-shadow: 0 5px #A6B1F7;
//         transform: translateY(4px);
//     }
//     // Color the border and text with theme.main
//     // color: ${props => props.theme.main};
//     // border: 2px solid ${props => props.theme.main};
// }
//     `
    
    
 const rotate = keyframes`
from {
     transform: rotate(0deg);
 }
 to {
     transform: rotate(360deg);
 }
`

export const AnimatedLogo = styled.img`
    height: 40 vmin;
    pointer-events: none;
    animation: ${rotate} infinite 2s linear;
`

    export const DarkButton = styled(StyledButton)`
        border: 2px solid ${(props) => props.theme.dark.primary};
        background-color: ${(props) => props.theme.dark.primary};
        color: ${(props) => props.theme.dark.text};
    `
//     export const LightButton = styled(StyledButton)`
//     border: 2px solid ${(props) => props.theme.light.primary};
//     background-color: ${(props) => props.theme.light.primary};
//     color: ${(props) => props.theme.light.text};        
//     `
//     export const ColorButton = styled(StyledButton)`
//     border: 2px solid ${(props) => props.theme.color.primary};
//     background-color: ${(props) => props.theme.color.secondary};
//     color: ${(props) => props.theme.color.text};  
//     ` 
//     export const Button = styled.button`
//         color: ${props => props.theme.fg};
//         border: 2px solid ${props => props.theme.fg};
//         background: ${props => props.theme.bg};

//         font-size: 1em;
//         margin: 1em;
//         padding: 0.25em 1em;
//         border-radius: 3px;
//     `;
    // const theme = {
    //     fg: "palevioletred",
    //     bg: "white"
    // };

    // const invertTheme = ({ fg, bg }) => ({
    //     fg: bg,
    //     bg: fg
    // });
export const ThreeD = styled.button`
position: relative;
display: inline-block;
font-size: 22px;
padding: 20px 60px;
border: 2px solid #7fccde;
background-color: ${(props) => 
    props.variant === 'outline' ? '#fff' : '#7fccde'};
color: ${(props) => (props.variant === 'outline' ? '#7fccde' : '#fff')};

box-shadow: 0 0 0 1px #7fccde inset,
    0 0 0 2px rgba(255,255,255,0.15) inset,
    0 8px 0 0 rgba(102, 164, 178, .6),
    0 8px 0 1px rgba(0,0,0,.4),
    0 8px 8px 1px rgba(0,0,0,0.5);
margin: 20px 10px 10px;
border-radius: 6px;
text-align: center;
transition: top .01s linear;
text-shadow: 0 1px 0 rgba(0,0,0,0.15);
&:hover{
    background-color: #82d1e3;    
    }
&:active {
    box-shadow: 0 0 0 1px #7fccde inset,
    0 0 0 2px rgba(255,255,255,0.15) inset,
    0 0 0 1px rgba(0,0,0,0.4);
	top: 9px;   
`
export const PinkVersion = styled(ThreeD)`
border: 2px solid #d19ecb;
background-color: ${(props) => 
    props.variant === 'outline' ? '#fff' : '#d19ecb'};
color: ${(props) => (props.variant === 'outline' ? '#d19ecb' : '#fff')};
box-shadow: 0 0 0 1px #cb99c5 inset,
				0 0 0 2px rgba(255,255,255,0.15) inset,
				0 8px 0 0 rgba(189, 142, 183, .7),
				0 8px 0 1px rgba(0,0,0,.4),
				0 8px 8px 1px rgba(0,0,0,0.5);
&:hover{
    background-color: #d19ecb
}
}
&:active {
	box-shadow: 0 0 0 1px #cb99c5 inset,
				0 0 0 2px rgba(255,255,255,0.15) inset,
				0 0 0 1px rgba(0,0,0,0.4);
}
`

export const GhostButton = styled(ThreeD)`
border: 2px solid #FF0072#;
background-color: ${(props) => 
    props.variant === 'outline' ? '#fff' : '#FF0072'};
color: ${(props) => (props.variant === 'outline' ? '#FF0072' : '#fff')};
box-shadow: 0 0 0 1px #FF0072 inset,
				0 0 0 2px rgba(255,255,255,0.15) inset,
				0 8px 0 0 rgba(255, 0, 114, .7),
				0 8px 0 1px rgba(0,0,0,.4),
				0 8px 8px 1px rgba(0,0,0,0.5);
&:hover{
    background-color: #FF0072
}
}
&:active {
	box-shadow: 0 0 0 1px #FF0072 inset,
				0 0 0 2px rgba(255,255,255,0.15) inset,
				0 0 0 1px rgba(0,0,0,0.4);
}
`

// $primary:#FF0072;
// $second:#644cad;
// $third:#4426a8;