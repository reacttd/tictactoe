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
        justifyContent:'space-around',
        backgroundColor:'black',
        color:'aqua',
        padding:'2%',
        marginBottom:'2%',
        fontSize:'14px'
    }
};