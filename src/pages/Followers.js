// import IconImg from '../images/LOGO.png';
// import React, { useState, useEffect } from 'react';
import { ThemeProvider } from "styled-components";
// import Webfont from 'webfontloader';
// import styled from 'styled-components';
// import { GlobalStyle } from '../theme/GlobalStyles';
// import { useTheme } from '../theme/useTheme';
// import PostArticle from "../components/PostArticle";

// import StyledButton, { FancyButton, SubmitButton, ButtonThemed } from '../components/buttons/VishwasButton';
// import Button from '../components/buttons/Button';
// import MyForm from "./MyForm";
// import { AnimatedLogo } from "../components/buttons/Button.styles";
// import Rotate from '../components/buttons/Rotate';
// import MovingButton from "../components/buttons/MovingButton";
import ButtonSmall from "../components/buttons/ButtonSmall";
import PinkBlueStripes from "../components/buttons/PinkBlueStripes";
import Blue3d from "../components/buttons/Blue3d";
// import DiagStripes from "../components/buttons/DiagStripes";
// import BubbleGum from "../components/buttons/BubbleGum";
import ButtonHover from "../components/buttons/ButtonHover";
// import ButtonTurqoise from "../components/buttons/ButtonTurqoise";
import MagicButtons from "../components/buttons/MagicButtons";
// import MagicCard from "../components/MagicCard";
// import { DarkButton, LightButton, ColorButton } from "../components/buttons/Button.styles";
import Pink from "../components/buttons/Pink";
// import Stripes from "../components/buttons/Stripes";
import GreenTurquoise from "../components/buttons/GreenTurquoise";
// import CottonCandy from "../components/buttons/CottonCandy";
import ButtonStandard from "../components/buttons/ButtonStandard";
// import IndigoPlum from "../components/buttons/IndigoPlum";
// import Desert from "../components/buttons/Desert";
import ButtonHoverBlue from "../components/buttons/ButtonHoverBlue";
import ButtonHoverPink from "../components/buttons/ButtonHoverPink";
import ButtonHoverAqua from "../components/buttons/ButtonHoverAqua";
import ButtonHoverSilver from "../components/buttons/ButtonHoverSilver";
// import FlipButton from "../components/buttons/FlipButton";
import FlipButtonHoriz from '../components/buttons/FlipButtonHoriz';
import ButtonStandardBlue from "../components/buttons/ButtonStandardBlue";
import ButtonStandardPinkBlue from "../components/buttons/ButtonStandardPinkBlue";
import ButtonStandardPinkPurple from "../components/buttons/ButtonStandardPinkPurple";
import ButtonStandardRoyal from "../components/buttons/ButtonStandardRoyal";
import ButtonSmallPurpleGreen from "../components/buttons/ButtonSmallPurpleGreen";
import ButtonSmallBlueRaspberry from "../components/buttons/ButtonSmallBlueRaspberry";
import ButtonSmallRed from "../components/buttons/ButtonSmallRed";
import ButtonSmallBlueDot from "../components/buttons/ButtonSmallBlueDot";
import FlipButton from "../components/buttons/FlipButton";
// import PinkBlackStripes from "../components/buttons/PinkBlackStripes";
import PastelStripes from '../components/buttons/PastelStripes';
import CircleButton from "../components/buttons/CircleButton";
import DiagSlant from "../components/buttons/DiagSlant";
// import PlainTwist from '../components/buttons/PlainTwist';
// import ThemedButton from "../components/buttons/ThemedButton";



const theme = {
//     dark: {
//         darkText: '#292929',
//         lightText: '#F9F8F8', 
//         darkBackground: '#2F4550',
//         lightBackground: '#586F7C',
//         accent: '#B8DBD9',
//         buttonBorder: '#B8DBD9',
//         // primary: '#000',
//         // text: '#fff',
//         // borderColor: ' #fff',

//     },
//     light: {
//         primary: '#fff',
//         text: '#000',
//     },
//     color: {
//         primary: 'hotpink',
//         seconday: 'aqua',
//         background: '#ccc'
//     },
//     LightTheme: {
//         pageBackground: 'white',
//         titleColor: '#dc658b',
//         tagLineColor: 'black'
//     },
//     DarkTheme: {
//         pageBackground: '#282c36',
//         titleColor: 'lightpink',
//         tagLineColor: 'lavender'
//     },
//     themes: {
//         light: LightTheme,
//         dark: DarkTheme,

//     }
}


    // fontFamily: 'Segoe UI',

