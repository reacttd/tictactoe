import React from "react";
import MyBtn from "../buttons/MyBtn";
// import ButtonCard from './buttons/ButtonCard';

const MyAds = props => {
    return(
        <div className="container"> 
        <h1 className="flex-col m-6 ml-2" style={styles.myads}>Advertisements</h1>
        <article className="flex-col m-2 justify-center items-center" style={styles.myAds}>
            <img className="flex-col mb-10" style={styles.img} src={props.img} alt={props.alt} />    
            <h1 className="mb-4 font-bold text-2xl">{props.title}</h1>
            <p className="mb-4">{props.info}</p>
            <div className="mb-4 space-x-4 bg-black" style={styles.buttons}>
                <MyBtn className="mb-4" btnText="Share" />
                <MyBtn className="mb-4" btnText="More" />
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
        // width:'20%',
        alignItems: 'center',
        padding:'px',
        marginTop: '10%',
        // marinRight: '80%',
        backgroundColor:'black',
        color:'#e1affd',
        fontSize:'16px',
        borderRadius: '5px',
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
        borderRadius:'5px',
        borderColor:'solid 2px #e1affd',
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
        // padding:'2%',
        // justifyContent:'space-between',
    }
}