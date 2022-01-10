import React, { useState, useEffect } from 'react'
import logo from '../login/assets/finerio-logo.png';


function User() {
    const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('user')))
    
    return (
        <div className='userHeader'>
            <img className='logo' src={logo} alt='logo finerio'/>
            {user ? <h1 className='email'>{user.email}</h1> : <h1 className='email'>loading...</h1>}
           
        </div>
    )
}

export default User