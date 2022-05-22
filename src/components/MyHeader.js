import React from 'react';
import ImageUrl from '../images/tsbam.png';
import MyAvatar from './MyAvatar';
// import {FiVideo} from 'react-icons/fi';
import {FaSearch} from 'react-icons/fa';
// import {IoSettingsSharp} from 'react-icons/io';
import {AiOutlineLogout, AiFillSetting} from 'react-icons/ai'
import Logo from '../images/LOGO.png';
import MyLogo from './MyLogo';

const MyHeader=props=>{
    return(
        <header style={styles.myHeader}>
            <div style={styles.left}>
                <MyLogo IconImg={Logo} />
                <h1>Trapstar Bam</h1>
            </div>
            <div style={styles.searchCont}>
                <span style={styles.inputIcon}><FaSearch/></span>
                <input
                    type='text'
                    style={styles.inputwithIcon}
                    placeholder="Search"/>
            </div>
            <div style={styles.rightSide}>
                <button style={styles.rightIcons}><AiOutlineLogout/></button>
                <button style={styles.rightIcons}><AiFillSetting/></button>
                {/* <button style={styles.rightIcons}><FaMusic/></button> */}
                {/* <button style={styles.rightIcons}><FiVideo/></button> */}
                
                <MyAvatar AvatarIcon={ImageUrl} avatarAlt="Avatar Image" name="tsbam" style={styles.ImageUrl}/>
            </div>
        </header>
    )
}
export default MyHeader;

const styles={
    myHeader:{
        height:'200px',
        backgroundColor:'black',
        color:'#e1affd',
        fontSize:'24px',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:'1%',
        boxShadow:'0 4px 8px 0 rgba(225, 175, 253, 1.0), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    },
    IconImg:{
        width:'50px',
        height:'50px',
        borderRadius:'50%',
    },

    left:{
        display:'flex',
        flexDirection:'row',
        alignContent:'center',
        fontFamily:'Dancing Script',
        fontSize:'12px',
        marginTop:'4px',
        marginLeft:'2%',
        marginBottom:'1.5%',
        width:'5rem',
        height:'5rem'
    },
    Logo:{
        borderRadius:'50%',
        width:'70px',
        height:'70px',
        marginTop:'25%',
        // marginRight:'4%',
        justifyContent:'space-between',
        // backgroundColor:'white',
        // alignItems:'center'
    },
    searchCont:{
        border:'1px solid #ddd',
        display:'flex',
        flexDirection:'row',
        borderRadius:'2px',
        // height:'50%',
        // width:'50%'
    },
    inputIcon:{
        background:'black',
        color:'#e1affd',
        padding:'2px',
        display:'flex',
        alignItems:'center',
        // justifyContent:'center',
        fontSize:'1rem'
    },
    inputwithIcon:{
        border:'none',
        flex:1,
        padding:'10px',
        marginLeft:'5%',
    },
    rightSide:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        // margin:'2px',
        alignContent:'center',

        // marginRight:'3%',
        // marginLeft:'3%'
    },
    rightIcons:{
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'space-around',
        justifyItems: 'space-between',
        // width: '50%',
        background:'none',
        color: '#e1affd',
        margin: '5px',
    }, 
    ImageUrl: {
        
    }
}

