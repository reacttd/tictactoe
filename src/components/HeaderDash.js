
import React from 'react';
import { Link } from 'react-router-dom';
import {MdNotifications} from 'react-icons/md';
import Logo from '../images/LOGO.png';
import AvatarIcon from '../images/tsbam.png'

const HeaderDash = props => {
    return(
        <header style={styles.container} key={props.id}>
            <div style={styles.left}>
                <img src={Logo} alt="Trapstar Bam Logo" style={styles.Logo} />
                <h1>Trapstar Bam</h1>                
            </div>
            <div style={styles.rightSide}>
                <MdNotifications style={styles.notify}/>
                <Link to="/Settings">
                <img src={AvatarIcon} alt="Dashboard" style={styles.myAvatar} />
                </Link>
                <h4 style={styles.h4}>tsbam</h4>
            </div>            
        </header>
    )
}
export default HeaderDash;

const styles={
   container:{
        height:'150px',
        backgroundColor:'black',
        color:'#e1affd',
        fontSize:'24px',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:'1%',
        boxShadow:'1px 6px 1px 1px rgba(0, 0, 255, .1)'
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
        height:'5rem',
        color: '#E0AFFD' 
    },
    Logo:{

        width:'70px',
        height:'70px',
        justifyContent:'space-between',
    },
    searchCont:{
        border:'1px solid #ddd',
        display:'flex',
        flexDirection:'row',
        borderRadius:'2px',
    },
    inputIcon:{
        background:'black',
        color:'#e1affd',
        padding:'2px',
        display:'flex',
        alignItems:'center',
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
        alignContent:'center',
    },
    myAvatar:{
        display:'flex',
        flexDirection:'row',
        alignItems:'row-end',
        width:'75px',
        height:'75px',
        borderRadius:'50%',
        marginRight:'3px'
    },
    rightIcons:{
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'space-around',
        justifyItems: 'space-between',
        background:'none',
        color: '#e1affd',
        margin: '5px',
    },
    notify:{
        marginRight: '10px'
    },
    h4:{
        color: '#E0AFFD',
        margin:'1rem'
    }
}