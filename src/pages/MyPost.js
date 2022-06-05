import React, { useState } from 'react';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import TrapstarM from '../images/tsbamMamba.png';
import Simplify from '../images/simplify.png';
import Call from '../images/call.png';
import PostArticle from '../components/PostArticle';
// import MyBtn from '../buttons/MyBtn';

    const [myPost, setmyPost] = useState([
        { 
            post:'Rockstar Life', 
            aDescr: 'Trapstar Bam (feat CD Mumba)', 
            aImg: TrapstarM, 
            aAlt: 'Trapstar Bam and CD Mumba candid pic' 
        },
        { 
            post: 'Simplify', 
            aDescr: 'Trapstar Bam (new album cover)', 
            aImg: Simplify, 
            aAlt: 'Trapstar Bam in a television photo' 
        },
        { 
            post: 'Call Me Back',
            aDescr: 'Trapstar Bam (feat CD Mumba)', 
            aImg: Call, 
            aAlt: 'Trapstar Bam sitting on a wall' 
        },
    ]);

    const addPost = post => {
        const newPost = [...myPost, { post }];
        setmyPost(newPost);
    };

    const removePost = id => {
        const newPost = [...myPost];
        newPost.splice(id, 1);
        setmyPost(newPost);
    };
function MyPosts() {
      return (
        <section style={styles.container}>
            <h1>{pageTitle}</h1>
            <PostArticle />
            <PostForm
                addPost={addPost} 
            />
            {myPost.map((myPost, id) => (
                <PostList
                key={id}
                id={id}
                myPost={myPost}
                removePost={removePost} 
                />
                ))}
        </section>
    );
}

export default MyPosts;
 
const styles = {
    container:{
        display: 'flex',
        flexDirection:'column',
        alignItems: 'center',
        width:'50%',
        justifyContent:'center',
        height:'100vh',
        backgroundColor: 'whitesmoke',
        boxShadow:'0 4px 8px 0 rgba(225, 175, 253, 1.0), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        borderRadius:'2%'  
    },
    mypost:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'row-start'

    },
    myPost:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        margin:'10%'
    },
    pageTitle: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'row-start',
        fontSize: '2rem'
    },
    aImg:{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '',
        color: 'aqua'
    }
  }