// const Container = styled.div`
//     margin: 5px auto 5px auto;
// `;

// const rotate = keyframes;
// ``;
// GlobalStyle = createGlobalStyle`
//     button {
//         font-family: ${(props) => props.theme.fontFamily};
//     }
//     * {
//         margin: 0;
//         padding: 0;
//     }
// `
function Followers() {
    const [pageTitle] = ['Followers'];
    // const {theme, themeLoaded, getFonts} = useTheme();
    // const [selectedTheme, setSelectedTheme] = useState(theme);

    // useEffect(() => {
    //     setSelectedTheme(theme);
    // }, [themeLoaded]);

    // useEffect(() => {
    //     WebFont.load({
    //         google: {
    //             families: getFonts()
    //         }
    //     });
    
    return (
    
    <ThemeProvider>
        {/* <GlobalStyle />         */}
    
        <div className='Followers'></div>
            <div>
                <header style={styles.header}>
                {/* <Header /> */}
                </header>
                <div style={styles.container}>
                    <div style={styles.nav} >
                        {/* <NavBar /> */}
                    </div>
                    <div style={styles.body} >
                        <h1 style={styles.h1}>{pageTitle}</h1>
                        <section>
                            <div style={styles.cardcontainer} >
                                <div style={styles.row}>
                                    <br /> 
                                    <ButtonHover btnText="Hover" />
                                    <br />
                                    <ButtonStandard btnText="Standard" />
                                    <br />
                                    <ButtonSmall btnText="Small" />
                                    <br />
                                    <GreenTurquoise btnText="Greenish" />
                                    {/* <br />
                                    <PinkBlackStripes btnText="Blue" />
                                    <br />
                                    <BubbleGum btnText="BubbleGum" /> */}
                                    <br />
                                </div> 
                                <div style={styles.row}>
                                    <br />
                                    <ButtonHoverBlue btnText="Hover" />
                                    <br />
                                    <ButtonStandardBlue btnText="Standard" />
                                    <br />
                                    <ButtonSmallPurpleGreen btnText="Small" />
                                    <br />
                                    <GreenTurquoise btnText="Greenish" />
                                    <br />
                                    {/* <PinkBlackStripes btnText="Blue" />
                                    <br />
                                    <BubbleGum btnText="BubbleGum" /> */}
                                    <br />
                                </div>
                                <div style={styles.row}>
                                    <br />
                                    <ButtonHoverPink btnText="Hover" />
                                    <br />
                                    <ButtonStandardPinkBlue btnText="Standard" />
                                    <br />
                                    <ButtonSmallBlueRaspberry btnText="Small" />
                                    <br />
                                    <GreenTurquoise btnText="Greenish" />
                                    <br />
                                    {/* <PinkBlueStripes btnText="Blue" />
                                    <br />
                                    <BubbleGum btnText="BubbleGum" /> */}
                                </div>
                                <div style={styles.row}>
                                    <br />
                                    <ButtonHoverAqua btnText="Hover" />
                                    <br />
                                    <ButtonStandardPinkPurple btnText="Standard" />
                                    <br />
                                    <ButtonSmallRed btnText="Small" />
                                    <br />
                                    <GreenTurquoise btnText="Greenish" />
                                    <br />
                                    {/* <PinkBlackStripes btnText="Blue" />
                                    <br />
                                    <BubbleGum btnText="BubbleGum" /> */}
                                    <br />
                                </div>
                                <div style={styles.row}>
                                    <br />
                                    <ButtonHoverSilver btnText="Hover" />
                                    <br />
                                    <ButtonStandardRoyal btnText="Standard" />
                                    <br />
                                    <ButtonSmallBlueDot btnText="Small" />
                                    <br />
                                    <GreenTurquoise btnText="Greenish" />
                                    <br />
                                    {/* <PinkBlueStripes btnText="Blue" />
                                    <br />
                                    <BubbleGum btnText="BubbleGum" /> */}
                                    <br />
                                </div>
                            </div>
                        </section>
                        <div>
                            <br/>
                        </div>                        
                        <div>
                            <br/>
                        </div>
                        {/* <section>
                            <div style={styles.flexContainer}>
                                <div style={styles.flexChildMagenta}>
                                    Flex Column 1
                                </div>
                                <div style={styles.flexChildGreen}>
                                    Flex Column 2
                                </div>
                            </div>
                        </section> */}
                        <section> 
                                <div style={styles.row} >
                                    <br />
                                    <MagicButtons btnText="Magic" />
                                    <br />
                                     <Pink btnText="Pinky" />
                                     <br />
                                    <FlipButtonHoriz btnText="Flipped" />
                                    <br />
                                    <Blue3d btnText="BUTTON" />
                                    <br />
                                </div>
                                <div style={styles.row} >
                                    <br />
                                    <MagicButtons btnText="Magic" />
                                    <br />
                                    <Pink btnText="Pinky" />
                                    <br />   
                                    <FlipButtonHoriz btnText="Flipped" />
                                    <br />
                                    <Blue3d btnText="BUTTON" />                                    
                                    <br />
                                </div>                                <div style={styles.row} >
                                    <br />
                                    <MagicButtons btnText="Magic" />
                                    <br />
                                    <Pink btnText="Pinky" />
                                    <br />   
                                    <FlipButtonHoriz btnText="Flipped" />
                                    <br />
                                    <Blue3d btnText="BUTTON" />                                    
                                    <br />
                                </div>                                 <div style={styles.row} >
                                    <br />
                                    <MagicButtons btnText="Magic" />
                                    <br />
                                    <Pink btnText="Pinky" />
                                    <br />   
                                    <FlipButtonHoriz btnText="Flipped" />
                                    <br />
                                    <Blue3d btnText="BUTTON" />                                    
                                    <br />
                                </div>  
                            </section>   
                            <section> 
                                <div style={styles.row} >
                                    <br />
                                    <MagicButtons btnText="Magic" />
                                    <br />
                                    <Pink btnText="Pinky" />
                                    <br />   
                                    <FlipButtonHoriz btnText="Flipped" />
                                    <br />
                                    <Blue3d btnText="BUTTON" />                                    
                                    <br />
                                </div> 
                            </section>
                            <div>
                            <br/>
                        </div>                        
                        <div>
                            <br/>
                        </div>
                        
                                <section> 
                                <div style={styles.row} >
                                    <br />
                                    <FlipButton btnText="Flip" />
                                    <br />
                                    <PastelStripes btnText="Pastel" />
                                    <br />   
                                    <PinkBlueStripes btnText="Flipped" />
                                    <br />
                                    <CircleButton btnText="CIRCLE" />
                                    {/* <BubbleGum btnText="BUBBLE GUM" />                                    
                                    <br /> */}
                                </div> 
                            </section>
                            <section> 
                                <div style={styles.row} >
                                    <br />
                                    {/* <FlipButton btnText="Flip" /> */}
                                    <DiagSlant btnText="Slant" />
                                    <br />
                                    {/* <PastelStripes btnText="Pastel" /> */}
                                    <br />   
                                    {/* <PinkBlueStripes btnText="Flipped" /> */}
                                    <br />
                                    {/* <BubbleGum btnText="BUBBLE GUM" />                                     */}
                                    <br />
                                </div> 
                            </section>
                                <div style={styles.row}>
                                    <br />
                                </div> 
                                   <br />
                                    {/* <Desert btnText="Desert" />                         
                                    <br />   
                                    <CottonCandy btnText="CottonCandy" />
                                    <br />
                                    <Blue3d btnText="BUTTON" />
                                    <br />
                                    <MagicButtons btnText="Magic" />
                                    <br /> */}
                                    {/* <Pink btnText="Pinky" /> */}
                                    <br />
                                

                                    
                                    {/* <br />
                                    <PlainTwist btnText="Pastel" />
                                    <br />
                                    <Stripes btnText="Stripes" />
                                    <br />
                                    <ButtonTurqoise btnText="Turquoise" />
                                    <br />
                                    <IndigoPlum btnText="Plum" />
                                    <br /> */}
                                    {/* <DiagStripes>Plaid</DiagStripes> */}
                                    {/* <FlipButton width="52px" btnText="Flip" /> */}
                                    <br />
                                {/* </div>
                                </section> */}
                                {/* <section>
                        
                            <br />  */}
                            <div style={styles.row} >
                            {/* <PastelStripes btnText="Plain" /> */}
                            {/* <br />
                            <StyledButton />
                            <br />
                            <FancyButton />
                            <br />
                            <SubmitButton />
                            <br />
                            <ButtonThemed /> */}
                        </div>
                        <br />
                        <div style={styles.row} >
                            <br /> 
                            {/* <Button /> */}
                            
                            <br />
                            
                            <br />
                            {/* <MovingButton ><img src={IconImg} style={styles.logo}alt="logo"></img></MovingButton> */}
                            <br />
                            {/* <Rotate style={styles.rotate} btnText="Rotate" />                         */}
                            <br />
                            
                            <br />
                            <div>
                                <br />
                            </div>
                            {/* <MagicCard /> */}
                            <br />
                        </div>
                        
                        <br />


                        {/* template: Highlight the div option+shift+arrowdown
                    <div style={styles.row} > 
                            
                    </div>
                        // {/* template: Highlight the div option+shift+arrowdown
                    <div style={styles.row} >
                </div> */}

                    </div>
                </div>
        </div>
        
    </ThemeProvider>
    
            
    );
}
 
