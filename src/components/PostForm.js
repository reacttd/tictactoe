import React, { useState } from 'react';
import MyBtn from '../buttons/MyBtn';



function PostForm({ addPost }) {
    const [value, setValue] = useState('');

    const validateForm = e => {
        e.preventDefault();
        if (!value) return;
        addPost(value);
        setValue('');
    };

    return (
        <form onSubmit={validateForm} style={styles.PostForm}>            
            <h1>Add Post:</h1>
            <input 
                type="text"
                style={styles.input}
                value={value}
                onChange={e => setValue(e.target.value)} 
            /> 
            {/* <div style={styles.myBtn}> */}
                <MyBtn btnText="Add Post"/>
            {/* </div> */}
        </form>
    );
}

export default PostForm;

const styles = {
    PostForm: {
        display: 'flex',
        displayDirection:'column',
        backgroundColor: 'whitesmoke',
        borderRadius: '2%',
        borderColor: '2px solid purple'
        
    },
    input: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    myBtn:{
        display: 'flex',
        flexDirection: 'column',
        padding: '1rem',
        backgroundColor: 'pink',
        color: 'aqua',
        margin: '2%'
    },
    btnText:{
        color: 'aqua'
    }

}
//     const [aName, setaName] = useState('')
//     const [aDescr, setaDescr] = useState('')
//     const [aImg, setaImg] = useState('')
//     const [aAlt, setaAlt] = useState('')
//     // const [aImg, setaImg] = useState('')

//     const aList = [
//         {
//             aName: 'Rockstar Life',
//             aDescr: 'Trapstar Bam (feat CD Mumba',
//             aImg: TrapstarM,
//             aAlt: 'Trapstar Bam and CD Mumba candid pic',
//         },
//         {
//             aName: 'Simplify',
//             aDescr: 'Trapstar Bam (new album cover)',
//             aImg: Simplify,
//             aAlt:'Trapstar Bam in a television photo',
//             avatarIcon:'./images/tsbamMamba.png',
//         },
//         {
//             aName: 'Call Me Back',
//             aDescr: 'Trapstar Bam (Butterflies Album)',
//             aImg: Call,
//             aAlt:'Trapstar Bam sitting on a wall',
//         }
//     ]


//     const submitHandler = (event) => {
//         event.preventDefault()
//         fetch('https://jsonplaceholder.typicode.com/posts', {
//             method: 'POST',
//             body: JSON.stringify({
//                 title: title,
//                 body: body,
//                 userId: userId,
//              }),
//             headers: {
//                 'Content-type': 'application/json; charset=UTF-8',
//             },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));
//     }
//     return (
//         <form onSubmit={submitHandler}>
//             <div>
//                 <input type='text' placeholder='User ID' value={userId} onChange={e => setUserId(e.target.value)} />
//             </div>
//             <div>
//                 <input type='text' placeholder='Title' value={title} onChange={e => setTitle(e.target.value)}/>
//             </div>
//             <div>
//                 <input type='text' placeholder='Body' value={body} onChange={e => setBody(e.target.value)} />
//             </div>
//             <button type="submit">Submit</button>
//         </form>
//     )
