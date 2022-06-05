import React from "react";
// import MyBtn from "../buttons/MyBtn";
import { FaUserEdit } from 'react-icons/fa';
import { MdEmail }from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import ButtonHover from "../components/buttons/ButtonHover";

 const SecondaryForm = props => {
     return (
         <div style={styles.formcontainer}>
         <form 
            style={styles.myform}
            onSubmit={props.addName}>
            <div style={styles.row}>
                <div style={styles.inputContainer}>
                    <span style={styles.inputIcon}><FaUserEdit/></span>
                    <input
                        type='text'
                        style={styles.inputwithIcon}
                        placeholder="Username"
                    />
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div style={styles.inputContainer}>
                    <span style={styles.inputIcon}><MdEmail/></span>
                    <input
                        type='text'
                        style={styles.inputwithIcon}
                        placeholder="Email"
                    />
                </div>
            </div>
            <div style={styles.row}>
                <div style={styles.inputContainer}>
                    <span style={styles.inputIcon}><RiLockPasswordFill/></span>
                    <input
                        type='text'
                        style={styles.inputwithIcon}
                        placeholder="Password"
                    />
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div style={styles.inputContainer}>
                    <span style={styles.inputIcon}><RiLockPasswordFill/></span>
                    <input
                        type='text'
                        style={styles.inputwithIcon}
                        placeholder="Confirm Password"
                    />
                </div>
            </div>
            <div>
                <ButtonHover style={styles.btn} btnText="Sign Up"/>&nbsp;&nbsp;
                <span style={styles.actlogin}className='form-input-login'>
                Already have an account? Login
            </span>
            </div>
        </form>
        </div>
     )
 };
 export default SecondaryForm;

 const styles = {
     formcontainer: {
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        boxShadow:'0 4px 8px 0 rgba(225, 175, 253, 1.0), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        // boxShadow:'1px 6px 1px 1px rgba(0, 0, 255, .1)'

     },
     myform:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'black',
        margin: '20px',
        width: '100%'
        
        // justifyContent: 'space-around'
        // gap: '10'
     },
     row: {
        display: 'flex',
        flexDirection: 'row',
        margin: '10px',
     },
     inputContainer:{
         border: '1px solid #ddd',
         color: '#e1affd',
        //  padding: '2px',
         display: 'flex',
         flexDirection: 'row',
        //  borderRadius: '50px',
         alignItems: 'center',

     },
     inputIcon: {
         background: 'black',
         color: '#e1affd',
         padding: '2px',
         width: '40px',
         height: '40px',
         display: 'flex',
         alignItems: 'center',
         fontSize: '2rem',
     },
     inputwithIcon: {
         border: 'none',
         flex: 1,
         padding: '10px',
        //  margin: '5%'
     },
     button: {
         diplay: 'flex',
         flexDirection: 'column',
         justifyContent: 'center',
         alignItems: 'center'
     }
 }

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