export default Followers;

const styles = {
    
    h1: {
        // display: 'flex',
        flexDirection:'row',
        textAlign: 'center',
        fontSize: '25px',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'pink'
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor:'black',
        color: 'pink',
        fontWeight:'bold',
        alignItems: 'center',
        gap: '20',
        // width: '100%'
        // border: '2px solid pink'
    },
    nav:{
        // width: '150px',
    },
    body: {
        width: '90%',
        margin:'5px'
    },
    cardcontainer: {
        // display: 'flex',
        flexDirection: 'column',
        // justifyContent:'center',
        alignItems: 'center'
    },
    logo:{
        width:'50px',
        height: '50px',
        borderRadius: '50%',
        background: 'none'
    },
    rotate:{
        // fontWeight:'bold',
        // color: 'pink',
    },
    row: {
        marginBottom: '10px',
        display: 'flex',
        flexDirection:'row',
        // marginLeft: '20px',
        alignItems: 'center',
        justifyContent: 'space-around',
        gap:'2rem',
    },
    // col: {
    //     position: 'relative'

    // },
    Link:{
        textDecoration: 'none',
        color: 'pink',
    },
    // flexContainer: {
    //     display: 'flex',
    // },
    // flexChildMagenta: {
    //     flex: 1,
    //     border: '2px solid purple',
    // },
    // flexChildGreen: {
    //     marginRight: '20px'
    // }
}

