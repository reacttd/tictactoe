import React from 'react';
import { createGlobalStyle } from 'styled-components';
import StyledButton , { 
    StyledButtonChanged, 
    FancyButton, 
    SubmitButton, 
    ButtonThemed 
} from '../components/buttons/VishwasButton';
import { 
    DarkButton , 
    PinkVersion, 
    ThreeD, 
    GhostButton, 
    MiniThreeD, 
    MiniThreeDGreen, 
    MiniThreeDRed, 
    MiniThreeDYellow, 
    MiniThreeDPurple, 
    MiniThreeDBlue, 
    SmallThreeDGreen, 
    SmallThreeD, 
    SmallThreeDRed, 
    SmallThreeDYellow, 
    SmallThreeDPurple, 
    SmallThreeDBlue, 
    NormalThreeD, 
    NormalThreeDGreen, 
    NormalThreeDRed, 
    NormalThreeDYellow, 
    NormalThreeDPurple, 
    NormalThreeDBlue, 
    LargeThreeD, 
    LargeThreeDGreen, 
    LargeThreeDRed, 
    LargeThreeDYellow, 
    LargeThreeDPurple, 
    LargeThreeDBlue, 
    GreenThreeD, 
    RedThreeD, 
    YellowThreeD, 
    PurpleThreeD, 
    BlueThreeD 
} from '../components/buttons/Button.styles';
// import ButtonGroup from '../components/btnGroup/ButtonGroup';
// import Slant from '../components/buttons/Slant';
// import BlackPink from '../components/buttons/BlackPink';
// import BubbleGum from '../components/buttons/BubbleGum';
// import FlipButtonHoriz from '../components/buttons/FlipButtonHoriz';
// import DiagSlant from '../components/buttons/DiagSlant';
// import PastelStripes from '../components/buttons/PastelStripes';
// import DiagStripes from '../components/buttons/DiagStripes';
// import PinkBlueStripes from '../components/buttons/PinkBlueStripes';
// import Gummy from '../components/buttons/Gummy';
// import ButtonStandardPinkPurple from '../components/buttons/ButtonStandardPinkPurple';
// import ButtonGroupPrimaryBlue from '../components/btnGroup/ButtonGroupPrimaryBlue';
// import PinkBlackStripes from '../components/buttons/PinkBlackStripes';
// import BubbleGumBlue from '../components/buttons/BubbleGumBlue';
// import Flipper from '../components/buttons/Flipper';
// import Moon from '../components/moon/'
// import IconImg from '../images/LOGO.png';
// import MovingButton from '../components/buttons/MovingButton';
// import Rotate from '../components/buttons/Rotate';


const theme = {
    dark: {
        primary: '#000',
        text: '#fff',
    },
    light: {
        primary: '#fff',
        text: '#000',
    },
    fontFamily: 'Roboto',
}
const GlobalStyle = createGlobalStyle`
*, *:before, *:after {
    box-sizing: inherit;
}

html {
    // font-size:22%;
    // font-family:'Lato', sans-serif;
    box-sizing: border-box;
}
h1{
    // font-size: 1.75rem
    // font-weight: bold;
    // color: #89867e 
}
button {
    // font-family: ${(props) => props.theme.fontFamily};

}
`
// const Section = styled.section`
//  height: 100vh;
//  display: flex;
//  justify-content: center;
//  align-items: center;
//  flex-direction: column;
//  font-size: 5rem;

//  @media screen and (max-width: 45em) {
//   font-size: 3rem;
//  }
// `
// const Container = styled.div`
//  display: flex;
//  justify-content: center;
//  align-items: center;
//  position: relative;
//  min-height: 10rem;
// `



