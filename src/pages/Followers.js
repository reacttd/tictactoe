import React from "react";

function Followers() {
    const [pageTitle] = ['Followers'];
    return (
        <section style = {styles.container}>
            <div style={styles.pgTitle}>
                <h1>{pageTitle}</h1>
                <p>Some stuff here</p>
                <p>Some stuff here</p>
            </div>
        </section>
    );
}

export default Followers;

const styles = {
    container:{
        display:'flex',
        flexDirection:'column',
        height:'100vh',
        width:'99vh',
        paddingLeft:'2%'
    },
    pgTitle: {
        fontSize: '2rem',
    }
};