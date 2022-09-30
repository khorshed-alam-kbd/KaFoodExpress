import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot as location } from '@fortawesome/free-solid-svg-icons'
import UserPhoto from '../../Image/khorshed-photo.jpg';
import BreakTime from '../BreakTime/BreakTime';
import OrderDetails from '../OrderDetails/OrderDetails';
import './UserInfo.css'

const UserInfo = (props) => {
    const { cart } = props;
    return (
        <div className='User-Profile'>
            <div className='User-Info'>
                <img src={UserPhoto} alt="" />
                <div>
                    <h6 className='mb-0'>MD. KHORSHED ALAM</h6>
                    <p> <small> <FontAwesomeIcon icon={location}></FontAwesomeIcon>  Dhaka, Bangladesh</small></p>
                </div>
            </div>
            <div className='User-Details'>
                <div className='d-flex justify-content-around text-small '>
                    <h4>78<small> kg <br />Weight</small></h4>
                    <h4>5.10 <small><br />Height</small></h4>
                    <h4>22<small>yrs <br />Age</small></h4>
                </div>
            </div>
            <BreakTime></BreakTime>
            <OrderDetails cart={cart}></OrderDetails>
        </div>
    );
};

export default UserInfo;