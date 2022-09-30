
import { useState } from 'react';
import Food from '../Food/Food';
import QA from '../QA/QA';
import UserInfo from '../UserInfo/UserInfo';
import './Shop.css'

const Shop = () => {
    const [cart, setCart] = useState([]);

    const handleAddToCart = (foods) => {
        const newCart = [...cart, foods]
        setCart(newCart);
    }
    return (
        <div className="row m-0">
            <div className="col-12 col-md-9 food-section">
                <div className='m-4'>
                    <Food handleAddToCart={handleAddToCart}></Food>
                    <QA></QA>
                </div>
            </div>
            <div className="col-12 col-md-3 cart-section">
                <UserInfo cart={cart}></UserInfo>
            </div>
        </div >
    );
};

export default Shop;