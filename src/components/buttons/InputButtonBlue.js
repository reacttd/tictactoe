import React from 'react';
import { FaHome } from 'react-icons/fa';

const InputButtonBlue = (props) => {

    return(
        <div style={styles.searchCont}>
            <span style={styles.inputIcon}><FaHome /></span>
            <input
                type="text"
                style={styles.inputwithIcon}
                placeholder="HOME" 
            />
        </div>
    )
};
export default InputButtonBlue ; 

const styles = {
    searchCont:{
        // border: '1px solid #ddd',
		position: 'relative',
        display:'inline-flex',
		// alignItems: 'stretch',
		// width: '40px',
		// alignItems: 'center',
		marginLeft: '30px,'
        // flexDirection: 'row',
        // borderRadius: '4px',
        // width:'40%',
        // padding:'1px'
    },
    inputIcon:{
		position: 'relative',
        display:'inline-flex',
        background: 'black',
		color: '#6c98c9',
        padding: '10px',
        // display: 'flex',
        alignItems: 'center',
        fontSize: '1.5em',
		// mergeLeft: '20px'
    },
    inputwithIcon:{
        border: 'none',
        flex: 1,
        padding: '10px',
		// marginLeft: '20px',
    }
}
// import React from 'react';
// import { FaSearch } from 'react-icons/fa';




// // Dummy Components
// const InputButtonBlue=props=>{
//     return(
//         <div>
//             <div style={styles.searchCont}>                
//                 <span style={styles.inputIcon}><FaSearch/></span>
//                     <input
//                         type='text'
//                         style={styles.inputwithIcon}
//                         placeholder="Search"/>
//             </div>
//             <button>
//                 {props.btnText}
//             </button>
//         </div>

//     )
// };
// export default InputButtonBlue;

// const styles = {
//     searchCont: {
//         border:'1px solid #ddd',
//         display:'flex',
//         flexDirection:'row',
//         borderRadius:'2px',
//     },
//     inputIcon: {
//         background:'black',
//         color:'#e1affd',
//         padding:'2px',
//         display:'flex',
//         alignItems:'center',
//         // justifyContent:'center',
//         fontSize:'1rem'
//     },
//     inputwithIcon:{
//             border:'none',
//             flex:1,
//             padding:'10px',
//             marginLeft:'5%',
//     }
// }

// const Input = styled.input`
// color: #fff;
// background: linear-gradient((#ccc,#888);
// position: relative;
// border: none;
// &:hover {
//   background: linear-gradient
// }

// `

// `
// margin:5px;
//   width: 160px;
//   height: 70px;
//   color: #fff;
//   border-radius: 5px;
//   padding: 10px 25px;
//   font-family: 'Lato', sans-serif;
//   font-weight: 500;
//   font-size:16px;
//   background: transparent;
//   cursor: pointer;
//   transition: all 0.3s ease;
//   position: relative;
//   display: inline-block;
//    box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
//    7px 7px 20px 0px rgba(0,0,0,.1),
//    4px 4px 5px 0px rgba(0,0,0,.1);
//   outline: none;
//     // width: 50px;
//     // height: 20px;
//     // line-height: 42px;
//     padding: 0;
//     border: none;
//     background: #e1affd;
//     background: linear-gradient(0deg, rgba(225, 175, 253, 1.0) 0%, rgba(0, 0, 0, 0.19) 100%);
  
//   &:hover {
//     color: aqua;
//     background: transparent;
//      box-shadow:none;
//   }
//   &:before,
//   &&:after{
//     content:'';
//     position:absolute;
//     top:0;
//     right:0;
//     height:2px;
//     width:0;
//     background: #e1affd;
//     box-shadow:
//      -1px -1px 5px 0px #fff,
//      7px 7px 20px 0px #0003,
//      4px 4px 5px 0px #0002;
//     transition:400ms ease all;
//   }
//   &:after{
//     right:inherit;
//     top:inherit;
//     left:0;
//     bottom:0;
//   }
//   &:hover:before,
//   &:hover:after{
//     width:100%;
//     transition:800ms ease all;
//   }`