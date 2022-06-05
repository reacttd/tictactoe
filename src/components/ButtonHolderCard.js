// Author: Tisha Di Fresco
// Created: 5/19/22

import React from 'react';
import Blue3d from '../buttons/Blue3d';
// import Blue3d from './buttons/Blue3d';
// import BlueWolf from '../img/blue.jpeg';


const ButtonHolderCard  = props => {
    return (
    <article style={styles.btnCard}>
        <img style={styles.img} src={props.img} alt={props.alt} />
        <h1>{props.title}</h1>
        <p>{props.info}</p>
        <div style={styles.buttons}>
            <Blue3d type="submit" btnText="Share"/>
            <Blue3d type="submit" btnText="More"/>
        </div>
    </article>
    );
}
export default ButtonHolderCard;

const styles = {
    btnCard:{
        display:'flex',
        flexDirection:'column',
        // justifyContent:'flex-end',
        padding:'1%',
        borderRadius:'5px',
        alignItems:'center',
        // float:'right',
        marginTop:'.75rem',
        background:'black',
        color:'rgb(255,192,203)',
        width: '24.86%',
        height: '300px',
        
        boxShadow:'0 4px 8px 0 rgb(255,192,203), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        textAlign:'center',
        // margin:'5%'
    },
    h1:{
        fontSize:'12px'
    },
    ads:{
        display:'flex',
        flexDirection:'column',
        // justifyContent:'space-around',
        alignItems:'stretch',
        background:'black',


    },
    buttons:{
        display:'flex',
        displayDirection:'row',
        fontSize:'.65rem',
        padding:'2%',
        margin:'2px',
        marginBottom: "",
        color:'aqua',
        justifyContent:'space-between',
    }
}