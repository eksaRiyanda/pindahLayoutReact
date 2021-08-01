import React from 'react'
import { Link } from 'react-router-dom'


export default function About() {
    return (
        <header>
            <Link to='/register'>Pindah ke Register</Link>
            <Link to='/login'>Pindah ke Login</Link>
        </header>
    )
}
