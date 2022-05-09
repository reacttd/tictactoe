import React from 'react';
import MyBtn from '../buttons/MyBtn';
import { AiFillDelete } from 'react-icons/ai';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBack2Fill } from 'react-icons/ri';

const PostList = ({myPost, id, removePost}) => {

        return (
          <article key={myPost.id} style={styles.list}>
            <p>{myPost.post}</p>
            <p>{myPost.aDescr}</p>
            <p>{myPost.aImg}</p>
            <p>{myPost.aAlt}</p>
            <button onClick={() => removePost(id)}><AiFillDelete /></button>
            {/* <div style={styles.buttons}> */}
                <MyBtn btnText="Edit"/><FaEdit />
                <MyBtn btnText="Delete" /><RiDeleteBack2Fill/>
            {/* </div> */}
          </article>
        );
      };
      
      export default PostList;


const styles = {
    list:{
        padding: '0.5%',
        marginTop: '0.5%',
        fontSize: '1.25em',
        fontWeight: 'bold',
        cursor: 'pointer'
    },
    myBtn:{
      // display: 'flex',
      // flexDirection: 'row',
      // justifyContent: 'space-between'

    },
    buttons:{
      // display: 'flex',
      // flexDirection: 'row',
      // alignContent: 'space-between',
      // backgroundColor: 'whitesmoke',
      // padding: '2rem',

    }
}

// import { useState, useEffect } from "react";

// export const PostList = () => {
//     const [posts, setPosts] = useState([])

//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/posts')
//             .then((response) => response.json())
//             .then((data) => setPosts(data))
//             .catch((err) => {
//                 console.log(err)
//             })
//     }, [])


// return <div>
//     <ul>
//         {
//             posts.map((post) => {
//                 return <li key={post.id}>{post.title}</li>
//             })
//         }
//     </ul>
// </div>

// }