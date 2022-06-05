import React from 'react';
import ButtonHover from '../buttons/ButtonHover';

const PracticeForm = () => {
    return (
        <div>
            <input type="text" placeholder="Enter Text..." />
            <br />
            <br />
            <input type="text" placeholder="Enter Text..." />
            <br />
            <br />
            <ButtonHover type="submit" btnText="Submit"/>
        </div> 
    );
}
export default PracticeForm;