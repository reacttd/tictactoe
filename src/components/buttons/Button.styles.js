import styled, { keyframes } from 'styled-components';
// import styled from 'styled-components';

export const StyledButton = styled.button`
    border: 2px solid #ffb6c1;
    background-color: ${(props) =>
        props.variant === 'outline' ? '#000' : '#ffb6c1'};
    color: ${(props) => (props.variant === 'outline' ? '#ffb6c1' : '#000')};
    padding: 20px 68px;
    text-align: center;
    width: 225px;
    height: 70px;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    transition: 0.5s all ease-out;
    &:hover {
        background-color: ${(props) => 
                props.variant !== 'outline' ? '#000' : '#ffb6c1'};
            color: ${(props) => (props.variant !== 'outline' ? '#ffb6c1' : '#000')};
        }
`
    export const StyledButtonChanged=styled(StyledButton)`
    border: 2px solid #7fccde;
    background-color: ${(props) => 
        props.variant === 'outline' ? '#FFF' : '#7fccde'};
    color: ${(props) => (props.variant === 'outline' ? '#7fccde' : '#FFF')};
    margin:5px 20px 5px 20px ;
    width: 180px;
    height: 70px;
    padding: 20px 68px;
    border-radius: 5px;
    text-decoration: none;
    display: inline-flex;
    justify-content: center;
    align-content: center;
    font-size: 22px;
    // text-align: center;
    font-weight: bold;
    cursor: pointer;
    transition: 0.5s all ease-out;
    
    &:hover {
    background-color: ${(props) => 
            props.variant !== 'outline' ? '#FFF' : '#7fccde'};
        color: ${(props) => (props.variant !== 'outline' ? '#7fccde' : '#FFF')};
    }
    `

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
    export const ButtonThemed = styled(StyledButton)`
    marginLeft: 10px;
    background-image: linear-gradient(to right, #A6B1F7  0%, #A6DAF7 100%);
    border: none;
    &:hover {
        background-image: ${(props) => 
            props.variant !== 'outline' ? '#7fccde' : '#A6F7C3'};
        color: ${(props) => (props.variant !== 'outline' ? '#7fccde' : '#A6F7C3')};
        box-shadow: 0 9px #999;
    &:active {
        background-color: ${(props) =>
        props.variant !== 'outline' ? 'FFF' : '#7fccde'};
        box-shadow: 0 5px #A6B1F7;
        transform: translateY(4px);
    }
    // Color the border and text with theme.main
    // color: ${props => props.theme.main};
    // border: 2px solid ${props => props.theme.main};
}
    `
    
    
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

    // Beginning of Mini Buttons
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
    }  
`
export const GreenThreeD = styled(ThreeD)`
border: 2px solid #82c8a0;
background-color: ${(props) => 
    props.variant === 'outline' ? '#fff' : '#82c8a0'};
color: ${(props) => (props.variant === 'outline' ? '#82c8a0' : '#fff')};

box-shadow: 0 0 0 1px #82c8a0 inset,
    0 0 0 2px rgba(255,255,255,0.15) inset,
    0 8px 0 0 rgba(130,200,160, .6),
    0 8px 0 1px rgba(0,0,0,.4),
    0 8px 8px 1px rgba(0,0,0,0.5);
margin: 20px 10px 10px;
border-radius: 6px;
text-align: center;
transition: top .01s linear;
text-shadow: 0 1px 0 rgba(0,0,0,0.15);
&:hover{
    background-color: #82c8a0;    
    }
&:active {
    box-shadow: 0 0 0 1px #82c8a0 inset,
    0 0 0 2px rgba(255,255,255,0.15) inset,
    0 0 0 1px rgba(0,0,0,0.4);
    top: 9px;
}
`
export const RedThreeD = styled(ThreeD)`
border: 2px solid #fa5a5a;
background-color: ${(props) => 
    props.variant === 'outline' ? '#fff' : '#fa5a5a'};
color: ${(props) => (props.variant === 'outline' ? '#fa5a5a' : '#fff')};

box-shadow: 0 0 0 1px #fa5a5a inset,
    0 0 0 2px rgba(255,255,255,0.15) inset,
    0 8px 0 0 rgba(250,90,90, .6),
    0 8px 0 1px rgba(0,0,0,.4),
    0 8px 8px 1px rgba(0,0,0,0.5);
margin: 20px 10px 10px;
border-radius: 6px;
text-align: center;
transition: top .01s linear;
text-shadow: 0 1px 0 rgba(0,0,0,0.15);
&:hover{
    background-color: #fa5a5a;    
    }