// const theme = {
//     dark: {
//         darkText: '#292929',
//         lightText: '#F9F8F8', 
//         darkBackground: '#2F4550',
//         lightBackground: '#586F7C',
//         accent: '#B8DBD9',
//         buttonBorder: '#B8DBD9',
//         // primary: '#000',
//         // text: '#fff',
//         // borderColor: ' #fff',

//     },
//     light: {
//         primary: '#fff',
//         text: '#000',
//     },
//     color: {
//         primary: 'hotpink',
//         seconday: 'aqua',
//         background: '#ccc'
//     },
// }


// function Followers() {
//     const [pageTitle] = ['Followers'];
    

//     return (
//         <ThemeProvider theme={theme}>
//         <div className="Followers">
        

//         {/* <CottonCandy /> */}
        
//         <main style = {styles.container}>
//             <div style={styles.pgTitle}>
//                 <h1>{pageTitle}</h1>
//                 <div style={styles.font}>
                
//                 {/* <MyForm />         */}
//                 {/* <AnimatedLogo src={IconImg} width="75px" height="75px" /> */}
//                 <Rotate style={styles.rotate} btnText="Trapstar Bam" />
//                 <MovingButton ><img src={IconImg} style={styles.logo} alt="logo"></img></MovingButton> 
//         <MagicButtons type="submit">Magic</MagicButtons>
//         <div>
//           <br />
//         </div>
//         <ButtonTurqoise />
//         <div>
//           <br />
//         </div>
//                 <div style={styles.row} >
//                     <button>Button</button>
//                     <StyledButton type="submit">Styled Button</StyledButton>
//                     <div>
//                         <br />
//                     </div>
//                     <StyledButton variant='outline'>Styled Button</StyledButton>
//                     <div>
//                         <br />
//                     </div>
//                     <FancyButton as='a'>Fancy Button</FancyButton>
//                     <div>
//                         <br />
//                     </div>
//                     <SubmitButton>Submit Button</SubmitButton>
//                     <div>
//                         <br />
//                     </div>
//                     {/* <AnimatedLogo src={IconImg}/> */}
//                 <ButtonTurqoise btnText="Turquoise" />
//                 <BubbleGum btnText="BubbleGum" />
//                 <MagicButtons btnText="Magic" />
//                 <ButtonHover btnText="Hover" />
//                 </div>
//                 <div>
//                 <Pink btnText="Pink" />
//                 <Stripes btnText="Stripes" />
//                 {/* <FlipDown btnText="Down" /> */}
//                 <BlackPink btnText="BlackPink" />
//                 <MetalPurple btnText="Metal" />
//                 </div>
//                 <div style={styles.row} >
//                 <MetallicBlue btnText="Blue" />                
//                 <GreenTurquoise btnText="Greenish" />
//                 {/* <CottonCandy btnText="Cotton" /> */}
                
                
                
                
//                 </div>
//                 <div>
//                     <Flipper btnText="Flipper" />
//                     <IndigoPlum btnText="Plum" />
//                     {/* <ButtonStandard btnText="Standard" /> */}
//                     <FancyButton btnText="Fancy"  />
                    
