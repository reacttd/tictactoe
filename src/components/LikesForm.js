import React, { useState } from 'react';
import MyBtn from "./buttons/MyBtn";
// import { BsSignpost } from 'react-icons/bs';
// import MyAvatar from "./MyAvatar";
// import AvatarIcon from '../images/tsbam.png';
// import { FaRegTrashAlt } from 'react-icons/fa';


function LikesForm({ addLikes }) {
    const [value, setValue] = useState("");

    const validateForm = e => {
        e.preventDefault();
        if (!value) return;
        addLikes(value);
        setValue("");
    }
    return (
        <form onSubmit={validateForm} style={styles.likesForm}>            
            <p>Add Post:</p>
            <input 
                type="text"
                style={styles.input}
                value={value}
                onChange={e => setValue(e.target.value)} 
            /> 
            <MyBtn className="p-4 border-red-500 bg-pink-100" btnText="Post"/>

        </form>
    );
}

export default LikesForm;

const styles = {
    likesForm:{
        // marginBottom:'4rem'
        // display:'flex',
        // flexDirection: 'row',
        // justifyContent: 'space-around',
        // alignItems: 'center',
        // background: 'whitesmoke',
        // marginRight: 40,
        // marginLeft: 40,
        // marginBottom: 30,
        // paddingTop: 30,
        // paddingBottom: 200,
        // // width: '50%',
        // height: 600,
        // borderRadius: '4px',
        // boxShadow:'0 4px 8px 0 rgba(225, 175, 253, 1.0), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',

    },
    // inputContainer:{
    //     display:'flex',
    //     flexDirection: 'column',
    //     padding: 40,
    //     width:'60%',
    //     height:'200px',  
    //     // fontSize:'8rem'  
    // },
    left:{
        // display: 'flex',
        // flexDirection: 'row',
        // alignItems: 'flex-start'

    },
    myAvatar:{
        // width: '7rem',
        // height: '7rem',
        // display: 'flex',
        // flexDirection: 'row',
        // justifyContent: 'flex start',
        // marginRight:'6px',
        // borderRadius:'50%',
        // boxShadow:'0 4px 8px 0 rgba(225, 175, 253, 1.0), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    },
    input:{
        // padding: 20,
        // marginBottom: '8%',
        fontSize: '24px',
        // width: '80%',
        // marginBottom: 30,
        // marginRight: '175px',
        borderRadius: '4px',
        boxShadow:'0 4px 8px 0 rgba(225, 175, 253, 1.0), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',

    },
    myBtn:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginLeft: '2px',
        marginBottom:10,
        boxShadow:'0 4px 8px 0 rgba(225, 175, 253, 1.0), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',

    },




}