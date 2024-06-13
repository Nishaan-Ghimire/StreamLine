import React from 'react'
import Button from '../../components/button/Button'
import RegisterImage from '/register.svg';
import './login.scss'
const Login = () => {
  return (
    <div className='login'>
       <div className="image">
                <img src={RegisterImage} alt="" />
            </div>
            <div className='loginForm'>
                <div className="title">
                    <h1>Welcome Back</h1>
                </div>
             
               
                <input type="email" name="email" id="email" placeholder='Email'/>
               <input type="password" name="password" id="password" placeholder='password' />
                <span>Don't Have account Register</span>
                <div className="registerBtn">
                    <Button name={"Login"}/>
                </div>

            </div>

    </div>
  )
}

export default Login
