// React Router
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/LOGO.png';
import {MdStreetview, MdOutlineFavorite} from 'react-icons/md';
import {GiShadowFollower} from 'react-icons/gi';
// import {BiRepost} from 'react-icons/bi';
import {GiPostStamp} from 'react-icons/gi';
import {AiFillDashboard} from 'react-icons/ai';
import { BiLogInCircle } from 'react-icons/bi'
import { FaUserEdit, FaWpforms, FaPlane } from 'react-icons/fa'

const NavDash = (props) => {
    return(        
        <nav style={styles.nav}>
            <p style={styles.fixIt}>
            <img src={Logo} alt="Trapstar Bam Logo" style={styles.myAvatar} />
            </p>
            <Link to="/" style={styles.Link}></Link>
            <Link to="/dashboard" style={styles.Link}><AiFillDashboard /></Link>
            <Link to="/views" style={styles.Link}><MdStreetview /></Link>
            <Link to="/likes" style={styles.Link}><MdOutlineFavorite /></Link>
            <Link to="/followers" style={styles.Link}><GiShadowFollower /></Link>
            {/* <Link to="/reposts" style={styles.Link}><BiRepost /></Link> */}
            <Link to="/post" style={styles.Link}><GiPostStamp /></Link>
            <Link to="/myform" style={styles.Link}><BiLogInCircle /></Link>
            <Link to="secondaryform" style={styles.Link}><FaUserEdit /></Link>
            <Link to="/Form" style={styles.Link}>{<FaWpforms />}</Link>
            <Link to="/Landing" style={styles.Link}>{<FaPlane />}</Link>
        </nav>
    );
}
export default NavDash;

const styles = {
    nav:{
        display: 'flex',
        flexDirection: 'column',
        // flexWrap:'wrap',

        // justifyContent: 'space-evenly',
        // fontSize:'22px',
        alignItems:'',
        // justifyContent: 'flex-start',
        height:'100vh',
        // width:'20%',
        padding: '2rem',
        backgroundColor:'black',
        color:'#e1affd',
        margin: '%',
        boxShadow:'0 4px 8px 0 rgba(225, 175, 253, 1.0), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        // width: '10rem'
        // borderRadius:'2px solid white',
        // borderColor: 'solid lightgrey',
    },
    fixIt:{
        display: 'flex',
        flexDirection: 'row'
        // padding:'1rem',
        // paddingBottom:'2rem',

    },
    myAvatar:{
        marginTop: '0%',
        width:'75px',
    },
    Link:{
        marginBottom:'16px',
        margin: '5%',
        padding:'2%',
        fontSize:'3rem',
        color:'#e1affd'    
    }
};