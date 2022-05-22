import React from 'react';
import MyBtn from '../buttons/MyBtn';
// import Simplify from './images/simplify.png';

const PostArticle = props => {
    return (
        <article style={styles.myArticle}>            
            <img src={myPost.aImg} alt={myPost.aAlt} />
            <h1>{myPost.post}</h1>
            <p>{myPost.aDescr}</p>
            <div style={styles.buttons}>
                <MyBtn myBtn="Edit" />
                <MyBtn myBtn="Delete" />
            </div>
        </article>
    )
}
export default PostArticle;

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
   buttons:{
    display: 'flex',
    flexDirection: 'row',
   },
   cardButton:{
       width: '30%',
       backgroundColor: 'none',
       color: 'aqua',
       padding: '5%',
   }
}