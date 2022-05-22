// import React from 'react';
// // import { GiFlexibleLamp } from 'react-icons/gi';
// import Uselist from '../Uselist';
// // import ValidateInfo from './ValidateInfo';
// // import { BiRightArrow } from 'react-icons/bi'

// const FormSignup2 = (validate) => {
// const { handleChange, values, handleSubmit } = Uselist(validate);

//   return (
//     <div className='form-content-right'>
        
//         <form className='form' onSubmit={handleSubmit} style={styles.formContainer}>
            {/* <h1 className="text-5xl mb-8">Sign up</h1> */}
            {/* <div className='form-inputs' style={styles.row}>
                <label htmlFor username="username"
                className='form-label'>
                    Username
                </label>
                <input 
                    type="text" 
                    name="username" 
                    className='form-input'
                    style={styles.input}
                    placeholder='Enter your username' 
                    value={values.username}
                    onChange={handleChange} */}
                {/* /> */}
                {/* {errors.username && <p>{errors.username}</p>} */}
            {/* </div>
            <div className='form-inputs'style={styles.row}>
                <label htmlFor username="email"
                className='form-label'>
                    Email
                </label>
                <input 
                    type="email" 
                    name="email" 
                    className='form-input'
                    style={styles.input}
                    placeholder='Email' 
                    value={values.email}
                    onChange={handleChange}
                />
            </div> */}
//             <div className='form-inputs' style={styles.col}>
//                 <label name ="password"
//                 className='form-label'>
//                     Password
//                 </label>
//                 <input 
//                     type="password" 
//                     name="password" 
//                     className='form-input'
//                     style={styles.input}
//                     placeholder='Password' 
//                     value={values.password}
//                     onChange={handleChange}
//                 />
//             </div>
//             <div className='form-inputs' style={styles.col}>
//                 <label name="password2"
//                 className='form-label'>
//                     Confirm Password
//                 </label>
//                 <input 
//                     type="password" 
//                     name="password2" 
//                     className='form-input'
//                     style={styles.input}
//                     placeholder='Confirm password' 
//                     value={values.password2}
//                     onChange={handleChange}
//                 />
//             </div>
//             {/* <button className='form-input-btn' style={styles.btn} type="submit">
//                 Sign up
//             </button>
//             <span style={styles.actlogin}className='form-input-login'>
//                 Already have an account? Login
//             </span>    */}
//         </form>
//     </div>     
//   );
// }

// export default FormSignup2;

// const styles = {
//     formContainer:{ 
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent:'flex-end',
//         // alignItems:'flex-start',
//         // backgroundColor:'black',
//         padding:'2%',
//         color:'pink',
//         fontSize: '26px',
//         boxShadow:'0 4px 8px 0 pink, 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
//         // margin:'2%',
//         borderRadius:'4px',
//         width:'100%'
//     },
//     input:{
//         padding:'2%',
//         margin:'4%',
//         borderRadius:'4px'
//     },
//     actlogin:{
//         marginTop: '12px'
//     },
//     btn:{
    
//         padding: '8px',
//         fontSize: '18px',       
//         marginBottom: '2px',
//         backgroundColor: 'pink',
//         color: 'grey',
//         marginTop: '12px',
//         borderRadius:'4px'
//     }
// }