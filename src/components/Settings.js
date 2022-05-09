import React from "react";
import { useState, useEffect } from "react";
// import { useMediaQuery } from 'react-responsive';
import SettingsForm from '../components/SettingsForm';


function Settings() {
    // Declare States
    const [userData, setuserData] = useState(null);
    // async function Settings([param[, param[, ...param]]]) {
    //     statements
    // }
    // Parameters
    // name- Is the function's name.
    // param- Is the name of an argument to be passed to the function.
    // statements- The statements comprising the body of the function. The await mechanism may be

    // Return Value
    // A Promise which will be resolved with the value returned by the asyn function, or rejected
    // Prome- The Promise object represents the eventual completion (or failure) of an asynchronous 

    useEffect(() => {
        async function fetchAPI(){
            const response = await fetch('https://randomuser.me/api/?nat=us');

            const data = await response.json();
            const [user] = data.results;
            console.log(user);
            // const [user] =data.results.results.map(user => setuserData({
            //     firstName: `${user.name.first}`,
            //     lastName: `${user.name.last}`,
            //     username: `${user.login.username}`
            // }))
            // console.log(user)
            setuserData(user);
        }
        fetchAPI();
        }, []);

        return (
            <section style = {styles.container}>
                <h1>Settings</h1>
                    {userData && <SettingsForm
                        avatar={userData.picture.large}
                        fName={userData.name.first}
                        lName={userData.name.last}
                        street={userData.location.street.number}
                        city={userData.location.city} 
                        state={userData.location.state}
                        zipcode={userData.location.postcode}
                        email={userData.email}
                        phone={userData.phone}
                    />}
            </section>
        );
    }

export default Settings;

const styles = {
    container:{
    display:'flex',
    flexDirection:'column',
    alignItems: 'center'
    // height:'100vh',
    // width:'99vh',
    // paddingLeft:'2%'
    }
};