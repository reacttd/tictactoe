import React from 'react';
// import { GiFlexibleLamp } from 'react-icons/gi';
// import Uselist from '../Uselist';
// import MyAvatar from './MyAvatar';
// import AvatarIcon from '../images/tsbam.png';
// import MagicButtons from '../buttons/MagicButtons';
import ButtonHover from '../buttons/ButtonHover';
// import ButtonCard from '../buttons/ButtonCard';
// import ButtonTwirl from '../buttons/ButtonTwirl';
// import ButtonStandard from '../buttons/ButtonStandard';
// import ButtonSmall from '../buttons/ButtonSmall';
// import PracticeForm from './PracticeForm';
// import ValidateInfo from './ValidateInfo';
// import { BiRightArrow } from 'react-icons/bi'


const FormSignup = () => {

  return (
    <section style={styles.container}>
        <form>
            <div>
                <label style={styles.col} for= "username">Username</label>
                    <input 
                        type="text"
                        name="username"
                        style={styles.row}
                        placeholder="Username"
                    />
                    <br />
                <label style={styles.col} for= "email">Email</label>
                    <input 
                        type="text"
                        name="email"
                        style={styles.row}
                        placeholder="Email"
                    />            
            </div>
            <div>
                <label style={styles.col} for= "password1">Password</label>
                    <input 
                        type="text"
                        name="password"
                        style={styles.row}
                        placeholder="Password"
                    />
                    &nbsp;
                <label style={styles.col} for= "password2">Password</label>
                    <input 
                        type="text"
                        name="email2"
                        style={styles.row}
                        placeholder="Confirm Password"
                    />            
            </div>
            <div>
                <ButtonHover btnText="Hover" /> 
            </div>
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
    flexDirection:'column',
    
    // justifyContent:'space-around',
    alignItems:'center',
    width:'60%',
    margin: '1%',
    padding: '2%',
    background:'whitesmoke',
    color:'black',
    borderRadius:'2%',
    borderColor: '2px solid pink'

},

col:{
   display: 'block',
//    // border: '1px solid #ccc',
//    boxSizing: 'border-box',
//    // display:'flex',
//    // flexDirection:'row',
//    marginBottom:'1%',
//    marginTop:'2%',
//    fontSize:'26px'
   // float:'left'
   // justifyContent:'center',
   // alignItems:'flex-start',
   // alignContent:'flex-end'
},
row:{
    display:"flex",
    flexDirection:'row',
}
// input: {
//    //  padding:'2%',
//    //  margin: '1%',
//     borderRadius:'10%',
//     borderColor: '2px solid pink',         
//    //  width: '25%',
//    padding: '12px 20px',
//    margin: '8px 0',
//    marginBottom:'1rem',
//    display: 'inline-block',
//    border: '1px solid #ccc',
//    boxSizing: 'border-box',
// },
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
    // actlogin:{
    //     marginTop: '12px'
    // },
    // btn:{
    //     display:'flex',
    //     flexDirection:'column',
    //     justifyContent:'space-betweem',
    //     alignItems:'center',
    //     padding: '8px',
    //     fontSize: '18px',       
    //     margin: '10px',
    //     backgroundColor: '',
    //     color: 'grey',
    //     marginTop: '12px',
    //     borderRadius:'4px'
    // }
}