import React from "react";
 const MyForm = props => {
     return (
         <form
            style={styles.myForm}
            onSubmit = {props.addName}>
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
            <MyBtn btnIcon = {<AiOutlineSketch />} btnTxt="Submit" />
        </form>
     )
 };
 export default MyForm;

 const styles = {
     myForm: {
         display: 'flex',
         flexDirection:'column',
         justifyContent:'space-around',
         width:'30%',
         margin: '1%',
         padding: '2%',
         background:'whitesmoke',
         color:'pink',
         borderRadius:'2%'
     },
     input: {
         padding:'2%',
         margin: '1%'
     }

 }