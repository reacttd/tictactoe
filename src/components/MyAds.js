import React from "react";
import MyBtn from "../buttons/MyBtn";
// import ButtonCard from './buttons/ButtonCard';

const MyAds = props => {
    return(
        <div> 
        <h1 style={styles.myads}>Advertisements</h1>
        <article style={styles.myAds}>
            <img style={styles.img} src={props.img} alt={props.alt} />    
            <h1>{props.title}</h1>
            <p>{props.info}</p>
            <div style={styles.buttons}>
                <MyBtn btnText="Share" />
                <MyBtn btnText="Learn More" />
            </div>    
        </article>
        </div>
    );
}
export default MyAds;

const styles = {
    myAds:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-around',
        width:'300px',
        alignItems: 'center',
        padding:'px',
        marginTop: '10%',
        // marinRight: '80%',
        backgroundColor:'whitesmoke',
        color:'#e1affd',
        fontSize:'16px',
        borderRadius: '2rem',
        borderColor:'2px solid #e1affd',        
        lineHeight:'.1rem',
        // borderRadius:'2px',
        // borderColor:'red',
        boxShadow:'0 4px 8px 0 rgba(225, 175, 253, 1.0), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        textAlign:'center',
    },
    myads:{
        fontSize: '12px',
    },
    img:{
        width: '290px',
        marginTop: '1%',
        marginBottom: '30px',
        borderRadius:'2rem',
        borderColor:'solid 2px #e1affd',
    },
    buttons:{
        display:'flex',
        displayDirection:'row',
        fontSize:'1rem',
        padding:'2%',
        margin:'2px',
        color:'aqua'
        // justifyContent:'space-between'
        // padding:'2%',
        // justifyContent:'space-between',
    }
}