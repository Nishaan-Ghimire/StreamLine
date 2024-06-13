import React from 'react'
import Button from '../../components/button/Button'
import RegisterImage from '/register.svg';

import './register.scss'
const Register = () => {
    return (
        <div className='register'>
            <div className="image">
                <img src={RegisterImage} alt="" />
            </div>
            <div className='registerForm'>
                <div className="title">
                    <h1>Create new Account</h1>
                </div>
                <input type="text" name="fullName" id="registerForm" placeholder='Full Name' />
                <input type="text" name="username" id="username" placeholder='Username'/>
                <input type="email" name="email" id="email" placeholder='Email'/>
                <input type="number" name="phoneNo" id="phoneNo" placeholder='Phone no' />
                <input type="password" name="password" id="password" placeholder='Password' />
                <div className='dob'>
                <label htmlFor="dob" className='dobLabel'>Birth Date : </label>
                <input
                    type="date"
                    id="dob"
                    name="dob"
                    className='dobInput'
                />
               
                </div>
                <span>Already have a Account Login</span>
                <div className="registerBtn">
                    <Button name={"Register"}/>
                </div>

            </div>

        </div>
    )
}

export default Register