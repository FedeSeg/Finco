import React, { useState, useEffect } from 'react'
import logo from '../login/assets/finerio-logo.png';
import './assets/User.css'

function User() {
    const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('user')))
    
    return (
        <div className='userHeader'>
            <img className='userLogo' src={logo} alt='logo finerio'/>
            {user ? <p className='userEmail'>{user.email}</p> : <h1 className='userEmail'>loading...</h1>}
           
        </div>
    )
}

export default User