import React from "react";
// import styled from 'styled-components';

// Dummy Components
const MyBtn=props=>{
    return(
        <button style={styles.Btn}>
            {props.btnText}
        </button>
    );
};
export default MyBtn;

const styles = {
    Btn:{
        backgroundColor: 'whitesmoke',
        color: 'aqua',
        padding: '2%',
        width:'30px',
        borderRadius:'4%',
        // border:'2px solid pink',
        height:'20px'

    }
}
// const Btn=styled.button`
// width: 80px;
// display: flex;
// displayDirection: row:
// text-align: center;
// justify-content: space-around;
// background-color: whitesmoke;
// // color: aqua;
// padding: 20px;
// fontSize: 32px;
// // width: 75px;
// border-radius: 5px;
// border-color: 2px solid black;
// // color: pink;
// margin-top: 10px;
// margin-left: 1rem;`