//                     <PurpleIndigo btnText="PurpleInd" />
                    
//                 </div>
//                 <Floater />
//                 <Desert btnText="Desert" />
//                 <br />
                
//                 <div>
//                     <br/>
//                     <br/>
//                     <VioletBlue btnText="Violet" />
//                     <Gummy btnText="Gummy" />
//                 </div>
//                 <div>
//                     <br/>  
//                 </div>
//                 {/* <button>Button</button> */}
//                 <StyledButton>Styled Button</StyledButton>
//             </div>
//             </div>
//         </main>
//     </div>
//     </ThemeProvider>
//     );
// }

// export default Followers;

// const styles = {
//     container:{
//         display:'flex',
//         flexWrap: 'wrap',
//         alignContent:'space-between',
//         flexDirection:'column',
//         alignItems:'center',
//         height:'100vh',
//         background:'whitesmoke',
//         // width:'99vh',
//         paddingLeft:'2%',
//         // fontSize:'16px'
//         fontSize:'16px'
//     },
//     font:{
//         fontSize:'16px',
//         gap:20,
//     },
//     img: {
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'space-around',
//         alignItems: 'center',
//         width: '50px',
//         height: '50px',
//         marginTop: '12px'
//     },
//     // green:{
//     //     fontSize:'16px',
//     // },
//     pgTitle: {
//         fontSize: '2rem',
//         color:'#e1affd'
//     },
//     logo: {
//         width: '75px',
//         height: '75px',
//         // borderRadius: '50%'
//     }
    
// };