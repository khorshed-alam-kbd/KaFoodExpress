import React from 'react';
import OrderDetails from '../OrderDetails/OrderDetails';
import './BreakTime.css'
const BreakTime = () => {
    return (
        <div>
            <h5 className='mt-5'>Take a Break</h5>
            <div className='Break-details'>
                <p>10m</p>
                <p>15m</p>
                <p>20m</p>
                <p>25m</p>
                <p>30m</p>
            </div>
            <OrderDetails></OrderDetails>
        </div>
    );
};

export default BreakTime;