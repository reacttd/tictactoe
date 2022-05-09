import React from "react";

// Dummy Components
const MyBtn=props=>{
    return(
        <button styles= {styles.button}>
            {props.btnText}
        </button>
    )
};
export default MyBtn;

const styles = {
    button: {
        // padding: '2%',
        // margin: '2%',
        // backgroundColor: 'blue'
    }
}