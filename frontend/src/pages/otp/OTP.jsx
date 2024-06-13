import React from 'react'
import Button from '../../components/button/Button'
import RegisterImage from '/register.svg';
import './otp.scss'
const OTP = () => {
  return (
    <div>
       <div className='otp'>
       <div className="image">
                <img src={RegisterImage} alt="" />
            </div>
            <div className='otpForm'>
                <div className="title">
                    <h1>Verify Account</h1>
                </div>
             
               
                <input type="number" name="otp" id="otp" placeholder='OTP'/>
                <span>Don't Have account Register</span>
                <div className="registerBtn">
                    <Button name={"Verify"}/>
                </div>

            </div>

    </div>
    </div>
  )
}

export default OTP
