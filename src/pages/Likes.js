import React from "react";
import Simplify from '../images/simplify.png';

function Likes() {
    // const [pageTitle] = ['Likes'];
    return (
        <article style={styles.myArticle}>
            <img src={Simplify} alt="Trapstar Bam" />
            <h1>Simplify</h1>
            <p>Trapstar Bam at the Orange Peel</p>
            <div style={styles.buttons}>
                <button type="submit" style={styles.cardButton}>Share</button>
                <button type="submit" style={styles.cardButton}>Learn More</button>
            </div>
        </article>
    )
}
export default Likes;

const styles ={
    myArticle:{
        display:'flex',
        flexDirection: 'column',
        backgroundColor: 'lightgray',
        borderRadius: '4px',
        color: 'gray',
        width: '250px',
        padding: '1%',
        justifyContent: 'space-between',
        textAlign: 'center',
        margin: '5%'
   },
   buttons:{
    display: 'flex',
    flexDirection: 'row',
   },
   cardButton:{
       width: '30%',
       backgroundColor: 'black',
       borderRadius: '2%',
       color: 'aqua',
       padding: '5%',
   },
       pageTitle: {
        fontSize: '2rem',
    }
}


// const styles = {
//     container:{
//         display:'flex',
//         flexDirection:'column',
//         height:'100vh',
//         width:'99vh',
//         paddingLeft:'2%'
//     },
//     pgTitle: {
//         fontSize: '2rem',
//     }
// };