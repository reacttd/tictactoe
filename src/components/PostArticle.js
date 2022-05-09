import react from 'react';
import Simplify from './images/simplify.png';

const PostArticle = props => {
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
export default PostArticle;

const styles ={
    myArticle:{
        display:'flex',
        flexDirection: 'column',
        backgroundColor: 'whitesmoke',
        borderRadius: '4px',
        color: 'aqua',
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
       backgroundColor: 'none',
       color: 'aqua',
       padding: '5%',
   }
}