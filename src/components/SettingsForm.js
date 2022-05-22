import React from 'react';
// import { FaPencilAlt } from 'react-icons/fa';
// import { GiMusicalNotes, GiMusicalScore } from 'react-icons/gi';
// import { FaMusic } from 'react-icons/fa';

const SettingsForm = (props) =>{
    return (         
        <section style={styles.container}>
            <div style={styles.profileHeader}>
                <img style={styles.avatar} src={props.avatar} alt='alt avatar' />
                <h1 style={styles.h1}>{props.username}</h1>
                {/* <div>
                    <button style={styles.icon}><FaMusic /></button>
                    <button style={styles.icon}><FaMusic /></button>
                    <button style={styles.icon}><FaMusic /></button>
                    <button style={styles.icon}><FaMusic /></button>
                    <button style={styles.icon}><FaMusic /></button>
                </div>     */}
            </div>
            <form>
                <div>
                    <div style={styles.row}>                    
                        <div style={styles.row}>
                            <label 
                                style={styles.label}>First Name
                            </label>
                        <div style={styles.row}>
                            <input type='text' 
                                style={styles.myInput} 
                                value={props.fName} 
                                placeholder='First Name'
                                readOnly 
                            />
                        </div>
                        </div>
                        <div style={styles.row}>
                            <label 
                                style={styles.label}>Last Name
                            </label>
                        <div style={styles.row}>
                            <input type='text' 
                            style={styles.myInput} 
                            value={props.lName} 
                            placeholder='Last Name' 
                            readOnly
                            />
                        </div>
                        </div>
                    </div>
                    <div style={styles.row}>
                        <div style={styles.row}>
                            <label 
                                style={styles.label}>Email
                            </label>
                        <div style={styles.row}>
                            <input type='text' 
                            style={styles.myInput} 
                            value={props.email} 
                            placeholder='Email'
                            readOnly 
                            />
                        </div>
                        </div>
                        <div style={styles.row}>
                            <label 
                                style={styles.label}>Username
                            </label>
                        <div style={styles.row}>
                            <input type='text' 
                            style={styles.myInput} 
                            value={props.username} 
                            placeholder='Username'
                            readOnly 
                            />
                        </div>
                        </div>
                    </div>                    
                    <div style={styles.row}>
                        <div style={styles.row}>
                            <label 
                                style={styles.label}>Password
                            </label>
                        <div style={styles.row}>
                            <input type='text' 
                            style={styles.myInput} 
                            value={props.password} 
                            placeholder='Password'
                            readOnly 
                            />
                        </div>
                        </div>
                        <div style={styles.row}>
                            <label 
                                style={styles.label}>Street
                            </label>
                        <div style={styles.row}>
                            <input type='text' 
                            style={styles.myInput} 
                            value={props.street} 
                            placeholder='Street'
                            readOnly 
                            />
                        </div>
                        </div>
                    </div>
                    <div style={styles.row}>
                        <div style={styles.row}>
                            <label 
                                style={styles.label}>City
                            </label>
                        <div style={styles.row}>
                            <input type='text' 
                            style={styles.myInput} 
                            value={props.city} 
                            placeholder='City'
                            readOnly 
                            />
                        </div>
                        </div>
                        <div style={styles.row}>
                            <label 
                                style={styles.label}>State
                            </label>
                        <div style={styles.row}>
                            <input type='text' 
                            style={styles.myInput} 
                            value={props.state} 
                            placeholder='State'
                            readOnly 
                            />
                        </div>
                        </div>
                    </div>
                    <div style={styles.row}>
                        <div style={styles.row}>
                            <label 
                                style={styles.label}>Zipcode
                            </label> 
                        <div style={styles.row}>
                            <input type='text' 
                            style={styles.myInput} 
                            value={props.zipcode} 
                            placeholder='Zipcode'
                            readOnly 
                            />
                        </div>
                        </div>
                        <div style={styles.row}>
                            <label style={styles.label}>
                                Phone</label> 
                        <div style={styles.row}>
                            <input type='text' 
                            style={styles.myInput} 
                            value={props.phone} 
                            placeholder='Phone'
                            readOnly 
                            />
                        </div>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    );
}
export default SettingsForm;

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        background: 'whitesmoke',
        // justifyContent: 'center',
        alignItems: 'flex-start',
        borderRadius: '1rem',
        boxShadow: '0 6px 4px 0 rgba(225, 175, 253, 1.0), 0 3px 10px 0 rgba(0, 0, 0, 0.19)',
        border: '1px solid gray',
        color: 'gray',
        paddingTop: '1%',
        // margin: '2%',
        // height: '45%'
        // marginBottom: '10rem'
    },

    profileHeader: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40%',
        // textSize: '32px',
        // marginLeft: '2rem'
    }, 
    avatar:{
        display: 'flex',
        flexDirection:'row',
        // alignContent: 'center',
        alignItems: 'center',
        // flexWrap: 'wrap',
        marginBottom: '2px',
        borderRadius:'50%',
        width: '200px',
        height: '200px',
        border: '1px solid gray',
        boxShadow: '0 6px 4px 0 rgba(225, 175, 253, 1.0), 0 3px 10px 0 rgba(0, 0, 0, 0.19)',
    },
    h1: {
        marginBottom: '8%',        
    },
    icon:{
        // display: inline-block,
        // width: '100px',
        // height: '100px',
        // padding: '5px',
        // border: '1px solid blue',
        // backgroundColor: 'yellow',

        // // display:'flex',  
        // flexDirection: 'row',  
        // alignItems:'center',
        // justifyContent:'center',        
        // width: '75px',
        // height: '75px',
        // padding: '8px',
        // margin: '16px', 
        // marginBottom: '2rem',   
        // fontSize: '2rem',
        // marginLeft: '1rem',
        // borderRadius: '6%',
        // color: 'rgba(225, 175, 253, 1.0)',
        // borderColor: 'rgba(225, 175, 253, 1.0)',
        // boxShadow: '0 2px 4px 0 rgba(225, 175, 253, 1.0), 0 3px 10px 0 rgba(0, 0, 0, 0.19)',
        // flexDirection:'row',
        // justifyContent: 'space-evenly',
        // alignItems:'center',
        // alignContent:'center',
    },

    label: {
        display: 'flex',
        color: 'gray',
        // display: 'inline-block',
        flexDirection: 'column',
        // marginBottom: '8px',
        // marginRight: '10px',
        // marginLeft: '40px',
        width: '150px',
        fontSize: '22px'
    },
    emaillabel:{
        marginRight: '7%'
    },
    emailcol:{
        display: 'flex',
        flexDirection: 'row',
        flex:2,
        width: '100',
        marginTop: '4%'
    },
    col1: {
        // display: 'flex',
        // justifyContent:'space-around',
        // margin: '2%',
        // paddingLeft: '35px',
        // display: 'block',
        // flexDirection:'row',
        // position: 'absolute',
        width: '100%'
    },
    col2:{
        // display: 'flex',
    },
    row:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'center',
        // alignItems: 'center',
        marginLeft: '5px',
        // maxWidth:''
        marginRight:'5px',
        
    },
    row1:{        
        padding: '5px',
        // marginBottom: '20%',
        fontSize: '2rem',
        color: 'gray',
        // display: 'flex',
        // flexDirection: 'row',
        // justifyContent:'center',
        // alignItems: 'center',
        // margin: '5%',
        // marginRight:'2px',
        
    },
    col:{
        // display:'flex',
        // flexDirection:'column',
        // flex:2,
        // padding: '5%'
    },
    myInput:{
        display: 'flex',

        // justifyContent: 'space-between',
        // flexDirection: 'row',
        // width: '50%',
        padding: '12px',
        marginBottom: '10%',
        // fontSize: '2rem',
        // color: 'gray',
        // padding: '5px',
        // marginBottom: '20%',
        fontSize: '1.3rem',
        color: 'gray',

        boxShadow: '0 2px 4px 0 rgba(225, 175, 253, 1.0), 0 3px 10px 0 rgba(0, 0, 0, 0.19)',
        // marginLeft:'10%',
        // marginRight:'10%'
        // boxSizing:'border-box',
        // borderRadius:'0.2rem',
        // border: '1px solid gray',
        // background:'#eeeeee'
    },

}