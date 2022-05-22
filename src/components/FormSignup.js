import React from 'react';
// import { GiFlexibleLamp } from 'react-icons/gi';
import Uselist from '../Uselist';
// import MyAvatar from './MyAvatar';
import AvatarIcon from '../images/tsbam.png';
// import ValidateInfo from './ValidateInfo';
// import { BiRightArrow } from 'react-icons/bi'


const FormSignup = (validate) => {
const { handleSubmit, errors } = Uselist(validate);

  return (
    <section style={styles.container}>
        <div style={styles.profileHeader}>
        <img src={AvatarIcon} alt="Dashboard" style={styles.myAvatar} />
                <h4 style={styles.h4}>tsbam</h4>
        </div>        
        <form className='form content-center' onSubmit={handleSubmit} style={styles.formContainer}>
            <div>
                <h1 className="text-5xl mb-8 text-center">Sign up</h1>
            </div>
            <div className='flex-left' style={styles.inputContainer}>
                <label style={styles.label} htmlFor username="username"
                className='form-label'>
                    Username
                </label>
                <input 
                    // type="text" 
                    // name="username" 
                    // className='form-input'
                    style={styles.input}
                    placeholder='Username' 
                    // value={values.username}
                    // onChange={handleChange}
                />                
                <input 
                    type="text" 
                    style={styles.input}
                    placeholder='Username' 
                    // value={values.username}
                    // onChange={handleChange}
                />
            </div>
            <div style={styles.inputContainer}>
            <label style={styles.label} htmlFor username="username"
                className='form-label'>
                    Username
                </label>

                    {errors.username && <p>{errors.username}</p>}
            </div>
            {/* </div> */}
            <div className='flex-right' style={styles.row}>
                <div>
                    <label style={styles.label} htmlFor name="email"
                    className='form-label'>
                        Email
                    </label>
                </div>
                <div>
                    <input 
                        type="email" 
                        name="email" 
                        className='form-input'
                        style={styles.input}
                        placeholder='Email' 
                        // value={values.email}
                        // onChange={handleChange}
                    />
                </div>
            </div>
            <div>
                <div className='form-inputs' style={styles.row}>
                    <label style={styles.label} htmlFor name="password"
                    className='form-label'>
                        Password
                    </label>
                </div>
                <div>
                    <input 
                        type="password" 
                        name="password" 
                        className='form-input'
                        style={styles.input}
                        placeholder='Password' 
                        // value={values.password}
                        // onChange={handleChange}
                    />
                </div>
            </div>
            <div>
                <div className='form-inputs' style={styles.row}>
                    <label htmlFor username="password2"
                    className='form-label'>
                        Confirm Password
                    </label>
                </div>
                <div>
                    <input 
                        type="password" 
                        name="password2" 
                        className='form-input'
                        style={styles.input}
                        placeholder='Confirm password' 
                        // value={values.password2}
                        // onChange={handleChange}
                    />
                </div>
            </div>
            <button className='form-input-btn' style={styles.btn} type="submit">
                Sign up
            </button>
            <span style={styles.actlogin}className='form-input-login'>
                Already have an account? Login
            </span>   
        </form>
    </section>     
  );
}

export default FormSignup;

const styles = {
    container:{
    display: 'flex',
    flexDirection:'row',
    
   //  justifyContent:'space-around',
    alignItems:'center',
    width:'40%',
    margin: '1%',
    padding: '2%',
    background:'whitesmoke',
    color:'black',
    borderRadius:'2%',
    borderColor: '2px solid pink'

},
inputContainer: {
   // display:'flex',
   display:'inline-block',
   // flexDirection:'row',
   // borderRadius:'10rem',
   alignItems:'center',
   margin:'2%',
   borderColor: '2px solid pink'
},
label:{
   display: 'block',
   // border: '1px solid #ccc',
   boxSizing: 'border-box',
   // display:'flex',
   // flexDirection:'row',
   marginBottom:'1%',
   marginTop:'2%',
   fontSize:'26px'
   // float:'left'
   // justifyContent:'center',
   // alignItems:'flex-start',
   // alignContent:'flex-end'
},
input: {
   //  padding:'2%',
   //  margin: '1%',
    borderRadius:'10%',
    borderColor: '2px solid pink',         
   //  width: '25%',
   padding: '12px 20px',
   margin: '8px 0',
   marginBottom:'1rem',
   display: 'inline-block',
   border: '1px solid #ccc',
   boxSizing: 'border-box',
},
    // formContainer:{ 
    //     display: 'flex',
    //     flexWrap:'wrap',
    //     flexDirection: 'column',
    //     // justifyContent:'flex-start',
    //     alignItems:'flex-start',
    //     backgroundColor:'black',
    //     padding:'2%',
    //     color:'pink',
    //     fontSize: '26px',
    //     boxShadow:'0 4px 8px 0 pink, 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    //     // margin:'2%',
    //     borderRadius:'4px',
    //     width:'100%'
    // },
    // row:{
    //     // display: 'flex',
    //     // flexDirection:'row',
        

    // },
    // input:{
    //     padding:'2%',
    //     margin:'4%',
    //     borderRadius:'4px'
    // },
    actlogin:{
        marginTop: '12px'
    },
    btn:{
    
        padding: '8px',
        fontSize: '18px',       
        marginBottom: '2px',
        backgroundColor: 'pink',
        color: 'grey',
        marginTop: '12px',
        borderRadius:'4px'
    }
}