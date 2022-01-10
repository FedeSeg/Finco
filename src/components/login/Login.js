import React, { useState } from 'react';
import logo from './assets/finerio-logo.png';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [ username, setUsername] = useState('');
    const [ password, setPassword] = useState('');
    Axios.defaults.withCredentials = true

    let navigate = useNavigate();
        
    const handleLogin = () => {
        Axios.post('https://api.finerio.mx/api/login', {
            username: username,
            password: password,
        }).then((response) => {
            
            if (!response) {
                navigate('/')     
            } else {
                sessionStorage.setItem ('token', response.data.access_token)
                Axios.get('https://api.finerio.mx/api/me', {headers: {
                    Authorization: 'Bearer ' + response.data.access_token
                }})
                .then((response) => {
                    sessionStorage.setItem ('user', JSON.stringify(response.data))
                })
                navigate('/movements')         
            }
        });
    }
    
    return (
        <div className='login-form'>
                 <img className='logo' src={logo} alt='logo finerio'/>
                 <h2>Iniciar Sesión</h2>
                 <input type='email' name='Email' onChange={(e) => {setUsername(e.target.value)}}></input>
                 <br></br>
                 <input type='password' name='Contraseña' onChange={(e) => {setPassword(e.target.value)}}></input>
                 <br></br>
                 <button onClick={handleLogin} >Entrar</button>
        </div>
    )
}

export default Login
