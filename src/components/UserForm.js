import React from 'react';
// import MyBtn from './buttons/MyBtn';
// import {FaAmbulance} from 'react-icons/fa';


const UserForm = props => {
    return UserForm = props => {
        <article key={props.id} style={styles.article}>
            <span>{props.firstName}</span>
            <span>{props.lastName}</span>
        </article>
    }
}
export default UserForm;

const styles = {
    article: {
        backgroundColor: 'pink',
        width: '40%',
        innerheight: '400px',
        marginTop: '1rem'
    }

}

    // return (
    //     <form
    //     style={styles.userForm}
    //         onSubmit={props.addName}>
    //             <div style={styles.inputContainer}>
    //                 <input
    //                 style={styles.input}
    //                 placeholder="First Name" />
    //                 <input
    //                 style={styles.input}
    //                 placeholder="Last Name" />
    //             </div>
    //             <div style={styles.inputContainer}>
    //                 <input
    //                 style={styles.input}
    //                 placeholder="Address" />
    //                 <input
    //                 style={styles.input}
    //                 placeholder="City" />
    //             </div>
    //             <div style={styles.inputContainer}>
    //                 <input
    //                 style={styles.input}
    //                 placeholder="State" />
    //                 <input
    //                 style={styles.input}
    //                 placeholder="Zip Code" />
    //             </div>
    //             <div style={styles.inputContainer}>
    //                 <input
    //                 style={styles.input}
    //                 placeholder="Email" />
    //                 <input
    //                 style={styles.input}
    //                 placeholder="Phone" />
    //             </div>
    //            <MyBtn btnIcon={<FaAmbulance />} btnText="Save Profile" style={styles.MyBtn} />
    //         </form>
    // )
// };
// export default UserForm;

//  const styles = {
//      userForm: {
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'space-around',
//         width: '30%',
//         height: '100%',
//         margin: '1%',
//         padding: '2%',
//         backgroundColor:'lightgrey',
//         color: 'purple',
//         borderRadius: '2%',
//         justifyContent: 'center',
//         alignItems: 'center'
//      },
//      input: {
//         padding: '2%',
//         margin: '1%',
//      },
//      MyBtn:{
//      display: 'flex',
//      flexDirection: 'row-end',
//      padding: '2%',
//      margin: '1%',
//      backgroundColor: 'white'
//     }

//  }