
import React from 'react';
import './OrderDetails.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const OrderDetails = (props) => {

    const notify = () => {
        toast('  Food Order is Completed, Thank You')
    }

    const { cart, breakTime } = props
    // console.log(cart.food);

    let totalTime = 0;
    for (const food of cart) {
        totalTime = totalTime + food.timeNeed;
    }

    return (
        <div className='mt-5'>
            <h5 >Order Details</h5>
            <div className='order-details'>
                <p className='fw-semibold mb-0'>Order Time</p>
                <p className='mb-0'>{totalTime} minutes</p>
            </div>
            <div className='order-details'>
                <p className='fw-semibold mb-0'>Break Time</p>
                <p className='mb-0'>{breakTime} minutes</p>
            </div>
            <button className='cart-btn mt-5 mb-5' onClick={notify}> Order Completed</button>
            <ToastContainer />

        </div>
    );
};

export default OrderDetails;