&:active {
    box-shadow: 0 0 0 1px #fa5a5a inset,
    0 0 0 2px rgba(255,255,255,0.15) inset,
    0 0 0 1px rgba(0,0,0,0.4);
	top: 9px;
} 
`
export const YellowThreeD = styled(ThreeD)`
border: 2px solid #f0d264;
background-color: ${(props) => 
    props.variant === 'outline' ? '#fff' : '#f0d264'};
color: ${(props) => (props.variant === 'outline' ? '#f0d264' : '#fff')};

box-shadow: 0 0 0 1px #f0d264 inset,
    0 0 0 2px rgba(255,255,255,0.15) inset,
    0 8px 0 0 rgba(240,210,100, .6),
    0 8px 0 1px rgba(0,0,0,.4),
    0 8px 8px 1px rgba(0,0,0,0.5);
margin: 20px 10px 10px;
border-radius: 6px;
text-align: center;
transition: top .01s linear;
text-shadow: 0 1px 0 rgba(0,0,0,0.15);
&:hover{
    background-color: #f0d264;    
    }
&:active {
    box-shadow: 0 0 0 1px #f0d264 inset,
    0 0 0 2px rgba(255,255,255,0.15) inset,
    0 0 0 1px rgba(0,0,0,0.4);
	top: 9px; 
}
`
export const PurpleThreeD = styled(ThreeD)`
border: 2px solid #cb99c5;
background-color: ${(props) => 
    props.variant === 'outline' ? '#fff' : '#cb99c5'};
color: ${(props) => (props.variant === 'outline' ? '#cb99c5' : '#fff')};

box-shadow: 0 0 0 1px #cb99c5 inset,
    0 0 0 2px rgba(255,255,255,0.15) inset,
    0 8px 0 0 rgba(189, 142, 183, .7),
    0 8px 0 1px rgba(0,0,0,.4),
    0 8px 8px 1px rgba(0,0,0,0.5);
margin: 20px 10px 10px;
border-radius: 6px;
text-align: center;
transition: top .01s linear;
text-shadow: 0 1px 0 rgba(0,0,0,0.15);
&:hover{
    background-color: #cb99c5;    
    }
&:active {
    box-shadow: 0 0 0 1px #cb99c5 inset,
    0 0 0 2px rgba(255,255,255,0.15) inset,
    0 0 0 1px rgba(0,0,0,0.4);
	top: 9px; 
}
`
export const BlueThreeD = styled(ThreeD)`
border: 2px solid #6698cb;
background-color: ${(props) => 
    props.variant === 'outline' ? '#fff' : '#6698cb'};
color: ${(props) => (props.variant === 'outline' ? '#6698cb' : '#fff')};

box-shadow: 0 0 0 1px #6698cb inset,
    0 0 0 2px rgba(255,255,255,0.15) inset,
    0 8px 0 0 rgba(102,152,203, .7),
    0 8px 0 1px rgba(0,0,0,.4),
    0 8px 8px 1px rgba(0,0,0,0.5);
margin: 20px 10px 10px;
border-radius: 6px;
text-align: center;
transition: top .01s linear;
text-shadow: 0 1px 0 rgba(0,0,0,0.15);
&:hover{
    background-color: #6698cb;    
    }
&:active {
    box-shadow: 0 0 0 1px #6698cb inset,
    0 0 0 2px rgba(255,255,255,0.15) inset,
    0 0 0 1px rgba(0,0,0,0.4);
	top: 9px; 
}
`
export const MiniThreeD = styled(ThreeD)`
padding: 4px 12px;  
font-size: 12px;
`
export const SmallThreeD = styled(MiniThreeD)`
padding: 8px 18px;  
font-size: 14px;
`
export const NormalThreeD = styled(SmallThreeD)`
padding: 15px 25px;
font-size: 14px;
`
export const LargeThreeD = styled(NormalThreeD)`
padding: 20px 40px; 
font-size: 22px;
`
export const BlockThreeD = styled(ThreeD)`
    display: block;
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  `

export const MiniThreeDGreen = styled(ThreeD)`
padding: 4px 12px;  
font-size: 12px;
border: 2px solid #82c8a0;
background-color: ${(props) => 
    props.variant === 'outline' ? '#fff' : '#82c8a0'};
color: ${(props) => (props.variant === 'outline' ? '#82c8a0' : '#fff')};

