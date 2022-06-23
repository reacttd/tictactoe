// import React, { useState } from "react";
// import "./button-group.css";

// const ButtonGroupPrimaryBlue = ({ buttons, doSomethingAfterClick }) => {
//   const [clickedId, setClickedId] = useState(-1);

//   const handleClick = (event, id) => {
//     setClickedId(id);
//     doSomethingAfterClick(event);
//   };

//   return (
//     <div style={styles.btn}>
//       {buttons.map((buttonLabel, i) => (
//         <button
//           key={i}
//           name={buttonLabel}
//           onClick={(event) => handleClick(event, i)}
//           className={i === clickedId ? "customButton active" : "customButton"}
//         >
//           {buttonLabel}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default ButtonGroupPrimaryBlue;



// import React from "react";

// const ButtonGroup = () => {
//   return (
//     <div style={styles.container}>
//       <button style={styles.btn}>One</button>
//       <button style={styles.btn}>Two</button>
//       <button style={styles.btn}>Three</button>
//     </div>
//   );
// };

// export default ButtonGroup;

// const styles ={
//     btn:{
//         display: 'inline-flex',
//         gap: '4px',
//         borderRadius: '8px',
//         // flexDirection: 'row',
//         // flexWrap: 'wrap',
//         // justifyContent: 'space-around',

//         margin: '10px',
//         // padding: '20px 40px',
//         background: '#7fccde',
//         color:'#FFF',
        
        
//     }
// }