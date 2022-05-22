import React, { useState } from 'react';
import BamsWorld from '../images/bamsworld.JPG';
import MTV from '../images/mtv.JPG';
import TrapstarM from '../images/tsbamMamba.png';
import LikesList from '../components/LikesList';
import LikesForm from '../components/LikesForm';
import AvatarIcon from '../images/tsbam.png';

function Likes() {
    const [pageTitle] = ['Likes'];

    const [myLikes, setmyLikes] = useState([
        
        { 
            likes:'Rockstar Life', 
            aDescr: 'Trapstar Bam (feat CD Mumba)', 
            aImg: TrapstarM, 
            aAlt: 'Trapstar Bam and CD Mumba candid pic' 
        },
        { 
            likes: 'Bams World', 
            aDescr: 'Trapstar Bam (new album cover)', 
            aImg: BamsWorld, 
            aAlt: 'Trapstar Bam in a television photo' 
        },
        { 
            likes: 'MTV',
            aDescr: 'Trapstar Bam (feat CD Mumba)', 
            aImg: MTV, 
            aAlt: 'Bam with MTV' 
        },
    ]);

    const addLikes = likes => {
        const newLikes = [...myLikes, { likes }];
        setmyLikes(newLikes);
    };

    const removeLikes = id => {
        const newLikes = [...myLikes];
        newLikes.splice(id, 1);
        setmyLikes(newLikes);
    };


    return (
            <section style={styles.formcontainer}>
                <h1 className='items-start font-bold text-3xl'>{pageTitle}</h1>
                <div style={styles.formcontainer}className='container flex-row flex-2 w-full h-1/4 justify-around items-center bg-gray-100 rounded-md mb-2'>
                <img className="w-20 h-20 mt-5" src={AvatarIcon} alt="Dashboard" style={styles.myAvatar} />
                <h4 style={styles.h4}>tsbam</h4>
                    <LikesForm 
                    addLikes={addLikes}/>
                </div>
                
                {myLikes.map((myLikes, id) => (
                    <LikesList
                        key={id}
                        id={id}                        
                        myLikes={myLikes}
                        removeLikes={removeLikes} 
                    />        
                ))}
            </section>        
    );
}

export default Likes;

const styles = {
    formcontainer:{
        display:'flex',
        flex: 2,
        flexDirection:'column',
        // height:'100vh',
        alignItems:'center',
        width:'100%',
        height: '30%',
        boxShadow:'0 4px 8px 0 rgba(225, 175, 253, 1.0), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        
        // paddingLeft:'2%'
    },

    pgTitle: {
        // fontSize: '2rem',
        // textAlign: 'left'
    },
    listContainer:{
        alignItems: 'center'
        // display: 'flex',
        // flex:2,
        // flexDirection: 'column',
        // justifyContent:'center',
        // alignContent: 'center',
        // width: '100rem'

    }
};



// function Likes() {
//     // const [pageTitle] = ['Likes'];
//     return (
//         <article style={styles.myArticle}>
//             <div>
//                 <img src={AvatarIcon} alt="Dashboard" style={styles.myAvatar} />
//             </div>
//             <PostForm />
            
        // {/* <img src={Simplify} style={styles.img} alt="Trapstar Bam" />
            // <h1>Simplify</h1>
            // <p>Trapstar Bam (new album cover)</p>
            // <div style={styles.buttons}>
            // <MyBtn btnText="Edit"/><FaEdit />
            // <MyBtn />< AiFillDelete/>
            // </div>
            // <img src={TrapstarM} width="340px" alt="Trapstar Bam" />
            // <h1>Rockstar Life</h1>
            // <p>Trapstar Bam (feat CD Mumba)</p>
            // <div style={styles.buttons}>
            //     <button type="submit" style={styles.cardButton}>Share</button>
            //     <button type="submit" style={styles.cardButton}>Learn More</button>
            // </div>
            // <img src={Call} alt="Trapstar Bam" />
            // <h1>Call Me Back</h1>
            // <p>Trapstar Bam sitting on a wall</p>
            // <div style={styles.buttons}>
            //     <button type="submit" style={styles.cardButton}>Share</button>
            //     <button type="submit" style={styles.cardButton}>Learn More</button>
            // </div>
        // {/* <ButtonCard style={styles.btnCard}/><MdPostAdd/> */}
            
//         </article>
        
//     )
// }
// export default Likes;

// const styles={
//     myArticle:{
//         display:'flex',
//         flexDirection:'row',
//         justifyContent:'space-between',
//         // alignItems: 'center',
//         width:'50%',
//         alignItems: 'center',
//         padding:'32px',
//         marginTop: '10%',
//         // marinRight: '80%',
//         backgroundColor:'whitesmoke',
//         color:'#e1affd',
//         fontSize:'16px',
//         borderRadius: '2rem',
//         borderColor:'2px solid #e1affd',        
//         lineHeight:'.1rem',
//         // borderRadius:'2px',
//         // borderColor:'red',
//         boxShadow:'0 4px 8px 0 rgba(225, 175, 253, 1.0), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
//         textAlign:'left',
//         // overflow:'scroll',
//         marginLeft: '25%'
//     },
//     myAvatar:{
//         fontSize: '32px',
//         width: '5rem',
//         height: '5rem',
//         borderRadius: '50%',
//         boxShadow:'0 4px 8px 0 rgba(225, 175, 253, 1.0), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
//         display: 'flex',
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'flex-start',
//         marginRight: '10px'

//     },
//     img:{
//         // width: '290px',
//         marginTop: '1%',
//         marginBottom: '30px',
//         borderRadius:'1rem',
//         borderColor:'solid 2px #e1affd',
//         // backgroundColor:'black'
//     },
//     buttons:{
//         display:'flex',
//         displayDirection:'row',
//         fontSize:'1rem',
//         padding:'2%',
//         margin:'2px',
//         color:'aqua'
//     },
//     pageTitle:{

//     }
// }
    

// const styles ={
//     myArticle:{
//         display:'flex',
//         flexDirection: 'column',
//         backgroundColor: 'lightgray',
//         borderRadius: '2%',
//         color: 'gray',
//         width: '250px',
//         padding: '1%',
//         justifyContent: 'space-between',
//         textAlign: 'center',
//         margin: '5%'
//    },
//    buttons:{
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent:'space-evenly',
//     borderRadius:'2%'
//    },
//    cardButton:{
//        width: '30%',
//        backgroundColor: 'black',
//        borderRadius: '2%',
//        color: 'aqua',
//        padding: '2%',
//    },
//        pageTitle: {
//         fontSize: '2rem',
//     }
// }


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