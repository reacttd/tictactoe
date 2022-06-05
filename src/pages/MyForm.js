import React from 'react';
import ButtonHover from '../components/buttons/ButtonHover';
import { FaMusic } from 'react-icons/fa';

const MyForm = props => {
    return (
        <form
            style={styles.myForm}
            onSubmit={props.addName}>
                <div style={styles.inputCont}>
                    <p style={styles.p}>
                        <label style={styles.col1} htmlFor="username">Username</label>
                            <input
                                style={styles.input}
                                placeholder="Username" />
                    </p>
                    <p style={styles.p}>
                        <label style={styles.col2} htmlFor= "email">Email</label>        
                            <input
                                style={styles.input}
                                placeholder="Email" />
                    </p>
                </div> 
                <div style={styles.inputCont}>               
                    <p style={styles.p}>
                        <label style={styles.col1} htmlFor="password1">Password</label>
                            <input
                                style={styles.input}
                                placeholder="Password" />
                    </p>
                    <p style={styles.p}>
                        <label style={styles.col2} htmlFor="password2">Password</label>
                            <input
                            style={styles.input}
                            placeholder="Confirm Password" />
                    </p>
                </div>
                {/* <p style={styles.p}>
                    <input
                        style={styles.input}
                        placeholder="State" />
                    <input
                        style={styles.input}
                        placeholder="Zip Code" />
                </p>
                <p style={styles.inputContainer}>
                    <input
                        style={styles.input}
                        placeholder="Email" />
                    <input
                        style={styles.input}
                        placeholder="Phone" />
                </p> */}
                
            <div style={styles.btndiv}>
                <ButtonHover btnIcon={<FaMusic />} btnText="Submit" /> 
            
            <span style={styles.actlogin}className='form-input-login'>
                Already have an account? Login
            </span>
            </div> 

            </form>
    );
}
export default MyForm;

const styles = {
    myForm: {
        // columns: 2,
        display: 'flex',
        flexWrap:'wrap',
        // flexDirection: 'column',
        justifyContent: 'space-evenly',
        // width: '100%',
        alignItems:'center',
        margin: '1%',
        padding: '2%',
        // fontSize:'22px',
        // overflow:'hidden',
        // height:'100vh',
        // width:'1000px',
        // width:'100%',
        backgroundColor: 'black',
        color: '#e1affd',
        boxShadow:'0 4px 8px 0 rgba(225, 175, 253, 1.0), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        
        borderRadius: '2%',
        gap: '20px'
    },
    inputCont:{
        display:'block'
    },
    p: {
        margin:'20px',
        // position: 'relative',
        display: 'flex',
        flexDirection:'column',
        // justifyContent: '',
        // alignItems: 'center',
        // fontSize: '18px'
    },
    actlogin:{
        fontSize:'16px'
    },
    btndiv:{
        display:'block',
        marginLeft:'8px'
        // flexDirection:'column'

    },
    col1:{
        // position:'absolute',
        // width:'150px',
        // left: 0,
        // top: 'Xpx'
        // display: 'block',
        // fontSize: '18px'
        // marginLeft:'6px'
    },
    col2: {
        // display:'block',
        // position:'absolute',
        // width:'150px',
        // left: 0,
        // top: 'Xpx' 
        // display:'flex',
        // fontSize: '18px'

        // float:'right'
    },
    input: {
        borderRadius:'4px',
        padding: '2%',
        boxShadow:'0 4px 8px 0 rgba(225, 175, 253, 1.0), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        // boxShadow:'1px 6px 1px 1px rgba(0, 0, 255, .1)'
        // marginLeft: '160px'
    }
}