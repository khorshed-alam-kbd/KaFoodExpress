
import { useState } from 'react';
import Food from '../Food/Food';
import UserInfo from '../UserInfo/UserInfo';
import './Shop.css'

const Shop = () => {
    const [cart, setCart] = useState([]);

    const handleAddToCart = (foods) => {
        const newCart = [...cart, foods]
        setCart(newCart);
    }
    return (
        <div className="row">
            <div className="col-9 food-section">
                <div className='m-4'>
                    <Food handleAddToCart={handleAddToCart}></Food>
                </div>
            </div>
            <div className="col-3 cart-section">
                <UserInfo cart={cart}></UserInfo>
            </div>
        </div >
    );
};

export default Shop;