box-shadow: 0 0 0 1px #82c8a0 inset,
    0 0 0 2px rgba(255,255,255,0.15) inset,
    0 8px 0 0 rgba(130,200,160, .6),
    0 8px 0 1px rgba(0,0,0,.4),
    0 8px 8px 1px rgba(0,0,0,0.5);
margin: 20px 10px 10px;
border-radius: 6px;
text-align: center;
transition: top .01s linear;
text-shadow: 0 1px 0 rgba(0,0,0,0.15);
&:hover{
    background-color: #82c8a0;    
    }
&:active {
    box-shadow: 0 0 0 1px #82c8a0 inset,
    0 0 0 2px rgba(255,255,255,0.15) inset,
    0 0 0 1px rgba(0,0,0,0.4);
	top: 9px; 
}
`
export const SmallThreeDGreen = styled(MiniThreeDGreen)`
padding: 8px 18px;  
font-size: 14px;
`
export const NormalThreeDGreen = styled(SmallThreeDGreen)`
padding: 15px 25px;
font-size: 14px;
`
export const LargeThreeDGreen = styled(NormalThreeDGreen)`
padding: 20px 40px; 
font-size: 22px;
`
export const BlockThreeDGreen = styled(LargeThreeDGreen)`
    display: block;
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  `

export const MiniThreeDRed = styled(ThreeD)`
padding: 4px 12px;  
font-size: 12px;
border: 2px solid #fa5a5a;
background-color: ${(props) => 
    props.variant === 'outline' ? '#fff' : '#fa5a5a'};
color: ${(props) => (props.variant === 'outline' ? '#fa5a5a' : '#fff')};

box-shadow: 0 0 0 1px #fa5a5a inset,
    0 0 0 2px rgba(255,255,255,0.15) inset,
    0 8px 0 0 rgba(250,90,90, .6),
    0 8px 0 1px rgba(0,0,0,.4),
    0 8px 8px 1px rgba(0,0,0,0.5);
margin: 20px 10px 10px;
border-radius: 6px;
text-align: center;
transition: top .01s linear;
text-shadow: 0 1px 0 rgba(0,0,0,0.15);
&:hover{
    background-color: #fa5a5a;    
    }
&:active {
    box-shadow: 0 0 0 1px #fa5a5a inset,
    0 0 0 2px rgba(255,255,255,0.15) inset,
    0 0 0 1px rgba(0,0,0,0.4);
	top: 9px; 
}
`

export const SmallThreeDRed = styled(MiniThreeDRed)`
padding: 8px 18px;  
font-size: 14px;
`
export const NormalThreeDRed = styled(SmallThreeDRed)`
padding: 15px 25px;
font-size: 14px;
`
export const LargeThreeDRed = styled(NormalThreeDRed)`
padding: 20px 40px; 
font-size: 22px;
`
export const BlockThreeDRed = styled(LargeThreeDRed)`
    display: block;
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  `

export const MiniThreeDYellow = styled(ThreeD)`
padding: 4px 12px;  
font-size: 12px;
border: 2px solid #f0d264;
background-color: ${(props) => 
    props.variant === 'outline' ? '#fff' : '#f0d264'};
color: ${(props) => (props.variant === 'outline' ? '#f0d264' : '#fff')};

box-shadow: 0 0 0 1px #f0d264 inset,
    0 0 0 2px rgba(255,255,255,0.15) inset,
    0 8px 0 0 rgba(240,210,100, .6),
    0 8px 0 1px rgba(0,0,0,.4),
    0 8px 8px 1px rgba(0,0,0,0.5);
margin: 20px 10px 10px;
border-radius: 6px;
text-align: center;
transition: top .01s linear;
text-shadow: 0 1px 0 rgba(0,0,0,0.15);
&:hover{
    background-color: #f0d264;    
    }
&:active {
    box-shadow: 0 0 0 1px #f0d264 inset,
    0 0 0 2px rgba(255,255,255,0.15) inset,
    0 0 0 1px rgba(0,0,0,0.4);
	top: 9px; 
}
`

export const SmallThreeDYellow = styled(MiniThreeDYellow)`
padding: 8px 18px;  
font-size: 14px;
` 
export const NormalThreeDYellow = styled(SmallThreeDYellow)`
padding: 15px 25px;
font-size: 14px;
`
export const LargeThreeDYellow = styled(NormalThreeDYellow)`
padding: 20px 40px; 
font-size: 22px;
`
export const BlockThreeDYellow = styled(NormalThreeDYellow)`
    display: block;
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  `

export const MiniThreeDPurple = styled(ThreeD)`
padding: 4px 12px;  
font-size: 12px;
border: 2px solid #cb99c5;
background-color: ${(props) => 
    props.variant === 'outline' ? '#fff' : '#cb99c5'};
