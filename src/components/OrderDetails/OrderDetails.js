import React from 'react';
import './OrderDetails.css'
const OrderDetails = (props) => {
    const { cart } = props;
    // console.log(cart.food);

    let totalTime = 0;
    for (const food of cart) {
        totalTime = totalTime + food.timeNeed;
    }

    return (
        <div className='mt-5'>
            <h5 >Order Details</h5>
            <div className='order-details'>
                <p className='fw-semibold'>Order Time</p>
                <p>{totalTime} minutes</p>
            </div>
            <div className='order-details'>
                <p className='fw-semibold'>Break Time</p>
                <p>minutes</p>
            </div>
            <button className='cart-btn mt-5 mb-5'> Order Completed</button>
        </div>
    );
};

export default OrderDetails;