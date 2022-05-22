import React from "react";
// import styled from 'styled-components';

// Dummy Component
const ButtonCard = props => {
    return(
        <button style={styles.purpBtn}>
            {props.btnText}
        </button>
    );
}
export default ButtonCard;

const styles={
    purpBtn:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-evenly',
        backgroundColor:'black',
        boxShadow:'0 4px 8px 0 rgba(225, 175, 253, 1.0), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        color:'aqua',
        padding:'10px',
        marginBottom:'2%',
        fontSize:'14px'
    }
};