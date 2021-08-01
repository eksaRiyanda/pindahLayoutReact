import React from 'react'
import './register.css'
import { Link } from 'react-router-dom'

export default function Register() {
    return (
        <div className='register'>
            <span className="loginTitle">Login</span>
            <form className="loginForm">
                <label>Email</label>
                <input className='loginInput' type='text' placeholder='Enter your email...'/>
                <label>Password</label>
                <input className='loginInput' type='password' placeholder='Enter your password...'/>
                <button className="loginButton">
                <Link to='/login'>Login</Link>
                </button>
            </form>
        </div>
    )
}
