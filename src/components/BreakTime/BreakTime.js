import React from 'react';
import './BreakTime.css'
const BreakTime = (props) => {
    const { handleBreakTime } = props
    return (
        <div>
            <h5 className='mt-5'>Take a Break</h5>
            <div className='Break-details'>
                <p onClick={() => handleBreakTime(10)}>10m</p>
                <p onClick={() => handleBreakTime(15)}>15m</p>
                <p onClick={() => handleBreakTime(20)}>20m</p>
                <p onClick={() => handleBreakTime(25)}>25m</p>
                <p onClick={() => handleBreakTime(30)}>30m</p>

            </div>
        </div>
    );
};

export default BreakTime;