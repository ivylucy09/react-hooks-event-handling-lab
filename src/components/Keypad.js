// Code Keypad Component Here
import React from 'react';


function Keypad (){
    function automatedVoice(event) {
        console.log('Entering password...');
        //console.log(`${event.target.name}: ${event.target.value}`);
    }
    return (
        <div>
            <input
            type="password"
            onChange={automatedVoice}
            placeholder="Enter password"
            />
           {/* <select name="filter" onChange={automatedVoice}>;

            <option value="all">select a filter...</option>
                <option value="completed">Completed</option>
                <option value="incomplete">Incomplete</option>
            </select> */}
        </div>
    );
}

export default Keypad;