import React, { useState } from 'react'
import Toggle from '../components/toggle';

const Form = () => {
    const [toggled, setToggled] = useState(false);

  return (
    <div>
        <Toggle onChange={( event ) => setToggled(event.target.checked)} />
        <p>The switch is {toggled ? "on" : "off"}</p>
    </div>
  )
}

export default Form

