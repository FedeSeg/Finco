import React from 'react'
import logo from '../login/assets/finerio-logo.png';

function User() {
    const user = JSON.parse(sessionStorage.getItem('user'));
    return (
        <div className='userHeader'>
            <img className='logo' src={logo} alt='logo finerio'/>
            <h1 className='email'>{user.email}</h1>
        </div>
    )
}

export default User