import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async event => {
        event.preventDefault();
    try {
        const response = await axios.post('/login', {}, {
            auth:{
            username: username,
            password: password
            }
        });
    }
    catch(error) {
        console.error(error);
    }
    };
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Correo Electrónico:
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
            <button type='submit'>Iniciar sesión</button>
            <p>
                ¿No tienes una cuenta?{''}
                <Link to='/register'>Registrate aquí</Link>
            </p>
        </form>
    );
}