color: ${(props) => (props.variant === 'outline' ? '#cb99c5' : '#fff')};

box-shadow: 0 0 0 1px #cb99c5 inset,
    0 0 0 2px rgba(255,255,255,0.15) inset,
    0 8px 0 0 rgba(189, 142, 183, .7),
    0 8px 0 1px rgba(0,0,0,.4),
    0 8px 8px 1px rgba(0,0,0,0.5);
margin: 20px 10px 10px;
border-radius: 6px;
text-align: center;
transition: top .01s linear;
text-shadow: 0 1px 0 rgba(0,0,0,0.15);
&:hover{
    background-color: #cb99c5;    
    }
&:active {
    box-shadow: 0 0 0 1px #cb99c5 inset,
    0 0 0 2px rgba(255,255,255,0.15) inset,
    0 0 0 1px rgba(0,0,0,0.4);
	top: 9px; 
}
`
export const SmallThreeDPurple = styled(MiniThreeDPurple)`
padding: 8px 18px;  
font-size: 14px;
`
export const NormalThreeDPurple = styled(SmallThreeDPurple)`
padding: 15px 25px;
font-size: 14px;
`
export const LargeThreeDPurple = styled(NormalThreeDPurple)`
padding: 20px 40px; 
font-size: 22px;
`
export const BlockThreeDPurple = styled(LargeThreeDPurple)`
    display: block;
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  `
export const MiniThreeDBlue = styled(ThreeD)`
padding: 4px 12px;  
font-size: 12px;
border: 2px solid #6698cb;
background-color: ${(props) => 
    props.variant === 'outline' ? '#fff' : '#6698cb'};
color: ${(props) => (props.variant === 'outline' ? '#6698cb' : '#fff')};

box-shadow: 0 0 0 1px #6698cb inset,
    0 0 0 2px rgba(255,255,255,0.15) inset,
    0 8px 0 0 rgba(102,152,203, .7),
    0 8px 0 1px rgba(0,0,0,.4),
    0 8px 8px 1px rgba(0,0,0,0.5);
margin: 20px 10px 10px;
border-radius: 6px;
text-align: center;
transition: top .01s linear;
text-shadow: 0 1px 0 rgba(0,0,0,0.15);
&:hover{
    background-color: #6698cb;    
    }
&:active {
    box-shadow: 0 0 0 1px #6698cb inset,
    0 0 0 2px rgba(255,255,255,0.15) inset,
    0 0 0 1px rgba(0,0,0,0.4);
	top: 9px;
    }
`
export const SmallThreeDBlue = styled(MiniThreeDBlue)`
padding: 8px 18px;  
font-size: 14px;
`
export const NormalThreeDBlue = styled(SmallThreeDBlue)`
padding: 15px 25px;
font-size: 14px;
`
export const LargeThreeDBlue = styled(NormalThreeDBlue)`
padding: 20px 40px; 
font-size: 22px;
`
export const BlockThreeDBlue = styled(ThreeD)`
    // display: block;
    // width: 60%;
    // margin-left: auto;
    // margin-right: auto;
    // text-align: center;
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

&:active {
	box-shadow: 0 0 0 1px #cb99c5 inset,
				0 0 0 2px rgba(255,255,255,0.15) inset,
				0 0 0 1px rgba(0,0,0,0.4);
}
`
//  ////////////////////////////////////////////////////////////////
//  Beginning of Small Buttons

export const GhostButton = styled(ThreeD)`
border: 2px solid #FF0072;
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

&:active {
	box-shadow: 0 0 0 1px #FF0072 inset,
				0 0 0 2px rgba(255,255,255,0.15) inset,
				0 0 0 1px rgba(0,0,0,0.4);
}
`

// $primary:#FF0072;
// $second:#644cad;
// $third:#4426a8;

// export const Section = styled.section`
//  height: 100vh;
// //  display: flex;
//  justify-content: center;
//  align-items: center;
//  flex-direction: column;
//  font-size: 5rem;

//  @media screen and (max-width: 45em) {
//   font-size: 3rem;
//  }
// `
// export const Container = styled.div`
//  display: flex;
//  justify-content: center;
//  align-items: center;
//  position: relative;
//  min-height: 10rem;
// `

