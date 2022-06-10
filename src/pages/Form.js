//  This is a test for Followers page data
import { ThemeProvider } from 'styled-components';
// import { FaHome } from 'react-icons/fa';
// import { divide } from 'lodash';
// import React, { useState } from 'react';
// import styled from 'styled-components';
import ButtonGroup from '../components/btnGroup/ButtonGroup';
// import StyledButton from '../components/buttons/VishwasButton';
import Blue3d from "../components/buttons/Blue3d";
// import BubbleGum from "../components/buttons/BubbleGum";
import BubbleGumBlue from "../components/buttons/BubbleGumBlue";
import ButtonHover from "../components/buttons/ButtonHover";
// import ButtonHoverAqua from "../components/buttons/ButtonHoverAqua";
import ButtonHoverBlue from "../components/buttons/ButtonHoverBlue";
// import ButtonHoverPink from "../components/buttons/ButtonHoverPink";
// import ButtonHoverSilver from "../components/buttons/ButtonHoverSilver";
// import ButtonSmall from "../components/buttons/ButtonSmall";
import ButtonSmallSuccess from "../components/buttons/ButtonSmallSuccess";
// import CircleButton from "../components/buttons/CircleButton";
// import CircleButtonBlue from "../components/buttons/CircleButtonBlue";
// import InputButtonBlue from '../components/buttons/InputButtonBlue';
// import FlexExample from '../components/FlexExample';
// import CircleButtonBlueLg from "../components/buttons/CircleButtonBlueLg";
// import ButtonStandard from "../components/buttons/ButtonStandard";
// import ButtonTurqoise from "../components/buttons/ButtonTurqoise";
// import CottonCandy from "../components/buttons/CottonCandy";
// import { DarkButton } from '../components/buttons/Button.styles';
// import Desert from "../components/buttons/Desert";
// import DiagStripes from "../components/buttons/DiagStripes";
// import GreenTurquoise from "../components/buttons/GreenTurquoise";
// import IndigoPlum from "../components/buttons/IndigoPlum";
// import MagicButtons from "../components/buttons/MagicButtons";
// import Pink from "../components/buttons/Pink";
// import PinkBlueStripes from "../components/buttons/PinkBlueStripes";
// import Stripes from "../components/buttons/Stripes";
import StyledButton from '../components/buttons/VishwasButton';


const theme = {
    dark: {
        primary: '#000',
        text: '#fff'
    },
    light: {
        primary: '#fff',
        text: '#000'
    }
}

const Form = props => {
// const [pageTitle] = ['Followers'];

    return (
        <ThemeProvider theme={theme}>
            {/* <FlexExample /> */}
            
        <div className='Form'>
            <section style={styles.container}>
                <h1 style={styles.h1}>Blue Theme</h1>
                <div style={styles.buttonContainer}>
                    <div style={styles.row}>

                        <ButtonGroup btnText="1" />
                        <div>
                            <br />
                        </div>
                        {/* <InputButtonBlue style={styles.icon}><FaHome /></InputButtonBlue> */}

                        <StyledButton>Styled Button</StyledButton>
                        <div>
                            <br />
                        </div>
                            <Blue3d style={styles.btn} btnText="Primary" />
                        {/* <div>                            
                            <br />
                        </div> */}
                            {/* <BubbleGumBlue style={styles.btn} btnText="Secondary" />  */}
                        {/* <div>
                            <br />
                        </div> */}
                            {/* <ButtonHoverBlue style={styles.btn} btnText="Success" /> */}
                        {/* <div>
                            <br />
                        </div> */}
                            {/* <ButtonSmallSuccess style={styles.btn} btnText="Success" />                                   */}
                        {/* <div>
                            <br />
                        </div> */}
                            {/* <InputButtonBlue /> */}
                        <div>
                            <br />
                        </div>
                    </div>    
                </div>
            </section>
            <section style={styles.container}>
                <h1 style={styles.h1}>Blue Theme</h1>
                <div style={styles.buttonContainer}>
                    <div style={styles.row}>
                        <div>
                            <br />
                        </div>
                            <ButtonHover style={styles.btn} btnText="Styled Button" />
                        <div>                            
                            <br />
                        </div>
                            <BubbleGumBlue style={styles.btn} btnText="Secondary" /> 
                        <div>
                            <br />
                        </div>
                            <ButtonHoverBlue style={styles.btn} btnText="Success" />
                        <div>
                            <br />
                        </div>
                            <ButtonSmallSuccess style={styles.btn} btnText="Success" />                                  
                        <div>
                            <br />
                        </div>
                            {/* <InputButtonBlue /> */}
                        <div>
                            <br />
                        </div>
                    </div>    
                </div>
            </section>
            <section style={styles.container}>
                {/* <h1>{pageTitle}</h1> */}
                <h1 style={styles.h1}>Blue Theme</h1>
                <div style={styles.buttonContainer}>
                    <div style={styles.row}>
                        <div>
                            <br />
                        </div>
                            <Blue3d style={styles.btn} btnText="Primary" />
                        <div>                            
                            <br />
                        </div>
                            <BubbleGumBlue style={styles.btn} btnText="Secondary" /> 
                        <div>
                            <br />
                        </div>
                            <ButtonHoverBlue style={styles.btn} btnText="Success" />
                        <div>
                            <br />
                        </div>
                            <ButtonSmallSuccess style={styles.btn} btnText="Success" />                                  
                        <div>
                            <br />
                        </div>
                            
                        <div>
                            <br />
                        </div>
                    </div>    
                </div>
            </section>
        </div>
        </ThemeProvider>
    )


}
export default Form;

