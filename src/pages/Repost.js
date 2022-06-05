// // 1: Import
// import React, { useState, useEffect } from 'react';
// import styled, { ThemeProvider } from "styled-components";
// import WebFont from 'webfontloader';
// import { GlobalStyles } from './theme/GlobalStyles';
// import {useTheme} from './theme/useTheme';

// // 2: Create a cotainer
// const Container = styled.div`
//   margin: 5px auto 5px auto;
// `;

// function Repost() {
//   // 3: Get the selected theme, font list, etc.
//   const {theme, themeLoaded, getFonts} = useTheme();
//   const [selectedTheme, setSelectedTheme] = useState(theme);

//   useEffect(() => {
//     setSelectedTheme(theme);
//    }, [themeLoaded]);

//   // 4: Load all the fonts
//   useEffect(() => {
//     WebFont.load({
//       google: {
//         families: getFonts()
//       }
//     });
//   });

//   // 5: Render if the theme is loaded.
//   return (
//     <>
//     {
//       themeLoaded && <ThemeProvider theme={ selectedTheme }>
//         <GlobalStyles/>
//         <Container style={{fontFamily: selectedTheme.font}}>
//           <h1>Theme Builder</h1>
//           <p>
//             This is a theming system with a Theme Switcher and Theme Builder.
//             Do you want to see the source code? <a href="https://github.com/atapas/theme-builder" target="_blank">Click here.</a>
//           </p>
//         </Container>
//       </ThemeProvider>
//     }
//     </>
//   );
// }

// export default Repost;
// // Tisha Di Fresco
// // 5-7-22
// // Login component
// import React from "react";
// import AvatarIcon from '../images/tsbam.png';
// // import { AiOutlineSketch } from 'react-icons/ai'
// import Gummy from "../components/buttons/Gummy";

// import MagicButtons from "../components/buttons/MagicButtons";
// <Gummy btnText="Gummy" />
// // import MyBtn from '../buttons/MyBtn';
//  const Repost = props => {
//      return (
//         <section style={styles.container}>
//         <div style={styles.profileHeader}>
//         <img src={AvatarIcon} alt="Dashboard" style={styles.myAvatar} />
//                 <h4 style={styles.h4}>tsbam</h4>
//         </div>  
//         <form className='form content-center' style={styles.Repost}>
//             {/* <div>
//                 <h1 className="flextext-5xl mb-8">Sign up</h1>
//             </div> */}
//             <div className='flex-left' style={styles.inputContainer}>
//                 <div>
//                 <label style={styles.label} htmlFor username="username"
//                     className='form-label'>
//                     Username
//                 </label>
//                 </div>
//                     <input 
//                     style={styles.input}
//                     placeholder='Username' 
//                 />
//                 <label style={styles.label} htmlFor name="email"
//                     className='form-label'>
//                     Email
//                 </label>    
//                     <input
//                         style={styles.input}
//                         placeholder="Email" 
//                     />                  
//             </div>
//             <div style = {styles.inputContainer}>
//                 <label style={styles.label} htmlFor 
//                     name="password"
//                     className='form-label'>
//                     Password
//                 </label>   
//                     <input
//                         style={styles.input}
//                         placeholder="Password" 
//                     /> 
//                 <label style={styles.label} htmlFor name="email"
//                     className='form-label'>
//                     Confirm Password
//                 </label>                       
//                     <input
//                         style={styles.input}
//                         placeholder="Confirm Password" 
//                     />                     
//                 </div>
//                 <MagicButtons type="submit">
//                 Sign up
//                 </MagicButtons>
//             <span style={styles.actlogin}className='form-input-login'>
//                 Already have an account? Login
//             </span> 
//         </form>
//         </section>
//      )
//  };
//  export default Repost;

//  const styles = {
//      Repost: {
//          display: 'flex',
//          flexDirection:'row',
         
//         //  justifyContent:'space-around',
//          alignItems:'center',
//          width:'40%',
//          margin: '1%',
//          padding: '2%',
//          background:'whitesmoke',
//          color:'black',
//          borderRadius:'2%',
//          borderColor: '2px solid pink'
//      },
//      inputContainer: {
//         // display:'flex',
//         display:'inline-block',
//         // flexDirection:'row',
//         // borderRadius:'10rem',
//         alignItems:'center',
//         margin:'2%',
//         borderColor: '2px solid pink'
//      },
//      label:{
//         display: 'block',
//         // border: '1px solid #ccc',
//         boxSizing: 'border-box',
//         // display:'flex',
//         // flexDirection:'row',
//         marginBottom:'1%',
//         marginTop:'2%',
//         fontSize:'26px'
//         // float:'left'
//         // justifyContent:'center',
//         // alignItems:'flex-start',
//         // alignContent:'flex-end'
//      },
//      input: {
//         //  padding:'2%',
//         //  margin: '1%',
//          borderRadius:'10%',
//          borderColor: '2px solid pink',         
//         //  width: '25%',
//         padding: '12px 20px',
//         margin: '8px 0',
//         marginBottom:'1rem',
//         display: 'inline-block',
//         border: '1px solid #ccc',
//         boxSizing: 'border-box',
//      },

//      btn:{
//          display:'flex', 
//          flexDirection:'row',
//         //  flexWrap:'wrap',
//          fontSize:'18px',
//          color:'pink',
//          marginLeft: '2%',
//          marginBottom:'1%',
//          background:'whitesmoke',
//          padding:'6px',
//          borderRadius:'10%',
//          borderColor: '2px solid pink'
//      },
//      actlogin:{
//          display:'flex',
//          flexDirection:'row',
//          alignItems:'flex-end',
//          marginLeft:'2%'
//      }

//  }
// import React, { useState } from "react";
// import RepostsForm from "../components/RepostsForm";
// import RepostsList from "../components/RepostsList";
// import MagicButtons from "../buttons/MagicButtons";
// function Repost() {
//     const [pageTitle] = ['Repost'];
//     return (
//         <section style = {styles.container}>
//             <div style={styles.pgTitle}>
//                 <h1>{pageTitle}</h1>
                


//                 <p>Some stuff here</p>
//                 <p>Some stuff here</p>
//             </div>
//             <MagicButtons className="mb-4" btnText="Share" />        
//             </section>
//     );
// }

// export default Repost;

// const styles = {
//     container:{
//         display:'flex',
//         flexDirection:'column',
//         height:'100vh',
//         width:'99vh',
//         paddingLeft:'2%'
//     },
//     pgTitle: {
//         fontSize: '2rem',
//     }
// };