// Tisha Di Fresco
// 5-7-22
// Login component

import React from 'react';

function FlexTwoCol () {
    return (
        <div className='wrapper'>
            <div className='formRow'>
                <div className='field'>
                    <label for = "field1">
                        Field1
                    </label>
                    <input style={styles.field1}
                        type='text'
                    />                        
                    <div class="field">
                        <label for="field2">
                            Field 2 longer
                        </label>
                        <input id="field2" type="text" 
                        />
                    </div>
                    
                    <div class="formRow">
                        <div class="field">
                            <label for="field3">
                                Field 3 label
                            </label>
                            <input id="field3" type="text" 
                            />
                        </div>
                        <div class="field">
                            <label for="field4">
                                Fie 4
                            </label>
                            <input id="field4" type="text" 
                            />
                        </div>
                    </div>
                </div>                    
            </div>
        </div>
    )
}