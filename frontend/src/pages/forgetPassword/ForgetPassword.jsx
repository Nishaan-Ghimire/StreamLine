import React from 'react'
import Button from '../../components/button/Button'
import RegisterImage from '/register.svg';
import './forgetPassword.scss'
const OTP = () => {
  return (
    <div>
       <div className='forgetPassword'>
       <div className="image">
                <img src={RegisterImage} alt="" />
            </div>
            <div className='forgetPasswordForm'>
                <div className="title">
                    <h1>Forget Password</h1>
                    <span>Enter you email for getting password reset link</span>
                </div>
             
               
                <input type="email" name="email" id="email" placeholder='Email'/>
                <span>Don't Have account Register</span>
                <div className="registerBtn">
                    <Button name={"Submit"}/>
                </div>

            </div>

    </div>
    </div>
  )
}

export default OTP