const SecondaryForm = props => {

    // const printButtonLabel = (event) => {
    //     console.log(event.target.name);
    //     //do some stuff here
    //   };

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
        {/* <div className = "secondaryForm"> */}
            {/* <div style={styles.container}> */}
            {/* <ButtonGroup buttons={["One", "Two", "Three"]}  */}
            {/* doSomethingAfterClick={printButtonLabel} */}
            
        {/* />  */}
        {/* <section styles={styles.container}> */}
            {/* <h1 style={styles.h1mini}>mini</h1>
            <div style={styles.row}> 
                <span><MiniThreeD>Button</MiniThreeD></span>
                <span><MiniThreeDGreen>Button</MiniThreeDGreen></span>                
                <span><MiniThreeDRed>Button</MiniThreeDRed></span>
                <span><MiniThreeDYellow>Button</MiniThreeDYellow></span>
                <span><MiniThreeDPurple>Button</MiniThreeDPurple></span>
                <span><MiniThreeDBlue>Button</MiniThreeDBlue></span>
            </div>             */}
            {/* <div>
                <br />
            </div>
            <div style={styles.div}>
                <br />
            </div>

            <div style={styles.div}>
                <br />
            </div>
            <div style={styles.container}>
                <h1 style={styles.h1small}>small</h1> */}
            {/* <div style={styles.row}>
                <span><SmallThreeD>Button</SmallThreeD></span>
                <span><SmallThreeDGreen>Button</SmallThreeDGreen></span>                
                <span><SmallThreeDRed>Button</SmallThreeDRed></span>
                <span><SmallThreeDYellow>Button</SmallThreeDYellow></span>
                <span><SmallThreeDPurple>Button</SmallThreeDPurple></span>
                <span><SmallThreeDBlue>Button</SmallThreeDBlue></span>
            </div> */}
            {/* </div> 
            <div>
                <br />
            </div>
            <div style={styles.div}>
                <br />
            </div>

            <div style={styles.div}>
                <br /> */}
            {/* </div>
            <h1 style={styles.h1normal}>normal</h1>
            <div style={styles.row}> 
                <span><NormalThreeD>Button</NormalThreeD></span>
                <span><NormalThreeDGreen>Button</NormalThreeDGreen></span>    
                <span><NormalThreeDRed>Button</NormalThreeDRed></span>
                <span><NormalThreeDYellow>Button</NormalThreeDYellow></span>
                <span><NormalThreeDPurple>Button</NormalThreeDPurple></span>
                <span><NormalThreeDBlue>Button</NormalThreeDBlue></span>
            </div>            
            <div>
                <br />
            </div>
            <div style={styles.div}>
                <br />
            </div> */}

            {/* <div style={styles.div}>
                <br />
            </div>
            <div style={styles.container}>
                <h1 style={styles.h1large}>large</h1>
            <div style={styles.row}>
                <span><LargeThreeD>Button</LargeThreeD></span>
                <span><LargeThreeDGreen>Button</LargeThreeDGreen></span>                
                <span><LargeThreeDRed>Button</LargeThreeDRed></span>
                <span><LargeThreeDYellow>Button</LargeThreeDYellow></span>
                <span><LargeThreeDPurple>Button</LargeThreeDPurple></span>
                <span><LargeThreeDBlue>Button</LargeThreeDBlue></span>
            </div>
            </div> 
            <div>
                <br />
            </div>
            <div style={styles.div}>
                <br />
            </div>

            <div style={styles.div}>
                <br />
            </div> 
            {/* <div>
                <br />
            </div> */}
            {/* <div style={styles.div}>
                <br />
            </div>
            <div style={styles.div}>
                <br />
            </div> */}
            {/* <div style={styles.container}> */}
                {/* <h1 style={styles.h13d}>3-D</h1> */}
            {/* {/* <div style={styles.block}>
                <span><BlockThreeD>Button</BlockThreeD></span>
                <span><BlockThreeDGreen>Button</BlockThreeDGreen></span>                
                <span><BlockThreeDRed>Button</BlockThreeDRed></span>
                <span><BlockThreeDYellow>Button</BlockThreeDYellow></span>
                <span><BlockThreeDPurple>Button</BlockThreeDPurple></span>
                <span><BlockThreeDBlue>Button</BlockThreeDBlue></span>
            </div> */}
            {/* </div> */}

            {/* <div style={styles.div}>
                <br />
            </div> */}

            {/* <div style={styles.div}>
                <br />
            </div>
                          */}
        {/* <div style={styles.row}>
            <span><ThreeD>Three D</ThreeD></span>                    
            <span><ThreeD variant='outline'>Blue 3-D</ThreeD></span>
        </div>
        <div style={styles.row}>
            <span><GreenThreeD>Three D</GreenThreeD></span>                    
            <span><GreenThreeD variant='outline'>Green 3-D</GreenThreeD></span>
        </div>
        <div style={styles.row}>
            <span><RedThreeD>Three D</RedThreeD></span>                    
            <span><RedThreeD variant='outline'>Red 3-D</RedThreeD></span>
        </div>
        <div style={styles.row}>
            <span><YellowThreeD>Three D</YellowThreeD></span>                    
            <span><YellowThreeD variant='outline'>Yellow 3-D</YellowThreeD></span>
        </div>
        <div style={styles.row}>
            <span><PurpleThreeD>Three D</PurpleThreeD></span>                    
            <span><PurpleThreeD variant='outline'>Purple 3-D</PurpleThreeD></span>
        </div>
        <div style={styles.row}>
            <span><BlueThreeD>Three D</BlueThreeD></span>                    
            <span><BlueThreeD variant='outline'>Blue 3-D</BlueThreeD></span>
        </div>
        <div style={styles.row}>                    
            <span><PinkVersion>Pink 3-D</PinkVersion></span>
            <span><PinkVersion variant='outline'>Pink 3-D</PinkVersion></span>
        </div>
        <div style={styles.row}>
            <span><GhostButton>Ghost</GhostButton></span>
            <span><GhostButton variant='outline'>Ghost</GhostButton></span>
        </div>     
         <div>
            <span><FlipButtonHoriz btnText="Flip"/></span>
            <span><StyledButton type="submit" style={styles.btn}>Styled</StyledButton></span>    
        </div> */}

                
{/* 
            <div>
                <br />
            </div>
                
            <div>
                <br />
            </div>
                <span>
                    <StyledButton variant='' style={styles.btn}>Styled</StyledButton>
                </span>
            <div>
                <br />
            </div>
                <span>
                    <FancyButton style={styles.btn} as='a'>Fancy</FancyButton>
                </span>
            <div>
                <br />
            </div>
                <span>
                    <DarkButton style={styles.btn}>Dark Button</DarkButton> 
                </span>
            <div>
                <br />
            </div>
                <span>
                    <SubmitButton style={styles.btn}>Submit</SubmitButton>
                </span>    
            <div>
                <br />
            </div>
                <span>
                    <ButtonThemed>Themed</ButtonThemed>
                </span>
            <div>
                <br />
            </div>
                <span>
                    <DiagSlant btnText="Slant" />
                </span>
        </section>  */}
        
        {/* <ul style={styles.container}> */}
        {/* <ButtonGroup buttons={["One", "Two", "Three"]} 
            doSomethingAfterClick={printButtonLabel}>
        </ButtonGroup> */}
            {/* <br /> */}
                {/* <li> */}
                    {/* <ButtonGroupPrimaryBlue />
                </li>

                <li>
                    <Gummy btnText="Gummy" />
                </li>            
            <div>
                <br />
            </div>
                <li>
                    <PastelStripes />
                </li>
            <div>
                <br />
            </div>
                <li>
                    <PinkBlueStripes btnText="Stripes"/>
                </li> */}
            {/* <div>
                <br />
            </div>
                <li>
                    <DiagStripes />
                </li>    
            <div>
                <br />
            </div>
                <li> 

                </li>    
            <div>
                <br />
            </div> 
        </ul>
        <ul style={styles.container}>   */}
        {/* <ButtonGroup buttons={["One", "Two", "Three"]} 
            doSomethingAfterClick={printButtonLabel}>
        </ButtonGroup>       */}

            {/* <div>
                <br />
            </div>
                <StyledButtonChanged style={styles.btnchanged}>Changed</StyledButtonChanged>
            <div>
                <br />
            </div>
        </ul>
        <ul style={styles.container}>
            <div>
                <br />
            </div> */}
                {/* <li>
                    <BubbleGum btnText="Bubble Gum" />
                </li>
            <div>
                <br />
            </div>
                <li> */}
                    {/* <DiagStripes btnText="Stripes" />
                </li>             
            <div>
                <br />
            </div>
                <li> */}
                    {/* <ButtonStandardPinkPurple btnText="Red Purple"/> */}
                {/* </li> */}
                {/* <MovingButton style={styles.moving}><img src={IconImg} style={styles.logo}alt="logo"></img></MovingButton> */}

                {/* <Rotate style={styles.rotate} btnText="Trapstar" />  */}
            
            {/* <div>
                <br />
            </div>

            <div>
                <br />
            </div>
        </ul>
            </div>
        </div> */}
        </ThemeProvider>
    )
}
export default SecondaryForm;

