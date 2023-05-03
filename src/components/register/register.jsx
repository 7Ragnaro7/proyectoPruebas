import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';



function RegisterForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleSubmit = async event => {
        event.preventDefault();
    try {
        const auth = {username, password};
        const response = await axios.post('/register', { auth });
        history.push('/login');
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

export default RegisterForm;