
import React, { useEffect, useState } from 'react';
import FoodDetails from '../FoodDetails/FoodDetails';
import './Food.css'

const Food = (props) => {

    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch('food.json')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, []);

    return (
        <div >
            <h1 className='mt-5 mb-4 '>KA-FOOD-EXPRESS</h1>
            <h4 className='mb-3'> Select Your Food</h4>
            <div className='foods-container'>
                {
                    foods.map(food => <FoodDetails
                        key={food.id}
                        food={food}
                        handleAddToCart={props.handleAddToCart}
                    ></FoodDetails>)
                }

            </div>
        </div >
    );
};

export default Food;