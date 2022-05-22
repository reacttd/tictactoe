// import React from 'react'
// import FormSignup from './FormSignup'

// function Form-copy() {
//   return (
//     <div>
//         <FormSignup />
//     </div>
//   )
// }

// export default Form;

// import { useState } from 'react';
// import ButtonCard from '../buttons/ButtonCard'; 

// export const Form = () => {
//     const [username, setUsername] = useState('')

//     const handleSubmit = (event) => {
//         event.preventDefault()
//         alert(`Form data is ${username}`)
//     }
//     return (    
//     <form onSubmit={handleSubmit}>
//         <div>
//             <label>Username</label>
//             <input type="text" 
//             value={username} 
//             onChange={(event) => setUsername(event.target.value)} 
//             />
//         </div>
//         <ButtonCard type="submit" styles={styles.btnCard}/>
//     </form>
//     ) 
// }