// export const StyleButtonOne = styled.button`
//   border: 1px solid #3498db;
//   background: none;
//   width: 150px;
//   padding: 10px 20px;
//   font-size: 20px;
//   font-family: "montserrat";
//   cursor: pointer;
//   margin: 10px;
//   transition: 0.8s;
//   position: relative;
//   overflow: hidden;
//   white-space: nowrap;
//   text-overflow: ellipsis;
//   color: #3498db;
//   &:hover {
//     color: #fff;
//   }
//   &::before {
//     content: "";
//     position: absolute;
//     left: 0;
//     width: 100%;
//     height: 0%;
//     background: #3498db;
//     z-index: -1;
//     transition: 0.8s;
//     top: 0;
//     border-radius: 0 0 50% 50%;
//     height: 0%;
//   }
//   &:hover::before {
//     height: 180%;
//   }
// `;

// export const StyleButtonTwo = styled.button`
//   &::before {
//     content: "";
//     position: absolute;
//     left: 0;
//     width: 100%;
//     height: 0%;
//     background: #3498db;
//     z-index: -1;
//     transition: 0.8s;
//     bottom: 0;
//     border-radius: 50% 50% 0 0;
//     height: 0%;
//   }

// `;

// export const StyleButtonThree = styled.button`
//   border: 1px solid #3498db;
//   background: none;
//   padding: 10px 20px;
//   width: 150px;
//   font-size: 20px;
//   font-family: "montserrat";
//   cursor: pointer;
//   margin: 10px;
//   transition: 0.8s;
//   position: relative;
//   overflow: hidden;
//   white-space: nowrap;
//   text-overflow: ellipsis;
//   color: #fff;
//   &:hover {
//     color: #3498db;
//   }
//   &::before {
//     content: "";
//     position: absolute;
//     left: 0;
//     width: 100%;
//     height: 0%;
//     background: #3498db;
//     z-index: -1;
//     transition: 0.8s;
//     top: 0;
//     border-radius: 0 0 50% 50%;
//     height: 180%;
//   }
//   &:hover::before {
//     height: 0%;
//   }
// `;

// export const StyleButtonFour = styled.button`
//   border: 1px solid #3498db;
//   background: none;
//   padding: 10px 20px;
//   width: 150px;
//   font-size: 20px;
//   font-family: "montserrat";
//   cursor: pointer;
//   margin: 10px;
//   transition: 0.8s;
//   position: relative;
//   overflow: hidden;
//   white-space: nowrap;
//   text-overflow: ellipsis;
//   color: #fff;
//   &:hover {
//     color: #3498db;
//   }
//   &::before {
//     content: "";
//     position: absolute;
//     left: 0;
//     width: 100%;
//     height: 0%;
//     background: #3498db;
//     z-index: -1;
//     transition: 0.8s;
//     bottom: 0;
//     border-radius: 50% 50% 0 0;
//     height: 180%;
//   }
//   &:hover::before {
//     height: 0%;
//   }
// `;

// export const StyleButtonFive = styled.button`
//   border: 1px solid #3498db;
//   background: none;
//   padding: 10px 20px;
//   width: 150px;
//   font-size: 20px;
//   font-family: "montserrat";
//   cursor: pointer;
//   margin: 10px;
//   transition: 0.8s;
//   position: relative;
//   overflow: hidden;
//   white-space: nowrap;
//   text-overflow: ellipsis;
//   color: #3498db;
//   &::before {
//     content: "";
//     position: absolute;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     height: 2px;
//     background: #3498db;
//     transition: 0.8s;  
//     transform: scaleX(0);
//   }
//   &:hover::before {
//     transform: scaleX(1);
//   }
// `;

// /*
// * Credit for insparation: Youtube channel "DarkCode"
// */
// export const StyleButtonNine = styled.button`
//   border: 1px solid #3498db;
//   background: none;
//   padding: 10px 20px;
//   width: 150px;
//   font-size: 20px;
//   font-family: "montserrat";
//   cursor: pointer;
//   margin: 10px;
//   transition: 0.8s;
//   position: relative;
//   overflow: hidden;
//   white-space: nowrap;
//   text-overflow: ellipsis;
//   color: #3498db;
//   &::before {
//     content: "";
//     position: absolute;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     height: 100%;
//     z-index: -1;
//     background: #3498db;
//     transition: 0.8s;  
//     transform: scaleX(0);
//   }
//   &:hover {
//     color: #fff;
//   }
//   &:hover::before {
//     transform: scaleX(1);
//   }
// `;

