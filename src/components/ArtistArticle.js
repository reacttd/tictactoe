import React from "react";
import MyBtn from "./buttons/MyBtn";

const ArtistArticle=props=>{
    return(
        <article style={styles.myArticle}>
            <img src={props.val.aImg} alt={props.val.aAlt} />
            <h1>{props.val.aName}</h1>
            <p>{props.val.aDescr}</p>
            <div style={styles.buttons}>
                <MyBtn myBtn="Edit" />
                <MyBtn myBtn="Delete" />
            </div>
        </article>
    );
}
export default ArtistArticle

const styles={
    myArticle:{
        display:'flex',
        flexDirection:'column',
        width:'250px',
        padding:'1%',
        backgroundColor:'black',
        color:'pink',
        justifyContent:'space-between',
        borderRadius:'5px',
        boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        textAlign:'center'
    },
    // buttons:{
    //     display:'flex',
    //     flexDirection:'row',
    //     justifyContent:'center'
    
    cardButton:{
        width:'30%',
        backgroundColor:'none',
        color:'aqua',
        padding:'5%'
    }
}
