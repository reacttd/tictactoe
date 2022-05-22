import React from "react";
// import MyBtn from "../buttons/MyBtn";
// import Call from "../images/call.png";
// import { FaEdit } from 'react-icons/fa';
import { FaRegTrashAlt } from 'react-icons/fa';
// import AvatarIcon from '../images/tsbam.png';


const LikesList = ({myLikes, id, removeLikes}) => {
    return(
        <article key={myLikes.id} style={styles.border} className="flex-col-2 justify-start items-center text-center w-30 bg-black rounded-md space-y-4 mb-10 mt-6 overflow-hidden">
        <img className="m-8 w-64 mb-2 font-bold rounded-md bg-none" src={myLikes.aImg} alt={myLikes.aAlt} />
        <h1 className="justify-start mb-2 text-3xl">{myLikes.likes}</h1>
        <p className="text-xl bg-b">{myLikes.aDescr}</p>            
          <button className="pb-4 text-2xl" onClick={() => removeLikes(id)}>{<FaRegTrashAlt />}</button>
      </article>
    );
  };
export default LikesList;

const styles = {
    border:{
        boxShadow:'0 4px 8px 0 rgba(225, 175, 253, 1.0), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    }
}
// const styles={
//     list:{
//     display:'flex',
//     flex: 2,
//       flexDirection:'column',
//       justifyContent: 'center', 
//       alignItems: 'center',  
//         width:'300px',
//       fontSize:'12px',
//       font:'bold',
//       backgroundColor: 'whitesmoke',
//       padding: '2%',
    //   marginLeft: 210,
    //   marginRight: 210,
    //   marginTop: 30,
    //   overflow:'hidden',
        // height:'100vh',
        // inlineSize: '400px',
        // justifyContent: 'space-between',
//   container:{
    // display:'flex',
    // flexDirection:'column',
    // justifyContent: 'space-between',

    // background:'whitesmoke',
    // color: '#E0AFFD',
    // overflow:'hidden',
        // marginRight: 90,
        // marginLeft: 120,
        // height:'100vh',
        // backgroundColor: 'whitesmoke',
        // height: '100vh'
    //     boxShadow:'0 4px 8px 0 rgba(225, 175, 253, 1.0), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    //     borderRadius: '4px'
    // },
    // myAvatar:{
    //     width: '7rem',
    //     height: '7rem',
    //     display: 'flex',
    //     flexDirection: 'row',
    //     justifyContent: 'flex start',
    //     marginRight:'6px',
    //     borderRadius:'50%',
    //     boxShadow:'0 4px 8px 0 rgba(225, 175, 253, 1.0), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    // },
    // img:{
        // display: 'flex',
        // flexDirection: 'column',
        // justifyContent: 'space-between',
    //     marginTop: 20,
    //     width: '300px',
    //     boxShadow:'0 4px 8px 0 rgba(225, 175, 253, 1.0), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    // },
    // buttons:{
    //     display:'flex',
    //     flexDirection:'row',
    //     justifyContent:'space-evenly',
    //     margin: '8px',
    //     // maginRight: '1rem',
    //     marginRight: '1%',
    //     marginLeft: '1%',
        // boxShadow:'0 4px 8px 0 rgba(225, 175, 253, 1.0), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        // alignContent: 'space-between'
        // backgroundColor: 'black'
//     }
// }
