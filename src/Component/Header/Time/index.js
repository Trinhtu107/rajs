import React from 'react';

function Time() {
    return (
        <div>
            <h2>{new Date().toLocaleTimeString()}.</h2>
        </div>
    );
}
export default Time;