const styles={
    container:{
        position: 'relative',
        display: 'inline-flex',
        // display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'center',
        // alignItems: 'space-evenly',
        // width: '30%',
        background: 'white',
        borderRadius: '4px',
        textAlign: 'center',
        marginBottom: '40px',
        // height: '100vh',
        gap: '30px',

        margin: '0 auto'
    },
    // container:{
        // position: 'relative',
        // display: 'inline-flex',
        // // display: 'flex',
        // flexDirection: 'column',
        // flexWrap: 'wrap',
        // // justifyContent: 'center',
        // // width: '30%',
        // background: 'white',
        // borderRadius: '4px',
        // textAlign: 'center',
        // marginBottom: '40px',
        // // height: '100vh',
        // gap: '30px',
    // },
    div:{
        backgroundColor: 'black'
    },
    h1mini:{
        fontSize: '1.75rem',
        color: '#89867e',
        marginBottom: '30px'
    },
    h1small:{
        fontSize: '1.75rem',
        color: '#89867e',
    },
    h1normal:{
        fontSize: '1.75rem',
        color: '#89867e',
        marginBottom: '30px',
    },
    h1large:{
        fontSize: '1.75rem',
        color: '#89867e',
        marginBottom: '30px',
    },
    h13d:{
        fontSize: '1.75rem',
        color: '#89867e',
        marginBottom: '30px',
    },
    row:{
        display: 'flex',
        justifyContent: 'center',
    },
    block:{
        display: 'flex',
        // width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center',
        // display: 'flex',
        flexDirection: 'column',

    },
    btn:{
        // display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-evenly',
        // width: '130px',
        // height: '70px',
        margin: '10px',
        // textAlign: 'center',
    },
    btnchanged:{
        textAlign: 'center'
    },
    moving:{
        width:'100px',
        height: '100px',
    },
    rotate:{
        fontWeight:'bold',
        color: 'black',
    },
    // btnGroup:{
    //     margin: '10px',
    //     padding: '0px 70px',
    //     background: 'black', 
    //     color:'#FFF'
    // }
    // rotate:{
    //     backgroundColor: 'black',
    //     color: 'black',
    //     width: '100px',
    //     height: '100px',
    // }
}
// import React from "react";
// // import MyBtn from "../buttons/MyBtn";
// import { FaUserEdit } from 'react-icons/fa';
// import { MdEmail }from 'react-icons/md';
// import { RiLockPasswordFill } from 'react-icons/ri';
// import ButtonHover from "../components/buttons/ButtonHover";

