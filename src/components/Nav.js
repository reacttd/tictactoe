import React from "react";
// React Router
import { Link } from 'react-router-dom';
// import {SiFiles} from 'react-icons/si';
import Logo from '../images/LOGO.png';
import {MdStreetview} from 'react-icons/md';
import {FcLike} from 'react-icons/fc';
import {GiShadowFollower} from 'react-icons/gi';
import {BiRepost} from 'react-icons/bi';
import {AiFillDashboard} from 'react-icons/ai';

// import ButtonDash from "./buttons/ButtonDash";

const Nav = (props) => {
    return(        
        <nav style={styles.nav}>
            <p style={styles.padding}>
            <img src={Logo} alt="Trapstar Bam Logo" style={styles.myAvatar} />
            </p>
            <Link to="/dashboard" style={styles.padding}><AiFillDashboard />Dashboard</Link>
            <Link to="/views" style={styles.padding}><MdStreetview />Views</Link>
            <Link to="/likes" style={styles.padding}><FcLike />Likes</Link>
            <Link to="/followers" style={styles.padding}><GiShadowFollower />Followers</Link>
            <Link to="/reposts" style={styles.padding}><BiRepost />Reposts</Link>
            

            
            {/* <button style={styles.button}>Messages</button>
            <button style={styles.button}>Watch</button> */}
        </nav>
    );
}
export default Nav;

const styles = {
    nav:{
        display: 'flex',
        flexDirection: 'column',
        fontSize:'1.5rem',
        alignItems: 'center',
        // justifyContent:'space-around',
        height:'100vh',
        padding: '1rem',
        backgroundColor:'black',
        color:'#e1affd'
    },
    padding:{
        padding:'1rem',
        paddingBottom:'2rem'
    },
    myAvatar:{
        width:'75px',

    }

};
