import React from 'react';
import UserPhoto from '../../Image/khorshed-photo.jpg';
import BreakTime from '../BreakTime/BreakTime';
import './UserInfo.css'

const UserInfo = () => {
    return (
        <div className='User-Profile'>
            <div className='User-Info'>
                <img src={UserPhoto} alt="" />
                <div>
                    <h6 className='mb-0'>MD. KHORSHED ALAM</h6>
                    <p><small>Dhaka, Bangladesh</small></p>
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
        </div>
    );
};

export default UserInfo;