const styles = {    

    container:{
        //   display: flex;
  flexDirection: 'row',
  flexWrap: 'wrap',
  width: '60%',
  marginLeft: 'auto',
  marginRight: 'auto',
  padding: '30px',
        backgroundColor: 'whitesmoke',
        color: 'white',
        alignContent: 'center'
        // flexDirection:'column',
        // height:'100vh',
        // width:'99vh',
        // paddingLeft:'2%',
        // width: '20%',
        // border: '2px solid #6c98c9',
    },    
    h1:{
        textAlign: 'center',
        fontSize: '2rem',
        fontWeight: 'bold',
        color: '#6c98c9',
        margin: '30px 0 30px 0',
    },
    buttonContainer: {
        display: 'block',
        // flexDirection: 'column',
        width: '20%',
        gap: '2rem',
    },
    styled:{
        color: 'white'
    },


    h1b:{
        marginTop: '16px',
        textAlign: 'center',
        fontSize: '2rem',
        fontWeight: 'bold',
    },
    row:{
        // display: 'block',
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        marginLeft: '20px',
        alignContent: 'center'
        // display:'flex',
        // flexDirection: 'row',
        // alignContent:'center',
        // justifyContent: 'space-between'
        // width: '190px',
        // border: '1px solid black'
        // marginLeft: '200px,'
    }

};
// import React from "react";
// import MyForm from "./MyForm";
// import MyBtn from "../buttons/MyBtn";
// import { AiOutlineSketch } from 'react-icons/ai';

//  const Form = props => {
//      return (
      
//          <form
//             style={styles.myForm}
//             onSubmit = {props.addName}>
//               <div>
//                 <div style = {styles.inputContainer}>
//                     <input
//                         style={styles.input}
//                         placeholder="User Name" 
//                     />                    
//                 </div>
//                 <div style = {styles.inputContainer}>
//                     <input
//                         style={styles.input}
//                         placeholder="Email" 
//                     />                    
//                 </div>
//               </div>
//               <div>
//                 <div style = {styles.inputContainer}>
//                     <input
//                         style={styles.input}
//                         placeholder="Password" 
//                     />                    
//                 </div>
//                 <div style = {styles.inputContainer}>
//                     <input
//                         style={styles.input}
//                         placeholder="Confirm Password" 
//                     />                    
//                 </div>
//               </div>
//             <MyBtn btnIcon = {<AiOutlineSketch />} btnTxt="Submit" />
//             <MyForm />
//         </form> 
//      )
//  };
//  export default Form;

//  const styles = {
//      myForm: {
//         //  display: 'flex',
//         //  flexDirection:'column',
//         //  justifyContent:'space-around',
//         //  width:'30%',
//         //  margin: '1%',
//         //  padding: '2%',
//         //  background:'whitesmoke',
//         //  color:'pink',
//         //  borderRadius:'2%'
//      },
//      input: {
//          padding:'2%',
//          margin: '1%'
//      }

//  }
