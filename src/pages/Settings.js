import { useState, useEffect } from "react";
// import { useMediaQuery } from 'react-responsive';
import SettingsForm from '../components/SettingsForm';
// import UserForm from "../components/UserForm";


function Settings() {
    // Declare States
    // const [pageTitle] = ['Settings'];
    const [userData, setuserData] = useState(null);

    useEffect(() => {
        async function fetchAPI(){
            const response = await fetch('https://randomuser.me/api/?gender=female/?nat=us');
            const data = await response.json();
            const [user] = data.results;
            console.log(user);
            setuserData(user);
        }
        fetchAPI();
        }, []);

        return (
            <section style = {styles.container}>
                <div style={styles.pageTitle}>
                    <h1>Settings</h1>
                </div>
                    {userData && <SettingsForm
                        avatar={userData.picture.large}
                        fName={userData.name.first}
                        lName={userData.name.last}
                        street={userData.location.street.number}
                        city={userData.location.city} 
                        state={userData.location.state}
                        zipcode={userData.location.postcode}
                        username={userData.login.username}
                        password={userData.login.password}
                        email={userData.email}
                        phone={userData.phone}
                    />}
            </section>
        );
    }

export default Settings;

const styles = {
    container:{
        display: 'flex', // parent
        // background:'whitesmoke',
        // marginBotton: '2%',  
        marginLeft:'250px',      
        fontSize: '1.5rem',
    // display:'flex',
    flexDirection:'column',
    alignContent: 'center',
    // alignItems:'center',
    // justifyContent: 'space-evenly',
    // paddingTop: '2%',
    height:'100vh',
    // width:'99vh',
    // paddingLeft:'2%'
    },
    pageTitle:{
        fontSize:'2rem'


        // display:'inline-block',
        // alignItems:'start'

        // display: 'flex',
        // flexDirection:'row-reverse',
        // alignItems: 'row-start',
        // justifyContent: 'row-start'
        
        
    }
};
