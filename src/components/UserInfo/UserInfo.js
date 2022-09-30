import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot as location } from '@fortawesome/free-solid-svg-icons'
import UserPhoto from '../../Image/khorshed-photo.jpg';
import BreakTime from '../BreakTime/BreakTime';
import OrderDetails from '../OrderDetails/OrderDetails';
import './UserInfo.css'
import QA from '../QA/QA';

const UserInfo = (props) => {
    const { cart } = props;
    const [breakTime, SetBreakTime] = useState(0);

    const handleBreakTime = (time) => {
        SetBreakTime(time);
        // console.log(time, "clicked")
    }
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
            <BreakTime handleBreakTime={handleBreakTime} ></BreakTime>
            <OrderDetails cart={cart} breakTime={breakTime}></OrderDetails>
            <QA></QA>
        </div>
    );
};

export default UserInfo;