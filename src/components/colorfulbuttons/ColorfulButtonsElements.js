import styled from 'styled-components';

export const ColorfulButtonsContainer = styled.div`
    position: 'relative',
    display: 'inline-flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    background: 'white',
    borderRadius: '4px',
    textAlign: 'center',
    marginBottom: '40px',
    gap: '30px',
    margin: '0 auto';

    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`

export const ColorfulButtonsWrapper = styled.div`
max-width: 1000px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
align-items: center;
grid-gap: 16px;
padding: 0 50px;

@media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
}

@media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
}

`

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

