import React from 'react';
import './FoodDetails.css'

const FoodDetails = (props) => {
    const { name, img, price, timeNeed } = props.food;
    return (
        <div className='food-details'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='food-info'>
                <h4>{name}</h4>
                <h6><small>Price:</small>  Tk {price}</h6>
                <h6><small>Time:</small>  {timeNeed} minutes</h6>
            </div>
            <button className='cart-btn'> Add to Cart</button>
        </div>
    );
};

export default FoodDetails;