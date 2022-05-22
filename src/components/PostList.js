import React from 'react';
// import MyBtn from '../buttons/MyBtn';
import { AiFillDelete } from 'react-icons/ai';
// import { FaEdit } from 'react-icons/fa';
// import ButtonSubmit from '../buttons/ButtonSubmit';
// import { RiDeleteBack2Fill } from 'react-icons/ri';

const PostList = ({myPost, id, removePost}) => {
        return (
          <li key={myPost.id} style={styles.list}>
            <img style={styles.img} src={myPost.aImg} alt={myPost.aAlt} />
            <h1>{myPost.post}</h1>
            <p>{myPost.aDescr}</p>            
              <button onClick={() => removePost(id)}>{<AiFillDelete />}</button>
          </li>
        );
      };
      
      export default PostList;


const styles = {
    list:{
      // display:'flex',
      // flexDirection:'column',
      // justifyContent:'flex-end',
      // width:'300px',
      // alignItems: 'flex-end',
      padding:'1%',
      // paddingLeft: '1%',
      // marginBottom: '30px',
      // marginTop:'3rem',
      fontSize:'16px',
      borderColor:'2px solid #e1affd',        
      lineHeight:'.1rem',
      backgroundColor:'whitesmoke',
      color:'rgba(225, 175, 253, 1.0)',
      // justifyContent:'space-between',
      // borderRadius:'5px',
      boxShadow:'0 4px 8px 0 rgba(225, 175, 253, 1.0), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
      textAlign:'center',
      // paddingLeft:'80rem'
        
    },
    img:{
      width: '300px',
    },
    button:{
      // display: 'flex',
      // flexDirection: 'row',
      // justifyContent: 'space-between',
      // alignItems: 'center',
      // width: '30px',
      // marginTop: '2px',
      // fontColor: 'rgba(225, 175, 253, 1.0)',
      // color:'rgba(225, 175, 253, 1.0)',
      boxShadow:'0 4px 8px 0 rgba(225, 175, 253, 1.0), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
      justifyContent: 'flex-end',

    },
    div:{
      // display: 'flex',
      // flexDirection: 'column',
      // justifyContent: 'space-between',
      // alignContent: 'space-between',
      // backgroundColor: 'none',
      // padding: '2rem',
      // color: '#e1affd',
      // fontSizee: '10rem',
      // marginTop: '8px',
      // margingBottom: '8px',
      // boxShadow:'0 4px 8px 0 rgba(225, 175, 253, 1.0), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    },
    // icon:{
    //   fontSizee: '10rem'
    // }
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