import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate  } from 'react-router-dom';



export function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    const handleSubmit = async event => {
        event.preventDefault();
        navigate('/');
    try {
        const auth = {username, password};
        const response = await axios.post('/register', { auth });
    }
    catch(error) {
        console.error(error);
    }
    };
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Usuario:
                <input
                type='username'
                value={username}
                onChange={event => setUsername(event.target.value)}
                />
            </label>
            <label>
                Contraseña:
                <input
                type='password'
                value={password}
                onChange={event => setPassword(event.target.value)}
                />
            </label>
            <button type='submit'>Registrarse</button>
        </form>
    );
}