// /*
// * Credit for insparation: Youtube channel "DarkCode"
// */
// export const StyleButtonTen = styled.button`
//   border: 1px solid #3498db;
//   background: none;
//   padding: 10px 20px;
//   width: 150px;
//   font-size: 20px;
//   font-family: "montserrat";
//   cursor: pointer;
//   margin: 10px;
//   transition: 0.8s;
//   position: relative;
//   overflow: hidden;
//   white-space: nowrap;
//   text-overflow: ellipsis;
//   color: #3498db;
//   &::before {
//     content: "";
//     position: absolute;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     height: 100%;
//     z-index: -1;
//     background: #3498db;
//     transition: 0.8s;  
//     transform: scaleY(0);
//   }
//   &:hover {
//     color: #fff;
//   }
//   &:hover::before {
//     transform: scaleY(1);
//   }
// `;

// /*
// * Credit for insparation: Youtube channel "DarkCode"
// */
// export const StyleButtonEleven = styled.button`
//   border: 1px solid #3498db;
//   background: none;
//   padding: 10px 20px;
//   width: 150px;
//   font-size: 20px;
//   font-family: "montserrat";
//   cursor: pointer;
//   margin: 10px;
//   transition: 0.8s;
//   position: relative;
//   overflow: hidden;
//   white-space: nowrap;
//   text-overflow: ellipsis;
//   color: #3498db;
//   &::before {
//     content: "";
//     position: absolute;
//     left: 50%;
//     top: 50%;
//     z-index: -1;
//     background: #3498db;
//     transition: 0.8s;  
//     width: 100%;
//     height: 0;
//     transform: translate(-50%, -50%) rotate(45deg);
//   }
//   &:hover {
//     color: #fff;
//   }
//   &:hover::before {
//     height: 300%;
//   }
// `;

// /*
// * Credit for insparation: Youtube channel "DarkCode"
// */
// export const StyleButtonTwelve = styled.button`
//   border: 1px solid #3498db;
//   background: none;
//   padding: 10px 20px;
//   font-size: 20px;
//   width: 150px;
//   font-family: "montserrat";
//   cursor: pointer;
//   margin: 10px;
//   transition: 0.8s;
//   position: relative;
//   overflow: hidden;
//   white-space: nowrap;
//   text-overflow: ellipsis;
//   color: #3498db;
//   &::before {
//     content: "";
//     position: absolute;
//     left: 50%;
//     top: 50%;
//     z-index: -1;
//     background: #3498db;
//     transition: 0.8s;  
//     width: 100%;
//     height: 0;
//     transform: translate(-50%, -50%) rotate(-45deg);
//   }
//   &:hover {
//     color: #fff;
//   }
//   &:hover::before {
//     height: 300%;
//   }
// `;

// /*
// * Credit for insparation: Youtube channel "Online Tutorials"
// */
// export const StyleButtonThirteen = styled.button`
//   border: 1px solid #3498db;
//   background: none;
//   padding: 10px 20px;
//   font-size: 20px;
//   width: 150px;
//   font-family: "montserrat";
//   cursor: pointer;
//   margin: 10px;
//   transition: 0.8s;
//   position: relative;
//   overflow: hidden;
//   white-space: nowrap;
//   text-overflow: ellipsis;
//   color: #3498db;
//   &::before {
//     content: "";
//     position: absolute;
//     z-index: -1;
//     left: 0;
//     right: 0;
//     top: 0;
//     bottom: 0;
//     background: #3498db;
//     transition: 0.8s;  
//     transform: translateX(-100%);
//   }
//   &:hover {
//     color: #fff;
//   }
//   &:hover::before {
//     transform: translateX(0);
//   }
// `;

// export const StyleButtonFourteen = styled.button`
//   border: none;
//   background: none;
//   padding: 10px 20px;
//   font-size: 20px;
//   width: 150px;
//   font-family: "montserrat";
//   cursor: pointer;
//   margin: 10px;
//   transition: 0.8s;
//   position: relative;
//   overflow: hidden;
//   white-space: nowrap;
//   text-overflow: ellipsis;
//   color: #3498db;
//   &::before {
//     content: "";
//     position: absolute;
//     z-index: -1;
//     height: 0;
//     left: 0;
//     right: 0;
//     top: -2px;
//     bottom: 0;
//     border: 1px solid black;
//     background: transparent;
//     transition: 0.8s;  
//   }
//   &:hover::before {
//     height: 100%;
//   }
// `;

/**
 * The App component
 *
 * @function App
 * @returns {JSX}
 */
