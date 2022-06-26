import React, { useState } from 'react'
import Toggle from '../components/toggle';
import InputButtonBlue from '../components/buttons/InputButtonBlue';

const Form = () => {
    const [toggled, setToggled] = useState(false);

  return (
    <>
    <div style= {styles.container}>
        <Toggle onChange={( event ) => setToggled(event.target.checked)} />
        <p>The switch is {toggled ? "on" : "off"}</p>
    </div>
    <div style= {styles.container}>
        <InputButtonBlue />
        <InputButtonBlue />
    </div> 
    
    <div style={styles.container}>
        <InputButtonBlue />
        <InputButtonBlue />    
    </div>
    </>
  )
}

export default Form

const styles = {
    container: {
        display: 'flex',
        // width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '10px',
        padding: '10px',
        gap: 35,
    },

    input: {
        display: 'flex',


    }
}
