import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <div className='login'>
            <span className="registerTitle">Register</span>
            <form className="registerForm">
                <label>Username</label>
                <input className='registerInput' type='text' placeholder='Enter your Username...'/>
                <label>Email</label>
                <input className='registerInput' type='text' placeholder='Enter your email...'/>
                <label>Password</label>
                <input className='registerInput' type='password' placeholder='Enter your password...'/>
                <button className="registerButton">
                <Link to='/register'>Register</Link>
                </button>
            </form>
        </div> 
    )
}
