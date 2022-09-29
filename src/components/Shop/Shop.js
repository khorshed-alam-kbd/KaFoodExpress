
import Food from '../Food/Food';
import UserInfo from '../UserInfo/UserInfo';
import './Shop.css'

const Shop = () => {
    return (
        <div className="row">
            <div className="col-9 food-section">
                <div className='m-4'>
                    <Food></Food>
                </div>
            </div>
            <div className="col-3 cart-section">
                <UserInfo></UserInfo>
            </div>
        </div >
    );
};

export default Shop;