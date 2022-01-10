import React, { useState } from 'react';
import logo from './assets/finerio-logo.png';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './assets/Login.css';

function Login() {
    const [ username, setUsername] = useState('');
    const [ password, setPassword] = useState('');
    Axios.defaults.withCredentials = true

    let navigate = useNavigate();
        
    const handleLogin = async () => {
        const login_response = await Axios.post('https://api.finerio.mx/api/login', {
            username: username,
            password: password,
        });
        sessionStorage.setItem ('token', login_response.data.access_token)

        const me_response = await Axios.get('https://api.finerio.mx/api/me', {headers: {
            Authorization: 'Bearer ' + login_response.data.access_token
        }})
        sessionStorage.setItem ('user', JSON.stringify(me_response.data))

        navigate('/movements')
    }
    
    return (
        <div className='login-form'>
                 <img className='logo' src={logo} alt='logo finerio'/>
                 <h2 className='titulo-inicio'>Iniciar Sesión</h2>
                 <input className='input' type='email' name='Email' placeholder='Email' onChange={(e) => {setUsername(e.target.value)}}></input>
                 <br></br>
                 <input className='input' type='password' name='Contraseña' placeholder='Password' onChange={(e) => {setPassword(e.target.value)}}></input>
                 <br></br>
                 <button className='entrar' onClick={handleLogin} >Entrar</button>
        </div>
    )
}

export default Login
