import React from "react";
import MyForm from "./MyForm";
import MyBtn from "../buttons/MyBtn";
import { AiOutlineSketch } from 'react-icons/ai';

 const Form = props => {
     return (
      
         <form
            style={styles.myForm}
            onSubmit = {props.addName}>
              <div>
                <div style = {styles.inputContainer}>
                    <input
                        style={styles.input}
                        placeholder="User Name" 
                    />                    
                </div>
                <div style = {styles.inputContainer}>
                    <input
                        style={styles.input}
                        placeholder="Email" 
                    />                    
                </div>
              </div>
              <div>
                <div style = {styles.inputContainer}>
                    <input
                        style={styles.input}
                        placeholder="Password" 
                    />                    
                </div>
                <div style = {styles.inputContainer}>
                    <input
                        style={styles.input}
                        placeholder="Confirm Password" 
                    />                    
                </div>
              </div>
            <MyBtn btnIcon = {<AiOutlineSketch />} btnTxt="Submit" />
            <MyForm />
        </form> 
     )
 };
 export default Form;

 const styles = {
     myForm: {
        //  display: 'flex',
        //  flexDirection:'column',
        //  justifyContent:'space-around',
        //  width:'30%',
        //  margin: '1%',
        //  padding: '2%',
        //  background:'whitesmoke',
        //  color:'pink',
        //  borderRadius:'2%'
     },
     input: {
         padding:'2%',
         margin: '1%'
     }

 }