//  const SecondaryForm = props => {
//      return (
//          <div style={styles.formcontainer}>
//          <form 
//             style={styles.myform}
//             onSubmit={props.addName}>
//             <div style={styles.row}>
//                 <div style={styles.inputContainer}>
//                     <span style={styles.inputIcon}><FaUserEdit/></span>
//                     <input
//                         type='text'
//                         style={styles.inputwithIcon}
//                         placeholder="Username"
//                     />
//                 </div>
//                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                 <div style={styles.inputContainer}>
//                     <span style={styles.inputIcon}><MdEmail/></span>
//                     <input
//                         type='text'
//                         style={styles.inputwithIcon}
//                         placeholder="Email"
//                     />
//                 </div>
//             </div>
//             <div style={styles.row}>
//                 <div style={styles.inputContainer}>
//                     <span style={styles.inputIcon}><RiLockPasswordFill/></span>
//                     <input
//                         type='text'
//                         style={styles.inputwithIcon}
//                         placeholder="Password"
//                     />
//                 </div>
//                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                 <div style={styles.inputContainer}>
//                     <span style={styles.inputIcon}><RiLockPasswordFill/></span>
//                     <input
//                         type='text'
//                         style={styles.inputwithIcon}
//                         placeholder="Confirm Password"
//                     />
//                 </div>
//             </div>
//             <div>
//                 <ButtonHover style={styles.btn} btnText="Sign Up"/>&nbsp;&nbsp;
//                 <span style={styles.actlogin}className='form-input-login'>
//                 Already have an account? Login
//             </span>
//             </div>
//         </form>
//         </div>
//      )
//  };
//  export default SecondaryForm;

//  const styles = {
//      formcontainer: {
//         display:'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         boxShadow:'0 4px 8px 0 rgba(225, 175, 253, 1.0), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
//         // boxShadow:'1px 6px 1px 1px rgba(0, 0, 255, .1)'

//      },
//      myform:{
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         background: 'black',
//         margin: '20px',
//         width: '100%'
        
//         // justifyContent: 'space-around'
//         // gap: '10'
//      },
//      row: {
//         display: 'flex',
//         flexDirection: 'row',
//         margin: '10px',
//      },
//      inputContainer:{
//          border: '1px solid #ddd',
//          color: '#e1affd',
//         //  padding: '2px',
//          display: 'flex',
//          flexDirection: 'row',
//         //  borderRadius: '50px',
//          alignItems: 'center',

//      },
//      inputIcon: {
//          background: 'black',
//          color: '#e1affd',
//          padding: '2px',
//          width: '40px',
//          height: '40px',
//          display: 'flex',
//          alignItems: 'center',
//          fontSize: '2rem',
//      },
//      inputwithIcon: {
//          border: 'none',
//          flex: 1,
//          padding: '10px',
//         //  margin: '5%'
//      },
//      button: {
//          diplay: 'flex',
//          flexDirection: 'column',
//          justifyContent: 'center',
//          alignItems: 'center'
//      }
//  }

//  const styles = {
//      secondaryForm: {
//          display: 'flex',
//          flexDirection:'column',
//          justifyContent:'space-around',
//         //  width:'100%',
//          margin: '1%',
//          padding: '2%',
//          background:'black',
//          color:'pink',
//          borderRadius:'2%'
//      },
//      input: {
//          padding:'2%',
//          margin: '1%'
//      }

//  }