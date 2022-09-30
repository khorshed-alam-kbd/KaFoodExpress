
import React from 'react';
import './OrderDetails.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// toast.configure()

const OrderDetails = (props) => {

    const notify = () => {
        toast('Your Food Order Is Completed, Thank You !!')
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
                <p className='fw-semibold'>Order Time</p>
                <p>{totalTime} minutes</p>
            </div>
            <div className='order-details'>
                <p className='fw-semibold'>Break Time</p>
                <p>{breakTime} minutes</p>
            </div>
            <button className='cart-btn mt-5 mb-5' onClick={notify}> Order Completed</button>
            <ToastContainer />
            <button className='cart-btn mt-5 mb-5'> FAQ</button>
        </div>
    );
};

export default OrderDetails;