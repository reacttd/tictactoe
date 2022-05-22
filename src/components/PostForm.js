import React, { useState } from 'react';
// import MyBtn from '../buttons/MyBtn';
// import { BsFilePost } from 'react-icons/bs';
// import { FaComment } from 'react-icons/fa';
// import { MdPostAdd } from 'react-icons/md';
// import ButtonSubmit from '../buttons/ButtonSubmit';

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
            <p>Add Post:</p>
            <input 
                type="text"
                style={styles.input}
                value={value}
                onChange={e => setValue(e.target.value)} 
            /> 
            {/* <ButtonSubmit btnSubmit="Post" /> */}

        </form>
    );
}

export default PostForm;

const styles = {
    PostForm: {
        // display: 'flex',
        // displayDirection:'column',
        // backgroundColor: 'black',
        // borderRadius: '8px',
        boxShadow:'0 4px 8px 0 rgba(225, 175, 253, 1.0), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        // height: '60%',
        width: '300px',
        color: 'rgba(225, 175, 253, 1.0)'
        // justifyContent: 'space-evenly',
        
    },
    input: {
        // display: 'flex',
        // flexDirection: 'row',
        // justifyContent: 'flex-start',
        // alignItems:'flex-start',

        // color: 'rgba(225, 175, 253, 1.0)'
        // flexDirection: 'column',
    },
    btnCard:{
        // display: 'flex',
        // flexDirection: 'row',
        // padding: '1rem',
        // backgroundColor: 'black',
        // color: 'aqua',
        // margin: '2%'
    },
    // sign: {
    //     fontSize: '2rem',
    //     color: '#e1affd',
    //     margin: '2%'
    // },
    // btnText:{
    //     color: 'aqua'
    // }

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
